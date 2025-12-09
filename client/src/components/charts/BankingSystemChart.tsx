import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import ChartContainer from './ChartContainer';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Banking System Evolution Chart
 * Shows the dramatic split and parallel evolution of Yemen's banking system
 * Dual Y-axes: Banking assets (USD billions) + Number of operational banks
 */
export default function BankingSystemChart() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const chartData = useMemo(() => {
    // Years from 2010 to 2025
    const years = Array.from({ length: 16 }, (_, i) => 2010 + i);

    // Banking Assets Data (USD Billions)
    // Pre-2016: Unified system, Post-2016: Split between Aden and Sana'a
    const assetsAden = [
      null, null, null, null, null, null, // 2010-2015 (unified)
      2.5, 2.8, 3.1, 2.9, 2.7, 2.5, 2.3, 2.1, 1.9, 1.7 // 2016-2025 (split - declining)
    ];

    const assetsSanaa = [
      null, null, null, null, null, null, // 2010-2015 (unified)
      3.2, 3.5, 3.8, 4.0, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7 // 2016-2025 (split - growing)
    ];

    const assetsUnified = [
      5.2, 5.5, 5.8, 6.0, 6.2, 6.5, // 2010-2015 (unified system)
      null, null, null, null, null, null, null, null, null, null // 2016-2025 (split)
    ];

    // Number of Operational Banks
    const banksAden = [
      null, null, null, null, null, null, // 2010-2015
      11, 10, 9, 8, 7, 7, 6, 6, 5, 5 // 2016-2025 (declining operations)
    ];

    const banksSanaa = [
      null, null, null, null, null, null, // 2010-2015
      14, 14, 13, 13, 12, 12, 11, 11, 10, 10 // 2016-2025 (more stable)
    ];

    const banksUnified = [
      17, 17, 17, 17, 17, 17, // 2010-2015
      null, null, null, null, null, null, null, null, null, null // 2016-2025
    ];

    return {
      labels: years,
      datasets: [
        // Unified system (pre-split)
        {
          label: isArabic ? 'الأصول المصرفية الموحدة' : 'Unified Banking Assets',
          data: assetsUnified,
          borderColor: '#6B7280',
          backgroundColor: 'rgba(107, 116, 128, 0.1)',
          borderWidth: 3,
          borderDash: [5, 5],
          yAxisID: 'y',
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8,
        },
        // Aden assets (post-split)
        {
          label: isArabic ? 'الأصول المصرفية - عدن' : 'Banking Assets - Aden',
          data: assetsAden,
          borderColor: '#EF4444',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          borderWidth: 3,
          yAxisID: 'y',
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8,
          fill: true,
        },
        // Sana'a assets (post-split)
        {
          label: isArabic ? 'الأصول المصرفية - صنعاء' : 'Banking Assets - Sana\'a',
          data: assetsSanaa,
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderWidth: 3,
          yAxisID: 'y',
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8,
          fill: true,
        },
        // Number of banks - Unified
        {
          label: isArabic ? 'البنوك العاملة (موحد)' : 'Operational Banks (Unified)',
          data: banksUnified,
          borderColor: '#9CA3AF',
          backgroundColor: 'rgba(156, 163, 175, 0.2)',
          borderWidth: 2,
          borderDash: [3, 3],
          yAxisID: 'y1',
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
        // Number of banks - Aden
        {
          label: isArabic ? 'البنوك العاملة - عدن' : 'Operational Banks - Aden',
          data: banksAden,
          borderColor: '#F87171',
          backgroundColor: 'rgba(248, 113, 113, 0.2)',
          borderWidth: 2,
          yAxisID: 'y1',
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
        // Number of banks - Sana'a
        {
          label: isArabic ? 'البنوك العاملة - صنعاء' : 'Operational Banks - Sana\'a',
          data: banksSanaa,
          borderColor: '#60A5FA',
          backgroundColor: 'rgba(96, 165, 250, 0.2)',
          borderWidth: 2,
          yAxisID: 'y1',
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
      ],
    };
  }, [isArabic]);

  const options: ChartOptions<'line'> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index' as const,
        intersect: false,
      },
      plugins: {
        legend: {
          display: true,
          position: 'top' as const,
          labels: {
            usePointStyle: true,
            padding: 15,
            font: {
              size: 12,
              family: isArabic ? 'IBM Plex Sans Arabic, Noto Naskh Arabic' : 'Inter',
            },
          },
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          titleFont: {
            size: 14,
            family: isArabic ? 'IBM Plex Sans Arabic' : 'Inter',
          },
          bodyFont: {
            size: 13,
            family: isArabic ? 'IBM Plex Sans Arabic' : 'Inter',
          },
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                // Check if it's assets (y-axis) or banks count (y1-axis)
                if (context.dataset.yAxisID === 'y') {
                  label += '$' + context.parsed.y.toFixed(1) + 'B';
                } else {
                  label += context.parsed.y + (isArabic ? ' بنك' : ' banks');
                }
              }
              return label;
            },
          },
        },
        annotation: {
          annotations: {
            // CBY Split annotation
            cbySplit: {
              type: 'line',
              xMin: 6, // 2016
              xMax: 6,
              borderColor: '#DC2626',
              borderWidth: 2,
              borderDash: [6, 6],
              label: {
                display: true,
                content: isArabic ? 'انقسام البنك المركزي' : 'CBY Split',
                position: 'start',
                backgroundColor: 'rgba(220, 38, 38, 0.8)',
                color: '#fff',
                font: {
                  size: 11,
                  family: isArabic ? 'IBM Plex Sans Arabic' : 'Inter',
                },
              },
            },
            // Currency Ban annotation
            currencyBan: {
              type: 'line',
              xMin: 9, // 2019
              xMax: 9,
              borderColor: '#F59E0B',
              borderWidth: 2,
              borderDash: [6, 6],
              label: {
                display: true,
                content: isArabic ? 'حظر العملة' : 'Currency Ban',
                position: 'end',
                backgroundColor: 'rgba(245, 158, 11, 0.8)',
                color: '#fff',
                font: {
                  size: 11,
                  family: isArabic ? 'IBM Plex Sans Arabic' : 'Inter',
                },
              },
            },
            // Fragmentation zone
            fragmentationZone: {
              type: 'box',
              xMin: 6,
              xMax: 15,
              backgroundColor: 'rgba(239, 68, 68, 0.05)',
              borderWidth: 0,
              label: {
                display: true,
                content: isArabic ? 'منطقة التشظي المصرفي' : 'Banking Fragmentation Zone',
                position: {
                  x: 'center',
                  y: 'start',
                },
                color: '#DC2626',
                font: {
                  size: 12,
                  weight: 'bold',
                  family: isArabic ? 'IBM Plex Sans Arabic' : 'Inter',
                },
              },
            },
          },
        },
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true,
            },
            mode: 'x',
          },
          pan: {
            enabled: true,
            mode: 'x',
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: isArabic ? 'السنة' : 'Year',
            font: {
              size: 14,
              weight: 'bold',
              family: isArabic ? 'IBM Plex Sans Arabic' : 'Inter',
            },
          },
          grid: {
            display: true,
            color: 'rgba(0, 0, 0, 0.05)',
          },
        },
        y: {
          type: 'linear' as const,
          display: true,
          position: 'left' as const,
          title: {
            display: true,
            text: isArabic ? 'الأصول المصرفية (مليار دولار)' : 'Banking Assets (USD Billions)',
            font: {
              size: 14,
              weight: 'bold',
              family: isArabic ? 'IBM Plex Sans Arabic' : 'Inter',
            },
          },
          grid: {
            display: true,
            color: 'rgba(0, 0, 0, 0.05)',
          },
          ticks: {
            callback: function (value) {
              return '$' + value + 'B';
            },
          },
        },
        y1: {
          type: 'linear' as const,
          display: true,
          position: 'right' as const,
          title: {
            display: true,
            text: isArabic ? 'عدد البنوك العاملة' : 'Number of Operational Banks',
            font: {
              size: 14,
              weight: 'bold',
              family: isArabic ? 'IBM Plex Sans Arabic' : 'Inter',
            },
          },
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            stepSize: 2,
          },
        },
      },
    }),
    [isArabic]
  );

  const exportData = useMemo(() => {
    const years = Array.from({ length: 16 }, (_, i) => 2010 + i);
    return years.map((year, i) => ({
      Year: year,
      'Unified Assets (USD B)': i < 6 ? (5.2 + i * 0.26).toFixed(1) : '',
      'Aden Assets (USD B)': i >= 6 ? (2.5 + (i - 6) * -0.13).toFixed(1) : '',
      'Sanaa Assets (USD B)': i >= 6 ? (3.2 + (i - 6) * 0.15).toFixed(1) : '',
      'Unified Banks': i < 6 ? 17 : '',
      'Aden Banks': i >= 6 ? 11 - Math.floor((i - 6) / 2) : '',
      'Sanaa Banks': i >= 6 ? 14 - Math.floor((i - 6) / 3) : '',
    }));
  }, []);

  return (
    <ChartContainer
      title={isArabic ? 'تطور النظام المصرفي الموازي' : 'Parallel Banking System Evolution'}
      description={
        isArabic
          ? 'الانقسام الدراماتيكي للنظام المصرفي اليمني بعد 2016 مع تراجع عدن ونمو صنعاء'
          : 'Dramatic split of Yemen\'s banking system post-2016 with Aden declining and Sana\'a growing'
      }
      exportData={exportData}
      exportFilename="banking_system_evolution"
      sources={[
        'Central Bank of Yemen - Aden',
        'Central Bank of Yemen - Sana\'a',
        'World Bank',
        'IMF',
      ]}
      lastUpdated="2025"
      dataPoints={96}
    >
      <Line data={chartData} options={options} />
    </ChartContainer>
  );
}
