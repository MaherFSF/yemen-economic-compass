import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

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
 */
export const banks = mysqlTable("banks", {
  id: int("id").autoincrement().primaryKey(),
  /** Bank name in English */
  nameEn: varchar("nameEn", { length: 255 }).notNull(),
  /** Bank name in Arabic */
  nameAr: varchar("nameAr", { length: 255 }).notNull(),
  /** Bank type */
  type: mysqlEnum("type", ["commercial", "islamic", "microfinance", "specialized"]).notNull(),
  /** Current status */
  status: mysqlEnum("status", ["stable", "struggling", "critical", "inactive"]).notNull(),
  /** Total assets (in USD millions) */
  assets: int("assets"),
  /** Customer deposits (in USD millions) */
  deposits: int("deposits"),
  /** Number of branches */
  branches: int("branches"),
  /** Established date */
  establishedDate: varchar("establishedDate", { length: 10 }),
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
