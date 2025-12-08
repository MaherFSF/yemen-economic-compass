import { useRef, useEffect, useMemo } from 'react';
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
import { getGDPFeed } from '@/data/feeds/gdp';

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

export default function GDPTrendChart() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const chartRef = useRef<ChartJS<'line'>>(null);

  // Get all GDP data
  const gdpFeed = getGDPFeed();
  const gdpData = gdpFeed.data.data;

  // Prepare chart data
  const chartData = useMemo(() => {
    const years = gdpData.map((d: any) => d.year);
    const realGDP = gdpData.map((d: any) => d.realGDP_index);
    const nominalGDP = gdpData.map((d: any) => d.nominalGDP_billions);

    return {
      labels: years,
      datasets: [
        {
          label: isArabic ? 'الناتج المحلي الإجمالي الحقيقي (مؤشر 2014=100)' : 'Real GDP (Index 2014=100)',
          data: realGDP,
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBackgroundColor: 'rgb(59, 130, 246)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
        },
        {
          label: isArabic ? 'الناتج المحلي الإجمالي الاسمي (مليار دولار)' : 'Nominal GDP (Billion USD)',
          data: nominalGDP,
          borderColor: 'rgb(16, 185, 129)',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBackgroundColor: 'rgb(16, 185, 129)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          yAxisID: 'y1',
        },
      ],
    };
  }, [gdpData, isArabic]);

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
              label += context.parsed.y.toFixed(1);
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
          // 2011 Revolution
          revolution: {
            type: 'line',
            xMin: 2011,
            xMax: 2011,
            borderColor: 'rgba(239, 68, 68, 0.5)',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              display: true,
              content: isArabic ? 'الثورة اليمنية' : 'Yemeni Revolution',
              position: 'start',
              backgroundColor: 'rgba(239, 68, 68, 0.8)',
              color: '#fff',
              font: {
                size: 10,
                weight: 'bold',
              },
            },
          },
          // 2014 Houthi Takeover
          houthiTakeover: {
            type: 'line',
            xMin: 2014,
            xMax: 2014,
            borderColor: 'rgba(239, 68, 68, 0.5)',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              display: true,
              content: isArabic ? 'سيطرة الحوثيين' : 'Houthi Takeover',
              position: 'start',
              backgroundColor: 'rgba(239, 68, 68, 0.8)',
              color: '#fff',
              font: {
                size: 10,
                weight: 'bold',
              },
            },
          },
          // 2015 War Start
          warStart: {
            type: 'line',
            xMin: 2015,
            xMax: 2015,
            borderColor: 'rgba(220, 38, 38, 0.5)',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              display: true,
              content: isArabic ? 'بداية الحرب' : 'War Begins',
              position: 'start',
              backgroundColor: 'rgba(220, 38, 38, 0.8)',
              color: '#fff',
              font: {
                size: 10,
                weight: 'bold',
              },
            },
          },
          // Economic Collapse Zone
          collapseZone: {
            type: 'box',
            xMin: 2014.5,
            xMax: 2016.5,
            yMin: 0,
            yMax: 150,
            backgroundColor: 'rgba(239, 68, 68, 0.05)',
            borderWidth: 0,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            size: 11,
            weight: 'normal' as const,
          },
        },
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: isArabic ? 'مؤشر الناتج الحقيقي (2014=100)' : 'Real GDP Index (2014=100)',
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
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: isArabic ? 'الناتج الاسمي (مليار دولار)' : 'Nominal GDP (Billion USD)',
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
        },
      },
    },
  }), [isArabic]);

  // Export functions
  const handleExportCSV = () => {
    const csv = [
      ['Year', 'Real GDP Index', 'Nominal GDP (Billion USD)', 'Growth Rate (%)'],
      ...gdpData.map((d: any) => [
        d.year,
        d.realGDP_index.toFixed(2),
        d.nominalGDP_billions.toFixed(2),
        d.growth_rate.toFixed(2),
      ]),
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'yemen-gdp-trend-2010-2025.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleExportPNG = () => {
    if (chartRef.current) {
      const url = chartRef.current.toBase64Image();
      const a = document.createElement('a');
      a.href = url;
      a.download = 'yemen-gdp-trend-2010-2025.png';
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
      title="Yemen GDP Trend (2010-2025)"
      titleAr="اتجاه الناتج المحلي الإجمالي لليمن (2010-2025)"
      description="Real and nominal GDP showing economic collapse during war and gradual recovery"
      descriptionAr="الناتج الحقيقي والاسمي يظهر الانهيار الاقتصادي خلال الحرب والتعافي التدريجي"
      onExportCSV={handleExportCSV}
      onExportPNG={handleExportPNG}
      onReset={handleReset}
      source="World Bank, IMF, Central Bank of Yemen"
      sourceAr="البنك الدولي، صندوق النقد الدولي، البنك المركزي اليمني"
    >
      <div style={{ height: '450px' }}>
        <Line ref={chartRef} data={chartData} options={options} />
      </div>
    </ChartContainer>
  );
}
