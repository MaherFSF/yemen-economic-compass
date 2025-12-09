import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

/**
 * Year-by-Year Economic Indicators Schema
 * 
 * This schema stores comprehensive annual data for Yemen's economy (2010-2025)
 * covering all sectors: banking, microfinance, aid, donors, macroeconomic indicators
 */

// ============================================================================
// MACROECONOMIC INDICATORS (Annual)
// ============================================================================

export const yearlyMacroIndicators = sqliteTable('yearly_macro_indicators', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  year: integer('year').notNull().unique(),
  
  // GDP Metrics
  gdpCurrentUsd: real('gdp_current_usd'), // GDP in current US dollars
  gdpGrowthRate: real('gdp_growth_rate'), // Annual GDP growth rate (%)
  gdpPerCapita: real('gdp_per_capita'), // GDP per capita (current US$)
  
  // Inflation & Currency
  inflationRate: real('inflation_rate'), // Annual inflation rate (%)
  exchangeRateOfficial: real('exchange_rate_official'), // Official YER/USD rate
  exchangeRateParallel: real('exchange_rate_parallel'), // Parallel market rate
  
  // Trade
  exports: real('exports'), // Total exports (million USD)
  imports: real('imports'), // Total imports (million USD)
  tradeBalance: real('trade_balance'), // Trade balance (million USD)
  
  // Reserves & Debt
  foreignReserves: real('foreign_reserves'), // CBY foreign reserves (million USD)
  externalDebt: real('external_debt'), // External debt (million USD)
  
  // Population & Humanitarian
  population: integer('population'), // Total population
  idps: integer('idps'), // Internally Displaced Persons
  refugees: integer('refugees'), // Refugees who fled Yemen
  foodInsecure: integer('food_insecure'), // Food insecure population
  
  // Metadata
  dataQuality: text('data_quality'), // High/Medium/Low
  notes: text('notes'),
  sources: text('sources'), // JSON array of source citations
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdateFn(() => new Date()),
});

// ============================================================================
// BANKING SECTOR (Annual by Institution)
// ============================================================================

export const yearlyBankData = sqliteTable('yearly_bank_data', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  year: integer('year').notNull(),
  bankId: text('bank_id').notNull(), // e.g., 'cac-bank', 'yemen-kuwait-bank'
  bankName: text('bank_name').notNull(),
  bankType: text('bank_type'), // 'commercial', 'islamic', 'microfinance', 'central'
  
  // Financial Metrics (in YER millions unless specified)
  totalAssets: real('total_assets'),
  totalDeposits: real('total_deposits'),
  totalLoans: real('total_loans'),
  nplAmount: real('npl_amount'), // Non-Performing Loans amount
  nplRatio: real('npl_ratio'), // NPL ratio (%)
  nplProvision: real('npl_provision'), // Provision for NPLs
  
  // Capital & Liquidity
  capitalAdequacyRatio: real('capital_adequacy_ratio'), // CAR (%)
  liquidityRatio: real('liquidity_ratio'), // Liquidity ratio (%)
  
  // Profitability
  netIncome: real('net_income'), // Net profit/loss
  returnOnAssets: real('return_on_assets'), // ROA (%)
  returnOnEquity: real('return_on_equity'), // ROE (%)
  
  // Operations
  branches: integer('branches'), // Number of branches
  employees: integer('employees'), // Number of employees
  customers: integer('customers'), // Number of customers
  
  // Microfinance-specific
  activeBorrowers: integer('active_borrowers'),
  grossLoanPortfolio: real('gross_loan_portfolio'),
  
  // Metadata
  auditFirm: text('audit_firm'),
  auditDate: text('audit_date'),
  dataQuality: text('data_quality'),
  notes: text('notes'),
  sources: text('sources'), // JSON array
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdateFn(() => new Date()),
});

// ============================================================================
// HUMANITARIAN AID (Annual by Donor)
// ============================================================================

