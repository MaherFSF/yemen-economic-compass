import { pgTable, text, integer, boolean, timestamp, jsonb, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const banks = pgTable('banks', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  
  // Basic Information
  name_en: text('name_en').notNull(),
  name_ar: text('name_ar').notNull(),
  short_name: varchar('short_name', { length: 50 }),
  
  // Classification
  type: varchar('type', { length: 50 }).notNull(), // 'commercial', 'islamic', 'microfinance', 'specialized'
  ownership: varchar('ownership', { length: 50 }), // 'state-owned', 'private', 'mixed', 'foreign'
  region: varchar('region', { length: 50 }), // 'aden', 'sanaa', 'both', 'international'
  
  // Operational Status
  status: varchar('status', { length: 30 }).notNull().default('active'), // 'active', 'suspended', 'merged', 'closed'
  operational_since: integer('operational_since'),
  headquarters: text('headquarters'),
  
  // Financial Data
  total_assets: integer('total_assets'), // in millions USD
  total_deposits: integer('total_deposits'), // in millions USD
  total_loans: integer('total_loans'), // in millions USD
  capital: integer('capital'), // in millions USD
  branches_count: integer('branches_count').default(0),
  atms_count: integer('atms_count').default(0),
  employees_count: integer('employees_count'),
  
  // Services
  services: jsonb('services').$type<string[]>(), // ['retail', 'corporate', 'investment', 'remittances', etc.]
  digital_banking: boolean('digital_banking').default(false),
  mobile_app: boolean('mobile_app').default(false),
  
  // Regulatory
  cby_license_number: varchar('cby_license_number', { length: 50 }),
  swift_code: varchar('swift_code', { length: 11 }),
  
  // Contact & Web
  website: text('website'),
  email: varchar('email', { length: 255 }),
  phone: varchar('phone', { length: 50 }),
  
  // Additional Info
  description_en: text('description_en'),
  description_ar: text('description_ar'),
  key_shareholders: jsonb('key_shareholders').$type<Array<{ name: string; percentage: number }>>(),
  affiliated_with: text('affiliated_with'), // parent company or group
  
  // Metadata
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

export const insertBankSchema = createInsertSchema(banks);
export const selectBankSchema = createSelectSchema(banks);

export type Bank = typeof banks.$inferSelect;
export type InsertBank = typeof banks.$inferInsert;
