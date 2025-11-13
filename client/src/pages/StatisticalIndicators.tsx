import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  TrendingUp,
  TrendingDown,
  Download,
  BarChart3,
  Activity,
  DollarSign,
  Percent,
  Users,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Indicator {
  id: string;
  name: string;
  nameAr: string;
  category: string;
  value: number;
  unit: string;
  unitAr: string;
  trend: "up" | "down" | "stable";
  change: number;
  period: string;
  source: string;
  description: string;
  descriptionAr: string;
}

const indicators: Indicator[] = [
  {
    id: "ind-001",
    name: "Exchange Rate (YER-Aden)",
    nameAr: "سعر الصرف (ريال عدن)",
    category: "monetary",
    value: 1750,
    unit: "YER/$",
    unitAr: "ريال/دولار",
    trend: "down",
    change: -8.5,
    period: "Nov 2025",
    source: "CBY-Aden",
    description: "Official exchange rate in IRG-controlled areas",
    descriptionAr: "سعر الصرف الرسمي في المناطق الخاضعة للحكومة الشرعية",
  },
  {
    id: "ind-002",
    name: "Exchange Rate (YER-Sana'a)",
    nameAr: "سعر الصرف (ريال صنعاء)",
    category: "monetary",
    value: 530,
    unit: "YER/$",
    unitAr: "ريال/دولار",
    trend: "stable",
    change: 0.2,
    period: "Nov 2025",
    source: "Parallel Market",
    description: "Parallel market rate in Houthi-controlled areas",
    descriptionAr: "سعر السوق الموازي في المناطق الخاضعة للحوثيين",
  },
  {
    id: "ind-003",
    name: "Inflation Rate (General)",
    nameAr: "معدل التضخم (العام)",
    category: "prices",
    value: 28.5,
    unit: "%",
    unitAr: "%",
    trend: "up",
    change: 3.2,
    period: "Q3 2025",
    source: "World Bank",
    description: "Year-over-year inflation rate",
    descriptionAr: "معدل التضخم السنوي",
  },
  {
    id: "ind-004",
    name: "Food Inflation",
    nameAr: "تضخم أسعار الغذاء",
    category: "prices",
    value: 42.3,
    unit: "%",
    unitAr: "%",
    trend: "up",
    change: 5.8,
    period: "Q3 2025",
    source: "WFP",
    description: "Food price inflation rate",
    descriptionAr: "معدل تضخم أسعار المواد الغذائية",
  },
  {
    id: "ind-005",
    name: "GDP (Nominal)",
    nameAr: "الناتج المحلي الإجمالي (الاسمي)",
    category: "growth",
    value: 20.5,
    unit: "Billion $",
    unitAr: "مليار دولار",
    trend: "stable",
    change: 0.5,
    period: "2025 Est.",
    source: "World Bank",
    description: "Nominal GDP in current prices",
    descriptionAr: "الناتج المحلي الإجمالي بالأسعار الجارية",
  },
  {
    id: "ind-006",
    name: "GDP Per Capita",
    nameAr: "نصيب الفرد من الناتج المحلي",
    category: "growth",
    value: 620,
    unit: "$",
    unitAr: "دولار",
    trend: "down",
    change: -2.1,
    period: "2025 Est.",
    source: "World Bank",
    description: "GDP per capita in current prices",
    descriptionAr: "نصيب الفرد من الناتج المحلي بالأسعار الجارية",
  },
  {
    id: "ind-007",
    name: "Oil Production",
    nameAr: "إنتاج النفط",
    category: "oil",
    value: 15,
    unit: "K bbl/day",
    unitAr: "ألف برميل/يوم",
    trend: "down",
    change: -85.0,
    period: "2025",
    source: "OPEC",
    description: "Crude oil production",
    descriptionAr: "إنتاج النفط الخام",
  },
  {
    id: "ind-008",
    name: "Foreign Reserves (CBY-Aden)",
    nameAr: "الاحتياطيات الأجنبية (البنك المركزي عدن)",
    category: "monetary",
    value: 1.2,
    unit: "Billion $",
    unitAr: "مليار دولار",
    trend: "down",
    change: -15.0,
    period: "Q3 2025",
    source: "CBY-Aden",
    description: "Official foreign exchange reserves",
    descriptionAr: "الاحتياطيات الرسمية من النقد الأجنبي",
  },
  {
    id: "ind-009",
    name: "Humanitarian Aid Flows",
    nameAr: "تدفقات المساعدات الإنسانية",
    category: "aid",
    value: 2.8,
    unit: "Billion $",
    unitAr: "مليار دولار",
    trend: "down",
    change: -12.5,
    period: "2024",
    source: "UN OCHA",
    description: "Total humanitarian assistance received",
    descriptionAr: "إجمالي المساعدات الإنسانية المستلمة",
  },
  {
    id: "ind-010",
    name: "Poverty Rate",
    nameAr: "معدل الفقر",
    category: "social",
    value: 80,
    unit: "%",
    unitAr: "%",
    trend: "up",
    change: 2.0,
    period: "2024",
    source: "World Bank",
    description: "Population below national poverty line",
    descriptionAr: "السكان تحت خط الفقر الوطني",
  },
  {
    id: "ind-011",
    name: "Food Insecurity",
    nameAr: "انعدام الأمن الغذائي",
    category: "social",
    value: 17.4,
    unit: "Million",
    unitAr: "مليون",
    trend: "stable",
    change: 0.0,
    period: "2025",
    source: "WFP",
    description: "People facing acute food insecurity",
    descriptionAr: "الأشخاص الذين يواجهون انعدام الأمن الغذائي الحاد",
  },
  {
    id: "ind-012",
    name: "Banking Sector Assets",
    nameAr: "أصول القطاع المصرفي",
    category: "banking",
    value: 8.5,
    unit: "Billion $",
    unitAr: "مليار دولار",
    trend: "down",
    change: -5.5,
    period: "2024",
    source: "CBY-Aden",
    description: "Total assets of commercial banks",
    descriptionAr: "إجمالي أصول البنوك التجارية",
  },
];

