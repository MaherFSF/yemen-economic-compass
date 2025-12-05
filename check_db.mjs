import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

const [rows] = await connection.execute(`
  SELECT 'Total Records' as metric, COUNT(*) as count FROM indicators
  UNION SELECT 'Unique Indicators', COUNT(DISTINCT nameEn) FROM indicators
  UNION SELECT 'GDP Records', COUNT(*) FROM indicators WHERE nameEn LIKE '%GDP%'
  UNION SELECT 'Exchange Rate Records', COUNT(*) FROM indicators WHERE nameEn LIKE '%Exchange Rate%'
`);

console.log('Database Statistics:');
rows.forEach(row => console.log(`${row.metric}: ${row.count}`));

// Get sample data
const [sample] = await connection.execute('SELECT nameEn, date, value, source FROM indicators LIMIT 10');
console.log('\nSample Data:');
sample.forEach(row => console.log(`- ${row.nameEn} (${row.date}): ${row.value} [${row.source}]`));

await connection.end();
