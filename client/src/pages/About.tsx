import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Target, Users, TrendingUp, Shield, Globe, Award, BookOpen, Heart, Lightbulb, Lock, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="w-full py-12">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#8B1538]/10 to-[#D4AF37]/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#8B1538]">
              {isArabic ? "من نحن" : "About Us"}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8B1538] to-[#D4AF37] bg-clip-text text-transparent">
            {isArabic ? "مؤسسة كوزواي" : "CauseWay Foundation"}
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {isArabic 
              ? "إنسانية واحدة لبناء الغد بغاية"
              : "One Humanity, Building Tomorrow with Purpose"
            }
          </p>
        </div>

        {/* Main Description */}
        <Card className="mb-12 border-2 border-[#8B1538]/20 shadow-lg">
          <CardContent className="pt-8">
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
              {isArabic 
                ? "نحن مؤسسة مستقلة للحوكمة والأثر نبني جسورًا عملية بين المواطنين والمؤسسات والأسواق في البيئات الهشّة والمتأثرة بالنزاعات. نُحوِّل الدليل الموثوق والمسارات المالية المنضبطة إلى حلول قابلة للتنفيذ—من مساءلة القطاعين العام والخاص إلى إصلاح الأنظمة النقدية والمالية وتعافي سلاسل الرزق. منصّاتنا بلا إعلانات، وخصوصيّة المستخدمين، الشمول، وقياس الأثر «مضمّنة في التصميم»."
                : "We are an independent governance and impact foundation building practical bridges between citizens, institutions, and markets in fragile and conflict-affected environments. We transform credible evidence and disciplined financial pathways into actionable solutions—from public and private sector accountability to monetary and financial system reform and livelihood recovery. Our platforms are ad-free, with user privacy, inclusion, and impact measurement 'built into the design'."
              }
            </p>
          </CardContent>
        </Card>

        {/* Why CauseWay Now */}
        <Card className="mb-12 border-2 border-[#D4AF37]/30">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Lightbulb className="h-8 w-8 text-[#D4AF37]" />
              {isArabic ? "لماذا كوزواي الآن؟" : "Why CauseWay Now?"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed mb-6">
              {isArabic 
                ? "الاقتصادات المنقسمة تحتاج «مرفقًا محايدًا» يجمع:"
                : "Divided economies need a 'neutral facility' that brings together:"
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-[#8B1538]/5 to-transparent rounded-lg border border-[#8B1538]/20">
                <div className="text-4xl font-bold text-[#8B1538] mb-2">1</div>
                <p className="font-semibold mb-2">
                  {isArabic ? "حقائق مشتركة حيّة" : "Living Shared Facts"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {isArabic 
                    ? "بيانات موثوقة ومحدّثة يمكن للجميع الاعتماد عليها"
                    : "Credible, updated data that everyone can rely on"
                  }
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-lg border border-[#D4AF37]/20">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">2</div>
                <p className="font-semibold mb-2">
                  {isArabic ? "آليات مساءلة وشفافية" : "Accountability & Transparency Mechanisms"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {isArabic 
                    ? "أنظمة تتبع وتقييم الأداء والأثر"
                    : "Systems to track and evaluate performance and impact"
                  }
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#8B1538]/5 to-transparent rounded-lg border border-[#8B1538]/20">
                <div className="text-4xl font-bold text-[#8B1538] mb-2">3</div>
                <p className="font-semibold mb-2">
                  {isArabic ? "تمويلًا مسؤولًا" : "Responsible Financing"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {isArabic 
                    ? "يلتزم الامتثال ويصل إلى الأكثر هشاشة"
                    : "Compliant funding that reaches the most vulnerable"
                  }
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mt-6 text-center">
              {isArabic 
                ? "نصمّم هذه العناصر في حِزمة واحدة قابلة للتكرار في اليمن وسائر السياقات المشابهة."
                : "We design these elements into a single, replicable package for Yemen and similar contexts."
              }
            </p>
          </CardContent>
        </Card>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-[#8B1538]/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Target className="h-6 w-6 text-[#8B1538]" />
                {isArabic ? "رسالتنا" : "Our Mission"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                {isArabic 
                  ? "جعل الأنظمة المالية أكثر نزاهةً وشمولًا، وتمكين القرارات والسياسات والاستثمارات من الاعتماد على بيانات موثوقة ومسارات تمويل آمنة تُحسِّن حياة الناس لا سيما في البيئات الهشّة."
                  : "Making financial systems more equitable and inclusive, enabling decisions, policies, and investments to rely on credible data and secure financing pathways that improve people's lives, especially in fragile environments."
                }
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#D4AF37]/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Heart className="h-6 w-6 text-[#D4AF37]" />
                {isArabic ? "قيمنا" : "Our Values"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[
                  { ar: "الأمانة", en: "Integrity" },
                  { ar: "المساءلة", en: "Accountability" },
                  { ar: "الشمول والإنصاف", en: "Inclusion & Equity" },
                  { ar: "الشراكة", en: "Partnership" },
                  { ar: "الابتكار المسؤول", en: "Responsible Innovation" }
                ].map((value, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#D4AF37]"></div>
                    <span className="font-medium">{isArabic ? value.ar : value.en}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Strategic Structure */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            {isArabic ? "هيكلنا الاستراتيجي" : "Our Strategic Structure"}
          </h2>

          {/* 1. CauseWay Lighthouse */}
          <Card className="mb-6 border-2 border-[#8B1538]/20">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-[#8B1538]/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-[#8B1538]" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-1">
                    {isArabic ? "منارة كوزواي" : "CauseWay Lighthouse"}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {isArabic 
                      ? "المساءلة، الشفافية والشمول"
                      : "Accountability, Transparency & Inclusion"
                    }
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                {isArabic 
                  ? "ذراع المساءلة والشفافية والتمكين المدني/المؤسسي."
                  : "The arm for accountability, transparency, and civic/institutional empowerment."
                }
              </p>
              <div className="pl-4 border-l-2 border-[#D4AF37]">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-[#D4AF37]" />
                  {isArabic ? "بوصلة كوزواي" : "CauseWay Compass"}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {isArabic 
                    ? "منصة النزاهة المالية والمرونة الاقتصادية"
                    : "Financial Integrity & Economic Resilience Platform"
                  }
                </p>
                <p className="text-sm">
                  {isArabic 
                    ? "النسخة الراهنة: «اليمن — نسخة النزاع»، لوحات قياس وسياسات قابلة للاستخدام."
                    : "Current version: 'Yemen — Conflict Edition', actionable dashboards and policies."
                  }
                </p>
                <h4 className="font-semibold mt-4 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-[#D4AF37]" />
                  {isArabic ? "مرصد كوزواي النقدي والاقتصادي (MEO)" : "Monetary & Economic Observatory (MEO)"}
                </h4>
                <p className="text-sm">
                  {isArabic 
                    ? "قرارات وسيولة البنوك، أسعار الصرف الموازية، المزادات، التضخّم الآني، وخريطة القطاع المالي."
                    : "Bank decisions and liquidity, parallel exchange rates, auctions, real-time inflation, and financial sector mapping."
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 2. CauseWay Fintech & Consultancies */}
          <Card className="mb-6 border-2 border-[#D4AF37]/30">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-1">
                    {isArabic ? "كوزواي للاستشارات والتقنيات المالية" : "CauseWay Fintech & Consultancies"}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {isArabic 
                      ? "صياغة مسارات نحو الاستقرار والإنصاف والتجديد الاقتصادي"
                      : "Forging Pathways to Stability, Equity, and Economic Renewal"
                    }
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                {isArabic 
                  ? "تنفيذٌ عملي للإصلاح المالي في البيئات المنقسمة:"
                  : "Practical implementation of financial reform in divided environments:"
                }
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] mt-2"></div>
                  <span>{isArabic ? "تحويل البنوك وإدارة الديون/القروض المتعثرة، تصميم آليات الدفع" : "Bank transformation, NPL management, payment mechanism design"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] mt-2"></div>
                  <span>{isArabic ? "IFRS-9/ECL والاختبارات الضاغطة في أسواق مزدوجة" : "IFRS-9/ECL and stress testing in dual markets"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] mt-2"></div>
                  <span>{isArabic ? "AML/CFT وKYC/KYB ملائمة لسياقات ضعف الهوية" : "AML/CFT and KYC/KYB adapted for weak identity contexts"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] mt-2"></div>
                  <span>{isArabic ? "سيولة/صرف أجنبي، تصميم مزادات و«عدّادات» شفافية" : "Liquidity/FX, auction design, and transparency 'meters'"}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 3. CauseWay Ventures & Funding */}
          <Card className="mb-6 border-2 border-[#8B1538]/20">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-[#8B1538]/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-[#8B1538]" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-1">
                    {isArabic ? "كوزواي للمشاريع والتمويل" : "CauseWay Ventures & Funding"}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {isArabic 
                      ? "استوديو المشاريع، تمويل ريبل ورأس المال المؤثر"
                      : "Venture Studio, Ripple Finance & Impact Capital"
                    }
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                {isArabic 
                  ? "يحوّل الاحتياجات المُثبتة إلى حلول قابلة للاستثمار ويعيد تدوير رأس المال."
                  : "Transforms proven needs into investable solutions and recycles capital."
                }
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
                  <h4 className="font-semibold text-sm mb-1">
                    <a href="https://kayan.manus.space" target="_blank" rel="noopener noreferrer" className="text-[#8B1538] hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1">
                      {isArabic ? "منصة كَيَان (Kayan Venture Studio)" : "Kayan Venture Studio"}
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {isArabic 
                      ? "فرق (Squads) لبناء نُسَخ تجريبية متوافقة امتثاليًا، صرف مشروط بأدلة تقدّم"
                      : "Squads building compliant prototypes, disbursement conditional on evidence of progress"
                    }
                  </p>
                </div>
                <div className="p-3 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">
                    {isArabic ? "قروض ريبل والتمويل المُخلوط" : "Ripple Loans & Blended Finance"}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {isArabic 
                      ? "قروض دوّارة وتمويل مُخلوط للمشروعات الصغيرة والـMFIs، مع حوكمة أثر"
                      : "Revolving loans and blended finance for SMEs and MFIs, with impact governance"
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 4. CauseWay Arcadia */}
          <Card className="mb-6 border-2 border-[#D4AF37]/30">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-1">
                    {isArabic ? "كوزواي أكاديا" : "CauseWay Arcadia"}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {isArabic 
                      ? "الأكاديمية وقياس الأثر"
                      : "Academy & Impact Measurement"
                    }
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {isArabic 
                  ? "برامج IFRS/AML/CFT، بحوث السياسات، وقياس الأثر للمشروعات والسياسات، مع اعتماد وشهادات مهنية؛ وتغذية عكسية لأساليب «البوصلة»."
                  : "IFRS/AML/CFT programs, policy research, and impact measurement for projects and policies, with accreditation and professional certifications; feeding back into 'Compass' methodologies."
                }
              </p>
            </CardContent>
          </Card>

          {/* 5. CauseWay Peace Nexus */}
          <Card className="mb-6 border-2 border-[#8B1538]/20">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-[#8B1538]/10 flex items-center justify-center flex-shrink-0">
                  <Handshake className="h-6 w-6 text-[#8B1538]" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-1">
                    {isArabic ? "ملتقى كوزواي للسلام" : "CauseWay Peace Nexus"}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {isArabic 
                      ? "بيت السَّلْم — Yemen Hub"
                      : "Peace House — Yemen Hub"
                    }
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {isArabic 
                  ? "بيتٌ آمن للحوار اليمني المَحميّ (مجالس رقمية، رياضة/فن من أجل السلام)، مع «مسارات تطبيع اقتصادي» متصلة بالمنارة والبوصلة."
                  : "A safe house for protected Yemeni dialogue (digital councils, sport/art for peace), with 'economic normalization pathways' connected to Lighthouse and Compass."
                }
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Governance */}
        <Card className="mb-12 border-2 border-[#8B1538]/20 bg-gradient-to-br from-[#8B1538]/5 to-transparent">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Lock className="h-6 w-6 text-[#8B1538]" />
              {isArabic ? "حوكمة الاستقلال والثقة" : "Independence & Trust Governance"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">
              {isArabic 
                ? "مجلس أخلاقيات، لجنة شفافية، تدقيقات دوريّة، وتفويض «سهم ذهبي» لحماية الخصوصية، منطق العرض والترتيب، وتأثير الرعاة—مع نشر علني لدفاتر التدفّقات المُؤمّنة (escrow) ونتائج التحقّق."
                : "Ethics board, transparency committee, periodic audits, and 'golden share' mandate to protect privacy, display logic, and sponsor influence—with public disclosure of escrowed flow ledgers and verification results."
              }
            </p>
          </CardContent>
        </Card>

        {/* What This Means for Visitors */}
        <Card className="border-2 border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/5 to-transparent">
          <CardHeader>
            <CardTitle className="text-2xl">
              {isArabic ? "ما الذي يعنيه ذلك لزائر الموقع؟" : "What Does This Mean for Site Visitors?"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/50 rounded-lg border border-[#8B1538]/10">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#8B1538]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="h-4 w-4 text-[#8B1538]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">
                      {isArabic ? "تعرّف على الوضع الاقتصادي" : "Understand the Economic Situation"}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {isArabic 
                        ? "عبر بوصلة كوزواي (اليمن) و«المرصد النقدي والاقتصادي (MEO)»"
                        : "Via CauseWay Compass (Yemen) and Monetary & Economic Observatory (MEO)"
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg border border-[#D4AF37]/10">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Building2 className="h-4 w-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">
                      {isArabic ? "اطلب خدمة" : "Request a Service"}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {isArabic 
                        ? "من CauseWay Fintech & Consultancies لتنفيذ إصلاحات قابلة للقياس"
                        : "From CauseWay Fintech & Consultancies for measurable reforms"
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg border border-[#8B1538]/10">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#8B1538]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="h-4 w-4 text-[#8B1538]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">
                      {isArabic ? "ابنِ حلًّا" : "Build a Solution"}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {isArabic 
                        ? <>مع CauseWay Ventures & Funding (عبر <a href="https://kayan.manus.space" target="_blank" rel="noopener noreferrer" className="text-[#8B1538] hover:text-[#D4AF37] underline">Kayan</a>) بتمويل مُشروط بالدليل</>
                        : <>With CauseWay Ventures & Funding (via <a href="https://kayan.manus.space" target="_blank" rel="noopener noreferrer" className="text-[#8B1538] hover:text-[#D4AF37] underline">Kayan</a>) with evidence-conditional financing</>
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg border border-[#D4AF37]/10">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="h-4 w-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">
                      {isArabic ? "طوّر القدرات" : "Develop Capabilities"}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {isArabic 
                        ? "مع Arcadia، وشارك في Peace Nexus / بيت السَّلْم"
                        : "With Arcadia, and participate in Peace Nexus / Peace House"
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="text-center mt-12 p-6 bg-gradient-to-r from-[#8B1538]/5 to-[#D4AF37]/5 rounded-lg">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {isArabic 
              ? "هذه الصياغة «من نحن» وهيكل الأذرع تلتزم بالمسميات الرسمية ثنائيّة اللغة، وتضع «اليمن — نسخة النزاع» كبداية قابلة للتوسّع إلى كل سياقات الهشاشة، مع ضبطٍ صارم للامتثال والشفافية والأثر."
              : "This 'About Us' formulation and arm structure adheres to official bilingual nomenclature, positioning 'Yemen — Conflict Edition' as a scalable starting point for all fragility contexts, with strict compliance, transparency, and impact controls."
            }
          </p>
        </div>
      </div>
    </div>
  );
}