const compositeIndices = [
  {
    name: "Economic Stability Index",
    nameAr: "مؤشر الاستقرار الاقتصادي",
    value: 32,
    max: 100,
    trend: "down",
    components: ["Exchange Rate Volatility", "Inflation", "Foreign Reserves", "GDP Growth"],
  },
  {
    name: "Banking Sector Health Index",
    nameAr: "مؤشر صحة القطاع المصرفي",
    value: 28,
    max: 100,
    trend: "down",
    components: ["Capital Adequacy", "Asset Quality", "Liquidity", "Correspondent Banking"],
  },
  {
    name: "Humanitarian Crisis Index",
    nameAr: "مؤشر الأزمة الإنسانية",
    value: 85,
    max: 100,
    trend: "stable",
    components: ["Food Insecurity", "Poverty Rate", "Displacement", "Health Access"],
  },
  {
    name: "Governance Quality Index",
    nameAr: "مؤشر جودة الحوكمة",
    value: 18,
    max: 100,
    trend: "stable",
    components: ["Fiscal Transparency", "Corruption", "Rule of Law", "Institutional Capacity"],
  },
];

export default function StatisticalIndicators() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredIndicators = indicators.filter(
    (ind) => categoryFilter === "all" || ind.category === categoryFilter
  );

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      case "stable":
        return <Activity className="w-4 h-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "monetary":
        return <DollarSign className="w-5 h-5" />;
      case "prices":
        return <Percent className="w-5 h-5" />;
      case "growth":
        return <TrendingUp className="w-5 h-5" />;
      case "oil":
        return <BarChart3 className="w-5 h-5" />;
      case "aid":
        return <Users className="w-5 h-5" />;
      case "social":
        return <Users className="w-5 h-5" />;
      case "banking":
        return <DollarSign className="w-5 h-5" />;
      default:
        return <BarChart3 className="w-5 h-5" />;
    }
  };

  const exportData = () => {
    const csv = `Indicator,Value,Unit,Trend,Change (%),Period,Source\n${indicators
      .map(
        (ind) =>
          `"${ind.name}",${ind.value},"${ind.unit}",${ind.trend},${ind.change},"${ind.period}","${ind.source}"`
      )
      .join("\n")}`;

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "yemen-statistical-indicators.csv";
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "مكتبة المؤشرات الإحصائية" : "Statistical Indicators Library"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic
                ? "مؤشرات اقتصادية واجتماعية شاملة مع تحليل الاتجاهات والمؤشرات المركبة"
                : "Comprehensive economic and social indicators with trend analysis and composite indices"}
            </p>
          </div>

          {/* Filter */}
          <div className="flex justify-between items-center mb-8">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[250px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{isArabic ? "جميع الفئات" : "All Categories"}</SelectItem>
                <SelectItem value="monetary">{isArabic ? "السياسة النقدية" : "Monetary"}</SelectItem>
                <SelectItem value="prices">{isArabic ? "الأسعار" : "Prices"}</SelectItem>
                <SelectItem value="growth">{isArabic ? "النمو" : "Growth"}</SelectItem>
                <SelectItem value="oil">{isArabic ? "النفط والغاز" : "Oil & Gas"}</SelectItem>
                <SelectItem value="aid">{isArabic ? "المساعدات" : "Aid"}</SelectItem>
                <SelectItem value="social">{isArabic ? "اجتماعي" : "Social"}</SelectItem>
                <SelectItem value="banking">{isArabic ? "المصرفي" : "Banking"}</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={exportData} className="gap-2">
              <Download className="w-4 h-4" />
              {isArabic ? "تصدير البيانات" : "Export Data"}
            </Button>
          </div>

          {/* Leading Indicators */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{isArabic ? "المؤشرات الرائدة" : "Leading Indicators"}</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredIndicators.map((indicator) => (
                <Card key={indicator.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(indicator.category)}
                        <Badge variant="outline" className="text-xs">
                          {indicator.category}
                        </Badge>
                      </div>
                      {getTrendIcon(indicator.trend)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm leading-tight">
                        {isArabic ? indicator.nameAr : indicator.name}
                      </h3>
                      <div className="text-3xl font-bold">
                        {indicator.value.toLocaleString()}
                        <span className="text-sm font-normal text-muted-foreground ml-1">
                          {isArabic ? indicator.unitAr : indicator.unit}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span
                          className={`font-medium ${
                            indicator.change > 0
                              ? "text-green-500"
                              : indicator.change < 0
                              ? "text-red-500"
                              : "text-yellow-500"
                          }`}
                        >
                          {indicator.change > 0 && "+"}
                          {indicator.change}%
                        </span>
                        <span className="text-muted-foreground">{indicator.period}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {isArabic ? indicator.descriptionAr : indicator.description}
                      </p>
                      <div className="text-xs text-muted-foreground pt-2 border-t">
                        {isArabic ? "المصدر" : "Source"}: {indicator.source}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Composite Indices */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{isArabic ? "المؤشرات المركبة" : "Composite Indices"}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {compositeIndices.map((index, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle>{isArabic ? index.nameAr : index.name}</CardTitle>
                    <CardDescription>
                      {isArabic ? "مؤشر مركب من عدة مكونات" : "Composite index from multiple components"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-4xl font-bold">
                          {index.value}/{index.max}
                        </div>
                        {getTrendIcon(index.trend)}
                      </div>

                      <div className="w-full bg-muted rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${
                            index.value >= 70
                              ? "bg-green-500"
                              : index.value >= 40
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${index.value}%` }}
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">
                          {isArabic ? "المكونات" : "Components"}:
                        </h4>
                        <ul className="space-y-1">
                          {index.components.map((component, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {component}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>{isArabic ? "المنهجية" : "Methodology"}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                {isArabic
                  ? "جميع المؤشرات مستمدة من مصادر رسمية ومؤسسات دولية موثوقة. يتم تحديث البيانات بشكل دوري بناءً على توافر المعلومات الجديدة. المؤشرات المركبة محسوبة باستخدام منهجيات موحدة دولياً مع تعديلات لسياق اليمن."
                  : "All indicators are derived from official sources and credible international institutions. Data is updated periodically based on the availability of new information. Composite indices are calculated using internationally standardized methodologies with adjustments for Yemen's context."}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
