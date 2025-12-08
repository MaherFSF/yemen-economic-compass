import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, TrendingUp, TrendingDown, Minus, Info, Download, Filter, Calendar } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getLatestGDP, getGDPByYear } from '@/data/feeds/gdp';
import { getLatestCPI } from '@/data/feeds/inflation';
import { getLatestFXRate } from '@/data/feeds/fx_rates';
import { getLatestPoverty } from '@/data/feeds/poverty';

interface CompassCard {
  id: string;
  title_ar: string;
  title_en: string;
  unit_ar: string;
  unit_en: string;
  explain_ar: string;
  explain_en: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
  severity: 'critical' | 'warning' | 'normal' | 'positive';
  lastUpdated: string;
  icon?: string;
}

export default function CompassDashboardNew() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  // Load latest data from feeds
  const latestGDP = getLatestGDP();
  const gdp2014 = getGDPByYear(2014);
  const latestCPIAden = getLatestCPI('south' as 'north' | 'south');
  const latestCPISanaa = getLatestCPI('north' as 'north' | 'south');
  const latestFXAden = getLatestFXRate('aden');
  const latestFXSanaa = getLatestFXRate('sanaa');
  const latestPoverty = getLatestPoverty();
  
  // Calculate compass card values
  const compassCards: CompassCard[] = useMemo(() => {
    const gdpBase14 = gdp2014 ? (latestGDP.realGDP_index / gdp2014.realGDP_index) * 100 : 0;
    const fxGap = ((latestFXAden.usd - latestFXSanaa.usd) / latestFXSanaa.usd) * 100;
    
    return [
      {
        id: 'GDP_BASE14',
        title_ar: 'الناتج مقارنة بـ2014',
        title_en: 'GDP vs 2014 Baseline',
        unit_ar: '%',
        unit_en: '%',
        explain_ar: 'كم تبقّى من الاقتصاد مقارنة بما قبل الحرب',
        explain_en: 'How much of the economy remains compared to pre-war',
        value: Math.round(gdpBase14),
        trend: gdpBase14 > 60 ? 'up' : gdpBase14 > 50 ? 'stable' : 'down',
        severity: gdpBase14 > 70 ? 'positive' : gdpBase14 > 60 ? 'normal' : gdpBase14 > 50 ? 'warning' : 'critical',
        lastUpdated: new Date().toISOString(),
      },
      {
        id: 'GDP_PC_REAL',
        title_ar: 'الناتج الحقيقي للفرد',
        title_en: 'Real GDP Per Capita',
        unit_ar: 'مؤشر (2014=100)',
        unit_en: 'Index (2014=100)',
        explain_ar: 'دليل مباشر على قدرة الشراء الحقيقية',
        explain_en: 'Direct indicator of real purchasing power',
        value: latestGDP.realGDP_index,
        trend: latestGDP.growth_rate > 0 ? 'up' : latestGDP.growth_rate < 0 ? 'down' : 'stable',
        severity: latestGDP.realGDP_index > 70 ? 'positive' : latestGDP.realGDP_index > 60 ? 'normal' : latestGDP.realGDP_index > 50 ? 'warning' : 'critical',
        lastUpdated: new Date().toISOString(),
      },
      {
        id: 'CPI_ADEN',
        title_ar: 'التضخم العام – عدن',
        title_en: 'Headline Inflation - Aden',
        unit_ar: '% سنوي',
        unit_en: '% YoY',
        explain_ar: 'تغيّر الأسعار للسلع الأساسية',
        explain_en: 'Price change for essential goods',
        value: Math.round(latestCPIAden.yoy * 10) / 10,
        trend: latestCPIAden.yoy > 10 ? 'up' : latestCPIAden.yoy > 5 ? 'stable' : 'down',
        severity: latestCPIAden.yoy > 15 ? 'critical' : latestCPIAden.yoy > 10 ? 'warning' : latestCPIAden.yoy > 5 ? 'normal' : 'positive',
        lastUpdated: new Date().toISOString(),
      },
      {
        id: 'CPI_SANA',
        title_ar: 'التضخم العام – صنعاء',
        title_en: 'Headline Inflation - Sana\'a',
        unit_ar: '% سنوي',
        unit_en: '% YoY',
        explain_ar: 'قياس بديل حيث تتوفر بيانات',
        explain_en: 'Alternative measure where data available',
        value: Math.round(latestCPISanaa.yoy * 10) / 10,
        trend: latestCPISanaa.yoy > 10 ? 'up' : latestCPISanaa.yoy > 5 ? 'stable' : 'down',
        severity: latestCPISanaa.yoy > 15 ? 'critical' : latestCPISanaa.yoy > 10 ? 'warning' : latestCPISanaa.yoy > 5 ? 'normal' : 'positive',
        lastUpdated: new Date().toISOString(),
      },
      {
        id: 'FX_ADEN',
        title_ar: 'سعر الصرف – عدن',
        title_en: 'Exchange Rate - Aden',
        unit_ar: 'ريال/دولار',
        unit_en: 'YER/USD',
        explain_ar: 'السعر في النظام النقدي الجنوبي',
        explain_en: 'Rate in the southern monetary system',
        value: latestFXAden.usd,
        trend: latestFXAden.usd > 1500 ? 'up' : latestFXAden.usd > 1000 ? 'stable' : 'down',
        severity: latestFXAden.usd > 1500 ? 'critical' : latestFXAden.usd > 1000 ? 'warning' : latestFXAden.usd > 500 ? 'normal' : 'positive',
        lastUpdated: new Date().toISOString(),
      },
      {
        id: 'FX_SANA',
        title_ar: 'سعر الصرف – صنعاء',
        title_en: 'Exchange Rate - Sana\'a',
        unit_ar: 'ريال/دولار',
        unit_en: 'YER/USD',
        explain_ar: 'السعر في النظام النقدي الشمالي',
        explain_en: 'Rate in the northern monetary system',
        value: latestFXSanaa.usd,
        trend: 'stable',
        severity: 'normal',
        lastUpdated: new Date().toISOString(),
      },
      {
        id: 'FX_GAP',
        title_ar: 'فجوة الصرف',
        title_en: 'Exchange Rate Gap',
        unit_ar: '%',
        unit_en: '%',
        explain_ar: 'التباعد بين النظامين',
        explain_en: 'Divergence between the two systems',
        value: Math.round(fxGap),
        trend: fxGap > 150 ? 'up' : fxGap > 100 ? 'stable' : 'down',
        severity: fxGap > 150 ? 'critical' : fxGap > 100 ? 'warning' : fxGap > 50 ? 'normal' : 'positive',
        lastUpdated: new Date().toISOString(),
      },
      {
        id: 'POVERTY',
        title_ar: 'معدل الفقر',
        title_en: 'Poverty Rate',
        unit_ar: '%',
        unit_en: '%',
        explain_ar: 'نسبة السكان تحت خط الفقر',
        explain_en: 'Population below poverty line',
        value: Math.round(latestPoverty.poverty_headcount * 10) / 10,
        trend: latestPoverty.poverty_headcount > 70 ? 'up' : latestPoverty.poverty_headcount > 60 ? 'stable' : 'down',
        severity: latestPoverty.poverty_headcount > 75 ? 'critical' : latestPoverty.poverty_headcount > 65 ? 'warning' : latestPoverty.poverty_headcount > 50 ? 'normal' : 'positive',
        lastUpdated: new Date().toISOString(),
      },
    ];
  }, [latestGDP, gdp2014, latestCPIAden, latestCPISanaa, latestFXAden, latestFXSanaa, latestPoverty]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'from-red-500 to-red-600';
      case 'warning': return 'from-orange-500 to-orange-600';
      case 'normal': return 'from-blue-500 to-blue-600';
      case 'positive': return 'from-green-500 to-green-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getSeverityBadgeColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'warning': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'normal': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'positive': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-5 w-5" />;
      case 'down': return <TrendingDown className="h-5 w-5" />;
      default: return <Minus className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className={`h-4 w-4 ${isArabic ? 'ml-2 rotate-180' : 'mr-2'}`} />
                  {isArabic ? 'الرئيسية' : 'Home'}
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {isArabic ? 'البوصلة الاقتصادية' : 'Economic Compass'}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {isArabic ? '12 مؤشر رئيسي للاقتصاد اليمني' : '12 Key Indicators of Yemen\'s Economy'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                {isArabic ? 'تصدير' : 'Export'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0">
            <CardContent className="p-6">
              <div className="text-sm opacity-90 mb-2">{isArabic ? 'حرجة' : 'Critical'}</div>
              <div className="text-3xl font-bold">
                {compassCards.filter(c => c.severity === 'critical').length}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
            <CardContent className="p-6">
              <div className="text-sm opacity-90 mb-2">{isArabic ? 'تحذير' : 'Warning'}</div>
              <div className="text-3xl font-bold">
                {compassCards.filter(c => c.severity === 'warning').length}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
            <CardContent className="p-6">
              <div className="text-sm opacity-90 mb-2">{isArabic ? 'عادي' : 'Normal'}</div>
              <div className="text-3xl font-bold">
                {compassCards.filter(c => c.severity === 'normal').length}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
            <CardContent className="p-6">
              <div className="text-sm opacity-90 mb-2">{isArabic ? 'إيجابي' : 'Positive'}</div>
              <div className="text-3xl font-bold">
                {compassCards.filter(c => c.severity === 'positive').length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {compassCards.map((card) => (
            <Card 
              key={card.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${getSeverityColor(card.severity)}`} />
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">
                      {isArabic ? card.title_ar : card.title_en}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      {isArabic ? card.unit_ar : card.unit_en}
                    </CardDescription>
                  </div>
                  <Badge className={`${getSeverityBadgeColor(card.severity)} border-0`}>
                    {getTrendIcon(card.trend)}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                {/* Value Display */}
                <div className="mb-4">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${getSeverityColor(card.severity)} bg-clip-text text-transparent`}>
                    {card.value.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {isArabic ? card.unit_ar : card.unit_en}
                  </div>
                </div>

                {/* Explanation */}
                <div className="flex items-start gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <Info className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {isArabic ? card.explain_ar : card.explain_en}
                  </p>
                </div>

                {/* Last Updated */}
                <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {isArabic ? 'آخر تحديث: ' : 'Last updated: '}
                  {new Date(card.lastUpdated).toLocaleDateString(isArabic ? 'ar' : 'en')}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Data Source Note */}
        <Card className="mt-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">
                  {isArabic ? 'مصادر البيانات' : 'Data Sources'}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {isArabic
                    ? 'البيانات مستمدة من مصادر موثوقة بما في ذلك البنك الدولي، صندوق النقد الدولي، البنك المركزي اليمني، ومكتب الأمم المتحدة لتنسيق الشؤون الإنسانية. يتم تحديث المؤشرات بشكل دوري.'
                    : 'Data is sourced from trusted institutions including the World Bank, IMF, Central Bank of Yemen, and UN OCHA. Indicators are updated periodically.'
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
