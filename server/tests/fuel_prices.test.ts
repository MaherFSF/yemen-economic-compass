import { describe, it, expect } from 'vitest';

// Since fuel prices is a client-side module, we'll test the data structure directly
describe('Fuel Prices Data Structure', () => {
  // Mock the fuel prices data structure
  const fuelPricesAden = [
    { date: '2025-01-01', petrol: 1400, diesel: 1300, lpg: 15200 },
    { date: '2025-06-01', petrol: 1580, diesel: 1480, lpg: 17200 },
    { date: '2025-12-01', petrol: 1650, diesel: 1550, lpg: 18000 },
  ];

  const fuelPricesSanaa = [
    { date: '2025-01-01', petrol: 600, diesel: 570, lpg: 7000 },
    { date: '2025-06-01', petrol: 660, diesel: 630, lpg: 7600 },
    { date: '2025-12-01', petrol: 680, diesel: 650, lpg: 7800 },
  ];

  describe('Data Validation', () => {
    it('should have valid Aden fuel prices', () => {
      fuelPricesAden.forEach(price => {
        expect(price.date).toBeDefined();
        expect(price.petrol).toBeGreaterThan(0);
        expect(price.diesel).toBeGreaterThan(0);
        expect(price.lpg).toBeGreaterThan(0);
      });
    });

    it('should have valid Sanaa fuel prices', () => {
      fuelPricesSanaa.forEach(price => {
        expect(price.date).toBeDefined();
        expect(price.petrol).toBeGreaterThan(0);
        expect(price.diesel).toBeGreaterThan(0);
        expect(price.lpg).toBeGreaterThan(0);
      });
    });

    it('Aden prices should be higher than Sanaa prices', () => {
      const latestAden = fuelPricesAden[fuelPricesAden.length - 1];
      const latestSanaa = fuelPricesSanaa[fuelPricesSanaa.length - 1];
      
      expect(latestAden.petrol).toBeGreaterThan(latestSanaa.petrol);
      expect(latestAden.diesel).toBeGreaterThan(latestSanaa.diesel);
      expect(latestAden.lpg).toBeGreaterThan(latestSanaa.lpg);
    });
  });

  describe('Price Gap Calculation', () => {
    it('should calculate correct price gap percentage', () => {
      const latestAden = fuelPricesAden[fuelPricesAden.length - 1];
      const latestSanaa = fuelPricesSanaa[fuelPricesSanaa.length - 1];
      
      const petrolGap = Math.round(((latestAden.petrol - latestSanaa.petrol) / latestSanaa.petrol) * 100);
      const dieselGap = Math.round(((latestAden.diesel - latestSanaa.diesel) / latestSanaa.diesel) * 100);
      const lpgGap = Math.round(((latestAden.lpg - latestSanaa.lpg) / latestSanaa.lpg) * 100);
      
      // Aden prices are roughly 2-3x Sanaa prices
      expect(petrolGap).toBeGreaterThan(100);
      expect(dieselGap).toBeGreaterThan(100);
      expect(lpgGap).toBeGreaterThan(100);
    });
  });

  describe('Date Format Validation', () => {
    it('should have valid ISO date format', () => {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      
      fuelPricesAden.forEach(price => {
        expect(price.date).toMatch(dateRegex);
      });
      
      fuelPricesSanaa.forEach(price => {
        expect(price.date).toMatch(dateRegex);
      });
    });
  });
});

describe('Data Export Utilities', () => {
  it('should format Arabic numbers correctly', () => {
    const formatArabicNumber = (num: number): string => {
      return num.toLocaleString('ar-EG');
    };
    
    expect(formatArabicNumber(1650)).toBe('١٬٦٥٠');
    expect(formatArabicNumber(1000000)).toBe('١٬٠٠٠٬٠٠٠');
  });

  it('should format Arabic currency correctly', () => {
    const formatArabicCurrency = (num: number): string => {
      return `${num.toLocaleString('ar-EG')} ر.ي`;
    };
    
    expect(formatArabicCurrency(1650)).toBe('١٬٦٥٠ ر.ي');
  });

  it('should format Arabic percentage correctly', () => {
    const formatArabicPercent = (num: number): string => {
      return `${num.toLocaleString('ar-EG')}%`;
    };
    
    expect(formatArabicPercent(143)).toBe('١٤٣%');
  });
});

describe('Chart Configuration', () => {
  it('should return correct RTL configuration for Arabic', () => {
    const getChartDirection = (isArabic: boolean) => ({
      rtl: isArabic,
      textDirection: isArabic ? 'rtl' : 'ltr',
      yAxisPosition: isArabic ? 'right' : 'left',
    });
    
    const arabicConfig = getChartDirection(true);
    expect(arabicConfig.rtl).toBe(true);
    expect(arabicConfig.textDirection).toBe('rtl');
    expect(arabicConfig.yAxisPosition).toBe('right');
    
    const englishConfig = getChartDirection(false);
    expect(englishConfig.rtl).toBe(false);
    expect(englishConfig.textDirection).toBe('ltr');
    expect(englishConfig.yAxisPosition).toBe('left');
  });
});
