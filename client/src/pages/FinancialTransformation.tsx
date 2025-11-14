import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, TrendingDown, TrendingUp, AlertTriangle, Building2, Users, DollarSign } from "lucide-react";

interface Phase {
  id: number;
  title: string;
  titleAr: string;
  period: string;
  periodAr: string;
  description: string;
  descriptionAr: string;
  keyEvents: string[];
  keyEventsAr: string[];
  impacts: {
    positive: string[];
    positiveAr: string[];
    negative: string[];
    negativeAr: string[];
  };
  actors: {
    name: string;
    nameAr: string;
    role: string;
    roleAr: string;
  }[];
  metrics: {
    label: string;
    labelAr: string;
    value: string;
    trend: "up" | "down" | "stable";
  }[];
}

const transformationPhases: Phase[] = [
  {
    id: 1,
    title: "Phase 1: Fracture",
    titleAr: "المرحلة الأولى: الانكسار",
    period: "2015-2016",
    periodAr: "2015-2016",
    description: "The outbreak of conflict led to the collapse of trust in the formal banking sector. The most prominent event was the split of the Central Bank of Yemen into two competing branches in Aden and Sana'a, fragmenting monetary and regulatory policies. Bank branch networks became divided by frontlines, and inter-bank settlement nearly ceased, paralyzing their ability to serve the economy. As a result, daily transactions increasingly shifted toward cash and hawala networks, which were already strong before the war due to their unique ability to bypass control lines.",
    descriptionAr: "أدى اندلاع النزاع إلى انهيار الثقة في القطاع المصرفي الرسمي. كان الحدث الأبرز هو انقسام البنك المركزي اليمني إلى فرعين متنافسين في عدن وصنعاء، مما أدى إلى تجزئة السياسات النقدية والرقابية. أصبحت شبكات فروع البنوك مقسمة بفعل خطوط المواجهة، وتوقفت التسوية بين البنوك تقريباً، مما شل قدرتها على خدمة الاقتصاد. نتيجة لذلك، تحولت المعاملات اليومية بشكل متزايد نحو النقد وشبكات الحوالة، التي كانت قوية بالفعل قبل الحرب، نظراً لقدرتها الفريدة على تجاوز خطوط السيطرة.",
    keyEvents: [
      "Central Bank split into Aden and Sana'a branches (2016)",
      "Banking sector confidence collapse",
      "Inter-bank settlement paralysis",
      "Massive shift to cash transactions",
      "Hawala networks gain prominence"
    ],
    keyEventsAr: [
      "انقسام البنك المركزي إلى فرعي عدن وصنعاء (2016)",
      "انهيار الثقة في القطاع المصرفي",
      "شلل التسوية بين البنوك",
      "تحول هائل نحو المعاملات النقدية",
      "شبكات الحوالة تكتسب بروزاً"
    ],
    impacts: {
      positive: [
        "Hawala networks provided continuity during crisis",
        "Cash transactions enabled survival commerce",
        "Alternative financial channels emerged"
      ],
      positiveAr: [
        "شبكات الحوالة وفرت الاستمرارية خلال الأزمة",
        "المعاملات النقدية مكنت التجارة البقائية",
        "ظهور قنوات مالية بديلة"
      ],
      negative: [
        "Formal banking sector paralyzed",
        "Loss of monetary policy control",
        "Fragmentation of financial system",
        "Erosion of public trust in banks"
      ],
      negativeAr: [
        "شلل القطاع المصرفي الرسمي",
        "فقدان السيطرة على السياسة النقدية",
        "تجزئة النظام المالي",
        "تآكل الثقة العامة في البنوك"
      ]
    },
    actors: [
      { name: "Central Bank of Yemen", nameAr: "البنك المركزي اليمني", role: "Split into two competing entities", roleAr: "انقسم إلى كيانين متنافسين" },
      { name: "Commercial Banks", nameAr: "البنوك التجارية", role: "Operations severely disrupted", roleAr: "عمليات معطلة بشدة" },
      { name: "Hawala Networks", nameAr: "شبكات الحوالة", role: "Gained market share", roleAr: "اكتسبت حصة سوقية" },
      { name: "Population", nameAr: "السكان", role: "Lost trust in formal banking", roleAr: "فقدوا الثقة في البنوك الرسمية" }
    ],
    metrics: [
      { label: "Bank Branches Operational", labelAr: "فروع البنوك العاملة", value: "60%", trend: "down" },
      { label: "Cash Transactions", labelAr: "المعاملات النقدية", value: "85%", trend: "up" },
      { label: "Public Trust in Banks", labelAr: "الثقة العامة في البنوك", value: "35%", trend: "down" }
    ]
  },
  {
    id: 2,
    title: "Phase 2: Humanitarian Cash Transfers",
    titleAr: "المرحلة الثانية: التحويلات النقدية الإنسانية",
    period: "2017-2019",
    periodAr: "2017-2019",
    description: "As the humanitarian crisis intensified, cash-based aid expanded significantly. International relief agencies channeled their payments through money exchanger networks and microfinance banks to reach beneficiaries quickly and efficiently. This massive influx of humanitarian capital provided money exchangers with enormous operational capacity, public legitimacy, and a steady source of fee income on a national scale. This phase served as 'oxygen' that kept local economies alive, but it also fueled the growth of a parallel financial sector.",
    descriptionAr: "مع تفاقم الأزمة الإنسانية، توسعت المساعدات القائمة على النقد بشكل كبير. قامت وكالات الإغاثة الدولية بتوجيه مدفوعاتها عبر شبكات الصرافة وبنوك التمويل الأصغر للوصول إلى المستفيدين بسرعة وكفاءة. أدى هذا التدفق الهائل من رأس المال الإنساني إلى تزويد الصرافين بقدرات تشغيلية هائلة، وشرعية عامة، ومصدر دخل ثابت من الرسوم على نطاق وطني. لقد كانت هذه المرحلة بمثابة 'أكسجين' أبقى الاقتصادات المحلية على قيد الحياة، ولكنه أيضاً غذّى نمو قطاع مالي موازٍ.",
    keyEvents: [
      "Massive expansion of cash-based humanitarian aid",
      "International agencies partner with money exchangers",
      "Microfinance banks gain operational capacity",
      "Money exchangers acquire public legitimacy",
      "Steady fee income stream established"
    ],
    keyEventsAr: [
      "توسع هائل في المساعدات الإنسانية النقدية",
      "الوكالات الدولية تشارك مع الصرافين",
      "بنوك التمويل الأصغر تكتسب قدرات تشغيلية",
      "الصرافون يكتسبون شرعية عامة",
      "تأسيس تدفق دخل ثابت من الرسوم"
    ],
    impacts: {
      positive: [
        "Wide geographic access to aid",
        "Rapid beneficiary reach",
        "Local economies sustained",
        "Household consumption stabilized",
        "Financial inclusion expanded"
      ],
      positiveAr: [
        "وصول جغرافي واسع للمساعدات",
        "وصول سريع للمستفيدين",
        "استدامة الاقتصادات المحلية",
        "استقرار استهلاك الأسر",
        "توسع الشمول المالي"
      ],
      negative: [
        "Parallel financial sector emerged",
        "Banks further marginalized",
        "Regulatory oversight weakened",
        "Aid dependency created",
        "Long-term structural distortions"
      ],
      negativeAr: [
        "ظهور قطاع مالي موازٍ",
        "تهميش البنوك أكثر",
        "ضعف الرقابة التنظيمية",
        "خلق الاعتماد على المعونة",
        "تشوهات هيكلية طويلة الأجل"
      ]
    },
    actors: [
      { name: "International Aid Agencies", nameAr: "وكالات الإغاثة الدولية", role: "Channeled billions through exchangers", roleAr: "وجهت مليارات عبر الصرافين" },
      { name: "Money Exchangers", nameAr: "الصرافون", role: "Became primary aid delivery channel", roleAr: "أصبحوا قناة التوصيل الرئيسية للمساعدات" },
      { name: "Microfinance Banks", nameAr: "بنوك التمويل الأصغر", role: "Expanded operations significantly", roleAr: "توسعت عملياتهم بشكل كبير" },
      { name: "Beneficiary Households", nameAr: "الأسر المستفيدة", role: "Received critical cash assistance", roleAr: "تلقت مساعدات نقدية حرجة" }
    ],
    metrics: [
      { label: "Cash Aid Volume", labelAr: "حجم المساعدات النقدية", value: "$2.5B", trend: "up" },
      { label: "Exchanger Market Share", labelAr: "حصة الصرافين السوقية", value: "70%", trend: "up" },
      { label: "Bank Payment Share", labelAr: "حصة البنوك في المدفوعات", value: "15%", trend: "down" }
    ]
  },
  {
    id: 3,
    title: "Phase 3: Clear Disintermediation",
    titleAr: "المرحلة الثالثة: وضوح تفكيك الوساطة",
    period: "2020-2022",
    periodAr: "2020-2022",
    description: "Government and commercial banks began showing classic stress signals: declining fee and commission revenues from payments, increased reliance on balance sheet activities (such as investing in treasury bills), and difficulty moving cash between different regions. In contrast, humanitarian transfers, expatriate remittances, and retail commercial transfers increasingly occurred through non-banking channels, cementing their position as the country's essential payment infrastructure.",
    descriptionAr: "بدأت البنوك الحكومية والتجارية تظهر إشارات إجهاد كلاسيكية: انخفاض إيرادات الرسوم والعمولات من المدفوعات، وزيادة الاعتماد على أنشطة الميزانية العمومية (مثل الاستثمار في أذون الخزانة)، وصعوبة نقل النقد بين المناطق المختلفة. في المقابل، أصبحت التحويلات الإنسانية وتحويلات المغتربين والتحويلات التجارية بالتجزئة تتم بشكل متزايد عبر القنوات غير المصرفية، مما رسخ مكانتها كبنية تحتية أساسية للمدفوعات في البلاد.",
    keyEvents: [
      "Bank fee revenues collapse",
      "Increased reliance on treasury bills",
      "Cross-region cash movement difficulties",
      "Non-banking channels dominate payments",
      "Payment infrastructure shifts permanently"
    ],
    keyEventsAr: [
      "انهيار إيرادات رسوم البنوك",
      "زيادة الاعتماد على أذون الخزانة",
      "صعوبات نقل النقد بين المناطق",
      "القنوات غير المصرفية تهيمن على المدفوعات",
      "تحول دائم في البنية التحتية للمدفوعات"
    ],
    impacts: {
      positive: [
        "Payment system continuity maintained",
        "Remittances continued flowing",
        "Retail commerce sustained",
        "Alternative infrastructure proved resilient"
      ],
      positiveAr: [
        "الحفاظ على استمرارية نظام المدفوعات",
        "استمرار تدفق التحويلات",
        "استدامة التجارة بالتجزئة",
        "البنية التحتية البديلة أثبتت مرونتها"
      ],
      negative: [
        "Banking sector revenue crisis",
        "Loss of payment system control",
        "Regulatory blind spots expanded",
        "Money laundering risks increased",
        "Monetary policy transmission weakened"
      ],
      negativeAr: [
        "أزمة إيرادات القطاع المصرفي",
        "فقدان السيطرة على نظام المدفوعات",
        "توسع النقاط العمياء التنظيمية",
        "زيادة مخاطر غسل الأموال",
        "ضعف انتقال السياسة النقدية"
      ]
    },
    actors: [
      { name: "Commercial Banks", nameAr: "البنوك التجارية", role: "Lost payment market share", roleAr: "فقدت حصة سوق المدفوعات" },
      { name: "Money Exchangers", nameAr: "الصرافون", role: "Dominated payment infrastructure", roleAr: "هيمنت على البنية التحتية للمدفوعات" },
      { name: "Expatriate Workers", nameAr: "العمال المغتربون", role: "Relied on non-bank remittances", roleAr: "اعتمدوا على التحويلات غير المصرفية" },
      { name: "Retail Businesses", nameAr: "الأعمال بالتجزئة", role: "Used alternative payment channels", roleAr: "استخدمت قنوات دفع بديلة" }
    ],
    metrics: [
      { label: "Bank Payment Volume", labelAr: "حجم مدفوعات البنوك", value: "12%", trend: "down" },
      { label: "Non-Bank Payments", labelAr: "المدفوعات غير المصرفية", value: "88%", trend: "up" },
      { label: "Bank Fee Income", labelAr: "دخل رسوم البنوك", value: "-65%", trend: "down" }
    ]
  },
  {
    id: 4,
    title: "Phase 4: Formalization of the Informal",
    titleAr: "المرحلة الرابعة: إضفاء الطابع الرسمي على غير الرسمي",
    period: "2023-2025",
    periodAr: "2023-2025",
    description: "This period witnessed the transformation of major money exchange houses into microfinance banks, with licenses proliferating under fragmented and non-uniform regulatory systems. E-money models and payment agents expanded, but most continued to operate outside classic banking clearing and settlement systems. The net result was the emergence of a 'parallel ledger' functioning as a de facto national settlement layer, but lying outside the full control of central monetary authorities.",
    descriptionAr: "شهدت هذه الفترة تحول بيوت الصرافة الكبرى إلى بنوك تمويل أصغر، مع انتشار التراخيص في ظل أنظمة رقابية مجزأة وغير متجانسة. توسعت نماذج النقود الإلكترونية ووكلاء الدفع، ولكن معظمها ظل يعمل خارج أنظمة المقاصة والتسوية المصرفية الكلاسيكية. كانت النتيجة الصافية ظهور 'دفتر أستاذ موازٍ' يعمل كطبقة تسوية وطنية بحكم الأمر الواقع، ولكنه يقع خارج السيطرة الكاملة للسلطات النقدية المركزية.",
    keyEvents: [
      "Major exchangers convert to microfinance banks",
      "License proliferation under fragmented regulation",
      "E-money models expand rapidly",
      "Payment agent networks grow",
      "Parallel ledger system emerges"
    ],
    keyEventsAr: [
      "الصرافون الكبار يتحولون إلى بنوك تمويل أصغر",
      "انتشار التراخيص تحت تنظيم مجزأ",
      "نماذج النقود الإلكترونية تتوسع بسرعة",
      "شبكات وكلاء الدفع تنمو",
      "ظهور نظام دفتر أستاذ موازٍ"
      ],
    impacts: {
      positive: [
        "Formal licensing of informal operators",
        "Expanded financial services access",
        "E-money adoption increased",
        "Payment infrastructure modernized",
        "Rural areas gained access"
      ],
      positiveAr: [
        "الترخيص الرسمي للمشغلين غير الرسميين",
        "توسع الوصول إلى الخدمات المالية",
        "زيادة اعتماد النقود الإلكترونية",
        "تحديث البنية التحتية للمدفوعات",
        "المناطق الريفية اكتسبت وصولاً"
      ],
      negative: [
        "Parallel financial system institutionalized",
        "Regulatory fragmentation deepened",
        "License quality concerns",
        "Prudential supervision weak",
        "Central bank control eroded"
      ],
      negativeAr: [
        "النظام المالي الموازي أصبح مؤسسياً",
        "تعمق التجزئة التنظيمية",
        "مخاوف جودة التراخيص",
        "الإشراف الاحترازي ضعيف",
        "تآكل سيطرة البنك المركزي"
      ]
    },
    actors: [
      { name: "Microfinance Banks", nameAr: "بنوك التمويل الأصغر", role: "Emerged as major players", roleAr: "ظهرت كلاعبين رئيسيين" },
      { name: "E-Money Providers", nameAr: "مزودو النقود الإلكترونية", role: "Expanded service offerings", roleAr: "وسعوا عروض الخدمات" },
      { name: "Payment Agents", nameAr: "وكلاء الدفع", role: "Created nationwide network", roleAr: "أنشأوا شبكة وطنية" },
      { name: "Central Banks", nameAr: "البنوك المركزية", role: "Lost effective control", roleAr: "فقدت السيطرة الفعالة" }
    ],
    metrics: [
      { label: "Microfinance Bank Licenses", labelAr: "تراخيص بنوك التمويل الأصغر", value: "13", trend: "up" },
      { label: "E-Money Users", labelAr: "مستخدمو النقود الإلكترونية", value: "2.5M", trend: "up" },
      { label: "Central Bank Control", labelAr: "سيطرة البنك المركزي", value: "25%", trend: "down" }
    ]
  }
];

