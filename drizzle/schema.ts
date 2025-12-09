import { bigint, decimal, int, json, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Files table for storing uploaded document metadata.
 * Actual file bytes are stored in S3, this table tracks metadata and ownership.
 */
export const files = mysqlTable("files", {
  id: int("id").autoincrement().primaryKey(),
  /** Original filename as uploaded by user */
  filename: varchar("filename", { length: 255 }).notNull(),
  /** S3 storage key (path) for retrieving the file */
  fileKey: varchar("fileKey", { length: 512 }).notNull(),
  /** Public S3 URL for accessing the file */
  url: text("url").notNull(),
  /** MIME type (e.g., application/pdf, image/png) */
  mimeType: varchar("mimeType", { length: 100 }).notNull(),
  /** File size in bytes */
  fileSize: int("fileSize").notNull(),
  /** Category for organizing files */
  category: mysqlEnum("category", ["report", "chart", "document", "image", "other"]).default("document").notNull(),
  /** Optional description or notes about the file */
  description: text("description"),
  /** User who uploaded the file (foreign key to users.id) */
  uploadedBy: int("uploadedBy").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type File = typeof files.$inferSelect;
export type InsertFile = typeof files.$inferInsert;

/**
 * Events table for storing timeline events with comprehensive metadata.
 * Tracks major political, economic, and social events in Yemen's financial landscape.
 */
export const events = mysqlTable("events", {
  id: int("id").autoincrement().primaryKey(),
  /** Event date (YYYY-MM-DD) */
  date: varchar("date", { length: 10 }).notNull(),
  /** Event title in English */
  titleEn: varchar("titleEn", { length: 500 }).notNull(),
  /** Event title in Arabic */
  titleAr: varchar("titleAr", { length: 500 }).notNull(),
  /** Detailed description in English */
  descriptionEn: text("descriptionEn").notNull(),
  /** Detailed description in Arabic */
  descriptionAr: text("descriptionAr").notNull(),
  /** Event category */
  category: mysqlEnum("category", ["war", "policy", "humanitarian", "economic", "international"]).notNull(),
  /** Severity level */
  severity: mysqlEnum("severity", ["low", "medium", "high", "critical"]).notNull(),
  /** JSON array of actor IDs involved */
  actors: text("actors"),
  /** JSON array of impacts */
  impacts: text("impacts"),
  /** JSON array of source URLs/citations */
  sources: text("sources"),
  /** Photo URL for the event */
  photoUrl: text("photoUrl"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Event = typeof events.$inferSelect;
export type InsertEvent = typeof events.$inferInsert;

/**
 * Actors table for storing stakeholder profiles.
 * Includes governments, organizations, banks, armed groups, etc.
 */
export const actors = mysqlTable("actors", {
  id: int("id").autoincrement().primaryKey(),
  /** Actor name in English */
  nameEn: varchar("nameEn", { length: 255 }).notNull(),
  /** Actor name in Arabic */
  nameAr: varchar("nameAr", { length: 255 }).notNull(),
  /** Actor type */
  type: mysqlEnum("type", ["government", "organization", "bank", "armed_group", "donor", "international"]).notNull(),
  /** Actor category */
  category: varchar("category", { length: 100 }).notNull(),
  /** Current status */
  status: mysqlEnum("status", ["active", "inactive", "dissolved"]).default("active").notNull(),
  /** Description in English */
  descriptionEn: text("descriptionEn"),
  /** Description in Arabic */
  descriptionAr: text("descriptionAr"),
  /** Founded/established date */
  foundedDate: varchar("foundedDate", { length: 10 }),
  /** JSON array of key figures/leaders */
  keyFigures: text("keyFigures"),
  /** JSON array of interests */
  interests: text("interests"),
  /** JSON array of capabilities */
  capabilities: text("capabilities"),
  /** Website URL */
  website: text("website"),
  /** Contact information as JSON */
  contactInfo: text("contactInfo"),
  /** Total funding provided (in USD, stored in cents to avoid decimal issues) */
  fundingProvided: bigint("fundingProvided", { mode: "number" }),
  /** JSON array of projects */
  projects: text("projects"),
  /** Logo URL */
  logoUrl: text("logoUrl"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Actor = typeof actors.$inferSelect;
export type InsertActor = typeof actors.$inferInsert;

/**
 * Indicators table for storing economic/financial indicators with time series.
 */
export const indicators = mysqlTable("indicators", {
  id: int("id").autoincrement().primaryKey(),
  /** Indicator name in English */
  nameEn: varchar("nameEn", { length: 255 }).notNull(),
  /** Indicator name in Arabic */
  nameAr: varchar("nameAr", { length: 255 }).notNull(),
  /** Indicator category */
  category: varchar("category", { length: 100 }).notNull(),
  /** Unit of measurement */
  unit: varchar("unit", { length: 50 }).notNull(),
  /** Indicator value (stored as text to handle various formats) */
  value: varchar("value", { length: 100 }).notNull(),
  /** Date of the value (YYYY-MM-DD) */
  date: varchar("date", { length: 10 }).notNull(),
  /** Data source */
  source: varchar("source", { length: 255 }).notNull(),
  /** Methodology description */
  methodology: text("methodology"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Indicator = typeof indicators.$inferSelect;
export type InsertIndicator = typeof indicators.$inferInsert;

/**
 * Causations table for mapping cause-effect relationships between events.
 * Enables intelligent analysis of how events influence each other.
 */
export const causations = mysqlTable("causations", {
  id: int("id").autoincrement().primaryKey(),
  /** ID of the cause event */
  causeEventId: int("causeEventId").notNull(),
  /** ID of the effect event */
  effectEventId: int("effectEventId").notNull(),
  /** Strength of causation (0-100) */
  strength: int("strength").notNull(),
  /** Confidence level (0-100) */
  confidence: int("confidence").notNull(),
  /** Mechanism explanation in English */
  mechanismEn: text("mechanismEn").notNull(),
  /** Mechanism explanation in Arabic */
  mechanismAr: text("mechanismAr").notNull(),
  /** JSON array of evidence/sources */
  evidence: text("evidence"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Causation = typeof causations.$inferSelect;
export type InsertCausation = typeof causations.$inferInsert;

/**
 * Recommendations table for storing policy recommendations.
 * Evidence-based, stakeholder-specific, implementation-focused.
 */
export const recommendations = mysqlTable("recommendations", {
  id: int("id").autoincrement().primaryKey(),
  /** Recommendation title in English */
  titleEn: varchar("titleEn", { length: 500 }).notNull(),
  /** Recommendation title in Arabic */
  titleAr: varchar("titleAr", { length: 500 }).notNull(),
  /** Description in English */
  descriptionEn: text("descriptionEn").notNull(),
  /** Description in Arabic */
  descriptionAr: text("descriptionAr").notNull(),
  /** Target actor ID */
  targetActorId: int("targetActorId").notNull(),
  /** Priority level */
  priority: mysqlEnum("priority", ["low", "medium", "high", "critical"]).notNull(),
  /** Implementation status */
  status: mysqlEnum("status", ["proposed", "under_review", "accepted", "rejected", "implemented"]).default("proposed").notNull(),
  /** JSON array of evidence */
  evidence: text("evidence"),
  /** JSON array of expected impacts */
  expectedImpact: text("expectedImpact"),
  /** Methodology used */
  methodology: text("methodology"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Recommendation = typeof recommendations.$inferSelect;
export type InsertRecommendation = typeof recommendations.$inferInsert;

/**
 * Banks table for storing detailed bank profiles and metrics.
 * Enhanced with comprehensive research data (2010-2025).
 */
export const banks = mysqlTable("banks", {
  id: int("id").autoincrement().primaryKey(),
  /** Bank name in English */
  nameEn: varchar("nameEn", { length: 255 }).notNull(),
  /** Bank name in Arabic */
  nameAr: varchar("nameAr", { length: 255 }).notNull(),
  /** Bank type */
  type: mysqlEnum("type", ["commercial", "islamic", "microfinance", "specialized", "exchange", "development"]).notNull(),
  /** Current status */
  status: mysqlEnum("status", ["stable", "struggling", "critical", "inactive"]).notNull(),
  /** Founding year (YYYY) */
  foundingYear: varchar("foundingYear", { length: 4 }),
  /** Ownership structure (e.g., 'State-owned', 'Private', 'Foreign') */
  ownership: text("ownership"),
  /** Sanctions status and history */
  sanctionsStatus: text("sanctionsStatus"),
  /** Operational status as of 2025 */
  operationalStatus2025: varchar("operationalStatus2025", { length: 100 }),
  /** Number of branches pre-war (2014) */
  branches2014: int("branches2014"),
  /** Number of branches current (2025) */
  branches2025: int("branches2025"),
  /** Total assets (in USD millions) - most recent */
  assets: int("assets"),
  /** Assets year (e.g., '2019') */
  assetsYear: varchar("assetsYear", { length: 4 }),
  /** Customer deposits (in USD millions) */
  deposits: int("deposits"),
  /** Number of branches (legacy field, use branches2025) */
  branches: int("branches"),
  /** Established date */
  establishedDate: varchar("establishedDate", { length: 10 }),
  /** Crisis impact summary (2-3 sentences) */
  crisisImpact: text("crisisImpact"),
  /** Compelling narrative (3-4 sentences) */
  compellingNarrative: text("compellingNarrative"),
  /** Top 3 sources (comma-separated) */
  topSources: text("topSources"),
  /** Data confidence level (High/Medium/Low with reason) */
  dataConfidence: text("dataConfidence"),
  /** JSON array of challenges */
  challenges: text("challenges"),
  /** JSON object of financial metrics */
  metrics: text("metrics"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Bank = typeof banks.$inferSelect;
export type InsertBank = typeof banks.$inferInsert;

/**
 * Stakeholders table for tracking stakeholder actions and impacts.
 * Links to actors table but tracks specific actions over time.
 */
export const stakeholders = mysqlTable("stakeholders", {
  id: int("id").autoincrement().primaryKey(),
  /** Reference to actor */
  actorId: int("actorId").notNull(),
  /** Stakeholder name in English */
  nameEn: varchar("nameEn", { length: 255 }).notNull(),
  /** Stakeholder name in Arabic */
  nameAr: varchar("nameAr", { length: 255 }).notNull(),
  /** Category */
  category: varchar("category", { length: 100 }).notNull(),
  /** Role description */
  role: text("role"),
  /** JSON array of interests */
  interests: text("interests"),
  /** JSON array of actions taken */
  actions: text("actions"),
  /** JSON array of impacts */
  impacts: text("impacts"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Stakeholder = typeof stakeholders.$inferSelect;
export type InsertStakeholder = typeof stakeholders.$inferInsert;

// ============================================================================
// YEAR-BY-YEAR DATA TABLES
// ============================================================================

/**
 * Yearly Macroeconomic Indicators
 * Stores comprehensive annual data for Yemen's economy (2010-2025)
 */
export const yearlyMacroIndicators = mysqlTable("yearly_macro_indicators", {
  id: int("id").autoincrement().primaryKey(),
  year: int("year").notNull().unique(),
  
  // GDP Metrics
  gdpCurrentUsd: bigint("gdpCurrentUsd", { mode: "number" }), // GDP in millions USD
  gdpGrowthRate: varchar("gdpGrowthRate", { length: 20 }), // Stored as string to preserve precision
  gdpPerCapita: bigint("gdpPerCapita", { mode: "number" }), // GDP per capita in USD cents
  
  // Inflation & Currency
  inflationRate: varchar("inflationRate", { length: 20 }),
  exchangeRateOfficial: varchar("exchangeRateOfficial", { length: 20 }),
  exchangeRateParallel: varchar("exchangeRateParallel", { length: 20 }),
  
  // Trade
  exports: bigint("exports", { mode: "number" }), // Million USD
  imports: bigint("imports", { mode: "number" }),
  tradeBalance: bigint("tradeBalance", { mode: "number" }),
  
  // Reserves & Debt
  foreignReserves: bigint("foreignReserves", { mode: "number" }),
  externalDebt: bigint("externalDebt", { mode: "number" }),
  
  // Population & Humanitarian
  population: bigint("population", { mode: "number" }),
  idps: int("idps"),
  refugees: int("refugees"),
  foodInsecure: int("foodInsecure"),
  
  // Metadata
  dataQuality: mysqlEnum("dataQuality", ["high", "medium", "low"]),
  notes: text("notes"),
  sources: text("sources"), // JSON array
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type YearlyMacroIndicator = typeof yearlyMacroIndicators.$inferSelect;
export type InsertYearlyMacroIndicator = typeof yearlyMacroIndicators.$inferInsert;

/**
 * Yearly Bank Data
 * Stores annual financial metrics for each bank
 */
export const yearlyBankData = mysqlTable("yearly_bank_data", {
  id: int("id").autoincrement().primaryKey(),
  year: int("year").notNull(),
  bankId: varchar("bankId", { length: 100 }).notNull(),
  bankName: varchar("bankName", { length: 255 }).notNull(),
  bankType: mysqlEnum("bankType", ["commercial", "islamic", "microfinance", "central"]),
  
  // Financial Metrics (stored in millions YER or USD)
  totalAssets: bigint("totalAssets", { mode: "number" }),
  totalDeposits: bigint("totalDeposits", { mode: "number" }),
  totalLoans: bigint("totalLoans", { mode: "number" }),
  nplAmount: bigint("nplAmount", { mode: "number" }),
  nplRatio: varchar("nplRatio", { length: 20 }),
  nplProvision: bigint("nplProvision", { mode: "number" }),
  
  // Capital & Liquidity
  capitalAdequacyRatio: varchar("capitalAdequacyRatio", { length: 20 }),
  liquidityRatio: varchar("liquidityRatio", { length: 20 }),
  
  // Profitability
  netIncome: bigint("netIncome", { mode: "number" }),
  returnOnAssets: varchar("returnOnAssets", { length: 20 }),
  returnOnEquity: varchar("returnOnEquity", { length: 20 }),
  
  // Operations
  branches: int("branches"),
  employees: int("employees"),
  customers: int("customers"),
  
  // Microfinance-specific
  activeBorrowers: int("activeBorrowers"),
  grossLoanPortfolio: bigint("grossLoanPortfolio", { mode: "number" }),
  
  // Metadata
  auditFirm: varchar("auditFirm", { length: 255 }),
  auditDate: varchar("auditDate", { length: 10 }),
  dataQuality: mysqlEnum("dataQuality", ["high", "medium", "low"]),
  notes: text("notes"),
  sources: text("sources"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type YearlyBankData = typeof yearlyBankData.$inferSelect;
export type InsertYearlyBankData = typeof yearlyBankData.$inferInsert;

/**
 * Yearly Aid Data
 * Stores annual humanitarian aid by donor
 */
export const yearlyAidData = mysqlTable("yearly_aid_data", {
  id: int("id").autoincrement().primaryKey(),
  year: int("year").notNull(),
  donorId: varchar("donorId", { length: 100 }).notNull(),
  donorName: varchar("donorName", { length: 255 }).notNull(),
  donorType: mysqlEnum("donorType", ["un_agency", "bilateral", "multilateral", "ngo"]),
  
  // Funding (in USD)
  totalFunding: bigint("totalFunding", { mode: "number" }),
  fundingRequested: bigint("fundingRequested", { mode: "number" }),
  fundingGap: bigint("fundingGap", { mode: "number" }),
  fundingPercentage: varchar("fundingPercentage", { length: 20 }),
  
  // Beneficiaries
  totalBeneficiaries: int("totalBeneficiaries"),
  childrenBeneficiaries: int("childrenBeneficiaries"),
  womenBeneficiaries: int("womenBeneficiaries"),
  
  // Sector Allocation (USD)
  foodSecurity: bigint("foodSecurity", { mode: "number" }),
  health: bigint("health", { mode: "number" }),
  wash: bigint("wash", { mode: "number" }),
  education: bigint("education", { mode: "number" }),
  protection: bigint("protection", { mode: "number" }),
  shelter: bigint("shelter", { mode: "number" }),
  nutrition: bigint("nutrition", { mode: "number" }),
  logistics: bigint("logistics", { mode: "number" }),
  other: bigint("other", { mode: "number" }),
  
  // Operations
  projects: int("projects"),
  partners: int("partners"),
  governoratesCovered: int("governoratesCovered"),
  
  // Metadata
  dataQuality: mysqlEnum("dataQuality", ["high", "medium", "low"]),
  notes: text("notes"),
  sources: text("sources"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type YearlyAidData = typeof yearlyAidData.$inferSelect;
export type InsertYearlyAidData = typeof yearlyAidData.$inferInsert;

/**
 * Yearly Conflict Data
 * Stores annual conflict casualties and displacement
 */
export const yearlyConflictData = mysqlTable("yearly_conflict_data", {
  id: int("id").autoincrement().primaryKey(),
  year: int("year").notNull().unique(),
  
  // Casualties
  totalFatalities: int("totalFatalities"),
  civilianFatalities: int("civilianFatalities"),
  combatantFatalities: int("combatantFatalities"),
  totalInjuries: int("totalInjuries"),
  childDeaths: int("childDeaths"),
  
  // Displacement
  newIdps: int("newIdps"),
  totalIdps: int("totalIdps"),
  returnees: int("returnees"),
  
  // Infrastructure Damage
  healthFacilitiesDamaged: int("healthFacilitiesDamaged"),
  schoolsDamaged: int("schoolsDamaged"),
  waterSystemsDamaged: int("waterSystemsDamaged"),
  
  // Metadata
  dataQuality: mysqlEnum("dataQuality", ["high", "medium", "low"]),
  notes: text("notes"),
  sources: text("sources"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type YearlyConflictData = typeof yearlyConflictData.$inferSelect;
export type InsertYearlyConflictData = typeof yearlyConflictData.$inferInsert;

/**
 * Yearly Remittance Data
 * Stores annual remittance and money exchange sector data
 */
export const yearlyRemittanceData = mysqlTable("yearly_remittance_data", {
  id: int("id").autoincrement().primaryKey(),
  year: int("year").notNull().unique(),
  
  // Remittances
  totalRemittances: bigint("totalRemittances", { mode: "number" }), // USD millions
  remittanceOperations: int("remittanceOperations"),
  
  // Money Exchange Sector
  moneyExchangers: int("moneyExchangers"),
  licensedCompanies: int("licensedCompanies"),
  
  // Metadata
  dataQuality: mysqlEnum("dataQuality", ["high", "medium", "low"]),
  notes: text("notes"),
  sources: text("sources"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type YearlyRemittanceData = typeof yearlyRemittanceData.$inferSelect;
export type InsertYearlyRemittanceData = typeof yearlyRemittanceData.$inferInsert;


// ============================================================================
// TRANSPARENCY & ACCOUNTABILITY FRAMEWORK
// ============================================================================

/**
 * Source Confidence Scores
 * Tracks confidence level for every data source across 5 dimensions
 */
export const sourceConfidenceScores = mysqlTable("source_confidence_scores", {
  id: int("id").autoincrement().primaryKey(),
  sourceId: varchar("sourceId", { length: 100 }).notNull(),
  sourceName: varchar("sourceName", { length: 255 }).notNull(),
  sourceType: mysqlEnum("sourceType", [
    "multilateral",
    "government",
    "de_facto_authority",
    "think_tank",
    "ngo",
    "media",
    "academic",
    "commercial",
  ]).notNull(),
  
  // Confidence dimensions (0-100 scale)
  timelinessScore: int("timelinessScore").notNull(),
  transparencyScore: int("transparencyScore").notNull(),
  methodologyScore: int("methodologyScore").notNull(),
  independenceScore: int("independenceScore").notNull(),
  consistencyScore: int("consistencyScore").notNull(),
  
  // Overall confidence
  overallConfidence: decimal("overallConfidence", { precision: 5, scale: 2 }).notNull(),
  confidenceLevel: mysqlEnum("confidenceLevel", ["low", "medium", "high", "very_high"]).notNull(),
  
  // Metadata
  lastReviewed: timestamp("lastReviewed").defaultNow().notNull(),
  reviewedBy: varchar("reviewedBy", { length: 255 }),
  notes: text("notes"),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SourceConfidenceScore = typeof sourceConfidenceScores.$inferSelect;
export type InsertSourceConfidenceScore = typeof sourceConfidenceScores.$inferInsert;

/**
 * Source Bias Profiles
 * Documents structural biases and incentives for each source
 */
export const sourceBiasProfiles = mysqlTable("source_bias_profiles", {
  id: int("id").autoincrement().primaryKey(),
  sourceId: varchar("sourceId", { length: 100 }).notNull(),
  sourceName: varchar("sourceName", { length: 255 }).notNull(),
  
  // Bias classification
  primaryBias: varchar("primaryBias", { length: 100 }).notNull(),
  biasDescription: text("biasDescription").notNull(),
  
  // Structural incentives
  fundingSource: text("fundingSource"),
  politicalAffiliation: varchar("politicalAffiliation", { length: 255 }),
  economicInterests: text("economicInterests"),
  
  // Narrative tendencies
  narrativeTendency: text("narrativeTendency").notNull(),
  typicalFraming: text("typicalFraming"),
  blindSpots: text("blindSpots"),
  
  // Strengths despite bias
  strengths: text("strengths").notNull(),
  bestUsedFor: text("bestUsedFor"),
  
  // Examples
  exampleBias: json("exampleBias"),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SourceBiasProfile = typeof sourceBiasProfiles.$inferSelect;
export type InsertSourceBiasProfile = typeof sourceBiasProfiles.$inferInsert;

/**
 * Data Conflicts
 * Tracks when two credible sources disagree on the same indicator
 */
export const dataConflicts = mysqlTable("data_conflicts", {
  id: int("id").autoincrement().primaryKey(),
  indicatorId: varchar("indicatorId", { length: 100 }).notNull(),
  indicatorName: varchar("indicatorName", { length: 255 }).notNull(),
  year: int("year").notNull(),
  
  // Conflicting values
  primaryValue: decimal("primaryValue", { precision: 20, scale: 2 }).notNull(),
  primarySource: varchar("primarySource", { length: 255 }).notNull(),
  primarySourceId: varchar("primarySourceId", { length: 100 }).notNull(),
  
  alternativeValue: decimal("alternativeValue", { precision: 20, scale: 2 }).notNull(),
  alternativeSource: varchar("alternativeSource", { length: 255 }).notNull(),
  alternativeSourceId: varchar("alternativeSourceId", { length: 100 }).notNull(),
  
  // Conflict analysis
  discrepancyPercent: decimal("discrepancyPercent", { precision: 10, scale: 2 }).notNull(),
  conflictSeverity: mysqlEnum("conflictSeverity", ["minor", "moderate", "major", "critical"]).notNull(),
  
  // Explanation
  methodologicalDifference: text("methodologicalDifference"),
  coverageDifference: text("coverageDifference"),
  timingDifference: text("timingDifference"),
  
  // Resolution
  resolutionMethod: text("resolutionMethod").notNull(),
  primarySeriesRationale: text("primarySeriesRationale").notNull(),
  alternativeSeriesAvailable: int("alternativeSeriesAvailable").notNull().default(1),
  
  // Additional sources
  additionalSources: json("additionalSources"),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type DataConflict = typeof dataConflicts.$inferSelect;
export type InsertDataConflict = typeof dataConflicts.$inferInsert;

/**
 * Data Revision Log
 * Tracks every change to every indicator with full transparency
 */
export const dataRevisionLog = mysqlTable("data_revision_log", {
  id: int("id").autoincrement().primaryKey(),
  
  // What changed
  entityType: mysqlEnum("entityType", ["indicator", "event", "actor", "narrative", "source"]).notNull(),
  entityId: varchar("entityId", { length: 100 }).notNull(),
  entityName: varchar("entityName", { length: 255 }).notNull(),
  year: int("year"),
  
  // Change details
  changeType: mysqlEnum("changeType", [
    "created",
    "updated_value",
    "updated_source",
    "updated_methodology",
    "updated_narrative",
    "corrected_error",
    "added_alternative_series",
    "deleted",
  ]).notNull(),
  
  // Before/After
  previousValue: text("previousValue"),
  newValue: text("newValue"),
  
  // Why changed
  changeReason: text("changeReason").notNull(),
  triggerEvent: varchar("triggerEvent", { length: 255 }),
  sourceUpdate: varchar("sourceUpdate", { length: 255 }),
  
  // Who changed
  changedBy: varchar("changedBy", { length: 255 }).notNull(),
  reviewedBy: varchar("reviewedBy", { length: 255 }),
  
  // References
  supportingDocuments: json("supportingDocuments"),
  relatedRevisions: json("relatedRevisions"),
  
  // Metadata
  changeTimestamp: timestamp("changeTimestamp").defaultNow().notNull(),
  publiclyVisible: int("publiclyVisible").notNull().default(1),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type DataRevision = typeof dataRevisionLog.$inferSelect;
export type InsertDataRevision = typeof dataRevisionLog.$inferInsert;

/**
 * Actor Actions
 * Timeline of every major action by key actors
 */
export const actorActions = mysqlTable("actor_actions", {
  id: int("id").autoincrement().primaryKey(),
  
  // Actor info
  actorId: varchar("actorId", { length: 100 }).notNull(),
  actorName: varchar("actorName", { length: 255 }).notNull(),
  actorType: mysqlEnum("actorType", [
    "central_bank",
    "government",
    "de_facto_authority",
    "armed_group",
    "foreign_government",
    "multilateral",
    "ngo",
    "bank",
    "mfi",
    "commercial",
  ]).notNull(),
  
  // Action details
  actionDate: timestamp("actionDate").notNull(),
  actionType: varchar("actionType", { length: 100 }).notNull(),
  actionTitle: varchar("actionTitle", { length: 255 }).notNull(),
  actionDescription: text("actionDescription").notNull(),
  
  // Impact classification
  impactDirection: mysqlEnum("impactDirection", [
    "stabilizing",
    "destabilizing",
    "redistributive",
    "extractive",
    "neutral",
    "mixed",
  ]).notNull(),
  
  timeHorizon: mysqlEnum("timeHorizon", [
    "immediate",
    "short_term",
    "medium_term",
    "long_term",
    "structural",
  ]).notNull(),
  
  // Affected indicators
  affectedIndicators: json("affectedIndicators").notNull(),
  
  // Linked events
  linkedEventIds: json("linkedEventIds"),
  
  // References
  sources: json("sources").notNull(),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ActorAction = typeof actorActions.$inferSelect;
export type InsertActorAction = typeof actorActions.$inferInsert;

/**
 * Actor Impact Profiles
 * Net impact dashboard for each actor across multiple dimensions
 */
export const actorImpactProfiles = mysqlTable("actor_impact_profiles", {
  id: int("id").autoincrement().primaryKey(),
  
  // Actor info
  actorId: varchar("actorId", { length: 100 }).notNull().unique(),
  actorName: varchar("actorName", { length: 255 }).notNull(),
  
  // Time period
  startYear: int("startYear").notNull(),
  endYear: int("endYear").notNull(),
  
  // Macro-stability impact
  macroStabilityScore: decimal("macroStabilityScore", { precision: 5, scale: 2 }),
  volatilityChange: decimal("volatilityChange", { precision: 10, scale: 2 }),
  macroStabilityEvidence: json("macroStabilityEvidence").notNull(),
  
  // Distributional impact
  distributionalScore: decimal("distributionalScore", { precision: 5, scale: 2 }),
  poorHouseholdsImpact: text("poorHouseholdsImpact"),
  richHouseholdsImpact: text("richHouseholdsImpact"),
  distributionalEvidence: json("distributionalEvidence").notNull(),
  
  // Institutional impact
  institutionalScore: decimal("institutionalScore", { precision: 5, scale: 2 }),
  institutionalStrengthening: text("institutionalStrengthening"),
  institutionalWeakening: text("institutionalWeakening"),
  institutionalEvidence: json("institutionalEvidence").notNull(),
  
  // Overall assessment
  overallAssessment: text("overallAssessment").notNull(),
  keyFindings: json("keyFindings").notNull(),
  
  // Confidence
  assessmentConfidence: mysqlEnum("assessmentConfidence", ["low", "medium", "high"]).notNull(),
  
  // References
  dataSeriesUsed: json("dataSeriesUsed").notNull(),
  reportsUsed: json("reportsUsed").notNull(),
  
  // Metadata
  lastUpdated: timestamp("lastUpdated").defaultNow().notNull(),
  analystNotes: text("analystNotes"),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ActorImpactProfile = typeof actorImpactProfiles.$inferSelect;
export type InsertActorImpactProfile = typeof actorImpactProfiles.$inferInsert;
