import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, ChevronDown, FileText, Newspaper } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from './ui/dropdown-menu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const isArabic = language === 'ar';
  
  const navigation = {
    ar: {
      home: 'الرئيسية',
      about: 'عن المنصة',
      data: 'البيانات والتحليل',
      pages: 'الصفحات',
      resources: 'الموارد',
      causeway: 'عن كوزواي',
      language: 'English',
      stakeholderJourneys: 'رحلات أصحاب المصلحة',
      executiveDashboard: 'لوحة المتابعة التنفيذية',
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
      stakeholders: 'أصحاب المصلحة',
    },
    en: {
      home: 'Home',
      about: 'About',
      data: 'Data & Analysis',
      pages: 'Pages',
      resources: 'Resources',
      causeway: 'About CauseWay',
      language: 'العربية',
      stakeholderJourneys: 'Stakeholder Journeys',
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
      cities: 'Main Cities',
      events: 'Events',
      timeline: 'Timeline',
      banks: 'Commercial Banks',
      microfinance: 'Microfinance',
      cbyAden: 'CBY-Aden',
      cbySanaa: 'CBY-Sana\'a',
      reports: 'International Reports',
      sanctions: 'Sanctions',
      forecasting: 'Forecasting',
      policy: 'Policy Recommendations',
      indicators: 'Statistical Indicators',
      charts: 'Charts',
      stakeholders: 'Stakeholders',
    },
  };
  
  const t = navigation[language];
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/causeway-main.jpeg" alt="CauseWay" className="h-10 w-auto object-contain" />
            <div className="hidden md:block">
              <div className="text-sm font-bold leading-tight">
                {isArabic ? 'منصّة البوصلة الاقتصادية' : 'Yemen Economic Compass'}
              </div>
              <div className="text-xs text-muted-foreground">
                {isArabic ? 'مشروع بحثي من كوزواي' : 'A CauseWay Research Project'}
              </div>
            </div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/">
            <span className="text-sm font-medium hover:text-primary cursor-pointer transition-colors">
              {t.home}
            </span>
          </Link>
          
          {/* Stakeholder Journeys Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                {t.stakeholderJourneys}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <Link href="/executive-dashboard">
                <DropdownMenuItem className="cursor-pointer">{t.executiveDashboard}</DropdownMenuItem>
              </Link>
              <Link href="/cby-dashboard">
                <DropdownMenuItem className="cursor-pointer">{t.cbyDashboard}</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Data & Analysis Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                {t.data}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <Link href="/compass">
                <DropdownMenuItem className="cursor-pointer">{t.compass}</DropdownMenuItem>
              </Link>
              <Link href="/key-statistics">
                <DropdownMenuItem className="cursor-pointer">{t.keyStats}</DropdownMenuItem>
              </Link>
              <Link href="/transformation">
                <DropdownMenuItem className="cursor-pointer">{t.transformation}</DropdownMenuItem>
              </Link>
              <Link href="/power-map">
                <DropdownMenuItem className="cursor-pointer">{t.powerMap}</DropdownMenuItem>
              </Link>
              <Link href="/advanced-viz">
                <DropdownMenuItem className="cursor-pointer">{t.advancedViz}</DropdownMenuItem>
              </Link>
              <Link href="/charts">
                <DropdownMenuItem className="cursor-pointer">{t.charts}</DropdownMenuItem>
              </Link>
              <Link href="/calculators">
                <DropdownMenuItem className="cursor-pointer">{t.calculators}</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Resources Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                {t.resources}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <Link href="/research">
                <DropdownMenuItem className="cursor-pointer">
                  <FileText className="h-4 w-4 mr-2" />
                  {t.research}
                </DropdownMenuItem>
              </Link>
              <Link href="/literature">
                <DropdownMenuItem className="cursor-pointer">
                  <FileText className="h-4 w-4 mr-2" />
                  {t.literature}
                </DropdownMenuItem>
              </Link>
              <Link href="/news">
                <DropdownMenuItem className="cursor-pointer">
                  <Newspaper className="h-4 w-4 mr-2" />
                  {t.news}
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link href="/files">
                <DropdownMenuItem className="cursor-pointer">
                  <FileText className="h-4 w-4 mr-2" />
                  {t.files}
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Pages Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                {t.pages}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 max-h-[500px] overflow-y-auto">
              <Link href="/overview">
                <DropdownMenuItem className="cursor-pointer">{t.overview}</DropdownMenuItem>
              </Link>
              <Link href="/timeline">
                <DropdownMenuItem className="cursor-pointer">{t.timeline}</DropdownMenuItem>
              </Link>
              <Link href="/currency-war">
                <DropdownMenuItem className="cursor-pointer">{t.currencyWar}</DropdownMenuItem>
              </Link>
              <Link href="/stakeholders">
                <DropdownMenuItem className="cursor-pointer">{t.stakeholders}</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link href="/cities">
                <DropdownMenuItem className="cursor-pointer">{t.cities}</DropdownMenuItem>
              </Link>
              <Link href="/events">
                <DropdownMenuItem className="cursor-pointer">{t.events}</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link href="/banks">
                <DropdownMenuItem className="cursor-pointer">{t.banks}</DropdownMenuItem>
              </Link>
              <Link href="/microfinance">
                <DropdownMenuItem className="cursor-pointer">{t.microfinance}</DropdownMenuItem>
              </Link>
              <Link href="/cby-aden">
                <DropdownMenuItem className="cursor-pointer">{t.cbyAden}</DropdownMenuItem>
              </Link>
              <Link href="/cby-sanaa">
                <DropdownMenuItem className="cursor-pointer">{t.cbySanaa}</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link href="/reports">
                <DropdownMenuItem className="cursor-pointer">{t.reports}</DropdownMenuItem>
              </Link>
              <Link href="/sanctions">
                <DropdownMenuItem className="cursor-pointer">{t.sanctions}</DropdownMenuItem>
              </Link>
              <Link href="/forecasting">
                <DropdownMenuItem className="cursor-pointer">{t.forecasting}</DropdownMenuItem>
              </Link>
              <Link href="/policy">
                <DropdownMenuItem className="cursor-pointer">{t.policy}</DropdownMenuItem>
              </Link>
              <Link href="/indicators">
                <DropdownMenuItem className="cursor-pointer">{t.indicators}</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link href="/about-causeway">
            <span className="text-sm font-medium hover:text-primary cursor-pointer transition-colors">
              {t.causeway}
            </span>
          </Link>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
          >
            {t.language}
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
          >
            {t.language}
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container py-4 space-y-4 max-h-[80vh] overflow-y-auto">
            <Link href="/">
              <div className="block py-2 text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                {t.home}
              </div>
            </Link>
            
            <div className="space-y-2">
              <div className="text-sm font-semibold text-muted-foreground">{t.data}</div>
              <Link href="/compass">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.compass}
                </div>
              </Link>
              <Link href="/key-statistics">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.keyStats}
                </div>
              </Link>
              <Link href="/transformation">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.transformation}
                </div>
              </Link>
              <Link href="/power-map">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.powerMap}
                </div>
              </Link>
              <Link href="/advanced-viz">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.advancedViz}
                </div>
              </Link>
              <Link href="/charts">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.charts}
                </div>
              </Link>
              <Link href="/calculators">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.calculators}
                </div>
              </Link>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm font-semibold text-muted-foreground">{t.resources}</div>
              <Link href="/research">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.research}
                </div>
              </Link>
              <Link href="/literature">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.literature}
                </div>
              </Link>
              <Link href="/news">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.news}
                </div>
              </Link>
              <Link href="/files">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.files}
                </div>
              </Link>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm font-semibold text-muted-foreground">{t.pages}</div>
              <Link href="/overview">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.overview}
                </div>
              </Link>
              <Link href="/timeline">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.timeline}
                </div>
              </Link>
              <Link href="/currency-war">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.currencyWar}
                </div>
              </Link>
              <Link href="/stakeholders">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.stakeholders}
                </div>
              </Link>
              <Link href="/cities">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.cities}
                </div>
              </Link>
              <Link href="/events">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.events}
                </div>
              </Link>
              <Link href="/banks">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.banks}
                </div>
              </Link>
              <Link href="/microfinance">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.microfinance}
                </div>
              </Link>
              <Link href="/cby-aden">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.cbyAden}
                </div>
              </Link>
              <Link href="/cby-sanaa">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.cbySanaa}
                </div>
              </Link>
              <Link href="/reports">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.reports}
                </div>
              </Link>
              <Link href="/sanctions">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.sanctions}
                </div>
              </Link>
              <Link href="/forecasting">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.forecasting}
                </div>
              </Link>
              <Link href="/policy">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.policy}
                </div>
              </Link>
              <Link href="/indicators">
                <div className="block py-2 pl-4 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {t.indicators}
                </div>
              </Link>
            </div>
            
            <Link href="/about-causeway">
              <div className="block py-2 text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                {t.causeway}
              </div>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
