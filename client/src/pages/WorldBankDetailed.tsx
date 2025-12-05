import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, DollarSign, Users, FileText, TrendingUp, ExternalLink, CheckCircle2, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WorldBankDetailed() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const activeProjects = [
    {
      name: "Yemen Emergency Electricity Access Project (YEEAP)",
      id: "P178933",
      amount: "$50 million",
      status: "Active",
      startDate: "2022",
      endDate: "2026",
      beneficiaries: "1.5 million people",
      sectors: ["Energy", "Infrastructure"],
      description: "Provides emergency electricity access through solar systems and mini-grids in underserved areas",
      components: [
        "Solar home systems distribution",
        "Mini-grid development",
        "Capacity building for local utilities"
      ]
    },
    {
      name: "Yemen Emergency Health and Nutrition Project (EHNP)",
      id: "P171713",
      amount: "$300 million",
      status: "Active",
      startDate: "2020",
      endDate: "2025",
      beneficiaries: "8.5 million people",
      sectors: ["Health", "Nutrition"],
      description: "Supports delivery of essential health and nutrition services nationwide",
      components: [
        "Primary healthcare service delivery",
        "Nutrition programs for children and mothers",
        "Health worker incentives",
        "Medical supplies and equipment"
      ]
    },
    {
      name: "Yemen Emergency Crisis Response Project (ECRP)",
      id: "P168101",
      amount: "$204 million",
      status: "Active",
      startDate: "2019",
      endDate: "2025",
      beneficiaries: "9 million people",
      sectors: ["Social Protection", "Cash Transfers"],
      description: "Provides emergency cash transfers to vulnerable households",
      components: [
        "Unconditional cash transfers",
        "Targeting and registration system",
        "Payment infrastructure",
        "Monitoring and evaluation"
      ]
    },
    {
      name: "Yemen Integrated Urban Services Emergency Project (YIUSEP)",
      id: "P177359",
      amount: "$150 million",
      status: "Active",
      startDate: "2021",
      endDate: "2026",
      beneficiaries: "3.2 million people",
      sectors: ["Urban Development", "Water", "Sanitation"],
      description: "Restores urban services including water, sanitation, and solid waste management",
      components: [
        "Water supply rehabilitation",
        "Sanitation infrastructure",
        "Solid waste management",
        "Urban road repairs"
      ]
    },
    {
      name: "Yemen Financial Management Information System (FMI)",
      id: "P176129",
      amount: "$25 million",
      status: "Active",
      startDate: "2021",
      endDate: "2025",
      beneficiaries: "Government institutions",
      sectors: ["Governance", "Public Financial Management"],
      description: "Strengthens public financial management systems and transparency",
      components: [
        "Core FMIS implementation",
        "Treasury operations modernization",
        "Budget execution monitoring",
        "Capacity building for MOF staff"
      ]
    },
    {
      name: "Yemen Real-Time Gross Settlement System (RTGS)",
      id: "P175965",
      amount: "$15 million",
      status: "Active",
      startDate: "2021",
      endDate: "2025",
      beneficiaries: "Banking sector",
      sectors: ["Financial Sector", "Banking"],
      description: "Modernizes payment systems and strengthens CBY-Aden operations",
      components: [
        "RTGS system implementation",
        "Interbank settlement platform",
        "Payment system oversight",
        "CBY technical assistance"
      ]
    }
  ];

  const completedProjects = [
    {
      name: "Yemen Emergency Electricity Access Project Phase I",
      amount: "$30 million",
      period: "2018-2021",
      beneficiaries: "500,000 people",
      outcome: "Provided solar home systems to 100,000 households"
    },
    {
      name: "Yemen Emergency Health and Nutrition Project Phase I",
      amount: "$200 million",
      period: "2017-2020",
      beneficiaries: "7 million people",
      outcome: "Maintained essential health services in 2,500 facilities"
    }
  ];

  const fundingByYear = [
    { year: "2020", amount: "$450M", projects: 5 },
    { year: "2021", amount: "$380M", projects: 7 },
    { year: "2022", amount: "$290M", projects: 4 },
    { year: "2023", amount: "$320M", projects: 6 },
    { year: "2024", amount: "$280M", projects: 5 }
  ];

  const keyStaff = [
    {
      name: "Tania Meyer",
      title: "Country Director for Yemen",
      department: "Middle East Department",
      responsibilities: "Overall strategy and portfolio management"
    },
    {
      name: "Wael Zakout",
      title: "Practice Manager",
      department: "Social Protection & Jobs",
      responsibilities: "Cash transfer programs and social safety nets"
    },
    {
      name: "Sameh Wahba",
      title: "Global Director",
      department: "Urban, Disaster Risk Management, Resilience and Land",
      responsibilities: "Urban services and infrastructure projects"
    }
  ];

  const reports = [
    {
      title: "Yemen Economic Monitoring Report - Fall 2024",
      date: "October 2024",
      type: "Economic Update",
      link: "https://www.worldbank.org/en/country/yemen/publication"
    },
    {
      title: "Yemen Poverty Assessment 2023",
      date: "June 2023",
      type: "Analytical Report",
      link: "https://www.worldbank.org/en/country/yemen/publication"
    },
    {
      title: "Yemen Public Expenditure Review",
      date: "March 2023",
      type: "Policy Report",
      link: "https://www.worldbank.org/en/country/yemen/publication"
    },
    {
      title: "Yemen Financial Sector Assessment",
      date: "December 2022",
      type: "Sector Study",
      link: "https://www.worldbank.org/en/country/yemen/publication"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
              <Building2 className="w-16 h-16" />
            </div>
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-4">
                {isArabic ? "البنك الدولي في اليمن" : "World Bank in Yemen"}
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                {isArabic 
                  ? "أكبر مانح متعدد الأطراف يدعم اليمن بمشاريع في الصحة والتعليم والبنية التحتية والحماية الاجتماعية"
                  : "Largest multilateral donor supporting Yemen with projects in health, education, infrastructure, and social protection"
                }
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <DollarSign className="w-4 h-4 mr-2" />
                  {isArabic ? "$1.7 مليار محفظة نشطة" : "$1.7B Active Portfolio"}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Users className="w-4 h-4 mr-2" />
                  {isArabic ? "25+ مليون مستفيد" : "25M+ Beneficiaries"}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <FileText className="w-4 h-4 mr-2" />
                  {isArabic ? "27 مشروع نشط" : "27 Active Projects"}
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
              <CardDescription>{isArabic ? "إجمالي التمويل" : "Total Funding"}</CardDescription>
              <CardTitle className="text-3xl">$1.72B</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{isArabic ? "المحفظة النشطة الحالية" : "Current active portfolio"}</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader className="pb-3">
              <CardDescription>{isArabic ? "المشاريع النشطة" : "Active Projects"}</CardDescription>
              <CardTitle className="text-3xl">27</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{isArabic ? "عبر جميع القطاعات" : "Across all sectors"}</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardHeader className="pb-3">
              <CardDescription>{isArabic ? "المستفيدون" : "Beneficiaries"}</CardDescription>
              <CardTitle className="text-3xl">25M+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{isArabic ? "أشخاص تم الوصول إليهم" : "People reached"}</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader className="pb-3">
              <CardDescription>{isArabic ? "التمويل 2024" : "2024 Funding"}</CardDescription>
              <CardTitle className="text-3xl">$280M</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{isArabic ? "التزامات جديدة" : "New commitments"}</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="projects">{isArabic ? "المشاريع" : "Projects"}</TabsTrigger>
            <TabsTrigger value="funding">{isArabic ? "التمويل" : "Funding"}</TabsTrigger>
            <TabsTrigger value="reports">{isArabic ? "التقارير" : "Reports"}</TabsTrigger>
            <TabsTrigger value="team">{isArabic ? "الفريق" : "Team"}</TabsTrigger>
            <TabsTrigger value="impact">{isArabic ? "الأثر" : "Impact"}</TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">{isArabic ? "المشاريع النشطة" : "Active Projects"}</h2>
              {activeProjects.map((project, index) => (
                <Card key={index} className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{project.name}</CardTitle>
                        <CardDescription className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline">{project.id}</Badge>
                          <Badge className="bg-green-100 text-green-800 border-green-300">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            {project.status}
                          </Badge>
                          {project.sectors.map((sector, i) => (
                            <Badge key={i} variant="secondary">{sector}</Badge>
                          ))}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">{project.amount}</p>
                        <p className="text-sm text-muted-foreground">{project.startDate} - {project.endDate}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm">{project.description}</p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm font-semibold mb-2">{isArabic ? "المستفيدون المستهدفون:" : "Target Beneficiaries:"}</p>
                      <p className="text-lg font-bold text-blue-600">{project.beneficiaries}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">{isArabic ? "المكونات الرئيسية:" : "Key Components:"}</p>
                      <ul className="space-y-1">
                        {project.components.map((component, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <span className="text-blue-600">→</span>
                            <span>{component}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <h2 className="text-2xl font-bold mt-12">{isArabic ? "المشاريع المكتملة" : "Completed Projects"}</h2>
              {completedProjects.map((project, index) => (
                <Card key={index} className="border-l-4 border-l-gray-400">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <CardDescription>{project.period}</CardDescription>
                      </div>
                      <p className="text-xl font-bold text-gray-600">{project.amount}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2"><strong>{isArabic ? "المستفيدون:" : "Beneficiaries:"}</strong> {project.beneficiaries}</p>
                    <p className="text-sm"><strong>{isArabic ? "النتيجة:" : "Outcome:"}</strong> {project.outcome}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Funding Tab */}
          <TabsContent value="funding" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  {isArabic ? "تدفقات التمويل السنوية" : "Annual Funding Flows"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fundingByYear.map((year, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div>
                        <p className="text-2xl font-bold">{year.year}</p>
                        <p className="text-sm text-muted-foreground">{year.projects} {isArabic ? "مشاريع" : "projects"}</p>
                      </div>
                      <p className="text-3xl font-bold text-blue-600">{year.amount}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "التوزيع القطاعي" : "Sectoral Distribution"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span>{isArabic ? "الصحة والتغذية" : "Health & Nutrition"}</span>
                    <span className="font-bold">$500M (29%)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>{isArabic ? "الحماية الاجتماعية" : "Social Protection"}</span>
                    <span className="font-bold">$400M (23%)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>{isArabic ? "البنية التحتية الحضرية" : "Urban Infrastructure"}</span>
                    <span className="font-bold">$350M (20%)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>{isArabic ? "الطاقة" : "Energy"}</span>
                    <span className="font-bold">$280M (16%)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                    <span>{isArabic ? "الحوكمة والقطاع المالي" : "Governance & Financial Sector"}</span>
                    <span className="font-bold">$190M (11%)</span>
                  </div>
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
                  {isArabic ? "تقارير البنك الدولي عن اليمن" : "World Bank Reports on Yemen"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {reports.map((report, index) => (
                    <a key={index} href={report.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                      <div>
                        <p className="font-semibold">{report.title}</p>
                        <p className="text-sm text-muted-foreground">{report.type} • {report.date}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-blue-600" />
                    </a>
                  ))}
                  <a href="https://www.worldbank.org/en/country/yemen" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border-2 border-blue-200">
                    <div>
                      <p className="font-bold">World Bank Yemen Country Page</p>
                      <p className="text-sm text-muted-foreground">All reports, data, and project information</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {isArabic ? "فريق البنك الدولي لليمن" : "World Bank Yemen Team"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyStaff.map((staff, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <p className="font-bold text-lg">{staff.name}</p>
                      <p className="text-sm text-blue-600 font-medium">{staff.title}</p>
                      <p className="text-xs text-muted-foreground mb-2">{staff.department}</p>
                      <p className="text-sm">{staff.responsibilities}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm">
                    <strong>{isArabic ? "للاستفسارات:" : "For inquiries:"}</strong><br />
                    World Bank Yemen Country Office<br />
                    Email: yeminfo@worldbank.org<br />
                    Website: www.worldbank.org/yemen
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{isArabic ? "الصحة والتغذية" : "Health & Nutrition"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-green-50 rounded">
                    <p className="text-2xl font-bold text-green-600">8.5M</p>
                    <p className="text-sm">{isArabic ? "أشخاص يتلقون خدمات صحية أساسية" : "People receiving essential health services"}</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <p className="text-2xl font-bold text-green-600">2,800+</p>
                    <p className="text-sm">{isArabic ? "مرافق صحية مدعومة" : "Health facilities supported"}</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <p className="text-2xl font-bold text-green-600">3.2M</p>
                    <p className="text-sm">{isArabic ? "أطفال يتلقون علاج سوء التغذية" : "Children receiving malnutrition treatment"}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{isArabic ? "الحماية الاجتماعية" : "Social Protection"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded">
                    <p className="text-2xl font-bold text-blue-600">9M</p>
                    <p className="text-sm">{isArabic ? "أشخاص يتلقون تحويلات نقدية" : "People receiving cash transfers"}</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded">
                    <p className="text-2xl font-bold text-blue-600">1.5M</p>
                    <p className="text-sm">{isArabic ? "أسرة مستفيدة" : "Households benefiting"}</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded">
                    <p className="text-2xl font-bold text-blue-600">$204M</p>
                    <p className="text-sm">{isArabic ? "إجمالي التحويلات النقدية" : "Total cash disbursed"}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{isArabic ? "الطاقة" : "Energy"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-orange-50 rounded">
                    <p className="text-2xl font-bold text-orange-600">1.5M</p>
                    <p className="text-sm">{isArabic ? "أشخاص حصلوا على الكهرباء" : "People gained electricity access"}</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded">
                    <p className="text-2xl font-bold text-orange-600">150,000+</p>
                    <p className="text-sm">{isArabic ? "أنظمة طاقة شمسية منزلية" : "Solar home systems installed"}</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded">
                    <p className="text-2xl font-bold text-orange-600">45</p>
                    <p className="text-sm">{isArabic ? "شبكات صغيرة تم تطويرها" : "Mini-grids developed"}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{isArabic ? "الخدمات الحضرية" : "Urban Services"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-purple-50 rounded">
                    <p className="text-2xl font-bold text-purple-600">3.2M</p>
                    <p className="text-sm">{isArabic ? "أشخاص حصلوا على مياه محسنة" : "People gained improved water access"}</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded">
                    <p className="text-2xl font-bold text-purple-600">850km</p>
                    <p className="text-sm">{isArabic ? "شبكات مياه تم إصلاحها" : "Water networks rehabilitated"}</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded">
                    <p className="text-2xl font-bold text-purple-600">12</p>
                    <p className="text-sm">{isArabic ? "مدن رئيسية مدعومة" : "Major cities supported"}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
