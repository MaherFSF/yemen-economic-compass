import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingDown, TrendingUp, Users, DollarSign, Building2, Globe2,
  Database, Network, Shield, BarChart3, FileText, Search,
  ArrowRight, ChevronDown, Sparkles, Target, Zap, Eye
} from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

/**
 * REVOLUTIONARY LANDING PAGE - WORLD-CLASS DESIGN
 * 
 * Design Philosophy:
 * - Authentic Yemen photos (no AI-generated images)
 * - Unique asymmetric layout (not standard grid)
 * - Yemen flag colors throughout (red #CE1126, green #007A3D, black, white)
 * - Dynamic, interactive, memorable experience
 * - Professional think tank standards (World Bank/IMF level)
 */

export default function Home() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* HERO SECTION - SPLIT SCREEN WITH AUTHENTIC PHOTO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Yemen Flag Stripe */}
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          <div className="flex-1 bg-[#CE1126]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-black" />
        </div>

        {/* Background Image - Right Side */}
        <div 
          className="absolute inset-0 md:left-1/2"
          style={{
            backgroundImage: 'url(/images/yemen/sanaa-cityscape.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 md:from-white/98 md:via-white/80 to-transparent" />
        </div>

        {/* Content - Left Side */}
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            {/* CauseWay Logo */}
            <div className="mb-8">
              <img 
                src="/images/causeway-logo-circular.png" 
                alt="CauseWay Financial & Banking"
                className="h-24 w-24 object-contain drop-shadow-lg"
              />
            </div>

            {/* Main Title - Bilingual */}
            <div className="space-y-4 mb-8">
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="block text-[#CE1126]" dir="rtl">
                  مرصد كوزواي
                </span>
                <span className="block text-[#007A3D]" dir="rtl">
                  المالي والاقتصادي
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-black" dir="rtl">
                للمساءلة والشفافية
              </p>
              <p className="text-lg text-gray-700 max-w-2xl" dir="rtl">
                منصة استخبارات مالية شاملة تتتبع النظام المصرفي المزدوج، العقوبات الدولية، 
                المؤشرات الاقتصادية، وتدفقات المساعدات في اليمن (2010-2025)
              </p>
            </div>

            {/* Key Stats - Horizontal Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="border-t-4 border-t-[#CE1126] bg-white/90 backdrop-blur">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-black text-[#CE1126]">16</div>
                  <div className="text-sm text-gray-600" dir="rtl">سنة من البيانات</div>
                  <div className="text-xs text-gray-500">2010-2025</div>
                </CardContent>
              </Card>
              <Card className="border-t-4 border-t-[#007A3D] bg-white/90 backdrop-blur">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-black text-[#007A3D]">318</div>
                  <div className="text-sm text-gray-600" dir="rtl">حدث موثق</div>
                  <div className="text-xs text-gray-500">مع مصادر</div>
                </CardContent>
              </Card>
              <Card className="border-t-4 border-t-[#CE1126] bg-white/90 backdrop-blur">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-black text-[#CE1126]">46</div>
                  <div className="text-sm text-gray-600" dir="rtl">جهة فاعلة</div>
                  <div className="text-xs text-gray-500">محلية ودولية</div>
                </CardContent>
              </Card>
              <Card className="border-t-4 border-t-[#007A3D] bg-white/90 backdrop-blur">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-black text-[#007A3D]">1,700+</div>
                  <div className="text-sm text-gray-600" dir="rtl">نقطة بيانات</div>
                  <div className="text-xs text-gray-500">مؤشرات اقتصادية</div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#CE1126] hover:bg-[#CE1126]/90 text-white">
                <Link href="/timeline-explorer">
                  <span dir="rtl">استكشف البيانات</span>
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#007A3D] text-[#007A3D] hover:bg-[#007A3D] hover:text-white">
                <Link href="/dashboards-hub">
                  <BarChart3 className="ml-2 h-5 w-5" />
                  <span dir="rtl">لوحات التحكم</span>
                </Link>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-12 flex justify-center md:justify-start">
              <div className="animate-bounce">
                <ChevronDown className="h-8 w-8 text-[#CE1126]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRISIS INDICATORS - ASYMMETRIC LAYOUT */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#CE1126]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#007A3D]/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-[#CE1126] text-white mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              <span dir="rtl">مؤشرات حية 2025</span>
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-[#CE1126] mb-4" dir="rtl">
              ⚠️ الأزمة الاقتصادية والإنسانية ⚠️
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" dir="rtl">
              بيانات حية من 2025 تكشف عمق الأزمة في اليمن
            </p>
          </div>

          {/* Asymmetric Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Large Card - Spans 2 columns */}
            <Card className="md:col-span-2 border-l-8 border-l-[#CE1126] bg-white shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-[#CE1126] rounded-lg">
                        <TrendingDown className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-5xl font-black text-[#007A3D]">58%</h3>
                        <p className="text-sm text-gray-500">من خط الأساس 2014</p>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-black mb-2" dir="rtl">
                      الناتج المحلي الإجمالي
                    </h4>
                    <p className="text-gray-600" dir="rtl">
                      انكماش اقتصادي حاد منذ بداية الحرب في 2015. فقد الاقتصاد اليمني 42% من قيمته.
                    </p>
                  </div>
                  <img 
                    src="/images/yemen/aden-port-containers.jpg" 
                    alt="Aden Port"
                    className="hidden md:block w-48 h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="text-[#CE1126] border-[#CE1126]">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -28% في 2015
                  </Badge>
                  <Badge variant="outline" className="text-[#CE1126] border-[#CE1126]">
                    -9.4% في 2016
                  </Badge>
                  <Badge variant="outline" className="text-gray-600">
                    المصدر: البنك الدولي، صندوق النقد
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Small Card */}
            <Card className="border-l-8 border-l-[#007A3D] bg-white shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <div className="p-3 bg-[#CE1126] rounded-lg w-fit mb-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-4xl font-black text-[#007A3D] mb-2">195%</h3>
                <h4 className="text-lg font-bold text-black mb-2" dir="rtl">
                  فجوة سعر الصرف
                </h4>
                <p className="text-sm text-gray-600 mb-4" dir="rtl">
                  1,650 ريال/دولار (عدن) مقابل 560 (صنعاء)
                </p>
                <p className="text-xs text-gray-500" dir="rtl">
                  انقسام البنك المركزي خلق نظامين ماليين متوازيين
                </p>
              </CardContent>
            </Card>

            {/* Small Card */}
            <Card className="border-l-8 border-l-[#CE1126] bg-white shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <div className="p-3 bg-[#007A3D] rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-4xl font-black text-[#CE1126] mb-2">17M</h3>
                <h4 className="text-lg font-bold text-black mb-2" dir="rtl">
                  يعانون من انعدام الأمن الغذائي
                </h4>
                <p className="text-sm text-gray-600 mb-4" dir="rtl">
                  57% من السكان في أزمة غذائية
                </p>
                <p className="text-xs text-gray-500" dir="rtl">
                  تضاعف العدد منذ 2010 (7.5 مليون)
                </p>
              </CardContent>
            </Card>

            {/* Large Card - Spans 2 columns */}
            <Card className="md:col-span-2 border-l-8 border-l-[#007A3D] bg-white shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-[#007A3D] rounded-lg">
                        <Globe2 className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-5xl font-black text-[#CE1126]">$2.4B</h3>
                        <p className="text-sm text-gray-500">المساعدات الإنسانية 2024</p>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-black mb-2" dir="rtl">
                      فجوة التمويل الإنساني
                    </h4>
                    <p className="text-gray-600" dir="rtl">
                      تمويل 19% فقط من الاحتياجات. الفجوة المستمرة تفاقم الأزمة الإنسانية.
                    </p>
                  </div>
                  <img 
                    src="/images/yemen/yemen-people-market.jpg" 
                    alt="Yemen Humanitarian Crisis"
                    className="hidden md:block w-48 h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="text-[#007A3D] border-[#007A3D]">
                    <Globe2 className="h-3 w-3 mr-1" />
                    الأمم المتحدة
                  </Badge>
                  <Badge variant="outline" className="text-[#007A3D] border-[#007A3D]">
                    البنك الدولي
                  </Badge>
                  <Badge variant="outline" className="text-[#007A3D] border-[#007A3D]">
                    السعودية: $7.16B
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PLATFORM CAPABILITIES - UNIQUE LAYOUT */}
      <section className="py-20 bg-white relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-[#007A3D]" dir="rtl">قدرات المنصة</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" dir="rtl">
              أدوات متقدمة للاستخبارات المالية، التحليل الاقتصادي، وتتبع أصحاب المصلحة
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-6 gap-6">
            {/* Large Feature - 3 columns */}
            <Link href="/banks-database" className="md:col-span-3 group">
              <Card className="h-full border-t-4 border-t-[#CE1126] hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="p-4 bg-gradient-to-br from-[#CE1126] to-[#007A3D] rounded-xl w-fit mb-4">
                        <Database className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#CE1126] mb-2" dir="rtl">
                        قاعدة بيانات شاملة
                      </h3>
                      <p className="text-gray-600 mb-4" dir="rtl">
                        318 حدثًا موثقًا، +1,700 مؤشر اقتصادي، 46 جهة فاعلة مع مصادر موثوقة
                      </p>
                      <div className="flex items-center text-[#007A3D] group-hover:translate-x-2 transition-transform" dir="rtl">
                        <span className="font-semibold">استكشف</span>
                        <ArrowRight className="mr-2 h-5 w-5" />
                      </div>
                    </div>
                    <img 
                      src="/images/yemen/sanaa-modern-development.jpg" 
                      alt="Data"
                      className="hidden md:block w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Medium Feature - 2 columns */}
            <Link href="/comprehensive-charts" className="md:col-span-2 group">
              <Card className="h-full border-t-4 border-t-[#007A3D] hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="p-3 bg-[#007A3D] rounded-lg w-fit mb-4">
                    <Network className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#007A3D] mb-2" dir="rtl">
                    تصورات تفاعلية
                  </h3>
                  <p className="text-sm text-gray-600 mb-4" dir="rtl">
                    رسوم بيانية متقدمة للناتج المحلي، التضخم، سعر الصرف، القطاع المصرفي، تدفقات المساعدات
                  </p>
                  <div className="flex items-center text-[#CE1126] group-hover:translate-x-2 transition-transform" dir="rtl">
                    <span className="text-sm font-semibold">استكشف</span>
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Small Feature - 1 column */}
            <Link href="/sanctions" className="group">
              <Card className="h-full border-t-4 border-t-[#CE1126] hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="p-3 bg-[#CE1126] rounded-lg w-fit mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#CE1126] mb-2" dir="rtl">
                    تتبع العقوبات
                  </h3>
                  <p className="text-xs text-gray-600 mb-4" dir="rtl">
                    عقوبات OFAC يناير 2025 على 3 بنوك يمنية، تحليل الأثر، الأساس القانوني
                  </p>
                  <div className="flex items-center text-[#007A3D] group-hover:translate-x-2 transition-transform" dir="rtl">
                    <span className="text-sm font-semibold">عرض</span>
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Small Feature */}
            <Link href="/what-if-simulator" className="group">
              <Card className="h-full border-t-4 border-t-[#007A3D] hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="p-3 bg-[#007A3D] rounded-lg w-fit mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#007A3D] mb-2" dir="rtl">
                    محاكي السيناريوهات
                  </h3>
                  <p className="text-xs text-gray-600 mb-4" dir="rtl">
                    نموذج تفاعلي لتوقع تأثير أسعار النفط، التحويلات، المساعدات على الاقتصاد
                  </p>
                  <div className="flex items-center text-[#CE1126] group-hover:translate-x-2 transition-transform" dir="rtl">
                    <span className="text-sm font-semibold">جرب</span>
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Medium Feature - 2 columns */}
            <Link href="/research" className="md:col-span-2 group">
              <Card className="h-full border-t-4 border-t-[#CE1126] hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="p-3 bg-[#CE1126] rounded-lg w-fit mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#CE1126] mb-2" dir="rtl">
                    مكتبة الأبحاث
                  </h3>
                  <p className="text-sm text-gray-600 mb-4" dir="rtl">
                    4,416 منشورًا من 30 منظمة (البنك الدولي، صندوق النقد، الأمم المتحدة، المركز اليمني)
                  </p>
                  <div className="flex items-center text-[#007A3D] group-hover:translate-x-2 transition-transform" dir="rtl">
                    <span className="text-sm font-semibold">استكشف</span>
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Large Feature - 3 columns */}
            <Link href="/stakeholders" className="md:col-span-3 group">
              <Card className="h-full border-t-4 border-t-[#007A3D] hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="p-4 bg-gradient-to-br from-[#007A3D] to-[#CE1126] rounded-xl w-fit mb-4">
                        <Building2 className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#007A3D] mb-2" dir="rtl">
                        ملفات أصحاب المصلحة
                      </h3>
                      <p className="text-gray-600 mb-4" dir="rtl">
                        تحليل شامل للبنك الدولي، صندوق النقد الدولي، السعودية، الإمارات، الحوثيين، الحكومة
                      </p>
                      <div className="flex items-center text-[#CE1126] group-hover:translate-x-2 transition-transform" dir="rtl">
                        <span className="font-semibold">استكشف</span>
                        <ArrowRight className="mr-2 h-5 w-5" />
                      </div>
                    </div>
                    <img 
                      src="/images/yemen/yemen-traditional-architecture.jpg" 
                      alt="Stakeholders"
                      className="hidden md:block w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* DUAL FINANCIAL SYSTEM - VISUAL STORYTELLING */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#CE1126]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#007A3D]/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Badge className="bg-[#CE1126] text-white mb-6">
                <Eye className="h-4 w-4 mr-2" />
                <span dir="rtl">تحليل عميق</span>
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-6" dir="rtl">
                <span className="text-[#007A3D]">النظام المالي</span>{" "}
                <span className="text-[#CE1126]">المزدوج</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6" dir="rtl">
                منذ انقسام البنك المركزي اليمني في سبتمبر 2016، يعمل اليمن بنظامين مصرفيين متوازيين - 
                واحد في عدن (معترف به دوليًا) وآخر في صنعاء (تحت سيطرة الحوثيين).
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-[#CE1126] rounded-lg mt-1">
                    <TrendingDown className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1" dir="rtl">فجوة 195% في سعر الصرف</h4>
                    <p className="text-gray-400 text-sm" dir="rtl">
                      1,650 ريال/دولار (عدن) مقابل 560 (صنعاء) - أكبر فجوة في التاريخ
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-[#CE1126] rounded-lg mt-1">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1" dir="rtl">انهيار العلاقات المصرفية المراسلة</h4>
                    <p className="text-gray-400 text-sm" dir="rtl">
                      البنوك الدولية قطعت العلاقات مع البنوك اليمنية بسبب مخاطر الامتثال
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-[#CE1126] rounded-lg mt-1">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1" dir="rtl">عقوبات OFAC على 3 بنوك (يناير 2025)</h4>
                    <p className="text-gray-400 text-sm" dir="rtl">
                      وزارة الخزانة الأمريكية فرضت عقوبات على بنوك يمنية بتهمة تمويل الحوثيين
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-[#CE1126] rounded-lg mt-1">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1" dir="rtl">أزمة سيولة حادة وقيود على السحب</h4>
                    <p className="text-gray-400 text-sm" dir="rtl">
                      البنوك تحد من السحوبات النقدية، والمواطنون يعانون من نقص السيولة
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-[#007A3D] hover:bg-[#007A3D]/90">
                <Link href="/banking-sector">
                  <span dir="rtl">تحليل القطاع المصرفي</span>
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="/images/yemen/sanaa-cityscape.jpg" 
                  alt="Yemen Dual Financial System"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#CE1126]/90 backdrop-blur p-4 rounded-lg">
                      <div className="text-2xl font-black">عدن</div>
                      <div className="text-sm">1,650 ريال/دولار</div>
                      <div className="text-xs text-white/80">معترف به دوليًا</div>
                    </div>
                    <div className="bg-[#007A3D]/90 backdrop-blur p-4 rounded-lg">
                      <div className="text-2xl font-black">صنعاء</div>
                      <div className="text-sm">560 ريال/دولار</div>
                      <div className="text-xs text-white/80">سيطرة الحوثيين</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAUSEWAY BRANDING */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <img 
                src="/images/causeway-logo-official.jpeg" 
                alt="CauseWay Consulting, Services & Development Group"
                className="h-20 md:h-24 object-contain opacity-80"
              />
            </div>
            <div className="flex-1 text-center md:text-right">
              <p className="text-gray-600 text-sm md:text-base" dir="rtl">
                مبادرة من <strong>مجموعة كوزواي للاستشارات والخدمات والتنمية</strong> - 
                ملتزمون بالمساءلة العالمية والشفافية والتوقعات القائمة على الأدلة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - GRADIENT */}
      <section className="py-20 bg-gradient-to-r from-[#CE1126] via-[#007A3D] to-black text-white relative overflow-hidden">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }} />
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6" dir="rtl">
            ابدأ استكشاف البيانات
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" dir="rtl">
            الوصول إلى أكثر منصة استخبارات مالية شمولاً حول اليمن، مع 16 عامًا من البيانات الموثقة من مصادر موثوقة
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#CE1126] hover:bg-gray-100">
              <Link href="/timeline-explorer">
                <Zap className="ml-2 h-5 w-5" />
                <span dir="rtl">مستكشف الأحداث</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              <Link href="/what-if-simulator">
                <Target className="ml-2 h-5 w-5" />
                <span dir="rtl">محاكي السيناريوهات</span>
              </Link>
            </Button>
          </div>
          <div className="mt-12 text-sm text-white/80" dir="rtl">
            الشفافية • المساءلة • التوقعات القائمة على الأدلة
          </div>
        </div>
      </section>
    </div>
  );
}
