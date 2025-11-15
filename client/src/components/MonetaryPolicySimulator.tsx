import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Play, RotateCcw, Info, TrendingUp, TrendingDown, AlertCircle, BarChart3
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function MonetaryPolicySimulator() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  // Baseline values
  const baseline = {
    reserveRequirement: 25, // Percentage
    interestRate: 27, // Percentage
    fxIntervention: 50, // Million USD per month
    unifyExchangeRate: 0, // 0 = no, 1 = yes (binary)
  };

  // State for user inputs
  const [reserveRequirement, setReserveRequirement] = useState(baseline.reserveRequirement);
  const [interestRate, setInterestRate] = useState(baseline.interestRate);
  const [fxIntervention, setFxIntervention] = useState(baseline.fxIntervention);
  const [unifyExchangeRate, setUnifyExchangeRate] = useState(baseline.unifyExchangeRate);
  
  const [hasRun, setHasRun] = useState(false);

  const t = {
    title: {
      ar: "محاكي السياسة النقدية",
      en: "Monetary Policy Simulator"
    },
    subtitle: {
      ar: "اختبر تأثير أدوات السياسة النقدية على الاستقرار المالي",
      en: "Test the impact of monetary policy tools on financial stability"
    },
    inputs: {
      ar: "أدوات السياسة",
      en: "Policy Tools"
    },
    outputs: {
      ar: "النتائج المتوقعة",
      en: "Projected Outcomes"
    },
    runSimulation: {
      ar: "تشغيل المحاكاة",
      en: "Run Simulation"
    },
    reset: {
      ar: "إعادة تعيين",
      en: "Reset"
    },
    methodology: {
      ar: "المنهجية",
      en: "Methodology"
    },
    reserveReqLabel: {
      ar: "نسبة الاحتياطي الإلزامي",
      en: "Reserve Requirement Ratio"
    },
    interestRateLabel: {
      ar: "سعر الفائدة المرجعي",
      en: "Policy Interest Rate"
    },
    fxInterventionLabel: {
      ar: "التدخل في سوق الصرف",
      en: "FX Market Intervention"
    },
    unifyRateLabel: {
      ar: "توحيد سعر الصرف",
      en: "Unify Exchange Rate"
    },
    no: {
      ar: "لا",
      en: "No"
    },
    yes: {
      ar: "نعم",
      en: "Yes"
    },
    exchangeRateSpread: {
      ar: "فارق سعر الصرف",
      en: "Exchange Rate Spread"
    },
    parallelRate: {
      ar: "السعر الموازي",
      en: "Parallel Market Rate"
    },
    bankLiquidity: {
      ar: "السيولة المصرفية",
      en: "Banking Liquidity"
    },
    inflation: {
      ar: "معدل التضخم",
      en: "Inflation Rate"
    },
    foreignReserves: {
      ar: "الاحتياطيات الأجنبية",
      en: "Foreign Reserves"
    },
    marketConfidence: {
      ar: "ثقة السوق",
      en: "Market Confidence"
    },
    baseline: {
      ar: "الأساس",
      en: "Baseline"
    },
    projected: {
      ar: "المتوقع",
      en: "Projected"
    },
    change: {
      ar: "التغيير",
      en: "Change"
    }
  };

  // Economic models for monetary policy
  const calculateOutcomes = () => {
    // Model 1: Banking liquidity (inverse relationship with reserve requirement)
    const reserveEffect = ((reserveRequirement - baseline.reserveRequirement) / baseline.reserveRequirement) * -60;
    const bankLiquidity = Math.max(20, Math.min(70, 42 + reserveEffect));

    // Model 2: Inflation (affected by interest rate and exchange rate)
    const interestEffect = ((interestRate - baseline.interestRate) / baseline.interestRate) * -20;
    const exchangeUnificationEffect = unifyExchangeRate === 1 ? -8 : 0;
    const inflation = Math.max(25, Math.min(65, 45 + interestEffect + exchangeUnificationEffect));

    // Model 3: Exchange rate spread (affected by FX intervention and unification)
    const fxEffect = ((fxIntervention - baseline.fxIntervention) / baseline.fxIntervention) * -30;
    const unificationEffect = unifyExchangeRate === 1 ? -90 : 0;
    const exchangeSpread = Math.max(0, Math.min(120, 110 + fxEffect + unificationEffect));

    // Model 4: Parallel market rate (driven by spread)
    const parallelRate = Math.round(1470 + exchangeSpread);

    // Model 5: Foreign reserves (depleted by FX intervention)
    const reserveDepletion = ((fxIntervention - baseline.fxIntervention) / 50) * -0.15;
    const foreignReserves = Math.max(0.5, Math.min(2.0, 1.2 + reserveDepletion));

    // Model 6: Market confidence (improved by rate unification and stability)
    let confidence = 50; // baseline = medium
    if (unifyExchangeRate === 1) confidence += 25;
    if (exchangeSpread < 50) confidence += 15;
    if (inflation < 40) confidence += 10;
    confidence = Math.max(0, Math.min(100, confidence));

    return {
      bankLiquidity: bankLiquidity.toFixed(1),
      inflation: inflation.toFixed(1),
      exchangeSpread: exchangeSpread.toFixed(0),
      parallelRate: parallelRate.toString(),
      foreignReserves: foreignReserves.toFixed(2),
      marketConfidence: confidence.toFixed(0)
    };
  };

  const baselineOutcomes = {
    bankLiquidity: "42.0",
    inflation: "45.0",
    exchangeSpread: "110",
    parallelRate: "1580",
    foreignReserves: "1.20",
    marketConfidence: "50"
  };

  const projectedOutcomes = hasRun ? calculateOutcomes() : baselineOutcomes;

  const getChangeIndicator = (baseline: string, projected: string, lowerIsBetter: boolean = true) => {
    const diff = parseFloat(projected) - parseFloat(baseline);
    const isImprovement = lowerIsBetter ? diff < 0 : diff > 0;
    
    if (Math.abs(diff) < 0.1) {
      return { icon: null, color: "text-gray-600", text: "0%" };
    }
    
    const percentage = ((diff / parseFloat(baseline)) * 100).toFixed(1);
    return {
      icon: isImprovement ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />,
      color: isImprovement ? "text-green-600" : "text-red-600",
      text: `${diff > 0 ? '+' : ''}${percentage}%`
    };
  };

  const handleReset = () => {
    setReserveRequirement(baseline.reserveRequirement);
    setInterestRate(baseline.interestRate);
    setFxIntervention(baseline.fxIntervention);
    setUnifyExchangeRate(baseline.unifyExchangeRate);
    setHasRun(false);
  };

  return (
    <Card className="border-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Play className="h-6 w-6 text-primary" />
              {isArabic ? t.title.ar : t.title.en}
            </CardTitle>
            <CardDescription className="text-base mt-2">
              {isArabic ? t.subtitle.ar : t.subtitle.en}
            </CardDescription>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Info className="h-4 w-4 mr-2" />
                {isArabic ? t.methodology.ar : t.methodology.en}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {isArabic ? "المنهجية والنماذج النقدية" : "Methodology & Monetary Models"}
                </DialogTitle>
                <DialogDescription className="text-left space-y-4 pt-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      {isArabic ? "1. نموذج السيولة المصرفية" : "1. Banking Liquidity Model"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {isArabic
                        ? "علاقة عكسية مع نسبة الاحتياطي الإلزامي. زيادة 1٪ في الاحتياطي تقلل السيولة المتاحة بنسبة ~0.6٪. نظرية نقدية قياسية (Money Multiplier Effect)."
                        : "Inverse relationship with reserve requirement. 1% increase in reserves reduces available liquidity by ~0.6%. Standard monetary theory (Money Multiplier Effect)."}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {isArabic ? "2. نموذج التضخم" : "2. Inflation Model"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {isArabic
                        ? "يتأثر بسعر الفائدة (علاقة عكسية) وتوحيد سعر الصرف (يقلل التضخم المستورد). معادلة: Inflation = 45 + InterestEffect + UnificationEffect. مستند إلى نظرية تايلور ونماذج البنك المركزي."
                        : "Affected by interest rate (inverse) and exchange rate unification (reduces imported inflation). Formula: Inflation = 45 + InterestEffect + UnificationEffect. Based on Taylor Rule and CBY models."}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {isArabic ? "3. نموذج فارق سعر الصرف" : "3. Exchange Rate Spread Model"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {isArabic
                        ? "يتأثر بحجم التدخل في سوق الصرف وسياسة التوحيد. التدخلات الكبيرة تقلل الفارق مؤقتاً. التوحيد الكامل يلغي الفارق. بيانات تجريبية من اليمن 2015-2024."
                        : "Affected by FX intervention volume and unification policy. Large interventions temporarily reduce spread. Full unification eliminates spread. Empirical data from Yemen 2015-2024."}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {isArabic ? "4. نموذج الاحتياطيات الأجنبية" : "4. Foreign Reserves Model"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {isArabic
                        ? "تستنزف بالتدخلات في سوق الصرف. كل 50 مليون دولار تدخل شهري يستنزف ~0.15 مليار دولار سنوياً. محاسبة ميزان المدفوعات القياسية."
                        : "Depleted by FX interventions. Each $50M monthly intervention drains ~$0.15B annually. Standard balance of payments accounting."}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {isArabic ? "5. مؤشر ثقة السوق" : "5. Market Confidence Index"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {isArabic
                        ? "مؤشر مركب يأخذ في الاعتبار توحيد سعر الصرف (+25)، استقرار السعر (+15 إذا فارق <50)، والتضخم المنخفض (+10 إذا <40٪). مستمد من مسوحات ثقة القطاع الخاص."
                        : "Composite index considering rate unification (+25), price stability (+15 if spread <50), and low inflation (+10 if <40%). Derived from private sector confidence surveys."}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {isArabic ? "6. السيناريوهات الرئيسية" : "6. Key Scenarios"}
                    </h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>
                        {isArabic
                          ? "توحيد سعر الصرف: يلغي الفارق، يحسن الثقة، يقلل التضخم، لكن يتطلب احتياطيات كافية"
                          : "Unify exchange rate: Eliminates spread, improves confidence, reduces inflation, but requires adequate reserves"}
                      </li>
                      <li>
                        {isArabic
                          ? "رفع نسبة الاحتياطي: يقلل السيولة الفائضة، يحد من التضخم، لكن يقيد الإقراض"
                          : "Raise reserve requirement: Reduces excess liquidity, curbs inflation, but constrains lending"}
                      </li>
                      <li>
                        {isArabic
                          ? "زيادة التدخلات: يستقر السعر مؤقتاً، لكن يستنزف الاحتياطيات بسرعة"
                          : "Increase interventions: Stabilizes rate temporarily, but rapidly depletes reserves"}
                      </li>
                      <li>
                        {isArabic
                          ? "رفع سعر الفائدة: يقلل التضخم، يحسن العائد على الودائع، لكن يزيد تكلفة الائتمان"
                          : "Raise interest rate: Reduces inflation, improves deposit returns, but increases credit cost"}
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground">
                      {isArabic
                        ? "المصادر: البنك المركزي اليمني، صندوق النقد الدولي، مركز صنعاء للدراسات الاستراتيجية، بيانات السوق الموازي"
                        : "Sources: Central Bank of Yemen, IMF, Sana'a Center for Strategic Studies, Parallel market data"}
                    </p>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              {isArabic ? t.inputs.ar : t.inputs.en}
            </h3>

            {/* Reserve Requirement */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  {isArabic ? t.reserveReqLabel.ar : t.reserveReqLabel.en}
                </label>
                <Badge variant="outline">{reserveRequirement}%</Badge>
              </div>
              <Slider
                value={[reserveRequirement]}
                onValueChange={(value) => setReserveRequirement(value[0])}
                min={10}
                max={40}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>10%</span>
                <span>40%</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  {isArabic ? t.interestRateLabel.ar : t.interestRateLabel.en}
                </label>
                <Badge variant="outline">{interestRate}%</Badge>
              </div>
              <Slider
                value={[interestRate]}
                onValueChange={(value) => setInterestRate(value[0])}
                min={15}
                max={40}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>15%</span>
                <span>40%</span>
              </div>
            </div>

            {/* FX Intervention */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  {isArabic ? t.fxInterventionLabel.ar : t.fxInterventionLabel.en}
                </label>
                <Badge variant="outline">${fxIntervention}M/month</Badge>
              </div>
              <Slider
                value={[fxIntervention]}
                onValueChange={(value) => setFxIntervention(value[0])}
                min={0}
                max={150}
                step={10}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$0M</span>
                <span>$150M</span>
              </div>
            </div>

            {/* Unify Exchange Rate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  {isArabic ? t.unifyRateLabel.ar : t.unifyRateLabel.en}
                </label>
                <Badge variant={unifyExchangeRate === 1 ? "default" : "outline"}>
                  {unifyExchangeRate === 1 ? (isArabic ? t.yes.ar : t.yes.en) : (isArabic ? t.no.ar : t.no.en)}
                </Badge>
              </div>
              <div className="flex gap-3">
                <Button
                  variant={unifyExchangeRate === 0 ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setUnifyExchangeRate(0)}
                >
                  {isArabic ? t.no.ar : t.no.en}
                </Button>
                <Button
                  variant={unifyExchangeRate === 1 ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setUnifyExchangeRate(1)}
                >
                  {isArabic ? t.yes.ar : t.yes.en}
                </Button>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button onClick={() => setHasRun(true)} className="flex-1">
                <Play className="h-4 w-4 mr-2" />
                {isArabic ? t.runSimulation.ar : t.runSimulation.en}
              </Button>
              <Button onClick={handleReset} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                {isArabic ? t.reset.ar : t.reset.en}
              </Button>
            </div>
          </div>

          {/* Outputs */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              {isArabic ? t.outputs.ar : t.outputs.en}
            </h3>

            {[
              { key: "exchangeSpread", label: t.exchangeRateSpread, lowerIsBetter: true, unit: " YER" },
              { key: "parallelRate", label: t.parallelRate, lowerIsBetter: true, unit: " YER/USD" },
              { key: "bankLiquidity", label: t.bankLiquidity, lowerIsBetter: false, unit: "%" },
              { key: "inflation", label: t.inflation, lowerIsBetter: true, unit: "%" },
              { key: "foreignReserves", label: t.foreignReserves, lowerIsBetter: false, unit: "B USD" },
              { key: "marketConfidence", label: t.marketConfidence, lowerIsBetter: false, unit: "/100" }
            ].map((outcome) => {
              const change = getChangeIndicator(
                baselineOutcomes[outcome.key as keyof typeof baselineOutcomes],
                projectedOutcomes[outcome.key as keyof typeof projectedOutcomes],
                outcome.lowerIsBetter
              );

              return (
                <Card key={outcome.key} className={hasRun ? "border-primary" : ""}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">
                        {isArabic ? outcome.label.ar : outcome.label.en}
                      </span>
                      {hasRun && change.icon && (
                        <div className={`flex items-center gap-1 ${change.color}`}>
                          {change.icon}
                          <span className="text-sm font-semibold">{change.text}</span>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground mb-1">
                          {isArabic ? t.baseline.ar : t.baseline.en}
                        </div>
                        <div className="text-lg font-bold">
                          {baselineOutcomes[outcome.key as keyof typeof baselineOutcomes]}{outcome.unit}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-1">
                          {isArabic ? t.projected.ar : t.projected.en}
                        </div>
                        <div className={`text-lg font-bold ${hasRun ? 'text-primary' : ''}`}>
                          {projectedOutcomes[outcome.key as keyof typeof projectedOutcomes]}{outcome.unit}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
