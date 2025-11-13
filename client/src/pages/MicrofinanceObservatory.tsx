import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users, DollarSign, Building2, MapPin, BarChart3, PieChart } from "lucide-react";

// Data extracted from Social Fund for Development (SFD) June 2025 Report
const sfdData = {
  totalInstitutions: 221,
  totalBranches: 562,
  totalEmployees: 2423,
  totalPortfolio: {
    amount: 456144891,
    currency: "YER",
    outstandingLoans: 104233450,
    savings: 502486,
    beneficiaries: 78978800
  },
  totalClients: {
    active: 68081,
    savings: 4978,
    loans: 7716960,
    beneficiaries: 5048
  }
};

const programsData = [
  {
    id: 1,
    nameAr: "برنامج الإقراض الأصغر",
    nameEn: "Microfinance Program",
    governorates: ["أمانة العاصمة", "عدن", "لحج", "المهرة"],
    institutions: 9,
    branches: 34,
    employees: 79,
    fss: 51,
    oss: 51,
    par30: 16.19,
    portfolioValue: 11510750,
    outstandingLoans: 63423,
    savings: 0,
    savingsValue: 1979010,
    activeClients: 37,
    loanClients: 4100,
    loanBeneficiaries: 157,
    loanValue: 533130,
    savingsClients: 755
  },
  {
    id: 2,
    nameAr: "حراس بيس",
    nameEn: "Haras Bees",
    governorates: ["الحديدة"],
    institutions: 3,
    branches: 25,
    employees: 54,
    fss: 0,
    oss: 0,
    par30: 2014.3,
    portfolioValue: 23052,
    outstandingLoans: 9140,
    savings: 484970,
    savingsValue: 99720,
    activeClients: 7941,
    loanClients: 0,
    loanBeneficiaries: 0,
    loanValue: 39900,
    savingsClients: 368
  },
  {
    id: 3,
    nameAr: "مؤسسة بناء للتنمية الأصغر",
    nameEn: "Benaa Foundation for Microfinance",
    governorates: ["أمانة العاصمة", "تعز", "الحديداب"],
    institutions: 14,
    branches: 63,
    employees: 155,
    fss: 59,
    oss: 71,
    par30: 27.29,
    portfolioValue: 34082720,
    outstandingLoans: 117554,
    savings: 130,
    savingsValue: 3585390,
    activeClients: 18,
    loanClients: 3909,
    loanBeneficiaries: 323,
    loanValue: 248910,
    savingsClients: 242
  },
  {
    id: 4,
    nameAr: "برنامج الأزمات الأصغر",
    nameEn: "Crisis Microfinance Program",
    governorates: ["حضرموت"],
    institutions: 6,
    branches: 48,
    employees: 76,
    fss: 85,
    oss: 92,
    par30: 12.05,
    portfolioValue: 22748420,
    outstandingLoans: 53966,
    savings: 3300,
    savingsValue: 4749100,
    activeClients: 20,
    loanClients: 5636,
    loanBeneficiaries: 245,
    loanValue: 436100,
    savingsClients: 179
  },
  {
    id: 5,
    nameAr: "المؤسسة الوطنية للتمويل الأصغر",
    nameEn: "National Microfinance Foundation",
    governorates: ["أمانة العاصمة", "تعز", "الحديدة", "المحويت", "حجة"],
    institutions: 20,
    branches: 60,
    employees: 150,
    fss: 49,
    oss: 99,
    par30: 15.76,
    portfolioValue: 37451660,
    outstandingLoans: 177340,
    savings: 13599,
    savingsValue: 3759200,
    activeClients: 13,
    loanClients: 3689,
    loanBeneficiaries: 122,
    loanValue: 203670,
    savingsClients: 120
  },
  {
    id: 6,
    nameAr: "برنامج أزال للتمويل الأصغر والمشاريع الأصغر",
    nameEn: "Azal Microfinance & Small Enterprises Program",
    governorates: ["أمانة العاصمة", "تعز", "الحديدة", "عمران", "المحويت", "إب", "عدن"],
    institutions: 10,
    branches: 36,
    employees: 103,
    fss: 44,
    oss: 66,
    par30: 22.13,
    portfolioValue: 24707650,
    outstandingLoans: 70454,
    savings: 2874,
    savingsValue: 1875450,
    activeClients: 34,
    loanClients: 3894,
    loanBeneficiaries: 293,
    loanValue: 130070,
    savingsClients: 115
  },
  {
    id: 7,
    nameAr: "مؤسسة عتاز للتمويل الأصغر",
    nameEn: "Ataz Microfinance Foundation",
    governorates: ["تعز"],
    institutions: 4,
    branches: 16,
    employees: 31,
    fss: 50,
    oss: 94,
    par30: 0.98,
    portfolioValue: 5720970,
    outstandingLoans: 1925,
    savings: 0,
    savingsValue: 2116420,
    activeClients: 9,
    loanClients: 897,
    loanBeneficiaries: 128,
    loanValue: 194750,
    savingsClients: 59
  },
  {
    id: 8,
    nameAr: "برنامج تمويل أخرى",
    nameEn: "Other Financing Programs",
    governorates: ["مناطق مختلفة"],
    institutions: 66,
    branches: 282,
    employees: 648,
    fss: 0,
    oss: 0,
    par30: 27518.73,
    portfolioValue: 234450,
    outstandingLoans: 29043,
    savings: 18549540,
    savingsValue: 0,
    activeClients: 0,
    loanClients: 0,
    loanBeneficiaries: 0,
    loanValue: 0,
    savingsClients: 0
  }
];

