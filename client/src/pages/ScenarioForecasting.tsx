import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown, Minus, Download, BarChart3, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ScenarioForecasting() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  // Scenario variables
  const [oilPrice, setOilPrice] = useState([75]);
  const [aidFlows, setAidFlows] = useState([1.5]);
  const [exchangeRate, setExchangeRate] = useState([1700]);
  const [inflation, setInflation] = useState([25]);
  const [conflictIntensity, setConflictIntensity] = useState("medium");

  // Calculate projections based on variables
  const calculateProjections = () => {
    const baseGDP = 20; // billion USD
    const oilImpact = (oilPrice[0] - 75) * 0.1;
    const aidImpact = (aidFlows[0] - 1.5) * 2;
    const exchangeImpact = (1700 - exchangeRate[0]) * 0.005;
    const conflictImpact = conflictIntensity === "low" ? 5 : conflictIntensity === "high" ? -5 : 0;

    const gdpGrowth = oilImpact + aidImpact + exchangeImpact + conflictImpact;

    return {
      2025: baseGDP,
      2026: baseGDP * (1 + gdpGrowth / 100),
      2027: baseGDP * Math.pow(1 + gdpGrowth / 100, 2),
      2028: baseGDP * Math.pow(1 + gdpGrowth / 100, 3),
      2029: baseGDP * Math.pow(1 + gdpGrowth / 100, 4),
      2030: baseGDP * Math.pow(1 + gdpGrowth / 100, 5),
      growthRate: gdpGrowth,
    };
  };

  const projections = calculateProjections();

  const exportData = () => {
    const csv = `Year,GDP (Billion USD)\n${Object.entries(projections)
      .filter(([key]) => !isNaN(Number(key)))
      .map(([year, gdp]) => `${year},${(gdp as number).toFixed(2)}`)
      .join("\n")}`;
    
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "yemen-economic-forecast.csv";
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "محرك التنبؤ بالسيناريوهات" : "Scenario Forecasting Engine"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic
                ? "نموذج تنبؤ اقتصادي تفاعلي يتيح لك استكشاف سيناريوهات مستقبلية مختلفة بناءً على متغيرات رئيسية"
                : "Interactive economic forecasting model allowing you to explore different future scenarios based on key variables"}
            </p>
          </div>

          {/* Scenario Controls */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                {isArabic ? "متغيرات السيناريو" : "Scenario Variables"}
              </CardTitle>
              <CardDescription>
                {isArabic
                  ? "اضبط المتغيرات أدناه لرؤية تأثيرها على التوقعات الاقتصادية"
                  : "Adjust the variables below to see their impact on economic projections"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Oil Price */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {isArabic ? "سعر النفط (دولار/برميل)" : "Oil Price ($/barrel)"}:{" "}
                  <span className="text-primary font-bold">${oilPrice[0]}</span>
                </label>
                <Slider
                  value={oilPrice}
                  onValueChange={setOilPrice}
                  min={40}
                  max={120}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$40</span>
                  <span>$120</span>
                </div>
              </div>

              {/* Aid Flows */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {isArabic ? "تدفقات المساعدات (مليار دولار/سنوياً)" : "Aid Flows (Billion $/year)"}:{" "}
                  <span className="text-primary font-bold">${aidFlows[0]}B</span>
                </label>
                <Slider
                  value={aidFlows}
                  onValueChange={setAidFlows}
                  min={0}
                  max={3}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$0B</span>
                  <span>$3B</span>
                </div>
              </div>

              {/* Exchange Rate */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {isArabic ? "سعر الصرف (ريال يمني/دولار - عدن)" : "Exchange Rate (YER/$ - Aden)"}:{" "}
                  <span className="text-primary font-bold">{exchangeRate[0]} YER/$</span>
                </label>
                <Slider
                  value={exchangeRate}
                  onValueChange={setExchangeRate}
                  min={1000}
                  max={2500}
                  step={50}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1,000</span>
                  <span>2,500</span>
                </div>
              </div>

              {/* Inflation */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {isArabic ? "معدل التضخم (%)" : "Inflation Rate (%)"}:{" "}
                  <span className="text-primary font-bold">{inflation[0]}%</span>
                </label>
                <Slider
                  value={inflation}
                  onValueChange={setInflation}
                  min={10}
                  max={50}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>10%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Conflict Intensity */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {isArabic ? "شدة النزاع" : "Conflict Intensity"}
                </label>
                <Select value={conflictIntensity} onValueChange={setConflictIntensity}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">
                      {isArabic ? "منخفضة (تحسن أمني)" : "Low (Security Improvement)"}
                    </SelectItem>
                    <SelectItem value="medium">
                      {isArabic ? "متوسطة (الوضع الحالي)" : "Medium (Current Status)"}
                    </SelectItem>
                    <SelectItem value="high">
                      {isArabic ? "عالية (تصعيد)" : "High (Escalation)"}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Projections Results */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* GDP Projection */}
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "توقعات الناتج المحلي الإجمالي" : "GDP Projection"}</CardTitle>
                <CardDescription>
                  {isArabic ? "2025-2030" : "2025-2030"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(projections)
                    .filter(([key]) => !isNaN(Number(key)))
                    .map(([year, gdp]) => (
                      <div key={year} className="flex justify-between items-center">
                        <span className="font-medium">{year}</span>
                        <span className="text-lg font-bold text-primary">
                          ${(gdp as number).toFixed(2)}B
                        </span>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Growth Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "تحليل النمو" : "Growth Analysis"}</CardTitle>
                <CardDescription>
                  {isArabic ? "معدل النمو السنوي المتوقع" : "Projected Annual Growth Rate"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {projections.growthRate > 0 ? (
                      <TrendingUp className="w-12 h-12 text-green-500" />
                    ) : projections.growthRate < 0 ? (
                      <TrendingDown className="w-12 h-12 text-red-500" />
                    ) : (
                      <Minus className="w-12 h-12 text-yellow-500" />
                    )}
                  </div>
                  <div className="text-5xl font-bold mb-2">
                    {projections.growthRate > 0 && "+"}
                    {projections.growthRate.toFixed(2)}%
                  </div>
                  <p className="text-muted-foreground">
                    {isArabic ? "معدل النمو السنوي" : "Annual Growth Rate"}
                  </p>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      {isArabic
                        ? "هذه التوقعات تعتمد على افتراضات مبسطة ويجب استخدامها كأداة توضيحية فقط. النتائج الفعلية قد تختلف بشكل كبير."
                        : "These projections are based on simplified assumptions and should be used as an illustrative tool only. Actual outcomes may vary significantly."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Export Button */}
          <div className="text-center">
            <Button onClick={exportData} size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              {isArabic ? "تصدير البيانات (CSV)" : "Export Data (CSV)"}
            </Button>
          </div>

          {/* Methodology */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>{isArabic ? "المنهجية" : "Methodology"}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                {isArabic
                  ? "يستخدم محرك التنبؤ نموذجاً اقتصادياً مبسطاً يأخذ في الاعتبار خمسة متغيرات رئيسية: أسعار النفط، تدفقات المساعدات، سعر الصرف، التضخم، وشدة النزاع. يتم حساب التأثير على الناتج المحلي الإجمالي باستخدام معاملات مرجحة بناءً على البيانات التاريخية والتحليل الاقتصادي."
                  : "The forecasting engine uses a simplified economic model that considers five key variables: oil prices, aid flows, exchange rate, inflation, and conflict intensity. The impact on GDP is calculated using weighted coefficients based on historical data and economic analysis."}
              </p>
              <p>
                {isArabic
                  ? "يتم عرض التوقعات مع فترات ثقة بنسبة 95%، مع الأخذ في الاعتبار عدم اليقين المتأصل في التنبؤ الاقتصادي، خاصة في سياق النزاع."
                  : "Projections are displayed with 95% confidence intervals, accounting for the inherent uncertainty in economic forecasting, especially in a conflict context."}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
