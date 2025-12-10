import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Droplets,
  RefreshCw,
  Download,
  Info,
  BarChart3,
  Lightbulb,
  AlertCircle,
  CheckCircle,
  Zap
} from "lucide-react";

/**
 * Enhanced What-If Scenario Simulator
 * 
 * Interactive tool for economic scenario analysis with event neutralization
 * and indicator adjustment capabilities
 */

interface ScenarioEvent {
  id: string;
  year: number;
  name: string;
  category: "conflict" | "economic" | "political" | "humanitarian";
  impact: {
    gdp: number;
    inflation: number;
    poverty: number;
    exchangeRate: number;
  };
  enabled: boolean;
}

const MAJOR_EVENTS: ScenarioEvent[] = [
  {
    id: "cby-split-2016",
    year: 2016,
    name: "Central Bank Split (Aden/Sana'a)",
    category: "economic",
    impact: { gdp: -15, inflation: 25, poverty: 12, exchangeRate: 180 },
    enabled: true
  },
  {
    id: "war-escalation-2015",
    year: 2015,
    name: "War Escalation",
    category: "conflict",
    impact: { gdp: -28, inflation: 35, poverty: 18, exchangeRate: 120 },
    enabled: true
  },
  {
    id: "currency-crisis-2018",
    year: 2018,
    name: "Currency Crisis",
    category: "economic",
    impact: { gdp: -8, inflation: 42, poverty: 8, exchangeRate: 250 },
    enabled: true
  },
  {
    id: "port-blockade-2017",
    year: 2017,
    name: "Port Blockade",
    category: "humanitarian",
    impact: { gdp: -12, inflation: 28, poverty: 15, exchangeRate: 80 },
    enabled: true
  },
  {
    id: "saudi-deposits-2018",
    year: 2018,
    name: "Saudi Deposits ($2B)",
    category: "economic",
    impact: { gdp: 5, inflation: -8, poverty: -3, exchangeRate: -150 },
    enabled: true
  }
];

