import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingDown, TrendingUp, AlertTriangle, Users, Building2, Coins } from "lucide-react";

export default function Timeline() {
  const timelineEvents = [
    {
      year: "2014",
      quarter: "Sep",
      title: "Houthis Seize Sana'a",
      description: "Houthi forces, backed by Saleh loyalists, take control of the capital, marginalizing Hadi's government",
      impact: "Political",
      severity: "critical",
      icon: AlertTriangle
    },
    {
      year: "2015",
      quarter: "Mar",
      title: "Saudi-Led Coalition Intervention",
      description: "Operation Decisive Storm launches to restore Hadi's government. Civil war escalates nationwide",
      impact: "Conflict",
      severity: "critical",
      icon: AlertTriangle
    },
    {
      year: "2015",
      quarter: "Q2-Q4",
      title: "Economic Collapse Begins",
      description: "GDP contracts sharply, oil production halts, currency begins depreciation",
      impact: "Economic",
      severity: "high",
      icon: TrendingDown,
      metrics: { gdp: "-28%", inflation: "+15%" }
    },
    {
      year: "2016",
      quarter: "Sep",
      title: "Central Bank Split",
      description: "CBY headquarters moved from Sana'a to Aden, creating dual monetary authorities",
      impact: "Financial",
      severity: "critical",
      icon: Building2,
      metrics: { exchange: "530 YER/USD" }
    },
    {
      year: "2017",
      quarter: "May",
      title: "Southern Transitional Council Formed",
      description: "UAE-backed separatist movement established, adding third faction to conflict",
      impact: "Political",
      severity: "high",
      icon: Users
    },
    {
      year: "2018",
      quarter: "Dec",
      title: "Stockholm Agreement",
      description: "Hodeidah ceasefire and prisoner exchange deal. First major diplomatic breakthrough",
      impact: "Peace Effort",
      severity: "positive",
      icon: TrendingUp
    },
    {
      year: "2019",
      quarter: "Nov",
      title: "Riyadh Agreement",
      description: "Power-sharing deal between Hadi government and STC (implementation stalled)",
      impact: "Political",
      severity: "moderate",
      icon: Users
    },
    {
      year: "2020",
      quarter: "Jan",
      title: "Currency Fragmentation Deepens",
      description: "Houthi-controlled CBY bans new banknotes printed by Aden, splitting the Yemeni Riyal",
      impact: "Financial",
      severity: "critical",
      icon: Coins,
      metrics: { adenRate: "750 YER/USD", sanaaRate: "600 YER/USD (fixed)" }
    },
    {
      year: "2020",
      quarter: "Apr",
      title: "COVID-19 Pandemic Hits",
      description: "Healthcare system collapses, humanitarian crisis worsens, brief ceasefire announced",
      impact: "Humanitarian",
      severity: "high",
      icon: AlertTriangle
    },
    {
      year: "2021",
      quarter: "Feb",
      title: "Biden Ends Offensive Support",
      description: "US withdraws support for Saudi offensive operations, shifts to diplomatic pressure",
      impact: "International",
      severity: "moderate",
      icon: Users
    },
    {
      year: "2022",
      quarter: "Apr",
      title: "Presidential Leadership Council Formed",
      description: "Hadi steps down, replaced by Saudi-backed 8-member council. UN-brokered truce begins",
      impact: "Political",
      severity: "positive",
      icon: TrendingUp,
      metrics: { saudiAid: "$2B pledged" }
    },
    {
      year: "2022",
      quarter: "Oct",
      title: "Truce Expires",
      description: "2-month UN truce extensions end, localized fighting resumes",
      impact: "Conflict",
      severity: "high",
      icon: AlertTriangle
    },
    {
      year: "2023",
      quarter: "Apr",
      title: "Major Prisoner Exchange",
      description: "Largest swap since 2020: 887 prisoners released under ICRC auspices",
      impact: "Humanitarian",
      severity: "positive",
      icon: TrendingUp
    },
    {
      year: "2023",
      quarter: "Oct",
      title: "Red Sea Maritime Attacks Begin",
      description: "Houthi forces launch missile/drone attacks on international shipping",
      impact: "International",
      severity: "critical",
      icon: AlertTriangle
    },
    {
      year: "2024",
      quarter: "Q1",
      title: "Exchange Rate Crisis",
      description: "Aden Riyal depreciates to 1,800 YER/USD, inflation surges",
      impact: "Economic",
      severity: "critical",
      icon: TrendingDown,
      metrics: { adenRate: "1,800 YER/USD", inflation: "+35%" }
    },
    {
      year: "2024",
      quarter: "Q3",
      title: "CBY-Aden Exchange Controls",
      description: "Introduction of UNMONEY network and import financing to stabilize currency",
      impact: "Financial",
      severity: "positive",
      icon: Coins,
      metrics: { adenRate: "1,630 YER/USD (stabilized)" }
    },
    {
      year: "2025",
      quarter: "May",
      title: "Riyal Collapse Deepens",
      description: "Currency hits 2,560 YER/USD amid oil blockade and revenue crisis",
      impact: "Economic",
      severity: "critical",
      icon: TrendingDown,
      metrics: { adenRate: "2,560 YER/USD", gdpContraction: "-1.5%" }
    },
    {
      year: "2025",
      quarter: "May",
      title: "World Bank FMI Project Approved",
      description: "$20M grant for payment infrastructure and financial inclusion",
      impact: "Development",
      severity: "positive",
      icon: TrendingUp,
      metrics: { funding: "$20M", duration: "2025-2030" }
    },
    {
      year: "2025",
      quarter: "Nov",
      title: "Poverty Reaches 76%",
      description: "Humanitarian crisis deepens, 21.6M people need assistance",
      impact: "Humanitarian",
      severity: "critical",
      icon: AlertTriangle,
      metrics: { poverty: "76%", needAssistance: "21.6M" }
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "border-red-500 bg-red-50";
      case "high": return "border-orange-500 bg-orange-50";
      case "moderate": return "border-yellow-500 bg-yellow-50";
      case "positive": return "border-green-500 bg-green-50";
      default: return "border-gray-500 bg-gray-50";
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical": return <Badge variant="destructive">Critical</Badge>;
      case "high": return <Badge className="bg-orange-500">High Impact</Badge>;
      case "moderate": return <Badge className="bg-yellow-500">Moderate</Badge>;
      case "positive": return <Badge className="bg-green-500">Positive</Badge>;
      default: return <Badge variant="secondary">Info</Badge>;
    }
  };

  return (
    <div className="w-full py-12">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            2014 - 2025
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Yemen Crisis Timeline
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A decade of conflict, economic collapse, and humanitarian catastrophe: 
            tracking the key events that reshaped Yemen's financial and political landscape
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>

          {/* Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, idx) => {
              const Icon = event.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute right-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-0">
                    <div className={`h-4 w-4 rounded-full border-4 ${
                      event.severity === 'critical' ? 'bg-red-500 border-red-200' :
                      event.severity === 'high' ? 'bg-orange-500 border-orange-200' :
                      event.severity === 'positive' ? 'bg-green-500 border-green-200' :
                      'bg-yellow-500 border-yellow-200'
                    }`}></div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8 pr-12' : 'md:pl-8 pr-12'}`}>
                    <Card className={`border-l-4 ${getSeverityColor(event.severity)} hover:shadow-lg transition-shadow`}>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                              event.severity === 'critical' ? 'bg-red-100' :
                              event.severity === 'high' ? 'bg-orange-100' :
                              event.severity === 'positive' ? 'bg-green-100' :
                              'bg-yellow-100'
                            }`}>
                              <Icon className={`h-5 w-5 ${
                                event.severity === 'critical' ? 'text-red-600' :
                                event.severity === 'high' ? 'text-orange-600' :
                                event.severity === 'positive' ? 'text-green-600' :
                                'text-yellow-600'
                              }`} />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-lg">{event.year}</span>
                                <span className="text-sm text-muted-foreground">{event.quarter}</span>
                              </div>
                              <CardTitle className="text-base">{event.title}</CardTitle>
                            </div>
                          </div>
                          {getSeverityBadge(event.severity)}
                        </div>
                        <CardDescription className="mt-2">
                          <Badge variant="outline" className="text-xs">{event.impact}</Badge>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {event.description}
                        </p>
                        {event.metrics && (
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(event.metrics).map(([key, value]) => (
                              <Badge key={key} variant="secondary" className="text-xs">
                                {key}: {value}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Statistics */}
        <Card className="mt-12 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Decade in Numbers (2014-2025)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">-58%</div>
                <div className="text-sm text-muted-foreground mt-1">GDP per Capita</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">76%</div>
                <div className="text-sm text-muted-foreground mt-1">Poverty Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">2,560</div>
                <div className="text-sm text-muted-foreground mt-1">YER/USD (2025)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">21.6M</div>
                <div className="text-sm text-muted-foreground mt-1">Need Assistance</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
