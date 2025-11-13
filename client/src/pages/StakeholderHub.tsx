import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, DollarSign, MapPin, TrendingUp, Shield, Building2, Flag, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

const stakeholders = [
  {
    id: "irg-plc",
    nameEn: "IRG / Presidential Leadership Council",
    nameAr: "الحكومة اليمنية / مجلس القيادة الرئاسي",
    type: "government",
    color: "blue",
    control: "~30% of territory",
    population: "~10 million",
    capital: "Aden",
    economicStrategy: {
      en: "Reliance on Saudi/UAE aid, oil revenue restoration, port control, international recognition leverage",
      ar: "الاعتماد على المساعدات السعودية/الإماراتية، استعادة عائدات النفط، السيطرة على الموانئ، الاستفادة من الاعتراف الدولي"
    },
    revenueSources: [
      { source: "Saudi/UAE Aid", amount: "$1-2B/year", percentage: 45, color: "green" },
      { source: "Port Revenues (Aden, Mukalla)", amount: "$400-600M/year", percentage: 20, color: "blue" },
      { source: "Customs & Taxes", amount: "$300-500M/year", percentage: 15, color: "purple" },
      { source: "Oil/Gas (sporadic)", amount: "$200-400M/year", percentage: 10, color: "amber" },
      { source: "International Loans/Grants", amount: "$200-300M/year", percentage: 10, color: "indigo" },
    ],
    keyDecisions: [
      { date: "2025-10", event: "IMF Article IV Consultation (first in 11 years)", impact: "high" },
      { date: "2024-12", event: "Introduction of new banknotes", impact: "high" },
      { date: "2023-08", event: "Received $1.2B Saudi aid package", impact: "high" },
      { date: "2023-04", event: "Suspended 6 banks in Houthi areas", impact: "high" },
      { date: "2021-08", event: "Received $665M IMF SDR allocation", impact: "medium" },
      { date: "2018-01", event: "Received $2B Saudi deposit", impact: "high" },
    ],
    challenges: {
      en: "Internal fragmentation, STC separatism, limited territorial control, economic dependence on external aid, weak institutions",
      ar: "التجزئة الداخلية، الانفصالية الجنوبية، السيطرة الإقليمية المحدودة، الاعتماد الاقتصادي على المساعدات الخارجية، ضعف المؤسسات"
    }
  },
  {
    id: "houthis",
    nameEn: "Ansar Allah (Houthis)",
    nameAr: "أنصار الله (الحوثيون)",
    type: "armed-movement",
    color: "red",
    control: "~70% of territory",
    population: "~20 million",
    capital: "Sana'a",
    economicStrategy: {
      en: "Taxation of controlled areas, port fee collection, telecom revenue seizure, customs control, parallel banking system",
      ar: "فرض الضرائب على المناطق الخاضعة للسيطرة، جمع رسوم الموانئ، الاستيلاء على عائدات الاتصالات، السيطرة على الجمارك، نظام مصرفي موازٍ"
    },
    revenueSources: [
      { source: "Taxes & Levies", amount: "$1.5-2B/year", percentage: 40, color: "red" },
      { source: "Port Revenues (Hodeidah)", amount: "$800M-1.2B/year", percentage: 25, color: "orange" },
      { source: "Telecom Revenues (seized)", amount: "$500-700M/year", percentage: 15, color: "purple" },
      { source: "Customs & Import Fees", amount: "$400-600M/year", percentage: 12, color: "blue" },
      { source: "Iranian Support (estimated)", amount: "$200-400M/year", percentage: 8, color: "green" },
    ],
    keyDecisions: [
      { date: "2025-06", event: "Mandated all foreign currency exchange through CBY-Sana'a", impact: "high" },
      { date: "2024-09", event: "Imposed 20% tax on all banking transactions", impact: "high" },
      { date: "2024-03", event: "Banned new YER banknotes in controlled areas", impact: "high" },
      { date: "2023-10", event: "Seized telecom company revenues (~$500M)", impact: "high" },
      { date: "2022-10", event: "Imposed oil export blockade", impact: "high" },
      { date: "2016-09", event: "Established parallel CBY in Sana'a", impact: "high" },
    ],
    challenges: {
      en: "International isolation, sanctions, currency instability, limited access to international banking, economic blockade",
      ar: "العزلة الدولية، العقوبات، عدم استقرار العملة، محدودية الوصول إلى الخدمات المصرفية الدولية، الحصار الاقتصادي"
    }
  },
  {
    id: "saudi",
    nameEn: "Saudi Arabia",
    nameAr: "المملكة العربية السعودية",
    type: "regional-power",
    color: "green",
    control: "Indirect (via IRG support)",
    population: "N/A",
    capital: "Riyadh",
    economicStrategy: {
      en: "Financial support to IRG, currency stabilization through deposits, infrastructure investment, port development, economic leverage for political influence",
      ar: "الدعم المالي للحكومة اليمنية، استقرار العملة من خلال الودائع، الاستثمار في البنية التحتية، تطوير الموانئ، النفوذ الاقتصادي للتأثير السياسي"
    },
    revenueSources: [
      { source: "Direct Budget Support", amount: "$1-1.5B/year", percentage: 50, color: "green" },
      { source: "Development Projects", amount: "$500-800M/year", percentage: 25, color: "blue" },
      { source: "Fuel Grants", amount: "$300-500M/year", percentage: 15, color: "amber" },
      { source: "Currency Deposits", amount: "$200-400M/year", percentage: 10, color: "purple" },
    ],
    keyDecisions: [
      { date: "2023-08", event: "Provided $1.2B aid package to IRG", impact: "high" },
      { date: "2021-05", event: "Deposited $300M to support YER", impact: "medium" },
      { date: "2018-01", event: "Deposited $2B to CBY-Aden", impact: "high" },
      { date: "2017-11", event: "Imposed blockade on Hodeidah port", impact: "high" },
      { date: "2015-03", event: "Launched military intervention", impact: "high" },
    ],
    challenges: {
      en: "War fatigue, economic costs ($200B+ spent), international criticism, limited progress toward political solution, Houthi resilience",
      ar: "إرهاق الحرب، التكاليف الاقتصادية (أكثر من 200 مليار دولار)، الانتقادات الدولية، تقدم محدود نحو حل سياسي، صمود الحوثيين"
    }
  },
  {
    id: "uae",
    nameEn: "United Arab Emirates",
    nameAr: "الإمارات العربية المتحدة",
    type: "regional-power",
    color: "amber",
    control: "Indirect (southern ports & islands)",
    population: "N/A",
    capital: "Abu Dhabi",
    economicStrategy: {
      en: "Port investments (Aden, Mukalla, Socotra), support for STC, infrastructure development, strategic positioning in Bab al-Mandab",
      ar: "الاستثمارات في الموانئ (عدن، المكلا، سقطرى)، دعم المجلس الانتقالي الجنوبي، تطوير البنية التحتية، التموضع الاستراتيجي في باب المندب"
    },
    revenueSources: [
      { source: "Port Investments", amount: "$300-500M/year", percentage: 40, color: "blue" },
      { source: "STC Support", amount: "$200-400M/year", percentage: 30, color: "amber" },
      { source: "Infrastructure Projects", amount: "$150-250M/year", percentage: 20, color: "green" },
      { source: "Military Bases", amount: "$100-150M/year", percentage: 10, color: "red" },
    ],
    keyDecisions: [
      { date: "2024-06", event: "Expanded operations at Aden port", impact: "medium" },
      { date: "2023-02", event: "Increased support for STC", impact: "medium" },
      { date: "2019-08", event: "Reduced military presence (official drawdown)", impact: "high" },
      { date: "2018-05", event: "Established military base in Socotra", impact: "medium" },
      { date: "2016-11", event: "Took control of Aden port operations", impact: "high" },
    ],
    challenges: {
      en: "Tensions with Saudi over southern Yemen, STC separatism complicates IRG unity, international scrutiny of military conduct",
      ar: "التوترات مع السعودية حول جنوب اليمن، الانفصالية الجنوبية تعقد وحدة الحكومة اليمنية، التدقيق الدولي في السلوك العسكري"
    }
  },
  {
    id: "stc",
    nameEn: "Southern Transitional Council (STC)",
    nameAr: "المجلس الانتقالي الجنوبي",
    type: "separatist-movement",
    color: "cyan",
    control: "Parts of southern governorates",
    population: "~3-4 million",
    capital: "Aden (de facto)",
    economicStrategy: {
      en: "Port revenue control (Aden), UAE financial support, local taxation, customs collection, pursuit of southern independence",
      ar: "السيطرة على عائدات الموانئ (عدن)، الدعم المالي الإماراتي، الضرائب المحلية، جمع الجمارك، السعي للاستقلال الجنوبي"
    },
    revenueSources: [
      { source: "Port Revenues (Aden share)", amount: "$200-300M/year", percentage: 40, color: "blue" },
      { source: "UAE Support", amount: "$150-250M/year", percentage: 30, color: "amber" },
      { source: "Local Taxes & Fees", amount: "$100-150M/year", percentage: 20, color: "purple" },
      { source: "Customs (partial)", amount: "$50-100M/year", percentage: 10, color: "green" },
    ],
    keyDecisions: [
      { date: "2024-11", event: "Renewed calls for southern independence", impact: "medium" },
      { date: "2022-12", event: "Riyadh Agreement implementation struggles", impact: "medium" },
      { date: "2020-06", event: "Declared self-administration in Aden", impact: "high" },
      { date: "2019-08", event: "Seized control of Aden from IRG", impact: "high" },
      { date: "2017-05", event: "Formal establishment of STC", impact: "high" },
    ],
    challenges: {
      en: "Limited international recognition, economic dependence on UAE, tensions with IRG, fragmented southern factions",
      ar: "الاعتراف الدولي المحدود، الاعتماد الاقتصادي على الإمارات، التوترات مع الحكومة اليمنية، الفصائل الجنوبية المجزأة"
    }
  },
];

