import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Building2, 
  GraduationCap,
  BarChart3,
  FileText,
  Clock,
  Lightbulb,
  MessageSquare,
  Brain,
  ArrowRight,
  Database,
  Shield,
  Target
} from "lucide-react";
import { Link } from "wouter";

export default function NewLandingPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        title: "Yemen Economic Compass",
        subtitle: "A bilingual platform that watches Yemen's economy, learns from 10+ years of real data, and turns it into clear, actionable insight",
        cta: "Explore Platform",
        secondaryCta: "View Documentation"
      },
      whatItIs: {
        title: "What this is",
        description: "Yemen Economic Compass is a bilingual (Arabic/English) platform that watches Yemen's economy, learns from 10+ years of real data, and turns it into clear, actionable insight.",
        details: "It tracks actors (banks, MFIs, donors, ministries, sanctions lists), indicators (inflation, FX, GDP, food baskets, funding), and major events. It connects the dots to explain what changed, why, and what to do next."
      },
      audiences: {
        title: "Who it's for",
        groups: [
          {
            title: "Policymakers",
            description: "CBY, MoF, PLC ministries, commercial banks/MFIs",
            icon: Building2
          },
          {
            title: "Donors/IFIs",
            description: "World Bank, IMF, EU, FCDO, USAID, IsDB, regional funds",
            icon: TrendingUp
          },
          {
            title: "UN agencies/NGOs",
            description: "UN agencies/NGOs and serious media",
            icon: Users
          },
          {
            title: "Researchers",
            description: "Researchers and graduate students",
            icon: GraduationCap
          }
        ]
      },
      delivers: {
        title: "What it delivers",
        features: [
          {
            number: "1",
            title: "Live dashboards",
            description: "Live dashboards with trusted numbers and sources",
            icon: BarChart3
          },
          {
            number: "2",
            title: "Stakeholder microsites",
            description: "Stakeholder microsites (100+) explaining each actor's role, risks, and options",
            icon: Users
          },
          {
            number: "3",
            title: "10-year timeline",
            description: "A 10-year timeline of key economic/financial events with citations",
            icon: Clock
          },
          {
            number: "4",
            title: "Scenario tools",
            description: 'Scenario tools: "What if oil exports resume?" "What if FX auctions change?"',
            icon: Lightbulb
          },
          {
            number: "5",
            title: "Recommendations",
            description: "Recommendations: evidence-based actions tailored to each stakeholder",
            icon: Target
          },
          {
            number: "6",
            title: "Closed-corpus AI analyst",
            description: "Closed-corpus AI analyst: drafts briefs and memos in EN/AR using only verified data and uploaded reports (no open web answers)",
            icon: Brain
          }
        ]
      },
      intelligence: {
        title: "How the intelligence works",
        subtitle: "(in human terms)",
        left: {
          title: "Data Quality & Confidence",
          points: [
            "It pulls data only from original, credible sources (World Bank, IMF, OCHA/FTS, WFP/HDX, JODI, UN/EU/OFAC sanctions) and from PDFs you upload (CBY reports, Sana'a Centre, ODI, etc.).",
            "It assigns a confidence score to each data point based on source quality, freshness, and cross-checks. Lower-confidence claims are triangulated before being used in decision outputs."
          ]
        },
        right: {
          title: "Memory & Learning",
          points: [
            "It keeps a memory graph of actors, events, indicators, and policies across 10+ years.",
            "When a user asks a question or runs a scenario, it retrieves the relevant pieces from that memory, explains the logic, and cites the sources.",
            "It learns over time which signals are most predictive and adjusts weights transparently."
          ]
        }
      },
      cta: {
        title: "Ready to explore Yemen's economic landscape?",
        description: "Access comprehensive data, analysis, and insights from 10+ years of economic intelligence",
        button: "Get Started"
      }
    },
    ar: {
      hero: {
        title: "البوصلة الاقتصادية لليمن",
        subtitle: "منصة ثنائية اللغة ترصد اقتصاد اليمن، وتتعلم من أكثر من 10 سنوات من البيانات الحقيقية، وتحولها إلى رؤى واضحة وقابلة للتنفيذ",
        cta: "استكشف المنصة",
        secondaryCta: "عرض الوثائق"
      },
      whatItIs: {
        title: "ما هذا",
        description: "البوصلة الاقتصادية لليمن هي منصة ثنائية اللغة (عربي/إنجليزي) ترصد اقتصاد اليمن، وتتعلم من أكثر من 10 سنوات من البيانات الحقيقية، وتحولها إلى رؤى واضحة وقابلة للتنفيذ.",
        details: "تتتبع الجهات الفاعلة (البنوك، مؤسسات التمويل الأصغر، المانحون، الوزارات، قوائم العقوبات)، والمؤشرات (التضخم، سعر الصرف، الناتج المحلي الإجمالي، سلال الغذاء، التمويل)، والأحداث الرئيسية. تربط النقاط لشرح ما تغير، ولماذا، وما يجب القيام به بعد ذلك."
      },
      audiences: {
        title: "لمن هذا",
        groups: [
          {
            title: "صانعو السياسات",
            description: "البنك المركزي اليمني، وزارة المالية، وزارات مجلس القيادة الرئاسي، البنوك التجارية/مؤسسات التمويل الأصغر",
            icon: Building2
          },
          {
            title: "المانحون/المؤسسات المالية الدولية",
            description: "البنك الدولي، صندوق النقد الدولي، الاتحاد الأوروبي، FCDO، الوكالة الأمريكية للتنمية الدولية، البنك الإسلامي للتنمية، الصناديق الإقليمية",
            icon: TrendingUp
          },
          {
            title: "وكالات الأمم المتحدة/المنظمات غير الحكومية",
            description: "وكالات الأمم المتحدة/المنظمات غير الحكومية ووسائل الإعلام الجادة",
            icon: Users
          },
          {
            title: "الباحثون",
            description: "الباحثون وطلاب الدراسات العليا",
            icon: GraduationCap
          }
        ]
      },
      delivers: {
        title: "ما تقدمه",
        features: [
          {
            number: "1",
            title: "لوحات معلومات مباشرة",
            description: "لوحات معلومات مباشرة بأرقام ومصادر موثوقة",
            icon: BarChart3
          },
          {
            number: "2",
            title: "مواقع أصحاب المصلحة الصغيرة",
            description: "مواقع أصحاب المصلحة الصغيرة (100+) تشرح دور كل جهة فاعلة ومخاطرها وخياراتها",
            icon: Users
          },
          {
            number: "3",
            title: "جدول زمني لمدة 10 سنوات",
            description: "جدول زمني لمدة 10 سنوات للأحداث الاقتصادية/المالية الرئيسية مع الاستشهادات",
            icon: Clock
          },
          {
            number: "4",
            title: "أدوات السيناريو",
            description: 'أدوات السيناريو: "ماذا لو استؤنفت صادرات النفط؟" "ماذا لو تغيرت مزادات العملات الأجنبية؟"',
            icon: Lightbulb
          },
          {
            number: "5",
            title: "التوصيات",
            description: "التوصيات: إجراءات قائمة على الأدلة مصممة خصيصًا لكل صاحب مصلحة",
            icon: Target
          },
          {
            number: "6",
            title: "محلل الذكاء الاصطناعي المغلق",
            description: "محلل الذكاء الاصطناعي المغلق: يصوغ ملخصات ومذكرات بالعربية/الإنجليزية باستخدام البيانات المعتمدة والتقارير المحملة فقط (بدون إجابات من الويب المفتوح)",
            icon: Brain
          }
        ]
      },
      intelligence: {
        title: "كيف يعمل الذكاء",
        subtitle: "(بعبارات بشرية)",
        left: {
          title: "جودة البيانات والثقة",
          points: [
            "يسحب البيانات فقط من مصادر أصلية وموثوقة (البنك الدولي، صندوق النقد الدولي، OCHA/FTS، WFP/HDX، JODI، عقوبات الأمم المتحدة/الاتحاد الأوروبي/OFAC) ومن ملفات PDF التي تحملها (تقارير البنك المركزي اليمني، مركز صنعاء، ODI، إلخ).",
            "يعين درجة ثقة لكل نقطة بيانات بناءً على جودة المصدر والحداثة والفحوصات المتقاطعة. يتم تثليث الادعاءات منخفضة الثقة قبل استخدامها في مخرجات القرار."
          ]
        },
        right: {
          title: "الذاكرة والتعلم",
          points: [
            "يحتفظ برسم بياني للذاكرة للجهات الفاعلة والأحداث والمؤشرات والسياسات عبر أكثر من 10 سنوات.",
            "عندما يطرح المستخدم سؤالاً أو يشغل سيناريو، فإنه يسترجع القطع ذات الصلة من تلك الذاكرة، ويشرح المنطق، ويستشهد بالمصادر.",
            "يتعلم بمرور الوقت أي الإشارات أكثر تنبؤًا ويعدل الأوزان بشفافية."
          ]
        }
      },
      cta: {
        title: "هل أنت مستعد لاستكشاف المشهد الاقتصادي لليمن؟",
        description: "الوصول إلى بيانات وتحليلات ورؤى شاملة من أكثر من 10 سنوات من الذكاء الاقتصادي",
        button: "ابدأ"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Teal/Blue Theme for English */}
      <section 
        className={`relative py-24 px-4 ${
          language === 'en' 
            ? 'bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50' 
            : 'bg-gradient-to-br from-red-50 via-amber-50 to-yellow-50'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge 
              variant="outline" 
              className={`${
                language === 'en' 
                  ? 'border-teal-600 text-teal-700 bg-white/80' 
                  : 'border-red-800 text-red-900 bg-white/80'
              } px-4 py-2 text-sm font-medium`}
            >
              {language === 'en' ? 'Economic Intelligence Platform' : 'منصة الذكاء الاقتصادي'}
            </Badge>
            
            <h1 className={`text-5xl md:text-6xl font-bold ${
              language === 'en' ? 'text-blue-900' : 'text-red-900'
            }`}>
              {t.hero.title}
            </h1>
            
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${
              language === 'en' ? 'text-blue-800' : 'text-red-800'
            }`}>
              {t.hero.subtitle}
            </p>
            
            <div className="flex gap-4 justify-center pt-6">
              <Link href="/compass-dashboard">
                <Button 
                  size="lg" 
                  className={`${
                    language === 'en'
                      ? 'bg-teal-600 hover:bg-teal-700'
                      : 'bg-red-800 hover:bg-red-900'
                  } text-white px-8 py-6 text-lg`}
                >
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  size="lg" 
                  variant="outline"
                  className={`${
                    language === 'en'
                      ? 'border-teal-600 text-teal-700 hover:bg-teal-50'
                      : 'border-red-800 text-red-900 hover:bg-red-50'
                  } px-8 py-6 text-lg`}
                >
                  {t.hero.secondaryCta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge 
              variant="outline" 
              className={`${
                language === 'en' ? 'border-teal-600 text-teal-700' : 'border-red-800 text-red-900'
              } mb-4`}
            >
              {t.whatItIs.title}
            </Badge>
            <h2 className={`text-4xl font-bold mb-6 ${
              language === 'en' ? 'text-blue-900' : 'text-red-900'
            }`}>
              {t.whatItIs.description}
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t.whatItIs.details}
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className={`py-20 px-4 ${
        language === 'en' ? 'bg-teal-50' : 'bg-red-50'
      }`}>
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-4xl font-bold text-center mb-12 ${
            language === 'en' ? 'text-blue-900' : 'text-red-900'
          }`}>
            {t.audiences.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.audiences.groups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Card 
                  key={index} 
                  className={`${
                    language === 'en' 
                      ? 'border-teal-200 hover:border-teal-400' 
                      : 'border-red-200 hover:border-red-400'
                  } hover:shadow-lg transition-all duration-300`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${
                        language === 'en' ? 'bg-teal-100' : 'bg-red-100'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          language === 'en' ? 'text-teal-700' : 'text-red-700'
                        }`} />
                      </div>
                      <CardTitle className={`text-xl ${
                        language === 'en' ? 'text-blue-900' : 'text-red-900'
                      }`}>
                        {group.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{group.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What It Delivers Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-4xl font-bold text-center mb-12 ${
            language === 'en' ? 'text-blue-900' : 'text-red-900'
          }`}>
            {t.delivers.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.delivers.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="relative overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className={`absolute top-0 left-0 w-full h-2 ${
                    language === 'en' 
                      ? 'bg-gradient-to-r from-teal-500 to-blue-500' 
                      : 'bg-gradient-to-r from-red-700 to-amber-600'
                  }`} />
                  
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                        language === 'en' 
                          ? 'bg-gradient-to-br from-teal-500 to-blue-600' 
                          : 'bg-gradient-to-br from-red-700 to-amber-600'
                      }`}>
                        {feature.number}
                      </div>
                      <div className="flex-1">
                        <CardTitle className={`text-lg mb-2 ${
                          language === 'en' ? 'text-blue-900' : 'text-red-900'
                        }`}>
                          {feature.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Intelligence Works Section */}
      <section className={`py-20 px-4 ${
        language === 'en' ? 'bg-gradient-to-br from-blue-50 to-teal-50' : 'bg-gradient-to-br from-red-50 to-amber-50'
      }`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-2 ${
              language === 'en' ? 'text-teal-700' : 'text-red-800'
            }`}>
              {t.intelligence.title}
            </h2>
            <p className={`text-xl ${
              language === 'en' ? 'text-blue-700' : 'text-red-700'
            }`}>
              {t.intelligence.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <Card className="border-2 border-teal-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className={`h-8 w-8 ${
                    language === 'en' ? 'text-teal-600' : 'text-red-700'
                  }`} />
                  <CardTitle className={`text-2xl ${
                    language === 'en' ? 'text-blue-900' : 'text-red-900'
                  }`}>
                    {t.intelligence.left.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {t.intelligence.left.points.map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <Shield className={`h-5 w-5 flex-shrink-0 mt-1 ${
                        language === 'en' ? 'text-teal-600' : 'text-red-700'
                      }`} />
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Right Column */}
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Brain className={`h-8 w-8 ${
                    language === 'en' ? 'text-blue-600' : 'text-red-700'
                  }`} />
                  <CardTitle className={`text-2xl ${
                    language === 'en' ? 'text-blue-900' : 'text-red-900'
                  }`}>
                    {t.intelligence.right.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {t.intelligence.right.points.map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <MessageSquare className={`h-5 w-5 flex-shrink-0 mt-1 ${
                        language === 'en' ? 'text-blue-600' : 'text-red-700'
                      }`} />
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`py-20 px-4 ${
        language === 'en' 
          ? 'bg-gradient-to-r from-teal-600 to-blue-600' 
          : 'bg-gradient-to-r from-red-800 to-amber-700'
      } text-white`}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t.cta.title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t.cta.description}
          </p>
          <Link href="/compass-dashboard">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-12 py-6 text-lg font-semibold"
            >
              {t.cta.button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
