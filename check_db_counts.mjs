import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { sql } from 'drizzle-orm';

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

const tables = ['events', 'actors', 'publications', 'banks', 'indicators', 'exchange_rates'];

console.log('=== DATABASE RECORD COUNTS ===\n');

for (const table of tables) {
  try {
    const result = await db.execute(sql.raw(`SELECT COUNT(*) as count FROM ${table}`));
    console.log(`${table}: ${result[0][0].count} records`);
  } catch (err) {
    console.log(`${table}: Table not found or error - ${err.message}`);
  }
}

await connection.end();
