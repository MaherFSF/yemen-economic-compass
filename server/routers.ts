import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { storagePut } from "./storage";
import * as db from "./db";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // File management router
  files: router({
    // Upload file - receives base64 data from client
    upload: protectedProcedure
      .input(z.object({
        filename: z.string(),
        mimeType: z.string(),
        fileSize: z.number(),
        category: z.enum(["report", "chart", "document", "image", "other"]),
        description: z.string().optional(),
        base64Data: z.string(), // Base64 encoded file data
      }))
      .mutation(async ({ ctx, input }) => {
        // Convert base64 to buffer
        const buffer = Buffer.from(input.base64Data, 'base64');
        
        // Generate unique file key with random suffix to prevent enumeration
        const randomSuffix = Math.random().toString(36).substring(2, 15);
        const fileExtension = input.filename.split('.').pop();
        const fileKey = `user-${ctx.user.id}/files/${Date.now()}-${randomSuffix}.${fileExtension}`;
        
        // Upload to S3
        const { url } = await storagePut(fileKey, buffer, input.mimeType);
        
        // Save metadata to database
        await db.createFile({
          filename: input.filename,
          fileKey,
          url,
          mimeType: input.mimeType,
          fileSize: input.fileSize,
          category: input.category,
          description: input.description || null,
          uploadedBy: ctx.user.id,
        });
        
        return { success: true, url, fileKey };
      }),
    
    // List all files for current user
    list: protectedProcedure.query(async ({ ctx }) => {
      return await db.getFilesByUser(ctx.user.id);
    }),
    
    // List all files (admin only)
    listAll: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== 'admin') {
        throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
      }
      return await db.getAllFiles();
    }),
    
    // Get files by category
    listByCategory: publicProcedure
      .input(z.object({
        category: z.enum(["report", "chart", "document", "image", "other"])
      }))
      .query(async ({ input }) => {
        return await db.getFilesByCategory(input.category);
      }),
    
    // Delete a file
    delete: protectedProcedure
      .input(z.object({ fileId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        // Get file to check ownership
        const file = await db.getFileById(input.fileId);
        
        if (!file) {
          throw new TRPCError({ code: 'NOT_FOUND', message: 'File not found' });
        }
        
        // Only owner or admin can delete
        if (file.uploadedBy !== ctx.user.id && ctx.user.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Not authorized to delete this file' });
        }
        
        // Delete from database (S3 files remain for now - can add S3 deletion if needed)
        await db.deleteFile(input.fileId);
        
        return { success: true };
      }),
  }),

  // Banks router
  banks: router({
    list: publicProcedure.query(async () => {
      return await db.getAllBanks();
    }),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await db.getBankById(input.id);
      }),
  }),

  // Actors router
  actors: router({
    list: publicProcedure.query(async () => {
      return await db.getAllActors();
    }),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await db.getActorById(input.id);
      }),
  }),

  // Indicators router
  indicators: router({
    list: publicProcedure.query(async () => {
      return await db.getAllIndicators();
    }),
  }),

  // Events router
  events: router({
    list: publicProcedure.query(async () => {
      return await db.getAllEvents();
    }),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await db.getEventById(input.id);
      }),
  }),

  // Causations router
  causations: router({
    list: publicProcedure.query(async () => {
      return await db.getAllCausations();
    }),
  }),

  // Recommendations router
  recommendations: router({
    list: publicProcedure.query(async () => {
      return await db.getAllRecommendations();
    }),
  }),

  // Stakeholders router
  stakeholders: router({
    list: publicProcedure.query(async () => {
      return await db.getAllStakeholders();
    }),
  }),
});

export type AppRouter = typeof appRouter;
