import { useState } from 'react';
import { ArrowLeft, Building2, GraduationCap, Briefcase, Rocket, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * About CauseWay Page
 * Presents the complete organizational structure:
 * - CauseWay Foundation (parent)
 * - CauseWay Arcadia (training, research, impact)
 * - CauseWay Consultancies (advisory, financial services)
 * - CauseWay Ventures (dual-impact startups, Kayan)
 */

export default function AboutCauseWay() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  const content = {
    ar: {
      title: 'عن كوزواي',
      subtitle: 'منظمة عالمية للتنمية والاستشارات والابتكار',
      foundation: {
        title: 'مؤسسة كوزواي',
        tagline: 'شراكة من أجل عالمنا',
        description: 'مؤسسة كوزواي هي منظمة غير ربحية عالمية تعمل على تعزيز التنمية المستدامة والشمول المالي والابتكار الاجتماعي في المناطق المتأثرة بالنزاعات والأزمات. تأسست المؤسسة على مبدأ أن التحول الإيجابي يتطلب شراكات حقيقية بين القطاعات المختلفة - الحكومات والمنظمات الدولية والقطاع الخاص والمجتمع المدني.',
        mission: 'مهمتنا',
        missionText: 'بناء جسور المعرفة والخبرة لتمكين المجتمعات من تحقيق التنمية المستدامة والازدهار الاقتصادي، حتى في أصعب الظروف.',
        vision: 'رؤيتنا',
        visionText: 'عالم يتمتع فيه كل فرد بفرص متساوية للوصول إلى الخدمات المالية والمعلومات الموثوقة والأدوات اللازمة لبناء مستقبل أفضل.',
        values: 'قيمنا',
        valuesItems: [
          { title: 'الأصالة', desc: 'نلتزم بتقديم معلومات دقيقة وموثوقة' },
          { title: 'الشمولية', desc: 'نؤمن بحق الجميع في الوصول إلى الخدمات المالية' },
          { title: 'الابتكار', desc: 'نبحث عن حلول مبتكرة للتحديات المعقدة' },
          { title: 'الشراكة', desc: 'نعمل مع جميع الأطراف لتحقيق الأثر المستدام' },
          { title: 'الشفافية', desc: 'نلتزم بالشفافية الكاملة في جميع أعمالنا' },
        ],
      },
      arcadia: {
        title: 'كوزواي أركاديا',
        tagline: 'التدريب، بناء القدرات، البحوث والتحليل، ومركز قياس الأثر',
        description: 'كوزواي أركاديا هي ذراع البحث والتدريب في المؤسسة. نقدم برامج تدريبية متخصصة، ونجري بحوثًا معمقة، ونقيس الأثر الاجتماعي والاقتصادي للمشاريع والسياسات.',
        services: [
          {
            title: 'برامج التدريب',
            items: [
              'تدريب متخصص في المعايير المالية الدولية (IFRS)',
              'ورش عمل في مكافحة غسل الأموال وتمويل الإرهاب',
              'برامج بناء القدرات للمؤسسات المالية',
              'تدريب على أنظمة المعلومات الإدارية',
            ],
          },
          {
            title: 'البحوث والتحليل',
            items: [
              'دراسات اقتصادية معمقة للأسواق الناشئة',
              'تحليل السياسات المالية والنقدية',
              'بحوث حول الاقتصاد غير الرسمي',
              'دراسات الجدوى الاقتصادية',
            ],
          },
          {
            title: 'قياس الأثر',
            items: [
              'تصميم أطر قياس الأثر الاجتماعي',
              'تقييم المشاريع التنموية',
              'مراقبة وتقييم البرامج الإنسانية',
              'لوحات معلومات للمانحين لتتبع الأثر',
            ],
          },
        ],
      },
      consultancies: {
        title: 'كوزواي للاستشارات',
        tagline: 'الخدمات الاستشارية، الاستراتيجية والتنفيذ',
        description: 'كوزواي للاستشارات تقدم خدمات استشارية متخصصة للمؤسسات المالية والحكومات والمنظمات الدولية، مع تركيز خاص على اليمن والمنطقة.',
        platformNote: 'منصة البوصلة الاقتصادية لليمن هي أحد مشاريع قسم الاستخبارات المالية في كوزواي للاستشارات.',
        services: [
          {
            category: 'أ. التطوير الكامل وتكامل الأنظمة',
            items: [
              'تصميم وتطوير وإدارة البرامج المخصصة',
              'أنظمة المؤسسات وتطبيقات الهاتف المحمول',
              'المحافظ الرقمية للقطاع المصرفي والمالي والتمويل الأصغر',
            ],
          },
          {
            category: 'ب. تحويل الخدمات المصرفية الأساسية والتقنية المالية',
            items: [
              'تحديث الأنظمة المالية القديمة',
              'نقل المؤسسات إلى منصات مرنة قائمة على واجهات برمجة التطبيقات',
              'استشارات تقنية واستراتيجية شاملة',
            ],
          },
          {
            category: 'ج. التقنية التنظيمية والامتثال',
            items: [
              'تنفيذ IFRS-9 ونماذج الخسائر الائتمانية المتوقعة (ECL)',
              'نمذجة مخاطر الائتمان',
              'تصميم أطر مكافحة غسل الأموال ومنع تمويل الإرهاب وفحص العقوبات',
              'الامتثال لمتطلبات البنك المركزي والمتطلبات الدولية',
            ],
          },
          {
            category: 'د. المعايير المالية واستشارات المخاطر',
            items: [
              'تقديم الاستشارات التقنية ودعم التنفيذ لـ IFRS 9 ومعايير التقارير الأخرى',
              'تصميم والتحقق من نماذج مخاطر الائتمان',
              'تقييم المخاطر المؤسسية',
            ],
          },
          {
            category: 'هـ. خدمات المانحين والمشاريع',
            items: [
              'مراقبة المشاريع في الوقت الفعلي',
              'لوحات معلومات مخصصة للمانحين',
              'تتبع شفاف لكل عنصر من عناصر المشروع',
              'أنظمة إدارة المشاريع',
            ],
          },
        ],
      },
      ventures: {
        title: 'كوزواي للمشاريع',
        tagline: 'مشاريع ذات أثر مزدوج - مربحة ومؤثرة',
        description: 'كوزواي للمشاريع تدعم الشركات الناشئة التي تجمع بين الربحية والأثر الاجتماعي الإيجابي. نستثمر في نماذج أعمال فريدة ومبتكرة مع حصة ثابتة في رأس المال.',
        approach: 'نهجنا',
        approachText: 'نبحث عن شركات ناشئة تقدم حلولاً مبتكرة لتحديات حقيقية، مع نموذج عمل مستدام يحقق عوائد مالية وأثر اجتماعي قابل للقياس.',
        criteria: 'معايير الاستثمار',
        criteriaItems: [
          'نموذج عمل مبتكر ومستدام',
          'أثر اجتماعي واضح وقابل للقياس',
          'فريق عمل متميز وملتزم',
          'إمكانية التوسع والنمو',
          'توافق مع قيم كوزواي',
        ],
        portfolio: 'محفظة المشاريع',
        kayan: {
          name: 'منصة كيان',
          description: 'منصة إلكترونية تربط العملاء بفرق عمل محترفة (Squads) لتنفيذ المشاريع',
          features: [
            'نشر المشاريع ومطابقتها آليًا مع الفرق المتخصصة',
            'إدارة العقود إلكترونيًا وتخزينها',
            'تسهيل المدفوعات عبر بوابات دفع مرخّصة',
            'التحقق من هوية الأفراد والشركات (KYC/KYB)',
            'آلية لتسوية النزاعات عبر التفاوض أو التحكيم',
          ],
          value: 'القيمة المضافة',
          valueText: 'نوفر فرق متخصصة للشركات والمؤسسات في جميع المجالات. نوفر مساحات افتراضية فريدة حيث نقوم بإدارة الفريق الذي استأجرته بناءً على الشروط والتسليمات. يوفر هذا النهج راحة البال للأفراد والشركات الباحثين عن خدمات عالية الجودة وخبرات من اليمن والمنطقة.',
        },
      },
    },
    en: {
      title: 'About CauseWay',
      subtitle: 'A Global Organization for Development, Consulting, and Innovation',
      foundation: {
        title: 'CauseWay Foundation',
        tagline: 'Partnering for Our World',
        description: 'CauseWay Foundation is a global non-profit organization working to promote sustainable development, financial inclusion, and social innovation in conflict-affected and crisis regions. The Foundation is built on the principle that positive transformation requires genuine partnerships across sectors - governments, international organizations, private sector, and civil society.',
        mission: 'Our Mission',
        missionText: 'Building bridges of knowledge and expertise to empower communities to achieve sustainable development and economic prosperity, even in the most challenging circumstances.',
        vision: 'Our Vision',
        visionText: 'A world where everyone has equal opportunities to access financial services, reliable information, and the tools needed to build a better future.',
        values: 'Our Values',
        valuesItems: [
          { title: 'Authenticity', desc: 'We commit to providing accurate and reliable information' },
          { title: 'Inclusivity', desc: 'We believe in everyone\'s right to access financial services' },
          { title: 'Innovation', desc: 'We seek innovative solutions to complex challenges' },
          { title: 'Partnership', desc: 'We work with all stakeholders to achieve sustainable impact' },
          { title: 'Transparency', desc: 'We commit to full transparency in all our work' },
        ],
      },
      arcadia: {
        title: 'CauseWay Arcadia',
        tagline: 'Training, Capacity-Building, Research & Analysis, and Impact Measurement Centre',
        description: 'CauseWay Arcadia is the research and training arm of the Foundation. We provide specialized training programs, conduct in-depth research, and measure the social and economic impact of projects and policies.',
        services: [
          {
            title: 'Training Programs',
            items: [
              'Specialized training in International Financial Reporting Standards (IFRS)',
              'Workshops on Anti-Money Laundering and Counter-Terrorism Financing',
              'Capacity-building programs for financial institutions',
              'Training on Management Information Systems',
            ],
          },
          {
            title: 'Research & Analysis',
            items: [
              'In-depth economic studies of emerging markets',
              'Analysis of monetary and fiscal policies',
              'Research on informal economy',
              'Economic feasibility studies',
            ],
          },
          {
            title: 'Impact Measurement',
            items: [
              'Design of social impact measurement frameworks',
              'Evaluation of development projects',
              'Monitoring and evaluation of humanitarian programs',
              'Donor dashboards for impact tracking',
            ],
          },
        ],
      },
      consultancies: {
        title: 'CauseWay Consultancies',
        tagline: 'Advisory, Strategy & Implementation Services',
        description: 'CauseWay Consultancies provides specialized consulting services to financial institutions, governments, and international organizations, with a special focus on Yemen and the region.',
        platformNote: 'The Yemen Economic Compass platform is one of the projects of the Financial Intelligence Division at CauseWay Consultancies.',
        services: [
          {
            category: 'A. Full System Development and Integrated Program Management',
            items: [
              'Design, development, and management of customized programs',
              'Institutional systems and mobile applications',
              'Digital wallets for banking, financial, and microfinance sectors',
            ],
          },
          {
            category: 'B. Core Banking and FinTech Services Transformation',
            items: [
              'Legacy financial system modernization',
              'Migration of institutions to flexible API-based platforms',
              'Comprehensive technical and strategic consultations',
            ],
          },
          {
            category: 'C. Regulatory Technology and Compliance',
            items: [
              'IFRS-9 implementation and Expected Credit Loss (ECL) modeling',
              'Credit risk modeling',
              'AML/CFT framework design, money laundering prevention, and sanctions screening',
              'Compliance with central bank and international requirements',
            ],
          },
          {
            category: 'D. Financial Standards and Risk Consultations',
            items: [
              'Technical consultations and implementation support for IFRS 9 and other reporting standards',
              'Design and verification of credit risk models',
              'Enterprise risk assessment',
            ],
          },
          {
            category: 'E. Donor and Project Services',
            items: [
              'Real-time project monitoring',
              'Customized donor dashboards',
              'Transparent tracking of every project element',
              'Project management systems',
            ],
          },
        ],
      },
      ventures: {
        title: 'CauseWay Ventures',
        tagline: 'Dual-Impact Ventures - Profitable and Impactful',
        description: 'CauseWay Ventures supports startups that combine profitability with positive social impact. We invest in unique and innovative business models with a fixed share in capital.',
        approach: 'Our Approach',
        approachText: 'We seek startups that provide innovative solutions to real challenges, with a sustainable business model that achieves financial returns and measurable social impact.',
        criteria: 'Investment Criteria',
        criteriaItems: [
          'Innovative and sustainable business model',
          'Clear and measurable social impact',
          'Outstanding and committed team',
          'Scalability and growth potential',
          'Alignment with CauseWay values',
        ],
        portfolio: 'Portfolio',
        kayan: {
          name: 'Kayan Platform',
          description: 'An electronic platform connecting clients with professional teams (Squads) to execute projects',
          features: [
            'Project posting and automatic matching with specialized teams',
            'Electronic contract management and storage',
            'Payment facilitation through licensed gateways',
            'Identity verification for individuals and companies (KYC/KYB)',
            'Dispute resolution mechanism through negotiation or arbitration',
          ],
          value: 'Value Proposition',
          valueText: 'We provide specialized teams for companies and entities in all majors. We provide unique virtual spaces where we manage the team you hired based on terms and deliverables. This approach provides peace of mind for individuals and companies seeking quality services and expertise from Yemen and the region.',
        },
      },
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
              <Link href="/">
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
      
      {/* Content */}
      <div className="container py-8">
        <Tabs defaultValue="foundation" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="foundation">
              <Building2 className="w-4 h-4 mr-2" />
              {language === 'ar' ? 'المؤسسة' : 'Foundation'}
            </TabsTrigger>
            <TabsTrigger value="arcadia">
              <GraduationCap className="w-4 h-4 mr-2" />
              {language === 'ar' ? 'أركاديا' : 'Arcadia'}
            </TabsTrigger>
            <TabsTrigger value="consultancies">
              <Briefcase className="w-4 h-4 mr-2" />
              {language === 'ar' ? 'الاستشارات' : 'Consultancies'}
            </TabsTrigger>
            <TabsTrigger value="ventures">
              <Rocket className="w-4 h-4 mr-2" />
              {language === 'ar' ? 'المشاريع' : 'Ventures'}
            </TabsTrigger>
          </TabsList>
          
          {/* Foundation Tab */}
          <TabsContent value="foundation" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src="/causeway-foundation.jpeg" alt="CauseWay Foundation" className="w-16 h-16 object-contain" />
                  <div>
                    <CardTitle className="text-2xl">{t.foundation.title}</CardTitle>
                    <CardDescription className="text-lg">{t.foundation.tagline}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">{t.foundation.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{t.foundation.mission}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-relaxed">{t.foundation.missionText}</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{t.foundation.vision}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-relaxed">{t.foundation.visionText}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">{t.foundation.values}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {t.foundation.valuesItems.map((value, i) => (
                        <div key={i} className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-2">{value.title}</h4>
                          <p className="text-sm text-muted-foreground">{value.desc}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Arcadia Tab */}
          <TabsContent value="arcadia" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src="/causeway-arcadia.jpeg" alt="CauseWay Arcadia" className="w-16 h-16 object-contain" />
                  <div>
                    <CardTitle className="text-2xl">{t.arcadia.title}</CardTitle>
                    <CardDescription className="text-lg">{t.arcadia.tagline}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">{t.arcadia.description}</p>
                
                <div className="space-y-4">
                  {t.arcadia.services.map((service, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Consultancies Tab */}
          <TabsContent value="consultancies" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src="/causeway-consultancies.jpeg" alt="CauseWay Consultancies" className="w-16 h-16 object-contain" />
                  <div>
                    <CardTitle className="text-2xl">{t.consultancies.title}</CardTitle>
                    <CardDescription className="text-lg">{t.consultancies.tagline}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">{t.consultancies.description}</p>
                
                <div className="p-4 bg-primary/10 border-l-4 border-primary rounded">
                  <p className="font-semibold">{t.consultancies.platformNote}</p>
                </div>
                
                <div className="space-y-4">
                  {t.consultancies.services.map((service, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle>{service.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Ventures Tab */}
          <TabsContent value="ventures" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.ventures.title}</CardTitle>
                <CardDescription className="text-lg">{t.ventures.tagline}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">{t.ventures.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.ventures.approach}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-relaxed">{t.ventures.approachText}</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.ventures.criteria}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {t.ventures.criteriaItems.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="border-primary">
                  <CardHeader>
                    <CardTitle className="text-xl">{t.ventures.portfolio}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t.ventures.kayan.name}</h3>
                      <p className="text-muted-foreground mb-4">{t.ventures.kayan.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">{language === 'ar' ? 'الميزات' : 'Features'}</h4>
                          <ul className="space-y-2">
                            {t.ventures.kayan.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-semibold mb-2">{t.ventures.kayan.value}</h4>
                          <p className="leading-relaxed">{t.ventures.kayan.valueText}</p>
                        </div>
                        
                        <Link href="/kayan">
                          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                            {language === 'ar' ? 'اعرف المزيد عن كيان' : 'Learn More About Kayan'}
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
