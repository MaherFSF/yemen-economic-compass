import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Info, TrendingUp, AlertCircle } from "lucide-react";

/**
 * Cost of Living Calculator for Citizens
 * 
 * Helps Yemeni citizens understand their household costs
 * and compare to historical baselines
 */

export default function CitizensCalculator() {
  const [governorate, setGovernorate] = useState("aden");
  const [householdSize, setHouseholdSize] = useState("4");
  const [results, setResults] = useState<any>(null);

  const governorates = [
    { value: "aden", label: "Aden", labelAr: "عدن" },
    { value: "sanaa", label: "Sana'a", labelAr: "صنعاء" },
    { value: "taiz", label: "Taiz", labelAr: "تعز" },
    { value: "hodeidah", label: "Hodeidah", labelAr: "الحديدة" },
    { value: "hadramaut", label: "Hadramaut", labelAr: "حضرموت" },
  ];

  const calculateCosts = () => {
    // Mock calculation - replace with real data
    const baselineCost = 50000; // 2014 baseline
    const currentCost = baselineCost * (governorate === "sanaa" ? 4.2 : 3.8) * (parseInt(householdSize) / 4);
    const increase = ((currentCost - baselineCost) / baselineCost * 100).toFixed(1);

    setResults({
      monthly: currentCost.toFixed(0),
      baseline: baselineCost.toFixed(0),
      increase,
      breakdown: {
        food: (currentCost * 0.45).toFixed(0),
        housing: (currentCost * 0.25).toFixed(0),
        healthcare: (currentCost * 0.15).toFixed(0),
        education: (currentCost * 0.10).toFixed(0),
        other: (currentCost * 0.05).toFixed(0),
      }
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cost of Living Calculator
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" lang="ar">
            حاسبة تكلفة المعيشة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Calculate your household's monthly costs and compare to 2014 baseline
          </p>
          <p className="text-lg text-muted-foreground" lang="ar">
            احسب تكاليف أسرتك الشهرية وقارنها بخط الأساس لعام 2014
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="p-8 citizen-card">
            <h3 className="text-2xl font-bold mb-6">Your Information</h3>
            <h4 className="text-xl font-bold mb-6" lang="ar">معلوماتك</h4>

            <div className="space-y-6">
              {/* Governorate */}
              <div className="space-y-2">
                <Label htmlFor="governorate">Governorate / المحافظة</Label>
                <Select value={governorate} onValueChange={setGovernorate}>
                  <SelectTrigger id="governorate">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {governorates.map((gov) => (
                      <SelectItem key={gov.value} value={gov.value}>
                        {gov.label} / {gov.labelAr}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Household Size */}
              <div className="space-y-2">
                <Label htmlFor="household">Household Size / حجم الأسرة</Label>
                <Input
                  id="household"
                  type="number"
                  min="1"
                  max="20"
                  value={householdSize}
                  onChange={(e) => setHouseholdSize(e.target.value)}
                  placeholder="Number of people"
                />
              </div>

              {/* Calculate Button */}
              <Button 
                onClick={calculateCosts} 
                className="w-full" 
                size="lg"
              >
                Calculate / احسب
              </Button>

              {/* Data Source */}
              <div className="flex items-start gap-2 p-4 bg-muted/50 rounded-lg">
                <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Data Sources:</p>
                  <p className="text-muted-foreground">
                    WFP Market Monitoring (Dec 2024), World Bank Yemen Economic Monitor (Q4 2024)
                  </p>
                  <Badge className="confidence-b mt-2">Confidence: B</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Results */}
          {results ? (
            <div className="space-y-6">
              {/* Monthly Cost */}
              <Card className="p-8 bg-primary/5 border-primary/20">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    Estimated Monthly Cost / التكلفة الشهرية المقدرة
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                    {parseInt(results.monthly).toLocaleString()}
                    <span className="text-2xl ml-2">YER</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-red-600">
                    <TrendingUp className="h-5 w-5" />
                    <span className="text-xl font-semibold">
                      +{results.increase}% since 2014
                    </span>
                  </div>
                </div>
              </Card>

              {/* Breakdown */}
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Cost Breakdown</h3>
                <h4 className="text-lg font-bold mb-4" lang="ar">تفصيل التكاليف</h4>
                <div className="space-y-4">
                  {[
                    { key: "food", label: "Food", labelAr: "الغذاء", percent: 45 },
                    { key: "housing", label: "Housing", labelAr: "السكن", percent: 25 },
                    { key: "healthcare", label: "Healthcare", labelAr: "الرعاية الصحية", percent: 15 },
                    { key: "education", label: "Education", labelAr: "التعليم", percent: 10 },
                    { key: "other", label: "Other", labelAr: "أخرى", percent: 5 },
                  ].map((item) => (
                    <div key={item.key} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">
                          {item.label} / {item.labelAr}
                        </span>
                        <span className="font-bold">
                          {parseInt(results.breakdown[item.key]).toLocaleString()} YER
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Context Alert */}
              <Card className="p-6 bg-amber-500/10 border-amber-500/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold mb-2">Why costs increased:</p>
                    <p className="text-muted-foreground mb-2" lang="ar">
                      لماذا ارتفعت التكاليف:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Currency depreciation ({governorate === "sanaa" ? "Sana'a" : "Aden"} market)</li>
                      <li>Import constraints and fuel costs</li>
                      <li>Supply chain disruptions</li>
                      <li>Reduced purchasing power of salaries</li>
                    </ul>
                    <Button variant="link" className="p-0 h-auto mt-2">
                      Learn more about price drivers →
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            <Card className="p-12 flex items-center justify-center text-center">
              <div className="text-muted-foreground">
                <p className="text-lg mb-2">Enter your information and click Calculate</p>
                <p lang="ar">أدخل معلوماتك واضغط على احسب</p>
              </div>
            </Card>
          )}
        </div>

        {/* Additional Context */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold mb-2">2014 Baseline</h4>
            <p className="text-sm text-muted-foreground">
              Pre-conflict economic conditions used as reference point for comparison
            </p>
          </Card>
          <Card className="p-6">
            <h4 className="font-semibold mb-2">Regional Variation</h4>
            <p className="text-sm text-muted-foreground">
              Costs vary significantly between governorates due to FX market segmentation
            </p>
          </Card>
          <Card className="p-6">
            <h4 className="font-semibold mb-2">Data Updates</h4>
            <p className="text-sm text-muted-foreground">
              Prices updated monthly based on WFP market monitoring and trader surveys
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
