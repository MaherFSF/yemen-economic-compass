import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingDown, TrendingUp, DollarSign, Users, BarChart3,
  Globe, Building2, BookOpen, Target, ArrowRight, LineChart,
  Database, FileText, Calendar, Zap, Award, MapPin, ChevronDown,
  AlertTriangle, HandHeart, Landmark, TrendingDownIcon
} from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { APP_LOGO } from "@/const";

export default function Home() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeInsight, setActiveInsight] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Auto-rotate insights
    const interval = setInterval(() => {
      setActiveInsight(prev => (prev + 1) % 3);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Real-time statistics (2024-2025 data)
  const liveStats = [
    {
      icon: DollarSign,
      value: "$17.35B",
      label: isArabic ? "الناتج المحلي 2025" : "GDP 2025",
      change: "-1.5%",
      trend: "down",
      color: "from-red-500 to-orange-500",
      description: isArabic ? "انخفاض مستمر منذ 2015" : "Continuous decline since 2015"
    },
    {
      icon: TrendingUp,
      value: "2,628",
      label: isArabic ? "سعر الصرف (عدن)" : "Exchange Rate (Aden)",
      change: "+28%",
      trend: "up",
      color: "from-orange-500 to-red-600",
      description: isArabic ? "ريال/دولار - تدهور قياسي" : "YER/USD - Record depreciation"
    },
    {
      icon: Users,
      value: "18.1M",
      label: isArabic ? "يعانون من انعدام الأمن الغذائي" : "Food Insecure",
      change: "+3%",
      trend: "up",
      color: "from-amber-500 to-orange-600",
      description: isArabic ? "أسوأ أزمة غذائية في العالم" : "World's worst food crisis"
    },
    {
      icon: HandHeart,
      value: "$0.73B",
      label: isArabic ? "المساعدات المستلمة 2025" : "Aid Received 2025",
      change: "-73%",
      trend: "down",
      color: "from-blue-500 to-cyan-600",
      description: isArabic ? "من $2.34B مطلوبة" : "Of $2.34B required"
    }
  ];

  // Featured insights
  const insights = [
    {
      title: isArabic ? "انقسام النظام المصرفي" : "Banking System Split",
      description: isArabic 
        ? "منذ 2016، يعمل اليمن بنظامين مصرفيين مركزيين متوازيين - واحد في عدن وآخر في صنعاء، مما يخلق أزمة عملة مزدوجة"
        : "Since 2016, Yemen operates with two parallel central banking systems - one in Aden and one in Sanaa, creating a dual currency crisis",
      icon: Building2,
      color: "from-blue-600 to-indigo-600",
      link: "/banking-system-dashboard"
    },
    {
      title: isArabic ? "فجوة التمويل الإنساني" : "Humanitarian Funding Gap",
      description: isArabic
        ? "تلقى اليمن 31% فقط من التمويل الإنساني المطلوب في 2025، مما يترك 19.5 مليون شخص في حاجة ماسة"
        : "Yemen received only 31% of required humanitarian funding in 2025, leaving 19.5 million people in dire need",
      icon: AlertTriangle,
      color: "from-orange-600 to-red-600",
      link: "/aid-flows-dashboard"
    },
    {
      title: isArabic ? "انهيار الريال اليمني" : "Yemeni Rial Collapse",
      description: isArabic
        ? "انخفض الريال اليمني في عدن من 250 في 2015 إلى 2,628 في 2025 - انخفاض بنسبة 950%"
        : "The Yemeni Rial in Aden collapsed from 250 in 2015 to 2,628 in 2025 - a 950% depreciation",
      icon: TrendingDown,
      color: "from-red-600 to-pink-600",
      link: "/currency-war"
    }
  ];

  // Recent critical events
  const recentEvents = [
    {
      date: "Sep 2025",
      title: isArabic ? "عقوبات أمريكية واسعة على الحوثيين" : "US Sanctions Against Houthis",
      impact: isArabic ? "أكبر حزمة عقوبات حتى الآن" : "Largest sanctions package to date",
      severity: "critical"
    },
    {
      date: "Mid 2025",
      title: isArabic ? "إصلاحات مالية ونقدية شاملة" : "Broad Financial Reforms",
      impact: isArabic ? "الحكومة اليمنية تطلق إصلاحات" : "GoY launches reform package",
      severity: "high"
    },
    {
      date: "Mar-May 2025",
      title: isArabic ? "توسع الضربات الأمريكية" : "Expanded US Strikes",
      impact: isArabic ? "تصعيد عسكري في البحر الأحمر" : "Military escalation in Red Sea",
      severity: "high"
    }
  ];

  // Key stakeholders
  const stakeholders = [
    { name: "World Bank", logo: "/logos/world-bank.svg", link: "/world-bank" },
    { name: "IMF", logo: "/logos/imf.svg", link: "/imf" },
    { name: "WFP", logo: "/logos/wfp.svg", link: "/wfp" },
    { name: "UNICEF", logo: "/logos/unicef.svg", link: "/unicef" },
    { name: "Saudi Arabia", logo: "/logos/saudi-arabia.svg", link: "/saudi-arabia" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      
      {/* Hero Section - Stunning & Interactive */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 70%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
              `,
              transform: `translateY(${scrollY * 0.2}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className={`container relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Platform Badge */}
          <div className="mb-8 flex justify-center">
            <Badge className="px-8 py-4 text-base font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white border-0 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
              <Globe className="h-6 w-6 mr-3 animate-pulse" />
              {isArabic ? "مرصد كوزواي المالي والاقتصادي للمساءلة والشفافية" : "CauseWay Financial & Economic Observatory for Accountability & Transparency"}
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 bg-clip-text text-transparent leading-tight">
            {isArabic ? "النظام المالي الموازي في اليمن" : "Yemen's Parallel Financial System"}
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto mb-8 font-medium">
            {isArabic
              ? "منصة تحليلية شاملة لفهم التحولات المالية والاقتصادية في اليمن (2010-2025)"
              : "Comprehensive analytical platform for understanding Yemen's financial and economic transformations (2010-2025)"}
          </p>

          {/* Platform Stats */}
          <div className="flex justify-center gap-8 mb-12 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">16</div>
              <div className="text-sm text-slate-600">{isArabic ? "سنة من البيانات" : "Years of Data"}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">500+</div>
              <div className="text-sm text-slate-600">{isArabic ? "نقطة بيانات" : "Data Points"}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">46</div>
              <div className="text-sm text-slate-600">{isArabic ? "جهة فاعلة" : "Stakeholders"}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600">150+</div>
              <div className="text-sm text-slate-600">{isArabic ? "تقرير بحثي" : "Research Reports"}</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dashboards-hub">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                <BarChart3 className={`h-6 w-6 ${isArabic ? 'ml-3' : 'mr-3'}`} />
                {isArabic ? "استكشف البيانات" : "Explore Data"}
                <ArrowRight className={`h-5 w-5 ${isArabic ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg shadow-lg">
                <BookOpen className={`h-6 w-6 ${isArabic ? 'ml-3' : 'mr-3'}`} />
                {isArabic ? "عن المنصة" : "About Platform"}
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-blue-600 opacity-50" />
          </div>
        </div>
      </section>

      {/* Live Statistics Dashboard */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              {isArabic ? "المؤشرات الحية 2025" : "Live Indicators 2025"}
            </h2>
            <p className="text-lg text-slate-600">
              {isArabic ? "أحدث البيانات الاقتصادية والإنسانية" : "Latest economic and humanitarian data"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {liveStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card key={idx} className="relative overflow-hidden border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl group">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Icon className={`h-8 w-8 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                      <Badge variant={stat.trend === "up" ? "destructive" : "secondary"} className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className={`text-3xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-slate-700 mb-2">{stat.label}</div>
                    <div className="text-xs text-slate-500">{stat.description}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Insights Carousel */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {isArabic ? "رؤى رئيسية" : "Key Insights"}
            </h2>
            <p className="text-lg text-blue-100">
              {isArabic ? "اكتشافات مهمة من تحليلنا الشامل" : "Important discoveries from our comprehensive analysis"}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {insights.map((insight, idx) => {
              const Icon = insight.icon;
              return (
                <div
                  key={idx}
                  className={`transition-all duration-500 ${
                    activeInsight === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'
                  }`}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-12">
                      <div className="flex items-start gap-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${insight.color}`}>
                          <Icon className="h-12 w-12" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-4">{insight.title}</h3>
                          <p className="text-lg text-blue-100 mb-6 leading-relaxed">{insight.description}</p>
                          <Link href={insight.link}>
                            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                              {isArabic ? "اقرأ المزيد" : "Learn More"}
                              <ArrowRight className={`h-4 w-4 ${isArabic ? 'mr-2' : 'ml-2'}`} />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {insights.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveInsight(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    activeInsight === idx ? 'w-12 bg-white' : 'w-3 bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              {isArabic ? "الأحداث الأخيرة" : "Recent Events"}
            </h2>
            <p className="text-lg text-slate-600">
              {isArabic ? "آخر التطورات الحرجة في 2025" : "Latest critical developments in 2025"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {recentEvents.map((event, idx) => (
              <Card key={idx} className={`border-l-4 ${
                event.severity === 'critical' ? 'border-l-red-600' : 'border-l-orange-500'
              } hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="text-center min-w-[80px]">
                      <div className="text-sm font-semibold text-blue-600">{event.date}</div>
                      <Badge variant={event.severity === 'critical' ? 'destructive' : 'secondary'} className="mt-2">
                        {event.severity}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                      <p className="text-slate-600">{event.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/events">
              <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                {isArabic ? "عرض جميع الأحداث" : "View All Events"}
                <ArrowRight className={`h-4 w-4 ${isArabic ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stakeholder Spotlight */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              {isArabic ? "الجهات الفاعلة الرئيسية" : "Key Stakeholders"}
            </h2>
            <p className="text-lg text-slate-600">
              {isArabic ? "المؤسسات الدولية الرئيسية العاملة في اليمن" : "Major international institutions operating in Yemen"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {stakeholders.map((stakeholder, idx) => (
              <Link key={idx} href={stakeholder.link}>
                <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <CardContent className="p-8 flex items-center justify-center">
                    <img 
                      src={stakeholder.logo} 
                      alt={stakeholder.name}
                      className="h-16 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/stakeholders">
              <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                {isArabic ? "عرض جميع الجهات الفاعلة" : "View All Stakeholders"}
                <ArrowRight className={`h-4 w-4 ${isArabic ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              {isArabic ? "الوصول السريع" : "Quick Access"}
            </h2>
            <p className="text-lg text-slate-600">
              {isArabic ? "انتقل مباشرة إلى الأدوات والتحليلات الرئيسية" : "Jump directly to key tools and analyses"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: BarChart3, title: isArabic ? "لوحات المعلومات" : "Dashboards", desc: isArabic ? "تصورات بيانات تفاعلية" : "Interactive data visualizations", link: "/dashboards-hub", color: "from-blue-600 to-cyan-600" },
              { icon: LineChart, title: isArabic ? "الرسوم البيانية" : "Charts", desc: isArabic ? "تحليلات شاملة" : "Comprehensive analytics", link: "/comprehensive-charts", color: "from-indigo-600 to-purple-600" },
              { icon: Calendar, title: isArabic ? "الخط الزمني" : "Timeline", desc: isArabic ? "الأحداث التاريخية" : "Historical events", link: "/timeline", color: "from-purple-600 to-pink-600" },
              { icon: Database, title: isArabic ? "قاعدة البيانات" : "Database", desc: isArabic ? "بيانات البنوك" : "Banking data", link: "/banks-database", color: "from-green-600 to-emerald-600" },
              { icon: FileText, title: isArabic ? "التقارير" : "Reports", desc: isArabic ? "تقارير دولية" : "International reports", link: "/reports", color: "from-orange-600 to-red-600" },
              { icon: MapPin, title: isArabic ? "خريطة الموقع" : "Sitemap", desc: isArabic ? "جميع الصفحات" : "All pages", link: "/sitemap", color: "from-slate-600 to-gray-600" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link key={idx} href={item.link}>
                  <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group border-2 hover:border-blue-300">
                    <CardContent className="p-8">
                      <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {isArabic ? "ابدأ الاستكشاف" : "Start Exploring"}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {isArabic
              ? "اكتشف التحليل الأكثر شمولاً للنظام المالي الموازي في اليمن"
              : "Discover the most comprehensive analysis of Yemen's parallel financial system"}
          </p>
          <Link href="/dashboards-hub">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-6 text-lg shadow-2xl">
              <Zap className={`h-6 w-6 ${isArabic ? 'ml-3' : 'mr-3'}`} />
              {isArabic ? "ابدأ الآن" : "Get Started"}
              <ArrowRight className={`h-5 w-5 ${isArabic ? 'mr-2' : 'ml-2'}`} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
