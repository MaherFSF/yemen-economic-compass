import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, FileText, BarChart3, Info, Home, Building2, Calendar, Globe, Landmark, TrendingUp, FileBarChart, ChevronDown, BookOpen, Calculator, LineChart, Users, Shield, Target, FileCheck, Activity, DollarSign, Newspaper, Database, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const isArabic = language === 'ar';

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  // Main navigation structure matching the comprehensive sitemap
  const navStructure = {
    home: { href: "/", label: { ar: "الرئيسية", en: "Home" }, icon: Home },
    
    stakeholders: {
      label: { ar: "أصحاب المصلحة", en: "Stakeholders" },
      icon: Users,
      items: [
        {
          label: { ar: "المؤسسات الدولية", en: "International Institutions" },
          items: [
            { href: "/imf", label: { ar: "صندوق النقد الدولي", en: "IMF" } },
            { href: "/world-bank", label: { ar: "البنك الدولي", en: "World Bank" } },
            { href: "/un-ocha", label: { ar: "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية", en: "UN OCHA" } },
            { href: "/wfp", label: { ar: "برنامج الأغذية العالمي", en: "WFP" } },
            { href: "/unhcr", label: { ar: "مفوضية الأمم المتحدة لشؤون اللاجئين", en: "UNHCR" } },
            { href: "/iom", label: { ar: "المنظمة الدولية للهجرة", en: "IOM" } },
            { href: "/unicef", label: { ar: "اليونيسف", en: "UNICEF" } },
            { href: "/who", label: { ar: "منظمة الصحة العالمية", en: "WHO" } },
            { href: "/fao", label: { ar: "منظمة الأغذية والزراعة", en: "FAO" } },
            { href: "/undp", label: { ar: "برنامج الأمم المتحدة الإنمائي", en: "UNDP" } },
          ]
        },
        {
          label: { ar: "الحكومات", en: "Governments" },
          items: [
            { href: "/gov-aden", label: { ar: "حكومة عدن", en: "Aden Government" } },
            { href: "/gov-sanaa", label: { ar: "حكومة صنعاء", en: "Sana'a Government" } },
            { href: "/saudi-arabia", label: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" } },
            { href: "/uae", label: { ar: "الإمارات العربية المتحدة", en: "UAE" } },
          ]
        },
        {
          label: { ar: "البنوك", en: "Banks" },
          items: [
            { href: "/cby-aden", label: { ar: "البنك المركزي - عدن", en: "CBY-Aden" } },
            { href: "/cby-sanaa", label: { ar: "البنك المركزي - صنعاء", en: "CBY-Sana'a" } },
            { href: "/banks", label: { ar: "البنوك التجارية", en: "Commercial Banks" } },
            { href: "/microfinance", label: { ar: "التمويل الأصغر", en: "Microfinance" } },
          ]
        },
        {
          label: { ar: "المانحون", en: "Donors" },
          items: [
            { href: "/donors", label: { ar: "جميع المانحين", en: "All Donors" } },
            { href: "/bilateral-donors", label: { ar: "المانحون الثنائيون", en: "Bilateral Donors" } },
          ]
        },
      ]
    },

    resources: {
      label: { ar: "الموارد", en: "Resources" },
      icon: Database,
      items: [
        { href: "/indicators", label: { ar: "المؤشرات", en: "Indicators" }, icon: Activity },
        { href: "/events", label: { ar: "الأحداث", en: "Events" }, icon: Calendar },
        { href: "/literature", label: { ar: "المكتبة البحثية", en: "Research Library" }, icon: BookOpen },
        { href: "/data-viz", label: { ar: "البيانات والتحليل", en: "Data & Analysis" }, icon: LineChart },
      ]
    },

    pages: {
      label: { ar: "الصفحات", en: "Pages" },
      icon: FileText,
      items: [
        { href: "/story", label: { ar: "القصة الكاملة", en: "Full Story" } },
        { href: "/economic-crisis", label: { ar: "الأزمة الاقتصادية", en: "Economic Crisis" } },
        { href: "/currency-war", label: { ar: "حرب العملة", en: "Currency War" } },
        { href: "/sanctions", label: { ar: "العقوبات", en: "Sanctions" } },
        { href: "/reports", label: { ar: "التقارير", en: "Reports" } },
      ]
    },

    tools: {
      label: { ar: "الأدوات", en: "Tools" },
      icon: Wrench,
      items: [
        { href: "/calculators", label: { ar: "الحاسبات", en: "Calculators" }, icon: Calculator },
        { href: "/forecasting", label: { ar: "التنبؤ", en: "Forecasting" }, icon: Target },
        { href: "/analytics", label: { ar: "لوحة التحليلات", en: "Analytics" }, icon: BarChart3 },
      ]
    },

    about: { href: "/about", label: { ar: "عن كوزواي", en: "About CauseWay" }, icon: Info },
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-3">
            <img src="/causeway-logo.png" alt="CauseWay" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">CauseWay</span>
              <span className="text-xs text-muted-foreground">
                {isArabic ? "للاستشارات" : "Consultancies"}
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Home */}
          <Link href={navStructure.home.href}>
            <Button
              variant={location === navStructure.home.href ? "default" : "ghost"}
              className="gap-2"
              size="sm"
            >
              <Home className="h-4 w-4" />
              {navStructure.home.label[language]}
            </Button>
          </Link>

          {/* Stakeholders Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                <Users className="h-4 w-4" />
                {navStructure.stakeholders.label[language]}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              {navStructure.stakeholders.items.map((section, idx) => (
                <div key={idx}>
                  {idx > 0 && <DropdownMenuSeparator />}
                  <DropdownMenuLabel>{section.label[language]}</DropdownMenuLabel>
                  {section.items.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="cursor-pointer">
                        {item.label[language]}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Resources Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                <Database className="h-4 w-4" />
                {navStructure.resources.label[language]}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {navStructure.resources.items.map((item) => {
                const Icon = item.icon;
                return (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="cursor-pointer flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {item.label[language]}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Pages Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                <FileText className="h-4 w-4" />
                {navStructure.pages.label[language]}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {navStructure.pages.items.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="cursor-pointer">
                    {item.label[language]}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Tools Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                <Wrench className="h-4 w-4" />
                {navStructure.tools.label[language]}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {navStructure.tools.items.map((item) => {
                const Icon = item.icon;
                return (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="cursor-pointer flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {item.label[language]}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* About */}
          <Link href={navStructure.about.href}>
            <Button
              variant={location === navStructure.about.href ? "default" : "ghost"}
              className="gap-2"
              size="sm"
            >
              <Info className="h-4 w-4" />
              {navStructure.about.label[language]}
            </Button>
          </Link>
          
          {/* Language Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2 ml-2"
          >
            <Globe className="h-4 w-4" />
            {language === 'ar' ? 'EN' : 'عربي'}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
          >
            <Globe className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur max-h-[80vh] overflow-y-auto">
          <div className="container py-4 flex flex-col gap-2">
            {/* Home */}
            <Link href={navStructure.home.href}>
              <Button
                variant={location === navStructure.home.href ? "default" : "ghost"}
                className="w-full justify-start gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="h-4 w-4" />
                {navStructure.home.label[language]}
              </Button>
            </Link>

            {/* Stakeholders Section */}
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                {navStructure.stakeholders.label[language]}
              </div>
              {navStructure.stakeholders.items.map((section, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="px-6 py-1 text-xs font-medium text-muted-foreground">
                    {section.label[language]}
                  </div>
                  {section.items.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start pl-8 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label[language]}
                      </Button>
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* Resources Section */}
            <div className="space-y-1 pt-2">
              <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                {navStructure.resources.label[language]}
              </div>
              {navStructure.resources.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2 pl-6"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label[language]}
                    </Button>
                  </Link>
                );
              })}
            </div>

            {/* Pages Section */}
            <div className="space-y-1 pt-2">
              <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                {navStructure.pages.label[language]}
              </div>
              {navStructure.pages.items.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start pl-6"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label[language]}
                  </Button>
                </Link>
              ))}
            </div>

            {/* Tools Section */}
            <div className="space-y-1 pt-2">
              <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                {navStructure.tools.label[language]}
              </div>
              {navStructure.tools.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2 pl-6"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label[language]}
                    </Button>
                  </Link>
                );
              })}
            </div>

            {/* About */}
            <Link href={navStructure.about.href}>
              <Button
                variant={location === navStructure.about.href ? "default" : "ghost"}
                className="w-full justify-start gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Info className="h-4 w-4" />
                {navStructure.about.label[language]}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
