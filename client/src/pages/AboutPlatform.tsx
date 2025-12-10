import { Telescope, Database, BarChart3, FileText, Users, Target, Award, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[var(--observatory-light-teal)]/20 to-background">
      {/* Hero Section */}
      <div className="observatory-gradient-dark text-white py-16">
        <div className="container">
          <div className="flex items-center justify-center mb-6">
            <Telescope className="w-12 h-12 mr-3" />
            <h1 className="text-5xl font-bold">About the Observatory</h1>
          </div>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
            Yemen Financial & Economic Observatory provides comprehensive analysis and data visualization of Yemen's parallel financial system
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 glass-effect">
            <h2 className="text-3xl font-bold mb-4 observatory-text-gradient">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The Yemen Financial & Economic Observatory is a comprehensive platform dedicated to tracking, analyzing, and visualizing the evolution of Yemen's parallel financial system from 2010 to 2025. Our mission is to provide researchers, policymakers, humanitarian organizations, and the international community with accurate, data-driven insights into Yemen's complex economic landscape.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through rigorous research, advanced data visualization, and expert analysis, we aim to illuminate the financial dynamics of a conflict-affected economy and support evidence-based decision-making for stabilization and recovery efforts.
            </p>
          </Card>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="p-3 rounded-lg bg-[var(--observatory-light-teal)] w-fit mb-4">
                <Database className="w-8 h-8 text-[var(--observatory-teal)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Data</h3>
              <p className="text-muted-foreground">
                67 datasets covering 16 years of economic indicators, banking sector data, aid flows, and conflict metrics
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="p-3 rounded-lg bg-blue-50 w-fit mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Dashboards</h3>
              <p className="text-muted-foreground">
                Advanced visualizations and dashboards for exploring banking systems, aid flows, and economic trends
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="p-3 rounded-lg bg-purple-50 w-fit mb-4">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Research Library</h3>
              <p className="text-muted-foreground">
                4,416 documents from international organizations, governments, and research institutions
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="p-3 rounded-lg bg-green-50 w-fit mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Stakeholder Profiles</h3>
              <p className="text-muted-foreground">
                Detailed profiles of 46+ stakeholders including UN agencies, donors, governments, and financial institutions
              </p>
            </Card>
          </div>
        </div>

        {/* What We Track */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What We Track</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-[var(--observatory-teal)]">Banking Sector</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Central Bank split (Aden/Sana'a)</li>
                <li>• Commercial banks operations</li>
                <li>• Microfinance institutions</li>
                <li>• Digital payment platforms</li>
                <li>• Banking sector health metrics</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Economic Indicators</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• GDP and real income trends</li>
                <li>• Exchange rate divergence</li>
                <li>• Inflation and poverty rates</li>
                <li>• Currency war dynamics</li>
                <li>• Remittance flows</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Humanitarian & Conflict</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Aid flows and composition</li>
                <li>• Donor contributions</li>
                <li>• Displacement statistics</li>
                <li>• Conflict timeline</li>
                <li>• Territorial control changes</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Methodology */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-[var(--observatory-teal)]" />
              <h2 className="text-3xl font-bold">Our Methodology</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Data Collection:</strong> We gather data from official sources including international organizations (IMF, World Bank, UN agencies), government reports, central bank publications, and credible research institutions.
              </p>
              <p>
                <strong>Verification:</strong> All data points are cross-referenced with multiple sources and verified for accuracy. We maintain detailed source citations for transparency and credibility.
              </p>
              <p>
                <strong>Analysis:</strong> Our analysis employs standard economic methodologies adapted for conflict-affected economies, including scenario modeling, trend analysis, and comparative studies.
              </p>
              <p>
                <strong>Visualization:</strong> We transform complex data into accessible visualizations, interactive dashboards, and comprehensive reports to support decision-making.
              </p>
            </div>
          </Card>
        </div>

        {/* Platform Statistics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Platform Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-[var(--observatory-teal)] mb-2">76</div>
              <div className="text-sm text-muted-foreground">Total Pages</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-[var(--observatory-teal)] mb-2">67</div>
              <div className="text-sm text-muted-foreground">Datasets</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-[var(--observatory-teal)] mb-2">4,416</div>
              <div className="text-sm text-muted-foreground">Documents</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-[var(--observatory-teal)] mb-2">16</div>
              <div className="text-sm text-muted-foreground">Years Covered</div>
            </Card>
          </div>
        </div>

        {/* Principles */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-[var(--observatory-light-teal)]">
                  <Award className="w-8 h-8 text-[var(--observatory-teal)]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Accuracy</h3>
              <p className="text-muted-foreground">
                Rigorous verification and cross-referencing of all data points with credible sources
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-blue-50">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-muted-foreground">
                Full source citations and methodology documentation for all analyses and visualizations
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-purple-50">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-muted-foreground">
                Making complex economic data accessible through clear visualizations and user-friendly tools
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
