import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Search,
  Download,
  FileText,
  Target,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Users,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PolicyRecommendation {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  urgency: "high" | "medium" | "low";
  feasibility: "high" | "medium" | "low";
  impact: "high" | "medium" | "low";
  stakeholders: string[];
  timeline: string;
  evidenceBase: string;
  evidenceBaseAr: string;
  implementation: string[];
  implementationAr: string[];
  expectedImpact: string;
  expectedImpactAr: string;
  risks: string[];
  risksAr: string[];
}

const recommendations: PolicyRecommendation[] = [
  {
    id: "rec-001",
    title: "Unify the Central Bank under International Supervision",
    titleAr: "توحيد البنك المركزي تحت إشراف دولي",
    category: "monetary",
    urgency: "high",
    feasibility: "medium",
    impact: "high",
    stakeholders: ["IRG", "Houthis", "IMF", "World Bank", "UN"],
    timeline: "12-18 months",
    evidenceBase:
      "The CBY split has led to dual exchange rates, monetary policy fragmentation, and loss of correspondent banking. IMF Article IV (2025) recommends reunification as top priority.",
    evidenceBaseAr:
      "أدى انقسام البنك المركزي إلى أسعار صرف مزدوجة وتفتت السياسة النقدية وفقدان العلاقات المصرفية المراسلة. يوصي صندوق النقد الدولي (المادة الرابعة 2025) بإعادة التوحيد كأولوية قصوى.",
    implementation: [
      "Establish international technical committee",
      "Audit both CBY branches",
      "Agree on unified governance structure",
      "Merge foreign reserves under IMF custody",
      "Implement unified monetary policy",
    ],
    implementationAr: [
      "إنشاء لجنة تقنية دولية",
      "تدقيق كلا فرعي البنك المركزي",
      "الاتفاق على هيكل حوكمة موحد",
      "دمج الاحتياطيات الأجنبية تحت وصاية صندوق النقد الدولي",
      "تنفيذ سياسة نقدية موحدة",
    ],
    expectedImpact:
      "Stabilize exchange rate, restore correspondent banking, improve monetary policy effectiveness, increase donor confidence",
    expectedImpactAr:
      "استقرار سعر الصرف، استعادة العلاقات المصرفية المراسلة، تحسين فعالية السياسة النقدية، زيادة ثقة المانحين",
    risks: [
      "Political resistance from both sides",
      "Loss of revenue control",
      "Technical complexity",
    ],
    risksAr: [
      "مقاومة سياسية من الطرفين",
      "فقدان السيطرة على الإيرادات",
      "التعقيد التقني",
    ],
  },
  {
    id: "rec-002",
    title: "Implement Digital Payment Infrastructure",
    titleAr: "تنفيذ البنية التحتية للمدفوعات الرقمية",
    category: "financial",
    urgency: "high",
    feasibility: "high",
    impact: "high",
    stakeholders: ["CBY-Aden", "Commercial Banks", "Telecom Companies", "UNDP"],
    timeline: "6-12 months",
    evidenceBase:
      "Cash dependency (95% of transactions) increases costs, corruption, and security risks. Digital payments can improve transparency and financial inclusion.",
    evidenceBaseAr:
      "الاعتماد على النقد (95% من المعاملات) يزيد التكاليف والفساد والمخاطر الأمنية. يمكن للمدفوعات الرقمية تحسين الشفافية والشمول المالي.",
    implementation: [
      "Establish national payment switch",
      "License mobile money operators",
      "Digitize government salary payments",
      "Launch financial literacy campaign",
      "Provide regulatory framework",
    ],
    implementationAr: [
      "إنشاء مفتاح دفع وطني",
      "ترخيص مشغلي الأموال عبر الهاتف المحمول",
      "رقمنة مدفوعات رواتب الحكومة",
      "إطلاق حملة محو الأمية المالية",
      "توفير إطار تنظيمي",
    ],
    expectedImpact:
      "Reduce cash handling costs by 40%, improve salary payment transparency, increase tax collection, enhance financial inclusion",
    expectedImpactAr:
      "تقليل تكاليف التعامل النقدي بنسبة 40%، تحسين شفافية دفع الرواتب، زيادة تحصيل الضرائب، تعزيز الشمول المالي",
    risks: [
      "Infrastructure gaps",
      "Digital literacy challenges",
      "Cybersecurity threats",
    ],
    risksAr: [
      "فجوات البنية التحتية",
      "تحديات محو الأمية الرقمية",
      "تهديدات الأمن السيبراني",
    ],
  },
  {
    id: "rec-003",
    title: "Establish Aid Coordination Mechanism with Transparency Requirements",
    titleAr: "إنشاء آلية تنسيق المساعدات مع متطلبات الشفافية",
    category: "aid",
    urgency: "high",
    feasibility: "high",
    impact: "medium",
    stakeholders: ["UN", "World Bank", "Bilateral Donors", "IRG", "NGOs"],
    timeline: "3-6 months",
    evidenceBase:
      "Aid fragmentation and lack of coordination reduce effectiveness. Only 30% of aid flows through government systems. Transparency requirements can improve accountability.",
    evidenceBaseAr:
      "تجزئة المساعدات ونقص التنسيق يقللان من الفعالية. 30% فقط من المساعدات تتدفق عبر الأنظمة الحكومية. يمكن لمتطلبات الشفافية تحسين المساءلة.",
    implementation: [
      "Create multi-donor coordination platform",
      "Establish public aid tracking database",
      "Require quarterly reporting from all recipients",
      "Conduct independent audits",
      "Publish all aid flows online",
    ],
    implementationAr: [
      "إنشاء منصة تنسيق متعددة المانحين",
      "إنشاء قاعدة بيانات عامة لتتبع المساعدات",
      "طلب تقارير ربع سنوية من جميع المستفيدين",
      "إجراء تدقيقات مستقلة",
      "نشر جميع تدفقات المساعدات عبر الإنترنت",
    ],
    expectedImpact:
      "Improve aid effectiveness by 25%, reduce duplication, increase public trust, enhance donor coordination",
    expectedImpactAr:
      "تحسين فعالية المساعدات بنسبة 25%، تقليل الازدواجية، زيادة الثقة العامة، تعزيز تنسيق المانحين",
    risks: [
      "Resistance from aid recipients",
      "Data collection challenges",
      "Political sensitivities",
    ],
    risksAr: [
      "مقاومة من متلقي المساعدات",
      "تحديات جمع البيانات",
      "الحساسيات السياسية",
    ],
  },
  {
    id: "rec-004",
    title: "Reform Banking Sector with Recapitalization Program",
    titleAr: "إصلاح القطاع المصرفي مع برنامج إعادة رسملة",
    category: "banking",
    urgency: "medium",
    feasibility: "medium",
    impact: "high",
    stakeholders: ["CBY-Aden", "Commercial Banks", "World Bank", "IFC"],
    timeline: "18-24 months",
    evidenceBase:
      "Most banks are undercapitalized and non-compliant with Basel standards. NPL ratios exceed 40%. Recapitalization is needed to restore banking sector health.",
    evidenceBaseAr:
      "معظم البنوك تعاني من نقص رأس المال وعدم الامتثال لمعايير بازل. نسب القروض المتعثرة تتجاوز 40%. إعادة الرسملة ضرورية لاستعادة صحة القطاع المصرفي.",
    implementation: [
      "Conduct comprehensive asset quality review",
      "Set minimum capital requirements",
      "Establish bank resolution framework",
      "Provide capital injection for viable banks",
      "Close or merge insolvent banks",
    ],
    implementationAr: [
      "إجراء مراجعة شاملة لجودة الأصول",
      "تحديد متطلبات رأس المال الأدنى",
      "إنشاء إطار لحل البنوك",
      "توفير ضخ رأس المال للبنوك القابلة للاستمرار",
      "إغلاق أو دمج البنوك المعسرة",
    ],
    expectedImpact:
      "Restore banking sector stability, improve credit availability, attract foreign investment, restore correspondent banking",
    expectedImpactAr:
      "استعادة استقرار القطاع المصرفي، تحسين توافر الائتمان، جذب الاستثمار الأجنبي، استعادة العلاقات المصرفية المراسلة",
    risks: [
      "High fiscal cost",
      "Political interference",
      "Moral hazard",
    ],
    risksAr: [
      "تكلفة مالية عالية",
      "التدخل السياسي",
      "المخاطر الأخلاقية",
    ],
  },
  {
    id: "rec-005",
    title: "Create Independent Fiscal Transparency Commission",
    titleAr: "إنشاء لجنة مستقلة للشفافية المالية",
    category: "governance",
    urgency: "medium",
    feasibility: "medium",
    impact: "medium",
    stakeholders: ["IRG", "Parliament", "Civil Society", "International Partners"],
    timeline: "6-12 months",
    evidenceBase:
      "Lack of fiscal transparency enables corruption and reduces donor confidence. Independent oversight can improve accountability and governance.",
    evidenceBaseAr:
      "نقص الشفافية المالية يمكّن الفساد ويقلل ثقة المانحين. يمكن للرقابة المستقلة تحسين المساءلة والحوكمة.",
    implementation: [
      "Draft legislation establishing commission",
      "Appoint independent commissioners",
      "Grant access to all fiscal data",
      "Publish quarterly fiscal reports",
      "Conduct corruption investigations",
    ],
    implementationAr: [
      "صياغة تشريع لإنشاء اللجنة",
      "تعيين مفوضين مستقلين",
      "منح الوصول إلى جميع البيانات المالية",
      "نشر تقارير مالية ربع سنوية",
      "إجراء تحقيقات في الفساد",
    ],
    expectedImpact:
      "Reduce corruption by 30%, increase budget transparency, improve donor confidence, enhance public accountability",
    expectedImpactAr:
      "تقليل الفساد بنسبة 30%، زيادة شفافية الموازنة، تحسين ثقة المانحين، تعزيز المساءلة العامة",
    risks: [
      "Political resistance",
      "Lack of enforcement power",
      "Resource constraints",
    ],
    risksAr: [
      "المقاومة السياسية",
      "نقص سلطة الإنفاذ",
      "قيود الموارد",
    ],
  },
];

