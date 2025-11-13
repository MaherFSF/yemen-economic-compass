import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingDown, TrendingUp, AlertTriangle, Users, Building2, Coins } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Timeline() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const timelineEvents = [
    {
      year: "2014",
      quarter: { ar: "سبتمبر", en: "Sep" },
      title: { ar: "الحوثيون يستولون على صنعاء", en: "Houthis Seize Sana'a" },
      description: { ar: "قوات الحوثي، بدعم من موالي صالح، تسيطر على العاصمة، مهمشة حكومة هادي", en: "Houthi forces, backed by Saleh loyalists, take control of the capital, marginalizing Hadi's government" },
      impact: { ar: "سياسي", en: "Political" },
      severity: "critical",
      icon: AlertTriangle
    },
    {
      year: "2015",
      quarter: { ar: "مارس", en: "Mar" },
      title: { ar: "تدخل التحالف بقيادة السعودية", en: "Saudi-Led Coalition Intervention" },
      description: { ar: "عملية عاصفة الحزم تنطلق لاستعادة حكومة هادي. الحرب الأهلية تتصاعد على مستوى البلاد", en: "Operation Decisive Storm launches to restore Hadi's government. Civil war escalates nationwide" },
      impact: { ar: "صراع", en: "Conflict" },
      severity: "critical",
      icon: AlertTriangle
    },
    {
      year: "2015",
      quarter: { ar: "الربع 2-4", en: "Q2-Q4" },
      title: { ar: "بداية الانهيار الاقتصادي", en: "Economic Collapse Begins" },
      description: { ar: "انكماش حاد في الناتج المحلي، توقف إنتاج النفط، بداية انخفاض قيمة العملة", en: "GDP contracts sharply, oil production halts, currency begins depreciation" },
      impact: { ar: "اقتصادي", en: "Economic" },
      severity: "high",
      icon: TrendingDown,
      metrics: { gdp: "-28%", inflation: "+15%" }
    },
    {
      year: "2016",
      quarter: { ar: "سبتمبر", en: "Sep" },
      title: { ar: "انقسام البنك المركزي", en: "Central Bank Split" },
      description: { ar: "نقل مقر البنك المركزي من صنعاء إلى عدن، مما أدى إلى وجود سلطتين نقديتين", en: "CBY headquarters moved from Sana'a to Aden, creating dual monetary authorities" },
      impact: { ar: "مالي", en: "Financial" },
      severity: "critical",
      icon: Building2,
      metrics: { exchange: "530 YER/USD" }
    },
    {
      year: "2017",
      quarter: { ar: "مايو", en: "May" },
      title: { ar: "تشكيل المجلس الانتقالي الجنوبي", en: "Southern Transitional Council Formed" },
      description: { ar: "تأسيس حركة انفصالية مدعومة من الإمارات، إضافة فصيل ثالث للصراع", en: "UAE-backed separatist movement established, adding third faction to conflict" },
      impact: { ar: "سياسي", en: "Political" },
      severity: "high",
      icon: Users
    },
    {
      year: "2018",
      quarter: { ar: "ديسمبر", en: "Dec" },
      title: { ar: "اتفاق ستوكهولم", en: "Stockholm Agreement" },
      description: { ar: "وقف إطلاق النار في الحديدة وصفقة تبادل الأسرى. أول اختراق دبلوماسي كبير", en: "Hodeidah ceasefire and prisoner exchange deal. First major diplomatic breakthrough" },
      impact: { ar: "جهود السلام", en: "Peace Effort" },
      severity: "positive",
      icon: TrendingUp
    },
    {
      year: "2019",
      quarter: { ar: "نوفمبر", en: "Nov" },
      title: { ar: "اتفاق الرياض", en: "Riyadh Agreement" },
      description: { ar: "صفقة تقاسم السلطة بين حكومة هادي والمجلس الانتقالي (تعثر التنفيذ)", en: "Power-sharing deal between Hadi government and STC (implementation stalled)" },
      impact: { ar: "سياسي", en: "Political" },
      severity: "moderate",
      icon: Users
    },
    {
      year: "2020",
      quarter: { ar: "يناير", en: "Jan" },
      title: { ar: "تعميق تشظي العملة", en: "Currency Fragmentation Deepens" },
      description: { ar: "البنك المركزي في صنعاء يحظر الأوراق النقدية الجديدة المطبوعة في عدن، مما أدى إلى انقسام الريال اليمني", en: "Houthi-controlled CBY bans new banknotes printed by Aden, splitting the Yemeni Riyal" },
      impact: { ar: "مالي", en: "Financial" },
      severity: "critical",
      icon: Coins,
      metrics: { adenRate: "750 YER/USD", sanaaRate: "600 YER/USD (fixed)" }
    },
    {
      year: "2020",
      quarter: { ar: "أبريل", en: "Apr" },
      title: { ar: "جائحة كوفيد-19", en: "COVID-19 Pandemic Hits" },
      description: { ar: "انهيار النظام الصحي، تفاقم الأزمة الإنسانية، إعلان وقف إطلاق نار قصير", en: "Healthcare system collapses, humanitarian crisis worsens, brief ceasefire announced" },
      impact: { ar: "إنساني", en: "Humanitarian" },
      severity: "high",
      icon: AlertTriangle
    },
    {
      year: "2021",
      quarter: { ar: "فبراير", en: "Feb" },
      title: { ar: "بايدن ينهي الدعم الهجومي", en: "Biden Ends Offensive Support" },
      description: { ar: "الولايات المتحدة تسحب دعمها للعمليات الهجومية السعودية، تتحول للضغط الدبلوماسي", en: "US withdraws support for Saudi offensive operations, shifts to diplomatic pressure" },
      impact: { ar: "دولي", en: "International" },
      severity: "moderate",
      icon: Users
    },
    {
      year: "2022",
      quarter: { ar: "أبريل", en: "Apr" },
      title: { ar: "تشكيل مجلس القيادة الرئاسي", en: "Presidential Leadership Council Formed" },
      description: { ar: "هادي يتنحى، يُستبدل بمجلس من 8 أعضاء مدعوم سعودياً. بداية هدنة بوساطة الأمم المتحدة", en: "Hadi steps down, replaced by Saudi-backed 8-member council. UN-brokered truce begins" },
      impact: { ar: "سياسي", en: "Political" },
      severity: "positive",
      icon: TrendingUp,
      metrics: { saudiAid: "$2B pledged" }
    },
    {
      year: "2022",
      quarter: { ar: "أكتوبر", en: "Oct" },
      title: { ar: "انتهاء الهدنة", en: "Truce Expires" },
      description: { ar: "انتهاء تمديدات الهدنة الأممية لمدة شهرين، استئناف القتال المحلي", en: "2-month UN truce extensions end, localized fighting resumes" },
      impact: { ar: "صراع", en: "Conflict" },
      severity: "high",
      icon: AlertTriangle
    },
    {
      year: "2023",
      quarter: { ar: "أبريل", en: "Apr" },
      title: { ar: "تبادل كبير للأسرى", en: "Major Prisoner Exchange" },
      description: { ar: "أكبر عملية تبادل منذ 2020: إطلاق سراح 887 أسيراً تحت إشراف اللجنة الدولية للصليب الأحمر", en: "Largest swap since 2020: 887 prisoners released under ICRC auspices" },
      impact: { ar: "إنساني", en: "Humanitarian" },
      severity: "positive",
      icon: TrendingUp
    },
    {
      year: "2023",
      quarter: { ar: "أكتوبر", en: "Oct" },
      title: { ar: "بداية الهجمات البحرية في البحر الأحمر", en: "Red Sea Maritime Attacks Begin" },
      description: { ar: "قوات الحوثي تطلق هجمات صاروخية ومسيّرة على الملاحة الدولية", en: "Houthi forces launch missile/drone attacks on international shipping" },
      impact: { ar: "دولي", en: "International" },
      severity: "critical",
      icon: AlertTriangle
    },
    {
      year: "2024",
      quarter: { ar: "الربع 1", en: "Q1" },
      title: { ar: "أزمة سعر الصرف", en: "Exchange Rate Crisis" },
      description: { ar: "ريال عدن ينخفض إلى 1,800 ريال/دولار، ارتفاع حاد في التضخم", en: "Aden Riyal depreciates to 1,800 YER/USD, inflation surges" },
      impact: { ar: "اقتصادي", en: "Economic" },
      severity: "critical",
      icon: TrendingDown,
      metrics: { adenRate: "1,800 YER/USD", inflation: "+35%" }
    },
    {
      year: "2024",
      quarter: { ar: "الربع 3", en: "Q3" },
      title: { ar: "ضوابط الصرف من البنك المركزي بعدن", en: "CBY-Aden Exchange Controls" },
      description: { ar: "إطلاق شبكة UNMONEY وتمويل الواردات لاستقرار العملة", en: "Introduction of UNMONEY network and import financing to stabilize currency" },
      impact: { ar: "مالي", en: "Financial" },
      severity: "positive",
      icon: Coins,
      metrics: { adenRate: "1,630 YER/USD (stabilized)" }
    },
    {
      year: "2025",
      quarter: { ar: "مايو", en: "May" },
      title: { ar: "تعميق انهيار الريال", en: "Riyal Collapse Deepens" },
      description: { ar: "العملة تصل إلى 2,560 ريال/دولار وسط حصار النفط وأزمة الإيرادات", en: "Currency hits 2,560 YER/USD amid oil blockade and revenue crisis" },
      impact: { ar: "اقتصادي", en: "Economic" },
      severity: "critical",
      icon: TrendingDown,
      metrics: { adenRate: "2,560 YER/USD", gdpContraction: "-1.5%" }
    },
    {
      year: "2025",
      quarter: { ar: "مايو", en: "May" },
      title: { ar: "الموافقة على مشروع البنك الدولي للبنية التحتية المالية", en: "World Bank FMI Project Approved" },
      description: { ar: "منحة بقيمة 20 مليون دولار للبنية التحتية للمدفوعات والشمول المالي", en: "$20M grant for payment infrastructure and financial inclusion" },
      impact: { ar: "تنموي", en: "Development" },
      severity: "positive",
      icon: TrendingUp,
      metrics: { funding: "$20M", duration: "2025-2030" }
    },
    {
      year: "2025",
      quarter: { ar: "نوفمبر", en: "Nov" },
      title: { ar: "الفقر يصل إلى 76%", en: "Poverty Reaches 76%" },
      description: { ar: "تعميق الأزمة الإنسانية، 21.6 مليون شخص بحاجة للمساعدة", en: "Humanitarian crisis deepens, 21.6M people need assistance" },
      impact: { ar: "إنساني", en: "Humanitarian" },
      severity: "critical",
      icon: AlertTriangle,
      metrics: { poverty: "76%", needAssistance: "21.6M" }
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "border-red-500 bg-red-50";
      case "high": return "border-orange-500 bg-orange-50";
      case "moderate": return "border-yellow-500 bg-yellow-50";
      case "positive": return "border-green-500 bg-green-50";
      default: return "border-gray-500 bg-gray-50";
    }
  };

  const getSeverityBadge = (severity: string) => {
    const labels = {
      critical: { ar: "حرج", en: "Critical" },
      high: { ar: "تأثير عالٍ", en: "High Impact" },
      moderate: { ar: "متوسط", en: "Moderate" },
      positive: { ar: "إيجابي", en: "Positive" }
    };
    
    const label = labels[severity as keyof typeof labels]?.[language] || (isArabic ? "معلومة" : "Info");
    
    switch (severity) {
      case "critical": return <Badge variant="destructive">{label}</Badge>;
      case "high": return <Badge className="bg-orange-500">{label}</Badge>;
      case "moderate": return <Badge className="bg-yellow-500">{label}</Badge>;
      case "positive": return <Badge className="bg-green-500">{label}</Badge>;
      default: return <Badge variant="secondary">{label}</Badge>;
    }
  };

  return (
    <div className="w-full py-12">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            2014 - 2025
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? "الخط الزمني لأزمة اليمن" : "Yemen Crisis Timeline"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isArabic 
              ? "عقد من الصراع والانهيار الاقتصادي والكارثة الإنسانية: تتبع الأحداث الرئيسية التي أعادت تشكيل المشهد المالي والسياسي لليمن"
              : "A decade of conflict, economic collapse, and humanitarian catastrophe: tracking the key events that reshaped Yemen's financial and political landscape"
            }
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>

          {/* Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, idx) => {
              const Icon = event.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute right-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-0">
                    <div className={`h-4 w-4 rounded-full border-4 ${
                      event.severity === 'critical' ? 'bg-red-500 border-red-200' :
                      event.severity === 'high' ? 'bg-orange-500 border-orange-200' :
                      event.severity === 'positive' ? 'bg-green-500 border-green-200' :
                      'bg-yellow-500 border-yellow-200'
                    }`}></div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8 pr-12' : 'md:pl-8 pr-12'}`}>
                    <Card className={`border-l-4 ${getSeverityColor(event.severity)} hover:shadow-lg transition-shadow`}>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                              event.severity === 'critical' ? 'bg-red-100' :
                              event.severity === 'high' ? 'bg-orange-100' :
                              event.severity === 'positive' ? 'bg-green-100' :
                              'bg-yellow-100'
                            }`}>
                              <Icon className={`h-5 w-5 ${
                                event.severity === 'critical' ? 'text-red-600' :
                                event.severity === 'high' ? 'text-orange-600' :
                                event.severity === 'positive' ? 'text-green-600' :
                                'text-yellow-600'
                              }`} />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-lg">{event.year}</span>
                                <span className="text-sm text-muted-foreground">{event.quarter[language]}</span>
                              </div>
                              <CardTitle className="text-base">{event.title[language]}</CardTitle>
                            </div>
                          </div>
                          {getSeverityBadge(event.severity)}
                        </div>
                        <CardDescription className="mt-2">
                          <Badge variant="outline" className="text-xs">{event.impact[language]}</Badge>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {event.description[language]}
                        </p>
                        {event.metrics && (
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(event.metrics).map(([key, value]) => (
                              <Badge key={key} variant="secondary" className="text-xs">
                                {key}: {value}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Statistics */}
        <Card className="mt-12 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">
              {isArabic ? "العقد بالأرقام (2014-2025)" : "Decade in Numbers (2014-2025)"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">-58%</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {isArabic ? "نصيب الفرد من الناتج المحلي" : "GDP per Capita"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">76%</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {isArabic ? "معدل الفقر" : "Poverty Rate"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">2,560</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {isArabic ? "ريال/دولار (2025)" : "YER/USD (2025)"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">21.6M</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {isArabic ? "بحاجة للمساعدة" : "Need Assistance"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
