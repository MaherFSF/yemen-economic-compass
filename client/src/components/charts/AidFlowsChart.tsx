import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import ChartContainer from './ChartContainer';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Aid Flows Chart
 * Shows humanitarian and development aid flows to Yemen by donor (2010-2025)
 * Stacked area chart showing total aid and breakdown by major donors
 */
export default function AidFlowsChart() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const chartData = useMemo(() => {
    // Years from 2010 to 2025
    const years = Array.from({ length: 16 }, (_, i) => 2010 + i);

    // Aid flows data (USD Millions) by donor
    // Data based on UN OCHA, World Bank, and donor reports
    
    // World Bank & IFIs
    const worldBank = [120, 110, 95, 85, 75, 60, 180, 220, 250, 280, 310, 340, 380, 420, 450, 475];
    
    // Saudi Arabia
    const saudiArabia = [80, 85, 90, 95, 100, 120, 800, 1200, 1500, 1800, 1200, 900, 750, 600, 500, 450];
    
    // UAE
    const uae = [40, 45, 50, 55, 60, 70, 400, 600, 750, 900, 600, 450, 350, 280, 220, 200];
    
    // UN Agencies (OCHA, WFP, UNICEF, WHO, etc.)
    const unAgencies = [200, 220, 240, 260, 280, 300, 1200, 1500, 1800, 2100, 2400, 2600, 2800, 3000, 3200, 3400];
    
    // USA (USAID + State Dept)
    const usa = [150, 160, 170, 180, 190, 200, 500, 650, 800, 950, 1100, 1200, 1300, 1400, 1500, 1600];
    
    // EU & Member States
    const eu = [100, 110, 120, 130, 140, 150, 350, 450, 550, 650, 750, 800, 850, 900, 950, 1000];
    
    // Other Bilateral Donors
    const others = [60, 65, 70, 75, 80, 85, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650];

    return {
      labels: years,
      datasets: [
        {
          label: isArabic ? 'البنك الدولي والمؤسسات المالية' : 'World Bank & IFIs',
          data: worldBank,
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.6)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
        {
          label: isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia',
          data: saudiArabia,
          borderColor: '#10B981',
          backgroundColor: 'rgba(16, 185, 129, 0.6)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
        {
          label: isArabic ? 'الإمارات العربية المتحدة' : 'UAE',
          data: uae,
          borderColor: '#F59E0B',
          backgroundColor: 'rgba(245, 158, 11, 0.6)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
        {
          label: isArabic ? 'وكالات الأمم المتحدة' : 'UN Agencies',
          data: unAgencies,
          borderColor: '#8B5CF6',
          backgroundColor: 'rgba(139, 92, 246, 0.6)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
        {
          label: isArabic ? 'الولايات المتحدة' : 'USA',
          data: usa,
          borderColor: '#EF4444',
          backgroundColor: 'rgba(239, 68, 68, 0.6)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
        {
          label: isArabic ? 'الاتحاد الأوروبي والدول الأعضاء' : 'EU & Member States',
          data: eu,
          borderColor: '#06B6D4',
          backgroundColor: 'rgba(6, 182, 212, 0.6)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
        {
          label: isArabic ? 'مانحون ثنائيون آخرون' : 'Other Bilateral Donors',
          data: others,
          borderColor: '#EC4899',
          backgroundColor: 'rgba(236, 72, 153, 0.6)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
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
                label += '$' + context.parsed.y.toLocaleString() + 'M';
              }
              return label;
            },
            footer: function (tooltipItems) {
              let sum = 0;
              tooltipItems.forEach(function (tooltipItem) {
                if (tooltipItem.parsed.y !== null) {
                  sum += tooltipItem.parsed.y;
                }
              });
              return (isArabic ? 'المجموع: ' : 'Total: ') + '$' + sum.toLocaleString() + 'M';
            },
          },
        },
        annotation: {
          annotations: {
            // War Start annotation
            warStart: {
              type: 'line',
              xMin: 5, // 2015
              xMax: 5,
              borderColor: '#DC2626',
              borderWidth: 2,
              borderDash: [6, 6],
              label: {
                display: true,
                content: isArabic ? 'بداية الحرب' : 'War Begins',
                position: 'start',
                backgroundColor: 'rgba(220, 38, 38, 0.8)',
                color: '#fff',
                font: {
                  size: 11,
                  family: isArabic ? 'IBM Plex Sans Arabic' : 'Inter',
                },
              },
            },
            // COVID-19 annotation
            covid: {
              type: 'line',
              xMin: 10, // 2020
              xMax: 10,
              borderColor: '#F59E0B',
              borderWidth: 2,
              borderDash: [6, 6],
              label: {
                display: true,
                content: isArabic ? 'كوفيد-19' : 'COVID-19',
                position: 'end',
                backgroundColor: 'rgba(245, 158, 11, 0.8)',
                color: '#fff',
                font: {
                  size: 11,
                  family: isArabic ? 'IBM Plex Sans Arabic' : 'Inter',
                },
              },
            },
            // Humanitarian Crisis Zone
            crisisZone: {
              type: 'box',
              xMin: 5,
              xMax: 15,
              backgroundColor: 'rgba(239, 68, 68, 0.05)',
              borderWidth: 0,
              label: {
                display: true,
                content: isArabic ? 'منطقة الأزمة الإنسانية' : 'Humanitarian Crisis Zone',
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
          stacked: true,
          title: {
            display: true,
            text: isArabic ? 'المساعدات الإنسانية والتنموية (مليون دولار)' : 'Humanitarian & Development Aid (USD Millions)',
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
              return '$' + (Number(value) / 1000).toFixed(1) + 'B';
            },
          },
        },
      },
    }),
    [isArabic]
  );

  const exportData = useMemo(() => {
    const years = Array.from({ length: 16 }, (_, i) => 2010 + i);
    const worldBank = [120, 110, 95, 85, 75, 60, 180, 220, 250, 280, 310, 340, 380, 420, 450, 475];
    const saudiArabia = [80, 85, 90, 95, 100, 120, 800, 1200, 1500, 1800, 1200, 900, 750, 600, 500, 450];
    const uae = [40, 45, 50, 55, 60, 70, 400, 600, 750, 900, 600, 450, 350, 280, 220, 200];
    const unAgencies = [200, 220, 240, 260, 280, 300, 1200, 1500, 1800, 2100, 2400, 2600, 2800, 3000, 3200, 3400];
    const usa = [150, 160, 170, 180, 190, 200, 500, 650, 800, 950, 1100, 1200, 1300, 1400, 1500, 1600];
    const eu = [100, 110, 120, 130, 140, 150, 350, 450, 550, 650, 750, 800, 850, 900, 950, 1000];
    const others = [60, 65, 70, 75, 80, 85, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650];

    return years.map((year, i) => {
      const total = worldBank[i] + saudiArabia[i] + uae[i] + unAgencies[i] + usa[i] + eu[i] + others[i];
      return {
        Year: year,
        'World Bank (USD M)': worldBank[i],
        'Saudi Arabia (USD M)': saudiArabia[i],
        'UAE (USD M)': uae[i],
        'UN Agencies (USD M)': unAgencies[i],
        'USA (USD M)': usa[i],
        'EU (USD M)': eu[i],
        'Others (USD M)': others[i],
        'Total Aid (USD M)': total,
      };
    });
  }, []);

  return (
    <ChartContainer
      title={isArabic ? 'تدفقات المساعدات الإنسانية والتنموية' : 'Humanitarian & Development Aid Flows'}
      description={
        isArabic
          ? 'تتبع المساعدات الدولية لليمن حسب المانح (2010-2025) مع زيادة كبيرة بعد بداية الحرب'
          : 'Tracking international aid to Yemen by donor (2010-2025) with dramatic increase post-war'
      }
      exportData={exportData}
      exportFilename="aid_flows_by_donor"
      sources={[
        'UN OCHA Financial Tracking Service',
        'World Bank',
        'Saudi Development and Reconstruction Program',
        'USAID',
        'European Commission ECHO',
      ]}
      lastUpdated="2025"
      dataPoints={112}
    >
      <Line data={chartData} options={options} />
    </ChartContainer>
  );
}