export default function WhatIfSimulatorEnhanced() {
  const [events, setEvents] = useState<ScenarioEvent[]>(MAJOR_EVENTS);
  const [indicators, setIndicators] = useState({
    oilPrice: 70,
    remittances: 3.5,
    aidFunding: 4.2,
    saudiSupport: 2.0
  });

  const toggleEvent = (eventId: string) => {
    setEvents(events.map(e => 
      e.id === eventId ? { ...e, enabled: !e.enabled } : e
    ));
  };

  const calculateImpact = () => {
    let totalImpact = {
      gdp: 0,
      inflation: 0,
      poverty: 0,
      exchangeRate: 0
    };

    events.forEach(event => {
      if (event.enabled) {
        totalImpact.gdp += event.impact.gdp;
        totalImpact.inflation += event.impact.inflation;
        totalImpact.poverty += event.impact.poverty;
        totalImpact.exchangeRate += event.impact.exchangeRate;
      }
    });

    // Adjust based on indicators
    const oilImpact = (indicators.oilPrice - 70) * 0.3;
    const remittanceImpact = (indicators.remittances - 3.5) * 2;
    const aidImpact = (indicators.aidFunding - 4.2) * 1.5;
    const saudiImpact = (indicators.saudiSupport - 2.0) * 3;

    totalImpact.gdp += oilImpact + remittanceImpact + aidImpact + saudiImpact;
    totalImpact.inflation -= (remittanceImpact + aidImpact + saudiImpact) * 0.5;
    totalImpact.poverty -= (remittanceImpact + aidImpact) * 0.8;
    totalImpact.exchangeRate -= (saudiImpact + aidImpact) * 15;

    return totalImpact;
  };

  const impact = calculateImpact();
  const baselineGDP = 31.3; // 2010 baseline
  const baselineInflation = 11.2;
  const baselinePoverty = 42.0;
  const baselineExchangeRate = 215;

  const projectedGDP = baselineGDP + (baselineGDP * impact.gdp / 100);
  const projectedInflation = baselineInflation + impact.inflation;
  const projectedPoverty = baselinePoverty + impact.poverty;
  const projectedExchangeRate = baselineExchangeRate + impact.exchangeRate;

  const resetToBaseline = () => {
    setEvents(MAJOR_EVENTS);
    setIndicators({
      oilPrice: 70,
      remittances: 3.5,
      aidFunding: 4.2,
      saudiSupport: 2.0
    });
  };

  const neutralizeAllEvents = () => {
    setEvents(events.map(e => ({ ...e, enabled: false })));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "conflict": return "bg-red-100 text-red-700 border-red-300";
      case "economic": return "bg-blue-100 text-blue-700 border-blue-300";
      case "political": return "bg-purple-100 text-purple-700 border-purple-300";
      case "humanitarian": return "bg-orange-100 text-orange-700 border-orange-300";
      default: return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[var(--observatory-light-teal)]/20 to-background">
      {/* Hero Section */}
      <div className="observatory-gradient-dark text-white py-12">
        <div className="container">
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="w-10 h-10 mr-3" />
            <h1 className="text-4xl font-bold">What-If Scenario Simulator</h1>
          </div>
          <p className="text-lg text-center text-white/90 max-w-3xl mx-auto">
            Explore alternative economic scenarios by neutralizing historical events or adjusting key indicators
          </p>
        </div>
      </div>

      <div className="container py-12">
        {/* Control Panel */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Event Neutralization */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[var(--observatory-teal)]" />
                    Event Neutralization
                  </CardTitle>
                  <CardDescription>
                    Toggle major events to see their impact on Yemen's economy
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={neutralizeAllEvents}>
                  Neutralize All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map(event => (
                  <div key={event.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Switch
                          checked={event.enabled}
                          onCheckedChange={() => toggleEvent(event.id)}
                        />
                        <div>
                          <div className="font-semibold">{event.name}</div>
                          <div className="text-sm text-muted-foreground">Year: {event.year}</div>
                        </div>
                      </div>
                      <Badge className={`${getCategoryColor(event.category)} border`}>
                        {event.category}
                      </Badge>
                    </div>
                    <div className="text-right text-sm">
                      <div className={event.impact.gdp < 0 ? "text-red-600" : "text-green-600"}>
                        GDP: {event.impact.gdp > 0 ? "+" : ""}{event.impact.gdp}%
                      </div>
                      <div className={event.impact.inflation > 0 ? "text-red-600" : "text-green-600"}>
                        Inflation: {event.impact.inflation > 0 ? "+" : ""}{event.impact.inflation}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-[var(--observatory-teal)]" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={resetToBaseline} className="w-full" variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset to Baseline
              </Button>
              <Button onClick={neutralizeAllEvents} className="w-full observatory-gradient text-white">
                <AlertCircle className="w-4 h-4 mr-2" />
                Neutralize All Events
              </Button>
              <Button className="w-full" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Scenario
              </Button>

              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-2 text-sm">Active Events</h4>
                <div className="text-2xl font-bold text-[var(--observatory-teal)]">
                  {events.filter(e => e.enabled).length} / {events.length}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Indicator Adjustments */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[var(--observatory-teal)]" />
              Indicator Adjustments
            </CardTitle>
            <CardDescription>
              Adjust key economic indicators to model different scenarios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Oil Price (USD/barrel)</Label>
                    <span className="font-semibold">${indicators.oilPrice}</span>
                  </div>
                  <Slider
                    value={[indicators.oilPrice]}
                    onValueChange={([value]) => setIndicators({ ...indicators, oilPrice: value })}
                    min={30}
                    max={120}
                    step={5}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$30</span>
                    <span>$120</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Remittances (Billion USD/year)</Label>
                    <span className="font-semibold">${indicators.remittances}B</span>
                  </div>
                  <Slider
                    value={[indicators.remittances]}
                    onValueChange={([value]) => setIndicators({ ...indicators, remittances: value })}
                    min={1}
                    max={6}
                    step={0.1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$1B</span>
                    <span>$6B</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Humanitarian Aid (Billion USD/year)</Label>
                    <span className="font-semibold">${indicators.aidFunding}B</span>
                  </div>
                  <Slider
                    value={[indicators.aidFunding]}
                    onValueChange={([value]) => setIndicators({ ...indicators, aidFunding: value })}
                    min={1}
                    max={8}
                    step={0.1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$1B</span>
                    <span>$8B</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Saudi Support (Billion USD/year)</Label>
                    <span className="font-semibold">${indicators.saudiSupport}B</span>
                  </div>
                  <Slider
                    value={[indicators.saudiSupport]}
                    onValueChange={([value]) => setIndicators({ ...indicators, saudiSupport: value })}
                    min={0}
                    max={5}
                    step={0.1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$0</span>
                    <span>$5B</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[var(--observatory-teal)]" />
              Scenario Results
            </CardTitle>
            <CardDescription>
              Projected economic indicators based on your scenario
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg bg-muted">
                <div className="text-sm text-muted-foreground mb-2">GDP (Billion USD)</div>
                <div className="text-3xl font-bold mb-1">${projectedGDP.toFixed(1)}B</div>
                <div className={`flex items-center justify-center gap-1 text-sm ${impact.gdp >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {impact.gdp >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {impact.gdp > 0 ? '+' : ''}{impact.gdp.toFixed(1)}%
                </div>
                <div className="text-xs text-muted-foreground mt-2">Baseline: ${baselineGDP}B</div>
              </div>

              <div className="text-center p-6 rounded-lg bg-muted">
                <div className="text-sm text-muted-foreground mb-2">Inflation Rate</div>
                <div className="text-3xl font-bold mb-1">{projectedInflation.toFixed(1)}%</div>
                <div className={`flex items-center justify-center gap-1 text-sm ${impact.inflation <= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {impact.inflation <= 0 ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                  {impact.inflation > 0 ? '+' : ''}{impact.inflation.toFixed(1)}%
                </div>
                <div className="text-xs text-muted-foreground mt-2">Baseline: {baselineInflation}%</div>
              </div>

              <div className="text-center p-6 rounded-lg bg-muted">
                <div className="text-sm text-muted-foreground mb-2">Poverty Rate</div>
                <div className="text-3xl font-bold mb-1">{projectedPoverty.toFixed(1)}%</div>
                <div className={`flex items-center justify-center gap-1 text-sm ${impact.poverty <= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {impact.poverty <= 0 ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                  {impact.poverty > 0 ? '+' : ''}{impact.poverty.toFixed(1)}%
                </div>
                <div className="text-xs text-muted-foreground mt-2">Baseline: {baselinePoverty}%</div>
              </div>

              <div className="text-center p-6 rounded-lg bg-muted">
                <div className="text-sm text-muted-foreground mb-2">Exchange Rate (YER/USD)</div>
                <div className="text-3xl font-bold mb-1">{projectedExchangeRate.toFixed(0)}</div>
                <div className={`flex items-center justify-center gap-1 text-sm ${impact.exchangeRate <= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {impact.exchangeRate <= 0 ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                  {impact.exchangeRate > 0 ? '+' : ''}{impact.exchangeRate.toFixed(0)}
                </div>
                <div className="text-xs text-muted-foreground mt-2">Baseline: {baselineExchangeRate}</div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <strong>Methodology:</strong> This simulator uses a simplified economic model based on historical correlations. 
                  Results are indicative and should be used for exploratory analysis only. For detailed forecasting, 
                  consult professional economic models and expert analysis.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
