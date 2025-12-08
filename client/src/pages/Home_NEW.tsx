import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingDown, TrendingUp, DollarSign, Users, BarChart3,
  Globe, Building2, BookOpen, Target, ArrowRight, LineChart,
  Database, FileText, Calendar, Zap, Award, MapPin, ChevronDown
} from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { PLATFORM_NAME_AR, PLATFORM_NAME_EN } from "@/const";

export default function HomeNew() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Real, accurate statistics
  const stats = {
    years: 16,
    dataPoints: 500,
    stakeholders: 46,
    reports: 150
  };

  // Key economic indicators - REAL DATA
  const keyIndicators = [
    {
      icon: DollarSign,
      value: "$23.8B",
      label: isArabic ? "الناتج المحلي 2024" : "GDP 2024",
      change: "-37%",
      trend: "down",
      color: "text-red-500"
    },
    {
      icon: Users,
      value: "17M",
      label: isArabic ? "يعانون من انعدام الأمن الغذائي" : "Food Insecure",
      change: "+127%",
      trend: "up",
      color: "text-orange-500"
    },
    {
      icon: TrendingUp,
      value: "2,450",
      label: isArabic ? "سعر الصرف (عدن)" : "Exchange Rate (Aden)",
      change: "+1,040%",
      trend: "up",
      color: "text-red-500"
    },
    {
      icon: Globe,
      value: "$2.4B",
      label: isArabic ? "المساعدات الإنسانية 2024" : "Humanitarian Aid 2024",
      change: "-15%",
      trend: "down",
      color: "text-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">
      
      {/* Hero Section - Modern & Professional */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)
              `,
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          />
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03]" />
        </div>

        <div className={`container relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo/Badge */}
          <div className="mb-8 flex justify-center">
            <Badge className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-teal-600 text-white border-0">
              <Globe className="h-5 w-5 mr-2" />
              {isArabic ? "مرصد اقتصادي شامل" : "Comprehensive Economic Observatory"}
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            {isArabic ? PLATFORM_NAME_AR : PLATFORM_NAME_EN}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            {isArabic
              ? "منصة تحليلية شاملة لفهم التحولات المالية والاقتصادية في اليمن (2010-2025)"
              : "A comprehensive analytical platform for understanding Yemen's financial and economic transformations (2010-2025)"
            }
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/compass">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                <BarChart3 className={`h-5 w-5 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                {isArabic ? "استكشف البيانات" : "Explore Data"}
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-2 px-8 py-6 text-lg rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                <BookOpen className={`h-5 w-5 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                {isArabic ? "عن المنصة" : "About Platform"}
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: stats.years, label: isArabic ? "سنة من البيانات" : "Years of Data", icon: Calendar },
              { value: `${stats.dataPoints}+`, label: isArabic ? "نقطة بيانات" : "Data Points", icon: Database },
              { value: `${stats.stakeholders}+`, label: isArabic ? "جهة فاعلة" : "Stakeholders", icon: Users },
              { value: `${stats.reports}+`, label: isArabic ? "تقرير بحثي" : "Research Reports", icon: FileText }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <div className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-slate-400" />
          </div>
        </div>
      </section>

      {/* Key Indicators Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2">
              <TrendingUp className="h-4 w-4 mr-2" />
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
            {keyIndicators.map((indicator, index) => {
              const Icon = indicator.icon;
              const TrendIcon = indicator.trend === "up" ? TrendingUp : TrendingDown;
              
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className={`h-10 w-10 ${indicator.color}`} />
                      <div className={`flex items-center gap-1 text-sm font-semibold ${indicator.color}`}>
                        <TrendIcon className="h-4 w-4" />
                        {indicator.change}
                      </div>
                    </div>
                    <div className="text-3xl font-bold mb-2">{indicator.value}</div>
                    <div className="text-sm text-muted-foreground">{indicator.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              {isArabic ? "مميزات المنصة" : "Platform Features"}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "ماذا نقدم" : "What We Offer"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic
                ? "منصة استخبارات اقتصادية متكاملة مع بيانات شاملة وتحليلات معمقة"
                : "Integrated economic intelligence platform with comprehensive data and in-depth analysis"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: isArabic ? "بيانات شاملة" : "Comprehensive Data",
                description: isArabic
                  ? "16 عامًا من البيانات الاقتصادية والمالية (2010-2025) مع أكثر من 500 نقطة بيانات موثقة"
                  : "16 years of economic and financial data (2010-2025) with 500+ documented data points",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: LineChart,
                title: isArabic ? "تصورات تفاعلية" : "Interactive Visualizations",
                description: isArabic
                  ? "رسوم بيانية وخرائط تفاعلية متقدمة لفهم الاتجاهات والأنماط الاقتصادية المعقدة"
                  : "Advanced interactive charts and maps to understand complex economic trends and patterns",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Users,
                title: isArabic ? "تحليل الجهات الفاعلة" : "Stakeholder Analysis",
                description: isArabic
                  ? "ملفات تعريفية شاملة لأكثر من 46 جهة فاعلة بما في ذلك البنوك والمانحين والحكومات"
                  : "Comprehensive profiles of 46+ stakeholders including banks, donors, and governments",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: Target,
                title: isArabic ? "توصيات سياسية" : "Policy Recommendations",
                description: isArabic
                  ? "توصيات قائمة على الأدلة وقابلة للتنفيذ للمانحين وصناع السياسات"
                  : "Evidence-based, actionable recommendations for donors and policymakers",
                gradient: "from-green-500 to-teal-500"
              },
              {
                icon: BookOpen,
                title: isArabic ? "مكتبة الأبحاث" : "Research Library",
                description: isArabic
                  ? "أكثر من 150 تقرير ودراسة من مؤسسات موثوقة مثل البنك الدولي وصندوق النقد الدولي"
                  : "150+ reports and studies from trusted institutions like World Bank and IMF",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: Globe,
                title: isArabic ? "تغطية شاملة" : "Comprehensive Coverage",
                description: isArabic
                  ? "تحليل متعمق لجميع جوانب الاقتصاد اليمني من 2010 إلى 2025"
                  : "In-depth analysis of all aspects of Yemen's economy from 2010 to 2025",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800">
                  <CardContent className="p-8">
                    <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: isArabic ? "المانحون والمنظمات الدولية" : "Donors & International Organizations",
                description: isArabic
                  ? "تتبع تدفقات المساعدات، تقييم الأثر، تحديد الفجوات التمويلية"
                  : "Track aid flows, assess impact, identify funding gaps",
                link: "/executive-dashboard"
              },
              {
                icon: DollarSign,
                title: isArabic ? "البنوك المركزية والمؤسسات المالية" : "Central Banks & Financial Institutions",
                description: isArabic
                  ? "مراقبة أسعار الصرف، تحليل السيولة، تقييم المخاطر"
                  : "Monitor exchange rates, analyze liquidity, assess risks",
                link: "/cby-dashboard"
              },
              {
                icon: BookOpen,
                title: isArabic ? "الباحثون والأكاديميون" : "Researchers & Academics",
                description: isArabic
                  ? "الوصول إلى البيانات، إجراء التحليلات، نشر الأبحاث"
                  : "Access data, conduct analysis, publish research",
                link: "/literature"
              },
              {
                icon: Zap,
                title: isArabic ? "صناع السياسات والممارسون" : "Policymakers & Practitioners",
                description: isArabic
                  ? "اتخاذ قرارات مستنيرة، تصميم برامج، تقييم السياسات"
                  : "Make informed decisions, design programs, evaluate policies",
                link: "/policy"
              },
              {
                icon: Users,
                title: isArabic ? "المواطنون" : "Citizens",
                description: isArabic
                  ? "فهم الوضع الاقتصادي، متابعة المساعدات، محاسبة المسؤولين"
                  : "Understand economic situation, track aid, hold decision-makers accountable",
                link: "/about"
              },
              {
                icon: Globe,
                title: isArabic ? "المجتمع الدولي" : "International Community",
                description: isArabic
                  ? "فهم الوضع الاقتصادي في اليمن واتخاذ قرارات مستنيرة"
                  : "Understand Yemen's economic situation and make informed decisions",
                link: "/compass"
              }
            ].map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Link key={index} href={useCase.link}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                          <p className="text-sm text-muted-foreground">{useCase.description}</p>
                        </div>
                        <ArrowRight className={`h-5 w-5 text-blue-600 flex-shrink-0 group-hover:translate-x-1 transition-transform ${isArabic ? 'rotate-180' : ''}`} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-teal-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/[0.2]" />
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
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-10 py-7 text-lg rounded-xl font-bold shadow-2xl hover:scale-105 transition-all">
                <LineChart className={`h-5 w-5 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                {isArabic ? "لوحة البيانات" : "Data Dashboard"}
              </Button>
            </Link>
            <Link href="/sitemap">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg rounded-xl font-bold">
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
