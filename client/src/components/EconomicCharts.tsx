import { useEffect, useState } from 'react';
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
  ChartOptions,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { trpc } from '@/lib/trpc';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface EconomicChartsProps {
  actorId?: number;
}

export default function EconomicCharts({ actorId }: EconomicChartsProps) {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  // Fetch indicators from database
  const { data: indicators, isLoading } = trpc.indicators.list.useQuery();

  // Process data for charts
  const [gdpData, setGdpData] = useState<any>(null);
  const [inflationData, setInflationData] = useState<any>(null);
  const [exchangeRateData, setExchangeRateData] = useState<any>(null);

  useEffect(() => {
    if (!indicators) return;

    // Filter by actorId if provided
    const filteredIndicators = actorId
      ? indicators.filter((ind: any) => ind.actorId === actorId)
      : indicators;

    // Group by indicator name and year
    const gdpIndicators = filteredIndicators.filter((ind: any) =>
      ind.nameEn.toLowerCase().includes('gdp') || ind.nameEn.toLowerCase().includes('gross domestic')
    );
    const inflationIndicators = filteredIndicators.filter((ind: any) =>
      ind.nameEn.toLowerCase().includes('inflation') || ind.nameEn.toLowerCase().includes('cpi')
    );
    const exchangeIndicators = filteredIndicators.filter((ind: any) =>
      ind.nameEn.toLowerCase().includes('exchange rate') || ind.nameEn.toLowerCase().includes('currency')
    );

    // Prepare GDP chart data
    if (gdpIndicators.length > 0) {
      const years = gdpIndicators.map((ind: any) => ind.year).sort();
      const values = years.map((year: number) => {
        const ind = gdpIndicators.find((i: any) => i.year === year);
        return ind ? parseFloat(ind.value) : 0;
      });

      setGdpData({
        labels: years,
        datasets: [
          {
            label: isArabic ? 'الناتج المحلي الإجمالي (مليار دولار)' : 'GDP (Billion USD)',
            data: values,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4,
          },
        ],
      });
    }

    // Prepare Inflation chart data
    if (inflationIndicators.length > 0) {
      const years = inflationIndicators.map((ind: any) => ind.year).sort();
      const values = years.map((year: number) => {
        const ind = inflationIndicators.find((i: any) => i.year === year);
        return ind ? parseFloat(ind.value) : 0;
      });

      setInflationData({
        labels: years,
        datasets: [
          {
            label: isArabic ? 'معدل التضخم (%)' : 'Inflation Rate (%)',
            data: values,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.4,
          },
        ],
      });
    }

    // Prepare Exchange Rate chart data
    if (exchangeIndicators.length > 0) {
      const years = exchangeIndicators.map((ind: any) => ind.year).sort();
      const values = years.map((year: number) => {
        const ind = exchangeIndicators.find((i: any) => i.year === year);
        return ind ? parseFloat(ind.value) : 0;
      });

      setExchangeRateData({
        labels: years,
        datasets: [
          {
            label: isArabic ? 'سعر الصرف (ريال/دولار)' : 'Exchange Rate (YER/USD)',
            data: values,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1,
          },
        ],
      });
    }
  }, [indicators, actorId, isArabic]);

  const lineOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  const barOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{isArabic ? 'جاري التحميل...' : 'Loading...'}</CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (!gdpData && !inflationData && !exchangeRateData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{isArabic ? 'لا توجد بيانات متاحة' : 'No data available'}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            {isArabic
              ? 'لا توجد مؤشرات اقتصادية متاحة للعرض'
              : 'No economic indicators available to display'}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {gdpData && (
        <Card>
          <CardHeader>
            <CardTitle>{isArabic ? 'الناتج المحلي الإجمالي' : 'GDP Trend'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Line data={gdpData} options={lineOptions} />
            </div>
          </CardContent>
        </Card>
      )}

      {inflationData && (
        <Card>
          <CardHeader>
            <CardTitle>{isArabic ? 'معدل التضخم' : 'Inflation Rate'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Line data={inflationData} options={lineOptions} />
            </div>
          </CardContent>
        </Card>
      )}

      {exchangeRateData && (
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>{isArabic ? 'سعر الصرف' : 'Exchange Rate'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Bar data={exchangeRateData} options={barOptions} />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
