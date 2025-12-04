import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Building2, 
  BarChart3, 
  FileText,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  Database,
  Target
} from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Home() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const [counters, setCounters] = useState({ years: 0, dataPoints: 0, stakeholders: 0 });

  // Animated counter effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;
    
    const targets = { years: 15, dataPoints: 1200, stakeholders: 50 };
    let current = { years: 0, dataPoints: 0, stakeholders: 0 };
    
    const timer = setInterval(() => {
      current = {
        years: Math.min(current.years + targets.years / steps, targets.years),
        dataPoints: Math.min(current.dataPoints + targets.dataPoints / steps, targets.dataPoints),
        stakeholders: Math.min(current.stakeholders + targets.stakeholders / steps, targets.stakeholders)
      };
      
      setCounters({
        years: Math.floor(current.years),
        dataPoints: Math.floor(current.dataPoints),
        stakeholders: Math.floor(current.stakeholders)
      });
      
      if (current.years >= targets.years) clearInterval(timer);
    }, increment);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen Immersive */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/Yy1SCKTMhonQ.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.35_0.15_15)]/95 via-[oklch(0.55_0.12_180)]/90 to-[oklch(0.40_0.02_240)]/95"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 text-center text-white">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <Shield className="h-5 w-5 text-[oklch(0.70_0.12_70)]" />
              <span className="text-sm font-semibold">
                {isArabic ? "منصة استخبارات اقتصادية شاملة" : "Comprehensive Economic Intelligence Platform"}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              {isArabic ? (
                <>
                  البوصلة الاقتصادية
                  <br />
                  <span className="text-[oklch(0.70_0.12_70)]">لليمن</span>
                </>
              ) : (
                <>
                  Yemen Economic
                  <br />
                  <span className="text-[oklch(0.70_0.12_70)]">Compass</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {isArabic 
                ? "منصة تحليلية شاملة لفهم التحولات المالية والاقتصادية في اليمن (2010-2025)"
                : "A comprehensive analytical platform for understanding Yemen's financial and economic transformations (2010-2025)"
              }
            </p>

            {/* Animated Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="text-5xl font-bold text-[oklch(0.70_0.12_70)]">{counters.years}</div>
                <div className="text-sm mt-2 text-white/80">
                  {isArabic ? "سنة من البيانات" : "Years of Data"}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="text-5xl font-bold text-[oklch(0.70_0.12_70)]">{counters.dataPoints}+</div>
                <div className="text-sm mt-2 text-white/80">
                  {isArabic ? "نقطة بيانات" : "Data Points"}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="text-5xl font-bold text-[oklch(0.70_0.12_70)]">{counters.stakeholders}+</div>
                <div className="text-sm mt-2 text-white/80">
                  {isArabic ? "جهة فاعلة" : "Stakeholders"}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/story">
                <Button size="lg" className="bg-[oklch(0.70_0.12_70)] hover:bg-[oklch(0.70_0.12_70)]/90 text-[oklch(0.15_0.01_240)] px-8 py-6 text-lg rounded-full font-semibold shadow-2xl hover:shadow-[oklch(0.70_0.12_70)]/50 transition-all duration-300 hover:scale-105">
                  {isArabic ? "استكشف المنصة" : "Explore Platform"}
                  <ArrowRight className={`h-5 w-5 ${isArabic ? 'mr-2' : 'ml-2'}`} />
                </Button>
              </Link>
              <Link href="/compass">
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full font-semibold backdrop-blur-md">
                  <BarChart3 className={`h-5 w-5 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                  {isArabic ? "لوحة البيانات" : "Data Dashboard"}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "ماذا نقدم" : "What We Offer"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic 
                ? "منصة استخبارات اقتصادية متكاملة مع بيانات شاملة وتحليلات معمقة"
                : "A complete economic intelligence platform with comprehensive data and in-depth analysis"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[oklch(0.35_0.15_15)]">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[oklch(0.55_0.12_180)] to-[oklch(0.35_0.15_15)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {isArabic ? "1. بيانات شاملة" : "1. Comprehensive Data"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? "15 عامًا من البيانات الاقتصادية والمالية (2010-2025) مع أكثر من 1,200 نقطة بيانات موثقة"
                    : "15 years of economic and financial data (2010-2025) with over 1,200 documented data points"
                  }
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[oklch(0.55_0.12_180)]">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[oklch(0.70_0.12_70)] to-[oklch(0.55_0.12_180)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {isArabic ? "2. تصورات تفاعلية" : "2. Interactive Visualizations"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? "رسوم بيانية وخرائط تفاعلية لفهم الاتجاهات والأنماط الاقتصادية المعقدة"
                    : "Interactive charts and maps to understand complex economic trends and patterns"
                  }
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[oklch(0.70_0.12_70)]">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[oklch(0.35_0.15_15)] to-[oklch(0.70_0.12_70)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {isArabic ? "3. تحليل الجهات الفاعلة" : "3. Stakeholder Analysis"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? "ملفات تعريفية شاملة لأكثر من 50 جهة فاعلة بما في ذلك البنوك والمانحين والحكومات"
                    : "Comprehensive profiles of 50+ stakeholders including banks, donors, and governments"
                  }
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[oklch(0.35_0.15_15)]">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[oklch(0.55_0.12_180)] to-[oklch(0.70_0.12_70)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {isArabic ? "4. توصيات سياسية" : "4. Policy Recommendations"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? "توصيات قائمة على الأدلة للمانحين وصناع السياسات والممارسين"
                    : "Evidence-based recommendations for donors, policymakers, and practitioners"
                  }
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[oklch(0.55_0.12_180)]">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[oklch(0.70_0.12_70)] to-[oklch(0.35_0.15_15)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {isArabic ? "5. مكتبة الأبحاث" : "5. Research Library"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? "أكثر من 45 تقريرًا ودراسة من مؤسسات موثوقة مثل البنك الدولي وصندوق النقد الدولي"
                    : "45+ reports and studies from credible institutions like World Bank and IMF"
                  }
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[oklch(0.70_0.12_70)]">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[oklch(0.35_0.15_15)] to-[oklch(0.55_0.12_180)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {isArabic ? "6. دعم ثنائي اللغة" : "6. Bilingual Support"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? "محتوى كامل باللغتين العربية والإنجليزية لضمان إمكانية الوصول العالمية"
                    : "Full content in both Arabic and English to ensure global accessibility"
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stakeholder Groups Section */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "من يستفيد" : "Who Benefits"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic 
                ? "منصة مصممة لخدمة مجموعة واسعة من الجهات الفاعلة"
                : "A platform designed to serve a wide range of stakeholders"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/executive-dashboard">
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-[oklch(0.35_0.15_15)]">
                <CardContent className="p-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[oklch(0.35_0.15_15)] to-[oklch(0.55_0.12_180)] flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {isArabic ? "المانحون والمنظمات الدولية" : "Donors & International Organizations"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isArabic ? "البنك الدولي، صندوق النقد الدولي، الأمم المتحدة" : "World Bank, IMF, UN Agencies"}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/cby-dashboard">
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-[oklch(0.55_0.12_180)]">
                <CardContent className="p-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[oklch(0.55_0.12_180)] to-[oklch(0.70_0.12_70)] flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {isArabic ? "البنوك المركزية والمؤسسات المالية" : "Central Banks & Financial Institutions"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isArabic ? "البنك المركزي اليمني، البنوك التجارية" : "CBY, Commercial Banks"}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/stakeholders">
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-[oklch(0.70_0.12_70)]">
                <CardContent className="p-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[oklch(0.70_0.12_70)] to-[oklch(0.35_0.15_15)] flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {isArabic ? "الباحثون والأكاديميون" : "Researchers & Academics"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isArabic ? "الجامعات، مراكز الأبحاث" : "Universities, Think Tanks"}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/literature">
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-[oklch(0.35_0.15_15)]">
                <CardContent className="p-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[oklch(0.55_0.12_180)] to-[oklch(0.70_0.12_70)] flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {isArabic ? "صناع السياسات والممارسون" : "Policymakers & Practitioners"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isArabic ? "الحكومات، المنظمات غير الحكومية" : "Governments, NGOs"}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "مصادر البيانات الموثوقة" : "Trusted Data Sources"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic 
                ? "جميع البيانات مستمدة من مؤسسات موثوقة ومصادر رسمية"
                : "All data sourced from credible institutions and official sources"
              }
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "World Bank",
              "IMF",
              "UN OCHA",
              "CBY",
              "Sana'a Center",
              "ACAPS",
              "FEWS NET",
              "WFP"
            ].map((source, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-[oklch(0.35_0.15_15)] hover:shadow-lg transition-all duration-300 text-center"
              >
                <p className="font-semibold text-sm">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[oklch(0.35_0.15_15)] to-[oklch(0.55_0.12_180)] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {isArabic ? "ابدأ الاستكشاف الآن" : "Start Exploring Now"}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {isArabic 
              ? "اكتشف رؤى عميقة حول الاقتصاد اليمني من خلال منصتنا الشاملة"
              : "Discover deep insights into Yemen's economy through our comprehensive platform"
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/compass">
              <Button size="lg" className="bg-white text-[oklch(0.35_0.15_15)] hover:bg-white/90 px-8 py-6 text-lg rounded-full font-semibold">
                <BarChart3 className={`h-5 w-5 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                {isArabic ? "لوحة البيانات" : "Data Dashboard"}
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full font-semibold">
                {isArabic ? "من نحن" : "About Us"}
                <ArrowRight className={`h-5 w-5 ${isArabic ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
