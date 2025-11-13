import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, FileText, Calendar, TrendingUp, AlertCircle, Search, ExternalLink } from "lucide-react";

interface Decision {
  id: string;
  date: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  type: "monetary" | "regulatory" | "currency" | "banking" | "sanctions";
  impact: "high" | "medium" | "low";
  summary: string;
  summaryAr: string;
  details: string[];
  detailsAr: string[];
  economicImpact: string;
  economicImpactAr: string;
  sourceUrl?: string;
}

const decisions: Decision[] = [
  {
    id: "cby-aden-2025-10",
    date: "October 2025",
    title: "Central Bank Reforms CBY Aden in Aden",
    titleAr: "إصلاحات البنك المركزي في عدن",
    category: "Institutional Reform",
    categoryAr: "إصلاح مؤسسي",
    type: "regulatory",
    impact: "high",
    summary: "Major institutional reforms announced by CBY-Aden following IMF Article IV consultations",
    summaryAr: "إصلاحات مؤسسية كبرى أعلنها البنك المركزي في عدن بعد مشاورات المادة الرابعة مع صندوق النقد الدولي",
    details: [
      "Strengthening monetary policy framework",
      "Enhancing banking supervision",
      "Improving foreign exchange management",
      "Modernizing payment systems",
      "Combating money laundering"
    ],
    detailsAr: [
      "تعزيز إطار السياسة النقدية",
      "تحسين الرقابة المصرفية",
      "تحسين إدارة النقد الأجنبي",
      "تحديث أنظمة الدفع",
      "مكافحة غسل الأموال"
    ],
    economicImpact: "Expected to improve monetary stability and restore confidence in the banking sector under IRG control",
    economicImpactAr: "من المتوقع أن يحسن الاستقرار النقدي ويعيد الثقة في القطاع المصرفي تحت سيطرة الحكومة الشرعية",
    sourceUrl: "https://www.imf.org/en/news/articles/2025/10/09/imf-cs-yemen-2025-imf-article-iv-mission"
  },
  {
    id: "cby-aden-2025-08",
    date: "August 2025",
    title: "Suspension of 6 Banks Operating in Houthi Areas",
    titleAr: "تعليق 6 بنوك تعمل في مناطق الحوثيين",
    category: "Banking Regulation",
    categoryAr: "تنظيم مصرفي",
    type: "banking",
    impact: "high",
    summary: "CBY-Aden suspended licenses of 6 banks operating in Houthi-controlled areas due to compliance violations",
    summaryAr: "علق البنك المركزي في عدن تراخيص 6 بنوك تعمل في المناطق الخاضعة للحوثيين بسبب انتهاكات الامتثال",
    details: [
      "Banks failed to comply with CBY-Aden directives",
      "Continued operations under Houthi CBY-Sana'a",
      "Violation of anti-money laundering regulations",
      "Suspension of correspondent banking relationships",
      "Assets freeze measures implemented"
    ],
    detailsAr: [
      "فشلت البنوك في الامتثال لتوجيهات البنك المركزي في عدن",
      "استمرار العمليات تحت البنك المركزي الحوثي في صنعاء",
      "انتهاك لوائح مكافحة غسل الأموال",
      "تعليق علاقات المراسلة المصرفية",
      "تنفيذ تدابير تجميد الأصول"
    ],
    economicImpact: "Deepened financial fragmentation, restricted banking services in Houthi areas, increased reliance on informal channels",
    economicImpactAr: "عمق التفتت المالي، وقيد الخدمات المصرفية في مناطق الحوثيين، وزاد الاعتماد على القنوات غير الرسمية",
    sourceUrl: "https://www.worldbank.org/en/country/yemen"
  },
  {
    id: "cby-aden-2025-06",
    date: "June 2025",
    title: "New Exchange Rate Policy Framework",
    titleAr: "إطار جديد لسياسة سعر الصرف",
    category: "Monetary Policy",
    categoryAr: "سياسة نقدية",
    type: "currency",
    impact: "high",
    summary: "CBY-Aden announced new managed float exchange rate system to stabilize the Yemeni Rial",
    summaryAr: "أعلن البنك المركزي في عدن نظام سعر صرف عائم مُدار جديد لتثبيت الريال اليمني",
    details: [
      "Transition from fixed to managed float regime",
      "Daily reference rate publication",
      "Intervention mechanism to prevent excessive volatility",
      "Coordination with commercial banks",
      "Foreign exchange auction system"
    ],
    detailsAr: [
      "الانتقال من نظام ثابت إلى نظام عائم مُدار",
      "نشر سعر مرجعي يومي",
      "آلية تدخل لمنع التقلبات المفرطة",
      "التنسيق مع البنوك التجارية",
      "نظام مزاد النقد الأجنبي"
    ],
    economicImpact: "Aimed at reducing parallel market premium, improving price stability, and attracting remittances through formal channels",
    economicImpactAr: "يهدف إلى تقليل علاوة السوق الموازي، وتحسين استقرار الأسعار، وجذب التحويلات عبر القنوات الرسمية",
    sourceUrl: "https://www.worldbank.org/en/country/yemen"
  },
  {
    id: "cby-aden-2025-04",
    date: "April 2025",
    title: "Strengthened Anti-Money Laundering Framework",
    titleAr: "تعزيز إطار مكافحة غسل الأموال",
    category: "Compliance & Regulation",
    categoryAr: "الامتثال والتنظيم",
    type: "regulatory",
    impact: "medium",
    summary: "New AML/CFT regulations aligned with FATF standards to combat illicit financial flows",
    summaryAr: "لوائح جديدة لمكافحة غسل الأموال وتمويل الإرهاب متوافقة مع معايير مجموعة العمل المالي لمكافحة التدفقات المالية غير المشروعة",
    details: [
      "Enhanced customer due diligence requirements",
      "Beneficial ownership transparency",
      "Suspicious transaction reporting obligations",
      "Sanctions screening mechanisms",
      "Penalties for non-compliance"
    ],
    detailsAr: [
      "متطلبات معززة للعناية الواجبة بالعملاء",
      "شفافية الملكية المستفيدة",
      "التزامات الإبلاغ عن المعاملات المشبوهة",
      "آليات فحص العقوبات",
      "عقوبات على عدم الامتثال"
    ],
    economicImpact: "Improved compliance with international standards, reduced risk of correspondent banking de-risking, enhanced financial integrity",
    economicImpactAr: "تحسين الامتثال للمعايير الدولية، وتقليل مخاطر إلغاء المخاطر المصرفية المراسلة، وتعزيز النزاهة المالية",
    sourceUrl: "https://www.imf.org/en/countries/yem"
  },
  {
    id: "cby-aden-2025-02",
    date: "February 2025",
    title: "Banking Sector Recapitalization Plan",
    titleAr: "خطة إعادة رسملة القطاع المصرفي",
    category: "Banking Stability",
    categoryAr: "استقرار مصرفي",
    type: "banking",
    impact: "high",
    summary: "CBY-Aden launched comprehensive plan to recapitalize undercapitalized banks",
    summaryAr: "أطلق البنك المركزي في عدن خطة شاملة لإعادة رسملة البنوك ذات رأس المال غير الكافي",
    details: [
      "Minimum capital requirements increased",
      "Timeline for compliance: 24 months",
      "Merger and acquisition facilitation",
      "Government support for systemically important banks",
      "Asset quality review mandated"
    ],
    detailsAr: [
      "زيادة متطلبات رأس المال الأدنى",
      "الجدول الزمني للامتثال: 24 شهراً",
      "تسهيل عمليات الاندماج والاستحواذ",
      "دعم حكومي للبنوك ذات الأهمية النظامية",
      "مراجعة جودة الأصول إلزامية"
    ],
    economicImpact: "Strengthened banking sector resilience, improved depositor confidence, enhanced credit intermediation capacity",
    economicImpactAr: "تعزيز مرونة القطاع المصرفي، وتحسين ثقة المودعين، وتعزيز قدرة الوساطة الائتمانية",
    sourceUrl: "https://www.worldbank.org/en/country/yemen"
  },
  {
    id: "cby-aden-2024-12",
    date: "December 2024",
    title: "New Banknote Series Issuance",
    titleAr: "إصدار سلسلة عملات ورقية جديدة",
    category: "Currency Management",
    categoryAr: "إدارة العملة",
    type: "currency",
    impact: "high",
    summary: "CBY-Aden issued new banknote series with enhanced security features",
    summaryAr: "أصدر البنك المركزي في عدن سلسلة عملات ورقية جديدة بميزات أمنية محسنة",
    details: [
      "New 1000, 500, and 200 Rial denominations",
      "Advanced anti-counterfeiting features",
      "Phased circulation plan",
      "Old notes remain legal tender",
      "Public awareness campaign"
    ],
    detailsAr: [
      "فئات جديدة 1000 و500 و200 ريال",
      "ميزات متقدمة لمكافحة التزييف",
      "خطة تداول تدريجية",
      "الأوراق القديمة تبقى عملة قانونية",
      "حملة توعية عامة"
    ],
    economicImpact: "Reduced counterfeiting, improved public confidence in currency, facilitated cash transactions",
    economicImpactAr: "تقليل التزييف، وتحسين ثقة الجمهور في العملة، وتسهيل المعاملات النقدية",
    sourceUrl: "https://www.worldbank.org/en/country/yemen"
  },
  {
    id: "cby-aden-2024-10",
    date: "October 2024",
    title: "Digital Payment Systems Modernization",
    titleAr: "تحديث أنظمة الدفع الرقمية",
    category: "Financial Infrastructure",
    categoryAr: "البنية التحتية المالية",
    type: "regulatory",
    impact: "medium",
    summary: "CBY-Aden approved framework for mobile money and digital payment services",
    summaryAr: "وافق البنك المركزي في عدن على إطار للأموال المتنقلة وخدمات الدفع الرقمية",
    details: [
      "Licensing framework for mobile money operators",
      "Interoperability standards",
      "Consumer protection regulations",
      "Agent network guidelines",
      "Transaction limits and KYC requirements"
    ],
    detailsAr: [
      "إطار ترخيص لمشغلي الأموال المتنقلة",
      "معايير التشغيل البيني",
      "لوائح حماية المستهلك",
      "إرشادات شبكة الوكلاء",
      "حدود المعاملات ومتطلبات اعرف عميلك"
    ],
    economicImpact: "Expanded financial inclusion, reduced transaction costs, facilitated remittances and payments",
    economicImpactAr: "توسيع الشمول المالي، وتقليل تكاليف المعاملات، وتسهيل التحويلات والمدفوعات",
    sourceUrl: "https://www.imf.org/en/countries/yem"
  },
  {
    id: "cby-aden-2024-08",
    date: "August 2024",
    title: "Sanctions on Houthi-Affiliated Financial Networks",
    titleAr: "عقوبات على الشبكات المالية المرتبطة بالحوثيين",
    category: "Sanctions & Compliance",
    categoryAr: "عقوبات وامتثال",
    type: "sanctions",
    impact: "high",
    summary: "CBY-Aden designated Houthi-affiliated money exchangers and financial facilitators",
    summaryAr: "صنف البنك المركزي في عدن صرافي الأموال والميسرين الماليين المرتبطين بالحوثيين",
    details: [
      "Designation of 15 exchange companies",
      "Asset freeze measures",
      "Prohibition on transactions",
      "Coordination with international sanctions",
      "Reporting obligations for banks"
    ],
    detailsAr: [
      "تصنيف 15 شركة صرافة",
      "تدابير تجميد الأصول",
      "حظر المعاملات",
      "التنسيق مع العقوبات الدولية",
      "التزامات الإبلاغ للبنوك"
    ],
    economicImpact: "Disrupted Houthi revenue streams, increased pressure on parallel financial networks, complicated humanitarian operations",
    economicImpactAr: "عطل مصادر إيرادات الحوثيين، وزاد الضغط على الشبكات المالية الموازية، وعقد العمليات الإنسانية",
    sourceUrl: "https://main.un.org/securitycouncil/en/sanctions/2140"
  }
];

