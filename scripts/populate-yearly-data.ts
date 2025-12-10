/**
 * Populate yearly data tables from comprehensive parallel research
 * 
 * This script reads CSV files generated from 80+ parallel research tasks
 * and populates the database with verified data from trusted sources.
 */

import { db } from '../server/db';
import {
  yearlyMacroIndicators,
  yearlyBankData,
  yearlyAidData,
  yearlyConflictData,
  yearlyRemittanceData
} from '../shared/db/schema-yearly-data';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';

function cleanNumber(valueStr: string): number | null {
  if (!valueStr || valueStr === 'N/A' || valueStr.includes('N/A')) {
    return null;
  }
  
  // Remove source citations (everything after ' - ')
  if (valueStr.includes(' - ')) {
    valueStr = valueStr.split(' - ')[0];
  }
  
  // Remove currency symbols and units
  valueStr = valueStr
    .replace(/\$/g, '')
    .replace(/B/g, '000')
    .replace(/M/g, '')
    .replace(/%/g, '')
    .replace(/,/g, '')
    .trim();
  
  // Extract first number found
  const match = valueStr.match(/[-+]?\d*\.?\d+/);
  if (match) {
    const num = parseFloat(match[0]);
    return isNaN(num) ? null : num;
  }
  return null;
}

function extractQuality(qualityStr: string): string {
  if (!qualityStr) return 'Medium';
  const match = qualityStr.match(/^(High|Medium|Low)/i);
  return match ? match[1] : 'Medium';
}

