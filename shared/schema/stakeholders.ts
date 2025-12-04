import { pgTable, text, integer, timestamp, jsonb, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const stakeholders = pgTable('stakeholders', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  
  // Basic Information
  name_en: text('name_en').notNull(),
  name_ar: text('name_ar').notNull(),
  acronym: varchar('acronym', { length: 20 }),
  
  // Classification
  category: varchar('category', { length: 50 }).notNull(), // 'donor', 'government', 'ngo', 'bank', 'un_agency', 'bilateral', 'multilateral'
  sub_category: varchar('sub_category', { length: 50 }), // 'humanitarian', 'development', 'financial', etc.
  type: varchar('type', { length: 50 }), // 'international', 'regional', 'national', 'local'
  
  // Geographic & Operational
  headquarters: text('headquarters'),
  country: varchar('country', { length: 100 }),
  operates_in_yemen_since: integer('operates_in_yemen_since'),
  operational_regions: jsonb('operational_regions').$type<string[]>(), // ['aden', 'sanaa', 'taiz', etc.]
  
  // Financial Data
  total_funding_provided: integer('total_funding_provided'), // in millions USD
  funding_2024: integer('funding_2024'),
  funding_2023: integer('funding_2023'),
  funding_2022: integer('funding_2022'),
  
  // Projects & Impact
  active_projects_count: integer('active_projects_count').default(0),
  completed_projects_count: integer('completed_projects_count').default(0),
  beneficiaries_reached: integer('beneficiaries_reached'),
  
  // Focus Areas
  sectors: jsonb('sectors').$type<string[]>(), // ['health', 'education', 'food_security', 'wash', etc.]
  target_groups: jsonb('target_groups').$type<string[]>(), // ['idps', 'women', 'children', 'youth', etc.]
  
  // Relationships
  partners: jsonb('partners').$type<string[]>(), // IDs or names of partner organizations
  funding_sources: jsonb('funding_sources').$type<string[]>(), // for NGOs: who funds them
  implementing_partners: jsonb('implementing_partners').$type<string[]>(),
  
  // Contact & Web
  website: text('website'),
  email: varchar('email', { length: 255 }),
  phone: varchar('phone', { length: 50 }),
  social_media: jsonb('social_media').$type<{ twitter?: string; linkedin?: string; facebook?: string }>(),
  
  // Additional Info
  description_en: text('description_en'),
  description_ar: text('description_ar'),
  mandate: text('mandate'),
  key_personnel: jsonb('key_personnel').$type<Array<{ name: string; title: string }>>(),
  
  // Reports & Publications
  reports: jsonb('reports').$type<Array<{ title: string; url: string; year: number }>>(),
  
  // Metadata
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

export const insertStakeholderSchema = createInsertSchema(stakeholders);
export const selectStakeholderSchema = createSelectSchema(stakeholders);

export type Stakeholder = typeof stakeholders.$inferSelect;
export type InsertStakeholder = typeof stakeholders.$inferInsert;
