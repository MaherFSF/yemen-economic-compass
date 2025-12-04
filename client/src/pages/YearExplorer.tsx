import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, TrendingDown, TrendingUp, Users, DollarSign, AlertTriangle, FileText } from "lucide-react";

/**
 * Year-by-Year Explorer (2010-2025)
 * Comprehensive timeline allowing users to explore every year in detail
 */

const YEARS_DATA = {
  2010: {
    titleEn: "Pre-Crisis Baseline",
    titleAr: "خط الأساس قبل الأزمة",
    gdp: 31.3,
    inflation: 11.2,
    poverty: 42.0,
    population: 23.6,
    events: [
      { date: "2010-01-01", titleEn: "Economic Baseline Year", titleAr: "سنة خط الأساس الاقتصادي", category: "economic" },
      { date: "2010-12-17", titleEn: "Tunisian Revolution Sparks", titleAr: "شرارة الثورة التونسية", category: "political" }
    ],
    keyFacts: [
      { en: "GDP: $31.3 billion", ar: "الناتج المحلي: 31.3 مليار دولار" },
      { en: "Oil production: 260,000 bpd", ar: "إنتاج النفط: 260 ألف برميل يومياً" },
      { en: "Poverty rate: 42%", ar: "معدل الفقر: 42%" }
    ]
  },
  2011: {
    titleEn: "Revolution & Transition",
    titleAr: "الثورة والانتقال",
    gdp: 33.8,
    inflation: 19.5,
    poverty: 45.0,
    population: 24.0,
    events: [
      { date: "2011-02-11", titleEn: "Yemeni Revolution Begins", titleAr: "بداية الثورة اليمنية", category: "political" },
      { date: "2011-06-03", titleEn: "President Saleh Injured", titleAr: "إصابة الرئيس صالح", category: "political" },
      { date: "2011-11-23", titleEn: "GCC Initiative Signed", titleAr: "توقيع المبادرة الخليجية", category: "political" }
    ],
    keyFacts: [
      { en: "Months of protests across major cities", ar: "أشهر من الاحتجاجات في المدن الكبرى" },
      { en: "Economic activity severely disrupted", ar: "تعطل النشاط الاقتصادي بشدة" },
      { en: "Inflation spikes to 19.5%", ar: "ارتفاع التضخم إلى 19.5%" }
    ]
  },
  2012: {
    titleEn: "Hadi Presidency Begins",
    titleAr: "بداية رئاسة هادي",
    gdp: 35.4,
    inflation: 9.9,
    poverty: 47.0,
    population: 24.4,
    events: [
      { date: "2012-02-27", titleEn: "Hadi Elected President", titleAr: "انتخاب هادي رئيساً", category: "political" },
      { date: "2012-03-18", titleEn: "National Dialogue Conference Announced", titleAr: "الإعلان عن مؤتمر الحوار الوطني", category: "political" }
    ],
    keyFacts: [
      { en: "Peaceful power transfer completed", ar: "اكتمال نقل السلطة السلمي" },
      { en: "National Dialogue Conference launched", ar: "إطلاق مؤتمر الحوار الوطني" },
      { en: "Economic recovery attempts begin", ar: "بداية محاولات التعافي الاقتصادي" }
    ]
  },
  2013: {
    titleEn: "Dialogue & Reform Attempts",
    titleAr: "الحوار ومحاولات الإصلاح",
    gdp: 40.4,
    inflation: 11.0,
    poverty: 48.6,
    population: 24.8,
    events: [
      { date: "2013-03-18", titleEn: "National Dialogue Conference Begins", titleAr: "بداية مؤتمر الحوار الوطني", category: "political" },
      { date: "2013-08-01", titleEn: "Fuel Subsidy Cuts", titleAr: "خفض دعم الوقود", category: "economic" }
    ],
    keyFacts: [
      { en: "Fuel subsidy reforms implemented", ar: "تنفيذ إصلاحات دعم الوقود" },
      { en: "Security challenges persist", ar: "استمرار التحديات الأمنية" },
      { en: "Poverty continues rising", ar: "استمرار ارتفاع الفقر" }
    ]
  },
  2014: {
    titleEn: "Houthi Takeover",
    titleAr: "الاستيلاء الحوثي",
    gdp: 43.2,
    inflation: 8.2,
    poverty: 50.0,
    population: 25.2,
    events: [
      { date: "2014-09-21", titleEn: "Houthis Seize Sana'a", titleAr: "الحوثيون يسيطرون على صنعاء", category: "war" },
      { date: "2014-09-21", titleEn: "Peace and National Partnership Agreement", titleAr: "اتفاق السلم والشراكة الوطنية", category: "political" }
    ],
    keyFacts: [
      { en: "Houthi forces take control of capital", ar: "قوات الحوثي تسيطر على العاصمة" },
      { en: "Government authority collapses", ar: "انهيار سلطة الحكومة" },
      { en: "Economic crisis begins", ar: "بداية الأزمة الاقتصادية" }
    ]
  },
  2015: {
    titleEn: "War Begins",
    titleAr: "بداية الحرب",
    gdp: 37.7,
    inflation: 12.0,
    poverty: 62.0,
    population: 25.5,
    events: [
      { date: "2015-03-26", titleEn: "Operation Decisive Storm", titleAr: "عملية عاصفة الحزم", category: "war" },
      { date: "2015-09-04", titleEn: "Marib Retaken by Government", titleAr: "استعادة مأرب من قبل الحكومة", category: "war" }
    ],
    keyFacts: [
      { en: "Saudi-led coalition intervention begins", ar: "بداية تدخل التحالف بقيادة السعودية" },
      { en: "GDP contracts by 13%", ar: "انكماش الناتج المحلي بنسبة 13%" },
      { en: "Humanitarian crisis escalates", ar: "تصاعد الأزمة الإنسانية" }
    ]
  },
  2016: {
    titleEn: "Central Bank Split",
    titleAr: "انقسام البنك المركزي",
    gdp: 27.3,
    inflation: 5.0,
    poverty: 65.0,
    population: 26.0,
    events: [
      { date: "2016-09-18", titleEn: "CBY Moved to Aden", titleAr: "نقل البنك المركزي إلى عدن", category: "economic" },
      { date: "2016-10-08", titleEn: "Funeral Hall Airstrike", titleAr: "غارة قاعة العزاء", category: "war" }
    ],
    keyFacts: [
      { en: "Central Bank headquarters relocated to Aden", ar: "نقل مقر البنك المركزي إلى عدن" },
      { en: "Dual banking system emerges", ar: "ظهور نظام مصرفي مزدوج" },
      { en: "Currency divergence begins", ar: "بداية تباعد العملة" }
    ]
  },
  2017: {
    titleEn: "Cholera & Famine",
    titleAr: "الكوليرا والمجاعة",
    gdp: 25.4,
    inflation: 24.7,
    poverty: 70.0,
    population: 26.5,
    events: [
      { date: "2017-04-27", titleEn: "Cholera Outbreak", titleAr: "تفشي الكوليرا", category: "humanitarian" },
      { date: "2017-11-04", titleEn: "Saleh-Houthi Alliance Breaks", titleAr: "انهيار تحالف صالح-الحوثي", category: "political" },
      { date: "2017-12-04", titleEn: "Saleh Killed", titleAr: "مقتل صالح", category: "political" }
    ],
    keyFacts: [
      { en: "Over 1 million cholera cases", ar: "أكثر من مليون حالة كوليرا" },
      { en: "Famine warnings issued", ar: "إصدار تحذيرات من المجاعة" },
      { en: "Inflation reaches 24.7%", ar: "التضخم يصل إلى 24.7%" }
    ]
  },
  2018: {
    titleEn: "Currency Collapse",
    titleAr: "انهيار العملة",
    gdp: 26.9,
    inflation: 41.8,
    poverty: 75.0,
    population: 27.0,
    events: [
      { date: "2018-06-13", titleEn: "Hodeidah Battle Begins", titleAr: "بداية معركة الحديدة", category: "war" },
      { date: "2018-09-01", titleEn: "Rial Collapses", titleAr: "انهيار الريال", category: "economic" },
      { date: "2018-12-13", titleEn: "Stockholm Agreement", titleAr: "اتفاق ستوكهولم", category: "political" }
    ],
    keyFacts: [
      { en: "Rial depreciates 30% to 600 YER/USD", ar: "انخفاض الريال 30% إلى 600 ريال/دولار" },
      { en: "Battle for Hodeidah port", ar: "معركة ميناء الحديدة" },
      { en: "Stockholm Agreement brings partial ceasefire", ar: "اتفاق ستوكهولم يجلب وقف إطلاق نار جزئي" }
    ]
  },
  2019: {
    titleEn: "Southern Tensions",
    titleAr: "التوترات الجنوبية",
    gdp: 26.9,
    inflation: 10.0,
    poverty: 77.0,
    population: 27.5,
    events: [
      { date: "2019-08-10", titleEn: "STC Seizes Aden", titleAr: "المجلس الانتقالي يسيطر على عدن", category: "political" },
      { date: "2019-11-05", titleEn: "Riyadh Agreement", titleAr: "اتفاق الرياض", category: "political" }
    ],
    keyFacts: [
      { en: "Southern Transitional Council seizes Aden", ar: "المجلس الانتقالي الجنوبي يسيطر على عدن" },
      { en: "Riyadh Agreement signed", ar: "توقيع اتفاق الرياض" },
      { en: "Economic stagnation continues", ar: "استمرار الركود الاقتصادي" }
    ]
  },
  2020: {
    titleEn: "COVID-19 & Oil Collapse",
    titleAr: "كوفيد-19 وانهيار النفط",
    gdp: 25.4,
    inflation: 20.0,
    poverty: 79.0,
    population: 28.0,
    events: [
      { date: "2020-04-10", titleEn: "First COVID-19 Case", titleAr: "أول حالة كوفيد-19", category: "humanitarian" },
      { date: "2020-04-20", titleEn: "Oil Prices Collapse", titleAr: "انهيار أسعار النفط", category: "economic" }
    ],
    keyFacts: [
      { en: "COVID-19 pandemic reaches Yemen", ar: "جائحة كوفيد-19 تصل إلى اليمن" },
      { en: "Oil prices collapse globally", ar: "انهيار أسعار النفط عالمياً" },
      { en: "Remittances decline sharply", ar: "انخفاض حاد في التحويلات" }
    ]
  },
  2021: {
    titleEn: "Biden Policy Shift",
    titleAr: "تحول سياسة بايدن",
    gdp: 25.3,
    inflation: 18.0,
    poverty: 80.0,
    population: 28.5,
    events: [
      { date: "2021-02-04", titleEn: "Biden Ends Support for Offensive Operations", titleAr: "بايدن ينهي الدعم للعمليات الهجومية", category: "international" },
      { date: "2021-02-10", titleEn: "Marib Battle Intensifies", titleAr: "تصعيد معركة مأرب", category: "war" }
    ],
    keyFacts: [
      { en: "US policy shift under Biden", ar: "تحول السياسة الأمريكية في عهد بايدن" },
      { en: "Battle for Marib intensifies", ar: "تصعيد معركة مأرب" },
      { en: "Poverty reaches 80%", ar: "الفقر يصل إلى 80%" }
    ]
  },
  2022: {
    titleEn: "Truce & Partial Recovery",
    titleAr: "الهدنة والتعافي الجزئي",
    gdp: 27.6,
    inflation: 15.0,
    poverty: 78.0,
    population: 29.0,
    events: [
      { date: "2022-04-02", titleEn: "Nationwide Truce Begins", titleAr: "بداية الهدنة على مستوى البلاد", category: "political" },
      { date: "2022-10-02", titleEn: "Truce Expires", titleAr: "انتهاء الهدنة", category: "political" }
    ],
    keyFacts: [
      { en: "Two-month truce brings relative calm", ar: "هدنة شهرين تجلب هدوءاً نسبياً" },
      { en: "Economic activity increases slightly", ar: "زيادة طفيفة في النشاط الاقتصادي" },
      { en: "Remittances recover partially", ar: "تعافي جزئي للتحويلات" }
    ]
  },
  2023: {
    titleEn: "Saudi-Houthi Talks",
    titleAr: "محادثات سعودية-حوثية",
    gdp: 29.2,
    inflation: 25.0,
    poverty: 77.0,
    population: 29.5,
    events: [
      { date: "2023-04-09", titleEn: "Direct Saudi-Houthi Negotiations", titleAr: "مفاوضات سعودية-حوثية مباشرة", category: "political" },
      { date: "2023-10-07", titleEn: "Gaza War Impact", titleAr: "تأثير حرب غزة", category: "international" }
    ],
    keyFacts: [
      { en: "Direct Saudi-Houthi negotiations begin", ar: "بداية مفاوضات سعودية-حوثية مباشرة" },
      { en: "Gaza war affects regional dynamics", ar: "حرب غزة تؤثر على الديناميكيات الإقليمية" },
      { en: "Economic fragmentation persists", ar: "استمرار التشرذم الاقتصادي" }
    ]
  },
  2024: {
    titleEn: "Humanitarian Funding Crisis",
    titleAr: "أزمة التمويل الإنساني",
    gdp: 30.1,
    inflation: 28.0,
    poverty: 76.0,
    population: 30.0,
    events: [
      { date: "2024-01-01", titleEn: "Aid Funding Shortfall", titleAr: "نقص تمويل المساعدات", category: "humanitarian" },
      { date: "2024-06-01", titleEn: "Red Sea Tensions", titleAr: "توترات البحر الأحمر", category: "international" }
    ],
    keyFacts: [
      { en: "Only 19% of humanitarian funding secured", ar: "تأمين 19% فقط من التمويل الإنساني" },
      { en: "Red Sea shipping disruptions", ar: "اضطرابات الشحن في البحر الأحمر" },
      { en: "Food insecurity affects 17M people", ar: "انعدام الأمن الغذائي يؤثر على 17 مليون شخص" }
    ]
  },
  2025: {
    titleEn: "Current Situation",
    titleAr: "الوضع الحالي",
    gdp: 31.2,
    inflation: 30.0,
    poverty: 75.0,
    population: 30.5,
    events: [
      { date: "2025-01-01", titleEn: "Rial Depreciation Continues", titleAr: "استمرار انخفاض الريال", category: "economic" }
    ],
    keyFacts: [
      { en: "Rial at 1,800 YER/USD (30% annual depreciation)", ar: "الريال عند 1,800 ريال/دولار (انخفاض سنوي 30%)" },
      { en: "Dual banking system entrenched", ar: "ترسخ النظام المصرفي المزدوج" },
      { en: "Humanitarian needs remain critical", ar: "الاحتياجات الإنسانية لا تزال حرجة" }
    ]
  }
};

