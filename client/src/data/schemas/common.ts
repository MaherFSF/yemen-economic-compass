import { z } from 'zod';

/**
 * Common schemas for data validation across all feeds
 */

// Source metadata
export const SourceSchema = z.object({
  name: z.string(),
  url: z.string().url().optional(),
  type: z.enum(['official', 'international', 'research', 'estimate']),
  reliability: z.enum(['high', 'medium', 'low']),
});

export type Source = z.infer<typeof SourceSchema>;

// Data point metadata
export const DataMetadataSchema = z.object({
  lastUpdated: z.string().datetime(),
  source: SourceSchema,
  notes: z.string().optional(),
  isEstimate: z.boolean().default(false),
  confidence: z.enum(['high', 'medium', 'low']).optional(),
});

export type DataMetadata = z.infer<typeof DataMetadataSchema>;

// Region enum
export const RegionSchema = z.enum(['aden', 'sanaa', 'national', 'irg', 'houthi']);
export type Region = z.infer<typeof RegionSchema>;

// Currency enum
export const CurrencySchema = z.enum(['YER_ADEN', 'YER_SANAA', 'USD', 'EUR', 'SAR', 'GBP']);
export type Currency = z.infer<typeof CurrencySchema>;

// Trend enum
export const TrendSchema = z.enum(['up', 'down', 'stable', 'volatile', 'critical']);
export type Trend = z.infer<typeof TrendSchema>;

// Generic data point with metadata
export const DataPointSchema = <T extends z.ZodTypeAny>(valueSchema: T) =>
  z.object({
    value: valueSchema,
    metadata: DataMetadataSchema,
  });

// Time series data point
export const TimeSeriesPointSchema = <T extends z.ZodTypeAny>(valueSchema: T) =>
  z.object({
    date: z.string(), // ISO date string
    value: valueSchema,
    metadata: DataMetadataSchema.optional(),
  });

// Helper function to create a data feed response
export const createDataFeed = <T extends z.ZodTypeAny>(
  name: string,
  dataSchema: T,
  data: z.infer<T>,
  metadata: DataMetadata
) => ({
  feedName: name,
  data,
  metadata,
  generatedAt: new Date().toISOString(),
});
