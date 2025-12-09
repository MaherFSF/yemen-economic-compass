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
      intlInstitutions: 'المؤسسات الدولية',
      governments: 'الحكومات',
      banksSection: 'البنوك',
      donorsSection: 'المانحون',
      // International Institutions
      imf: 'صندوق النقد الدولي',
      worldBank: 'البنك الدولي',
      unOcha: 'مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية',
      wfp: 'برنامج الأغذية العالمي',
      unhcr: 'مفوضية الأمم المتحدة لشؤون اللاجئين',
      iom: 'المنظمة الدولية للهجرة',
      unicef: 'اليونيسف',
      who: 'منظمة الصحة العالمية',
      fao: 'منظمة الأغذية والزراعة',
      undp: 'برنامج الأمم المتحدة الإنمائي',
      // Governments
      saudiArabia: 'المملكة العربية السعودية',
      uae: 'الإمارات العربية المتحدة',
      govAden: 'حكومة عدن',
      govSanaa: 'حكومة صنعاء',
      // Banks
      cbyAdenStakeholder: 'البنك المركزي - عدن',
      cbySanaaStakeholder: 'البنك المركزي - صنعاء',
      commercialBanks: 'البنوك التجارية',
      microfinanceInst: 'مؤسسات التمويل الأصغر',
      // Donors
      allDonors: 'جميع المانحين',
      bilateralDonors: 'المانحون الثنائيون',
      // Data & Analysis submenu
      dashboardsHub: 'مركز لوحات المعلومات',
      bankingSystemDashboard: 'لوحة النظام المصرفي',
      aidFlowsDashboard: 'لوحة تدفقات المساعدات',
      timelineExplorer: 'مستكشف الجدول الزمني',
      compass: 'لوحة البوصلة',
      whatIfSimulator: 'محاكي ماذا لو',
      yearExplorer: 'مستكشف السنوات',
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
      intlInstitutions: 'International Institutions',
      governments: 'Governments',
      banksSection: 'Banks',
      donorsSection: 'Donors',
      // International Institutions
      imf: 'IMF',
      worldBank: 'World Bank',
      unOcha: 'UN OCHA',
      wfp: 'WFP',
      unhcr: 'UNHCR',
      iom: 'IOM',
      unicef: 'UNICEF',
      who: 'WHO',
      fao: 'FAO',
      undp: 'UNDP',
      // Governments
      saudiArabia: 'Saudi Arabia',
      uae: 'UAE',
      govAden: 'Aden Government',
      govSanaa: 'Sana\'a Government',
      // Banks
      cbyAdenStakeholder: 'CBY-Aden',
      cbySanaaStakeholder: 'CBY-Sana\'a',
      commercialBanks: 'Commercial Banks',
      microfinanceInst: 'Microfinance',
      // Donors
      allDonors: 'All Donors',
      bilateralDonors: 'Bilateral Donors',
      // Data & Analysis submenu
      dashboardsHub: 'Dashboards Hub',
      bankingSystemDashboard: 'Banking System Dashboard',
      aidFlowsDashboard: 'Aid Flows Dashboard',
      timelineExplorer: 'Timeline Explorer',
      compass: 'Compass Dashboard',
      whatIfSimulator: 'What-If Simulator',
      yearExplorer: 'Year Explorer',
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
              <DropdownMenuContent align={isArabic ? "end" : "start"} className="w-72 max-h-[600px] overflow-y-auto">
                {/* International Institutions */}
                <DropdownMenuLabel className="text-xs text-muted-foreground uppercase">
                  {t.intlInstitutions}
                </DropdownMenuLabel>
                <Link href="/imf"><DropdownMenuItem className="cursor-pointer">{t.imf}</DropdownMenuItem></Link>
                <Link href="/world-bank"><DropdownMenuItem className="cursor-pointer">{t.worldBank}</DropdownMenuItem></Link>
                <Link href="/un-ocha"><DropdownMenuItem className="cursor-pointer">{t.unOcha}</DropdownMenuItem></Link>
                <Link href="/wfp"><DropdownMenuItem className="cursor-pointer">{t.wfp}</DropdownMenuItem></Link>
                <Link href="/unhcr"><DropdownMenuItem className="cursor-pointer">{t.unhcr}</DropdownMenuItem></Link>
                <Link href="/iom"><DropdownMenuItem className="cursor-pointer">{t.iom}</DropdownMenuItem></Link>
                <Link href="/unicef"><DropdownMenuItem className="cursor-pointer">{t.unicef}</DropdownMenuItem></Link>
                <Link href="/who"><DropdownMenuItem className="cursor-pointer">{t.who}</DropdownMenuItem></Link>
                <Link href="/fao"><DropdownMenuItem className="cursor-pointer">{t.fao}</DropdownMenuItem></Link>
                <Link href="/undp"><DropdownMenuItem className="cursor-pointer">{t.undp}</DropdownMenuItem></Link>
                <DropdownMenuSeparator />
                {/* Governments */}
                <DropdownMenuLabel className="text-xs text-muted-foreground uppercase">
                  {t.governments}
                </DropdownMenuLabel>
                <Link href="/saudi-arabia"><DropdownMenuItem className="cursor-pointer">{t.saudiArabia}</DropdownMenuItem></Link>
                <Link href="/uae"><DropdownMenuItem className="cursor-pointer">{t.uae}</DropdownMenuItem></Link>
                <Link href="/gov-aden"><DropdownMenuItem className="cursor-pointer">{t.govAden}</DropdownMenuItem></Link>
                <Link href="/gov-sanaa"><DropdownMenuItem className="cursor-pointer">{t.govSanaa}</DropdownMenuItem></Link>
                <DropdownMenuSeparator />
                {/* Banks */}
                <DropdownMenuLabel className="text-xs text-muted-foreground uppercase">
                  {t.banksSection}
                </DropdownMenuLabel>
                <Link href="/cby-aden"><DropdownMenuItem className="cursor-pointer">{t.cbyAdenStakeholder}</DropdownMenuItem></Link>
                <Link href="/cby-sanaa"><DropdownMenuItem className="cursor-pointer">{t.cbySanaaStakeholder}</DropdownMenuItem></Link>
                <Link href="/banks"><DropdownMenuItem className="cursor-pointer">{t.commercialBanks}</DropdownMenuItem></Link>
                <Link href="/microfinance"><DropdownMenuItem className="cursor-pointer">{t.microfinanceInst}</DropdownMenuItem></Link>
                <DropdownMenuSeparator />
                {/* Donors */}
                <DropdownMenuLabel className="text-xs text-muted-foreground uppercase">
                  {t.donorsSection}
                </DropdownMenuLabel>
                <Link href="/donors"><DropdownMenuItem className="cursor-pointer">{t.allDonors}</DropdownMenuItem></Link>
                <Link href="/bilateral-donors"><DropdownMenuItem className="cursor-pointer">{t.bilateralDonors}</DropdownMenuItem></Link>
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
              <DropdownMenuContent align={isArabic ? "end" : "start"} className="w-64 max-h-[600px] overflow-y-auto">
                <DropdownMenuLabel className="text-xs text-muted-foreground uppercase">
                  {isArabic ? 'لوحات المعلومات المتقدمة' : 'Advanced Dashboards'}
                </DropdownMenuLabel>
                <Link href="/dashboards-hub"><DropdownMenuItem className="cursor-pointer font-bold text-blue-600">{t.dashboardsHub}</DropdownMenuItem></Link>
                <Link href="/banking-system-dashboard"><DropdownMenuItem className="cursor-pointer font-semibold text-primary">{t.bankingSystemDashboard}</DropdownMenuItem></Link>
                <Link href="/aid-flows-dashboard"><DropdownMenuItem className="cursor-pointer font-semibold text-primary">{t.aidFlowsDashboard}</DropdownMenuItem></Link>
                <Link href="/timeline-explorer"><DropdownMenuItem className="cursor-pointer font-semibold text-primary">{t.timelineExplorer}</DropdownMenuItem></Link>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs text-muted-foreground uppercase">
                  {isArabic ? 'أدوات تفاعلية' : 'Interactive Tools'}
                </DropdownMenuLabel>
                <Link href="/what-if-simulator"><DropdownMenuItem className="cursor-pointer">{t.whatIfSimulator}</DropdownMenuItem></Link>
                <Link href="/year-explorer"><DropdownMenuItem className="cursor-pointer">{t.yearExplorer}</DropdownMenuItem></Link>
                <Link href="/banks-database"><DropdownMenuItem className="cursor-pointer">{isArabic ? 'قاعدة بيانات البنوك' : 'Banks Database'}</DropdownMenuItem></Link>
                <Link href="/economic-indicators"><DropdownMenuItem className="cursor-pointer">{isArabic ? 'المؤشرات الاقتصادية' : 'Economic Indicators'}</DropdownMenuItem></Link>
                <Link href="/timeline"><DropdownMenuItem className="cursor-pointer">{isArabic ? 'الجدول الزمني' : 'Timeline'}</DropdownMenuItem></Link>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs text-muted-foreground uppercase">
                  {isArabic ? 'لوحات معلومات' : 'Dashboards'}
                </DropdownMenuLabel>
                <Link href="/compass"><DropdownMenuItem className="cursor-pointer">{t.compass}</DropdownMenuItem></Link>
                <Link href="/key-stats"><DropdownMenuItem className="cursor-pointer">{t.keyStats}</DropdownMenuItem></Link>
                <Link href="/transformation"><DropdownMenuItem className="cursor-pointer">{t.transformation}</DropdownMenuItem></Link>
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
              {/* International Institutions */}
              <div className="px-3 py-1 text-xs font-medium text-muted-foreground">{t.intlInstitutions}</div>
              <Link href="/imf"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.imf}</Button></Link>
              <Link href="/world-bank"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.worldBank}</Button></Link>
              <Link href="/un-ocha"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.unOcha}</Button></Link>
              <Link href="/wfp"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.wfp}</Button></Link>
              <Link href="/unhcr"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.unhcr}</Button></Link>
              <Link href="/iom"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.iom}</Button></Link>
              <Link href="/unicef"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.unicef}</Button></Link>
              <Link href="/who"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.who}</Button></Link>
              <Link href="/fao"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.fao}</Button></Link>
              <Link href="/undp"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.undp}</Button></Link>
              {/* Governments */}
              <div className="px-3 py-1 text-xs font-medium text-muted-foreground mt-2">{t.governments}</div>
              <Link href="/saudi-arabia"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.saudiArabia}</Button></Link>
              <Link href="/uae"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.uae}</Button></Link>
              <Link href="/gov-aden"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.govAden}</Button></Link>
              <Link href="/gov-sanaa"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.govSanaa}</Button></Link>
              {/* Banks */}
              <div className="px-3 py-1 text-xs font-medium text-muted-foreground mt-2">{t.banksSection}</div>
              <Link href="/cby-aden"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.cbyAdenStakeholder}</Button></Link>
              <Link href="/cby-sanaa"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.cbySanaaStakeholder}</Button></Link>
              <Link href="/banks"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.commercialBanks}</Button></Link>
              <Link href="/microfinance"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.microfinanceInst}</Button></Link>
              {/* Donors */}
              <div className="px-3 py-1 text-xs font-medium text-muted-foreground mt-2">{t.donorsSection}</div>
              <Link href="/donors"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.allDonors}</Button></Link>
              <Link href="/bilateral-donors"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.bilateralDonors}</Button></Link>
            </div>

            <div className="space-y-1">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase">
                {t.data}
              </div>
              {/* Advanced Dashboards */}
              <div className="px-3 py-1 text-xs font-medium text-muted-foreground">{isArabic ? 'لوحات متقدمة' : 'Advanced Dashboards'}</div>
              <Link href="/dashboards-hub"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.dashboardsHub}</Button></Link>
              <Link href="/banking-system-dashboard"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.bankingSystemDashboard}</Button></Link>
              <Link href="/aid-flows-dashboard"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.aidFlowsDashboard}</Button></Link>
              <Link href="/timeline-explorer"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.timelineExplorer}</Button></Link>
              {/* Analysis Tools */}
              <div className="px-3 py-1 text-xs font-medium text-muted-foreground mt-2">{isArabic ? 'أدوات التحليل' : 'Analysis Tools'}</div>
              <Link href="/what-if-simulator"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.whatIfSimulator}</Button></Link>
              <Link href="/year-explorer"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{t.yearExplorer}</Button></Link>
              <Link href="/banks-database"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{isArabic ? 'قاعدة بيانات البنوك' : 'Banks Database'}</Button></Link>
              <Link href="/economic-indicators"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{isArabic ? 'المؤشرات الاقتصادية' : 'Economic Indicators'}</Button></Link>
              <Link href="/timeline"><Button variant="ghost" className="w-full justify-start pl-6" onClick={() => setMobileMenuOpen(false)}>{isArabic ? 'الجدول الزمني' : 'Timeline'}</Button></Link>
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
