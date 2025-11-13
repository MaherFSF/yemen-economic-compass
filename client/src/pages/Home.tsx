import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart3, TrendingDown, Users, DollarSign, AlertTriangle, FileText } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-medium text-primary">تقرير Causeway Consultancies 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              النظام المالي الموازي في اليمن
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              تحليل استراتيجي شامل للتحول الهيكلي في النظام المالي اليمني
              <br />
              <span className="text-lg">(2015-2025)</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/overview">
                <Button size="lg" className="gap-2 text-lg px-8">
                  استكشف التقرير
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/charts">
                <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
                  <BarChart3 className="h-5 w-5" />
                  الرسوم البيانية
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">النتائج الرئيسية</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              أبرز الاستنتاجات من تحليلنا الشامل للنظام المالي اليمني
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Finding 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <TrendingDown className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-xl">ارتفاع معدل الفقر</CardTitle>
                <CardDescription>تدهور الأوضاع المعيشية</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  ارتفع معدل الفقر من <span className="font-bold text-foreground">54%</span> في 2014 إلى 
                  <span className="font-bold text-foreground"> 76%</span> في 2025، مما يعكس التدهور الحاد في الأوضاع المعيشية.
                </p>
              </CardContent>
            </Card>

            {/* Finding 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">انهيار العملة</CardTitle>
                <CardDescription>تباعد سعر الصرف</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  وصل سعر الصرف في عدن إلى <span className="font-bold text-foreground">2,800 ريال/دولار</span> مقابل 
                  <span className="font-bold text-foreground"> 650 ريال/دولار</span> في صنعاء، مما خلق نظامين عملة منفصلين.
                </p>
              </CardContent>
            </Card>

            {/* Finding 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">نمو التمويل الأصغر</CardTitle>
                <CardDescription>بديل للنظام المصرفي</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  نمو عملاء التمويل الأصغر من <span className="font-bold text-foreground">25,000</span> إلى 
                  <span className="font-bold text-foreground"> 260,000</span> مقترض، كبديل للنظام المصرفي المنهار.
                </p>
              </CardContent>
            </Card>

            {/* Finding 4 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-xl">الدفع الرقمي</CardTitle>
                <CardDescription>قفزة تكنولوجية</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  ارتفع استخدام الدفع الرقمي للشركات من <span className="font-bold text-foreground">8%</span> إلى 
                  <span className="font-bold text-foreground"> 35%</span> بعد جائحة كوفيد-19.
                </p>
              </CardContent>
            </Card>

            {/* Finding 5 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-warning" />
                </div>
                <CardTitle className="text-xl">فجوة تمويل المناخ</CardTitle>
                <CardDescription>نقص حاد في التمويل</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  يحتاج اليمن <span className="font-bold text-foreground">50 دولار للفرد</span> لتمويل المناخ، لكن يستلم فقط 
                  <span className="font-bold text-foreground"> 2 دولار للفرد</span>.
                </p>
              </CardContent>
            </Card>

            {/* Finding 6 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-chart-4/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-xl">تحول المساعدات</CardTitle>
                <CardDescription>من إنسانية إلى تنموية</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  تحولت المساعدات من <span className="font-bold text-foreground">80% إنسانية</span> في 2015 إلى 
                  <span className="font-bold text-foreground"> 30% تنموية</span> في 2025.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Visualizations Preview */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">الرسوم البيانية التفاعلية</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              12 رسماً بيانياً عالي الجودة يوضح التحولات الرئيسية في النظام المالي اليمني
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Chart Preview 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <img 
                  src="/chart_01_poverty_inflation.png" 
                  alt="اتجاهات الفقر والتضخم"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">اتجاهات الفقر والتضخم</CardTitle>
                <CardDescription>تطور المؤشرات الاقتصادية 2014-2025</CardDescription>
              </CardHeader>
            </Card>

            {/* Chart Preview 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <img 
                  src="/chart_02_exchange_rate.png" 
                  alt="تباعد سعر الصرف"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">تباعد سعر الصرف</CardTitle>
                <CardDescription>عدن مقابل صنعاء 2014-2025</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/charts">
              <Button size="lg" variant="outline" className="gap-2">
                عرض جميع الرسوم البيانية (12)
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            اقرأ التقرير الكامل
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            تحليل معمق للنظام المالي الموازي في اليمن مع توصيات استراتيجية وسياسات عملية
          </p>
          <Link href="/overview">
            <Button size="lg" variant="secondary" className="gap-2 text-lg px-8">
              ابدأ القراءة الآن
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
