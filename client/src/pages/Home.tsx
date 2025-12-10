import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APP_LOGO } from "@/const";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowRight,
  BarChart3,
  Database,
  Globe,
  LineChart,
  Search,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Translations
  const t = {
    nav: {
      logo: isArabic ? 'البوصلة الاقتصادية' : 'Yemen Economic Compass',
      subtitle: isArabic ? 'منصة البيانات المالية' : 'Financial Data Platform',
      timeline: isArabic ? 'الجدول الزمني' : 'Timeline',
      banking: isArabic ? 'القطاع المصرفي' : 'Banking',
      research: isArabic ? 'الأبحاث' : 'Research',
      stakeholders: isArabic ? 'أصحاب المصلحة' : 'Stakeholders',
      getStarted: isArabic ? 'ابدأ الآن' : 'Get Started',
    },
    hero: {
      badge: isArabic ? 'ذكاء اقتصادي شامل' : 'Comprehensive Economic Intelligence',
      title1: isArabic ? 'تصفح المشهد' : "Navigate Yemen's",
      title2: isArabic ? 'الاقتصادي اليمني' : 'Economic Landscape',
      description: isArabic 
        ? 'المنصة الأكثر شمولاً لتحليل التحولات المالية والاقتصادية في اليمن. الوصول إلى 16 عامًا من البيانات الموثقة، 318 حدثًا زمنيًا، ورؤى من 46 منظمة من أصحاب المصلحة.'
        : 'The most comprehensive platform for analyzing financial and economic transformations in Yemen. Access 16 years of verified data, 318 timeline events, and insights from 46 stakeholder organizations.',
      explorePlatform: isArabic ? 'استكشف المنصة' : 'Explore Platform',
      viewResearch: isArabic ? 'عرض الأبحاث' : 'View Research',
      organizations: isArabic ? 'منظمة' : 'Organizations',
      dataPoints: isArabic ? 'نقطة بيانات' : 'Data Points',
      yearsCoverage: isArabic ? 'سنة تغطية' : 'Years Coverage',
    },
    dashboard: {
      title: isArabic ? 'لوحة المعلومات المباشرة' : 'Live Dashboard',
      realtime: isArabic ? 'مباشر' : 'Real-time',
      timelineEvents: isArabic ? 'أحداث زمنية' : 'Timeline Events',
      banksTracked: isArabic ? 'بنوك متتبعة' : 'Banks Tracked',
      publications: isArabic ? 'منشورات' : 'Publications',
      stakeholders: isArabic ? 'أصحاب مصلحة' : 'Stakeholders',
      exchangeRate: isArabic ? 'اتجاه سعر الصرف' : 'Exchange Rate Trend',
    },
    features: {
      title1: isArabic ? 'أدوات قوية' : 'Powerful Tools for',
      title2: isArabic ? 'للتحليل الاقتصادي' : 'Economic Analysis',
      subtitle: isArabic 
        ? 'كل ما تحتاجه لفهم المشهد الاقتصادي المعقد في اليمن في منصة متكاملة واحدة'
        : "Everything you need to understand Yemen's complex economic landscape in one integrated platform",
      timeline: {
        title: isArabic ? 'مستكشف الجدول الزمني' : 'Timeline Explorer',
        desc: isArabic ? 'تصفح 318 حدثًا رئيسيًا من 2010-2025 مع سياق تفصيلي وتحليل التأثير' : 'Navigate through 318 major events from 2010-2025 with detailed context and impact analysis',
      },
      banking: {
        title: isArabic ? 'لوحة القطاع المصرفي' : 'Banking Dashboard',
        desc: isArabic ? 'تتبع 14 بنكًا مع الحالة الفورية والبيانات المالية والرؤى التشغيلية' : 'Track 14 banks with real-time status, financial data, and operational insights',
      },
      research: {
        title: isArabic ? 'مكتبة الأبحاث' : 'Research Library',
        desc: isArabic ? 'الوصول إلى 4,416 منشورًا من 30 مؤسسة مع قدرات بحث متقدمة' : 'Access 4,416 publications from 30 institutions with advanced search capabilities',
      },
      stakeholder: {
        title: isArabic ? 'مركز أصحاب المصلحة' : 'Stakeholder Hub',
        desc: isArabic ? 'ملفات شاملة لـ 46 منظمة بما في ذلك البنك الدولي وصندوق النقد الدولي ووكالات الأمم المتحدة' : 'Comprehensive profiles of 46 organizations including World Bank, IMF, and UN agencies',
      },
      whatif: {
        title: isArabic ? 'محاكي ماذا لو' : 'What-If Simulator',
        desc: isArabic ? 'نمذجة السيناريوهات الاقتصادية والتنبؤ بالتأثيرات مع أدوات محاكاة تفاعلية' : 'Model economic scenarios and forecast impacts with interactive simulation tools',
      },
      viz: {
        title: isArabic ? 'تصورات البيانات' : 'Data Visualizations',
        desc: isArabic ? 'رسوم بيانية وخرائط تفاعلية مدعومة بمجموعات بيانات اقتصادية شاملة' : 'Interactive charts and maps powered by comprehensive economic datasets',
      },
    },
    stats: {
      title: isArabic ? 'منصة موثوقة للبيانات الاقتصادية' : 'Trusted Economic Data Platform',
      years: isArabic ? 'سنوات من البيانات' : 'Years of Data',
      events: isArabic ? 'حدث زمني' : 'Timeline Events',
      publications: isArabic ? 'منشور' : 'Publications',
      stakeholders: isArabic ? 'صاحب مصلحة' : 'Stakeholders',
    },
    cta: {
      title: isArabic ? 'هل أنت مستعد لاستكشاف البيانات الاقتصادية اليمنية؟' : "Ready to Explore Yemen's Economic Data?",
      subtitle: isArabic 
        ? 'انضم إلى الباحثين وصانعي السياسات والمحللين الذين يستخدمون البوصلة الاقتصادية اليمنية للحصول على ذكاء اقتصادي شامل'
        : 'Join researchers, policymakers, and analysts using the Yemen Economic Compass for comprehensive economic intelligence',
      start: isArabic ? 'ابدأ الاستكشاف' : 'Start Exploring',
      contact: isArabic ? 'اتصل بنا' : 'Contact Us',
    },
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#0F1A2E] via-[#1A2942] to-[#0F1A2E] text-white overflow-hidden ${isArabic ? 'rtl' : 'ltr'}`}>
      {/* Animated background pattern */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url(/hero-bg-pattern.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={APP_LOGO} alt="Logo" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="text-lg font-bold">{t.nav.logo}</span>
                <span className="text-xs text-white/60">{t.nav.subtitle}</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/timeline" className="text-sm hover:text-[#F59E0B] transition-colors">{t.nav.timeline}</Link>
              <Link href="/banking" className="text-sm hover:text-[#F59E0B] transition-colors">{t.nav.banking}</Link>
              <Link href="/research" className="text-sm hover:text-[#F59E0B] transition-colors">{t.nav.research}</Link>
              <Link href="/stakeholders" className="text-sm hover:text-[#F59E0B] transition-colors">{t.nav.stakeholders}</Link>
              <Button size="sm" className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1428]">
                {t.nav.getStarted}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-sm font-medium">
                <Zap className="inline w-4 h-4 mr-2" />
                {t.hero.badge}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                {t.hero.title1}
                <span className="block bg-gradient-to-r from-[#F59E0B] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
                  {t.hero.title2}
                </span>
              </h1>
              
              <p className="text-xl text-white/85 leading-[1.7]">
                {t.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboards-hub">
                  <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1428] text-lg px-8 py-6 group w-full sm:w-auto">
                    {t.hero.explorePlatform}
                    <ArrowRight className={`${isArabic ? 'mr-2 rotate-180' : 'ml-2'} w-5 h-5 group-hover:translate-x-1 transition-transform`} />
                  </Button>
                </Link>
                <Link href="/research">
                  <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-lg px-8 py-6 w-full sm:w-auto">
                    {t.hero.viewResearch}
                  </Button>
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="flex items-center gap-6 pt-4 flex-wrap">
                <div className="flex items-center gap-2 text-sm text-white/75">
                  <Users className="w-4 h-4 text-[#06B6D4]" />
                  <span>46 {t.hero.organizations}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/75">
                  <Database className="w-4 h-4 text-[#10B981]" />
                  <span>1,287+ {t.hero.dataPoints}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/75">
                  <BarChart3 className="w-4 h-4 text-[#F59E0B]" />
                  <span>16 {t.hero.yearsCoverage}</span>
                </div>
              </div>
            </div>

            {/* Right: Animated Dashboard Preview */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B]/20 via-[#06B6D4]/20 to-[#10B981]/20 blur-3xl" />
                
                {/* Dashboard Card */}
                <Card className="relative bg-white/5 backdrop-blur-xl border-white/10 p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{t.dashboard.title}</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                      <span className="text-sm text-white/60">{t.dashboard.realtime}</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-lg p-4">
                      <div className="text-3xl font-bold text-[#F59E0B]">
                        <AnimatedCounter end={318} />
                      </div>
                      <div className="text-sm text-white/60 mt-1">{t.dashboard.timelineEvents}</div>
                    </div>
                    <div className="bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-lg p-4">
                      <div className="text-3xl font-bold text-[#06B6D4]">
                        <AnimatedCounter end={14} />
                      </div>
                      <div className="text-sm text-white/60 mt-1">{t.dashboard.banksTracked}</div>
                    </div>
                    <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg p-4">
                      <div className="text-3xl font-bold text-[#10B981]">
                        <AnimatedCounter end={4416} />
                      </div>
                      <div className="text-sm text-white/60 mt-1">{t.dashboard.publications}</div>
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <div className="text-3xl font-bold text-purple-400">
                        <AnimatedCounter end={46} />
                      </div>
                      <div className="text-sm text-white/60 mt-1">{t.dashboard.stakeholders}</div>
                    </div>
                  </div>

                  {/* Mini Chart Visualization */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">{t.dashboard.exchangeRate}</span>
                      <span className="text-[#10B981] flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        +32.8%
                      </span>
                    </div>
                    <div className="h-24 flex items-end gap-2">
                      {[40, 55, 45, 70, 60, 85, 75, 95].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-[#F59E0B] to-[#06B6D4] rounded-t transition-all duration-500 hover:opacity-80"
                          style={{
                            height: `${height}%`,
                            animationDelay: `${i * 100}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-[#0F1E3A]/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              {t.features.title1}
              <span className="block bg-gradient-to-r from-[#F59E0B] to-[#06B6D4] bg-clip-text text-transparent">
                {t.features.title2}
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Timeline Explorer */}
            <Link href="/timeline">
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center mb-6">
                  <LineChart className="w-8 h-8 text-[#F59E0B]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.features.timeline.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {t.features.timeline.desc}
                </p>
              </Card>
            </Link>

            {/* Banking Dashboard */}
            <Link href="/banking-dashboard">
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <div className="w-14 h-14 rounded-xl bg-[#06B6D4]/20 flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-[#06B6D4]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.features.banking.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {t.features.banking.desc}
                </p>
              </Card>
            </Link>

            {/* Research Library */}
            <Link href="/research">
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <div className="w-14 h-14 rounded-xl bg-[#10B981]/20 flex items-center justify-center mb-6">
                  <Search className="w-8 h-8 text-[#10B981]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.features.research.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {t.features.research.desc}
                </p>
              </Card>
            </Link>

            {/* Stakeholder Hub */}
            <Link href="/stakeholders">
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.features.stakeholder.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {t.features.stakeholder.desc}
                </p>
              </Card>
            </Link>

            {/* What-If Simulator */}
            <Link href="/what-if-simulator">
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-[#F59E0B]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.features.whatif.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {t.features.whatif.desc}
                </p>
              </Card>
            </Link>

            {/* Data Visualizations */}
            <Link href="/advanced-viz">
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <div className="w-14 h-14 rounded-xl bg-[#06B6D4]/20 flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-[#06B6D4]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.features.viz.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {t.features.viz.desc}
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              {t.stats.title}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 text-center">
              <div className="text-5xl font-black text-[#F59E0B] mb-2">16</div>
              <div className="text-white/60">{t.stats.years}</div>
            </Card>
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 text-center">
              <div className="text-5xl font-black text-[#06B6D4] mb-2">318</div>
              <div className="text-white/60">{t.stats.events}</div>
            </Card>
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 text-center">
              <div className="text-5xl font-black text-[#10B981] mb-2">4,416</div>
              <div className="text-white/60">{t.stats.publications}</div>
            </Card>
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 text-center">
              <div className="text-5xl font-black text-purple-400 mb-2">46</div>
              <div className="text-white/60">{t.stats.stakeholders}</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <Card className="bg-gradient-to-r from-[#F59E0B]/10 via-[#06B6D4]/10 to-[#10B981]/10 backdrop-blur-xl border-white/10 p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              {t.cta.title}
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-3xl mx-auto">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboards-hub">
                <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1428] text-lg px-8 py-6 w-full sm:w-auto">
                  {t.cta.start}
                </Button>
              </Link>
              <Link href="/about-platform">
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-lg px-8 py-6 w-full sm:w-auto">
                  {t.cta.contact}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-20" />
    </div>
  );
}
