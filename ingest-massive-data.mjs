import pg from 'pg';
import fs from 'fs';

const { Pool } = pg;

// Parse DATABASE_URL to add SSL mode
const dbUrl = new URL(process.env.DATABASE_URL);
dbUrl.searchParams.set('sslmode', 'require');

const pool = new Pool({
  connectionString: dbUrl.toString(),
  ssl: {
    rejectUnauthorized: false
  }
});

async function executeSQLFile() {
  try {
    const sql = fs.readFileSync('massive-data-insert.sql', 'utf8');
    console.log('📁 Read massive-data-insert.sql');
    console.log(`📊 File size: ${(sql.length / 1024).toFixed(2)} KB`);
    
    // Split into individual statements and execute
    const statements = sql.split(';').filter(s => s.trim().length > 0);
    console.log(`📝 Found ${statements.length} SQL statements`);
    
    let successCount = 0;
    for (const stmt of statements) {
      if (stmt.trim()) {
        try {
          await pool.query(stmt);
          successCount++;
        } catch (err) {
          console.error(`❌ Error in statement: ${err.message}`);
        }
      }
    }
    
    console.log(`✅ Successfully executed ${successCount}/${statements.length} statements`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  } finally {
    await pool.end();
  }
}

executeSQLFile().catch(console.error);
