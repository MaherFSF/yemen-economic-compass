import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const chartCategories = [
  {
    id: "economic",
    label: "المؤشرات الاقتصادية",
    charts: [
      {
        id: 1,
        title: "اتجاهات الفقر والتضخم (2014-2025)",
        titleEn: "Poverty Rate & Inflation Trends (2014-2025)",
        description: "تطور معدلات الفقر وتباعد التضخم بين عدن وصنعاء",
        image: "/charts/chart_01_poverty_inflation.png",
        insights: [
          "ارتفع معدل الفقر من 54% (2014) إلى 76% (2025)",
          "وصل التضخم في عدن إلى 35% مقابل 8% في صنعاء",
          "التباعد الحاد يعكس السياسات النقدية المتضاربة"
        ],
        arabicExplanation: "يوضح هذا الرسم البياني التدهور الاقتصادي الحاد في اليمن على مدى عقد من الزمن. ارتفع معدل الفقر بنسبة 41% ليصل إلى ثلاثة أرباع السكان، بينما يظهر التضخم تبايناً صارخاً بين المنطقتين نتيجة السياسات النقدية المختلفة للبنكين المركزيين المتنافسين."
      },
      {
        id: 2,
        title: "تباعد سعر الصرف: عدن مقابل صنعاء (2014-2025)",
        titleEn: "Exchange Rate Divergence: Aden vs Sana'a (2014-2025)",
        description: "انقسام دراماتيكي في سعر الصرف بعد انقسام البنك المركزي في 2016",
        image: "/charts/chart_02_exchange_rate.png",
        insights: [
          "عدن: 215 ريال/دولار (2014) ← 2,800 ريال/دولار (2025)",
          "صنعاء: استقرار نسبي عند 650 ريال/دولار",
          "تباعد بنسبة 4.3 ضعف بين المنطقتين"
        ],
        arabicExplanation: "يُظهر الرسم البياني الانهيار الكارثي للريال اليمني في المناطق الخاضعة للحكومة المعترف بها دولياً (عدن)، مقابل الاستقرار النسبي في المناطق الخاضعة لسيطرة الحوثيين (صنعاء). هذا التباعد الاستثنائي يعكس استراتيجيات نقدية متناقضة تماماً."
      }
    ]
  },
  {
    id: "financial",
    label: "الأنظمة المالية",
    charts: [
      {
        id: 3,
        title: "نمو قطاع التمويل الأصغر (2010-2024)",
        titleEn: "Microfinance Sector Growth (2010-2024)",
        description: "نمو استثنائي في التمويل الأصغر كبديل للنظام المصرفي التقليدي",
        image: "/charts/chart_03_microfinance_growth.png",
        insights: [
          "المقترضون النشطون: 25 ألف ← 260 ألف (نمو 940%)",
          "المودعون النشطون: 30 ألف ← 420 ألف (نمو 1,300%)",
          "التمويل الأصغر ملأ الفراغ الذي تركه انهيار القطاع المصرفي"
        ],
        arabicExplanation: "يوثق هذا الرسم البياني التحول الهيكلي في النظام المالي اليمني، حيث أصبح التمويل الأصغر الملاذ الوحيد للملايين بعد انهيار النظام المصرفي التقليدي. النمو الهائل يعكس الحاجة الماسة للخدمات المالية الأساسية."
      },
      {
        id: 4,
        title: "اعتماد الدفع الرقمي (2015-2024)",
        titleEn: "Digital Payment Adoption (2015-2024)",
        description: "النمو السريع في حجم معاملات الدفع الرقمي",
        image: "/charts/chart_04_digital_payments.png",
        insights: [
          "حجم المعاملات: 500 مليون دولار (2015) ← 3.2 مليار دولار (2024)",
          "نمو بنسبة 540% في تسع سنوات",
          "المدفوعات الرقمية أصبحت شريان الحياة للاقتصاد"
        ],
        arabicExplanation: "يُظهر الرسم البياني كيف أصبحت المدفوعات الرقمية ضرورة حتمية في ظل انهيار البنية التحتية المصرفية التقليدية. النمو الهائل يعكس التحول القسري نحو البدائل الرقمية لتسهيل المعاملات الاقتصادية الأساسية."
      }
    ]
  },
  {
    id: "aid",
    label: "المساعدات والتمويل",
    charts: [
      {
        id: 5,
        title: "تكوين المساعدات الدولية (2015-2024)",
        titleEn: "International Aid Composition (2015-2024)",
        description: "توزيع المساعدات الدولية بين الإنسانية والتنموية",
        image: "/charts/chart_05_aid_composition.png",
        insights: [
          "المساعدات الإنسانية: 85% من إجمالي المساعدات",
          "المساعدات التنموية: 15% فقط",
          "إجمالي المساعدات: 20 مليار دولار (2015-2024)"
        ],
        arabicExplanation: "يوضح الرسم البياني الاعتماد الكبير على المساعدات الإنسانية الطارئة على حساب الاستثمارات التنموية طويلة الأجل. هذا الخلل يعكس الأزمة الإنسانية المستمرة ولكنه يعيق أيضاً إمكانية التعافي الاقتصادي المستدام."
      },
      {
        id: 6,
        title: "فجوة تمويل المناخ (2020-2024)",
        titleEn: "Climate Finance Gap (2020-2024)",
        description: "الفجوة بين احتياجات التكيف المناخي والتمويل الفعلي",
        image: "/charts/chart_07_climate_finance.png",
        insights: [
          "الاحتياج السنوي: 800 مليون دولار",
          "التمويل الفعلي: 60 مليون دولار",
          "فجوة تمويلية بنسبة 92.5%"
        ],
        arabicExplanation: "يكشف الرسم البياني عن الفجوة الهائلة في تمويل التكيف مع التغير المناخي في اليمن، وهو من أكثر البلدان هشاشة مناخياً. هذا النقص الحاد في التمويل يعرض ملايين اليمنيين لمخاطر متزايدة من الجفاف والفيضانات."
      }
    ]
  }
];

