import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const chartCategories = [
  {
    id: "economic",
    label: "Economic Indicators",
    charts: [
      {
        id: 1,
        title: "Poverty Rate & Inflation Trends (2014-2025)",
        description: "Evolution of poverty rates and inflation divergence between Aden and Sana'a",
        image: "/charts/chart_01_poverty_inflation.png",
        insights: [
          "Poverty rate increased from 54% (2014) to 76% (2025)",
          "Inflation in Aden reached 35% vs 8% in Sana'a",
          "Sharp divergence reflects contrasting monetary policies"
        ]
      },
      {
        id: 2,
        title: "Exchange Rate Divergence: Aden vs Sana'a (2014-2025)",
        description: "Dramatic exchange rate split following the Central Bank division in 2016",
        image: "/charts/chart_02_exchange_rate.png",
        insights: [
          "Aden: 215 YER/USD (2014) → 2,800 YER/USD (2025)",
          "Sana'a: Relative stability at 650 YER/USD",
          "4.3x divergence between the two zones"
        ]
      }
    ]
  },
  {
    id: "financial",
    label: "Financial Systems",
    charts: [
      {
        id: 3,
        title: "Microfinance Sector Growth (2010-2024)",
        description: "Exceptional growth in microfinance as alternative to traditional banking",
        image: "/charts/chart_03_microfinance_growth.png",
        insights: [
          "Active borrowers: 25K → 260K (940% growth)",
          "Active depositors: 30K → 420K (1,300% growth)",
          "Microfinance filled the gap left by collapsed banking sector"
        ]
      },
      {
        id: 4,
        title: "Digital Payment Adoption (2019 vs 2024)",
        description: "Rapid adoption of digital payments across individuals, businesses, and government",
        image: "/charts/chart_04_digital_payments.png",
        insights: [
          "Individual adoption: 5% → 20% (+300%)",
          "Business adoption: 8% → 35% (+338%)",
          "Government services: 2% → 15% (+650%)"
        ]
      },
      {
        id: 5,
        title: "International Aid Composition (2024)",
        description: "Distribution of international aid by sector and top donor countries",
        image: "/charts/chart_05_aid_composition.png",
        insights: [
          "Humanitarian relief dominates at $2.8B (47% of total)",
          "Saudi Arabia and UAE are largest donors (60% combined)",
          "Infrastructure receives only 5% of total aid"
        ]
      },
      {
        id: 6,
        title: "Financial Governance Assessment (2024)",
        description: "Comparative governance metrics for Aden and Sana'a central banks",
        image: "/charts/chart_06_governance_matrix.png",
        insights: [
          "Both CBYs score below 50% on all governance metrics",
          "Aden CBY stronger on transparency and accountability",
          "Sana'a CBY shows better stability due to capital controls",
          "Both far below international standards (80%)"
        ]
      }
    ]
  }
];

export default function Charts() {
  return (
    <div className="w-full py-12">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="outline">
            Data Visualizations
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive Charts & Analysis
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visual insights into Yemen's parallel financial system through comprehensive data analysis
          </p>
        </div>

        {/* Charts Tabs */}
        <Tabs defaultValue="economic" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            {chartCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-base">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {chartCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              {category.charts.map((chart) => (
                <Card key={chart.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{chart.title}</CardTitle>
                        <CardDescription className="text-base">{chart.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">Chart {chart.id}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Chart Image */}
                    <div className="rounded-lg overflow-hidden border-2 border-border bg-white">
                      <img
                        src={chart.image}
                        alt={chart.title}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>

                    {/* Key Insights */}
                    <div className="bg-accent/30 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                        Key Insights
                      </h3>
                      <ul className="space-y-2">
                        {chart.insights.map((insight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span className="text-muted-foreground leading-relaxed">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>

        {/* Methodology Note */}
        <Card className="mt-12 border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="text-xl">Data Sources & Methodology</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              All charts are based on data from official sources including the Central Bank of Yemen (both branches), 
              World Bank, IMF, UN agencies, and field research conducted between 2020-2024. Exchange rate data 
              reflects market rates in respective territories. Microfinance data sourced from Yemen Microfinance 
              Network annual reports. Governance assessments based on international financial standards and 
              independent expert evaluations.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
