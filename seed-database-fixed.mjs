#!/usr/bin/env node
/**
 * Fixed database seeding script for Yemen Economic Compass
 */

import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import fs from 'fs/promises';
import path from 'path';

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

const PROCESSED_DIR = '/home/ubuntu/processed_data';

console.log('🌱 Starting database seeding...\n');

async function readJSON(filename) {
  try {
    const data = await fs.readFile(path.join(PROCESSED_DIR, filename), 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error.message);
    return [];
  }
}

async function seedBanks() {
  console.log('📊 Seeding banks table...');
  
  const banksData = await readJSON('Bestever.xlsx_Banks.json');
  
  let count = 0;
  for (const bank of banksData) {
    try {
      await connection.query(
        `INSERT INTO banks (nameEn, nameAr, type, status) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE nameEn = VALUES(nameEn)`,
        [
          bank.Name_EN || 'Unknown',
          bank.Name_AR || 'غير معروف',
          bank.Type?.includes('Islamic') ? 'islamic' : 'commercial',
          'stable'
        ]
      );
      count++;
    } catch (error) {
      console.error(`Error inserting bank ${bank.Name_EN}:`, error.message);
    }
  }
  
  console.log(`✅ Seeded ${count} banks\n`);
}

async function seedActors() {
  console.log('👥 Seeding actors/stakeholders table...');
  
  const actorsData = await readJSON('Bestever.xlsx_Actors_Base.json');
  
  let count = 0;
  for (const actor of actorsData) {
    try {
      await connection.query(
        `INSERT INTO actors (nameEn, nameAr, type, category, status, descriptionEn, descriptionAr)
         VALUES (?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE nameEn = VALUES(nameEn)`,
        [
          actor.Name_EN || 'Unknown',
          actor.Name_AR || 'غير معروف',
          actor.Category === 'Bank' ? 'bank' :
          actor.Category === 'IFI' || actor.Category === 'UN' ? 'international' :
          actor.Category === 'Donor' ? 'donor' :
          'organization',
          actor.Category || 'Other',
          'active',
          actor.Primary_Theme || '',
          actor.Primary_Theme || ''
        ]
      );
      count++;
    } catch (error) {
      console.error(`Error inserting actor ${actor.Name_EN}:`, error.message);
    }
  }
  
  console.log(`✅ Seeded ${count} actors/stakeholders\n`);
}

