import Database from 'better-sqlite3';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = join(__dirname, '.data', 'sqlite.db');
const db = new Database(dbPath);

// Read aggregated events
const eventsJson = readFileSync('/home/ubuntu/all_300_events.json', 'utf-8');
const events = JSON.parse(eventsJson);

console.log(`Preparing to insert ${events.length} events...`);

const insertStmt = db.prepare(`
  INSERT INTO events (date, titleEn, titleAr, category, severity, descriptionEn, descriptionAr, impact, source)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

let inserted = 0;
let errors = 0;

for (const event of events) {
  try {
    insertStmt.run(
      event.date,
      event.titleEn,
      event.titleAr,
      event.category,
      event.severity,
      event.descriptionEn,
      event.descriptionAr,
      event.impact,
      event.source
    );
    inserted++;
    if (inserted % 20 === 0) {
      console.log(`✓ Inserted ${inserted} events...`);
    }
  } catch (err) {
    errors++;
    console.error(`✗ ${event.date}: ${err.message}`);
  }
}

console.log(`\n=== SUMMARY ===`);
console.log(`Total events: ${events.length}`);
console.log(`Successfully inserted: ${inserted}`);
console.log(`Errors: ${errors}`);

db.close();
