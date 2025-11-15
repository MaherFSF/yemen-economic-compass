import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingDown, Users, DollarSign, BarChart3, Compass, FileText, Database, Target } from "lucide-react";
import MasterCompass from "@/components/MasterCompass";
import NewsTicker from "@/components/NewsTicker";
import ScrollytellingTimeline from "@/components/ScrollytellingTimeline";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { APP_LOGO, PLATFORM_NAME_AR, PLATFORM_NAME_EN } from "@/const";

export default function LandingPage() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="w-full">
      {/* Hero Section - Professional Think Tank Style */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-teal-950/20">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            {/* Logo and Badge */}
            <div className="flex flex-col items-center mb-12">
              <img 
                src={APP_LOGO}
                alt="Yemen Economic Compass Logo"
                className="h-20 md:h-24 w-auto mb-6"
              />
              <Badge variant="outline" className="text-sm px-4 py-1.5 border-teal-600/30 text-teal-700 dark:text-teal-400">
                <Compass className="w-3.5 h-3.5 mr-2 inline" />
                {isArabic ? "مبادرة بحثية من CauseWay" : "A CauseWay Research Initiative"}
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
              {isArabic ? PLATFORM_NAME_AR : PLATFORM_NAME_EN}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-center text-slate-600 dark:text-slate-300 mb-6 max-w-4xl mx-auto font-light leading-relaxed">
              {isArabic
                ? "منصة تحليلية شاملة لفهم النظام المالي الموازي في اليمن"
                : "Comprehensive Analytical Platform for Understanding Yemen's Parallel Financial System"
              }
            </p>

            <p className="text-lg text-center text-slate-500 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
              {isArabic
                ? "عشر سنوات أعادت تشكيل كيفية حركة المال في اليمن (2015-2025)"
                : "Ten Years That Rewired How Money Moves in Yemen (2015-2025)"
              }
            </p>

            {/* CTA Buttons - Professional Spacing */}
            <div className="flex flex-wrap gap-4 justify-center mb-20">
              <Link href="/executive-dashboard">
                <Button size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                  {isArabic ? "لوحة المانحين" : "Executive Dashboard"}
                  <ArrowRight className={`${isArabic ? 'mr-2 rotate-180' : 'ml-2'} h-5 w-5`} />
                </Button>
              </Link>
              <Link href="/cby-dashboard">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 border-2">
                  {isArabic ? "لوحة البنك المركزي" : "CBY Dashboard"}
                </Button>
              </Link>
              <Link href="/literature">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 border-2">
                  {isArabic ? "مكتبة الأبحاث" : "Research Library"}
                </Button>
              </Link>
            </div>

            {/* Key Impact Metrics - Professional Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <TrendingDown className="h-10 w-10 text-red-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">-58%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {isArabic ? "دخل الفرد الحقيقي" : "Real Income Per Capita"}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Users className="h-10 w-10 text-orange-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">21.6M</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {isArabic ? "يحتاجون مساعدات" : "Need Humanitarian Aid"}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <DollarSign className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">120%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {isArabic ? "فارق سعر الصرف" : "Exchange Rate Spread"}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <BarChart3 className="h-10 w-10 text-teal-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">$2.4B</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {isArabic ? "تمويل إنساني 2024" : "Humanitarian Funding 2024"}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section - Think Tank Standards */}
      <section className="bg-white dark:bg-slate-900 py-16 border-y">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {isArabic ? "منصة تحليلية موثوقة" : "Trusted Analytical Platform"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              {isArabic
                ? "تجمع هذه المنصة بيانات من البنك الدولي، صندوق النقد الدولي، مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية، البنك المركزي اليمني، ومركز صنعاء للدراسات الاستراتيجية لتقديم تحليل شامل للنظام المالي في اليمن."
                : "This platform integrates data from the World Bank, IMF, UN OCHA, Central Bank of Yemen, and Sana'a Center for Strategic Studies to provide comprehensive analysis of Yemen's financial system."
              }
            </p>

            {/* Data Sources Badges */}
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: "World Bank", ar: "البنك الدولي" },
                { label: "IMF", ar: "صندوق النقد الدولي" },
                { label: "UN OCHA", ar: "مكتب الأمم المتحدة" },
                { label: "CBY", ar: "البنك المركزي" },
                { label: "Sana'a Center", ar: "مركز صنعاء" }
              ].map((source) => (
                <Badge key={source.label} variant="outline" className="px-4 py-2 text-sm">
                  {isArabic ? source.ar : source.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Ticker */}
      <section className="bg-slate-50 dark:bg-slate-800/50 py-4 border-b">
        <div className="container mx-auto px-6">
          <NewsTicker />
        </div>
      </section>

      {/* Master Compass Widget */}
      <section className="bg-white dark:bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {isArabic ? "البوصلة الاقتصادية الرئيسية" : "Master Economic Compass"}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {isArabic
                  ? "مؤشرات رئيسية تتبع الصحة الاقتصادية والإنسانية في اليمن"
                  : "Key indicators tracking Yemen's economic and humanitarian health"
                }
              </p>
            </div>
            <MasterCompass />
          </div>
        </div>
      </section>

      {/* Scrollytelling Timeline */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-teal-950/20 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {isArabic ? "رحلة عشر سنوات" : "A Decade's Journey"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {isArabic
                ? "استكشف الأحداث الرئيسية التي شكلت النظام المالي في اليمن من 2015 إلى 2025"
                : "Explore the key events that shaped Yemen's financial system from 2015 to 2025"
              }
            </p>
          </div>
          <ScrollytellingTimeline />
        </div>
      </section>

      {/* Executive Summary Section */}
      <section className="bg-white dark:bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              {isArabic ? "الملخص التنفيذي" : "Executive Summary"}
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {isArabic
                  ? "منذ عام 2015، أدى الصراع في اليمن إلى تفكك غير مسبوق في النظام المالي الرسمي، مما أدى إلى ظهور نظام مالي موازٍ معقد. انقسم البنك المركزي اليمني بين عدن وصنعاء، وتباعدت أسعار الصرف بنسبة تزيد عن 120٪، وانهارت الوساطة المصرفية التقليدية. ومع ذلك، استمرت حركة الأموال من خلال شبكات غير رسمية، وتحويلات، ومساعدات إنسانية تبلغ 2.4 مليار دولار سنوياً."
                  : "Since 2015, Yemen's conflict has triggered an unprecedented fragmentation of the formal financial system, giving rise to a complex parallel financial architecture. The Central Bank of Yemen split between Aden and Sana'a, exchange rates diverged by over 120%, and traditional banking intermediation collapsed. Yet money continued to flow through informal networks, remittances, and $2.4 billion in annual humanitarian aid."
                }
              </p>

              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {isArabic
                  ? "تقدم هذه المنصة تحليلاً شاملاً لهذا النظام المالي الموازي، مدعوماً ببيانات من البنك الدولي، صندوق النقد الدولي، مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية، والبنك المركزي اليمني. نحن نتتبع 12 مؤشراً اقتصادياً رئيسياً، ونوثق 24 حدثاً رئيسياً على مدى عشر سنوات، ونقدم أدوات تفاعلية للمانحين وصانعي السياسات والباحثين."
                  : "This platform provides comprehensive analysis of this parallel financial system, backed by data from the World Bank, IMF, UN OCHA, and Central Bank of Yemen. We track 12 key economic indicators, document 24 major events over a decade, and provide interactive tools for donors, policymakers, and researchers."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder-Specific Pathways */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-teal-950/20 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">
              {isArabic ? "مسارات أصحاب المصلحة" : "Stakeholder Pathways"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center max-w-3xl mx-auto">
              {isArabic
                ? "تجربة مخصصة لكل نوع من أصحاب المصلحة"
                : "Tailored experience for each stakeholder type"
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* World Bank / IMF / Donors */}
              <Card className="border-2 hover:shadow-xl transition-all group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-center">
                    {isArabic ? "المانحون والمؤسسات الدولية" : "Donors & International Institutions"}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-center">
                    {isArabic
                      ? "تتبع التأثير، محاكاة السيناريوهات، تصدير التقارير"
                      : "Track impact, simulate scenarios, export reports"
                    }
                  </p>
                  <Link href="/executive-dashboard">
                    <Button className="w-full">
                      {isArabic ? "لوحة المانحين" : "Executive Dashboard"}
                      <ArrowRight className={`${isArabic ? 'mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Central Bank */}
              <Card className="border-2 hover:shadow-xl transition-all group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-center">
                    {isArabic ? "البنك المركزي اليمني" : "Central Bank of Yemen"}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-center">
                    {isArabic
                      ? "مراقبة السياسة النقدية، محاكاة السياسات، تتبع الامتثال"
                      : "Monitor monetary policy, simulate policies, track compliance"
                    }
                  </p>
                  <Link href="/cby-dashboard">
                    <Button className="w-full">
                      {isArabic ? "لوحة البنك المركزي" : "CBY Dashboard"}
                      <ArrowRight className={`${isArabic ? 'mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Researchers */}
              <Card className="border-2 hover:shadow-xl transition-all group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <FileText className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-center">
                    {isArabic ? "الباحثون والمحللون" : "Researchers & Analysts"}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-center">
                    {isArabic
                      ? "الوصول إلى البيانات، المنهجية، المكتبة البحثية"
                      : "Access data, methodology, research library"
                    }
                  </p>
                  <Link href="/literature">
                    <Button className="w-full">
                      {isArabic ? "مكتبة الأبحاث" : "Research Library"}
                      <ArrowRight className={`${isArabic ? 'mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="bg-white dark:bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              {isArabic ? "استكشف بعمق" : "Deep Dive"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: { ar: "الأزمة الاقتصادية", en: "Economic Crisis" }, link: "/economic-crisis", icon: TrendingDown },
                { title: { ar: "حرب العملة", en: "Currency War" }, link: "/currency-war", icon: DollarSign },
                { title: { ar: "أصحاب المصلحة", en: "Stakeholder Hub" }, link: "/stakeholder-hub", icon: Users },
                { title: { ar: "التصور المتقدم", en: "Advanced Visualization" }, link: "/advanced-viz", icon: BarChart3 },
                { title: { ar: "الأخبار", en: "News Aggregator" }, link: "/news", icon: FileText },
                { title: { ar: "إدارة الملفات", en: "File Manager" }, link: "/files", icon: Database }
              ].map((item) => (
                <Link key={item.link} href={item.link}>
                  <Card className="border-2 hover:shadow-lg transition-all cursor-pointer group h-full">
                    <CardContent className="p-6">
                      <item.icon className="h-8 w-8 text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                        {isArabic ? item.title.ar : item.title.en}
                      </h3>
                      <div className="flex items-center text-teal-600 dark:text-teal-400 text-sm font-medium">
                        {isArabic ? "استكشف" : "Explore"}
                        <ArrowRight className={`${isArabic ? 'mr-1 rotate-180' : 'ml-1'} h-4 w-4`} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
