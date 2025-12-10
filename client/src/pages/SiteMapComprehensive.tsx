import {
  Building2, Globe, TrendingUp, BarChart3, Calculator,
  Landmark, Calendar, FileText, Users, Database, Map as MapIcon,
  BookOpen, LineChart, DollarSign, Briefcase,
  Target, Layers, Network, Search
} from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface PageItem {
  name: string;
  nameAr: string;
  path: string;
  description: string;
}

interface SiteMapCategory {
  title: string;
  titleAr: string;
  icon: React.ReactNode;
  color: string;
  pages: PageItem[];
}

export default function SiteMapComprehensive() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories: SiteMapCategory[] = [
    {
      title: "Main Pages",
      titleAr: "الصفحات الرئيسية",
      icon: <MapIcon className="w-6 h-6" />,
      color: "from-amber-600 to-[#D97706]",
      pages: [
        { name: "Home", nameAr: "الرئيسية", path: "/", description: "Main landing page with platform overview" },
        { name: "About Platform", nameAr: "عن المنصة", path: "/about-platform", description: "Platform mission and methodology" },
        { name: "About CauseWay", nameAr: "عن كوزواي", path: "/about-causeway", description: "CauseWay Observatory information" },
      ]
    },
    {
      title: "International Organizations",
      titleAr: "المنظمات الدولية",
      icon: <Globe className="w-6 h-6" />,
      color: "from-[#06B6D4] to-[#0891B2]",
      pages: [
        { name: "World Bank", nameAr: "البنك الدولي", path: "/world-bank", description: "World Bank projects and funding in Yemen" },
        { name: "IMF", nameAr: "صندوق النقد الدولي", path: "/imf", description: "IMF reports and economic assessments" },
        { name: "UN OCHA", nameAr: "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية", path: "/un-ocha", description: "Humanitarian coordination and aid tracking" },
        { name: "UNHCR", nameAr: "المفوضية السامية للأمم المتحدة لشؤون اللاجئين", path: "/unhcr", description: "Refugee and displacement data" },
        { name: "UNICEF", nameAr: "منظمة الأمم المتحدة للطفولة", path: "/unicef", description: "Children and humanitarian programs" },
        { name: "IOM", nameAr: "المنظمة الدولية للهجرة", path: "/iom", description: "Migration and displacement tracking" },
        { name: "UNDP", nameAr: "برنامج الأمم المتحدة الإنمائي", path: "/undp", description: "Development programs and projects" },
        { name: "WFP", nameAr: "برنامج الأغذية العالمي", path: "/wfp", description: "Food security and assistance" },
        { name: "FAO", nameAr: "منظمة الأغذية والزراعة", path: "/fao", description: "Agriculture and food security" },
        { name: "WHO", nameAr: "منظمة الصحة العالمية", path: "/who", description: "Health sector support and data" },
      ]
    },
    {
      title: "Governments & Donors",
      titleAr: "الحكومات والمانحون",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-[#10B981] to-[#059669]",
      pages: [
        { name: "Saudi Arabia", nameAr: "المملكة العربية السعودية", path: "/saudi-arabia", description: "Saudi aid and involvement in Yemen" },
        { name: "UAE", nameAr: "الإمارات العربية المتحدة", path: "/uae", description: "UAE assistance and projects" },
        { name: "Aden Government", nameAr: "حكومة عدن", path: "/gov-aden", description: "Internationally recognized government" },
        { name: "Sana'a Government", nameAr: "حكومة صنعاء", path: "/gov-sanaa", description: "De facto authority in Sana'a" },
        { name: "All Donors", nameAr: "جميع المانحين", path: "/donors", description: "Complete donor database" },
        { name: "Bilateral Donors", nameAr: "المانحون الثنائيون", path: "/bilateral-donors", description: "Country-to-country aid" },
      ]
    },
    {
      title: "Advanced Dashboards",
      titleAr: "لوحات المعلومات المتقدمة",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-[#8B5CF6] to-[#7C3AED]",
      pages: [
        { name: "Dashboards Hub", nameAr: "مركز لوحات المعلومات", path: "/dashboards-hub", description: "Central dashboard directory" },
        { name: "Banking System Dashboard", nameAr: "لوحة النظام المصرفي", path: "/banking-system-dashboard", description: "Banking sector overview" },
        { name: "Aid Flows Dashboard", nameAr: "لوحة تدفقات المساعدات", path: "/aid-flows-dashboard", description: "Humanitarian aid tracking" },
        { name: "Timeline Explorer", nameAr: "مستكشف الجدول الزمني", path: "/timeline-explorer", description: "318 events from 2010-2025" },
        { name: "Executive Dashboard", nameAr: "لوحة المعلومات التنفيذية", path: "/executive-dashboard", description: "High-level overview" },
        { name: "CBY Dashboard", nameAr: "لوحة البنك المركزي", path: "/cby-dashboard", description: "Central Bank of Yemen data" },
        { name: "Key Statistics", nameAr: "الإحصائيات الرئيسية", path: "/key-statistics", description: "Core economic indicators" },
        { name: "Financial Transformation", nameAr: "التحول المالي", path: "/transformation", description: "Financial system evolution" },
        { name: "Power Map", nameAr: "خريطة القوى", path: "/power-map", description: "Financial power structure" },
        { name: "Compass Dashboard", nameAr: "لوحة البوصلة", path: "/compass", description: "Economic compass overview" },
      ]
    },
    {
      title: "Interactive Tools",
      titleAr: "الأدوات التفاعلية",
      icon: <Calculator className="w-6 h-6" />,
      color: "from-amber-600 to-[#EF4444]",
      pages: [
        { name: "What-If Simulator", nameAr: "محاكي السيناريوهات", path: "/what-if-simulator", description: "Model alternative economic scenarios" },
        { name: "Year Explorer", nameAr: "مستكشف السنوات", path: "/year-explorer", description: "Year-by-year analysis (2010-2025)" },
        { name: "Financial Calculators", nameAr: "الآلات الحاسبة المالية", path: "/financial-calculators", description: "Exchange rate, inflation, aid calculators" },
        { name: "Data Visualization", nameAr: "تصور البيانات", path: "/data-viz", description: "Interactive charts and graphs" },
        { name: "Advanced Visualizations", nameAr: "التصورات المتقدمة", path: "/advanced-viz", description: "Complex data visualizations" },
        { name: "Financial Flows Network", nameAr: "شبكة التدفقات المالية", path: "/financial-flows", description: "Money flow visualization" },
      ]
    },
    {
      title: "Banking Sector",
      titleAr: "القطاع المصرفي",
      icon: <Landmark className="w-6 h-6" />,
      color: "from-[#06B6D4] to-[#10B981]",
      pages: [
        { name: "Banking Sector Overview", nameAr: "نظرة عامة على القطاع المصرفي", path: "/banking", description: "Complete banking sector analysis" },
        { name: "Banks Database", nameAr: "قاعدة بيانات البنوك", path: "/banks-database", description: "14 banks with detailed data" },
        { name: "Commercial Banks Hub", nameAr: "مركز البنوك التجارية", path: "/banks", description: "Commercial banking overview" },
        { name: "Banking Dashboard", nameAr: "لوحة القطاع المصرفي", path: "/banking-dashboard", description: "Banking metrics and trends" },
        { name: "CBY Aden Tracker", nameAr: "متتبع البنك المركزي عدن", path: "/cby-aden", description: "Central Bank Aden branch" },
        { name: "CBY Sana'a Tracker", nameAr: "متتبع البنك المركزي صنعاء", path: "/cby-sanaa", description: "Central Bank Sana'a branch" },
      ]
    },
    {
      title: "Timeline & Events",
      titleAr: "الجدول الزمني والأحداث",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-[#EC4899] to-[#DB2777]",
      pages: [
        { name: "Timeline", nameAr: "الجدول الزمني", path: "/timeline", description: "318 major events (2010-2025)" },
        { name: "Events Timeline", nameAr: "جدول الأحداث الزمني", path: "/events", description: "Chronological event listing" },
        { name: "Economic Crisis", nameAr: "الأزمة الاقتصادية", path: "/economic-crisis", description: "Crisis timeline and impact" },
        { name: "Currency War", nameAr: "حرب العملات", path: "/currency-war", description: "Currency conflict analysis" },
      ]
    },
    {
      title: "Economic Analysis",
      titleAr: "التحليل الاقتصادي",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-amber-600 to-[#F97316]",
      pages: [
        { name: "Overview", nameAr: "نظرة عامة", path: "/overview", description: "Economic overview" },
        { name: "Charts", nameAr: "الرسوم البيانية", path: "/charts", description: "Economic charts" },
        { name: "Comprehensive Charts", nameAr: "الرسوم البيانية الشاملة", path: "/comprehensive-charts", description: "All economic indicators" },
        { name: "Statistical Indicators", nameAr: "المؤشرات الإحصائية", path: "/indicators", description: "Key economic indicators" },
        { name: "Scenario Forecasting", nameAr: "توقعات السيناريوهات", path: "/forecasting", description: "Economic forecasts" },
        { name: "Policy Recommendations", nameAr: "التوصيات السياسية", path: "/policy", description: "Policy analysis" },
      ]
    },
    {
      title: "Sectors",
      titleAr: "القطاعات",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-[#10B981] to-[#14B8A6]",
      pages: [
        { name: "Youth Economy", nameAr: "اقتصاد الشباب", path: "/youth-economy", description: "Youth economic participation" },
        { name: "Investment", nameAr: "الاستثمار", path: "/investment", description: "Investment climate and opportunities" },
        { name: "Climate Finance", nameAr: "التمويل المناخي", path: "/climate-finance", description: "Climate-related financing" },
        { name: "Microfinance Observatory", nameAr: "مرصد التمويل الأصغر", path: "/microfinance", description: "Microfinance sector tracking" },
      ]
    },
    {
      title: "Resources & Research",
      titleAr: "الموارد والبحوث",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-[#8B5CF6] to-[#A855F7]",
      pages: [
        { name: "Research Library", nameAr: "مكتبة البحوث", path: "/research", description: "4,416 publications from 30 institutions" },
        { name: "Document Library", nameAr: "مكتبة الوثائق", path: "/documents", description: "Document repository" },
        { name: "Financial Literature", nameAr: "الأدبيات المالية", path: "/literature", description: "Financial research papers" },
        { name: "International Reports", nameAr: "التقارير الدولية", path: "/reports", description: "International organization reports" },
        { name: "News Aggregator", nameAr: "مجمع الأخبار", path: "/news", description: "Latest economic news" },
      ]
    },
    {
      title: "Stakeholder Hub",
      titleAr: "مركز أصحاب المصلحة",
      icon: <Users className="w-6 h-6" />,
      color: "from-[#06B6D4] to-[#8B5CF6]",
      pages: [
        { name: "Stakeholder Hub", nameAr: "مركز أصحاب المصلحة", path: "/stakeholders", description: "46 stakeholder organizations" },
        { name: "Hayel Saeed Anam Group", nameAr: "مجموعة حايل سعيد أنعم", path: "/stakeholders/hayel-saeed-anam", description: "Major business conglomerate" },
        { name: "Sanctions Tracker", nameAr: "متتبع العقوبات", path: "/sanctions", description: "International sanctions tracking" },
      ]
    },
    {
      title: "Additional Pages",
      titleAr: "صفحات إضافية",
      icon: <Layers className="w-6 h-6" />,
      color: "from-[#64748B] to-[#475569]",
      pages: [
        { name: "Main Cities", nameAr: "المدن الرئيسية", path: "/cities", description: "Economic data by city" },
        { name: "File Manager", nameAr: "مدير الملفات", path: "/files", description: "Document management" },
        { name: "Kayan Platform", nameAr: "منصة كيان", path: "/kayan", description: "Kayan platform integration" },
        { name: "Story Page", nameAr: "صفحة القصة", path: "/story", description: "Platform story and journey" },
        { name: "Analytics Dashboard", nameAr: "لوحة التحليلات", path: "/analytics", description: "Platform analytics" },
      ]
    },
  ];

  const allPages = categories.flatMap(cat => 
    cat.pages.map(page => ({ ...page, category: cat.title, categoryAr: cat.titleAr }))
  );

  const filteredCategories = categories.map(cat => ({
    ...cat,
    pages: cat.pages.filter(page => 
      page.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.nameAr.includes(searchQuery) ||
      page.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.pages.length > 0);

  const totalPages = allPages.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-amber-600 via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
            Complete Site Map
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-muted-foreground">
            خريطة الموقع الشاملة
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Navigate through all {totalPages} pages of the Yemen Economic Compass platform. 
            Access comprehensive data, tools, and analysis covering 16 years of economic transformation.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" dir="rtl">
            تصفح جميع صفحات منصة البوصلة الاقتصادية اليمنية ({totalPages} صفحة). 
            الوصول إلى البيانات والأدوات والتحليلات الشاملة التي تغطي 16 عامًا من التحول الاقتصادي.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search pages... / ابحث عن الصفحات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <Card className="p-6 text-center bg-gradient-to-br from-amber-600/10 to-[#D97706]/10 border-blue-200/20">
            <div className="text-4xl font-black text-blue-800 mb-2">{totalPages}</div>
            <div className="text-sm text-muted-foreground">Total Pages</div>
            <div className="text-sm text-muted-foreground" dir="rtl">إجمالي الصفحات</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-[#06B6D4]/10 to-[#0891B2]/10 border-[#06B6D4]/20">
            <div className="text-4xl font-black text-teal-600 mb-2">{categories.length}</div>
            <div className="text-sm text-muted-foreground">Categories</div>
            <div className="text-sm text-muted-foreground" dir="rtl">الفئات</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-[#10B981]/10 to-[#059669]/10 border-[#10B981]/20">
            <div className="text-4xl font-black text-[#10B981] mb-2">318</div>
            <div className="text-sm text-muted-foreground">Events</div>
            <div className="text-sm text-muted-foreground" dir="rtl">الأحداث</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-[#8B5CF6]/10 to-[#7C3AED]/10 border-[#8B5CF6]/20">
            <div className="text-4xl font-black text-violet-600 mb-2">46</div>
            <div className="text-sm text-muted-foreground">Stakeholders</div>
            <div className="text-sm text-muted-foreground" dir="rtl">أصحاب المصلحة</div>
          </Card>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {filteredCategories.map((category, idx) => (
            <Card key={idx} className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <h4 className="text-xl font-semibold text-muted-foreground" dir="rtl">{category.titleAr}</h4>
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {category.pages.length} pages
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.pages.map((page, pageIdx) => (
                  <Link key={pageIdx} href={page.path}>
                    <Card className="p-4 hover:bg-muted/50 transition-colors cursor-pointer h-full border-l-4" style={{ borderLeftColor: category.color.split(' ')[0].replace('from-', '') }}>
                      <h5 className="font-semibold text-lg mb-1">{page.name}</h5>
                      <p className="text-sm text-muted-foreground mb-2" dir="rtl">{page.nameAr}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">{page.description}</p>
                      <p className="text-xs text-muted-foreground/70 mt-2 font-mono">{page.path}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {searchQuery && filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No pages found matching "{searchQuery}"</p>
            <p className="text-xl text-muted-foreground" dir="rtl">لم يتم العثور على صفحات تطابق "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
