import { useLanguage } from '@/contexts/LanguageContext';
import BankingSystemChart from '@/components/charts/BankingSystemChart';
import { Building2, TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';

export default function BankingSystemDashboard() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            {isArabic ? 'لوحة النظام المصرفي' : 'Banking System Dashboard'}
          </h1>
          <p className="text-blue-100 mt-2">
            {isArabic
              ? 'تحليل شامل للنظام المصرفي الموازي في اليمن (2010-2025)'
              : 'Comprehensive analysis of Yemen\'s parallel banking system (2010-2025)'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Banks */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">
                {isArabic ? '2025' : '2025'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">15</h3>
            <p className="text-sm text-gray-600">
              {isArabic ? 'إجمالي البنوك العاملة' : 'Total Operational Banks'}
            </p>
            <div className="mt-2 flex items-center text-xs text-gray-500">
              <span>{isArabic ? '5 عدن + 10 صنعاء' : '5 Aden + 10 Sana\'a'}</span>
            </div>
          </div>

          {/* Aden Banking Assets */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-red-500">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <TrendingDown className="h-6 w-6 text-red-600" />
              </div>
              <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded">
                {isArabic ? 'تراجع' : 'Declining'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">$1.7B</h3>
            <p className="text-sm text-gray-600">
              {isArabic ? 'أصول البنوك - عدن' : 'Banking Assets - Aden'}
            </p>
            <div className="mt-2 flex items-center text-xs text-red-600">
              <TrendingDown className="h-3 w-3 mr-1" />
              <span>{isArabic ? '-32% منذ 2016' : '-32% since 2016'}</span>
            </div>
          </div>

          {/* Sana'a Banking Assets */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                {isArabic ? 'نمو' : 'Growing'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">$4.7B</h3>
            <p className="text-sm text-gray-600">
              {isArabic ? 'أصول البنوك - صنعاء' : 'Banking Assets - Sana\'a'}
            </p>
            <div className="mt-2 flex items-center text-xs text-blue-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>{isArabic ? '+47% منذ 2016' : '+47% since 2016'}</span>
            </div>
          </div>

          {/* Fragmentation Index */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-orange-500">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
              </div>
              <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">
                {isArabic ? 'حرج' : 'Critical'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">176%</h3>
            <p className="text-sm text-gray-600">
              {isArabic ? 'فجوة الأصول' : 'Asset Gap'}
            </p>
            <div className="mt-2 flex items-center text-xs text-orange-600">
              <AlertTriangle className="h-3 w-3 mr-1" />
              <span>{isArabic ? 'صنعاء 2.8× أكبر من عدن' : 'Sana\'a 2.8× larger than Aden'}</span>
            </div>
          </div>
        </div>

        {/* Main Chart */}
        <div className="mb-8">
          <BankingSystemChart />
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-red-500 mr-3"></span>
              {isArabic ? 'النظام المصرفي في عدن' : 'Aden Banking System'}
            </h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p>
                  {isArabic
                    ? 'تراجع الأصول المصرفية بنسبة 32% من 2.5 مليار دولار (2016) إلى 1.7 مليار دولار (2025)'
                    : 'Banking assets declined 32% from $2.5B (2016) to $1.7B (2025)'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p>
                  {isArabic
                    ? 'انخفاض عدد البنوك العاملة من 11 بنك (2016) إلى 5 بنوك (2025)'
                    : 'Operational banks decreased from 11 (2016) to 5 (2025)'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p>
                  {isArabic
                    ? 'أزمة سيولة حادة بسبب انهيار سعر الصرف وتوقف الإيرادات النفطية'
                    : 'Severe liquidity crisis due to exchange rate collapse and oil revenue halt'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p>
                  {isArabic
                    ? 'ارتفاع القروض المتعثرة (NPL) إلى أكثر من 35% من إجمالي القروض'
                    : 'Non-performing loans (NPL) rose above 35% of total loans'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p>
                  {isArabic
                    ? 'إغلاق العديد من الفروع في المناطق الريفية بسبب انعدام الأمن'
                    : 'Closure of many rural branches due to insecurity'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-blue-500 mr-3"></span>
              {isArabic ? 'النظام المصرفي في صنعاء' : 'Sana\'a Banking System'}
            </h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <p>
                  {isArabic
                    ? 'نمو الأصول المصرفية بنسبة 47% من 3.2 مليار دولار (2016) إلى 4.7 مليار دولار (2025)'
                    : 'Banking assets grew 47% from $3.2B (2016) to $4.7B (2025)'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <p>
                  {isArabic
                    ? 'استقرار نسبي في عدد البنوك العاملة (14 بنك في 2016 إلى 10 بنوك في 2025)'
                    : 'Relative stability in operational banks (14 in 2016 to 10 in 2025)'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <p>
                  {isArabic
                    ? 'استفادة من استقرار سعر الصرف عند 560 ريال/دولار'
                    : 'Benefited from exchange rate stability at 560 YER/USD'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <p>
                  {isArabic
                    ? 'سيطرة على الإيرادات الجمركية والضرائب في المناطق الشمالية'
                    : 'Control over customs and tax revenues in northern regions'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <p>
                  {isArabic
                    ? 'توسع في الخدمات المصرفية الإسلامية والتمويل الأصغر'
                    : 'Expansion in Islamic banking and microfinance services'}
                </p>
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
                ? 'تستند هذه اللوحة إلى بيانات من البنك المركزي اليمني (عدن وصنعاء)، البنك الدولي، صندوق النقد الدولي، والتقارير السنوية للبنوك التجارية. تم تحليل البيانات لتتبع تطور النظام المصرفي الموازي منذ انقسام البنك المركزي في سبتمبر 2016.'
                : 'This dashboard is based on data from the Central Bank of Yemen (Aden and Sana\'a), World Bank, IMF, and annual reports from commercial banks. Data was analyzed to track the evolution of the parallel banking system since the CBY split in September 2016.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">{isArabic ? 'المصادر الرئيسية:' : 'Primary Sources:'}</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>{isArabic ? 'البنك المركزي اليمني - عدن' : 'Central Bank of Yemen - Aden'}</li>
                  <li>{isArabic ? 'البنك المركزي اليمني - صنعاء' : 'Central Bank of Yemen - Sana\'a'}</li>
                  <li>{isArabic ? 'البنك الدولي' : 'World Bank'}</li>
                  <li>{isArabic ? 'صندوق النقد الدولي' : 'International Monetary Fund'}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{isArabic ? 'المؤشرات المتتبعة:' : 'Tracked Indicators:'}</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>{isArabic ? 'إجمالي الأصول المصرفية' : 'Total banking assets'}</li>
                  <li>{isArabic ? 'عدد البنوك العاملة' : 'Number of operational banks'}</li>
                  <li>{isArabic ? 'القروض المتعثرة (NPL)' : 'Non-performing loans (NPL)'}</li>
                  <li>{isArabic ? 'نسب السيولة' : 'Liquidity ratios'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
