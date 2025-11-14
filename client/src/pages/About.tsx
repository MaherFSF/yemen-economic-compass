import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Target, Users, TrendingUp, Shield, Globe, Award, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="w-full py-12">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">
              {isArabic ? "من نحن" : "About Us"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? "مؤسسة كوزواي" : "CauseWay Foundation"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isArabic 
              ? "مؤسسة بحثية متخصصة في الاستخبارات الاقتصادية والاستشراف الاستراتيجي | تأسست 2025"
              : "A specialized research institution for economic intelligence and strategic foresight | Established 2025"
            }
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />
              {isArabic ? "مهمتنا" : "Our Mission"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              {isArabic 
                ? "مؤسسة كوزواي هي مؤسسة بحثية متخصصة تأسست في عام 2025 لتقديم استخبارات اقتصادية عالية الجودة وتحليلات استشرافية للمؤسسات الدولية والحكومات والمانحين والباحثين. نركز على الأنظمة الاقتصادية المعقدة في البيئات الهشة، مع تخصص عميق في اليمن. نجمع بين التحليل الاقتصادي الصارم والنمذجة الإحصائية والاستشراف الاستراتيجي لتقديم رؤى قابلة للتنفيذ تدعم صنع القرار القائم على الأدلة."
                : "CauseWay Foundation is a specialized research institution established in 2025 to provide high-quality economic intelligence and strategic foresight for international organizations, governments, donors, and researchers. We focus on complex economic systems in fragile environments, with deep expertise in Yemen. We combine rigorous economic analysis, statistical modeling, and strategic foresight to deliver actionable insights that support evidence-based decision-making."
              }
            </p>
          </CardContent>
        </Card>

        {/* Our Expertise */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              {isArabic ? "خبراتنا المتخصصة" : "Our Specialized Expertise"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {isArabic ? "التحليل الاقتصادي المتقدم" : "Advanced Economic Analysis"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {isArabic 
                        ? "تحليل كمي صارم للأنظمة المالية المزدوجة، وديناميكيات أسعار الصرف، والاقتصاد الكلي في بيئات الصراع"
                        : "Rigorous quantitative analysis of dual financial systems, exchange rate dynamics, and macroeconomics in conflict environments"
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {isArabic ? "النمذجة التنبؤية" : "Predictive Modeling"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {isArabic 
                        ? "نمذجة السيناريوهات المتقدمة والتنبؤ الاقتصادي باستخدام الأساليب الإحصائية والتعلم الآلي"
                        : "Advanced scenario modeling and economic forecasting using statistical methods and machine learning"
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {isArabic ? "استخبارات أصحاب المصلحة" : "Stakeholder Intelligence"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {isArabic 
                        ? "تحليل عميق للجهات الفاعلة الاقتصادية، وتدفقات الإيرادات، والاستراتيجيات المالية في الأنظمة المجزأة"
                        : "Deep analysis of economic actors, revenue flows, and financial strategies in fragmented systems"
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {isArabic ? "توصيات السياسات" : "Policy Recommendations"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {isArabic 
                        ? "توصيات سياسية قائمة على الأدلة مع خرائط طريق للتنفيذ وتقييم المخاطر والأثر"
                        : "Evidence-based policy recommendations with implementation roadmaps, risk assessment, and impact analysis"
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {isArabic ? "التحليل القطاعي" : "Sectoral Analysis"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {isArabic 
                        ? "تحليل متخصص للقطاع المصرفي والتمويل الأصغر والعقوبات والأطر التنظيمية"
                        : "Specialized analysis of banking sector, microfinance, sanctions, and regulatory frameworks"
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Building2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {isArabic ? "منهجية صارمة" : "Rigorous Methodology"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {isArabic 
                        ? "التحقق متعدد المصادر، والتثليث البيانات، والتوثيق الشامل لجميع النتائج"
                        : "Multi-source verification, data triangulation, and comprehensive documentation of all findings"
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Team */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">
              {isArabic ? "فريقنا المتعدد التخصصات" : "Our Multidisciplinary Team"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isArabic 
                ? "تضم مؤسسة كوزواي فريقاً من الخبراء المتخصصين في مجالات متعددة، بما في ذلك:"
                : "CauseWay Foundation brings together a team of experts specialized in multiple fields, including:"
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-accent/10 rounded-lg">
                <div className="font-semibold mb-2">
                  {isArabic ? "الاقتصاديون" : "Economists"}
                </div>
                <p className="text-sm text-muted-foreground">
                  {isArabic 
                    ? "متخصصون في الاقتصاد الكلي، والتمويل، والتنمية الاقتصادية"
                    : "Specialists in macroeconomics, finance, and economic development"
                  }
                </p>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg">
                <div className="font-semibold mb-2">
                  {isArabic ? "محللو البيانات" : "Data Analysts"}
                </div>
                <p className="text-sm text-muted-foreground">
                  {isArabic 
                    ? "خبراء في الإحصاء، والنمذجة الكمية، والتصور البياني"
                    : "Experts in statistics, quantitative modeling, and data visualization"
                  }
                </p>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg">
                <div className="font-semibold mb-2">
                  {isArabic ? "خبراء السياسات" : "Policy Experts"}
                </div>
                <p className="text-sm text-muted-foreground">
                  {isArabic 
                    ? "متخصصون في السياسة المالية، والحوكمة، والإصلاح المؤسسي"
                    : "Specialists in fiscal policy, governance, and institutional reform"
                  }
                </p>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg">
                <div className="font-semibold mb-2">
                  {isArabic ? "محللو القطاع المصرفي" : "Banking Analysts"}
                </div>
                <p className="text-sm text-muted-foreground">
                  {isArabic 
                    ? "خبراء في الأنظمة المصرفية، والتمويل الأصغر، والمدفوعات الرقمية"
                    : "Experts in banking systems, microfinance, and digital payments"
                  }
                </p>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg">
                <div className="font-semibold mb-2">
                  {isArabic ? "محللو الصراع" : "Conflict Analysts"}
                </div>
                <p className="text-sm text-muted-foreground">
                  {isArabic 
                    ? "متخصصون في الاقتصاد السياسي للصراع والاقتصادات الهشة"
                    : "Specialists in political economy of conflict and fragile economies"
                  }
                </p>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg">
                <div className="font-semibold mb-2">
                  {isArabic ? "باحثو الميدان" : "Field Researchers"}
                </div>
                <p className="text-sm text-muted-foreground">
                  {isArabic 
                    ? "شبكة من الباحثين المحليين في جميع مناطق اليمن"
                    : "Network of local researchers across all regions of Yemen"
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Approach */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">
              {isArabic ? "منهجيتنا" : "Our Approach"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Badge variant="default">1</Badge>
                  {isArabic ? "الشفافية والمساءلة" : "Transparency & Accountability"}
                </h3>
                <p className="text-muted-foreground mr-8">
                  {isArabic 
                    ? "جميع تحليلاتنا مدعومة بمصادر موثقة ومتاحة للتحقق. نلتزم بأعلى معايير الشفافية في جمع البيانات وتحليلها."
                    : "All our analyses are backed by documented sources and available for verification. We adhere to the highest standards of transparency in data collection and analysis."
                  }
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Badge variant="default">2</Badge>
                  {isArabic ? "التحليل القائم على الأدلة" : "Evidence-Based Analysis"}
                </h3>
                <p className="text-muted-foreground mr-8">
                  {isArabic 
                    ? "نعتمد على البيانات الأولية، والتحليل الإحصائي الصارم، والتحقق متعدد المصادر لضمان دقة وموثوقية نتائجنا."
                    : "We rely on primary data, rigorous statistical analysis, and multi-source verification to ensure the accuracy and reliability of our findings."
                  }
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Badge variant="default">3</Badge>
                  {isArabic ? "الاستشراف الاستراتيجي" : "Strategic Foresight"}
                </h3>
                <p className="text-muted-foreground mr-8">
                  {isArabic 
                    ? "نجمع بين التحليل التاريخي والنمذجة التنبؤية لتقديم رؤى استشرافية تساعد صناع القرار على الاستعداد للسيناريوهات المستقبلية."
                    : "We combine historical analysis with predictive modeling to provide forward-looking insights that help decision-makers prepare for future scenarios."
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Clients */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">
              {isArabic ? "من نخدم" : "Who We Serve"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isArabic 
                ? "نقدم خدماتنا لمجموعة واسعة من المؤسسات التي تحتاج إلى استخبارات اقتصادية عالية الجودة:"
                : "We serve a wide range of institutions that require high-quality economic intelligence:"
              }
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <div className="font-semibold">
                  {isArabic ? "المنظمات الدولية" : "International Organizations"}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {isArabic ? "الأمم المتحدة، البنك الدولي، صندوق النقد الدولي" : "UN, World Bank, IMF"}
                </div>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <div className="font-semibold">
                  {isArabic ? "الحكومات والمانحون" : "Governments & Donors"}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {isArabic ? "الوكالات الثنائية ومتعددة الأطراف" : "Bilateral and multilateral agencies"}
                </div>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <div className="font-semibold">
                  {isArabic ? "المؤسسات البحثية" : "Research Institutions"}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {isArabic ? "مراكز الأبحاث والجامعات" : "Think tanks and universities"}
                </div>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <div className="font-semibold">
                  {isArabic ? "المنظمات غير الحكومية" : "NGOs"}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {isArabic ? "المنظمات الإنسانية والتنموية" : "Humanitarian and development organizations"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Founder */}
        <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/10">
          <CardHeader>
            <CardTitle className="text-2xl">
              {isArabic ? "المؤسس والمدير التنفيذي" : "Founder & Executive Director"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary">MF</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">
                  {isArabic ? "ماهر فيصل سعيد فارع" : "Maher Faisal Said Farea"}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isArabic 
                    ? "خبير تنموي وإنساني بخبرة واسعة في قيادة البرامج المعقدة في بيئات الصراع. يجمع بين التحليل الاقتصادي الصارم والخبرة الميدانية العميقة في اليمن."
                    : "Development and humanitarian expert with extensive experience leading complex programs in conflict environments. Combines rigorous economic analysis with deep field expertise in Yemen."
                  }
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? "يتخصص في تحويل البيانات المعقدة إلى رؤى استراتيجية قابلة للتنفيذ، مع تركيز على بناء الأنظمة المؤسسية وتعزيز المساءلة والشفافية."
                    : "Specializes in transforming complex data into actionable strategic insights, with a focus on building institutional systems and enhancing accountability and transparency."
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            {isArabic 
              ? "للاستفسارات والتعاون، يرجى التواصل معنا"
              : "For inquiries and collaboration, please contact us"
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="text-sm py-2 px-4">
              contact@causeway-foundation.org
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
