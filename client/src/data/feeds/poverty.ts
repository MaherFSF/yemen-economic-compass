import { z } from 'zod';
import {
  createDataFeed,
  type DataMetadata,
} from '../schemas/common';

/**
 * Poverty Data Feed
 * Annual poverty rate and related humanitarian indicators
 * Source: World Bank, UNDP, UN OCHA, WFP
 */

// Poverty data point schema
export const PovertyDataSchema = z.object({
  year: z.number(),
  poverty_headcount: z.number(), // % of population below poverty line
  extreme_poverty: z.number().optional(), // % below extreme poverty line
  food_insecurity: z.number().optional(), // % food insecure
  people_in_need: z.number().optional(), // Millions of people in humanitarian need
  idps: z.number().optional(), // Internally displaced persons (millions)
  unemployment_estimate: z.number().optional(), // % unemployment (estimate)
});

export type PovertyData = z.infer<typeof PovertyDataSchema>;

// Poverty feed schema
export const PovertyFeedSchema = z.object({
  data: z.array(PovertyDataSchema),
  notes: z.string(),
});

export type PovertyFeed = z.infer<typeof PovertyFeedSchema>;

// Mock data: Poverty rates (2010-2025)
const povertyData: PovertyData[] = [
  // Pre-war period
  {
    year: 2010,
    poverty_headcount: 42.0,
    extreme_poverty: 18.8,
    food_insecurity: 32.0,
    people_in_need: 0,
    idps: 0,
    unemployment_estimate: 14.5,
  },
  {
    year: 2011,
    poverty_headcount: 45.2,
    extreme_poverty: 20.5,
    food_insecurity: 35.0,
    people_in_need: 0,
    idps: 0,
    unemployment_estimate: 15.8,
  },
  {
    year: 2012,
    poverty_headcount: 46.8,
    extreme_poverty: 21.2,
    food_insecurity: 36.5,
    people_in_need: 0,
    idps: 0,
    unemployment_estimate: 16.2,
  },
  {
    year: 2013,
    poverty_headcount: 48.6,
    extreme_poverty: 22.0,
    food_insecurity: 38.0,
    people_in_need: 0,
    idps: 0,
    unemployment_estimate: 16.8,
  },
  // 2014 - Pre-war baseline
  {
    year: 2014,
    poverty_headcount: 49.0,
    extreme_poverty: 22.5,
    food_insecurity: 39.0,
    people_in_need: 0,
    idps: 0,
    unemployment_estimate: 17.0,
  },
  // 2015 - War begins, humanitarian crisis starts
  {
    year: 2015,
    poverty_headcount: 62.0,
    extreme_poverty: 30.0,
    food_insecurity: 54.0,
    people_in_need: 21.2,
    idps: 2.5,
    unemployment_estimate: 27.0,
  },
  // 2016 - Crisis deepens
  {
    year: 2016,
    poverty_headcount: 71.0,
    extreme_poverty: 38.0,
    food_insecurity: 63.0,
    people_in_need: 21.2,
    idps: 3.0,
    unemployment_estimate: 32.0,
  },
  // 2017 - Humanitarian catastrophe
  {
    year: 2017,
    poverty_headcount: 75.0,
    extreme_poverty: 42.0,
    food_insecurity: 68.0,
    people_in_need: 22.2,
    idps: 3.3,
    unemployment_estimate: 35.0,
  },
  // 2018 - Peak crisis
  {
    year: 2018,
    poverty_headcount: 79.0,
    extreme_poverty: 46.0,
    food_insecurity: 72.0,
    people_in_need: 24.0,
    idps: 3.6,
    unemployment_estimate: 37.0,
  },
  // 2019 - Stabilization at high level
  {
    year: 2019,
    poverty_headcount: 80.0,
    extreme_poverty: 47.0,
    food_insecurity: 73.0,
    people_in_need: 24.1,
    idps: 3.6,
    unemployment_estimate: 38.0,
  },
  // 2020 - COVID-19 impact
  {
    year: 2020,
    poverty_headcount: 82.0,
    extreme_poverty: 49.0,
    food_insecurity: 76.0,
    people_in_need: 24.3,
    idps: 3.6,
    unemployment_estimate: 40.0,
  },
  // 2021 - Continued deterioration
  {
    year: 2021,
    poverty_headcount: 83.0,
    extreme_poverty: 50.0,
    food_insecurity: 77.0,
    people_in_need: 23.4,
    idps: 4.0,
    unemployment_estimate: 41.0,
  },
  // 2022 - Slight improvement with truce
  {
    year: 2022,
    poverty_headcount: 82.0,
    extreme_poverty: 49.0,
    food_insecurity: 75.0,
    people_in_need: 23.4,
    idps: 4.3,
    unemployment_estimate: 40.0,
  },
  // 2023 - Modest stabilization
  {
    year: 2023,
    poverty_headcount: 81.0,
    extreme_poverty: 48.0,
    food_insecurity: 74.0,
    people_in_need: 21.6,
    idps: 4.5,
    unemployment_estimate: 39.0,
  },
  // 2024 - Estimate
  {
    year: 2024,
    poverty_headcount: 80.0,
    extreme_poverty: 47.0,
    food_insecurity: 73.0,
    people_in_need: 18.2,
    idps: 4.5,
    unemployment_estimate: 38.0,
  },
  // 2025 - Projection
  {
    year: 2025,
    poverty_headcount: 79.0,
    extreme_poverty: 46.0,
    food_insecurity: 72.0,
    people_in_need: 18.2,
    idps: 4.5,
    unemployment_estimate: 37.0,
  },
];

