import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, Users, Package, AlertTriangle, Calendar, Target, Globe } from 'lucide-react';

export default function WFP() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-sky-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {/* WFP Logo */}
            <div className="mb-8">
              <img 
                src="/logos/wfp.svg" 
                alt="WFP Logo" 
                className="h-24 w-auto mx-auto filter brightness-0 invert opacity-90"
              />
            </div>
            
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Globe className="h-5 w-5 text-blue-200" />
              <span className="text-sm font-semibold">
                {isArabic ? 'أكبر عملية إنسانية في اليمن' : 'Largest Humanitarian Operation in Yemen'}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {isArabic ? 'برنامج الأغذية العالمي' : 'World Food Programme'}
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-4">
              {isArabic
                ? 'عملية إنقاذ الأرواح في مواجهة أسوأ أزمة غذائية في العالم'
                : 'Life-saving operations in the face of the world\'s worst food crisis'}
            </p>
            
            <p className="text-sm text-white/80">
              {isArabic ? 'التقرير الشامل 2020-2025' : 'Comprehensive Report 2020-2025'}
            </p>
          </div>
        </div>
      </section>

      {/* Critical Statistics Banner */}
      <section className="py-12 -mt-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white shadow-lg border-l-4 border-l-blue-600">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {isArabic ? 'المستفيدون 2023' : 'People Assisted 2023'}
                  </CardTitle>
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">15.3M</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {isArabic ? '47% من السكان' : '47% of population'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-l-4 border-l-red-600">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {isArabic ? 'انعدام الأمن الغذائي' : 'Food Insecure'}
                  </CardTitle>
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">19.5M</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {isArabic ? 'بحاجة للمساعدة 2025' : 'Need assistance 2025'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-l-4 border-l-amber-600">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {isArabic ? 'الميزانية 2023-2025' : 'Budget 2023-2025'}
                  </CardTitle>
                  <DollarSign className="h-5 w-5 text-amber-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-600">$8.56B</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {isArabic ? 'خطة استراتيجية مؤقتة' : 'Interim strategic plan'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-l-4 border-l-orange-600">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {isArabic ? 'فجوة التمويل 2023' : 'Funding Gap 2023'}
                  </CardTitle>
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600">$1.66B</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {isArabic ? 'أدى لتخفيض المساعدات' : 'Led to aid reductions'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Globe className="h-6 w-6 text-blue-600" />
                    {isArabic ? 'نظرة عامة على العمليات' : 'Operations Overview'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none space-y-4">
                  <p className={isArabic ? 'text-right' : ''}>
                    {isArabic
                      ? 'تمثل عمليات برنامج الأغذية العالمي في اليمن من 2020 إلى 2025 استجابة إنسانية ضخمة لإنقاذ الأرواح في مواجهة أسوأ أزمة غذائية في العالم. في عام 2021، كانت العملية الأكبر على مستوى العالم، حيث ساعدت 15.5 مليون شخص، بما في ذلك 3.4 مليون نازح داخلياً.'
                      : 'WFP operations in Yemen from 2020 to 2025 represent a massive, life-saving humanitarian response in the face of the world\'s worst food crisis. In 2021, it was WFP\'s largest operation worldwide, assisting 15.5 million people, including 3.4 million internally displaced persons (IDPs).'}
                  </p>
                  
                  <p className={isArabic ? 'text-right' : ''}>
                    {isArabic
                      ? 'يتم توجيه العمليات الحالية من خلال الخطة الاستراتيجية المؤقتة لليمن (2023-2025) المعتمدة بتكلفة إجمالية قدرها 8.56 مليار دولار أمريكي. تُبنى هذه الخطة على ثلاثة ركائز مترابطة: المساعدة المنقذة للحياة، وتدخلات التعافي والاستجابة الأولية للقضايا الهيكلية، والخدمات التمكينية.'
                      : 'Current operations are guided by the Yemen Interim Country Strategic Plan (2023–2025), approved with a total cost of USD 8.56 billion. This plan is built on three interlinked pillars: life-saving assistance, recovery interventions and initial response to structural issues, and enabling services.'}
                  </p>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-1">
                          {isArabic ? 'أزمة التمويل الحرجة' : 'Critical Funding Crisis'}
                        </h4>
                        <p className="text-sm text-amber-800">
                          {isArabic
                            ? 'واجه برنامج الأغذية العالمي فجوة تمويل قدرها 1.66 مليار دولار في عام 2023، مما أجبر الوكالة على تقليل كمية وتكرار المساعدات. أدى ذلك إلى توقف المساعدات الغذائية العامة في المناطق الخاضعة لسلطات صنعاء في نوفمبر 2023، مما أثر على 9.5 مليون شخص - أكبر توقف للمساعدات في تاريخ برنامج الأغذية العالمي البالغ 56 عاماً في اليمن.'
                            : 'WFP faced a $1.66 billion funding gap in 2023, forcing the agency to reduce the quantity and frequency of assistance. This led to the pause of General Food Assistance in Sana\'a-based authorities areas in November 2023, affecting 9.5 million people—the largest assistance pause in WFP\'s 56-year history in Yemen.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Food Assistance Programs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Package className="h-6 w-6 text-blue-600" />
                    {isArabic ? 'برامج المساعدات الغذائية' : 'Food Assistance Programs'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h3 className="font-semibold text-lg mb-2">
                        {isArabic ? 'المساعدات الغذائية العامة (GFA)' : 'General Food Assistance (GFA)'}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {isArabic
                          ? 'البرنامج الرئيسي الذي وصل إلى 13.77 مليون شخص في عام 2021، لكنه تأثر بشدة في عام 2024، حيث ساعد 7.2 مليون شخص فقط.'
                          : 'The primary program that reached 13.77 million people in 2021, but was severely impacted in 2024, assisting only 7.2 million people.'}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium text-blue-600">13.77M</div>
                          <div className="text-xs text-muted-foreground">{isArabic ? 'مستفيدون 2021' : 'Beneficiaries 2021'}</div>
                        </div>
                        <div>
                          <div className="font-medium text-orange-600">7.2M</div>
                          <div className="text-xs text-muted-foreground">{isArabic ? 'مستفيدون 2024' : 'Beneficiaries 2024'}</div>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-600 pl-4">
                      <h3 className="font-semibold text-lg mb-2">
                        {isArabic ? 'علاج سوء التغذية' : 'Malnutrition Treatment'}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {isArabic
                          ? 'وصل البرنامج باستمرار إلى عدد كبير من الأشخاص، مع 1.76 مليون مستفيد في عام 2023 و 1.5 مليون في عام 2024.'
                          : 'The program consistently reached a large number of people, with 1.76 million beneficiaries in 2023 and 1.5 million in 2024.'}
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="font-medium text-green-600">1.47M</div>
                          <div className="text-xs text-muted-foreground">2020</div>
                        </div>
                        <div>
                          <div className="font-medium text-green-600">1.76M</div>
                          <div className="text-xs text-muted-foreground">2023</div>
                        </div>
                        <div>
                          <div className="font-medium text-green-600">1.5M</div>
                          <div className="text-xs text-muted-foreground">2024</div>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-purple-600 pl-4">
                      <h3 className="font-semibold text-lg mb-2">
                        {isArabic ? 'برامج التغذية المدرسية' : 'School-based Programmes'}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {isArabic
                          ? 'وصل البرنامج إلى 1.98 مليون طفل في عام 2023 و 1.5 مليون في عام 2024.'
                          : 'The program reached 1.98 million children in 2023 and 1.5 million in 2024.'}
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="font-medium text-purple-600">1.7M</div>
                          <div className="text-xs text-muted-foreground">2020</div>
                        </div>
                        <div>
                          <div className="font-medium text-purple-600">1.98M</div>
                          <div className="text-xs text-muted-foreground">2023</div>
                        </div>
                        <div>
                          <div className="font-medium text-purple-600">1.5M</div>
                          <div className="text-xs text-muted-foreground">2024</div>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-teal-600 pl-4">
                      <h3 className="font-semibold text-lg mb-2">
                        {isArabic ? 'التحويلات النقدية (CBT)' : 'Cash-Based Transfers (CBT)'}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {isArabic
                          ? 'تقلب استخدام التحويلات النقدية، مع قيمة فعلية قدرها 369.2 مليون دولار في عام 2021، انخفضت إلى 40.9 مليون دولار في عام 2024.'
                          : 'The use of Cash-Based Transfers fluctuated, with an actual value of $369.2 million in 2021, decreasing to $40.9 million in 2024.'}
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="font-medium text-teal-600">$369M</div>
                          <div className="text-xs text-muted-foreground">2021</div>
                        </div>
                        <div>
                          <div className="font-medium text-teal-600">$83M</div>
                          <div className="text-xs text-muted-foreground">2023</div>
                        </div>
                        <div>
                          <div className="font-medium text-orange-600">$41M</div>
                          <div className="text-xs text-muted-foreground">2024</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Food Distribution Chart */}
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-sm">
                      {isArabic ? 'توزيع الغذاء (بالأطنان المترية)' : 'Food Distribution (Metric Tons)'}
                    </h4>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>2021</span>
                          <span className="font-medium">1,150,849 MT</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>2022</span>
                          <span className="font-medium">760,073 MT</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '66%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>2023</span>
                          <span className="font-medium">701,547 MT</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-400 h-2 rounded-full" style={{ width: '61%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>2024</span>
                          <span className="font-medium text-red-600">135,683 MT</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Operational Challenges */}
              <Card className="border-red-200 bg-red-50/30">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 text-red-900">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                    {isArabic ? 'التحديات التشغيلية' : 'Operational Challenges'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-red-900">
                          {isArabic ? 'نقص التمويل الحاد' : 'Severe Funding Shortfalls'}
                        </h4>
                        <p className="text-sm text-red-800">
                          {isArabic
                            ? 'فجوة تمويل قدرها 1.66 مليار دولار في عام 2023 أجبرت على تخفيض بنسبة 23% في الموارد المتاحة مقارنة بعام 2022. من المتوقع أن يشهد عام 2025 انخفاضاً بنسبة 40% في التمويل العالمي.'
                            : 'A $1.66 billion funding gap in 2023 forced a 23% reduction in available resources compared to 2022. 2025 is expected to see a 40% reduction in global funding.'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-red-900">
                          {isArabic ? 'قيود البنية التحتية' : 'Infrastructure Constraints'}
                        </h4>
                        <p className="text-sm text-red-800">
                          {isArabic
                            ? 'أدى تأثير الصراع على البنية التحتية إلى إغلاق الطرق وإغلاق الموانئ والمطارات الرئيسية، مما قيد بشدة حركة المساعدات الإنسانية. نقص حاد في مرافق التخزين المبردة.'
                            : 'Conflict\'s impact on infrastructure led to road closures and shutdown of key ports and airports, severely restricting humanitarian aid movement. Critical lack of temperature-controlled warehousing facilities.'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-red-900">
                          {isArabic ? 'قيود الوصول الإنساني' : 'Humanitarian Access Constraints'}
                        </h4>
                        <p className="text-sm text-red-800">
                          {isArabic
                            ? 'إجراءات إدارية صارمة، وانعدام الأمن، وقيود الحركة بسبب وجود مخلفات حربية متفجرة. توقف المساعدات في مناطق سلطات صنعاء منذ أبريل 2025.'
                            : 'Stringent administrative procedures, insecurity, and movement restrictions due to explosive remnants of war. Assistance halt in Sana\'a-based Authority areas since April 2025.'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-red-900">
                          {isArabic ? 'أزمة سوء التغذية' : 'Malnutrition Crisis'}
                        </h4>
                        <p className="text-sm text-red-800">
                          {isArabic
                            ? 'من المتوقع أن يصل 1.7 مليون طفل دون سن الخامسة إلى سوء التغذية الحاد بحلول نهاية عام 2024. أربع مناطق تتجاوز معدلات سوء التغذية الحاد 30%.'
                            : '1.7 million children under 5 projected to be acutely malnourished by end of 2024. Four districts exceed 30% acute malnutrition rates.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Partnerships */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    {isArabic ? 'الشراكات والتعاون' : 'Partnerships & Collaboration'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {isArabic
                      ? 'يحتفظ برنامج الأغذية العالمي بشبكة قوية ومتنوعة من الشراكات، مع تركيز واضح على تعزيز مبادرات التوطين.'
                      : 'WFP maintains a robust and diverse network of partnerships, with a clear focus on strengthening localization initiatives.'}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">34</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {isArabic ? 'شريك تنفيذي 2024' : 'Cooperating Partners 2024'}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600">19</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {isArabic ? 'منظمة محلية' : 'National NGOs'}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600">11</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {isArabic ? 'منظمة دولية' : 'International NGOs'}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <div className="text-3xl font-bold text-amber-600">130</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {isArabic ? 'كيان مدعوم بـ UNHAS' : 'Entities Supported by UNHAS'}
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">
                      {isArabic ? 'الشركاء الرئيسيون' : 'Key Partners'}
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• {isArabic ? 'منظمة الأغذية والزراعة (FAO)' : 'Food and Agriculture Organization (FAO)'}</li>
                      <li>• {isArabic ? 'منظمة الأمم المتحدة للطفولة (UNICEF)' : 'United Nations Children\'s Fund (UNICEF)'}</li>
                      <li>• {isArabic ? 'منظمة الصحة العالمية (WHO)' : 'World Health Organization (WHO)'}</li>
                      <li>• {isArabic ? '19 منظمة غير حكومية وطنية' : '19 National Non-Governmental Organizations'}</li>
                      <li>• {isArabic ? '11 منظمة غير حكومية دولية' : '11 International Non-Governmental Organizations'}</li>
                      <li>• {isArabic ? '3 شركاء من السلطات المحلية' : '3 Local Authority Partners'}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Quick Facts & Timeline */}
            <div className="space-y-6">
              {/* Quick Facts */}
              <Card className="bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    {isArabic ? 'حقائق سريعة' : 'Quick Facts'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <div className="font-semibold text-blue-700 mb-1">
                      {isArabic ? 'نوع المنظمة' : 'Organization Type'}
                    </div>
                    <div className="text-muted-foreground">
                      {isArabic ? 'وكالة أممية متخصصة' : 'UN Specialized Agency'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-blue-700 mb-1">
                      {isArabic ? 'التواجد في اليمن' : 'Presence in Yemen'}
                    </div>
                    <div className="text-muted-foreground">
                      {isArabic ? '56+ عاماً من العمليات' : '56+ years of operations'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-blue-700 mb-1">
                      {isArabic ? 'نطاق العمليات' : 'Operations Scope'}
                    </div>
                    <div className="text-muted-foreground">
                      {isArabic ? 'أكبر عملية إنسانية في اليمن' : 'Largest humanitarian operation in Yemen'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-blue-700 mb-1">
                      {isArabic ? 'التركيز الجغرافي' : 'Geographic Focus'}
                    </div>
                    <div className="text-muted-foreground">
                      {isArabic ? 'جميع محافظات اليمن' : 'All Yemeni governorates'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-blue-700 mb-1">
                      {isArabic ? 'البرامج الرئيسية' : 'Main Programs'}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {isArabic
                        ? 'المساعدات الغذائية العامة، علاج سوء التغذية، الوقاية من سوء التغذية، التغذية المدرسية، التحويلات النقدية'
                        : 'General Food Assistance, Malnutrition Treatment, Malnutrition Prevention, School Feeding, Cash-Based Transfers'}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Strategic Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    {isArabic ? 'الجدول الزمني الاستراتيجي' : 'Strategic Timeline'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="border-l-4 border-blue-600 pl-3">
                    <div className="font-semibold text-blue-700">2019-2022</div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic ? 'الخطة الاستراتيجية المؤقتة الأولى' : 'First Interim Country Strategic Plan'}
                    </div>
                    <div className="text-xs font-medium mt-1">$3.34B</div>
                  </div>

                  <div className="border-l-4 border-green-600 pl-3">
                    <div className="font-semibold text-green-700">2021</div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic ? 'أكبر عملية عالمية' : 'Largest operation worldwide'}
                    </div>
                    <div className="text-xs font-medium mt-1">15.5M {isArabic ? 'مستفيد' : 'assisted'}</div>
                  </div>

                  <div className="border-l-4 border-amber-600 pl-3">
                    <div className="font-semibold text-amber-700">2023-2025</div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic ? 'الخطة الاستراتيجية المؤقتة الحالية' : 'Current Interim Country Strategic Plan'}
                    </div>
                    <div className="text-xs font-medium mt-1">$8.56B</div>
                  </div>

                  <div className="border-l-4 border-red-600 pl-3">
                    <div className="font-semibold text-red-700">Nov 2023</div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic ? 'توقف المساعدات الغذائية العامة' : 'GFA pause in SBA areas'}
                    </div>
                    <div className="text-xs font-medium mt-1">9.5M {isArabic ? 'متأثر' : 'affected'}</div>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-3">
                    <div className="font-semibold text-purple-700">2026-2028</div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic ? 'الخطة الاستراتيجية القادمة' : 'Next Interim Strategic Plan'}
                    </div>
                    <div className="text-xs font-medium mt-1">$2.45B {isArabic ? '(مخطط)' : '(planned)'}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Future Outlook */}
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    {isArabic ? 'النظرة المستقبلية 2026-2028' : 'Future Outlook 2026-2028'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold text-purple-700 mb-1">
                      {isArabic ? 'الميزانية المخططة' : 'Planned Budget'}
                    </div>
                    <div className="text-2xl font-bold text-purple-600">$2.45B</div>
                    <div className="text-xs text-muted-foreground">{isArabic ? '2026-2028' : '2026-2028'}</div>
                  </div>

                  <div>
                    <div className="font-semibold text-purple-700 mb-1">
                      {isArabic ? 'الهدف الأولي' : 'Initial Target'}
                    </div>
                    <div className="text-2xl font-bold text-purple-600">2M</div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic ? 'مستفيد من المساعدات الغذائية المستهدفة' : 'Targeted food assistance beneficiaries'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-purple-700 mb-1">
                      {isArabic ? 'إمكانية التوسع' : 'Scale-up Capacity'}
                    </div>
                    <div className="text-2xl font-bold text-purple-600">5M</div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic ? 'مع تمويل كافٍ' : 'With adequate funding'}
                    </div>
                  </div>

                  <div className="bg-white/50 p-3 rounded-lg">
                    <div className="font-semibold text-purple-900 mb-2 text-xs">
                      {isArabic ? 'الأهداف الاستراتيجية' : 'Strategic Outcomes'}
                    </div>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li>• {isArabic ? 'تلبية الاحتياجات الغذائية الفورية' : 'Meet immediate food needs'}</li>
                      <li>• {isArabic ? 'تعزيز الوصول إلى التعليم والتغذية' : 'Enhance education & nutrition access'}</li>
                      <li>• {isArabic ? 'تعزيز أنظمة غذائية أكثر مرونة' : 'Foster resilient food systems'}</li>
                      <li>• {isArabic ? 'تمكين الجهات الإنسانية' : 'Enable humanitarian actors'}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Data Sources */}
              <Card className="bg-gradient-to-br from-slate-50 to-gray-50 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-sm text-slate-700">
                    {isArabic ? 'المصادر الرسمية' : 'Official Sources'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground space-y-2">
                  <p>• WFP Yemen Interim Country Strategic Plans (2019-2022, 2023-2025, 2026-2028)</p>
                  <p>• WFP Yemen Annual Country Reports (2020-2024)</p>
                  <p>• WFP Yemen External Situation Reports (2025)</p>
                  <p>• Corporate Emergency Evaluation (2019-2024)</p>
                  <p>• UN OCHA Yemen Humanitarian Needs Overview</p>
                  <p>• Global Report on Food Crises 2025</p>
                  <p className="text-xs text-amber-700 mt-3">
                    {isArabic
                      ? 'جميع البيانات مستمدة من مصادر رسمية لبرنامج الأغذية العالمي والأمم المتحدة'
                      : 'All data sourced from official WFP and UN publications'}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
