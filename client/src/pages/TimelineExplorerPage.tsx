import { useLanguage } from '@/contexts/LanguageContext';
import TimelineExplorer from '@/components/TimelineExplorer';
import { Calendar, TrendingUp, AlertTriangle, Users } from 'lucide-react';

export default function TimelineExplorerPage() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            {isArabic ? 'مستكشف الجدول الزمني التفاعلي' : 'Interactive Timeline Explorer'}
          </h1>
          <p className="text-indigo-100 mt-2">
            {isArabic
              ? 'استكشف 318 حدثًا رئيسيًا في تاريخ اليمن (2010-2025)'
              : 'Explore 318 key events in Yemen\'s history (2010-2025)'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Events */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Calendar className="h-6 w-6 text-indigo-600" />
              </div>
              <span className="text-sm text-gray-500">
                {isArabic ? '2010-2025' : '2010-2025'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">318</h3>
            <p className="text-sm text-gray-600">
              {isArabic ? 'إجمالي الأحداث' : 'Total Events'}
            </p>
            <div className="mt-2 flex items-center text-xs text-indigo-600">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{isArabic ? '16 سنة من التاريخ' : '16 years of history'}</span>
            </div>
          </div>

          {/* War Events */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-red-500">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded">
                {isArabic ? 'حرب' : 'War'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">89</h3>
            <p className="text-sm text-gray-600">
              {isArabic ? 'أحداث عسكرية' : 'Military Events'}
            </p>
            <div className="mt-2 flex items-center text-xs text-red-600">
              <AlertTriangle className="h-3 w-3 mr-1" />
              <span>{isArabic ? '28% من الأحداث' : '28% of events'}</span>
            </div>
          </div>

          {/* Economic Events */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                {isArabic ? 'اقتصادي' : 'Economic'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">112</h3>
            <p className="text-sm text-gray-600">
              {isArabic ? 'أحداث اقتصادية' : 'Economic Events'}
            </p>
            <div className="mt-2 flex items-center text-xs text-blue-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>{isArabic ? '35% من الأحداث' : '35% of events'}</span>
            </div>
          </div>

          {/* Humanitarian Events */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-orange-500">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">
                {isArabic ? 'إنساني' : 'Humanitarian'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">74</h3>
            <p className="text-sm text-gray-600">
              {isArabic ? 'أحداث إنسانية' : 'Humanitarian Events'}
            </p>
            <div className="mt-2 flex items-center text-xs text-orange-600">
              <Users className="h-3 w-3 mr-1" />
              <span>{isArabic ? '23% من الأحداث' : '23% of events'}</span>
            </div>
          </div>
        </div>

        {/* Timeline Component */}
        <TimelineExplorer />

        {/* Key Insights */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-indigo-500 mr-3"></span>
              {isArabic ? 'نقاط تحول رئيسية' : 'Major Turning Points'}
            </h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <p>
                  <strong>{isArabic ? '2011:' : '2011:'}</strong>{' '}
                  {isArabic
                    ? 'الربيع العربي - انهيار اقتصادي بنسبة 12.7% وتوقيع مبادرة مجلس التعاون الخليجي'
                    : 'Arab Spring - 12.7% economic collapse and GCC Initiative signing'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <p>
                  <strong>{isArabic ? '2015:' : '2015:'}</strong>{' '}
                  {isArabic
                    ? 'بداية الحرب - انهيار اقتصادي بنسبة 28% وأكبر أزمة إنسانية'
                    : 'War begins - 28% economic collapse and largest humanitarian crisis'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <p>
                  <strong>{isArabic ? '2016:' : '2016:'}</strong>{' '}
                  {isArabic
                    ? 'انقسام البنك المركزي - تشظي النظام المالي إلى نظامين موازيين'
                    : 'CBY split - Financial system fragments into parallel systems'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <p>
                  <strong>{isArabic ? '2019:' : '2019:'}</strong>{' '}
                  {isArabic
                    ? 'حظر العملة - تفاقم أزمة سعر الصرف وانهيار الريال'
                    : 'Currency ban - Exchange rate crisis deepens and Riyal collapses'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <p>
                  <strong>{isArabic ? '2024:' : '2024:'}</strong>{' '}
                  {isArabic
                    ? 'هجمات البحر الأحمر - انهيار سعر الصرف إلى 1,800 ريال/دولار'
                    : 'Red Sea attacks - Exchange rate collapses to 1,800 YER/USD'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-purple-500 mr-3"></span>
              {isArabic ? 'كيفية استخدام المستكشف' : 'How to Use the Explorer'}
            </h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start">
                <span className="text-purple-500 mr-2">1.</span>
                <p>
                  <strong>{isArabic ? 'البحث:' : 'Search:'}</strong>{' '}
                  {isArabic
                    ? 'استخدم شريط البحث للعثور على أحداث محددة بالكلمات المفتاحية'
                    : 'Use the search bar to find specific events by keywords'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2">2.</span>
                <p>
                  <strong>{isArabic ? 'التصفية:' : 'Filter:'}</strong>{' '}
                  {isArabic
                    ? 'اختر فئة (حرب، اقتصادي، سياسة، إنساني) لتضييق النتائج'
                    : 'Select a category (war, economic, policy, humanitarian) to narrow results'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2">3.</span>
                <p>
                  <strong>{isArabic ? 'التنقل:' : 'Navigate:'}</strong>{' '}
                  {isArabic
                    ? 'انقر على سنة محددة للقفز إلى تلك الفترة الزمنية'
                    : 'Click on a specific year to jump to that time period'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2">4.</span>
                <p>
                  <strong>{isArabic ? 'التفاصيل:' : 'Details:'}</strong>{' '}
                  {isArabic
                    ? 'انقر على أي حدث لرؤية الوصف الكامل والمصادر'
                    : 'Click on any event to see full description and sources'}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-2">5.</span>
                <p>
                  <strong>{isArabic ? 'السياق:' : 'Context:'}</strong>{' '}
                  {isArabic
                    ? 'لاحظ الألوان - كل فئة لها لون مميز للتعرف السريع'
                    : 'Notice the colors - each category has a distinct color for quick recognition'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {isArabic ? 'المنهجية ومصادر البيانات' : 'Methodology & Data Sources'}
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              {isArabic
                ? 'تم جمع هذه الأحداث من مصادر موثوقة متعددة بما في ذلك تقارير البنك الدولي، صندوق النقد الدولي، الأمم المتحدة، مركز صنعاء للدراسات الاستراتيجية، مركز سياسات اليمن، ومجموعة الأزمات الدولية. تم التحقق من كل حدث من خلال مصادر متعددة لضمان الدقة.'
                : 'These events were collected from multiple credible sources including World Bank reports, IMF, United Nations, Sana\'a Center for Strategic Studies, Yemen Policy Center, and International Crisis Group. Each event was verified through multiple sources to ensure accuracy.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">{isArabic ? 'المصادر الرئيسية:' : 'Primary Sources:'}</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>{isArabic ? 'البنك الدولي - تقارير اليمن الاقتصادية' : 'World Bank - Yemen Economic Monitors'}</li>
                  <li>{isArabic ? 'صندوق النقد الدولي - تقارير المادة الرابعة' : 'IMF - Article IV Reports'}</li>
                  <li>{isArabic ? 'الأمم المتحدة OCHA - خطط الاستجابة الإنسانية' : 'UN OCHA - Humanitarian Response Plans'}</li>
                  <li>{isArabic ? 'مركز صنعاء للدراسات الاستراتيجية' : 'Sana\'a Center for Strategic Studies'}</li>
                  <li>{isArabic ? 'مركز سياسات اليمن' : 'Yemen Policy Center'}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{isArabic ? 'الفئات:' : 'Categories:'}</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>{isArabic ? 'حرب: أحداث عسكرية ونزاعات مسلحة' : 'War: Military events and armed conflicts'}</li>
                  <li>{isArabic ? 'اقتصادي: مؤشرات اقتصادية وسياسات مالية' : 'Economic: Economic indicators and financial policies'}</li>
                  <li>{isArabic ? 'سياسة: قرارات حكومية وسياسات عامة' : 'Policy: Government decisions and public policies'}</li>
                  <li>{isArabic ? 'إنساني: أزمات إنسانية ومساعدات' : 'Humanitarian: Humanitarian crises and aid'}</li>
                  <li>{isArabic ? 'سياسي: أحداث سياسية واتفاقيات' : 'Political: Political events and agreements'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
