import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, DollarSign, Shield, Users, TrendingUp, Calendar, ExternalLink, Plane } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SaudiArabia() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const militaryOperations = [
    {
      name: "Operation Decisive Storm",
      nameAr: "عملية عاصفة الحزم",
      period: "March 2015 - April 2015",
      objective: "Restore Hadi government, counter Houthi advance",
      coalition: "Saudi-led coalition of 10 countries"
    },
    {
      name: "Operation Restoring Hope",
      nameAr: "عملية إعادة الأمل",
      period: "April 2015 - Present",
      objective: "Support political solution, humanitarian operations",
      coalition: "Saudi-led coalition"
    }
  ];

  const economicSupport = [
    {
      type: "CBY-Aden Deposit",
      amount: "$2 billion",
      date: "2018",
      purpose: "Support exchange rate stability",
      status: "Completed"
    },
    {
      type: "CBY-Aden Deposit",
      amount: "$1 billion",
      date: "2021",
      purpose: "Support exchange rate stability",
      status: "Completed"
    },
    {
      type: "Oil Derivatives Grant",
      amount: "$422 million",
      date: "2018",
      purpose: "Fuel supply for power generation",
      status: "Completed"
    },
    {
      type: "Saudi Development Fund Loans",
      amount: "$500+ million",
      date: "2015-2024",
      purpose: "Infrastructure projects",
      status: "Ongoing"
    }
  ];

  const humanitarianAid = [
    {
      year: "2015",
      amount: "$274 million",
      focus: "Emergency relief, health"
    },
    {
      year: "2016",
      amount: "$320 million",
      focus: "Food security, health, shelter"
    },
    {
      year: "2017",
      amount: "$450 million",
      focus: "Comprehensive humanitarian response"
    },
    {
      year: "2018",
      amount: "$500 million",
      focus: "Health, nutrition, WASH"
    },
    {
      year: "2019",
      amount: "$500 million",
      focus: "Humanitarian Response Plan"
    },
    {
      year: "2020",
      amount: "$430 million",
      focus: "COVID-19 response, food security"
    },
    {
      year: "2021",
      amount: "$430 million",
      focus: "Health, nutrition, protection"
    },
    {
      year: "2022",
      amount: "$470 million",
      focus: "Humanitarian Response Plan"
    },
    {
      year: "2023",
      amount: "$520 million",
      focus: "Multi-sector humanitarian aid"
    },
    {
      year: "2024",
      amount: "$550 million",
      focus: "Humanitarian Response Plan"
    }
  ];

  const developmentProjects = [
    {
      name: "Aden Port Rehabilitation",
      amount: "$150 million",
      status: "Ongoing",
      description: "Modernization of port infrastructure and equipment"
    },
    {
      name: "Power Generation Projects",
      amount: "$200 million",
      status: "Ongoing",
      description: "Emergency power stations in Aden, Mukalla, Seiyun"
    },
    {
      name: "Road Infrastructure",
      amount: "$180 million",
      status: "Ongoing",
      description: "Rehabilitation of main highways and urban roads"
    },
    {
      name: "Health Sector Support",
      amount: "$120 million",
      status: "Ongoing",
      description: "Hospital rehabilitation and medical equipment"
    }
  ];

  const totalHumanitarianAid = humanitarianAid.reduce((sum, year) => {
    return sum + parseFloat(year.amount.replace(/[^0-9.]/g, ''));
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 via-green-800 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
              <Building2 className="w-16 h-16" />
            </div>
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-4">
                {isArabic ? "المملكة العربية السعودية" : "Kingdom of Saudi Arabia"}
              </h1>
              <p className="text-xl text-green-100 mb-6">
                {isArabic 
                  ? "قائد التحالف العسكري وأكبر مانح ثنائي لليمن منذ 2015"
                  : "Coalition leader and largest bilateral donor to Yemen since 2015"
                }
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Shield className="w-4 h-4 mr-2" />
                  {isArabic ? "قائد التحالف" : "Coalition Leader"}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <DollarSign className="w-4 h-4 mr-2" />
                  {isArabic ? "$18+ مليار دعم" : "$18B+ Support"}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Users className="w-4 h-4 mr-2" />
                  {isArabic ? "مساعدات إنسانية وتنموية" : "Humanitarian & Development Aid"}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Key Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="border-l-4 border-l-green-600">
            <CardHeader className="pb-3">
              <CardDescription>{isArabic ? "إجمالي المساعدات الإنسانية" : "Total Humanitarian Aid"}</CardDescription>
              <CardTitle className="text-3xl">${totalHumanitarianAid.toFixed(0)}B</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{isArabic ? "2015-2024" : "2015-2024"}</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader className="pb-3">
              <CardDescription>{isArabic ? "ودائع البنك المركزي" : "CBY Deposits"}</CardDescription>
              <CardTitle className="text-3xl">$3B</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{isArabic ? "2018 و 2021" : "2018 & 2021"}</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardHeader className="pb-3">
              <CardDescription>{isArabic ? "المشاريع التنموية" : "Development Projects"}</CardDescription>
              <CardTitle className="text-3xl">$650M</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{isArabic ? "البنية التحتية والطاقة" : "Infrastructure & Energy"}</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader className="pb-3">
              <CardDescription>{isArabic ? "منح المشتقات النفطية" : "Oil Derivatives Grants"}</CardDescription>
              <CardTitle className="text-3xl">$422M</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{isArabic ? "دعم الكهرباء" : "Power generation support"}</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="military" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="military">{isArabic ? "العمليات العسكرية" : "Military"}</TabsTrigger>
            <TabsTrigger value="economic">{isArabic ? "الدعم الاقتصادي" : "Economic"}</TabsTrigger>
            <TabsTrigger value="humanitarian">{isArabic ? "المساعدات الإنسانية" : "Humanitarian"}</TabsTrigger>
            <TabsTrigger value="development">{isArabic ? "التنمية" : "Development"}</TabsTrigger>
            <TabsTrigger value="impact">{isArabic ? "الأثر" : "Impact"}</TabsTrigger>
          </TabsList>

          {/* Military Operations Tab */}
          <TabsContent value="military" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  {isArabic ? "العمليات العسكرية في اليمن" : "Military Operations in Yemen"}
                </CardTitle>
                <CardDescription>
                  {isArabic 
                    ? "التدخل العسكري السعودي بقيادة التحالف منذ مارس 2015"
                    : "Saudi-led coalition military intervention since March 2015"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {militaryOperations.map((op, index) => (
                  <div key={index} className="border-l-4 border-l-green-500 pl-6 py-4 bg-slate-50 rounded-r-lg">
                    <h3 className="text-xl font-bold">{isArabic ? op.nameAr : op.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{op.period}</p>
                    <div className="space-y-2">
                      <p><strong>{isArabic ? "الهدف:" : "Objective:"}</strong> {op.objective}</p>
                      <p><strong>{isArabic ? "التحالف:" : "Coalition:"}</strong> {op.coalition}</p>
                    </div>
                  </div>
                ))}

                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{isArabic ? "دول التحالف:" : "Coalition Members:"}</h4>
                  <p className="text-sm">
                    {isArabic 
                      ? "السعودية، الإمارات، البحرين، الكويت، قطر (حتى 2017)، الأردن، المغرب، مصر، السودان، السنغال"
                      : "Saudi Arabia, UAE, Bahrain, Kuwait, Qatar (until 2017), Jordan, Morocco, Egypt, Sudan, Senegal"
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Economic Support Tab */}
          <TabsContent value="economic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  {isArabic ? "الدعم الاقتصادي لليمن" : "Economic Support to Yemen"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {economicSupport.map((support, index) => (
                    <div key={index} className="flex justify-between items-start p-4 bg-slate-50 rounded-lg border-l-4 border-l-blue-500">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{support.type}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{support.date}</p>
                        <p className="text-sm">{support.purpose}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">{support.amount}</p>
                        <Badge variant={support.status === "Completed" ? "default" : "secondary"}>
                          {support.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold mb-2">{isArabic ? "الأثر الاقتصادي:" : "Economic Impact:"}</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• {isArabic ? "ودائع بقيمة 3 مليار دولار ساعدت في استقرار سعر الصرف في عدن" : "$3B deposits helped stabilize Aden exchange rate"}</li>
                    <li>• {isArabic ? "منح المشتقات النفطية خففت أزمة الكهرباء" : "Oil derivatives grants alleviated electricity crisis"}</li>
                    <li>• {isArabic ? "قروض صندوق التنمية السعودي دعمت البنية التحتية الحيوية" : "Saudi Development Fund loans supported critical infrastructure"}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Humanitarian Aid Tab */}
          <TabsContent value="humanitarian" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {isArabic ? "المساعدات الإنسانية السنوية" : "Annual Humanitarian Aid"}
                </CardTitle>
                <CardDescription>
                  {isArabic 
                    ? "إجمالي المساعدات الإنسانية السعودية لليمن 2015-2024"
                    : "Total Saudi humanitarian assistance to Yemen 2015-2024"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {humanitarianAid.map((year, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-bold">{year.year}</p>
                        <p className="text-xs text-muted-foreground">{year.focus}</p>
                      </div>
                      <p className="text-xl font-bold text-green-600">{year.amount}</p>
                    </div>
                  ))}
                  <div className="flex justify-between items-center p-4 bg-green-100 rounded-lg border-2 border-green-500">
                    <p className="font-bold text-lg">{isArabic ? "الإجمالي" : "Total"}</p>
                    <p className="text-2xl font-bold text-green-700">${totalHumanitarianAid.toFixed(1)}B</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Development Projects Tab */}
          <TabsContent value="development" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {developmentProjects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-2xl font-bold text-green-600">
                      {project.amount}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{isArabic ? "الأثر الإنساني" : "Humanitarian Impact"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-green-50 rounded">
                    <p className="text-2xl font-bold text-green-600">12M+</p>
                    <p className="text-sm">{isArabic ? "مستفيد من المساعدات الإنسانية" : "Beneficiaries of humanitarian aid"}</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <p className="text-2xl font-bold text-green-600">2,500+</p>
                    <p className="text-sm">{isArabic ? "مشروع إنساني وتنموي" : "Humanitarian and development projects"}</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <p className="text-2xl font-bold text-green-600">$18B+</p>
                    <p className="text-sm">{isArabic ? "إجمالي المساعدات منذ 2015" : "Total aid since 2015"}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{isArabic ? "الأثر الاقتصادي" : "Economic Impact"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded">
                    <p className="text-2xl font-bold text-blue-600">$3B</p>
                    <p className="text-sm">{isArabic ? "ودائع دعمت استقرار العملة" : "Deposits supported currency stability"}</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded">
                    <p className="text-2xl font-bold text-blue-600">650MW</p>
                    <p className="text-sm">{isArabic ? "طاقة كهربائية إضافية" : "Additional electricity capacity"}</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded">
                    <p className="text-2xl font-bold text-blue-600">5M+</p>
                    <p className="text-sm">{isArabic ? "مستفيد من مشاريع البنية التحتية" : "Beneficiaries of infrastructure projects"}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "المؤسسات السعودية الرئيسية" : "Key Saudi Institutions"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded">
                    <p className="font-bold">King Salman Humanitarian Aid and Relief Centre (KSRelief)</p>
                    <p className="text-sm text-muted-foreground">{isArabic ? "المنسق الرئيسي للمساعدات الإنسانية" : "Main coordinator of humanitarian assistance"}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded">
                    <p className="font-bold">Saudi Development Fund (SDF)</p>
                    <p className="text-sm text-muted-foreground">{isArabic ? "قروض تنموية للبنية التحتية" : "Development loans for infrastructure"}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded">
                    <p className="font-bold">Saudi Fund for Development</p>
                    <p className="text-sm text-muted-foreground">{isArabic ? "مشاريع تنموية طويلة الأجل" : "Long-term development projects"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
