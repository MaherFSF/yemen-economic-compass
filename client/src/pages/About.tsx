import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Target, Users, TrendingUp, Shield, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="w-full py-12">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">من نحن</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Causeway Consultancies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            وكالة استشارية متخصصة في التحليل المالي والاقتصادي لليمن
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />
              مهمتنا
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              Causeway Consultancies هي وكالة استشارية متخصصة للغاية تركز حصرياً على التحليل المالي والاقتصادي لليمن. 
              نقدم رؤى استراتيجية معمقة وتحليلات دقيقة للمؤسسات الدولية والحكومات والمانحين والمستثمرين الذين يسعون 
              لفهم ديناميكيات النظام المالي اليمني المعقد في سياق الصراع والانقسام المؤسسي.
            </p>
          </CardContent>
        </Card>

        {/* What Makes Us Unique */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              ما يميزنا
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">تخصص حصري في اليمن</h3>
                    <p className="text-sm text-muted-foreground">
                      نركز 100% على الاقتصاد اليمني، مما يمنحنا عمقاً تحليلياً لا مثيل له
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">تحليل مالي متقدم</h3>
                    <p className="text-sm text-muted-foreground">
                      نستخدم أدوات تحليلية متطورة لفهم الأنظمة المالية الموازية والمعقدة
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">شبكة محلية قوية</h3>
                    <p className="text-sm text-muted-foreground">
                      علاقات عميقة مع أصحاب المصلحة الرئيسيين في جميع مناطق اليمن
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Building2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">منهجية صارمة</h3>
                    <p className="text-sm text-muted-foreground">
                      نعتمد على البيانات الأولية والتحليل الميداني والتحقق المتعدد المصادر
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Services */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">خدماتنا المتخصصة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Badge variant="default">1</Badge>
                  التحليل المالي والنقدي
                </h3>
                <ul className="space-y-2 mr-8 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>تحليل سياسات البنك المركزي اليمني (صنعاء وعدن)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>تتبع ديناميكيات سعر الصرف والتضخم</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>تقييم السيولة والاحتياطيات النقدية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>رسم خرائط التدفقات المالية عبر الحدود</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Badge variant="default">2</Badge>
                  تحليل القطاع المصرفي والمالي
                </h3>
                <ul className="space-y-2 mr-8 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>تقييم صحة البنوك التجارية وقدرتها على الصمود</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>تحليل قطاع التمويل الأصغر والشمول المالي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>دراسة أنظمة الدفع الرقمي والتحويلات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>تقييم المخاطر المالية والائتمانية</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Badge variant="default">3</Badge>
                  الاقتصاد الكلي والسياسات
                </h3>
                <ul className="space-y-2 mr-8 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>توقعات الاقتصاد الكلي وتحليل السيناريوهات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>تقييم السياسات المالية والنقدية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>تحليل الإيرادات الحكومية والنفقات العامة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>دراسة تأثير المساعدات الدولية</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Badge variant="default">4</Badge>
                  الاستشارات الاستراتيجية
                </h3>
                <ul className="space-y-2 mr-8 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>تصميم برامج التنمية المالية والاقتصادية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>تقييم جدوى المشاريع في السياق اليمني</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>استشارات الاستثمار وتقييم المخاطر</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>دعم المفاوضات المالية والاقتصادية</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Clients */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">عملاؤنا</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              نخدم مجموعة متنوعة من المؤسسات الدولية والإقليمية التي تحتاج إلى فهم عميق للاقتصاد اليمني:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <div className="font-semibold">المنظمات الدولية</div>
                <div className="text-xs text-muted-foreground mt-1">البنك الدولي، صندوق النقد</div>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <div className="font-semibold">الحكومات</div>
                <div className="text-xs text-muted-foreground mt-1">الجهات المانحة والشركاء</div>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <div className="font-semibold">المنظمات غير الحكومية</div>
                <div className="text-xs text-muted-foreground mt-1">المنظمات الإنسانية والتنموية</div>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <div className="font-semibold">القطاع الخاص</div>
                <div className="text-xs text-muted-foreground mt-1">المستثمرون والشركات</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Author */}
        <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/10">
          <CardHeader>
            <CardTitle className="text-2xl">المؤسس والمدير</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary">MF</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">ماهر فيصل سعيد | Maher F.S. Farea</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  خبير تنموي وإنساني قاد برامج معقدة في الأمم المتحدة لأكثر من 12 عاماً، يجمع بين التفاوض الميداني، 
                  وبناء الأنظمة، وتعزيز المساءلة والمرونة المؤسسية.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  يصوغ رؤى تنفيذية تستند إلى إنجازات موثّقة—من إعادة هندسة أنظمة رصد وطنية إلى قيادة فرق متعددة 
                  البلدان وتحويل الأدلة إلى قرارات على مستوى السياسات.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            للاستفسارات والاستشارات، يرجى التواصل معنا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="text-sm py-2 px-4">
              Ma••••31@gmail.com
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
