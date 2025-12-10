import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  TrendingDown, 
  TrendingUp, 
  Users, 
  DollarSign, 
  AlertTriangle, 
  FileText,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Globe,
  Building2
} from "lucide-react";

interface YearData {
  year: number;
  title: string;
  subtitle: string;
  gdp: number;
  gdpChange: number;
  inflation: number;
  poverty: number;
  population: number;
  exchangeRateAden?: number;
  exchangeRateSanaa?: number;
  events: Array<{
    date: string;
    title: string;
    category: "economic" | "political" | "humanitarian" | "conflict";
    impact: "high" | "medium" | "low";
  }>;
  keyFacts: string[];
  color: string;
}

const YEARS_DATA: YearData[] = [
  {
    year: 2010,
    title: "Pre-Crisis Baseline",
    subtitle: "Stable economy before the Arab Spring",
    gdp: 31.3,
    gdpChange: 7.7,
    inflation: 11.2,
    poverty: 42.0,
    population: 23.6,
    exchangeRateAden: 215,
    events: [
      { date: "2010-01", title: "Economic Baseline Year", category: "economic", impact: "low" },
      { date: "2010-12", title: "Tunisian Revolution Sparks", category: "political", impact: "medium" }
    ],
    keyFacts: [
      "GDP: $31.3 billion with 7.7% growth",
      "Oil production: 260,000 barrels per day",
      "Poverty rate: 42% of population",
      "Unified Central Bank in Sana'a"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    year: 2011,
    title: "Revolution & Transition",
    subtitle: "Yemeni uprising and political transition",
    gdp: 33.8,
    gdpChange: -12.7,
    inflation: 19.5,
    poverty: 45.0,
    population: 24.0,
    exchangeRateAden: 220,
    events: [
      { date: "2011-02", title: "Yemeni Revolution Begins", category: "political", impact: "high" },
      { date: "2011-06", title: "President Saleh Injured", category: "political", impact: "high" },
      { date: "2011-11", title: "GCC Initiative Signed", category: "political", impact: "high" }
    ],
    keyFacts: [
      "Months of protests across major cities",
      "Economic activity severely disrupted",
      "Inflation spikes to 19.5%",
      "GCC-brokered transition agreement"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    year: 2015,
    title: "War Escalation",
    subtitle: "Saudi-led coalition intervention begins",
    gdp: 27.6,
    gdpChange: -28.1,
    inflation: 39.4,
    poverty: 62.0,
    population: 26.8,
    exchangeRateAden: 250,
    events: [
      { date: "2015-03", title: "Operation Decisive Storm", category: "conflict", impact: "high" },
      { date: "2015-09", title: "Aden Recaptured", category: "conflict", impact: "high" }
    ],
    keyFacts: [
      "GDP collapses by 28.1%",
      "Inflation reaches 39.4%",
      "Poverty jumps to 62%",
      "Humanitarian crisis deepens"
    ],
    color: "from-red-600 to-red-800"
  },
  {
    year: 2016,
    title: "Central Bank Split",
    subtitle: "CBY relocates to Aden, creating dual system",
    gdp: 21.1,
    gdpChange: -9.4,
    inflation: 5.2,
    poverty: 71.0,
    population: 27.2,
    exchangeRateAden: 370,
    exchangeRateSanaa: 250,
    events: [
      { date: "2016-09", title: "CBY Relocated to Aden", category: "economic", impact: "high" },
      { date: "2016-12", title: "Currency Crisis Begins", category: "economic", impact: "high" }
    ],
    keyFacts: [
      "Central Bank split creates dual system",
      "Exchange rate divergence begins",
      "Poverty reaches 71%",
      "Banking sector fragments"
    ],
    color: "from-purple-600 to-indigo-600"
  },
  {
    year: 2020,
    title: "COVID-19 & Economic Collapse",
    subtitle: "Pandemic compounds existing crisis",
    gdp: 18.8,
    gdpChange: -8.5,
    inflation: 20.7,
    poverty: 79.0,
    population: 29.2,
    exchangeRateAden: 750,
    exchangeRateSanaa: 600,
    events: [
      { date: "2020-03", title: "COVID-19 Pandemic", category: "humanitarian", impact: "high" },
      { date: "2020-11", title: "Riyadh Agreement", category: "political", impact: "medium" }
    ],
    keyFacts: [
      "COVID-19 adds to humanitarian crisis",
      "GDP continues decline",
      "Exchange rate gap widens",
      "Aid flows disrupted"
    ],
    color: "from-gray-600 to-gray-800"
  },
  {
    year: 2025,
    title: "Current Status",
    subtitle: "Ongoing crisis with no resolution",
    gdp: 19.2,
    gdpChange: 2.1,
    inflation: 35.2,
    poverty: 82.0,
    population: 30.5,
    exchangeRateAden: 1680,
    exchangeRateSanaa: 530,
    events: [
      { date: "2025-01", title: "Continued Fragmentation", category: "economic", impact: "high" }
    ],
    keyFacts: [
      "Dual currency system persists",
      "Extreme exchange rate divergence",
      "82% poverty rate",
      "Parallel financial systems"
    ],
    color: "from-[var(--observatory-teal)] to-[var(--observatory-green)]"
  }
];

export default function YearExplorerEnhanced() {
  const [selectedYear, setSelectedYear] = useState(2025);
  
  const currentData = YEARS_DATA.find(y => y.year === selectedYear) || YEARS_DATA[YEARS_DATA.length - 1];
  const currentIndex = YEARS_DATA.findIndex(y => y.year === selectedYear);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedYear(YEARS_DATA[currentIndex - 1].year);
    }
  };

  const goToNext = () => {
    if (currentIndex < YEARS_DATA.length - 1) {
      setSelectedYear(YEARS_DATA[currentIndex + 1].year);
    }
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

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case "high": return <Badge variant="destructive">High Impact</Badge>;
      case "medium": return <Badge className="bg-orange-500">Medium Impact</Badge>;
      case "low": return <Badge variant="secondary">Low Impact</Badge>;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[var(--observatory-light-teal)]/20 to-background">
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${currentData.color} text-white py-12`}>
        <div className="container">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-10 h-10 mr-3" />
            <h1 className="text-4xl font-bold">Year Explorer</h1>
          </div>
          <p className="text-lg text-center text-white/90 max-w-3xl mx-auto">
            Navigate through Yemen's economic history year by year (2010-2025)
          </p>
        </div>
      </div>

      <div className="container py-12">
        {/* Year Navigation */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <Button
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  variant="outline"
                  size="lg"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous Year
                </Button>

                <div className="text-center">
                  <div className="text-6xl font-bold text-[var(--observatory-teal)] mb-2">
                    {currentData.year}
                  </div>
                  <div className="text-xl font-semibold">{currentData.title}</div>
                  <div className="text-sm text-muted-foreground">{currentData.subtitle}</div>
                </div>

                <Button
                  onClick={goToNext}
                  disabled={currentIndex === YEARS_DATA.length - 1}
                  variant="outline"
                  size="lg"
                >
                  Next Year
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Year Timeline */}
              <div className="flex justify-center gap-2">
                {YEARS_DATA.map((yearData) => (
                  <button
                    key={yearData.year}
                    onClick={() => setSelectedYear(yearData.year)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      yearData.year === selectedYear
                        ? 'bg-[var(--observatory-teal)] text-white scale-110'
                        : 'bg-muted hover:bg-muted/70'
                    }`}
                  >
                    {yearData.year}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Indicators */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[var(--observatory-teal)]" />
                GDP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">${currentData.gdp}B</div>
              <div className={`flex items-center gap-1 text-sm ${currentData.gdpChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {currentData.gdpChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {currentData.gdpChange > 0 ? '+' : ''}{currentData.gdpChange.toFixed(1)}%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-orange-600" />
                Inflation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{currentData.inflation.toFixed(1)}%</div>
              <div className="text-sm text-muted-foreground">Annual rate</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                Poverty
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{currentData.poverty.toFixed(1)}%</div>
              <div className="text-sm text-muted-foreground">Of population</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                Population
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{currentData.population}M</div>
              <div className="text-sm text-muted-foreground">Million people</div>
            </CardContent>
          </Card>
        </div>

        {/* Exchange Rates */}
        {currentData.exchangeRateSanaa && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[var(--observatory-teal)]" />
                Exchange Rates (YER per USD)
              </CardTitle>
              <CardDescription>Divergence between Aden and Sana'a</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <div className="font-semibold">Aden (IRG)</div>
                  </div>
                  <div className="text-4xl font-bold text-blue-600">{currentData.exchangeRateAden}</div>
                  <div className="text-sm text-muted-foreground mt-1">YER per USD</div>
                </div>

                <div className="p-6 rounded-lg bg-green-50 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-5 h-5 text-green-600" />
                    <div className="font-semibold">Sana'a (SPC)</div>
                  </div>
                  <div className="text-4xl font-bold text-green-600">{currentData.exchangeRateSanaa}</div>
                  <div className="text-sm text-muted-foreground mt-1">YER per USD</div>
                </div>
              </div>

              {currentData.exchangeRateAden && currentData.exchangeRateSanaa && (
                <div className="mt-4 p-4 rounded-lg bg-orange-50 border border-orange-200">
                  <div className="flex items-center gap-2 text-sm text-orange-900">
                    <AlertTriangle className="w-4 h-4" />
                    <span>
                      <strong>Divergence:</strong> {((currentData.exchangeRateAden / currentData.exchangeRateSanaa - 1) * 100).toFixed(1)}% 
                      ({(currentData.exchangeRateAden - currentData.exchangeRateSanaa).toFixed(0)} YER difference)
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Major Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[var(--observatory-teal)]" />
                Major Events
              </CardTitle>
              <CardDescription>Key events that shaped this year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentData.events.map((event, idx) => (
                  <div key={idx} className="p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-semibold">{event.title}</div>
                      {getImpactBadge(event.impact)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={`${getCategoryColor(event.category)} border text-xs`}>
                        {event.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{event.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Facts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[var(--observatory-teal)]" />
                Key Facts
              </CardTitle>
              <CardDescription>Important highlights for {currentData.year}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {currentData.keyFacts.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                    <div className="w-2 h-2 rounded-full bg-[var(--observatory-teal)] mt-2"></div>
                    <span className="flex-1">{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
