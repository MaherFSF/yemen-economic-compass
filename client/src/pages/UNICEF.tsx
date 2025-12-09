import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Heart, Users, GraduationCap, Droplet, Shield, AlertTriangle, Calendar, Target, TrendingUp } from 'lucide-react';

export default function UNICEF() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {/* UNICEF Logo */}
            <div className="mb-8">
              <img 
                src="/logos/unicef.svg" 
                alt="UNICEF Logo" 
                className="h-20 w-auto mx-auto filter brightness-0 invert opacity-90"
              />
            </div>
            
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Heart className="h-5 w-5 text-cyan-200" />
              <span className="text-sm font-semibold">
                {isArabic ? 'من أجل كل طفل' : 'For Every Child'}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {isArabic ? 'منظمة الأمم المتحدة للطفولة' : 'United Nations Children\'s Fund'}
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-4">
              {isArabic
                ? 'حماية حقوق الأطفال وتوفير الخدمات الأساسية في أسوأ أزمة إنسانية في العالم'
                : 'Protecting children\'s rights and delivering essential services in the world\'s worst humanitarian crisis'}
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
            <Card className="bg-white shadow-lg border-l-4 border-l-cyan-600">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {isArabic ? 'الأطفال المحتاجون 2024' : 'Children in Need 2024'}
                  </CardTitle>
                  <Users className="h-5 w-5 text-cyan-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">9.8M</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {isArabic ? 'من أصل 18.2 مليون شخص' : 'Out of 18.2M people'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-l-4 border-l-red-600">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {isArabic ? 'نداء 2025' : '2025 HAC Appeal'}
                  </CardTitle>
                  <DollarSign className="h-5 w-5 text-red-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">$212M</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {isArabic ? 'لمساعدة 8 مليون شخص' : 'To assist 8M people'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-l-4 border-l-amber-600">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {isArabic ? 'فجوة التمويل 2022' : 'Funding Gap 2022'}
                  </CardTitle>
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-600">$353M</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {isArabic ? 'أكبر فجوة مسجلة' : 'Largest recorded gap'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-l-4 border-l-green-600">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {isArabic ? 'المستفيدون 2022' : 'People Reached 2022'}
                  </CardTitle>
                  <Heart className="h-5 w-5 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">6.6M</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {isArabic ? 'بما في ذلك 3 ملايين طفل' : 'Including 3M children'}
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
                    <Heart className="h-6 w-6 text-cyan-600" />
                    {isArabic ? 'نظرة عامة على العمليات' : 'Operations Overview'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none space-y-4">
                  <p className={isArabic ? 'text-right' : ''}>
                    {isArabic
                      ? 'تمثل عمليات اليونيسف في اليمن من 2020 إلى 2025 استجابة إنسانية شاملة متعددة القطاعات لحماية حقوق الأطفال وتوفير الخدمات الأساسية في مواجهة أسوأ أزمة إنسانية في العالم. في عام 2024، احتاج 18.2 مليون شخص، بما في ذلك 9.8 مليون طفل، إلى المساعدة الإنسانية والحماية.'
                      : 'UNICEF operations in Yemen from 2020 to 2025 represent a comprehensive multi-sectoral humanitarian response to protect children\'s rights and deliver essential services in the face of the world\'s worst humanitarian crisis. In 2024, 18.2 million people, including 9.8 million children, required humanitarian assistance and protection.'}
                  </p>
                  
                  <p className={isArabic ? 'text-right' : ''}>
                    {isArabic
                      ? 'تسترشد العمليات الحالية بوثيقة برنامج اليمن (2023-2024) بميزانية إرشادية إجمالية قدرها 812.1 مليون دولار أمريكي. تُبنى هذه الاستراتيجية على خمسة مكونات برنامجية رئيسية: الصحة، والتغذية، والتعليم، وحماية الطفل، والمياه والصرف الصحي والنظافة (WASH)، مع التركيز المزدوج على الاستجابة الإنسانية وتعزيز النظام.'
                      : 'Current operations are guided by the Yemen Country Programme Document (2023–2024) with a total indicative budget of USD 812.1 million. This strategy is built on five main programme components: Health, Nutrition, Education, Child Protection, and Water, Sanitation and Hygiene (WASH), with a dual focus on humanitarian response and system strengthening.'}
                  </p>

                  <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-red-900 mb-1">
                          {isArabic ? 'أزمة التمويل المستمرة' : 'Persistent Funding Crisis'}
                        </h4>
                        <p className="text-sm text-red-800">
                          {isArabic
                            ? 'واجهت اليونيسف فجوات تمويل مستمرة وكبيرة: 353.4 مليون دولار في عام 2022 (أكبر فجوة مسجلة)، و316.9 مليون دولار في عام 2023، و59.95 مليون دولار في عام 2024. يهدد نقص التمويل المتوقع والمرن استمرارية الخدمات الرئيسية ويعرض حياة الأطفال للخطر.'
                            : 'UNICEF has faced persistent and massive funding gaps: $353.4 million in 2022 (largest recorded gap), $316.9 million in 2023, and $59.95 million in 2024. The lack of predictable and flexible funding threatens the continuity of key services and puts children\'s lives at risk.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Programme Components */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Target className="h-6 w-6 text-cyan-600" />
                    {isArabic ? 'المكونات البرنامجية' : 'Programme Components'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Health & Nutrition */}
                  <div className="border-l-4 border-red-600 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="h-5 w-5 text-red-600" />
                      <h3 className="font-semibold text-lg">
                        {isArabic ? 'الصحة والتغذية' : 'Health & Nutrition'}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {isArabic
                        ? 'دعم 3,127 مرفق رعاية صحية أولية (63% من جميع المرافق في اليمن)، وعلاج أكثر من 315,000 طفل من سوء التغذية الحاد الوخيم، وتطعيم 1.15 مليون طفل ضد الحصبة والحصبة الألمانية في عام 2023.'
                        : 'Supporting 3,127 Primary Health Care facilities (63% of all PHCs in Yemen), treating over 315,000 children for Severe Acute Malnutrition, and vaccinating 1.15 million children against measles and rubella in 2023.'}
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-red-600">3,127</div>
                        <div className="text-xs text-muted-foreground">{isArabic ? 'مرافق صحية' : 'PHC facilities'}</div>
                      </div>
                      <div>
                        <div className="font-medium text-red-600">315K+</div>
                        <div className="text-xs text-muted-foreground">{isArabic ? 'علاج سوء التغذية' : 'SAM treatment'}</div>
                      </div>
                      <div>
                        <div className="font-medium text-red-600">4.68M</div>
                        <div className="text-xs text-muted-foreground">{isArabic ? 'فحص سوء التغذية' : 'Malnutrition screening'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="border-l-4 border-blue-600 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-blue-600" />
                      <h3 className="font-semibold text-lg">
                        {isArabic ? 'التعليم' : 'Education'}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {isArabic
                        ? 'إعادة تأهيل 6,092 فصلاً دراسياً، وتوفير المواد المدرسية لـ 397,719 طفلاً، ودعم 2,109 معلمة ريفية بحوافز نقدية، وتدريب 5,126 معلماً على التعلم النشط والمدارس الآمنة والدعم النفسي والاجتماعي.'
                        : 'Rehabilitating 6,092 classrooms, providing school supplies to 397,719 children, supporting 2,109 rural female teachers with cash incentives, and training 5,126 teachers on active learning, safe schools, and psychosocial support.'}
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-blue-600">6,092</div>
                        <div className="text-xs text-muted-foreground">{isArabic ? 'فصل دراسي' : 'Classrooms'}</div>
                      </div>
                      <div>
                        <div className="font-medium text-blue-600">398K</div>
                        <div className="text-xs text-muted-foreground">{isArabic ? 'مواد مدرسية' : 'School supplies'}</div>
                      </div>
                      <div>
                        <div className="font-medium text-blue-600">5,126</div>
                        <div className="text-xs text-muted-foreground">{isArabic ? 'معلم مدرب' : 'Teachers trained'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Child Protection */}
                  <div className="border-l-4 border-purple-600 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-purple-600" />
                      <h3 className="font-semibold text-lg">
                        {isArabic ? 'حماية الطفل' : 'Child Protection'}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {isArabic
                        ? 'وصول 5.5 مليون طفل وأفراد المجتمع بالتوعية بمخاطر الألغام، وتوفير الدعم النفسي والاجتماعي لأكثر من 410,000 طفل ومقدم رعاية، وتقديم خدمات حرجة لـ 11,940 طفلاً من خلال إدارة الحالات.'
                        : 'Reaching 5.5 million children and community members with mine risk education, providing psychosocial support to over 410,000 children and caregivers, and delivering critical services to 11,940 children through case management.'}
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-purple-600">5.5M</div>
                        <div className="text-xs text-muted-foreground">{isArabic ? 'توعية بالألغام' : 'Mine risk education'}</div>
                      </div>
                      <div>
                        <div className="font-medium text-purple-600">410K+</div>
                        <div className="text-xs text-muted-foreground">{isArabic ? 'دعم نفسي' : 'PSS support'}</div>
                      </div>
                      <div>
                        <div className="font-medium text-purple-600">11,940</div>
                        <div className="text-xs text-muted-foreground">{isArabic ? 'إدارة حالات' : 'Case management'}</div>
                      </div>
                    </div>
                  </div>

                  {/* WASH */}
                  <div className="border-l-4 border-teal-600 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplet className="h-5 w-5 text-teal-600" />
                      <h3 className="font-semibold text-lg">
                        {isArabic ? 'المياه والصرف الصحي والنظافة' : 'WASH'}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {isArabic
                        ? 'توفير المياه الآمنة لأكثر من 554,000 شخص، وإعادة تأهيل مرافق المياه والصرف الصحي في 78 منشأة صحية تستفيد منها 275,072 شخصاً، والوصول إلى 256,000 شخص بتدخلات الطوارئ لمكافحة الكوليرا.'
                        : 'Providing safe water to over 554,000 people, rehabilitating WASH facilities in 78 health care facilities benefiting 275,072 people, and reaching 256,000 people with emergency Cholera/AWD response interventions.'}
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-teal-600">554K+</div>
                        <div className="text-xs text-muted-foreground">{isArabic ? 'مياه آمنة' : 'Safe water'}</div>
                      </div>
                      <div>
                        <div className="font-medium text-teal-600">78</div>
                        <div className="text-xs text-muted-foreground">{isArabic ? 'منشأة صحية' : 'Health facilities'}</div>
                      </div>
                      <div>
                        <div className="font-medium text-teal-600">256K</div>
                        <div className="text-xs text-muted-foreground">{isArabic ? 'استجابة الكوليرا' : 'Cholera response'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Funding Comparison Chart */}
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-sm">
                      {isArabic ? 'نداءات التمويل وفجوات التمويل' : 'Funding Appeals & Gaps'}
                    </h4>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>2020</span>
                          <span className="font-medium">$422M appeal | $299M received | $123M gap (29%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '71%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>2022</span>
                          <span className="font-medium text-red-600">$484M appeal | $131M received | $353M gap (73%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-600 h-2 rounded-full" style={{ width: '27%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>2023</span>
                          <span className="font-medium text-red-600">$475M appeal | $158M received | $317M gap (67%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{ width: '33%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>2024</span>
                          <span className="font-medium">$171M appeal | $111M received | $60M gap (35%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-amber-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>2025</span>
                          <span className="font-medium text-blue-600">$212M appeal</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
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
                          {isArabic ? 'نقص التمويل المستمر' : 'Persistent Funding Shortfalls'}
                        </h4>
                        <p className="text-sm text-red-800">
                          {isArabic
                            ? 'واجهت اليونيسف فجوات تمويل ضخمة: 353.4 مليون دولار في عام 2022 (أكبر فجوة مسجلة)، و316.9 مليون دولار في عام 2023. يهدد نقص التمويل المتوقع والمرن استمرارية الخدمات الرئيسية.'
                            : 'UNICEF faced massive funding gaps: $353.4 million in 2022 (largest recorded gap), $316.9 million in 2023. Lack of predictable and flexible funding threatens the continuity of key services.'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-red-900">
                          {isArabic ? 'قيود الوصول والعوائق البيروقراطية' : 'Access Constraints & Bureaucratic Impediments'}
                        </h4>
                        <p className="text-sm text-red-800">
                          {isArabic
                            ? 'البيئة التشغيلية المعقدة، بما في ذلك القتال المتقطع وهياكل السلطة المزدوجة، تشكل تحديات كبيرة للوصول الإنساني. تؤخر أو تمنع الإجراءات الإدارية الصارمة وقيود الوصول تقديم الخدمات الحرجة.'
                            : 'Complex operating environment, including intermittent fighting and dual-authority structures, poses significant challenges to humanitarian access. Stringent administrative procedures and access restrictions delay or prevent delivery of critical services.'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-red-900">
                          {isArabic ? 'انهيار البنية التحتية والخدمات العامة' : 'Infrastructure Collapse & Public Services'}
                        </h4>
                        <p className="text-sm text-red-800">
                          {isArabic
                            ? 'فقط 50% من المرافق الصحية تعمل. تدمير 2,916 مدرسة أو تضررها جزئياً أو استخدامها لأغراض غير تعليمية منذ مارس 2015. عدم دفع رواتب 172,000 معلم بشكل منتظم منذ عام 2016.'
                            : 'Only 50% of health facilities operational. 2,916 schools destroyed, partially damaged, or utilized for non-educational purposes since March 2015. Nearly 172,000 teachers irregularly paid since 2016.'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-red-900">
                          {isArabic ? 'تفشي الأمراض' : 'Disease Outbreaks'}
                        </h4>
                        <p className="text-sm text-red-800">
                          {isArabic
                            ? 'انخفاض كبير في معدلات التحصين الروتيني أدى إلى عودة ظهور الأمراض التي يمكن الوقاية منها باللقاحات: أكثر من 53,000 حالة حصبة مشتبه بها و1,978 حالة دفتيريا مشتبه بها في عام 2023. تفشي الكوليرا السريع في مارس 2024.'
                            : 'Significant drop in routine immunization rates led to resurgence of vaccine-preventable diseases: over 53,000 suspected measles cases and 1,978 suspected diphtheria cases in 2023. Fast-spreading cholera outbreak in March 2024.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Partnerships & Coordination */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Users className="h-6 w-6 text-cyan-600" />
                    {isArabic ? 'الشراكات والتنسيق' : 'Partnerships & Coordination'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {isArabic
                      ? 'تقود اليونيسف أو تشارك في قيادة عدة مجموعات إنسانية، مما يضمن التعاون الفعال والاستجابة المشتركة بين مجموعة واسعة من الشركاء.'
                      : 'UNICEF leads or co-leads several humanitarian clusters, ensuring effective collaboration and joint response among a wide range of partners.'}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-cyan-50 rounded-lg">
                      <div className="text-3xl font-bold text-cyan-600">47</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {isArabic ? 'شريك مجموعة التغذية' : 'Nutrition Cluster Partners'}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">68</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {isArabic ? 'شريك مجموعة WASH' : 'WASH Cluster Partners'}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600">130+</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {isArabic ? 'جهة فاعلة في التعليم' : 'Education Actors'}
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">
                      {isArabic ? 'قيادة المجموعات' : 'Cluster Leadership'}
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• {isArabic ? 'قيادة مجموعة WASH' : 'WASH Cluster Lead'}</li>
                      <li>• {isArabic ? 'قيادة مشتركة لمجموعة التعليم (مع Save the Children)' : 'Education Cluster Co-Lead (with Save the Children)'}</li>
                      <li>• {isArabic ? 'قيادة مشتركة لمجموعة التغذية' : 'Nutrition Cluster Co-Lead'}</li>
                      <li>• {isArabic ? 'شريك في آلية الاستجابة السريعة (RRM) مع UNFPA و WFP' : 'Rapid Response Mechanism (RRM) Partner with UNFPA & WFP'}</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">
                      {isArabic ? 'الشركاء الرئيسيون' : 'Key Partners'}
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• {isArabic ? 'منظمة الصحة العالمية (WHO)' : 'World Health Organization (WHO)'}</li>
                      <li>• {isArabic ? 'صندوق الأمم المتحدة للسكان (UNFPA)' : 'United Nations Population Fund (UNFPA)'}</li>
                      <li>• {isArabic ? 'برنامج الأغذية العالمي (WFP)' : 'World Food Programme (WFP)'}</li>
                      <li>• {isArabic ? 'صندوق الرعاية الاجتماعية (SWF)' : 'Social Welfare Fund (SWF)'}</li>
                      <li>• {isArabic ? 'وزارة الصحة العامة والسكان' : 'Ministry of Public Health and Population'}</li>
                      <li>• {isArabic ? 'وزارة التربية والتعليم' : 'Ministry of Education'}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Quick Facts & Timeline */}
            <div className="space-y-6">
              {/* Quick Facts */}
              <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-cyan-600" />
                    {isArabic ? 'حقائق سريعة' : 'Quick Facts'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <div className="font-semibold text-cyan-700 mb-1">
                      {isArabic ? 'نوع المنظمة' : 'Organization Type'}
                    </div>
                    <div className="text-muted-foreground">
                      {isArabic ? 'وكالة أممية متخصصة' : 'UN Specialized Agency'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-cyan-700 mb-1">
                      {isArabic ? 'التفويض' : 'Mandate'}
                    </div>
                    <div className="text-muted-foreground">
                      {isArabic ? 'حماية حقوق الأطفال' : 'Protect children\'s rights'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-cyan-700 mb-1">
                      {isArabic ? 'نطاق العمليات' : 'Operations Scope'}
                    </div>
                    <div className="text-muted-foreground">
                      {isArabic ? 'جميع محافظات اليمن' : 'All Yemeni governorates'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-cyan-700 mb-1">
                      {isArabic ? 'القطاعات الرئيسية' : 'Main Sectors'}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {isArabic
                        ? 'الصحة، التغذية، التعليم، حماية الطفل، WASH، السياسة الاجتماعية'
                        : 'Health, Nutrition, Education, Child Protection, WASH, Social Policy'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-cyan-700 mb-1">
                      {isArabic ? 'قيادة المجموعات' : 'Cluster Leadership'}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {isArabic
                        ? 'قيادة WASH، قيادة مشتركة للتعليم والتغذية'
                        : 'WASH Lead, Education & Nutrition Co-Lead'}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Strategic Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-cyan-600" />
                    {isArabic ? 'الجدول الزمني الاستراتيجي' : 'Strategic Timeline'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="border-l-4 border-green-600 pl-3">
                    <div className="font-semibold text-green-700">2020</div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic ? 'نداء 422 مليون دولار' : '$422M HAC Appeal'}
                    </div>
                    <div className="text-xs font-medium mt-1">71% {isArabic ? 'ممول' : 'funded'}</div>
                  </div>

                  <div className="border-l-4 border-red-600 pl-3">
                    <div className="font-semibold text-red-700">2022</div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic ? 'أكبر فجوة تمويل' : 'Largest funding gap'}
                    </div>
                    <div className="text-xs font-medium mt-1">$353M {isArabic ? 'عجز' : 'shortfall'}</div>
                  </div>

                  <div className="border-l-4 border-cyan-600 pl-3">
                    <div className="font-semibold text-cyan-700">2023-2024</div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic ? 'وثيقة برنامج اليمن' : 'Country Programme Document'}
                    </div>
                    <div className="text-xs font-medium mt-1">$812.1M</div>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-3">
                    <div className="font-semibold text-blue-700">2025</div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic ? 'نداء إنساني' : 'Humanitarian Appeal'}
                    </div>
                    <div className="text-xs font-medium mt-1">$212M</div>
                  </div>
                </CardContent>
              </Card>

              {/* Strategic Targets 2023-2024 */}
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    {isArabic ? 'الأهداف الاستراتيجية 2023-2024' : 'Strategic Targets 2023-2024'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold text-purple-700 mb-1">
                      {isArabic ? 'الصحة' : 'Health'}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic
                        ? 'خفض معدل وفيات الأطفال من 59 إلى 55 لكل 1000 مولود حي'
                        : 'Reduce child mortality from 59 to 55 per 1,000 live births'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-purple-700 mb-1">
                      {isArabic ? 'التغذية' : 'Nutrition'}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic
                        ? 'خفض سوء التغذية من 9.9% إلى 9%'
                        : 'Reduce wasting from 9.9% to 9%'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-purple-700 mb-1">
                      {isArabic ? 'التعليم' : 'Education'}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic
                        ? 'خفض معدل الأطفال خارج المدرسة من 50% إلى 35%'
                        : 'Reduce out-of-school rate from 50% to 35%'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-purple-700 mb-1">
                      {isArabic ? 'حماية الطفل' : 'Child Protection'}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic
                        ? 'زيادة الأطفال الذين يحصلون على الخدمات من 20,000 إلى 30,000'
                        : 'Increase children reached with services from 20,000 to 30,000'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-purple-700 mb-1">
                      {isArabic ? 'WASH' : 'WASH'}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic
                        ? 'زيادة الوصول إلى المياه الآمنة من 60.75% إلى 62.55%'
                        : 'Increase safe water access from 60.75% to 62.55%'}
                    </div>
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
                  <p>• UNICEF Yemen Humanitarian Action for Children (2020-2025)</p>
                  <p>• UNICEF Yemen Humanitarian Situation Reports (2020-2025)</p>
                  <p>• UNICEF Yemen Country Programme Document (2023-2024)</p>
                  <p>• UNICEF Yemen Annual Reports (2022-2024)</p>
                  <p>• Yemen Humanitarian Response Plans (2023-2025)</p>
                  <p>• UNICEF Yemen Consolidated Emergency Report 2023</p>
                  <p className="text-xs text-amber-700 mt-3">
                    {isArabic
                      ? 'جميع البيانات مستمدة من مصادر رسمية لليونيسف والأمم المتحدة'
                      : 'All data sourced from official UNICEF and UN publications'}
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
