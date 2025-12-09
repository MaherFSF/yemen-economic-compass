/**
 * Seed 2015 Data into Year-by-Year Tables
 * 
 * This script populates the database with comprehensive 2015 data
 * gathered from wide parallel research across all sectors.
 */

import { getDb } from '../server/db';
import {
  yearlyMacroIndicators,
  yearlyBankData,
  yearlyAidData,
  yearlyConflictData,
  yearlyRemittanceData,
} from '../drizzle/schema';

async function seed2015Data() {
  console.log('🌱 Seeding 2015 data...\n');

  // ============================================================================
  // 1. MACROECONOMIC INDICATORS 2015
  // ============================================================================
  
  console.log('📊 Seeding macroeconomic indicators for 2015...');
  
  const db = await getDb();
  if (!db) {
    throw new Error('Database not available');
  }

  await db.insert(yearlyMacroIndicators).values({
    year: 2015,
    gdpCurrentUsd: 24819, // $24.819 billion
    gdpGrowthRate: '-36.1',
    gdpPerCapita: 87030, // $870.30 in cents
    inflationRate: '22.00',
    exchangeRateOfficial: '215.11',
    exchangeRateParallel: null, // Parallel market data not available for 2015
    exports: 510, // $510 million
    imports: 6573, // $6.573 billion
    tradeBalance: -6063, // -$6.063 billion
    foreignReserves: 2760, // ~$2.76 billion (after spending $1.84B in H1)
    externalDebt: null, // Data not available
    population: 28498687, // Estimated 2015 population
    idps: 2500000, // 2.5 million IDPs by end of 2015
    refugees: 169863, // Refugees who fled Yemen since March 2015
    foodInsecure: 14400000, // 14.4 million food insecure (November 2015)
    dataQuality: 'high',
    notes: 'Conflict escalation in March 2015 triggered catastrophic economic collapse. GDP contracted 36.1%, worst year on record.',
    sources: JSON.stringify([
      'UN Data, Yemen, 2024',
      'YCharts, Yemen Inflation Rate Outlook, 2024',
      'Exchange-Rates.org, YER to USD Exchange Rate History for 2015',
      'Sana\'a Center for Strategic Studies, Beware of the failure of Yemen\'s central bank, 2016',
      'FAO, Executive Brief: Escalating Conflict Yemen, November 27, 2015',
      'UNHCR, Yemen Situation: Regional Update #34, December 2015',
    ]),
  }).onDuplicateKeyUpdate({
    set: {
      gdpCurrentUsd: 24819,
      gdpGrowthRate: '-36.1',
      gdpPerCapita: 87030,
      inflationRate: '22.00',
      exchangeRateOfficial: '215.11',
      exports: 510,
      imports: 6573,
      tradeBalance: -6063,
      foreignReserves: 2760,
      population: 28498687,
      idps: 2500000,
      refugees: 169863,
      foodInsecure: 14400000,
      updatedAt: new Date(),
    },
  });

  console.log('✅ Macroeconomic indicators seeded\n');

  // ============================================================================
  // 2. BANKING SECTOR 2015
  // ============================================================================
  
  console.log('🏦 Seeding bank data for 2015...');

  const banks2015 = [
    {
      year: 2015,
      bankId: 'cac-bank',
      bankName: 'Cooperative & Agricultural Credit Bank (CAC Bank)',
      bankType: 'commercial' as const,
      totalAssets: 359163, // YER 359.163 billion (in millions)
      totalDeposits: 309578, // YER 309.578 billion
      totalLoans: 38139, // YER 38.139 billion
      nplAmount: 17674, // YER 17.674 billion
      nplRatio: '46.3', // 17.674 / 38.139 * 100
      nplProvision: 17398, // YER 17.398 billion
      capitalAdequacyRatio: '39.6',
      liquidityRatio: '83.73',
      netIncome: null, // Not specified in audit report
      returnOnAssets: null,
      returnOnEquity: null,
      branches: 49,
      employees: null,
      customers: null,
      activeBorrowers: null,
      grossLoanPortfolio: null,
      auditFirm: 'Grant Thornton Yemen',
      auditDate: '2016-06-01',
      dataQuality: 'high' as const,
      notes: 'Audited financial statements. Conflict severely impacted operations. Branch network reduced from 53 to 49.',
      sources: JSON.stringify([
        'CAC Bank, Consolidated Financial Statements 2015, Grant Thornton Yemen, June 1, 2016',
      ]),
    },
    {
      year: 2015,
      bankId: 'yemen-kuwait-bank',
      bankName: 'Yemen Kuwait Bank',
      bankType: 'commercial' as const,
      totalAssets: 121800, // YER 121.8 billion
      totalDeposits: 107900, // YER 107.9 billion
      totalLoans: 18400, // YER 18.4 billion
      nplAmount: null, // Not specified, but debt provision deficit of YER 1.4B indicates high NPLs
      nplRatio: null,
      nplProvision: 1400, // YER 1.4 billion deficit
      capitalAdequacyRatio: '21.12',
      liquidityRatio: null,
      netIncome: -333, // YER -333.5 million (loss)
      returnOnAssets: null,
      returnOnEquity: null,
      branches: null, // Some branches closed due to conflict
      employees: null,
      customers: null,
      activeBorrowers: null,
      grossLoanPortfolio: null,
      auditFirm: null,
      auditDate: null,
      dataQuality: 'medium' as const,
      notes: 'Sharp profitability reversal from YER 405.9M profit in 2014 to YER 333.5M loss in 2015 due to conflict impact and NPL surge.',
      sources: JSON.stringify([
        'Yemen Kuwait Bank, Financial Statements 2015',
      ]),
    },
    {
      year: 2015,
      bankId: 'al-amal-microfinance',
      bankName: 'Al-Amal Microfinance Bank',
      bankType: 'microfinance' as const,
      totalAssets: null,
      totalDeposits: null,
      totalLoans: null,
      nplAmount: null,
      nplRatio: null,
      nplProvision: null,
      capitalAdequacyRatio: null,
      liquidityRatio: null,
      netIncome: null,
      returnOnAssets: null,
      returnOnEquity: null,
      branches: null,
      employees: null,
      customers: null,
      activeBorrowers: 37678, // December 2015 (down from 44,013 in March 2015)
      grossLoanPortfolio: 2400, // YER 2.4 billion (down from YER 3.2B in March 2015)
      auditFirm: null,
      auditDate: null,
      dataQuality: 'high' as const,
      notes: 'Operational and financial performance declined >90% post-March 2015. Activated humanitarian response program distributing YER 2.7B cash assistance to 110,431 cases.',
      sources: JSON.stringify([
        'Al-Amal Microfinance Bank, Annual Report 2015',
      ]),
    },
  ];

  for (const bank of banks2015) {
    const db = await getDb();
    if (!db) continue;
    try {
      await db.insert(yearlyBankData).values(bank);
    } catch (error) {
      // Ignore duplicate key errors
      if (!String(error).includes('Duplicate entry')) {
        throw error;
      }
    }
  }

  console.log(`✅ ${banks2015.length} banks seeded\n`);

  // ============================================================================
  // 3. HUMANITARIAN AID 2015
  // ============================================================================
  
  console.log('🤝 Seeding aid data for 2015...');

  const donors2015 = [
    {
      year: 2015,
      donorId: 'wfp',
      donorName: 'World Food Programme (WFP)',
      donorType: 'un_agency' as const,
      totalFunding: 359700000, // $359.7 million
      fundingRequested: null,
      fundingGap: null,
      fundingPercentage: null,
      totalBeneficiaries: 8900000, // 8.9 million people
      childrenBeneficiaries: null,
      womenBeneficiaries: null,
      foodSecurity: 359700000, // All funding to food security
      health: null,
      wash: null,
      education: null,
      protection: null,
      shelter: null,
      nutrition: null,
      logistics: null,
      other: null,
      projects: null,
      partners: null,
      governoratesCovered: null,
      dataQuality: 'high' as const,
      notes: 'Largest UN recipient of humanitarian funding for Yemen in 2015 (20.4% of total). Evacuated international staff for 4 months (March-July). Transitioned from PRRO 200636 to EMOP 200890 in October.',
      sources: JSON.stringify([
        'WFP, Year in Review 2015',
        'OCHA FTS, Yemen 2015 Summary',
      ]),
    },
    {
      year: 2015,
      donorId: 'unicef',
      donorName: 'UNICEF',
      donorType: 'un_agency' as const,
      totalFunding: 137000000, // ~$137 million (75% of revised $182.6M appeal)
      fundingRequested: 182600000, // $182.6 million (revised from $60.1M)
      fundingGap: 45600000, // $45.6 million
      fundingPercentage: '75',
      totalBeneficiaries: null,
      childrenBeneficiaries: null, // 10,000 children died from preventable diseases
      womenBeneficiaries: null,
      foodSecurity: null,
      health: null,
      wash: null,
      education: 10000000, // $10 million from GPE
      protection: null,
      shelter: null,
      nutrition: null,
      logistics: null,
      other: null,
      projects: null,
      partners: null,
      governoratesCovered: null,
      dataQuality: 'high' as const,
      notes: 'Nearly 10,000 children under 5 died from preventable diseases. 160,629 children with SAM. 13.4M people lacking safe water. 200,000 children affected by school attacks/closures.',
      sources: JSON.stringify([
        'UNICEF, Humanitarian Action for Children 2015: Yemen, January 2015',
        'UNICEF, The Impact of Violence and Conflict on Yemen and Its Children, March 2016',
        'Global Partnership for Education, Completion report. Accelerated financing to Yemen, 2015',
      ]),
    },
    {
      year: 2015,
      donorId: 'uae',
      donorName: 'United Arab Emirates',
      donorType: 'bilateral' as const,
      totalFunding: 132030000, // $132.03 million (AED 485 million)
      fundingRequested: null,
      fundingGap: null,
      fundingPercentage: null,
      totalBeneficiaries: null,
      childrenBeneficiaries: null,
      womenBeneficiaries: null,
      foodSecurity: 35670000, // $35.67M (AED 131M)
      health: 19870000, // $19.87M (AED 73M)
      wash: 2066433, // $2.07M (UAE Red Crescent WASH project)
      education: null,
      protection: null,
      shelter: 15790000, // $15.79M (AED 58M relief items)
      nutrition: null,
      logistics: 46270000, // $46.27M (AED 170M electric power)
      other: null,
      projects: null,
      partners: null,
      governoratesCovered: null,
      dataQuality: 'high' as const,
      notes: 'Largest donor to Yemen humanitarian crisis in 2015 (31% of total aid). Focused on electric power, food, medical supplies, and relief items.',
      sources: JSON.stringify([
        'Emirates News Agency (WAM), UAE\'s aid to Yemen stood at DH 485 million in 2015, July 29, 2015',
        'OCHA FTS, Yemen 2015',
      ]),
    },
    {
      year: 2015,
      donorId: 'saudi-arabia',
      donorName: 'Saudi Arabia',
      donorType: 'bilateral' as const,
      totalFunding: 322305356, // $322.3 million
      fundingRequested: null,
      fundingGap: null,
      fundingPercentage: null,
      totalBeneficiaries: 600000, // One food distribution reached 600,000 in Aden/Lahj
      childrenBeneficiaries: null,
      womenBeneficiaries: null,
      foodSecurity: null, // Sector breakdown not available
      health: null,
      wash: null,
      education: null,
      protection: null,
      shelter: null,
      nutrition: null,
      logistics: null,
      other: null,
      projects: null,
      partners: null,
      governoratesCovered: null,
      dataQuality: 'high' as const,
      notes: 'Led Operation Decisive Storm (March 26-April 21) and Operation Restoring Hope (April 22 onwards). Saudi-led coalition responsible for ~67% of civilian fatalities from direct targeting.',
      sources: JSON.stringify([
        'UN OCHA FTS, Saudi Arabia 2015',
        'ACLED, Yemen War Death Toll Exceeds 90,000, 2019',
      ]),
    },
    {
      year: 2015,
      donorId: 'who',
      donorName: 'World Health Organization (WHO)',
      donorType: 'un_agency' as const,
      totalFunding: 36800000, // $36.8 million
      fundingRequested: 83000000, // $83 million
      fundingGap: 46200000, // $46.2 million (56% gap)
      fundingPercentage: '44',
      totalBeneficiaries: 600000, // Taiz medical supplies
      childrenBeneficiaries: null,
      womenBeneficiaries: null,
      foodSecurity: null,
      health: 36800000,
      wash: null,
      education: null,
      protection: null,
      shelter: null,
      nutrition: null,
      logistics: null,
      other: null,
      projects: null,
      partners: null,
      governoratesCovered: null,
      dataQuality: 'high' as const,
      notes: '5,604 deaths and 26,703 injuries reported by health facilities (March 19-Oct 16, 2015). Delivered 30 MT medical supplies and 1M liters safe water to Taiz.',
      sources: JSON.stringify([
        'WHO, Yemen conflict: Situation report number 17, October 2015',
      ]),
    },
    {
      year: 2015,
      donorId: 'unhcr',
      donorName: 'UNHCR',
      donorType: 'un_agency' as const,
      totalFunding: null, // Exact funding not specified
      fundingRequested: 153000000, // $153 million
      fundingGap: null, // 56% gap mentioned
      fundingPercentage: '44',
      totalBeneficiaries: null,
      childrenBeneficiaries: null,
      womenBeneficiaries: null,
      foodSecurity: null,
      health: null,
      wash: null,
      education: null,
      protection: null, // UNHCR primarily protection
      shelter: null,
      nutrition: null,
      logistics: null,
      other: null,
      projects: null,
      partners: null,
      governoratesCovered: null,
      dataQuality: 'medium' as const,
      notes: '2,509,062 IDPs validated by December 2015. 169,863 people fled Yemen for adjacent countries since March 2015.',
      sources: JSON.stringify([
        'UNHCR, Yemen Situation: Regional Update #34, December 2015',
      ]),
    },
    {
      year: 2015,
      donorId: 'fao',
      donorName: 'Food and Agriculture Organization (FAO)',
      donorType: 'un_agency' as const,
      totalFunding: 14100000, // $14.1 million
      fundingRequested: 19000000, // $19 million
      fundingGap: 4900000, // $4.9 million
      fundingPercentage: '74',
      totalBeneficiaries: 60000, // Direct beneficiaries during conflict escalation
      childrenBeneficiaries: null,
      womenBeneficiaries: null,
      foodSecurity: 14100000,
      health: null,
      wash: null,
      education: null,
      protection: null,
      shelter: null,
      nutrition: null,
      logistics: null,
      other: null,
      projects: null,
      partners: null,
      governoratesCovered: null,
      dataQuality: 'high' as const,
      notes: '14.4 million people food insecure by November 2015 (50% of population, +36% from 2014). Activated Level 3 Emergency Response on July 14, 2015.',
      sources: JSON.stringify([
        'FAO, Executive Brief: Escalating Conflict Yemen, November 27, 2015',
      ]),
    },
  ];

  for (const donor of donors2015) {
    const db = await getDb();
    if (!db) continue;
    try {
      await db.insert(yearlyAidData).values(donor);
    } catch (error) {
      // Ignore duplicate key errors
      if (!String(error).includes('Duplicate entry')) {
        throw error;
      }
    }
  }

  console.log(`✅ ${donors2015.length} donors seeded\n`);

  // ============================================================================
  // 4. CONFLICT DATA 2015
  // ============================================================================
  
  console.log('⚔️ Seeding conflict data for 2015...');

  const db2 = await getDb();
  if (!db2) {
    throw new Error('Database not available');
  }

  await db2.insert(yearlyConflictData).values({
    year: 2015,
    totalFatalities: 17100, // Approximately 17,100 total fatalities
    civilianFatalities: 4500, // ~4,500 civilian fatalities from direct targeting
    combatantFatalities: null, // Not specified
    totalInjuries: 26703, // Reported by health facilities (March 19-Oct 16)
    childDeaths: 10000, // Nearly 10,000 children under 5 from preventable diseases
    newIdps: 2166000, // 2.5M total - 334K from 2014 = ~2.166M new IDPs in 2015
    totalIdps: 2500000, // 2.5 million cumulative IDPs by end of 2015
    returnees: null,
    healthFacilitiesDamaged: null,
    schoolsDamaged: null, // 200,000 children affected by attacks/closures
    waterSystemsDamaged: null,
    dataQuality: 'high' as const,
    notes: '2015 was the deadliest year for anti-civilian violence on record. Conflict escalated March 26 with Saudi-led Operation Decisive Storm. Saudi-led coalition responsible for ~67% of civilian fatalities from direct targeting.',
    sources: JSON.stringify([
      'ACLED, Yemen War Death Toll Exceeds 90,000, 2019',
      'WHO, Yemen conflict: Situation report number 17, October 2015',
      'UNICEF, The Impact of Violence and Conflict on Yemen and Its Children, March 2016',
      'UNHCR, Yemen Situation: Regional Update #34, December 2015',
    ]),
  }).onDuplicateKeyUpdate({
    set: {
      totalFatalities: 17100,
      civilianFatalities: 4500,
      totalInjuries: 26703,
      childDeaths: 10000,
      newIdps: 2166000,
      totalIdps: 2500000,
      updatedAt: new Date(),
    },
  });

  console.log('✅ Conflict data seeded\n');

  // ============================================================================
  // 5. REMITTANCE & MONEY EXCHANGE DATA 2015
  // ============================================================================
  
  console.log('💱 Seeding remittance data for 2015...');

  const db3 = await getDb();
  if (!db3) {
    throw new Error('Database not available');
  }

  await db3.insert(yearlyRemittanceData).values({
    year: 2015,
    totalRemittances: 3300, // $3.3 billion
    remittanceOperations: 767, // 767 operations in 2015
    moneyExchangers: 551, // 551 individual moneychangers and companies (Feb 20, 2015)
    licensedCompanies: 38, // 38 licensed money exchange companies
    dataQuality: 'high' as const,
    notes: 'Remittances became primary source of foreign currency, surpassing oil exports. Money exchange sector expanded rapidly to fill void left by collapsed formal banking system.',
    sources: JSON.stringify([
      'Sana\'a Center/CARPO, Yemen\'s Expatriate Workforce Under Threat, May 2019',
      'UN Security Council, S/2015/125, February 20, 2015',
      'Raga, S., Impact of conflict on the financial sector in Yemen, ODI, 2021',
    ]),
  }).onDuplicateKeyUpdate({
    set: {
      totalRemittances: 3300,
      remittanceOperations: 767,
      moneyExchangers: 551,
      licensedCompanies: 38,
      updatedAt: new Date(),
    },
  });

  console.log('✅ Remittance data seeded\n');

  console.log('🎉 2015 data seeding complete!\n');
  console.log('Summary:');
  console.log('- 1 macroeconomic indicator record');
  console.log(`- ${banks2015.length} bank records`);
  console.log(`- ${donors2015.length} donor records`);
  console.log('- 1 conflict data record');
  console.log('- 1 remittance data record');
  console.log('\nTotal: ' + (1 + banks2015.length + donors2015.length + 1 + 1) + ' records inserted/updated');
}

// Run the seeding function
seed2015Data()
  .then(() => {
    console.log('\n✅ Seeding completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Seeding failed:', error);
    process.exit(1);
  });
