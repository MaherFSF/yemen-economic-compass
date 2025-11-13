import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, FileText, Calendar, TrendingDown, AlertTriangle, Search, Shield } from "lucide-react";

interface Decision {
  id: string;
  date: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  type: "monetary" | "regulatory" | "currency" | "banking" | "taxation";
  impact: "high" | "medium" | "low";
  summary: string;
  summaryAr: string;
  details: string[];
  detailsAr: string[];
  economicImpact: string;
  economicImpactAr: string;
  legitimacy: "disputed" | "unrecognized";
}

const decisions: Decision[] = [
  {
    id: "cby-sanaa-2025-09",
    date: "September 2025",
    title: "Mandatory Currency Exchange for Businesses",
    titleAr: "إلزام الشركات بتبديل العملة",
    category: "Currency Control",
    categoryAr: "ضوابط العملة",
    type: "currency",
    impact: "high",
    legitimacy: "disputed",
    summary: "CBY-Sana'a mandated all businesses to exchange foreign currency revenues through official channels at fixed rates",
    summaryAr: "ألزم البنك المركزي في صنعاء جميع الشركات بتبديل إيرادات العملات الأجنبية عبر القنوات الرسمية بأسعار ثابتة",
    details: [
      "Mandatory exchange of 100% foreign currency revenues",
      "Fixed exchange rate significantly below market rate",
      "Penalties for non-compliance up to 10 million YER",
      "Applies to telecom, fuel, and import companies",
      "Monthly reporting requirements"
    ],
    detailsAr: [
      "تبديل إلزامي لـ 100٪ من إيرادات العملات الأجنبية",
      "سعر صرف ثابت أقل بكثير من سعر السوق",
      "عقوبات على عدم الامتثال تصل إلى 10 مليون ريال",
      "ينطبق على شركات الاتصالات والوقود والاستيراد",
      "متطلبات إبلاغ شهرية"
    ],
    economicImpact: "Deepened parallel market, increased business costs, drove companies to informal channels, reduced government revenue collection efficiency",
    economicImpactAr: "عمق السوق الموازي، وزاد تكاليف الأعمال، ودفع الشركات إلى القنوات غير الرسمية، وقلل كفاءة تحصيل الإيرادات الحكومية"
  },
  {
    id: "cby-sanaa-2025-07",
    date: "July 2025",
    title: "New Banking Fees and Taxes",
    titleAr: "رسوم وضرائب مصرفية جديدة",
    category: "Taxation",
    categoryAr: "ضرائب",
    type: "taxation",
    impact: "high",
    legitimacy: "unrecognized",
    summary: "Introduction of multiple new fees on banking transactions and services",
    summaryAr: "فرض رسوم جديدة متعددة على المعاملات والخدمات المصرفية",
    details: [
      "5% fee on all wire transfers",
      "2% tax on ATM withdrawals",
      "Monthly account maintenance fees",
      "Transaction limits on accounts",
      "Mandatory documentation for large transactions"
    ],
    detailsAr: [
      "رسوم 5٪ على جميع التحويلات البنكية",
      "ضريبة 2٪ على السحوبات من أجهزة الصراف الآلي",
      "رسوم صيانة حساب شهرية",
      "حدود المعاملات على الحسابات",
      "وثائق إلزامية للمعاملات الكبيرة"
    ],
    economicImpact: "Increased transaction costs, reduced banking sector usage, accelerated shift to cash and informal channels, burdened businesses and households",
    economicImpactAr: "زيادة تكاليف المعاملات، وتقليل استخدام القطاع المصرفي، وتسريع التحول إلى النقد والقنوات غير الرسمية، وإثقال كاهل الشركات والأسر"
  },
  {
    id: "cby-sanaa-2025-05",
    date: "May 2025",
    title: "Prohibition of New Banknotes Issued by CBY-Aden",
    titleAr: "حظر العملات الجديدة الصادرة عن البنك المركزي في عدن",
    category: "Currency War",
    categoryAr: "حرب العملة",
    type: "currency",
    impact: "high",
    legitimacy: "disputed",
    summary: "CBY-Sana'a declared new banknotes issued by CBY-Aden illegal and prohibited their circulation",
    summaryAr: "أعلن البنك المركزي في صنعاء أن العملات الجديدة الصادرة عن البنك المركزي في عدن غير قانونية وحظر تداولها",
    details: [
      "Ban on accepting new Aden-issued banknotes",
      "Confiscation orders for new notes",
      "Penalties for businesses accepting them",
      "Public campaign against new currency",
      "Intensified currency fragmentation"
    ],
    detailsAr: [
      "حظر قبول الأوراق النقدية الجديدة الصادرة عن عدن",
      "أوامر مصادرة للأوراق الجديدة",
      "عقوبات على الشركات التي تقبلها",
      "حملة عامة ضد العملة الجديدة",
      "تفتت عملة مكثف"
    ],
    economicImpact: "Deepened monetary fragmentation, created dual currency zones, complicated trade between regions, increased transaction costs",
    economicImpactAr: "عمق التفتت النقدي، وخلق مناطق عملة مزدوجة، وعقد التجارة بين المناطق، وزاد تكاليف المعاملات"
  },
  {
    id: "cby-sanaa-2025-03",
    date: "March 2025",
    title: "Telecom Companies Revenue Seizure",
    titleAr: "الاستيلاء على إيرادات شركات الاتصالات",
    category: "Revenue Extraction",
    categoryAr: "استخراج الإيرادات",
    type: "taxation",
    impact: "high",
    legitimacy: "unrecognized",
    summary: "CBY-Sana'a ordered direct seizure of telecom companies' foreign currency revenues",
    summaryAr: "أمر البنك المركزي في صنعاء بالاستيلاء المباشر على إيرادات شركات الاتصالات بالعملات الأجنبية",
    details: [
      "Direct access to telecom company accounts",
      "Seizure of dollar-denominated revenues",
      "Forced conversion at unfavorable rates",
      "Threats of license suspension",
      "Impact on MTN, Yemen Mobile, and others"
    ],
    detailsAr: [
      "الوصول المباشر إلى حسابات شركات الاتصالات",
      "الاستيلاء على الإيرادات بالدولار",
      "تحويل قسري بأسعار غير مواتية",
      "تهديدات بتعليق الترخيص",
      "تأثير على MTN واليمن الدولية وغيرها"
    ],
    economicImpact: "Undermined business confidence, reduced foreign investment, created operational challenges for telecom sector, limited service expansion",
    economicImpactAr: "قوض ثقة الأعمال، وقلل الاستثمار الأجنبي، وخلق تحديات تشغيلية لقطاع الاتصالات، وحد من توسع الخدمات"
  },
  {
    id: "cby-sanaa-2025-01",
    date: "January 2025",
    title: "Banking Sector Restructuring Decree",
    titleAr: "مرسوم إعادة هيكلة القطاع المصرفي",
    category: "Banking Control",
    categoryAr: "السيطرة المصرفية",
    type: "banking",
    impact: "high",
    legitimacy: "disputed",
    summary: "CBY-Sana'a announced restructuring of banks operating in Houthi-controlled areas",
    summaryAr: "أعلن البنك المركزي في صنعاء إعادة هيكلة البنوك العاملة في المناطق الخاضعة للحوثيين",
    details: [
      "Appointment of Houthi-aligned management",
      "Severing ties with CBY-Aden",
      "New reporting requirements",
      "Control over bank liquidity",
      "Restrictions on international transactions"
    ],
    detailsAr: [
      "تعيين إدارة موالية للحوثيين",
      "قطع العلاقات مع البنك المركزي في عدن",
      "متطلبات إبلاغ جديدة",
      "السيطرة على سيولة البنوك",
      "قيود على المعاملات الدولية"
    ],
    economicImpact: "Accelerated banking sector fragmentation, loss of correspondent banking relationships, reduced access to international financial system",
    economicImpactAr: "تسريع تفتت القطاع المصرفي، وفقدان علاقات المراسلة المصرفية، وتقليل الوصول إلى النظام المالي الدولي"
  },
  {
    id: "cby-sanaa-2024-11",
    date: "November 2024",
    title: "Import Restrictions and Licensing",
    titleAr: "قيود الاستيراد والترخيص",
    category: "Trade Control",
    categoryAr: "ضوابط التجارة",
    type: "regulatory",
    impact: "high",
    legitimacy: "disputed",
    summary: "New import licensing system requiring CBY-Sana'a approval for foreign currency allocation",
    summaryAr: "نظام ترخيص استيراد جديد يتطلب موافقة البنك المركزي في صنعاء لتخصيص العملات الأجنبية",
    details: [
      "Mandatory import licenses",
      "CBY-Sana'a approval for FX allocation",
      "Prioritization of essential goods",
      "Delays in processing",
      "Corruption and rent-seeking opportunities"
    ],
    detailsAr: [
      "تراخيص استيراد إلزامية",
      "موافقة البنك المركزي في صنعاء لتخصيص النقد الأجنبي",
      "إعطاء الأولوية للسلع الأساسية",
      "تأخيرات في المعالجة",
      "فرص الفساد وطلب الريع"
    ],
    economicImpact: "Reduced import volumes, increased prices, created supply shortages, facilitated corruption, burdened private sector",
    economicImpactAr: "تقليل أحجام الاستيراد، وزيادة الأسعار، وخلق نقص في الإمدادات، وتسهيل الفساد، وإثقال كاهل القطاع الخاص"
  },
  {
    id: "cby-sanaa-2024-09",
    date: "September 2024",
    title: "Salary Payment Restrictions",
    titleAr: "قيود دفع الرواتب",
    category: "Fiscal Control",
    categoryAr: "ضوابط مالية",
    type: "banking",
    impact: "high",
    legitimacy: "unrecognized",
    summary: "CBY-Sana'a imposed restrictions on salary payments for public sector employees",
    summaryAr: "فرض البنك المركزي في صنعاء قيوداً على دفع رواتب موظفي القطاع العام",
    details: [
      "Partial salary payments",
      "Delays of 3-6 months",
      "Priority for security and military personnel",
      "Exclusion of certain employee categories",
      "Increased reliance on humanitarian aid"
    ],
    detailsAr: [
      "دفعات رواتب جزئية",
      "تأخيرات من 3-6 أشهر",
      "أولوية للأمن والعسكريين",
      "استبعاد فئات معينة من الموظفين",
      "زيادة الاعتماد على المساعدات الإنسانية"
    ],
    economicImpact: "Deepened humanitarian crisis, reduced household purchasing power, increased poverty, undermined public services",
    economicImpactAr: "تعميق الأزمة الإنسانية، وتقليل القوة الشرائية للأسر، وزيادة الفقر، وتقويض الخدمات العامة"
  },
  {
    id: "cby-sanaa-2024-07",
    date: "July 2024",
    title: "Parallel Exchange Rate System",
    titleAr: "نظام سعر صرف موازٍ",
    category: "Currency Management",
    categoryAr: "إدارة العملة",
    type: "currency",
    impact: "high",
    legitimacy: "disputed",
    summary: "CBY-Sana'a established official exchange rate significantly different from market rate",
    summaryAr: "أنشأ البنك المركزي في صنعاء سعر صرف رسمي يختلف بشكل كبير عن سعر السوق",
    details: [
      "Official rate: 530 YER/USD",
      "Market rate: 1,600+ YER/USD",
      "Mandatory use for government transactions",
      "Penalties for using market rates",
      "Widened parallel market premium"
    ],
    detailsAr: [
      "السعر الرسمي: 530 ريال/دولار",
      "سعر السوق: 1,600+ ريال/دولار",
      "استخدام إلزامي للمعاملات الحكومية",
      "عقوبات على استخدام أسعار السوق",
      "توسيع علاوة السوق الموازي"
    ],
    economicImpact: "Created massive arbitrage opportunities, facilitated corruption, distorted resource allocation, undermined economic efficiency",
    economicImpactAr: "خلق فرص مراجحة ضخمة، وسهل الفساد، وشوه تخصيص الموارد، وقوض الكفاءة الاقتصادية"
  }
];

