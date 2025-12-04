import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DataExport from "@/components/DataExport";
import { Search, TrendingDown, TrendingUp, AlertTriangle, DollarSign, Users, Building2, Percent, Calendar, Download, ExternalLink } from "lucide-react";

interface KeyIndicator {
  id: string;
  category: string;
  metric_en: string;
  metric_ar: string;
  value: string;
  year: string;
  trend: "up" | "down" | "stable" | "critical";
  change: string;
  source: string;
  context_en: string;
  context_ar: string;
}

const keyIndicators: KeyIndicator[] = [
  // Economic Output
  {
    id: "gdp_decline",
    category: "Economic Output",
    metric_en: "GDP Per Capita Decline",
    metric_ar: "انخفاض نصيب الفرد من الناتج المحلي",
    value: "58%",
    year: "2014-2025",
    trend: "critical",
    change: "-58%",
    source: "World Bank, IMF",
    context_en: "Per capita GDP has plummeted by 58% since 2014, reflecting profound erosion of productive capacity and living standards across Yemen.",
    context_ar: "انخفض نصيب الفرد من الناتج المحلي بنسبة 58% منذ 2014، مما يعكس تآكلاً عميقاً في القدرة الإنتاجية ومستويات المعيشة."
  },
  {
    id: "real_gdp",
    category: "Economic Output",
    metric_en: "Real GDP Growth Rate",
    metric_ar: "معدل نمو الناتج المحلي الحقيقي",
    value: "-1.5%",
    year: "2025",
    trend: "down",
    change: "-1.5%",
    source: "IMF Estimates",
    context_en: "Consistently negative growth, declining from +2.0% in 2014 to an estimated -1.5% in 2025, indicating ongoing economic contraction.",
    context_ar: "نمو سلبي مستمر، انخفض من +2.0% في 2014 إلى -1.5% المقدرة في 2025، مما يشير إلى انكماش اقتصادي مستمر."
  },
  
  // Currency & Inflation
  {
    id: "rial_depreciation",
    category: "Currency",
    metric_en: "Rial Depreciation (2025)",
    metric_ar: "انخفاض قيمة الريال (2025)",
    value: "30%",
    year: "2025",
    trend: "critical",
    change: "-30%",
    source: "Central Bank Data",
    context_en: "The Yemeni rial depreciated by 30% in 2025 alone, reaching approximately 1,800 YER/USD, severely impacting purchasing power.",
    context_ar: "انخفضت قيمة الريال اليمني بنسبة 30% في عام 2025 وحده، لتصل إلى حوالي 1,800 ريال/دولار، مما أثر بشدة على القوة الشرائية."
  },
  {
    id: "inflation_rate",
    category: "Inflation",
    metric_en: "Inflation Rate (Government Areas)",
    metric_ar: "معدل التضخم (المناطق الحكومية)",
    value: "30%+",
    year: "2025",
    trend: "critical",
    change: "+30%",
    source: "WFP, UN OCHA",
    context_en: "Government-controlled areas experiencing inflation rates exceeding 30%, with monthly inflation reaching 35% by July 2025.",
    context_ar: "تشهد المناطق الخاضعة للحكومة معدلات تضخم تتجاوز 30%، مع وصول التضخم الشهري إلى 35% بحلول يوليو 2025."
  },
  
  // Humanitarian Crisis
  {
    id: "food_insecurity",
    category: "Humanitarian",
    metric_en: "Food Insecure Population",
    metric_ar: "السكان المعرضون لانعدام الأمن الغذائي",
    value: "17M",
    year: "2025",
    trend: "critical",
    change: "+2M",
    source: "WFP, FEWS NET",
    context_en: "17 million Yemenis face acute food insecurity, representing over 50% of the population, with 6.1 million at emergency levels.",
    context_ar: "يواجه 17 مليون يمني انعدام الأمن الغذائي الحاد، يمثلون أكثر من 50% من السكان، مع 6.1 مليون في مستويات الطوارئ."
  },
  {
    id: "humanitarian_funding",
    category: "Humanitarian",
    metric_en: "Humanitarian Appeal Funding",
    metric_ar: "تمويل النداء الإنساني",
    value: "19%",
    year: "2025",
    trend: "critical",
    change: "-81%",
    source: "UN OCHA",
    context_en: "Only 19% of the required $2.5 billion humanitarian appeal secured as of September 2025, creating severe funding gaps.",
    context_ar: "تم تأمين 19% فقط من 2.5 مليار دولار المطلوبة للنداء الإنساني حتى سبتمبر 2025، مما خلق فجوات تمويلية شديدة."
  },
  {
    id: "poverty_rate",
    category: "Humanitarian",
    metric_en: "Population Below Poverty Line",
    metric_ar: "السكان تحت خط الفقر",
    value: "80%",
    year: "2025",
    trend: "critical",
    change: "+30%",
    source: "World Bank",
    context_en: "Approximately 80% of Yemen's population lives below the poverty line, up from 50% in 2014, marking catastrophic regression.",
    context_ar: "يعيش حوالي 80% من سكان اليمن تحت خط الفقر، ارتفاعاً من 50% في 2014، مما يمثل تراجعاً كارثياً."
  },
  
  // Financial Sector
  {
    id: "remittances",
    category: "Financial Flows",
    metric_en: "Annual Remittances",
    metric_ar: "التحويلات السنوية",
    value: "$3.8B",
    year: "2024",
    trend: "stable",
    change: "+5%",
    source: "World Bank",
    context_en: "Remittances remain a critical lifeline at $3.8 billion annually, supporting millions of households and representing 15% of GDP.",
    context_ar: "تظل التحويلات شريان حياة حيوي بقيمة 3.8 مليار دولار سنوياً، تدعم ملايين الأسر وتمثل 15% من الناتج المحلي."
  },
  {
    id: "commercial_banks",
    category: "Banking",
    metric_en: "Commercial Banks",
    metric_ar: "البنوك التجارية",
    value: "17",
    year: "2025",
    trend: "down",
    change: "-3",
    source: "CBY Data",
    context_en: "17 commercial banks operating under fragmented regulatory environment, down from 20 in 2014, with severely constrained liquidity.",
    context_ar: "17 بنكاً تجارياً يعمل في بيئة تنظيمية مجزأة، انخفاضاً من 20 في 2014، مع سيولة محدودة بشدة."
  },
  {
    id: "microfinance_banks",
    category: "Banking",
    metric_en: "Microfinance Banks",
    metric_ar: "بنوك التمويل الأصغر",
    value: "8",
    year: "2025",
    trend: "up",
    change: "+5",
    source: "CBY Licensing",
    context_en: "8 licensed microfinance banks, up from 3 in 2020, filling gaps left by commercial banks but facing supervision challenges.",
    context_ar: "8 بنوك تمويل أصغر مرخصة، ارتفاعاً من 3 في 2020، تملأ الفجوات التي تركتها البنوك التجارية لكن تواجه تحديات إشرافية."
  },
  
  // Trade & External
  {
    id: "trade_deficit",
    category: "Trade",
    metric_en: "Trade Deficit",
    metric_ar: "العجز التجاري",
    value: "$5.2B",
    year: "2024",
    trend: "down",
    change: "-$5.2B",
    source: "IMF",
    context_en: "Persistent trade deficit of $5.2 billion, with imports far exceeding exports, creating foreign currency pressures.",
    context_ar: "عجز تجاري مستمر بقيمة 5.2 مليار دولار، مع واردات تفوق الصادرات بكثير، مما يخلق ضغوطاً على العملة الأجنبية."
  },
  {
    id: "aid_flows",
    category: "Aid",
    metric_en: "Humanitarian Aid Flows",
    metric_ar: "تدفقات المساعدات الإنسانية",
    value: "$2.4B",
    year: "2024",
    trend: "down",
    change: "-15%",
    source: "UN OCHA",
    context_en: "Humanitarian aid flows totaling $2.4 billion in 2024, down 15% from 2023, insufficient to meet massive needs.",
    context_ar: "تدفقات مساعدات إنسانية بقيمة 2.4 مليار دولار في 2024، انخفاضاً بنسبة 15% عن 2023، غير كافية لتلبية الاحتياجات الضخمة."
  }
];

