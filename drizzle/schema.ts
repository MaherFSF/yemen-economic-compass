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