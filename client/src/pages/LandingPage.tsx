import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingDown, Users, DollarSign, BarChart3, Compass } from "lucide-react";
import MasterCompass from "@/components/MasterCompass";
import NewsTicker from "@/components/NewsTicker";
import ScrollytellingTimeline from "@/components/ScrollytellingTimeline";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { PLATFORM_NAME_AR, PLATFORM_NAME_EN, PLATFORM_SUBTITLE_AR, PLATFORM_SUBTITLE_EN } from "@/const";

export default function LandingPage() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/haNkczbhEtrC.jpg" 
            alt="Yemen Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center px-4 py-20">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/yemen-compass-logo.png" 
              alt="Yemen Economic Compass Logo"
              className="h-24 md:h-32 w-auto"
            />
          </div>

          {/* Badge */}
          <div className="inline-block mb-6">
            <Badge variant="outline" className="text-base px-6 py-2 bg-white/10 backdrop-blur-sm border-white/30 text-white">
              <Compass className="w-4 h-4 mr-2 inline" />
              {isArabic ? "مبادرة بحثية من CauseWay" : "A CauseWay Research Initiative"}
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {isArabic ? PLATFORM_NAME_AR : PLATFORM_NAME_EN}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto">
            {isArabic ? PLATFORM_SUBTITLE_AR : PLATFORM_SUBTITLE_EN}
          </p>

          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            {isArabic
              ? "عشر سنوات أعادت تشكيل كيفية حركة المال في اليمن (2015-2025)"
              : "Ten Years That Rewired How Money Moves in Yemen (2015-2025)"
            }
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link href="/story">
              <Button size="lg" className="text-lg px-8 py-6">
                {isArabic ? "اقرأ القصة الكاملة" : "Read Full Story"}
                <ArrowRight className={`${isArabic ? 'mr-2 rotate-180' : 'ml-2'} h-5 w-5`} />
              </Button>
            </Link>
            <Link href="/compass">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                {isArabic ? "لوحة البوصلة" : "Compass Dashboard"}
              </Button>
            </Link>
            <Link href="/literature">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                {isArabic ? "مكتبة الأبحاث" : "Research Library"}
              </Button>
            </Link>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <TrendingDown className="h-8 w-8 text-red-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">-58%</div>
                <div className="text-sm text-gray-300">
                  {isArabic ? "دخل الفرد الحقيقي" : "Real Income Per Capita"}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">76%</div>
                <div className="text-sm text-gray-300">
                  {isArabic ? "معدل الفقر (2025)" : "Poverty Rate (2025)"}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$2.8B</div>
                <div className="text-sm text-gray-300">
                  {isArabic ? "تدفقات نقدية سنوية" : "Annual Cash Flows"}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">88%</div>
                <div className="text-sm text-gray-300">
                  {isArabic ? "قنوات غير مصرفية" : "Non-Bank Channels"}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Executive Summary Section */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/5">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {isArabic ? "الملخص التنفيذي" : "Executive Summary"}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {isArabic ? "عقد من التحول المالي" : "A Decade of Financial Transformation"}
            </h2>
            <div className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed space-y-4">
              <p>
                {isArabic
                  ? "من 2015 إلى 2025، شهدت البنية التحتية المالية لليمن تحولاً عميقاً حدث إلى حد كبير دون أن يلاحظه المجتمع الدولي. عندما انقسم البنك المركزي وتجمدت القنوات المصرفية الرسمية، واجه الفاعلون الإنسانيون تحدياً غير مسبوق: كيفية نقل الأموال على نطاق واسع في منطقة صراع مجزأة."
                  : "From 2015 to 2025, Yemen's financial infrastructure underwent a profound transformation that occurred largely unnoticed by the international community. When the Central Bank split and formal banking channels froze, humanitarian actors faced an unprecedented challenge: how to move money at scale in a fragmented conflict zone."
                }
              </p>
              <p>
                {isArabic
                  ? "الحل - توجيه التحويلات النقدية الطارئة عبر الصرافين (الحوالة) ومؤسسات التمويل الأصغر - كان عملياً ومؤثراً في آن واحد. بينما نجح هذا النهج في إيصال المساعدات المنقذة للحياة إلى الملايين، فإنه في الوقت نفسه حفز إعادة هيكلة أساسية للهندسة المالية اليمنية."
                  : "The solution—routing emergency cash transfers through money exchangers (hawala) and microfinance institutions—was both pragmatic and consequential. While this approach successfully delivered life-saving assistance to millions, it simultaneously catalyzed a fundamental restructuring of Yemen's financial architecture."
                }
              </p>
              <p className="font-semibold text-primary">
                {isArabic
                  ? "اليوم، السيولة والمدفوعات والتمويل التجزئة يهيمن عليها الوسطاء غير المصرفيين. البنوك الرسمية تبقى ذات صلة لمعاملات SWIFT والامتثال، لكنها إلى حد كبير تم إزاحتها من أنشطة التسوية اليومية."
                  : "Today, liquidity, payments, and retail finance are dominated by non-bank intermediaries. Formal banks remain relevant for SWIFT transactions and compliance, but have largely been displaced from everyday settlement activities."
                }
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {isArabic ? "بنكان مركزيان" : "Dual Central Banks"}
                </h3>
                <p className="text-muted-foreground">
                  {isArabic
                    ? "انقسام البنك المركزي اليمني في سبتمبر 2016 أسس نظامين نقديين متنافسين، مع سياسات متباينة وسيطرة على العملة"
                    : "The September 2016 Central Bank split established two competing monetary systems, with divergent policies and currency control"
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💱</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {isArabic ? "التشرذم النقدي" : "Monetary Fragmentation"}
                </h3>
                <p className="text-muted-foreground">
                  {isArabic
                    ? "تباعد سعر الصرف من 215 ريال/دولار (2014) إلى 2,800 في عدن مقابل 560 في صنعاء (2025) - تباعد بنسبة 400%"
                    : "Exchange rate diverged from 215 YER/USD (2014) to 2,800 in Aden vs 560 in Sana'a (2025) - a 400% divergence"
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {isArabic ? "النظام الموازي" : "Parallel System"}
                </h3>
                <p className="text-muted-foreground">
                  {isArabic
                    ? "القنوات غير المصرفية تهيمن الآن على 88% من المدفوعات، بينما البنوك الرسمية مقتصرة على 12% ومعاملات SWIFT"
                    : "Non-bank channels now dominate 88% of payments, while formal banks are relegated to 12% and SWIFT transactions"
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Master Compass Widget */}
      <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
        <div className="container max-w-7xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Compass className="w-4 h-4 mr-2 inline" />
              {isArabic ? "البوصلة الرئيسية" : "Master Compass"}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {isArabic ? "مؤشرات اقتصادية رئيسية" : "Key Economic Indicators"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic
                ? "استكشف 12 مؤشراً اقتصادياً رئيسياً عبر الزمن (2014-2025) لفهم التحول الهيكلي في النظام المالي اليمني"
                : "Explore 12 key economic indicators over time (2014-2025) to understand the structural transformation of Yemen's financial system"
              }
            </p>
          </div>
          <MasterCompass />
        </div>
      </section>

      {/* News Ticker */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-6xl">
          <NewsTicker />
        </div>
      </section>

      {/* Scrollytelling Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/5">
        <div className="container max-w-6xl mb-12">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              {isArabic ? "الرحلة التفاعلية" : "Interactive Journey"}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {isArabic ? "عشر سنوات من التحول" : "A Decade of Transformation"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic
                ? "تابع الرحلة التفاعلية عبر الأحداث الرئيسية التي أعادت تشكيل النظام المالي اليمني من 2015 إلى 2025"
                : "Follow the interactive journey through key events that reshaped Yemen's financial system from 2015 to 2025"
              }
            </p>
          </div>
        </div>
        <ScrollytellingTimeline />
      </section>

      {/* Deep Dive Sections */}
      <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {isArabic ? "تحليلات معمقة" : "Deep Dive Analysis"}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {isArabic ? "استكشف المواضيع الرئيسية" : "Explore Key Topics"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic
                ? "تحليلات شاملة للأزمة الاقتصادية، حرب العملة، الفاعلين الرئيسيين، والبيانات التفاعلية"
                : "Comprehensive analysis of the economic crisis, currency war, key stakeholders, and interactive data"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link href="/economic-crisis">
              <Card className="border-2 hover:shadow-xl transition-all hover:border-red-500 cursor-pointer h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingDown className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {isArabic ? "الأزمة الاقتصادية" : "Economic Crisis"}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {isArabic
                      ? "عقد من التشظي النقدي والحرب الاقتصادية: قراءة استراتيجية في إعادة تشكيل المركز المالي لليمن"
                      : "A decade of monetary fragmentation and economic warfare: strategic analysis of Yemen's financial restructuring"
                    }
                  </p>
                  <Badge variant="outline" className="text-red-600 border-red-600">
                    {isArabic ? "قراءة معمقة" : "In-Depth Read"}
                  </Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/currency-war">
              <Card className="border-2 hover:shadow-xl transition-all hover:border-purple-500 cursor-pointer h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {isArabic ? "حرب العملة" : "Currency War"}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {isArabic
                      ? "كيف تحول البنك المركزي الواحد إلى نظامين ماليين متنافسين يستخدمان العملة كسلاح"
                      : "How one central bank became two competing financial systems using currency as a weapon"
                    }
                  </p>
                  <Badge variant="outline" className="text-purple-600 border-purple-600">
                    {isArabic ? "تحليل شامل" : "Comprehensive Analysis"}
                  </Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/stakeholders">
              <Card className="border-2 hover:shadow-xl transition-all hover:border-blue-500 cursor-pointer h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {isArabic ? "الفاعلون الرئيسيون" : "Key Stakeholders"}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {isArabic
                      ? "تحليل شامل للفاعلين الرئيسيين: الحكومة المعترف بها، الحوثيون، السعودية، الإمارات، والمجلس الانتقالي"
                      : "Comprehensive profiles of key actors: IRG, Houthis, Saudi Arabia, UAE, and Southern Transitional Council"
                    }
                  </p>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    {isArabic ? "ملفات تعريفية" : "Actor Profiles"}
                  </Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/advanced-viz">
              <Card className="border-2 hover:shadow-xl transition-all hover:border-green-500 cursor-pointer h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {isArabic ? "البيانات التفاعلية" : "Interactive Data"}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {isArabic
                      ? "استكشف الرسوم البيانية التفاعلية لأسعار الصرف، التضخم، الناتج المحلي، وتدفقات الأموال"
                      : "Explore interactive charts for exchange rates, inflation, GDP, and money flows"
                    }
                  </p>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {isArabic ? "تصورات تفاعلية" : "Interactive Visualizations"}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Additional Links */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/literature">
              <Card className="border hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">📚</div>
                  <h4 className="font-bold mb-2">
                    {isArabic ? "مكتبة الأبحاث" : "Research Library"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isArabic ? "46+ منشور من 20+ مؤسسة" : "46+ publications from 20+ institutions"}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/calculators">
              <Card className="border hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">🧮</div>
                  <h4 className="font-bold mb-2">
                    {isArabic ? "الحاسبات المالية" : "Financial Calculators"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isArabic ? "حاسبة التضخم وسعر الصرف" : "Inflation & Exchange Rate Calculators"}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/forecasting">
              <Card className="border hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">🔮</div>
                  <h4 className="font-bold mb-2">
                    {isArabic ? "التوقعات" : "Scenario Forecasting"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isArabic ? "توقعات اقتصادية 2025-2030" : "Economic Projections 2025-2030"}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            {isArabic ? "ابدأ الاستكشاف" : "Start Exploring"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {isArabic
              ? "اكتشف التحليلات الشاملة، البيانات التفاعلية، والأبحاث المعمقة حول النظام المالي اليمني"
              : "Discover comprehensive analysis, interactive data, and in-depth research on Yemen's financial system"
            }
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/story">
              <Button size="lg">
                {isArabic ? "القصة الكاملة" : "Full Story"}
                <ArrowRight className={`${isArabic ? 'mr-2 rotate-180' : 'ml-2'} h-5 w-5`} />
              </Button>
            </Link>
            <Link href="/compass">
              <Button size="lg" variant="outline">
                {isArabic ? "لوحة البوصلة" : "Compass Dashboard"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
