import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Droplets, Wind, Sun } from "lucide-react";

export default function ClimateFinance() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4" dir={isArabic ? "rtl" : "ltr"}>
            {isArabic ? "التمويل المناخي والاقتصاد الأخضر" : "Climate Finance & Green Economy"}
          </h1>
          <p className="text-lg text-muted-foreground" dir={isArabic ? "rtl" : "ltr"}>
            {isArabic 
              ? "تحليل شامل للتمويل المناخي والأثر البيئي في اليمن (2010-2025)" 
              : "Comprehensive analysis of climate finance and environmental impact in Yemen (2010-2025)"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{isArabic ? "التمويل المناخي" : "Climate Finance"}</CardTitle>
              <Leaf className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$245M</div>
              <p className="text-xs text-muted-foreground mt-1">{isArabic ? "إجمالي 2015-2025" : "Total 2015-2025"}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{isArabic ? "أمن المياه" : "Water Security"}</CardTitle>
              <Droplets className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isArabic ? "حرج" : "Critical"}</div>
              <p className="text-xs text-muted-foreground mt-1">{isArabic ? "نقص حاد في المياه" : "Severe water scarcity"}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{isArabic ? "الطاقة المتجددة" : "Renewable Energy"}</CardTitle>
              <Sun className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5%</div>
              <p className="text-xs text-muted-foreground mt-1">{isArabic ? "من إجمالي الطاقة" : "of total energy mix"}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{isArabic ? "التأثر المناخي" : "Climate Vulnerability"}</CardTitle>
              <Wind className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isArabic ? "عالي جداً" : "Extreme"}</div>
              <p className="text-xs text-muted-foreground mt-1">{isArabic ? "من أكثر الدول تأثراً" : "Among most vulnerable"}</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">{isArabic ? "نظرة عامة" : "Overview"}</TabsTrigger>
            <TabsTrigger value="water">{isArabic ? "المياه" : "Water"}</TabsTrigger>
            <TabsTrigger value="energy">{isArabic ? "الطاقة" : "Energy"}</TabsTrigger>
            <TabsTrigger value="finance">{isArabic ? "التمويل" : "Finance"}</TabsTrigger>
            <TabsTrigger value="recommendations">{isArabic ? "التوصيات" : "Recommendations"}</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "التحديات المناخية في اليمن" : "Climate Challenges in Yemen"}</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none" dir={isArabic ? "rtl" : "ltr"}>
                <p>
                  {isArabic
                    ? "يواجه اليمن تحديات مناخية وبيئية حادة تفاقمت بسبب الصراع. يعاني البلد من ندرة المياه الشديدة، مع استنزاف طبقات المياه الجوفية بمعدلات غير مستدامة. أزمة الطاقة المستمرة تعيق التنمية وتزيد الاعتماد على الوقود الأحفوري."
                    : "Yemen faces acute climate and environmental challenges exacerbated by conflict. The country suffers from severe water scarcity, with groundwater aquifers depleting at unsustainable rates. The ongoing energy crisis hinders development and increases reliance on fossil fuels."}
                </p>
                <p>
                  {isArabic
                    ? "رغم هذه التحديات، هناك إمكانات كبيرة للطاقة المتجددة (شمسية ورياح) والاقتصاد الأخضر. التمويل المناخي الدولي يمكن أن يلعب دوراً حاسماً في دعم التحول نحو الاستدامة."
                    : "Despite these challenges, there is significant potential for renewable energy (solar and wind) and green economy. International climate finance can play a crucial role in supporting the transition to sustainability."}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="water" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "أمن المياه" : "Water Security"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">{isArabic ? "الوضع الحالي" : "Current Situation"}</h4>
                    <ul className="text-sm space-y-1 text-blue-800">
                      <li>• {isArabic ? "استنزاف طبقات المياه الجوفية" : "Groundwater depletion"}</li>
                      <li>• {isArabic ? "تدمير البنية التحتية للمياه" : "Water infrastructure damage"}</li>
                      <li>• {isArabic ? "تلوث مصادر المياه" : "Water source contamination"}</li>
                      <li>• {isArabic ? "نقص الوصول إلى المياه النظيفة" : "Limited access to clean water"}</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold mb-2">{isArabic ? "الحلول المقترحة" : "Proposed Solutions"}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>{isArabic ? "تحلية المياه بالطاقة الشمسية" : "Solar-powered desalination"}</li>
                      <li>{isArabic ? "حصاد مياه الأمطار" : "Rainwater harvesting"}</li>
                      <li>{isArabic ? "تحسين كفاءة الري" : "Irrigation efficiency"}</li>
                      <li>{isArabic ? "إعادة تأهيل البنية التحتية" : "Infrastructure rehabilitation"}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="energy" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "الطاقة المتجددة" : "Renewable Energy"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">{isArabic ? "الإمكانات" : "Potential"}</h4>
                    <ul className="text-sm space-y-1 text-yellow-800">
                      <li>• {isArabic ? "طاقة شمسية: إمكانات هائلة" : "Solar: Huge potential"}</li>
                      <li>• {isArabic ? "طاقة رياح: خاصة في المناطق الساحلية" : "Wind: Especially coastal areas"}</li>
                      <li>• {isArabic ? "طاقة حرارية جوفية: محدودة" : "Geothermal: Limited"}</li>
                      <li>• {isArabic ? "طاقة مائية: محدودة جداً" : "Hydro: Very limited"}</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold mb-2">{isArabic ? "المشاريع الحالية" : "Current Projects"}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>{isArabic ? "محطات طاقة شمسية صغيرة" : "Small-scale solar plants"}</li>
                      <li>{ isArabic ? "أنظمة طاقة شمسية منزلية" : "Home solar systems"}</li>
                      <li>{isArabic ? "مشاريع طاقة رياح تجريبية" : "Pilot wind projects"}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="finance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "التمويل المناخي" : "Climate Finance"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">{isArabic ? "المصادر الرئيسية" : "Main Sources"}</h4>
                    <ul className="text-sm space-y-1 text-green-800">
                      <li>• {isArabic ? "صندوق المناخ الأخضر" : "Green Climate Fund"}</li>
                      <li>• {isArabic ? "البنك الدولي" : "World Bank"}</li>
                      <li>• {isArabic ? "برنامج الأمم المتحدة الإنمائي" : "UNDP"}</li>
                      <li>• {isArabic ? "المانحون الثنائيون" : "Bilateral donors"}</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold mb-2">{isArabic ? "الاحتياجات" : "Needs"}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {isArabic
                        ? "تقدر احتياجات التمويل المناخي لليمن بـ 1.5+ مليار دولار سنوياً"
                        : "Yemen's climate finance needs estimated at $1.5+ billion annually"}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>{isArabic ? "التكيف مع تغير المناخ" : "Climate adaptation"}</li>
                      <li>{isArabic ? "الطاقة المتجددة" : "Renewable energy"}</li>
                      <li>{isArabic ? "أمن المياه" : "Water security"}</li>
                      <li>{isArabic ? "الزراعة المستدامة" : "Sustainable agriculture"}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "التوصيات" : "Recommendations"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">{isArabic ? "للحكومة اليمنية" : "For Yemeni Government"}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>{isArabic ? "تطوير استراتيجية وطنية للمناخ" : "Develop national climate strategy"}</li>
                      <li>{isArabic ? "تحفيز الاستثمار في الطاقة المتجددة" : "Incentivize renewable energy investment"}</li>
                      <li>{isArabic ? "تعزيز إدارة الموارد المائية" : "Strengthen water resource management"}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{isArabic ? "للمانحين الدوليين" : "For International Donors"}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>{isArabic ? "زيادة التمويل المناخي" : "Increase climate finance"}</li>
                      <li>{isArabic ? "دعم مشاريع الطاقة المتجددة" : "Support renewable energy projects"}</li>
                      <li>{isArabic ? "تمويل مشاريع المياه" : "Finance water projects"}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{isArabic ? "للقطاع الخاص" : "For Private Sector"}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>{isArabic ? "الاستثمار في الطاقة المتجددة" : "Invest in renewable energy"}</li>
                      <li>{isArabic ? "تطوير حلول مبتكرة للمياه" : "Develop innovative water solutions"}</li>
                      <li>{isArabic ? "تعزيز الممارسات المستدامة" : "Promote sustainable practices"}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
