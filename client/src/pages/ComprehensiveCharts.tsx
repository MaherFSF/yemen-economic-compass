import { useMemo } from "react";
import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown, TrendingUp, BarChart3, Loader2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Area,
  AreaChart,
} from "recharts";

export default function ComprehensiveCharts() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const { data: indicators, isLoading: indicatorsLoading } = trpc.indicators.list.useQuery();
  const { data: events, isLoading: eventsLoading } = trpc.events.list.useQuery();

  // Process exchange rate data
  const exchangeRateData = useMemo(() => {
    if (!indicators) return [];
    
    const adenRates = indicators.filter(i => i.nameEn === "Exchange Rate - Aden");
    const sanaaRates = indicators.filter(i => i.nameEn === "Exchange Rate - Sanaa");
    
    const years = Array.from(new Set([...adenRates, ...sanaaRates].map(i => i.date.substring(0, 4)))).sort();
    
    return years.map(year => {
      const adenYear = adenRates.find(r => r.date.startsWith(year));
      const sanaaYear = sanaaRates.find(r => r.date.startsWith(year));
      
      return {
        year,
        aden: adenYear ? parseFloat(adenYear.value) : null,
        sanaa: sanaaYear ? parseFloat(sanaaYear.value) : null,
        gap: adenYear && sanaaYear ? parseFloat(adenYear.value) - parseFloat(sanaaYear.value) : null,
      };
    }).filter(d => d.aden !== null || d.sanaa !== null);
  }, [indicators]);

  // Process GDP data
  const gdpData = useMemo(() => {
    if (!indicators) return [];
    
    const gdpIndicators = indicators.filter(i => i.nameEn === "GDP Nominal");
    
    return gdpIndicators
      .map(i => ({
        year: i.date.substring(0, 4),
        value: parseFloat(i.value),
        source: i.source,
      }))
      .sort((a, b) => a.year.localeCompare(b.year));
  }, [indicators]);

  // Process inflation data
  const inflationData = useMemo(() => {
    if (!indicators) return [];
    
    const inflationIndicators = indicators.filter(i => i.nameEn === "Inflation Rate");
    
    return inflationIndicators
      .map(i => ({
        year: i.date.substring(0, 4),
        value: parseFloat(i.value),
      }))
      .sort((a, b) => a.year.localeCompare(b.year));
  }, [indicators]);

  // Process poverty data
  const povertyData = useMemo(() => {
    if (!indicators) return [];
    
    const povertyIndicators = indicators.filter(i => i.nameEn === "Poverty Rate");
    
    return povertyIndicators
      .map(i => ({
        year: i.date.substring(0, 4),
        value: parseFloat(i.value),
      }))
      .sort((a, b) => a.year.localeCompare(b.year));
  }, [indicators]);

  // Process food insecurity data
  const foodInsecurityData = useMemo(() => {
    if (!indicators) return [];
    
    const foodIndicators = indicators.filter(i => i.nameEn === "Food Insecure Population");
    
    return foodIndicators
      .map(i => ({
        year: i.date.substring(0, 4),
        value: parseFloat(i.value),
      }))
      .sort((a, b) => a.year.localeCompare(b.year));
  }, [indicators]);

  // Get critical events for markers
  const criticalEvents = useMemo(() => {
    if (!events) return [];
    return events
      .filter(e => e.severity === "critical")
      .map(e => ({
        year: new Date(e.date).getFullYear().toString(),
        title: isArabic ? e.titleAr : e.titleEn,
        date: e.date,
      }));
  }, [events, isArabic]);

  if (indicatorsLoading || eventsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir={isArabic ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <BarChart3 className="w-3 h-3 mr-1" />
            {isArabic ? "البيانات من قاعدة البيانات" : "Database-Driven Analytics"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? "التصورات الاقتصادية الشاملة" : "Comprehensive Economic Visualizations"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {isArabic
              ? "تصورات تفاعلية مدفوعة بقاعدة البيانات تعرض 215 نقطة بيانات عبر 16 عاماً (2010-2025)"
              : "Interactive database-driven visualizations showing 215 data points across 16 years (2010-2025)"}
          </p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                {isArabic ? "نقاط البيانات" : "Data Points"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{indicators?.length || 0}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                {isArabic ? "الأحداث الحرجة" : "Critical Events"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{criticalEvents.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                {isArabic ? "فجوة الصرف" : "FX Gap"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">
                {exchangeRateData[exchangeRateData.length - 1]?.gap?.toFixed(0) || 0}
              </div>
              <div className="text-xs text-muted-foreground">YER/USD</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                {isArabic ? "انخفاض الناتج المحلي" : "GDP Decline"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">-51%</div>
              <div className="text-xs text-muted-foreground">2014-2025</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <Tabs defaultValue="exchange-rate" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="exchange-rate">
              {isArabic ? "أسعار الصرف" : "Exchange Rates"}
            </TabsTrigger>
            <TabsTrigger value="gdp">
              {isArabic ? "الناتج المحلي" : "GDP"}
            </TabsTrigger>
            <TabsTrigger value="inflation">
              {isArabic ? "التضخم" : "Inflation"}
            </TabsTrigger>
            <TabsTrigger value="humanitarian">
              {isArabic ? "إنساني" : "Humanitarian"}
            </TabsTrigger>
          </TabsList>

          {/* Exchange Rate Chart */}
          <TabsContent value="exchange-rate">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {isArabic ? "تطور أسعار الصرف (2010-2025)" : "Exchange Rate Evolution (2010-2025)"}
                </CardTitle>
                <CardDescription>
                  {isArabic
                    ? "مقارنة سعر الريال اليمني مقابل الدولار في عدن وصنعاء - 36 نقطة بيانات"
                    : "Yemeni Rial vs USD comparison in Aden and Sana'a - 36 data points"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={exchangeRateData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis label={{ value: 'YER/USD', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <ReferenceLine x="2015" stroke="#dc2626" strokeDasharray="5 5" label={{ value: "Coalition (2015)", position: "top" }} />
                      <ReferenceLine x="2016" stroke="#7c3aed" strokeDasharray="3 3" label={{ value: "CBY Split (2016)", position: "top" }} />
                      <ReferenceLine x="2019" stroke="#ea580c" strokeDasharray="5 5" label={{ value: "Currency Ban (2019)", position: "top" }} />
                      <ReferenceLine x="2020" stroke="#0891b2" strokeDasharray="5 5" label={{ value: "COVID-19 (2020)", position: "top" }} />
                      <ReferenceLine x="2022" stroke="#16a34a" strokeDasharray="5 5" label={{ value: "UN Truce (2022)", position: "top" }} />
                      <Line 
                        type="monotone" 
                        dataKey="aden" 
                        stroke="#ef4444" 
                        strokeWidth={2}
                        name={isArabic ? "عدن" : "Aden"}
                        dot={{ r: 4 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="sanaa" 
                        stroke="#3b82f6" 
                        strokeWidth={2}
                        name={isArabic ? "صنعاء" : "Sana'a"}
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Key Insights */}
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <div className="text-sm font-semibold text-red-700">
                          {isArabic ? "عدن (2025)" : "Aden (2025)"}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-red-600">
                        {exchangeRateData[exchangeRateData.length - 1]?.aden?.toFixed(0)} YER/USD
                      </div>
                      <div className="text-xs text-red-600 mt-1">
                        {isArabic ? "+691% من 2010" : "+691% from 2010"}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <div className="text-sm font-semibold text-blue-700">
                          {isArabic ? "صنعاء (2025)" : "Sana'a (2025)"}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        {exchangeRateData[exchangeRateData.length - 1]?.sanaa?.toFixed(0)} YER/USD
                      </div>
                      <div className="text-xs text-blue-600 mt-1">
                        {isArabic ? "+148% من 2010" : "+148% from 2010"}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-purple-50 border-purple-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingDown className="w-5 h-5 text-purple-600" />
                        <div className="text-sm font-semibold text-purple-700">
                          {isArabic ? "الفجوة" : "Gap"}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">
                        {exchangeRateData[exchangeRateData.length - 1]?.gap?.toFixed(0)} YER
                      </div>
                      <div className="text-xs text-purple-600 mt-1">
                        {isArabic ? "فرق 221%" : "221% difference"}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* GDP Chart */}
          <TabsContent value="gdp">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {isArabic ? "انهيار الناتج المحلي الإجمالي (2010-2025)" : "GDP Collapse (2010-2025)"}
                </CardTitle>
                <CardDescription>
                  {isArabic
                    ? "الناتج المحلي الإجمالي الاسمي بمليارات الدولارات - 16 نقطة بيانات"
                    : "Nominal GDP in billion USD - 16 data points"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={gdpData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis label={{ value: 'Billion USD', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#8b5cf6" 
                        fill="#8b5cf6" 
                        fillOpacity={0.3}
                        name={isArabic ? "الناتج المحلي" : "GDP"}
                      />
                      <ReferenceLine x="2014" stroke="#666" strokeDasharray="3 3" label={{ value: "Pre-conflict Peak", position: "top" }} />
                      <ReferenceLine x="2015" stroke="#dc2626" strokeDasharray="5 5" label={{ value: "Coalition (2015)", position: "top" }} />
                      <ReferenceLine x="2016" stroke="#7c3aed" strokeDasharray="3 3" label={{ value: "CBY Split (2016)", position: "top" }} />
                      <ReferenceLine x="2020" stroke="#0891b2" strokeDasharray="5 5" label={{ value: "COVID-19 (2020)", position: "top" }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-orange-900 mb-1">
                        {isArabic ? "انخفاض اقتصادي حاد" : "Severe Economic Contraction"}
                      </div>
                      <div className="text-sm text-orange-700">
                        {isArabic
                          ? "انخفض الناتج المحلي الإجمالي من 43.2 مليار دولار (2014) إلى 22.1 مليار دولار (2025) - انخفاض بنسبة 51٪"
                          : "GDP declined from $43.2B (2014) to $22.1B (2025) - a 51% contraction"}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inflation Chart */}
          <TabsContent value="inflation">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {isArabic ? "تطور التضخم (2010-2025)" : "Inflation Evolution (2010-2025)"}
                </CardTitle>
                <CardDescription>
                  {isArabic
                    ? "معدل التضخم السنوي (٪) - 16 نقطة بيانات"
                    : "Annual inflation rate (%) - 16 data points"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={inflationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis label={{ value: 'Percent (%)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        dataKey="value" 
                        fill="#f59e0b" 
                        name={isArabic ? "التضخم" : "Inflation"}
                      />
                      <ReferenceLine y={20} stroke="#ef4444" strokeDasharray="3 3" label="Crisis Threshold" />
                      <ReferenceLine x="2015" stroke="#dc2626" strokeDasharray="5 5" label={{ value: "War (2015)", position: "top" }} />
                      <ReferenceLine x="2016" stroke="#7c3aed" strokeDasharray="3 3" label={{ value: "CBY Split", position: "top" }} />
                      <ReferenceLine x="2020" stroke="#0891b2" strokeDasharray="5 5" label={{ value: "COVID-19", position: "top" }} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-yellow-900 mb-1">
                        {isArabic ? "ذروة التضخم" : "Inflation Peak"}
                      </div>
                      <div className="text-sm text-yellow-700">
                        {isArabic
                          ? "وصل التضخم إلى 35٪ في عام 2023 بسبب أزمة البنوك وانهيار العملة"
                          : "Inflation peaked at 35% in 2023 due to banking crisis and currency collapse"}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Humanitarian Chart */}
          <TabsContent value="humanitarian">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {isArabic ? "الأزمة الإنسانية (2010-2025)" : "Humanitarian Crisis (2010-2025)"}
                </CardTitle>
                <CardDescription>
                  {isArabic
                    ? "معدل الفقر وانعدام الأمن الغذائي - 31 نقطة بيانات"
                    : "Poverty rate and food insecurity - 31 data points"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={povertyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis label={{ value: 'Percent (%)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#dc2626" 
                        strokeWidth={3}
                        name={isArabic ? "معدل الفقر" : "Poverty Rate"}
                        dot={{ r: 5 }}
                      />
                      <ReferenceLine y={48.6} stroke="#666" strokeDasharray="3 3" label="Pre-conflict (2014)" />
                      <ReferenceLine x="2015" stroke="#dc2626" strokeDasharray="5 5" label={{ value: "Coalition (2015)", position: "top" }} />
                      <ReferenceLine x="2016" stroke="#7c3aed" strokeDasharray="3 3" label={{ value: "CBY Split (2016)", position: "top" }} />
                      <ReferenceLine x="2020" stroke="#0891b2" strokeDasharray="5 5" label={{ value: "COVID-19 (2020)", position: "top" }} />
                      <ReferenceLine x="2022" stroke="#16a34a" strokeDasharray="5 5" label={{ value: "UN Truce (2022)", position: "top" }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <div className="text-sm font-semibold text-red-700">
                          {isArabic ? "معدل الفقر (2025)" : "Poverty Rate (2025)"}
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-red-600">80%</div>
                      <div className="text-xs text-red-600 mt-1">
                        {isArabic ? "+31.4 نقطة من 2014" : "+31.4 pts from 2014"}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-orange-50 border-orange-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingDown className="w-5 h-5 text-orange-600" />
                        <div className="text-sm font-semibold text-orange-700">
                          {isArabic ? "انعدام الأمن الغذائي" : "Food Insecure"}
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-orange-600">17M</div>
                      <div className="text-xs text-orange-600 mt-1">
                        {isArabic ? "+4.1 مليون من 2015" : "+4.1M from 2015"}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
