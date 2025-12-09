import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Home, 
  BarChart3, 
  Users, 
  FileText, 
  Building2, 
  TrendingUp,
  Globe,
  BookOpen,
  Settings,
  Map,
  Calendar,
  DollarSign,
  Shield,
  Target,
  Newspaper,
  Database,
  Calculator,
  ChevronRight,
  Landmark,
  HandHeart,
  TreePine,
  Briefcase,
  GraduationCap
} from "lucide-react";

export default function Sitemap() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const sitemapSections = [
    {
      title: isArabic ? "الصفحات الرئيسية" : "Main Pages",
      icon: Home,
      color: "from-blue-600 to-cyan-600",
      count: 3,
      links: [
        { path: "/", label: isArabic ? "الرئيسية" : "Home" },
        { path: "/about", label: isArabic ? "عن المنصة" : "About Platform" },
        { path: "/about-causeway", label: isArabic ? "عن كوزواي" : "About CauseWay" },
      ]
    },
    {
      title: isArabic ? "المؤسسات الدولية" : "International Organizations",
      icon: Globe,
      color: "from-purple-600 to-pink-600",
      count: 10,
      links: [
        { path: "/imf", label: isArabic ? "صندوق النقد الدولي" : "IMF" },
        { path: "/world-bank", label: isArabic ? "البنك الدولي" : "World Bank" },
        { path: "/un-ocha", label: isArabic ? "مكتب الأمم المتحدة" : "UN OCHA" },
        { path: "/wfp", label: isArabic ? "برنامج الأغذية العالمي" : "WFP" },
        { path: "/unhcr", label: isArabic ? "مفوضية اللاجئين" : "UNHCR" },
        { path: "/iom", label: isArabic ? "المنظمة الدولية للهجرة" : "IOM" },
        { path: "/unicef", label: isArabic ? "اليونيسف" : "UNICEF" },
        { path: "/who", label: isArabic ? "منظمة الصحة العالمية" : "WHO" },
        { path: "/fao", label: isArabic ? "منظمة الأغذية والزراعة" : "FAO" },
        { path: "/undp", label: isArabic ? "برنامج الأمم المتحدة الإنمائي" : "UNDP" },
      ]
    },
    {
      title: isArabic ? "الحكومات والمانحون" : "Governments & Donors",
      icon: Landmark,
      color: "from-green-600 to-emerald-600",
      count: 6,
      links: [
        { path: "/saudi-arabia", label: isArabic ? "المملكة العربية السعودية" : "Saudi Arabia" },
        { path: "/uae", label: isArabic ? "الإمارات العربية المتحدة" : "UAE" },
        { path: "/gov-aden", label: isArabic ? "حكومة عدن" : "Aden Government" },
        { path: "/gov-sanaa", label: isArabic ? "حكومة صنعاء" : "Sana'a Government" },
        { path: "/donors", label: isArabic ? "جميع المانحين" : "All Donors" },
        { path: "/bilateral-donors", label: isArabic ? "المانحون الثنائيون" : "Bilateral Donors" },
      ]
    },
    {
      title: isArabic ? "لوحات المعلومات المتقدمة" : "Advanced Dashboards",
      icon: BarChart3,
      color: "from-blue-600 to-indigo-600",
      count: 11,
      links: [
        { path: "/dashboards-hub", label: isArabic ? "مركز لوحات المعلومات" : "Dashboards Hub" },
        { path: "/banking-system-dashboard", label: isArabic ? "لوحة النظام المصرفي" : "Banking System Dashboard" },
        { path: "/aid-flows-dashboard", label: isArabic ? "لوحة تدفقات المساعدات" : "Aid Flows Dashboard" },
        { path: "/timeline-explorer", label: isArabic ? "مستكشف الجدول الزمني" : "Timeline Explorer" },
        { path: "/compass", label: isArabic ? "لوحة البوصلة" : "Compass Dashboard" },
        { path: "/executive-dashboard", label: isArabic ? "لوحة تنفيذية" : "Executive Dashboard" },
        { path: "/cby-dashboard", label: isArabic ? "لوحة البنك المركزي" : "CBY Dashboard" },
        { path: "/banking-dashboard", label: isArabic ? "لوحة البنوك" : "Banking Dashboard" },
        { path: "/key-statistics", label: isArabic ? "الإحصاءات الرئيسية" : "Key Statistics" },
        { path: "/transformation", label: isArabic ? "التحول المالي" : "Financial Transformation" },
        { path: "/power-map", label: isArabic ? "خريطة القوى" : "Power Map" },
      ]
    },
    {
      title: isArabic ? "أدوات تفاعلية" : "Interactive Tools",
      icon: Settings,
      color: "from-orange-600 to-red-600",
      count: 7,
      links: [
        { path: "/what-if-simulator", label: isArabic ? "محاكي السيناريوهات" : "What-If Simulator" },
        { path: "/year-explorer", label: isArabic ? "مستكشف السنوات" : "Year Explorer" },
        { path: "/banks-database", label: isArabic ? "قاعدة بيانات البنوك" : "Banks Database" },
        { path: "/calculators", label: isArabic ? "الحاسبات المالية" : "Financial Calculators" },
        { path: "/data-viz", label: isArabic ? "تصور البيانات" : "Data Visualization" },
        { path: "/advanced-viz", label: isArabic ? "رسوم بيانية متقدمة" : "Advanced Visualizations" },
        { path: "/financial-flows", label: isArabic ? "شبكة التدفقات المالية" : "Financial Flows Network" },
      ]
    },
    {
      title: isArabic ? "الرسوم البيانية والمؤشرات" : "Charts & Indicators",
      icon: TrendingUp,
      color: "from-cyan-600 to-blue-600",
      count: 5,
      links: [
        { path: "/charts", label: isArabic ? "الرسوم البيانية" : "Charts" },
        { path: "/comprehensive-charts", label: isArabic ? "الرسوم البيانية الشاملة" : "Comprehensive Charts" },
        { path: "/indicators", label: isArabic ? "المؤشرات الإحصائية" : "Statistical Indicators" },
        { path: "/analytics", label: isArabic ? "التحليلات" : "Analytics" },
        { path: "/forecasting", label: isArabic ? "التوقعات" : "Forecasting" },
      ]
    },
    {
      title: isArabic ? "القطاع المصرفي" : "Banking Sector",
      icon: Building2,
      color: "from-violet-600 to-purple-600",
      count: 5,
      links: [
        { path: "/cby-aden", label: isArabic ? "البنك المركزي - عدن" : "CBY Aden" },
        { path: "/cby-sanaa", label: isArabic ? "البنك المركزي - صنعاء" : "CBY Sana'a" },
        { path: "/banks", label: isArabic ? "البنوك التجارية" : "Commercial Banks" },
        { path: "/microfinance", label: isArabic ? "التمويل الأصغر" : "Microfinance" },
        { path: "/kayan", label: isArabic ? "منصة كيان" : "Kayan Platform" },
      ]
    },
    {
      title: isArabic ? "الجدول الزمني والأحداث" : "Timeline & Events",
      icon: Calendar,
      color: "from-pink-600 to-rose-600",
      count: 3,
      links: [
        { path: "/timeline", label: isArabic ? "الخط الزمني" : "Timeline" },
        { path: "/events", label: isArabic ? "الأحداث" : "Events" },
        { path: "/story", label: isArabic ? "القصة" : "Story" },
      ]
    },
    {
      title: isArabic ? "التحليل الاقتصادي" : "Economic Analysis",
      icon: DollarSign,
      color: "from-emerald-600 to-teal-600",
      count: 6,
      links: [
        { path: "/overview", label: isArabic ? "نظرة عامة" : "Overview" },
        { path: "/economic-crisis", label: isArabic ? "الأزمة الاقتصادية" : "Economic Crisis" },
        { path: "/currency-war", label: isArabic ? "حرب العملة" : "Currency War" },
        { path: "/policy", label: isArabic ? "التوصيات السياسية" : "Policy Recommendations" },
        { path: "/sanctions", label: isArabic ? "العقوبات" : "Sanctions" },
        { path: "/cities", label: isArabic ? "المدن الرئيسية" : "Main Cities" },
      ]
    },
    {
      title: isArabic ? "القطاعات" : "Sectors",
      icon: Briefcase,
      color: "from-amber-600 to-orange-600",
      count: 3,
      links: [
        { path: "/youth-economy", label: isArabic ? "اقتصاد الشباب" : "Youth Economy" },
        { path: "/investment", label: isArabic ? "الاستثمار" : "Investment" },
        { path: "/climate-finance", label: isArabic ? "التمويل المناخي" : "Climate Finance" },
      ]
    },
    {
      title: isArabic ? "الموارد والأبحاث" : "Resources & Research",
      icon: BookOpen,
      color: "from-indigo-600 to-violet-600",
      count: 6,
      links: [
        { path: "/research", label: isArabic ? "المكتبة البحثية" : "Research Library" },
        { path: "/literature", label: isArabic ? "الأدبيات المالية" : "Financial Literature" },
        { path: "/reports", label: isArabic ? "التقارير الدولية" : "International Reports" },
        { path: "/documents", label: isArabic ? "مكتبة الوثائق" : "Document Library" },
        { path: "/news", label: isArabic ? "الأخبار" : "News" },
        { path: "/files", label: isArabic ? "إدارة الملفات" : "File Manager" },
      ]
    },
    {
      title: isArabic ? "أصحاب المصلحة" : "Stakeholder Hub",
      icon: Users,
      color: "from-teal-600 to-cyan-600",
      count: 1,
      links: [
        { path: "/stakeholders", label: isArabic ? "مركز أصحاب المصلحة" : "Stakeholder Hub" },
      ]
    },
    {
      title: isArabic ? "أخرى" : "Other",
      icon: Map,
      color: "from-slate-600 to-gray-600",
      count: 1,
      links: [
        { path: "/sitemap", label: isArabic ? "خريطة الموقع" : "Sitemap" },
      ]
    },
  ];

  const totalPages = sitemapSections.reduce((sum, section) => sum + section.count, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Map className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "خريطة الموقع" : "Site Map"}
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              {isArabic
                ? "دليل شامل لجميع صفحات ومحتويات منصة البوصلة الاقتصادية"
                : "Complete guide to all pages and content on the Economic Compass platform"}
            </p>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold">{totalPages}</div>
                <div className="text-blue-200 text-sm">{isArabic ? "إجمالي الصفحات" : "Total Pages"}</div>
              </div>
              <div>
                <div className="text-4xl font-bold">{sitemapSections.length}</div>
                <div className="text-blue-200 text-sm">{isArabic ? "الفئات" : "Categories"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sitemap Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sitemapSections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
                <CardHeader className={`bg-gradient-to-r ${section.color} text-white rounded-t-lg`}>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="w-6 h-6" />
                    <div className="flex-1">
                      <div className="text-lg font-bold">{section.title}</div>
                      <div className="text-sm opacity-90">
                        {section.count} {isArabic ? "صفحة" : "pages"}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link href={link.path}>
                          <a className="flex items-center gap-2 text-slate-700 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 group">
                            <ChevronRight className="w-4 h-4 text-blue-500 group-hover:text-blue-600" />
                            <span className="text-sm font-medium">{link.label}</span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="pt-6">
              <p className="text-slate-700">
                {isArabic
                  ? "جميع الصفحات محدثة وتحتوي على بيانات شاملة من 2010-2025. استخدم القائمة العلوية للتنقل السريع."
                  : "All pages are updated with comprehensive data from 2010-2025. Use the top menu for quick navigation."}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
