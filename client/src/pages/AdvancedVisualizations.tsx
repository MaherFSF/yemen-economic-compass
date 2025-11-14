import { useState, useMemo } from 'react';
import { ArrowLeft, TrendingUp, GitBranch, BarChart3 } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EChartsWrapper from '@/components/EChartsWrapper';
import { getFXRatesFeed } from '@/data/feeds/fx_rates';
import type { EChartsOption } from 'echarts';

/**
 * Advanced Visualizations Page
 * Implements ECharts visualizations from JSON templates:
 * - FX Timeline with Dual Axis (echart_fx_timeline.json)
 * - Sankey Diagram (echart_sankey.json)
 * - Shock Decomposition (echart_shock_decomp.json)
 */

export default function AdvancedVisualizations() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  // Load FX data
  const fxFeed = getFXRatesFeed();
  
  // 1. FX Timeline with Dual Axis
  const fxTimelineOption: EChartsOption = useMemo(() => {
    const adenData = fxFeed.data.aden.map(d => [d.date, d.usd]);
    const sanaaData = fxFeed.data.sanaa.map(d => [d.date, d.usd]);
    const gapData = fxFeed.data.aden.map((d, i) => {
      const sanaaRate = fxFeed.data.sanaa[i]?.usd || d.usd;
      const gap = ((d.usd - sanaaRate) / sanaaRate) * 100;
      return [d.date, Math.round(gap)];
    });
    
    return {
      title: {
        text: language === 'ar' ? 'سعر الصرف – عدن/صنعاء والفجوة' : 'Exchange Rate - Aden/Sana\'a and Gap',
        left: language === 'ar' ? 'right' : 'left',
        textStyle: {
          fontFamily: language === 'ar' ? 'IBM Plex Sans Arabic, sans-serif' : 'Inter, sans-serif',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      legend: {
        data: [
          language === 'ar' ? 'عدن' : 'Aden',
          language === 'ar' ? 'صنعاء' : 'Sana\'a',
          language === 'ar' ? 'الفجوة %' : 'Gap %',
        ],
        top: 40,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'time',
      },
      yAxis: [
        {
          type: 'value',
          name: 'YER/USD',
          position: 'left',
          axisLabel: {
            formatter: '{value}',
          },
        },
        {
          type: 'value',
          name: language === 'ar' ? 'الفجوة %' : 'Gap %',
          position: 'right',
          axisLabel: {
            formatter: '{value}%',
          },
        },
      ],
      series: [
        {
          name: language === 'ar' ? 'عدن' : 'Aden',
          type: 'line',
          data: adenData,
          smooth: true,
          lineStyle: {
            width: 3,
            color: '#1F5C8A', // Blue
          },
          itemStyle: {
            color: '#1F5C8A',
          },
        },
        {
          name: language === 'ar' ? 'صنعاء' : 'Sana\'a',
          type: 'line',
          data: sanaaData,
          smooth: true,
          lineStyle: {
            width: 3,
            color: '#2B7A0B', // Green
          },
          itemStyle: {
            color: '#2B7A0B',
          },
        },
        {
          name: language === 'ar' ? 'الفجوة %' : 'Gap %',
          type: 'bar',
          yAxisIndex: 1,
          data: gapData,
          itemStyle: {
            color: '#C96A15', // Amber
          },
        },
      ],
    };
  }, [fxFeed, language]);
  
  // 2. Sankey Diagram - Money Flows
  const sankeyOption: EChartsOption = useMemo(() => {
    return {
      title: {
        text: language === 'ar' ? 'اتبع المال – من المنبع إلى الاستخدام' : 'Follow the Money - Source to Use',
        left: language === 'ar' ? 'right' : 'left',
        textStyle: {
          fontFamily: language === 'ar' ? 'IBM Plex Sans Arabic, sans-serif' : 'Inter, sans-serif',
        },
      },
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },
      series: [
        {
          type: 'sankey',
          layout: 'none',
          emphasis: {
            focus: 'adjacency',
          },
          data: [
            // Sources
            { name: language === 'ar' ? 'مساعدات دولية' : 'International Aid' },
            { name: language === 'ar' ? 'تحويلات' : 'Remittances' },
            { name: language === 'ar' ? 'نفط وغاز' : 'Oil & Gas' },
            { name: language === 'ar' ? 'ضرائب ورسوم' : 'Taxes & Fees' },
            
            // Intermediaries
            { name: language === 'ar' ? 'البنك المركزي - عدن' : 'CBY-Aden' },
            { name: language === 'ar' ? 'البنك المركزي - صنعاء' : 'CBY-Sana\'a' },
            { name: language === 'ar' ? 'صرافون' : 'Money Exchangers' },
            { name: language === 'ar' ? 'بنوك تجارية' : 'Commercial Banks' },
            
            // Uses
            { name: language === 'ar' ? 'رواتب' : 'Salaries' },
            { name: language === 'ar' ? 'خدمات عامة' : 'Public Services' },
            { name: language === 'ar' ? 'استيراد غذاء' : 'Food Imports' },
            { name: language === 'ar' ? 'استيراد وقود' : 'Fuel Imports' },
            { name: language === 'ar' ? 'عسكري' : 'Military' },
          ],
          links: [
            // Aid flows
            { source: language === 'ar' ? 'مساعدات دولية' : 'International Aid', target: language === 'ar' ? 'البنك المركزي - عدن' : 'CBY-Aden', value: 2500 },
            { source: language === 'ar' ? 'مساعدات دولية' : 'International Aid', target: language === 'ar' ? 'صرافون' : 'Money Exchangers', value: 1500 },
            
            // Remittances
            { source: language === 'ar' ? 'تحويلات' : 'Remittances', target: language === 'ar' ? 'صرافون' : 'Money Exchangers', value: 3500 },
            { source: language === 'ar' ? 'تحويلات' : 'Remittances', target: language === 'ar' ? 'بنوك تجارية' : 'Commercial Banks', value: 500 },
            
            // Oil & Gas
            { source: language === 'ar' ? 'نفط وغاز' : 'Oil & Gas', target: language === 'ar' ? 'البنك المركزي - عدن' : 'CBY-Aden', value: 800 },
            { source: language === 'ar' ? 'نفط وغاز' : 'Oil & Gas', target: language === 'ar' ? 'البنك المركزي - صنعاء' : 'CBY-Sana\'a', value: 200 },
            
            // Taxes
            { source: language === 'ar' ? 'ضرائب ورسوم' : 'Taxes & Fees', target: language === 'ar' ? 'البنك المركزي - عدن' : 'CBY-Aden', value: 400 },
            { source: language === 'ar' ? 'ضرائب ورسوم' : 'Taxes & Fees', target: language === 'ar' ? 'البنك المركزي - صنعاء' : 'CBY-Sana\'a', value: 600 },
            
            // CBY-Aden outflows
            { source: language === 'ar' ? 'البنك المركزي - عدن' : 'CBY-Aden', target: language === 'ar' ? 'رواتب' : 'Salaries', value: 1500 },
            { source: language === 'ar' ? 'البنك المركزي - عدن' : 'CBY-Aden', target: language === 'ar' ? 'خدمات عامة' : 'Public Services', value: 800 },
            { source: language === 'ar' ? 'البنك المركزي - عدن' : 'CBY-Aden', target: language === 'ar' ? 'عسكري' : 'Military', value: 1400 },
            
            // CBY-Sana'a outflows
            { source: language === 'ar' ? 'البنك المركزي - صنعاء' : 'CBY-Sana\'a', target: language === 'ar' ? 'رواتب' : 'Salaries', value: 400 },
            { source: language === 'ar' ? 'البنك المركزي - صنعاء' : 'CBY-Sana\'a', target: language === 'ar' ? 'عسكري' : 'Military', value: 400 },
            
            // Money Exchangers outflows
            { source: language === 'ar' ? 'صرافون' : 'Money Exchangers', target: language === 'ar' ? 'استيراد غذاء' : 'Food Imports', value: 3000 },
            { source: language === 'ar' ? 'صرافون' : 'Money Exchangers', target: language === 'ar' ? 'استيراد وقود' : 'Fuel Imports', value: 2000 },
            
            // Banks outflows
            { source: language === 'ar' ? 'بنوك تجارية' : 'Commercial Banks', target: language === 'ar' ? 'استيراد غذاء' : 'Food Imports', value: 300 },
            { source: language === 'ar' ? 'بنوك تجارية' : 'Commercial Banks', target: language === 'ar' ? 'استيراد وقود' : 'Fuel Imports', value: 200 },
          ],
          lineStyle: {
            color: 'gradient',
            curveness: 0.5,
          },
        },
      ],
    };
  }, [language]);
  
  // 3. Shock Decomposition - Inflation Factors
  const shockDecompOption: EChartsOption = useMemo(() => {
    const years = ['2020', '2021', '2022', '2023', '2024', '2025'];
    
    return {
      title: {
        text: language === 'ar' ? 'تفكيك الصدمات – مساهمة العوامل في التضخم' : 'Shock Decomposition - Factor Contributions to Inflation',
        left: language === 'ar' ? 'right' : 'left',
        textStyle: {
          fontFamily: language === 'ar' ? 'IBM Plex Sans Arabic, sans-serif' : 'Inter, sans-serif',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: [
          language === 'ar' ? 'تمرير سعر الصرف' : 'Exchange Rate Pass-through',
          language === 'ar' ? 'شحن/تأمين' : 'Shipping/Insurance',
          language === 'ar' ? 'غذاء/وقود محلي' : 'Local Food/Fuel',
          language === 'ar' ? 'سياسة نقدية' : 'Monetary Policy',
          language === 'ar' ? 'ضرائب/رسوم' : 'Taxes/Fees',
          language === 'ar' ? 'صدمة أمنية' : 'Security Shock',
        ],
        top: 40,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: years,
      },
      yAxis: {
        type: 'value',
        name: language === 'ar' ? 'نقاط مئوية' : 'Percentage Points',
      },
      series: [
        {
          name: language === 'ar' ? 'تمرير سعر الصرف' : 'Exchange Rate Pass-through',
          type: 'bar',
          stack: 'total',
          data: [3.5, 4.2, 5.8, 6.5, 7.2, 8.0],
          itemStyle: { color: '#1F5C8A' },
        },
        {
          name: language === 'ar' ? 'شحن/تأمين' : 'Shipping/Insurance',
          type: 'bar',
          stack: 'total',
          data: [1.2, 1.5, 2.0, 2.5, 2.8, 3.0],
          itemStyle: { color: '#1D8A8A' },
        },
        {
          name: language === 'ar' ? 'غذاء/وقود محلي' : 'Local Food/Fuel',
          type: 'bar',
          stack: 'total',
          data: [2.0, 2.5, 3.0, 3.5, 4.0, 4.5],
          itemStyle: { color: '#2B7A0B' },
        },
        {
          name: language === 'ar' ? 'سياسة نقدية' : 'Monetary Policy',
          type: 'bar',
          stack: 'total',
          data: [1.0, 1.2, 1.5, 1.8, 2.0, 2.2],
          itemStyle: { color: '#C96A15' },
        },
        {
          name: language === 'ar' ? 'ضرائب/رسوم' : 'Taxes/Fees',
          type: 'bar',
          stack: 'total',
          data: [0.8, 1.0, 1.2, 1.5, 1.8, 2.0],
          itemStyle: { color: '#F59E0B' },
        },
        {
          name: language === 'ar' ? 'صدمة أمنية' : 'Security Shock',
          type: 'bar',
          stack: 'total',
          data: [1.5, 2.0, 2.5, 3.0, 2.5, 2.0],
          itemStyle: { color: '#CE1126' },
        },
      ],
    };
  }, [language]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span>{language === 'ar' ? 'العودة' : 'Back'}</span>
                </button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">
                  {language === 'ar' ? 'التصورات المتقدمة' : 'Advanced Visualizations'}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {language === 'ar' ? 'رسوم بيانية تفاعلية متقدمة باستخدام Apache ECharts' : 'Advanced interactive charts using Apache ECharts'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container py-8 space-y-8">
        {/* 1. FX Timeline with Dual Axis */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <CardTitle>
                {language === 'ar' ? 'سعر الصرف – عدن/صنعاء والفجوة' : 'Exchange Rate - Aden/Sana\'a and Gap'}
              </CardTitle>
            </div>
            <CardDescription>
              {language === 'ar'
                ? 'رسم بياني بمحورين يوضح تطور سعر الصرف في عدن وصنعاء والفجوة بينهما (2014-2025)'
                : 'Dual-axis chart showing exchange rate evolution in Aden and Sana\'a and the gap between them (2014-2025)'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EChartsWrapper option={fxTimelineOption} style={{ height: '500px' }} />
          </CardContent>
        </Card>
        
        {/* 2. Sankey Diagram */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-primary" />
              <CardTitle>
                {language === 'ar' ? 'اتبع المال – من المنبع إلى الاستخدام' : 'Follow the Money - Source to Use'}
              </CardTitle>
            </div>
            <CardDescription>
              {language === 'ar'
                ? 'مخطط سانكي يوضح تدفقات الأموال من المصادر (مساعدات، تحويلات، نفط) إلى الاستخدامات (رواتب، استيراد، عسكري)'
                : 'Sankey diagram showing money flows from sources (aid, remittances, oil) to uses (salaries, imports, military)'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EChartsWrapper option={sankeyOption} style={{ height: '600px' }} />
          </CardContent>
        </Card>
        
        {/* 3. Shock Decomposition */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <CardTitle>
                {language === 'ar' ? 'تفكيك الصدمات – مساهمة العوامل في التضخم' : 'Shock Decomposition - Factor Contributions to Inflation'}
              </CardTitle>
            </div>
            <CardDescription>
              {language === 'ar'
                ? 'رسم بياني عمودي مكدس يوضح مساهمة 6 عوامل في التضخم (تمرير سعر الصرف، شحن، غذاء، سياسة نقدية، ضرائب، أمن)'
                : 'Stacked bar chart showing 6 factors contributing to inflation (exchange rate pass-through, shipping, food, monetary policy, taxes, security)'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EChartsWrapper option={shockDecompOption} style={{ height: '500px' }} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
