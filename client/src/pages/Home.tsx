import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart3, TrendingDown, Users, DollarSign, AlertTriangle, FileText, Building2, Calendar } from "lucide-react";
import { Link } from "wouter";
import EconomicIndicators from "@/components/EconomicIndicators";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[600px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/PDd5RatgbS8f.jpg)',
            filter: 'brightness(0.4)'
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        {/* Content */}
        <div className="container relative h-full flex items-center">
          <div className="max-w-4xl space-y-6 text-white">
            <div className="inline-block px-4 py-2 bg-primary/90 rounded-full mb-4">
              <span className="text-sm font-medium">Causeway Consultancies Report 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              النظام المالي الموازي في اليمن
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              تحليل استراتيجي شامل للتحول الهيكلي في النظام المالي اليمني
              <br />
              <span className="text-lg text-gray-300">(2015-2025)</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/overview">
                <Button size="lg" className="gap-2 text-lg px-8">
                  استكشف التقرير
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/charts">
                <Button size="lg" variant="outline" className="gap-2 text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/30">
                  <BarChart3 className="h-5 w-5" />
                  الرسوم البيانية
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Executive Summary */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">النتائج الرئيسية</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  أبرز الاستنتاجات من تحليلنا الشامل للنظام المالي اليمني
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center">
                        <TrendingDown className="h-6 w-6 text-red-600" />
                      </div>
                      <CardTitle className="text-xl">نمو التمويل الأصغر</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">المقترضون النشطون</span>
                        <span className="font-bold text-lg">260,000 ← 25,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">المودعون النشطون</span>
                        <span className="font-bold text-lg">420,000 ← 30,000</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        نمو استثنائي بنسبة 940% في قطاع التمويل الأصغر كبديل للنظام المصرفي التقليدي المنهار
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                        <DollarSign className="h-6 w-6 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl">انفجار العملة</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">عدن (2014 → 2025)</span>
                        <span className="font-bold text-lg text-orange-600">215 → 2,800 ريال/دولار</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">صنعاء (استقرار نسبي)</span>
                        <span className="font-bold text-lg">650 ريال/دولار</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        تباعد بنسبة 330% بين سعر الصرف في المنطقتين يعكس السياسات النقدية المتضاربة
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">ارتفاع معدل الفقر</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">معدل الفقر (2014 → 2025)</span>
                        <span className="font-bold text-lg text-blue-600">54% → 76%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">يحتاجون مساعدة</span>
                        <span className="font-bold text-lg">21.6 مليون</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        تدهور اقتصادي حاد أدى إلى أزمة إنسانية غير مسبوقة تؤثر على ثلاثة أرباع السكان
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                        <AlertTriangle className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-xl">فجوة تمويل المناخ</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">الاحتياج السنوي</span>
                        <span className="font-bold text-lg">800 مليون دولار</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">التمويل الفعلي</span>
                        <span className="font-bold text-lg text-green-600">60 مليون دولار</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        فجوة تمويلية بنسبة 92.5% تعيق جهود التكيف مع التغير المناخي في بلد شديد الهشاشة
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Interactive Charts Preview */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 text-center">الرسوم البيانية التفاعلية</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group cursor-pointer">
                    <Link href="/charts">
                      <div className="overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                        <img 
                          src="/charts/chart_01_poverty_inflation.png" 
                          alt="اتجاهات الفقر والتضخم"
                          className="w-full h-auto group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <p className="text-center mt-2 text-sm font-medium">اتجاهات الفقر والتضخم</p>
                    </Link>
                  </div>
                  <div className="relative group cursor-pointer">
                    <Link href="/charts">
                      <div className="overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                        <img 
                          src="/charts/chart_02_exchange_rate.png" 
                          alt="تباعد سعر الصرف"
                          className="w-full h-auto group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <p className="text-center mt-2 text-sm font-medium">تباعد سعر الصرف</p>
                    </Link>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Link href="/charts">
                    <Button variant="outline" size="lg" className="gap-2">
                      عرض جميع الرسوم البيانية (12)
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar - Economic Indicators */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <EconomicIndicators />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="w-full py-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">مشروع البنية التحتية المالية</CardTitle>
                    <CardDescription>World Bank - $20 Million</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  مبادرة تحويلية بقيمة 20 مليون دولار لإعادة بناء البنية التحتية للمدفوعات في اليمن 
                  وتوسيع الشمول المالي في ظل الانقسام المستمر
                </p>
                <Link href="/fmi-project">
                  <Button className="w-full gap-2">
                    اقرأ المزيد
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">الخط الزمني التفاعلي</CardTitle>
                    <CardDescription>2014 - 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  عقد من الصراع والانهيار الاقتصادي والكارثة الإنسانية: تتبع الأحداث الرئيسية 
                  التي أعادت تشكيل المشهد المالي والسياسي في اليمن
                </p>
                <Link href="/timeline">
                  <Button className="w-full gap-2">
                    استكشف الخط الزمني
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            اقرأ التقرير الكامل
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            تحليل معمق للنظام المالي الموازي في اليمن، مع توصيات استراتيجية وسياسات عملية
          </p>
          <Link href="/overview">
            <Button size="lg" variant="secondary" className="gap-2 text-lg px-8">
              <FileText className="h-5 w-5" />
              ابدأ القراءة الآن
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
