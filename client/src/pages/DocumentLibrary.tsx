import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileText,
  Download,
  Search,
  Filter,
  Calendar,
  Building2,
  Scale,
  BookOpen,
  Upload,
  Eye,
  ExternalLink
} from "lucide-react";

/**
 * Document Library - Comprehensive repository for all Yemen economic documents
 * 
 * Categories:
 * - CBY Aden Directives (2010-2025)
 * - CBY Sana'a Directives (2010-2025)
 * - Laws & Regulations
 * - Research Papers & Reports
 * - Yemen Microfinance Network Library
 * - International Reports (World Bank, IMF, UN)
 */

interface Document {
  id: string;
  titleEn: string;
  titleAr: string;
  category: "cby_aden" | "cby_sanaa" | "laws" | "research" | "ymn" | "international";
  date: string;
  source: string;
  fileUrl?: string;
  externalUrl?: string;
  abstract?: string;
  tags: string[];
  language: "ar" | "en" | "both";
}

// Sample documents - will be replaced with database integration
const SAMPLE_DOCUMENTS: Document[] = [
  {
    id: "cby-aden-001",
    titleEn: "Circular No. 1/2024 - Banking Supervision Requirements",
    titleAr: "تعميم رقم 1/2024 - متطلبات الرقابة المصرفية",
    category: "cby_aden",
    date: "2024-01-15",
    source: "Central Bank of Yemen - Aden",
    externalUrl: "https://www.cby-ye.com",
    abstract: "New banking supervision requirements for commercial banks operating in liberated areas",
    tags: ["banking", "supervision", "regulation"],
    language: "both"
  },
  {
    id: "cby-sanaa-001",
    titleEn: "Decision No. 15/2023 - Currency Management",
    titleAr: "قرار رقم 15/2023 - إدارة العملة",
    category: "cby_sanaa",
    date: "2023-12-20",
    source: "Central Bank of Yemen - Sana'a",
    abstract: "Regulations on currency circulation and old banknote ban",
    tags: ["currency", "monetary policy"],
    language: "ar"
  },
  {
    id: "law-001",
    titleEn: "Banking Law No. 38 of 1998 (Amended 2010)",
    titleAr: "قانون البنوك رقم 38 لسنة 1998 (المعدل 2010)",
    category: "laws",
    date: "2010-06-01",
    source: "Yemen Parliament",
    abstract: "Comprehensive banking law governing all banking operations in Yemen",
    tags: ["banking law", "financial regulation"],
    language: "both"
  },
  {
    id: "ymn-001",
    titleEn: "Microfinance in Yemen: Impact of War (July 2015)",
    titleAr: "التمويل الأصغر في اليمن: أثر الحرب (يوليو 2015)",
    category: "ymn",
    date: "2015-07-01",
    source: "Yemen Microfinance Network",
    externalUrl: "https://yemennetwork.org",
    abstract: "Comprehensive assessment of war impact on microfinance sector",
    tags: ["microfinance", "war impact", "financial inclusion"],
    language: "en"
  },
  {
    id: "research-001",
    titleEn: "Yemen Economic Monitor - Spring 2024",
    titleAr: "مرصد اليمن الاقتصادي - ربيع 2024",
    category: "international",
    date: "2024-04-01",
    source: "World Bank",
    externalUrl: "https://www.worldbank.org/en/country/yemen",
    abstract: "Latest economic developments and outlook for Yemen",
    tags: ["economic analysis", "world bank", "GDP"],
    language: "en"
  },
  {
    id: "research-002",
    titleEn: "Enhancing the Role of Microfinance Banks for Sustainable Development",
    titleAr: "تعزيز دور بنوك التمويل الأصغر للتنمية المستدامة",
    category: "research",
    date: "2024-09-23",
    source: "Sana'a Center for Strategic Studies",
    externalUrl: "https://sanaacenter.org",
    abstract: "Analysis of microfinance sector transformation and recommendations",
    tags: ["microfinance", "sustainable development", "banking"],
    language: "both"
  }
];

