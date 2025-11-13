import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Globe, Award } from "lucide-react";

export default function About() {
  return (
    <div className="w-full py-12">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-16 w-16 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-3xl">B</span>
            </div>
            <div className="text-right">
              <h1 className="text-4xl font-bold">Benfour</h1>
              <p className="text-xl text-muted-foreground">Global Think Tank</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مركز أبحاث استراتيجي عالمي متخصص في التحليل الاقتصادي والمالي للمنطقة العربية
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">رؤيتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-muted-foreground">
                أن نكون المرجع الأول في التحليل الاستراتيجي والاقتصادي للمنطقة العربية، من خلال تقديم أبحاث معمقة وموضوعية 
                تساهم في صنع سياسات فعالة وتعزيز الفهم العميق للتحديات الاقتصادية والمالية.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-2xl">مهمتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-muted-foreground">
                إنتاج تحليلات استراتيجية عالية الجودة تستند إلى البيانات والأدلة، وتقديم توصيات عملية لصناع القرار والمؤسسات 
                الدولية والمجتمع المدني، بهدف المساهمة في حل الأزمات الاقتصادية والإنسانية في المنطقة.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Approach */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl">منهجيتنا</CardTitle>
            <CardDescription className="text-base">
              نعتمد على نهج علمي صارم ومتعدد التخصصات في جميع أبحاثنا
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</span>
                  البحث المعمق
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed pr-10">
                  نجمع البيانات من مصادر متعددة وموثوقة، بما في ذلك التقارير الحكومية، البيانات الدولية، 
                  الدراسات الأكاديمية، والمقابلات الميدانية مع الخبراء والفاعلين المحليين.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</span>
                  التحليل الموضوعي
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed pr-10">
                  نحلل البيانات بطريقة موضوعية ومستقلة، بعيداً عن التحيزات السياسية أو الأيديولوجية، 
                  مع التركيز على الأدلة والحقائق القابلة للتحقق.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</span>
                  التصور البياني
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed pr-10">
                  نستخدم تقنيات التصور البياني المتقدمة لتقديم البيانات المعقدة بطريقة واضحة وسهلة الفهم، 
                  مما يسهل على صناع القرار والجمهور العام استيعاب النتائج.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">4</span>
                  التوصيات العملية
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed pr-10">
                  نقدم توصيات سياسية واستراتيجية قابلة للتطبيق، مع مراعاة السياق المحلي والقيود العملية، 
                  بهدف المساهمة في حل المشكلات الحقيقية على الأرض.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About This Report */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">حول هذا التقرير</CardTitle>
            <CardDescription className="text-base">
              النظام المالي الموازي في اليمن: عشر سنوات أعادت تشكيل حركة الأموال (2015-2025)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed">
                يمثل هذا التقرير تحليلاً شاملاً للتحول الهيكلي في النظام المالي اليمني منذ اندلاع الحرب الأهلية في 2015. 
                على مدى عشر سنوات، شهد اليمن انقساماً مؤسسياً غير مسبوق، مع ظهور نظامين ماليين متوازيين يتنافسان على الشرعية والموارد.
              </p>

              <p className="text-base leading-relaxed">
                يستند التقرير إلى مراجعة شاملة لأكثر من 50 دراسة وتقريراً من مصادر موثوقة، بما في ذلك مركز صنعاء للدراسات الاستراتيجية، 
                معهد بروكينغز، الأمم المتحدة، البنك الدولي، وغيرها من المؤسسات البحثية المرموقة. كما يتضمن تحليلاً معمقاً لـ 12 رسماً بيانياً 
                تم إنتاجها خصيصاً لهذا التقرير، توضح الاتجاهات الرئيسية والتحولات الهيكلية في الاقتصاد اليمني.
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg space-y-4">
              <h4 className="font-semibold text-lg">نطاق التقرير</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>الفترة الزمنية:</strong> 2015-2025 (10 سنوات)
                </div>
                <div>
                  <strong>عدد الرسوم البيانية:</strong> 12 رسماً بيانياً
                </div>
                <div>
                  <strong>المصادر:</strong> أكثر من 50 دراسة وتقريراً
                </div>
                <div>
                  <strong>تاريخ النشر:</strong> نوفمبر 2025
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-border">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">معايير الجودة</p>
                <p className="text-sm text-muted-foreground">
                  جميع البيانات والتحليلات في هذا التقرير تم التحقق منها ومراجعتها من قبل خبراء اقتصاديين ومحللين استراتيجيين
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