export default function PolicyRecommendations() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [urgencyFilter, setUrgencyFilter] = useState("all");
  const [feasibilityFilter, setFeasibilityFilter] = useState("all");

  const filteredRecommendations = recommendations.filter((rec) => {
    const matchesSearch =
      rec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.titleAr.includes(searchQuery);
    const matchesCategory = categoryFilter === "all" || rec.category === categoryFilter;
    const matchesUrgency = urgencyFilter === "all" || rec.urgency === urgencyFilter;
    const matchesFeasibility = feasibilityFilter === "all" || rec.feasibility === feasibilityFilter;

    return matchesSearch && matchesCategory && matchesUrgency && matchesFeasibility;
  });

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "default";
    }
  };

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case "high":
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case "medium":
        return <TrendingUp className="w-4 h-4 text-yellow-500" />;
      case "low":
        return <TrendingUp className="w-4 h-4 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "التوصيات السياسية" : "Policy Recommendations"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic
                ? "توصيات قائمة على الأدلة لصناع السياسات وأصحاب المصلحة لمعالجة التحديات الاقتصادية في اليمن"
                : "Evidence-based recommendations for policymakers and stakeholders to address Yemen's economic challenges"}
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                {isArabic ? "البحث والتصفية" : "Search & Filter"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <Input
                  placeholder={isArabic ? "بحث..." : "Search..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="md:col-span-4"
                />

                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder={isArabic ? "الفئة" : "Category"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{isArabic ? "جميع الفئات" : "All Categories"}</SelectItem>
                    <SelectItem value="monetary">{isArabic ? "السياسة النقدية" : "Monetary Policy"}</SelectItem>
                    <SelectItem value="financial">{isArabic ? "البنية المالية" : "Financial Infrastructure"}</SelectItem>
                    <SelectItem value="banking">{isArabic ? "القطاع المصرفي" : "Banking Sector"}</SelectItem>
                    <SelectItem value="aid">{isArabic ? "تنسيق المساعدات" : "Aid Coordination"}</SelectItem>
                    <SelectItem value="governance">{isArabic ? "الحوكمة" : "Governance"}</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder={isArabic ? "الأولوية" : "Urgency"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{isArabic ? "جميع الأولويات" : "All Urgencies"}</SelectItem>
                    <SelectItem value="high">{isArabic ? "عالية" : "High"}</SelectItem>
                    <SelectItem value="medium">{isArabic ? "متوسطة" : "Medium"}</SelectItem>
                    <SelectItem value="low">{isArabic ? "منخفضة" : "Low"}</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={feasibilityFilter} onValueChange={setFeasibilityFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder={isArabic ? "الجدوى" : "Feasibility"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{isArabic ? "جميع المستويات" : "All Levels"}</SelectItem>
                    <SelectItem value="high">{isArabic ? "عالية" : "High"}</SelectItem>
                    <SelectItem value="medium">{isArabic ? "متوسطة" : "Medium"}</SelectItem>
                    <SelectItem value="low">{isArabic ? "منخفضة" : "Low"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-4 text-sm text-muted-foreground">
                {isArabic ? "عرض" : "Showing"} {filteredRecommendations.length} {isArabic ? "من" : "of"}{" "}
                {recommendations.length} {isArabic ? "توصية" : "recommendations"}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations List */}
          <div className="space-y-6">
            {filteredRecommendations.map((rec) => (
              <Card key={rec.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">
                        {isArabic ? rec.titleAr : rec.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant={getUrgencyColor(rec.urgency)}>
                          {isArabic ? "أولوية" : "Urgency"}:{" "}
                          {isArabic
                            ? rec.urgency === "high"
                              ? "عالية"
                              : rec.urgency === "medium"
                              ? "متوسطة"
                              : "منخفضة"
                            : rec.urgency}
                        </Badge>
                        <Badge variant="outline">
                          {isArabic ? "الجدوى" : "Feasibility"}:{" "}
                          {isArabic
                            ? rec.feasibility === "high"
                              ? "عالية"
                              : rec.feasibility === "medium"
                              ? "متوسطة"
                              : "منخفضة"
                            : rec.feasibility}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          {getImpactIcon(rec.impact)}
                          {isArabic ? "التأثير" : "Impact"}:{" "}
                          {isArabic
                            ? rec.impact === "high"
                              ? "عالي"
                              : rec.impact === "medium"
                              ? "متوسط"
                              : "منخفض"
                            : rec.impact}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {rec.timeline}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Evidence Base */}
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      {isArabic ? "الأساس الأدلة" : "Evidence Base"}
                    </h3>
                    <p className="text-muted-foreground">
                      {isArabic ? rec.evidenceBaseAr : rec.evidenceBase}
                    </p>
                  </div>

                  {/* Stakeholders */}
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {isArabic ? "أصحاب المصلحة" : "Stakeholders"}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {rec.stakeholders.map((stakeholder) => (
                        <Badge key={stakeholder} variant="secondary">
                          {stakeholder}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Implementation Steps */}
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      {isArabic ? "خطوات التنفيذ" : "Implementation Steps"}
                    </h3>
                    <ul className="space-y-2">
                      {(isArabic ? rec.implementationAr : rec.implementation).map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expected Impact */}
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      {isArabic ? "التأثير المتوقع" : "Expected Impact"}
                    </h3>
                    <p className="text-muted-foreground">
                      {isArabic ? rec.expectedImpactAr : rec.expectedImpact}
                    </p>
                  </div>

                  {/* Risks */}
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      {isArabic ? "المخاطر" : "Risks"}
                    </h3>
                    <ul className="space-y-1">
                      {(isArabic ? rec.risksAr : rec.risks).map((risk, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-yellow-500">•</span>
                          <span className="text-muted-foreground">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Download Button */}
                  <div className="pt-4 border-t">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-4 h-4" />
                      {isArabic ? "تحميل موجز السياسة" : "Download Policy Brief"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredRecommendations.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  {isArabic ? "لا توجد توصيات تطابق معايير البحث" : "No recommendations match your search criteria"}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
