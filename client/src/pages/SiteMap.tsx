import { 
  Building2, Globe, TrendingUp, BarChart3, Calculator, 
  Landmark, Calendar, FileText, Users, Database, Map as MapIcon,
  BookOpen, Telescope, LineChart, DollarSign, Briefcase,
  Target, Award, Shield, Layers, Network, Activity
} from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SiteMapCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  pages: { name: string; path: string; }[];
  count: number;
}

export default function SiteMap() {
  const categories: SiteMapCategory[] = [
    {
      title: "Main Pages",
      icon: <MapIcon className="w-6 h-6" />,
      color: "from-[var(--observatory-teal)] to-[var(--observatory-green)]",
      count: 3,
      pages: [
        { name: "Home", path: "/" },
        { name: "About Platform", path: "/about-platform" },
        { name: "About CauseWay", path: "/about-causeway" },
      ]
    },
    {
      title: "International Organizations",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      count: 10,
      pages: [
        { name: "IMF", path: "/imf" },
        { name: "World Bank", path: "/world-bank" },
        { name: "UN OCHA", path: "/un-ocha" },
        { name: "UNHCR", path: "/unhcr" },
        { name: "UNICEF", path: "/unicef" },
        { name: "IOM", path: "/iom" },
        { name: "UNDP", path: "/undp" },
        { name: "WFP", path: "/wfp" },
        { name: "FAO", path: "/fao" },
        { name: "WHO", path: "/who" },
      ]
    },
    {
      title: "Governments & Donors",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
      count: 6,
      pages: [
        { name: "Saudi Arabia", path: "/saudi-arabia" },
        { name: "UAE", path: "/uae" },
        { name: "Aden Government", path: "/gov-aden" },
        { name: "Sana'a Government", path: "/gov-sanaa" },
        { name: "All Donors", path: "/donors" },
        { name: "Bilateral Donors", path: "/bilateral-donors" },
      ]
    },
    {
      title: "Advanced Dashboards",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-violet-500 to-purple-500",
      count: 9,
      pages: [
        { name: "Dashboard Hub", path: "/dashboards-hub" },
        { name: "Banking System Dashboard", path: "/banking-system-dashboard" },
        { name: "Aid Flows Dashboard", path: "/aid-flows-dashboard" },
        { name: "Compass Dashboard", path: "/compass" },
        { name: "Timeline Explorer", path: "/timeline-explorer" },
        { name: "Executive Dashboard", path: "/executive-dashboard" },
        { name: "Key Statistics", path: "/key-statistics" },
        { name: "Financial Transformation", path: "/transformation" },
        { name: "Power Map", path: "/power-map" },
      ]
    },
    {
      title: "Interactive Tools",
      icon: <Calculator className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      count: 7,
      pages: [
        { name: "What-If Simulator", path: "/what-if-simulator" },
        { name: "Year Explorer", path: "/year-explorer" },
        { name: "Banks Database", path: "/banks-database" },
        { name: "Financial Calculators", path: "/financial-calculators" },
        { name: "Data Visualization", path: "/data-viz" },
        { name: "Advanced Visualizations", path: "/advanced-viz" },
        { name: "Financial Flows Network", path: "/financial-flows" },
      ]
    },
    {
      title: "Charts & Indicators",
      icon: <LineChart className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      count: 6,
      pages: [
        { name: "Charts", path: "/charts" },
        { name: "Comprehensive Charts", path: "/comprehensive-charts" },
        { name: "Statistical Indicators", path: "/indicators" },
        { name: "Analytics", path: "/analytics" },
        { name: "Forecasting", path: "/forecasting" },
      ]
    },
    {
      title: "Banking Sector",
      icon: <Landmark className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
      count: 7,
      pages: [
        { name: "Banking Sector Overview", path: "/banking" },
        { name: "CBY Aden", path: "/cby-aden" },
        { name: "CBY Sana'a", path: "/cby-sanaa" },
        { name: "Commercial Banks", path: "/banks" },
        { name: "Microfinance", path: "/microfinance" },
        { name: "Kayan Platform", path: "/kayan" },
        { name: "Banking Dashboard", path: "/banking-dashboard" },
      ]
    },
    {
      title: "Timeline & Events",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-amber-500 to-yellow-500",
      count: 3,
      pages: [
        { name: "Timeline", path: "/timeline" },
        { name: "Events", path: "/events" },
        { name: "Story", path: "/story" },
      ]
    },
    {
      title: "Economic Analysis",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      count: 6,
      pages: [
        { name: "Overview", path: "/overview" },
        { name: "Currency War", path: "/currency-war" },
        { name: "Economic Crisis", path: "/economic-crisis" },
        { name: "Policies & Recommendations", path: "/policy" },
        { name: "Sanctions", path: "/sanctions" },
        { name: "Main Cities", path: "/cities" },
      ]
    },
    {
      title: "Sectors",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
      count: 3,
      pages: [
        { name: "Youth Economy", path: "/youth-economy" },
        { name: "Investment", path: "/investment" },
        { name: "Climate Finance", path: "/climate-finance" },
      ]
    },
    {
      title: "Resources & Research",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      count: 7,
      pages: [
        { name: "Research Library", path: "/research" },
        { name: "Financial Literature", path: "/literature" },
        { name: "International Reports", path: "/reports" },
        { name: "Document Library", path: "/documents" },
        { name: "News", path: "/news" },
        { name: "File Manager", path: "/files" },
      ]
    },
    {
      title: "Stakeholder Hub",
      icon: <Users className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500",
      count: 1,
      pages: [
        { name: "Stakeholder Hub", path: "/stakeholders" },
      ]
    },
  ];

  const totalPages = categories.reduce((sum, cat) => sum + cat.count, 0);
  const totalDatasets = 67; // From the reference image
  const totalDocuments = 4416; // From existing data

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[var(--observatory-light-teal)] to-background">
      {/* Hero Section */}
      <div className="observatory-gradient-dark text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Telescope className="w-16 h-16 mr-4" />
            <img 
              src="/IMG_9942.png" 
              alt="CauseWay Financial & Economic Observatory" 
              className="h-20 object-contain"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
            Site Map
          </h1>
          
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto mb-8">
            Complete guide to all pages and content on the Yemen Financial & Economic Observatory platform
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-effect text-center p-6 rounded-xl border-white/20">
              <div className="text-4xl font-bold mb-2">{totalPages}</div>
              <div className="text-sm text-white/80">Total Pages</div>
            </div>
            <div className="glass-effect text-center p-6 rounded-xl border-white/20">
              <div className="text-4xl font-bold mb-2">{totalDatasets}</div>
              <div className="text-sm text-white/80">Datasets</div>
            </div>
            <div className="glass-effect text-center p-6 rounded-xl border-white/20">
              <div className="text-4xl font-bold mb-2">{totalDocuments.toLocaleString()}</div>
              <div className="text-sm text-white/80">Documents</div>
            </div>
          </div>
        </div>
      </div>

      {/* Site Map Grid */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <Card 
              key={idx}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <h2 className="text-xl font-bold">{category.title}</h2>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {category.count} pages
                  </Badge>
                </div>
              </div>

              {/* Pages List */}
              <div className="p-6 bg-card">
                <ul className="space-y-2">
                  {category.pages.map((page, pageIdx) => (
                    <li key={pageIdx}>
                      <Link href={page.path}>
                        <a className="flex items-center gap-2 text-sm hover:text-primary transition-colors group/link py-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-muted group-hover/link:bg-primary transition-colors"></div>
                          <span className="group-hover/link:translate-x-1 transition-transform">
                            {page.name}
                          </span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <div className="glass-effect inline-block p-8 rounded-2xl max-w-3xl">
            <p className="text-muted-foreground mb-4">
              All pages are updated with comprehensive data from 2010-2025. Use the top menu for quick navigation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/">
                <a className="inline-flex items-center gap-2 px-6 py-3 observatory-gradient text-white rounded-lg hover:opacity-90 transition-opacity">
                  <MapIcon className="w-4 h-4" />
                  Back to Home
                </a>
              </Link>
              <Link href="/about-platform">
                <a className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
                  <FileText className="w-4 h-4" />
                  About Platform
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
