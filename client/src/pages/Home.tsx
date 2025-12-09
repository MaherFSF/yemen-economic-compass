import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { APP_LOGO } from "@/const";
import {
  TrendingUp,
  Building2,
  Users,
  FileText,
  Search,
  ArrowRight,
  BarChart3,
  Globe,
  Shield,
  AlertTriangle,
  DollarSign,
  Calendar,
} from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

/**
 * World-Class Landing Page for Yemen Economic Compass
 * Design principles from 20 top global platforms:
 * - Prominent search (World Bank, IMF, Statista)
 * - Live metrics in hero (UN OCHA, FRED)
 * - Card-based organization (16/20 platforms)
 * - Professional typography (Inter + Open Sans)
 * - Yemen flag colors with refinement
 * - Authentic Yemen photography
 */

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full-width with authentic Yemen background */}
      <section
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(206, 17, 38, 0.85), rgba(0, 122, 61, 0.75)), url('/images/yemen-sanaa-cityscape.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Yemen Flag Stripe */}
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          <div className="flex-1 bg-[#CE1126]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-black" />
        </div>

        <div className="container relative z-10 text-center py-20">
          {/* CauseWay Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={APP_LOGO}
              alt="CauseWay Observatory"
              className="h-32 w-32 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4 drop-shadow-lg">
            <span className="text-[#FFD700]">مرصد كوزواي</span>
            <br />
            <span className="text-white">المالي والاقتصادي</span>
          </h1>

          <p className="text-2xl md:text-3xl text-white/95 mb-8 font-medium drop-shadow-md">
            للمساءلة والشفافية
          </p>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            منصة استخبارات مالية شاملة تتتبع النظام المصرفي المزدوج، العقوبات الدولية، المؤشرات الاقتصادية،
            <br />
            وتدفقات المساعدات في اليمن (2010-2025)
          </p>

          {/* Prominent Search Bar - Pattern from World Bank, IMF, Statista */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-neutral-400" />
              <Input
                type="text"
                placeholder="ابحث عن البنوك، المؤشرات، الأحداث، أصحاب المصلحة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-16 pl-16 pr-6 text-lg bg-white/95 backdrop-blur-sm border-2 border-white/50 rounded-xl shadow-2xl focus:border-[#007A3D] focus:ring-4 focus:ring-[#007A3D]/20"
                dir="rtl"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="text-white/80 text-sm">بحث شائع:</span>
              <Link href="/timeline">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 h-8 text-sm">
                  سعر الصرف
                </Button>
              </Link>
              <Link href="/banks">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 h-8 text-sm">
                  القطاع المصرفي
                </Button>
              </Link>
              <Link href="/stakeholders/world-bank">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 h-8 text-sm">
                  البنك الدولي
                </Button>
              </Link>
            </div>
          </div>

          {/* Live 2025 Metrics - Pattern from UN OCHA, FRED */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm p-6 border-t-4 border-t-[#CE1126] hover:shadow-2xl transition-shadow">
              <div className="text-4xl font-black text-[#CE1126] mb-2">58%</div>
              <div className="text-sm text-neutral-600 font-medium">انكماش الناتج المحلي</div>
              <div className="text-xs text-neutral-500 mt-1">2010-2025</div>
            </Card>
            <Card className="bg-white/95 backdrop-blur-sm p-6 border-t-4 border-t-[#007A3D] hover:shadow-2xl transition-shadow">
              <div className="text-4xl font-black text-[#007A3D] mb-2">195%</div>
              <div className="text-sm text-neutral-600 font-medium">فجوة سعر الصرف</div>
              <div className="text-xs text-neutral-500 mt-1">عدن-صنعاء 2025</div>
            </Card>
            <Card className="bg-white/95 backdrop-blur-sm p-6 border-t-4 border-t-[#CE1126] hover:shadow-2xl transition-shadow">
              <div className="text-4xl font-black text-[#CE1126] mb-2">17M</div>
              <div className="text-sm text-neutral-600 font-medium">انعدام الأمن الغذائي</div>
              <div className="text-xs text-neutral-500 mt-1">2025</div>
            </Card>
            <Card className="bg-white/95 backdrop-blur-sm p-6 border-t-4 border-t-[#007A3D] hover:shadow-2xl transition-shadow">
              <div className="text-4xl font-black text-[#007A3D] mb-2">$2.4B</div>
              <div className="text-sm text-neutral-600 font-medium">المساعدات الإنسانية</div>
              <div className="text-xs text-neutral-500 mt-1">2024</div>
            </Card>
          </div>

          {/* Primary CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/timeline">
              <Button size="lg" className="bg-[#CE1126] hover:bg-[#A00E1F] text-white h-14 px-8 text-lg font-bold shadow-2xl">
                استكشف البيانات
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/literature">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/95 hover:bg-white text-[#007A3D] border-2 border-white h-14 px-8 text-lg font-bold shadow-2xl"
              >
                تصفح الأبحاث
                <FileText className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Statistics - Pattern from World Bank, IMF */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-[#CE1126] mb-2">16</div>
              <div className="text-neutral-600 font-medium">سنة من البيانات</div>
            </div>
            <div>
              <div className="text-5xl font-black text-[#007A3D] mb-2">318</div>
              <div className="text-neutral-600 font-medium">حدث موثق</div>
            </div>
            <div>
              <div className="text-5xl font-black text-[#CE1126] mb-2">46</div>
              <div className="text-neutral-600 font-medium">صاحب مصلحة</div>
            </div>
            <div>
              <div className="text-5xl font-black text-[#007A3D] mb-2">+1,700</div>
              <div className="text-neutral-600 font-medium">نقطة بيانات</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards - Pattern from IMF (3 entry points), Card-based (16/20 platforms) */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-neutral-900">
            نقاط الدخول الرئيسية
          </h2>
          <p className="text-center text-neutral-600 text-lg mb-12 max-w-2xl mx-auto">
            ابدأ استكشافك للنظام المالي الموازي في اليمن من خلال أحد المسارات الأربعة
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Timeline Explorer */}
            <Link href="/timeline">
              <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-t-[#CE1126] cursor-pointer group h-full">
                <div className="bg-[#CE1126]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#CE1126] transition-colors">
                  <Calendar className="h-8 w-8 text-[#CE1126] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-neutral-900">الجدول الزمني</h3>
                <p className="text-neutral-600 leading-relaxed">
                  استكشف 318 حدثًا رئيسيًا من 2010-2025: الحرب، السياسات، العقوبات، والأزمات الإنسانية
                </p>
                <div className="mt-6 flex items-center text-[#CE1126] font-semibold group-hover:translate-x-2 transition-transform">
                  <span>استكشف</span>
                  <ArrowRight className="mr-2 h-5 w-5" />
                </div>
              </Card>
            </Link>

            {/* Banking Sector */}
            <Link href="/banks">
              <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-t-[#007A3D] cursor-pointer group h-full">
                <div className="bg-[#007A3D]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#007A3D] transition-colors">
                  <Building2 className="h-8 w-8 text-[#007A3D] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-neutral-900">القطاع المصرفي</h3>
                <p className="text-neutral-600 leading-relaxed">
                  31 بنكًا تجاريًا وإسلاميًا ومتخصصًا، مع بيانات مالية سنوية وحالة العقوبات
                </p>
                <div className="mt-6 flex items-center text-[#007A3D] font-semibold group-hover:translate-x-2 transition-transform">
                  <span>استكشف</span>
                  <ArrowRight className="mr-2 h-5 w-5" />
                </div>
              </Card>
            </Link>

            {/* Stakeholders */}
            <Link href="/stakeholders">
              <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-t-[#CE1126] cursor-pointer group h-full">
                <div className="bg-[#CE1126]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#CE1126] transition-colors">
                  <Users className="h-8 w-8 text-[#CE1126] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-neutral-900">أصحاب المصلحة</h3>
                <p className="text-neutral-600 leading-relaxed">
                  46 جهة فاعلة: الحكومات، المنظمات الدولية، الجهات المانحة، والجماعات المسلحة
                </p>
                <div className="mt-6 flex items-center text-[#CE1126] font-semibold group-hover:translate-x-2 transition-transform">
                  <span>استكشف</span>
                  <ArrowRight className="mr-2 h-5 w-5" />
                </div>
              </Card>
            </Link>

            {/* Research Library */}
            <Link href="/literature">
              <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-t-[#007A3D] cursor-pointer group h-full">
                <div className="bg-[#007A3D]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#007A3D] transition-colors">
                  <FileText className="h-8 w-8 text-[#007A3D] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-neutral-900">مكتبة الأبحاث</h3>
                <p className="text-neutral-600 leading-relaxed">
                  4,416 منشورًا من البنك الدولي، صندوق النقد، مركز صنعاء، وأكثر من 50 مصدرًا
                </p>
                <div className="mt-6 flex items-center text-[#007A3D] font-semibold group-hover:translate-x-2 transition-transform">
                  <span>استكشف</span>
                  <ArrowRight className="mr-2 h-5 w-5" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Crisis Dashboard - Live 2025 Indicators */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-neutral-900">
              لوحة الأزمة 2025
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              المؤشرات الاقتصادية الحية والأحداث الحرجة التي تشكل مستقبل اليمن
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Exchange Rate Crisis */}
            <Card className="p-6 border-l-4 border-l-[#CE1126] hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-[#CE1126]/10 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-[#CE1126]" />
                </div>
                <span className="text-xs bg-[#CE1126]/10 text-[#CE1126] px-2 py-1 rounded-full font-semibold">
                  حرج
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">أزمة سعر الصرف</h3>
              <div className="text-3xl font-black text-[#CE1126] mb-2">195%</div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                فجوة سعر الصرف بين عدن (1,400 ريال/دولار) وصنعاء (530 ريال/دولار) تفاقم الانقسام الاقتصادي
              </p>
              <div className="mt-4 text-xs text-neutral-500">
                آخر تحديث: يناير 2025
              </div>
            </Card>

            {/* OFAC Sanctions */}
            <Card className="p-6 border-l-4 border-l-[#007A3D] hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-[#007A3D]/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-[#007A3D]" />
                </div>
                <span className="text-xs bg-[#007A3D]/10 text-[#007A3D] px-2 py-1 rounded-full font-semibold">
                  جديد
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">عقوبات OFAC</h3>
              <div className="text-3xl font-black text-[#007A3D] mb-2">Jan 2025</div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                تعيينات جديدة تستهدف شبكة التمويل الحوثية، مما يؤثر على البنوك والشركات اليمنية
              </p>
              <div className="mt-4 text-xs text-neutral-500">
                المصدر: وزارة الخزانة الأمريكية
              </div>
            </Card>

            {/* Humanitarian Crisis */}
            <Card className="p-6 border-l-4 border-l-[#CE1126] hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-[#CE1126]/10 p-3 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-[#CE1126]" />
                </div>
                <span className="text-xs bg-[#CE1126]/10 text-[#CE1126] px-2 py-1 rounded-full font-semibold">
                  عاجل
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">الأزمة الإنسانية</h3>
              <div className="text-3xl font-black text-[#CE1126] mb-2">17.0M</div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                يعاني 17 مليون يمني من انعدام الأمن الغذائي، مع تفاقم الوضع في 2025
              </p>
              <div className="mt-4 text-xs text-neutral-500">
                المصدر: مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية
              </div>
            </Card>

            {/* Aid Flows */}
            <Card className="p-6 border-l-4 border-l-[#007A3D] hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-[#007A3D]/10 p-3 rounded-lg">
                  <DollarSign className="h-6 w-6 text-[#007A3D]" />
                </div>
                <span className="text-xs bg-[#007A3D]/10 text-[#007A3D] px-2 py-1 rounded-full font-semibold">
                  2024
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">تدفقات المساعدات</h3>
              <div className="text-3xl font-black text-[#007A3D] mb-2">$2.4B</div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                المساعدات الإنسانية الدولية لعام 2024، مع تراجع التمويل مقارنة بالسنوات السابقة
              </p>
              <div className="mt-4 text-xs text-neutral-500">
                المصدر: FTS - OCHA
              </div>
            </Card>

            {/* Banking Sector Split */}
            <Card className="p-6 border-l-4 border-l-[#CE1126] hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-[#CE1126]/10 p-3 rounded-lg">
                  <Building2 className="h-6 w-6 text-[#CE1126]" />
                </div>
                <span className="text-xs bg-[#CE1126]/10 text-[#CE1126] px-2 py-1 rounded-full font-semibold">
                  مستمر
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">انقسام القطاع المصرفي</h3>
              <div className="text-3xl font-black text-[#CE1126] mb-2">2 CBY</div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                بنكان مركزيان متنافسان (عدن وصنعاء) يديران أنظمة مالية موازية منذ 2016
              </p>
              <div className="mt-4 text-xs text-neutral-500">
                آخر تحديث: ديسمبر 2024
              </div>
            </Card>

            {/* GDP Contraction */}
            <Card className="p-6 border-l-4 border-l-[#007A3D] hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-[#007A3D]/10 p-3 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-[#007A3D]" />
                </div>
                <span className="text-xs bg-[#007A3D]/10 text-[#007A3D] px-2 py-1 rounded-full font-semibold">
                  تاريخي
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">انكماش الناتج المحلي</h3>
              <div className="text-3xl font-black text-[#007A3D] mb-2">-58%</div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                انكماش تراكمي في الناتج المحلي الإجمالي من 2010 إلى 2025، مما يجعلها واحدة من أسوأ الأزمات الاقتصادية
              </p>
              <div className="mt-4 text-xs text-neutral-500">
                المصدر: البنك الدولي، صندوق النقد الدولي
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/timeline">
              <Button size="lg" variant="outline" className="border-2 border-[#CE1126] text-[#CE1126] hover:bg-[#CE1126] hover:text-white h-12 px-8 font-bold">
                عرض الجدول الزمني الكامل
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dual Financial System Explanation */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-neutral-900">
                النظام المالي الموازي
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                منذ سبتمبر 2016، تعمل اليمن بنظامين ماليين متنافسين:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg">
                  <div className="bg-[#CE1126] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-neutral-900">البنك المركزي اليمني - عدن</h3>
                    <p className="text-neutral-600">
                      معترف به دوليًا، يدير احتياطيات النقد الأجنبي، سعر صرف: 1,400 ريال/دولار
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg">
                  <div className="bg-[#007A3D] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-neutral-900">البنك المركزي اليمني - صنعاء</h3>
                    <p className="text-neutral-600">
                      تحت سيطرة الحوثيين، يخدم المناطق الشمالية، سعر صرف: 530 ريال/دولار
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
                <p className="text-neutral-700 leading-relaxed">
                  <strong className="text-amber-900">التأثير:</strong> هذا الانقسام يخلق أسواق صرف متعددة، يعطل التجارة،
                  يفاقم التضخم، ويعقد تسليم المساعدات الإنسانية.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/yemen-context-illustration.png"
                alt="Yemen Dual Financial System"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities - Bento Grid Pattern */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              قدرات المنصة
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              أدوات وتحليلات متقدمة لفهم الاقتصاد اليمني المعقد
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-colors">
              <Globe className="h-10 w-10 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">تتبع العقوبات الدولية</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                قاعدة بيانات شاملة لعقوبات OFAC، الاتحاد الأوروبي، والأمم المتحدة مع تحليل التأثير
              </p>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-colors">
              <BarChart3 className="h-10 w-10 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">تصور البيانات التفاعلي</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                رسوم بيانية ديناميكية، خرائط حرارية، وخرائط شبكية لاستكشاف الاتجاهات والعلاقات
              </p>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-colors">
              <Building2 className="h-10 w-10 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">ملفات تعريف البنوك</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                بيانات مالية تفصيلية، شبكات الفروع، حالة العقوبات لجميع البنوك اليمنية
              </p>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-colors">
              <Users className="h-10 w-10 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">تحليل أصحاب المصلحة</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                تتبع 46 جهة فاعلة: الحكومات، المنظمات الدولية، الجهات المانحة، والجماعات المسلحة
              </p>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-colors">
              <FileText className="h-10 w-10 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">مكتبة أبحاث شاملة</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                4,416 منشورًا من 50+ مصدرًا، قابلة للبحث والتصفية والتنزيل
              </p>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-colors">
              <Shield className="h-10 w-10 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">أنظمة الشفافية</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                كشف تضارب البيانات، سجلات المراجعة، وتقييم ثقة المصدر لجميع البيانات
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CauseWay Observatory Branding */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <img
                src={APP_LOGO}
                alt="CauseWay Observatory"
                className="h-20 w-20 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-1">
                  مرصد كوزواي للمساءلة والشفافية
                </h3>
                <p className="text-neutral-600">
                  استخبارات مالية مستقلة لليمن (2010-2025)
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="/about">
                <Button variant="outline" className="border-neutral-300">
                  عن المرصد
                </Button>
              </Link>
              <Link href="/methodology">
                <Button variant="outline" className="border-neutral-300">
                  المنهجية
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#CE1126] to-[#007A3D] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ابدأ استكشافك الآن
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            الوصول إلى أكثر منصة استخبارات مالية شمولاً لليمن
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/timeline">
              <Button size="lg" className="bg-white text-[#CE1126] hover:bg-neutral-100 h-14 px-8 text-lg font-bold">
                استكشف الجدول الزمني
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/banks">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 h-14 px-8 text-lg font-bold"
              >
                تصفح البنوك
                <Building2 className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