export default function FinancialTransformation() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [selectedPhase, setSelectedPhase] = useState<number>(1);

  const currentPhase = transformationPhases.find(p => p.id === selectedPhase) || transformationPhases[0];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "down": return <TrendingDown className="h-4 w-4 text-red-600" />;
      default: return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {language === "en" 
              ? "Financial System Transformation Timeline (2015-2025)" 
              : "الجدول الزمني لتحول النظام المالي (2015-2025)"}
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            {language === "en" 
              ? "Four Phases of Structural Transformation in Yemen's Financial Architecture" 
              : "أربع مراحل من التحول الهيكلي في البنية المالية اليمنية"}
          </p>
          <Button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            variant="outline"
            className="mb-6"
          >
            {language === "en" ? "العربية" : "English"}
          </Button>
        </div>

        {/* Timeline Navigation */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {language === "en" ? "Transformation Phases" : "مراحل التحول"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {transformationPhases.map((phase) => (
                  <button
                    key={phase.id}
                    onClick={() => setSelectedPhase(phase.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedPhase === phase.id
                        ? "border-blue-600 bg-blue-50"
                        : "border-slate-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="text-sm font-semibold text-slate-600 mb-2">
                      {language === "en" ? phase.title : phase.titleAr}
                    </div>
                    <div className="text-xs text-slate-500">
                      {language === "en" ? phase.period : phase.periodAr}
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Phase Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>{language === "en" ? currentPhase.title : currentPhase.titleAr}</CardTitle>
                <CardDescription>
                  <Badge variant="outline">{language === "en" ? currentPhase.period : currentPhase.periodAr}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  {language === "en" ? currentPhase.description : currentPhase.descriptionAr}
                </p>
              </CardContent>
            </Card>

            {/* Key Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  {language === "en" ? "Key Events" : "الأحداث الرئيسية"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {(language === "en" ? currentPhase.keyEvents : currentPhase.keyEventsAr).map((event, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-slate-700">{event}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Impacts */}
            <Card>
              <CardHeader>
                <CardTitle>{language === "en" ? "Impacts" : "الآثار"}</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="positive">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="positive">
                      {language === "en" ? "Positive" : "إيجابية"}
                    </TabsTrigger>
                    <TabsTrigger value="negative">
                      {language === "en" ? "Negative" : "سلبية"}
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="positive" className="mt-4">
                    <ul className="space-y-2">
                      {(language === "en" ? currentPhase.impacts.positive : currentPhase.impacts.positiveAr).map((impact, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 text-green-600 mt-1" />
                          <span className="text-slate-700">{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="negative" className="mt-4">
                    <ul className="space-y-2">
                      {(language === "en" ? currentPhase.impacts.negative : currentPhase.impacts.negativeAr).map((impact, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <TrendingDown className="h-4 w-4 text-red-600 mt-1" />
                          <span className="text-slate-700">{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Actors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  {language === "en" ? "Key Actors" : "الفاعلون الرئيسيون"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentPhase.actors.map((actor, idx) => (
                    <div key={idx} className="border-l-4 border-blue-600 pl-3">
                      <div className="font-semibold text-slate-900 text-sm">
                        {language === "en" ? actor.name : actor.nameAr}
                      </div>
                      <div className="text-xs text-slate-600">
                        {language === "en" ? actor.role : actor.roleAr}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  {language === "en" ? "Key Metrics" : "المقاييس الرئيسية"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentPhase.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-slate-600">
                          {language === "en" ? metric.label : metric.labelAr}
                        </span>
                        {getTrendIcon(metric.trend)}
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chart Reference */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  {language === "en" ? "Related Visualizations" : "التصورات ذات الصلة"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <img 
                    src="/charts/chart_12_dual_cby_structure.png" 
                    alt="Dual CBY Structure"
                    className="w-full rounded-lg border"
                  />
                  <p className="text-xs text-slate-500 text-center">
                    {language === "en" 
                      ? "Dual Central Bank Structure (2016-2025)" 
                      : "هيكل البنك المركزي المزدوج (2016-2025)"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          <Button
            onClick={() => setSelectedPhase(Math.max(1, selectedPhase - 1))}
            disabled={selectedPhase === 1}
            variant="outline"
          >
            {language === "en" ? "← Previous Phase" : "المرحلة السابقة ←"}
          </Button>
          <Button
            onClick={() => setSelectedPhase(Math.min(4, selectedPhase + 1))}
            disabled={selectedPhase === 4}
            variant="outline"
          >
            {language === "en" ? "Next Phase →" : "→ المرحلة التالية"}
          </Button>
        </div>
      </div>
    </div>
  );
}
