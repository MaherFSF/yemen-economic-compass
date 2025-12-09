import { db } from './server/db';
import { events } from './drizzle/schema';
import researchData from './yemen_comprehensive_research.json' assert { type: 'json' };

const categoryMap: Record<string, 'war' | 'policy' | 'humanitarian' | 'economic' | 'international'> = {
  year: 'economic',
  causation: 'economic',
  institution: 'international',
  actor: 'international',
  sanctions: 'policy',
  control: 'war',
  transparency: 'policy'
};

async function insertResearchEvents() {
  let inserted = 0;
  let errors = 0;

  for (const result of researchData.results) {
    if (result.error) continue;

    const output = result.output;
    const input = result.input;

    // Extract year
    const yearMatch = input.match(/Yemen (\d{4}):/);
    const year = yearMatch ? yearMatch[1] : '2020';
    const date = `${year}-01-01`;

    const titleEn = yearMatch ? `Major Events ${year}` : input.substring(0, 100);
    const titleAr = yearMatch ? `أحداث رئيسية ${year}` : input.substring(0, 100);
    const descriptionEn = output.key_findings.substring(0, 500);
    const descriptionAr = `ملخص: ${descriptionEn.substring(0, 200)}`;

    const category = categoryMap[output.research_category as keyof typeof categoryMap] || 'economic';
    const sources = JSON.stringify([output.top_sources]);

    try {
      await db.insert(events).values({
        date,
        titleEn,
        titleAr,
        descriptionEn,
        descriptionAr,
        category,
        severity: 'high',
        sources
      });
      inserted++;
      console.log(`✅ Inserted: ${titleEn}`);
    } catch (error) {
      errors++;
      console.error(`❌ Error inserting ${titleEn}:`, error);
    }
  }

  console.log(`\n📊 Summary: ${inserted} inserted, ${errors} errors`);
}

insertResearchEvents().catch(console.error);
