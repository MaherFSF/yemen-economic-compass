import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, TrendingDown, Minus, Info, AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
import { getLatestFXRate, getFXRateByDate, calculateDivergence } from "@/data/feeds/fx_rates";
import { getLatestCPI, getCPIByDate } from "@/data/feeds/inflation";
import { getLatestGDP, getGDPByYear } from "@/data/feeds/gdp";
import { getLatestPoverty, getPovertyByYear } from "@/data/feeds/poverty";

interface IndicatorData {
  id: string;
  titleEn: string;
  titleAr: string;
  value: number;
  unit: string;
  trend: "up" | "down" | "stable";
  severity: "critical" | "warning" | "normal" | "positive";
  descriptionEn: string;
  descriptionAr: string;
  impactEn: string[];
  impactAr: string[];
  lastUpdated: string;
}

export default function MasterCompass() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  
  // Timeline state
  const [selectedYear, setSelectedYear] = useState(2025);
  const years = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
  
  // Get data for selected year
  const getIndicatorData = (year: number): IndicatorData[] => {
    const date = `${year}-12-31`;
    
    // FX Data
    const fxAden = getFXRateByDate("aden", date);
    const fxSanaa = getFXRateByDate("sanaa", date);
    const fxGap = calculateDivergence(date);
    
    // Inflation Data
    const cpiAden = getCPIByDate("south", date);
    const cpiSanaa = getCPIByDate("north", date);
    
    // GDP Data
    const gdp = getGDPByYear(year);
    
    // Poverty Data
    const poverty = getPovertyByYear(year);
    
    return [
      {
        id: "gdp-baseline",
        titleEn: "GDP vs 2014 Baseline",
        titleAr: "الناتج مقارنة بـ2014",
        value: gdp?.realGDP_index || 100,
        unit: "Index (2014=100)",
        trend: gdp && gdp.realGDP_index < 100 ? "down" : gdp && gdp.realGDP_index > 100 ? "up" : "stable",
        severity: gdp && gdp.realGDP_index < 60 ? "critical" : gdp && gdp.realGDP_index < 80 ? "warning" : "normal",
        descriptionEn: `Yemen's real GDP has ${gdp && gdp.realGDP_index < 100 ? 'collapsed' : 'recovered'} to ${gdp?.realGDP_index || 100}% of its 2014 level.`,
        descriptionAr: `انخفض الناتج المحلي الإجمالي الحقيقي لليمن إلى ${gdp?.realGDP_index || 100}% من مستواه في 2014.`,
        impactEn: [
          "Lower government revenues and public services",
          "Reduced employment opportunities",
          "Decreased household incomes",
          "Weakened private sector investment"
        ],
        impactAr: [
          "انخفاض إيرادات الحكومة والخدمات العامة",
          "تقلص فرص العمل",
          "انخفاض دخل الأسر",
          "ضعف استثمارات القطاع الخاص"
        ],
        lastUpdated: `${year}-12-31`
      },
      {
        id: "gdp-per-capita",
        titleEn: "Real GDP Per Capita",
        titleAr: "الناتج الحقيقي للفرد",
        value: Math.round((gdp?.realGDP_usd_billions || 15) * 1000000000 / 33000000) || 500,
        unit: "USD",
        trend: "down",
        severity: "critical",
        descriptionEn: `Per capita income has fallen to approximately $${Math.round((gdp?.realGDP_usd_billions || 15) * 1000000000 / 33000000) || 500}, one of the lowest in the world.`,
        descriptionAr: `انخفض دخل الفرد إلى حوالي ${Math.round((gdp?.realGDP_usd_billions || 15) * 1000000000 / 33000000) || 500} دولار، من بين الأدنى عالميًا.`,
        impactEn: [
          "Extreme poverty and food insecurity",
          "Limited access to healthcare and education",
          "Increased migration and displacement",
          "Erosion of human capital"
        ],
        impactAr: [
          "فقر مدقع وانعدام الأمن الغذائي",
          "محدودية الوصول إلى الرعاية الصحية والتعليم",
          "زيادة الهجرة والنزوح",
          "تآكل رأس المال البشري"
        ],
        lastUpdated: `${year}-12-31`
      },
      {
        id: "inflation-aden",
        titleEn: "Inflation - Aden",
        titleAr: "التضخم العام – عدن",
        value: cpiAden?.yoy || 0,
        unit: "%",
        trend: cpiAden && cpiAden.yoy > 5 ? "up" : "stable",
        severity: cpiAden && cpiAden.yoy > 15 ? "critical" : cpiAden && cpiAden.yoy > 10 ? "warning" : "normal",
        descriptionEn: `Consumer prices in Aden have risen ${cpiAden?.yoy || 0}% year-on-year, driven by currency depreciation and supply disruptions.`,
        descriptionAr: `ارتفعت أسعار المستهلك في عدن بنسبة ${cpiAden?.yoy || 0}% على أساس سنوي، بسبب انخفاض قيمة العملة واضطرابات الإمداد.`,
        impactEn: [
          "Eroded purchasing power for salaries and savings",
          "Increased cost of food and fuel",
          "Reduced real value of humanitarian aid",
          "Higher business operating costs"
        ],
        impactAr: [
          "تآكل القوة الشرائية للرواتب والمدخرات",
          "ارتفاع تكلفة الغذاء والوقود",
          "انخفاض القيمة الحقيقية للمساعدات الإنسانية",
          "ارتفاع تكاليف تشغيل الأعمال"
        ],
        lastUpdated: `${year}-12-31`
      },
      {
        id: "inflation-sanaa",
        titleEn: "Inflation - Sana'a",
        titleAr: "التضخم العام – صنعاء",
        value: cpiSanaa?.yoy || 0,
        unit: "%",
        trend: cpiSanaa && cpiSanaa.yoy > 5 ? "up" : "stable",
        severity: cpiSanaa && cpiSanaa.yoy > 15 ? "critical" : cpiSanaa && cpiSanaa.yoy > 10 ? "warning" : "normal",
        descriptionEn: `Consumer prices in Sana'a have risen ${cpiSanaa?.yoy || 0}% year-on-year, reflecting controlled monetary policy but cash scarcity.`,
        descriptionAr: `ارتفعت أسعار المستهلك في صنعاء بنسبة ${cpiSanaa?.yoy || 0}% على أساس سنوي، مما يعكس سياسة نقدية مضبوطة لكن ندرة نقدية.`,
        impactEn: [
          "Stable prices but severe cash shortages",
          "Limited access to physical currency",
          "Forced reliance on digital payments",
          "Constrained consumer spending"
        ],
        impactAr: [
          "أسعار مستقرة لكن نقص نقدي حاد",
          "محدودية الوصول إلى العملة الفعلية",
          "اعتماد قسري على المدفوعات الرقمية",
          "إنفاق استهلاكي مقيد"
        ],
        lastUpdated: `${year}-12-31`
      },
      {
        id: "fx-aden",
        titleEn: "Exchange Rate - Aden",
        titleAr: "سعر الصرف – عدن",
        value: fxAden?.usd || 1650,
        unit: "YER/USD",
        trend: "up",
        severity: fxAden && fxAden.usd > 1500 ? "critical" : fxAden && fxAden.usd > 1000 ? "warning" : "normal",
        descriptionEn: `The Aden riyal has depreciated to ${fxAden?.usd || 1650} YER/USD, reflecting loss of confidence and economic fragmentation.`,
        descriptionAr: `انخفضت قيمة الريال في عدن إلى ${fxAden?.usd || 1650} ريال/دولار، مما يعكس فقدان الثقة والتجزئة الاقتصادية.`,
        impactEn: [
          "Salaries worth 1/7 of 2014 value in USD terms",
          "Import costs skyrocketed",
          "Aid dollars buy less in local currency",
          "Savings decimated"
        ],
        impactAr: [
          "الرواتب تساوي 1/7 من قيمتها في 2014 بالدولار",
          "ارتفاع جنوني في تكاليف الاستيراد",
          "دولارات المساعدات تشتري أقل بالعملة المحلية",
          "تدمير المدخرات"
        ],
        lastUpdated: `${year}-12-31`
      },
      {
        id: "fx-sanaa",
        titleEn: "Exchange Rate - Sana'a",
        titleAr: "سعر الصرف – صنعاء",
        value: fxSanaa?.usd || 560,
        unit: "YER/USD",
        trend: "stable",
        severity: "normal",
        descriptionEn: `The Sana'a riyal has remained stable at ${fxSanaa?.usd || 560} YER/USD since 2020, reflecting strict capital controls and cash rationing.`,
        descriptionAr: `ظل الريال في صنعاء مستقرًا عند ${fxSanaa?.usd || 560} ريال/دولار منذ 2020، مما يعكس ضوابط صارمة على رأس المال وتقنين النقد.`,
        impactEn: [
          "Stable exchange rate but limited cash availability",
          "Black market premiums for physical currency",
          "Controlled inflation but liquidity crisis",
          "Restricted international transactions"
        ],
        impactAr: [
          "سعر صرف مستقر لكن توفر نقدي محدود",
          "علاوات السوق السوداء للعملة الفعلية",
          "تضخم مضبوط لكن أزمة سيولة",
          "معاملات دولية مقيدة"
        ],
        lastUpdated: `${year}-12-31`
      },
      {
        id: "fx-gap",
        titleEn: "Exchange Rate Gap",
        titleAr: "فجوة الصرف",
        value: fxGap || 195,
        unit: "%",
        trend: "up",
        severity: fxGap && fxGap > 150 ? "critical" : fxGap && fxGap > 100 ? "warning" : "normal",
        descriptionEn: `The exchange rate gap between Aden and Sana'a has widened to ${fxGap || 195}%, creating two separate economic zones.`,
        descriptionAr: `اتسعت فجوة سعر الصرف بين عدن وصنعاء إلى ${fxGap || 195}%، مما خلق منطقتين اقتصاديتين منفصلتين.`,
        impactEn: [
          "Arbitrage opportunities and smuggling",
          "Fragmented national market",
          "Unequal humanitarian aid impact",
          "Distorted trade flows"
        ],
        impactAr: [
          "فرص المراجحة والتهريب",
          "سوق وطني مجزأ",
          "تأثير غير متساو للمساعدات الإنسانية",
          "تدفقات تجارية مشوهة"
        ],
        lastUpdated: `${year}-12-31`
      },
      {
        id: "food-basket",
        titleEn: "Food Basket Cost",
        titleAr: "سلة الغذاء",
        value: year === 2014 ? 8000 : year === 2020 ? 45000 : year === 2025 ? 85000 : 50000,
        unit: "YER",
        trend: "up",
        severity: "critical",
        descriptionEn: `The minimum food basket for a family of 7 now costs ${year === 2025 ? '85,000' : '50,000'} YER, up from 8,000 YER in 2014.`,
        descriptionAr: `تكلف سلة الغذاء الدنيا لأسرة من 7 أفراد الآن ${year === 2025 ? '85,000' : '50,000'} ريال، ارتفاعًا من 8,000 ريال في 2014.`,
        impactEn: [
          "70%+ of population food insecure",
          "Families forced to reduce meals",
          "Malnutrition and stunting in children",
          "Dependence on humanitarian aid"
        ],
        impactAr: [
          "+70% من السكان يعانون من انعدام الأمن الغذائي",
          "الأسر مضطرة لتقليل الوجبات",
          "سوء التغذية والتقزم لدى الأطفال",
          "الاعتماد على المساعدات الإنسانية"
        ],
        lastUpdated: `${year}-12-31`
      },
      {
        id: "oil-production",
        titleEn: "Oil Production",
        titleAr: "النفط",
        value: year === 2014 ? 120 : year === 2020 ? 10 : year === 2025 ? 5 : 20,
        unit: "k bbl/day",
        trend: "down",
        severity: "critical",
        descriptionEn: `Oil production has collapsed to ${year === 2025 ? '5' : '20'} thousand barrels per day, down from 120k in 2014.`,
        descriptionAr: `انهار إنتاج النفط إلى ${year === 2025 ? '5' : '20'} ألف برميل يوميًا، انخفاضًا من 120 ألف في 2014.`,
        impactEn: [
          "Loss of 80%+ of government revenue",
          "Inability to pay public salaries",
          "Dependence on external aid",
          "Economic collapse"
        ],
        impactAr: [
          "فقدان +80% من إيرادات الحكومة",
          "عدم القدرة على دفع الرواتب العامة",
          "الاعتماد على المساعدات الخارجية",
          "انهيار اقتصادي"
        ],
        lastUpdated: `${year}-12-31`
      },
      {
        id: "gov-revenue",
        titleEn: "Government Revenue",
        titleAr: "الإيرادات العامة",
        value: year === 2014 ? 100 : year === 2020 ? 25 : year === 2025 ? 20 : 30,
        unit: "Index (2014=100)",
        trend: "down",
        severity: "critical",
        descriptionEn: `Government revenue has collapsed to ${year === 2025 ? '20' : '30'}% of 2014 levels due to oil loss and economic fragmentation.`,
        descriptionAr: `انهارت إيرادات الحكومة إلى ${year === 2025 ? '20' : '30'}% من مستويات 2014 بسبب فقدان النفط والتجزئة الاقتصادية.`,
        impactEn: [
          "Unpaid public salaries for years",
          "Collapsed public services",
          "Inability to fund security forces",
          "State fragmentation"
        ],
        impactAr: [
          "رواتب عامة غير مدفوعة لسنوات",
          "انهيار الخدمات العامة",
          "عدم القدرة على تمويل قوات الأمن",
          "تجزئة الدولة"
        ],
        lastUpdated: `${year}-12-31`
      },
      {
        id: "sanctions-intensity",
        titleEn: "Sanctions Intensity Index",
        titleAr: "شدّة العقوبات",
        value: year === 2014 ? 10 : year === 2020 ? 65 : year === 2025 ? 85 : 50,
        unit: "Index (0-100)",
        trend: "up",
        severity: year >= 2023 ? "critical" : year >= 2018 ? "warning" : "normal",
        descriptionEn: `Sanctions intensity has reached ${year === 2025 ? '85' : '50'}/100, severely constraining banking and trade.`,
        descriptionAr: `وصلت شدة العقوبات إلى ${year === 2025 ? '85' : '50'}/100، مما يقيد البنوك والتجارة بشدة.`,
        impactEn: [
          "Banks unable to process international transfers",
          "Humanitarian operations delayed",
          "Trade finance unavailable",
          "Forced reliance on informal channels"
        ],
        impactAr: [
          "البنوك غير قادرة على معالجة التحويلات الدولية",
          "تأخر العمليات الإنسانية",
          "تمويل التجارة غير متاح",
          "اعتماد قسري على القنوات غير الرسمية"
        ],
        lastUpdated: `${year}-12-31`
      },
      {
        id: "banking-stress",
        titleEn: "Core Banking Stress Index",
        titleAr: "ضغط المصارف",
        value: year === 2014 ? 20 : year === 2020 ? 75 : year === 2025 ? 90 : 60,
        unit: "Index (0-100)",
        trend: "up",
        severity: year >= 2023 ? "critical" : year >= 2018 ? "warning" : "normal",
        descriptionEn: `Banking system stress has reached ${year === 2025 ? '90' : '60'}/100, with only 12% of payments flowing through banks.`,
        descriptionAr: `وصل ضغط النظام المصرفي إلى ${year === 2025 ? '90' : '60'}/100، مع تدفق 12% فقط من المدفوعات عبر البنوك.`,
        impactEn: [
          "88% of payments via non-bank channels",
          "Bank fee income collapsed 65%",
          "Liquidity crisis",
          "Parallel financial system dominates"
        ],
        impactAr: [
          "88% من المدفوعات عبر قنوات غير مصرفية",
          "انهيار دخل رسوم البنوك 65%",
          "أزمة سيولة",
          "هيمنة النظام المالي الموازي"
        ],
        lastUpdated: `${year}-12-31`
      }
    ];
  };
  
  const indicators = getIndicatorData(selectedYear);
  
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800";
      case "warning": return "bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800";
      case "positive": return "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800";
      default: return "bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800";
    }
  };
  
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical": return <AlertCircle className="h-5 w-5 text-red-600" />;
      case "warning": return <AlertTriangle className="h-5 w-5 text-amber-600" />;
      case "positive": return <CheckCircle className="h-5 w-5 text-green-600" />;
      default: return <Info className="h-5 w-5 text-blue-600" />;
    }
  };
  
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-5 w-5 text-red-600" />;
      case "down": return <TrendingDown className="h-5 w-5 text-green-600" />;
      default: return <Minus className="h-5 w-5 text-gray-600" />;
    }
  };
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">
          {isArabic ? "البوصلة الرئيسية" : "Master Compass"}
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {isArabic 
            ? "12 مؤشرًا رئيسيًا يتتبع الحالة الاقتصادية والمالية في اليمن. استخدم شريط الزمن أدناه لاستكشاف كيف تطورت هذه المؤشرات منذ 2014."
            : "12 key indicators tracking Yemen's economic and financial condition. Use the timeline below to explore how these metrics have evolved since 2014."
          }
        </p>
      </div>
      
      {/* Timeline Slider */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              {isArabic ? "الخط الزمني" : "Timeline"}
            </h3>
            <span className="text-2xl font-bold text-primary">
              {selectedYear}
            </span>
          </div>
          
          <Slider
            value={[years.indexOf(selectedYear)]}
            onValueChange={(value) => setSelectedYear(years[value[0]])}
            max={years.length - 1}
            step={1}
            className="w-full"
          />
          
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>2014</span>
            <span>2017</span>
            <span>2020</span>
            <span>2023</span>
            <span>2025</span>
          </div>
        </div>
      </Card>
      
      {/* Indicators Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {indicators.map((indicator) => (
          <Card key={indicator.id} className={`p-4 ${getSeverityColor(indicator.severity)}`}>
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-semibold text-sm leading-tight">
                  {isArabic ? indicator.titleAr : indicator.titleEn}
                </h4>
                {getSeverityIcon(indicator.severity)}
              </div>
              
              {/* Value */}
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">
                  {indicator.value.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground">
                  {indicator.unit}
                </span>
              </div>
              
              {/* Trend */}
              <div className="flex items-center gap-2">
                {getTrendIcon(indicator.trend)}
                <span className="text-sm text-muted-foreground">
                  {isArabic ? indicator.descriptionAr : indicator.descriptionEn}
                </span>
              </div>
              
              {/* Info Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">
                    <Info className="h-4 w-4 mr-2" />
                    {isArabic ? "ماذا يعني هذا؟" : "What does this mean?"}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>
                      {isArabic ? indicator.titleAr : indicator.titleEn}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        {isArabic ? "الوصف" : "Description"}
                      </h4>
                      <p className="text-muted-foreground">
                        {isArabic ? indicator.descriptionAr : indicator.descriptionEn}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">
                        {isArabic ? "التأثير على" : "Impact on"}
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {(isArabic ? indicator.impactAr : indicator.impactEn).map((impact, i) => (
                          <li key={i}>{impact}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      {isArabic ? "آخر تحديث: " : "Last updated: "}
                      {indicator.lastUpdated}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Summary */}
      <Card className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-red-600">
              {indicators.filter(i => i.severity === "critical").length}
            </div>
            <div className="text-sm text-muted-foreground">
              {isArabic ? "حرجة" : "Critical"}
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600">
              {indicators.filter(i => i.severity === "warning").length}
            </div>
            <div className="text-sm text-muted-foreground">
              {isArabic ? "تحذير" : "Warning"}
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">
              {indicators.filter(i => i.severity === "normal").length}
            </div>
            <div className="text-sm text-muted-foreground">
              {isArabic ? "عادي" : "Normal"}
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">
              {indicators.filter(i => i.severity === "positive").length}
            </div>
            <div className="text-sm text-muted-foreground">
              {isArabic ? "إيجابي" : "Positive"}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
