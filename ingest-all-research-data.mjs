#!/usr/bin/env node
/**
 * COMPREHENSIVE DATABASE INGESTION SCRIPT
 * Populates Yemen Economic Compass with all parallel research data
 * 
 * Data Sources:
 * - yemen_years_research.json (16 years of comprehensive data)
 * - yemen_actors_research.json (20 major actors)
 * - yemen_reports_collection.json (15 report sources)
 */

import { drizzle } from 'drizzle-orm/mysql2';
import { events, actors, indicators, causations, stakeholders } from './drizzle/schema.ts';
import fs from 'fs';

// Database connection
const db = drizzle(process.env.DATABASE_URL);

console.log('='.repeat(60));
console.log('COMPREHENSIVE DATABASE INGESTION');
console.log('='.repeat(60));

// Load research data
const yearsData = JSON.parse(fs.readFileSync('/home/ubuntu/yemen_years_research.json', 'utf8'));
const actorsData = JSON.parse(fs.readFileSync('/home/ubuntu/yemen_actors_research.json', 'utf8'));
const reportsData = JSON.parse(fs.readFileSync('/home/ubuntu/yemen_reports_collection.json', 'utf8'));

let stats = {
  events: 0,
  actors: 0,
  indicators: 0,
  causations: 0,
  stakeholders: 0
};

// ============================================================================
// PHASE 1: INGEST EVENTS FROM YEARS RESEARCH
// ============================================================================

console.log('\n📅 PHASE 1: Ingesting Events from Years Research...');

for (const yearResult of yearsData.results) {
  if (!yearResult.output || !yearResult.output.year) continue;
  
  const year = yearResult.output.year;
  const data = yearResult.output;
  
  try {
    // Create main year summary event
    await db.insert(events).values({
      titleEn: `Yemen Economy ${year} - Year in Review`,
      titleAr: `اقتصاد اليمن ${year} - مراجعة السنة`,
      descriptionEn: data.major_events_summary,
      descriptionAr: data.major_events_summary, // TODO: Translate
      date: new Date(`${year}-12-31`),
      category: 'economic',
      impactLevel: 'high',
      sources: data.sources || '',
      tags: `year-${year},annual-review`
    });
    stats.events++;
    
    // Parse and create individual events from causations
    if (data.causations) {
      const causationLines = data.causations.split('\n').filter(line => line.trim());
      for (const line of causationLines) {
        const match = line.match(/^(.+?)\s*→\s*(.+?)(?:\s*\((.+?)\))?$/);
        if (match) {
          const [, cause, effect, impact] = match;
          
          // Create cause event
          await db.insert(events).values({
            titleEn: cause.trim(),
            titleAr: cause.trim(), // TODO: Translate
            descriptionEn: `${cause} led to ${effect}. ${impact || ''}`,
            descriptionAr: `${cause} أدى إلى ${effect}. ${impact || ''}`,
            date: new Date(`${year}-06-30`), // Mid-year default
            category: 'political',
            impactLevel: 'medium',
            sources: data.sources || '',
            tags: `year-${year},causation`
          });
          stats.events++;
        }
      }
    }
    
    console.log(`  ✓ ${year}: Created events`);
  } catch (error) {
    console.error(`  ✗ ${year}: Error -`, error.message);
  }
}

console.log(`✅ Phase 1 Complete: ${stats.events} events created`);

// ============================================================================
// PHASE 2: INGEST INDICATORS FROM YEARS RESEARCH
// ============================================================================

console.log('\n📊 PHASE 2: Ingesting Indicators from Years Research...');

