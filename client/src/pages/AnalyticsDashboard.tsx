import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, TrendingDown, DollarSign, Users, BarChart3, 
  Download, Calculator, FileSpreadsheet, Filter, ArrowUpDown,
  Percent, Globe, AlertCircle, Target
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AnalyticsDashboard() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedIndicator, setSelectedIndicator] = useState<string>("gdp");

  // Economic Data by Year
  const economicData = {
    2015: { gdp: 37.7, poverty: 54, inflation_aden: 12, inflation_sanaa: 12, exchange_aden: 215, exchange_sanaa: 215, population: 26.2 },
    2016: { gdp: 27.3, poverty: 62, inflation_aden: 18, inflation_sanaa: 10, exchange_aden: 250, exchange_sanaa: 250, population: 26.8 },
    2017: { gdp: 25.4, poverty: 68, inflation_aden: 24, inflation_sanaa: 12, exchange_aden: 380, exchange_sanaa: 420, population: 27.4 },
    2018: { gdp: 26.3, poverty: 71, inflation_aden: 28, inflation_sanaa: 15, exchange_aden: 480, exchange_sanaa: 520, population: 28.0 },
    2019: { gdp: 26.9, poverty: 73, inflation_aden: 30, inflation_sanaa: 18, exchange_aden: 580, exchange_sanaa: 570, population: 28.5 },
    2020: { gdp: 25.4, poverty: 74, inflation_aden: 32, inflation_sanaa: 12, exchange_aden: 720, exchange_sanaa: 600, population: 29.2 },
    2021: { gdp: 24.8, poverty: 75, inflation_aden: 33, inflation_sanaa: 10, exchange_aden: 1050, exchange_sanaa: 620, population: 29.8 },
    2022: { gdp: 25.2, poverty: 75.5, inflation_aden: 34, inflation_sanaa: 9, exchange_aden: 1380, exchange_sanaa: 630, population: 30.4 },
    2023: { gdp: 24.6, poverty: 76, inflation_aden: 35, inflation_sanaa: 8, exchange_aden: 1950, exchange_sanaa: 640, population: 31.0 },
    2024: { gdp: 23.8, poverty: 76, inflation_aden: 35, inflation_sanaa: 8, exchange_aden: 2450, exchange_sanaa: 645, population: 31.6 },
    2025: { gdp: 23.2, poverty: 76, inflation_aden: 35, inflation_sanaa: 8, exchange_aden: 2800, exchange_sanaa: 650, population: 32.2 }
  };

  const years = Object.keys(economicData).map(Number);
  const currentData = economicData[selectedYear as keyof typeof economicData];

  // Calculate poverty in millions
  const povertyMillions = ((currentData.poverty / 100) * currentData.population).toFixed(1);

  // Calculate exchange rate gap
  const exchangeGap = ((currentData.exchange_aden / currentData.exchange_sanaa) * 100 - 100).toFixed(1);

  // Export data functions
  const exportToCSV = () => {
    const headers = ["Year", "GDP (Billion $)", "Poverty Rate (%)", "Inflation Aden (%)", "Inflation Sanaa (%)", "Exchange Aden (YER/$)", "Exchange Sanaa (YER/$)", "Population (Million)"];
    const rows = years.map(year => {
      const data = economicData[year as keyof typeof economicData];
      return [year, data.gdp, data.poverty, data.inflation_aden, data.inflation_sanaa, data.exchange_aden, data.exchange_sanaa, data.population];
    });
    
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\\n");
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `yemen_economic_data_${new Date().getFullYear()}.csv`;
    link.click();
  };

  const exportToJSON = () => {
    const jsonContent = JSON.stringify(economicData, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `yemen_economic_data_${new Date().getFullYear()}.json`;
    link.click();
  };

  // Calculators
  const [inflationCalc, setInflationCalc] = useState({ amount: 1000, years: 5, region: "aden" });
  const [exchangeCalc, setExchangeCalc] = useState({ amount: 100, year: 2024, region: "aden" });

  const calculateInflationImpact = () => {
    const avgInflation = inflationCalc.region === "aden" ? 30 : 12;
    const futureValue = inflationCalc.amount * Math.pow(1 + avgInflation / 100, inflationCalc.years);
    const realValue = inflationCalc.amount / Math.pow(1 + avgInflation / 100, inflationCalc.years);
    return { futureValue: futureValue.toFixed(2), realValue: realValue.toFixed(2), lostPurchasing: ((1 - realValue / inflationCalc.amount) * 100).toFixed(1) };
  };

  const calculateExchangeValue = () => {
    const rate = exchangeCalc.region === "aden" ? currentData.exchange_aden : currentData.exchange_sanaa;
    const yerValue = exchangeCalc.amount * rate;
    return { yerValue: yerValue.toLocaleString(), rate };
  };

  const inflationResult = calculateInflationImpact();
  const exchangeResult = calculateExchangeValue();

  return (
    <div className="w-full py-12">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            {isArabic ? "لوحة التحليلات" : "Analytics Dashboard"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic 
              ? "لوحة التحليلات التفاعلية" 
              : "Interactive Analytics Dashboard"
            }
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isArabic
              ? "أدوات تحليلية متقدمة للباحثين وصناع السياسات والمجتمع الدولي لاستكشاف البيانات الاقتصادية والمالية لليمن"
              : "Advanced analytical tools for researchers, policymakers, and the international community to explore Yemen's economic and financial data"
            }
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="h-8 w-8 text-green-500" />
                <TrendingDown className="h-5 w-5 text-red-500" />
              </div>
              <div className="text-3xl font-bold">${currentData.gdp}B</div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "الناتج المحلي الإجمالي" : "GDP"}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-8 w-8 text-red-500" />
                <TrendingUp className="h-5 w-5 text-red-500" />
              </div>
              <div className="text-3xl font-bold">{currentData.poverty}%</div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "معدل الفقر" : "Poverty Rate"}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {povertyMillions}M {isArabic ? "شخص" : "people"}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Percent className="h-8 w-8 text-orange-500" />
                <AlertCircle className="h-5 w-5 text-orange-500" />
              </div>
              <div className="text-3xl font-bold">{currentData.inflation_aden}%</div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "التضخم (عدن)" : "Inflation (Aden)"}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {currentData.inflation_sanaa}% {isArabic ? "(صنعاء)" : "(Sana'a)"}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Globe className="h-8 w-8 text-blue-500" />
                <TrendingUp className="h-5 w-5 text-red-500" />
              </div>
              <div className="text-2xl font-bold">{currentData.exchange_aden.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "سعر الصرف (عدن)" : "Exchange Rate (Aden)"}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {currentData.exchange_sanaa} {isArabic ? "(صنعاء)" : "(Sana'a)"}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <Tabs defaultValue="explorer" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="explorer">
              {isArabic ? "مستكشف البيانات" : "Data Explorer"}
            </TabsTrigger>
            <TabsTrigger value="calculators">
              {isArabic ? "الحاسبات" : "Calculators"}
            </TabsTrigger>
            <TabsTrigger value="export">
              {isArabic ? "تصدير البيانات" : "Export Data"}
            </TabsTrigger>
          </TabsList>

          {/* Data Explorer Tab */}
          <TabsContent value="explorer" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  {isArabic ? "تصفية البيانات" : "Data Filters"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {isArabic ? "السنة" : "Year"}
                    </label>
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(Number(e.target.value))}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {isArabic ? "المنطقة" : "Region"}
                    </label>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="all">{isArabic ? "جميع المناطق" : "All Regions"}</option>
                      <option value="aden">{isArabic ? "عدن (الحكومة)" : "Aden (IRG)"}</option>
                      <option value="sanaa">{isArabic ? "صنعاء (الحوثيون)" : "Sana'a (Houthis)"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {isArabic ? "المؤشر" : "Indicator"}
                    </label>
                    <select
                      value={selectedIndicator}
                      onChange={(e) => setSelectedIndicator(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="gdp">{isArabic ? "الناتج المحلي" : "GDP"}</option>
                      <option value="poverty">{isArabic ? "الفقر" : "Poverty"}</option>
                      <option value="inflation">{isArabic ? "التضخم" : "Inflation"}</option>
                      <option value="exchange">{isArabic ? "سعر الصرف" : "Exchange Rate"}</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison Table */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowUpDown className="h-5 w-5" />
                  {isArabic ? "جدول المقارنة" : "Comparison Table"}
                </CardTitle>
                <CardDescription>
                  {isArabic 
                    ? "مقارنة المؤشرات الاقتصادية عبر السنوات"
                    : "Compare economic indicators across years"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">{isArabic ? "السنة" : "Year"}</th>
                        <th className="text-right p-3 font-semibold">{isArabic ? "الناتج المحلي" : "GDP ($B)"}</th>
                        <th className="text-right p-3 font-semibold">{isArabic ? "الفقر" : "Poverty (%)"}</th>
                        <th className="text-right p-3 font-semibold">{isArabic ? "تضخم عدن" : "Inflation Aden (%)"}</th>
                        <th className="text-right p-3 font-semibold">{isArabic ? "تضخم صنعاء" : "Inflation Sanaa (%)"}</th>
                        <th className="text-right p-3 font-semibold">{isArabic ? "صرف عدن" : "Exchange Aden"}</th>
                        <th className="text-right p-3 font-semibold">{isArabic ? "صرف صنعاء" : "Exchange Sanaa"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {years.slice().reverse().map(year => {
                        const data = economicData[year as keyof typeof economicData];
                        const isSelected = year === selectedYear;
                        return (
                          <tr 
                            key={year} 
                            className={`border-b hover:bg-accent/50 transition-colors ${isSelected ? 'bg-primary/10 font-semibold' : ''}`}
                          >
                            <td className="p-3">{year}</td>
                            <td className="text-right p-3">${data.gdp}</td>
                            <td className="text-right p-3">{data.poverty}%</td>
                            <td className="text-right p-3">{data.inflation_aden}%</td>
                            <td className="text-right p-3">{data.inflation_sanaa}%</td>
                            <td className="text-right p-3">{data.exchange_aden.toLocaleString()}</td>
                            <td className="text-right p-3">{data.exchange_sanaa}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Key Insights */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  {isArabic ? "رؤى رئيسية" : "Key Insights"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-l-red-500">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-red-500" />
                      {isArabic ? "انهيار الناتج المحلي" : "GDP Collapse"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {isArabic
                        ? `انخفض الناتج المحلي الإجمالي من 37.7 مليار دولار (2015) إلى ${currentData.gdp} مليار دولار (${selectedYear})، بانخفاض قدره ${((1 - currentData.gdp / 37.7) * 100).toFixed(1)}%`
                        : `GDP declined from $37.7B (2015) to $${currentData.gdp}B (${selectedYear}), a ${((1 - currentData.gdp / 37.7) * 100).toFixed(1)}% drop`
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border-l-4 border-l-orange-500">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-orange-500" />
                      {isArabic ? "أزمة الفقر" : "Poverty Crisis"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {isArabic
                        ? `يعيش ${povertyMillions} مليون شخص (${currentData.poverty}% من السكان) تحت خط الفقر، بزيادة ${currentData.poverty - 54}% منذ 2015`
                        : `${povertyMillions}M people (${currentData.poverty}% of population) live below poverty line, up ${currentData.poverty - 54}% since 2015`
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-l-blue-500">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-500" />
                      {isArabic ? "فجوة سعر الصرف" : "Exchange Rate Gap"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {isArabic
                        ? `سعر الصرف في عدن أعلى بنسبة ${exchangeGap}% من صنعاء (${currentData.exchange_aden.toLocaleString()} مقابل ${currentData.exchange_sanaa})`
                        : `Aden exchange rate is ${exchangeGap}% higher than Sana'a (${currentData.exchange_aden.toLocaleString()} vs ${currentData.exchange_sanaa})`
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-l-4 border-l-purple-500">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Percent className="h-4 w-4 text-purple-500" />
                      {isArabic ? "تباين التضخم" : "Inflation Divergence"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {isArabic
                        ? `التضخم في عدن (${currentData.inflation_aden}%) أعلى ${(currentData.inflation_aden / currentData.inflation_sanaa).toFixed(1)} مرات من صنعاء (${currentData.inflation_sanaa}%)`
                        : `Aden inflation (${currentData.inflation_aden}%) is ${(currentData.inflation_aden / currentData.inflation_sanaa).toFixed(1)}x higher than Sana'a (${currentData.inflation_sanaa}%)`
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Calculators Tab */}
          <TabsContent value="calculators" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Inflation Calculator */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    {isArabic ? "حاسبة التضخم" : "Inflation Calculator"}
                  </CardTitle>
                  <CardDescription>
                    {isArabic 
                      ? "احسب تأثير التضخم على القوة الشرائية"
                      : "Calculate inflation impact on purchasing power"
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {isArabic ? "المبلغ الأولي ($)" : "Initial Amount ($)"}
                    </label>
                    <input
                      type="number"
                      value={inflationCalc.amount}
                      onChange={(e) => setInflationCalc({...inflationCalc, amount: Number(e.target.value)})}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {isArabic ? "عدد السنوات" : "Number of Years"}
                    </label>
                    <input
                      type="number"
                      value={inflationCalc.years}
                      onChange={(e) => setInflationCalc({...inflationCalc, years: Number(e.target.value)})}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {isArabic ? "المنطقة" : "Region"}
                    </label>
                    <select
                      value={inflationCalc.region}
                      onChange={(e) => setInflationCalc({...inflationCalc, region: e.target.value})}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="aden">{isArabic ? "عدن (تضخم 30%)" : "Aden (30% inflation)"}</option>
                      <option value="sanaa">{isArabic ? "صنعاء (تضخم 12%)" : "Sana'a (12% inflation)"}</option>
                    </select>
                  </div>

                  <div className="p-4 bg-accent/20 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        {isArabic ? "القيمة الحقيقية:" : "Real Value:"}
                      </span>
                      <span className="font-bold">${inflationResult.realValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        {isArabic ? "خسارة القوة الشرائية:" : "Purchasing Power Lost:"}
                      </span>
                      <span className="font-bold text-red-500">{inflationResult.lostPurchasing}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Exchange Rate Calculator */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    {isArabic ? "حاسبة سعر الصرف" : "Exchange Rate Calculator"}
                  </CardTitle>
                  <CardDescription>
                    {isArabic 
                      ? "حول الدولار إلى الريال اليمني"
                      : "Convert USD to Yemeni Rial"
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {isArabic ? "المبلغ بالدولار" : "Amount in USD"}
                    </label>
                    <input
                      type="number"
                      value={exchangeCalc.amount}
                      onChange={(e) => setExchangeCalc({...exchangeCalc, amount: Number(e.target.value)})}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {isArabic ? "السنة" : "Year"}
                    </label>
                    <select
                      value={exchangeCalc.year}
                      onChange={(e) => setExchangeCalc({...exchangeCalc, year: Number(e.target.value)})}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {isArabic ? "المنطقة" : "Region"}
                    </label>
                    <select
                      value={exchangeCalc.region}
                      onChange={(e) => setExchangeCalc({...exchangeCalc, region: e.target.value})}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="aden">{isArabic ? "عدن" : "Aden"}</option>
                      <option value="sanaa">{isArabic ? "صنعاء" : "Sana'a"}</option>
                    </select>
                  </div>

                  <div className="p-4 bg-accent/20 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        {isArabic ? "سعر الصرف:" : "Exchange Rate:"}
                      </span>
                      <span className="font-bold">{exchangeResult.rate} YER/$</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        {isArabic ? "القيمة بالريال:" : "Value in YER:"}
                      </span>
                      <span className="font-bold text-primary">{exchangeResult.yerValue} YER</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Export Tab */}
          <TabsContent value="export" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="h-5 w-5" />
                  {isArabic ? "تصدير البيانات" : "Export Data"}
                </CardTitle>
                <CardDescription>
                  {isArabic 
                    ? "قم بتنزيل البيانات الاقتصادية الكاملة بتنسيقات مختلفة"
                    : "Download complete economic data in various formats"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-2 hover:border-primary transition-colors cursor-pointer" onClick={exportToCSV}>
                    <CardContent className="p-6 text-center">
                      <FileSpreadsheet className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-bold mb-2">CSV Format</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {isArabic 
                          ? "مناسب لبرامج الجداول الحسابية (Excel, Google Sheets)"
                          : "Suitable for spreadsheet software (Excel, Google Sheets)"
                        }
                      </p>
                      <Button className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        {isArabic ? "تحميل CSV" : "Download CSV"}
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary transition-colors cursor-pointer" onClick={exportToJSON}>
                    <CardContent className="p-6 text-center">
                      <FileSpreadsheet className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-bold mb-2">JSON Format</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {isArabic 
                          ? "مناسب للتطبيقات البرمجية والتحليل المتقدم"
                          : "Suitable for software applications and advanced analysis"
                        }
                      </p>
                      <Button className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        {isArabic ? "تحميل JSON" : "Download JSON"}
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-l-blue-500">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-blue-500" />
                    {isArabic ? "معلومات البيانات" : "Data Information"}
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• {isArabic ? "الفترة الزمنية: 2015-2025" : "Time Period: 2015-2025"}</li>
                    <li>• {isArabic ? "المصادر: البنك الدولي، صندوق النقد الدولي، الأمم المتحدة" : "Sources: World Bank, IMF, UN"}</li>
                    <li>• {isArabic ? "آخر تحديث: 2025" : "Last Updated: 2025"}</li>
                    <li>• {isArabic ? "الترخيص: استخدام حر للأغراض البحثية والتعليمية" : "License: Free use for research and educational purposes"}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
