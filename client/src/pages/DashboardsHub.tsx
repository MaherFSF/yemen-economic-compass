import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  TrendingUp, 
  Calendar, 
  ArrowRight, 
  BarChart3,
  LineChart,
  Clock,
  Database,
  Search,
  Filter,
  Zap
} from 'lucide-react';

export default function DashboardsHub() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const dashboards = [
    {
      id: 'banking-system',
      title: isArabic ? 'لوحة النظام المصرفي' : 'Banking System Dashboard',
      description: isArabic 
        ? 'تحليل شامل للنظام المصرفي الموازي في اليمن منذ انقسام البنك المركزي في 2016'
        : 'Comprehensive analysis of Yemen\'s parallel banking system since the CBY split in 2016',
      url: '/banking-system-dashboard',
      icon: Building2,
      color: 'blue',
      stats: [
        { label: isArabic ? 'نقاط البيانات' : 'Data Points', value: '96' },
        { label: isArabic ? 'السنوات' : 'Years', value: '2010-2025' },
        { label: isArabic ? 'البنوك' : 'Banks', value: '15' },
      ],
      features: [
        isArabic ? 'رسم بياني ثنائي المحور' : 'Dual-axis chart',
        isArabic ? 'تعليقات الأحداث' : 'Event annotations',
        isArabic ? 'تحليل مقارن' : 'Comparative analysis',
        isArabic ? 'تصدير البيانات' : 'Data export',
      ],
      badge: isArabic ? 'جديد' : 'NEW',
    },
    {
      id: 'aid-flows',
      title: isArabic ? 'لوحة تدفقات المساعدات' : 'Aid Flows Dashboard',
      description: isArabic
        ? 'تتبع شامل لـ 67.3 مليار دولار من المساعدات الإنسانية والتنموية من 7 جهات مانحة رئيسية'
        : 'Comprehensive tracking of $67.3B in humanitarian and development aid from 7 major donors',
      url: '/aid-flows-dashboard',
      icon: TrendingUp,
      color: 'green',
      stats: [
        { label: isArabic ? 'نقاط البيانات' : 'Data Points', value: '112' },
        { label: isArabic ? 'إجمالي المساعدات' : 'Total Aid', value: '$67.3B' },
        { label: isArabic ? 'الجهات المانحة' : 'Donors', value: '7' },
      ],
      features: [
        isArabic ? 'رسم بياني مكدس' : 'Stacked area chart',
        isArabic ? 'ملفات المانحين' : 'Donor profiles',
        isArabic ? 'تحليل الفجوات' : 'Gap analysis',
        isArabic ? 'تصدير CSV' : 'CSV export',
      ],
      badge: isArabic ? 'جديد' : 'NEW',
    },
    {
      id: 'timeline-explorer',
      title: isArabic ? 'مستكشف الجدول الزمني' : 'Timeline Explorer',
      description: isArabic
        ? 'استكشاف تفاعلي لـ 318 حدث رئيسي مع بحث متقدم وتصفية حسب الفئة'
        : 'Interactive exploration of 318 key events with advanced search and category filtering',
      url: '/timeline-explorer',
      icon: Calendar,
      color: 'purple',
      stats: [
        { label: isArabic ? 'الأحداث' : 'Events', value: '318' },
        { label: isArabic ? 'الفئات' : 'Categories', value: '5' },
        { label: isArabic ? 'السنوات' : 'Years', value: '2010-2025' },
      ],
      features: [
        isArabic ? 'بحث نصي كامل' : 'Full-text search',
        isArabic ? 'تصفية حسب الفئة' : 'Category filters',
        isArabic ? 'تفاصيل الأحداث' : 'Event details',
        isArabic ? 'التنقل السنوي' : 'Year navigation',
      ],
      badge: isArabic ? 'جديد' : 'NEW',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-950',
      border: 'border-blue-200 dark:border-blue-800',
      icon: 'text-blue-600 dark:text-blue-400',
      badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    green: {
      bg: 'bg-green-50 dark:bg-green-950',
      border: 'border-green-200 dark:border-green-800',
      icon: 'text-green-600 dark:text-green-400',
      badge: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      button: 'bg-green-600 hover:bg-green-700 text-white',
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-950',
      border: 'border-purple-200 dark:border-purple-800',
      icon: 'text-purple-600 dark:text-purple-400',
      badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
              <BarChart3 className="h-5 w-5" />
              <span className="text-sm font-semibold">
                {isArabic ? 'مركز لوحات المعلومات المتقدمة' : 'Advanced Dashboards Hub'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isArabic 
                ? 'استكشف البيانات بطرق جديدة'
                : 'Explore Data in New Ways'}
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {isArabic
                ? 'ثلاث لوحات معلومات تفاعلية متقدمة توفر رؤى عميقة حول النظام المالي والاقتصادي في اليمن (2010-2025)'
                : 'Three advanced interactive dashboards providing deep insights into Yemen\'s financial and economic system (2010-2025)'}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">3</div>
                <div className="text-sm text-blue-100">
                  {isArabic ? 'لوحات معلومات' : 'Dashboards'}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">526</div>
                <div className="text-sm text-blue-100">
                  {isArabic ? 'نقاط البيانات' : 'Data Points'}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">318</div>
                <div className="text-sm text-blue-100">
                  {isArabic ? 'الأحداث' : 'Events'}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">16</div>
                <div className="text-sm text-blue-100">
                  {isArabic ? 'سنة' : 'Years'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboards Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {dashboards.map((dashboard) => {
            const Icon = dashboard.icon;
            const colors = colorClasses[dashboard.color as keyof typeof colorClasses];
            
            return (
              <Card 
                key={dashboard.id} 
                className={`${colors.border} border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                <CardHeader className={colors.bg}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${colors.badge}`}>
                      <Icon className={`h-8 w-8 ${colors.icon}`} />
                    </div>
                    {dashboard.badge && (
                      <Badge className={colors.badge}>
                        {dashboard.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <CardTitle className="text-xl mb-2">
                    {dashboard.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm leading-relaxed">
                    {dashboard.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-6">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {dashboard.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                      {isArabic ? 'الميزات:' : 'Features:'}
                    </h4>
                    <ul className="space-y-2">
                      {dashboard.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Zap className="h-3 w-3 mr-2 text-yellow-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link href={dashboard.url}>
                    <Button className={`w-full ${colors.button}`}>
                      {isArabic ? 'استكشف الآن' : 'Explore Now'}
                      <ArrowRight className={`${isArabic ? 'mr-2' : 'ml-2'} h-4 w-4`} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Overview */}
        <div className="max-w-7xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {isArabic ? 'لماذا لوحات المعلومات المتقدمة؟' : 'Why Advanced Dashboards?'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg w-fit mb-4">
                <LineChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                {isArabic ? 'تصورات تفاعلية' : 'Interactive Visualizations'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isArabic
                  ? 'رسوم بيانية ديناميكية مع تكبير/تصغير وتحريك وتعليقات توضيحية للأحداث'
                  : 'Dynamic charts with zoom, pan, and event annotations'}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg w-fit mb-4">
                <Database className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                {isArabic ? 'بيانات شاملة' : 'Comprehensive Data'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isArabic
                  ? '526+ نقطة بيانات من مصادر موثوقة (البنك الدولي، صندوق النقد، الأمم المتحدة)'
                  : '526+ data points from trusted sources (World Bank, IMF, UN)'}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg w-fit mb-4">
                <Search className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                {isArabic ? 'بحث وتصفية متقدم' : 'Advanced Search & Filter'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isArabic
                  ? 'ابحث عن أحداث محددة، صفي حسب الفئة، واستكشف الاتجاهات عبر الزمن'
                  : 'Search specific events, filter by category, explore trends over time'}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg w-fit mb-4">
                <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                {isArabic ? 'تحديثات في الوقت الفعلي' : 'Real-time Updates'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isArabic
                  ? 'البيانات محدثة باستمرار من قاعدة البيانات مع أحدث المعلومات'
                  : 'Data continuously updated from database with latest information'}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            {isArabic ? 'هل أنت مستعد للاستكشاف؟' : 'Ready to Explore?'}
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            {isArabic
              ? 'ابدأ باستكشاف أي من لوحات المعلومات الثلاث أعلاه للحصول على رؤى عميقة حول الاقتصاد اليمني'
              : 'Start exploring any of the three dashboards above for deep insights into Yemen\'s economy'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/banking-system-dashboard">
              <Button size="lg" variant="secondary">
                <Building2 className={`${isArabic ? 'ml-2' : 'mr-2'} h-5 w-5`} />
                {isArabic ? 'النظام المصرفي' : 'Banking System'}
              </Button>
            </Link>
            <Link href="/aid-flows-dashboard">
              <Button size="lg" variant="secondary">
                <TrendingUp className={`${isArabic ? 'ml-2' : 'mr-2'} h-5 w-5`} />
                {isArabic ? 'تدفقات المساعدات' : 'Aid Flows'}
              </Button>
            </Link>
            <Link href="/timeline-explorer">
              <Button size="lg" variant="secondary">
                <Calendar className={`${isArabic ? 'ml-2' : 'mr-2'} h-5 w-5`} />
                {isArabic ? 'الجدول الزمني' : 'Timeline'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
