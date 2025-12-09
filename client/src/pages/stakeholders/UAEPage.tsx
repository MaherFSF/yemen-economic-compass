import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, Building2, Users, MapPin, Calendar } from 'lucide-react';

export default function UAEPage() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <MapPin className="h-5 w-5 text-emerald-200" />
              <span className="text-sm font-semibold">
                {isArabic ? 'جهة مانحة رئيسية' : 'Major Donor'}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {isArabic ? 'الإمارات العربية المتحدة' : 'United Arab Emirates'}
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {isArabic
                ? 'دور الإمارات في الأزمة الإنسانية والاقتصادية في اليمن'
                : 'UAE\'s role in Yemen\'s humanitarian and economic crisis'}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-12 -mt-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {isArabic ? 'إجمالي المساعدات' : 'Total Aid'}
                  </CardTitle>
                  <DollarSign className="h-5 w-5 text-teal-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-teal-600">$5.8B+</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {isArabic ? '2015-2025' : '2015-2025'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {isArabic ? 'المشاريع النشطة' : 'Active Projects'}
                  </CardTitle>
                  <Building2 className="h-5 w-5 text-emerald-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">120+</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {isArabic ? 'مشاريع إنسانية وتنموية' : 'Humanitarian & development'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {isArabic ? 'المستفيدون' : 'Beneficiaries'}
                  </CardTitle>
                  <Users className="h-5 w-5 text-teal-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-teal-600">12M+</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {isArabic ? 'مستفيد يمني' : 'Yemeni beneficiaries'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {isArabic ? 'سنوات النشاط' : 'Years Active'}
                  </CardTitle>
                  <Calendar className="h-5 w-5 text-emerald-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">10+</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {isArabic ? 'منذ 2015' : 'Since 2015'}
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
                  <CardTitle className="text-2xl">
                    {isArabic ? 'نظرة عامة' : 'Overview'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className={isArabic ? 'text-right' : ''}>
                    {isArabic
                      ? 'تعد الإمارات العربية المتحدة من أكبر المانحين للمساعدات الإنسانية والتنموية لليمن منذ بداية الأزمة في 2015. قدمت الإمارات أكثر من 5.8 مليار دولار في شكل مساعدات إنسانية، ومشاريع تنموية، ودعم للبنية التحتية.'
                      : 'The United Arab Emirates has been one of the largest donors of humanitarian and development aid to Yemen since the crisis began in 2015. The UAE has provided over $5.8 billion in humanitarian assistance, development projects, and infrastructure support.'}
                  </p>
                  <p className={isArabic ? 'text-right' : ''}>
                    {isArabic
                      ? 'تركز المساعدات الإماراتية على قطاعات الصحة، التعليم، الطاقة، النقل، والأمن الغذائي. كما تدعم الإمارات إعادة تأهيل البنية التحتية في المناطق المحررة وتقديم الخدمات الأساسية للسكان المتضررين.'
                      : 'UAE aid focuses on health, education, energy, transportation, and food security sectors. The UAE also supports infrastructure rehabilitation in liberated areas and provides essential services to affected populations.'}
                  </p>
                </CardContent>
              </Card>

              {/* Key Initiatives */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {isArabic ? 'المبادرات الرئيسية' : 'Key Initiatives'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-teal-600 pl-4">
                      <h3 className="font-semibold text-lg mb-2">
                        {isArabic ? 'الهلال الأحمر الإماراتي' : 'Emirates Red Crescent'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {isArabic
                          ? 'تقديم المساعدات الإنسانية الطارئة والإغاثة للمتضررين من الأزمة في مختلف المحافظات اليمنية.'
                          : 'Providing emergency humanitarian assistance and relief to crisis-affected populations across Yemeni governorates.'}
                      </p>
                    </div>

                    <div className="border-l-4 border-emerald-600 pl-4">
                      <h3 className="font-semibold text-lg mb-2">
                        {isArabic ? 'مشاريع البنية التحتية' : 'Infrastructure Projects'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {isArabic
                          ? 'إعادة تأهيل الموانئ، المطارات، الطرق، والمستشفيات في المناطق المحررة.'
                          : 'Rehabilitation of ports, airports, roads, and hospitals in liberated areas.'}
                      </p>
                    </div>

                    <div className="border-l-4 border-teal-600 pl-4">
                      <h3 className="font-semibold text-lg mb-2">
                        {isArabic ? 'الطاقة والكهرباء' : 'Energy & Electricity'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {isArabic
                          ? 'دعم قطاع الطاقة من خلال توفير الوقود ومولدات الكهرباء وإعادة تأهيل محطات الطاقة.'
                          : 'Supporting the energy sector through fuel provision, electricity generators, and power plant rehabilitation.'}
                      </p>
                    </div>

                    <div className="border-l-4 border-emerald-600 pl-4">
                      <h3 className="font-semibold text-lg mb-2">
                        {isArabic ? 'الصحة والتعليم' : 'Health & Education'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {isArabic
                          ? 'بناء وتجهيز المستشفيات والمدارس وتقديم المعدات الطبية والتعليمية.'
                          : 'Building and equipping hospitals and schools, providing medical and educational equipment.'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Aid Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {isArabic ? 'توزيع المساعدات حسب القطاع' : 'Aid Distribution by Sector'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{isArabic ? 'الصحة' : 'Health'}</span>
                        <span className="text-sm text-muted-foreground">28%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: '28%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{isArabic ? 'البنية التحتية' : 'Infrastructure'}</span>
                        <span className="text-sm text-muted-foreground">24%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '24%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{isArabic ? 'الأمن الغذائي' : 'Food Security'}</span>
                        <span className="text-sm text-muted-foreground">22%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: '22%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{isArabic ? 'التعليم' : 'Education'}</span>
                        <span className="text-sm text-muted-foreground">14%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '14%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{isArabic ? 'الطاقة' : 'Energy'}</span>
                        <span className="text-sm text-muted-foreground">12%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Quick Facts */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-teal-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {isArabic ? 'حقائق سريعة' : 'Quick Facts'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <div className="font-semibold text-teal-700 mb-1">
                      {isArabic ? 'نوع الجهة' : 'Entity Type'}
                    </div>
                    <div className="text-muted-foreground">
                      {isArabic ? 'دولة مانحة' : 'Donor Country'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-teal-700 mb-1">
                      {isArabic ? 'التركيز الجغرافي' : 'Geographic Focus'}
                    </div>
                    <div className="text-muted-foreground">
                      {isArabic ? 'جنوب اليمن (عدن، حضرموت، المهرة، سقطرى)' : 'Southern Yemen (Aden, Hadramout, Al-Mahra, Socotra)'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-teal-700 mb-1">
                      {isArabic ? 'القطاعات الرئيسية' : 'Main Sectors'}
                    </div>
                    <div className="text-muted-foreground">
                      {isArabic ? 'الصحة، البنية التحتية، الطاقة، الأمن الغذائي' : 'Health, Infrastructure, Energy, Food Security'}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-teal-700 mb-1">
                      {isArabic ? 'الشركاء المحليون' : 'Local Partners'}
                    </div>
                    <div className="text-muted-foreground">
                      {isArabic ? 'الحكومة اليمنية، المجالس المحلية، المنظمات الإنسانية' : 'Yemeni Government, Local Councils, Humanitarian Organizations'}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-teal-600" />
                    {isArabic ? 'التأثير' : 'Impact'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-teal-600 mt-1.5"></div>
                    <p className="text-muted-foreground">
                      {isArabic
                        ? 'إعادة تأهيل 45 مستشفى ومركز صحي'
                        : 'Rehabilitation of 45 hospitals and health centers'}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-600 mt-1.5"></div>
                    <p className="text-muted-foreground">
                      {isArabic
                        ? 'توفير الكهرباء لأكثر من 3 ملايين شخص'
                        : 'Electricity provision for over 3 million people'}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-teal-600 mt-1.5"></div>
                    <p className="text-muted-foreground">
                      {isArabic
                        ? 'بناء وتجهيز 120 مدرسة'
                        : 'Construction and equipping of 120 schools'}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-600 mt-1.5"></div>
                    <p className="text-muted-foreground">
                      {isArabic
                        ? 'توزيع 2.5 مليون سلة غذائية'
                        : 'Distribution of 2.5 million food baskets'}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-lg text-amber-900">
                    {isArabic ? 'المصادر' : 'Sources'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground space-y-2">
                  <p>• UAE Ministry of Foreign Affairs</p>
                  <p>• Emirates Red Crescent</p>
                  <p>• UN OCHA Financial Tracking Service</p>
                  <p>• Yemeni Government Reports</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