export default function StakeholderHub() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const [selectedStakeholder, setSelectedStakeholder] = useState("irg-plc");

  const currentStakeholder = stakeholders.find(s => s.id === selectedStakeholder)!;

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-900", badge: "bg-blue-100 text-blue-800" },
      red: { bg: "bg-red-50", border: "border-red-200", text: "text-red-900", badge: "bg-red-100 text-red-800" },
      green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-900", badge: "bg-green-100 text-green-800" },
      amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-900", badge: "bg-amber-100 text-amber-800" },
      cyan: { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-900", badge: "bg-cyan-100 text-cyan-800" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50" dir={isArabic ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-16">
        <div className="container">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Users className="w-3 h-3 mr-1" />
            {isArabic ? "مركز استخبارات أصحاب المصلحة" : "Stakeholder Intelligence Hub"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? "تحليل أصحاب المصلحة الرئيسيين" : "Key Stakeholder Analysis"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {isArabic
              ? "تحليل شامل للجهات الفاعلة الرئيسية في الاقتصاد اليمني: الاستراتيجيات، مصادر الإيرادات، السيطرة الإقليمية، والتأثير الاقتصادي"
              : "Comprehensive analysis of key actors in Yemen's economy: strategies, revenue sources, territorial control, and economic impact"}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <Tabs value={selectedStakeholder} onValueChange={setSelectedStakeholder} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-4">
            {stakeholders.map(s => (
              <TabsTrigger key={s.id} value={s.id} className="text-sm">
                {isArabic ? s.nameAr.split(" ")[0] : s.nameEn.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {stakeholders.map(stakeholder => (
            <TabsContent key={stakeholder.id} value={stakeholder.id} className="space-y-6">
              {/* Overview Card */}
              <Card className={`${getColorClasses(stakeholder.color).bg} ${getColorClasses(stakeholder.color).border}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-3xl mb-2">
                        {isArabic ? stakeholder.nameAr : stakeholder.nameEn}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge className={getColorClasses(stakeholder.color).badge}>
                          {stakeholder.type.replace(/-/g, " ").toUpperCase()}
                        </Badge>
                        <Badge variant="outline">
                          <MapPin className="w-3 h-3 mr-1" />
                          {stakeholder.capital}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">{isArabic ? "السيطرة الإقليمية" : "Territorial Control"}</div>
                      <div className="text-2xl font-bold">{stakeholder.control}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">{isArabic ? "السكان المتأثرون" : "Population Affected"}</div>
                      <div className="text-2xl font-bold">{stakeholder.population}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">{isArabic ? "الإيرادات السنوية (تقديرية)" : "Annual Revenue (est.)"}</div>
                      <div className="text-2xl font-bold">
                        ${stakeholder.revenueSources.reduce((sum, r) => {
                          const avg = r.amount.match(/(\d+(?:\.\d+)?)-?(\d+(?:\.\d+)?)?/);
                          if (avg) {
                            const min = parseFloat(avg[1]);
                            const max = avg[2] ? parseFloat(avg[2]) : min;
                            return sum + (min + max) / 2;
                          }
                          return sum;
                        }, 0).toFixed(1)}B
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Economic Strategy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    {isArabic ? "الاستراتيجية الاقتصادية" : "Economic Strategy"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {isArabic ? stakeholder.economicStrategy.ar : stakeholder.economicStrategy.en}
                  </p>
                </CardContent>
              </Card>

              {/* Revenue Sources */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    {isArabic ? "مصادر الإيرادات" : "Revenue Sources"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stakeholder.revenueSources.map((revenue, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{revenue.source}</span>
                          <div className="text-right">
                            <div className="font-bold">{revenue.amount}</div>
                            <div className="text-xs text-gray-500">{revenue.percentage}%</div>
                          </div>
                        </div>
                        <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full bg-${revenue.color}-600`}
                            style={{ width: `${revenue.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Decisions Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Flag className="w-5 h-5" />
                    {isArabic ? "القرارات الاقتصادية الرئيسية" : "Key Economic Decisions"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {stakeholder.keyDecisions.map((decision, idx) => (
                      <div key={idx} className="flex items-start gap-4 pb-3 border-b last:border-0">
                        <div className="flex-shrink-0">
                          <Badge variant={decision.impact === "high" ? "destructive" : "secondary"} className="text-xs">
                            {decision.date}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{decision.event}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <Badge
                            variant="outline"
                            className={
                              decision.impact === "high"
                                ? "border-red-500 text-red-700"
                                : "border-amber-500 text-amber-700"
                            }
                          >
                            {decision.impact === "high" ? (isArabic ? "تأثير عالٍ" : "High Impact") : (isArabic ? "تأثير متوسط" : "Medium Impact")}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Challenges */}
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    {isArabic ? "التحديات الرئيسية" : "Key Challenges"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {isArabic ? stakeholder.challenges.ar : stakeholder.challenges.en}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Comparative Analysis */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              {isArabic ? "تحليل مقارن" : "Comparative Analysis"}
            </CardTitle>
            <CardDescription>
              {isArabic
                ? "مقارنة مصادر الإيرادات والسيطرة الإقليمية لجميع أصحاب المصلحة"
                : "Comparison of revenue sources and territorial control across all stakeholders"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">{isArabic ? "الجهة" : "Stakeholder"}</th>
                    <th className="text-left p-3">{isArabic ? "السيطرة" : "Control"}</th>
                    <th className="text-left p-3">{isArabic ? "السكان" : "Population"}</th>
                    <th className="text-left p-3">{isArabic ? "الإيرادات السنوية" : "Annual Revenue"}</th>
                    <th className="text-left p-3">{isArabic ? "المصدر الرئيسي" : "Primary Source"}</th>
                  </tr>
                </thead>
                <tbody>
                  {stakeholders.map((s, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{isArabic ? s.nameAr : s.nameEn}</td>
                      <td className="p-3">{s.control}</td>
                      <td className="p-3">{s.population}</td>
                      <td className="p-3 font-bold">
                        ${s.revenueSources.reduce((sum, r) => {
                          const avg = r.amount.match(/(\d+(?:\.\d+)?)-?(\d+(?:\.\d+)?)?/);
                          if (avg) {
                            const min = parseFloat(avg[1]);
                            const max = avg[2] ? parseFloat(avg[2]) : min;
                            return sum + (min + max) / 2;
                          }
                          return sum;
                        }, 0).toFixed(1)}B
                      </td>
                      <td className="p-3">{s.revenueSources[0].source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
