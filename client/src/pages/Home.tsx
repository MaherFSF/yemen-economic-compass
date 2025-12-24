import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Building2, 
  Globe, 
  FileSearch,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Info
} from "lucide-react";
import { APP_TITLE } from "@/const";
import { Link } from "wouter";

/**
 * Revolutionary Homepage - Evidence Engine for Yemen's Economy
 * 
 * Design Principles:
 * 1. Visual Storytelling - Every section tells a story with data
 * 2. Audience-First - Four distinct entry points for different users
 * 3. Evidence-Driven - All claims backed by visible sources
 * 4. Action-Oriented - Clear paths to insights and tools
 * 5. Bilingual - Arabic-first with English support
 */

export default function Home() {
  // Mock data - Replace with real API calls
  const economicPulse = {
    score: 42,
    status: "Critical",
    lastUpdated: "2025-01-15"
  };

  const keyMetrics = [
    {
      label: "Exchange Rate Gap",
      labelAr: "فجوة سعر الصرف",
      value: "52%",
      change: "+8.3%",
      trend: "up",
      source: "CBY, Jan 2025",
      confidence: "A"
    },
    {
      label: "Food Insecurity",
      labelAr: "انعدام الأمن الغذائي",
      value: "17M",
      change: "+2.1M",
      trend: "up",
      source: "WFP, Dec 2024",
      confidence: "A"
    },
    {
      label: "Aid Funding Gap",
      labelAr: "فجوة التمويل",
      value: "$1.2B",
      change: "+15%",
      trend: "up",
      source: "FTS, Jan 2025",
      confidence: "B"
    },
    {
      label: "Inflation Rate",
      labelAr: "معدل التضخم",
      value: "43%",
      change: "+5.2%",
      trend: "up",
      source: "World Bank, Q4 2024",
      confidence: "B"
    }
  ];

  const audiences = [
    {
      id: "citizens",
      title: "For Citizens",
      titleAr: "للمواطنين",
      description: "Understand cost of living",
      descriptionAr: "فهم تكلفة المعيشة",
      icon: "/citizen-icon.png",
      color: "var(--yemen-red)",
      links: [
        { label: "Cost Calculator", labelAr: "حاسبة التكلفة", href: "/citizens/calculator" },
        { label: "Exchange Rates", labelAr: "أسعار الصرف", href: "/citizens/exchange" },
        { label: "Why Prices Changed", labelAr: "لماذا تغيرت الأسعار", href: "/citizens/prices" }
      ]
    },
    {
      id: "policymakers",
      title: "For Policymakers",
      titleAr: "لصانعي السياسات",
      description: "Scenarios & policy options",
      descriptionAr: "سيناريوهات وخيارات",
      icon: "/policymaker-icon.png",
      color: "#3b82f6",
      links: [
        { label: "FX Dashboard", labelAr: "لوحة الصرف", href: "/policymakers/fx" },
        { label: "Policy Tracker", labelAr: "متتبع السياسات", href: "/policymakers/tracker" },
        { label: "Scenario Simulator", labelAr: "محاكي السيناريوهات", href: "/policymakers/simulator" }
      ]
    },
    {
      id: "donors",
      title: "For Donors",
      titleAr: "للمانحين",
      description: "Track results & impact",
      descriptionAr: "تتبع النتائج",
      icon: "/donor-icon.png",
      color: "var(--observatory-teal)",
      links: [
        { label: "Funding Pipeline", labelAr: "خط التمويل", href: "/donors/pipeline" },
        { label: "Results Tracker", labelAr: "متتبع النتائج", href: "/donors/results" },
        { label: "Market Functionality", labelAr: "وظائف السوق", href: "/donors/market" }
      ]
    },
    {
      id: "journalists",
      title: "For Journalists",
      titleAr: "للصحفيين",
      description: "Evidence packs & sources",
      descriptionAr: "حزم الأدلة",
      icon: "/journalist-icon.png",
      color: "#8b5cf6",
      links: [
        { label: "Evidence Builder", labelAr: "بناء الأدلة", href: "/journalists/evidence" },
        { label: "Claim Checker", labelAr: "مدقق المزاعم", href: "/journalists/checker" },
        { label: "Source Library", labelAr: "مكتبة المصادر", href: "/journalists/library" }
      ]
    }
  ];

  const recentUpdates = [
    {
      date: "2025-01-15",
      title: "Exchange rate depreciation accelerates in Aden",
      titleAr: "تسارع انخفاض سعر الصرف في عدن",
      type: "alert",
      confidence: "A"
    },
    {
      date: "2025-01-14",
      title: "New CBY circular on foreign exchange controls",
      titleAr: "تعميم جديد من البنك المركزي حول ضوابط الصرف",
      type: "policy",
      confidence: "A"
    },
    {
      date: "2025-01-13",
      title: "Food prices rise 12% month-on-month in Sana'a",
      titleAr: "ارتفاع أسعار المواد الغذائية 12% في صنعاء",
      type: "data",
      confidence: "B"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Crisis Alert Banner */}
      <div className="bg-destructive/10 border-b border-destructive/20 pulse-alert">
        <div className="container py-3">
          <div className="flex items-center gap-3 text-sm">
            <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
            <div className="flex-1">
              <span className="font-semibold text-destructive">Currency Alert:</span>
              <span className="ml-2 text-foreground">
                Exchange rate gap between Aden and Sana'a widens to 52% — 
                <Link href="/alerts/currency" className="ml-1 underline hover:no-underline">
                  View analysis →
                </Link>
              </span>
            </div>
            <Badge className="confidence-a">Confidence: A</Badge>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background with Yemen map */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/hero-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        
        <div className="container relative py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="gradient-text">
                  Yemen Economic Crisis Observatory
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold" lang="ar">
                مرصد الأزمة الاقتصادية في اليمن
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              The Evidence Engine for Yemen's Economy — Making economic reality{" "}
              <span className="font-semibold text-foreground">understandable</span>,{" "}
              <span className="font-semibold text-foreground">verifiable</span>, and{" "}
              <span className="font-semibold text-foreground">actionable</span>
            </p>

            {/* Economic Pulse */}
            <div className="flex flex-col items-center gap-4 pt-8">
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Economic Pulse
              </div>
              <div className="relative w-32 h-32">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-muted"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${economicPulse.score * 3.52} 352`}
                    className="text-destructive transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold">{economicPulse.score}</div>
                  <div className="text-xs text-muted-foreground">/ 100</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-destructive">
                  {economicPulse.status}
                </div>
                <div className="text-xs text-muted-foreground">
                  Last updated: {economicPulse.lastUpdated}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="data-card fade-in">
                <div className="metric">
                  <div className="flex items-start justify-between">
                    <div className="metric-label">{metric.label}</div>
                    <Badge className={`confidence-${metric.confidence.toLowerCase()}`}>
                      {metric.confidence}
                    </Badge>
                  </div>
                  <div className="metric-label" lang="ar">{metric.labelAr}</div>
                  <div className="metric-value">{metric.value}</div>
                  <div className="flex items-center justify-between">
                    <div className={`metric-change ${metric.trend === "up" ? "negative" : "positive"} flex items-center gap-1`}>
                      {metric.trend === "up" ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      {metric.change}
                    </div>
                    <button className="source-btn">
                      <Info className="h-3 w-3" />
                      {metric.source}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Entry Points */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who Are You?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4" lang="ar">
              من أنت؟
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your path to access tailored insights, tools, and evidence packs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {audiences.map((audience, index) => (
              <Card 
                key={audience.id}
                className={`${audience.id}-card p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${audience.color}20` }}
                  >
                    <img 
                      src={audience.icon} 
                      alt={audience.title}
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{audience.title}</h3>
                      <h4 className="text-xl font-bold mb-2" lang="ar">{audience.titleAr}</h4>
                      <p className="text-muted-foreground">{audience.description}</p>
                      <p className="text-muted-foreground" lang="ar">{audience.descriptionAr}</p>
                    </div>
                    <div className="space-y-2">
                      {audience.links.map((link, linkIndex) => (
                        <Link 
                          key={linkIndex}
                          href={link.href}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                        >
                          <div>
                            <div className="font-medium group-hover:text-primary transition-colors">
                              {link.label}
                            </div>
                            <div className="text-sm text-muted-foreground" lang="ar">
                              {link.labelAr}
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Changed Today */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  What Changed Today
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold" lang="ar">
                  ما الذي تغير اليوم
                </h3>
              </div>
              <Link href="/updates">
                <Button variant="outline">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {recentUpdates.map((update, index) => (
                <div key={index} className="timeline-item">
                  <Card className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {update.date}
                          </Badge>
                          <Badge 
                            variant={update.type === "alert" ? "destructive" : "secondary"}
                            className="text-xs"
                          >
                            {update.type}
                          </Badge>
                          <Badge className={`confidence-${update.confidence.toLowerCase()}`}>
                            {update.confidence}
                          </Badge>
                        </div>
                        <h4 className="text-lg font-semibold mb-1">
                          {update.title}
                        </h4>
                        <p className="text-muted-foreground" lang="ar">
                          {update.titleAr}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built on Evidence, Not Guesswork
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" lang="ar">
                مبني على الأدلة، وليس التخمين
              </h3>
              <p className="text-xl text-muted-foreground">
                Every number has a source. Every claim can be verified. Every analysis shows its confidence level.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4,416</div>
                <div className="text-sm text-muted-foreground">Documents</div>
                <div className="text-xs text-muted-foreground" lang="ar">وثيقة</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">318</div>
                <div className="text-sm text-muted-foreground">Events Tracked</div>
                <div className="text-xs text-muted-foreground" lang="ar">حدث متتبع</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">16</div>
                <div className="text-sm text-muted-foreground">Years Coverage</div>
                <div className="text-xs text-muted-foreground" lang="ar">سنة تغطية</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Data Sources</div>
                <div className="text-xs text-muted-foreground" lang="ar">مصدر بيانات</div>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/methodology">
                <Button size="lg" variant="outline">
                  <FileSearch className="mr-2 h-5 w-5" />
                  View Our Methodology
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Start Exploring Yemen's Economic Reality
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold" lang="ar">
              ابدأ استكشاف الواقع الاقتصادي لليمن
            </h3>
            <p className="text-xl text-muted-foreground">
              Access comprehensive data, verified sources, and actionable insights
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link href="/data">
                <Button size="lg">
                  Explore Data
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