export default function DocumentLibrary() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [documents] = useState<Document[]>(SAMPLE_DOCUMENTS);

  // Filter documents
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = searchQuery === "" || 
      doc.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.titleAr.includes(searchQuery) ||
      doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
    
    const matchesYear = selectedYear === "all" || doc.date.startsWith(selectedYear);
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  const categories = [
    { value: "all", labelEn: "All Documents", labelAr: "جميع الوثائق", icon: FileText },
    { value: "cby_aden", labelEn: "CBY Aden Directives", labelAr: "تعاميم البنك المركزي - عدن", icon: Building2 },
    { value: "cby_sanaa", labelEn: "CBY Sana'a Directives", labelAr: "تعاميم البنك المركزي - صنعاء", icon: Building2 },
    { value: "laws", labelEn: "Laws & Regulations", labelAr: "القوانين والأنظمة", icon: Scale },
    { value: "research", labelEn: "Research Papers", labelAr: "الأبحاث والدراسات", icon: BookOpen },
    { value: "ymn", labelEn: "YMN Library", labelAr: "مكتبة شبكة التمويل الأصغر", icon: BookOpen },
    { value: "international", labelEn: "International Reports", labelAr: "التقارير الدولية", icon: FileText }
  ];

  const years = ["all", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010"];

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case "cby_aden": return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "cby_sanaa": return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "laws": return "bg-purple-500/10 text-purple-700 dark:text-purple-400";
      case "research": return "bg-orange-500/10 text-orange-700 dark:text-orange-400";
      case "ymn": return "bg-teal-500/10 text-teal-700 dark:text-teal-400";
      case "international": return "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400";
      default: return "bg-gray-500/10 text-gray-700 dark:text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {isArabic ? "مكتبة الوثائق" : "Document Library"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isArabic
              ? "مستودع شامل لجميع الوثائق الاقتصادية والمالية المتعلقة باليمن (2010-2025)"
              : "Comprehensive repository of all Yemen economic and financial documents (2010-2025)"}
          </p>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              {isArabic ? "البحث والتصفية" : "Search & Filter"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search Input */}
              <div className="md:col-span-1">
                <Input
                  placeholder={isArabic ? "ابحث في الوثائق..." : "Search documents..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Category Filter */}
              <div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder={isArabic ? "الفئة" : "Category"} />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {isArabic ? cat.labelAr : cat.labelEn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Year Filter */}
              <div>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue placeholder={isArabic ? "السنة" : "Year"} />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map(year => (
                      <SelectItem key={year} value={year}>
                        {year === "all" ? (isArabic ? "جميع السنوات" : "All Years") : year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-muted-foreground">
              {isArabic
                ? `${filteredDocuments.length} وثيقة`
                : `${filteredDocuments.length} documents`}
            </div>
          </CardContent>
        </Card>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-7 h-auto">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <TabsTrigger key={cat.value} value={cat.value} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="hidden md:inline">{isArabic ? cat.labelAr : cat.labelEn}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map(doc => (
            <Card key={doc.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg line-clamp-2">
                    {isArabic ? doc.titleAr : doc.titleEn}
                  </CardTitle>
                  <Badge className={getCategoryBadgeColor(doc.category)}>
                    {categories.find(c => c.value === doc.category)?.[isArabic ? "labelAr" : "labelEn"]}
                  </Badge>
                </div>
                <CardDescription className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  {new Date(doc.date).toLocaleDateString(isArabic ? "ar-YE" : "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Abstract */}
                {doc.abstract && (
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {doc.abstract}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {doc.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Source */}
                <div className="text-xs text-muted-foreground">
                  {isArabic ? "المصدر: " : "Source: "}{doc.source}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {doc.fileUrl && (
                    <Button size="sm" variant="default" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      {isArabic ? "تحميل" : "Download"}
                    </Button>
                  )}
                  {doc.externalUrl && (
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={doc.externalUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {isArabic ? "عرض" : "View"}
                      </a>
                    </Button>
                  )}
                  {!doc.fileUrl && !doc.externalUrl && (
                    <Button size="sm" variant="outline" className="flex-1" disabled>
                      <Eye className="h-4 w-4 mr-2" />
                      {isArabic ? "قريباً" : "Coming Soon"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredDocuments.length === 0 && (
          <Card className="p-12">
            <div className="text-center space-y-4">
              <FileText className="h-16 w-16 mx-auto text-muted-foreground opacity-50" />
              <h3 className="text-xl font-semibold">
                {isArabic ? "لا توجد وثائق" : "No documents found"}
              </h3>
              <p className="text-muted-foreground">
                {isArabic
                  ? "جرب تغيير معايير البحث أو التصفية"
                  : "Try changing your search or filter criteria"}
              </p>
            </div>
          </Card>
        )}

        {/* Upload Section (Admin Only) */}
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              {isArabic ? "رفع وثيقة جديدة" : "Upload New Document"}
            </CardTitle>
            <CardDescription>
              {isArabic
                ? "للمساهمة في إثراء المكتبة، يرجى التواصل مع فريق المرصد"
                : "To contribute to the library, please contact the observatory team"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" disabled>
              <Upload className="h-4 w-4 mr-2" />
              {isArabic ? "قريباً - نظام الرفع قيد التطوير" : "Coming Soon - Upload System Under Development"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
