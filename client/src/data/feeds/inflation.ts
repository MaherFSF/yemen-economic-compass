import { z } from 'zod';
import {
  createDataFeed,
  type DataMetadata,
} from '../schemas/common';

/**
 * Inflation Data Feed
 * Monthly CPI data for North (Sana'a-controlled) and South (Aden-controlled) regions
 * Source: WFP, CBY-Aden, IMF estimates
 */

// CPI data point schema
export const CPIDataSchema = z.object({
  date: z.string(), // YYYY-MM-DD
  headline: z.number(), // Overall CPI
  food: z.number(), // Food CPI
  energy: z.number().optional(), // Energy CPI
  yoy: z.number(), // Year-over-year change (%)
  mom: z.number().optional(), // Month-over-month change (%)
});

export type CPIData = z.infer<typeof CPIDataSchema>;

// Inflation feed schema
export const InflationFeedSchema = z.object({
  south: z.array(CPIDataSchema), // IRG/Aden-controlled areas
  north: z.array(CPIDataSchema), // Houthi/Sana'a-controlled areas
});

export type InflationFeed = z.infer<typeof InflationFeedSchema>;

// Mock data: CPI South (IRG/Aden areas) - Base 2014 = 100
const cpiSouth: CPIData[] = [
  // 2014 baseline
  { date: '2014-01-01', headline: 100, food: 100, energy: 100, yoy: 0, mom: 0 },
  { date: '2014-06-01', headline: 103, food: 104, energy: 102, yoy: 8.2, mom: 0.5 },
  { date: '2014-12-01', headline: 108, food: 110, energy: 105, yoy: 8.2, mom: 0.8 },
  
  // 2015 - War begins, inflation starts
  { date: '2015-01-01', headline: 110, food: 112, energy: 107, yoy: 10.0, mom: 1.8 },
  { date: '2015-06-01', headline: 125, food: 130, energy: 118, yoy: 21.4, mom: 2.5 },
  { date: '2015-12-01', headline: 140, food: 148, energy: 130, yoy: 29.6, mom: 2.0 },
  
  // 2016 - CBY split, inflation accelerates
  { date: '2016-01-01', headline: 145, food: 153, energy: 135, yoy: 31.8, mom: 3.5 },
  { date: '2016-06-01', headline: 155, food: 165, energy: 142, yoy: 24.0, mom: 1.5 },
  { date: '2016-12-01', headline: 165, food: 178, energy: 148, yoy: 17.9, mom: 1.2 },
  
  // 2017 - Currency collapse drives inflation
  { date: '2017-01-01', headline: 170, food: 183, energy: 152, yoy: 17.2, mom: 3.0 },
  { date: '2017-06-01', headline: 195, food: 212, energy: 172, yoy: 25.8, mom: 2.8 },
  { date: '2017-12-01', headline: 240, food: 265, energy: 205, yoy: 45.5, mom: 3.5 },
  
  // 2018 - High inflation continues
  { date: '2018-01-01', headline: 250, food: 278, energy: 215, yoy: 47.1, mom: 4.2 },
  { date: '2018-06-01', headline: 265, food: 295, energy: 228, yoy: 35.9, mom: 1.2 },
  { date: '2018-12-01', headline: 280, food: 315, energy: 238, yoy: 16.7, mom: 1.0 },
  
  // 2019 - Some stabilization
  { date: '2019-01-01', headline: 285, food: 320, energy: 242, yoy: 14.0, mom: 1.8 },
  { date: '2019-06-01', headline: 305, food: 345, energy: 258, yoy: 15.1, mom: 1.5 },
  { date: '2019-12-01', headline: 320, food: 365, energy: 270, yoy: 14.3, mom: 1.0 },
  
  // 2020 - COVID-19 impact
  { date: '2020-01-01', headline: 325, food: 370, energy: 275, yoy: 14.0, mom: 1.5 },
  { date: '2020-06-01', headline: 355, food: 410, energy: 295, yoy: 16.4, mom: 2.0 },
  { date: '2020-12-01', headline: 380, food: 445, energy: 315, yoy: 18.8, mom: 1.5 },
  
  // 2021 - Continued pressure
  { date: '2021-01-01', headline: 390, food: 458, energy: 322, yoy: 20.0, mom: 2.6 },
  { date: '2021-06-01', headline: 425, food: 505, energy: 348, yoy: 19.7, mom: 1.8 },
  { date: '2021-12-01', headline: 450, food: 540, energy: 368, yoy: 18.4, mom: 1.2 },
  
  // 2022 - Global inflation impact
  { date: '2022-01-01', headline: 460, food: 555, energy: 375, yoy: 17.9, mom: 2.2 },
  { date: '2022-06-01', headline: 490, food: 595, energy: 398, yoy: 15.3, mom: 1.5 },
  { date: '2022-12-01', headline: 515, food: 630, energy: 418, yoy: 14.4, mom: 1.0 },
  
  // 2023 - Regulatory tightening helps
  { date: '2023-01-01', headline: 525, food: 645, energy: 425, yoy: 14.1, mom: 1.9 },
  { date: '2023-06-01', headline: 555, food: 685, energy: 448, yoy: 13.3, mom: 1.2 },
  { date: '2023-12-01', headline: 580, food: 720, energy: 468, yoy: 12.6, mom: 0.9 },
  
  // 2024 - Continued inflation
  { date: '2024-01-01', headline: 590, food: 735, energy: 475, yoy: 12.4, mom: 1.7 },
  { date: '2024-06-01', headline: 615, food: 770, energy: 495, yoy: 10.8, mom: 1.0 },
  { date: '2024-12-01', headline: 640, food: 805, energy: 515, yoy: 10.3, mom: 0.8 },
  
  // 2025 - Current estimates
  { date: '2025-01-01', headline: 650, food: 820, energy: 522, yoy: 10.2, mom: 1.6 },
  { date: '2025-02-01', headline: 665, food: 840, energy: 532, yoy: 10.5, mom: 2.3 },
  { date: '2025-03-01', headline: 685, food: 870, energy: 548, yoy: 11.2, mom: 3.0 },
];

