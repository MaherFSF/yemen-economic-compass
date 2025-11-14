import { z } from 'zod';
import {
  createDataFeed,
  type DataMetadata,
} from '../schemas/common';

/**
 * GDP Data Feed
 * Annual real GDP data with sector composition
 * Source: World Bank, IMF, Yemen Central Statistical Organization estimates
 */

// GDP data point schema
export const GDPDataSchema = z.object({
  year: z.number(),
  realGDP_index: z.number(), // Index with 2014 = 100
  realGDP_usd_billions: z.number().optional(), // Real GDP in constant USD billions
  growth_rate: z.number(), // Annual growth rate (%)
  sectors: z.object({
    agriculture: z.number(), // % of GDP
    industry: z.number(), // % of GDP
    oil: z.number(), // % of GDP
    services: z.number(), // % of GDP
    informal: z.number().optional(), // % of GDP (estimate)
  }),
});

export type GDPData = z.infer<typeof GDPDataSchema>;

// GDP feed schema
export const GDPFeedSchema = z.object({
  data: z.array(GDPDataSchema),
  notes: z.string(),
});

export type GDPFeed = z.infer<typeof GDPFeedSchema>;

// Mock data: Real GDP (2014-2025)
const gdpData: GDPData[] = [
  // Pre-war baseline
  {
    year: 2010,
    realGDP_index: 85,
    realGDP_usd_billions: 31.3,
    growth_rate: 7.7,
    sectors: {
      agriculture: 15.2,
      industry: 32.8,
      oil: 18.5,
      services: 52.0,
    },
  },
  {
    year: 2011,
    realGDP_index: 75,
    realGDP_usd_billions: 27.6,
    growth_rate: -12.7,
    sectors: {
      agriculture: 16.5,
      industry: 28.2,
      oil: 14.2,
      services: 55.3,
    },
  },
  {
    year: 2012,
    realGDP_index: 78,
    realGDP_usd_billions: 28.8,
    growth_rate: 2.4,
    sectors: {
      agriculture: 16.8,
      industry: 29.5,
      oil: 15.8,
      services: 53.7,
    },
  },
  {
    year: 2013,
    realGDP_index: 82,
    realGDP_usd_billions: 30.2,
    growth_rate: 4.8,
    sectors: {
      agriculture: 16.2,
      industry: 31.2,
      oil: 17.2,
      services: 52.6,
    },
  },
  // 2014 - Baseline year (100)
  {
    year: 2014,
    realGDP_index: 100,
    realGDP_usd_billions: 36.8,
    growth_rate: -0.2,
    sectors: {
      agriculture: 15.8,
      industry: 32.5,
      oil: 18.2,
      services: 51.7,
    },
  },
  // 2015 - War begins, catastrophic collapse
  {
    year: 2015,
    realGDP_index: 72,
    realGDP_usd_billions: 26.5,
    growth_rate: -28.1,
    sectors: {
      agriculture: 18.5,
      industry: 24.8,
      oil: 8.5,
      services: 56.7,
      informal: 35.0,
    },
  },
  // 2016 - Continued decline, CBY split
  {
    year: 2016,
    realGDP_index: 62,
    realGDP_usd_billions: 22.8,
    growth_rate: -13.8,
    sectors: {
      agriculture: 20.2,
      industry: 22.5,
      oil: 6.2,
      services: 57.3,
      informal: 40.0,
    },
  },
  // 2017 - Humanitarian cash era begins
  {
    year: 2017,
    realGDP_index: 58,
    realGDP_usd_billions: 21.4,
    growth_rate: -5.9,
    sectors: {
      agriculture: 21.5,
      industry: 20.8,
      oil: 5.5,
      services: 57.7,
      informal: 42.0,
    },
  },
  // 2018 - Stabilization at low level
  {
    year: 2018,
    realGDP_index: 57,
    realGDP_usd_billions: 21.0,
    growth_rate: -2.7,
    sectors: {
      agriculture: 22.0,
      industry: 20.2,
      oil: 5.2,
      services: 57.8,
      informal: 43.0,
    },
  },
  // 2019 - Slight recovery
  {
    year: 2019,
    realGDP_index: 58,
    realGDP_usd_billions: 21.3,
    growth_rate: 2.1,
    sectors: {
      agriculture: 21.8,
      industry: 20.5,
      oil: 5.8,
      services: 57.7,
      informal: 42.5,
    },
  },
  // 2020 - COVID-19 impact
  {
    year: 2020,
    realGDP_index: 55,
    realGDP_usd_billions: 20.2,
    growth_rate: -5.0,
    sectors: {
      agriculture: 22.5,
      industry: 19.5,
      oil: 4.8,
      services: 58.0,
      informal: 45.0,
    },
  },
  // 2021 - Modest recovery
  {
    year: 2021,
    realGDP_index: 54,
    realGDP_usd_billions: 19.9,
    growth_rate: -1.0,
    sectors: {
      agriculture: 23.0,
      industry: 19.2,
      oil: 4.5,
      services: 57.8,
      informal: 46.0,
    },
  },
  // 2022 - Truce period, some improvement
  {
    year: 2022,
    realGDP_index: 55,
    realGDP_usd_billions: 20.3,
    growth_rate: 1.5,
    sectors: {
      agriculture: 22.8,
      industry: 19.5,
      oil: 5.0,
      services: 57.7,
      informal: 45.5,
    },
  },
  // 2023 - Continued modest growth
  {
    year: 2023,
    realGDP_index: 56,
    realGDP_usd_billions: 20.6,
    growth_rate: 2.0,
    sectors: {
      agriculture: 22.5,
      industry: 19.8,
      oil: 5.2,
      services: 57.7,
      informal: 45.0,
    },
  },
  // 2024 - Estimate
  {
    year: 2024,
    realGDP_index: 57,
    realGDP_usd_billions: 21.0,
    growth_rate: 1.8,
    sectors: {
      agriculture: 22.3,
      industry: 20.0,
      oil: 5.5,
      services: 57.7,
      informal: 44.5,
    },
  },
  // 2025 - Projection
  {
    year: 2025,
    realGDP_index: 58,
    realGDP_usd_billions: 21.4,
    growth_rate: 1.5,
    sectors: {
      agriculture: 22.0,
      industry: 20.2,
      oil: 5.8,
      services: 57.8,
      informal: 44.0,
    },
  },
];