const banksData = [
  {
    id: 1,
    nameAr: "بنك الأمل للتمويل الأصغر",
    nameEn: "Al-Amal Bank for Microfinance",
    governorates: ["حضرموت", "عدن", "عمران", "مأرب", "شبوة", "صعدة", "عمير", "يحلا"],
    institutions: 20,
    branches: 82,
    employees: 164,
    fss: 51,
    oss: 109,
    par30: 4.8,
    portfolioValue: 35930630,
    outstandingLoans: 195064,
    savings: 261531,
    savingsValue: 8520880,
    activeClients: 29,
    loanClients: 9948,
    loanBeneficiaries: 3624,
    loanValue: 809160,
    savingsClients: 1790
  },
  {
    id: 2,
    nameAr: "بنك الكريمي للتمويل الأصغر",
    nameEn: "Al-Kuraimi Bank for Microfinance",
    governorates: ["أمانة العاصمة", "تعز", "الحديدة", "عمران", "لحج", "إب", "عدن"],
    institutions: 65,
    branches: 120,
    employees: 180,
    fss: 89,
    oss: 97,
    par30: 8,
    portfolioValue: 171654220,
    outstandingLoans: 89083,
    savings: 4173664,
    savingsValue: 36328260,
    activeClients: 21,
    loanClients: 13118,
    loanBeneficiaries: 0,
    loanValue: 3781550,
    savingsClients: 742
  },
  {
    id: 3,
    nameAr: "التضامن للتمويل الأصغر",
    nameEn: "Tadhamon Microfinance",
    governorates: ["أمانة العاصمة", "مأرب", "الحديدة", "عمران", "تعز", "إب", "عدن"],
    institutions: 27,
    branches: 45,
    employees: 109,
    fss: 1.19,
    oss: 1.19,
    par30: 4,
    portfolioValue: 45997240,
    outstandingLoans: 63606,
    savings: 0,
    savingsValue: 10079510,
    activeClients: 33.22,
    loanClients: 7673,
    loanBeneficiaries: 0,
    loanValue: 451520,
    savingsClients: 262
  },
  {
    id: 4,
    nameAr: "بنك اليمن والكويت",
    nameEn: "Yemen Kuwait Bank",
    governorates: ["أمانة العاصمة", "تعز", "الحديدة", "عمران", "لحج", "إب", "عدن"],
    institutions: 23,
    branches: 23,
    employees: 38,
    fss: 0,
    oss: 0,
    par30: 10,
    portfolioValue: 29589580,
    outstandingLoans: 5696,
    savings: 0,
    savingsValue: 3852850,
    activeClients: 5,
    loanClients: 528,
    loanBeneficiaries: 0,
    loanValue: 71640,
    savingsClients: 152
  },
  {
    id: 5,
    nameAr: "مصرف اليمن والخليج",
    nameEn: "Yemen Gulf Bank",
    governorates: ["أمانة العاصمة", "الحديدة", "تعز", "الحديدة", "سيئون", "المكلا"],
    institutions: 8,
    branches: 10,
    employees: 20,
    fss: 0,
    oss: 0,
    par30: 1,
    portfolioValue: 5277580,
    outstandingLoans: 2108,
    savings: 0,
    savingsValue: 101230,
    activeClients: 15,
    loanClients: 757,
    loanBeneficiaries: 84,
    loanValue: 101230,
    savingsClients: 28
  }
];

