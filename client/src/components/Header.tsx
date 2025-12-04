import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import GlobalSearch from './GlobalSearch';
import { APP_LOGO } from '@/const';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from './ui/dropdown-menu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme, switchable } = useTheme();
  const isArabic = language === 'ar';
  
  const navigation = {
    ar: {
      home: 'الرئيسية',
      about: 'عن المنصة',
      data: 'البيانات والتحليل',
      pages: 'الصفحات',
      resources: 'الموارد',
      stakeholders: 'أصحاب المصلحة',
      causeway: 'عن كوزواي',
      language: 'English',
      // Stakeholders submenu
      executiveDashboard: 'لوحة المانحين',
      cbyDashboard: 'لوحة البنك المركزي',
      // Data & Analysis submenu
      compass: 'لوحة البوصلة',
      keyStats: 'الإحصاءات الرئيسية',
      transformation: 'التحول المالي',
      powerMap: 'خريطة القوى',
      advancedViz: 'رسوم بيانية متقدمة',
      calculators: 'الحاسبات المالية',
      // Resources submenu
      literature: 'المكتبة البحثية',
      research: 'الأبحاث',
      news: 'الأخبار',
      files: 'إدارة الملفات',
      // Pages submenu
      overview: 'نظرة عامة',
      currencyWar: 'حرب العملة',
      crisis: 'الأزمة الاقتصادية',
      cities: 'المدن الرئيسية',
      events: 'الأحداث',
      timeline: 'الخط الزمني',
      banks: 'البنوك التجارية',
      microfinance: 'التمويل الأصغر',
      cbyAden: 'البنك المركزي - عدن',
      cbySanaa: 'البنك المركزي - صنعاء',
      reports: 'التقارير الدولية',
      sanctions: 'العقوبات',
      forecasting: 'التوقعات',
      policy: 'التوصيات السياسية',
      indicators: 'المؤشرات الإحصائية',
      charts: 'الرسوم البيانية',
      stakeholdersPage: 'مركز أصحاب المصلحة',
    },
    en: {
      home: 'Home',
      about: 'About',
      data: 'Data & Analysis',
      pages: 'Pages',
      resources: 'Resources',
      stakeholders: 'Stakeholders',
      causeway: 'About CauseWay',
      language: 'العربية',
      // Stakeholders submenu
      executiveDashboard: 'Executive Dashboard',
      cbyDashboard: 'CBY Dashboard',
      // Data & Analysis submenu
      compass: 'Compass Dashboard',
      keyStats: 'Key Statistics',
      transformation: 'Financial Transformation',
      powerMap: 'Power Map',
      advancedViz: 'Advanced Visualizations',
      calculators: 'Financial Calculators',
      // Resources submenu
      literature: 'Research Library',
      research: 'Research',
      news: 'News',
      files: 'File Manager',
      // Pages submenu
      overview: 'Overview',
      currencyWar: 'Currency War',
      crisis: 'Economic Crisis',
      cities: 'Key Cities',
      events: 'Events',
      timeline: 'Timeline',
      banks: 'Commercial Banks',
      microfinance: 'Microfinance',
      cbyAden: 'CBY - Aden',
      cbySanaa: 'CBY - Sana\'a',
      reports: 'International Reports',
      sanctions: 'Sanctions',
      forecasting: 'Forecasting',
      policy: 'Policy Recommendations',
      indicators: 'Statistical Indicators',
      charts: 'Charts',
      stakeholdersPage: 'Stakeholder Hub',
    }
  };

  const t = isArabic ? navigation.ar : navigation.en;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/80">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
              <img src={APP_LOGO} alt="Yemen Economic Compass" className="h-10 w-auto" />
              <span className="hidden md:block text-lg font-semibold text-slate-900 dark:text-white">
                {isArabic ? 'البوصلة الاقتصادية' : 'Economic Compass'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Home */}
            <Link href="/">
              <Button variant="ghost" className="text-sm font-medium">
                {t.home}
              </Button>
            </Link>

            {/* Stakeholders Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium">
                  {t.stakeholders}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={isArabic ? "end" : "start"} className="w-64">
                <DropdownMenuLabel className="text-xs text-muted-foreground uppercase">
                  {isArabic ? 'لوحات متخصصة' : 'Specialized Dashboards'}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/executive-dashboard">
                  <DropdownMenuItem className="cursor-pointer py-3">
                    <div>
                      <div className="font-medium">{t.executiveDashboard}</div>
                      <div className="text-xs text-muted-foreground">
                        {isArabic ? 'للمانحين والمؤسسات الدولية' : 'For Donors & International Institutions'}
                      </div>
                    </div>
                  </DropdownMenuItem>
                </Link>
                <Link href="/cby-dashboard">
                  <DropdownMenuItem className="cursor-pointer py-3">
                    <div>
                      <div className="font-medium">{t.cbyDashboard}</div>
                      <div className="text-xs text-muted-foreground">
                        {isArabic ? 'للبنك المركزي اليمني' : 'For Central Bank of Yemen'}
                      </div>
                    </div>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Data & Analysis Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium">
                  {t.data}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={isArabic ? "end" : "start"} className="w-56">
                <Link href="/compass"><DropdownMenuItem className="cursor-pointer">{t.compass}</DropdownMenuItem></Link>
                <Link href="/key-stats"><DropdownMenuItem className="cursor-pointer">{t.keyStats}</DropdownMenuItem></Link>
                <Link href="/transformation"><DropdownMenuItem className="cursor-pointer">{t.transformation}</DropdownMenuItem></Link>
                <DropdownMenuSeparator />
                <Link href="/power-map"><DropdownMenuItem className="cursor-pointer">{t.powerMap}</DropdownMenuItem></Link>
                <Link href="/advanced-viz"><DropdownMenuItem className="cursor-pointer">{t.advancedViz}</DropdownMenuItem></Link>
                <Link href="/calculators"><DropdownMenuItem className="cursor-pointer">{t.calculators}</DropdownMenuItem></Link>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium">
                  {t.resources}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={isArabic ? "end" : "start"} className="w-56">
                <Link href="/literature"><DropdownMenuItem className="cursor-pointer">{t.literature}</DropdownMenuItem></Link>
                <Link href="/research"><DropdownMenuItem className="cursor-pointer">{t.research}</DropdownMenuItem></Link>
                <Link href="/news"><DropdownMenuItem className="cursor-pointer">{t.news}</DropdownMenuItem></Link>
                <Link href="/files"><DropdownMenuItem className="cursor-pointer">{t.files}</DropdownMenuItem></Link>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Pages Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium">
                  {t.pages}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={isArabic ? "end" : "start"} className="w-56 max-h-[500px] overflow-y-auto">
                <DropdownMenuLabel className="text-xs text-muted-foreground uppercase">
                  {isArabic ? 'نظرة عامة' : 'Overview'}
                </DropdownMenuLabel>
                <Link href="/overview"><DropdownMenuItem className="cursor-pointer">{t.overview}</DropdownMenuItem></Link>
                <Link href="/economic-crisis"><DropdownMenuItem className="cursor-pointer">{t.crisis}</DropdownMenuItem></Link>
                <Link href="/currency-war"><DropdownMenuItem className="cursor-pointer">{t.currencyWar}</DropdownMenuItem></Link>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs text-muted-foreground uppercase">
                  {isArabic ? 'الجهات الفاعلة' : 'Actors'}
                </DropdownMenuLabel>
                <Link href="/stakeholder-hub"><DropdownMenuItem className="cursor-pointer">{t.stakeholdersPage}</DropdownMenuItem></Link>
                <Link href="/banks"><DropdownMenuItem className="cursor-pointer">{t.banks}</DropdownMenuItem></Link>
                <Link href="/microfinance"><DropdownMenuItem className="cursor-pointer">{t.microfinance}</DropdownMenuItem></Link>
                <Link href="/cby-aden"><DropdownMenuItem className="cursor-pointer">{t.cbyAden}</DropdownMenuItem></Link>
                <Link href="/cby-sanaa"><DropdownMenuItem className="cursor-pointer">{t.cbySanaa}</DropdownMenuItem></Link>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs text-muted-foreground uppercase">
                  {isArabic ? 'السياق' : 'Context'}
                </DropdownMenuLabel>
                <Link href="/cities"><DropdownMenuItem className="cursor-pointer">{t.cities}</DropdownMenuItem></Link>
                <Link href="/events"><DropdownMenuItem className="cursor-pointer">{t.events}</DropdownMenuItem></Link>
                <Link href="/timeline"><DropdownMenuItem className="cursor-pointer">{t.timeline}</DropdownMenuItem></Link>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs text-muted-foreground uppercase">
                  {isArabic ? 'التحليل' : 'Analysis'}
                </DropdownMenuLabel>
                <Link href="/reports"><DropdownMenuItem className="cursor-pointer">{t.reports}</DropdownMenuItem></Link>
                <Link href="/sanctions"><DropdownMenuItem className="cursor-pointer">{t.sanctions}</DropdownMenuItem></Link>
                <Link href="/forecasting"><DropdownMenuItem className="cursor-pointer">{t.forecasting}</DropdownMenuItem></Link>
                <Link href="/policy"><DropdownMenuItem className="cursor-pointer">{t.policy}</DropdownMenuItem></Link>
                <Link href="/indicators"><DropdownMenuItem className="cursor-pointer">{t.indicators}</DropdownMenuItem></Link>
                <Link href="/charts"><DropdownMenuItem className="cursor-pointer">{t.charts}</DropdownMenuItem></Link>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About */}
            <Link href="/about">
              <Button variant="ghost" className="text-sm font-medium">
                {t.causeway}
              </Button>
            </Link>

            {/* Global Search */}
            <div className="ml-4">
              <GlobalSearch />
            </div>

            {/* Theme Toggle */}
            {switchable && toggleTheme && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-2"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}

            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="ml-2 text-sm font-medium"
            >
              {t.language}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="text-sm"
            >
              {t.language}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 border-t pt-4">
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                {t.home}
              </Button>
            </Link>
            
            <div className="space-y-1">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase">
                {t.stakeholders}
              </div>
              <Link href="/executive-dashboard">
                <Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>
                  {t.executiveDashboard}
                </Button>
              </Link>
              <Link href="/cby-dashboard">
                <Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>
                  {t.cbyDashboard}
                </Button>
              </Link>
            </div>

            <div className="space-y-1">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase">
                {t.data}
              </div>
              <Link href="/compass">
                <Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>
                  {t.compass}
                </Button>
              </Link>
              <Link href="/advanced-viz">
                <Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>
                  {t.advancedViz}
                </Button>
              </Link>
            </div>

            <div className="space-y-1">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase">
                {t.resources}
              </div>
              <Link href="/literature">
                <Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>
                  {t.literature}
                </Button>
              </Link>
              <Link href="/news">
                <Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>
                  {t.news}
                </Button>
              </Link>
              <Link href="/files">
                <Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>
                  {t.files}
                </Button>
              </Link>
            </div>

            <Link href="/about">
              <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                {t.causeway}
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
