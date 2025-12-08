import { useRef, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';
import annotationPlugin from 'chartjs-plugin-annotation';
import { useLanguage } from '@/contexts/LanguageContext';
import ChartContainer from './ChartContainer';
import { getFXRatesFeed } from '@/data/feeds/fx_rates';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin,
  annotationPlugin
);

export default function ExchangeRateChart() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const chartRef = useRef<ChartJS<'line'>>(null);

  // Get all FX rate data
  const fxFeed = getFXRatesFeed();
  const adenData = fxFeed.data.aden;
  const sanaaData = fxFeed.data.sanaa;
  // Combine both arrays with location tag
  const fxData = [
    ...adenData.map((d: any) => ({ ...d, location: 'aden' })),
    ...sanaaData.map((d: any) => ({ ...d, location: 'sanaa' }))
  ];

  // Prepare chart data
  const chartData = useMemo(() => {
    // Group by date
    const dateMap = new Map<string, { aden?: number; sanaa?: number }>();
    
    fxData.forEach((d: any) => {
      const key = d.date;
      if (!dateMap.has(key)) {
        dateMap.set(key, {});
      }
      const entry = dateMap.get(key)!;
      if (d.location === 'aden') {
        entry.aden = d.usd;
      } else if (d.location === 'sanaa') {
        entry.sanaa = d.usd;
      }
    });

    // Sort by date and extract data
    const sortedDates = Array.from(dateMap.keys()).sort();
    const adenRates = sortedDates.map(date => dateMap.get(date)?.aden || null);
    const sanaaRates = sortedDates.map(date => dateMap.get(date)?.sanaa || null);
    
    // Calculate gap percentage
    const gapPercentage = sortedDates.map(date => {
      const entry = dateMap.get(date)!;
      if (entry.aden && entry.sanaa) {
        return ((entry.aden - entry.sanaa) / entry.sanaa) * 100;
      }
      return null;
    });

    return {
      labels: sortedDates,
      datasets: [
        {
          label: isArabic ? 'سعر الصرف - عدن (ريال/دولار)' : 'Exchange Rate - Aden (YER/USD)',
          data: adenRates,
          borderColor: 'rgb(239, 68, 68)',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          borderWidth: 3,
          fill: false,
          tension: 0.4,
          pointRadius: 3,
          pointHoverRadius: 6,
          pointBackgroundColor: 'rgb(239, 68, 68)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          yAxisID: 'y',
        },
        {
          label: isArabic ? 'سعر الصرف - صنعاء (ريال/دولار)' : 'Exchange Rate - Sana\'a (YER/USD)',
          data: sanaaRates,
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderWidth: 3,
          fill: false,
          tension: 0.4,
          pointRadius: 3,
          pointHoverRadius: 6,
          pointBackgroundColor: 'rgb(59, 130, 246)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          yAxisID: 'y',
        },
        {
          label: isArabic ? 'فجوة سعر الصرف (%)' : 'Exchange Rate Gap (%)',
          data: gapPercentage,
          borderColor: 'rgb(168, 85, 247)',
          backgroundColor: 'rgba(168, 85, 247, 0.1)',
          borderWidth: 2,
          borderDash: [5, 5],
          fill: true,
          tension: 0.4,
          pointRadius: 2,
          pointHoverRadius: 5,
          pointBackgroundColor: 'rgb(168, 85, 247)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          yAxisID: 'y1',
        },
      ],
    };
  }, [fxData, isArabic]);

  // Chart options
  const options: ChartOptions<'line'> = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 12,
            weight: 'bold' as const,
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              if (context.datasetIndex === 2) {
                // Gap percentage
                label += context.parsed.y.toFixed(1) + '%';
              } else {
                // Exchange rates
                label += context.parsed.y.toFixed(0) + ' YER';
              }
            }
            return label;
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
      annotation: {
        annotations: {
          // 2016 CBY Split
          cbySplit: {
            type: 'line',
            xMin: '2016-09-01',
            xMax: '2016-09-01',
            borderColor: 'rgba(239, 68, 68, 0.5)',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              display: true,
              content: isArabic ? 'انقسام البنك المركزي' : 'CBY Split',
              position: 'start',
              backgroundColor: 'rgba(239, 68, 68, 0.8)',
              color: '#fff',
          font: {
            size: 10,
            weight: 'normal' as const,
          },
            },
          },
          // 2019 Saudi Deposit
          saudiDeposit: {
            type: 'line',
            xMin: '2019-01-01',
            xMax: '2019-01-01',
            borderColor: 'rgba(34, 197, 94, 0.5)',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              display: true,
              content: isArabic ? 'الوديعة السعودية' : 'Saudi Deposit',
              position: 'start',
              backgroundColor: 'rgba(34, 197, 94, 0.8)',
              color: '#fff',
              font: {
                size: 10,
                weight: 'bold',
              },
            },
          },
          // Critical Divergence Zone
          divergenceZone: {
            type: 'box',
            xMin: '2020-01-01',
            xMax: '2025-12-31',
            yMin: 0,
            yMax: 3000,
            backgroundColor: 'rgba(239, 68, 68, 0.03)',
            borderWidth: 0,
          },
        },
      },
    },
    scales: {
      x: {
        type: 'category',
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          font: {
            size: 11,
            weight: 'normal' as const,
          },
          callback: function(value, index, values) {
            // Show only every 6th label to avoid crowding
            if (index % 6 === 0) {
              return this.getLabelForValue(value as number);
            }
            return '';
          },
        },
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: isArabic ? 'سعر الصرف (ريال/دولار)' : 'Exchange Rate (YER/USD)',
          font: {
            size: 12,
            weight: 'bold' as const,
          },
        },
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            size: 11,
          },
          callback: function(value) {
            return value.toLocaleString();
          },
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: isArabic ? 'فجوة سعر الصرف (%)' : 'Exchange Rate Gap (%)',
          font: {
            size: 12,
            weight: 'bold' as const,
          },
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          font: {
            size: 11,
          },
          callback: function(value) {
            return value + '%';
          },
        },
      },
    },
  }), [isArabic]);

  // Export functions
  const handleExportCSV = () => {
    const csv = [
      ['Date', 'Aden Rate (YER/USD)', 'Sanaa Rate (YER/USD)', 'Gap (%)'],
      ...fxData.map((d: any) => {
        const adenData = fxData.find((f: any) => f.date === d.date && f.location === 'aden');
        const sanaaData = fxData.find((f: any) => f.date === d.date && f.location === 'sanaa');
        const gap = adenData && sanaaData 
          ? ((adenData.usd - sanaaData.usd) / sanaaData.usd * 100).toFixed(1)
          : '';
        return [
          d.date,
          adenData?.usd.toFixed(2) || '',
          sanaaData?.usd.toFixed(2) || '',
          gap,
        ];
      }),
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'yemen-exchange-rates-aden-sanaa.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleExportPNG = () => {
    if (chartRef.current) {
      const url = chartRef.current.toBase64Image();
      const a = document.createElement('a');
      a.href = url;
      a.download = 'yemen-exchange-rates-aden-sanaa.png';
      a.click();
    }
  };

  const handleReset = () => {
    if (chartRef.current) {
      chartRef.current.resetZoom();
    }
  };

  return (
    <ChartContainer
      title="Exchange Rate Divergence: Aden vs Sana'a"
      titleAr="تباعد سعر الصرف: عدن مقابل صنعاء"
      description="Dramatic divergence between the two parallel monetary systems showing economic fragmentation"
      descriptionAr="التباعد الكبير بين النظامين النقديين المتوازيين يظهر التفتت الاقتصادي"
      onExportCSV={handleExportCSV}
      onExportPNG={handleExportPNG}
      onReset={handleReset}
      source="Central Bank of Yemen (Aden), Central Bank of Yemen (Sana'a), Market Data"
      sourceAr="البنك المركزي اليمني (عدن)، البنك المركزي اليمني (صنعاء)، بيانات السوق"
    >
      <div style={{ height: '450px' }}>
        <Line ref={chartRef} data={chartData} options={options} />
      </div>
    </ChartContainer>
  );
}