export default function MicrofinanceObservatory() {
  const [language, setLanguage] = useState<"en" | "ar">("ar");
  const [activeTab, setActiveTab] = useState("overview");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US').format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 text-white py-16">
        <div className="container">
          <div className="flex justify-between items-start mb-6">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <TrendingUp className="w-3 h-3 mr-1" />
                {language === "ar" ? "قطاع التمويل الأصغر" : "Microfinance Sector"}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {language === "ar" ? "مرصد التمويل الأصغر في اليمن" : "Yemen Microfinance Observatory"}
              </h1>
              <p className="text-xl text-emerald-100 max-w-3xl">
                {language === "ar" 
                  ? "تتبع شامل لمؤسسات التمويل الأصغر والبنوك المتخصصة مع بيانات محفظة القروض والمدخرات والأداء المالي - بيانات الصندوق الاجتماعي للتنمية يونيو 2025"
                  : "Comprehensive tracking of microfinance institutions and specialized banks with loan portfolio, savings, and financial performance data - Social Fund for Development June 2025"}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              {language === "en" ? "العربية" : "English"}
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Building2 className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">{sfdData.totalInstitutions}</div>
                <div className="text-emerald-100">{language === "ar" ? "مؤسسة" : "Institutions"}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <MapPin className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">{sfdData.totalBranches}</div>
                <div className="text-emerald-100">{language === "ar" ? "فرع" : "Branches"}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">{formatCurrency(sfdData.totalClients.active)}</div>
                <div className="text-emerald-100">{language === "ar" ? "عميل نشط" : "Active Clients"}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <DollarSign className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">{formatCurrency(sfdData.totalPortfolio.amount / 1000000)}M</div>
                <div className="text-emerald-100">{language === "ar" ? "محفظة القروض (ريال)" : "Portfolio (YER)"}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">
              {language === "ar" ? "نظرة عامة" : "Overview"}
            </TabsTrigger>
            <TabsTrigger value="programs">
              {language === "ar" ? "البرامج والمؤسسات" : "Programs & Institutions"}
            </TabsTrigger>
            <TabsTrigger value="banks">
              {language === "ar" ? "البنوك المتخصصة" : "Specialized Banks"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  {language === "ar" ? "إحصائيات القطاع - يونيو 2025" : "Sector Statistics - June 2025"}
                </CardTitle>
                <CardDescription>
                  {language === "ar" 
                    ? "بيانات من التقرير الشهري لمؤشرات محفظة التمويلات - الصندوق الاجتماعي للتنمية"
                    : "Data from Monthly Financing Portfolio Indicators Report - Social Fund for Development"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">{language === "ar" ? "المحفظة الإجمالية" : "Total Portfolio"}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                        <span className="text-sm">{language === "ar" ? "قيمة المحفظة التراكمية" : "Cumulative Portfolio Value"}</span>
                        <span className="font-bold">{formatCurrency(sfdData.totalPortfolio.amount)} {language === "ar" ? "ريال" : "YER"}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
                        <span className="text-sm">{language === "ar" ? "القروض المتداولة" : "Outstanding Loans"}</span>
                        <span className="font-bold">{formatCurrency(sfdData.totalPortfolio.outstandingLoans)} {language === "ar" ? "ريال" : "YER"}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg">
                        <span className="text-sm">{language === "ar" ? "المدخرات" : "Savings"}</span>
                        <span className="font-bold">{formatCurrency(sfdData.totalPortfolio.savings)} {language === "ar" ? "ريال" : "YER"}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm">{language === "ar" ? "المستفيدون" : "Beneficiaries"}</span>
                        <span className="font-bold">{formatCurrency(sfdData.totalPortfolio.beneficiaries)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">{language === "ar" ? "العملاء" : "Clients"}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                        <span className="text-sm">{language === "ar" ? "العملاء النشطون" : "Active Clients"}</span>
                        <span className="font-bold">{formatCurrency(sfdData.totalClients.active)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
                        <span className="text-sm">{language === "ar" ? "عملاء المدخرات" : "Savings Clients"}</span>
                        <span className="font-bold">{formatCurrency(sfdData.totalClients.savings)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg">
                        <span className="text-sm">{language === "ar" ? "عملاء القروض" : "Loan Clients"}</span>
                        <span className="font-bold">{formatCurrency(sfdData.totalClients.loans)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm">{language === "ar" ? "المستفيدون من القروض" : "Loan Beneficiaries"}</span>
                        <span className="font-bold">{formatCurrency(sfdData.totalClients.beneficiaries)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-900">
                    <strong>{language === "ar" ? "المصدر:" : "Source:"}</strong>{" "}
                    {language === "ar" 
                      ? "التقرير الشهري لمؤشرات محفظة التمويلات - الصندوق الاجتماعي للتنمية - تقرير شهر يونيو 2025"
                      : "Monthly Financing Portfolio Indicators Report - Social Fund for Development - June 2025 Report"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programs" className="space-y-6 mt-6">
            {programsData.map(program => (
              <Card key={program.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{language === "ar" ? program.nameAr : program.nameEn}</CardTitle>
                      <CardDescription className="mt-2">
                        <Badge variant="outline" className="mr-2">
                          {program.institutions} {language === "ar" ? "مؤسسة" : "Institutions"}
                        </Badge>
                        <Badge variant="outline" className="mr-2">
                          {program.branches} {language === "ar" ? "فرع" : "Branches"}
                        </Badge>
                        <Badge variant="outline">
                          {program.employees} {language === "ar" ? "موظف" : "Employees"}
                        </Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">{language === "ar" ? "قيمة المحفظة" : "Portfolio Value"}</div>
                      <div className="font-bold">{formatCurrency(program.portfolioValue)}</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">{language === "ar" ? "القروض المتداولة" : "Outstanding Loans"}</div>
                      <div className="font-bold">{formatCurrency(program.outstandingLoans)}</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">{language === "ar" ? "العملاء النشطون" : "Active Clients"}</div>
                      <div className="font-bold">{program.activeClients}</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">{language === "ar" ? "نسبة PAR30" : "PAR30 Ratio"}</div>
                      <div className="font-bold">{program.par30}%</div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-sm text-muted-foreground mb-2">{language === "ar" ? "المحافظات المغطاة:" : "Covered Governorates:"}</div>
                    <div className="flex flex-wrap gap-2">
                      {program.governorates.map((gov, idx) => (
                        <Badge key={idx} variant="secondary">{gov}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="banks" className="space-y-6 mt-6">
            {banksData.map(bank => (
              <Card key={bank.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Building2 className="w-5 h-5" />
                        {language === "ar" ? bank.nameAr : bank.nameEn}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        <Badge variant="outline" className="mr-2">
                          {bank.institutions} {language === "ar" ? "مؤسسة" : "Institutions"}
                        </Badge>
                        <Badge variant="outline" className="mr-2">
                          {bank.branches} {language === "ar" ? "فرع" : "Branches"}
                        </Badge>
                        <Badge variant="outline">
                          {bank.employees} {language === "ar" ? "موظف" : "Employees"}
                        </Badge>
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">{language === "ar" ? "الاستدامة المالية" : "Financial Sustainability"}</div>
                      <div className="text-2xl font-bold text-emerald-600">{bank.fss}%</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="p-3 bg-emerald-50 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">{language === "ar" ? "قيمة المحفظة" : "Portfolio Value"}</div>
                      <div className="font-bold text-sm">{formatCurrency(bank.portfolioValue)}</div>
                    </div>
                    <div className="p-3 bg-teal-50 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">{language === "ar" ? "القروض المتداولة" : "Outstanding Loans"}</div>
                      <div className="font-bold text-sm">{formatCurrency(bank.outstandingLoans)}</div>
                    </div>
                    <div className="p-3 bg-cyan-50 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">{language === "ar" ? "المدخرات" : "Savings"}</div>
                      <div className="font-bold text-sm">{formatCurrency(bank.savings)}</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">{language === "ar" ? "عملاء القروض" : "Loan Clients"}</div>
                      <div className="font-bold text-sm">{formatCurrency(bank.loanClients)}</div>
                    </div>
                    <div className="p-3 bg-indigo-50 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">{language === "ar" ? "نسبة PAR30" : "PAR30 Ratio"}</div>
                      <div className="font-bold text-sm">{bank.par30}%</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-semibold mb-2">{language === "ar" ? "مؤشرات الأداء" : "Performance Indicators"}</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">FSS:</span>
                          <span className="font-medium">{bank.fss}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">OSS:</span>
                          <span className="font-medium">{bank.oss}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{language === "ar" ? "العملاء النشطون" : "Active Clients"}:</span>
                          <span className="font-medium">{bank.activeClients}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold mb-2">{language === "ar" ? "المحافظات المغطاة" : "Covered Governorates"}</div>
                      <div className="flex flex-wrap gap-1">
                        {bank.governorates.map((gov, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">{gov}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