async function seedIndicators() {
  console.log('📈 Seeding indicators table...');
  
  const indicatorsData = await readJSON('3.xlsx_Indicators.json');
  
  let count = 0;
  for (const ind of indicatorsData) {
    try {
      await connection.query(
        `INSERT INTO indicators (nameEn, nameAr, category, unit, value, date, source)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          ind.Indicator_Name_EN || 'Unknown',
          ind.Indicator_Name_AR || 'غير معروف',
          ind.Category || 'Economic',
          ind.Unit || 'N/A',
          String(ind.Value_2024 || ind.Latest_Value || 'N/A'),
          '2024-01-01',
          ind.Source || 'Multiple sources'
        ]
      );
      count++;
    } catch (error) {
      console.error(`Error inserting indicator ${ind.Indicator_Name_EN}:`, error.message);
    }
  }
  
  console.log(`✅ Seeded ${count} indicators\n`);
}

async function seedEvents() {
  console.log('📅 Seeding events table...');
  
  const events = [
    { date: '2011-02-11', titleEn: 'Yemeni Revolution Begins', titleAr: 'بداية الثورة اليمنية', descriptionEn: 'Mass protests demanding end of Saleh regime', descriptionAr: 'احتجاجات جماهيرية تطالب بإنهاء نظام صالح', category: 'policy', severity: 'high' },
    { date: '2014-09-21', titleEn: 'Houthi Takeover of Sana\'a', titleAr: 'استيلاء الحوثيين على صنعاء', descriptionEn: 'Houthis seize control of capital', descriptionAr: 'الحوثيون يسيطرون على العاصمة', category: 'war', severity: 'critical' },
    { date: '2015-03-26', titleEn: 'Operation Decisive Storm', titleAr: 'عملية عاصفة الحزم', descriptionEn: 'Saudi-led coalition begins military intervention', descriptionAr: 'التحالف بقيادة السعودية يبدأ التدخل العسكري', category: 'war', severity: 'critical' },
    { date: '2016-09-18', titleEn: 'Central Bank Split', titleAr: 'انقسام البنك المركزي', descriptionEn: 'CBY headquarters moved to Aden, creating dual banking system', descriptionAr: 'نقل مقر البنك المركزي إلى عدن', category: 'economic', severity: 'critical' },
    { date: '2017-04-27', titleEn: 'Cholera Outbreak', titleAr: 'تفشي الكوليرا', descriptionEn: 'Massive cholera outbreak, over 1 million cases', descriptionAr: 'تفشي كبير للكوليرا', category: 'humanitarian', severity: 'critical' },
    { date: '2018-09-01', titleEn: 'Currency Collapse', titleAr: 'انهيار العملة', descriptionEn: 'Rial reaches 600 YER/USD, 30% depreciation', descriptionAr: 'الريال يصل إلى 600 ريال/دولار', category: 'economic', severity: 'critical' },
    { date: '2018-12-13', titleEn: 'Stockholm Agreement', titleAr: 'اتفاق ستوكهولم', descriptionEn: 'UN-brokered ceasefire agreement', descriptionAr: 'اتفاق وقف إطلاق النار', category: 'policy', severity: 'high' },
    { date: '2020-04-10', titleEn: 'COVID-19 First Case', titleAr: 'أول حالة كوفيد-19', descriptionEn: 'First COVID-19 case confirmed in Yemen', descriptionAr: 'تأكيد أول حالة كوفيد-19', category: 'humanitarian', severity: 'high' },
    { date: '2022-04-02', titleEn: 'Nationwide Truce', titleAr: 'الهدنة على مستوى البلاد', descriptionEn: 'Two-month truce begins, later extended', descriptionAr: 'بدء هدنة لمدة شهرين', category: 'policy', severity: 'high' },
    { date: '2023-04-09', titleEn: 'Saudi-Houthi Talks', titleAr: 'محادثات سعودية-حوثية', descriptionEn: 'Direct negotiations between Saudi Arabia and Houthis', descriptionAr: 'مفاوضات مباشرة', category: 'policy', severity: 'high' },
    { date: '2024-01-01', titleEn: 'Humanitarian Funding Crisis', titleAr: 'أزمة التمويل الإنساني', descriptionEn: 'Only 19% of required humanitarian funding secured', descriptionAr: 'تأمين 19% فقط من التمويل', category: 'humanitarian', severity: 'critical' },
    { date: '2025-01-01', titleEn: 'Rial Depreciation Continues', titleAr: 'استمرار انخفاض الريال', descriptionEn: 'Rial reaches 1,800 YER/USD', descriptionAr: 'الريال يصل إلى 1,800 ريال/دولار', category: 'economic', severity: 'critical' }
  ];
  
  let count = 0;
  for (const event of events) {
    try {
      await connection.query(
        `INSERT INTO events (date, titleEn, titleAr, descriptionEn, descriptionAr, category, severity)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [event.date, event.titleEn, event.titleAr, event.descriptionEn, event.descriptionAr, event.category, event.severity]
      );
      count++;
    } catch (error) {
      console.error(`Error inserting event ${event.titleEn}:`, error.message);
    }
  }
  
  console.log(`✅ Seeded ${count} events\n`);
}

async function main() {
  try {
    await seedBanks();
    await seedActors();
    await seedIndicators();
    await seedEvents();
    
    console.log('🎉 Database seeding completed successfully!');
    
  } catch (error) {
    console.error('❌ Error during seeding:', error);
  } finally {
    await connection.end();
  }
}

main();