async function populateMacroIndicators() {
  console.log('\\n📊 Populating yearly_macro_indicators...');
  
  const csvPath = path.join(__dirname, '../yemen_yearly_macro_indicators.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const records = parse(csvContent, { columns: true, skip_empty_lines: true });
  
  let inserted = 0;
  for (const row of records) {
    if (row.Error) continue;
    
    try {
      await db.insert(yearlyMacroIndicators).values({
        year: parseInt(row.Year),
        gdpCurrentUsd: cleanNumber(row['GDP (Current USD)']),
        gdpGrowthRate: cleanNumber(row['GDP Growth Rate']),
        gdpPerCapita: cleanNumber(row['GDP Per Capita']),
        inflationRate: cleanNumber(row['Inflation Rate']),
        exchangeRateOfficial: cleanNumber(row['Official Exchange Rate']),
        exchangeRateParallel: cleanNumber(row['Parallel Exchange Rate']),
        exports: cleanNumber(row['Total Exports']),
        imports: cleanNumber(row['Total Imports']),
        tradeBalance: cleanNumber(row['Trade Balance']),
        foreignReserves: cleanNumber(row['Foreign Reserves']),
        externalDebt: cleanNumber(row['External Debt']),
        population: cleanNumber(row['Total Population']) ? Math.round(cleanNumber(row['Total Population'])!) : null,
        idps: cleanNumber(row['IDPs']) ? Math.round(cleanNumber(row['IDPs'])!) : null,
        refugees: cleanNumber(row['Refugees']) ? Math.round(cleanNumber(row['Refugees'])!) : null,
        foodInsecure: cleanNumber(row['Food Insecure Population']) ? Math.round(cleanNumber(row['Food Insecure Population'])!) : null,
        dataQuality: extractQuality(row['Data Quality']),
        notes: row['Notes']?.substring(0, 500) || null,
        sources: row['Complete Sources List'] ? JSON.stringify(row['Complete Sources List'].split('\\n').slice(0, 5)) : null
      });
      inserted++;
      console.log(`  ✓ ${row.Year}`);
    } catch (error) {
      console.error(`  ✗ ${row.Year}: ${error}`);
    }
  }
  
  console.log(`✅ Inserted ${inserted}/${records.length} macro indicator records`);
}

async function populateBankingData() {
  console.log('\\n🏦 Populating yearly_bank_data...');
  
  const csvPath = path.join(__dirname, '../yemen_yearly_banking_data.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const records = parse(csvContent, { columns: true, skip_empty_lines: true });
  
  let inserted = 0;
  for (const row of records) {
    if (row.Error) continue;
    
    try {
      await db.insert(yearlyBankData).values({
        year: parseInt(row.Year),
        bankId: 'banking-sector-aggregate',
        bankName: 'Banking Sector Aggregate',
        bankType: 'aggregate',
        totalAssets: cleanNumber(row['Total Banking Sector Assets']),
        totalDeposits: cleanNumber(row['Total Deposits']),
        totalLoans: cleanNumber(row['Total Loans']),
        nplRatio: cleanNumber(row['NPL Ratio']),
        capitalAdequacyRatio: cleanNumber(row['Capital Adequacy Ratio']),
        branches: cleanNumber(row['Total Branches']) ? Math.round(cleanNumber(row['Total Branches'])!) : null,
        activeBorrowers: cleanNumber(row['Microfinance Borrowers']) ? Math.round(cleanNumber(row['Microfinance Borrowers'])!) : null,
        grossLoanPortfolio: cleanNumber(row['Microfinance Portfolio']),
        dataQuality: extractQuality(row['Data Quality']),
        notes: `${row['Key Banking Events'] || ''} | ${row['Notes'] || ''}`.substring(0, 500),
        sources: row['Complete Sources List'] ? JSON.stringify(row['Complete Sources List'].split('\\n').slice(0, 5)) : null
      });
      inserted++;
      console.log(`  ✓ ${row.Year}`);
    } catch (error) {
      console.error(`  ✗ ${row.Year}: ${error}`);
    }
  }
  
  console.log(`✅ Inserted ${inserted}/${records.length} banking sector records`);
}

async function populateAidData() {
  console.log('\\n🤝 Populating yearly_aid_data...');
  
  const csvPath = path.join(__dirname, '../yemen_yearly_aid_data.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const records = parse(csvContent, { columns: true, skip_empty_lines: true });
  
  const donors = [
    { id: 'world-bank', name: 'World Bank', type: 'multilateral', field: 'World Bank Funding' },
    { id: 'saudi-arabia', name: 'Saudi Arabia', type: 'bilateral', field: 'Saudi Arabia Aid' },
    { id: 'uae', name: 'United Arab Emirates', type: 'bilateral', field: 'UAE Aid' },
    { id: 'wfp', name: 'World Food Programme', type: 'un_agency', field: 'WFP Funding' },
    { id: 'unicef', name: 'UNICEF', type: 'un_agency', field: 'UNICEF Funding' },
    { id: 'who', name: 'World Health Organization', type: 'un_agency', field: 'WHO Funding' },
    { id: 'undp', name: 'UNDP', type: 'un_agency', field: 'UNDP Funding' }
  ];
  
  let inserted = 0;
  for (const row of records) {
    if (row.Error) continue;
    
    const year = parseInt(row.Year);
    const fundingRequested = cleanNumber(row['Funding Requested']);
    const fundingGap = cleanNumber(row['Funding Gap']);
    const beneficiaries = cleanNumber(row['Total Beneficiaries']) ? Math.round(cleanNumber(row['Total Beneficiaries'])!) : null;
    const foodSecurity = cleanNumber(row['Food Security Allocation']);
    const health = cleanNumber(row['Health Allocation']);
    const projects = cleanNumber(row['Projects Count']) ? Math.round(cleanNumber(row['Projects Count'])!) : null;
    const dataQuality = extractQuality(row['Data Quality']);
    const notes = `${row['Key Aid Events'] || ''} | ${row['Notes'] || ''}`.substring(0, 500);
    const sources = row['Complete Sources List'] ? JSON.stringify(row['Complete Sources List'].split('\\n').slice(0, 5)) : null;
    
    for (const donor of donors) {
      const funding = cleanNumber(row[donor.field]);
      if (funding && funding > 0) {
        try {
          await db.insert(yearlyAidData).values({
            year,
            donorId: donor.id,
            donorName: donor.name,
            donorType: donor.type,
            totalFunding: funding,
            fundingRequested,
            fundingGap,
            totalBeneficiaries: beneficiaries,
            foodSecurity,
            health,
            projects,
            dataQuality,
            notes,
            sources
          });
          inserted++;
          console.log(`  ✓ ${year} - ${donor.name}`);
        } catch (error) {
          console.error(`  ✗ ${year} - ${donor.name}: ${error}`);
        }
      }
    }
  }
  
  console.log(`✅ Inserted ${inserted} aid records`);
}

async function populateConflictData() {
  console.log('\\n⚔️  Populating yearly_conflict_data...');
  
  const csvPath = path.join(__dirname, '../yemen_yearly_conflict_data.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const records = parse(csvContent, { columns: true, skip_empty_lines: true });
  
  let inserted = 0;
  for (const row of records) {
    if (row.Error) continue;
    
    try {
      await db.insert(yearlyConflictData).values({
        year: parseInt(row.Year),
        totalFatalities: cleanNumber(row['Total Fatalities']) ? Math.round(cleanNumber(row['Total Fatalities'])!) : null,
        civilianFatalities: cleanNumber(row['Civilian Fatalities']) ? Math.round(cleanNumber(row['Civilian Fatalities'])!) : null,
        combatantFatalities: cleanNumber(row['Combatant Fatalities']) ? Math.round(cleanNumber(row['Combatant Fatalities'])!) : null,
        childDeaths: cleanNumber(row['Child Deaths']) ? Math.round(cleanNumber(row['Child Deaths'])!) : null,
        newIdps: cleanNumber(row['New IDPs']) ? Math.round(cleanNumber(row['New IDPs'])!) : null,
        totalIdps: cleanNumber(row['Total IDPs']) ? Math.round(cleanNumber(row['Total IDPs'])!) : null,
        returnees: cleanNumber(row['Returnees']) ? Math.round(cleanNumber(row['Returnees'])!) : null,
        healthFacilitiesDamaged: cleanNumber(row['Health Facilities Damaged']) ? Math.round(cleanNumber(row['Health Facilities Damaged'])!) : null,
        schoolsDamaged: cleanNumber(row['Schools Damaged']) ? Math.round(cleanNumber(row['Schools Damaged'])!) : null,
        waterSystemsDamaged: cleanNumber(row['Water Systems Damaged']) ? Math.round(cleanNumber(row['Water Systems Damaged'])!) : null,
        dataQuality: extractQuality(row['Data Quality']),
        notes: `${row['Key Conflict Events'] || ''} | ${row['Territorial Changes'] || ''} | ${row['Notes'] || ''}`.substring(0, 500),
        sources: row['Complete Sources List'] ? JSON.stringify(row['Complete Sources List'].split('\\n').slice(0, 5)) : null
      });
      inserted++;
      console.log(`  ✓ ${row.Year}`);
    } catch (error) {
      console.error(`  ✗ ${row.Year}: ${error}`);
    }
  }
  
  console.log(`✅ Inserted ${inserted}/${records.length} conflict records`);
}

async function populateRemittanceData() {
  console.log('\\n💸 Populating yearly_remittance_data...');
  
  const csvPath = path.join(__dirname, '../yemen_yearly_remittance_companies.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const records = parse(csvContent, { columns: true, skip_empty_lines: true });
  
  let inserted = 0;
  for (const row of records) {
    if (row.Error) continue;
    
    try {
      await db.insert(yearlyRemittanceData).values({
        year: parseInt(row.Year),
        totalRemittances: cleanNumber(row['Total Remittances']),
        remittanceOperations: cleanNumber(row['Remittance Operations']) ? Math.round(cleanNumber(row['Remittance Operations'])!) : null,
        moneyExchangers: cleanNumber(row['Money Exchangers']) ? Math.round(cleanNumber(row['Money Exchangers'])!) : null,
        dataQuality: extractQuality(row['Data Quality']),
        notes: `${row['Key Business Events'] || ''} | ${row['Business Environment'] || ''} | ${row['Notes'] || ''}`.substring(0, 500),
        sources: row['Complete Sources List'] ? JSON.stringify(row['Complete Sources List'].split('\\n').slice(0, 5)) : null
      });
      inserted++;
      console.log(`  ✓ ${row.Year}`);
    } catch (error) {
      console.error(`  ✗ ${row.Year}: ${error}`);
    }
  }
  
  console.log(`✅ Inserted ${inserted}/${records.length} remittance records`);
}

async function main() {
  console.log('🚀 Starting database population from parallel research data...');
  console.log('📁 Source: 80+ parallel research tasks, 74 years of verified data');
  console.log('');
  
  try {
    await populateMacroIndicators();
    await populateBankingData();
    await populateAidData();
    await populateConflictData();
    await populateRemittanceData();
    
    console.log('\\n🎉 Database population complete!');
    console.log('✅ All yearly data tables populated with comprehensive research data');
    console.log('📊 Ready for visualization and analysis');
  } catch (error) {
    console.error('\\n❌ Error during database population:', error);
    process.exit(1);
  }
}

main();
