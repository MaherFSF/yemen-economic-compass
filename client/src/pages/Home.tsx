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
  Info,
  Calculator,
  LineChart,
  Target,
  Newspaper,
  Database,
  BookOpen,
  CheckCircle2
} from "lucide-react";
import { APP_TITLE } from "@/const";
import { Link } from "wouter";

/**
 * Revolutionary Homepage - Evidence Engine for Yemen's Economy
 * 
 * REDESIGNED FOR MAXIMUM VISUAL IMPACT
 */

export default function Home() {
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
      icon: Users,
      color: "var(--yemen-red)",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      borderColor: "border-red-200 dark:border-red-800",
      links: [
        { label: "Cost Calculator", labelAr: "حاسبة التكلفة", href: "/citizens/calculator", icon: Calculator },
        { label: "Exchange Rates", labelAr: "أسعار الصرف", href: "/citizens/exchange", icon: LineChart },
        { label: "Why Prices Changed", labelAr: "لماذا تغيرت الأسعار", href: "/citizens/prices", icon: Info }
      ]
    },
    {
      id: "policymakers",
      title: "For Policymakers",
      titleAr: "لصانعي السياسات",
      description: "Scenarios & policy options",
      descriptionAr: "سيناريوهات وخيارات",
      icon: Building2,
      color: "#3b82f6",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      links: [
        { label: "FX Dashboard", labelAr: "لوحة الصرف", href: "/policymakers/fx", icon: LineChart },
        { label: "Policy Tracker", labelAr: "متتبع السياسات", href: "/policymakers/tracker", icon: Target },
        { label: "Scenario Simulator", labelAr: "محاكي السيناريوهات", href: "/policymakers/simulator", icon: Target }
      ]
    },
    {
      id: "donors",
      title: "For Donors",
      titleAr: "للمانحين",
      description: "Track results & impact",
      descriptionAr: "تتبع النتائج",
      icon: Globe,
      color: "var(--observatory-teal)",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
      borderColor: "border-teal-200 dark:border-teal-800",
      links: [
        { label: "Funding Pipeline", labelAr: "خط التمويل", href: "/donors/pipeline", icon: LineChart },
        { label: "Results Tracker", labelAr: "متتبع النتائج", href: "/donors/results", icon: Target },
        { label: "Market Functionality", labelAr: "وظائف السوق", href: "/donors/market", icon: Database }
      ]
    },
    {
      id: "journalists",
      title: "For Journalists",
      titleAr: "للصحفيين",
      description: "Evidence packs & sources",
      descriptionAr: "حزم الأدلة",
      icon: FileSearch,
      color: "#8b5cf6",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      links: [
        { label: "Evidence Builder", labelAr: "بناء الأدلة", href: "/journalists/evidence", icon: BookOpen },
        { label: "Claim Checker", labelAr: "مدقق المزاعم", href: "/journalists/checker", icon: CheckCircle2 },
        { label: "Source Library", labelAr: "مكتبة المصادر", href: "/journalists/library", icon: Database }
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

      {/* Hero Section - REDESIGNED FOR IMPACT */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
        {/* Stronger Background Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(/hero-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "contrast(1.2) brightness(0.9)"
          }}
        />
        
        {/* Gradient Overlay for Better Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
        
        <div className="container relative py-24 md:py-40">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            {/* Title - LARGER & BOLDER */}
            <div className="space-y-6 fade-in">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">
                  Yemen Economic Crisis
                </span>
                <br />
                <span className="text-destructive">
                  Observatory
                </span>
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground/90" lang="ar">
                مرصد الأزمة الاقتصادية في اليمن
              </h2>
            </div>

            {/* Subtitle - MORE PROMINENT */}
            <p className="text-2xl md:text-3xl text-foreground/80 max-w-4xl mx-auto leading-relaxed fade-in">
              The Evidence Engine for Yemen's Economy — Making economic reality{" "}
              <span className="font-bold text-foreground">understandable</span>,{" "}
              <span className="font-bold text-foreground">verifiable</span>, and{" "}
              <span className="font-bold text-foreground">actionable</span>
            </p>

            {/* Economic Pulse - MUCH LARGER & MORE PROMINENT */}
            <div className="flex flex-col items-center gap-6 pt-12 fade-in">
              <div className="text-base text-muted-foreground uppercase tracking-widest font-semibold">
                Economic Pulse
              </div>
              <div className="relative w-56 h-56 md:w-64 md:h-64">
                {/* Outer glow effect */}
                <div className="absolute inset-0 rounded-full bg-destructive/20 blur-2xl" />
                
                <svg className="w-full h-full -rotate-90 relative z-10">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-muted/30"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${economicPulse.score * 4.4} 440`}
                    strokeLinecap="round"
                    className="text-destructive transition-all duration-1000 drop-shadow-lg"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-7xl md:text-8xl font-bold text-foreground">{economicPulse.score}</div>
                  <div className="text-xl text-muted-foreground font-medium">/ 100</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-destructive mb-2">
                  {economicPulse.status}
                </div>
                <div className="text-sm text-muted-foreground">
                  Last updated: {economicPulse.lastUpdated}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics - REDESIGNED WITH BETTER SPACING */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1 flex-1">
                      <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        {metric.label}
                      </div>
                      <div className="text-sm font-semibold text-muted-foreground" lang="ar">
                        {metric.labelAr}
                      </div>
                    </div>
                    <Badge className={`confidence-${metric.confidence.toLowerCase()} text-base px-3 py-1`}>
                      {metric.confidence}
                    </Badge>
                  </div>
                  
                  {/* Value - MUCH LARGER */}
                  <div className="text-5xl md:text-6xl font-bold text-foreground">
                    {metric.value}
                  </div>
                  
                  {/* Change & Source */}
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className={`flex items-center gap-2 font-semibold text-lg ${metric.trend === "up" ? "text-red-600 dark:text-red-400" : "text-emerald-600 dark:text-emerald-400"}`}>
                      {metric.trend === "up" ? (
                        <TrendingUp className="h-5 w-5" />
                      ) : (
                        <TrendingDown className="h-5 w-5" />
                      )}
                      {metric.change}
                    </div>
                    <button className="flex items-center gap-1 text-sm hover:underline transition-colors text-primary">
                      <Info className="h-4 w-4" />
                      <span className="font-medium">{metric.source}</span>
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Cards - COMPLETELY REDESIGNED */}
      <section className="py-20">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Who Are You?</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6" lang="ar">من أنت؟</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your path to access tailored insights, tools, and evidence packs
            </p>
          </div>

          {/* Audience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {audiences.map((audience, index) => {
              const IconComponent = audience.icon;
              return (
                <Card 
                  key={audience.id}
                  className={`p-10 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 ${audience.borderColor} ${audience.bgColor} fade-in`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="space-y-6">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4">
                      <div 
                        className="p-4 rounded-2xl"
                        style={{ 
                          backgroundColor: audience.color,
                          opacity: 0.1
                        }}
                      >
                        <IconComponent 
                          className="h-12 w-12"
                          style={{ color: audience.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{audience.title}</h3>
                        <h4 className="text-xl font-bold text-muted-foreground" lang="ar">
                          {audience.titleAr}
                        </h4>
                        <p className="text-base text-muted-foreground mt-2">
                          {audience.description}
                        </p>
                        <p className="text-base text-muted-foreground" lang="ar">
                          {audience.descriptionAr}
                        </p>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-3 pt-4 border-t">
                      {audience.links.map((link, linkIndex) => {
                        const LinkIcon = link.icon;
                        return (
                          <Link 
                            key={linkIndex}
                            href={link.href}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors group"
                          >
                            <LinkIcon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                            <div className="flex-1">
                              <div className="font-semibold group-hover:text-primary transition-colors">
                                {link.label}
                              </div>
                              <div className="text-sm text-muted-foreground" lang="ar">
                                {link.labelAr}
                              </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Changed Today - PROPER TIMELINE */}
      <section className="py-20 bg-muted/20">
        <div className="container max-w-4xl">
          {/* Section Header */}
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Changed Today</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6" lang="ar">ما الذي تغير اليوم</h3>
          </div>

          {/* Timeline */}
          <div className="space-y-0">
            {recentUpdates.map((update, index) => (
              <div 
                key={index} 
                className="relative pl-12 pb-12 last:pb-0 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Vertical Line */}
                {index < recentUpdates.length - 1 && (
                  <div className="absolute left-[23px] top-12 bottom-0 w-0.5 bg-border" />
                )}
                
                {/* Timeline Dot */}
                <div 
                  className="absolute left-4 top-2 w-5 h-5 rounded-full border-4 border-background shadow-lg"
                  style={{ 
                    backgroundColor: update.type === "alert" ? "var(--yemen-red)" : 
                                   update.type === "policy" ? "#3b82f6" : 
                                   "var(--observatory-teal)"
                  }}
                />

                {/* Content Card */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="text-sm font-semibold text-muted-foreground">
                      {update.date}
                    </div>
                    <Badge className={`confidence-${update.confidence.toLowerCase()}`}>
                      {update.confidence}
                    </Badge>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{update.title}</h4>
                  <p className="text-lg text-muted-foreground" lang="ar">{update.titleAr}</p>
                </Card>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="gap-2">
              View All
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals - REDESIGNED */}
      <section className="py-20">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built on Evidence, Not Guesswork</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6" lang="ar">مبني على الأدلة، وليس التخمين</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every number has a source. Every claim can be verified. Every analysis shows its confidence level.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "4,416", label: "Documents", labelAr: "وثيقة", icon: BookOpen },
              { value: "318", label: "Events Tracked", labelAr: "حدث متتبع", icon: Target },
              { value: "16", label: "Years Coverage", labelAr: "سنة تغطية", icon: LineChart },
              { value: "30+", label: "Data Sources", labelAr: "مصدر بيانات", icon: Database }
            ].map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center space-y-4 p-8 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <StatIcon className="h-12 w-12 mx-auto text-primary" />
                  <div className="text-5xl md:text-6xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      {stat.label}
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground" lang="ar">
                      {stat.labelAr}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-4xl text-center">
          <div className="space-y-8 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Start Exploring Yemen's Economic Reality
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold" lang="ar">
              ابدأ استكشاف الواقع الاقتصادي لليمن
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access comprehensive data, verified sources, and actionable insights
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2">
                View Our Methodology
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Explore Data
                <Database className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
