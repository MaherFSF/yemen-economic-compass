import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, BarChart3, LineChart, Download, Info } from "lucide-react";

// Exchange Rate Data (2014-2025)
const exchangeRateData = [
  { year: 2014, aden: 215, sanaa: 215, event: "Pre-conflict unified rate" },
  { year: 2015, aden: 250, sanaa: 250, event: "Conflict begins, currency under pressure" },
  { year: 2016, aden: 370, sanaa: 340, event: "CBY split, black market emerges" },
  { year: 2017, aden: 900, sanaa: 420, event: "Aden rate collapses" },
  { year: 2018, aden: 550, sanaa: 480, event: "Saudi deposit stabilizes Aden rate" },
  { year: 2019, aden: 600, sanaa: 580, event: "Gradual deterioration" },
  { year: 2020, aden: 730, sanaa: 620, event: "COVID-19 impact" },
  { year: 2021, aden: 1020, sanaa: 590, event: "IMF SDR allocation" },
  { year: 2022, aden: 1180, sanaa: 600, event: "Fuel crisis, Aden rate drops" },
  { year: 2023, aden: 1420, sanaa: 610, event: "Banking crisis deepens" },
  { year: 2024, aden: 1650, sanaa: 620, event: "New banknotes introduced" },
  { year: 2025, aden: 1700, sanaa: 630, event: "Current rates (Nov 2025)" },
];

// Inflation Data (2015-2025)
const inflationData = [
  { year: 2015, aden: 12, sanaa: 12, food: 15 },
  { year: 2016, aden: 18, sanaa: 16, food: 22 },
  { year: 2017, aden: 24, sanaa: 19, food: 30 },
  { year: 2018, aden: 28, sanaa: 22, food: 35 },
  { year: 2019, aden: 21, sanaa: 18, food: 28 },
  { year: 2020, aden: 26, sanaa: 20, food: 32 },
  { year: 2021, aden: 29, sanaa: 22, food: 36 },
  { year: 2022, aden: 32, sanaa: 24, food: 40 },
  { year: 2023, aden: 35, sanaa: 26, food: 45 },
  { year: 2024, aden: 31, sanaa: 25, food: 38 },
  { year: 2025, aden: 28, sanaa: 23, food: 34 },
];

// GDP Data (2014-2025, in billion USD)
const gdpData = [
  { year: 2014, nominal: 43.2, real: 43.2, sector: { oil: 12.5, services: 18.2, agriculture: 8.1, other: 4.4 } },
  { year: 2015, nominal: 37.7, real: 35.8, sector: { oil: 8.2, services: 15.3, agriculture: 7.8, other: 6.4 } },
  { year: 2016, nominal: 27.3, real: 25.1, sector: { oil: 4.1, services: 11.2, agriculture: 6.5, other: 5.5 } },
  { year: 2017, nominal: 22.6, real: 20.8, sector: { oil: 2.8, services: 9.4, agriculture: 5.9, other: 4.5 } },
  { year: 2018, nominal: 26.9, real: 22.3, sector: { oil: 3.5, services: 10.8, agriculture: 5.2, other: 7.4 } },
  { year: 2019, nominal: 26.2, real: 21.6, sector: { oil: 3.2, services: 10.2, agriculture: 5.4, other: 7.4 } },
  { year: 2020, nominal: 21.1, real: 18.9, sector: { oil: 2.1, services: 8.5, agriculture: 5.1, other: 5.4 } },
  { year: 2021, nominal: 21.6, real: 19.2, sector: { oil: 2.3, services: 8.9, agriculture: 5.2, other: 5.2 } },
  { year: 2022, nominal: 20.9, real: 18.5, sector: { oil: 1.8, services: 8.3, agriculture: 5.0, other: 5.8 } },
  { year: 2023, nominal: 20.2, real: 17.8, sector: { oil: 1.5, services: 8.0, agriculture: 4.9, other: 5.8 } },
  { year: 2024, nominal: 21.3, real: 18.4, sector: { oil: 1.9, services: 8.6, agriculture: 5.1, other: 5.7 } },
  { year: 2025, nominal: 22.1, real: 19.1, sector: { oil: 2.2, services: 9.1, agriculture: 5.3, other: 5.5 } },
];

