import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APP_LOGO } from "@/const";
import {
  ArrowRight,
  BarChart3,
  Database,
  Globe,
  LineChart,
  Search,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1428] via-[#0F1E3A] to-[#0A1428] text-white overflow-hidden">
      {/* Animated background pattern */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url(/hero-bg-pattern.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={APP_LOGO} alt="Logo" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="text-lg font-bold">Yemen Economic Compass</span>
                <span className="text-xs text-white/60">Financial Data Platform</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/timeline" className="text-sm hover:text-[#F59E0B] transition-colors">Timeline</Link>
              <Link href="/banking" className="text-sm hover:text-[#F59E0B] transition-colors">Banking</Link>
              <Link href="/research" className="text-sm hover:text-[#F59E0B] transition-colors">Research</Link>
              <Link href="/stakeholders" className="text-sm hover:text-[#F59E0B] transition-colors">Stakeholders</Link>
              <Button size="sm" className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1428]">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-sm font-medium">
                <Zap className="inline w-4 h-4 mr-2" />
                Comprehensive Economic Intelligence
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                Navigate Yemen's
                <span className="block bg-gradient-to-r from-[#F59E0B] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
                  Economic Landscape
                </span>
              </h1>
              
              <p className="text-xl text-white/70 leading-relaxed">
                The most comprehensive platform for analyzing financial and economic transformations in Yemen. 
                Access 16 years of verified data, 318 timeline events, and insights from 46 stakeholder organizations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1428] text-lg px-8 py-6 group">
                  Explore Platform
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-lg px-8 py-6">
                  View Research
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Users className="w-4 h-4 text-[#06B6D4]" />
                  <span>46 Organizations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Database className="w-4 h-4 text-[#10B981]" />
                  <span>1,287+ Data Points</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <BarChart3 className="w-4 h-4 text-[#F59E0B]" />
                  <span>16 Years Coverage</span>
                </div>
              </div>
            </div>

            {/* Right: Animated Dashboard Preview */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B]/20 via-[#06B6D4]/20 to-[#10B981]/20 blur-3xl" />
                
                {/* Dashboard Card */}
                <Card className="relative bg-white/5 backdrop-blur-xl border-white/10 p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Live Dashboard</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                      <span className="text-sm text-white/60">Real-time</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-lg p-4">
                      <div className="text-3xl font-bold text-[#F59E0B]">
                        <AnimatedCounter end={318} />
                      </div>
                      <div className="text-sm text-white/60 mt-1">Timeline Events</div>
                    </div>
                    <div className="bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-lg p-4">
                      <div className="text-3xl font-bold text-[#06B6D4]">
                        <AnimatedCounter end={14} />
                      </div>
                      <div className="text-sm text-white/60 mt-1">Banks Tracked</div>
                    </div>
                    <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg p-4">
                      <div className="text-3xl font-bold text-[#10B981]">
                        <AnimatedCounter end={4416} />
                      </div>
                      <div className="text-sm text-white/60 mt-1">Publications</div>
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <div className="text-3xl font-bold text-purple-400">
                        <AnimatedCounter end={46} />
                      </div>
                      <div className="text-sm text-white/60 mt-1">Stakeholders</div>
                    </div>
                  </div>

                  {/* Mini Chart Visualization */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Exchange Rate Trend</span>
                      <span className="text-[#10B981] flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        +32.8%
                      </span>
                    </div>
                    <div className="h-24 flex items-end gap-2">
                      {[40, 55, 45, 70, 60, 85, 75, 95].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-[#F59E0B] to-[#06B6D4] rounded-t transition-all duration-500 hover:opacity-80"
                          style={{
                            height: `${height}%`,
                            animationDelay: `${i * 100}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-[#0F1E3A]/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Powerful Tools for
              <span className="block bg-gradient-to-r from-[#F59E0B] to-[#06B6D4] bg-clip-text text-transparent">
                Economic Analysis
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Everything you need to understand Yemen's complex economic landscape in one integrated platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <LineChart className="w-8 h-8" />,
                title: "Timeline Explorer",
                description: "Navigate through 318 major events from 2010-2025 with detailed context and impact analysis",
                color: "#F59E0B",
                link: "/timeline"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Banking Dashboard",
                description: "Track 14 banks with real-time status, financial data, and operational insights",
                color: "#06B6D4",
                link: "/banking"
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "Research Library",
                description: "Access 4,416 publications from 30 institutions with advanced search capabilities",
                color: "#10B981",
                link: "/research"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Stakeholder Hub",
                description: "Comprehensive profiles of 46 organizations including World Bank, IMF, and UN agencies",
                color: "#A855F7",
                link: "/stakeholders"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "What-If Simulator",
                description: "Model alternative scenarios by neutralizing events and adjusting economic indicators",
                color: "#EC4899",
                link: "/what-if"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Year Explorer",
                description: "Deep-dive into any year from 2010-2025 with comprehensive economic data and analysis",
                color: "#F59E0B",
                link: "/year-explorer"
              },
            ].map((feature, i) => (
              <Link key={i} href={feature.link}>
                <Card 
                  className="group relative bg-white/5 backdrop-blur-xl border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full"
                  style={{
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  {/* Glow on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                    style={{ background: `${feature.color}20` }}
                  />
                  
                  <div 
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: `${feature.color}20`, color: feature.color }}
                  >
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#F59E0B] transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: feature.color }}>
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <Card className="relative bg-gradient-to-r from-[#F59E0B]/10 via-[#06B6D4]/10 to-[#10B981]/10 backdrop-blur-xl border-white/10 p-12 text-center overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B]/5 via-[#06B6D4]/5 to-[#10B981]/5 animate-pulse" />
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">
                Ready to Explore?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Start navigating Yemen's economic data with our comprehensive platform
              </p>
              <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1428] text-lg px-12 py-6">
                Get Started Now
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={APP_LOGO} alt="Logo" className="h-8 w-8" />
              <span className="text-sm text-white/60">© 2025 Yemen Economic Compass. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/methodology" className="hover:text-white transition-colors">Methodology</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
