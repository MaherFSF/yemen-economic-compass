import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  TrendingDown, 
  ArrowRightLeft, 
  Info,
  DollarSign,
  Percent,
  Calendar,
  Building2
} from "lucide-react";

// Historical data
const EXCHANGE_RATES = {
  aden: {
    2014: 215, 2015: 250, 2016: 370, 2017: 900, 2018: 520, 2019: 600,
    2020: 750, 2021: 1050, 2022: 1250, 2023: 1450, 2024: 1580, 2025: 1680
  },
  sanaa: {
    2014: 215, 2015: 250, 2016: 250, 2017: 360, 2018: 480, 2019: 570,
    2020: 600, 2021: 600, 2022: 530, 2023: 530, 2024: 530, 2025: 530
  }
};

const INFLATION_RATES = {
  aden: {
    2015: 39.4, 2016: 5.2, 2017: 24.7, 2018: 41.8, 2019: 10.0,
    2020: 20.7, 2021: 16.9, 2022: 23.5, 2023: 28.4, 2024: 32.1, 2025: 35.2
  },
  sanaa: {
    2015: 39.4, 2016: 5.2, 2017: 8.3, 2018: 12.1, 2019: 6.5,
    2020: 8.9, 2021: 7.2, 2022: 9.8, 2023: 11.3, 2024: 13.6, 2025: 15.1
  }
};

