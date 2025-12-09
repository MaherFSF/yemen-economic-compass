import { createEvent } from './server/db.ts';
import { readFileSync } from 'fs';

const researchData = JSON.parse(readFileSync('./yemen_comprehensive_research.json', 'utf-8'));

const categoryMap = {
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

    const category = categoryMap[output.research_category] || 'economic';
    const sources = JSON.stringify([output.top_sources]);

    try {
      await createEvent({
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
      console.error(`❌ Error inserting ${titleEn}:`, error.message);
    }
  }

  console.log(`\n📊 Summary: ${inserted} inserted, ${errors} errors`);
  process.exit(0);
}

insertResearchEvents().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
