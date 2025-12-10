import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Building2, TrendingUp, Users, MapPin, Filter, Download } from "lucide-react";
import { Link } from "wouter";
import { DataExport } from "@/components/DataExport";
import { useLanguage } from "@/contexts/LanguageContext";

interface Bank {
  id: number;
  nameEn: string;
  nameAr: string;
  type: "commercial" | "islamic" | "microfinance" | "specialized";
  status: "stable" | "struggling" | "critical" | "inactive";
  assets: number | null;
  deposits: number | null;
  branches: number | null;
  establishedDate: string | null;
  challenges: string | null;
  metrics: string | null;
}

export default function BanksDatabase() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  
  const [banks, setBanks] = useState<Bank[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Fetch banks from API
  useEffect(() => {
    fetchBanks();
  }, []);

  const fetchBanks = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/banks");
      if (response.ok) {
        const data = await response.json();
        setBanks(data);
      }
    } catch (error) {
      console.error("Error fetching banks:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter banks
  const filteredBanks = banks.filter(bank => {
    const matchesSearch = 
      bank.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bank.nameAr.includes(searchTerm);
    const matchesType = typeFilter === "all" || bank.type === typeFilter;
    const matchesStatus = statusFilter === "all" || bank.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  // Statistics
  const stats = {
    total: banks.length,
    commercial: banks.filter(b => b.type === "commercial").length,
    islamic: banks.filter(b => b.type === "islamic").length,
    microfinance: banks.filter(b => b.type === "microfinance").length,
    totalAssets: banks.reduce((sum, b) => sum + (b.assets || 0), 0),
    totalBranches: banks.reduce((sum, b) => sum + (b.branches || 0), 0),
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "stable": return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "struggling": return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400";
      case "critical": return "bg-red-500/10 text-red-700 dark:text-red-400";
      case "inactive": return "bg-gray-500/10 text-gray-700 dark:text-gray-400";
      default: return "bg-gray-500/10 text-gray-700";
    }
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, { en: string; ar: string }> = {
      commercial: { en: "Commercial", ar: "تجاري" },
      islamic: { en: "Islamic", ar: "إسلامي" },
      microfinance: { en: "Microfinance", ar: "تمويل أصغر" },
      specialized: { en: "Specialized", ar: "متخصص" },
    };
    return isArabic ? labels[type]?.ar : labels[type]?.en;
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, { en: string; ar: string }> = {
      stable: { en: "Stable", ar: "مستقر" },
      struggling: { en: "Struggling", ar: "يعاني" },
      critical: { en: "Critical", ar: "حرج" },
      inactive: { en: "Inactive", ar: "غير نشط" },
    };
    return isArabic ? labels[status]?.ar : labels[status]?.en;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              {isArabic ? "قاعدة بيانات شاملة" : "Comprehensive Database"}
            </Badge>
            <h1 className="text-5xl font-bold mb-4">
              {isArabic ? "قاعدة بيانات البنوك" : "Banks Database"}
            </h1>
            <p className="text-xl text-blue-100">
              {isArabic 
                ? "معلومات شاملة عن جميع البنوك العاملة في اليمن - تجارية، إسلامية، تمويل أصغر ومتخصصة"
                : "Comprehensive information on all banks operating in Yemen - commercial, Islamic, microfinance, and specialized"}
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm mb-1">
                    {isArabic ? "إجمالي البنوك" : "Total Banks"}
                  </p>
                  <p className="text-3xl font-bold">{stats.total}</p>
                </div>
                <Building2 className="w-12 h-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm mb-1">
                    {isArabic ? "إجمالي الأصول" : "Total Assets"}
                  </p>
                  <p className="text-3xl font-bold">${(stats.totalAssets / 1000).toFixed(1)}B</p>
                </div>
                <TrendingUp className="w-12 h-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm mb-1">
                    {isArabic ? "إجمالي الفروع" : "Total Branches"}
                  </p>
                  <p className="text-3xl font-bold">{stats.totalBranches}</p>
                </div>
                <MapPin className="w-12 h-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm mb-1">
                    {isArabic ? "تمويل أصغر" : "Microfinance"}
                  </p>
                  <p className="text-3xl font-bold">{stats.microfinance}</p>
                </div>
                <Users className="w-12 h-12 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              {isArabic ? "البحث والتصفية" : "Search & Filter"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder={isArabic ? "ابحث عن بنك..." : "Search for a bank..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder={isArabic ? "نوع البنك" : "Bank Type"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isArabic ? "جميع الأنواع" : "All Types"}</SelectItem>
                  <SelectItem value="commercial">{isArabic ? "تجاري" : "Commercial"}</SelectItem>
                  <SelectItem value="islamic">{isArabic ? "إسلامي" : "Islamic"}</SelectItem>
                  <SelectItem value="microfinance">{isArabic ? "تمويل أصغر" : "Microfinance"}</SelectItem>
                  <SelectItem value="specialized">{isArabic ? "متخصص" : "Specialized"}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder={isArabic ? "الحالة" : "Status"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isArabic ? "جميع الحالات" : "All Statuses"}</SelectItem>
                  <SelectItem value="stable">{isArabic ? "مستقر" : "Stable"}</SelectItem>
                  <SelectItem value="struggling">{isArabic ? "يعاني" : "Struggling"}</SelectItem>
                  <SelectItem value="critical">{isArabic ? "حرج" : "Critical"}</SelectItem>
                  <SelectItem value="inactive">{isArabic ? "غير نشط" : "Inactive"}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isArabic 
                  ? `عرض ${filteredBanks.length} من ${banks.length} بنك`
                  : `Showing ${filteredBanks.length} of ${banks.length} banks`}
              </p>
              <DataExport 
                data={filteredBanks}
                filename="yemen-banks-database"
              />
            </div>
          </CardContent>
        </Card>

        {/* Banks List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">{isArabic ? "جارٍ التحميل..." : "Loading..."}</p>
          </div>
        ) : filteredBanks.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">
                {isArabic ? "لم يتم العثور على بنوك" : "No banks found"}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBanks.map((bank) => (
              <Link key={bank.id} href={`/banks/${bank.id}`}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Building2 className="w-8 h-8 text-blue-600" />
                      <Badge className={getStatusColor(bank.status)}>
                        {getStatusLabel(bank.status)}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">
                      {isArabic ? bank.nameAr : bank.nameEn}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {getTypeLabel(bank.type)}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {bank.assets && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {isArabic ? "الأصول" : "Assets"}
                          </span>
                          <span className="font-semibold">${bank.assets}M</span>
                        </div>
                      )}
                      {bank.deposits && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {isArabic ? "الودائع" : "Deposits"}
                          </span>
                          <span className="font-semibold">${bank.deposits}M</span>
                        </div>
                      )}
                      {bank.branches && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {isArabic ? "الفروع" : "Branches"}
                          </span>
                          <span className="font-semibold">{bank.branches}</span>
                        </div>
                      )}
                      {bank.establishedDate && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {isArabic ? "تأسس" : "Established"}
                          </span>
                          <span className="font-semibold">{bank.establishedDate}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
