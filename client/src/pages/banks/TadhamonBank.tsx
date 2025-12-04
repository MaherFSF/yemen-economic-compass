import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Building2, Users, DollarSign, AlertCircle, CheckCircle2, Calendar } from "lucide-react";

export default function TadhamonBank() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Tadhamon International Islamic Bank",
      subtitle: "تضامن الدولي الإسلامي للتمويل والاستثمار",
      status: "Stable",
      statusBadge: "success",
      
      overview: "Overview",
      financials: "Financial Data",
      history: "History & Milestones",
      challengesTab: "Challenges & Risks",
      recommendationsTab: "Recommendations",
      
      keyMetrics: "Key Metrics",
      assets: "Total Assets",
      deposits: "Customer Deposits",
      branches: "Branch Network",
      established: "Established",
      
      description: "Tadhamon International Islamic Bank is one of Yemen's leading Islamic financial institutions, providing Sharia-compliant banking services across the country. Despite the ongoing conflict, Tadhamon has maintained relatively stable operations and continues to serve both individual and corporate clients with a focus on ethical finance and community development.",
      
      mission: "Mission & Vision",
      missionText: "To provide innovative Islamic banking solutions that promote financial inclusion, economic development, and social welfare in accordance with Sharia principles. Tadhamon aims to be the trusted partner for Yemenis seeking ethical financial services that align with their values.",
      
      financialMetrics: [
        { label: "Total Assets", value: "$900M", change: "-5%", trend: "down" },
        { label: "Customer Deposits", value: "$720M", change: "-8%", trend: "down" },
        { label: "Financing Portfolio", value: "$450M", change: "-12%", trend: "down" },
        { label: "Non-Performing Financing", value: "18%", change: "+6%", trend: "up" },
        { label: "Capital Adequacy Ratio", value: "14%", change: "-2%", trend: "down" },
        { label: "Liquidity Ratio", value: "28%", change: "+3%", trend: "up" }
      ],
      
      timeline: [
        { year: 1995, event: "Tadhamon Islamic Bank established as first Islamic bank in Yemen" },
        { year: 2000, event: "Expanded to 25 branches nationwide" },
        { year: 2005, event: "Launched microfinance and SME financing programs" },
        { year: 2010, event: "Reached $1.2B in total assets, became second-largest Islamic bank" },
        { year: 2015, event: "Operations disrupted by conflict, branch closures in northern regions" },
        { year: 2016, event: "Adapted to CBY split, maintained operations in both territories" },
        { year: 2018, event: "Launched mobile banking and digital services" },
        { year: 2020, event: "COVID-19 pandemic further strained operations" },
        { year: 2022, event: "Partial recovery with focus on remittance services" },
        { year: 2024, event: "Operating 42 branches with stable but reduced capacity" }
      ],
      
      challenges: [
        {
          title: "Dual Central Bank Oversight",
          description: "Operating under two separate central bank authorities creates regulatory complexity, conflicting directives, and compliance challenges.",
          severity: "High",
          impact: "Operational fragmentation, increased costs, regulatory risks"
        },
        {
          title: "Liquidity Constraints",
          description: "Limited access to foreign currency and restricted correspondent banking relationships constrain ability to serve clients and manage liquidity.",
          severity: "High",
          impact: "Reduced lending capacity, delayed transactions, customer dissatisfaction"
        },
        {
          title: "Non-Performing Financing",
          description: "18% NPF ratio due to conflict-related business failures, currency devaluation, and economic collapse affecting borrowers' repayment capacity.",
          severity: "Medium",
          impact: "Reduced profitability, capital erosion, provisioning requirements"
        },
        {
          title: "Technology Infrastructure",
          description: "Aging IT systems, limited internet connectivity, and power outages hamper digital banking services and operational efficiency.",
          severity: "Medium",
          impact: "Poor customer experience, manual processes, security vulnerabilities"
        },
        {
          title: "Staff Retention",
          description: "Brain drain as skilled staff emigrate or join international organizations offering better compensation and stability.",
          severity: "Medium",
          impact: "Loss of expertise, training costs, service quality decline"
        },
        {
          title: "Sharia Compliance Challenges",
          description: "Maintaining Sharia compliance while navigating conflict-related ethical dilemmas and limited Sharia-compliant investment options.",
          severity: "Low",
          impact: "Reputational risk, limited product offerings, customer trust issues"
        }
      ],
      
      recommendations: [
        {
          title: "Strengthen Digital Banking",
          description: "Invest in mobile banking, digital wallets, and fintech partnerships to reduce reliance on physical branches and improve customer access.",
          priority: "High",
          stakeholders: ["Tadhamon Management", "CBY-Aden", "Technology Partners"],
          timeline: "6-12 months"
        },
        {
          title: "Enhance Liquidity Management",
          description: "Diversify funding sources, optimize asset-liability management, and explore Islamic liquidity instruments to improve cash flow.",
          priority: "High",
          stakeholders: ["Tadhamon Treasury", "CBY-Aden", "Islamic Development Bank"],
          timeline: "3-6 months"
        },
        {
          title: "NPF Restructuring Program",
          description: "Implement systematic NPF workout program with flexible restructuring options aligned with Sharia principles to recover assets.",
          priority: "High",
          stakeholders: ["Tadhamon Credit", "Borrowers", "CBY-Aden"],
          timeline: "12-24 months"
        },
        {
          title: "Staff Development & Retention",
          description: "Create competitive compensation packages, training programs, and career development opportunities to retain talent.",
          priority: "Medium",
          stakeholders: ["Tadhamon HR", "Management", "Donors"],
          timeline: "Ongoing"
        },
        {
          title: "Correspondent Banking Relationships",
          description: "Work with CBY-Aden and international partners to restore correspondent banking relationships for trade finance and remittances.",
          priority: "High",
          stakeholders: ["CBY-Aden", "International Banks", "World Bank"],
          timeline: "12-18 months"
        },
        {
          title: "Islamic Microfinance Expansion",
          description: "Leverage strong Islamic finance brand to expand microfinance services for MSMEs and underserved communities.",
          priority: "Medium",
          stakeholders: ["Tadhamon Microfinance", "Yemen Microfinance Network", "Donors"],
          timeline: "12-24 months"
        }
      ]
    },
    ar: {
      title: "بنك التضامن الدولي الإسلامي",
      subtitle: "Tadhamon International Islamic Bank",
      status: "مستقر",
      statusBadge: "success",
      
      overview: "نظرة عامة",
      financials: "البيانات المالية",
      history: "التاريخ والمعالم",
      challengesTab: "التحديات والمخاطر",
      recommendationsTab: "التوصيات",
      
      keyMetrics: "المؤشرات الرئيسية",
      assets: "إجمالي الأصول",
      deposits: "ودائع العملاء",
      branches: "شبكة الفروع",
      established: "تأسس",
      
      description: "بنك التضامن الدولي الإسلامي هو أحد المؤسسات المالية الإسلامية الرائدة في اليمن، يقدم خدمات مصرفية متوافقة مع الشريعة في جميع أنحاء البلاد. على الرغم من الصراع المستمر، حافظ التضامن على عمليات مستقرة نسبياً ويواصل خدمة العملاء الأفراد والشركات مع التركيز على التمويل الأخلاقي والتنمية المجتمعية.",
      
      mission: "المهمة والرؤية",
      missionText: "تقديم حلول مصرفية إسلامية مبتكرة تعزز الشمول المالي والتنمية الاقتصادية والرفاه الاجتماعي وفقاً لمبادئ الشريعة. يهدف التضامن إلى أن يكون الشريك الموثوق لليمنيين الذين يسعون للحصول على خدمات مالية أخلاقية تتماشى مع قيمهم.",
      
      financialMetrics: [
        { label: "إجمالي الأصول", value: "900 مليون دولار", change: "-5%", trend: "down" },
        { label: "ودائع العملاء", value: "720 مليون دولار", change: "-8%", trend: "down" },
        { label: "محفظة التمويل", value: "450 مليون دولار", change: "-12%", trend: "down" },
        { label: "التمويل غير المنتظم", value: "18%", change: "+6%", trend: "up" },
        { label: "نسبة كفاية رأس المال", value: "14%", change: "-2%", trend: "down" },
        { label: "نسبة السيولة", value: "28%", change: "+3%", trend: "up" }
      ],
      
      timeline: [
        { year: 1995, event: "تأسيس بنك التضامن الإسلامي كأول بنك إسلامي في اليمن" },
        { year: 2000, event: "التوسع إلى 25 فرعاً على مستوى البلاد" },
        { year: 2005, event: "إطلاق برامج التمويل الأصغر وتمويل المشاريع الصغيرة والمتوسطة" },
        { year: 2010, event: "وصل إلى 1.2 مليار دولار في إجمالي الأصول، أصبح ثاني أكبر بنك إسلامي" },
        { year: 2015, event: "تعطلت العمليات بسبب الصراع، إغلاق فروع في المناطق الشمالية" },
        { year: 2016, event: "التكيف مع انقسام البنك المركزي، الحفاظ على العمليات في كلا الإقليمين" },
        { year: 2018, event: "إطلاق الخدمات المصرفية عبر الهاتف المحمول والخدمات الرقمية" },
        { year: 2020, event: "جائحة كوفيد-19 زادت من الضغط على العمليات" },
        { year: 2022, event: "تعافي جزئي مع التركيز على خدمات التحويلات" },
        { year: 2024, event: "تشغيل 42 فرعاً بقدرة مستقرة ولكن مخفضة" }
      ],
      
      challenges: [
        {
          title: "الإشراف المزدوج من البنك المركزي",
          description: "العمل تحت سلطتين منفصلتين للبنك المركزي يخلق تعقيداً تنظيمياً وتوجيهات متضاربة وتحديات امتثال.",
          severity: "عالي",
          impact: "تجزئة تشغيلية، زيادة التكاليف، مخاطر تنظيمية"
        },
        {
          title: "قيود السيولة",
          description: "محدودية الوصول إلى العملات الأجنبية وعلاقات محدودة مع البنوك المراسلة تقيد القدرة على خدمة العملاء وإدارة السيولة.",
          severity: "عالي",
          impact: "انخفاض القدرة الإقراضية، تأخير المعاملات، عدم رضا العملاء"
        },
        {
          title: "التمويل غير المنتظم",
          description: "نسبة 18% من التمويل غير المنتظم بسبب فشل الأعمال المرتبط بالصراع، انخفاض قيمة العملة، والانهيار الاقتصادي الذي يؤثر على قدرة المقترضين على السداد.",
          severity: "متوسط",
          impact: "انخفاض الربحية، تآكل رأس المال، متطلبات المخصصات"
        },
        {
          title: "البنية التحتية التكنولوجية",
          description: "أنظمة تكنولوجيا المعلومات القديمة، اتصال محدود بالإنترنت، وانقطاع التيار الكهربائي يعيق الخدمات المصرفية الرقمية والكفاءة التشغيلية.",
          severity: "متوسط",
          impact: "تجربة عملاء سيئة، عمليات يدوية، ثغرات أمنية"
        },
        {
          title: "الاحتفاظ بالموظفين",
          description: "هجرة الأدمغة حيث يهاجر الموظفون المهرة أو ينضمون إلى منظمات دولية تقدم تعويضات واستقراراً أفضل.",
          severity: "متوسط",
          impact: "فقدان الخبرة، تكاليف التدريب، انخفاض جودة الخدمة"
        },
        {
          title: "تحديات الامتثال للشريعة",
          description: "الحفاظ على الامتثال للشريعة أثناء التنقل في المعضلات الأخلاقية المرتبطة بالصراع وخيارات الاستثمار المحدودة المتوافقة مع الشريعة.",
          severity: "منخفض",
          impact: "مخاطر السمعة، عروض منتجات محدودة، قضايا ثقة العملاء"
        }
      ],
      
      recommendations: [
        {
          title: "تعزيز الخدمات المصرفية الرقمية",
          description: "الاستثمار في الخدمات المصرفية عبر الهاتف المحمول والمحافظ الرقمية وشراكات التكنولوجيا المالية لتقليل الاعتماد على الفروع الفعلية وتحسين وصول العملاء.",
          priority: "عالي",
          stakeholders: ["إدارة التضامن", "البنك المركزي-عدن", "شركاء التكنولوجيا"],
          timeline: "6-12 شهراً"
        },
        {
          title: "تحسين إدارة السيولة",
          description: "تنويع مصادر التمويل، تحسين إدارة الأصول والخصوم، واستكشاف أدوات السيولة الإسلامية لتحسين التدفق النقدي.",
          priority: "عالي",
          stakeholders: ["خزينة التضامن", "البنك المركزي-عدن", "البنك الإسلامي للتنمية"],
          timeline: "3-6 أشهر"
        },
        {
          title: "برنامج إعادة هيكلة التمويل غير المنتظم",
          description: "تنفيذ برنامج منهجي لمعالجة التمويل غير المنتظم مع خيارات إعادة هيكلة مرنة متوافقة مع مبادئ الشريعة لاسترداد الأصول.",
          priority: "عالي",
          stakeholders: ["ائتمان التضامن", "المقترضون", "البنك المركزي-عدن"],
          timeline: "12-24 شهراً"
        },
        {
          title: "تطوير الموظفين والاحتفاظ بهم",
          description: "إنشاء حزم تعويضات تنافسية وبرامج تدريبية وفرص تطوير مهني للاحتفاظ بالمواهب.",
          priority: "متوسط",
          stakeholders: ["الموارد البشرية في التضامن", "الإدارة", "المانحون"],
          timeline: "مستمر"
        },
        {
          title: "علاقات البنوك المراسلة",
          description: "العمل مع البنك المركزي-عدن والشركاء الدوليين لاستعادة علاقات البنوك المراسلة لتمويل التجارة والتحويلات.",
          priority: "عالي",
          stakeholders: ["البنك المركزي-عدن", "البنوك الدولية", "البنك الدولي"],
          timeline: "12-18 شهراً"
        },
        {
          title: "توسيع التمويل الأصغر الإسلامي",
          description: "الاستفادة من العلامة التجارية القوية للتمويل الإسلامي لتوسيع خدمات التمويل الأصغر للمشاريع الصغيرة والمتوسطة والمجتمعات المحرومة.",
          priority: "متوسط",
          stakeholders: ["التمويل الأصغر في التضامن", "شبكة التمويل الأصغر اليمنية", "المانحون"],
          timeline: "12-24 شهراً"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900/20 to-amber-700/20 border-b">
        <div className="container py-12">
          <div className="flex items-start justify-between">
            <div>
              <Badge className={`mb-4 ${t.statusBadge === 'success' ? 'bg-green-600' : 'bg-amber-600'}`}>
                {t.status}
              </Badge>
              <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
              <p className="text-xl text-muted-foreground">{t.subtitle}</p>
            </div>
            <Building2 className="w-16 h-16 text-amber-600" />
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>{t.assets}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">$900M</div>
                <DollarSign className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>{t.deposits}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">$720M</div>
                <TrendingUp className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>{t.branches}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">42</div>
                <Building2 className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>{t.established}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">1995</div>
                <Calendar className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">{t.overview}</TabsTrigger>
            <TabsTrigger value="financials">{t.financials}</TabsTrigger>
            <TabsTrigger value="history">{t.history}</TabsTrigger>
            <TabsTrigger value="challenges">{t.challengesTab}</TabsTrigger>
            <TabsTrigger value="recommendations">{t.recommendationsTab}</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.overview}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed">{t.description}</p>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3">{t.mission}</h3>
                  <p className="leading-relaxed">{t.missionText}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financials" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.keyMetrics}</CardTitle>
                <CardDescription>
                  {language === "ar" ? "البيانات المالية لعام 2024" : "Financial metrics as of 2024"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {t.financialMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                        <div className="text-2xl font-bold">{metric.value}</div>
                      </div>
                      <div className={`text-sm font-semibold ${metric.trend === 'up' ? 'text-red-600' : 'text-green-600'}`}>
                        {metric.change}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.history}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {t.timeline.map((item, index) => (
                    <div key={index} className="flex gap-4 pb-4 border-b last:border-0">
                      <div className="flex-shrink-0 w-16 font-bold text-amber-600">{item.year}</div>
                      <div className="flex-1">{item.event}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-6">
            {t.challenges.map((challenge, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{challenge.title}</CardTitle>
                    <Badge variant={challenge.severity === "High" || challenge.severity === "عالي" ? "destructive" : "secondary"}>
                      {challenge.severity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="leading-relaxed">{challenge.description}</p>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span><strong>{language === "ar" ? "التأثير:" : "Impact:"}</strong> {challenge.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            {t.recommendations.map((rec, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{rec.title}</CardTitle>
                    <Badge variant={rec.priority === "High" || rec.priority === "عالي" ? "default" : "secondary"}>
                      {rec.priority} {language === "ar" ? "أولوية" : "Priority"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="leading-relaxed">{rec.description}</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-start gap-2 text-sm">
                      <Users className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                      <div>
                        <div className="font-semibold">{language === "ar" ? "أصحاب المصلحة:" : "Stakeholders:"}</div>
                        <div className="text-muted-foreground">{rec.stakeholders.join(", ")}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                      <div>
                        <div className="font-semibold">{language === "ar" ? "الإطار الزمني:" : "Timeline:"}</div>
                        <div className="text-muted-foreground">{rec.timeline}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
