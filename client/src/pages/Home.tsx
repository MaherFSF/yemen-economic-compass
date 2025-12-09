import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Database, Network, Shield, BarChart3, FileText, Globe, TrendingDown, Users, DollarSign, AlertTriangle, Star, Building2, Scale } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Home() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: "16", label: isArabic ? "سنة من البيانات" : "Years of Data", sublabel: "2010-2025", icon: BarChart3 },
    { value: "318", label: isArabic ? "حدث موثق" : "Events Documented", sublabel: isArabic ? "مع مصادر" : "With Sources", icon: FileText },
    { value: "46", label: isArabic ? "جهة فاعلة" : "Stakeholders", sublabel: isArabic ? "محلية ودولية" : "Local & International", icon: Users },
    { value: "1,700+", label: isArabic ? "نقطة بيانات" : "Data Points", sublabel: isArabic ? "مؤشرات اقتصادية" : "Economic Indicators", icon: Database },
  ];

  const keyIndicators = [
    {
      icon: TrendingDown,
      value: "58%",
      label: isArabic ? "الناتج المحلي الإجمالي من خط الأساس 2014" : "GDP from 2014 Baseline",
      trend: "critical",
      description: isArabic ? "انكماش اقتصادي حاد منذ بداية الحرب" : "Severe economic contraction since war began"
    },
    {
      icon: DollarSign,
      value: "195%",
      label: isArabic ? "فجوة سعر الصرف (عدن-صنعاء)" : "Exchange Rate Gap (Aden-Sana'a)",
      trend: "critical",
      description: isArabic ? "1,650 ريال/دولار (عدن) مقابل 560 (صنعاء)" : "1,650 YER/USD (Aden) vs 560 (Sana'a)"
    },
    {
      icon: Users,
      value: "17M",
      label: isArabic ? "يعانون من انعدام الأمن الغذائي" : "Food Insecure",
      trend: "critical",
      description: isArabic ? "57% من السكان في أزمة غذائية" : "57% of population in food crisis"
    },
    {
      icon: AlertTriangle,
      value: "$2.4B",
      label: isArabic ? "المساعدات الإنسانية (2024)" : "Humanitarian Aid (2024)",
      trend: "warning",
      description: isArabic ? "تمويل 19% فقط من الاحتياجات" : "Only 19% of needs funded"
    },
  ];

  const features = [
    {
      icon: Database,
      title: isArabic ? "قاعدة بيانات شاملة" : "Comprehensive Database",
      description: isArabic ? "318 حدثًا موثقًا، 1,700+ مؤشر اقتصادي، 46 جهة فاعلة مع مصادر موثوقة" : "318 documented events, 1,700+ economic indicators, 46 stakeholders with credible sources",
      link: "/timeline-explorer"
    },
    {
      icon: Network,
      title: isArabic ? "تصورات تفاعلية" : "Interactive Visualizations",
      description: isArabic ? "رسوم بيانية متقدمة للناتج المحلي، التضخم، سعر الصرف، القطاع المصرفي، تدفقات المساعدات" : "Advanced charts for GDP, inflation, exchange rates, banking sector, aid flows",
      link: "/dashboards-hub"
    },
    {
      icon: Shield,
      title: isArabic ? "تتبع العقوبات" : "Sanctions Tracking",
      description: isArabic ? "عقوبات OFAC يناير 2025 على 3 بنوك يمنية، تحليل الأثر، الأساس القانوني" : "OFAC Jan 2025 sanctions on 3 Yemeni banks, impact analysis, legal basis",
      link: "/sanctions"
    },
    {
      icon: BarChart3,
      title: isArabic ? "محاكي السيناريوهات" : "What-If Simulator",
      description: isArabic ? "نموذج تفاعلي لتوقع تأثير أسعار النفط، التحويلات، المساعدات على الاقتصاد" : "Interactive model to project impact of oil prices, remittances, aid on economy",
      link: "/what-if-simulator"
    },
    {
      icon: FileText,
      title: isArabic ? "مكتبة الأبحاث" : "Research Library",
      description: isArabic ? "4,416 منشورًا من 30 منظمة (البنك الدولي، صندوق النقد، الأمم المتحدة، المركز اليمني)" : "4,416 publications from 30 organizations (World Bank, IMF, UN agencies, Sana'a Center)",
      link: "/research-library"
    },
    {
      icon: Globe,
      title: isArabic ? "ملفات أصحاب المصلحة" : "Stakeholder Profiles",
      description: isArabic ? "تحليل شامل للبنك الدولي، صندوق النقد، السعودية، الإمارات، الحوثيين، الحكومة" : "Comprehensive analysis of World Bank, IMF, Saudi Arabia, UAE, Houthis, Government",
      link: "/stakeholders/world-bank"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Yemen Flag Inspired */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
        {/* Yemen Flag Accent Stripe */}
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          <div className="flex-1 bg-[#CE1126]"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-black"></div>
        </div>

        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(30deg, #CE1126 12%, transparent 12.5%, transparent 87%, #CE1126 87.5%, #CE1126),
              linear-gradient(150deg, #CE1126 12%, transparent 12.5%, transparent 87%, #CE1126 87.5%, #CE1126),
              linear-gradient(30deg, #007A3D 12%, transparent 12.5%, transparent 87%, #007A3D 87.5%, #007A3D),
              linear-gradient(150deg, #007A3D 12%, transparent 12.5%, transparent 87%, #007A3D 87.5%, #007A3D)
            `,
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
          }}></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center px-4 py-20">
          {/* CauseWay Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/images/causeway-logo-circular.png" 
              alt="CauseWay Financial & Banking" 
              className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            />
          </div>

          {/* Main Title with Yemen Colors */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            {isArabic ? (
              <>
                <span className="block text-[#CE1126]">مرصد كوزواي</span>
                <span className="block text-[#007A3D] mt-2">المالي والاقتصادي</span>
                <span className="block text-black text-2xl md:text-4xl mt-4 font-bold">للمساءلة والشفافية</span>
              </>
            ) : (
              <>
                <span className="block text-[#CE1126]">CauseWay Yemen</span>
                <span className="block text-[#007A3D] mt-2">Economic Observatory</span>
                <span className="block text-black text-2xl md:text-4xl mt-4 font-bold">For Accountability & Transparency</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-700 leading-relaxed">
            {isArabic 
              ? "منصة استخبارات مالية شاملة تتتبع النظام المصرفي المزدوج، العقوبات الدولية، المؤشرات الاقتصادية، وتدفقات المساعدات في اليمن (2010-2025)"
              : "Comprehensive financial intelligence platform tracking Yemen's dual banking system, international sanctions, economic indicators, and aid flows (2010-2025)"
            }
          </p>

          {/* CTA Buttons with Yemen Colors */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/timeline-explorer">
              <Button size="lg" className="bg-[#CE1126] hover:bg-[#A00E1E] text-white font-bold text-lg px-8 py-6 shadow-xl">
                {isArabic ? "استكشف البيانات" : "Explore Data"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/dashboards-hub">
              <Button size="lg" variant="outline" className="border-2 border-[#007A3D] text-[#007A3D] hover:bg-[#007A3D] hover:text-white font-bold text-lg px-8 py-6 shadow-xl">
                {isArabic ? "لوحات التحكم" : "View Dashboards"}
                <BarChart3 className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Stats Grid with Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-[#CE1126]">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-[#007A3D] flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-[#CE1126] mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base font-semibold text-black">{stat.label}</div>
                  <div className="text-xs text-gray-600 mt-1">{stat.sublabel}</div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#CE1126] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#CE1126] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Key Economic Indicators Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="h-8 w-8 text-[#007A3D]" />
              <h2 className="text-3xl md:text-5xl font-black text-[#CE1126]">
                {isArabic ? "المؤشرات الاقتصادية الرئيسية" : "Key Economic Indicators"}
              </h2>
              <Star className="h-8 w-8 text-[#007A3D]" />
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {isArabic 
                ? "بيانات حية من 2025 تكشف عمق الأزمة الاقتصادية والإنسانية في اليمن"
                : "Live 2025 data revealing the depth of Yemen's economic and humanitarian crisis"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyIndicators.map((indicator, index) => {
              const Icon = indicator.icon;
              
              return (
                <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-300 border-l-4 border-[#CE1126] bg-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-[#CE1126]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black mb-2 text-[#007A3D]">
                    {indicator.value}
                  </div>
                  <div className="text-sm font-semibold text-black mb-2">
                    {indicator.label}
                  </div>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    {indicator.description}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Building2 className="h-8 w-8 text-[#CE1126]" />
              <h2 className="text-3xl md:text-5xl font-black text-[#007A3D]">
                {isArabic ? "قدرات المنصة" : "Platform Capabilities"}
              </h2>
              <Building2 className="h-8 w-8 text-[#CE1126]" />
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {isArabic 
                ? "أدوات متقدمة للاستخبارات المالية، التحليل الاقتصادي، وتتبع أصحاب المصلحة"
                : "Advanced tools for financial intelligence, economic analysis, and stakeholder tracking"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} href={feature.link}>
                  <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-t-4 border-[#007A3D] bg-white">
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#CE1126] to-[#007A3D] flex items-center justify-center">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#CE1126]">{feature.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{feature.description}</p>
                    <div className="flex items-center text-[#007A3D] font-semibold">
                      {isArabic ? "استكشف" : "Explore"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dual Financial System Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <Scale className="h-8 w-8 text-[#CE1126]" />
                <h2 className="text-3xl md:text-5xl font-black text-[#007A3D]">
                  {isArabic ? "النظام المالي المزدوج" : "The Dual Financial System"}
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {isArabic 
                  ? "منذ انقسام البنك المركزي اليمني في سبتمبر 2016، يعمل اليمن بنظامين مصرفيين متوازيين - واحد في عدن (معترف به دوليًا) وآخر في صنعاء (تحت سيطرة الحوثيين). هذا الانقسام خلق:"
                  : "Since the Central Bank of Yemen split in September 2016, Yemen operates with two parallel banking systems - one in Aden (internationally recognized) and one in Sana'a (Houthi-controlled). This fragmentation has created:"
                }
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#CE1126] rounded-full mt-2 mr-3"></div>
                  <span>{isArabic ? "فجوة 195% في سعر الصرف بين المنطقتين" : "195% exchange rate gap between the two regions"}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#CE1126] rounded-full mt-2 mr-3"></div>
                  <span>{isArabic ? "انهيار العلاقات المصرفية المراسلة الدولية" : "Collapse of international correspondent banking relationships"}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#CE1126] rounded-full mt-2 mr-3"></div>
                  <span>{isArabic ? "عقوبات OFAC على 3 بنوك يمنية (يناير 2025)" : "OFAC sanctions on 3 Yemeni banks (January 2025)"}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#CE1126] rounded-full mt-2 mr-3"></div>
                  <span>{isArabic ? "أزمة سيولة حادة وقيود على السحب النقدي" : "Severe liquidity crisis and cash withdrawal restrictions"}</span>
                </li>
              </ul>
              <Link href="/banking-sector">
                <Button className="bg-[#007A3D] hover:bg-[#005A2D] text-white font-bold">
                  {isArabic ? "تحليل القطاع المصرفي" : "Banking Sector Analysis"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#CE1126] to-[#007A3D] rounded-lg blur opacity-20"></div>
              <img 
                src="/images/yemen-context-illustration.png" 
                alt="Yemen Economic Landscape" 
                className="relative w-full rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CauseWay Official Branding Section */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <img 
            src="/images/causeway-logo-official.jpeg" 
            alt="CauseWay Consulting, Services & Development Group L.L.C." 
            className="h-16 md:h-20 mx-auto mb-8 opacity-80"
          />
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            {isArabic 
              ? "مبادرة من مجموعة كوزواي للاستشارات والخدمات والتنمية - ملتزمون بالمساءلة العالمية والشفافية والتوقعات القائمة على الأدلة"
              : "An initiative of CauseWay Consulting, Services & Development Group L.L.C. - Committed to global accountability, transparency, and evidence-based forecasting"
            }
          </p>
        </div>
      </section>

      {/* Final CTA Section with Yemen Flag Colors */}
      <section className="py-20 bg-gradient-to-br from-[#CE1126] via-[#007A3D] to-black text-white relative overflow-hidden">
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)
            `
          }}></div>
        </div>

        <div className="container text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            {isArabic ? "ابدأ استكشاف البيانات" : "Start Exploring the Data"}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            {isArabic 
              ? "الوصول إلى أكثر منصة استخبارات مالية شمولاً حول اليمن، مع 16 عامًا من البيانات الموثقة من مصادر موثوقة"
              : "Access the most comprehensive financial intelligence platform on Yemen, with 16 years of documented data from credible sources"
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/timeline-explorer">
              <Button size="lg" className="bg-white text-[#CE1126] hover:bg-gray-100 font-bold text-lg px-8 py-6">
                {isArabic ? "مستكشف الأحداث" : "Timeline Explorer"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/what-if-simulator">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 font-bold text-lg px-8 py-6">
                {isArabic ? "محاكي السيناريوهات" : "What-If Simulator"}
                <BarChart3 className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-black text-white">
        <div className="container text-center">
          <p className="text-sm opacity-75">
            {isArabic 
              ? "الشفافية • المساءلة • التوقعات القائمة على الأدلة"
              : "Transparency • Accountability • Evidence-Based Forecasting"
            }
          </p>
          <p className="text-xs opacity-50 mt-2">
            © 2025 CauseWay Foundation
          </p>
        </div>
      </section>
    </div>
  );
}