// Metadata
const metadata: DataMetadata = {
  lastUpdated: new Date().toISOString(),
  source: {
    name: 'World Bank, IMF, Yemen Central Statistical Organization',
    type: 'international',
    reliability: 'medium',
  },
  notes: 'GDP data shows catastrophic 42% collapse from 2014 to 2020 (index 100 → 55). Economy has stabilized at approximately 55-58% of pre-war level. Structural transformation evident: oil sector collapsed from 18% to 5% of GDP; agriculture increased from 16% to 22%; informal economy estimated at 44-46% of GDP. Recovery requires re-activating productive infrastructure, especially oil exports, and creating business environment for formal sector growth.',
  isEstimate: true,
  confidence: 'medium',
};

// Export data feed
export const getGDPFeed = () => {
  const feedData: GDPFeed = {
    data: gdpData,
    notes: 'Data for 2015-2025 are estimates/projections due to conflict-related data limitations. Sector composition estimates based on available surveys and modeling.',
  };
  
  // Validate data
  GDPFeedSchema.parse(feedData);
  
  return createDataFeed('gdp', GDPFeedSchema, feedData, metadata);
};

// Helper functions
export const getLatestGDP = () => {
  const feed = getGDPFeed();
  return feed.data.data[feed.data.data.length - 1];
};

export const getGDPByYear = (year: number) => {
  const feed = getGDPFeed();
  return feed.data.data.find(d => d.year === year);
};

export const getGDPRange = (startYear: number, endYear: number) => {
  const feed = getGDPFeed();
  return feed.data.data.filter(d => d.year >= startYear && d.year <= endYear);
};

// Calculate cumulative GDP loss since 2014
export const calculateCumulativeGDPLoss = (): number => {
  const feed = getGDPFeed();
  const baseline = feed.data.data.find(d => d.year === 2014);
  if (!baseline) return 0;
  
  let cumulativeLoss = 0;
  feed.data.data.forEach(d => {
    if (d.year > 2014) {
      const loss = baseline.realGDP_index - d.realGDP_index;
      cumulativeLoss += loss;
    }
  });
  
  return Math.round(cumulativeLoss);
};

// Calculate average growth rate for a period
export const getAverageGrowthRate = (startYear: number, endYear: number): number => {
  const range = getGDPRange(startYear, endYear);
  if (range.length === 0) return 0;
  
  const sum = range.reduce((acc, curr) => acc + curr.growth_rate, 0);
  return Math.round((sum / range.length) * 10) / 10;
};

// Get sector composition change
export const getSectorCompositionChange = (year1: number, year2: number) => {
  const data1 = getGDPByYear(year1);
  const data2 = getGDPByYear(year2);
  
  if (!data1 || !data2) return null;
  
  return {
    agriculture: Math.round((data2.sectors.agriculture - data1.sectors.agriculture) * 10) / 10,
    industry: Math.round((data2.sectors.industry - data1.sectors.industry) * 10) / 10,
    oil: Math.round((data2.sectors.oil - data1.sectors.oil) * 10) / 10,
    services: Math.round((data2.sectors.services - data1.sectors.services) * 10) / 10,
  };
};

// Calculate years to recovery (to 2014 level)
export const calculateYearsToRecovery = (assumedGrowthRate: number = 3.0): number => {
  const latest = getLatestGDP();
  const baseline = getGDPByYear(2014);
  
  if (!latest || !baseline) return 0;
  
  const gap = baseline.realGDP_index - latest.realGDP_index;
  const years = gap / assumedGrowthRate;
  
  return Math.ceil(years);
};
