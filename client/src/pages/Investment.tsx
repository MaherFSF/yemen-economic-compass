import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown, Building2, Globe, AlertTriangle } from "lucide-react";

export default function Investment() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4" dir={isArabic ? "rtl" : "ltr"}>
            {isArabic ? "مناخ الاستثمار في اليمن" : "Yemen Investment Climate"}
          </h1>
          <p className="text-lg text-muted-foreground" dir={isArabic ? "rtl" : "ltr"}>
            {isArabic 
              ? "تحليل شامل لبيئة الاستثمار والفرص والتحديات (2010-2025)" 
              : "Comprehensive analysis of investment environment, opportunities, and challenges (2010-2025)"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{isArabic ? "الاستثمار الأجنبي المباشر" : "FDI Inflows"}</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$-1.2B</div>
              <p className="text-xs text-muted-foreground mt-1">{isArabic ? "انخفاض 95% منذ 2014" : "95% decline since 2014"}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{isArabic ? "القطاع الخاص" : "Private Sector"}</CardTitle>
              <Building2 className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">35%</div>
              <p className="text-xs text-muted-foreground mt-1">{isArabic ? "من الناتج المحلي الإجمالي" : "of GDP (down from 65%)"}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{isArabic ? "ترتيب سهولة ممارسة الأعمال" : "Ease of Doing Business"}</CardTitle>
              <Globe className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">N/A</div>
              <p className="text-xs text-muted-foreground mt-1">{isArabic ? "البيانات غير متوفرة منذ 2020" : "Data unavailable since 2020"}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{isArabic ? "المخاطر" : "Risk Level"}</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isArabic ? "عالية جداً" : "Extreme"}</div>
              <p className="text-xs text-muted-foreground mt-1">{isArabic ? "صراع مستمر، عدم استقرار" : "Ongoing conflict, instability"}</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">{isArabic ? "نظرة عامة" : "Overview"}</TabsTrigger>
            <TabsTrigger value="sectors">{isArabic ? "القطاعات" : "Sectors"}</TabsTrigger>
            <TabsTrigger value="challenges">{isArabic ? "التحديات" : "Challenges"}</TabsTrigger>
            <TabsTrigger value="opportunities">{isArabic ? "الفرص" : "Opportunities"}</TabsTrigger>
            <TabsTrigger value="recommendations">{isArabic ? "التوصيات" : "Recommendations"}</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "مناخ الاستثمار الحالي" : "Current Investment Climate"}</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none" dir={isArabic ? "rtl" : "ltr"}>
                <p>
                  {isArabic
                    ? "شهد مناخ الاستثمار في اليمن تدهوراً كارثياً منذ بداية الصراع في 2015. انخفض الاستثمار الأجنبي المباشر بنسبة 95%، وانكمش القطاع الخاص من 65% إلى 35% من الناتج المحلي الإجمالي."
                    : "Yemen's investment climate has deteriorated catastrophically since the conflict began in 2015. Foreign Direct Investment (FDI) has declined by 95%, and the private sector has shrunk from 65% to 35% of GDP."}
                </p>
                <p>
                  {isArabic
                    ? "التحديات الرئيسية تشمل: انعدام الأمن، تجزئة السلطة، انهيار البنية التحتية، نقص السيولة، وعدم اليقين التنظيمي. ومع ذلك، تظل هناك فرص في قطاعات محددة، خاصة في إعادة الإعمار والطاقة المتجددة والتكنولوجيا."
                    : "Key challenges include: insecurity, fragmented authority, infrastructure collapse, liquidity shortages, and regulatory uncertainty. However, opportunities remain in specific sectors, particularly reconstruction, renewable energy, and technology."}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sectors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "القطاعات الاستثمارية" : "Investment Sectors"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold mb-2">{isArabic ? "النفط والغاز" : "Oil & Gas"}</h4>
                    <p className="text-sm text-muted-foreground">
                      {isArabic
                        ? "توقف الإنتاج بشكل شبه كامل، لكن الإمكانات تبقى كبيرة للمستقبل"
                        : "Production nearly halted, but significant potential remains for future"}
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold mb-2">{isArabic ? "الطاقة المتجددة" : "Renewable Energy"}</h4>
                    <p className="text-sm text-muted-foreground">
                      {isArabic
                        ? "فرص كبيرة في الطاقة الشمسية والرياح، خاصة مع أزمة الطاقة المستمرة"
                        : "Significant opportunities in solar and wind, especially with ongoing energy crisis"}
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold mb-2">{isArabic ? "الاتصالات والتكنولوجيا" : "Telecom & Technology"}</h4>
                    <p className="text-sm text-muted-foreground">
                      {isArabic
                        ? "نمو في الخدمات الرقمية والتجارة الإلكترونية رغم الصراع"
                        : "Growth in digital services and e-commerce despite conflict"}
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold mb-2">{isArabic ? "إعادة الإعمار" : "Reconstruction"}</h4>
                    <p className="text-sm text-muted-foreground">
                      {isArabic
                        ? "احتياجات ضخمة تقدر بـ 50+ مليار دولار لإعادة البناء"
                        : "Massive needs estimated at $50+ billion for rebuilding"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "التحديات الرئيسية" : "Key Challenges"}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>{isArabic ? "الصراع المستمر وانعدام الأمن" : "Ongoing conflict and insecurity"}</li>
                  <li>{isArabic ? "تجزئة السلطة والازدواجية المؤسسية" : "Fragmented authority and institutional duplication"}</li>
                  <li>{isArabic ? "انهيار البنية التحتية" : "Infrastructure collapse"}</li>
                  <li>{isArabic ? "نقص السيولة وأزمة العملة" : "Liquidity shortage and currency crisis"}</li>
                  <li>{isArabic ? "عدم اليقين التنظيمي" : "Regulatory uncertainty"}</li>
                  <li>{isArabic ? "الفساد وضعف الحوكمة" : "Corruption and weak governance"}</li>
                  <li>{isArabic ? "العقوبات الدولية" : "International sanctions"}</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "الفرص الاستثمارية" : "Investment Opportunities"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">{isArabic ? "إعادة الإعمار" : "Reconstruction"}</h4>
                    <p className="text-sm text-green-800">
                      {isArabic
                        ? "احتياجات ضخمة في البنية التحتية، الإسكان، والخدمات الأساسية"
                        : "Massive needs in infrastructure, housing, and basic services"}
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">{isArabic ? "الطاقة المتجددة" : "Renewable Energy"}</h4>
                    <p className="text-sm text-blue-800">
                      {isArabic
                        ? "إمكانات هائلة في الطاقة الشمسية والرياح"
                        : "Huge potential in solar and wind energy"}
                    </p>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">{isArabic ? "التكنولوجيا الرقمية" : "Digital Technology"}</h4>
                    <p className="text-sm text-purple-800">
                      {isArabic
                        ? "نمو في الخدمات المالية الرقمية والتجارة الإلكترونية"
                        : "Growth in digital financial services and e-commerce"}
                    </p>
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
                      <li>{isArabic ? "توحيد الإطار التنظيمي" : "Unify regulatory framework"}</li>
                      <li>{isArabic ? "تحسين مناخ الأعمال" : "Improve business climate"}</li>
                      <li>{isArabic ? "مكافحة الفساد" : "Combat corruption"}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{isArabic ? "للمانحين الدوليين" : "For International Donors"}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>{isArabic ? "دعم القطاع الخاص" : "Support private sector"}</li>
                      <li>{isArabic ? "تمويل المشاريع الصغيرة والمتوسطة" : "Finance SMEs"}</li>
                      <li>{isArabic ? "ضمانات الاستثمار" : "Investment guarantees"}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{isArabic ? "للمستثمرين" : "For Investors"}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>{isArabic ? "التركيز على القطاعات ذات الإمكانات العالية" : "Focus on high-potential sectors"}</li>
                      <li>{isArabic ? "إدارة المخاطر بعناية" : "Careful risk management"}</li>
                      <li>{isArabic ? "الشراكة مع الفاعلين المحليين" : "Partner with local actors"}</li>
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
