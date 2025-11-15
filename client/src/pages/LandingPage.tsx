import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Building2, Users, Database, FileText, BarChart3 } from 'lucide-react';

export default function LandingPage() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    ar: {
      hero: {
        title: 'البوصلة الاقتصادية للحرب في اليمن',
        subtitle: 'منصة تحليلية شاملة لفهم التحولات المالية والاقتصادية في اليمن',
        stat1: { value: '$2.4B', label: 'المساعدات الإنسانية 2024' },
        stat2: { value: '8.2M', label: 'المستفيدون من البرامج' },
        stat3: { value: '1,800', label: 'سعر الصرف الموازي (YER/USD)' },
        cta: 'استكشف المنصة',
      },
      stakeholders: {
        title: 'اختر رحلتك',
        subtitle: 'مسارات متخصصة حسب احتياجاتك',
        donors: {
          title: 'المانحون والمؤسسات الدولية',
          desc: 'لوحة تنفيذية لتتبع التأثير والعائد على الاستثمار',
          link: '/executive-dashboard',
        },
        cby: {
          title: 'البنك المركزي اليمني',
          desc: 'أدوات السياسة النقدية ومحاكاة السيناريوهات',
          link: '/cby-dashboard',
        },
        researchers: {
          title: 'الباحثون والمحللون',
          desc: 'بيانات شاملة ومكتبة بحثية متعمقة',
          link: '/literature',
        },
      },
      trust: {
        title: 'مصادر البيانات',
        updated: 'آخر تحديث: 15 نوفمبر 2024',
      },
      quickAccess: {
        title: 'الوصول السريع',
        items: [
          { icon: BarChart3, label: 'لوحة البوصلة', link: '/compass' },
          { icon: TrendingUp, label: 'الإحصاءات الرئيسية', link: '/key-stats' },
          { icon: FileText, label: 'التقارير', link: '/reports' },
          { icon: Database, label: 'البيانات المتقدمة', link: '/advanced-viz' },
          { icon: Users, label: 'أصحاب المصلحة', link: '/stakeholder-hub' },
          { icon: Building2, label: 'البنوك التجارية', link: '/banks' },
        ],
      },
    },
    en: {
      hero: {
        title: 'Yemen Economic Compass',
        subtitle: 'Comprehensive analytical platform for understanding Yemen\'s financial and economic transformations',
        stat1: { value: '$2.4B', label: 'Humanitarian Aid 2024' },
        stat2: { value: '8.2M', label: 'Program Beneficiaries' },
        stat3: { value: '1,800', label: 'Parallel Exchange Rate (YER/USD)' },
        cta: 'Explore Platform',
      },
      stakeholders: {
        title: 'Choose Your Journey',
        subtitle: 'Specialized pathways tailored to your needs',
        donors: {
          title: 'Donors & International Institutions',
          desc: 'Executive dashboard for impact tracking and ROI analysis',
          link: '/executive-dashboard',
        },
        cby: {
          title: 'Central Bank of Yemen',
          desc: 'Monetary policy tools and scenario simulation',
          link: '/cby-dashboard',
        },
        researchers: {
          title: 'Researchers & Analysts',
          desc: 'Comprehensive data and in-depth research library',
          link: '/literature',
        },
      },
      trust: {
        title: 'Data Sources',
        updated: 'Last updated: November 15, 2024',
      },
      quickAccess: {
        title: 'Quick Access',
        items: [
          { icon: BarChart3, label: 'Compass Dashboard', link: '/compass' },
          { icon: TrendingUp, label: 'Key Statistics', link: '/key-stats' },
          { icon: FileText, label: 'Reports', link: '/reports' },
          { icon: Database, label: 'Advanced Data', link: '/advanced-viz' },
          { icon: Users, label: 'Stakeholders', link: '/stakeholder-hub' },
          { icon: Building2, label: 'Commercial Banks', link: '/banks' },
        ],
      },
    },
  };

  const t = isArabic ? content.ar : content.en;

  return (
    <div className="min-h-screen">
      {/* Hero Section - 5 seconds */}
      <section 
        className="relative h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/sanaa-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Sophisticated overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/95 via-[#8B1538]/85 to-[#475569]/90"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: isArabic ? 'Noto Naskh Arabic, serif' : 'Playfair Display, serif' }}>
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light">
            {t.hero.subtitle}
          </p>

          {/* 3 Key Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-[#D4AF37]">{t.hero.stat1.value}</div>
              <div className="text-sm mt-2 text-white/90">{t.hero.stat1.label}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-[#D4AF37]">{t.hero.stat2.value}</div>
              <div className="text-sm mt-2 text-white/90">{t.hero.stat2.label}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-[#D4AF37]">{t.hero.stat3.value}</div>
              <div className="text-sm mt-2 text-white/90">{t.hero.stat3.label}</div>
            </div>
          </div>

          {/* Single CTA */}
          <Link href="/compass">
            <Button size="lg" className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#8B1538] font-semibold text-lg px-8 py-6">
              {t.hero.cta}
              <ArrowRight className={`${isArabic ? 'mr-2' : 'ml-2'} h-5 w-5`} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Value Proposition - 3 Stakeholder Cards - 10 seconds */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#8B1538] mb-4" style={{ fontFamily: isArabic ? 'Noto Naskh Arabic, serif' : 'Playfair Display, serif' }}>
              {t.stakeholders.title}
            </h2>
            <p className="text-lg text-slate-600">
              {t.stakeholders.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Donors Card */}
            <Link href={t.stakeholders.donors.link}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#8B1538] group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-[#8B1538]/10 flex items-center justify-center mb-6 group-hover:bg-[#8B1538] transition-colors">
                    <TrendingUp className="h-8 w-8 text-[#8B1538] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#8B1538] mb-3">
                    {t.stakeholders.donors.title}
                  </h3>
                  <p className="text-slate-600">
                    {t.stakeholders.donors.desc}
                  </p>
                  <div className="mt-6 flex items-center text-[#8B1538] font-semibold group-hover:translate-x-2 transition-transform">
                    {isArabic ? 'ابدأ الآن' : 'Get Started'}
                    <ArrowRight className={`${isArabic ? 'mr-2' : 'ml-2'} h-4 w-4`} />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* CBY Card */}
            <Link href={t.stakeholders.cby.link}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#8B1538] group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-[#8B1538]/10 flex items-center justify-center mb-6 group-hover:bg-[#8B1538] transition-colors">
                    <Building2 className="h-8 w-8 text-[#8B1538] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#8B1538] mb-3">
                    {t.stakeholders.cby.title}
                  </h3>
                  <p className="text-slate-600">
                    {t.stakeholders.cby.desc}
                  </p>
                  <div className="mt-6 flex items-center text-[#8B1538] font-semibold group-hover:translate-x-2 transition-transform">
                    {isArabic ? 'ابدأ الآن' : 'Get Started'}
                    <ArrowRight className={`${isArabic ? 'mr-2' : 'ml-2'} h-4 w-4`} />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Researchers Card */}
            <Link href={t.stakeholders.researchers.link}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#8B1538] group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-[#8B1538]/10 flex items-center justify-center mb-6 group-hover:bg-[#8B1538] transition-colors">
                    <FileText className="h-8 w-8 text-[#8B1538] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#8B1538] mb-3">
                    {t.stakeholders.researchers.title}
                  </h3>
                  <p className="text-slate-600">
                    {t.stakeholders.researchers.desc}
                  </p>
                  <div className="mt-6 flex items-center text-[#8B1538] font-semibold group-hover:translate-x-2 transition-transform">
                    {isArabic ? 'ابدأ الآن' : 'Get Started'}
                    <ArrowRight className={`${isArabic ? 'mr-2' : 'ml-2'} h-4 w-4`} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals - 5 seconds */}
      <section className="py-16 bg-white border-y">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#8B1538] mb-2">
              {t.trust.title}
            </h3>
            <p className="text-sm text-slate-500">{t.trust.updated}</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-lg">
              <img src="https://logo.clearbit.com/worldbank.org" alt="World Bank" className="h-8 w-8" />
              <span className="font-semibold text-slate-700">World Bank</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-lg">
              <img src="https://logo.clearbit.com/imf.org" alt="IMF" className="h-8 w-8" />
              <span className="font-semibold text-slate-700">IMF</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-lg">
              <img src="https://logo.clearbit.com/unocha.org" alt="OCHA" className="h-8 w-8" />
              <span className="font-semibold text-slate-700">UN OCHA</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-lg">
              <span className="font-semibold text-slate-700">CBY</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-lg">
              <span className="font-semibold text-slate-700">Sana'a Center</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access - 6 Icon Tiles - 5 seconds */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-[#8B1538] text-center mb-12" style={{ fontFamily: isArabic ? 'Noto Naskh Arabic, serif' : 'Playfair Display, serif' }}>
            {t.quickAccess.title}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {t.quickAccess.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link key={index} href={item.link}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 group">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-[#8B1538]/10 flex items-center justify-center mb-4 group-hover:bg-[#8B1538] transition-colors">
                        <Icon className="h-6 w-6 text-[#8B1538] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 group-hover:text-[#8B1538]">
                        {item.label}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
