import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Building2, Users, Zap, Target, AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

export default function FMIProject() {
  const components = [
    {
      title: "Fast Payment Systems (FPS)",
      budget: "$7.5M",
      icon: Zap,
      description: "Development of real-time payment infrastructure",
      objectives: [
        "Enable instant P2P, P2M, and B2B transactions",
        "Reduce transaction costs and settlement times",
        "Increase digital payment adoption across Yemen"
      ]
    },
    {
      title: "Real-Time Gross Settlement (RTGS)",
      budget: "$5.4M",
      icon: Building2,
      description: "Upgrading CBY-Aden core banking systems",
      objectives: [
        "Modernize central bank payment infrastructure",
        "Enhance interbank settlement efficiency",
        "Strengthen monetary policy transmission"
      ]
    },
    {
      title: "Access & Usage Support",
      budget: "$2.36M",
      icon: Users,
      description: "Expanding financial inclusion initiatives",
      objectives: [
        "Increase access to digital financial services",
        "Support microfinance and MSME financing",
        "Promote financial literacy and capability"
      ]
    },
    {
      title: "Project Management",
      budget: "$4.74M",
      icon: Target,
      description: "Ensuring effective implementation and oversight",
      objectives: [
        "Coordinate with UNDP and stakeholders",
        "Monitor and evaluate project outcomes",
        "Ensure fiduciary and safeguards compliance"
      ]
    }
  ];

  const keyMetrics = [
    { label: "Total Funding", value: "$20 Million", icon: DollarSign, color: "text-green-600" },
    { label: "Project Duration", value: "2025-2030", icon: TrendingUp, color: "text-blue-600" },
    { label: "Implementation", value: "UNDP", icon: Building2, color: "text-purple-600" },
    { label: "Beneficiaries", value: "Nationwide", icon: Users, color: "text-orange-600" }
  ];

  return (
    <div className="w-full py-12">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4 text-sm px-4 py-1" variant="outline">
            World Bank IDA Grant
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Yemen Financial Market Infrastructure & Inclusion Project
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A transformative $20 million initiative to rebuild Yemen's payment infrastructure 
            and expand financial inclusion amid ongoing fragmentation
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon className={`h-10 w-10 mx-auto mb-3 ${metric.color}`} />
                  <div className="text-3xl font-bold mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Project Context */}
        <Card className="mb-12 border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AlertCircle className="h-6 w-6 text-primary" />
              Strategic Context
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Yemen's ongoing conflict, now in its <strong>tenth year</strong>, has created a severe economic crisis 
              with GDP per capita contracting by <strong>58% between 2015-2024</strong>. The country has fragmented 
              into two distinct economic zones with competing monetary authorities, exchange rates, and policies.
            </p>
            <p>
              The Houthi blockade on oil exports and deteriorating economic conditions led to a <strong>1.5% 
              contraction in 2024</strong>. The Yemeni Riyal depreciated from 1,540 YER/USD (end 2023) to 
              <strong>2,560 YER/USD by May 2025</strong>, driving inflation and straining household purchasing power.
            </p>
            <p>
              This project represents a critical intervention to modernize payment infrastructure, reduce 
              transaction costs, and expand financial access to underserved populations across both economic zones.
            </p>
          </CardContent>
        </Card>

        {/* Project Development Objective */}
        <Card className="mb-12 bg-gradient-to-br from-primary/5 to-accent/10">
          <CardHeader>
            <CardTitle className="text-2xl">Project Development Objective (PDO)</CardTitle>
            <CardDescription className="text-base">
              Approved by World Bank - May 22, 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg p-6 border-2 border-primary/20">
              <p className="text-lg leading-relaxed">
                "To develop a <strong>payment infrastructure</strong> that supports the <strong>efficiency 
                of payment transactions</strong> in Yemen and <strong>increases financial inclusion</strong>."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Project Components */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Project Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {components.map((component, idx) => {
              const Icon = component.icon;
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{component.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1">{component.budget}</Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-3">{component.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="font-semibold text-sm mb-3">Key Objectives:</div>
                      {component.objectives.map((obj, objIdx) => (
                        <div key={objIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{obj}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Expected Outcomes */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Expected Outcomes & Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">40%</div>
                <div className="text-sm font-semibold">Reduction in Transaction Costs</div>
                <div className="text-xs text-muted-foreground">
                  Through modern payment infrastructure
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">2M+</div>
                <div className="text-sm font-semibold">New Digital Payment Users</div>
                <div className="text-xs text-muted-foreground">
                  Expanding financial inclusion nationwide
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm font-semibold">Real-Time Payments</div>
                <div className="text-xs text-muted-foreground">
                  Instant settlement across all channels
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Arrangements */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Implementation & Governance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  Implementing Agency
                </h3>
                <div className="bg-accent/20 rounded-lg p-4 space-y-2">
                  <div className="font-medium">United Nations Development Programme (UNDP)</div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Country Representative:</strong> Zena Ali Ahmad
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Deputy Representative:</strong> Nadia Alawamleh
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  World Bank Team
                </h3>
                <div className="bg-accent/20 rounded-lg p-4 space-y-2">
                  <div className="text-sm text-muted-foreground">
                    <strong>Country Director:</strong> Stephane Guimbert
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Task Team Leaders:</strong> Rinku Chandra, Ghada Waheed Ismail, Omar Al-Aqel
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Assessment */}
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="text-xl">Risk Assessment</CardTitle>
            <CardDescription>Systematic Operations Risk-Rating Tool (SORT)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-red-50 rounded-lg">
                <div className="text-xs font-medium text-red-700 mb-1">Political & Governance</div>
                <Badge variant="destructive">High</Badge>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <div className="text-xs font-medium text-orange-700 mb-1">Macroeconomic</div>
                <Badge className="bg-orange-500">Substantial</Badge>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-lg">
                <div className="text-xs font-medium text-red-700 mb-1">Institutional Capacity</div>
                <Badge variant="destructive">High</Badge>
              </div>
              <div className="text-center p-3 bg-yellow-50 rounded-lg">
                <div className="text-xs font-medium text-yellow-700 mb-1">Environmental & Social</div>
                <Badge className="bg-yellow-500">Moderate</Badge>
              </div>
            </div>
            <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <span className="font-semibold text-red-900">Overall Risk: HIGH</span>
              </div>
              <p className="text-sm text-red-800">
                Due to ongoing conflict, institutional fragmentation, and challenging operating environment
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disbursement Schedule */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Expected Disbursement Schedule</CardTitle>
            <CardDescription>World Bank Fiscal Years (US$ Millions)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Fiscal Year</th>
                    <th className="text-right p-3 font-semibold">2025</th>
                    <th className="text-right p-3 font-semibold">2026</th>
                    <th className="text-right p-3 font-semibold">2027</th>
                    <th className="text-right p-3 font-semibold">2028</th>
                    <th className="text-right p-3 font-semibold">2029</th>
                    <th className="text-right p-3 font-semibold">2030</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Annual</td>
                    <td className="text-right p-3">$0.06</td>
                    <td className="text-right p-3">$4.75</td>
                    <td className="text-right p-3">$5.00</td>
                    <td className="text-right p-3">$6.00</td>
                    <td className="text-right p-3">$2.00</td>
                    <td className="text-right p-3">$2.00</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Cumulative</td>
                    <td className="text-right p-3 bg-accent/20">$0.06</td>
                    <td className="text-right p-3 bg-accent/20">$4.81</td>
                    <td className="text-right p-3 bg-accent/20">$9.81</td>
                    <td className="text-right p-3 bg-accent/20">$15.81</td>
                    <td className="text-right p-3 bg-accent/20">$17.81</td>
                    <td className="text-right p-3 bg-accent/20 font-bold">$19.81</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
