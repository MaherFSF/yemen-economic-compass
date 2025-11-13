import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, TrendingDown, ArrowRightLeft, Info } from "lucide-react";

// Historical inflation data (annual average)
const inflationData = {
  aden: {
    2015: 39.4,
    2016: 5.2,
    2017: 24.7,
    2018: 41.8,
    2019: 10.0,
    2020: 20.7,
    2021: 16.9,
    2022: 23.5,
    2023: 28.4,
    2024: 32.1,
    2025: 35.2
  },
  sanaa: {
    2015: 39.4,
    2016: 5.2,
    2017: 8.3,
    2018: 12.1,
    2019: 6.5,
    2020: 8.9,
    2021: 7.2,
    2022: 9.8,
    2023: 11.3,
    2024: 13.6,
    2025: 15.1
  }
};

// Historical exchange rates (annual average YER per USD)
const exchangeRates = {
  aden: {
    2014: 250,
    2015: 250,
    2016: 370,
    2017: 900,
    2018: 520,
    2019: 600,
    2020: 642,
    2021: 1050,
    2022: 1380,
    2023: 1750,
    2024: 2000,
    2025: 1700
  },
  sanaa: {
    2014: 250,
    2015: 250,
    2016: 250,
    2017: 250,
    2018: 250,
    2019: 590,
    2020: 590,
    2021: 580,
    2022: 570,
    2023: 560,
    2024: 550,
    2025: 540
  }
};

