import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const chartCategories = [
  {
    id: "economic",
    label: "المؤشرات الاقتصادية",
    charts: [
      {
        id: 1,
        title: "اتجاهات الفقر والتضخم (2014-2025)",
        description: "تطور معدل الفقر والتضخم في عدن وصنعاء على مدى 11 عاماً",
        image: "/chart_01_poverty_inflation.png",
        insights: [
          "ارتفع معدل الفقر من 54% في 2014 إلى 76% في 2025",
          "التضخم في عدن وصل إلى 35% مقابل 8% في صنعاء",
          "التباين الكبير يعكس السياسات النقدية المختلفة"
        ]
      },
      {
        id: 2,
        title: "تباعد سعر الصرف - عدن مقابل صنعاء (2014-2025)",
        description: "الانفجار في سعر الصرف في عدن مقابل الاستقرار النسبي في صنعاء",
        image: "/chart_02_exchange_rate.png",
        insights: [
          "عدن: من 215 ريال/دولار (2014) إلى 2,800 ريال/دولار (2025)",
          "صنعاء: استقرار نسبي عند 650 ريال/دولار",
          "الفرق يصل إلى 330% بين المنطقتين"
        ]
      }
    ]
  },
  {
    id: "financial",
    label: "الأنظمة المالية",
    charts: [
      {
        id: 3,
        title: "نمو عملاء التمويل الأصغر (2010-2024)",
        description: "النمو الاستثنائي في قطاع التمويل الأصغر كبديل للنظام المصرفي",
        image: "/chart_03_microfinance_growth.png",
        insights: [
          "المقترضون النشطون: من 25,000 إلى 260,000",
          "المودعون النشطون: من 30,000 إلى 420,000",
          "نمو بنسبة 940% في 14 عاماً"
        ]
      },
      {
        id: 4,
        title: "اعتماد الدفع الرقمي (2019 مقابل 2024)",
        description: "القفزة الكبيرة في استخدام الدفع الرقمي بعد جائحة كوفيد-19",
        image: "/chart_04_digital_payments.png",
        insights: [
          "الأفراد: 5% → 20%",
          "الشركات: 8% → 35%",
          "الخدمات الحكومية: 2% → 15%"
        ]
      },
      {
        id: 10,
        title: "شبكة التدفقات المالية (2015-2025)",
        description: "خريطة التدفقات المالية المحلية والخارجية في النظام اليمني",
        image: "/chart_10_financial_flows_network.png",
        insights: [
          "العقد الرئيسية: البنك المركزي عدن، مكاتب الصرافة، الأسر",
          "التدفقات الخارجية تهيمن على النظام",
          "شبكات غير رسمية تملأ الفراغ المؤسسي"
        ]
      },
      {
        id: 11,
        title: "شبكة البنوك تحت التنظيم المزدوج",
        description: "البنوك التجارية والإسلامية وعلاقاتها المزدوجة مع البنكين المركزيين",
        image: "/chart_11_banking_network.png",
        insights: [
          "6 بنوك رئيسية تعمل تحت نظامين",
          "علاقات مزدوجة مع عدن وصنعاء",
          "تعقيد مؤسسي غير مسبوق"
        ]
      },
      {
        id: 12,
        title: "هيكل البنك المركزي المزدوج (2016-2025)",
        description: "الهيكل المؤسسي المنقسم للنظام المصرفي اليمني",
        image: "/chart_12_dual_cby_structure.png",
        insights: [
          "المؤسسات المالية الدولية في القمة",
          "البنوك المركزية المتنافسة في الوسط",
          "البنوك التجارية وشبكات الصرافة في القاعدة"
        ]
      }
    ]
  },
  {
    id: "aid",
    label: "المساعدات الدولية",
    charts: [
      {
        id: 5,
        title: "تكوين المساعدات الدولية (2015-2025)",
        description: "التحول من المساعدات الإنسانية إلى التنموية على مدى 10 سنوات",
        image: "/chart_05_aid_composition.png",
        insights: [
          "2015: 80% إنسانية، 15% تنموية",
          "2025: 50% إنسانية، 30% تنموية",
          "تحول في أولويات المانحين"
        ]
      },
      {
        id: 7,
        title: "فجوة تمويل المناخ - مقارنة إقليمية",
        description: "اليمن يتلقى أقل تمويل مناخي مقارنة بالدول المجاورة",
        image: "/chart_07_climate_finance.png",
        insights: [
          "اليمن: 2 دولار/فرد مستلم مقابل 50 دولار/فرد مطلوب",
          "الصومال: 8 دولار/فرد",
          "المغرب: 25 دولار/فرد"
        ]
      }
    ]
  },
  {
    id: "governance",
    label: "الحوكمة والمخاطر",
    charts: [
      {
        id: 6,
        title: "مصفوفة الحوكمة المالية",
        description: "تقييم القدرات والشرعية للفاعلين الرئيسيين في النظام المالي",
        image: "/chart_06_governance_matrix.png",
        insights: [
          "المانحون الدوليون: أعلى درجات الشرعية والقدرة",
          "شبكات الصرافة: نفوذ عالي، شرعية منخفضة",
          "المنظمات المحلية: قدرات محدودة"
        ]
      },
      {
        id: 8,
        title: "كوكبة المخاطر المالية (2025-2027)",
        description: "تقييم المخاطر الرئيسية حسب الاحتمالية والتأثير",
        image: "/chart_08_risk_constellation.png",
        insights: [
          "المخاطر الحرجة: انهيار الرواتب، تفتت العملة",
          "المخاطر المتوسطة: تصعيد الصراع، انقطاع المساعدات",
          "المخاطر المنخفضة: كوارث طبيعية"
        ]
      },
      {
        id: 9,
        title: "خريطة القوة المالية (2025)",
        description: "توزيع النفوذ والشرعية بين الفاعلين الرئيسيين",
        image: "/chart_09_financial_power.png",
        insights: [
          "المانحون الدوليون: أعلى نفوذ وشرعية",
          "البنك المركزي عدن: نفوذ مرتفع، شرعية متوسطة",
          "المنظمات المحلية: أدنى نفوذ وشرعية"
        ]
      }
    ]
  }
];

export default function Charts() {
  return (
    <div className="w-full py-12">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="outline">
            12 رسماً بيانياً تفاعلياً
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            الرسوم البيانية والتحليلات
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            تصورات بيانية عالية الجودة توضح التحولات الرئيسية في النظام المالي اليمني (2015-2025)
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="economic" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {chartCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {chartCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              {category.charts.map((chart) => (
                <Card key={chart.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{chart.title}</CardTitle>
                        <CardDescription className="text-base">{chart.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">#{chart.id}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Chart Image */}
                      <div className="lg:col-span-2">
                        <div className="bg-muted/30 rounded-lg p-4 border border-border">
                          <img 
                            src={chart.image} 
                            alt={chart.title}
                            className="w-full h-auto rounded"
                          />
                        </div>
                      </div>

                      {/* Insights */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">النقاط الرئيسية</h4>
                        <ul className="space-y-3">
                          {chart.insights.map((insight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-primary">{idx + 1}</span>
                              </span>
                              <span className="text-sm leading-relaxed">{insight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