// Oil Production Data (2014-2025, thousand barrels/day)
const oilProductionData = [
  { year: 2014, production: 145, revenue: 5.2, status: "Normal operations" },
  { year: 2015, production: 85, revenue: 2.8, status: "Conflict begins, production drops" },
  { year: 2016, production: 45, revenue: 1.2, status: "Pipeline attacks" },
  { year: 2017, production: 32, revenue: 0.9, status: "Minimal production" },
  { year: 2018, production: 48, revenue: 1.5, status: "Partial recovery" },
  { year: 2019, production: 52, revenue: 1.7, status: "Steady low production" },
  { year: 2020, production: 28, revenue: 0.7, status: "Houthi attacks on facilities" },
  { year: 2021, production: 15, revenue: 0.4, status: "Near-total blockade" },
  { year: 2022, production: 8, revenue: 0.2, status: "Export blockade" },
  { year: 2023, production: 5, revenue: 0.1, status: "Minimal extraction" },
  { year: 2024, production: 12, revenue: 0.3, status: "Limited resumption" },
  { year: 2025, production: 18, revenue: 0.5, status: "Gradual recovery attempts" },
];

export default function DataVisualization() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const [selectedChart, setSelectedChart] = useState("exchange-rate");

  const downloadData = (dataType: string) => {
    let data: any[] = [];
    let filename = "";
    
    switch(dataType) {
      case "exchange-rate":
        data = exchangeRateData;
        filename = "yemen-exchange-rates-2014-2025.csv";
        break;
      case "inflation":
        data = inflationData;
        filename = "yemen-inflation-2015-2025.csv";
        break;
      case "gdp":
        data = gdpData;
        filename = "yemen-gdp-2014-2025.csv";
        break;
      case "oil":
        data = oilProductionData;
        filename = "yemen-oil-production-2014-2025.csv";
        break;
    }

    // Convert to CSV
    const headers = Object.keys(data[0]);
    const csv = [
      headers.join(","),
      ...data.map(row => headers.map(h => {
        const value = (row as any)[h];
        return typeof value === 'object' ? JSON.stringify(value) : value;
      }).join(","))
    ].join("\\n");

    // Download
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir={isArabic ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <BarChart3 className="w-3 h-3 mr-1" />
            {isArabic ? "التصورات البيانية التفاعلية" : "Interactive Data Visualizations"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? "لوحة البيانات الاقتصادية التفاعلية" : "Interactive Economic Data Dashboard"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {isArabic
              ? "استكشف الاتجاهات الاقتصادية الرئيسية في اليمن من خلال الرسوم البيانية التفاعلية والبيانات القابلة للتصدير (2014-2025)"
              : "Explore key economic trends in Yemen through interactive charts and exportable data (2014-2025)"}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <Tabs value={selectedChart} onValueChange={setSelectedChart} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4">
            <TabsTrigger value="exchange-rate" className="text-sm">
              {isArabic ? "أسعار الصرف" : "Exchange Rates"}
            </TabsTrigger>
            <TabsTrigger value="inflation" className="text-sm">
              {isArabic ? "التضخم" : "Inflation"}
            </TabsTrigger>
            <TabsTrigger value="gdp" className="text-sm">
              {isArabic ? "الناتج المحلي" : "GDP"}
            </TabsTrigger>
            <TabsTrigger value="oil" className="text-sm">
              {isArabic ? "إنتاج النفط" : "Oil Production"}
            </TabsTrigger>
          </TabsList>

          {/* Exchange Rate Chart */}
          <TabsContent value="exchange-rate" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">
                      {isArabic ? "تطور أسعار الصرف (2014-2025)" : "Exchange Rate Evolution (2014-2025)"}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {isArabic
                        ? "مقارنة سعر الريال اليمني مقابل الدولار في عدن وصنعاء"
                        : "Comparison of Yemeni Rial exchange rate vs USD in Aden and Sana'a"}
                    </CardDescription>
                  </div>
                  <Button onClick={() => downloadData("exchange-rate")} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    {isArabic ? "تصدير CSV" : "Export CSV"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Chart Visualization */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                      <CardContent className="pt-6">
                        <div className="text-sm text-blue-700 mb-1">{isArabic ? "عدن (2025)" : "Aden (2025)"}</div>
                        <div className="text-3xl font-bold text-blue-900">1,700</div>
                        <div className="text-xs text-blue-600 mt-1">YER/USD</div>
                        <div className="flex items-center mt-2 text-red-600">
                          <TrendingDown className="w-4 h-4 mr-1" />
                          <span className="text-sm">+691% {isArabic ? "منذ 2014" : "since 2014"}</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                      <CardContent className="pt-6">
                        <div className="text-sm text-green-700 mb-1">{isArabic ? "صنعاء (2025)" : "Sana'a (2025)"}</div>
                        <div className="text-3xl font-bold text-green-900">630</div>
                        <div className="text-xs text-green-600 mt-1">YER/USD</div>
                        <div className="flex items-center mt-2 text-red-600">
                          <TrendingDown className="w-4 h-4 mr-1" />
                          <span className="text-sm">+193% {isArabic ? "منذ 2014" : "since 2014"}</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                      <CardContent className="pt-6">
                        <div className="text-sm text-purple-700 mb-1">{isArabic ? "فرق السعر" : "Rate Differential"}</div>
                        <div className="text-3xl font-bold text-purple-900">1,070</div>
                        <div className="text-xs text-purple-600 mt-1">YER</div>
                        <div className="flex items-center mt-2 text-purple-600">
                          <Info className="w-4 h-4 mr-1" />
                          <span className="text-sm">170% {isArabic ? "علاوة" : "premium"}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Chart */}
                  <div className="bg-white rounded-lg p-6 border">
                    <div className="space-y-3">
                      {exchangeRateData.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="w-16 text-sm font-medium text-gray-600">{item.year}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                                <div
                                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-end pr-2"
                                  style={{ width: `${(item.aden / 1700) * 100}%` }}
                                >
                                  <span className="text-xs font-medium text-white">{item.aden}</span>
                                </div>
                              </div>
                              <span className="text-xs text-gray-500 w-12">{isArabic ? "عدن" : "Aden"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                                <div
                                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-end pr-2"
                                  style={{ width: `${(item.sanaa / 1700) * 100}%` }}
                                >
                                  <span className="text-xs font-medium text-white">{item.sanaa}</span>
                                </div>
                              </div>
                              <span className="text-xs text-gray-500 w-12">{isArabic ? "صنعاء" : "Sana'a"}</span>
                            </div>
                          </div>
                          <div className="w-64 text-xs text-gray-600">{item.event}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Insights */}
                  <Card className="bg-amber-50 border-amber-200">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Info className="w-5 h-5 text-amber-600" />
                        {isArabic ? "رؤى رئيسية" : "Key Insights"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <p>
                        {isArabic
                          ? "• انقسام البنك المركزي في سبتمبر 2016 أدى إلى ظهور نظامين نقديين منفصلين"
                          : "• The CBY split in September 2016 led to two separate monetary systems"}
                      </p>
                      <p>
                        {isArabic
                          ? "• الوديعة السعودية بقيمة 2 مليار دولار في 2018 ساعدت في استقرار سعر عدن مؤقتاً"
                          : "• The $2 billion Saudi deposit in 2018 temporarily stabilized the Aden rate"}
                      </p>
                      <p>
                        {isArabic
                          ? "• سعر صنعاء أكثر استقراراً بسبب الضوابط الصارمة على الصرف الأجنبي"
                          : "• Sana'a rate is more stable due to strict foreign exchange controls"}
                      </p>
                      <p>
                        {isArabic
                          ? "• فرق السعر الحالي (1,070 ريال) يعكس التجزئة الاقتصادية العميقة"
                          : "• Current rate differential (1,070 YER) reflects deep economic fragmentation"}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inflation Chart */}
          <TabsContent value="inflation" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">
                      {isArabic ? "اتجاهات التضخم (2015-2025)" : "Inflation Trends (2015-2025)"}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {isArabic
                        ? "معدلات التضخم السنوية في عدن وصنعاء مع تضخم أسعار الغذاء"
                        : "Annual inflation rates in Aden and Sana'a with food price inflation"}
                    </CardDescription>
                  </div>
                  <Button onClick={() => downloadData("inflation")} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    {isArabic ? "تصدير CSV" : "Export CSV"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                      <CardContent className="pt-6">
                        <div className="text-sm text-red-700 mb-1">{isArabic ? "عدن (2025)" : "Aden (2025)"}</div>
                        <div className="text-3xl font-bold text-red-900">28%</div>
                        <div className="text-xs text-red-600 mt-1">{isArabic ? "معدل سنوي" : "Annual rate"}</div>
                        <div className="flex items-center mt-2 text-green-600">
                          <TrendingDown className="w-4 h-4 mr-1" />
                          <span className="text-sm">{isArabic ? "تحسن من 35% في 2023" : "Improved from 35% in 2023"}</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                      <CardContent className="pt-6">
                        <div className="text-sm text-orange-700 mb-1">{isArabic ? "صنعاء (2025)" : "Sana'a (2025)"}</div>
                        <div className="text-3xl font-bold text-orange-900">23%</div>
                        <div className="text-xs text-orange-600 mt-1">{isArabic ? "معدل سنوي" : "Annual rate"}</div>
                        <div className="flex items-center mt-2 text-green-600">
                          <TrendingDown className="w-4 h-4 mr-1" />
                          <span className="text-sm">{isArabic ? "تحسن من 26% في 2023" : "Improved from 26% in 2023"}</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                      <CardContent className="pt-6">
                        <div className="text-sm text-yellow-700 mb-1">{isArabic ? "تضخم الغذاء (2025)" : "Food Inflation (2025)"}</div>
                        <div className="text-3xl font-bold text-yellow-900">34%</div>
                        <div className="text-xs text-yellow-600 mt-1">{isArabic ? "معدل سنوي" : "Annual rate"}</div>
                        <div className="flex items-center mt-2 text-red-600">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          <span className="text-sm">{isArabic ? "أعلى من التضخم العام" : "Higher than general inflation"}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Inflation Timeline */}
                  <div className="bg-white rounded-lg p-6 border">
                    <div className="space-y-3">
                      {inflationData.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="w-16 text-sm font-medium text-gray-600">{item.year}</div>
                          <div className="flex-1 grid grid-cols-3 gap-2">
                            <div>
                              <div className="text-xs text-gray-500 mb-1">{isArabic ? "عدن" : "Aden"}</div>
                              <div className="bg-gray-100 rounded-full h-6 relative overflow-hidden">
                                <div
                                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center"
                                  style={{ width: `${(item.aden / 45) * 100}%` }}
                                >
                                  <span className="text-xs font-medium text-white">{item.aden}%</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-500 mb-1">{isArabic ? "صنعاء" : "Sana'a"}</div>
                              <div className="bg-gray-100 rounded-full h-6 relative overflow-hidden">
                                <div
                                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center"
                                  style={{ width: `${(item.sanaa / 45) * 100}%` }}
                                >
                                  <span className="text-xs font-medium text-white">{item.sanaa}%</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-500 mb-1">{isArabic ? "غذاء" : "Food"}</div>
                              <div className="bg-gray-100 rounded-full h-6 relative overflow-hidden">
                                <div
                                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center"
                                  style={{ width: `${(item.food / 45) * 100}%` }}
                                >
                                  <span className="text-xs font-medium text-white">{item.food}%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cumulative Inflation */}
                  <Card className="bg-purple-50 border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {isArabic ? "التضخم التراكمي منذ 2015" : "Cumulative Inflation Since 2015"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm text-gray-600 mb-2">{isArabic ? "عدن" : "Aden"}</div>
                          <div className="text-4xl font-bold text-red-600">~285%</div>
                          <p className="text-xs text-gray-500 mt-1">
                            {isArabic ? "100 ريال في 2015 = 385 ريال اليوم" : "100 YER in 2015 = 385 YER today"}
                          </p>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-2">{isArabic ? "صنعاء" : "Sana'a"}</div>
                          <div className="text-4xl font-bold text-orange-600">~220%</div>
                          <p className="text-xs text-gray-500 mt-1">
                            {isArabic ? "100 ريال في 2015 = 320 ريال اليوم" : "100 YER in 2015 = 320 YER today"}
                          </p>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-2">{isArabic ? "تضخم الغذاء" : "Food Inflation"}</div>
                          <div className="text-4xl font-bold text-yellow-600">~380%</div>
                          <p className="text-xs text-gray-500 mt-1">
                            {isArabic ? "100 ريال في 2015 = 480 ريال اليوم" : "100 YER in 2015 = 480 YER today"}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* GDP Chart - Similar structure */}
          <TabsContent value="gdp" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">
                      {isArabic ? "مسار الناتج المحلي الإجمالي (2014-2025)" : "GDP Trajectory (2014-2025)"}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {isArabic
                        ? "الناتج المحلي الإجمالي الاسمي والحقيقي مع التوزيع القطاعي"
                        : "Nominal and real GDP with sectoral breakdown"}
                    </CardDescription>
                  </div>
                  <Button onClick={() => downloadData("gdp")} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    {isArabic ? "تصدير CSV" : "Export CSV"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
                      <CardContent className="pt-6">
                        <div className="text-sm text-indigo-700 mb-1">{isArabic ? "الناتج المحلي 2014" : "GDP 2014"}</div>
                        <div className="text-3xl font-bold text-indigo-900">$43.2B</div>
                        <div className="text-xs text-indigo-600 mt-1">{isArabic ? "قبل الصراع" : "Pre-conflict"}</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                      <CardContent className="pt-6">
                        <div className="text-sm text-red-700 mb-1">{isArabic ? "الناتج المحلي 2025" : "GDP 2025"}</div>
                        <div className="text-3xl font-bold text-red-900">$22.1B</div>
                        <div className="text-xs text-red-600 mt-1">{isArabic ? "حالي" : "Current"}</div>
                        <div className="flex items-center mt-2 text-red-600">
                          <TrendingDown className="w-4 h-4 mr-1" />
                          <span className="text-sm">-49% {isArabic ? "منذ 2014" : "since 2014"}</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                      <CardContent className="pt-6">
                        <div className="text-sm text-green-700 mb-1">{isArabic ? "الناتج الحقيقي 2025" : "Real GDP 2025"}</div>
                        <div className="text-3xl font-bold text-green-900">$19.1B</div>
                        <div className="text-xs text-green-600 mt-1">{isArabic ? "معدل للتضخم" : "Inflation-adjusted"}</div>
                        <div className="flex items-center mt-2 text-red-600">
                          <TrendingDown className="w-4 h-4 mr-1" />
                          <span className="text-sm">-56% {isArabic ? "منذ 2014" : "since 2014"}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* GDP Timeline */}
                  <div className="bg-white rounded-lg p-6 border">
                    <div className="space-y-3">
                      {gdpData.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="w-16 text-sm font-medium text-gray-600">{item.year}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                                <div
                                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-end pr-2"
                                  style={{ width: `${(item.nominal / 43.2) * 100}%` }}
                                >
                                  <span className="text-xs font-medium text-white">${item.nominal}B</span>
                                </div>
                              </div>
                              <span className="text-xs text-gray-500 w-20">{isArabic ? "اسمي" : "Nominal"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                                <div
                                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-end pr-2"
                                  style={{ width: `${(item.real / 43.2) * 100}%` }}
                                >
                                  <span className="text-xs font-medium text-white">${item.real}B</span>
                                </div>
                              </div>
                              <span className="text-xs text-gray-500 w-20">{isArabic ? "حقيقي" : "Real"}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sectoral Breakdown 2025 */}
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {isArabic ? "التوزيع القطاعي 2025" : "Sectoral Breakdown 2025"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">{isArabic ? "الخدمات" : "Services"}</span>
                            <span className="text-sm font-bold">$9.1B (41%)</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div className="bg-blue-600 h-full" style={{ width: "41%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">{isArabic ? "الزراعة" : "Agriculture"}</span>
                            <span className="text-sm font-bold">$5.3B (24%)</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div className="bg-green-600 h-full" style={{ width: "24%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">{isArabic ? "أخرى" : "Other"}</span>
                            <span className="text-sm font-bold">$5.5B (25%)</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div className="bg-purple-600 h-full" style={{ width: "25%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">{isArabic ? "النفط" : "Oil"}</span>
                            <span className="text-sm font-bold">$2.2B (10%)</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div className="bg-amber-600 h-full" style={{ width: "10%" }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Oil Production Chart */}
          <TabsContent value="oil" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">
                      {isArabic ? "إنتاج النفط والإيرادات (2014-2025)" : "Oil Production & Revenue (2014-2025)"}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {isArabic
                        ? "الإنتاج اليومي (ألف برميل) والإيرادات السنوية (مليار دولار)"
                        : "Daily production (thousand barrels) and annual revenue (billion USD)"}
                    </CardDescription>
                  </div>
                  <Button onClick={() => downloadData("oil")} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    {isArabic ? "تصدير CSV" : "Export CSV"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
                      <CardContent className="pt-6">
                        <div className="text-sm text-amber-700 mb-1">{isArabic ? "الإنتاج 2014" : "Production 2014"}</div>
                        <div className="text-3xl font-bold text-amber-900">145K</div>
                        <div className="text-xs text-amber-600 mt-1">{isArabic ? "برميل/يوم" : "barrels/day"}</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                      <CardContent className="pt-6">
                        <div className="text-sm text-red-700 mb-1">{isArabic ? "الإنتاج 2025" : "Production 2025"}</div>
                        <div className="text-3xl font-bold text-red-900">18K</div>
                        <div className="text-xs text-red-600 mt-1">{isArabic ? "برميل/يوم" : "barrels/day"}</div>
                        <div className="flex items-center mt-2 text-red-600">
                          <TrendingDown className="w-4 h-4 mr-1" />
                          <span className="text-sm">-88% {isArabic ? "منذ 2014" : "since 2014"}</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                      <CardContent className="pt-6">
                        <div className="text-sm text-orange-700 mb-1">{isArabic ? "خسائر الإيرادات" : "Revenue Loss"}</div>
                        <div className="text-3xl font-bold text-orange-900">$4.7B</div>
                        <div className="text-xs text-orange-600 mt-1">{isArabic ? "سنوياً" : "annually"}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {isArabic ? "مقارنة بـ 2014" : "compared to 2014"}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Production Timeline */}
                  <div className="bg-white rounded-lg p-6 border">
                    <div className="space-y-3">
                      {oilProductionData.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="w-16 text-sm font-medium text-gray-600">{item.year}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                                <div
                                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-end pr-2"
                                  style={{ width: `${(item.production / 145) * 100}%` }}
                                >
                                  <span className="text-xs font-medium text-white">{item.production}K</span>
                                </div>
                              </div>
                              <span className="text-xs text-gray-500 w-24">{isArabic ? "ألف برميل/يوم" : "K bbl/day"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-gray-100 rounded-full h-6 relative overflow-hidden">
                                <div
                                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-end pr-2"
                                  style={{ width: `${(item.revenue / 5.2) * 100}%` }}
                                >
                                  <span className="text-xs font-medium text-white">${item.revenue}B</span>
                                </div>
                              </div>
                              <span className="text-xs text-gray-500 w-24">{isArabic ? "إيرادات" : "Revenue"}</span>
                            </div>
                          </div>
                          <div className="w-64 text-xs text-gray-600">{item.status}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cumulative Losses */}
                  <Card className="bg-red-50 border-red-200">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-red-600" />
                        {isArabic ? "الخسائر التراكمية (2015-2025)" : "Cumulative Losses (2015-2025)"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-5xl font-bold text-red-600 mb-2">~$35B</div>
                      <p className="text-sm text-gray-600">
                        {isArabic
                          ? "إجمالي الإيرادات المفقودة من النفط والغاز بسبب الصراع والحصار"
                          : "Total lost oil and gas revenues due to conflict and blockade"}
                      </p>
                      <div className="mt-4 space-y-2 text-sm">
                        <p className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          {isArabic ? "هجمات الحوثيين على المنشآت النفطية" : "Houthi attacks on oil facilities"}
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          {isArabic ? "حصار تصدير النفط منذ 2022" : "Oil export blockade since 2022"}
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          {isArabic ? "تدهور البنية التحتية" : "Infrastructure deterioration"}
                        </p>
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
