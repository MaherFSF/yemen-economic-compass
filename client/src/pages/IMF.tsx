import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, FileText, TrendingDown, Users, DollarSign, Calendar, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function IMF() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const missions = [
    {
      date: "May 2024",
      title: "IMF Staff Visit to Aden",
      focus: "Macroeconomic Reform Framework",
      outcomes: ["Exchange rate unification roadmap", "Fiscal consolidation strategy", "Banking sector assessment"],
      report: "IMF Country Report No. 2024/156"
    },
    {
      date: "October 2022",
      title: "Article IV Consultation",
      focus: "Economic Assessment",
      outcomes: ["GDP contraction analysis", "Inflation projections", "Debt sustainability review"],
      report: "IMF Country Report No. 2022/312"
    },
    {
      date: "March 2021",
      title: "Emergency Financing Assessment",
      focus: "COVID-19 Response",
      outcomes: ["Rapid Credit Facility evaluation", "Health expenditure needs", "Social protection gaps"],
      report: "IMF Country Report No. 2021/089"
    }
  ];

  const keyRecommendations = [
    {
      category: "Monetary Policy",
      recommendations: [
        "Unify exchange rates between Aden and Sana'a",
        "Strengthen CBY-Aden operational independence",
        "Implement transparent FX auction mechanism",
        "Rebuild foreign exchange reserves"
      ]
    },
    {
      category: "Fiscal Policy",
      recommendations: [
        "Restore oil export revenues",
        "Expand non-oil revenue base",
        "Rationalize public expenditure",
        "Resume salary payments nationwide"
      ]
    },
    {
      category: "Banking Sector",
      recommendations: [
        "Recapitalize distressed banks",
        "Strengthen banking supervision",
        "Address NPL accumulation",
        "Restore correspondent banking relationships"
      ]
    },
    {
      category: "Governance",
      recommendations: [
        "Enhance fiscal transparency",
        "Strengthen anti-corruption measures",
        "Improve public financial management",
        "Establish unified economic data system"
      ]
    }
  ];

  const economicProjections = [
    { indicator: "Real GDP Growth", value: "-2.0%", year: "2023", source: "IMF WEO Oct 2023" },
    { indicator: "Inflation (CPI)", value: "28.0%", year: "2023", source: "IMF WEO Oct 2023" },
    { indicator: "Fiscal Balance", value: "-12.5% of GDP", year: "2023", source: "IMF Staff Estimates" },
    { indicator: "Public Debt", value: "100% of GDP", year: "2024", source: "IMF Debt Sustainability Analysis" },
    { indicator: "Current Account", value: "-8.2% of GDP", year: "2023", source: "IMF Balance of Payments" }
  ];

  const staffContacts = [
    { name: "Taline Koranchelian", title: "Mission Chief for Yemen", department: "Middle East and Central Asia Department" },
    { name: "Jihad Azour", title: "Director, MCD", department: "Middle East and Central Asia Department" },
    { name: "Kristalina Georgieva", title: "Managing Director", department: "IMF Leadership" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          {/* IMF Logo */}
          <div className="mb-8 text-center">
            <img 
              src="/logos/imf.svg" 
              alt="IMF Logo" 
              className="h-20 w-auto mx-auto filter brightness-0 invert opacity-90"
            />
          </div>
          
          <div className="flex items-start gap-6">
            <div className="bg-slate-100 backdrop-blur-sm p-4 rounded-2xl">
              <Building2 className="w-16 h-16" />
            </div>
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-4">
                {isArabic ? "صندوق النقد الدولي" : "International Monetary Fund"}
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                {isArabic 
                  ? "المؤسسة المالية الدولية الرائدة في تقديم المشورة الاقتصادية والدعم المالي لليمن"
                  : "Leading international financial institution providing economic advice and financial support to Yemen"
                }
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-slate-200 text-white border-white/30">
                  <Users className="w-4 h-4 mr-2" />
                  {isArabic ? "مؤسسة متعددة الأطراف" : "Multilateral Institution"}
                </Badge>
                <Badge variant="secondary" className="bg-slate-200 text-white border-white/30">
                  <DollarSign className="w-4 h-4 mr-2" />
                  {isArabic ? "دعم مالي وفني" : "Financial & Technical Support"}
                </Badge>
                <Badge variant="secondary" className="bg-slate-200 text-white border-white/30">
                  <FileText className="w-4 h-4 mr-2" />
                  {isArabic ? "تقارير اقتصادية" : "Economic Reports"}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Key Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader className="pb-3">
              <CardDescription>{isArabic ? "آخر زيارة" : "Last Mission"}</CardDescription>
              <CardTitle className="text-3xl">May 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{isArabic ? "زيارة فريق الصندوق إلى عدن" : "Staff visit to Aden"}</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader className="pb-3">
              <CardDescription>{isArabic ? "التقارير المنشورة" : "Published Reports"}</CardDescription>
              <CardTitle className="text-3xl">45+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{isArabic ? "منذ 2011" : "Since 2011"}</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardHeader className="pb-3">
              <CardDescription>{isArabic ? "توقعات النمو 2024" : "Growth Forecast 2024"}</CardDescription>
              <CardTitle className="text-3xl text-orange-600">-2.0%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{isArabic ? "انكماش الناتج المحلي" : "Real GDP contraction"}</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-600">
            <CardHeader className="pb-3">
              <CardDescription>{isArabic ? "توقعات التضخم 2024" : "Inflation Forecast 2024"}</CardDescription>
              <CardTitle className="text-3xl text-red-600">30%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{isArabic ? "معدل التضخم السنوي" : "Annual CPI inflation"}</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="missions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="missions">{isArabic ? "البعثات" : "Missions"}</TabsTrigger>
            <TabsTrigger value="recommendations">{isArabic ? "التوصيات" : "Recommendations"}</TabsTrigger>
            <TabsTrigger value="projections">{isArabic ? "التوقعات" : "Projections"}</TabsTrigger>
            <TabsTrigger value="reports">{isArabic ? "التقارير" : "Reports"}</TabsTrigger>
            <TabsTrigger value="contacts">{isArabic ? "الاتصالات" : "Contacts"}</TabsTrigger>
          </TabsList>

          {/* Missions Tab */}
          <TabsContent value="missions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {isArabic ? "بعثات صندوق النقد الدولي إلى اليمن" : "IMF Missions to Yemen"}
                </CardTitle>
                <CardDescription>
                  {isArabic 
                    ? "زيارات الخبراء والتقييمات الاقتصادية الرئيسية"
                    : "Staff visits and key economic assessments"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {missions.map((mission, index) => (
                  <div key={index} className="border-l-4 border-l-blue-500 pl-6 py-4 bg-slate-50 rounded-r-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold">{mission.title}</h3>
                        <p className="text-sm text-muted-foreground">{mission.date}</p>
                      </div>
                      <Badge>{mission.focus}</Badge>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">{isArabic ? "النتائج الرئيسية:" : "Key Outcomes:"}</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {mission.outcomes.map((outcome, i) => (
                          <li key={i}>{outcome}</li>
                        ))}
                      </ul>
                      <p className="text-sm text-blue-600 font-medium mt-3">
                        📄 {mission.report}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recommendations Tab */}
          <TabsContent value="recommendations" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {keyRecommendations.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.recommendations.map((rec, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">→</span>
                          <span className="text-sm">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Projections Tab */}
          <TabsContent value="projections" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5" />
                  {isArabic ? "التوقعات الاقتصادية لليمن" : "Economic Projections for Yemen"}
                </CardTitle>
                <CardDescription>
                  {isArabic ? "أحدث تقديرات صندوق النقد الدولي" : "Latest IMF estimates and forecasts"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {economicProjections.map((proj, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-semibold">{proj.indicator}</p>
                        <p className="text-xs text-muted-foreground">{proj.source}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">{proj.value}</p>
                        <p className="text-xs text-muted-foreground">{proj.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  {isArabic ? "تقارير صندوق النقد الدولي عن اليمن" : "IMF Reports on Yemen"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a href="https://www.imf.org/en/Countries/YEM" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                    <div>
                      <p className="font-semibold">IMF Country Page - Yemen</p>
                      <p className="text-sm text-muted-foreground">All reports, data, and analysis</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                  </a>
                  <a href="https://www.imf.org/en/Publications/WEO" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                    <div>
                      <p className="font-semibold">World Economic Outlook Database</p>
                      <p className="text-sm text-muted-foreground">Economic indicators and projections</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                  </a>
                  <a href="https://www.imf.org/en/Publications/REO/MECA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                    <div>
                      <p className="font-semibold">Regional Economic Outlook - MENA</p>
                      <p className="text-sm text-muted-foreground">Middle East regional analysis</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {isArabic ? "فريق صندوق النقد الدولي لليمن" : "IMF Yemen Team"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {staffContacts.map((contact, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <p className="font-bold text-lg">{contact.name}</p>
                      <p className="text-sm text-blue-600">{contact.title}</p>
                      <p className="text-xs text-muted-foreground">{contact.department}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm">
                    <strong>{isArabic ? "للاستفسارات الإعلامية:" : "For media inquiries:"}</strong><br />
                    IMF Communications Department<br />
                    Email: media@imf.org<br />
                    Phone: +1 202 623-7100
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