export default function YearExplorer() {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [language, setLanguage] = useState<"en" | "ar">("ar");
  
  const yearData = YEARS_DATA[selectedYear as keyof typeof YEARS_DATA];
  const years = Object.keys(YEARS_DATA).map(Number).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-primary-foreground py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold mb-2">
                {language === "ar" ? "مستكشف السنوات" : "Year-by-Year Explorer"}
              </h1>
              <p className="text-lg opacity-90">
                {language === "ar" 
                  ? "استكشف كل عام من 2010 إلى 2025 بالتفصيل" 
                  : "Explore every year from 2010 to 2025 in detail"}
              </p>
            </div>
          </div>
          
          {/* Language Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
            className="bg-white/10 hover:bg-white/20 border-white/30"
          >
            {language === "ar" ? "English" : "العربية"}
          </Button>
        </div>
      </div>

      <div className="container py-8">
        {/* Year Selector */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {language === "ar" ? "اختر السنة" : "Select Year"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? "default" : "outline"}
                  onClick={() => setSelectedYear(year)}
                  className="min-w-[80px]"
                >
                  {year}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Year Overview */}
        <Card className="mb-8 bg-gradient-to-br from-card to-accent/5">
          <CardHeader>
            <CardTitle className="text-3xl">
              {selectedYear} - {language === "ar" ? yearData.titleAr : yearData.titleEn}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-background/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="font-semibold">
                    {language === "ar" ? "الناتج المحلي" : "GDP"}
                  </span>
                </div>
                <p className="text-2xl font-bold">${yearData.gdp}B</p>
              </div>
              
              <div className="p-4 bg-background/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-destructive" />
                  <span className="font-semibold">
                    {language === "ar" ? "التضخم" : "Inflation"}
                  </span>
                </div>
                <p className="text-2xl font-bold">{yearData.inflation}%</p>
              </div>
              
              <div className="p-4 bg-background/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold">
                    {language === "ar" ? "الفقر" : "Poverty"}
                  </span>
                </div>
                <p className="text-2xl font-bold">{yearData.poverty}%</p>
              </div>
              
              <div className="p-4 bg-background/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold">
                    {language === "ar" ? "السكان" : "Population"}
                  </span>
                </div>
                <p className="text-2xl font-bold">{yearData.population}M</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for Events and Facts */}
        <Tabs defaultValue="events" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="events">
              {language === "ar" ? "الأحداث الرئيسية" : "Major Events"}
            </TabsTrigger>
            <TabsTrigger value="facts">
              {language === "ar" ? "حقائق رئيسية" : "Key Facts"}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="events" className="space-y-4">
            {yearData.events.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        {language === "ar" ? event.titleAr : event.titleEn}
                      </CardTitle>
                      <CardDescription>{event.date}</CardDescription>
                    </div>
                    <Badge variant={
                      event.category === "war" ? "destructive" :
                      event.category === "economic" ? "default" :
                      event.category === "humanitarian" ? "secondary" :
                      "outline"
                    }>
                      {event.category}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="facts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === "ar" ? "حقائق رئيسية عن " + selectedYear : "Key Facts About " + selectedYear}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {yearData.keyFacts.map((fact, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">
                        {language === "ar" ? fact.ar : fact.en}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
