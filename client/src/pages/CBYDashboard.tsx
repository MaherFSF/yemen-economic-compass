import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingDown, TrendingUp, AlertCircle, DollarSign, Building2, 
  BarChart3, Activity, Shield, FileText, Download, RefreshCw
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import MonetaryPolicySimulator from "@/components/MonetaryPolicySimulator";

export default function CBYDashboard() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString());

  const t = {
    title: {
      ar: "لوحة متابعة البنك المركزي اليمني - عدن",
      en: "Central Bank of Yemen - Aden Dashboard"
    },
    subtitle: {
      ar: "مراقبة السياسة النقدية والاستقرار المالي في الوقت الفعلي",
      en: "Real-time Monetary Policy and Financial Stability Monitoring"
    },
    monetary: {
      ar: "السياسة النقدية",
      en: "Monetary Policy"
    },
    banking: {
      ar: "القطاع المصرفي",
      en: "Banking Sector"
    },
    reserves: {
      ar: "الاحتياطيات",
      en: "Reserves"
    },
    compliance: {
      ar: "الامتثال",
      en: "Compliance"
    },
    scenarios: {
      ar: "محاكاة السياسات",
      en: "Policy Scenarios"
    },
    refresh: {
      ar: "تحديث البيانات",
      en: "Refresh Data"
    },
    export: {
      ar: "تصدير التقرير",
      en: "Export Report"
    },
    lastUpdated: {
      ar: "آخر تحديث",
      en: "Last Updated"
    }
  };

  const keyMetrics = [
    {
      id: "exchange-rate",
      title: { ar: "سعر الصرف (USD/YER)", en: "Exchange Rate (USD/YER)" },
      value: "1,580",
      change: "+2.3%",
      trend: "down",
      icon: DollarSign,
      color: "text-red-600",
      bgColor: "bg-red-50",
      description: { ar: "السوق الموازي", en: "Parallel market" },
      alert: true
    },
    {
      id: "reserves",
      title: { ar: "الاحتياطيات الأجنبية", en: "Foreign Reserves" },
      value: "$1.2B",
      change: "-8%",
      trend: "down",
      icon: Shield,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      description: { ar: "3.2 أشهر واردات", en: "3.2 months of imports" },
      alert: true
    },
    {
      id: "liquidity",
      title: { ar: "السيولة المصرفية", en: "Banking Liquidity" },
      value: "42%",
      change: "-5%",
      trend: "down",
      icon: Activity,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      description: { ar: "نسبة السيولة", en: "Liquidity ratio" },
      alert: false
    },
    {
      id: "banks",
      title: { ar: "البنوك النشطة", en: "Active Banks" },
      value: "12",
      change: "0",
      trend: "stable",
      icon: Building2,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: { ar: "من أصل 17 بنك", en: "Out of 17 banks" },
      alert: false
    }
  ];

  const exchangeRateHistory = [
    { date: "Jan 2024", official: 1470, parallel: 1520, spread: 50 },
    { date: "Feb 2024", official: 1470, parallel: 1535, spread: 65 },
    { date: "Mar 2024", official: 1470, parallel: 1548, spread: 78 },
    { date: "Apr 2024", official: 1470, parallel: 1562, spread: 92 },
    { date: "May 2024", official: 1470, parallel: 1575, spread: 105 },
    { date: "Jun 2024", official: 1470, parallel: 1580, spread: 110 }
  ];

  const bankingHealth = [
    {
      bank: { ar: "البنك الأهلي اليمني", en: "National Bank of Yemen" },
      capital: "Adequate",
      liquidity: "85%",
      npl: "12%",
      status: "healthy"
    },
    {
      bank: { ar: "بنك التسليف التعاوني", en: "Cooperative & Agricultural Credit Bank" },
      capital: "Adequate",
      liquidity: "78%",
      npl: "18%",
      status: "healthy"
    },
    {
      bank: { ar: "بنك اليمن الدولي", en: "Yemen International Bank" },
      capital: "Weak",
      liquidity: "45%",
      npl: "35%",
      status: "at-risk"
    },
    {
      bank: { ar: "بنك التضامن الإسلامي", en: "Tadhamon International Islamic Bank" },
      capital: "Adequate",
      liquidity: "72%",
      npl: "22%",
      status: "watch"
    }
  ];

  const policyActions = [
    {
      date: "15 Nov 2024",
      action: {
        ar: "رفع نسبة الاحتياطي الإلزامي إلى 25%",
        en: "Increased reserve requirement to 25%"
      },
      impact: {
        ar: "تقليل السيولة الفائضة",
        en: "Reduce excess liquidity"
      },
      status: "implemented"
    },
    {
      date: "01 Nov 2024",
      action: {
        ar: "تشديد الرقابة على عمليات الصرف الأجنبي",
        en: "Tightened FX operations oversight"
      },
      impact: {
        ar: "الحد من المضاربة",
        en: "Curb speculation"
      },
      status: "implemented"
    },
    {
      date: "20 Oct 2024",
      action: {
        ar: "إطلاق نظام المدفوعات الإلكترونية",
        en: "Launched electronic payment system"
      },
      impact: {
        ar: "تعزيز الشمول المالي",
        en: "Enhance financial inclusion"
      },
      status: "ongoing"
    }
  ];

  const regulatoryCompliance = [
    {
      requirement: { ar: "نسبة كفاية رأس المال", en: "Capital Adequacy Ratio" },
      threshold: "12%",
      compliant: 10,
      nonCompliant: 2,
      compliance: 83
    },
    {
      requirement: { ar: "نسبة السيولة", en: "Liquidity Ratio" },
      threshold: "20%",
      compliant: 11,
      nonCompliant: 1,
      compliance: 92
    },
    {
      requirement: { ar: "حدود التركز", en: "Concentration Limits" },
      threshold: "25%",
      compliant: 9,
      nonCompliant: 3,
      compliance: 75
    },
    {
      requirement: { ar: "متطلبات مكافحة غسل الأموال", en: "AML Requirements" },
      threshold: "Full",
      compliant: 12,
      nonCompliant: 0,
      compliance: 100
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="h-10 w-10" />
                <h1 className="text-4xl font-bold">
                  {isArabic ? t.title.ar : t.title.en}
                </h1>
              </div>
              <p className="text-lg text-blue-100">
                {isArabic ? t.subtitle.ar : t.subtitle.en}
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => setLastUpdated(new Date().toLocaleString())}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                {isArabic ? t.refresh.ar : t.refresh.en}
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Download className="h-4 w-4 mr-2" />
                {isArabic ? t.export.ar : t.export.en}
              </Button>
            </div>
          </div>

          <div className="text-sm text-blue-200">
            {isArabic ? t.lastUpdated.ar : t.lastUpdated.en}: {lastUpdated}
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {keyMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.id} className={`border-2 ${metric.alert ? 'border-red-300' : ''} hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${metric.bgColor} p-3 rounded-lg`}>
                      <Icon className={`h-6 w-6 ${metric.color}`} />
                    </div>
                    {metric.alert && (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div className="text-3xl font-bold mb-1">{metric.value}</div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    {isArabic ? metric.title.ar : metric.title.en}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {isArabic ? metric.description.ar : metric.description.en}
                    </span>
                    <Badge variant={metric.trend === "down" ? "destructive" : "default"}>
                      {metric.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="monetary" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto">
            <TabsTrigger value="monetary">
              <DollarSign className="h-4 w-4 mr-2" />
              {isArabic ? t.monetary.ar : t.monetary.en}
            </TabsTrigger>
            <TabsTrigger value="banking">
              <Building2 className="h-4 w-4 mr-2" />
              {isArabic ? t.banking.ar : t.banking.en}
            </TabsTrigger>
            <TabsTrigger value="reserves">
              <Shield className="h-4 w-4 mr-2" />
              {isArabic ? t.reserves.ar : t.reserves.en}
            </TabsTrigger>
            <TabsTrigger value="scenarios">
              <Activity className="h-4 w-4 mr-2" />
              {isArabic ? t.scenarios.ar : t.scenarios.en}
            </TabsTrigger>
            <TabsTrigger value="compliance">
              <FileText className="h-4 w-4 mr-2" />
              {isArabic ? t.compliance.ar : t.compliance.en}
            </TabsTrigger>
          </TabsList>

          {/* Monetary Policy Tab */}
          <TabsContent value="monetary" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  {isArabic ? "تطور سعر الصرف" : "Exchange Rate Evolution"}
                </CardTitle>
                <CardDescription>
                  {isArabic
                    ? "مقارنة السعر الرسمي والسوق الموازي (2024)"
                    : "Official vs. Parallel Market Rates (2024)"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exchangeRateHistory.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">{item.date}</div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-20 text-xs text-muted-foreground">
                            {isArabic ? "رسمي" : "Official"}
                          </div>
                          <div className="flex-1 bg-blue-100 h-8 rounded flex items-center px-3">
                            <span className="text-sm font-semibold">{item.official}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-20 text-xs text-muted-foreground">
                            {isArabic ? "موازي" : "Parallel"}
                          </div>
                          <div className="flex-1 bg-red-100 h-8 rounded flex items-center px-3">
                            <span className="text-sm font-semibold">{item.parallel}</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-24 text-right">
                        <Badge variant="destructive">
                          {isArabic ? "فارق" : "Spread"}: {item.spread}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  {isArabic ? "إجراءات السياسة النقدية الأخيرة" : "Recent Policy Actions"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {policyActions.map((action, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="font-semibold mb-1">
                            {isArabic ? action.action.ar : action.action.en}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {isArabic ? "الأثر المتوقع:" : "Expected Impact:"}{" "}
                            {isArabic ? action.impact.ar : action.impact.en}
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">{action.date}</div>
                      </div>
                      <Badge variant={action.status === "implemented" ? "default" : "secondary"}>
                        {action.status === "implemented"
                          ? isArabic
                            ? "مُنفذ"
                            : "Implemented"
                          : isArabic
                          ? "جاري التنفيذ"
                          : "Ongoing"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Banking Sector Tab */}
          <TabsContent value="banking" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  {isArabic ? "صحة القطاع المصرفي" : "Banking Sector Health"}
                </CardTitle>
                <CardDescription>
                  {isArabic
                    ? "المؤشرات الرئيسية للبنوك التجارية"
                    : "Key indicators for commercial banks"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bankingHealth.map((bank, index) => (
                    <Card key={index} className={`${bank.status === 'at-risk' ? 'border-red-300' : ''}`}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-lg">
                            {isArabic ? bank.bank.ar : bank.bank.en}
                          </h4>
                          <Badge
                            variant={
                              bank.status === "healthy"
                                ? "default"
                                : bank.status === "watch"
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {bank.status === "healthy"
                              ? isArabic
                                ? "سليم"
                                : "Healthy"
                              : bank.status === "watch"
                              ? isArabic
                                ? "مراقبة"
                                : "Watch"
                              : isArabic
                              ? "معرض للخطر"
                              : "At Risk"}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground mb-1">
                              {isArabic ? "رأس المال" : "Capital"}
                            </div>
                            <div className="font-semibold">{bank.capital}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground mb-1">
                              {isArabic ? "السيولة" : "Liquidity"}
                            </div>
                            <div className="font-semibold">{bank.liquidity}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground mb-1">
                              {isArabic ? "القروض المتعثرة" : "NPL Ratio"}
                            </div>
                            <div className="font-semibold">{bank.npl}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reserves Tab */}
          <TabsContent value="reserves" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  {isArabic ? "الاحتياطيات الأجنبية" : "Foreign Exchange Reserves"}
                </CardTitle>
                <CardDescription>
                  {isArabic ? "التكوين والتطور" : "Composition and evolution"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">
                        {isArabic ? "إجمالي الاحتياطيات" : "Total Reserves"}
                      </div>
                      <div className="text-3xl font-bold">$1.2B</div>
                      <Badge variant="destructive">-8% {isArabic ? "سنوياً" : "YoY"}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">
                        {isArabic ? "تغطية الواردات" : "Import Cover"}
                      </div>
                      <div className="text-3xl font-bold">3.2 {isArabic ? "أشهر" : "months"}</div>
                      <Badge variant="secondary">
                        {isArabic ? "أقل من المعيار" : "Below Standard"}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          {isArabic ? "الودائع الأجنبية" : "Foreign Deposits"}
                        </span>
                        <span className="text-sm font-semibold">45%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="h-3 rounded-full bg-blue-600" style={{ width: "45%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          {isArabic ? "الذهب" : "Gold"}
                        </span>
                        <span className="text-sm font-semibold">30%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="h-3 rounded-full bg-yellow-600" style={{ width: "30%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          {isArabic ? "حقوق السحب الخاصة" : "SDRs"}
                        </span>
                        <span className="text-sm font-semibold">15%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="h-3 rounded-full bg-green-600" style={{ width: "15%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          {isArabic ? "أخرى" : "Other"}
                        </span>
                        <span className="text-sm font-semibold">10%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="h-3 rounded-full bg-gray-600" style={{ width: "10%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  {isArabic ? "الامتثال التنظيمي" : "Regulatory Compliance"}
                </CardTitle>
                <CardDescription>
                  {isArabic
                    ? "امتثال البنوك للمتطلبات التنظيمية"
                    : "Bank compliance with regulatory requirements"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {regulatoryCompliance.map((item, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">
                            {isArabic ? item.requirement.ar : item.requirement.en}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {isArabic ? "الحد الأدنى" : "Threshold"}: {item.threshold}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">{item.compliance}%</div>
                          <div className="text-xs text-muted-foreground">
                            {isArabic ? "ملتزم" : "Compliant"}: {item.compliant} | {isArabic ? "غير ملتزم" : "Non-compliant"}: {item.nonCompliant}
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${
                            item.compliance >= 90
                              ? "bg-green-600"
                              : item.compliance >= 75
                              ? "bg-yellow-600"
                              : "bg-red-600"
                          }`}
                          style={{ width: `${item.compliance}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Scenarios Tab */}
          <TabsContent value="scenarios" className="space-y-4">
            <MonetaryPolicySimulator />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