// Metadata
const metadata: DataMetadata = {
  lastUpdated: new Date().toISOString(),
  source: {
    name: 'World Bank, UNDP, UN OCHA, WFP',
    type: 'international',
    reliability: 'medium',
  },
  notes: 'Poverty data shows catastrophic humanitarian impact: poverty headcount increased from 49% (2014) to 79% (2025), meaning approximately 4 out of 5 Yemenis now live below poverty line. Food insecurity nearly doubled from 39% to 72%. Over 18 million people require humanitarian assistance. Unemployment estimated at 37%. Data for conflict years are estimates based on surveys, modeling, and humanitarian assessments.',
  isEstimate: true,
  confidence: 'medium',
};

// Export data feed
export const getPovertyFeed = () => {
  const feedData: PovertyFeed = {
    data: povertyData,
    notes: 'Poverty and humanitarian data for 2015-2025 are estimates due to limited survey access in conflict zones. Figures represent national aggregates; regional disparities exist between IRG and Houthi-controlled areas.',
  };
  
  // Validate data
  PovertyFeedSchema.parse(feedData);
  
  return createDataFeed('poverty', PovertyFeedSchema, feedData, metadata);
};

// Helper functions
export const getLatestPoverty = () => {
  const feed = getPovertyFeed();
  return feed.data.data[feed.data.data.length - 1];
};

export const getPovertyByYear = (year: number) => {
  const feed = getPovertyFeed();
  return feed.data.data.find(d => d.year === year);
};

export const getPovertyRange = (startYear: number, endYear: number) => {
  const feed = getPovertyFeed();
  return feed.data.data.filter(d => d.year >= startYear && d.year <= endYear);
};

// Calculate poverty increase since 2014
export const calculatePovertyIncrease = (): number => {
  const baseline = getPovertyByYear(2014);
  const latest = getLatestPoverty();
  
  if (!baseline || !latest) return 0;
  
  return Math.round((latest.poverty_headcount - baseline.poverty_headcount) * 10) / 10;
};

// Calculate number of people pushed into poverty (assuming 30M population)
export const calculatePeoplePushedIntoPoverty = (population: number = 30): number => {
  const increase = calculatePovertyIncrease();
  return Math.round((increase / 100) * population * 10) / 10;
};

// Get average poverty rate for a period
export const getAveragePovertyRate = (startYear: number, endYear: number): number => {
  const range = getPovertyRange(startYear, endYear);
  if (range.length === 0) return 0;
  
  const sum = range.reduce((acc, curr) => acc + curr.poverty_headcount, 0);
  return Math.round((sum / range.length) * 10) / 10;
};

// Calculate food insecurity increase
export const calculateFoodInsecurityIncrease = (): number => {
  const baseline = getPovertyByYear(2014);
  const latest = getLatestPoverty();
  
  if (!baseline || !latest || !baseline.food_insecurity || !latest.food_insecurity) return 0;
  
  return Math.round((latest.food_insecurity - baseline.food_insecurity) * 10) / 10;
};

// Get humanitarian needs trend
export const getHumanitarianNeedsTrend = () => {
  const feed = getPovertyFeed();
  return feed.data.data
    .filter(d => d.people_in_need !== undefined && d.people_in_need > 0)
    .map(d => ({
      year: d.year,
      people_in_need: d.people_in_need!,
    }));
};

// Calculate IDP growth
export const calculateIDPGrowth = (): number => {
  const baseline = getPovertyByYear(2014);
  const latest = getLatestPoverty();
  
  if (!baseline || !latest || !baseline.idps || !latest.idps) return 0;
  
  return Math.round((latest.idps - baseline.idps) * 10) / 10;
};