export default function CBYAdenTracker() {
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
      case "sanctions": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-16">
        <div className="container">
          <div className="flex justify-between items-start mb-6">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Building2 className="w-3 h-3 mr-1" />
                {language === "ar" ? "البنك المركزي اليمني - عدن" : "Central Bank of Yemen - Aden"}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {language === "ar" ? "متتبع قرارات البنك المركزي - عدن" : "CBY-Aden Decision Tracker"}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl">
                {language === "ar" 
                  ? "تتبع شامل لجميع القرارات والسياسات النقدية والتنظيمية الصادرة عن البنك المركزي اليمني في عدن (الحكومة الشرعية) مع تحليل الأثر الاقتصادي"
                  : "Comprehensive tracking of all monetary and regulatory decisions issued by the Central Bank of Yemen in Aden (Internationally Recognized Government) with economic impact analysis"}
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
                <div className="text-blue-100">{language === "ar" ? "قرار موثق" : "Documented Decisions"}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">{decisions.filter(d => d.impact === "high").length}</div>
                <div className="text-blue-100">{language === "ar" ? "قرار عالي التأثير" : "High Impact Decisions"}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <AlertCircle className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">{decisions.filter(d => d.type === "sanctions").length}</div>
                <div className="text-blue-100">{language === "ar" ? "قرار عقوبات" : "Sanctions Decisions"}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Calendar className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">2024-2025</div>
                <div className="text-blue-100">{language === "ar" ? "الفترة المغطاة" : "Coverage Period"}</div>
              </CardContent>
            </Card>
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
                  <SelectItem value="sanctions">{language === "ar" ? "عقوبات" : "Sanctions"}</SelectItem>
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
          {filteredDecisions.map(decision => (
            <Card key={decision.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
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
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-amber-900">
                      <TrendingUp className="w-4 h-4" />
                      {language === "ar" ? "الأثر الاقتصادي" : "Economic Impact"}
                    </h4>
                    <p className="text-sm text-amber-900">
                      {language === "ar" ? decision.economicImpactAr : decision.economicImpact}
                    </p>
                  </div>

                  {decision.sourceUrl && (
                    <Button variant="outline" asChild className="flex items-center gap-2">
                      <a href={decision.sourceUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        {language === "ar" ? "المصدر الرسمي" : "Official Source"}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
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
