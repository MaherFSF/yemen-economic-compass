import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingDown, TrendingUp, AlertTriangle, CheckCircle2, Download,
  DollarSign, Users, Building2, BarChart3, FileText, Globe, Target
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ExecutiveDashboard() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [selectedPeriod, setSelectedPeriod] = useState("2024");

  const t = {
    title: {
      ar: "لوحة المتابعة التنفيذية",
      en: "Executive Dashboard"
    },
    subtitle: {
      ar: "مؤشرات الأداء الرئيسية للمانحين والمؤسسات الدولية",
      en: "Key Performance Indicators for Donors and International Institutions"
    },
    overview: {
      ar: "نظرة عامة",
      en: "Overview"
    },
    projects: {
      ar: "المشاريع",
      en: "Projects"
    },
    impact: {
      ar: "الأثر",
      en: "Impact"
    },
    risks: {
      ar: "المخاطر",
      en: "Risks"
    },
    download: {
      ar: "تنزيل التقرير",
      en: "Download Report"
    },
    exportData: {
      ar: "تصدير البيانات",
      en: "Export Data"
    }
  };

  const kpis = [
    {
      id: "disbursement",
      title: { ar: "المبالغ المصروفة", en: "Disbursements" },
      value: "$2.4B",
      change: "+12%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
      description: { ar: "إجمالي المبالغ المصروفة في 2024", en: "Total disbursed in 2024" }
    },
    {
      id: "beneficiaries",
      title: { ar: "المستفيدون", en: "Beneficiaries" },
      value: "8.2M",
      change: "+18%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: { ar: "عدد المستفيدين المباشرين", en: "Direct beneficiaries reached" }
    },
    {
      id: "projects",
      title: { ar: "المشاريع النشطة", en: "Active Projects" },
      value: "47",
      change: "+5",
      trend: "up",
      icon: Building2,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: { ar: "مشاريع قيد التنفيذ", en: "Projects under implementation" }
    },
    {
      id: "risk",
      title: { ar: "مؤشر المخاطر", en: "Risk Index" },
      value: "High",
      change: "↑",
      trend: "down",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      description: { ar: "مخاطر التنفيذ والأمن", en: "Implementation & security risks" }
    }
  ];

  const activeProjects = [
    {
      id: "fmi",
      name: {
        ar: "مشروع البنية التحتية للسوق المالي",
        en: "Financial Market Infrastructure Project"
      },
      donor: "World Bank",
      amount: "$20M",
      progress: 35,
      status: "on-track",
      beneficiaries: "2.5M",
      startDate: "Jan 2025",
      endDate: "Dec 2027"
    },
    {
      id: "cash-transfer",
      name: {
        ar: "برنامج التحويلات النقدية الطارئة",
        en: "Emergency Cash Transfer Program"
      },
      donor: "UNDP / World Bank",
      amount: "$420M",
      progress: 78,
      status: "on-track",
      beneficiaries: "1.5M households",
      startDate: "Mar 2022",
      endDate: "Dec 2024"
    },
    {
      id: "health",
      name: {
        ar: "مشروع الاستجابة الصحية الطارئة",
        en: "Emergency Health Response Project"
      },
      donor: "World Bank / WHO",
      amount: "$200M",
      progress: 62,
      status: "at-risk",
      beneficiaries: "5.2M",
      startDate: "Jun 2020",
      endDate: "Jun 2025"
    },
    {
      id: "food-security",
      name: {
        ar: "برنامج الأمن الغذائي والتغذية",
        en: "Food Security and Nutrition Program"
      },
      donor: "WFP / USAID",
      amount: "$1.2B",
      progress: 85,
      status: "on-track",
      beneficiaries: "12.9M",
      startDate: "Jan 2020",
      endDate: "Dec 2024"
    }
  ];

  const impactMetrics = [
    {
      category: { ar: "الوصول إلى الخدمات المالية", en: "Financial Access" },
      baseline: "15%",
      current: "23%",
      target: "35%",
      progress: 53
    },
    {
      category: { ar: "معدل الفقر", en: "Poverty Rate" },
      baseline: "80%",
      current: "71%",
      target: "60%",
      progress: 45
    },
    {
      category: { ar: "الأمن الغذائي", en: "Food Security" },
      baseline: "45%",
      current: "58%",
      target: "75%",
      progress: 43
    },
    {
      category: { ar: "الوصول إلى الرعاية الصحية", en: "Healthcare Access" },
      baseline: "40%",
      current: "51%",
      target: "70%",
      progress: 37
    }
  ];

  const riskAssessment = [
    {
      risk: { ar: "تصعيد عسكري", en: "Military Escalation" },
      level: "high",
      impact: { ar: "شديد", en: "Severe" },
      mitigation: { ar: "تعليق مؤقت للأنشطة الميدانية", en: "Temporary suspension of field activities" }
    },
    {
      risk: { ar: "انهيار العملة", en: "Currency Collapse" },
      level: "high",
      impact: { ar: "شديد", en: "Severe" },
      mitigation: { ar: "التحويلات المباشرة بالدولار", en: "Direct USD transfers" }
    },
    {
      risk: { ar: "تعطل سلاسل الإمداد", en: "Supply Chain Disruption" },
      level: "medium",
      impact: { ar: "متوسط", en: "Moderate" },
      mitigation: { ar: "مخزون احتياطي استراتيجي", en: "Strategic buffer stocks" }
    },
    {
      risk: { ar: "تقييد الوصول الإنساني", en: "Humanitarian Access Restrictions" },
      level: "medium",
      impact: { ar: "متوسط", en: "Moderate" },
      mitigation: { ar: "شراكات محلية قوية", en: "Strong local partnerships" }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-12">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                {isArabic ? t.title.ar : t.title.en}
              </h1>
              <p className="text-lg text-blue-100">
                {isArabic ? t.subtitle.ar : t.subtitle.en}
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Download className="h-4 w-4 mr-2" />
                {isArabic ? t.download.ar : t.download.en}
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <FileText className="h-4 w-4 mr-2" />
                {isArabic ? t.exportData.ar : t.exportData.en}
              </Button>
            </div>
          </div>

          {/* Period Selector */}
          <div className="flex gap-2">
            {["2024", "2023", "2022", "All Time"].map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? "secondary" : "outline"}
                size="sm"
                onClick={() => setSelectedPeriod(period)}
                className={selectedPeriod === period ? "" : "bg-white/10 border-white/30 text-white hover:bg-white/20"}
              >
                {period}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <Card key={kpi.id} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${kpi.bgColor} p-3 rounded-lg`}>
                      <Icon className={`h-6 w-6 ${kpi.color}`} />
                    </div>
                    <Badge variant={kpi.trend === "up" ? "default" : "destructive"}>
                      {kpi.change}
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold mb-1">{kpi.value}</div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    {isArabic ? kpi.title.ar : kpi.title.en}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {isArabic ? kpi.description.ar : kpi.description.en}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto">
            <TabsTrigger value="projects">
              <Building2 className="h-4 w-4 mr-2" />
              {isArabic ? t.projects.ar : t.projects.en}
            </TabsTrigger>
            <TabsTrigger value="impact">
              <Target className="h-4 w-4 mr-2" />
              {isArabic ? t.impact.ar : t.impact.en}
            </TabsTrigger>
            <TabsTrigger value="risks">
              <AlertTriangle className="h-4 w-4 mr-2" />
              {isArabic ? t.risks.ar : t.risks.en}
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-4">
            {activeProjects.map((project) => (
              <Card key={project.id} className="border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {isArabic ? project.name.ar : project.name.en}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 text-base">
                        <span className="flex items-center gap-1">
                          <Globe className="h-4 w-4" />
                          {project.donor}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {project.amount}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {project.beneficiaries}
                        </span>
                      </CardDescription>
                    </div>
                    <Badge variant={project.status === "on-track" ? "default" : "destructive"}>
                      {project.status === "on-track" ? (
                        <>
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          {isArabic ? "على المسار" : "On Track"}
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          {isArabic ? "معرض للخطر" : "At Risk"}
                        </>
                      )}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {isArabic ? "التقدم" : "Progress"}
                      </span>
                      <span className="font-semibold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          project.status === "on-track" ? "bg-green-600" : "bg-red-600"
                        }`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{project.startDate}</span>
                      <span>{project.endDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  {isArabic ? "مؤشرات الأثر الرئيسية" : "Key Impact Indicators"}
                </CardTitle>
                <CardDescription>
                  {isArabic
                    ? "التقدم نحو الأهداف الاستراتيجية"
                    : "Progress towards strategic objectives"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {impactMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">
                        {isArabic ? metric.category.ar : metric.category.en}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {metric.progress}% {isArabic ? "من الهدف" : "of target"}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-600"
                        style={{ width: `${metric.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {isArabic ? "الأساس" : "Baseline"}: {metric.baseline}
                      </span>
                      <span>
                        {isArabic ? "الحالي" : "Current"}: {metric.current}
                      </span>
                      <span>
                        {isArabic ? "الهدف" : "Target"}: {metric.target}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Risks Tab */}
          <TabsContent value="risks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  {isArabic ? "تقييم المخاطر" : "Risk Assessment"}
                </CardTitle>
                <CardDescription>
                  {isArabic
                    ? "المخاطر الرئيسية واستراتيجيات التخفيف"
                    : "Key risks and mitigation strategies"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskAssessment.map((item, index) => (
                    <div key={index} className="border-l-4 border-red-500 pl-4 py-2">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-lg">
                          {isArabic ? item.risk.ar : item.risk.en}
                        </h4>
                        <Badge variant={item.level === "high" ? "destructive" : "secondary"}>
                          {item.level === "high"
                            ? isArabic
                              ? "عالي"
                              : "High"
                            : isArabic
                            ? "متوسط"
                            : "Medium"}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div>
                          <span className="font-medium text-muted-foreground">
                            {isArabic ? "الأثر:" : "Impact:"}
                          </span>{" "}
                          <span>{isArabic ? item.impact.ar : item.impact.en}</span>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">
                            {isArabic ? "استراتيجية التخفيف:" : "Mitigation:"}
                          </span>{" "}
                          <span>{isArabic ? item.mitigation.ar : item.mitigation.en}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
