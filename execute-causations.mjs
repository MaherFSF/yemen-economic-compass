import { readFileSync } from 'fs';
import { createConnection } from 'mysql2/promise';

const sql = readFileSync('./causations-corrected.sql', 'utf-8');

// Split by INSERT statements
const statements = sql
  .split(/;\s*\n/)
  .map(s => s.trim())
  .filter(s => s.length > 0 && !s.startsWith('--') && !s.startsWith('SELECT'));

console.log(`Found ${statements.length} INSERT statements to execute`);

const connection = await createConnection(process.env.DATABASE_URL);

try {
  for (let i = 0; i < statements.length; i++) {
    const stmt = statements[i];
    if (stmt) {
      console.log(`\nExecuting statement ${i + 1}/${statements.length}...`);
      try {
        const [result] = await connection.execute(stmt);
        console.log(`✅ Success: ${result.affectedRows} row(s) inserted`);
      } catch (err) {
        console.error(`❌ Error: ${err.message}`);
        console.error(`Statement: ${stmt.substring(0, 200)}...`);
      }
    }
  }

  // Verify total causations
  const [rows] = await connection.execute('SELECT COUNT(*) as total FROM causations');
  console.log(`\n✅ Total causations in database: ${rows[0].total}`);
} finally {
  await connection.end();
}
