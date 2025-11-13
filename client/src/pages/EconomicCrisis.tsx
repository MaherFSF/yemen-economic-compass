import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, DollarSign, Users, AlertTriangle } from "lucide-react";

export default function EconomicCrisis() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Badge variant="outline" className="mb-4 bg-white/10 border-white/30 text-white">
            {isArabic ? "تحليل معمق" : "In-Depth Analysis"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isArabic 
              ? "الأزمة الاقتصادية في اليمن (2015-2025)" 
              : "Yemen's Economic Crisis (2015-2025)"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {isArabic
              ? "عقد من التشظي النقدي والحرب الاقتصادية: قراءة إستراتيجية في إعادة تشكيل المركز المالي لليمن"
              : "A Decade of Monetary Fragmentation and Economic Warfare: Strategic Analysis of Yemen's Financial Restructuring"}
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="container mx-auto px-4 -mt-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingDown className="h-8 w-8 text-red-600" />
                <Badge variant="destructive">-50%</Badge>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {isArabic ? "انكماش الناتج المحلي" : "GDP Contraction"}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {isArabic ? "منذ 2015" : "Since 2015"}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="h-8 w-8 text-orange-600" />
                <Badge className="bg-orange-600">35%+</Badge>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {isArabic ? "معدل التضخم" : "Inflation Rate"}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {isArabic ? "في مناطق الحكومة" : "In IRG areas"}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-8 w-8 text-blue-600" />
                <Badge className="bg-blue-600">80%</Badge>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {isArabic ? "السكان تحت خط الفقر" : "Population in Poverty"}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {isArabic ? "21.6 مليون شخص" : "21.6 million people"}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
                <Badge className="bg-yellow-600">2</Badge>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {isArabic ? "أنظمة مالية متوازية" : "Parallel Financial Systems"}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {isArabic ? "صنعاء وعدن" : "Sana'a and Aden"}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">
                {isArabic ? "نظرة عامة" : "Overview"}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none" dir={isArabic ? "rtl" : "ltr"}>
              {isArabic ? (
                <>
                  <p className="text-gray-700 leading-relaxed">
                    بين 2015 و2025 لم يتعرض الاقتصاد اليمني لـ«أزمة عابرة»، بل لعملية إعادة تشكيل قسرية لمركز الثقل المالي في البلد. انهيار السلطة الموحدة انقلب سريعاً إلى وجود نظامين ماليين متوازيين:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mr-4">
                    <li>سلطة الأمر الواقع في صنعاء (أنصار الله)</li>
                    <li>والحكومة المعترف بها دولياً/مجلس القيادة الرئاسي في عدن والجنوب</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    لكل طرف بنك مركزي، ومنطقته النقدية، واستراتيجيته المالية الخاصة. الحرب العسكرية تحولت مبكراً إلى حرب اقتصادية: عائدات النفط جرى تعطيلها أو استخدامها كسلاح، الجمارك والضرائب أصبحت ساحات تنازع، والسياسات النقدية والمالية استُخدمت لإضعاف الخصم وليس لدعم المجتمع.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-gray-700 leading-relaxed">
                    Between 2015 and 2025, Yemen's economy has been upended by civil war, institutional fragmentation, and external pressures. The collapse of unified state authority left two parallel financial systems: the Houthi-led authorities (in Sana'a and the north) and the internationally-recognized government (IRG, now led by the Riyadh-backed Presidential Leadership Council) in the south.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Each side established its own central bank, currency and fiscal strategy. What began as a conventional conflict quickly morphed into an economic war: oil exports were seized or blockaded, customs and taxes were contested, and each camp weaponized monetary and fiscal policy.
                  </p>
                </>
              )}
            </CardContent>
          </Card>

          {/* Timeline Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">
                {isArabic ? "المسار الزمني للانهيار (2015-2025)" : "Timeline of Collapse (2015-2025)"}
              </CardTitle>
            </CardHeader>
            <CardContent dir={isArabic ? "rtl" : "ltr"}>
              <div className="space-y-6">
                {/* 2015 */}
                <div className="border-r-4 border-red-600 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="destructive">2015</Badge>
                    <h3 className="text-xl font-bold">
                      {isArabic ? "الحرب والحصار وبدايات الانهيار" : "War, Blockade, and Initial Collapse"}
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    {isArabic
                      ? "في مارس 2015، تدخّل التحالف بقيادة السعودية لإعادة حكومة هادي بعد سيطرة أنصار الله على صنعاء. تعطلت صادرات النفط والغاز، فُرض حصار بحري وجوي، وانقطعت الدولة عن معظم مواردها من العملة الصعبة."
                      : "In March 2015, a Saudi-led coalition intervened to restore President Hadi. Oil and gas production halted, imports ground to a standstill, and the Central Bank of Yemen lost access to reserves. Public sector salaries stopped, commodity prices exploded, and acute hunger spread."}
                  </p>
                </div>

                {/* 2016 */}
                <div className="border-r-4 border-orange-600 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-orange-600">2016</Badge>
                    <h3 className="text-xl font-bold">
                      {isArabic ? "انقسام البنك المركزي" : "Central Bank Split"}
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    {isArabic
                      ? "في سبتمبر 2016 نُقل المقر الرئيسي للبنك المركزي من صنعاء إلى عدن. ظهر بنك مركزي في عدن مدعوم بشرعية دولية لكنه فقير بالاحتياطيات، مقابل فرع صنعاء الذي يملك المؤسسة والكوادر لكنه بلا اعتراف دولي."
                      : "In September 2016, President Hadi ordered the CBY's headquarters moved from Sana'a to Aden, formalizing a bifurcation of monetary control. The rial immediately began tumbling, breaking the official peg of YR250/$."}
                  </p>
                </div>

                {/* 2017-2018 */}
                <div className="border-r-4 border-yellow-600 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-yellow-600">2017-2018</Badge>
                    <h3 className="text-xl font-bold">
                      {isArabic ? "تعويم الريال والوديعة السعودية" : "Currency Float and Saudi Deposit"}
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    {isArabic
                      ? "اتخذت الحكومة قرار تعويم الريال في 2017. وديعة سعودية بملياري دولار أدّت إلى كبح مؤقت لانهيار العملة، لكنها فتحت باباً واسعاً للمحسوبية وسوء الاستخدام."
                      : "The IRG floated the rial in August 2017. A Saudi $2 billion deposit briefly staved off a crash, recovering the rial to ~YR340/$ after peaking near YR1750. But the funds were mostly exhausted by 2020."}
                  </p>
                </div>

                {/* 2019-2020 */}
                <div className="border-r-4 border-purple-600 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-600">2019-2020</Badge>
                    <h3 className="text-xl font-bold">
                      {isArabic ? "حظر العملة الجديدة" : "New Currency Ban"}
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    {isArabic
                      ? "في نهاية 2019 أعلنت سلطات صنعاء حظر تداول الأوراق النقدية التي طبعها البنك المركزي في عدن. أصبح لدينا عملياً «ريال عدن» الجديد المتضخم، و«ريال صنعاء» القديم النادر."
                      : "In December 2019, the Houthi authorities in Sana'a banned all new 'Aden-printed' banknotes, declaring them invalid in the north. This cemented a two-currency reality, with Aden-area rials plummeting into hyperinflation."}
                  </p>
                </div>

                {/* 2020-2022 */}
                <div className="border-r-4 border-blue-600 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-600">2020-2022</Badge>
                    <h3 className="text-xl font-bold">
                      {isArabic ? "الحرب على الإيرادات" : "War on Revenues"}
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    {isArabic
                      ? "انتقلت المواجهة من الجبهات إلى ميدان الإيرادات. سيطر أنصار الله على معظم الموانئ الشمالية، بينما ركّزت الحكومة على عائدات النفط. بدأت الهجمات على منشآت النفط الجنوبية، فتعطّلت الصادرات عملياً منذ 2022."
                      : "The conflict migrated to the economy. Houthis seized northern ports and their customs, while the IRG focused on oil revenues. In April 2022, Houthis blockaded IRG oil export terminals with drones/missiles, starving the government of forex."}
                  </p>
                </div>

                {/* 2023-2024 */}
                <div className="border-r-4 border-green-600 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-green-600">2023-2024</Badge>
                    <h3 className="text-xl font-bold">
                      {isArabic ? "محاولات إعادة السيطرة" : "Attempts to Regain Control"}
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    {isArabic
                      ? "أدركت الحكومة أن استمرار الانهيار النقدي يعني انهياراً سياسياً. أنشأت لجنة وطنية لتنظيم الاستيراد، أطلقت شبكة تحويل موحدة، وألزمت البنوك بنقل مراكزها إلى عدن. مع دعم خليجي جديد، استعاد الريال جزءاً من قيمته."
                      : "The PLC took bold steps: consolidated money transfer networks, revoked licenses of Sana'a-headquartered banks, and instituted new exchange controls. With renewed Saudi grants, the rial in government areas appreciated by ~40%, easing inflation."}
                  </p>
                </div>

                {/* 2025 */}
                <div className="border-r-4 border-teal-600 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-teal-600">2025</Badge>
                    <h3 className="text-xl font-bold">
                      {isArabic ? "استقرار نسبي على أرضية هشّة" : "Relative Stabilization on Fragile Ground"}
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    {isArabic
                      ? "بحلول أواخر 2025، وصل الريال في مناطق الحكومة إلى استقرار ضعيف نسبيًا (1,600-1,800 ريال/$). لكن لم يحدث أي تقارب حقيقي بين النظامين النقديين. الانقسام المالي أصبح جزءاً من الواقع السياسي."
                      : "By November 2025, the southern rial stabilized at ~YR1,600-1,800/$. However, Yemen remains divided: the Houthis control Sana'a and the northwest, the IRG controls Aden/Marib and oil fields, and neither side can project power enough to end the stalemate."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                {isArabic ? "النتيجة خلال عقد واحد" : "The Result After One Decade"}
              </CardTitle>
            </CardHeader>
            <CardContent dir={isArabic ? "rtl" : "ltr"}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {isArabic ? "انكماش الناتج المحلي" : "GDP Contraction"}
                      </h4>
                      <p className="text-gray-600">
                        {isArabic 
                          ? "إلى ما يقارب نصف مستواه السابق للحرب"
                          : "To roughly half of pre-war levels"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {isArabic ? "تضخم مرتفع ومستمر" : "High and Persistent Inflation"}
                      </h4>
                      <p className="text-gray-600">
                        {isArabic 
                          ? "تجاوز 35% في مناطق الحكومة"
                          : "Exceeding 35% in IRG areas"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {isArabic ? "انهيار الإيرادات العامة" : "Collapse of Public Revenues"}
                      </h4>
                      <p className="text-gray-600">
                        {isArabic 
                          ? "شبه كامل مع اعتماد على المساعدات الخارجية"
                          : "Nearly complete, with dependence on external aid"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {isArabic ? "اعتماد مفرط" : "Excessive Dependence"}
                      </h4>
                      <p className="text-gray-600">
                        {isArabic 
                          ? "على المساعدات الدولية والتحويلات"
                          : "On international aid and remittances"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
