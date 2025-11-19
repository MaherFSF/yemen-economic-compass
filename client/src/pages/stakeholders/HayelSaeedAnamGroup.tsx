import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Globe, 
  AlertTriangle,
  Target,
  DollarSign,
  Factory,
  ShoppingCart,
  Landmark,
  MapPin,
  Calendar,
  Award,
  Shield
} from "lucide-react";

export default function HayelSaeedAnamGroup() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Hayel Saeed Anam Group (HSA)",
      subtitle: "Yemen's Largest Private Conglomerate",
      overview: {
        title: "Overview",
        description: "The Hayel Saeed Anam Group (HSA) is Yemen's largest private company and one of the most influential business conglomerates in the Middle East. Founded in 1938, the group has grown to own over 92 companies across various sectors and operates in more than 40 markets globally.",
        stats: [
          { label: "Founded", value: "1938", icon: Calendar },
          { label: "Companies", value: "92+", icon: Building2 },
          { label: "Global Markets", value: "40+", icon: Globe },
          { label: "Employees", value: "50,000+", icon: Users }
        ]
      },
      role: {
        title: "Role in Yemen's Economy",
        description: "HSA Group plays a critical role in Yemen's economy as the largest private employer and a major importer of food commodities and essential goods. The group's operations span the entire country, supplying trusted goods and services that touch the lives of millions of families every day.",
        sectors: [
          {
            title: "FMCG & Consumer Goods",
            description: "Leading manufacturer and distributor of food products, beverages, and household goods",
            icon: ShoppingCart
          },
          {
            title: "Manufacturing & Industrials",
            description: "Operates factories across Yemen, Saudi Arabia, UAE, Malaysia, Indonesia, and Egypt",
            icon: Factory
          },
          {
            title: "Financial Services",
            description: "Majority owner of Tadhamon International Islamic Bank, one of Yemen's largest private banks",
            icon: Landmark
          },
          {
            title: "Trade & Distribution",
            description: "Major importer and distributor of essential commodities throughout Yemen",
            icon: TrendingUp
          }
        ]
      },
      subsidiaries: {
        title: "Key Subsidiaries & Holdings",
        companies: [
          {
            name: "Tadhamon International Islamic Bank",
            description: "Yemen's largest private Islamic bank. HSA Group holds majority ownership. Qatar Islamic Bank also holds shares.",
            sector: "Financial Services",
            status: "Assets frozen by Houthis (2021)"
          },
          {
            name: "Natco Holding Co.",
            description: "Fully owned subsidiary operating across multiple sectors in Yemen and regional markets",
            sector: "Diversified Holdings",
            status: "Active"
          },
          {
            name: "HSA Yemen",
            description: "Core Yemeni operations spanning FMCG, manufacturing, and distribution",
            sector: "FMCG & Manufacturing",
            status: "Active"
          },
          {
            name: "HSA Saudi Arabia",
            description: "Manufacturing and distribution operations in the Kingdom",
            sector: "Manufacturing",
            status: "Active"
          },
          {
            name: "HSA UAE",
            description: "Regional headquarters and trading operations",
            sector: "Trade & Services",
            status: "Active"
          },
          {
            name: "HSA Malaysia & Indonesia",
            description: "Manufacturing facilities for export markets",
            sector: "Manufacturing",
            status: "Active"
          }
        ]
      },
      impact: {
        title: "Economic Impact (10-Year Assessment)",
        description: "HSA Group's economic footprint in Yemen has been substantial despite the ongoing conflict. The group has maintained operations throughout the crisis, providing employment and essential goods to millions.",
        metrics: [
          {
            year: "2015-2020",
            title: "Conflict Period",
            description: "Maintained operations despite war, continued importing essential goods, employed 40,000+ Yemenis",
            impact: "Critical lifeline for food security"
          },
          {
            year: "2021",
            title: "Houthi Asset Seizure",
            description: "Houthi authorities froze Tadhamon Bank assets, impacting financial services and group operations",
            impact: "Major disruption to banking sector"
          },
          {
            year: "2021-2022",
            title: "IFC Investment",
            description: "World Bank's IFC invested $55M and mobilized $20M for HSA operations",
            impact: "Strengthened resilience and capacity"
          },
          {
            year: "2023-2025",
            title: "Adaptation & Growth",
            description: "Diversified operations, expanded regional presence, maintained supply chains despite challenges",
            impact: "Sustained economic activity"
          }
        ]
      },
      risks: {
        title: "Risks & Challenges",
        items: [
          {
            risk: "Political Interference",
            description: "Houthi authorities froze Tadhamon Bank assets in 2021, demonstrating vulnerability to political pressure and asset seizure",
            severity: "High",
            icon: AlertTriangle
          },
          {
            risk: "Conflict Exposure",
            description: "Operations across Yemen expose the group to ongoing conflict, supply chain disruptions, and security threats",
            severity: "High",
            icon: Shield
          },
          {
            risk: "Reputational Concerns",
            description: "UN panel (2021) implicated HSA in $423M scheme involving illegal transfer of public money to traders (48% received by HSA)",
            severity: "High",
            icon: AlertTriangle
          },
          {
            risk: "Currency Volatility",
            description: "Dual exchange rate system and currency depreciation impact import costs and profitability",
            severity: "Medium",
            icon: DollarSign
          },
          {
            risk: "Banking Sector Fragmentation",
            description: "Tadhamon Bank's asset freeze limits financial services capacity and group's access to capital",
            severity: "High",
            icon: Landmark
          }
        ]
      },
      options: {
        title: "Strategic Options & Recommendations",
        description: "For HSA Group to navigate Yemen's complex environment and maintain its economic role:",
        recommendations: [
          {
            title: "Diversify Geographic Presence",
            description: "Continue expanding operations in Saudi Arabia, UAE, and other stable markets to reduce Yemen exposure and ensure business continuity",
            priority: "High",
            stakeholders: ["HSA Management", "IFC", "Regional Partners"]
          },
          {
            title: "Resolve Tadhamon Bank Crisis",
            description: "Engage with all parties (Houthis, IRG, international mediators) to unfreeze assets and restore banking operations",
            priority: "Critical",
            stakeholders: ["HSA", "CBY-Aden", "CBY-Sana'a", "UN Mediators"]
          },
          {
            title: "Enhance Transparency & Governance",
            description: "Address UN panel findings by strengthening governance, implementing international audit standards, and improving transparency",
            priority: "High",
            stakeholders: ["HSA Board", "IFC", "International Auditors"]
          },
          {
            title: "Leverage IFC Partnership",
            description: "Utilize World Bank Group support to access technical assistance, expand capacity, and demonstrate commitment to sustainable development",
            priority: "Medium",
            stakeholders: ["HSA", "IFC", "World Bank"]
          },
          {
            title: "Maintain Humanitarian Role",
            description: "Continue supplying essential goods and maintaining employment to preserve social license and demonstrate value to all parties",
            priority: "High",
            stakeholders: ["HSA", "Yemeni Population", "Humanitarian Actors"]
          }
        ]
      },
      sources: {
        title: "Sources & References",
        items: [
          "World Bank IFC Investment Report (2021-2022)",
          "UN Panel of Experts on Yemen (2021)",
          "Hayel Saeed Anam Group Corporate Website",
          "Tadhamon International Islamic Bank Annual Reports",
          "Arab News: Houthis order assets of private bank frozen (June 2021)",
          "Al-Estiklal: Houthi seizure of Tadhamon Bank assets (July 2021)",
          "Harvard Business Review: Investment in Crisis Zones (September 2022)"
        ]
      }
    },
    ar: {
      title: "مجموعة هايل سعيد أنعم",
      subtitle: "أكبر تكتل خاص في اليمن",
      overview: {
        title: "نظرة عامة",
        description: "مجموعة هايل سعيد أنعم هي أكبر شركة خاصة في اليمن وواحدة من أكثر التكتلات التجارية نفوذاً في الشرق الأوسط. تأسست في عام 1938، ونمت المجموعة لتمتلك أكثر من 92 شركة عبر قطاعات مختلفة وتعمل في أكثر من 40 سوقاً عالمياً.",
        stats: [
          { label: "التأسيس", value: "1938", icon: Calendar },
          { label: "الشركات", value: "92+", icon: Building2 },
          { label: "الأسواق العالمية", value: "40+", icon: Globe },
          { label: "الموظفون", value: "50,000+", icon: Users }
        ]
      },
      role: {
        title: "الدور في الاقتصاد اليمني",
        description: "تلعب مجموعة هايل سعيد أنعم دوراً حاسماً في الاقتصاد اليمني كأكبر صاحب عمل خاص ومستورد رئيسي للسلع الغذائية والسلع الأساسية. تمتد عمليات المجموعة في جميع أنحاء البلاد، وتوفر سلعاً وخدمات موثوقة تلمس حياة ملايين العائلات كل يوم.",
        sectors: [
          {
            title: "السلع الاستهلاكية",
            description: "شركة رائدة في تصنيع وتوزيع المنتجات الغذائية والمشروبات والسلع المنزلية",
            icon: ShoppingCart
          },
          {
            title: "التصنيع والصناعات",
            description: "تدير مصانع في اليمن والسعودية والإمارات وماليزيا وإندونيسيا ومصر",
            icon: Factory
          },
          {
            title: "الخدمات المالية",
            description: "المالك الأكبر لبنك التضامن الإسلامي الدولي، أحد أكبر البنوك الخاصة في اليمن",
            icon: Landmark
          },
          {
            title: "التجارة والتوزيع",
            description: "مستورد وموزع رئيسي للسلع الأساسية في جميع أنحاء اليمن",
            icon: TrendingUp
          }
        ]
      },
      subsidiaries: {
        title: "الشركات التابعة والحيازات الرئيسية",
        companies: [
          {
            name: "بنك التضامن الإسلامي الدولي",
            description: "أكبر بنك إسلامي خاص في اليمن. تمتلك مجموعة هايل سعيد أنعم الأغلبية. يمتلك بنك قطر الإسلامي أيضاً أسهماً.",
            sector: "الخدمات المالية",
            status: "تم تجميد الأصول من قبل الحوثيين (2021)"
          },
          {
            name: "شركة ناتكو القابضة",
            description: "شركة تابعة مملوكة بالكامل تعمل في قطاعات متعددة في اليمن والأسواق الإقليمية",
            sector: "حيازات متنوعة",
            status: "نشطة"
          },
          {
            name: "هايل سعيد أنعم اليمن",
            description: "العمليات اليمنية الأساسية التي تشمل السلع الاستهلاكية والتصنيع والتوزيع",
            sector: "السلع الاستهلاكية والتصنيع",
            status: "نشطة"
          },
          {
            name: "هايل سعيد أنعم السعودية",
            description: "عمليات التصنيع والتوزيع في المملكة",
            sector: "التصنيع",
            status: "نشطة"
          },
          {
            name: "هايل سعيد أنعم الإمارات",
            description: "المقر الإقليمي وعمليات التجارة",
            sector: "التجارة والخدمات",
            status: "نشطة"
          },
          {
            name: "هايل سعيد أنعم ماليزيا وإندونيسيا",
            description: "مرافق التصنيع لأسواق التصدير",
            sector: "التصنيع",
            status: "نشطة"
          }
        ]
      },
      impact: {
        title: "التأثير الاقتصادي (تقييم 10 سنوات)",
        description: "كان للبصمة الاقتصادية لمجموعة هايل سعيد أنعم في اليمن أهمية كبيرة على الرغم من الصراع المستمر. حافظت المجموعة على عملياتها طوال الأزمة، وقدمت فرص العمل والسلع الأساسية لملايين الأشخاص.",
        metrics: [
          {
            year: "2015-2020",
            title: "فترة الصراع",
            description: "حافظت على العمليات رغم الحرب، واستمرت في استيراد السلع الأساسية، ووظفت أكثر من 40,000 يمني",
            impact: "شريان حياة حاسم للأمن الغذائي"
          },
          {
            year: "2021",
            title: "مصادرة الأصول من قبل الحوثيين",
            description: "جمدت السلطات الحوثية أصول بنك التضامن، مما أثر على الخدمات المالية وعمليات المجموعة",
            impact: "اضطراب كبير في القطاع المصرفي"
          },
          {
            year: "2021-2022",
            title: "استثمار مؤسسة التمويل الدولية",
            description: "استثمرت مؤسسة التمويل الدولية التابعة للبنك الدولي 55 مليون دولار وحشدت 20 مليون دولار لعمليات المجموعة",
            impact: "تعزيز المرونة والقدرة"
          },
          {
            year: "2023-2025",
            title: "التكيف والنمو",
            description: "تنويع العمليات، وتوسيع الوجود الإقليمي، والحفاظ على سلاسل التوريد رغم التحديات",
            impact: "استدامة النشاط الاقتصادي"
          }
        ]
      },
      risks: {
        title: "المخاطر والتحديات",
        items: [
          {
            risk: "التدخل السياسي",
            description: "جمدت السلطات الحوثية أصول بنك التضامن في عام 2021، مما يدل على الضعف أمام الضغوط السياسية ومصادرة الأصول",
            severity: "عالية",
            icon: AlertTriangle
          },
          {
            risk: "التعرض للصراع",
            description: "العمليات في جميع أنحاء اليمن تعرض المجموعة للصراع المستمر، واضطرابات سلسلة التوريد، والتهديدات الأمنية",
            severity: "عالية",
            icon: Shield
          },
          {
            risk: "المخاوف المتعلقة بالسمعة",
            description: "ورط فريق خبراء الأمم المتحدة (2021) مجموعة هايل سعيد أنعم في مخطط بقيمة 423 مليون دولار يتضمن نقل غير قانوني للأموال العامة (تلقت المجموعة 48٪)",
            severity: "عالية",
            icon: AlertTriangle
          },
          {
            risk: "تقلبات العملة",
            description: "نظام سعر الصرف المزدوج وانخفاض قيمة العملة يؤثران على تكاليف الاستيراد والربحية",
            severity: "متوسطة",
            icon: DollarSign
          },
          {
            risk: "تفتت القطاع المصرفي",
            description: "تجميد أصول بنك التضامن يحد من قدرة الخدمات المالية ووصول المجموعة إلى رأس المال",
            severity: "عالية",
            icon: Landmark
          }
        ]
      },
      options: {
        title: "الخيارات الاستراتيجية والتوصيات",
        description: "لكي تتنقل مجموعة هايل سعيد أنعم في بيئة اليمن المعقدة وتحافظ على دورها الاقتصادي:",
        recommendations: [
          {
            title: "تنويع الوجود الجغرافي",
            description: "مواصلة توسيع العمليات في السعودية والإمارات والأسواق المستقرة الأخرى لتقليل التعرض لليمن وضمان استمرارية الأعمال",
            priority: "عالية",
            stakeholders: ["إدارة المجموعة", "مؤسسة التمويل الدولية", "الشركاء الإقليميون"]
          },
          {
            title: "حل أزمة بنك التضامن",
            description: "التواصل مع جميع الأطراف (الحوثيين، الحكومة الشرعية، الوسطاء الدوليين) لإلغاء تجميد الأصول واستعادة العمليات المصرفية",
            priority: "حرجة",
            stakeholders: ["المجموعة", "البنك المركزي عدن", "البنك المركزي صنعاء", "وسطاء الأمم المتحدة"]
          },
          {
            title: "تعزيز الشفافية والحوكمة",
            description: "معالجة نتائج فريق خبراء الأمم المتحدة من خلال تعزيز الحوكمة، وتنفيذ معايير التدقيق الدولية، وتحسين الشفافية",
            priority: "عالية",
            stakeholders: ["مجلس إدارة المجموعة", "مؤسسة التمويل الدولية", "المدققون الدوليون"]
          },
          {
            title: "الاستفادة من شراكة مؤسسة التمويل الدولية",
            description: "استخدام دعم مجموعة البنك الدولي للوصول إلى المساعدة الفنية، وتوسيع القدرة، وإظهار الالتزام بالتنمية المستدامة",
            priority: "متوسطة",
            stakeholders: ["المجموعة", "مؤسسة التمويل الدولية", "البنك الدولي"]
          },
          {
            title: "الحفاظ على الدور الإنساني",
            description: "مواصلة توفير السلع الأساسية والحفاظ على فرص العمل للحفاظ على الترخيص الاجتماعي وإظهار القيمة لجميع الأطراف",
            priority: "عالية",
            stakeholders: ["المجموعة", "الشعب اليمني", "الجهات الفاعلة الإنسانية"]
          }
        ]
      },
      sources: {
        title: "المصادر والمراجع",
        items: [
          "تقرير استثمار مؤسسة التمويل الدولية التابعة للبنك الدولي (2021-2022)",
          "فريق خبراء الأمم المتحدة بشأن اليمن (2021)",
          "الموقع الإلكتروني لمجموعة هايل سعيد أنعم",
          "التقارير السنوية لبنك التضامن الإسلامي الدولي",
          "عرب نيوز: الحوثيون يأمرون بتجميد أصول بنك خاص (يونيو 2021)",
          "الاستقلال: مصادرة الحوثيين لأصول بنك التضامن (يوليو 2021)",
          "هارفارد بيزنس ريفيو: الاستثمار في مناطق الأزمات (سبتمبر 2022)"
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Building2 className="h-12 w-12" />
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
            <TabsTrigger value="subsidiaries">{language === 'en' ? 'Subsidiaries' : 'الشركات التابعة'}</TabsTrigger>
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
                  {t.role.sectors.map((sector, index) => {
                    const Icon = sector.icon;
                    return (
                      <Card key={index} className="border-2 border-blue-100">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <Icon className="h-6 w-6 text-blue-700" />
                            </div>
                            <CardTitle className="text-lg">{sector.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{sector.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subsidiaries Tab */}
          <TabsContent value="subsidiaries" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.subsidiaries.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {t.subsidiaries.companies.map((company, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{company.name}</CardTitle>
                            <CardDescription>{company.sector}</CardDescription>
                          </div>
                          <Badge variant={company.status === "Active" || company.status === "نشطة" ? "default" : "destructive"}>
                            {company.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{company.description}</p>
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
                            <Badge variant={item.severity === "High" || item.severity === "عالية" ? "destructive" : "secondary"}>
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
                  <Award className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
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
