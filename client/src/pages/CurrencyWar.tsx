import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Banknote, Building2, TrendingDown, ArrowLeftRight } from "lucide-react";

export default function CurrencyWar() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Badge variant="outline" className="mb-4 bg-white/10 border-white/30 text-white">
            {isArabic ? "تحليل النظام المالي" : "Financial System Analysis"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isArabic 
              ? "حرب العملة والنظام المصرفي المزدوج" 
              : "The Currency War and Dual Banking System"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {isArabic
              ? "كيف تحول البنك المركزي الواحد إلى نظامين ماليين متنافسين يستخدمان العملة كسلاح"
              : "How One Central Bank Became Two Competing Financial Systems Using Currency as a Weapon"}
          </p>
        </div>
      </div>

      {/* Dual System Comparison */}
      <div className="container mx-auto px-4 -mt-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Aden System */}
          <Card className="bg-white shadow-lg border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">
                  {isArabic ? "نظام عدن" : "Aden System"}
                </CardTitle>
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <Badge className="bg-blue-600 w-fit">
                {isArabic ? "الحكومة المعترف بها دولياً" : "Internationally Recognized Government"}
              </Badge>
            </CardHeader>
            <CardContent dir={isArabic ? "rtl" : "ltr"}>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {isArabic ? "البنك المركزي" : "Central Bank"}
                  </h4>
                  <p className="text-gray-600">
                    {isArabic
                      ? "البنك المركزي في عدن - يطبع أوراقاً جديدة ويمارس سياسات تعويم"
                      : "CBY-Aden - Prints new banknotes and practices floating policies"}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {isArabic ? "العملة" : "Currency"}
                  </h4>
                  <p className="text-gray-600">
                    {isArabic
                      ? "ريال عدن الجديد (مطبوع منذ 2016)"
                      : "New Aden Rial (printed since 2016)"}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {isArabic ? "سعر الصرف (2025)" : "Exchange Rate (2025)"}
                  </h4>
                  <p className="text-2xl font-bold text-blue-600">
                    1,600-1,800 {isArabic ? "ريال/$" : "YR/$"}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {isArabic ? "مصادر التمويل" : "Funding Sources"}
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>{isArabic ? "ودائع ومنح سعودية" : "Saudi deposits and grants"}</li>
                    <li>{isArabic ? "عائدات النفط (متقطعة)" : "Oil revenues (intermittent)"}</li>
                    <li>{isArabic ? "مساعدات دولية" : "International aid"}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {isArabic ? "الأدوات" : "Tools"}
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>{isArabic ? "مزادات العملة الصعبة" : "FX auctions"}</li>
                    <li>{isArabic ? "لجنة تنظيم الاستيراد" : "Import regulation committee"}</li>
                    <li>{isArabic ? "شبكة تحويل موحدة" : "Unified transfer network"}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sana'a System */}
          <Card className="bg-white shadow-lg border-t-4 border-red-600">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">
                  {isArabic ? "نظام صنعاء" : "Sana'a System"}
                </CardTitle>
                <Building2 className="h-8 w-8 text-red-600" />
              </div>
              <Badge className="bg-red-600 w-fit">
                {isArabic ? "سلطة الأمر الواقع" : "De Facto Authority"}
              </Badge>
            </CardHeader>
            <CardContent dir={isArabic ? "rtl" : "ltr"}>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {isArabic ? "البنك المركزي" : "Central Bank"}
                  </h4>
                  <p className="text-gray-600">
                    {isArabic
                      ? "فرع البنك المركزي في صنعاء - يحظر العملة الجديدة"
                      : "CBY-Sana'a Branch - Bans new currency"}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {isArabic ? "العملة" : "Currency"}
                  </h4>
                  <p className="text-gray-600">
                    {isArabic
                      ? "ريال صنعاء القديم + الريال الإلكتروني"
                      : "Old Sana'a Rial + E-Rial"}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {isArabic ? "سعر الصرف (رسمي)" : "Exchange Rate (official)"}
                  </h4>
                  <p className="text-2xl font-bold text-red-600">
                    ~590 {isArabic ? "ريال/$" : "YR/$"}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {isArabic ? "(السوق السوداء أعلى)" : "(Black market higher)"}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {isArabic ? "مصادر التمويل" : "Funding Sources"}
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>{isArabic ? "جمارك الموانئ الشمالية" : "Northern ports customs"}</li>
                    <li>{isArabic ? "ضرائب محلية" : "Local taxes"}</li>
                    <li>{isArabic ? "اقتصاد غير رسمي" : "Informal economy"}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {isArabic ? "الأدوات" : "Tools"}
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>{isArabic ? "حظر العملة الجديدة" : "New currency ban"}</li>
                    <li>{isArabic ? "الريال الإلكتروني" : "E-Rial system"}</li>
                    <li>{isArabic ? "قسائم غذائية" : "Food vouchers"}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* The Split */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                {isArabic ? "الانقسام: سبتمبر 2016" : "The Split: September 2016"}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none" dir={isArabic ? "rtl" : "ltr"}>
              {isArabic ? (
                <>
                  <p className="text-gray-700 leading-relaxed">
                    في سبتمبر 2016 نُقل المقر الرئيسي للبنك المركزي من صنعاء إلى عدن. عملياً ظهر بنك مركزي في عدن مدعوم بشرعية دولية لكنه فقير بالاحتياطيات والكوادر، مقابل فرع صنعاء الذي يملك المؤسسة والكوادر وشبكة البنوك التجارية لكنه بلا اعتراف دولي ولا وصول منظّم للعملة الصعبة.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    توقفت رواتب معظم موظفي الدولة، وبدأ الريال يفقد قيمته بسرعة، ومُهّد الطريق لـ:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mr-4">
                    <li>جهازين نقديين متنافسين</li>
                    <li>سعرين للصرف</li>
                    <li>مجال واسع للمضاربة والفساد</li>
                  </ul>
                </>
              ) : (
                <>
                  <p className="text-gray-700 leading-relaxed">
                    In September 2016, President Hadi ordered the CBY's headquarters moved from Sana'a to Aden, formalizing a bifurcation of monetary control. The Sana'a branch remained in the north (Houthi zones), and the Aden branch (internationally recognized) was left with few reserves or staff.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The rial immediately began tumbling. By early 2017, the official peg of YR250/$ had broken, and in Aden one US$ cost ~YR370 on the black market. This split created:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Two rival banks incapable of mutual stabilization</li>
                    <li>Two exchange rates</li>
                    <li>Wide scope for speculation and corruption</li>
                  </ul>
                </>
              )}
            </CardContent>
          </Card>

          {/* Currency Ban 2019 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Banknote className="h-6 w-6 text-red-600" />
                {isArabic ? "حظر العملة: ديسمبر 2019" : "Currency Ban: December 2019"}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none" dir={isArabic ? "rtl" : "ltr"}>
              {isArabic ? (
                <>
                  <p className="text-gray-700 leading-relaxed">
                    في نهاية 2019 أعلنت سلطات صنعاء حظر تداول الأوراق النقدية التي طبعها البنك المركزي في عدن منذ 2016. أصبح لدينا عملياً:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                      <h4 className="font-bold text-blue-900 mb-2">ريال عدن الجديد</h4>
                      <p className="text-blue-700">المتضخم والمتداول في الجنوب</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                      <h4 className="font-bold text-red-900 mb-2">ريال صنعاء القديم</h4>
                      <p className="text-red-700">النادر نسبياً والمتداول في الشمال</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    ترتبت على ذلك آثار مركّبة: انقسم سوق الصرف إلى منطقتين بسعرين مختلفين، ظهرت سوق سوداء لتبادل الأوراق القديمة والجديدة، ارتفعت رسوم التحويل بين الشمال والجنوب إلى مستويات غير مسبوقة، وتعمق الشعور لدى الناس بأن البلد لم يعد وحدة اقتصادية واحدة.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-gray-700 leading-relaxed">
                    In December 2019, the Houthi authorities in Sana'a banned all new "Aden-printed" banknotes, declaring them invalid in the north. They also introduced a digital "e-Rial" and later minted Houthi coins. This cemented a two-currency reality.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                      <h4 className="font-bold text-blue-900 mb-2">New Aden Rial</h4>
                      <p className="text-blue-700">Hyperinflated, traded in the south</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                      <h4 className="font-bold text-red-900 mb-2">Old Sana'a Rial</h4>
                      <p className="text-red-700">Relatively scarce, traded in the north</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Consequently, Aden-area rials plummeted into hyperinflation (trading ~YR642/$ by January 2020) while the old rial in Houthi areas remained around YR590/$. Citizens in the south hoarded ever-new rials, driving food-basket costs up 400-700%.
                  </p>
                </>
              )}
            </CardContent>
          </Card>

          {/* Consequences */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <TrendingDown className="h-6 w-6 text-orange-600" />
                {isArabic ? "النتيجة" : "The Result"}
              </CardTitle>
            </CardHeader>
            <CardContent dir={isArabic ? "rtl" : "ltr"}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {isArabic ? "سعران فعليان للصرف" : "Two Effective Exchange Rates"}
                    </h4>
                    <p className="text-gray-600">
                      {isArabic
                        ? "سعر في صنعاء (~590 ريال/$) وسعر في عدن (1,600-1,800 ريال/$)"
                        : "One in Sana'a (~590 YR/$) and one in Aden (1,600-1,800 YR/$)"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {isArabic ? "اقتصادان نقديان متداخلان" : "Two Intertwined Monetary Economies"}
                    </h4>
                    <p className="text-gray-600">
                      {isArabic
                        ? "يتداخلان عبر شبكات الصرافة والحوالة غير الرسمية"
                        : "Intertwined through informal exchange and remittance networks"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {isArabic ? "تشوهات عميقة في الأسعار" : "Deep Price Distortions"}
                    </h4>
                    <p className="text-gray-600">
                      {isArabic
                        ? "بين الشمال والجنوب، مما يؤثر على تكلفة المعيشة والتجارة"
                        : "Between north and south, affecting living costs and trade"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {isArabic ? "فرص تحكيم واسعة" : "Wide Arbitrage Opportunities"}
                    </h4>
                    <p className="text-gray-600">
                      {isArabic
                        ? "للمضاربين والصرافين، مما يثري البعض ويفقر الأغلبية"
                        : "For speculators and money changers, enriching some while impoverishing the majority"}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 2023-2024 Reforms */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <ArrowLeftRight className="h-6 w-6 text-green-600" />
                {isArabic ? "إصلاحات 2023-2024" : "2023-2024 Reforms"}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none" dir={isArabic ? "rtl" : "ltr"}>
              {isArabic ? (
                <>
                  <p className="text-gray-700 leading-relaxed">
                    أدركت الحكومة ومجلس القيادة الرئاسي أن استمرار الانهيار النقدي يعني انهياراً سياسياً تاماً. من هنا جاءت حزمة خطوات أبرزها:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mr-4">
                    <li>إنشاء لجنة وطنية لتنظيم الاستيراد وربط تمويل الواردات بآلية مزادات للعملة الصعبة</li>
                    <li>إطلاق شبكة تحويل موحدة بين شركات الصرافة (UNMoney)</li>
                    <li>إلزام البنوك بنقل مراكزها الرئيسية إلى عدن، وسحب تراخيص بعض البنوك التي رفضت</li>
                    <li>تفاهمات جديدة مع السعودية للحصول على دعم مالي إضافي</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    مع هذه الإجراءات، ومع دفعات جديدة من الدعم الخليجي، استعاد الريال في مناطق الحكومة جزءاً معتداً به من قيمته (~40% تحسن) وانخفضت أسعار السلة الغذائية الأساسية بنسب ملحوظة.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-gray-700 leading-relaxed">
                    In 2023-2024, the Aden-based CBY took bold steps to reclaim control:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Consolidated money transfer networks under a Unified Money Transfer Network (UNMoney) from early 2024</li>
                    <li>Revoked licenses of six major Sana'a-headquartered banks that had not relocated to Aden</li>
                    <li>Instituted new exchange controls and an import-financing committee</li>
                    <li>Secured renewed Saudi grants and deposits</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    By late 2024, with renewed Saudi grants and tightened FX controls, the rial in government areas had appreciated by ~40%, easing inflation. The IMF noted that inflation peaked at ~35% in mid-2025, then subsided after August reforms.
                  </p>
                </>
              )}
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
