import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, Download, ExternalLink, Filter, Search, 
  Building2, Calendar, Tag, Globe, FileText, BarChart3,
  TrendingUp, Users, DollarSign, AlertCircle
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Publication {
  id: string;
  title: { ar: string; en: string };
  organization: string;
  year: number;
  type: string;
  language: string[];
  topics: string[];
  description: { ar: string; en: string };
  url: string;
  pages?: number;
  featured?: boolean;
}

export default function ResearchLibrary() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrg, setSelectedOrg] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");

  const publications: Publication[] = [
    {
      id: "wb-fmi-2025",
      title: {
        ar: "مشروع البنية التحتية للسوق المالي والشمول المالي في اليمن",
        en: "Yemen Financial Market Infrastructure and Financial Inclusion Project"
      },
      organization: "World Bank",
      year: 2025,
      type: "Project Document",
      language: ["en", "ar"],
      topics: ["Financial Infrastructure", "Digital Payments", "Financial Inclusion"],
      description: {
        ar: "منحة بقيمة 20 مليون دولار لتحديث البنية التحتية للمدفوعات وتعزيز الشمول المالي في المناطق الخاضعة لسيطرة الحكومة المعترف بها دولياً",
        en: "$20M grant to modernize payment infrastructure and enhance financial inclusion in IRG-controlled areas"
      },
      url: "https://www.worldbank.org/en/country/yemen",
      pages: 156,
      featured: true
    },
    {
      id: "imf-yemen-2024",
      title: {
        ar: "اليمن: مشاورات المادة الرابعة لعام 2024",
        en: "Yemen: 2024 Article IV Consultation"
      },
      organization: "IMF",
      year: 2024,
      type: "Staff Report",
      language: ["en"],
      topics: ["Macroeconomic Analysis", "Exchange Rate", "Fiscal Policy"],
      description: {
        ar: "تقييم شامل للوضع الاقتصادي الكلي، بما في ذلك تحليل أزمة سعر الصرف وتأثير الانقسام المؤسسي على الاستقرار المالي",
        en: "Comprehensive macroeconomic assessment including exchange rate crisis analysis and institutional fragmentation impact"
      },
      url: "https://www.imf.org/en/Countries/YEM",
      pages: 89,
      featured: true
    },
    {
      id: "undp-yemen-2024",
      title: {
        ar: "تقرير التنمية البشرية في اليمن 2024",
        en: "Yemen Human Development Report 2024"
      },
      organization: "UNDP",
      year: 2024,
      type: "Report",
      language: ["en", "ar"],
      topics: ["Poverty", "Humanitarian Crisis", "Development"],
      description: {
        ar: "تحليل معمق لتأثير الصراع على التنمية البشرية، مع التركيز على الفقر المتعدد الأبعاد والوصول إلى الخدمات الأساسية",
        en: "In-depth analysis of conflict impact on human development, focusing on multidimensional poverty and access to basic services"
      },
      url: "https://www.undp.org/yemen",
      pages: 124
    },
    {
      id: "wb-yem-update-2024",
      title: {
        ar: "التحديث الاقتصادي لليمن - أكتوبر 2024",
        en: "Yemen Economic Update - October 2024"
      },
      organization: "World Bank",
      year: 2024,
      type: "Economic Update",
      language: ["en", "ar"],
      topics: ["GDP", "Inflation", "Exchange Rate"],
      description: {
        ar: "تحليل ربع سنوي للمؤشرات الاقتصادية الرئيسية، بما في ذلك انهيار الريال وتأثيره على الفقر والأمن الغذائي",
        en: "Quarterly analysis of key economic indicators, including rial collapse and its impact on poverty and food security"
      },
      url: "https://www.worldbank.org/en/country/yemen/publication",
      pages: 45,
      featured: true
    },
    {
      id: "sanaa-center-2024",
      title: {
        ar: "الاقتصاد اليمني: التحديات والفرص في عام 2024",
        en: "Yemen's Economy: Challenges and Opportunities in 2024"
      },
      organization: "Sana'a Center",
      year: 2024,
      type: "Policy Brief",
      language: ["en", "ar"],
      topics: ["Economic Policy", "Central Bank", "Currency"],
      description: {
        ar: "تحليل سياسات البنك المركزي في صنعاء وعدن، مع تقييم فعالية التدخلات النقدية في استقرار العملة",
        en: "Analysis of CBY-Sana'a and CBY-Aden policies, evaluating effectiveness of monetary interventions in currency stabilization"
      },
      url: "https://sanaacenter.org",
      pages: 32
    },
    {
      id: "acaps-yemen-2023",
      title: {
        ar: "تحليل الأزمة الإنسانية في اليمن 2023",
        en: "Yemen Humanitarian Crisis Analysis 2023"
      },
      organization: "ACAPS",
      year: 2023,
      type: "Analysis Report",
      language: ["en"],
      topics: ["Humanitarian Crisis", "Food Security", "Aid"],
      description: {
        ar: "تقييم شامل للاحتياجات الإنسانية، مع التركيز على انعدام الأمن الغذائي والنزوح وتأثير الانهيار الاقتصادي على الفئات الضعيفة",
        en: "Comprehensive needs assessment focusing on food insecurity, displacement, and economic collapse impact on vulnerable populations"
      },
      url: "https://www.acaps.org/country/yemen",
      pages: 67
    },
    {
      id: "chatham-house-2023",
      title: {
        ar: "الاقتصاد السياسي للصراع في اليمن",
        en: "The Political Economy of Conflict in Yemen"
      },
      organization: "Chatham House",
      year: 2023,
      type: "Research Paper",
      language: ["en"],
      topics: ["Political Economy", "Conflict", "Financial Flows"],
      description: {
        ar: "دراسة معمقة لاقتصاديات الحرب، بما في ذلك التدفقات المالية عبر الحدود ودور الفاعلين الإقليميين في النظام المالي اليمني",
        en: "In-depth study of war economics, including cross-border financial flows and regional actors' role in Yemen's financial system"
      },
      url: "https://www.chathamhouse.org",
      pages: 78
    },
    {
      id: "devchampions-2023",
      title: {
        ar: "التمويل الأصغر في اليمن: الصمود في مواجهة الأزمة",
        en: "Microfinance in Yemen: Resilience Amid Crisis"
      },
      organization: "DeepRoot Consulting / DevChampions",
      year: 2023,
      type: "Sector Study",
      language: ["en", "ar"],
      topics: ["Microfinance", "Financial Inclusion", "SMEs"],
      description: {
        ar: "تحليل قطاع التمويل الأصغر ودوره في دعم المشاريع الصغيرة والمتوسطة خلال الصراع، مع دراسات حالة من مختلف المناطق",
        en: "Analysis of microfinance sector and its role in supporting SMEs during conflict, with case studies from various regions"
      },
      url: "https://devchampions.org",
      pages: 54
    },
    {
      id: "crisis-group-2022",
      title: {
        ar: "إنهاء الحرب الاقتصادية في اليمن",
        en: "Ending Yemen's Economic War"
      },
      organization: "International Crisis Group",
      year: 2022,
      type: "Policy Report",
      language: ["en", "ar"],
      topics: ["Economic Policy", "Peace Process", "Central Bank"],
      description: {
        ar: "توصيات سياسية لإنهاء الحرب الاقتصادية، بما في ذلك إعادة توحيد البنك المركزي وإصلاح السياسات النقدية",
        en: "Policy recommendations for ending economic warfare, including CBY reunification and monetary policy reforms"
      },
      url: "https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/yemen",
      pages: 42,
      featured: true
    },
    {
      id: "wb-ppa-2021",
      title: {
        ar: "تقييم الفقر والأثر الاجتماعي في اليمن",
        en: "Yemen Poverty and Social Impact Assessment"
      },
      organization: "World Bank",
      year: 2021,
      type: "Assessment Report",
      language: ["en"],
      topics: ["Poverty", "Social Impact", "Inequality"],
      description: {
        ar: "تقييم شامل لمستويات الفقر وتوزيع الدخل، مع تحليل تأثير السياسات الاقتصادية على الفئات الأكثر ضعفاً",
        en: "Comprehensive assessment of poverty levels and income distribution, analyzing economic policies' impact on most vulnerable groups"
      },
      url: "https://www.worldbank.org/en/country/yemen",
      pages: 112
    },
    {
      id: "cfe-yemen-2020",
      title: {
        ar: "اقتصاديات الصراع في اليمن",
        en: "The Economics of Conflict in Yemen"
      },
      organization: "Centre for Financial Economics",
      year: 2020,
      type: "Research Study",
      language: ["en"],
      topics: ["Conflict Economics", "Trade", "Smuggling"],
      description: {
        ar: "دراسة اقتصاديات الصراع، بما في ذلك شبكات التهريب والتجارة غير المشروعة وتأثيرها على الاقتصاد الرسمي",
        en: "Study of conflict economics, including smuggling networks, illicit trade, and their impact on formal economy"
      },
      url: "https://cfe-dmha.org",
      pages: 95
    },
    {
      id: "unhcr-yemen-2020",
      title: {
        ar: "النزوح والاقتصاد في اليمن",
        en: "Displacement and Economy in Yemen"
      },
      organization: "UNHCR",
      year: 2020,
      type: "Report",
      language: ["en", "ar"],
      topics: ["Displacement", "Labor Market", "Livelihoods"],
      description: {
        ar: "تحليل تأثير النزوح الداخلي على سوق العمل وسبل العيش، مع التركيز على التحديات الاقتصادية للنازحين",
        en: "Analysis of internal displacement impact on labor market and livelihoods, focusing on economic challenges of IDPs"
      },
      url: "https://www.unhcr.org/yemen",
      pages: 58
    },
    {
      id: "brookings-yemen-2019",
      title: {
        ar: "إعادة بناء الاقتصاد اليمني: استراتيجيات للتعافي",
        en: "Rebuilding Yemen's Economy: Strategies for Recovery"
      },
      organization: "Brookings Institution",
      year: 2019,
      type: "Policy Paper",
      language: ["en"],
      topics: ["Economic Recovery", "Reconstruction", "Development"],
      description: {
        ar: "استراتيجيات مقترحة لإعادة بناء الاقتصاد اليمني بعد الصراع، مع التركيز على الإصلاحات المؤسسية والاستثمار في البنية التحتية",
        en: "Proposed strategies for post-conflict economic reconstruction, focusing on institutional reforms and infrastructure investment"
      },
      url: "https://www.brookings.edu",
      pages: 71
    },
    {
      id: "fao-yemen-2019",
      title: {
        ar: "الأمن الغذائي والزراعة في اليمن",
        en: "Food Security and Agriculture in Yemen"
      },
      organization: "FAO",
      year: 2019,
      type: "Assessment",
      language: ["en", "ar"],
      topics: ["Food Security", "Agriculture", "Rural Economy"],
      description: {
        ar: "تقييم الأمن الغذائي والقطاع الزراعي، مع تحليل تأثير الصراع على الإنتاج الزراعي والاقتصاد الريفي",
        en: "Food security and agricultural sector assessment, analyzing conflict impact on agricultural production and rural economy"
      },
      url: "https://www.fao.org/yemen",
      pages: 83
    },
    {
      id: "odi-yemen-2018",
      title: {
        ar: "السياسة النقدية في سياق الصراع: حالة اليمن",
        en: "Monetary Policy in Conflict Context: The Case of Yemen"
      },
      organization: "ODI",
      year: 2018,
      type: "Working Paper",
      language: ["en"],
      topics: ["Monetary Policy", "Central Bank", "Inflation"],
      description: {
        ar: "دراسة تحديات السياسة النقدية في سياق الصراع، مع التركيز على انقسام البنك المركزي وتأثيره على الاستقرار النقدي",
        en: "Study of monetary policy challenges in conflict context, focusing on CBY split and its impact on monetary stability"
      },
      url: "https://odi.org",
      pages: 49
    },
    {
      id: "wb-yem-2017",
      title: {
        ar: "تقييم الأضرار والاحتياجات في اليمن",
        en: "Yemen Dynamic Needs Assessment"
      },
      organization: "World Bank / UN / EU",
      year: 2017,
      type: "Assessment Report",
      language: ["en", "ar"],
      topics: ["Infrastructure", "Reconstruction", "Economic Damage"],
      description: {
        ar: "تقييم شامل للأضرار الاقتصادية والبنية التحتية، مع تقدير تكاليف إعادة الإعمار واحتياجات التعافي",
        en: "Comprehensive assessment of economic and infrastructure damage, estimating reconstruction costs and recovery needs"
      },
      url: "https://www.worldbank.org/en/country/yemen",
      pages: 178,
      featured: true
    },
    {
      id: "csis-yemen-2016",
      title: {
        ar: "الاقتصاد السياسي للحرب في اليمن",
        en: "The Political Economy of War in Yemen"
      },
      organization: "CSIS",
      year: 2016,
      type: "Analysis",
      language: ["en"],
      topics: ["Political Economy", "War Economics", "Regional Powers"],
      description: {
        ar: "تحليل الاقتصاد السياسي للحرب، بما في ذلك دور القوى الإقليمية والفاعلين المحليين في تشكيل المشهد الاقتصادي",
        en: "Analysis of war's political economy, including regional powers and local actors' role in shaping economic landscape"
      },
      url: "https://www.csis.org",
      pages: 63
    },
    {
      id: "imf-yemen-2015",
      title: {
        ar: "اليمن: تقييم الاستقرار المالي",
        en: "Yemen: Financial Stability Assessment"
      },
      organization: "IMF",
      year: 2015,
      type: "Staff Report",
      language: ["en"],
      topics: ["Financial Stability", "Banking Sector", "Risks"],
      description: {
        ar: "تقييم الاستقرار المالي قبل تصاعد الصراع، يوفر خط أساس لفهم التدهور اللاحق في القطاع المصرفي",
        en: "Pre-escalation financial stability assessment, providing baseline for understanding subsequent banking sector deterioration"
      },
      url: "https://www.imf.org/en/Countries/YEM",
      pages: 92
    }
  ];

  const organizations = [
    "World Bank", "IMF", "UNDP", "Sana'a Center", "ACAPS", 
    "Chatham House", "International Crisis Group", "Brookings Institution",
    "FAO", "UNHCR", "ODI", "CSIS", "DeepRoot Consulting / DevChampions"
  ];

  const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

  const topics = [
    "Financial Infrastructure", "Digital Payments", "Macroeconomic Analysis",
    "Exchange Rate", "Poverty", "Central Bank", "Humanitarian Crisis",
    "Political Economy", "Microfinance", "Food Security", "Conflict Economics",
    "Banking Sector", "Economic Recovery"
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = searchQuery === "" || 
      pub.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.description[language].toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesOrg = selectedOrg === "all" || pub.organization === selectedOrg;
    const matchesYear = selectedYear === "all" || pub.year === parseInt(selectedYear);
    const matchesTopic = selectedTopic === "all" || pub.topics.includes(selectedTopic);

    return matchesSearch && matchesOrg && matchesYear && matchesTopic;
  });

  const getOrgIcon = (org: string) => {
    if (org.includes("World Bank") || org.includes("IMF")) return DollarSign;
    if (org.includes("UN") || org.includes("UNDP") || org.includes("UNHCR") || org.includes("FAO")) return Globe;
    if (org.includes("Crisis") || org.includes("ACAPS")) return AlertCircle;
    return Building2;
  };

  const getOrgColor = (org: string) => {
    if (org.includes("World Bank")) return "bg-blue-100 text-blue-700";
    if (org.includes("IMF")) return "bg-green-100 text-green-700";
    if (org.includes("UN") || org.includes("UNDP")) return "bg-cyan-100 text-cyan-700";
    if (org.includes("Sana'a Center")) return "bg-purple-100 text-purple-700";
    if (org.includes("Crisis Group")) return "bg-red-100 text-red-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="w-full py-12">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            <BookOpen className="h-4 w-4 mr-2" />
            {isArabic ? "مكتبة الأبحاث" : "Research Library"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic 
              ? "أدبيات الاقتصاد المالي اليمني" 
              : "Yemen Financial & Economic Literature"
            }
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isArabic
              ? "مجموعة شاملة من أقوى المنشورات والأبحاث من المؤسسات الدولية الموثوقة حول الأزمة المالية والاقتصادية في اليمن (2015-2025)"
              : "Comprehensive collection of the most authoritative publications and research from credible international institutions on Yemen's financial and economic crisis (2015-2025)"
            }
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold">{publications.length}</div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "منشور" : "Publications"}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold">{organizations.length}</div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "مؤسسة" : "Organizations"}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold">11</div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "سنة" : "Years"}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold">
                {publications.reduce((sum, pub) => sum + (pub.pages || 0), 0).toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "صفحة" : "Pages"}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              {isArabic ? "تصفية المنشورات" : "Filter Publications"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={isArabic ? "بحث..." : "Search..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Organization Filter */}
              <select
                value={selectedOrg}
                onChange={(e) => setSelectedOrg(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="all">{isArabic ? "جميع المؤسسات" : "All Organizations"}</option>
                {organizations.map(org => (
                  <option key={org} value={org}>{org}</option>
                ))}
              </select>

              {/* Year Filter */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="all">{isArabic ? "جميع السنوات" : "All Years"}</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>

              {/* Topic Filter */}
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="all">{isArabic ? "جميع المواضيع" : "All Topics"}</option>
                {topics.map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>

            {/* Active Filters Display */}
            {(selectedOrg !== "all" || selectedYear !== "all" || selectedTopic !== "all" || searchQuery) && (
              <div className="flex flex-wrap gap-2 mt-4">
                {searchQuery && (
                  <Badge variant="secondary">
                    {isArabic ? "بحث" : "Search"}: {searchQuery}
                  </Badge>
                )}
                {selectedOrg !== "all" && (
                  <Badge variant="secondary">{selectedOrg}</Badge>
                )}
                {selectedYear !== "all" && (
                  <Badge variant="secondary">{selectedYear}</Badge>
                )}
                {selectedTopic !== "all" && (
                  <Badge variant="secondary">{selectedTopic}</Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedOrg("all");
                    setSelectedYear("all");
                    setSelectedTopic("all");
                  }}
                >
                  {isArabic ? "مسح الكل" : "Clear All"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {isArabic 
              ? `عرض ${filteredPublications.length} من ${publications.length} منشور`
              : `Showing ${filteredPublications.length} of ${publications.length} publications`
            }
          </p>
        </div>

        {/* Featured Publications */}
        {filteredPublications.some(pub => pub.featured) && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              {isArabic ? "منشورات مميزة" : "Featured Publications"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPublications.filter(pub => pub.featured).map(pub => {
                const OrgIcon = getOrgIcon(pub.organization);
                return (
                  <Card key={pub.id} className="border-2 border-primary/20 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <Badge className={getOrgColor(pub.organization)}>
                          <OrgIcon className="h-3 w-3 mr-1" />
                          {pub.organization}
                        </Badge>
                        <Badge variant="outline">{pub.year}</Badge>
                      </div>
                      <CardTitle className="text-xl leading-tight">
                        {pub.title[language]}
                      </CardTitle>
                      <CardDescription>{pub.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {pub.description[language]}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pub.topics.slice(0, 3).map(topic => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          {pub.pages && (
                            <span className="flex items-center gap-1">
                              <FileText className="h-4 w-4" />
                              {pub.pages} {isArabic ? "صفحة" : "pages"}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Globe className="h-4 w-4" />
                            {pub.language.join(", ").toUpperCase()}
                          </span>
                        </div>
                        <Button size="sm" asChild>
                          <a href={pub.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {isArabic ? "عرض" : "View"}
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* All Publications */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            {isArabic ? "جميع المنشورات" : "All Publications"}
          </h2>
          <div className="space-y-4">
            {filteredPublications.filter(pub => !pub.featured).map(pub => {
              const OrgIcon = getOrgIcon(pub.organization);
              return (
                <Card key={pub.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`h-10 w-10 rounded-lg ${getOrgColor(pub.organization)} flex items-center justify-center flex-shrink-0`}>
                            <OrgIcon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-lg leading-tight">
                                {pub.title[language]}
                              </h3>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{pub.organization}</span>
                              <span>•</span>
                              <span>{pub.year}</span>
                              <span>•</span>
                              <span>{pub.type}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {pub.description[language]}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pub.topics.map(topic => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 md:items-end justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          {pub.pages && (
                            <span>{pub.pages} {isArabic ? "ص" : "p"}</span>
                          )}
                          <Badge variant="secondary" className="text-xs">
                            {pub.language.join("/").toUpperCase()}
                          </Badge>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <a href={pub.url} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4 mr-2" />
                            {isArabic ? "الوصول" : "Access"}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* No Results */}
        {filteredPublications.length === 0 && (
          <Card className="p-12 text-center">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">
              {isArabic ? "لا توجد نتائج" : "No Results Found"}
            </h3>
            <p className="text-muted-foreground mb-4">
              {isArabic 
                ? "جرب تعديل معايير البحث أو التصفية"
                : "Try adjusting your search or filter criteria"
              }
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedOrg("all");
                setSelectedYear("all");
                setSelectedTopic("all");
              }}
            >
              {isArabic ? "مسح جميع التصفيات" : "Clear All Filters"}
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
