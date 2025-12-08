import { createEvent } from './server/db';
import { readFileSync } from 'fs';

const eventsData = JSON.parse(readFileSync('/home/ubuntu/corrected_events.json', 'utf-8'));

console.log(`Inserting ${eventsData.length} events...`);

let inserted = 0;
let errors = 0;

async function insertAll() {
  for (const event of eventsData) {
    try {
      await createEvent({
        date: event.date,
        titleEn: event.titleEn,
        titleAr: event.titleAr,
        descriptionEn: event.descriptionEn,
        descriptionAr: event.descriptionAr,
        category: event.category,
        severity: event.severity,
        impacts: event.impacts,
        sources: event.sources
      });
      inserted++;
      if (inserted % 20 === 0) {
        console.log(`✓ Inserted ${inserted}/${eventsData.length}`);
      }
    } catch (err: any) {
      errors++;
      if (errors < 10) {
        console.error(`✗ Error: ${err.message}`);
      }
    }
  }

  console.log(`\n=== COMPLETE ===`);
  console.log(`Successfully inserted: ${inserted}`);
  console.log(`Errors: ${errors}`);
}

insertAll().then(() => process.exit(0)).catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