export default function FinancialCalculators() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  // Inflation Calculator State
  const [inflationAmount, setInflationAmount] = useState("1000");
  const [inflationStartYear, setInflationStartYear] = useState("2015");
  const [inflationEndYear, setInflationEndYear] = useState("2025");
  const [inflationRegion, setInflationRegion] = useState<"aden" | "sanaa">("aden");

  // Exchange Rate Calculator State
  const [exchangeAmount, setExchangeAmount] = useState("100");
  const [exchangeFrom, setExchangeFrom] = useState<"usd" | "yer-aden" | "yer-sanaa">("usd");
  const [exchangeTo, setExchangeTo] = useState<"usd" | "yer-aden" | "yer-sanaa">("yer-aden");
  const [exchangeYear, setExchangeYear] = useState("2025");

  // Calculate inflation impact
  const calculateInflation = () => {
    const amount = parseFloat(inflationAmount) || 0;
    const startYear = parseInt(inflationStartYear);
    const endYear = parseInt(inflationEndYear);
    
    if (startYear >= endYear) return null;
    
    let cumulativeInflation = 1;
    const data = inflationData[inflationRegion];
    
    for (let year = startYear; year < endYear; year++) {
      if (data[year as keyof typeof data]) {
        cumulativeInflation *= (1 + data[year as keyof typeof data] / 100);
      }
    }
    
    const futureValue = amount * cumulativeInflation;
    const purchasingPowerLoss = ((futureValue - amount) / futureValue) * 100;
    const realValue = amount;
    
    return {
      futureValue,
      realValue,
      purchasingPowerLoss,
      cumulativeInflation: ((cumulativeInflation - 1) * 100)
    };
  };

  // Calculate exchange rate
  const calculateExchange = () => {
    const amount = parseFloat(exchangeAmount) || 0;
    const year = parseInt(exchangeYear);
    
    const adenRate = exchangeRates.aden[year as keyof typeof exchangeRates.aden] || exchangeRates.aden[2025];
    const sanaaRate = exchangeRates.sanaa[year as keyof typeof exchangeRates.sanaa] || exchangeRates.sanaa[2025];
    
    let result = 0;
    let rate = 0;
    
    if (exchangeFrom === "usd" && exchangeTo === "yer-aden") {
      result = amount * adenRate;
      rate = adenRate;
    } else if (exchangeFrom === "usd" && exchangeTo === "yer-sanaa") {
      result = amount * sanaaRate;
      rate = sanaaRate;
    } else if (exchangeFrom === "yer-aden" && exchangeTo === "usd") {
      result = amount / adenRate;
      rate = 1 / adenRate;
    } else if (exchangeFrom === "yer-sanaa" && exchangeTo === "usd") {
      result = amount / sanaaRate;
      rate = 1 / sanaaRate;
    } else if (exchangeFrom === "yer-aden" && exchangeTo === "yer-sanaa") {
      // Convert Aden to USD first, then to Sana'a
      const usdAmount = amount / adenRate;
      result = usdAmount * sanaaRate;
      rate = sanaaRate / adenRate;
    } else if (exchangeFrom === "yer-sanaa" && exchangeTo === "yer-aden") {
      // Convert Sana'a to USD first, then to Aden
      const usdAmount = amount / sanaaRate;
      result = usdAmount * adenRate;
      rate = adenRate / sanaaRate;
    } else {
      result = amount; // Same currency
      rate = 1;
    }
    
    const parallelPremium = ((adenRate - sanaaRate) / sanaaRate) * 100;
    
    return {
      result,
      rate,
      adenRate,
      sanaaRate,
      parallelPremium
    };
  };

  const inflationResult = calculateInflation();
  const exchangeResult = calculateExchange();

  const years = Object.keys(exchangeRates.aden).map(y => parseInt(y)).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50" dir={isArabic ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-16">
        <div className="container">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Calculator className="w-3 h-3 mr-1" />
            {isArabic ? "أدوات تحليلية" : "Analytical Tools"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? "الحاسبات المالية التفاعلية" : "Interactive Financial Calculators"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {isArabic
              ? "أدوات تفاعلية لحساب تأثير التضخم وتحويل العملات بين الريال اليمني (عدن وصنعاء) والدولار الأمريكي"
              : "Interactive tools to calculate inflation impact and convert currencies between Yemeni Rial (Aden and Sana'a) and US Dollar"}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <Tabs defaultValue="inflation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="inflation" className="text-lg py-3">
              <TrendingDown className="w-5 h-5 mr-2" />
              {isArabic ? "حاسبة التضخم" : "Inflation Calculator"}
            </TabsTrigger>
            <TabsTrigger value="exchange" className="text-lg py-3">
              <ArrowRightLeft className="w-5 h-5 mr-2" />
              {isArabic ? "حاسبة سعر الصرف" : "Exchange Rate Calculator"}
            </TabsTrigger>
          </TabsList>

          {/* Inflation Calculator */}
          <TabsContent value="inflation">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="w-5 h-5" />
                    {isArabic ? "حاسبة التضخم" : "Inflation Calculator"}
                  </CardTitle>
                  <CardDescription>
                    {isArabic
                      ? "احسب فقدان القوة الشرائية بمرور الوقت بسبب التضخم"
                      : "Calculate purchasing power loss over time due to inflation"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="amount">
                      {isArabic ? "المبلغ الأولي (ريال يمني)" : "Initial Amount (YER)"}
                    </Label>
                    <Input
                      id="amount"
                      type="number"
                      value={inflationAmount}
                      onChange={(e) => setInflationAmount(e.target.value)}
                      placeholder="1000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="region">
                      {isArabic ? "المنطقة" : "Region"}
                    </Label>
                    <Select value={inflationRegion} onValueChange={(v: "aden" | "sanaa") => setInflationRegion(v)}>
                      <SelectTrigger id="region">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aden">
                          {isArabic ? "عدن (الحكومة الشرعية)" : "Aden (IRG)"}
                        </SelectItem>
                        <SelectItem value="sanaa">
                          {isArabic ? "صنعاء (الحوثيون)" : "Sana'a (Houthis)"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startYear">
                        {isArabic ? "سنة البداية" : "Start Year"}
                      </Label>
                      <Select value={inflationStartYear} onValueChange={setInflationStartYear}>
                        <SelectTrigger id="startYear">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {years.filter(y => y < parseInt(inflationEndYear)).map(year => (
                            <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="endYear">
                        {isArabic ? "سنة النهاية" : "End Year"}
                      </Label>
                      <Select value={inflationEndYear} onValueChange={setInflationEndYear}>
                        <SelectTrigger id="endYear">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {years.filter(y => y > parseInt(inflationStartYear)).map(year => (
                            <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-900">
                        {isArabic
                          ? "يستخدم هذا الحاسب معدلات التضخم التاريخية الفعلية لحساب فقدان القوة الشرائية. التضخم في مناطق عدن أعلى بكثير من مناطق صنعاء بسبب انهيار الريال الجديد."
                          : "This calculator uses actual historical inflation rates to calculate purchasing power loss. Inflation in Aden areas is significantly higher than Sana'a areas due to the collapse of the new rial."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Results Card */}
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
                <CardHeader>
                  <CardTitle>{isArabic ? "النتائج" : "Results"}</CardTitle>
                </CardHeader>
                <CardContent>
                  {inflationResult ? (
                    <div className="space-y-6">
                      <div className="p-6 bg-white rounded-lg shadow-sm">
                        <div className="text-sm text-muted-foreground mb-1">
                          {isArabic ? "القيمة الاسمية" : "Nominal Value"}
                        </div>
                        <div className="text-3xl font-bold text-gray-900">
                          {inflationResult.futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })} YER
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {isArabic ? `في ${inflationEndYear}` : `in ${inflationEndYear}`}
                        </div>
                      </div>

                      <div className="p-6 bg-white rounded-lg shadow-sm">
                        <div className="text-sm text-muted-foreground mb-1">
                          {isArabic ? "القيمة الحقيقية" : "Real Value"}
                        </div>
                        <div className="text-3xl font-bold text-green-600">
                          {inflationResult.realValue.toLocaleString(undefined, { maximumFractionDigits: 0 })} YER
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {isArabic ? `بقوة شرائية ${inflationStartYear}` : `in ${inflationStartYear} purchasing power`}
                        </div>
                      </div>

                      <div className="p-6 bg-white rounded-lg shadow-sm border-2 border-red-200">
                        <div className="text-sm text-muted-foreground mb-1">
                          {isArabic ? "فقدان القوة الشرائية" : "Purchasing Power Loss"}
                        </div>
                        <div className="text-3xl font-bold text-red-600">
                          {inflationResult.purchasingPowerLoss.toFixed(1)}%
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {isArabic ? "من القيمة الأصلية" : "of original value"}
                        </div>
                      </div>

                      <div className="p-6 bg-white rounded-lg shadow-sm">
                        <div className="text-sm text-muted-foreground mb-1">
                          {isArabic ? "التضخم التراكمي" : "Cumulative Inflation"}
                        </div>
                        <div className="text-3xl font-bold text-orange-600">
                          {inflationResult.cumulativeInflation.toFixed(1)}%
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {isArabic ? `من ${inflationStartYear} إلى ${inflationEndYear}` : `from ${inflationStartYear} to ${inflationEndYear}`}
                        </div>
                      </div>

                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                        <p className="text-sm text-amber-900">
                          {isArabic
                            ? `لشراء نفس السلع والخدمات التي كانت تكلف ${parseFloat(inflationAmount).toLocaleString()} ريال في ${inflationStartYear}، تحتاج إلى ${inflationResult.futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })} ريال في ${inflationEndYear}.`
                            : `To buy the same goods and services that cost ${parseFloat(inflationAmount).toLocaleString()} YER in ${inflationStartYear}, you need ${inflationResult.futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })} YER in ${inflationEndYear}.`}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      {isArabic ? "أدخل القيم لرؤية النتائج" : "Enter values to see results"}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Exchange Rate Calculator */}
          <TabsContent value="exchange">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ArrowRightLeft className="w-5 h-5" />
                    {isArabic ? "حاسبة سعر الصرف" : "Exchange Rate Calculator"}
                  </CardTitle>
                  <CardDescription>
                    {isArabic
                      ? "تحويل بين الدولار الأمريكي والريال اليمني (عدن وصنعاء)"
                      : "Convert between USD and Yemeni Rial (Aden and Sana'a)"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="exchangeAmount">
                      {isArabic ? "المبلغ" : "Amount"}
                    </Label>
                    <Input
                      id="exchangeAmount"
                      type="number"
                      value={exchangeAmount}
                      onChange={(e) => setExchangeAmount(e.target.value)}
                      placeholder="100"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="exchangeFrom">
                      {isArabic ? "من" : "From"}
                    </Label>
                    <Select value={exchangeFrom} onValueChange={(v: any) => setExchangeFrom(v)}>
                      <SelectTrigger id="exchangeFrom">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">
                          {isArabic ? "دولار أمريكي (USD)" : "US Dollar (USD)"}
                        </SelectItem>
                        <SelectItem value="yer-aden">
                          {isArabic ? "ريال عدن (YER-Aden)" : "Aden Rial (YER-Aden)"}
                        </SelectItem>
                        <SelectItem value="yer-sanaa">
                          {isArabic ? "ريال صنعاء (YER-Sana'a)" : "Sana'a Rial (YER-Sana'a)"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="exchangeTo">
                      {isArabic ? "إلى" : "To"}
                    </Label>
                    <Select value={exchangeTo} onValueChange={(v: any) => setExchangeTo(v)}>
                      <SelectTrigger id="exchangeTo">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">
                          {isArabic ? "دولار أمريكي (USD)" : "US Dollar (USD)"}
                        </SelectItem>
                        <SelectItem value="yer-aden">
                          {isArabic ? "ريال عدن (YER-Aden)" : "Aden Rial (YER-Aden)"}
                        </SelectItem>
                        <SelectItem value="yer-sanaa">
                          {isArabic ? "ريال صنعاء (YER-Sana'a)" : "Sana'a Rial (YER-Sana'a)"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="exchangeYear">
                      {isArabic ? "السنة" : "Year"}
                    </Label>
                    <Select value={exchangeYear} onValueChange={setExchangeYear}>
                      <SelectTrigger id="exchangeYear">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map(year => (
                          <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-900">
                        {isArabic
                          ? "يستخدم هذا الحاسب أسعار الصرف التاريخية الفعلية. الريال في عدن أضعف بكثير من الريال في صنعاء بسبب الانقسام النقدي."
                          : "This calculator uses actual historical exchange rates. The Aden rial is significantly weaker than the Sana'a rial due to the monetary split."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Results Card */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle>{isArabic ? "النتائج" : "Results"}</CardTitle>
                </CardHeader>
                <CardContent>
                  {exchangeResult && (
                    <div className="space-y-6">
                      <div className="p-6 bg-white rounded-lg shadow-sm border-2 border-indigo-200">
                        <div className="text-sm text-muted-foreground mb-1">
                          {isArabic ? "النتيجة" : "Result"}
                        </div>
                        <div className="text-4xl font-bold text-indigo-600">
                          {exchangeResult.result.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {exchangeTo === "usd" ? "USD" : exchangeTo === "yer-aden" ? "YER-Aden" : "YER-Sana'a"}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-xs text-muted-foreground mb-1">
                            {isArabic ? "سعر صرف عدن" : "Aden Exchange Rate"}
                          </div>
                          <div className="text-xl font-bold text-blue-600">
                            {exchangeResult.adenRate.toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">YER/$</div>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-xs text-muted-foreground mb-1">
                            {isArabic ? "سعر صرف صنعاء" : "Sana'a Exchange Rate"}
                          </div>
                          <div className="text-xl font-bold text-red-600">
                            {exchangeResult.sanaaRate.toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">YER/$</div>
                        </div>
                      </div>

                      <div className="p-6 bg-white rounded-lg shadow-sm">
                        <div className="text-sm text-muted-foreground mb-1">
                          {isArabic ? "علاوة السوق الموازي" : "Parallel Market Premium"}
                        </div>
                        <div className="text-3xl font-bold text-orange-600">
                          {exchangeResult.parallelPremium.toFixed(1)}%
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {isArabic ? "فرق بين عدن وصنعاء" : "Difference between Aden and Sana'a"}
                        </div>
                      </div>

                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                        <p className="text-sm text-amber-900">
                          {isArabic
                            ? `في ${exchangeYear}، الريال في عدن أضعف بنسبة ${exchangeResult.parallelPremium.toFixed(1)}٪ من الريال في صنعاء. هذا يعكس الانقسام النقدي والحرب الاقتصادية.`
                            : `In ${exchangeYear}, the Aden rial is ${exchangeResult.parallelPremium.toFixed(1)}% weaker than the Sana'a rial. This reflects the monetary split and economic warfare.`}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
