import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, TrendingUp, Users, Globe, DollarSign, Factory, ShoppingCart, Truck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HayelSaeedAnam() {
  const { language } = useLanguage();
  
  const content = {
    en: {
      title: "Hayel Saeed Anam Group",
      subtitle: "Yemen's Largest Private Sector Conglomerate",
      overview: "Overview",
      sectors: "Business Sectors",
      impact: "Economic Impact",
      challenges: "Challenges",
      future: "Future Outlook",
      description: "The Hayel Saeed Anam Group (HSA Group) is Yemen's largest and most diversified private sector conglomerate, founded in 1938 by Hayel Saeed Anam. With operations spanning manufacturing, trading, services, and financial sectors, the group employs over 35,000 people across Yemen and the region. Despite the ongoing conflict, HSA Group remains a critical pillar of Yemen's private economy, maintaining supply chains for essential goods and providing employment to thousands of Yemenis.",
      founded: "Founded",
      employees: "Employees",
      sectors_count: "Business Sectors",
      revenue: "Estimated Annual Revenue",
      
      // Business Sectors
      manufacturing: "Manufacturing",
      manufacturing_desc: "Food processing, beverages, detergents, plastics, and consumer goods production across multiple factories in Yemen.",
      trading: "Trading & Distribution",
      trading_desc: "Import and distribution of food commodities, consumer goods, and industrial products through extensive retail and wholesale networks.",
      services: "Services",
      services_desc: "Logistics, transportation, warehousing, and supply chain management services supporting Yemen's economy.",
      financial: "Financial Services",
      financial_desc: "Microfinance, money exchange, and financial services through affiliated institutions serving thousands of clients.",
      
      // Economic Impact
      employment: "Employment Generation",
      employment_desc: "Direct employment of 35,000+ workers and indirect employment of 100,000+ through supply chains and distribution networks.",
      supply_chain: "Supply Chain Resilience",
      supply_chain_desc: "Maintained critical supply chains for food, medicine, and essential goods throughout the conflict, preventing shortages.",
      tax_revenue: "Tax Revenue",
      tax_revenue_desc: "Significant contributor to government revenues in both Aden and Sana'a-controlled areas through customs duties and corporate taxes.",
      private_sector: "Private Sector Leadership",
      private_sector_desc: "Serves as anchor for Yemen's private sector, supporting SMEs through partnerships and supply chain integration.",
      
      // Challenges
      dual_authority: "Dual Authority Navigation",
      dual_authority_desc: "Operating under two competing authorities (IRG and Houthi) creates regulatory complexity, double taxation, and compliance burdens.",
      currency_crisis: "Currency Volatility",
      currency_crisis_desc: "Severe YER depreciation (215 to 1,800 YER/USD) erodes profit margins, complicates pricing, and increases import costs.",
      security_risks: "Security & Logistics",
      security_risks_desc: "Conflict-related disruptions, checkpoint delays, and insecurity increase operational costs and supply chain risks.",
      financial_access: "Limited Financial Access",
      financial_access_desc: "Banking sector fragmentation restricts access to credit, foreign exchange, and correspondent banking relationships.",
      
      // Future Outlook
      reconstruction: "Post-Conflict Reconstruction",
      reconstruction_desc: "Positioned to play leading role in reconstruction through existing infrastructure, supply chains, and workforce capacity.",
      diversification: "Regional Diversification",
      diversification_desc: "Expanding operations to Saudi Arabia, UAE, and East Africa to reduce Yemen-specific risks and access new markets.",
      digital_transformation: "Digital Transformation",
      digital_transformation_desc: "Investing in e-commerce, digital payments, and supply chain digitization to improve efficiency and customer reach.",
      partnerships: "Strategic Partnerships",
      partnerships_desc: "Seeking partnerships with international firms and development agencies to access capital, technology, and markets."
    },
    ar: {
      title: "مجموعة هائل سعيد أنعم",
      subtitle: "أكبر تكتل في القطاع الخاص اليمني",
      overview: "نظرة عامة",
      sectors: "القطاعات التجارية",
      impact: "التأثير الاقتصادي",
      challenges: "التحديات",
      future: "التوقعات المستقبلية",
      description: "مجموعة هائل سعيد أنعم هي أكبر وأكثر التكتلات تنوعاً في القطاع الخاص اليمني، تأسست عام 1938 على يد هائل سعيد أنعم. تمتد عملياتها عبر قطاعات التصنيع والتجارة والخدمات والقطاعات المالية، وتوظف أكثر من 35,000 شخص في اليمن والمنطقة. على الرغم من الصراع المستمر، تظل مجموعة هائل سعيد أنعم ركيزة حاسمة للاقتصاد الخاص اليمني، حيث تحافظ على سلاسل التوريد للسلع الأساسية وتوفر فرص عمل لآلاف اليمنيين.",
      founded: "تأسست",
      employees: "الموظفون",
      sectors_count: "القطاعات التجارية",
      revenue: "الإيرادات السنوية المقدرة",
      
      manufacturing: "التصنيع",
      manufacturing_desc: "تجهيز الأغذية والمشروبات والمنظفات والبلاستيك وإنتاج السلع الاستهلاكية عبر مصانع متعددة في اليمن.",
      trading: "التجارة والتوزيع",
      trading_desc: "استيراد وتوزيع السلع الغذائية والسلع الاستهلاكية والمنتجات الصناعية من خلال شبكات تجزئة وجملة واسعة.",
      services: "الخدمات",
      services_desc: "خدمات اللوجستيات والنقل والتخزين وإدارة سلسلة التوريد الداعمة للاقتصاد اليمني.",
      financial: "الخدمات المالية",
      financial_desc: "التمويل الأصغر وصرافة العملات والخدمات المالية من خلال مؤسسات تابعة تخدم آلاف العملاء.",
      
      employment: "توليد فرص العمل",
      employment_desc: "توظيف مباشر لأكثر من 35,000 عامل وتوظيف غير مباشر لأكثر من 100,000 من خلال سلاسل التوريد وشبكات التوزيع.",
      supply_chain: "مرونة سلسلة التوريد",
      supply_chain_desc: "الحفاظ على سلاسل التوريد الحرجة للغذاء والدواء والسلع الأساسية طوال فترة الصراع، ومنع النقص.",
      tax_revenue: "الإيرادات الضريبية",
      tax_revenue_desc: "مساهم كبير في إيرادات الحكومة في كل من المناطق الخاضعة لسيطرة عدن وصنعاء من خلال الرسوم الجمركية والضرائب على الشركات.",
      private_sector: "قيادة القطاع الخاص",
      private_sector_desc: "يعمل كمرساة للقطاع الخاص اليمني، ويدعم المشاريع الصغيرة والمتوسطة من خلال الشراكات وتكامل سلسلة التوريد.",
      
      dual_authority: "التعامل مع السلطة المزدوجة",
      dual_authority_desc: "العمل تحت سلطتين متنافستين (الحكومة الشرعية والحوثيين) يخلق تعقيداً تنظيمياً وازدواجية ضريبية وأعباء امتثال.",
      currency_crisis: "تقلبات العملة",
      currency_crisis_desc: "انخفاض حاد في قيمة الريال (من 215 إلى 1,800 ريال/دولار) يؤدي إلى تآكل هوامش الربح وتعقيد التسعير وزيادة تكاليف الاستيراد.",
      security_risks: "الأمن واللوجستيات",
      security_risks_desc: "الاضطرابات المرتبطة بالصراع وتأخيرات نقاط التفتيش وانعدام الأمن تزيد من التكاليف التشغيلية ومخاطر سلسلة التوريد.",
      financial_access: "الوصول المالي المحدود",
      financial_access_desc: "تجزئة القطاع المصرفي تقيد الوصول إلى الائتمان والعملات الأجنبية والعلاقات المصرفية المراسلة.",
      
      reconstruction: "إعادة الإعمار بعد الصراع",
      reconstruction_desc: "في وضع يسمح لها بلعب دور قيادي في إعادة الإعمار من خلال البنية التحتية الحالية وسلاسل التوريد وقدرة القوى العاملة.",
      diversification: "التنويع الإقليمي",
      diversification_desc: "توسيع العمليات إلى المملكة العربية السعودية والإمارات وشرق أفريقيا للحد من المخاطر الخاصة باليمن والوصول إلى أسواق جديدة.",
      digital_transformation: "التحول الرقمي",
      digital_transformation_desc: "الاستثمار في التجارة الإلكترونية والمدفوعات الرقمية ورقمنة سلسلة التوريد لتحسين الكفاءة والوصول إلى العملاء.",
      partnerships: "الشراكات الاستراتيجية",
      partnerships_desc: "البحث عن شراكات مع الشركات الدولية ووكالات التنمية للوصول إلى رأس المال والتكنولوجيا والأسواق."
    }
  };

  const t = content[language];

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
        <div className="flex items-center gap-4 mb-4">
          <Building2 className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">{t.title}</h1>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">1938</div>
              <div className="text-sm text-muted-foreground">{t.founded}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">35,000+</div>
              <div className="text-sm text-muted-foreground">{t.employees}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">{t.sectors_count}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">$2B+</div>
              <div className="text-sm text-muted-foreground">{t.revenue}</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">{t.overview}</TabsTrigger>
          <TabsTrigger value="sectors">{t.sectors}</TabsTrigger>
          <TabsTrigger value="impact">{t.impact}</TabsTrigger>
          <TabsTrigger value="challenges">{t.challenges}</TabsTrigger>
          <TabsTrigger value="future">{t.future}</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.overview}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-lg">{t.description}</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Business Sectors Tab */}
        <TabsContent value="sectors" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Factory className="h-5 w-5 text-primary" />
                  {t.manufacturing}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.manufacturing_desc}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  {t.trading}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.trading_desc}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  {t.services}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.services_desc}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  {t.financial}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.financial_desc}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Economic Impact Tab */}
        <TabsContent value="impact" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  {t.employment}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.employment_desc}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  {t.supply_chain}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.supply_chain_desc}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  {t.tax_revenue}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.tax_revenue_desc}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-green-600" />
                  {t.private_sector}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.private_sector_desc}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Challenges Tab */}
        <TabsContent value="challenges" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-red-700">{t.dual_authority}</CardTitle>
                <Badge variant="destructive">High Severity</Badge>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.dual_authority_desc}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-red-700">{t.currency_crisis}</CardTitle>
                <Badge variant="destructive">High Severity</Badge>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.currency_crisis_desc}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-700">{t.security_risks}</CardTitle>
                <Badge className="bg-orange-500">Medium Severity</Badge>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.security_risks_desc}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-700">{t.financial_access}</CardTitle>
                <Badge className="bg-orange-500">Medium Severity</Badge>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.financial_access_desc}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Future Outlook Tab */}
        <TabsContent value="future" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-blue-700">{t.reconstruction}</CardTitle>
                <Badge className="bg-blue-500">High Priority</Badge>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.reconstruction_desc}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-blue-700">{t.diversification}</CardTitle>
                <Badge className="bg-blue-500">High Priority</Badge>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.diversification_desc}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-green-700">{t.digital_transformation}</CardTitle>
                <Badge className="bg-green-500">Medium Priority</Badge>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.digital_transformation_desc}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-green-700">{t.partnerships}</CardTitle>
                <Badge className="bg-green-500">Medium Priority</Badge>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.partnerships_desc}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
