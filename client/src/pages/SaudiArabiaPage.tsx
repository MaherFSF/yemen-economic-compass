import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Shield, 
  AlertTriangle,
  Building2,
  Ship,
  Plane,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'wouter';

/**
 * Saudi Arabia Stakeholder Page
 * Comprehensive analysis of Saudi Arabia's role in Yemen's economy
 */

export default function SaudiArabiaPage() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1538] to-[#D4AF37] text-white">
        <div className="container mx-auto px-4 py-12">
          <Link href="/stakeholder-hub">
            <button className="mb-4 flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" />
              {isArabic ? 'العودة إلى مركز أصحاب المصلحة' : 'Back to Stakeholder Hub'}
            </button>
          </Link>
          
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <Shield className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">
                {isArabic ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}
              </h1>
              <p className="text-white/90 text-lg">
                {isArabic 
                  ? 'قائد التحالف العربي والمانح الرئيسي لليمن'
                  : 'Arab Coalition Leader and Major Donor to Yemen'
                }
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  {isArabic ? 'قائد عسكري' : 'Military Leader'}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  {isArabic ? 'مانح رئيسي' : 'Major Donor'}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  {isArabic ? 'شريك اقتصادي' : 'Economic Partner'}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <DollarSign className="h-5 w-5 text-[#8B1538]" />
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#8B1538]">$18.3B</div>
              <p className="text-sm text-muted-foreground mt-1">
                {isArabic ? 'إجمالي المساعدات (2015-2024)' : 'Total Aid (2015-2024)'}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {isArabic ? 'أكبر مانح ثنائي لليمن' : 'Largest bilateral donor to Yemen'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Users className="h-5 w-5 text-[#8B1538]" />
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#8B1538]">12.4M</div>
              <p className="text-sm text-muted-foreground mt-1">
                {isArabic ? 'المستفيدون من المساعدات' : 'Aid Beneficiaries'}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {isArabic ? 'عبر برامج متعددة' : 'Through multiple programs'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Building2 className="h-5 w-5 text-[#8B1538]" />
                <AlertTriangle className="h-4 w-4 text-orange-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#8B1538]">847</div>
              <p className="text-sm text-muted-foreground mt-1">
                {isArabic ? 'مشاريع تنموية' : 'Development Projects'}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {isArabic ? 'في جميع المحافظات' : 'Across all governorates'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Ship className="h-5 w-5 text-[#8B1538]" />
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#8B1538]">$4.2B</div>
              <p className="text-sm text-muted-foreground mt-1">
                {isArabic ? 'الودائع في البنك المركزي' : 'CBY Deposits'}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {isArabic ? 'دعم احتياطيات النقد الأجنبي' : 'Supporting foreign reserves'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analysis Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">
              {isArabic ? 'نظرة عامة' : 'Overview'}
            </TabsTrigger>
            <TabsTrigger value="military">
              {isArabic ? 'الدور العسكري' : 'Military Role'}
            </TabsTrigger>
            <TabsTrigger value="economic">
              {isArabic ? 'التأثير الاقتصادي' : 'Economic Impact'}
            </TabsTrigger>
            <TabsTrigger value="humanitarian">
              {isArabic ? 'المساعدات الإنسانية' : 'Humanitarian Aid'}
            </TabsTrigger>
            <TabsTrigger value="future">
              {isArabic ? 'التوقعات المستقبلية' : 'Future Outlook'}
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? 'الدور الاستراتيجي' : 'Strategic Role'}</CardTitle>
                <CardDescription>
                  {isArabic 
                    ? 'دور المملكة العربية السعودية في الأزمة اليمنية'
                    : "Saudi Arabia's role in the Yemen crisis"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed">
                  {isArabic 
                    ? 'تلعب المملكة العربية السعودية دورًا محوريًا في الأزمة اليمنية منذ مارس 2015، عندما قادت تحالفًا عربيًا عسكريًا لدعم الحكومة اليمنية المعترف بها دوليًا ضد حركة أنصار الله (الحوثيين). يمتد تأثير السعودية إلى ما هو أبعد من الجوانب العسكرية ليشمل الدعم الاقتصادي والإنساني والدبلوماسي الكبير.'
                    : 'Saudi Arabia has played a pivotal role in the Yemen crisis since March 2015, when it led an Arab military coalition to support the internationally recognized Yemeni government against the Ansar Allah (Houthi) movement. Saudi influence extends beyond military aspects to include significant economic, humanitarian, and diplomatic support.'
                  }
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <h4 className="font-semibold mb-2 text-[#8B1538]">
                      {isArabic ? 'الأهداف الرئيسية' : 'Key Objectives'}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-1">•</span>
                        <span>{isArabic ? 'استعادة الحكومة الشرعية' : 'Restore legitimate government'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-1">•</span>
                        <span>{isArabic ? 'تأمين الحدود الجنوبية' : 'Secure southern borders'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-1">•</span>
                        <span>{isArabic ? 'مواجهة النفوذ الإيراني' : 'Counter Iranian influence'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-1">•</span>
                        <span>{isArabic ? 'دعم الاستقرار الإقليمي' : 'Support regional stability'}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-accent/10 rounded-lg">
                    <h4 className="font-semibold mb-2 text-[#8B1538]">
                      {isArabic ? 'أدوات التأثير' : 'Instruments of Influence'}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-1">•</span>
                        <span>{isArabic ? 'التدخل العسكري المباشر' : 'Direct military intervention'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-1">•</span>
                        <span>{isArabic ? 'المساعدات الاقتصادية الكبيرة' : 'Major economic assistance'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-1">•</span>
                        <span>{isArabic ? 'الدعم الدبلوماسي الدولي' : 'International diplomatic support'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-1">•</span>
                        <span>{isArabic ? 'إعادة الإعمار والتنمية' : 'Reconstruction and development'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? 'الجدول الزمني الرئيسي' : 'Key Timeline'}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: isArabic ? 'مارس 2015' : 'March 2015',
                      event: isArabic ? 'عملية عاصفة الحزم' : 'Operation Decisive Storm',
                      desc: isArabic ? 'بدء التدخل العسكري السعودي' : 'Start of Saudi military intervention'
                    },
                    {
                      date: isArabic ? 'أبريل 2015' : 'April 2015',
                      event: isArabic ? 'عملية إعادة الأمل' : 'Operation Restoring Hope',
                      desc: isArabic ? 'التحول إلى عمليات طويلة الأمد' : 'Shift to long-term operations'
                    },
                    {
                      date: isArabic ? 'نوفمبر 2017' : 'November 2017',
                      event: isArabic ? 'الحصار البحري' : 'Naval Blockade',
                      desc: isArabic ? 'تشديد القيود على الموانئ اليمنية' : 'Tightening restrictions on Yemeni ports'
                    },
                    {
                      date: isArabic ? 'ديسمبر 2018' : 'December 2018',
                      event: isArabic ? 'اتفاق ستوكهولم' : 'Stockholm Agreement',
                      desc: isArabic ? 'دعم سعودي للمفاوضات' : 'Saudi support for negotiations'
                    },
                    {
                      date: isArabic ? 'نوفمبر 2019' : 'November 2019',
                      event: isArabic ? 'اتفاق الرياض' : 'Riyadh Agreement',
                      desc: isArabic ? 'الوساطة بين الحكومة والمجلس الانتقالي' : 'Mediation between government and STC'
                    },
                    {
                      date: isArabic ? 'أبريل 2022' : 'April 2022',
                      event: isArabic ? 'الهدنة' : 'Truce',
                      desc: isArabic ? 'دعم الهدنة التي توسطت فيها الأمم المتحدة' : 'Support for UN-mediated truce'
                    },
                    {
                      date: isArabic ? '2023-2024' : '2023-2024',
                      event: isArabic ? 'المفاوضات المباشرة' : 'Direct Negotiations',
                      desc: isArabic ? 'محادثات مباشرة مع الحوثيين' : 'Direct talks with Houthis'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 pb-4 border-b last:border-0">
                      <div className="flex-shrink-0 w-24 text-sm font-semibold text-[#8B1538]">
                        {item.date}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">{item.event}</h4>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Military Role Tab */}
          <TabsContent value="military" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? 'التحالف العربي' : 'Arab Coalition'}</CardTitle>
                <CardDescription>
                  {isArabic 
                    ? 'القيادة العسكرية السعودية والعمليات'
                    : 'Saudi military leadership and operations'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed">
                  {isArabic 
                    ? 'تقود المملكة العربية السعودية تحالفًا عسكريًا يضم 10 دول عربية وإسلامية، بهدف استعادة الحكومة اليمنية الشرعية. شمل التدخل العسكري غارات جوية واسعة النطاق، وحصارًا بحريًا، ودعمًا للقوات البرية.'
                    : 'Saudi Arabia leads a military coalition of 10 Arab and Islamic countries, aimed at restoring the legitimate Yemeni government. Military intervention has included extensive air strikes, naval blockade, and support for ground forces.'
                  }
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <Plane className="h-6 w-6 text-[#8B1538] mb-2" />
                    <h4 className="font-semibold mb-2 text-sm">
                      {isArabic ? 'العمليات الجوية' : 'Air Operations'}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {isArabic 
                        ? 'أكثر من 250,000 غارة جوية منذ 2015'
                        : 'Over 250,000 air strikes since 2015'
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-accent/10 rounded-lg">
                    <Ship className="h-6 w-6 text-[#8B1538] mb-2" />
                    <h4 className="font-semibold mb-2 text-sm">
                      {isArabic ? 'الحصار البحري' : 'Naval Blockade'}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {isArabic 
                        ? 'السيطرة على الموانئ اليمنية الرئيسية'
                        : 'Control of major Yemeni ports'
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-accent/10 rounded-lg">
                    <Shield className="h-6 w-6 text-[#8B1538] mb-2" />
                    <h4 className="font-semibold mb-2 text-sm">
                      {isArabic ? 'الدعم البري' : 'Ground Support'}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {isArabic 
                        ? 'تدريب وتجهيز القوات اليمنية'
                        : 'Training and equipping Yemeni forces'
                      }
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-orange-900 dark:text-orange-100">
                        {isArabic ? 'التأثير الإنساني' : 'Humanitarian Impact'}
                      </h4>
                      <p className="text-xs text-orange-800 dark:text-orange-200">
                        {isArabic 
                          ? 'أدت العمليات العسكرية إلى خسائر مدنية كبيرة وتدمير للبنية التحتية، مما أثر على الوضع الإنساني في اليمن.'
                          : 'Military operations have resulted in significant civilian casualties and infrastructure destruction, impacting the humanitarian situation in Yemen.'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Economic Impact Tab */}
          <TabsContent value="economic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? 'الدعم الاقتصادي' : 'Economic Support'}</CardTitle>
                <CardDescription>
                  {isArabic 
                    ? 'المساعدات المالية والتنموية السعودية'
                    : 'Saudi financial and development assistance'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-[#8B1538]">
                      {isArabic ? 'الودائع في البنك المركزي' : 'Central Bank Deposits'}
                    </h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{isArabic ? '2018' : '2018'}</span>
                          <span className="text-sm font-bold text-[#8B1538]">$2.0B</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {isArabic ? 'دعم احتياطيات النقد الأجنبي' : 'Supporting foreign reserves'}
                        </p>
                      </div>
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{isArabic ? '2021' : '2021'}</span>
                          <span className="text-sm font-bold text-[#8B1538]">$1.2B</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {isArabic ? 'استقرار سعر الصرف' : 'Exchange rate stabilization'}
                        </p>
                      </div>
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{isArabic ? '2023' : '2023'}</span>
                          <span className="text-sm font-bold text-[#8B1538]">$1.0B</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {isArabic ? 'دعم الموازنة العامة' : 'Budget support'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-[#8B1538]">
                      {isArabic ? 'البرنامج السعودي للتنمية' : 'Saudi Development Program'}
                    </h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{isArabic ? 'الصحة' : 'Health'}</span>
                          <span className="text-sm font-bold text-[#8B1538]">$3.2B</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {isArabic ? '247 مشروع صحي' : '247 health projects'}
                        </p>
                      </div>
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{isArabic ? 'التعليم' : 'Education'}</span>
                          <span className="text-sm font-bold text-[#8B1538]">$1.8B</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {isArabic ? '189 مشروع تعليمي' : '189 education projects'}
                        </p>
                      </div>
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{isArabic ? 'البنية التحتية' : 'Infrastructure'}</span>
                          <span className="text-sm font-bold text-[#8B1538]">$4.1B</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {isArabic ? '411 مشروع بنية تحتية' : '411 infrastructure projects'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3 text-[#8B1538]">
                    {isArabic ? 'التأثير على الاقتصاد اليمني' : 'Impact on Yemeni Economy'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2 text-green-900 dark:text-green-100">
                        {isArabic ? 'التأثيرات الإيجابية' : 'Positive Impacts'}
                      </h5>
                      <ul className="space-y-1 text-xs text-green-800 dark:text-green-200">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{isArabic ? 'دعم احتياطيات النقد الأجنبي' : 'Support for foreign reserves'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{isArabic ? 'استقرار سعر الصرف نسبيًا' : 'Relative exchange rate stability'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{isArabic ? 'تمويل مشاريع تنموية' : 'Financing development projects'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{isArabic ? 'دعم الموازنة العامة' : 'Budget support'}</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2 text-orange-900 dark:text-orange-100">
                        {isArabic ? 'التحديات' : 'Challenges'}
                      </h5>
                      <ul className="space-y-1 text-xs text-orange-800 dark:text-orange-200">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>{isArabic ? 'الحصار البحري يعيق التجارة' : 'Naval blockade impedes trade'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>{isArabic ? 'تدمير البنية التحتية الاقتصادية' : 'Destruction of economic infrastructure'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>{isArabic ? 'اعتماد مفرط على المساعدات' : 'Excessive dependence on aid'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>{isArabic ? 'عدم استقرار بيئة الأعمال' : 'Unstable business environment'}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Humanitarian Aid Tab */}
          <TabsContent value="humanitarian" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? 'المساعدات الإنسانية' : 'Humanitarian Assistance'}</CardTitle>
                <CardDescription>
                  {isArabic 
                    ? 'برامج الإغاثة والمساعدات الإنسانية السعودية'
                    : 'Saudi relief and humanitarian assistance programs'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed">
                  {isArabic 
                    ? 'قدمت المملكة العربية السعودية مساعدات إنسانية واسعة النطاق لليمن من خلال مركز الملك سلمان للإغاثة والأعمال الإنسانية، الذي نفذ أكثر من 1,800 مشروع إنساني وتنموي في جميع المحافظات اليمنية.'
                    : 'Saudi Arabia has provided extensive humanitarian assistance to Yemen through the King Salman Humanitarian Aid and Relief Center, which has implemented over 1,800 humanitarian and development projects across all Yemeni governorates.'
                  }
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Card className="bg-accent/5">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{isArabic ? 'الأمن الغذائي' : 'Food Security'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-[#8B1538] mb-2">$4.8B</div>
                      <p className="text-xs text-muted-foreground mb-3">
                        {isArabic ? 'مساعدات غذائية' : 'Food assistance'}
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-2">
                          <span className="text-[#D4AF37] mt-1">•</span>
                          <span>{isArabic ? '8.4 مليون مستفيد' : '8.4M beneficiaries'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D4AF37] mt-1">•</span>
                          <span>{isArabic ? '2.1 مليون سلة غذائية' : '2.1M food baskets'}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-accent/5">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{isArabic ? 'الصحة' : 'Health'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-[#8B1538] mb-2">$3.2B</div>
                      <p className="text-xs text-muted-foreground mb-3">
                        {isArabic ? 'برامج صحية' : 'Health programs'}
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-2">
                          <span className="text-[#D4AF37] mt-1">•</span>
                          <span>{isArabic ? '247 مشروع صحي' : '247 health projects'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D4AF37] mt-1">•</span>
                          <span>{isArabic ? '6.2 مليون مستفيد' : '6.2M beneficiaries'}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-accent/5">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{isArabic ? 'المياه والصرف الصحي' : 'WASH'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-[#8B1538] mb-2">$1.4B</div>
                      <p className="text-xs text-muted-foreground mb-3">
                        {isArabic ? 'مشاريع المياه' : 'Water projects'}
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-2">
                          <span className="text-[#D4AF37] mt-1">•</span>
                          <span>{isArabic ? '156 مشروع مياه' : '156 water projects'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D4AF37] mt-1">•</span>
                          <span>{isArabic ? '4.1 مليون مستفيد' : '4.1M beneficiaries'}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3 text-[#8B1538]">
                    {isArabic ? 'مركز الملك سلمان للإغاثة' : 'King Salman Humanitarian Aid Center'}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg text-center">
                      <div className="text-xl font-bold text-[#8B1538]">1,893</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {isArabic ? 'مشروع' : 'Projects'}
                      </p>
                    </div>
                    <div className="p-3 bg-accent/10 rounded-lg text-center">
                      <div className="text-xl font-bold text-[#8B1538]">$18.3B</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {isArabic ? 'إجمالي المساعدات' : 'Total Aid'}
                      </p>
                    </div>
                    <div className="p-3 bg-accent/10 rounded-lg text-center">
                      <div className="text-xl font-bold text-[#8B1538]">22</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {isArabic ? 'محافظة' : 'Governorates'}
                      </p>
                    </div>
                    <div className="p-3 bg-accent/10 rounded-lg text-center">
                      <div className="text-xl font-bold text-[#8B1538]">12.4M</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {isArabic ? 'مستفيد' : 'Beneficiaries'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Future Outlook Tab */}
          <TabsContent value="future" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? 'التوقعات المستقبلية' : 'Future Outlook'}</CardTitle>
                <CardDescription>
                  {isArabic 
                    ? 'السيناريوهات المحتملة والتوصيات'
                    : 'Potential scenarios and recommendations'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
                      {isArabic ? 'سيناريو التسوية السياسية' : 'Political Settlement Scenario'}
                    </h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                      {isArabic 
                        ? 'في حالة التوصل إلى اتفاق سياسي شامل، من المتوقع أن تلعب السعودية دورًا محوريًا في إعادة الإعمار والتنمية.'
                        : 'In case of a comprehensive political agreement, Saudi Arabia is expected to play a pivotal role in reconstruction and development.'
                      }
                    </p>
                    <ul className="space-y-1 text-xs text-blue-800 dark:text-blue-200">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{isArabic ? 'استثمارات كبيرة في البنية التحتية' : 'Major infrastructure investments'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{isArabic ? 'دعم إعادة بناء القطاع المصرفي' : 'Support for banking sector reconstruction'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{isArabic ? 'تعزيز التكامل الاقتصادي الإقليمي' : 'Enhancing regional economic integration'}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                    <h4 className="font-semibold mb-2 text-orange-900 dark:text-orange-100">
                      {isArabic ? 'سيناريو استمرار الصراع' : 'Continued Conflict Scenario'}
                    </h4>
                    <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                      {isArabic 
                        ? 'في حالة استمرار الصراع، ستواجه السعودية تحديات متزايدة في تحقيق أهدافها.'
                        : 'In case of continued conflict, Saudi Arabia will face increasing challenges in achieving its objectives.'
                      }
                    </p>
                    <ul className="space-y-1 text-xs text-orange-800 dark:text-orange-200">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>{isArabic ? 'تكاليف عسكرية واقتصادية متزايدة' : 'Increasing military and economic costs'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>{isArabic ? 'ضغوط دولية متزايدة' : 'Increasing international pressure'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>{isArabic ? 'تدهور الوضع الإنساني' : 'Deteriorating humanitarian situation'}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3 text-[#8B1538]">
                    {isArabic ? 'التوصيات' : 'Recommendations'}
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        title: isArabic ? 'دعم المفاوضات السياسية' : 'Support Political Negotiations',
                        desc: isArabic ? 'تكثيف الجهود الدبلوماسية للتوصل إلى حل سياسي شامل' : 'Intensify diplomatic efforts for comprehensive political solution'
                      },
                      {
                        title: isArabic ? 'تحسين الوصول الإنساني' : 'Improve Humanitarian Access',
                        desc: isArabic ? 'تسهيل وصول المساعدات الإنسانية إلى جميع المناطق' : 'Facilitate humanitarian aid access to all areas'
                      },
                      {
                        title: isArabic ? 'دعم الاقتصاد اليمني' : 'Support Yemeni Economy',
                        desc: isArabic ? 'زيادة الدعم للبنك المركزي والقطاع الخاص' : 'Increase support for Central Bank and private sector'
                      },
                      {
                        title: isArabic ? 'الشفافية والمساءلة' : 'Transparency and Accountability',
                        desc: isArabic ? 'تعزيز آليات الشفافية في توزيع المساعدات' : 'Strengthen transparency mechanisms in aid distribution'
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="p-3 bg-accent/10 rounded-lg">
                        <h5 className="font-semibold text-sm mb-1">{item.title}</h5>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
