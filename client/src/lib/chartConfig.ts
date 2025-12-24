/**
 * Arabic-optimized Chart.js configuration
 * Ensures proper RTL support, Arabic fonts, and clear text rendering
 */

import type { ChartOptions, TooltipOptions } from 'chart.js';

// Arabic number formatter
export const formatArabicNumber = (value: number): string => {
  return value.toLocaleString('ar-EG');
};

// Arabic currency formatter
export const formatArabicCurrency = (value: number, currency: string = 'YER'): string => {
  const formatted = value.toLocaleString('ar-EG');
  return currency === 'YER' ? `${formatted} ر.ي` : `${formatted} ${currency}`;
};

// Arabic percentage formatter
export const formatArabicPercent = (value: number): string => {
  return `${value.toLocaleString('ar-EG')}%`;
};

// Get chart font configuration
export const getChartFont = (isArabic: boolean) => ({
  family: isArabic 
    ? "'Noto Naskh Arabic', 'Amiri', 'Tajawal', sans-serif" 
    : "'Inter', 'Segoe UI', sans-serif",
  size: isArabic ? 14 : 12,
  weight: isArabic ? '500' : '400',
});

// Get tooltip configuration for Arabic
export const getTooltipConfig = (isArabic: boolean): Partial<TooltipOptions<any>> => ({
  rtl: isArabic,
  textDirection: isArabic ? 'rtl' : 'ltr',
  titleFont: {
    family: isArabic 
      ? "'Noto Naskh Arabic', 'Amiri', sans-serif" 
      : "'Inter', sans-serif",
    size: isArabic ? 14 : 12,
    weight: 'bold',
  },
  bodyFont: {
    family: isArabic 
      ? "'Noto Naskh Arabic', 'Amiri', sans-serif" 
      : "'Inter', sans-serif",
    size: isArabic ? 13 : 11,
  },
  padding: 12,
  cornerRadius: 8,
  backgroundColor: 'rgba(15, 23, 42, 0.95)',
  titleColor: '#fff',
  bodyColor: '#e2e8f0',
  borderColor: 'rgba(255, 255, 255, 0.1)',
  borderWidth: 1,
  displayColors: true,
  boxPadding: 6,
});

// Get legend configuration for Arabic
export const getLegendConfig = (isArabic: boolean) => ({
  rtl: isArabic,
  textDirection: isArabic ? 'rtl' : 'ltr',
  position: 'bottom',
  align: 'center',
  labels: {
    font: {
      family: isArabic 
        ? "'Noto Naskh Arabic', 'Amiri', sans-serif" 
        : "'Inter', sans-serif",
      size: isArabic ? 13 : 11,
    },
    padding: 20,
    usePointStyle: true,
    pointStyle: 'circle',
  },
});

// Get scales configuration for Arabic
export const getScalesConfig = (isArabic: boolean, options?: {
  xTitle?: string;
  yTitle?: string;
  formatY?: 'number' | 'currency' | 'percent';
}) => ({
  x: {
    reverse: isArabic, // RTL support
    grid: {
      display: false,
      drawBorder: false,
    },
    ticks: {
      font: {
        family: isArabic 
          ? "'Noto Naskh Arabic', 'Amiri', sans-serif" 
          : "'Inter', sans-serif",
        size: isArabic ? 12 : 10,
      },
      color: '#64748b',
      padding: 8,
    },
    title: options?.xTitle ? {
      display: true,
      text: options.xTitle,
      font: {
        family: isArabic 
          ? "'Noto Naskh Arabic', 'Amiri', sans-serif" 
          : "'Inter', sans-serif",
        size: isArabic ? 13 : 11,
        weight: 'bold',
      },
      color: '#475569',
      padding: { top: 10 },
    } : undefined,
  },
  y: {
    position: isArabic ? 'right' : 'left', // RTL support
    grid: {
      color: 'rgba(148, 163, 184, 0.1)',
      drawBorder: false,
    },
    ticks: {
      font: {
        family: isArabic 
          ? "'Noto Naskh Arabic', 'Amiri', sans-serif" 
          : "'Inter', sans-serif",
        size: isArabic ? 12 : 10,
      },
      color: '#64748b',
      padding: 8,
      callback: function(value: any) {
        const numValue = Number(value);
        if (isArabic) {
          switch (options?.formatY) {
            case 'currency':
              return formatArabicCurrency(numValue);
            case 'percent':
              return formatArabicPercent(numValue);
            default:
              return formatArabicNumber(numValue);
          }
        }
        switch (options?.formatY) {
          case 'currency':
            return `${numValue.toLocaleString()} YER`;
          case 'percent':
            return `${numValue}%`;
          default:
            return numValue.toLocaleString();
        }
      },
    },
    title: options?.yTitle ? {
      display: true,
      text: options.yTitle,
      font: {
        family: isArabic 
          ? "'Noto Naskh Arabic', 'Amiri', sans-serif" 
          : "'Inter', sans-serif",
        size: isArabic ? 13 : 11,
        weight: 'bold',
      },
      color: '#475569',
      padding: { bottom: 10 },
    } : undefined,
  },
});

// Complete chart options with Arabic support
export const getChartOptions = (isArabic: boolean, options?: {
  xTitle?: string;
  yTitle?: string;
  formatY?: 'number' | 'currency' | 'percent';
  showLegend?: boolean;
  aspectRatio?: number;
}): ChartOptions<any> => ({
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: options?.aspectRatio || 2,
  layout: {
    padding: {
      top: 10,
      right: isArabic ? 10 : 20,
      bottom: 10,
      left: isArabic ? 20 : 10,
    },
  },
  plugins: {
    legend: options?.showLegend !== false ? getLegendConfig(isArabic) : { display: false },
    tooltip: getTooltipConfig(isArabic),
  },
  scales: getScalesConfig(isArabic, options),
});

// Color palettes for charts
export const chartColors = {
  primary: ['#10b981', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'],
  danger: ['#ef4444', '#f97316', '#eab308'],
  neutral: ['#64748b', '#94a3b8', '#cbd5e1'],
  gradient: {
    emerald: ['rgba(16, 185, 129, 0.8)', 'rgba(16, 185, 129, 0.1)'],
    blue: ['rgba(59, 130, 246, 0.8)', 'rgba(59, 130, 246, 0.1)'],
    amber: ['rgba(245, 158, 11, 0.8)', 'rgba(245, 158, 11, 0.1)'],
    red: ['rgba(239, 68, 68, 0.8)', 'rgba(239, 68, 68, 0.1)'],
  },
};

// Create gradient for chart backgrounds
export const createGradient = (
  ctx: CanvasRenderingContext2D,
  colorStart: string,
  colorEnd: string,
  height: number = 400
) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);
  return gradient;
};

// Data labels plugin configuration
export const getDataLabelsConfig = (isArabic: boolean) => ({
  display: true,
  color: '#1e293b',
  font: {
    family: isArabic 
      ? "'Noto Naskh Arabic', 'Amiri', sans-serif" 
      : "'Inter', sans-serif",
    size: isArabic ? 12 : 10,
    weight: 'bold',
  },
  formatter: (value: number) => {
    if (isArabic) {
      return formatArabicNumber(value);
    }
    return value.toLocaleString();
  },
});

// Export default configuration
export default {
  formatArabicNumber,
  formatArabicCurrency,
  formatArabicPercent,
  getChartFont,
  getTooltipConfig,
  getLegendConfig,
  getScalesConfig,
  getChartOptions,
  chartColors,
  createGradient,
  getDataLabelsConfig,
};