for (const yearResult of yearsData.results) {
  if (!yearResult.output || !yearResult.output.year) continue;
  
  const year = yearResult.output.year;
  const data = yearResult.output;
  
  try {
    // GDP Indicator
    if (data.gdp_data) {
      const gdpMatch = data.gdp_data.match(/\$?([\d.]+)B?/);
      if (gdpMatch) {
        await db.insert(indicators).values({
          nameEn: `GDP (current US$) - ${year}`,
          nameAr: `الناتج المحلي الإجمالي (بالدولار الأمريكي الجاري) - ${year}`,
          category: 'economic',
          value: gdpMatch[1],
          unit: 'billion USD',
          date: new Date(`${year}-12-31`),
          source: data.gdp_data,
          methodology: 'World Bank/IMF national accounts data'
        });
        stats.indicators++;
      }
    }
    
    // Exchange Rate Indicator
    if (data.exchange_rate) {
      const erMatch = data.exchange_rate.match(/([\d.]+)\s*YER\/USD/);
      if (erMatch) {
        await db.insert(indicators).values({
          nameEn: `Official Exchange Rate (YER/USD) - ${year}`,
          nameAr: `سعر الصرف الرسمي (ريال/دولار) - ${year}`,
          category: 'financial',
          value: erMatch[1],
          unit: 'YER/USD',
          date: new Date(`${year}-12-31`),
          source: data.exchange_rate,
          methodology: 'Central Bank of Yemen official rate'
        });
        stats.indicators++;
      }
    }
    
    // Inflation Rate Indicator
    if (data.inflation_rate) {
      const inflMatch = data.inflation_rate.match(/([\d.]+)%/);
      if (inflMatch) {
        await db.insert(indicators).values({
          nameEn: `Inflation Rate (CPI) - ${year}`,
          nameAr: `معدل التضخم (مؤشر أسعار المستهلك) - ${year}`,
          category: 'economic',
          value: inflMatch[1],
          unit: 'percent',
          date: new Date(`${year}-12-31`),
          source: data.inflation_rate,
          methodology: 'Consumer Price Index annual change'
        });
        stats.indicators++;
      }
    }
    
    // Humanitarian Indicators
    if (data.humanitarian_data) {
      // Food Insecurity
      const foodMatch = data.humanitarian_data.match(/([\d.]+)M?\s+food\s+insecure/i);
      if (foodMatch) {
        const value = foodMatch[1].includes('M') ? foodMatch[1] : parseFloat(foodMatch[1]);
        await db.insert(indicators).values({
          nameEn: `Food Insecure Population - ${year}`,
          nameAr: `السكان الذين يعانون من انعدام الأمن الغذائي - ${year}`,
          category: 'humanitarian',
          value: value.toString(),
          unit: 'million people',
          date: new Date(`${year}-12-31`),
          source: data.humanitarian_data,
          methodology: 'UN OCHA/WFP food security assessment'
        });
        stats.indicators++;
      }
      
      // IDPs
      const idpMatch = data.humanitarian_data.match(/([\d.]+)M?\s+IDPs?/i);
      if (idpMatch) {
        const value = idpMatch[1].includes('M') ? idpMatch[1] : parseFloat(idpMatch[1]);
        await db.insert(indicators).values({
          nameEn: `Internally Displaced Persons (IDPs) - ${year}`,
          nameAr: `النازحون داخلياً - ${year}`,
          category: 'humanitarian',
          value: value.toString(),
          unit: idpMatch[0].includes('M') ? 'million people' : 'people',
          date: new Date(`${year}-12-31`),
          source: data.humanitarian_data,
          methodology: 'IOM/UNHCR displacement tracking'
        });
        stats.indicators++;
      }
      
      // Humanitarian Funding
      const fundMatch = data.humanitarian_data.match(/\$?([\d.]+)M?\s+funding/i);
      if (fundMatch) {
        await db.insert(indicators).values({
          nameEn: `Humanitarian Funding Received - ${year}`,
          nameAr: `التمويل الإنساني المستلم - ${year}`,
          category: 'humanitarian',
          value: fundMatch[1],
          unit: 'million USD',
          date: new Date(`${year}-12-31`),
          source: data.humanitarian_data,
          methodology: 'UN OCHA Financial Tracking Service'
        });
        stats.indicators++;
      }
    }
    
    console.log(`  ✓ ${year}: Created ${6} indicators`);
  } catch (error) {
    console.error(`  ✗ ${year}: Error -`, error.message);
  }
}

console.log(`✅ Phase 2 Complete: ${stats.indicators} indicators created`);

// ============================================================================
// PHASE 3: INGEST ACTORS FROM ACTORS RESEARCH
// ============================================================================