export const yearlyAidData = sqliteTable('yearly_aid_data', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  year: integer('year').notNull(),
  donorId: text('donor_id').notNull(), // e.g., 'wfp', 'unicef', 'uae', 'saudi'
  donorName: text('donor_name').notNull(),
  donorType: text('donor_type'), // 'un_agency', 'bilateral', 'multilateral', 'ngo'
  
  // Funding
  totalFunding: real('total_funding'), // Total funding (USD)
  fundingRequested: real('funding_requested'), // Funding requested
  fundingGap: real('funding_gap'), // Funding gap
  fundingPercentage: real('funding_percentage'), // % of request funded
  
  // Beneficiaries
  totalBeneficiaries: integer('total_beneficiaries'),
  childrenBeneficiaries: integer('children_beneficiaries'),
  womenBeneficiaries: integer('women_beneficiaries'),
  
  // Sector Allocation (USD)
  foodSecurity: real('food_security'),
  health: real('health'),
  wash: real('wash'), // Water, Sanitation, Hygiene
  education: real('education'),
  protection: real('protection'),
  shelter: real('shelter'),
  nutrition: real('nutrition'),
  logistics: real('logistics'),
  other: real('other'),
  
  // Operations
  projects: integer('projects'), // Number of projects
  partners: integer('partners'), // Number of implementing partners
  governoratesCovered: integer('governorates_covered'),
  
  // Metadata
  dataQuality: text('data_quality'),
  notes: text('notes'),
  sources: text('sources'), // JSON array
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdateFn(() => new Date()),
});

// ============================================================================
// CONFLICT & CASUALTIES (Annual)
// ============================================================================

export const yearlyConflictData = sqliteTable('yearly_conflict_data', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  year: integer('year').notNull().unique(),
  
  // Casualties
  totalFatalities: integer('total_fatalities'),
  civilianFatalities: integer('civilian_fatalities'),
  combatantFatalities: integer('combatant_fatalities'),
  totalInjuries: integer('total_injuries'),
  childDeaths: integer('child_deaths'),
  
  // Displacement
  newIdps: integer('new_idps'), // New IDPs this year
  totalIdps: integer('total_idps'), // Cumulative IDPs
  returnees: integer('returnees'),
  
  // Infrastructure Damage
  healthFacilitiesDamaged: integer('health_facilities_damaged'),
  schoolsDamaged: integer('schools_damaged'),
  waterSystemsDamaged: integer('water_systems_damaged'),
  
  // Metadata
  dataQuality: text('data_quality'),
  notes: text('notes'),
  sources: text('sources'), // JSON array (ACLED, UN, etc.)
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdateFn(() => new Date()),
});

// ============================================================================
// MONEY EXCHANGE & REMITTANCES (Annual)
// ============================================================================

export const yearlyRemittanceData = sqliteTable('yearly_remittance_data', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  year: integer('year').notNull().unique(),
  
  // Remittances
  totalRemittances: real('total_remittances'), // Total remittances (USD millions)
  remittanceOperations: integer('remittance_operations'), // Number of operations
  
  // Money Exchange Sector
  moneyExchangers: integer('money_exchangers'), // Number of money exchangers
  licensedCompanies: integer('licensed_companies'), // Licensed exchange companies
  
  // Metadata
  dataQuality: text('data_quality'),
  notes: text('notes'),
  sources: text('sources'),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdateFn(() => new Date()),
});

// ============================================================================
// COMMERCIAL COMPANIES (Annual by Company)
// ============================================================================

export const yearlyCompanyData = sqliteTable('yearly_company_data', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  year: integer('year').notNull(),
  companyId: text('company_id').notNull(),
  companyName: text('company_name').notNull(),
  sector: text('sector'), // 'oil', 'telecom', 'manufacturing', 'services', etc.
  
  // Financial Metrics
  revenue: real('revenue'),
  netIncome: real('net_income'),
  totalAssets: real('total_assets'),
  employees: integer('employees'),
  
  // Operations
  operationalStatus: text('operational_status'), // 'active', 'suspended', 'closed'
  
  // Metadata
  dataQuality: text('data_quality'),
  notes: text('notes'),
  sources: text('sources'),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdateFn(() => new Date()),
});

// ============================================================================
// EXPORTS
// ============================================================================

export type YearlyMacroIndicator = typeof yearlyMacroIndicators.$inferSelect;
export type NewYearlyMacroIndicator = typeof yearlyMacroIndicators.$inferInsert;

export type YearlyBankData = typeof yearlyBankData.$inferSelect;
export type NewYearlyBankData = typeof yearlyBankData.$inferInsert;

export type YearlyAidData = typeof yearlyAidData.$inferSelect;
export type NewYearlyAidData = typeof yearlyAidData.$inferInsert;

export type YearlyConflictData = typeof yearlyConflictData.$inferSelect;
export type NewYearlyConflictData = typeof yearlyConflictData.$inferInsert;

export type YearlyRemittanceData = typeof yearlyRemittanceData.$inferSelect;
export type NewYearlyRemittanceData = typeof yearlyRemittanceData.$inferInsert;

export type YearlyCompanyData = typeof yearlyCompanyData.$inferSelect;
export type NewYearlyCompanyData = typeof yearlyCompanyData.$inferInsert;
