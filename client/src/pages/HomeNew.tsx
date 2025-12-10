import { 
  Building2, Globe, TrendingUp, BarChart3, Calculator, 
  Landmark, Calendar, FileText, Users, Database, Map as MapIcon,
  BookOpen, Telescope, LineChart, DollarSign, Briefcase,
  ArrowRight, ExternalLink
} from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SiteMapCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  pages: { name: string; path: string; }[];
  count: number;
}

export default function HomeNew() {
  const categories: SiteMapCategory[] = [
    {
      title: "Main Pages",
      icon: <MapIcon className="w-5 h-5" />,
      color: "text-[var(--observatory-teal)]",
      bgColor: "bg-[var(--observatory-light-teal)]",
      count: 3,
      pages: [
        { name: "Home", path: "/" },
        { name: "About Platform", path: "/about-platform" },
        { name: "About CauseWay", path: "/about-causeway" },
      ]
    },
    {
      title: "International Organizations",
      icon: <Globe className="w-5 h-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      count: 13,
      pages: [
        { name: "IMF", path: "/stakeholders/imf" },
        { name: "World Bank", path: "/stakeholders/world-bank" },
        { name: "UN OCHA", path: "/stakeholders/ocha" },
        { name: "UNHCR", path: "/stakeholders/unhcr" },
        { name: "UNICEF", path: "/stakeholders/unicef" },
        { name: "IOM", path: "/stakeholders/iom" },
        { name: "UNDP", path: "/stakeholders/undp" },
        { name: "WFP", path: "/stakeholders/wfp" },
        { name: "FAO", path: "/stakeholders/fao" },
        { name: "WHO", path: "/stakeholders/who" },
      ]
    },
    {
      title: "Governments & Donors",
      icon: <Building2 className="w-5 h-5" />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      count: 9,
      pages: [
        { name: "Saudi Arabia", path: "/stakeholders/saudi-arabia" },
        { name: "UAE", path: "/stakeholders/uae" },
        { name: "Aden Government", path: "/governments/aden" },
        { name: "Sana'a Government", path: "/governments/sanaa" },
        { name: "All Donors", path: "/donors" },
        { name: "Bilateral Donors", path: "/donors/bilateral" },
      ]
    },
    {
      title: "Advanced Dashboards",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "text-violet-600",
      bgColor: "bg-violet-50",
      count: 11,
      pages: [
        { name: "Dashboard Hub", path: "/dashboards" },
        { name: "Banking System Dashboard", path: "/dashboards/banking" },
        { name: "Aid Flows Dashboard", path: "/dashboards/aid-flows" },
        { name: "Compare Dashboard", path: "/dashboards/compare" },
        { name: "Timeline Explorer", path: "/timeline" },
        { name: "Executive Dashboard", path: "/dashboards/executive" },
        { name: "Key Statistics", path: "/statistics" },
        { name: "Financial Transformation", path: "/transformation" },
        { name: "Power Map", path: "/power-map" },
      ]
    },
    {
      title: "Interactive Tools",
      icon: <Calculator className="w-5 h-5" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      count: 7,
      pages: [
        { name: "What-If Simulator", path: "/tools/simulator" },
        { name: "Year Explorer", path: "/tools/year-explorer" },
        { name: "Banks Database", path: "/banks" },
        { name: "Financial Calculators", path: "/tools/calculators" },
        { name: "Data Visualization", path: "/visualizations" },
        { name: "Advanced Visualizations", path: "/visualizations/advanced" },
        { name: "Financial Flows Network", path: "/network" },
      ]
    },
    {
      title: "Charts & Indicators",
      icon: <LineChart className="w-5 h-5" />,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      count: 6,
      pages: [
        { name: "Charts", path: "/charts" },
        { name: "Comparative Charts", path: "/charts/comparative" },
        { name: "Statistical Indicators", path: "/indicators" },
        { name: "Analytics", path: "/analytics" },
        { name: "Forecasting", path: "/forecasting" },
      ]
    },
    {
      title: "Banking Sector",
      icon: <Landmark className="w-5 h-5" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      count: 7,
      pages: [
        { name: "Central Banks", path: "/banking/central-banks" },
        { name: "CBY Aden", path: "/banking/cby-aden" },
        { name: "CBY Sana'a", path: "/banking/cby-sanaa" },
        { name: "Commercial Banks", path: "/banking/commercial" },
        { name: "Microfinance", path: "/banking/microfinance" },
        { name: "Kayan Platform", path: "/banking/kayan" },
      ]
    },
    {
      title: "Timeline & Events",
      icon: <Calendar className="w-5 h-5" />,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      count: 3,
      pages: [
        { name: "Timeline", path: "/timeline" },
        { name: "Events", path: "/events" },
        { name: "Story", path: "/story" },
      ]
    },
    {
      title: "Economic Analysis",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      count: 6,
      pages: [
        { name: "Overview", path: "/analysis" },
        { name: "Currency War", path: "/analysis/currency-war" },
        { name: "Ongoing War", path: "/analysis/war-impact" },
        { name: "Policies & Recommendations", path: "/analysis/policies" },
        { name: "Sanctions", path: "/analysis/sanctions" },
        { name: "Main Cities", path: "/analysis/cities" },
      ]
    },
    {
      title: "Sectors",
      icon: <Briefcase className="w-5 h-5" />,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      count: 3,
      pages: [
        { name: "Youth Economy", path: "/sectors/youth" },
        { name: "Investment", path: "/sectors/investment" },
        { name: "Other Sectors", path: "/sectors" },
      ]
    },
    {
      title: "Resources & Research",
      icon: <BookOpen className="w-5 h-5" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      count: 7,
      pages: [
        { name: "Research Library", path: "/research" },
        { name: "Financial Literature", path: "/research/literature" },
        { name: "International Reports", path: "/research/reports" },
        { name: "Yemen Directory", path: "/directory" },
        { name: "News", path: "/news" },
        { name: "File Manager", path: "/files" },
      ]
    },
    {
      title: "Stakeholder Hub",
      icon: <Users className="w-5 h-5" />,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      count: 1,
      pages: [
        { name: "Stakeholder Hub", path: "/stakeholders" },
      ]
    },
  ];

  const totalPages = categories.reduce((sum, cat) => sum + cat.count, 0);
  const totalDatasets = 67;
  const totalDocuments = 4416;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[var(--observatory-light-teal)]/30 to-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="observatory-gradient-dark text-white py-20 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Telescope className="w-16 h-16" />
                <img 
                  src="/IMG_9942.png" 
                  alt="CauseWay Financial & Economic Observatory" 
                  className="h-24 object-contain drop-shadow-2xl"
                />
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-center mb-4">
                Yemen Financial &<br />Economic Observatory
              </h1>
              
              <p className="text-xl md:text-2xl text-center text-white/90 max-w-3xl mb-8">
                Comprehensive analysis of Yemen's parallel financial system (2010-2025)
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                <div className="glass-effect text-center p-8 rounded-2xl border-white/20 backdrop-blur-xl">
                  <div className="text-5xl font-bold mb-2">{totalPages}</div>
                  <div className="text-sm text-white/80 uppercase tracking-wider">Total Pages</div>
                </div>
                <div className="glass-effect text-center p-8 rounded-2xl border-white/20 backdrop-blur-xl">
                  <div className="text-5xl font-bold mb-2">{totalDatasets}</div>
                  <div className="text-sm text-white/80 uppercase tracking-wider">Datasets</div>
                </div>
                <div className="glass-effect text-center p-8 rounded-2xl border-white/20 backdrop-blur-xl">
                  <div className="text-5xl font-bold mb-2">{totalDocuments.toLocaleString()}</div>
                  <div className="text-sm text-white/80 uppercase tracking-wider">Documents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Site Map Section */}
      <div className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 observatory-text-gradient">
            Complete Site Map
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navigate through all sections of the platform to explore comprehensive data, analysis, and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <Card 
              key={idx}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 hover:border-primary/50"
            >
              {/* Category Header */}
              <div className={`${category.bgColor} p-5 border-b-2 border-border/50`}>
                <div className="flex items-center justify-between mb-3">
                  <div className={`flex items-center gap-2 ${category.color}`}>
                    {category.icon}
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>
                  <Badge variant="secondary" className="bg-white border border-border text-xs">
                    {category.count}
                  </Badge>
                </div>
              </div>

              {/* Pages List */}
              <div className="p-5 bg-card">
                <ul className="space-y-2.5">
                  {category.pages.slice(0, 5).map((page, pageIdx) => (
                    <li key={pageIdx}>
                      <Link href={page.path}>
                        <a className="flex items-center gap-2 text-sm hover:text-primary transition-colors group/link py-1">
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          <span className="group-hover/link:translate-x-1 transition-transform">
                            {page.name}
                          </span>
                        </a>
                      </Link>
                    </li>
                  ))}
                  {category.pages.length > 5 && (
                    <li className="pt-2">
                      <Link href="/sitemap">
                        <a className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1">
                          <span>+{category.pages.length - 5} more</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-effect inline-block p-10 rounded-3xl max-w-4xl border-2 border-border/50">
            <h3 className="text-2xl font-bold mb-4">Explore the Full Platform</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Access comprehensive data, interactive dashboards, and in-depth analysis of Yemen's parallel financial system from 2010 to 2025
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/sitemap">
                <Button size="lg" className="observatory-gradient text-white hover:opacity-90">
                  <MapIcon className="w-4 h-4 mr-2" />
                  View Full Site Map
                </Button>
              </Link>
              <Link href="/dashboards/banking">
                <Button size="lg" variant="outline">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Banking Dashboard
                </Button>
              </Link>
              <Link href="/timeline">
                <Button size="lg" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Timeline Explorer
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* About CauseWay */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-[var(--observatory-light-teal)]">
                <Telescope className="w-8 h-8 text-[var(--observatory-teal)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">About the Observatory</h3>
                <p className="text-muted-foreground">
                  The Yemen Financial & Economic Observatory provides comprehensive analysis and data visualization of Yemen's parallel financial system, tracking economic indicators, banking sector evolution, and humanitarian aid flows.
                </p>
              </div>
            </div>
            <Link href="/about-platform">
              <Button variant="link" className="p-0 h-auto text-primary">
                Learn more about the platform <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-[var(--observatory-light-teal)]">
                <Building2 className="w-8 h-8 text-[var(--observatory-teal)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">About CauseWay</h3>
                <p className="text-muted-foreground">
                  CauseWay Financial & Economic Consultancies provides expert analysis, research, and strategic advisory services for conflict-affected economies, with specialized focus on Yemen's financial landscape.
                </p>
              </div>
            </div>
            <Link href="/about-causeway">
              <Button variant="link" className="p-0 h-auto text-primary">
                Learn more about CauseWay <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