export default function Charts() {
  const downloadChart = (imageUrl: string, chartTitle: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${chartTitle.replace(/\s+/g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAllCharts = () => {
    const allCharts = chartCategories.flatMap(cat => cat.charts);
    allCharts.forEach((chart, index) => {
      setTimeout(() => {
        downloadChart(chart.image, chart.titleEn);
      }, index * 500);
    });
  };

  return (
    <div className="w-full py-12">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">التصورات البيانية</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            الرسوم البيانية التفاعلية
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            تحليل بصري شامل للنظام المالي اليمني (2014-2025)
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="economic" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {chartCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-base">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {chartCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              {category.charts.map((chart) => (
                <Card key={chart.id} className="overflow-hidden border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{chart.title}</CardTitle>
                        <CardDescription className="text-base">{chart.description}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        #{chart.id}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    {/* Chart Image */}
                    <div className="mb-6 rounded-lg overflow-hidden border-2 border-border">
                      <img 
                        src={chart.image} 
                        alt={chart.title}
                        className="w-full h-auto"
                      />
                    </div>

                    {/* English Title */}
                    <div className="mb-4 p-3 bg-accent/20 rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground">
                        {chart.titleEn}
                      </p>
                    </div>

                    {/* Key Insights */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Badge variant="default">النقاط الرئيسية</Badge>
                      </h3>
                      <ul className="space-y-2">
                        {chart.insights.map((insight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1 font-bold">•</span>
                            <span className="text-muted-foreground">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arabic Explanation */}
                    <div className="p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border-r-4 border-r-primary mb-4">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Badge variant="secondary">الشرح التفصيلي</Badge>
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {chart.arabicExplanation}
                      </p>
                    </div>

                    {/* Download Button */}
                    <Button 
                      onClick={() => downloadChart(chart.image, chart.titleEn)}
                      className="w-full"
                      variant="outline"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      تحميل الرسم البياني
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>

        {/* Download Section */}
        <div className="mt-12 text-center p-8 bg-gradient-to-br from-primary/5 to-accent/10 rounded-lg border-2">
          <h3 className="text-2xl font-bold mb-3">تحميل الرسوم البيانية</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            جميع الرسوم البيانية متاحة بدقة عالية (300 DPI) للاستخدام في التقارير والعروض التقديمية
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <Badge variant="outline" className="text-sm py-2 px-4">6 رسوم بيانية</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">دقة 300 DPI</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">تنسيق PNG</Badge>
          </div>
          <Button onClick={downloadAllCharts} size="lg" className="gap-2">
            <Download className="h-5 w-5" />
            تحميل جميع الرسوم البيانية
          </Button>
        </div>
      </div>
    </div>
  );
}
