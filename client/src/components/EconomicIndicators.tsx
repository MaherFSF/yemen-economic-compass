import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp, DollarSign, Users, Building2, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EconomicIndicators() {
  const indicators = [
    {
      year: "2014",
      gdp: "100",
      poverty: "54%",
      exchange: "215",
      inflation: "8%",
      population: "26.8M"
    },
    {
      year: "2016",
      gdp: "72",
      poverty: "62%",
      exchange: "530",
      inflation: "12%",
      population: "27.6M"
    },
    {
      year: "2018",
      gdp: "58",
      poverty: "67%",
      exchange: "850",
      inflation: "18%",
      population: "28.5M"
    },
    {
      year: "2020",
      gdp: "48",
      poverty: "71%",
      exchange: "1,100",
      inflation: "25%",
      population: "29.8M"
    },
    {
      year: "2022",
      gdp: "45",
      poverty: "74%",
      exchange: "1,260",
      inflation: "30%",
      population: "32.9M"
    },
    {
      year: "2024",
      gdp: "43",
      poverty: "75%",
      exchange: "1,800",
      inflation: "33%",
      population: "34.4M"
    },
    {
      year: "2025",
      gdp: "42",
      poverty: "76%",
      exchange: "2,560",
      inflation: "35%",
      population: "34.9M",
      current: true
    }
  ];

  const latestData = indicators[indicators.length - 1];

  return (
    <div className="space-y-4">
      {/* Current Snapshot */}
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/10">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            Yemen Economy 2025
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3 border">
              <div className="flex items-center gap-2 mb-1">
                <TrendingDown className="h-4 w-4 text-red-500" />
                <span className="text-xs text-muted-foreground">GDP Index</span>
              </div>
              <div className="text-2xl font-bold text-red-600">{latestData.gdp}</div>
              <div className="text-xs text-muted-foreground">Base: 2014=100</div>
            </div>

            <div className="bg-white rounded-lg p-3 border">
              <div className="flex items-center gap-2 mb-1">
                <Users className="h-4 w-4 text-red-500" />
                <span className="text-xs text-muted-foreground">Poverty</span>
              </div>
              <div className="text-2xl font-bold text-red-600">{latestData.poverty}</div>
              <div className="text-xs text-muted-foreground">+22% since 2014</div>
            </div>

            <div className="bg-white rounded-lg p-3 border">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="h-4 w-4 text-orange-500" />
                <span className="text-xs text-muted-foreground">Exchange</span>
              </div>
              <div className="text-2xl font-bold text-orange-600">{latestData.exchange}</div>
              <div className="text-xs text-muted-foreground">YER/USD (Aden)</div>
            </div>

            <div className="bg-white rounded-lg p-3 border">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4 text-orange-500" />
                <span className="text-xs text-muted-foreground">Inflation</span>
              </div>
              <div className="text-2xl font-bold text-orange-600">{latestData.inflation}</div>
              <div className="text-xs text-muted-foreground">Annual rate</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 border">
            <div className="flex items-center gap-2 mb-1">
              <Building2 className="h-4 w-4 text-blue-500" />
              <span className="text-xs text-muted-foreground">Population</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">{latestData.population}</div>
            <div className="text-xs text-muted-foreground">21.6M need assistance</div>
          </div>
        </CardContent>
      </Card>

      {/* Historical Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Historical Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {indicators.map((indicator, idx) => (
              <div
                key={indicator.year}
                className={`flex items-center justify-between p-2 rounded-lg ${
                  indicator.current ? 'bg-primary/10 border-2 border-primary' : 'bg-accent/20'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`font-bold text-sm ${indicator.current ? 'text-primary' : 'text-muted-foreground'}`}>
                    {indicator.year}
                  </span>
                  {indicator.current && <Badge variant="default" className="text-xs">Now</Badge>}
                </div>
                <div className="flex gap-3 text-xs">
                  <div className="text-right">
                    <div className="text-muted-foreground">GDP</div>
                    <div className="font-semibold">{indicator.gdp}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground">Poverty</div>
                    <div className="font-semibold">{indicator.poverty}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground">YER/USD</div>
                    <div className="font-semibold">{indicator.exchange}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Insight */}
      <Card className="border-l-4 border-l-red-500 bg-red-50">
        <CardContent className="pt-4">
          <p className="text-sm text-red-900 leading-relaxed">
            <strong>Decade of Decline:</strong> Yemen's GDP per capita has contracted by 58% since 2014, 
            while poverty has surged from 54% to 76%. The Riyal has lost 91% of its value in Aden-controlled areas.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
