import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Target, DollarSign, Users, Activity } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PolicyAction {
  id: string;
  name: { ar: string; en: string };
  category: string;
  investment: string;
  outcomes: {
    metric: { ar: string; en: string };
    baseline: string;
    current: string;
    target: string;
    impact: "positive" | "negative" | "mixed";
    change: string;
  }[];
  roi: number;
  startDate: string;
}

export default function PolicyImpactMeter() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const t = {
    title: {
      ar: "مقياس أثر السياسات",
      en: "Policy Impact Meter"
    },
    subtitle: {
      ar: "قياس النتائج الملموسة للتدخلات والإصلاحات",
      en: "Measuring tangible outcomes of interventions and reforms"
    },
    investment: {
      ar: "الاستثمار",
      en: "Investment"
    },
    roi: {
      ar: "العائد على الاستثمار",
      en: "Return on Investment"
    },
    outcomes: {
      ar: "النتائج",
      en: "Outcomes"
    },
    baseline: {
      ar: "الأساس",
      en: "Baseline"
    },
    current: {
      ar: "الحالي",
      en: "Current"
    },
    target: {
      ar: "الهدف",
      en: "Target"
    },
    positive: {
      ar: "إيجابي",
      en: "Positive"
    },
    negative: {
      ar: "سلبي",
      en: "Negative"
    },
    mixed: {
      ar: "مختلط",
      en: "Mixed"
    },
    perDollar: {
      ar: "لكل دولار مستثمر",
      en: "per dollar invested"
    }
  };

  const policyActions: PolicyAction[] = [
    {
      id: "cash-transfer",
      name: {
        ar: "برنامج التحويلات النقدية الطارئة",
        en: "Emergency Cash Transfer Program"
      },
      category: "humanitarian",
      investment: "$420M",
      startDate: "Mar 2022",
      roi: 2.8,
      outcomes: [
        {
          metric: { ar: "معدل الفقر المدقع", en: "Extreme Poverty Rate" },
          baseline: "50%",
          current: "42%",
          target: "35%",
          impact: "positive",
          change: "-8%"
        },
        {
          metric: { ar: "انعدام الأمن الغذائي", en: "Food Insecurity" },
          baseline: "60%",
          current: "51%",
          target: "40%",
          impact: "positive",
          change: "-9%"
        },
        {
          metric: { ar: "الأسر المستفيدة", en: "Households Reached" },
          baseline: "0",
          current: "1.5M",
          target: "2M",
          impact: "positive",
          change: "+1.5M"
        }
      ]
    },
    {
      id: "microfinance-licensing",
      name: {
        ar: "إصلاح نظام التمويل الأصغر",
        en: "Microfinance System Reform"
      },
      category: "financial",
      investment: "$15M",
      startDate: "Jan 2023",
      roi: 4.2,
      outcomes: [
        {
          metric: { ar: "الوصول إلى التمويل", en: "Financial Access" },
          baseline: "15%",
          current: "23%",
          target: "35%",
          impact: "positive",
          change: "+8%"
        },
        {
          metric: { ar: "المشاريع الصغيرة الممولة", en: "SMEs Financed" },
          baseline: "12K",
          current: "28K",
          target: "50K",
          impact: "positive",
          change: "+133%"
        },
        {
          metric: { ar: "فرص العمل المُنشأة", en: "Jobs Created" },
          baseline: "0",
          current: "45K",
          target: "100K",
          impact: "positive",
          change: "+45K"
        }
      ]
    },
    {
      id: "exchange-rate-intervention",
      name: {
        ar: "تدخلات سعر الصرف",
        en: "Exchange Rate Interventions"
      },
      category: "monetary",
      investment: "$180M",
      startDate: "Jun 2023",
      roi: 1.2,
      outcomes: [
        {
          metric: { ar: "استقرار سعر الصرف", en: "Exchange Rate Stability" },
          baseline: "1520 YER/USD",
          current: "1580 YER/USD",
          target: "1470 YER/USD",
          impact: "negative",
          change: "+4%"
        },
        {
          metric: { ar: "الاحتياطيات الأجنبية", en: "Foreign Reserves" },
          baseline: "$1.4B",
          current: "$1.2B",
          target: "$2B",
          impact: "negative",
          change: "-14%"
        },
        {
          metric: { ar: "ثقة السوق", en: "Market Confidence" },
          baseline: "Low",
          current: "Medium",
          target: "High",
          impact: "positive",
          change: "↑"
        }
      ]
    },
    {
      id: "health-infrastructure",
      name: {
        ar: "مشروع البنية التحتية الصحية",
        en: "Health Infrastructure Project"
      },
      category: "infrastructure",
      investment: "$200M",
      startDate: "Jun 2020",
      roi: 3.5,
      outcomes: [
        {
          metric: { ar: "الوصول إلى الرعاية الصحية", en: "Healthcare Access" },
          baseline: "40%",
          current: "51%",
          target: "70%",
          impact: "positive",
          change: "+11%"
        },
        {
          metric: { ar: "المرافق الصحية المُعاد تأهيلها", en: "Facilities Rehabilitated" },
          baseline: "0",
          current: "142",
          target: "250",
          impact: "positive",
          change: "+142"
        },
        {
          metric: { ar: "معدل وفيات الأطفال", en: "Child Mortality Rate" },
          baseline: "55/1000",
          current: "48/1000",
          target: "35/1000",
          impact: "positive",
          change: "-13%"
        }
      ]
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "positive":
        return "text-green-600 bg-green-50";
      case "negative":
        return "text-red-600 bg-red-50";
      case "mixed":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getImpactBadge = (impact: string) => {
    const label = impact === "positive" ? t.positive : impact === "negative" ? t.negative : t.mixed;
    return (
      <Badge variant={impact === "positive" ? "default" : impact === "negative" ? "destructive" : "secondary"}>
        {isArabic ? label.ar : label.en}
      </Badge>
    );
  };

  return (
    <Card className="border-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              {isArabic ? t.title.ar : t.title.en}
            </CardTitle>
            <CardDescription className="text-base mt-2">
              {isArabic ? t.subtitle.ar : t.subtitle.en}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {policyActions.map((action) => {
          const positiveOutcomes = action.outcomes.filter(o => o.impact === "positive").length;
          const negativeOutcomes = action.outcomes.filter(o => o.impact === "negative").length;
          const totalOutcomes = action.outcomes.length;
          const successRate = Math.round((positiveOutcomes / totalOutcomes) * 100);

          return (
            <Card key={action.id} className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">
                      {isArabic ? action.name.ar : action.name.en}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        {isArabic ? t.investment.ar : t.investment.en}: {action.investment}
                      </span>
                      <span className="flex items-center gap-1">
                        <Activity className="h-4 w-4" />
                        {isArabic ? t.roi.ar : t.roi.en}: {action.roi}x {isArabic ? t.perDollar.ar : t.perDollar.en}
                      </span>
                      <span className="text-xs">{action.startDate}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{successRate}%</div>
                    <div className="text-xs text-muted-foreground">
                      {positiveOutcomes}/{totalOutcomes} {isArabic ? "إيجابي" : "positive"}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {action.outcomes.map((outcome, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">
                        {isArabic ? outcome.metric.ar : outcome.metric.en}
                      </span>
                      <div className="flex items-center gap-2">
                        {getImpactBadge(outcome.impact)}
                        <Badge variant="outline" className={outcome.impact === "positive" ? "border-green-600 text-green-600" : "border-red-600 text-red-600"}>
                          {outcome.change}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-muted-foreground">{isArabic ? t.baseline.ar : t.baseline.en}</span>
                          <span className="font-semibold">{outcome.baseline}</span>
                        </div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-muted-foreground">{isArabic ? t.current.ar : t.current.en}</span>
                          <span className="font-semibold">{outcome.current}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">{isArabic ? t.target.ar : t.target.en}</span>
                          <span className="font-semibold">{outcome.target}</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${outcome.impact === "positive" ? "bg-green-600" : outcome.impact === "negative" ? "bg-red-600" : "bg-yellow-600"}`}
                        style={{
                          width: `${Math.min(
                            100,
                            Math.max(
                              0,
                              ((parseFloat(outcome.current) - parseFloat(outcome.baseline)) /
                                (parseFloat(outcome.target) - parseFloat(outcome.baseline))) *
                                100
                            )
                          )}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </CardContent>
    </Card>
  );
}
