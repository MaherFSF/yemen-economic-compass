import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Landmark, 
  Users, 
  TrendingUp, 
  AlertTriangle,
  Target,
  DollarSign,
  Calendar,
  Shield,
  Building2,
  FileText,
  Globe
} from "lucide-react";

export default function CBYAdenPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Central Bank of Yemen - Aden (CBY-Aden)",
      subtitle: "Internationally Recognized Monetary Authority",
      overview: {
        title: "Overview",
        description: "The Central Bank of Yemen in Aden (CBY-Aden) is the internationally recognized monetary authority of Yemen, established following the September 2016 relocation of the CBY headquarters from Sana'a to Aden by the Internationally Recognized Government (IRG). The split created a dual central banking system that has profoundly impacted Yemen's economy and financial sector.",
        stats: [
          { label: "Established", value: "Sept 2016", icon: Calendar },
          { label: "Recognition", value: "International", icon: Globe },
          { label: "Governor", value: "Ahmed Ghaleb", icon: Users },
          { label: "Status", value: "IRG-Controlled", icon: Building2 }
        ]
      },
      role: {
        title: "Role & Mandate",
        description: "CBY-Aden serves as the monetary authority for areas under IRG control, managing currency issuance, foreign exchange reserves, monetary policy, and banking supervision. It maintains international recognition and relationships with global financial institutions including the IMF, World Bank, and correspondent banks.",
        functions: [
          {
            title: "Monetary Policy",
            description: "Sets interest rates, manages money supply, and implements policies to control inflation and stabilize the rial",
            icon: TrendingUp
          },
          {
            title: "Currency Issuance",
            description: "Prints and distributes new banknotes to replace worn currency and meet liquidity needs in IRG-controlled areas",
            icon: DollarSign
          },
          {
            title: "Foreign Exchange Management",
            description: "Manages foreign currency reserves, conducts FX auctions, and regulates exchange rates",
            icon: Globe
          },
          {
            title: "Banking Supervision",
            description: "Regulates and supervises commercial banks, microfinance institutions, and money exchange companies",
            icon: Landmark
          },
          {
            title: "Payment Systems",
            description: "Operates national payment systems, clearing houses, and interbank settlement mechanisms",
            icon: FileText
          },
          {
            title: "Government Banking",
            description: "Serves as banker to the IRG, manages government accounts, and facilitates public expenditure",
            icon: Building2
          }
        ]
      },
      impact: {
        title: "Economic Impact & Challenges",
        description: "The CBY split has created significant challenges for Yemen's economy, including currency fragmentation, inflation, liquidity crises, and disrupted trade financing.",
        challenges: [
          {
            year: "2016",
            title: "Headquarters Relocation",
            description: "IRG relocated CBY from Sana'a to Aden in September 2016, creating institutional rupture and dual monetary system",
            impact: "Severe disruption to monetary policy coordination"
          },
          {
            year: "2017-2019",
            title: "Currency Printing & Inflation",
            description: "CBY-Aden printed new banknotes without coordination with Sana'a, contributing to rial depreciation and inflation",
            impact: "Rial lost 50%+ of value, inflation soared"
          },
          {
            year: "2020-2022",
            title: "Liquidity Crisis",
            description: "Shortage of physical cash, banking sector fragmentation, and limited correspondent banking relationships",
            impact: "Disrupted trade financing, food import delays"
          },
          {
            year: "2023-2025",
            title: "Stabilization Efforts",
            description: "Saudi deposit support, FX auction reforms, and improved monetary management helped stabilize rial",
            impact: "Rial strengthened from 1,800 to ~1,200 YER/USD"
          }
        ]
      },
      risks: {
        title: "Risks & Vulnerabilities",
        items: [
          {
            risk: "Dual Monetary System",
            description: "Parallel CBY-Sana'a creates currency fragmentation, policy conflicts, and economic inefficiency",
            severity: "Critical",
            icon: AlertTriangle
          },
          {
            risk: "Limited Foreign Reserves",
            description: "Depleted FX reserves constrain ability to defend currency and finance essential imports",
            severity: "High",
            icon: DollarSign
          },
          {
            risk: "Correspondent Banking Loss",
            description: "International banks reluctant to maintain relationships due to AML/CFT concerns and conflict risks",
            severity: "High",
            icon: Globe
          },
          {
            risk: "Political Interference",
            description: "IRG political pressures and competing factions undermine central bank independence",
            severity: "High",
            icon: Shield
          },
          {
            risk: "Banking Sector Fragmentation",
            description: "Banks split between Aden and Sana'a jurisdictions, limiting liquidity and payment flows",
            severity: "High",
            icon: Landmark
          }
        ]
      },
      options: {
        title: "Policy Options & Recommendations",
        description: "For CBY-Aden to strengthen monetary stability and support economic recovery:",
        recommendations: [
          {
            title: "Reunify Central Bank",
            description: "Work toward political settlement that reunifies CBY under single governance structure with technical independence",
            priority: "Critical",
            stakeholders: ["CBY-Aden", "CBY-Sana'a", "IRG", "Houthis", "UN Mediators"]
          },
          {
            title: "Strengthen FX Reserves",
            description: "Secure additional Saudi/UAE deposits, negotiate IMF support, and improve revenue collection to rebuild reserves",
            priority: "High",
            stakeholders: ["CBY-Aden", "Saudi Arabia", "UAE", "IMF"]
          },
          {
            title: "Restore Correspondent Banking",
            description: "Implement AML/CFT reforms, improve transparency, and engage with international banks to restore relationships",
            priority: "High",
            stakeholders: ["CBY-Aden", "Commercial Banks", "FATF", "World Bank"]
          },
          {
            title: "Coordinate Monetary Policy",
            description: "Establish technical dialogue with CBY-Sana'a to coordinate currency issuance and prevent competitive devaluation",
            priority: "High",
            stakeholders: ["CBY-Aden", "CBY-Sana'a", "UN", "IMF"]
          },
          {
            title: "Enhance Banking Supervision",
            description: "Strengthen regulatory capacity, implement Basel standards, and improve financial sector resilience",
            priority: "Medium",
            stakeholders: ["CBY-Aden", "Commercial Banks", "World Bank", "IMF"]
          }
        ]
      },
      sources: {
        title: "Sources & References",
        items: [
          "Sana'a Center: Mitigating the Impacts of the CBY Schism (March 2023)",
          "World Bank: Economic Consequences of the War in Yemen (May 2023)",
          "Reuters: A Bank Divided - Yemen's Financial Crisis (December 2018)",
          "ODI: Impact of Conflict on the Financial Sector in Yemen (2021)",
          "Sana'a Center: Currency War Threatens to Deepen Yemen's Monetary Rift (July 2025)",
          "Sana'a Center: Rial Surges Under Revitalized Central Bank (August 2025)",
          "IMF Article IV Consultations on Yemen (various years)"
        ]
      }
    },
    ar: {
      title: "البنك المركزي اليمني - عدن",
      subtitle: "السلطة النقدية المعترف بها دولياً",
      overview: {
        title: "نظرة عامة",
        description: "البنك المركزي اليمني في عدن هو السلطة النقدية المعترف بها دولياً في اليمن، تأسس بعد نقل مقر البنك المركزي من صنعاء إلى عدن في سبتمبر 2016 من قبل الحكومة اليمنية المعترف بها دولياً. أدى الانقسام إلى إنشاء نظام مصرفي مركزي مزدوج أثر بشكل عميق على الاقتصاد اليمني والقطاع المالي.",
        stats: [
          { label: "التأسيس", value: "سبتمبر 2016", icon: Calendar },
          { label: "الاعتراف", value: "دولي", icon: Globe },
          { label: "المحافظ", value: "أحمد غالب", icon: Users },
          { label: "الحالة", value: "تحت سيطرة الحكومة الشرعية", icon: Building2 }
        ]
      },
      role: {
        title: "الدور والصلاحيات",
        description: "يعمل البنك المركزي في عدن كسلطة نقدية للمناطق الخاضعة لسيطرة الحكومة الشرعية، ويدير إصدار العملة واحتياطيات النقد الأجنبي والسياسة النقدية والإشراف المصرفي. يحتفظ بالاعتراف الدولي والعلاقات مع المؤسسات المالية العالمية بما في ذلك صندوق النقد الدولي والبنك الدولي والبنوك المراسلة.",
        functions: [
          {
            title: "السياسة النقدية",
            description: "يحدد أسعار الفائدة، ويدير المعروض النقدي، وينفذ سياسات للسيطرة على التضخم واستقرار الريال",
            icon: TrendingUp
          },
          {
            title: "إصدار العملة",
            description: "يطبع ويوزع أوراق نقدية جديدة لاستبدال العملة البالية وتلبية احتياجات السيولة في المناطق الخاضعة لسيطرة الحكومة الشرعية",
            icon: DollarSign
          },
          {
            title: "إدارة النقد الأجنبي",
            description: "يدير احتياطيات العملات الأجنبية، ويجري مزادات الصرف الأجنبي، وينظم أسعار الصرف",
            icon: Globe
          },
          {
            title: "الإشراف المصرفي",
            description: "ينظم ويشرف على البنوك التجارية ومؤسسات التمويل الأصغر وشركات الصرافة",
            icon: Landmark
          },
          {
            title: "أنظمة الدفع",
            description: "يدير أنظمة الدفع الوطنية ودور المقاصة وآليات التسوية بين البنوك",
            icon: FileText
          },
          {
            title: "الخدمات المصرفية الحكومية",
            description: "يعمل كمصرف للحكومة الشرعية، ويدير الحسابات الحكومية، ويسهل الإنفاق العام",
            icon: Building2
          }
        ]
      },
      impact: {
        title: "التأثير الاقتصادي والتحديات",
        description: "أدى انقسام البنك المركزي إلى تحديات كبيرة للاقتصاد اليمني، بما في ذلك تفتت العملة والتضخم وأزمات السيولة وتعطل تمويل التجارة.",
        challenges: [
          {
            year: "2016",
            title: "نقل المقر",
            description: "نقلت الحكومة الشرعية البنك المركزي من صنعاء إلى عدن في سبتمبر 2016، مما أدى إلى تمزق مؤسسي ونظام نقدي مزدوج",
            impact: "اضطراب شديد في تنسيق السياسة النقدية"
          },
          {
            year: "2017-2019",
            title: "طباعة العملة والتضخم",
            description: "طبع البنك المركزي في عدن أوراقاً نقدية جديدة دون تنسيق مع صنعاء، مما ساهم في انخفاض قيمة الريال والتضخم",
            impact: "فقد الريال أكثر من 50٪ من قيمته، وارتفع التضخم"
          },
          {
            year: "2020-2022",
            title: "أزمة السيولة",
            description: "نقص النقد الفعلي، وتفتت القطاع المصرفي، ومحدودية علاقات البنوك المراسلة",
            impact: "تعطل تمويل التجارة، وتأخر استيراد الغذاء"
          },
          {
            year: "2023-2025",
            title: "جهود الاستقرار",
            description: "دعم الودائع السعودية، وإصلاحات مزادات الصرف الأجنبي، وتحسين الإدارة النقدية ساعدت في استقرار الريال",
            impact: "تعزز الريال من 1,800 إلى ~1,200 ريال/دولار"
          }
        ]
      },
      risks: {
        title: "المخاطر ونقاط الضعف",
        items: [
          {
            risk: "النظام النقدي المزدوج",
            description: "البنك المركزي الموازي في صنعاء يخلق تفتت العملة، وتضارب السياسات، وعدم الكفاءة الاقتصادية",
            severity: "حرجة",
            icon: AlertTriangle
          },
          {
            risk: "محدودية الاحتياطيات الأجنبية",
            description: "استنفاد احتياطيات النقد الأجنبي يقيد القدرة على الدفاع عن العملة وتمويل الواردات الأساسية",
            severity: "عالية",
            icon: DollarSign
          },
          {
            risk: "فقدان البنوك المراسلة",
            description: "تردد البنوك الدولية في الحفاظ على العلاقات بسبب مخاوف مكافحة غسل الأموال ومخاطر الصراع",
            severity: "عالية",
            icon: Globe
          },
          {
            risk: "التدخل السياسي",
            description: "الضغوط السياسية من الحكومة الشرعية والفصائل المتنافسة تقوض استقلالية البنك المركزي",
            severity: "عالية",
            icon: Shield
          },
          {
            risk: "تفتت القطاع المصرفي",
            description: "انقسام البنوك بين ولايتي عدن وصنعاء، مما يحد من السيولة وتدفقات الدفع",
            severity: "عالية",
            icon: Landmark
          }
        ]
      },
      options: {
        title: "الخيارات السياسية والتوصيات",
        description: "لكي يعزز البنك المركزي في عدن الاستقرار النقدي ويدعم التعافي الاقتصادي:",
        recommendations: [
          {
            title: "إعادة توحيد البنك المركزي",
            description: "العمل نحو تسوية سياسية توحد البنك المركزي تحت هيكل حوكمة واحد مع استقلالية فنية",
            priority: "حرجة",
            stakeholders: ["البنك المركزي عدن", "البنك المركزي صنعاء", "الحكومة الشرعية", "الحوثيون", "وسطاء الأمم المتحدة"]
          },
          {
            title: "تعزيز احتياطيات النقد الأجنبي",
            description: "تأمين ودائع سعودية/إماراتية إضافية، والتفاوض على دعم صندوق النقد الدولي، وتحسين تحصيل الإيرادات لإعادة بناء الاحتياطيات",
            priority: "عالية",
            stakeholders: ["البنك المركزي عدن", "السعودية", "الإمارات", "صندوق النقد الدولي"]
          },
          {
            title: "استعادة البنوك المراسلة",
            description: "تنفيذ إصلاحات مكافحة غسل الأموال، وتحسين الشفافية، والتواصل مع البنوك الدولية لاستعادة العلاقات",
            priority: "عالية",
            stakeholders: ["البنك المركزي عدن", "البنوك التجارية", "FATF", "البنك الدولي"]
          },
          {
            title: "تنسيق السياسة النقدية",
            description: "إنشاء حوار فني مع البنك المركزي في صنعاء لتنسيق إصدار العملة ومنع التخفيض التنافسي",
            priority: "عالية",
            stakeholders: ["البنك المركزي عدن", "البنك المركزي صنعاء", "الأمم المتحدة", "صندوق النقد الدولي"]
          },
          {
            title: "تعزيز الإشراف المصرفي",
            description: "تعزيز القدرة التنظيمية، وتنفيذ معايير بازل، وتحسين مرونة القطاع المالي",
            priority: "متوسطة",
            stakeholders: ["البنك المركزي عدن", "البنوك التجارية", "البنك الدولي", "صندوق النقد الدولي"]
          }
        ]
      },
      sources: {
        title: "المصادر والمراجع",
        items: [
          "مركز صنعاء: تخفيف آثار انقسام البنك المركزي (مارس 2023)",
          "البنك الدولي: العواقب الاقتصادية للحرب في اليمن (مايو 2023)",
          "رويترز: بنك منقسم - الأزمة المالية في اليمن (ديسمبر 2018)",
          "ODI: تأثير الصراع على القطاع المالي في اليمن (2021)",
          "مركز صنعاء: حرب العملات تهدد بتعميق الصدع النقدي في اليمن (يوليو 2025)",
          "مركز صنعاء: ارتفاع الريال تحت البنك المركزي المنشط (أغسطس 2025)",
          "مشاورات المادة الرابعة لصندوق النقد الدولي بشأن اليمن (سنوات مختلفة)"
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Landmark className="h-12 w-12" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{t.title}</h1>
              <p className="text-xl text-blue-100">{t.subtitle}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {t.overview.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Icon className="h-6 w-6 mb-2 text-blue-200" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="overview">{language === 'en' ? 'Overview' : 'نظرة عامة'}</TabsTrigger>
            <TabsTrigger value="role">{language === 'en' ? 'Role' : 'الدور'}</TabsTrigger>
            <TabsTrigger value="impact">{language === 'en' ? 'Impact' : 'التأثير'}</TabsTrigger>
            <TabsTrigger value="risks">{language === 'en' ? 'Risks' : 'المخاطر'}</TabsTrigger>
            <TabsTrigger value="options">{language === 'en' ? 'Options' : 'الخيارات'}</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.overview.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-gray-700">{t.overview.description}</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Role Tab */}
          <TabsContent value="role" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.role.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">{t.role.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.role.functions.map((func, index) => {
                    const Icon = func.icon;
                    return (
                      <Card key={index} className="border-2 border-blue-100">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <Icon className="h-6 w-6 text-blue-700" />
                            </div>
                            <CardTitle className="text-lg">{func.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{func.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.impact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">{t.impact.description}</p>
                
                <div className="space-y-4">
                  {t.impact.challenges.map((challenge, index) => (
                    <Card key={index} className="border-l-4 border-l-orange-500">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge variant="outline" className="mb-2">{challenge.year}</Badge>
                            <CardTitle className="text-lg">{challenge.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-gray-700">{challenge.description}</p>
                        <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded">
                          <p className="text-sm font-semibold text-orange-800">
                            {language === 'en' ? 'Impact:' : 'التأثير:'} {challenge.impact}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Risks Tab */}
          <TabsContent value="risks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.risks.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {t.risks.items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Card key={index} className="border-l-4 border-l-red-500">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <Icon className="h-6 w-6 text-red-600" />
                              <CardTitle className="text-lg">{item.risk}</CardTitle>
                            </div>
                            <Badge variant={item.severity === "Critical" || item.severity === "حرجة" ? "destructive" : item.severity === "High" || item.severity === "عالية" ? "destructive" : "secondary"}>
                              {item.severity}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{item.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Options Tab */}
          <TabsContent value="options" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.options.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">{t.options.description}</p>
                
                <div className="space-y-4">
                  {t.options.recommendations.map((rec, index) => (
                    <Card key={index} className="border-l-4 border-l-green-500">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{rec.title}</CardTitle>
                          <Badge variant={rec.priority === "Critical" || rec.priority === "حرجة" ? "destructive" : rec.priority === "High" || rec.priority === "عالية" ? "default" : "secondary"}>
                            {rec.priority}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-gray-700">{rec.description}</p>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-2">
                            {language === 'en' ? 'Stakeholders:' : 'أصحاب المصلحة:'}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {rec.stakeholders.map((stakeholder, i) => (
                              <Badge key={i} variant="outline">{stakeholder}</Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Sources Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl">{t.sources.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {t.sources.items.map((source, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{source}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
