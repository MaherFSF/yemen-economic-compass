import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, files, InsertFile } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

/**
 * File Management Queries
 */

// Create a new file record
export async function createFile(file: InsertFile) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(files).values(file);
  return result;
}

// Get all files uploaded by a specific user
export async function getFilesByUser(userId: number) {
  const db = await getDb();
  if (!db) {
    return [];
  }

  return await db.select().from(files).where(eq(files.uploadedBy, userId));
}

// Get all files (admin only)
export async function getAllFiles() {
  const db = await getDb();
  if (!db) {
    return [];
  }

  return await db.select().from(files);
}

// Get a single file by ID
export async function getFileById(fileId: number) {
  const db = await getDb();
  if (!db) {
    return undefined;
  }

  const result = await db.select().from(files).where(eq(files.id, fileId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// Delete a file record
export async function deleteFile(fileId: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  await db.delete(files).where(eq(files.id, fileId));
}

// Get files by category
export async function getFilesByCategory(category: "report" | "chart" | "document" | "image" | "other") {
  const db = await getDb();
  if (!db) {
    return [];
  }

  return await db.select().from(files).where(eq(files.category, category));
}


/**
 * Events Management Queries
 */

import { events, InsertEvent, actors, InsertActor, indicators, InsertIndicator, causations, InsertCausation, recommendations, InsertRecommendation, banks, InsertBank, stakeholders, InsertStakeholder } from "../drizzle/schema";

// Create a new event
export async function createEvent(event: InsertEvent) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(events).values(event);
  return result;
}

// Get all events
export async function getAllEvents() {
  const db = await getDb();
  if (!db) {
    return [];
  }

  return await db.select().from(events);
}

// Get event by ID
export async function getEventById(eventId: number) {
  const db = await getDb();
  if (!db) {
    return undefined;
  }

  const result = await db.select().from(events).where(eq(events.id, eventId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/**
 * Actors Management Queries
 */

// Create a new actor
export async function createActor(actor: InsertActor) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(actors).values(actor);
  return result;
}

// Get all actors
export async function getAllActors() {
  const db = await getDb();
  if (!db) {
    return [];
  }

  return await db.select().from(actors);
}

// Get actor by ID
export async function getActorById(actorId: number) {
  const db = await getDb();
  if (!db) {
    return undefined;
  }

  const result = await db.select().from(actors).where(eq(actors.id, actorId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/**
 * Indicators Management Queries
 */

// Create a new indicator
export async function createIndicator(indicator: InsertIndicator) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(indicators).values(indicator);
  return result;
}

// Get all indicators
export async function getAllIndicators() {
  const db = await getDb();
  if (!db) {
    return [];
  }

  return await db.select().from(indicators);
}

/**
 * Causations Management Queries
 */

// Create a new causation
export async function createCausation(causation: InsertCausation) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(causations).values(causation);
  return result;
}

// Get all causations
export async function getAllCausations() {
  const db = await getDb();
  if (!db) {
    return [];
  }

  return await db.select().from(causations);
}

/**
 * Recommendations Management Queries
 */

// Create a new recommendation
export async function createRecommendation(recommendation: InsertRecommendation) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(recommendations).values(recommendation);
  return result;
}

// Get all recommendations
export async function getAllRecommendations() {
  const db = await getDb();
  if (!db) {
    return [];
  }

  return await db.select().from(recommendations);
}

/**
 * Banks Management Queries
 */

// Create a new bank
export async function createBank(bank: InsertBank) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(banks).values(bank);
  return result;
}

// Get all banks
export async function getAllBanks() {
  const db = await getDb();
  if (!db) {
    return [];
  }

  return await db.select().from(banks);
}

// Get bank by ID
export async function getBankById(bankId: number) {
  const db = await getDb();
  if (!db) {
    return undefined;
  }

  const result = await db.select().from(banks).where(eq(banks.id, bankId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/**
 * Stakeholders Management Queries
 */

// Create a new stakeholder
export async function createStakeholder(stakeholder: InsertStakeholder) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(stakeholders).values(stakeholder);
  return result;
}

// Get all stakeholders
export async function getAllStakeholders() {
  const db = await getDb();
  if (!db) {
    return [];
  }

  return await db.select().from(stakeholders);
}
