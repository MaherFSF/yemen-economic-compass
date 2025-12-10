import { useLanguage } from '@/contexts/LanguageContext';
import AidFlowsChart from '@/components/charts/AidFlowsChart';
import { DollarSign, Users, TrendingUp, AlertCircle, Building2, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function AidFlowsDashboard() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            {isArabic ? 'لوحة تدفقات المساعدات' : 'Aid Flows Dashboard'}
          </h1>
          <p className="text-purple-100 mt-2">
            {isArabic
              ? 'تتبع شامل للمساعدات الإنسانية والتنموية لليمن (2010-2025)'
              : 'Comprehensive tracking of humanitarian and development aid to Yemen (2010-2025)'}
          </p>
          
          {/* Cross-linking to other dashboards */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/banking-system-dashboard">
              <Button variant="secondary" size="sm" className="bg-slate-200 hover:bg-white/30 text-white border-white/30">
                <Building2 className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                {isArabic ? 'لوحة النظام المصرفي' : 'Banking System'}
                <ArrowRight className={`h-3 w-3 ${isArabic ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </Link>
            <Link href="/timeline-explorer">
              <Button variant="secondary" size="sm" className="bg-slate-200 hover:bg-white/30 text-white border-white/30">
                <Calendar className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                {isArabic ? 'مستكشف الجدول الزمني' : 'Timeline Explorer'}
                <ArrowRight className={`h-3 w-3 ${isArabic ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </Link>
            <Link href="/dashboards-hub">
              <Button variant="secondary" size="sm" className="bg-slate-200 hover:bg-white/30 text-white border-white/30">
                <TrendingUp className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                {isArabic ? 'جميع لوحات المعلومات' : 'All Dashboards'}
                <ArrowRight className={`h-3 w-3 ${isArabic ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Aid 2010-2025 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-500">
                {isArabic ? '2010-2025' : '2010-2025'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">$67.3B</h3>
            <p className="text-sm text-gray-600">
              {isArabic ? 'إجمالي المساعدات' : 'Total Aid Committed'}
            </p>
            <div className="mt-2 flex items-center text-xs text-purple-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>{isArabic ? 'زيادة 15× منذ 2010' : '15× increase since 2010'}</span>
            </div>
          </div>

          {/* 2025 Aid */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                {isArabic ? '2025' : '2025'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">$8.8B</h3>
            <p className="text-sm text-gray-600">
              {isArabic ? 'مساعدات 2025' : '2025 Aid Flows'}
            </p>
            <div className="mt-2 flex items-center text-xs text-blue-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>{isArabic ? '+6% عن 2024' : '+6% from 2024'}</span>
            </div>
          </div>

          {/* Beneficiaries */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                {isArabic ? '2025' : '2025'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">21.6M</h3>
            <p className="text-sm text-gray-600">
              {isArabic ? 'المستفيدون' : 'People in Need'}
            </p>
            <div className="mt-2 flex items-center text-xs text-green-600">
              <Users className="h-3 w-3 mr-1" />
              <span>{isArabic ? '73% من السكان' : '73% of population'}</span>
            </div>
          </div>

          {/* Funding Gap */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-red-500">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded">
                {isArabic ? 'فجوة' : 'Gap'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">42%</h3>
            <p className="text-sm text-gray-600">
              {isArabic ? 'فجوة التمويل' : 'Funding Gap'}
            </p>
            <div className="mt-2 flex items-center text-xs text-red-600">
              <AlertCircle className="h-3 w-3 mr-1" />
              <span>{isArabic ? '$3.7B غير ممولة' : '$3.7B unfunded'}</span>
            </div>
          </div>
        </div>

        {/* Main Chart */}
        <div className="mb-8">
          <AidFlowsChart />
        </div>

        {/* Donor Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* UN Agencies */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-purple-500 mr-3"></span>
              {isArabic ? 'وكالات الأمم المتحدة' : 'UN Agencies'}
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-sm font-semibold text-gray-700">
                  {isArabic ? 'إجمالي المساعدات (2010-2025)' : 'Total Aid (2010-2025)'}
                </span>
                <span className="text-lg font-bold text-purple-600">$30.2B</span>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'أكبر مانح للمساعدات الإنسانية في اليمن (45% من الإجمالي)'
                      : 'Largest humanitarian aid donor to Yemen (45% of total)'}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'برنامج الأغذية العالمي (WFP): $12.5B في مساعدات غذائية'
                      : 'World Food Programme (WFP): $12.5B in food assistance'}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'مكتب تنسيق الشؤون الإنسانية (OCHA): تنسيق 800+ شريك'
                      : 'OCHA: Coordinating 800+ humanitarian partners'}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'اليونيسف: $4.2B لحماية الطفل والصحة والتعليم'
                      : 'UNICEF: $4.2B for child protection, health, and education'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Saudi Arabia */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-green-500 mr-3"></span>
              {isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'}
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-sm font-semibold text-gray-700">
                  {isArabic ? 'إجمالي المساعدات (2010-2025)' : 'Total Aid (2010-2025)'}
                </span>
                <span className="text-lg font-bold text-green-600">$12.2B</span>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'ثاني أكبر مانح (18% من إجمالي المساعدات)'
                      : 'Second largest donor (18% of total aid)'}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'البرنامج السعودي للتنمية وإعادة الإعمار: $7.5B'
                      : 'Saudi Development and Reconstruction Program: $7.5B'}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'مركز الملك سلمان للإغاثة: $3.2B في مساعدات إنسانية'
                      : 'King Salman Humanitarian Aid Center: $3.2B in humanitarian aid'}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'ودائع البنك المركزي: $1.5B لدعم العملة'
                      : 'CBY deposits: $1.5B to support currency'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* USA */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-red-500 mr-3"></span>
              {isArabic ? 'الولايات المتحدة' : 'United States'}
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-sm font-semibold text-gray-700">
                  {isArabic ? 'إجمالي المساعدات (2010-2025)' : 'Total Aid (2010-2025)'}
                </span>
                <span className="text-lg font-bold text-red-600">$11.7B</span>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'ثالث أكبر مانح (17% من إجمالي المساعدات)'
                      : 'Third largest donor (17% of total aid)'}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'الوكالة الأمريكية للتنمية الدولية (USAID): $8.5B'
                      : 'USAID: $8.5B in humanitarian and development aid'}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'أكبر مساهم في برنامج الأغذية العالمي (35%)'
                      : 'Largest contributor to WFP operations (35%)'}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'دعم الصحة والتغذية: $2.1B'
                      : 'Health and nutrition support: $2.1B'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* World Bank & IFIs */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-blue-500 mr-3"></span>
              {isArabic ? 'البنك الدولي والمؤسسات المالية' : 'World Bank & IFIs'}
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-sm font-semibold text-gray-700">
                  {isArabic ? 'إجمالي المساعدات (2010-2025)' : 'Total Aid (2010-2025)'}
                </span>
                <span className="text-lg font-bold text-blue-600">$4.0B</span>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'تركيز على التنمية طويلة الأجل والبنية التحتية'
                      : 'Focus on long-term development and infrastructure'}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'مشروع البنية التحتية المالية: $475M'
                      : 'Financial Market Infrastructure Project: $475M'}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'دعم الخدمات الأساسية والتعافي الاقتصادي: $2.1B'
                      : 'Essential services and economic recovery: $2.1B'}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <p>
                    {isArabic
                      ? 'صندوق النقد الدولي: $577M في برامج الدعم'
                      : 'IMF: $577M in support programs'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {isArabic ? 'المنهجية ومصادر البيانات' : 'Methodology & Data Sources'}
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              {isArabic
                ? 'تستند هذه اللوحة إلى بيانات من نظام تتبع التمويل المالي التابع لمكتب الأمم المتحدة لتنسيق الشؤون الإنسانية (OCHA FTS)، البنك الدولي، البرنامج السعودي للتنمية وإعادة الإعمار، الوكالة الأمريكية للتنمية الدولية (USAID)، والمفوضية الأوروبية. تم تجميع البيانات من التقارير السنوية والتقارير ربع السنوية للمانحين.'
                : 'This dashboard is based on data from the UN OCHA Financial Tracking Service (FTS), World Bank, Saudi Development and Reconstruction Program, USAID, and European Commission. Data was compiled from annual and quarterly donor reports.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">{isArabic ? 'المصادر الرئيسية:' : 'Primary Sources:'}</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>{isArabic ? 'نظام تتبع التمويل المالي - OCHA' : 'UN OCHA Financial Tracking Service'}</li>
                  <li>{isArabic ? 'البنك الدولي' : 'World Bank'}</li>
                  <li>{isArabic ? 'البرنامج السعودي للتنمية' : 'Saudi Development Program'}</li>
                  <li>{isArabic ? 'الوكالة الأمريكية للتنمية الدولية' : 'USAID'}</li>
                  <li>{isArabic ? 'المفوضية الأوروبية ECHO' : 'European Commission ECHO'}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{isArabic ? 'القطاعات المتتبعة:' : 'Tracked Sectors:'}</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>{isArabic ? 'الأمن الغذائي' : 'Food Security'}</li>
                  <li>{isArabic ? 'الصحة والتغذية' : 'Health & Nutrition'}</li>
                  <li>{isArabic ? 'المياه والصرف الصحي' : 'WASH'}</li>
                  <li>{isArabic ? 'التعليم' : 'Education'}</li>
                  <li>{isArabic ? 'الحماية' : 'Protection'}</li>
                  <li>{isArabic ? 'المأوى' : 'Shelter'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
