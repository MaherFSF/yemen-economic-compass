import { useRef, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
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
import { getInflationFeed } from '@/data/feeds/inflation';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin,
  annotationPlugin
);

export default function InflationChart() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const chartRef = useRef<ChartJS<'line'>>(null);

  // Get all CPI data
  const cpiFeed = getInflationFeed();
  const southData = cpiFeed.data.south;
  const northData = cpiFeed.data.north;

  // Prepare chart data
  const chartData = useMemo(() => {
    // Get all unique dates
    const allDates = new Set([
      ...southData.map((d: any) => d.date),
      ...northData.map((d: any) => d.date)
    ]);
    const sortedDates = Array.from(allDates).sort();

    // Map data by date
    const southMap = new Map(southData.map((d: any) => [d.date, d]));
    const northMap = new Map(northData.map((d: any) => [d.date, d]));

    const southYoY = sortedDates.map(date => (southMap.get(date) as any)?.yoy || null);
    const northYoY = sortedDates.map(date => (northMap.get(date) as any)?.yoy || null);
    const southFood = sortedDates.map(date => (southMap.get(date) as any)?.food || null);
    const northFood = sortedDates.map(date => (northMap.get(date) as any)?.food || null);

    return {
      labels: sortedDates,
      datasets: [
        {
          label: isArabic ? 'التضخم العام - عدن (%)' : 'Headline Inflation - Aden (%)',
          data: southYoY,
          borderColor: 'rgb(239, 68, 68)',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          borderWidth: 3,
          fill: false,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: 'rgb(239, 68, 68)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
        },
        {
          label: isArabic ? 'التضخم العام - صنعاء (%)' : 'Headline Inflation - Sana\'a (%)',
          data: northYoY,
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderWidth: 3,
          fill: false,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: 'rgb(59, 130, 246)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
        },
        {
          label: isArabic ? 'تضخم الغذاء - عدن (%)' : 'Food Inflation - Aden (%)',
          data: southFood,
          borderColor: 'rgb(251, 146, 60)',
          backgroundColor: 'rgba(251, 146, 60, 0.1)',
          borderWidth: 2,
          borderDash: [5, 5],
          fill: false,
          tension: 0.4,
          pointRadius: 3,
          pointHoverRadius: 5,
          pointBackgroundColor: 'rgb(251, 146, 60)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
        },
        {
          label: isArabic ? 'تضخم الغذاء - صنعاء (%)' : 'Food Inflation - Sana\'a (%)',
          data: northFood,
          borderColor: 'rgb(34, 197, 94)',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          borderWidth: 2,
          borderDash: [5, 5],
          fill: false,
          tension: 0.4,
          pointRadius: 3,
          pointHoverRadius: 5,
          pointBackgroundColor: 'rgb(34, 197, 94)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
        },
      ],
    };
  }, [southData, northData, isArabic]);

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
              label += context.parsed.y.toFixed(1) + '%';
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
          // Currency Crisis 2018
          currencyCrisis: {
            type: 'line',
            xMin: '2018-01-01',
            xMax: '2018-01-01',
            borderColor: 'rgba(239, 68, 68, 0.5)',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              display: true,
              content: isArabic ? 'أزمة العملة' : 'Currency Crisis',
              position: 'start',
              backgroundColor: 'rgba(239, 68, 68, 0.8)',
              color: '#fff',
              font: {
                size: 10,
                weight: 'normal' as const,
              },
            },
          },
          // COVID-19 Impact
          covidImpact: {
            type: 'line',
            xMin: '2020-03-01',
            xMax: '2020-03-01',
            borderColor: 'rgba(168, 85, 247, 0.5)',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              display: true,
              content: isArabic ? 'كوفيد-19' : 'COVID-19',
              position: 'start',
              backgroundColor: 'rgba(168, 85, 247, 0.8)',
              color: '#fff',
              font: {
                size: 10,
                weight: 'normal' as const,
              },
            },
          },
          // High Inflation Zone
          highInflationZone: {
            type: 'box',
            yMin: 15,
            yMax: 100,
            xMin: 0,
            xMax: 999,
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
            size: 10,
            weight: 'normal' as const,
          },
          callback: function(value, index, values) {
            // Show only every 6th label
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
          text: isArabic ? 'معدل التضخم (%)' : 'Inflation Rate (%)',
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
            return value + '%';
          },
        },
      },
    },
  }), [isArabic]);

  // Export functions
  const handleExportCSV = () => {
    const allDates = new Set([
      ...southData.map((d: any) => d.date),
      ...northData.map((d: any) => d.date)
    ]);
    const sortedDates = Array.from(allDates).sort();
    const southMap = new Map(southData.map((d: any) => [d.date, d]));
    const northMap = new Map(northData.map((d: any) => [d.date, d]));

    const csv = [
      ['Date', 'Aden Headline (%)', 'Sanaa Headline (%)', 'Aden Food (%)', 'Sanaa Food (%)'],
      ...sortedDates.map(date => {
        const south: any = southMap.get(date);
        const north: any = northMap.get(date);
        return [
          date,
          south?.yoy?.toFixed(1) || '',
          north?.yoy?.toFixed(1) || '',
          south?.food?.toFixed(1) || '',
          north?.food?.toFixed(1) || '',
        ];
      }),
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'yemen-inflation-comparison.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleExportPNG = () => {
    if (chartRef.current) {
      const url = chartRef.current.toBase64Image();
      const a = document.createElement('a');
      a.href = url;
      a.download = 'yemen-inflation-comparison.png';
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
      title="Inflation Comparison: Aden vs Sana'a"
      titleAr="مقارنة التضخم: عدن مقابل صنعاء"
      description="Headline and food inflation rates showing divergent price dynamics across regions"
      descriptionAr="معدلات التضخم العام والغذائي تظهر ديناميكيات أسعار متباينة عبر المناطق"
      onExportCSV={handleExportCSV}
      onExportPNG={handleExportPNG}
      onReset={handleReset}
      source="Central Bank of Yemen, WFP, UN OCHA"
      sourceAr="البنك المركزي اليمني، برنامج الغذاء العالمي، مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية"
    >
      <div style={{ height: '450px' }}>
        <Line ref={chartRef} data={chartData} options={options} />
      </div>
    </ChartContainer>
  );
}
