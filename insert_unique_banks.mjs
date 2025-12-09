import { readFileSync } from 'fs';
import { getDb } from './server/db.js';
import { banks } from './drizzle/schema.js';

const research = JSON.parse(readFileSync('/home/ubuntu/yemen_banks_deep_research.json', 'utf-8'));

async function insertBanks() {
  const db = await getDb();
  
  console.log(`Processing ${research.results.length} banks...`);
  
  const seen = new Set();
  let inserted = 0;
  let skipped = 0;
  
  for (const result of research.results) {
    if (result.error) {
      console.log(`Skipping ${result.input} due to error`);
      skipped++;
      continue;
    }
    
    const data = result.output;
    
    // Skip duplicates based on English name
    if (seen.has(data.bank_name_en)) {
      console.log(`Skipping duplicate: ${data.bank_name_en}`);
      skipped++;
      continue;
    }
    seen.add(data.bank_name_en);
    
    // Parse assets (e.g., "$2.24B (2014)" -> 2240, "2014")
    let assetsValue = null;
    let assetsYear = null;
    if (data.assets_usd_millions && data.assets_usd_millions !== 'Data not available') {
      const match = data.assets_usd_millions.match(/\$?([\d,]+(?:\.\d+)?)(M|B)?\s*\((\d{4})\)/);
      if (match) {
        const num = parseFloat(match[1].replace(/,/g, ''));
        const unit = match[2];
        assetsValue = unit === 'B' ? Math.round(num * 1000) : Math.round(num);
        assetsYear = match[3];
      }
    }
    
    // Parse branch numbers
    const branches2014 = data.branches_2014 === 'Unknown' ? null : parseInt(data.branches_2014) || null;
    const branches2025 = data.branches_2025 === 'Unknown' ? null : parseInt(data.branches_2025) || null;
    
    // Determine status based on operational status and sanctions
    let status = 'stable';
    if (data.operational_status_2025.includes('Closed') || data.operational_status_2025.includes('Unknown')) {
      status = 'inactive';
    } else if (data.sanctions_status.toLowerCase().includes('sanctioned')) {
      status = 'critical';
    } else if (data.operational_status_2025.includes('Partially') || data.operational_status_2025.includes('Split')) {
      status = 'struggling';
    }
    
    // Map bank_type to schema enum
    let typeEnum = data.bank_type.toLowerCase();
    if (typeEnum === 'islamic microfinance') typeEnum = 'microfinance';
    if (!['commercial', 'islamic', 'microfinance', 'specialized', 'exchange', 'development'].includes(typeEnum)) {
      typeEnum = 'specialized';
    }
    
    const bankData = {
      nameEn: data.bank_name_en,
      nameAr: data.bank_name_ar || data.bank_name_en,
      type: typeEnum,
      status: status,
      foundingYear: data.founding_year === 'Unknown' ? null : data.founding_year,
      ownership: data.ownership,
      sanctionsStatus: data.sanctions_status,
      operationalStatus2025: data.operational_status_2025,
      branches2014: branches2014,
      branches2025: branches2025,
      assets: assetsValue,
      assetsYear: assetsYear,
      crisisImpact: data.crisis_impact,
      compellingNarrative: data.compelling_narrative,
      topSources: data.top_sources,
      dataConfidence: data.data_confidence,
    };
    
    try {
      await db.insert(banks).values(bankData);
      console.log(`✓ Inserted: ${data.bank_name_en}`);
      inserted++;
    } catch (error) {
      console.error(`✗ Failed to insert ${data.bank_name_en}:`, error.message);
    }
  }
  
  console.log(`\nDone! Inserted: ${inserted}, Skipped: ${skipped}`);
}

insertBanks().catch(console.error);
