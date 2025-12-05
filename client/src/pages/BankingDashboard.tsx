import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, TrendingDown, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export default function BankingDashboard() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const [filterType, setFilterType] = useState<string>("all");

  // Fetch all banks from database
  const { data: banks, isLoading } = trpc.banks.list.useQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container py-20">
          <Skeleton className="h-12 w-3/4 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="h-64" />
            <Skeleton className="h-64" />
            <Skeleton className="h-64" />
          </div>
        </div>
      </div>
    );
  }

  const banksArray = banks || [];
  
  // Filter banks by type
  const filteredBanks = filterType === "all" 
    ? banksArray 
    : banksArray.filter((bank: any) => bank.type === filterType);

  // Calculate statistics
  const totalBanks = banksArray.length;
  const commercialBanks = banksArray.filter((b: any) => b.type === "commercial").length;
  const islamicBanks = banksArray.filter((b: any) => b.type === "islamic").length;
  const microfinanceBanks = banksArray.filter((b: any) => b.type === "microfinance").length;
  const activeBanks = banksArray.filter((b: any) => b.status === "stable" || b.status === "struggling").length;
  const criticalBanks = banksArray.filter((b: any) => b.status === "critical").length;
  const inactiveBanks = banksArray.filter((b: any) => b.status === "inactive").length;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "stable":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "struggling":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "critical":
        return <TrendingDown className="h-5 w-5 text-red-500" />;
      case "inactive":
        return <XCircle className="h-5 w-5 text-gray-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      stable: "default",
      struggling: "secondary",
      critical: "destructive",
      inactive: "outline"
    };
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? "لوحة القطاع المصرفي" : "Banking Sector Dashboard"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl">
            {isArabic 
              ? "نظرة شاملة على القطاع المصرفي اليمني بما في ذلك البنوك التجارية والإسلامية ومؤسسات التمويل الأصغر"
              : "Comprehensive overview of Yemen's banking sector including commercial, Islamic, and microfinance institutions"}
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isArabic ? "إجمالي البنوك" : "Total Banks"}
              </CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalBanks}</div>
              <p className="text-xs text-muted-foreground">
                {commercialBanks} {isArabic ? "تجاري" : "commercial"} · {islamicBanks} {isArabic ? "إسلامي" : "Islamic"} · {microfinanceBanks} {isArabic ? "تمويل أصغر" : "microfinance"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isArabic ? "بنوك نشطة" : "Active Banks"}
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{activeBanks}</div>
              <p className="text-xs text-muted-foreground">
                {isArabic ? "مستقرة أو تكافح" : "Stable or struggling"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isArabic ? "بنوك حرجة" : "Critical Banks"}
              </CardTitle>
              <TrendingDown className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{criticalBanks}</div>
              <p className="text-xs text-muted-foreground">
                {isArabic ? "تواجه مخاطر الإعسار" : "Facing insolvency risk"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isArabic ? "بنوك غير نشطة" : "Inactive Banks"}
              </CardTitle>
              <XCircle className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-600">{inactiveBanks}</div>
              <p className="text-xs text-muted-foreground">
                {isArabic ? "عمليات معلقة" : "Operations suspended"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filter Tabs */}
        <Tabs value={filterType} onValueChange={setFilterType} className="mb-8">
          <TabsList>
            <TabsTrigger value="all">{isArabic ? "الكل" : "All"} ({totalBanks})</TabsTrigger>
            <TabsTrigger value="commercial">{isArabic ? "تجاري" : "Commercial"} ({commercialBanks})</TabsTrigger>
            <TabsTrigger value="islamic">{isArabic ? "إسلامي" : "Islamic"} ({islamicBanks})</TabsTrigger>
            <TabsTrigger value="microfinance">{isArabic ? "تمويل أصغر" : "Microfinance"} ({microfinanceBanks})</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Banks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBanks.map((bank: any) => {
            const metrics = typeof bank.metrics === 'string' ? JSON.parse(bank.metrics) : bank.metrics;
            const challenges = typeof bank.challenges === 'string' ? JSON.parse(bank.challenges) : bank.challenges;
            
            return (
              <Card key={bank.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">
                        {isArabic ? bank.nameAr : bank.nameEn}
                      </CardTitle>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="outline">{bank.type}</Badge>
                        {getStatusBadge(bank.status)}
                      </div>
                    </div>
                    {getStatusIcon(bank.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Financial Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">{isArabic ? "الأصول" : "Assets"}</p>
                        <p className="text-lg font-semibold">${bank.assets}M</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{isArabic ? "الودائع" : "Deposits"}</p>
                        <p className="text-lg font-semibold">${bank.deposits}M</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{isArabic ? "الفروع" : "Branches"}</p>
                        <p className="text-lg font-semibold">{bank.branches}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{isArabic ? "التأسيس" : "Founded"}</p>
                        <p className="text-lg font-semibold">
                          {bank.establishedDate ? new Date(bank.establishedDate).getFullYear() : 'N/A'}
                        </p>
                      </div>
                    </div>

                    {/* Health Indicators */}
                    {metrics && (
                      <div className="border-t pt-4">
                        <p className="text-xs font-semibold mb-2 text-muted-foreground">
                          {isArabic ? "مؤشرات الصحة" : "Health Indicators"}
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {metrics.capitalAdequacy && (
                            <div>
                              <span className="text-muted-foreground">{isArabic ? "كفاية رأس المال:" : "CAR:"}</span>
                              <span className="font-semibold ml-1">{metrics.capitalAdequacy}</span>
                            </div>
                          )}
                          {metrics.npl && (
                            <div>
                              <span className="text-muted-foreground">{isArabic ? "القروض المتعثرة:" : "NPL:"}</span>
                              <span className="font-semibold ml-1">{metrics.npl}</span>
                            </div>
                          )}
                          {metrics.portfolioAtRisk && (
                            <div>
                              <span className="text-muted-foreground">{isArabic ? "المحفظة المعرضة للخطر:" : "PAR:"}</span>
                              <span className="font-semibold ml-1">{metrics.portfolioAtRisk}</span>
                            </div>
                          )}
                          {metrics.activeClients && (
                            <div>
                              <span className="text-muted-foreground">{isArabic ? "العملاء النشطون:" : "Clients:"}</span>
                              <span className="font-semibold ml-1">{metrics.activeClients}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Challenges */}
                    {challenges && challenges.length > 0 && (
                      <div className="border-t pt-4">
                        <p className="text-xs font-semibold mb-2 text-muted-foreground">
                          {isArabic ? "التحديات الرئيسية" : "Key Challenges"}
                        </p>
                        <ul className="text-xs space-y-1">
                          {challenges.slice(0, 3).map((challenge: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-1">
                              <span className="text-red-500 mt-0.5">•</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredBanks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {isArabic ? "لا توجد بنوك في هذه الفئة" : "No banks in this category"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