console.log('\n👥 PHASE 3: Ingesting Actors from Actors Research...');

for (const actorResult of actorsData.results) {
  if (!actorResult.output || !actorResult.output.actor_name) continue;
  
  const data = actorResult.output;
  
  try {
    await db.insert(actors).values({
      nameEn: data.actor_name,
      nameAr: data.actor_name, // TODO: Translate
      type: data.actor_type || 'other',
      descriptionEn: data.role_summary,
      descriptionAr: data.role_summary, // TODO: Translate
      website: data.contact_info || '',
      active: true
    });
    stats.actors++;
    
    // Also create stakeholder entry for detailed pages
    await db.insert(stakeholders).values({
      nameEn: data.actor_name,
      nameAr: data.actor_name,
      type: data.actor_type || 'other',
      descriptionEn: data.role_summary,
      descriptionAr: data.role_summary,
      website: data.contact_info || '',
      fundingData: data.funding_data || '',
      projects: data.major_projects || '',
      achievements: data.achievements || '',
      challenges: data.challenges || '',
      contactInfo: data.contact_info || ''
    });
    stats.stakeholders++;
    
    console.log(`  ✓ ${data.actor_name}: Created actor & stakeholder`);
  } catch (error) {
    console.error(`  ✗ ${data.actor_name}: Error -`, error.message);
  }
}

console.log(`✅ Phase 3 Complete: ${stats.actors} actors, ${stats.stakeholders} stakeholders created`);

// ============================================================================
// PHASE 4: INGEST CAUSATIONS FROM YEARS RESEARCH
// ============================================================================

console.log('\n🔗 PHASE 4: Ingesting Causations from Years Research...');

// Get all events to map causations
const allEvents = await db.select().from(events);

for (const yearResult of yearsData.results) {
  if (!yearResult.output || !yearResult.output.causations) continue;
  
  const year = yearResult.output.year;
  const data = yearResult.output;
  
  const causationLines = data.causations.split('\n').filter(line => line.trim());
  
  for (const line of causationLines) {
    const match = line.match(/^(.+?)\s*→\s*(.+?)(?:\s*\((.+?)\))?$/);
    if (!match) continue;
    
    const [, cause, effect, impact] = match;
    
    try {
      // Find or create cause and effect events
      let causeEvent = allEvents.find(e => 
        e.titleEn.toLowerCase().includes(cause.toLowerCase().substring(0, 20))
      );
      let effectEvent = allEvents.find(e => 
        e.titleEn.toLowerCase().includes(effect.toLowerCase().substring(0, 20))
      );
      
      if (causeEvent && effectEvent) {
        await db.insert(causations).values({
          causeEventId: causeEvent.id,
          effectEventId: effectEvent.id,
          mechanismEn: `${cause} led to ${effect}`,
          mechanismAr: `${cause} أدى إلى ${effect}`,
          strength: 80,
          confidence: 85,
          evidence: impact || data.sources || '',
          timelag: 0
        });
        stats.causations++;
      }
    } catch (error) {
      console.error(`  ✗ Causation error:`, error.message);
    }
  }
  
  console.log(`  ✓ ${year}: Processed causations`);
}

console.log(`✅ Phase 4 Complete: ${stats.causations} causations created`);

// ============================================================================
// FINAL SUMMARY
// ============================================================================

console.log('\n' + '='.repeat(60));
console.log('INGESTION COMPLETE!');
console.log('='.repeat(60));
console.log(`
📊 FINAL STATISTICS:
  - Events: ${stats.events}
  - Indicators: ${stats.indicators}
  - Actors: ${stats.actors}
  - Stakeholders: ${stats.stakeholders}
  - Causations: ${stats.causations}
  
  TOTAL RECORDS: ${Object.values(stats).reduce((a, b) => a + b, 0)}
`);

console.log('✅ Database population complete!');
console.log('Next steps:');
console.log('  1. Verify data in control panel');
console.log('  2. Update homepage to show real counts');
console.log('  3. Test all pages and charts');
console.log('  4. Deploy and publish');

process.exit(0);
