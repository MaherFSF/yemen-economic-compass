import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, BarChart3, TrendingUp, DollarSign } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import GDPTrendChart from '@/components/charts/GDPTrendChart';
import ExchangeRateChart from '@/components/charts/ExchangeRateChart';
import InflationChart from '@/components/charts/InflationChart';

export default function AnalyticsDashboardNew() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

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
                  {isArabic ? 'لوحة التحليلات الاقتصادية' : 'Economic Analytics Dashboard'}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {isArabic 
                    ? 'تحليل شامل للمؤشرات الاقتصادية الرئيسية (2010-2025)'
                    : 'Comprehensive analysis of key economic indicators (2010-2025)'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white text-lg">
                    {isArabic ? 'الناتج المحلي الإجمالي' : 'GDP Analysis'}
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    {isArabic ? 'تحليل النمو الاقتصادي' : 'Economic growth trends'}
                  </CardDescription>
                </div>
                <BarChart3 className="h-10 w-10 opacity-80" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">58%</div>
              <p className="text-sm text-blue-100 mt-1">
                {isArabic ? 'من مستوى 2014' : 'of 2014 level'}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0 hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white text-lg">
                    {isArabic ? 'سعر الصرف' : 'Exchange Rate'}
                  </CardTitle>
                  <CardDescription className="text-red-100">
                    {isArabic ? 'التباعد النقدي' : 'Monetary divergence'}
                  </CardDescription>
                </div>
                <DollarSign className="h-10 w-10 opacity-80" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">195%</div>
              <p className="text-sm text-red-100 mt-1">
                {isArabic ? 'فجوة بين عدن وصنعاء' : 'gap between Aden & Sana\'a'}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white text-lg">
                    {isArabic ? 'التضخم' : 'Inflation'}
                  </CardTitle>
                  <CardDescription className="text-orange-100">
                    {isArabic ? 'ضغوط الأسعار' : 'Price pressures'}
                  </CardDescription>
                </div>
                <TrendingUp className="h-10 w-10 opacity-80" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">11.2%</div>
              <p className="text-sm text-orange-100 mt-1">
                {isArabic ? 'معدل التضخم في عدن' : 'Aden inflation rate'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section with Tabs */}
        <Tabs defaultValue="gdp" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="gdp" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              {isArabic ? 'الناتج المحلي' : 'GDP'}
            </TabsTrigger>
            <TabsTrigger value="fx" className="gap-2">
              <DollarSign className="h-4 w-4" />
              {isArabic ? 'سعر الصرف' : 'Exchange Rate'}
            </TabsTrigger>
            <TabsTrigger value="inflation" className="gap-2">
              <TrendingUp className="h-4 w-4" />
              {isArabic ? 'التضخم' : 'Inflation'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gdp" className="space-y-6">
            <GDPTrendChart />
            
            {/* GDP Insights Card */}
            <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-lg">
                  {isArabic ? 'رؤى رئيسية' : 'Key Insights'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600 mt-2" />
                  <p className="text-sm text-muted-foreground">
                    {isArabic
                      ? 'انخفض الناتج المحلي الإجمالي الحقيقي بنسبة 42% من مستوى 2014، مما يعكس التأثير المدمر للحرب على الاقتصاد اليمني'
                      : 'Real GDP has declined 42% from 2014 levels, reflecting the devastating impact of war on Yemen\'s economy'
                    }
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600 mt-2" />
                  <p className="text-sm text-muted-foreground">
                    {isArabic
                      ? 'شهد الاقتصاد انكماشًا حادًا بين 2015-2016 مع بداية الحرب، تلاه تعافٍ تدريجي محدود'
                      : 'The economy experienced sharp contraction in 2015-2016 at war onset, followed by limited gradual recovery'
                    }
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600 mt-2" />
                  <p className="text-sm text-muted-foreground">
                    {isArabic
                      ? 'الناتج المحلي الإجمالي الاسمي انخفض من 37 مليار دولار (2014) إلى حوالي 24 مليار دولار (2025)'
                      : 'Nominal GDP fell from $37B (2014) to approximately $24B (2025)'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fx" className="space-y-6">
            <ExchangeRateChart />
            
            {/* FX Insights Card */}
            <Card className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="text-lg">
                  {isArabic ? 'رؤى رئيسية' : 'Key Insights'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2" />
                  <p className="text-sm text-muted-foreground">
                    {isArabic
                      ? 'تباعد سعر الصرف بشكل كبير منذ انقسام البنك المركزي في 2016، مع فجوة تتجاوز 195%'
                      : 'Exchange rates diverged dramatically since the 2016 CBY split, with a gap exceeding 195%'
                    }
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2" />
                  <p className="text-sm text-muted-foreground">
                    {isArabic
                      ? 'سعر الصرف في عدن وصل إلى 1,650 ريال/دولار بينما بقي في صنعاء مستقرًا عند 560 ريال/دولار'
                      : 'Aden\'s rate reached 1,650 YER/USD while Sana\'a remained stable at 560 YER/USD'
                    }
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2" />
                  <p className="text-sm text-muted-foreground">
                    {isArabic
                      ? 'الوديعة السعودية في 2019 ساعدت مؤقتًا في استقرار سعر الصرف في عدن قبل تدهور جديد'
                      : 'The 2019 Saudi deposit temporarily stabilized Aden\'s rate before renewed deterioration'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inflation" className="space-y-6">
            <InflationChart />
            
            {/* Inflation Insights Card */}
            <Card className="bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="text-lg">
                  {isArabic ? 'رؤى رئيسية' : 'Key Insights'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-orange-600 mt-2" />
                  <p className="text-sm text-muted-foreground">
                    {isArabic
                      ? 'التضخم في عدن (11.2%) أعلى بكثير من صنعاء (5.9%)، مما يعكس ضغوط سعر الصرف'
                      : 'Aden\'s inflation (11.2%) significantly exceeds Sana\'a (5.9%), reflecting exchange rate pressures'
                    }
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-orange-600 mt-2" />
                  <p className="text-sm text-muted-foreground">
                    {isArabic
                      ? 'تضخم أسعار الغذاء أعلى من التضخم العام في كلا المنطقتين، مما يزيد الضغط على الأسر'
                      : 'Food inflation exceeds headline inflation in both regions, increasing pressure on households'
                    }
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-orange-600 mt-2" />
                  <p className="text-sm text-muted-foreground">
                    {isArabic
                      ? 'أزمة العملة في 2018 وجائحة كوفيد-19 في 2020 تسببت في قفزات تضخمية حادة'
                      : 'The 2018 currency crisis and 2020 COVID-19 pandemic caused sharp inflationary spikes'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Methodology Note */}
        <Card className="mt-8 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-lg">
              {isArabic ? 'المنهجية ومصادر البيانات' : 'Methodology & Data Sources'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">
                {isArabic ? 'المصادر الرئيسية' : 'Primary Sources'}
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>{isArabic ? 'البنك الدولي - بيانات الناتج المحلي الإجمالي' : 'World Bank - GDP data'}</li>
                <li>{isArabic ? 'صندوق النقد الدولي - التوقعات الاقتصادية' : 'IMF - Economic projections'}</li>
                <li>{isArabic ? 'البنك المركزي اليمني (عدن وصنعاء) - بيانات سعر الصرف والتضخم' : 'Central Bank of Yemen (Aden & Sana\'a) - Exchange rate and inflation data'}</li>
                <li>{isArabic ? 'برنامج الغذاء العالمي - أسعار الغذاء' : 'WFP - Food prices'}</li>
                <li>{isArabic ? 'مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية - البيانات الإنسانية' : 'UN OCHA - Humanitarian data'}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                {isArabic ? 'الميزات التفاعلية' : 'Interactive Features'}
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>{isArabic ? 'استخدم عجلة الماوس للتكبير/التصغير' : 'Use mouse wheel to zoom in/out'}</li>
                <li>{isArabic ? 'اسحب الرسم البياني للتنقل' : 'Click and drag to pan the chart'}</li>
                <li>{isArabic ? 'انقر على زر إعادة التعيين لاستعادة العرض الأصلي' : 'Click reset button to restore original view'}</li>
                <li>{isArabic ? 'صدّر البيانات بصيغة CSV أو PNG' : 'Export data as CSV or PNG'}</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
