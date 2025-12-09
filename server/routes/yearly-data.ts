import { z } from 'zod';
import { publicProcedure, router } from '../_core/trpc';
import { getDb } from '../db';
import {
  yearlyMacroIndicators,
  yearlyBankData,
  yearlyAidData,
  yearlyConflictData,
  yearlyRemittanceData,
} from '../../drizzle/schema';
import { eq, and, gte, lte } from 'drizzle-orm';

/**
 * tRPC Router for Year-by-Year Data
 * 
 * Provides API endpoints for fetching comprehensive annual data
 * across all sectors: macro, banking, aid, conflict, remittances
 */

export const yearlyDataRouter = router({
  // ============================================================================
  // MACROECONOMIC INDICATORS
  // ============================================================================

  getMacroIndicatorByYear: publicProcedure
    .input(z.object({ year: z.number().int().min(2010).max(2025) }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return null;

      const result = await db
        .select()
        .from(yearlyMacroIndicators)
        .where(eq(yearlyMacroIndicators.year, input.year))
        .limit(1);

      return result.length > 0 ? result[0] : null;
    }),

  getMacroIndicatorsByRange: publicProcedure
    .input(
      z.object({
        startYear: z.number().int().min(2010).max(2025),
        endYear: z.number().int().min(2010).max(2025),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];

      return await db
        .select()
        .from(yearlyMacroIndicators)
        .where(
          and(
            gte(yearlyMacroIndicators.year, input.startYear),
            lte(yearlyMacroIndicators.year, input.endYear)
          )
        )
        .orderBy(yearlyMacroIndicators.year);
    }),

  getAllMacroIndicators: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];

    return await db
      .select()
      .from(yearlyMacroIndicators)
      .orderBy(yearlyMacroIndicators.year);
  }),

  // ============================================================================
  // BANKING SECTOR DATA
  // ============================================================================

  getBankDataByYear: publicProcedure
    .input(
      z.object({
        year: z.number().int().min(2010).max(2025),
        bankId: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];

      const conditions = [eq(yearlyBankData.year, input.year)];
      if (input.bankId) {
        conditions.push(eq(yearlyBankData.bankId, input.bankId));
      }

      return await db
        .select()
        .from(yearlyBankData)
        .where(and(...conditions));
    }),

  getBankDataByRange: publicProcedure
    .input(
      z.object({
        startYear: z.number().int().min(2010).max(2025),
        endYear: z.number().int().min(2010).max(2025),
        bankId: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];

      const conditions = [
        gte(yearlyBankData.year, input.startYear),
        lte(yearlyBankData.year, input.endYear),
      ];
      if (input.bankId) {
        conditions.push(eq(yearlyBankData.bankId, input.bankId));
      }

      return await db
        .select()
        .from(yearlyBankData)
        .where(and(...conditions))
        .orderBy(yearlyBankData.year);
    }),

  getAllBanks: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];

    // Get unique banks across all years
    const banks = await db
      .selectDistinct({
        bankId: yearlyBankData.bankId,
        bankName: yearlyBankData.bankName,
        bankType: yearlyBankData.bankType,
      })
      .from(yearlyBankData);

    return banks;
  }),

  // ============================================================================
  // HUMANITARIAN AID DATA
  // ============================================================================

  getAidDataByYear: publicProcedure
    .input(
      z.object({
        year: z.number().int().min(2010).max(2025),
        donorId: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];

      const conditions = [eq(yearlyAidData.year, input.year)];
      if (input.donorId) {
        conditions.push(eq(yearlyAidData.donorId, input.donorId));
      }

      return await db
        .select()
        .from(yearlyAidData)
        .where(and(...conditions));
    }),

  getAidDataByRange: publicProcedure
    .input(
      z.object({
        startYear: z.number().int().min(2010).max(2025),
        endYear: z.number().int().min(2010).max(2025),
        donorId: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];

      const conditions = [
        gte(yearlyAidData.year, input.startYear),
        lte(yearlyAidData.year, input.endYear),
      ];
      if (input.donorId) {
        conditions.push(eq(yearlyAidData.donorId, input.donorId));
      }

      return await db
        .select()
        .from(yearlyAidData)
        .where(and(...conditions))
        .orderBy(yearlyAidData.year);
    }),

  getAllDonors: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];

    // Get unique donors across all years
    const donors = await db
      .selectDistinct({
        donorId: yearlyAidData.donorId,
        donorName: yearlyAidData.donorName,
        donorType: yearlyAidData.donorType,
      })
      .from(yearlyAidData);

    return donors;
  }),

  // ============================================================================
  // CONFLICT DATA
  // ============================================================================

  getConflictDataByYear: publicProcedure
    .input(z.object({ year: z.number().int().min(2010).max(2025) }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return null;

      const result = await db
        .select()
        .from(yearlyConflictData)
        .where(eq(yearlyConflictData.year, input.year))
        .limit(1);

      return result.length > 0 ? result[0] : null;
    }),

  getConflictDataByRange: publicProcedure
    .input(
      z.object({
        startYear: z.number().int().min(2010).max(2025),
        endYear: z.number().int().min(2010).max(2025),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];

      return await db
        .select()
        .from(yearlyConflictData)
        .where(
          and(
            gte(yearlyConflictData.year, input.startYear),
            lte(yearlyConflictData.year, input.endYear)
          )
        )
        .orderBy(yearlyConflictData.year);
    }),

  // ============================================================================
  // REMITTANCE DATA
  // ============================================================================

  getRemittanceDataByYear: publicProcedure
    .input(z.object({ year: z.number().int().min(2010).max(2025) }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return null;

      const result = await db
        .select()
        .from(yearlyRemittanceData)
        .where(eq(yearlyRemittanceData.year, input.year))
        .limit(1);

      return result.length > 0 ? result[0] : null;
    }),

  getRemittanceDataByRange: publicProcedure
    .input(
      z.object({
        startYear: z.number().int().min(2010).max(2025),
        endYear: z.number().int().min(2010).max(2025),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];

      return await db
        .select()
        .from(yearlyRemittanceData)
        .where(
          and(
            gte(yearlyRemittanceData.year, input.startYear),
            lte(yearlyRemittanceData.year, input.endYear)
          )
        )
        .orderBy(yearlyRemittanceData.year);
    }),

  // ============================================================================
  // COMPREHENSIVE DATA (All Sectors for a Year)
  // ============================================================================

  getComprehensiveDataByYear: publicProcedure
    .input(z.object({ year: z.number().int().min(2010).max(2025) }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        return {
          year: input.year,
          macro: null,
          banks: [],
          donors: [],
          conflict: null,
          remittance: null,
        };
      }

      const [macro, banks, donors, conflict, remittance] = await Promise.all([
        db
          .select()
          .from(yearlyMacroIndicators)
          .where(eq(yearlyMacroIndicators.year, input.year))
          .limit(1),
        db
          .select()
          .from(yearlyBankData)
          .where(eq(yearlyBankData.year, input.year)),
        db
          .select()
          .from(yearlyAidData)
          .where(eq(yearlyAidData.year, input.year)),
        db
          .select()
          .from(yearlyConflictData)
          .where(eq(yearlyConflictData.year, input.year))
          .limit(1),
        db
          .select()
          .from(yearlyRemittanceData)
          .where(eq(yearlyRemittanceData.year, input.year))
          .limit(1),
      ]);

      return {
        year: input.year,
        macro: macro.length > 0 ? macro[0] : null,
        banks,
        donors,
        conflict: conflict.length > 0 ? conflict[0] : null,
        remittance: remittance.length > 0 ? remittance[0] : null,
      };
    }),
});