export default function KeyStatistics() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredIndicators, setFilteredIndicators] = useState(keyIndicators);

  const categories = Array.from(new Set(keyIndicators.map(i => i.category)));

  useEffect(() => {
    let filtered = keyIndicators;

    if (selectedCategory) {
      filtered = filtered.filter(i => i.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(i =>
        i.metric_en.toLowerCase().includes(query) ||
        i.metric_ar.includes(query) ||
        i.context_en.toLowerCase().includes(query) ||
        i.context_ar.includes(query)
      );
    }

    setFilteredIndicators(filtered);
  }, [searchQuery, selectedCategory]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-5 w-5 text-green-600" />;
      case "down": return <TrendingDown className="h-5 w-5 text-orange-600" />;
      case "critical": return <AlertTriangle className="h-5 w-5 text-red-600" />;
      default: return <Percent className="h-5 w-5 text-gray-600" />;
    }
  };

  const getTrendBadge = (trend: string) => {
    const variants: Record<string, string> = {
      up: "bg-green-100 text-green-800 border-green-300",
      down: "bg-orange-100 text-orange-800 border-orange-300",
      critical: "bg-red-100 text-red-800 border-red-300",
      stable: "bg-blue-100 text-blue-800 border-blue-300"
    };
    return variants[trend] || variants.stable;
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, any> = {
      "Economic Output": DollarSign,
      "Currency": DollarSign,
      "Inflation": TrendingUp,
      "Humanitarian": Users,
      "Financial Flows": DollarSign,
      "Banking": Building2,
      "Trade": DollarSign,
      "Aid": Users
    };
    const Icon = icons[category] || DollarSign;
    return <Icon className="h-5 w-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-burgundy via-teal-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              {isArabic ? "📊 البيانات الأساسية" : "📊 Core Data"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "الإحصاءات الرئيسية" : "Key Statistics"}
            </h1>
            <p className="text-xl text-white/90 mb-6">
              {isArabic 
                ? "المؤشرات الاقتصادية والإنسانية الحرجة لليمن (2010-2025)"
                : "Critical Economic and Humanitarian Indicators for Yemen (2010-2025)"}
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur">
                <Calendar className="h-4 w-4" />
                <span>{isArabic ? "15 سنة من البيانات" : "15 Years of Data"}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur">
                <DollarSign className="h-4 w-4" />
                <span>{isArabic ? "12 مؤشر رئيسي" : "12 Key Indicators"}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur">
                <Users className="h-4 w-4" />
                <span>{isArabic ? "مصادر متعددة" : "Multiple Sources"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder={isArabic ? "ابحث في المؤشرات..." : "Search indicators..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                >
                  {isArabic ? "الكل" : "All"}
                </Button>
                {categories.map(cat => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>

              {/* Export */}
              <DataExport
                data={filteredIndicators}
                filename="yemen_key_statistics"
                title={isArabic ? "تصدير الإحصاءات" : "Export Statistics"}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Statistics Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIndicators.map((indicator) => (
            <Card key={indicator.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(indicator.category)}
                    <Badge variant="outline" className="text-xs">
                      {indicator.category}
                    </Badge>
                  </div>
                  {getTrendIcon(indicator.trend)}
                </div>
                <CardTitle className="text-lg">
                  {isArabic ? indicator.metric_ar : indicator.metric_en}
                </CardTitle>
                <CardDescription className="text-xs flex items-center gap-2">
                  <Calendar className="h-3 w-3" />
                  {indicator.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Value */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-burgundy">
                      {indicator.value}
                    </span>
                    <Badge className={getTrendBadge(indicator.trend)}>
                      {indicator.change}
                    </Badge>
                  </div>

                  {/* Context */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {isArabic ? indicator.context_ar : indicator.context_en}
                  </p>

                  {/* Source */}
                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <ExternalLink className="h-3 w-3" />
                      {indicator.source}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredIndicators.length === 0 && (
          <div className="text-center py-12">
            <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              {isArabic ? "لم يتم العثور على مؤشرات" : "No indicators found"}
            </p>
          </div>
        )}
      </div>

      {/* Data Sources */}
      <div className="container mx-auto px-4 pb-12">
        <Card>
          <CardHeader>
            <CardTitle>{isArabic ? "مصادر البيانات" : "Data Sources"}</CardTitle>
            <CardDescription>
              {isArabic 
                ? "جميع الإحصاءات مستمدة من مصادر موثوقة ومحدثة بانتظام"
                : "All statistics derived from credible sources and regularly updated"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["World Bank", "IMF", "UN OCHA", "WFP", "FEWS NET", "Central Bank of Yemen", "ACAPS", "Sana'a Center"].map(source => (
                <div key={source} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                  <Building2 className="h-4 w-4 text-teal-600" />
                  <span className="text-sm font-medium">{source}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
