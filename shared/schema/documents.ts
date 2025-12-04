import { pgTable, text, integer, timestamp, jsonb, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const documents = pgTable('documents', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  
  // Basic Information
  title_en: text('title_en').notNull(),
  title_ar: text('title_ar'),
  
  // Classification
  type: varchar('type', { length: 50 }).notNull(), // 'report', 'study', 'policy_brief', 'working_paper', 'presentation', 'dataset'
  category: varchar('category', { length: 50 }), // 'economic_analysis', 'humanitarian', 'development', 'financial_sector', etc.
  
  // Publication Details
  author: text('author'),
  organization: varchar('organization', { length: 255 }).notNull(), // 'World Bank', 'IMF', 'UN OCHA', etc.
  publication_date: timestamp('publication_date'),
  publication_year: integer('publication_year'),
  
  // File Information
  file_url: text('file_url').notNull(), // path to PDF or external URL
  file_size: integer('file_size'), // in KB
  pages_count: integer('pages_count'),
  language: varchar('language', { length: 20 }).default('en'), // 'en', 'ar', 'both'
  
  // Content
  abstract_en: text('abstract_en'),
  abstract_ar: text('abstract_ar'),
  key_findings: jsonb('key_findings').$type<string[]>(),
  keywords: jsonb('keywords').$type<string[]>(),
  
  // Topical Coverage
  topics: jsonb('topics').$type<string[]>(), // ['gdp', 'inflation', 'poverty', 'banking', etc.]
  geographic_coverage: jsonb('geographic_coverage').$type<string[]>(), // ['yemen', 'aden', 'sanaa', etc.]
  time_period_covered: varchar('time_period_covered', { length: 100 }), // '2015-2024', '2020', etc.
  
  // Related Entities
  related_stakeholders: jsonb('related_stakeholders').$type<string[]>(), // stakeholder IDs or names
  related_banks: jsonb('related_banks').$type<string[]>(),
  
  // Citation
  citation_apa: text('citation_apa'),
  citation_mla: text('citation_mla'),
  doi: varchar('doi', { length: 100 }),
  isbn: varchar('isbn', { length: 20 }),
  
  // Metrics
  download_count: integer('download_count').default(0),
  view_count: integer('view_count').default(0),
  
  // Metadata
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

export const insertDocumentSchema = createInsertSchema(documents);
export const selectDocumentSchema = createSelectSchema(documents);

export type Document = typeof documents.$inferSelect;
export type InsertDocument = typeof documents.$inferInsert;
