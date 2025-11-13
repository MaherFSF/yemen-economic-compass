import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingDown, Users, DollarSign, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-background" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center px-4 py-20">
          {/* Badge */}
          <div className="inline-block mb-6">
            <Badge variant="outline" className="text-base px-6 py-2 bg-white/10 backdrop-blur-sm border-white/30 text-white">
              {isArabic ? "تقرير CauseWay 2025" : "CauseWay Report 2025"}
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {isArabic ? (
              <>
                النظام المالي الموازي<br />في اليمن
              </>
            ) : (
              <>
                Yemen's Shadow<br />Monetary System
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto">
            {isArabic 
              ? "عشر سنوات أعادت تشكيل حركة المال (2015-2025)"
              : "Ten Years That Rewired How Money Moves (2015-2025)"
            }
          </p>

          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            {isArabic
              ? "تحليل استراتيجي شامل للتحول الهيكلي في النظام المالي اليمني"
              : "A comprehensive strategic analysis of Yemen's financial system transformation"
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
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                {isArabic ? "لوحة التحكم التفاعلية" : "Interactive Dashboard"}
              </Button>
            </Link>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <TrendingDown className="h-8 w-8 text-red-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">~50%</div>
                <div className="text-sm text-gray-300">
                  {isArabic ? "انكماش الناتج المحلي" : "GDP Contraction"}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">76%</div>
                <div className="text-sm text-gray-300">
                  {isArabic ? "معدل الفقر" : "Poverty Rate"}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">2,800</div>
                <div className="text-sm text-gray-300">
                  {isArabic ? "ريال/دولار (عدن)" : "YER/USD (Aden)"}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">35%</div>
                <div className="text-sm text-gray-300">
                  {isArabic ? "التضخم (ذروة 2025)" : "Inflation (Peak 2025)"}
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

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/5">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {isArabic ? "نظرة عامة" : "Overview"}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {isArabic ? "التحول الهيكلي" : "Structural Transformation"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic
                ? "بين 2015 و2025، شهد اليمن تحولاً جذرياً من نظام مالي موحد إلى نظامين متنافسين، مع عواقب إنسانية واقتصادية كارثية."
                : "Between 2015 and 2025, Yemen witnessed a radical transformation from a unified financial system to two competing systems, with catastrophic humanitarian and economic consequences."
              }
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {isArabic ? "بنكان مركزيان" : "Two Central Banks"}
                </h3>
                <p className="text-muted-foreground">
                  {isArabic
                    ? "انقسام البنك المركزي اليمني في 2016 خلق نظامين نقديين متنافسين في صنعاء وعدن"
                    : "The 2016 split of Yemen's Central Bank created two competing monetary systems in Sana'a and Aden"
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
                  {isArabic ? "حرب العملة" : "Currency War"}
                </h3>
                <p className="text-muted-foreground">
                  {isArabic
                    ? "تباعد سعر الصرف بنسبة 4.3 ضعف بين المنطقتين، مع انهيار الريال في عدن وثبات نسبي في صنعاء"
                    : "Exchange rate diverged 4.3x between zones, with rial collapse in Aden and relative stability in Sana'a"
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
                  {isArabic ? "الأثر الإنساني" : "Humanitarian Impact"}
                </h3>
                <p className="text-muted-foreground">
                  {isArabic
                    ? "ارتفع معدل الفقر من 54% إلى 76%، مع انهيار الخدمات العامة واعتماد كامل على المساعدات الخارجية"
                    : "Poverty rate rose from 54% to 76%, with public services collapsed and total dependence on external aid"
                  }
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/overview">
              <Button size="lg" variant="outline">
                {isArabic ? "استكشف التحليل الكامل" : "Explore Full Analysis"}
                <ArrowRight className={`${isArabic ? 'mr-2 rotate-180' : 'ml-2'} h-5 w-5`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CauseWay Section */}
      <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                {isArabic ? "من نحن" : "About Us"}
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                {isArabic ? "CauseWay Consultancies" : "CauseWay Consultancies"}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {isArabic
                  ? "وكالة متخصصة من الجيل القادم تركز حصرياً على المشهد المالي والاقتصادي اليمني. نقدم التحليل الاستراتيجي والاستشارات التنفيذية لصناع السياسات والباحثين والمنظمات الدولية."
                  : "A next-generation specialized agency focused exclusively on Yemen's financial and economic landscape. We provide strategic analysis and implementation advisory to policymakers, researchers, and international organizations."
                }
              </p>
              <Link href="/about">
                <Button>
                  {isArabic ? "تعرف على المزيد" : "Learn More"}
                  <ArrowRight className={`${isArabic ? 'mr-2 rotate-180' : 'ml-2'} h-5 w-5`} />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Card className="border-2 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">C</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">CauseWay</h3>
                      <p className="text-muted-foreground">
                        {isArabic ? "وكالة استشارية متخصصة" : "Specialized Consultancy"}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-accent/20 rounded-lg">
                      <div className="text-3xl font-bold text-primary">12+</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {isArabic ? "سنوات خبرة" : "Years Experience"}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-accent/20 rounded-lg">
                      <div className="text-3xl font-bold text-primary">100%</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {isArabic ? "تركيز على اليمن" : "Yemen Focused"}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {isArabic
                      ? "نجمع بين التفاوض الميداني، وبناء الأنظمة، وتعزيز المساءلة والمرونة المؤسسية"
                      : "Combining field negotiation, systems building, and institutional accountability"
                    }
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