export default function FinancialCalculatorsEnhanced() {
  // Exchange Rate Calculator State
  const [exchangeAmount, setExchangeAmount] = useState("1000");
  const [exchangeFrom, setExchangeFrom] = useState("USD");
  const [exchangeTo, setExchangeTo] = useState("YER-Aden");
  const [exchangeYear, setExchangeYear] = useState("2025");

  // Inflation Calculator State
  const [inflationAmount, setInflationAmount] = useState("10000");
  const [inflationStartYear, setInflationStartYear] = useState("2015");
  const [inflationEndYear, setInflationEndYear] = useState("2025");
  const [inflationRegion, setInflationRegion] = useState("aden");

  // Aid Impact Calculator State
  const [aidAmount, setAidAmount] = useState("100");
  const [aidType, setAidType] = useState("humanitarian");
  const [aidBeneficiaries, setAidBeneficiaries] = useState("1000000");

  // Exchange Rate Calculation
  const calculateExchange = () => {
    const amount = parseFloat(exchangeAmount) || 0;
    const year = parseInt(exchangeYear);
    
    if (exchangeFrom === "USD" && exchangeTo.startsWith("YER")) {
      const region = exchangeTo === "YER-Aden" ? "aden" : "sanaa";
      const rate = EXCHANGE_RATES[region][year as keyof typeof EXCHANGE_RATES.aden] || 0;
      return amount * rate;
    } else if (exchangeFrom.startsWith("YER") && exchangeTo === "USD") {
      const region = exchangeFrom === "YER-Aden" ? "aden" : "sanaa";
      const rate = EXCHANGE_RATES[region][year as keyof typeof EXCHANGE_RATES.aden] || 0;
      return amount / rate;
    }
    return 0;
  };

  // Inflation Adjustment Calculation
  const calculateInflationAdjustment = () => {
    const amount = parseFloat(inflationAmount) || 0;
    const startYear = parseInt(inflationStartYear);
    const endYear = parseInt(inflationEndYear);
    const region = inflationRegion as "aden" | "sanaa";
    
    let adjustedAmount = amount;
    for (let year = startYear; year < endYear; year++) {
      const rate = INFLATION_RATES[region][year as keyof typeof INFLATION_RATES.aden] || 0;
      adjustedAmount = adjustedAmount * (1 + rate / 100);
    }
    
    return adjustedAmount;
  };

  // Aid Impact Calculation
  const calculateAidImpact = () => {
    const amount = parseFloat(aidAmount) || 0;
    const beneficiaries = parseFloat(aidBeneficiaries) || 1;
    
    const perCapita = (amount * 1000000) / beneficiaries; // Convert millions to actual amount
    const multiplier = aidType === "humanitarian" ? 1.2 : aidType === "development" ? 1.8 : 1.5;
    const totalImpact = amount * multiplier;
    
    return {
      perCapita,
      totalImpact,
      multiplier
    };
  };

  const exchangeResult = calculateExchange();
  const inflationResult = calculateInflationAdjustment();
  const aidImpact = calculateAidImpact();
  const inflationLoss = ((inflationResult - parseFloat(inflationAmount)) / parseFloat(inflationAmount)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[var(--observatory-light-teal)]/20 to-background">
      {/* Hero Section */}
      <div className="observatory-gradient-dark text-white py-12">
        <div className="container">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-10 h-10 mr-3" />
            <h1 className="text-4xl font-bold">Financial Calculators</h1>
          </div>
          <p className="text-lg text-center text-white/90 max-w-3xl mx-auto">
            Practical tools for currency conversion, inflation adjustment, and aid impact analysis
          </p>
        </div>
      </div>

      <div className="container py-12">
        <Tabs defaultValue="exchange" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
            <TabsTrigger value="exchange" className="flex items-center gap-2">
              <ArrowRightLeft className="w-4 h-4" />
              Exchange Rate
            </TabsTrigger>
            <TabsTrigger value="inflation" className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4" />
              Inflation
            </TabsTrigger>
            <TabsTrigger value="aid" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Aid Impact
            </TabsTrigger>
          </TabsList>

          {/* Exchange Rate Calculator */}
          <TabsContent value="exchange">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ArrowRightLeft className="w-5 h-5 text-[var(--observatory-teal)]" />
                    Exchange Rate Calculator
                  </CardTitle>
                  <CardDescription>
                    Convert between USD and YER using historical rates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="exchange-amount">Amount</Label>
                    <Input
                      id="exchange-amount"
                      type="number"
                      value={exchangeAmount}
                      onChange={(e) => setExchangeAmount(e.target.value)}
                      placeholder="Enter amount"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="exchange-from">From</Label>
                      <Select value={exchangeFrom} onValueChange={setExchangeFrom}>
                        <SelectTrigger id="exchange-from">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="YER-Aden">YER (Aden)</SelectItem>
                          <SelectItem value="YER-Sanaa">YER (Sana'a)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="exchange-to">To</Label>
                      <Select value={exchangeTo} onValueChange={setExchangeTo}>
                        <SelectTrigger id="exchange-to">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="YER-Aden">YER (Aden)</SelectItem>
                          <SelectItem value="YER-Sanaa">YER (Sana'a)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="exchange-year">Year</Label>
                    <Select value={exchangeYear} onValueChange={setExchangeYear}>
                      <SelectTrigger id="exchange-year">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(EXCHANGE_RATES.aden).reverse().map(year => (
                          <SelectItem key={year} value={year}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[var(--observatory-teal)]" />
                    Result
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-8 rounded-lg bg-gradient-to-br from-[var(--observatory-light-teal)] to-white">
                    <div className="text-sm text-muted-foreground mb-2">Converted Amount</div>
                    <div className="text-5xl font-bold text-[var(--observatory-teal)] mb-4">
                      {exchangeResult.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {exchangeTo === "USD" ? "USD" : exchangeTo}
                    </Badge>
                  </div>

                  <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
                    <div className="flex items-start gap-2 text-sm text-blue-900">
                      <Info className="w-4 h-4 mt-0.5" />
                      <div>
                        <strong>Exchange Rate ({exchangeYear}):</strong>
                        <div className="mt-1">
                          {exchangeTo === "YER-Aden" && `1 USD = ${EXCHANGE_RATES.aden[parseInt(exchangeYear) as keyof typeof EXCHANGE_RATES.aden]} YER (Aden)`}
                          {exchangeTo === "YER-Sanaa" && `1 USD = ${EXCHANGE_RATES.sanaa[parseInt(exchangeYear) as keyof typeof EXCHANGE_RATES.sanaa]} YER (Sana'a)`}
                          {exchangeFrom.startsWith("YER") && exchangeTo === "USD" && 
                            `1 ${exchangeFrom} = ${(1 / (exchangeFrom === "YER-Aden" ? 
                              EXCHANGE_RATES.aden[parseInt(exchangeYear) as keyof typeof EXCHANGE_RATES.aden] : 
                              EXCHANGE_RATES.sanaa[parseInt(exchangeYear) as keyof typeof EXCHANGE_RATES.sanaa])).toFixed(6)} USD`
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Inflation Calculator */}
          <TabsContent value="inflation">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Percent className="w-5 h-5 text-[var(--observatory-teal)]" />
                    Inflation Adjustment Calculator
                  </CardTitle>
                  <CardDescription>
                    Adjust monetary values for inflation over time
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="inflation-amount">Amount (YER)</Label>
                    <Input
                      id="inflation-amount"
                      type="number"
                      value={inflationAmount}
                      onChange={(e) => setInflationAmount(e.target.value)}
                      placeholder="Enter amount"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="inflation-start">Start Year</Label>
                      <Select value={inflationStartYear} onValueChange={setInflationStartYear}>
                        <SelectTrigger id="inflation-start">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(INFLATION_RATES.aden).map(year => (
                            <SelectItem key={year} value={year}>{year}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inflation-end">End Year</Label>
                      <Select value={inflationEndYear} onValueChange={setInflationEndYear}>
                        <SelectTrigger id="inflation-end">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(INFLATION_RATES.aden).map(year => (
                            <SelectItem key={year} value={year}>{year}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inflation-region">Region</Label>
                    <Select value={inflationRegion} onValueChange={setInflationRegion}>
                      <SelectTrigger id="inflation-region">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aden">Aden (IRG)</SelectItem>
                        <SelectItem value="sanaa">Sana'a (SPC)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-[var(--observatory-teal)]" />
                    Adjusted Value
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-8 rounded-lg bg-gradient-to-br from-orange-50 to-white border border-orange-200">
                    <div className="text-sm text-muted-foreground mb-2">Value in {inflationEndYear}</div>
                    <div className="text-5xl font-bold text-orange-600 mb-4">
                      {inflationResult.toLocaleString(undefined, { maximumFractionDigits: 0 })} YER
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Original: {parseFloat(inflationAmount).toLocaleString()} YER ({inflationStartYear})
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted text-center">
                      <div className="text-sm text-muted-foreground mb-1">Purchasing Power Loss</div>
                      <div className="text-2xl font-bold text-red-600">{inflationLoss.toFixed(1)}%</div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted text-center">
                      <div className="text-sm text-muted-foreground mb-1">Years</div>
                      <div className="text-2xl font-bold">{parseInt(inflationEndYear) - parseInt(inflationStartYear)}</div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
                    <div className="flex items-start gap-2 text-sm text-blue-900">
                      <Info className="w-4 h-4 mt-0.5" />
                      <div>
                        This calculator shows how inflation erodes purchasing power over time. 
                        The result represents how much money you would need in {inflationEndYear} to have 
                        the same purchasing power as {inflationAmount} YER in {inflationStartYear}.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Aid Impact Calculator */}
          <TabsContent value="aid">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[var(--observatory-teal)]" />
                    Aid Impact Calculator
                  </CardTitle>
                  <CardDescription>
                    Estimate the economic impact of humanitarian and development aid
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="aid-amount">Aid Amount (Million USD)</Label>
                    <Input
                      id="aid-amount"
                      type="number"
                      value={aidAmount}
                      onChange={(e) => setAidAmount(e.target.value)}
                      placeholder="Enter amount in millions"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aid-type">Aid Type</Label>
                    <Select value={aidType} onValueChange={setAidType}>
                      <SelectTrigger id="aid-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="humanitarian">Humanitarian (1.2x multiplier)</SelectItem>
                        <SelectItem value="development">Development (1.8x multiplier)</SelectItem>
                        <SelectItem value="emergency">Emergency (1.5x multiplier)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aid-beneficiaries">Estimated Beneficiaries</Label>
                    <Input
                      id="aid-beneficiaries"
                      type="number"
                      value={aidBeneficiaries}
                      onChange={(e) => setAidBeneficiaries(e.target.value)}
                      placeholder="Number of people"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[var(--observatory-teal)]" />
                    Impact Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-6 rounded-lg bg-gradient-to-br from-green-50 to-white border border-green-200">
                      <div className="text-sm text-muted-foreground mb-2">Total Economic Impact</div>
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        ${aidImpact.totalImpact.toFixed(1)}M
                      </div>
                      <div className="text-sm text-muted-foreground">
                        With {aidImpact.multiplier}x multiplier effect
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-muted text-center">
                        <div className="text-sm text-muted-foreground mb-1">Per Capita</div>
                        <div className="text-2xl font-bold">${aidImpact.perCapita.toFixed(2)}</div>
                      </div>
                      <div className="p-4 rounded-lg bg-muted text-center">
                        <div className="text-sm text-muted-foreground mb-1">Beneficiaries</div>
                        <div className="text-2xl font-bold">{parseFloat(aidBeneficiaries).toLocaleString()}</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                      <div className="flex items-start gap-2 text-sm text-blue-900">
                        <Info className="w-4 h-4 mt-0.5" />
                        <div>
                          <strong>Methodology:</strong> The multiplier effect accounts for indirect economic benefits. 
                          Development aid typically has higher multipliers (1.8x) due to long-term capacity building, 
                          while humanitarian aid (1.2x) focuses on immediate relief.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
