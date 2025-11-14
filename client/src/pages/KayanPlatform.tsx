import { useState } from 'react';
import { ArrowLeft, Users, FileText, CreditCard, Shield, Scale, CheckCircle2, Rocket } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Kayan Platform Page
 * Dedicated page for Kayan - the team marketplace SaaS platform
 * Part of CauseWay Ventures
 */

export default function KayanPlatform() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  const content = {
    ar: {
      title: 'منصة كيان',
      subtitle: 'منصة إلكترونية تربط العملاء بفرق عمل محترفة لتنفيذ المشاريع',
      tagline: 'راحة البال لمشاريعك',
      description: 'منصة كيان هي منصة برمجية كخدمة (SaaS) تربط الشركات والمؤسسات بفرق عمل متخصصة (Squads) لتنفيذ المشاريع بكفاءة عالية وشفافية كاملة. نوفر مساحات افتراضية فريدة حيث نقوم بإدارة الفريق الذي استأجرته بناءً على الشروط والتسليمات المتفق عليها.',
      valueProposition: 'القيمة المضافة',
      valueText: 'نوفر فرق متخصصة للشركات والمؤسسات في جميع المجالات. نوفر مساحات افتراضية فريدة حيث نقوم بإدارة الفريق الذي استأجرته بناءً على الشروط والتسليمات. يوفر هذا النهج راحة البال للأفراد والشركات الباحثين عن خدمات عالية الجودة وخبرات من اليمن والمنطقة.',
      howItWorks: 'كيف تعمل المنصة',
      features: {
        title: 'الميزات الرئيسية',
        items: [
          {
            icon: Users,
            title: 'مطابقة ذكية للفرق',
            description: 'نشر المشاريع ومطابقتها آليًا مع الفرق المتخصصة بناءً على المهارات والتوافر والخبرة السابقة.',
          },
          {
            icon: FileText,
            title: 'إدارة العقود الإلكترونية',
            description: 'إدارة وتخزين العقود إلكترونيًا مع توقيعات رقمية وأرشفة آمنة لجميع الوثائق.',
          },
          {
            icon: CreditCard,
            title: 'مدفوعات آمنة',
            description: 'تسهيل المدفوعات عبر بوابات دفع مرخّصة مع ضمان عدم الاحتفاظ بالأموال خارج هذه البوابات.',
          },
          {
            icon: Shield,
            title: 'التحقق من الهوية',
            description: 'التحقق من هوية الأفراد والشركات (KYC/KYB) قبل التفعيل لضمان الأمان والموثوقية.',
          },
          {
            icon: Scale,
            title: 'تسوية النزاعات',
            description: 'آلية لتسوية النزاعات عبر التفاوض أو التحكيم الداخلي مع الاحتفاظ بسجلات كل الاتصالات.',
          },
          {
            icon: CheckCircle2,
            title: 'ضمان الجودة',
            description: 'نظام تقييم شامل للفرق والمشاريع لضمان جودة الخدمات المقدمة.',
          },
        ],
      },
      process: {
        title: 'عملية العمل',
        steps: [
          {
            number: '1',
            title: 'نشر المشروع',
            description: 'قم بنشر مشروعك مع تحديد المتطلبات والمهارات المطلوبة والميزانية والجدول الزمني.',
          },
          {
            number: '2',
            title: 'المطابقة الذكية',
            description: 'يقوم النظام بمطابقة مشروعك آليًا مع الفرق المتخصصة الأكثر ملاءمة بناءً على المعايير المحددة.',
          },
          {
            number: '3',
            title: 'مراجعة العروض',
            description: 'راجع العروض المقدمة من الفرق المختلفة، بما في ذلك الأسعار والجداول الزمنية والمحافظ.',
          },
          {
            number: '4',
            title: 'توقيع العقد',
            description: 'اختر الفريق المناسب ووقع العقد إلكترونيًا مع تحديد جميع الشروط والتسليمات.',
          },
          {
            number: '5',
            title: 'تنفيذ المشروع',
            description: 'يبدأ الفريق العمل على المشروع مع متابعة دورية للتقدم عبر المنصة.',
          },
          {
            number: '6',
            title: 'التسليم والدفع',
            description: 'بعد استلام التسليمات والموافقة عليها، يتم إطلاق الدفع للفريق عبر البوابات المرخصة.',
          },
        ],
      },
      benefits: {
        title: 'الفوائد',
        forClients: {
          title: 'للعملاء',
          items: [
            'الوصول إلى فرق متخصصة من اليمن والمنطقة',
            'شفافية كاملة في التكاليف والجداول الزمنية',
            'ضمان الجودة من خلال نظام التقييم',
            'إدارة مركزية لجميع المشاريع',
            'حماية قانونية من خلال العقود الإلكترونية',
          ],
        },
        forTeams: {
          title: 'للفرق',
          items: [
            'الوصول إلى فرص عمل متنوعة',
            'دفعات آمنة ومضمونة',
            'بناء سمعة من خلال التقييمات',
            'دعم في حل النزاعات',
            'أدوات لإدارة المشاريع',
          ],
        },
      },
      targetSectors: {
        title: 'القطاعات المستهدفة',
        items: [
          'تطوير البرمجيات والتطبيقات',
          'التصميم الجرافيكي والإبداعي',
          'الاستشارات المالية والإدارية',
          'البحوث والتحليل',
          'الترجمة والمحتوى',
          'التسويق الرقمي',
          'الهندسة والعمارة',
          'الخدمات القانونية',
        ],
      },
      cta: {
        title: 'هل أنت مستعد للبدء؟',
        description: 'انضم إلى منصة كيان اليوم وابدأ في تنفيذ مشاريعك مع أفضل الفرق المتخصصة.',
        clientButton: 'سجل كعميل',
        teamButton: 'سجل كفريق',
        comingSoon: 'قريبًا',
      },
      partOf: 'جزء من',
      ventures: 'كوزواي للمشاريع',
    },
    en: {
      title: 'Kayan Platform',
      subtitle: 'An electronic platform connecting clients with professional teams to execute projects',
      tagline: 'Peace of Mind for Your Projects',
      description: 'Kayan Platform is a Software-as-a-Service (SaaS) platform that connects companies and institutions with specialized teams (Squads) to execute projects with high efficiency and complete transparency. We provide unique virtual spaces where we manage the team you hired based on agreed terms and deliverables.',
      valueProposition: 'Value Proposition',
      valueText: 'We provide specialized teams for companies and entities in all majors. We provide unique virtual spaces where we manage the team you hired based on terms and deliverables. This approach provides peace of mind for individuals and companies seeking quality services and expertise from Yemen and the region.',
      howItWorks: 'How It Works',
      features: {
        title: 'Key Features',
        items: [
          {
            icon: Users,
            title: 'Smart Team Matching',
            description: 'Post projects and automatically match them with specialized teams based on skills, availability, and past experience.',
          },
          {
            icon: FileText,
            title: 'Electronic Contract Management',
            description: 'Manage and store contracts electronically with digital signatures and secure archiving of all documents.',
          },
          {
            icon: CreditCard,
            title: 'Secure Payments',
            description: 'Facilitate payments through licensed gateways while ensuring funds are not held outside these gateways.',
          },
          {
            icon: Shield,
            title: 'Identity Verification',
            description: 'Verify the identity of individuals and companies (KYC/KYB) before activation to ensure security and reliability.',
          },
          {
            icon: Scale,
            title: 'Dispute Resolution',
            description: 'Mechanism for resolving disputes through negotiation or internal arbitration while maintaining records of all communications.',
          },
          {
            icon: CheckCircle2,
            title: 'Quality Assurance',
            description: 'Comprehensive evaluation system for teams and projects to ensure the quality of services provided.',
          },
        ],
      },
      process: {
        title: 'Work Process',
        steps: [
          {
            number: '1',
            title: 'Post Project',
            description: 'Post your project with requirements, required skills, budget, and timeline.',
          },
          {
            number: '2',
            title: 'Smart Matching',
            description: 'The system automatically matches your project with the most suitable specialized teams based on specified criteria.',
          },
          {
            number: '3',
            title: 'Review Proposals',
            description: 'Review proposals from different teams, including prices, timelines, and portfolios.',
          },
          {
            number: '4',
            title: 'Sign Contract',
            description: 'Choose the right team and sign the contract electronically with all terms and deliverables specified.',
          },
          {
            number: '5',
            title: 'Project Execution',
            description: 'The team starts working on the project with regular progress tracking through the platform.',
          },
          {
            number: '6',
            title: 'Delivery & Payment',
            description: 'After receiving and approving deliverables, payment is released to the team through licensed gateways.',
          },
        ],
      },
      benefits: {
        title: 'Benefits',
        forClients: {
          title: 'For Clients',
          items: [
            'Access to specialized teams from Yemen and the region',
            'Complete transparency in costs and timelines',
            'Quality assurance through evaluation system',
            'Centralized management of all projects',
            'Legal protection through electronic contracts',
          ],
        },
        forTeams: {
          title: 'For Teams',
          items: [
            'Access to diverse work opportunities',
            'Secure and guaranteed payments',
            'Build reputation through reviews',
            'Support in dispute resolution',
            'Project management tools',
          ],
        },
      },
      targetSectors: {
        title: 'Target Sectors',
        items: [
          'Software and App Development',
          'Graphic and Creative Design',
          'Financial and Management Consulting',
          'Research and Analysis',
          'Translation and Content',
          'Digital Marketing',
          'Engineering and Architecture',
          'Legal Services',
        ],
      },
      cta: {
        title: 'Ready to Get Started?',
        description: 'Join Kayan Platform today and start executing your projects with the best specialized teams.',
        clientButton: 'Register as Client',
        teamButton: 'Register as Team',
        comingSoon: 'Coming Soon',
      },
      partOf: 'Part of',
      ventures: 'CauseWay Ventures',
    },
  };
  
  const t = content[language];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/about-causeway">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span>{language === 'ar' ? 'العودة' : 'Back'}</span>
                </button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">{t.title}</h1>
                <p className="text-sm text-muted-foreground">{t.subtitle}</p>
              </div>
            </div>
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm">
              <Rocket className="w-4 h-4" />
              <span>{t.partOf} <strong>{t.ventures}</strong></span>
            </div>
            <h2 className="text-4xl font-bold">{t.tagline}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.description}</p>
          </div>
        </div>
      </div>
      
      {/* Value Proposition */}
      <div className="container py-16">
        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="text-2xl">{t.valueProposition}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">{t.valueText}</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Features */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{t.features.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      
      {/* Process */}
      <div className="bg-muted/30 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t.process.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.process.steps.map((step, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Benefits */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{t.benefits.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t.benefits.forClients.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {t.benefits.forClients.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t.benefits.forTeams.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {t.benefits.forTeams.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Target Sectors */}
      <div className="bg-muted/30 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t.targetSectors.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.targetSectors.items.map((sector, i) => (
              <div key={i} className="p-4 bg-card border rounded-lg text-center">
                <p className="font-semibold">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="container py-16">
        <Card className="border-primary bg-gradient-to-r from-primary/5 to-primary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">{t.cta.title}</CardTitle>
            <CardDescription className="text-lg">{t.cta.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                {t.cta.clientButton}
                <span className="ml-2 text-xs">({t.cta.comingSoon})</span>
              </button>
              <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                {t.cta.teamButton}
                <span className="ml-2 text-xs">({t.cta.comingSoon})</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