export default function CBYSanaaTracker() {
  const [language, setLanguage] = useState<"en" | "ar">("ar");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImpact, setSelectedImpact] = useState("all");

  const filteredDecisions = decisions.filter(decision => {
    const matchesSearch = language === "en"
      ? decision.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        decision.summary.toLowerCase().includes(searchQuery.toLowerCase())
      : decision.titleAr.includes(searchQuery) ||
        decision.summaryAr.includes(searchQuery);
    
    const matchesCategory = selectedCategory === "all" || decision.type === selectedCategory;
    const matchesImpact = selectedImpact === "all" || decision.impact === selectedImpact;
    
    return matchesSearch && matchesCategory && matchesImpact;
  });

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "monetary": return "bg-blue-100 text-blue-800";
      case "regulatory": return "bg-purple-100 text-purple-800";
      case "currency": return "bg-emerald-100 text-emerald-800";
      case "banking": return "bg-indigo-100 text-indigo-800";
      case "taxation": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getLegitimacyBadge = (legitimacy: string) => {
    return legitimacy === "disputed" 
      ? { text: language === "ar" ? "محل نزاع" : "Disputed", color: "bg-red-100 text-red-800 border-red-300" }
      : { text: language === "ar" ? "غير معترف به" : "Unrecognized", color: "bg-red-100 text-red-800 border-red-300" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-16">
        <div className="container">
          <div className="flex justify-between items-start mb-6">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <AlertTriangle className="w-3 h-3 mr-1" />
                {language === "ar" ? "البنك المركزي - صنعاء (الحوثي)" : "Central Bank - Sana'a (Houthi)"}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {language === "ar" ? "متتبع قرارات البنك المركزي - صنعاء" : "CBY-Sana'a Decision Tracker"}
              </h1>
              <p className="text-xl text-red-100 max-w-3xl">
                {language === "ar" 
                  ? "توثيق القرارات والسياسات الصادرة عن البنك المركزي في صنعاء (تحت سيطرة الحوثيين) - غير معترف بها دولياً - مع تحليل الأثر الاقتصادي والإنساني"
                  : "Documentation of decisions and policies issued by the Central Bank in Sana'a (under Houthi control) - internationally unrecognized - with economic and humanitarian impact analysis"}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              {language === "en" ? "العربية" : "English"}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <FileText className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">{decisions.length}</div>
                <div className="text-red-100">{language === "ar" ? "قرار موثق" : "Documented Decisions"}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <TrendingDown className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">{decisions.filter(d => d.impact === "high").length}</div>
                <div className="text-red-100">{language === "ar" ? "قرار عالي التأثير" : "High Impact Decisions"}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <AlertTriangle className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">{decisions.filter(d => d.type === "taxation").length}</div>
                <div className="text-red-100">{language === "ar" ? "قرار ضريبي" : "Taxation Decisions"}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Shield className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">{decisions.filter(d => d.legitimacy === "unrecognized").length}</div>
                <div className="text-red-100">{language === "ar" ? "غير معترف به" : "Unrecognized"}</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 p-4 bg-red-900/30 border border-red-700/50 rounded-lg">
            <p className="text-sm text-red-100">
              <strong>{language === "ar" ? "تنويه:" : "Disclaimer:"}</strong>{" "}
              {language === "ar" 
                ? "القرارات المدرجة هنا صادرة عن البنك المركزي في صنعاء تحت سيطرة جماعة الحوثي المسلحة وغير معترف بها من قبل الحكومة اليمنية الشرعية والمجتمع الدولي. يتم توثيقها لأغراض البحث والتحليل."
                : "The decisions listed here are issued by the Central Bank in Sana'a under Houthi armed group control and are not recognized by the Internationally Recognized Government of Yemen or the international community. They are documented for research and analysis purposes."}
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              {language === "ar" ? "تصفية القرارات" : "Filter Decisions"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder={language === "ar" ? "بحث في القرارات..." : "Search decisions..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder={language === "ar" ? "جميع الفئات" : "All Categories"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === "ar" ? "جميع الفئات" : "All Categories"}</SelectItem>
                  <SelectItem value="monetary">{language === "ar" ? "سياسة نقدية" : "Monetary Policy"}</SelectItem>
                  <SelectItem value="regulatory">{language === "ar" ? "تنظيمي" : "Regulatory"}</SelectItem>
                  <SelectItem value="currency">{language === "ar" ? "عملة" : "Currency"}</SelectItem>
                  <SelectItem value="banking">{language === "ar" ? "مصرفي" : "Banking"}</SelectItem>
                  <SelectItem value="taxation">{language === "ar" ? "ضرائب" : "Taxation"}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedImpact} onValueChange={setSelectedImpact}>
                <SelectTrigger>
                  <SelectValue placeholder={language === "ar" ? "جميع مستويات التأثير" : "All Impact Levels"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === "ar" ? "جميع المستويات" : "All Levels"}</SelectItem>
                  <SelectItem value="high">{language === "ar" ? "تأثير عالي" : "High Impact"}</SelectItem>
                  <SelectItem value="medium">{language === "ar" ? "تأثير متوسط" : "Medium Impact"}</SelectItem>
                  <SelectItem value="low">{language === "ar" ? "تأثير منخفض" : "Low Impact"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Decisions List */}
      <div className="container pb-16">
        <div className="space-y-6">
          {filteredDecisions.map(decision => {
            const legitimacyBadge = getLegitimacyBadge(decision.legitimacy);
            return (
              <Card key={decision.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {decision.date}
                        </Badge>
                        <Badge className={getTypeColor(decision.type)}>
                          {language === "ar" ? decision.categoryAr : decision.category}
                        </Badge>
                        <Badge variant="outline" className={getImpactColor(decision.impact)}>
                          {language === "ar" ? `تأثير ${decision.impact === "high" ? "عالي" : decision.impact === "medium" ? "متوسط" : "منخفض"}` : `${decision.impact} impact`}
                        </Badge>
                        <Badge variant="outline" className={legitimacyBadge.color}>
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          {legitimacyBadge.text}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">
                        {language === "ar" ? decision.titleAr : decision.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {language === "ar" ? decision.summaryAr : decision.summary}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        {language === "ar" ? "تفاصيل القرار" : "Decision Details"}
                      </h4>
                      <ul className="space-y-1">
                        {(language === "ar" ? decision.detailsAr : decision.details).map((detail, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-red-600 mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2 text-red-900">
                        <TrendingDown className="w-4 h-4" />
                        {language === "ar" ? "الأثر الاقتصادي والإنساني" : "Economic & Humanitarian Impact"}
                      </h4>
                      <p className="text-sm text-red-900">
                        {language === "ar" ? decision.economicImpactAr : decision.economicImpact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredDecisions.length === 0 && (
          <Card>
            <CardContent className="py-16 text-center">
              <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">
                {language === "ar" ? "لم يتم العثور على قرارات" : "No decisions found"}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
