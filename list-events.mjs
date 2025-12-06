import { createConnection } from 'mysql2/promise';

const connection = await createConnection(process.env.DATABASE_URL);

const [events] = await connection.execute('SELECT id, date, titleEn, category FROM events ORDER BY date');

console.log(`Total events: ${events.length}\n`);
console.log('ID | Date       | Title');
console.log('---|------------|' + '-'.repeat(80));

events.forEach(e => {
  const title = e.titleEn.length > 75 ? e.titleEn.substring(0, 72) + '...' : e.titleEn;
  console.log(`${e.id.toString().padStart(3)} | ${e.date} | ${title}`);
});

await connection.end();
