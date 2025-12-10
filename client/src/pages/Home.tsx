import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APP_LOGO } from "@/const";
import {
  ArrowRight,
  BarChart3,
  Database,
  FileText,
  Globe,
  LineChart,
  Search,
  TrendingUp,
  Users,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={APP_LOGO} alt="Logo" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-900">Yemen Economic Compass</span>
                <span className="text-xs text-slate-600">Financial Data Platform</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/timeline" className="text-sm text-slate-700 hover:text-blue-800 transition-colors font-medium">Timeline</Link>
              <Link href="/banking" className="text-sm text-slate-700 hover:text-blue-800 transition-colors font-medium">Banking</Link>
              <Link href="/research" className="text-sm text-slate-700 hover:text-blue-800 transition-colors font-medium">Research</Link>
              <Link href="/stakeholders" className="text-sm text-slate-700 hover:text-blue-800 transition-colors font-medium">Stakeholders</Link>
              <Button size="sm" className="financial-gradient text-white hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-sm font-semibold">
                <TrendingUp className="inline w-4 h-4 mr-2" />
                Comprehensive Economic Intelligence
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-slate-900">
                Navigate Yemen's{" "}
                <span className="financial-text-gradient">Economic Landscape</span>
              </h1>
              
              <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
                The most comprehensive platform for analyzing financial and economic transformation in Yemen. Access 16 years of data, 364 events, 4,416 publications, and 46 stakeholder profiles.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/dashboards-hub">
                  <Button size="lg" className="financial-gradient text-white hover:opacity-90 transition-opacity">
                    Explore Dashboards
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/research">
                  <Button size="lg" variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-100">
                    Browse Research
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Live Dashboard Preview */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <Card className="p-6 glass-effect shadow-xl border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-slate-900">Live Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-sm text-slate-600">Real-time</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                    <div className="text-3xl font-black text-blue-800">
                      <AnimatedCounter end={14} />
                    </div>
                    <div className="text-sm text-blue-700 font-medium mt-1">Banks Tracked</div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200">
                    <div className="text-3xl font-black text-teal-800">
                      <AnimatedCounter end={318} />
                    </div>
                    <div className="text-sm text-teal-700 font-medium mt-1">Timeline Events</div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200">
                    <div className="text-3xl font-black text-violet-800">
                      <AnimatedCounter end={46} />
                    </div>
                    <div className="text-sm text-violet-700 font-medium mt-1">Stakeholders</div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200">
                    <div className="text-3xl font-black text-emerald-800">
                      <AnimatedCounter end={4416} />
                    </div>
                    <div className="text-sm text-emerald-700 font-medium mt-1">Publications</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Coverage Period</span>
                    <span className="font-bold text-slate-900">2010-2025 (16 years)</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Powerful Tools for Economic Analysis
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Access comprehensive data, interactive visualizations, and advanced analytics to understand Yemen's economic transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 card-hover border-slate-200 bg-gradient-to-br from-white to-blue-50/30">
              <div className="w-14 h-14 rounded-xl financial-gradient flex items-center justify-center mb-6">
                <LineChart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Timeline Explorer</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Navigate through 364 critical events from 2010-2025 with causal relationships and economic impacts.
              </p>
              <Link href="/timeline" className="text-blue-800 font-semibold hover:text-blue-900 inline-flex items-center">
                Explore Timeline
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 card-hover border-slate-200 bg-gradient-to-br from-white to-teal-50/30">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Banking Dashboard</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Track 14 banks with financial data, branch information, and real-time status updates.
              </p>
              <Link href="/banking-dashboard" className="text-teal-700 font-semibold hover:text-teal-800 inline-flex items-center">
                View Dashboard
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 card-hover border-slate-200 bg-gradient-to-br from-white to-emerald-50/30">
              <div className="w-14 h-14 rounded-xl success-gradient flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Research Library</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Access 4,416 publications from 30 institutions covering 16 years of economic research.
              </p>
              <Link href="/research" className="text-emerald-700 font-semibold hover:text-emerald-800 inline-flex items-center">
                Browse Library
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Card>

            {/* Feature 4 */}
            <Card className="p-8 card-hover border-slate-200 bg-gradient-to-br from-white to-violet-50/30">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-violet-700 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Stakeholder Hub</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Explore profiles of 46 key stakeholders including international organizations, governments, and donors.
              </p>
              <Link href="/stakeholders" className="text-violet-700 font-semibold hover:text-violet-800 inline-flex items-center">
                View Stakeholders
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Card>

            {/* Feature 5 */}
            <Card className="p-8 card-hover border-slate-200 bg-gradient-to-br from-white to-amber-50/30">
              <div className="w-14 h-14 rounded-xl warning-gradient flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">What-If Simulator</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Model economic scenarios and forecast impacts with interactive simulation tools.
              </p>
              <Link href="/what-if-simulator" className="text-amber-700 font-semibold hover:text-amber-800 inline-flex items-center">
                Try Simulator
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Card>

            {/* Feature 6 */}
            <Card className="p-8 card-hover border-slate-200 bg-gradient-to-br from-white to-rose-50/30">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-600 to-rose-700 flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data Visualization</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Interactive charts and graphs powered by comprehensive economic datasets.
              </p>
              <Link href="/data-viz" className="text-rose-700 font-semibold hover:text-rose-800 inline-flex items-center">
                Explore Data
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 financial-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-white mb-2">
                <AnimatedCounter end={16} suffix="+" />
              </div>
              <div className="text-blue-100 font-medium">Years of Data</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">
                <AnimatedCounter end={364} />
              </div>
              <div className="text-blue-100 font-medium">Timeline Events</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">
                <AnimatedCounter end={4416} />
              </div>
              <div className="text-blue-100 font-medium">Publications</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">
                <AnimatedCounter end={46} />
              </div>
              <div className="text-blue-100 font-medium">Stakeholders</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <Globe className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h2 className="text-4xl font-black mb-4">
            Ready to Explore Yemen's Economic Data?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join researchers, policymakers, and analysts using the Yemen Economic Compass for comprehensive economic intelligence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/dashboards-hub">
              <Button size="lg" className="financial-gradient text-white hover:opacity-90">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/sitemap">
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                View Site Map
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><Link href="/about-platform" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/sitemap" className="hover:text-white transition-colors">Site Map</Link></li>
                <li><Link href="/about-causeway" className="hover:text-white transition-colors">CauseWay Foundation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Data & Analysis</h4>
              <ul className="space-y-2">
                <li><Link href="/timeline" className="hover:text-white transition-colors">Timeline</Link></li>
                <li><Link href="/banking-dashboard" className="hover:text-white transition-colors">Banking</Link></li>
                <li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Tools</h4>
              <ul className="space-y-2">
                <li><Link href="/what-if-simulator" className="hover:text-white transition-colors">Simulator</Link></li>
                <li><Link href="/data-viz" className="hover:text-white transition-colors">Visualizations</Link></li>
                <li><Link href="/dashboards-hub" className="hover:text-white transition-colors">Dashboards</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/stakeholders" className="hover:text-white transition-colors">Stakeholders</Link></li>
                <li><Link href="/documents" className="hover:text-white transition-colors">Documents</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2025 CauseWay Foundation. All rights reserved.</p>
            <p className="mt-2">Yemen Economic Compass - Financial Data Platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
