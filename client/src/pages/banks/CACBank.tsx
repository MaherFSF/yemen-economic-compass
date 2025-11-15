import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Building2, TrendingDown, Users, DollarSign, Calendar, MapPin, FileText, Download } from "lucide-react";

export default function CACBank() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Cooperative & Agricultural Credit Bank (CAC Bank)",
      subtitle: "بنك التسليف التعاوني والزراعي",
      status: "Struggling",
      overview: "Overview",
      financial: "Financial Data",
      history: "History",
      challenges: "Challenges",
      recommendations: "Recommendations",
      
      // Key Metrics
      capital: "Registered Capital",
      capitalValue: "10 Billion YER",
      branches: "Branch Network",
      branchesValue: "58 Branches",
      established: "Established",
      establishedValue: "1982",
      employees: "Employees",
      employeesValue: "~800 staff",
      
      // Overview Content
      overviewText: "The Cooperative & Agricultural Credit Bank (CAC Bank) was established in 1982 as a specialized institution to provide financial services to the agricultural sector and rural cooperatives in Yemen. With a registered capital of 10 billion Yemeni Rials and a network of 58 branches across the country, CAC Bank has historically played a crucial role in supporting Yemen's agricultural economy. However, the bank currently faces significant operational and financial challenges due to the ongoing conflict and economic crisis.",
      
      mission: "Mission & Mandate",
      missionText: "CAC Bank's primary mandate is to provide accessible credit and financial services to farmers, agricultural cooperatives, and rural communities. The bank focuses on microfinance, agricultural loans, and cooperative financing to support food security and rural development.",
      
      ownership: "Ownership Structure",
      ownershipText: "CAC Bank is a government-owned specialized bank under the supervision of the Central Bank of Yemen. The Ministry of Finance holds majority ownership, with agricultural cooperatives holding minority stakes.",
      
      // Financial Data
      assets: "Total Assets",
      assetsValue: "~45 Billion YER (2024 est.)",
      deposits: "Customer Deposits",
      depositsValue: "~32 Billion YER",
      loans: "Loan Portfolio",
      loansValue: "~28 Billion YER",
      npl: "Non-Performing Loans",
      nplValue: "~35% (High)",
      liquidity: "Liquidity Ratio",
      liquidityValue: "18% (Below regulatory minimum)",
      profitability: "Profitability",
      profitabilityValue: "Operating losses since 2015",
      
      financialNote: "Note: Financial data is estimated based on available reports. Official audited statements have not been published since 2019 due to the conflict.",
      
      // History
      historyTimeline: "Historical Timeline",
      timeline: [
        { year: "1982", event: "CAC Bank established by presidential decree to support agricultural sector" },
        { year: "1990", event: "Expanded branch network to 45 branches following Yemeni unification" },
        { year: "2000", event: "Introduced microfinance products for small farmers and cooperatives" },
        { year: "2010", event: "Reached peak performance with 58 branches and 12 billion YER in agricultural loans" },
        { year: "2015", event: "Operations severely disrupted by conflict; many rural branches closed" },
        { year: "2016", event: "Central Bank split affected supervision and liquidity support" },
        { year: "2018", event: "Struggled with non-performing loans as agricultural sector collapsed" },
        { year: "2020", event: "COVID-19 pandemic further reduced lending capacity" },
        { year: "2023", event: "Attempted restructuring with CBY-Aden support" },
        { year: "2024", event: "Current status: Struggling with liquidity and high NPLs" }
      ],
      
      // Challenges
      challengesList: [
        {
          title: "High Non-Performing Loans (NPLs)",
          description: "Approximately 35% of the loan portfolio is non-performing due to borrowers' inability to repay amid conflict and agricultural sector collapse. This severely impacts the bank's profitability and capital adequacy.",
          severity: "Critical"
        },
        {
          title: "Liquidity Crisis",
          description: "Liquidity ratio at 18% is below the CBY regulatory minimum of 20%. Limited access to interbank markets and reduced Central Bank support have created cash flow challenges.",
          severity: "High"
        },
        {
          title: "Rural Branch Closures",
          description: "Many rural branches have closed due to insecurity, making it difficult to serve agricultural communities. Only 42 of 58 branches remain operational.",
          severity: "High"
        },
        {
          title: "Agricultural Sector Decline",
          description: "Yemen's agricultural sector has contracted by over 40% since 2015, reducing demand for agricultural credit and increasing default rates.",
          severity: "High"
        },
        {
          title: "Operational Challenges",
          description: "Difficulty paying staff salaries, maintaining IT systems, and conducting audits. No official financial statements published since 2019.",
          severity: "Medium"
        },
        {
          title: "Dual Banking System",
          description: "Operating under fragmented regulatory oversight due to CBY split, creating compliance and supervision challenges.",
          severity: "Medium"
        }
      ],
      
      // Recommendations
      recommendationsList: [
        {
          title: "NPL Resolution Strategy",
          description: "Implement a comprehensive non-performing loan resolution strategy including loan restructuring, write-offs, and collateral liquidation. Establish a dedicated NPL workout unit.",
          priority: "Urgent",
          stakeholders: "CBY-Aden, Ministry of Finance, World Bank"
        },
        {
          title: "Capital Injection",
          description: "Secure capital injection of at least 5 billion YER from government or development partners to restore capital adequacy ratio above regulatory minimum of 10%.",
          priority: "Urgent",
          stakeholders: "Ministry of Finance, World Bank, Islamic Development Bank"
        },
        {
          title: "Liquidity Support",
          description: "Negotiate emergency liquidity facility with CBY-Aden and explore correspondent banking relationships to improve cash management.",
          priority: "High",
          stakeholders: "CBY-Aden, Commercial banks"
        },
        {
          title: "Digital Transformation",
          description: "Invest in digital banking infrastructure to reduce operational costs and reach rural customers through mobile banking and agent networks.",
          priority: "High",
          stakeholders: "World Bank Financial Inclusion Project, Fintech partners"
        },
        {
          title: "Agricultural Value Chain Finance",
          description: "Shift from traditional agricultural loans to value chain financing, partnering with agricultural cooperatives, input suppliers, and off-takers to reduce risk.",
          priority: "Medium",
          stakeholders: "FAO, IFAD, Agricultural cooperatives"
        },
        {
          title: "Governance & Audit",
          description: "Conduct independent audit, strengthen board governance, and establish risk management framework aligned with Basel principles.",
          priority: "Medium",
          stakeholders: "CBY-Aden, International auditors"
        }
      ]
    },
    ar: {
      title: "بنك التسليف التعاوني والزراعي",
      subtitle: "Cooperative & Agricultural Credit Bank (CAC Bank)",
      status: "متعثر",
      overview: "نظرة عامة",
      financial: "البيانات المالية",
      history: "التاريخ",
      challenges: "التحديات",
      recommendations: "التوصيات",
      
      capital: "رأس المال المسجل",
      capitalValue: "10 مليار ريال يمني",
      branches: "شبكة الفروع",
      branchesValue: "58 فرعاً",
      established: "تأسس",
      establishedValue: "1982",
      employees: "الموظفون",
      employeesValue: "~800 موظف",
      
      overviewText: "تأسس بنك التسليف التعاوني والزراعي عام 1982 كمؤسسة متخصصة لتقديم الخدمات المالية للقطاع الزراعي والتعاونيات الريفية في اليمن. برأسمال مسجل قدره 10 مليار ريال يمني وشبكة من 58 فرعاً في جميع أنحاء البلاد، لعب البنك تاريخياً دوراً حاسماً في دعم الاقتصاد الزراعي اليمني. ومع ذلك، يواجه البنك حالياً تحديات تشغيلية ومالية كبيرة بسبب الصراع المستمر والأزمة الاقتصادية.",
      
      mission: "المهمة والتفويض",
      missionText: "تتمثل المهمة الأساسية لبنك التسليف التعاوني والزراعي في توفير الائتمان والخدمات المالية الميسرة للمزارعين والتعاونيات الزراعية والمجتمعات الريفية. يركز البنك على التمويل الأصغر والقروض الزراعية وتمويل التعاونيات لدعم الأمن الغذائي والتنمية الريفية.",
      
      ownership: "هيكل الملكية",
      ownershipText: "بنك التسليف التعاوني والزراعي هو بنك متخصص مملوك للحكومة تحت إشراف البنك المركزي اليمني. تمتلك وزارة المالية حصة الأغلبية، مع امتلاك التعاونيات الزراعية حصصاً أقلية.",
      
      assets: "إجمالي الأصول",
      assetsValue: "~45 مليار ريال يمني (تقديرات 2024)",
      deposits: "ودائع العملاء",
      depositsValue: "~32 مليار ريال يمني",
      loans: "محفظة القروض",
      loansValue: "~28 مليار ريال يمني",
      npl: "القروض المتعثرة",
      nplValue: "~35% (مرتفع)",
      liquidity: "نسبة السيولة",
      liquidityValue: "18% (أقل من الحد التنظيمي)",
      profitability: "الربحية",
      profitabilityValue: "خسائر تشغيلية منذ 2015",
      
      financialNote: "ملاحظة: البيانات المالية تقديرية بناءً على التقارير المتاحة. لم تُنشر بيانات مالية مدققة رسمياً منذ 2019 بسبب الصراع.",
      
      historyTimeline: "الجدول الزمني التاريخي",
      timeline: [
        { year: "1982", event: "تأسيس بنك التسليف التعاوني والزراعي بمرسوم جمهوري لدعم القطاع الزراعي" },
        { year: "1990", event: "توسيع شبكة الفروع إلى 45 فرعاً بعد الوحدة اليمنية" },
        { year: "2000", event: "إدخال منتجات التمويل الأصغر للمزارعين الصغار والتعاونيات" },
        { year: "2010", event: "بلوغ ذروة الأداء مع 58 فرعاً و12 مليار ريال قروض زراعية" },
        { year: "2015", event: "تعطل العمليات بشدة بسبب الصراع؛ إغلاق العديد من الفروع الريفية" },
        { year: "2016", event: "انقسام البنك المركزي أثر على الإشراف ودعم السيولة" },
        { year: "2018", event: "معاناة مع القروض المتعثرة مع انهيار القطاع الزراعي" },
        { year: "2020", event: "جائحة كوفيد-19 قللت القدرة الإقراضية أكثر" },
        { year: "2023", event: "محاولة إعادة هيكلة بدعم من البنك المركزي-عدن" },
        { year: "2024", event: "الوضع الحالي: متعثر مع مشاكل سيولة وقروض متعثرة مرتفعة" }
      ],
      
      challengesList: [
        {
          title: "القروض المتعثرة المرتفعة",
          description: "حوالي 35% من محفظة القروض متعثرة بسبب عدم قدرة المقترضين على السداد وسط الصراع وانهيار القطاع الزراعي. هذا يؤثر بشدة على ربحية البنك وكفاية رأس المال.",
          severity: "حرج"
        },
        {
          title: "أزمة السيولة",
          description: "نسبة السيولة عند 18% أقل من الحد التنظيمي للبنك المركزي البالغ 20%. الوصول المحدود لأسواق ما بين البنوك وانخفاض دعم البنك المركزي خلق تحديات في التدفق النقدي.",
          severity: "مرتفع"
        },
        {
          title: "إغلاق الفروع الريفية",
          description: "أُغلقت العديد من الفروع الريفية بسبب انعدام الأمن، مما يصعب خدمة المجتمعات الزراعية. فقط 42 من 58 فرعاً لا تزال تعمل.",
          severity: "مرتفع"
        },
        {
          title: "تراجع القطاع الزراعي",
          description: "انكمش القطاع الزراعي اليمني بأكثر من 40% منذ 2015، مما قلل الطلب على الائتمان الزراعي وزاد معدلات التعثر.",
          severity: "مرتفع"
        },
        {
          title: "التحديات التشغيلية",
          description: "صعوبة دفع رواتب الموظفين، صيانة أنظمة تكنولوجيا المعلومات، وإجراء التدقيق. لم تُنشر بيانات مالية رسمية منذ 2019.",
          severity: "متوسط"
        },
        {
          title: "النظام المصرفي المزدوج",
          description: "العمل تحت إشراف تنظيمي مجزأ بسبب انقسام البنك المركزي، مما يخلق تحديات في الامتثال والإشراف.",
          severity: "متوسط"
        }
      ],
      
      recommendationsList: [
        {
          title: "استراتيجية حل القروض المتعثرة",
          description: "تنفيذ استراتيجية شاملة لحل القروض المتعثرة تشمل إعادة هيكلة القروض، الشطب، وتصفية الضمانات. إنشاء وحدة مخصصة لمعالجة القروض المتعثرة.",
          priority: "عاجل",
          stakeholders: "البنك المركزي-عدن، وزارة المالية، البنك الدولي"
        },
        {
          title: "ضخ رأس المال",
          description: "تأمين ضخ رأسمالي لا يقل عن 5 مليار ريال من الحكومة أو شركاء التنمية لاستعادة نسبة كفاية رأس المال فوق الحد التنظيمي البالغ 10%.",
          priority: "عاجل",
          stakeholders: "وزارة المالية، البنك الدولي، البنك الإسلامي للتنمية"
        },
        {
          title: "دعم السيولة",
          description: "التفاوض على تسهيل سيولة طارئ مع البنك المركزي-عدن واستكشاف علاقات مصرفية مراسلة لتحسين إدارة النقد.",
          priority: "مرتفع",
          stakeholders: "البنك المركزي-عدن، البنوك التجارية"
        },
        {
          title: "التحول الرقمي",
          description: "الاستثمار في البنية التحتية المصرفية الرقمية لتقليل التكاليف التشغيلية والوصول للعملاء الريفيين عبر الخدمات المصرفية عبر الهاتف المحمول وشبكات الوكلاء.",
          priority: "مرتفع",
          stakeholders: "مشروع الشمول المالي للبنك الدولي، شركاء التكنولوجيا المالية"
        },
        {
          title: "تمويل سلسلة القيمة الزراعية",
          description: "التحول من القروض الزراعية التقليدية إلى تمويل سلسلة القيمة، بالشراكة مع التعاونيات الزراعية وموردي المدخلات والمشترين لتقليل المخاطر.",
          priority: "متوسط",
          stakeholders: "منظمة الأغذية والزراعة، الصندوق الدولي للتنمية الزراعية، التعاونيات الزراعية"
        },
        {
          title: "الحوكمة والتدقيق",
          description: "إجراء تدقيق مستقل، تعزيز حوكمة مجلس الإدارة، وإنشاء إطار لإدارة المخاطر متوافق مع مبادئ بازل.",
          priority: "متوسط",
          stakeholders: "البنك المركزي-عدن، مدققون دوليون"
        }
      ]
    }
  };

  const t = content[language];

  const getSeverityColor = (severity: string) => {
    if (language === "ar") {
      if (severity === "حرج") return "destructive";
      if (severity === "مرتفع") return "default";
      return "secondary";
    }
    if (severity === "Critical") return "destructive";
    if (severity === "High") return "default";
    return "secondary";
  };

  const getPriorityColor = (priority: string) => {
    if (language === "ar") {
      if (priority === "عاجل") return "destructive";
      if (priority === "مرتفع") return "default";
      return "secondary";
    }
    if (priority === "Urgent") return "destructive";
    if (priority === "High") return "default";
    return "secondary";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900/20 to-amber-700/20 border-b">
        <div className="container py-12">
          <div className="flex items-start justify-between">
            <div>
              <Badge variant="destructive" className="mb-4">
                <AlertTriangle className="w-3 h-3 mr-1" />
                {t.status}
              </Badge>
              <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
              <p className="text-xl text-muted-foreground">{t.subtitle}</p>
            </div>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              {language === "ar" ? "تحميل التقرير" : "Download Report"}
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-amber-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t.capital}</p>
                    <p className="text-lg font-bold">{t.capitalValue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-amber-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t.branches}</p>
                    <p className="text-lg font-bold">{t.branchesValue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-amber-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t.established}</p>
                    <p className="text-lg font-bold">{t.establishedValue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-amber-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t.employees}</p>
                    <p className="text-lg font-bold">{t.employeesValue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">{t.overview}</TabsTrigger>
            <TabsTrigger value="financial">{t.financial}</TabsTrigger>
            <TabsTrigger value="history">{t.history}</TabsTrigger>
            <TabsTrigger value="challenges">{t.challenges}</TabsTrigger>
            <TabsTrigger value="recommendations">{t.recommendations}</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.overview}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">{t.overviewText}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-amber-600" />
                      {t.mission}
                    </h3>
                    <p className="leading-relaxed">{t.missionText}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-amber-600" />
                      {t.ownership}
                    </h3>
                    <p className="leading-relaxed">{t.ownershipText}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.financial}</CardTitle>
                <CardDescription>{t.financialNote}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">{t.assets}</p>
                    <p className="text-2xl font-bold text-amber-600">{t.assetsValue}</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">{t.deposits}</p>
                    <p className="text-2xl font-bold text-amber-600">{t.depositsValue}</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">{t.loans}</p>
                    <p className="text-2xl font-bold text-amber-600">{t.loansValue}</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg bg-destructive/10">
                    <p className="text-sm text-muted-foreground mb-1">{t.npl}</p>
                    <p className="text-2xl font-bold text-destructive">{t.nplValue}</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg bg-destructive/10">
                    <p className="text-sm text-muted-foreground mb-1">{t.liquidity}</p>
                    <p className="text-2xl font-bold text-destructive">{t.liquidityValue}</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg bg-destructive/10">
                    <p className="text-sm text-muted-foreground mb-1">{t.profitability}</p>
                    <p className="text-2xl font-bold text-destructive">{t.profitabilityValue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.historyTimeline}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {t.timeline.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-20 text-right">
                        <Badge variant="outline">{item.year}</Badge>
                      </div>
                      <div className="flex-1 pb-4 border-l-2 border-amber-600/30 pl-4">
                        <p className="leading-relaxed">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-6">
            {t.challengesList.map((challenge, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                      {challenge.title}
                    </CardTitle>
                    <Badge variant={getSeverityColor(challenge.severity)}>
                      {challenge.severity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            {t.recommendationsList.map((rec, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle>{rec.title}</CardTitle>
                    <Badge variant={getPriorityColor(rec.priority)}>
                      {rec.priority}
                    </Badge>
                  </div>
                  <CardDescription>
                    {language === "ar" ? "أصحاب المصلحة: " : "Stakeholders: "}{rec.stakeholders}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{rec.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