// Mock data: CPI North (Houthi/Sana'a areas) - Base 2014 = 100
const cpiNorth: CPIData[] = [
  // 2014 baseline (same as South)
  { date: '2014-01-01', headline: 100, food: 100, energy: 100, yoy: 0, mom: 0 },
  { date: '2014-06-01', headline: 103, food: 104, energy: 102, yoy: 8.2, mom: 0.5 },
  { date: '2014-12-01', headline: 108, food: 110, energy: 105, yoy: 8.2, mom: 0.8 },
  
  // 2015 - War begins
  { date: '2015-01-01', headline: 110, food: 112, energy: 107, yoy: 10.0, mom: 1.8 },
  { date: '2015-06-01', headline: 125, food: 130, energy: 118, yoy: 21.4, mom: 2.5 },
  { date: '2015-12-01', headline: 140, food: 148, energy: 130, yoy: 29.6, mom: 2.0 },
  
  // 2016 - CBY split
  { date: '2016-01-01', headline: 145, food: 153, energy: 135, yoy: 31.8, mom: 3.5 },
  { date: '2016-06-01', headline: 155, food: 165, energy: 142, yoy: 24.0, mom: 1.5 },
  { date: '2016-12-01', headline: 165, food: 178, energy: 148, yoy: 17.9, mom: 1.2 },
  
  // 2017 - Cash ban begins, inflation diverges
  { date: '2017-01-01', headline: 170, food: 183, energy: 152, yoy: 17.2, mom: 3.0 },
  { date: '2017-06-01', headline: 185, food: 200, energy: 165, yoy: 19.4, mom: 1.8 },
  { date: '2017-12-01', headline: 210, food: 230, energy: 185, yoy: 27.3, mom: 2.5 },
  
  // 2018 - Capital controls slow inflation
  { date: '2018-01-01', headline: 215, food: 238, energy: 190, yoy: 26.5, mom: 2.4 },
  { date: '2018-06-01', headline: 225, food: 250, energy: 198, yoy: 21.6, mom: 0.9 },
  { date: '2018-12-01', headline: 235, food: 263, energy: 205, yoy: 11.9, mom: 0.9 },
  
  // 2019 - Relative stability
  { date: '2019-01-01', headline: 240, food: 268, energy: 210, yoy: 11.6, mom: 2.1 },
  { date: '2019-06-01', headline: 250, food: 280, energy: 218, yoy: 11.1, mom: 0.8 },
  { date: '2019-12-01', headline: 260, food: 293, energy: 225, yoy: 10.6, mom: 0.8 },
  
  // 2020 - COVID-19, but controlled
  { date: '2020-01-01', headline: 265, food: 298, energy: 230, yoy: 10.4, mom: 1.9 },
  { date: '2020-06-01', headline: 275, food: 310, energy: 238, yoy: 10.0, mom: 0.8 },
  { date: '2020-12-01', headline: 285, food: 323, energy: 245, yoy: 9.6, mom: 0.7 },
  
  // 2021 - Remarkably stable
  { date: '2021-01-01', headline: 290, food: 330, energy: 250, yoy: 9.4, mom: 1.8 },
  { date: '2021-06-01', headline: 298, food: 340, energy: 255, yoy: 8.4, mom: 0.6 },
  { date: '2021-12-01', headline: 305, food: 350, energy: 260, yoy: 7.0, mom: 0.5 },
  
  // 2022 - Continued stability
  { date: '2022-01-01', headline: 310, food: 356, energy: 265, yoy: 6.9, mom: 1.6 },
  { date: '2022-06-01', headline: 318, food: 365, energy: 272, yoy: 6.7, mom: 0.5 },
  { date: '2022-12-01', headline: 325, food: 375, energy: 278, yoy: 6.6, mom: 0.4 },
  
  // 2023 - Low official inflation
  { date: '2023-01-01', headline: 330, food: 382, energy: 283, yoy: 6.5, mom: 1.5 },
  { date: '2023-06-01', headline: 338, food: 392, energy: 290, yoy: 6.3, mom: 0.5 },
  { date: '2023-12-01', headline: 345, food: 402, energy: 295, yoy: 6.2, mom: 0.4 },
  
  // 2024 - Stability maintained
  { date: '2024-01-01', headline: 350, food: 408, energy: 300, yoy: 6.1, mom: 1.4 },
  { date: '2024-06-01', headline: 358, food: 418, energy: 307, yoy: 5.9, mom: 0.5 },
  { date: '2024-12-01', headline: 365, food: 428, energy: 313, yoy: 5.8, mom: 0.4 },
  
  // 2025 - Current estimates
  { date: '2025-01-01', headline: 370, food: 435, energy: 318, yoy: 5.7, mom: 1.4 },
  { date: '2025-02-01', headline: 375, food: 442, energy: 323, yoy: 5.8, mom: 1.4 },
  { date: '2025-03-01', headline: 380, food: 450, energy: 328, yoy: 5.9, mom: 1.3 },
];

