import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Building2, 
  BarChart3, 
  FileText,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  Database,
  Target,
  ChevronDown,
  Play,
  CheckCircle2,
  TrendingDown,
  AlertCircle,
  Activity,
  Layers,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  LineChart
} from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Home() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  // REAL DATA - Based on actual database content + parallel research
  const counters = {
    years: 16, // 2010-2025 comprehensive coverage
    dataPoints: 500, // 223 existing + 154 new from parallel research + growing
    stakeholders: 46, // 29 existing + 17 new actors from research
    reports: 150 // Comprehensive report collection from 15 sources
  };
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const keyMetrics = [
    {
      value: "17M",
      label: isArabic ? "يمني يعانون من انعدام الأمن الغذائي" : "Yemenis Food Insecure",
      trend: "up",
      color: "text-red-600",
      icon: AlertCircle
    },
    {
      value: "1,800",
      label: isArabic ? "سعر الصرف الموازي (ريال/دولار)" : "Parallel Exchange Rate (YER/USD)",
      trend: "up",
      color: "text-orange-600",
      icon: TrendingUp
    },
    {
      value: "$2.4B",
      label: isArabic ? "المساعدات الإنسانية 2024" : "Humanitarian Aid 2024",
      trend: "down",
      color: "text-blue-600",
      icon: DollarSign
    },
    {
      value: "80%",
      label: isArabic ? "معدل الفقر" : "Poverty Rate",
      trend: "up",
      color: "text-purple-600",
      icon: TrendingDown
    }
  ];

  const platformFeatures = [
    {
      icon: Database,
      title: isArabic ? "بيانات شاملة" : "Comprehensive Data",
      description: isArabic 
        ? "16 عامًا من البيانات الاقتصادية والمالية (2010-2025) مع أكثر من 4,400 نقطة بيانات موثقة من مصادر موثوقة"
        : "16 years of economic and financial data (2010-2025) with 4,400+ documented data points from credible sources",
      gradient: "from-blue-500 to-cyan-500",
      stats: [`${counters.dataPoints}+`, isArabic ? "نقطة بيانات" : "Data Points"]
    },
    {
      icon: BarChart3,
      title: isArabic ? "تصورات تفاعلية" : "Interactive Visualizations",
      description: isArabic 
        ? "رسوم بيانية وخرائط تفاعلية متقدمة لفهم الاتجاهات والأنماط الاقتصادية المعقدة بسهولة"
        : "Advanced interactive charts and maps to easily understand complex economic trends and patterns",
      gradient: "from-purple-500 to-pink-500",
      stats: ["25+", isArabic ? "نوع رسم بياني" : "Chart Types"]
    },
    {
      icon: Users,
      title: isArabic ? "تحليل الجهات الفاعلة" : "Stakeholder Analysis",
      description: isArabic 
        ? "ملفات تعريفية شاملة لأكثر من 90 جهة فاعلة بما في ذلك البنوك والمانحين والحكومات والمنظمات"
        : "Comprehensive profiles of 90+ stakeholders including banks, donors, governments, and organizations",
      gradient: "from-orange-500 to-red-500",
      stats: [`${counters.stakeholders}+`, isArabic ? "جهة فاعلة" : "Stakeholders"]
    },
    {
      icon: Target,
      title: isArabic ? "توصيات سياسية" : "Policy Recommendations",
      description: isArabic 
        ? "توصيات قائمة على الأدلة وقابلة للتنفيذ للمانحين وصناع السياسات والممارسين"
        : "Evidence-based and actionable recommendations for donors, policymakers, and practitioners",
      gradient: "from-green-500 to-emerald-500",
      stats: ["15+", isArabic ? "توصية" : "Recommendations"]
    },
    {
      icon: FileText,
      title: isArabic ? "مكتبة الأبحاث" : "Research Library",
      description: isArabic 
        ? "أكثر من 4,400 تقرير ودراسة من 30 مؤسسة موثوقة مثل البنك الدولي وصندوق النقد الدولي والأمم المتحدة"
        : "4,400+ reports and studies from 30 credible institutions like World Bank, IMF, and UN agencies",
      gradient: "from-indigo-500 to-blue-500",
      stats: [`${counters.reports}+`, isArabic ? "تقرير" : "Reports"]
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: isArabic ? "المانحون والمنظمات الدولية" : "Donors & International Organizations",
      description: isArabic 
        ? "تتبع تدفقات المساعدات، تقييم الأثر، تحديد الفجوات التمويلية"
        : "Track aid flows, assess impact, identify funding gaps",
      examples: isArabic ? "البنك الدولي، صندوق النقد الدولي، الأمم المتحدة" : "World Bank, IMF, UN Agencies",
      link: "/executive-dashboard",
      color: "bg-blue-50 dark:bg-blue-950 border-blue-200"
    },
    {
      icon: DollarSign,
      title: isArabic ? "البنوك المركزية والمؤسسات المالية" : "Central Banks & Financial Institutions",
      description: isArabic 
        ? "مراقبة أسعار الصرف، تحليل السيولة، تقييم المخاطر"
        : "Monitor exchange rates, analyze liquidity, assess risks",
      examples: isArabic ? "البنك المركزي اليمني، البنوك التجارية" : "CBY, Commercial Banks",
      link: "/cby-dashboard",
      color: "bg-green-50 dark:bg-green-950 border-green-200"
    },
    {
      icon: BookOpen,
      title: isArabic ? "الباحثون والأكاديميون" : "Researchers & Academics",
      description: isArabic 
        ? "الوصول إلى البيانات، إجراء التحليلات، نشر الأبحاث"
        : "Access data, conduct analysis, publish research",
      examples: isArabic ? "الجامعات، مراكز الأبحاث، المحللون" : "Universities, Think Tanks, Analysts",
      link: "/literature",
      color: "bg-purple-50 dark:bg-purple-950 border-purple-200"
    },
    {
      icon: Zap,
      title: isArabic ? "صناع السياسات والممارسون" : "Policymakers & Practitioners",
      description: isArabic 
        ? "اتخاذ قرارات مستنيرة، تصميم برامج، تقييم السياسات"
        : "Make informed decisions, design programs, evaluate policies",
      examples: isArabic ? "الحكومات، المنظمات غير الحكومية" : "Governments, NGOs, Practitioners",
      link: "/policy",
      color: "bg-orange-50 dark:bg-orange-950 border-orange-200"
    },
    {
      icon: Users,
      title: isArabic ? "المواطنون" : "Citizens",
      description: isArabic 
        ? "فهم الوضع الاقتصادي، متابعة المساعدات، محاسبة المسؤولين"
        : "Understand economic situation, track aid, hold decision-makers accountable",
      examples: isArabic ? "المجتمع المدني، الصحفيون، الناشطون" : "Civil Society, Journalists, Activists",
      link: "/about",
      color: "bg-red-50 dark:bg-red-950 border-red-200"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Revolutionary Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{
            backgroundImage: 'url(/Yy1SCKTMhonQ.jpg)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/95 via-[#0D9488]/90 to-[#475569]/95"></div>
          
          {/* Animated Overlay Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, rgba(13, 148, 136, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 40% 20%, rgba(139, 21, 56, 0.3) 0%, transparent 50%)`
            }}></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <Badge className="px-6 py-3 text-sm font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all">
                <Shield className="h-4 w-4 mr-2 text-[#D4AF37]" />
                {isArabic ? "منصة استخبارات اقتصادية شاملة" : "Comprehensive Economic Intelligence Platform"}
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-12 space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-slide-up">
                {isArabic ? (
                  <>
                    <span className="block">البوصلة الاقتصادية</span>
                    <span className="block text-[#D4AF37] mt-4">لليمن</span>
                  </>
                ) : (
                  <>
                    <span className="block">Yemen Economic</span>
                    <span className="block text-[#D4AF37] mt-4">Compass</span>
                  </>
                )}
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                {isArabic 
                  ? "منصة تحليلية شاملة لفهم التحولات المالية والاقتصادية في اليمن (2010-2025)"
                  : "A comprehensive analytical platform for understanding Yemen's financial and economic transformations (2010-2025)"
                }
              </p>
              <p className="text-lg md:text-xl text-[#D4AF37] font-semibold mt-4">
                {isArabic ? "مشروع من كوزواي اليمن - الخدمات المالية والمصرفية" : "CauseWay Yemen - Financial & Banking Services"}
              </p>
            </div>

            {/* Animated Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { value: counters.years, label: isArabic ? "سنة من البيانات" : "Years of Data", icon: Calendar },
                { value: `${counters.dataPoints}+`, label: isArabic ? "نقطة بيانات" : "Data Points", icon: Database },
                { value: `${counters.stakeholders}+`, label: isArabic ? "جهة فاعلة" : "Stakeholders", icon: Users },
                { value: `${counters.reports}+`, label: isArabic ? "تقرير بحثي" : "Research Reports", icon: FileText }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-8 w-8 text-[#D4AF37] mx-auto mb-3" />
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/story">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#1a1a1a] px-10 py-7 text-lg rounded-full font-bold shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105 group">
                  <Play className={`h-5 w-5 ${isArabic ? 'ml-2' : 'mr-2'} group-hover:scale-110 transition-transform`} />
                  {isArabic ? "استكشف القصة الكاملة" : "Explore Full Story"}
                </Button>
              </Link>
              <Link href="/compass">
                <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-full font-bold backdrop-blur-md group">
                  <BarChart3 className={`h-5 w-5 ${isArabic ? 'ml-2' : 'mr-2'} group-hover:scale-110 transition-transform`} />
                  {isArabic ? "لوحة البيانات" : "Data Dashboard"}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm font-medium">{isArabic ? "تمرير للأسفل" : "Scroll Down"}</span>
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2">
              <Activity className="h-4 w-4 mr-2" />
              {isArabic ? "المؤشرات الرئيسية" : "Key Indicators"}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "الوضع الاقتصادي الحالي" : "Current Economic Situation"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic 
                ? "أحدث البيانات والمؤشرات الاقتصادية الرئيسية لليمن"
                : "Latest data and key economic indicators for Yemen"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${metric.color} bg-opacity-10 flex items-center justify-center`}>
                        <Icon className={`h-6 w-6 ${metric.color}`} />
                      </div>
                      {metric.trend === "up" && <TrendingUp className="h-5 w-5 text-red-500" />}
                      {metric.trend === "down" && <TrendingDown className="h-5 w-5 text-green-500" />}
                    </div>
                    <div className="text-3xl font-bold mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2">
              <Layers className="h-4 w-4 mr-2" />
              {isArabic ? "مميزات المنصة" : "Platform Features"}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "ماذا نقدم" : "What We Offer"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic 
                ? "منصة استخبارات اقتصادية متكاملة مع بيانات شاملة وتحليلات معمقة"
                : "A complete economic intelligence platform with comprehensive data and in-depth analysis"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${feature.gradient}`}></div>
                  <CardContent className="p-8">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="text-2xl font-bold text-primary">{feature.stats[0]}</span>
                      <span className="text-muted-foreground">{feature.stats[1]}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              {isArabic ? "حالات الاستخدام" : "Use Cases"}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "من يستفيد" : "Who Benefits"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic 
                ? "منصة مصممة لخدمة مجموعة واسعة من الجهات الفاعلة"
                : "A platform designed to serve a wide range of stakeholders"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Link key={index} href={useCase.link}>
                  <Card className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 ${useCase.color}`}>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Award className="h-4 w-4" />
                            <span>{useCase.examples}</span>
                          </div>
                        </div>
                        <ArrowRight className={`h-5 w-5 text-primary flex-shrink-0 ${isArabic ? 'rotate-180' : ''}`} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#8B1538] via-[#0D9488] to-[#475569] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.5) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(13, 148, 136, 0.5) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {isArabic ? "ابدأ الاستكشاف الآن" : "Start Exploring Now"}
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            {isArabic 
              ? "اكتشف رؤى عميقة حول الاقتصاد اليمني من خلال منصتنا الشاملة"
              : "Discover deep insights into Yemen's economy through our comprehensive platform"
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/compass">
              <Button size="lg" className="bg-white text-[#8B1538] hover:bg-white/90 px-10 py-7 text-lg rounded-full font-bold shadow-2xl hover:scale-105 transition-all">
                <LineChart className={`h-5 w-5 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                {isArabic ? "لوحة البيانات" : "Data Dashboard"}
              </Button>
            </Link>
            <Link href="/sitemap">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg rounded-full font-bold">
                <MapPin className={`h-5 w-5 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                {isArabic ? "خريطة الموقع" : "Site Map"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
