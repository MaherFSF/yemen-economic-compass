import { readFileSync } from 'fs';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

const DATABASE_URL = process.env.DATABASE_URL;

async function executeMassiveInsert() {
  console.log('Reading SQL file...');
  const sqlContent = readFileSync('./massive-data-insert.sql', 'utf-8');
  
  // Split by INSERT statements
  const statements = sqlContent
    .split('\n')
    .filter(line => line.trim().startsWith('INSERT INTO'))
    .map(line => line.trim());
  
  console.log(`Found ${statements.length} INSERT statements`);
  
  const connection = await mysql.createConnection(DATABASE_URL);
  
  let successCount = 0;
  let errorCount = 0;
  
  for (let i = 0; i < statements.length; i++) {
    try {
      await connection.execute(statements[i]);
      successCount++;
      if ((i + 1) % 10 === 0) {
        console.log(`Processed ${i + 1}/${statements.length} statements...`);
      }
    } catch (error) {
      errorCount++;
      console.error(`Error on statement ${i + 1}:`, error.message);
    }
  }
  
  await connection.end();
  
  console.log(`\nExecution complete:`);
  console.log(`✅ Success: ${successCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`📊 Total: ${statements.length}`);
}

executeMassiveInsert().catch(console.error);