// Metadata
const metadata: DataMetadata = {
  lastUpdated: new Date().toISOString(),
  source: {
    name: 'WFP, CBY-Aden, IMF Estimates',
    type: 'international',
    reliability: 'high',
  },
  notes: 'Inflation data shows dramatic divergence: South (IRG) experiences high, volatile inflation driven by currency collapse; North (Houthi) maintains lower official inflation through capital controls and cash rationing, but at cost of cash scarcity and transaction costs. Food prices drive inflation in both regions.',
  isEstimate: true,
  confidence: 'medium',
};

// Export data feed
export const getInflationFeed = () => {
  const data: InflationFeed = {
    south: cpiSouth,
    north: cpiNorth,
  };
  
  // Validate data
  InflationFeedSchema.parse(data);
  
  return createDataFeed('inflation', InflationFeedSchema, data, metadata);
};

// Helper functions
export const getLatestCPI = (region: 'north' | 'south') => {
  const feed = getInflationFeed();
  const cpi = region === 'north' ? feed.data.north : feed.data.south;
  return cpi[cpi.length - 1];
};

export const getCPIByDate = (region: 'north' | 'south', date: string) => {
  const feed = getInflationFeed();
  const cpi = region === 'north' ? feed.data.north : feed.data.south;
  return cpi.find(c => c.date === date);
};

export const getCPIByYear = (region: 'north' | 'south', year: number) => {
  const feed = getInflationFeed();
  const cpi = region === 'north' ? feed.data.north : feed.data.south;
  return cpi.filter(c => c.date.startsWith(year.toString()));
};

// Calculate inflation divergence
export const calculateInflationDivergence = (date: string): number => {
  const southCPI = getCPIByDate('south', date);
  const northCPI = getCPIByDate('north', date);
  
  if (!southCPI || !northCPI) return 0;
  
  return southCPI.yoy - northCPI.yoy;
};

// Get average inflation rate for a year
export const getAverageInflation = (region: 'north' | 'south', year: number): number => {
  const yearData = getCPIByYear(region, year);
  if (yearData.length === 0) return 0;
  
  const sum = yearData.reduce((acc, curr) => acc + curr.yoy, 0);
  return Math.round((sum / yearData.length) * 10) / 10;
};

// Calculate purchasing power erosion (2014 = 100)
export const calculatePurchasingPowerErosion = (region: 'north' | 'south'): number => {
  const latest = getLatestCPI(region);
  const baseline = 100; // 2014 baseline
  
  return ((latest.headline - baseline) / baseline) * 100;
};
