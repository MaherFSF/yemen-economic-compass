import {
  Building2, Globe, TrendingUp, BarChart3, Calculator, 
  Landmark, Calendar, FileText, Users, Database,
  BookOpen, Telescope, LineChart, ArrowRight, Search,
  ChevronRight
} from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { APP_LOGO } from "@/const";

export default function HomeNew() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--observatory-dark)] via-[var(--observatory-medium)] to-[var(--observatory-dark)]">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src={APP_LOGO} alt="CauseWay Observatory" className="h-12 w-12 rounded-lg" />
                <div className="flex items-center gap-2">
                  <Telescope className="w-6 h-6 text-white" />
                  <span className="text-xl font-bold text-white">CauseWay Financial & Economic Observatory</span>
                </div>
              </a>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Link href="/about-causeway">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  About
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[var(--observatory-teal)]/20 text-[var(--observatory-teal)] border-[var(--observatory-teal)]/30 px-4 py-2">
              Yemen Financial Research Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Understanding Yemen's
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--observatory-teal)] to-[var(--observatory-light-teal)]">
                Parallel Financial System
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive analysis and data on Yemen's economic landscape from 2010 to 2025.
              Explore interactive tools, dashboards, and research from CauseWay Foundation.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/dashboards">
                <Button size="lg" className="bg-[var(--observatory-teal)] hover:bg-[var(--observatory-medium)] text-white">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Explore Dashboards
                </Button>
              </Link>
              <Link href="/tools/simulator">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Calculator className="w-5 h-5 mr-2" />
                  Try Simulator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400">Years of Data</div>
              <div className="text-sm text-gray-500 mt-1">2010-2025</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Analysis Pages</div>
              <div className="text-sm text-gray-500 mt-1">Interactive tools & dashboards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-gray-400">Stakeholders</div>
              <div className="text-sm text-gray-500 mt-1">UN agencies, donors, governments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-400">Data Sources</div>
              <div className="text-sm text-gray-500 mt-1">International & local</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Analysis Tools</h2>
              <p className="text-gray-400">Interactive tools for exploring Yemen's economic data</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* What-If Simulator */}
              <Link href="/what-if-simulator">
                <Card className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-[var(--observatory-teal)]/50 transition-all cursor-pointer p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-orange-500/20">
                      <Calculator className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">What-If Simulator</h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Model alternative economic scenarios by neutralizing historical events or adjusting key indicators.
                  </p>
                  <div className="flex items-center text-[var(--observatory-teal)] group-hover:gap-2 transition-all">
                    <span className="text-sm font-medium">Explore tool</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>

              {/* Year Explorer */}
              <Link href="/year-explorer">
                <Card className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-[var(--observatory-teal)]/50 transition-all cursor-pointer p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-blue-500/20">
                      <Calendar className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Year Explorer</h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Navigate through Yemen's economic history year by year from 2010 to 2025.
                  </p>
                  <div className="flex items-center text-[var(--observatory-teal)] group-hover:gap-2 transition-all">
                    <span className="text-sm font-medium">Explore timeline</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>

              {/* Banking Dashboard */}
              <Link href="/banking-dashboard">
                <Card className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-[var(--observatory-teal)]/50 transition-all cursor-pointer p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-emerald-500/20">
                      <Landmark className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Banking System</h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Track the parallel central banks and commercial banking sector dynamics.
                  </p>
                  <div className="flex items-center text-[var(--observatory-teal)] group-hover:gap-2 transition-all">
                    <span className="text-sm font-medium">View dashboard</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Research Areas */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Key Research Areas</h2>
              <p className="text-gray-400">Explore comprehensive analysis across multiple dimensions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stakeholders */}
              <Link href="/stakeholders">
                <Card className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-[var(--observatory-teal)]/50 transition-all cursor-pointer p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-blue-500/20 mb-4">
                    <Globe className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Stakeholders</h3>
                  <p className="text-sm text-gray-400 mb-3">UN agencies, donors & governments</p>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">20+ profiles</Badge>
                </Card>
              </Link>

              {/* Dashboards */}
              <Link href="/dashboards">
                <Card className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-[var(--observatory-teal)]/50 transition-all cursor-pointer p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-violet-500/20 mb-4">
                    <BarChart3 className="w-8 h-8 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Dashboards</h3>
                  <p className="text-sm text-gray-400 mb-3">Interactive data visualizations</p>
                  <Badge variant="secondary" className="bg-violet-500/20 text-violet-300">10+ dashboards</Badge>
                </Card>
              </Link>

              {/* Economic Analysis */}
              <Link href="/comprehensive-charts">
                <Card className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-[var(--observatory-teal)]/50 transition-all cursor-pointer p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-emerald-500/20 mb-4">
                    <LineChart className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Economic Indicators</h3>
                  <p className="text-sm text-gray-400 mb-3">GDP, inflation, exchange rates</p>
                  <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300">50+ indicators</Badge>
                </Card>
              </Link>

              {/* Research Library */}
              <Link href="/literature">
                <Card className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-[var(--observatory-teal)]/50 transition-all cursor-pointer p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-amber-500/20 mb-4">
                    <BookOpen className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Research Library</h3>
                  <p className="text-sm text-gray-400 mb-3">Reports & publications</p>
                  <Badge variant="secondary" className="bg-amber-500/20 text-amber-300">100+ documents</Badge>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About CauseWay */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-full bg-[var(--observatory-teal)]/20">
                    <Telescope className="w-12 h-12 text-[var(--observatory-teal)]" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">About CauseWay Observatory</h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    The CauseWay Financial & Economic Observatory is a comprehensive research platform dedicated to analyzing Yemen's parallel financial system. 
                    Our mission is to provide transparent, data-driven insights into the economic dynamics that have shaped Yemen from 2010 to 2025.
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Through interactive tools, detailed dashboards, and rigorous analysis, we track the evolution of Yemen's banking sector, 
                    international aid flows, stakeholder contributions, and economic indicators to support informed decision-making and accountability.
                  </p>
                  <Link href="/about-causeway">
                    <Button className="bg-[var(--observatory-teal)] hover:bg-[var(--observatory-medium)] text-white">
                      Learn More About CauseWay
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Platform</h3>
                <ul className="space-y-2">
                  <li><Link href="/about-platform"><a className="text-gray-400 hover:text-white transition-colors">About Platform</a></Link></li>
                  <li><Link href="/about-causeway"><a className="text-gray-400 hover:text-white transition-colors">About CauseWay</a></Link></li>
                  <li><Link href="/site-map"><a className="text-gray-400 hover:text-white transition-colors">Site Map</a></Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Analysis</h3>
                <ul className="space-y-2">
                  <li><Link href="/dashboards"><a className="text-gray-400 hover:text-white transition-colors">Dashboards</a></Link></li>
                  <li><Link href="/what-if-simulator"><a className="text-gray-400 hover:text-white transition-colors">What-If Simulator</a></Link></li>
                  <li><Link href="/year-explorer"><a className="text-gray-400 hover:text-white transition-colors">Year Explorer</a></Link></li>
                  <li><Link href="/financial-calculators"><a className="text-gray-400 hover:text-white transition-colors">Calculators</a></Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Data</h3>
                <ul className="space-y-2">
                  <li><Link href="/banking-dashboard"><a className="text-gray-400 hover:text-white transition-colors">Banking System</a></Link></li>
                  <li><Link href="/comprehensive-charts"><a className="text-gray-400 hover:text-white transition-colors">Economic Indicators</a></Link></li>
                  <li><Link href="/stakeholders"><a className="text-gray-400 hover:text-white transition-colors">Stakeholders</a></Link></li>
                  <li><Link href="/timeline"><a className="text-gray-400 hover:text-white transition-colors">Timeline</a></Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="/literature"><a className="text-gray-400 hover:text-white transition-colors">Research Library</a></Link></li>
                  <li><Link href="/news"><a className="text-gray-400 hover:text-white transition-colors">News</a></Link></li>
                  <li><Link href="/file-manager"><a className="text-gray-400 hover:text-white transition-colors">File Manager</a></Link></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400">
                © 2025 CauseWay Foundation. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Yemen Financial & Economic Observatory | Research by Maher F.S. Farea
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
