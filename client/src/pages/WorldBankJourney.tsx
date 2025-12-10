import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, TrendingUp, Users, DollarSign, Target, AlertCircle, CheckCircle2, Clock, Building2, FileText, BarChart3 } from "lucide-react";

export default function WorldBankJourney() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8B1538] to-[#D4AF37] text-white py-16">
        <div className="container">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              {isArabic ? "رحلة البنك الدولي في اليمن" : "World Bank Yemen Journey"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "البنك الدولي في اليمن" : "World Bank in Yemen"}
            </h1>
            <p className="text-xl text-white/90 mb-6">
              {isArabic 
                ? "لوحة تحكم شاملة لمشاريع البنك الدولي، التمويل، الشركاء المنفذين، والأثر في اليمن"
                : "Comprehensive dashboard for World Bank projects, financing, implementing partners, and impact in Yemen"}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-[#8B1538] hover:bg-white/90">
                <Download className="mr-2 h-5 w-5" />
                {isArabic ? "تحميل التقرير" : "Download Report"}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <ExternalLink className="mr-2 h-5 w-5" />
                {isArabic ? "زيارة موقع البنك الدولي" : "Visit World Bank Site"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-[#8B1538]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                {isArabic ? "إجمالي التمويل النشط" : "Total Active Financing"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#8B1538]">$20M</div>
              <p className="text-sm text-muted-foreground mt-1">
                {isArabic ? "منحة IDA" : "IDA Grant"}
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-[#D4AF37]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Target className="h-4 w-4" />
                {isArabic ? "المستفيدون المستهدفون" : "Target Beneficiaries"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#D4AF37]">2.5M</div>
              <p className="text-sm text-muted-foreground mt-1">
                {isArabic ? "أفراد ومؤسسات" : "Individuals & Institutions"}
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                {isArabic ? "المشاريع النشطة" : "Active Projects"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">1</div>
              <p className="text-sm text-muted-foreground mt-1">
                {isArabic ? "البنية التحتية المالية" : "Financial Infrastructure"}
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                {isArabic ? "حالة المشروع" : "Project Status"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {isArabic ? "موافق عليه" : "Approved"}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {isArabic ? "مايو 2025" : "May 2025"}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="container pb-12">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">
              {isArabic ? "نظرة عامة" : "Overview"}
            </TabsTrigger>
            <TabsTrigger value="projects">
              {isArabic ? "المشاريع" : "Projects"}
            </TabsTrigger>
            <TabsTrigger value="partners">
              {isArabic ? "الشركاء" : "Partners"}
            </TabsTrigger>
            <TabsTrigger value="impact">
              {isArabic ? "الأثر" : "Impact"}
            </TabsTrigger>
            <TabsTrigger value="recommendations">
              {isArabic ? "التوصيات" : "Recommendations"}
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#8B1538]" />
                  {isArabic ? "نظرة عامة على البنك الدولي في اليمن" : "World Bank in Yemen Overview"}
                </CardTitle>
                <CardDescription>
                  {isArabic 
                    ? "دور البنك الدولي في دعم التعافي الاقتصادي والشمول المالي في اليمن"
                    : "World Bank's role in supporting economic recovery and financial inclusion in Yemen"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">
                    {isArabic ? "السياق" : "Context"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {isArabic 
                      ? "منذ عام 2015، واجه اليمن أزمة إنسانية واقتصادية حادة نتيجة للصراع المستمر. أدى تقسيم البنك المركزي اليمني في عام 2016 إلى تفاقم الوضع الاقتصادي، مما أدى إلى أزمة سيولة في القطاع المصرفي وانخفاض الثقة بين السكان. يعمل البنك الدولي على دعم التعافي الاقتصادي وتعزيز الشمول المالي من خلال مشاريع البنية التحتية المالية."
                      : "Since 2015, Yemen has faced a severe humanitarian and economic crisis due to the ongoing conflict. The split of the Central Bank of Yemen in 2016 exacerbated the economic situation, leading to a liquidity crisis in the banking sector and declining trust among the population. The World Bank is working to support economic recovery and enhance financial inclusion through financial infrastructure projects."}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      {isArabic ? "الأهداف الاستراتيجية" : "Strategic Objectives"}
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B1538] mt-1">•</span>
                        <span>{isArabic ? "تعزيز البنية التحتية للسوق المالي" : "Strengthen financial market infrastructure"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B1538] mt-1">•</span>
                        <span>{isArabic ? "تحسين الشمول المالي للسكان المحرومين" : "Improve financial inclusion for underserved populations"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B1538] mt-1">•</span>
                        <span>{isArabic ? "دعم القطاع المصرفي والتمويل الأصغر" : "Support banking sector and microfinance"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B1538] mt-1">•</span>
                        <span>{isArabic ? "تعزيز الحوكمة والشفافية المالية" : "Enhance governance and financial transparency"}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-600" />
                      {isArabic ? "التحديات الرئيسية" : "Key Challenges"}
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>{isArabic ? "تقسيم البنك المركزي (صنعاء/عدن)" : "Central Bank division (Sana'a/Aden)"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>{isArabic ? "أزمة السيولة في القطاع المصرفي" : "Liquidity crisis in banking sector"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>{isArabic ? "انخفاض الثقة في المؤسسات المالية" : "Declining trust in financial institutions"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>{isArabic ? "العقوبات الدولية على البنوك" : "International sanctions on banks"}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-[#8B1538]" />
                    {isArabic ? "حقائق رئيسية عن القطاع المالي" : "Key Financial Sector Facts"}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-[#8B1538]">19</div>
                      <div className="text-muted-foreground">{isArabic ? "بنوك عاملة" : "Operating Banks"}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-[#8B1538]">4</div>
                      <div className="text-muted-foreground">{isArabic ? "بنوك تمويل أصغر" : "Microfinance Banks"}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-[#8B1538]">3,244</div>
                      <div className="text-muted-foreground">{isArabic ? "فروع الصرافة (2019)" : "Money Exchanger Branches (2019)"}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  {isArabic ? "مشروع البنية التحتية للسوق المالي والشمول المالي في اليمن" : "Yemen Financial Market Infrastructure and Inclusion Project"}
                </CardTitle>
                <CardDescription>
                  {isArabic ? "رقم التقرير: PADHI00396 | الموافقة: مايو 2025" : "Report No: PADHI00396 | Approval: May 2025"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">{isArabic ? "المبلغ" : "Amount"}</div>
                    <div className="text-2xl font-bold text-[#8B1538]">$20 Million</div>
                    <Badge variant="outline">{isArabic ? "منحة IDA" : "IDA Grant"}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">{isArabic ? "المتلقي" : "Recipient"}</div>
                    <div className="text-lg font-semibold">UNDP</div>
                    <Badge variant="outline">{isArabic ? "شريك منفذ" : "Implementing Partner"}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">{isArabic ? "الحالة" : "Status"}</div>
                    <div className="text-lg font-semibold text-green-600">{isArabic ? "موافق عليه" : "Approved"}</div>
                    <Badge className="bg-green-100 text-green-800">{isArabic ? "نشط" : "Active"}</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">{isArabic ? "مكونات المشروع" : "Project Components"}</h4>
                  
                  <Card className="border-l-4 border-l-[#8B1538]">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">
                        {isArabic ? "المكون 1: تعزيز البنية التحتية للسوق المالي" : "Component 1: Strengthening Financial Market Infrastructure"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {isArabic 
                          ? "تحسين أنظمة الدفع، البنية التحتية للمدفوعات الرقمية، وأنظمة المعلومات الائتمانية"
                          : "Improve payment systems, digital payments infrastructure, and credit information systems"}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{isArabic ? "الإطار الزمني: 2025-2028" : "Timeline: 2025-2028"}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-[#D4AF37]">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">
                        {isArabic ? "المكون 2: تعزيز الشمول المالي" : "Component 2: Enhancing Financial Inclusion"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {isArabic 
                          ? "دعم التمويل الأصغر، الخدمات المالية الرقمية، والوصول إلى التمويل للفئات المحرومة"
                          : "Support microfinance, digital financial services, and access to finance for underserved groups"}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{isArabic ? "المستفيدون المستهدفون: 2.5 مليون" : "Target Beneficiaries: 2.5 million"}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-600">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">
                        {isArabic ? "المكون 3: بناء القدرات والحوكمة" : "Component 3: Capacity Building and Governance"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {isArabic 
                          ? "تعزيز قدرات المؤسسات المالية، الإشراف التنظيمي، وحماية المستهلك"
                          : "Strengthen capacity of financial institutions, regulatory supervision, and consumer protection"}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{isArabic ? "المؤسسات المستهدفة: 20+" : "Target Institutions: 20+"}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Partners Tab */}
          <TabsContent value="partners" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "الشركاء المنفذون" : "Implementing Partners"}</CardTitle>
                <CardDescription>
                  {isArabic 
                    ? "المنظمات والمؤسسات المشاركة في تنفيذ مشاريع البنك الدولي في اليمن"
                    : "Organizations and institutions involved in implementing World Bank projects in Yemen"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-2 border-[#8B1538]/20">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-[#8B1538]" />
                        {isArabic ? "برنامج الأمم المتحدة الإنمائي (UNDP)" : "United Nations Development Programme (UNDP)"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Badge className="bg-[#8B1538] text-white">{isArabic ? "شريك رئيسي" : "Lead Partner"}</Badge>
                      <p className="text-sm text-muted-foreground">
                        {isArabic 
                          ? "المتلقي الرئيسي للمنحة والمسؤول عن إدارة المشروع وتنسيق الأنشطة مع الشركاء المحليين"
                          : "Primary grant recipient responsible for project management and coordination with local partners"}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>{isArabic ? "إدارة المشروع والتنسيق" : "Project management and coordination"}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>{isArabic ? "الإشراف المالي والإداري" : "Financial and administrative oversight"}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>{isArabic ? "التنسيق مع الشركاء المحليين" : "Coordination with local partners"}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#D4AF37]/20">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-[#D4AF37]" />
                        {isArabic ? "البنك المركزي اليمني - عدن" : "Central Bank of Yemen - Aden"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Badge className="bg-[#D4AF37] text-white">{isArabic ? "شريك تنظيمي" : "Regulatory Partner"}</Badge>
                      <p className="text-sm text-muted-foreground">
                        {isArabic 
                          ? "الإشراف التنظيمي على القطاع المصرفي وتنفيذ السياسات النقدية والمالية"
                          : "Regulatory oversight of banking sector and implementation of monetary and financial policies"}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>{isArabic ? "الإشراف على البنوك" : "Banking supervision"}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>{isArabic ? "تنفيذ السياسات النقدية" : "Monetary policy implementation"}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>{isArabic ? "تطوير الأنظمة المالية" : "Financial systems development"}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-600/20">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-blue-600" />
                        {isArabic ? "البنوك التجارية" : "Commercial Banks"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Badge className="bg-blue-600 text-white">{isArabic ? "شركاء تنفيذيون" : "Implementation Partners"}</Badge>
                      <p className="text-sm text-muted-foreground">
                        {isArabic 
                          ? "19 بنكاً تجارياً يشارك في تنفيذ برامج الشمول المالي والخدمات المصرفية الرقمية"
                          : "19 commercial banks participating in financial inclusion programs and digital banking services"}
                      </p>
                      <div className="text-sm text-muted-foreground">
                        {isArabic ? "تشمل: CAC Bank، Yemen Kuwait Bank، Tadhamon Bank، وغيرها" : "Including: CAC Bank, Yemen Kuwait Bank, Tadhamon Bank, and others"}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-600/20">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-green-600" />
                        {isArabic ? "مؤسسات التمويل الأصغر" : "Microfinance Institutions"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Badge className="bg-green-600 text-white">{isArabic ? "شركاء الشمول المالي" : "Financial Inclusion Partners"}</Badge>
                      <p className="text-sm text-muted-foreground">
                        {isArabic 
                          ? "4 بنوك تمويل أصغر ومؤسسات متخصصة في تقديم الخدمات المالية للفئات المحرومة"
                          : "4 microfinance banks and specialized institutions providing financial services to underserved groups"}
                      </p>
                      <div className="text-sm text-muted-foreground">
                        {isArabic ? "تشمل: بنك الأمل، المؤسسة الوطنية للتمويل الأصغر، وغيرها" : "Including: Al-Amal Bank, National Microfinance Foundation, and others"}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "الأثر المتوقع" : "Expected Impact"}</CardTitle>
                <CardDescription>
                  {isArabic 
                    ? "النتائج والأهداف المتوقعة من مشاريع البنك الدولي في اليمن"
                    : "Expected outcomes and targets from World Bank projects in Yemen"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="bg-gradient-to-br from-[#8B1538]/5 to-[#8B1538]/10 border-[#8B1538]/20">
                    <CardHeader>
                      <CardTitle className="text-lg">{isArabic ? "الشمول المالي" : "Financial Inclusion"}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-3xl font-bold text-[#8B1538]">2.5M</div>
                      <p className="text-sm text-muted-foreground">
                        {isArabic ? "مستفيدون جدد من الخدمات المالية" : "New beneficiaries of financial services"}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#8B1538]"></div>
                          <span>{isArabic ? "40% نساء" : "40% Women"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#8B1538]"></div>
                          <span>{isArabic ? "30% شباب" : "30% Youth"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#8B1538]"></div>
                          <span>{isArabic ? "20% مناطق ريفية" : "20% Rural areas"}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-[#D4AF37]/5 to-[#D4AF37]/10 border-[#D4AF37]/20">
                    <CardHeader>
                      <CardTitle className="text-lg">{isArabic ? "المدفوعات الرقمية" : "Digital Payments"}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-3xl font-bold text-[#D4AF37]">50%</div>
                      <p className="text-sm text-muted-foreground">
                        {isArabic ? "زيادة في استخدام المدفوعات الرقمية" : "Increase in digital payment usage"}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#D4AF37]"></div>
                          <span>{isArabic ? "محافظ إلكترونية" : "E-wallets"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#D4AF37]"></div>
                          <span>{isArabic ? "تحويلات رقمية" : "Digital transfers"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#D4AF37]"></div>
                          <span>{isArabic ? "مدفوعات الفواتير" : "Bill payments"}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-600/5 to-blue-600/10 border-blue-600/20">
                    <CardHeader>
                      <CardTitle className="text-lg">{isArabic ? "التمويل الأصغر" : "Microfinance"}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-3xl font-bold text-blue-600">100K</div>
                      <p className="text-sm text-muted-foreground">
                        {isArabic ? "قروض جديدة للمشاريع الصغيرة" : "New loans for small businesses"}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                          <span>{isArabic ? "متوسط القرض: $500" : "Average loan: $500"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                          <span>{isArabic ? "معدل السداد: 95%" : "Repayment rate: 95%"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                          <span>{isArabic ? "وظائف مُنشأة: 200K" : "Jobs created: 200K"}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-base">{isArabic ? "مؤشرات الأداء الرئيسية" : "Key Performance Indicators"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>{isArabic ? "الوصول إلى الحسابات المصرفية" : "Access to bank accounts"}</span>
                          <span className="font-semibold">+35%</span>
                        </div>
                        <div className="h-2 bg-background rounded-full overflow-hidden">
                          <div className="h-full bg-[#8B1538] rounded-full" style={{width: '35%'}}></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>{isArabic ? "استخدام الخدمات المالية الرقمية" : "Digital financial services usage"}</span>
                          <span className="font-semibold">+50%</span>
                        </div>
                        <div className="h-2 bg-background rounded-full overflow-hidden">
                          <div className="h-full bg-[#D4AF37] rounded-full" style={{width: '50%'}}></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>{isArabic ? "قروض التمويل الأصغر النشطة" : "Active microfinance loans"}</span>
                          <span className="font-semibold">+60%</span>
                        </div>
                        <div className="h-2 bg-background rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full" style={{width: '60%'}}></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>{isArabic ? "الشمول المالي للنساء" : "Women's financial inclusion"}</span>
                          <span className="font-semibold">+40%</span>
                        </div>
                        <div className="h-2 bg-background rounded-full overflow-hidden">
                          <div className="h-full bg-green-600 rounded-full" style={{width: '40%'}}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recommendations Tab */}
          <TabsContent value="recommendations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "التوصيات السياسية" : "Policy Recommendations"}</CardTitle>
                <CardDescription>
                  {isArabic 
                    ? "توصيات مبنية على الأدلة لتعزيز فعالية مشاريع البنك الدولي وتحقيق الأثر المستدام"
                    : "Evidence-based recommendations to enhance World Bank project effectiveness and achieve sustainable impact"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-[#8B1538]">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Target className="h-5 w-5 text-[#8B1538]" />
                        {isArabic ? "1. توحيد السياسات النقدية" : "1. Unify Monetary Policies"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        {isArabic 
                          ? "العمل على توحيد السياسات النقدية بين البنك المركزي في عدن وصنعاء لتحقيق الاستقرار الاقتصادي وتعزيز الثقة في القطاع المصرفي."
                          : "Work towards unifying monetary policies between Central Banks in Aden and Sana'a to achieve economic stability and enhance trust in the banking sector."}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[#8B1538] border-[#8B1538]">
                          {isArabic ? "أولوية عالية" : "High Priority"}
                        </Badge>
                        <Badge variant="outline">
                          {isArabic ? "الإطار الزمني: 12-18 شهر" : "Timeline: 12-18 months"}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-[#D4AF37]">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Target className="h-5 w-5 text-[#D4AF37]" />
                        {isArabic ? "2. تعزيز البنية التحتية الرقمية" : "2. Strengthen Digital Infrastructure"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        {isArabic 
                          ? "الاستثمار في البنية التحتية الرقمية للمدفوعات والخدمات المصرفية الإلكترونية لتسهيل الوصول إلى الخدمات المالية."
                          : "Invest in digital infrastructure for payments and electronic banking services to facilitate access to financial services."}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[#D4AF37] border-[#D4AF37]">
                          {isArabic ? "أولوية عالية" : "High Priority"}
                        </Badge>
                        <Badge variant="outline">
                          {isArabic ? "الإطار الزمني: 24-36 شهر" : "Timeline: 24-36 months"}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-600">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        {isArabic ? "3. دعم التمويل الأصغر" : "3. Support Microfinance"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        {isArabic 
                          ? "توسيع برامج التمويل الأصغر لتشمل المناطق الريفية والفئات المحرومة، مع التركيز على النساء والشباب."
                          : "Expand microfinance programs to include rural areas and underserved groups, with focus on women and youth."}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          {isArabic ? "أولوية متوسطة" : "Medium Priority"}
                        </Badge>
                        <Badge variant="outline">
                          {isArabic ? "الإطار الزمني: 18-24 شهر" : "Timeline: 18-24 months"}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-600">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Target className="h-5 w-5 text-green-600" />
                        {isArabic ? "4. تعزيز حماية المستهلك" : "4. Enhance Consumer Protection"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        {isArabic 
                          ? "تطوير أطر تنظيمية لحماية المستهلك وتعزيز الشفافية في الخدمات المالية."
                          : "Develop regulatory frameworks for consumer protection and enhance transparency in financial services."}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {isArabic ? "أولوية متوسطة" : "Medium Priority"}
                        </Badge>
                        <Badge variant="outline">
                          {isArabic ? "الإطار الزمني: 12-18 شهر" : "Timeline: 12-18 months"}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-600">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Target className="h-5 w-5 text-orange-600" />
                        {isArabic ? "5. تحسين الإشراف المصرفي" : "5. Improve Banking Supervision"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        {isArabic 
                          ? "تعزيز قدرات البنك المركزي في الإشراف والرقابة على البنوك ومؤسسات التمويل الأصغر."
                          : "Strengthen Central Bank capacity in supervision and oversight of banks and microfinance institutions."}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-orange-600 border-orange-600">
                          {isArabic ? "أولوية عالية" : "High Priority"}
                        </Badge>
                        <Badge variant="outline">
                          {isArabic ? "الإطار الزمني: مستمر" : "Timeline: Ongoing"}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-base">{isArabic ? "المنهجية والمصادر" : "Methodology & Sources"}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      {isArabic 
                        ? "هذه التوصيات مبنية على تحليل شامل للوضع الاقتصادي والمالي في اليمن، بالاستناد إلى:"
                        : "These recommendations are based on comprehensive analysis of Yemen's economic and financial situation, drawing from:"}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B1538] mt-1">•</span>
                        <span>{isArabic ? "وثائق تقييم المشاريع للبنك الدولي (PAD)" : "World Bank Project Appraisal Documents (PAD)"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B1538] mt-1">•</span>
                        <span>{isArabic ? "تقارير صندوق النقد الدولي (المادة الرابعة)" : "IMF Reports (Article IV Consultations)"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B1538] mt-1">•</span>
                        <span>{isArabic ? "بيانات البنك المركزي اليمني (عدن وصنعاء)" : "Central Bank of Yemen data (Aden and Sana'a)"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B1538] mt-1">•</span>
                        <span>{isArabic ? "تقارير مركز صنعاء للدراسات الاستراتيجية" : "Sana'a Center for Strategic Studies reports"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B1538] mt-1">•</span>
                        <span>{isArabic ? "بيانات مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية (OCHA)" : "UN OCHA Financial Tracking Service data"}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#8B1538] to-[#D4AF37] text-white py-12">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold">
            {isArabic ? "هل تريد معرفة المزيد؟" : "Want to Learn More?"}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {isArabic 
              ? "استكشف المزيد من الموارد والتقارير حول مشاريع البنك الدولي في اليمن"
              : "Explore more resources and reports on World Bank projects in Yemen"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-[#8B1538] hover:bg-white/90">
              <FileText className="mr-2 h-5 w-5" />
              {isArabic ? "تصفح المكتبة البحثية" : "Browse Research Library"}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <BarChart3 className="mr-2 h-5 w-5" />
              {isArabic ? "عرض لوحة البيانات" : "View Data Dashboard"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
