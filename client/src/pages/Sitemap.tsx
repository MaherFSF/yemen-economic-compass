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
  ChevronRight
} from "lucide-react";

export default function Sitemap() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const sitemapSections = [
    {
      title: isArabic ? "الصفحات الرئيسية" : "Main Pages",
      icon: Home,
      color: "from-[oklch(0.35_0.15_15)] to-[oklch(0.55_0.12_180)]",
      links: [
        { path: "/", label: isArabic ? "الرئيسية" : "Home" },
        { path: "/about", label: isArabic ? "عن المنصة" : "About Platform" },
        { path: "/story", label: isArabic ? "القصة الكاملة" : "Full Story" },
        { path: "/overview", label: isArabic ? "نظرة عامة" : "Overview" },
      ]
    },
    {
      title: isArabic ? "لوحات البيانات المتخصصة" : "Specialized Dashboards",
      icon: BarChart3,
      color: "from-[oklch(0.55_0.12_180)] to-[oklch(0.70_0.12_70)]",
      links: [
        { path: "/executive-dashboard", label: isArabic ? "لوحة المانحين" : "Executive Dashboard" },
        { path: "/cby-dashboard", label: isArabic ? "لوحة البنك المركزي" : "CBY Dashboard" },
        { path: "/compass", label: isArabic ? "لوحة البوصلة" : "Compass Dashboard" },
      ]
    },
    {
      title: isArabic ? "البيانات والتحليل" : "Data & Analysis",
      icon: Database,
      color: "from-[oklch(0.70_0.12_70)] to-[oklch(0.35_0.15_15)]",
      links: [
        { path: "/key-statistics", label: isArabic ? "الإحصاءات الرئيسية" : "Key Statistics" },
        { path: "/transformation", label: isArabic ? "التحول المالي" : "Financial Transformation" },
        { path: "/power-map", label: isArabic ? "خريطة القوى" : "Power Map" },
        { path: "/advanced-viz", label: isArabic ? "رسوم بيانية متقدمة" : "Advanced Visualizations" },
        { path: "/charts", label: isArabic ? "الرسوم البيانية" : "Charts" },
        { path: "/indicators", label: isArabic ? "المؤشرات الإحصائية" : "Statistical Indicators" },
        { path: "/calculators", label: isArabic ? "الحاسبات المالية" : "Financial Calculators" },
      ]
    },
    {
      title: isArabic ? "الأزمة الاقتصادية" : "Economic Crisis",
      icon: TrendingUp,
      color: "from-[oklch(0.35_0.15_15)] to-[oklch(0.70_0.12_70)]",
      links: [
        { path: "/economic-crisis", label: isArabic ? "الأزمة الاقتصادية" : "Economic Crisis" },
        { path: "/currency-war", label: isArabic ? "حرب العملة" : "Currency War" },
        { path: "/youth-economy", label: isArabic ? "اقتصاد الشباب" : "Youth Economy" },
        { path: "/investment", label: isArabic ? "الاستثمار" : "Investment" },
        { path: "/climate-finance", label: isArabic ? "التمويل المناخي" : "Climate Finance" },
      ]
    },
    {
      title: isArabic ? "أصحاب المصلحة" : "Stakeholders",
      icon: Users,
      color: "from-[oklch(0.55_0.12_180)] to-[oklch(0.35_0.15_15)]",
      links: [
        { path: "/stakeholders", label: isArabic ? "مركز أصحاب المصلحة" : "Stakeholder Hub" },
        { path: "/stakeholders/saudi-arabia", label: isArabic ? "المملكة العربية السعودية" : "Saudi Arabia" },
        { path: "/stakeholders/hayel-saeed-anam", label: isArabic ? "حايل سعيد أنعم" : "Hayel Saeed Anam" },
        { path: "/world-bank", label: isArabic ? "رحلة البنك الدولي" : "World Bank Journey" },
        { path: "/financial-flows", label: isArabic ? "شبكة التدفقات المالية" : "Financial Flows Network" },
      ]
    },
    {
      title: isArabic ? "القطاع المصرفي" : "Banking Sector",
      icon: Building2,
      color: "from-[oklch(0.70_0.12_70)] to-[oklch(0.55_0.12_180)]",
      links: [
        { path: "/banks", label: isArabic ? "البنوك التجارية" : "Commercial Banks" },
        { path: "/microfinance", label: isArabic ? "التمويل الأصغر" : "Microfinance" },
        { path: "/cby-aden", label: isArabic ? "البنك المركزي - عدن" : "CBY - Aden" },
        { path: "/cby-sanaa", label: isArabic ? "البنك المركزي - صنعاء" : "CBY - Sana'a" },
      ]
    },
    {
      title: isArabic ? "السياق والتاريخ" : "Context & History",
      icon: Calendar,
      color: "from-[oklch(0.35_0.15_15)] to-[oklch(0.55_0.12_180)]",
      links: [
        { path: "/timeline", label: isArabic ? "الخط الزمني" : "Timeline" },
        { path: "/events", label: isArabic ? "الأحداث الرئيسية" : "Key Events" },
        { path: "/cities", label: isArabic ? "المدن الرئيسية" : "Main Cities" },
      ]
    },
    {
      title: isArabic ? "التقارير والأبحاث" : "Reports & Research",
      icon: FileText,
      color: "from-[oklch(0.55_0.12_180)] to-[oklch(0.70_0.12_70)]",
      links: [
        { path: "/reports", label: isArabic ? "التقارير الدولية" : "International Reports" },
        { path: "/literature", label: isArabic ? "المكتبة البحثية" : "Research Library" },
        { path: "/research", label: isArabic ? "الأبحاث" : "Research" },
      ]
    },
    {
      title: isArabic ? "السياسات والتوقعات" : "Policy & Forecasting",
      icon: Target,
      color: "from-[oklch(0.70_0.12_70)] to-[oklch(0.35_0.15_15)]",
      links: [
        { path: "/policy", label: isArabic ? "التوصيات السياسية" : "Policy Recommendations" },
        { path: "/forecasting", label: isArabic ? "التوقعات" : "Forecasting" },
        { path: "/sanctions", label: isArabic ? "العقوبات" : "Sanctions Tracker" },
      ]
    },
    {
      title: isArabic ? "الموارد والأدوات" : "Resources & Tools",
      icon: Settings,
      color: "from-[oklch(0.35_0.15_15)] to-[oklch(0.70_0.12_70)]",
      links: [
        { path: "/news", label: isArabic ? "الأخبار" : "News Aggregator" },
        { path: "/files", label: isArabic ? "إدارة الملفات" : "File Manager" },
        { path: "/analytics", label: isArabic ? "التحليلات" : "Analytics Dashboard" },
      ]
    },
    {
      title: isArabic ? "عن كوزواي" : "About CauseWay",
      icon: Globe,
      color: "from-[oklch(0.55_0.12_180)] to-[oklch(0.35_0.15_15)]",
      links: [
        { path: "/about-causeway", label: isArabic ? "مؤسسة كوزواي" : "CauseWay Foundation" },
        { path: "/kayan", label: isArabic ? "منصة كيان" : "Kayan Platform" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[oklch(0.35_0.15_15)] to-[oklch(0.55_0.12_180)] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Map className="h-5 w-5 text-[oklch(0.70_0.12_70)]" />
              <span className="text-sm font-semibold">
                {isArabic ? "خريطة الموقع الكاملة" : "Complete Site Map"}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {isArabic ? "خريطة الموقع" : "Sitemap"}
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {isArabic 
                ? "استكشف جميع صفحات ومحتويات منصة البوصلة الاقتصادية لليمن"
                : "Explore all pages and content of the Yemen Economic Compass platform"
              }
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[oklch(0.35_0.15_15)]"
                >
                  <CardHeader>
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={link.path}>
                            <a className="flex items-center gap-2 text-muted-foreground hover:text-[oklch(0.35_0.15_15)] transition-colors group/link">
                              <ChevronRight className={`h-4 w-4 transition-transform group-hover/link:translate-x-1 ${isArabic ? 'rotate-180' : ''}`} />
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
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {isArabic ? "إحصائيات المنصة" : "Platform Statistics"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="text-5xl font-bold text-[oklch(0.35_0.15_15)] mb-2">50+</div>
                <div className="text-sm text-muted-foreground">
                  {isArabic ? "صفحة محتوى" : "Content Pages"}
                </div>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-5xl font-bold text-[oklch(0.55_0.12_180)] mb-2">15</div>
                <div className="text-sm text-muted-foreground">
                  {isArabic ? "سنة من البيانات" : "Years of Data"}
                </div>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-5xl font-bold text-[oklch(0.70_0.12_70)] mb-2">1200+</div>
                <div className="text-sm text-muted-foreground">
                  {isArabic ? "نقطة بيانات" : "Data Points"}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
