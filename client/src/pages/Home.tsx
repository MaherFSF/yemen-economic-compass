import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  BarChart2,
  Bell,
  BookOpen,
  Building2,
  ChevronRight,
  Clock,
  DollarSign,
  FileText,
  Globe2,
  Layers,
  LineChart,
  MapPin,
  Newspaper,
  PieChart,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Users2,
  Wallet,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { getLatestFuelPrice, getFuelComparison } from "@/data/feeds/fuel_prices";
import UserFeedback from "@/components/UserFeedback";

// ============================================
// REVOLUTIONARY NEW DESIGN - YEMEN ECONOMIC OBSERVATORY
// Completely unique design system
// ============================================

export default function Home() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [mounted, setMounted] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Get fuel prices
  const adenFuel = getLatestFuelPrice('aden');
  const sanaaFuel = getLatestFuelPrice('sanaa');
  const fuelComparison = getFuelComparison();

  // Live metrics data
  const liveMetrics = [
    { 
      label: isArabic ? 'سعر الصرف - عدن' : 'Exchange Rate - Aden',
      value: '2,450',
      unit: 'YER/USD',
      change: '+12.3%',
      trend: 'up',
      color: 'from-red-500 to-orange-500'
    },
    { 
      label: isArabic ? 'سعر الصرف - صنعاء' : 'Exchange Rate - Sana\'a',
      value: '560',
      unit: 'YER/USD',
      change: '+2.1%',
      trend: 'up',
      color: 'from-emerald-500 to-teal-500'
    },
    { 
      label: isArabic ? 'انعدام الأمن الغذائي' : 'Food Insecurity',
      value: '17.4M',
      unit: isArabic ? 'شخص' : 'people',
      change: '+8.2%',
      trend: 'up',
      color: 'from-amber-500 to-yellow-500'
    },
    { 
      label: isArabic ? 'المساعدات الإنسانية' : 'Humanitarian Aid',
      value: '$2.4B',
      unit: '2024',
      change: '-15%',
      trend: 'down',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      label: isArabic ? 'البنزين - عدن' : 'Petrol - Aden',
      value: adenFuel.petrol.toLocaleString(),
      unit: isArabic ? 'ريال/لتر' : 'YER/L',
      change: `+${fuelComparison.petrol.gap}%`,
      trend: 'up',
      color: 'from-orange-500 to-red-500'
    },
    { 
      label: isArabic ? 'الديزل - عدن' : 'Diesel - Aden',
      value: adenFuel.diesel.toLocaleString(),
      unit: isArabic ? 'ريال/لتر' : 'YER/L',
      change: `+${fuelComparison.diesel.gap}%`,
      trend: 'up',
      color: 'from-yellow-500 to-orange-500'
    },
  ];

  // Quick access sections
  const quickAccess = [
    {
      icon: LineChart,
      title: isArabic ? 'لوحة التحكم' : 'Dashboard',
      desc: isArabic ? 'مؤشرات اقتصادية حية' : 'Live economic indicators',
      href: '/compass',
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      hoverColor: 'hover:bg-emerald-500/20'
    },
    {
      icon: Clock,
      title: isArabic ? 'الجدول الزمني' : 'Timeline',
      desc: isArabic ? '318 حدث (2010-2025)' : '318 events (2010-2025)',
      href: '/timeline',
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      hoverColor: 'hover:bg-blue-500/20'
    },
    {
      icon: Building2,
      title: isArabic ? 'البنوك' : 'Banks',
      desc: isArabic ? '15 بنك تجاري وإسلامي' : '15 commercial & Islamic banks',
      href: '/banking',
      color: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      hoverColor: 'hover:bg-amber-500/20'
    },
    {
      icon: BookOpen,
      title: isArabic ? 'الأبحاث' : 'Research',
      desc: isArabic ? '4,416 منشور' : '4,416 publications',
      href: '/research',
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      hoverColor: 'hover:bg-purple-500/20'
    },
    {
      icon: Users2,
      title: isArabic ? 'أصحاب المصلحة' : 'Stakeholders',
      desc: isArabic ? '46 منظمة دولية' : '46 international orgs',
      href: '/stakeholders',
      color: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      hoverColor: 'hover:bg-rose-500/20'
    },
    {
      icon: Target,
      title: isArabic ? 'المحاكي' : 'Simulator',
      desc: isArabic ? 'سيناريوهات ماذا لو' : 'What-if scenarios',
      href: '/what-if',
      color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      hoverColor: 'hover:bg-cyan-500/20'
    },
  ];

  // Key insights
  const insights = [
    {
      icon: TrendingDown,
      stat: '58%',
      label: isArabic ? 'انكماش الناتج المحلي منذ 2014' : 'GDP contraction since 2014',
      severity: 'critical'
    },
    {
      icon: DollarSign,
      stat: '338%',
      label: isArabic ? 'فجوة سعر الصرف بين المنطقتين' : 'Exchange rate gap between zones',
      severity: 'high'
    },
    {
      icon: AlertTriangle,
      stat: '80%',
      label: isArabic ? 'السكان تحت خط الفقر' : 'Population below poverty line',
      severity: 'critical'
    },
    {
      icon: Shield,
      stat: '21.6M',
      label: isArabic ? 'يحتاجون مساعدات إنسانية' : 'Need humanitarian assistance',
      severity: 'high'
    },
  ];

  return (
    <div className={`min-h-screen bg-[#0a0f1a] text-white ${isArabic ? 'rtl' : 'ltr'}`}>
      {/* Unique geometric background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section - Completely New Layout */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column - Main Content */}
              <div className={`lg:col-span-7 space-y-8 ${mounted ? 'animate-fadeIn' : 'opacity-0'}`}>
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-emerald-400 text-sm font-medium">
                    {isArabic ? 'بيانات محدثة • ديسمبر 2025' : 'Live Data • December 2025'}
                  </span>
                </div>

                {/* Main Headline */}
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                    <span className="text-white/90">
                      {isArabic ? 'مرصد' : 'Yemen'}
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                      {isArabic ? 'الاقتصاد اليمني' : 'Economic'}
                    </span>
                    <br />
                    <span className="text-white/90">
                      {isArabic ? 'الشامل' : 'Observatory'}
                    </span>
                  </h1>
                  
                  <p className="text-xl text-white/60 max-w-xl leading-relaxed">
                    {isArabic 
                      ? 'منصة الذكاء الاقتصادي الأكثر شمولاً لليمن. تتبع 16 عاماً من البيانات، 318 حدثاً، و46 منظمة دولية.'
                      : 'The most comprehensive economic intelligence platform for Yemen. Track 16 years of data, 318 events, and 46 international organizations.'}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link href="/compass">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-emerald-500/25 transition-all hover:shadow-xl hover:shadow-emerald-500/30"
                    >
                      {isArabic ? 'استكشف البيانات' : 'Explore Data'}
                      <ChevronRight className={`w-5 h-5 ${isArabic ? 'mr-2 rotate-180' : 'ml-2'}`} />
                    </Button>
                  </Link>
                  <Link href="/timeline">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-white/20 hover:bg-white/5 text-white font-semibold px-8 py-6 text-lg rounded-xl"
                    >
                      {isArabic ? 'الجدول الزمني' : 'View Timeline'}
                    </Button>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-4 gap-4 pt-8 border-t border-white/10">
                  {[
                    { value: '16', label: isArabic ? 'سنة' : 'Years' },
                    { value: '318', label: isArabic ? 'حدث' : 'Events' },
                    { value: '4.4K', label: isArabic ? 'منشور' : 'Pubs' },
                    { value: '46', label: isArabic ? 'منظمة' : 'Orgs' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Live Metrics Dashboard */}
              <div className={`lg:col-span-5 ${mounted ? 'animate-slideIn' : 'opacity-0'}`}>
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-transparent to-amber-500/20 rounded-3xl blur-2xl" />
                  
                  {/* Dashboard Card */}
                  <div className="relative bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-500/10 rounded-lg">
                          <Activity className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">
                            {isArabic ? 'المؤشرات الحية' : 'Live Indicators'}
                          </h3>
                          <p className="text-xs text-white/50">
                            {isArabic ? 'تحديث فوري' : 'Real-time updates'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-emerald-400">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        {isArabic ? 'مباشر' : 'LIVE'}
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {liveMetrics.map((metric, i) => (
                        <div 
                          key={i}
                          className={`p-4 rounded-xl bg-white/5 border transition-all duration-500 ${
                            activeMetric === i 
                              ? 'border-white/20 scale-[1.02] shadow-lg' 
                              : 'border-transparent'
                          }`}
                        >
                          <div className="text-xs text-white/50 mb-2">{metric.label}</div>
                          <div className="flex items-baseline gap-2">
                            <span className={`text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                              {metric.value}
                            </span>
                            <span className="text-xs text-white/40">{metric.unit}</span>
                          </div>
                          <div className={`flex items-center gap-1 mt-2 text-xs ${
                            metric.trend === 'up' ? 'text-red-400' : 'text-emerald-400'
                          }`}>
                            {metric.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {metric.change}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Mini Chart Placeholder */}
                    <div className="h-24 bg-gradient-to-r from-emerald-500/10 via-transparent to-amber-500/10 rounded-lg flex items-end justify-between px-4 pb-2">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                        <div 
                          key={i} 
                          className="w-2 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t opacity-60"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>

                    {/* Footer Link */}
                    <Link href="/compass">
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group">
                        <span className="text-sm text-white/70">
                          {isArabic ? 'عرض جميع المؤشرات' : 'View all indicators'}
                        </span>
                        <ArrowUpRight className={`w-4 h-4 text-white/50 group-hover:text-emerald-400 transition-colors ${isArabic ? 'rotate-[270deg]' : ''}`} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Insights Section */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {isArabic ? 'أبرز المؤشرات الاقتصادية' : 'Key Economic Insights'}
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                {isArabic 
                  ? 'نظرة سريعة على الوضع الاقتصادي الحالي في اليمن'
                  : 'A quick overview of Yemen\'s current economic situation'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {insights.map((insight, i) => (
                <div 
                  key={i}
                  className={`relative p-6 rounded-2xl border transition-all hover:scale-[1.02] ${
                    insight.severity === 'critical' 
                      ? 'bg-red-500/5 border-red-500/20 hover:border-red-500/40' 
                      : 'bg-amber-500/5 border-amber-500/20 hover:border-amber-500/40'
                  }`}
                >
                  <insight.icon className={`w-8 h-8 mb-4 ${
                    insight.severity === 'critical' ? 'text-red-400' : 'text-amber-400'
                  }`} />
                  <div className={`text-4xl font-black mb-2 ${
                    insight.severity === 'critical' ? 'text-red-400' : 'text-amber-400'
                  }`}>
                    {insight.stat}
                  </div>
                  <div className="text-sm text-white/60">{insight.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {isArabic ? 'استكشف المنصة' : 'Explore the Platform'}
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                {isArabic 
                  ? 'أدوات تحليلية متقدمة لفهم المشهد الاقتصادي اليمني'
                  : 'Advanced analytical tools to understand Yemen\'s economic landscape'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickAccess.map((item, i) => (
                <Link key={i} href={item.href}>
                  <div className={`group p-6 rounded-2xl border ${item.color} ${item.hoverColor} transition-all cursor-pointer hover:scale-[1.02]`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${item.color}`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <ArrowUpRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ${isArabic ? 'rotate-[270deg]' : ''}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Alert System Promo */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/10 via-[#111827] to-amber-500/10 border border-white/10 p-8 md:p-12">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
              
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                    <Bell className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400 text-sm font-medium">
                      {isArabic ? 'نظام التنبيهات' : 'Alert System'}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {isArabic ? 'ابق على اطلاع بالتطورات الاقتصادية' : 'Stay Updated on Economic Developments'}
                  </h2>
                  
                  <p className="text-white/60">
                    {isArabic 
                      ? 'احصل على تنبيهات فورية عند حدوث تغييرات في أسعار الصرف أو صدور قرارات اقتصادية جديدة'
                      : 'Get instant alerts when exchange rates change or new economic decisions are announced'}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <Zap className="w-4 h-4 text-emerald-400" />
                      {isArabic ? 'تنبيهات فورية' : 'Instant alerts'}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <Globe2 className="w-4 h-4 text-blue-400" />
                      {isArabic ? 'تغطية شاملة' : 'Full coverage'}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      {isArabic ? 'تحليل ذكي' : 'Smart analysis'}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-2xl blur-xl opacity-30" />
                    <div className="relative bg-[#1a2332] border border-white/10 rounded-2xl p-6 space-y-4 w-full max-w-sm">
                      {/* Sample alerts */}
                      {[
                        { icon: DollarSign, text: isArabic ? 'تغير سعر الصرف في عدن' : 'Aden exchange rate changed', time: '2m', color: 'text-red-400' },
                        { icon: FileText, text: isArabic ? 'قرار جديد من البنك المركزي' : 'New CBY decision', time: '15m', color: 'text-blue-400' },
                        { icon: Newspaper, text: isArabic ? 'تقرير البنك الدولي الجديد' : 'New World Bank report', time: '1h', color: 'text-emerald-400' },
                      ].map((alert, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                          <alert.icon className={`w-5 h-5 ${alert.color}`} />
                          <div className="flex-1">
                            <div className="text-sm text-white">{alert.text}</div>
                          </div>
                          <div className="text-xs text-white/40">{alert.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isArabic ? 'ابدأ استكشاف البيانات الاقتصادية' : 'Start Exploring Economic Data'}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mb-8">
              {isArabic 
                ? 'انضم إلى الباحثين وصانعي السياسات الذين يستخدمون المرصد الاقتصادي اليمني'
                : 'Join researchers and policymakers using the Yemen Economic Observatory'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compass">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-8 py-6 text-lg rounded-xl"
                >
                  {isArabic ? 'استكشف الآن' : 'Explore Now'}
                  <ChevronRight className={`w-5 h-5 ${isArabic ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </Link>
              <Link href="/sitemap">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/20 hover:bg-white/5 text-white font-semibold px-8 py-6 text-lg rounded-xl"
                >
                  {isArabic ? 'خريطة الموقع' : 'Site Map'}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* User Feedback Button */}
      <UserFeedback variant="button" currentPage="/" />

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(${isArabic ? '-40px' : '40px'}); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.8s ease-out 0.3s forwards;
        }
      `}</style>
    </div>
  );
}
