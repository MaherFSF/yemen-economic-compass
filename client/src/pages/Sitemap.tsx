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
        { path: "/sitemap", label: isArabic ? "خريطة الموقع" : "Site Map" },
      ]
    },
    {
      title: isArabic ? "لوحات البيانات المتخصصة" : "Specialized Dashboards",
      icon: BarChart3,
      color: "from-[oklch(0.55_0.12_180)] to-[oklch(0.70_0.12_70)]",
      links: [
        { path: "/dashboards-hub", label: isArabic ? "مركز لوحات المعلومات" : "Dashboards Hub" },
        { path: "/banking-system-dashboard", label: isArabic ? "لوحة النظام المصرفي" : "Banking System Dashboard" },
        { path: "/aid-flows-dashboard", label: isArabic ? "لوحة تدفقات المساعدات" : "Aid Flows Dashboard" },
        { path: "/timeline-explorer", label: isArabic ? "مستكشف الجدول الزمني" : "Timeline Explorer" },
      ]
    },
    {
      title: isArabic ? "البيانات والتحليل" : "Data & Analysis",
      icon: Database,
      color: "from-[oklch(0.70_0.12_70)] to-[oklch(0.35_0.15_15)]",
      links: [
        { path: "/what-if-simulator", label: isArabic ? "محاكي السيناريوهات" : "What-If Simulator" },
        { path: "/year-explorer", label: isArabic ? "مستكشف السنوات" : "Year Explorer" },
        { path: "/banks-database", label: isArabic ? "قاعدة بيانات البنوك" : "Banks Database" },
        { path: "/economic-indicators", label: isArabic ? "المؤشرات الاقتصادية" : "Economic Indicators" },
        { path: "/timeline", label: isArabic ? "الجدول الزمني" : "Timeline" },
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
        { path: "/stakeholders/world-bank", label: isArabic ? "البنك الدولي" : "World Bank" },
        { path: "/stakeholders/imf", label: isArabic ? "صندوق النقد الدولي" : "IMF" },
        { path: "/stakeholders/saudi-arabia", label: isArabic ? "المملكة العربية السعودية" : "Saudi Arabia" },
        { path: "/stakeholders/uae", label: isArabic ? "الإمارات العربية المتحدة" : "UAE" },
        { path: "/stakeholders/hayel-saeed-anam", label: isArabic ? "حايل سعيد أنعم" : "Hayel Saeed Anam" },
        { path: "/stakeholders/un-agencies", label: isArabic ? "وكالات الأمم المتحدة" : "UN Agencies" },
      ]
    },
    {
      title: isArabic ? "القطاع المصرفي" : "Banking Sector",
      icon: Building2,
      color: "from-[oklch(0.70_0.12_70)] to-[oklch(0.55_0.12_180)]",
      links: [
        { path: "/dual-central-bank", label: isArabic ? "البنك المركزي المزدوج" : "Dual Central Bank" },
        { path: "/cby-aden", label: isArabic ? "البنك المركزي - عدن" : "CBY Aden" },
        { path: "/cby-sanaa", label: isArabic ? "البنك المركزي - صنعاء" : "CBY Sana'a" },
        { path: "/commercial-banks", label: isArabic ? "البنوك التجارية" : "Commercial Banks" },
        { path: "/microfinance", label: isArabic ? "التمويل الأصغر" : "Microfinance" },
      ]
    },
    {
      title: isArabic ? "الموارد والأدوات" : "Resources & Tools",
      icon: Settings,
      color: "from-[oklch(0.35_0.15_15)] to-[oklch(0.55_0.12_180)]",
      links: [
        { path: "/remittances", label: isArabic ? "التحويلات المالية" : "Remittances" },
        { path: "/humanitarian-aid", label: isArabic ? "المساعدات الإنسانية" : "Humanitarian Aid" },
        { path: "/news", label: isArabic ? "الأخبار" : "News Aggregator" },
        { path: "/files", label: isArabic ? "إدارة الملفات" : "File Storage" },
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
                <div className="text-5xl font-bold text-[oklch(0.70_0.12_70)] mb-2">1700+</div>
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
