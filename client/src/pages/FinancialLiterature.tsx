import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Building2, FileText, Calendar, Download, Search, ExternalLink } from "lucide-react";

interface Publication {
  id: string;
  title: string;
  titleAr: string;
  institution: string;
  institutionAr: string;
  year: number;
  pages: number;
  type: "report" | "paper" | "brief" | "study";
  topic: string[];
  topicAr: string[];
  url: string;
  description: string;
  descriptionAr: string;
}

const publications: Publication[] = [
  {
    id: "wb-2025-spring",
    title: "Yemen Economic Monitor - Spring 2025",
    titleAr: "مرصد الاقتصاد اليمني - ربيع 2025",
    institution: "World Bank",
    institutionAr: "البنك الدولي",
    year: 2025,
    pages: 45,
    type: "report",
    topic: ["economy", "gdp", "inflation", "poverty"],
    topicAr: ["اقتصاد", "ناتج محلي", "تضخم", "فقر"],
    url: "https://documents1.worldbank.org/curated/en/099822505292530706/pdf/IDU-7009880b-d070-472d-9bf2-5cc72a3fc75d.pdf",
    description: "Comprehensive analysis of Yemen's economic situation including GDP contraction, inflation trends, and poverty levels",
    descriptionAr: "تحليل شامل للوضع الاقتصادي في اليمن بما في ذلك انكماش الناتج المحلي واتجاهات التضخم ومستويات الفقر"
  },
  {
    id: "imf-2025-art4",
    title: "IMF Article IV Consultation - October 2025",
    titleAr: "مشاورات صندوق النقد الدولي المادة الرابعة - أكتوبر 2025",
    institution: "International Monetary Fund",
    institutionAr: "صندوق النقد الدولي",
    year: 2025,
    pages: 78,
    type: "report",
    topic: ["monetary", "fiscal", "banking", "exchange-rate"],
    topicAr: ["نقدي", "مالي", "مصرفي", "سعر-صرف"],
    url: "https://www.imf.org/en/Publications/CR/Issues/2025/10/15/yemen-2025-article-iv-consultation",
    description: "First IMF consultation in 11 years covering monetary policy, fiscal sustainability, and banking sector reforms",
    descriptionAr: "أول مشاورة لصندوق النقد الدولي منذ 11 عاماً تغطي السياسة النقدية والاستدامة المالية وإصلاحات القطاع المصرفي"
  },
  {
    id: "un-poe-2025",
    title: "UN Panel of Experts Report on Yemen - S/2025/650",
    titleAr: "تقرير فريق خبراء الأمم المتحدة بشأن اليمن - S/2025/650",
    institution: "United Nations Security Council",
    institutionAr: "مجلس الأمن التابع للأمم المتحدة",
    year: 2025,
    pages: 156,
    type: "report",
    topic: ["sanctions", "violations", "arms", "economy"],
    topicAr: ["عقوبات", "انتهاكات", "أسلحة", "اقتصاد"],
    url: "https://www.securitycouncilreport.org/un-documents/yemen/",
    description: "Comprehensive report on sanctions violations, arms transfers, and economic warfare tactics",
    descriptionAr: "تقرير شامل عن انتهاكات العقوبات ونقل الأسلحة وتكتيكات الحرب الاقتصادية"
  },
  {
    id: "ocha-hno-2025",
    title: "Humanitarian Needs Overview 2025",
    titleAr: "نظرة عامة على الاحتياجات الإنسانية 2025",
    institution: "UN OCHA",
    institutionAr: "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية",
    year: 2025,
    pages: 92,
    type: "report",
    topic: ["humanitarian", "food-security", "health", "displacement"],
    topicAr: ["إنساني", "أمن-غذائي", "صحة", "نزوح"],
    url: "https://reliefweb.int/report/yemen/yemen-humanitarian-needs-overview-2025",
    description: "Assessment of humanitarian needs affecting 21.6 million people requiring assistance",
    descriptionAr: "تقييم الاحتياجات الإنسانية التي تؤثر على 21.6 مليون شخص يحتاجون إلى المساعدة"
  },
  {
    id: "unhcr-2024",
    title: "UNHCR Annual Results Report 2024 - Yemen",
    titleAr: "تقرير النتائج السنوية للمفوضية السامية للأمم المتحدة لشؤون اللاجئين 2024 - اليمن",
    institution: "UNHCR",
    institutionAr: "المفوضية السامية للأمم المتحدة لشؤون اللاجئين",
    year: 2024,
    pages: 34,
    type: "report",
    topic: ["refugees", "idps", "protection", "assistance"],
    topicAr: ["لاجئون", "نازحون", "حماية", "مساعدة"],
    url: "https://reporting.unhcr.org/yemen",
    description: "Overview of refugee and IDP situation, protection challenges, and humanitarian response",
    descriptionAr: "نظرة عامة على وضع اللاجئين والنازحين داخلياً وتحديات الحماية والاستجابة الإنسانية"
  },
  {
    id: "fews-2025",
    title: "Yemen Food Security Outlook - January to September 2025",
    titleAr: "توقعات الأمن الغذائي في اليمن - يناير إلى سبتمبر 2025",
    institution: "FEWS NET",
    institutionAr: "شبكة نظم الإنذار المبكر بالمجاعة",
    year: 2025,
    pages: 28,
    type: "brief",
    topic: ["food-security", "famine", "agriculture", "prices"],
    topicAr: ["أمن-غذائي", "مجاعة", "زراعة", "أسعار"],
    url: "https://fews.net/east-africa/yemen",
    description: "Food security analysis and projections for Yemen covering acute food insecurity phases",
    descriptionAr: "تحليل الأمن الغذائي وتوقعات اليمن التي تغطي مراحل انعدام الأمن الغذائي الحاد"
  },
  {
    id: "sanaa-center-2024-banking",
    title: "Yemen's Banking Crisis: Fragmentation and Economic Warfare",
    titleAr: "أزمة القطاع المصرفي في اليمن: التفتت والحرب الاقتصادية",
    institution: "Sana'a Center for Strategic Studies",
    institutionAr: "مركز صنعاء للدراسات الاستراتيجية",
    year: 2024,
    pages: 67,
    type: "study",
    topic: ["banking", "central-bank", "currency", "financial-sector"],
    topicAr: ["مصرفي", "بنك-مركزي", "عملة", "قطاع-مالي"],
    url: "https://sanaacenter.org/publications/analysis/",
    description: "In-depth analysis of the dual banking system and its impact on Yemen's economy",
    descriptionAr: "تحليل معمق للنظام المصرفي المزدوج وتأثيره على اقتصاد اليمن"
  },
  {
    id: "wb-2024-mpo",
    title: "Yemen Macro Poverty Outlook 2024",
    titleAr: "توقعات الفقر الكلي في اليمن 2024",
    institution: "World Bank",
    institutionAr: "البنك الدولي",
    year: 2024,
    pages: 12,
    type: "brief",
    topic: ["poverty", "economy", "projections"],
    topicAr: ["فقر", "اقتصاد", "توقعات"],
    url: "https://www.worldbank.org/en/country/yemen/publication/macro-poverty-outlook",
    description: "Short-term economic and poverty projections for Yemen",
    descriptionAr: "توقعات اقتصادية وفقر قصيرة الأجل لليمن"
  },
  {
    id: "imf-2021-sdr",
    title: "IMF Special Drawing Rights Allocation to Yemen - 2021",
    titleAr: "تخصيص حقوق السحب الخاصة لصندوق النقد الدولي لليمن - 2021",
    institution: "International Monetary Fund",
    institutionAr: "صندوق النقد الدولي",
    year: 2021,
    pages: 8,
    type: "brief",
    topic: ["monetary", "sdr", "reserves"],
    topicAr: ["نقدي", "حقوق-سحب", "احتياطيات"],
    url: "https://www.imf.org/en/Topics/special-drawing-right",
    description: "Details of the $665 million SDR allocation to Yemen for COVID-19 response",
    descriptionAr: "تفاصيل تخصيص 665 مليون دولار من حقوق السحب الخاصة لليمن للاستجابة لكوفيد-19"
  },
  {
    id: "sanaa-center-2023-oil",
    title: "Yemen's Oil and Gas Sector: Control, Revenue, and Conflict",
    titleAr: "قطاع النفط والغاز في اليمن: السيطرة والإيرادات والصراع",
    institution: "Sana'a Center for Strategic Studies",
    institutionAr: "مركز صنعاء للدراسات الاستراتيجية",
    year: 2023,
    pages: 89,
    type: "study",
    topic: ["oil", "gas", "energy", "revenues"],
    topicAr: ["نفط", "غاز", "طاقة", "إيرادات"],
    url: "https://sanaacenter.org/publications/analysis/",
    description: "Comprehensive analysis of oil and gas production, export blockades, and revenue disputes",
    descriptionAr: "تحليل شامل لإنتاج النفط والغاز وحصار التصدير ونزاعات الإيرادات"
  },
  {
    id: "chatham-house-2023",
    title: "Yemen's Economic Collapse and the Role of External Actors",
    titleAr: "الانهيار الاقتصادي في اليمن ودور الجهات الخارجية",
    institution: "Chatham House",
    institutionAr: "تشاتام هاوس",
    year: 2023,
    pages: 54,
    type: "paper",
    topic: ["economy", "saudi", "uae", "iran", "international"],
    topicAr: ["اقتصاد", "سعودية", "إمارات", "إيران", "دولي"],
    url: "https://www.chathamhouse.org/",
    description: "Analysis of how regional and international actors have shaped Yemen's economic trajectory",
    descriptionAr: "تحليل كيف شكلت الجهات الإقليمية والدولية المسار الاقتصادي لليمن"
  },
  {
    id: "acaps-2024",
    title: "Yemen Crisis Analysis - Economic Drivers of Humanitarian Needs",
    titleAr: "تحليل أزمة اليمن - المحركات الاقتصادية للاحتياجات الإنسانية",
    institution: "ACAPS",
    institutionAr: "ACAPS",
    year: 2024,
    pages: 42,
    type: "report",
    topic: ["humanitarian", "economy", "crisis", "analysis"],
    topicAr: ["إنساني", "اقتصاد", "أزمة", "تحليل"],
    url: "https://www.acaps.org/countries/yemen",
    description: "Analysis of how economic factors drive humanitarian needs in Yemen",
    descriptionAr: "تحليل كيف تدفع العوامل الاقتصادية الاحتياجات الإنسانية في اليمن"
  },
  {
    id: "devchamp-2024-microfinance",
    title: "Microfinance in Yemen: Resilience Amid Conflict",
    titleAr: "التمويل الأصغر في اليمن: الصمود وسط الصراع",
    institution: "Development Champions",
    institutionAr: "أبطال التنمية",
    year: 2024,
    pages: 38,
    type: "study",
    topic: ["microfinance", "financial-inclusion", "sfd"],
    topicAr: ["تمويل-أصغر", "شمول-مالي", "صندوق-اجتماعي"],
    url: "https://www.devchampions.org/",
    description: "Study of microfinance sector performance and challenges during the conflict",
    descriptionAr: "دراسة أداء قطاع التمويل الأصغر والتحديات خلال الصراع"
  },
  {
    id: "csis-2023-yemen",
    title: "Yemen's Fragmented Economy: Pathways to Stabilization",
    titleAr: "اقتصاد اليمن المجزأ: مسارات الاستقرار",
    institution: "Center for Strategic and International Studies",
    institutionAr: "مركز الدراسات الاستراتيجية والدولية",
    year: 2023,
    pages: 71,
    type: "study",
    topic: ["economy", "stabilization", "reconstruction", "policy"],
    topicAr: ["اقتصاد", "استقرار", "إعمار", "سياسة"],
    url: "https://www.csis.org/programs/middle-east-program/yemen",
    description: "Policy recommendations for economic stabilization and reconstruction in Yemen",
    descriptionAr: "توصيات سياسية للاستقرار الاقتصادي وإعادة الإعمار في اليمن"
  },
  {
    id: "mei-2024-currency",
    title: "The Currency War in Yemen: Monetary Policy as a Weapon",
    titleAr: "حرب العملة في اليمن: السياسة النقدية كسلاح",
    institution: "Middle East Institute",
    institutionAr: "معهد الشرق الأوسط",
    year: 2024,
    pages: 29,
    type: "paper",
    topic: ["currency", "monetary", "central-bank", "warfare"],
    topicAr: ["عملة", "نقدي", "بنك-مركزي", "حرب"],
    url: "https://www.mei.edu/",
    description: "Analysis of how currency policies have been weaponized in Yemen's conflict",
    descriptionAr: "تحليل كيف تم تسليح سياسات العملة في صراع اليمن"
  },
  {
    id: "arab-monetary-fund-2024",
    title: "Arab Monetary Fund Support to Yemen 2024",
    titleAr: "دعم صندوق النقد العربي لليمن 2024",
    institution: "Arab Monetary Fund",
    institutionAr: "صندوق النقد العربي",
    year: 2024,
    pages: 16,
    type: "brief",
    topic: ["monetary", "aid", "support", "arab"],
    topicAr: ["نقدي", "مساعدات", "دعم", "عربي"],
    url: "https://www.amf.org.ae/",
    description: "Overview of Arab Monetary Fund's financial support and technical assistance to Yemen",
    descriptionAr: "نظرة عامة على الدعم المالي والمساعدة الفنية من صندوق النقد العربي لليمن"
  },
  {
    id: "sfd-2025-june",
    title: "Social Fund for Development - Microfinance Portfolio Report June 2025",
    titleAr: "الصندوق الاجتماعي للتنمية - تقرير محفظة التمويل الأصغر يونيو 2025",
    institution: "Social Fund for Development",
    institutionAr: "الصندوق الاجتماعي للتنمية",
    year: 2025,
    pages: 52,
    type: "report",
    topic: ["microfinance", "sfd", "portfolio", "performance"],
    topicAr: ["تمويل-أصغر", "صندوق-اجتماعي", "محفظة", "أداء"],
    url: "http://www.sfd-yemen.org/",
    description: "Comprehensive report on microfinance programs and specialized banks performance",
    descriptionAr: "تقرير شامل عن برامج التمويل الأصغر وأداء البنوك المتخصصة"
  },
  {
    id: "deeproot-2024-stc",
    title: "The Southern Transitional Council and Yemen's Economic Future",
    titleAr: "المجلس الانتقالي الجنوبي ومستقبل اليمن الاقتصادي",
    institution: "DeepRoot Consulting",
    institutionAr: "ديب روت للاستشارات",
    year: 2024,
    pages: 47,
    type: "study",
    topic: ["stc", "south", "economy", "separatism"],
    topicAr: ["انتقالي-جنوبي", "جنوب", "اقتصاد", "انفصال"],
    url: "https://www.deeproot.consulting/",
    description: "Analysis of STC's economic agenda and its impact on Yemen's unity",
    descriptionAr: "تحليل الأجندة الاقتصادية للمجلس الانتقالي الجنوبي وتأثيرها على وحدة اليمن"
  }
];

// Calculate statistics
const stats = {
  totalPublications: publications.length,
  totalInstitutions: new Set(publications.map(p => p.institution)).size,
  totalPages: publications.reduce((sum, p) => sum + p.pages, 0),
  yearRange: {
    min: Math.min(...publications.map(p => p.year)),
    max: Math.max(...publications.map(p => p.year))
  }
};

export default function FinancialLiterature() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedInstitution, setSelectedInstitution] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedTopic, setSelectedTopic] = useState("all");

  // Get unique values for filters
  const years = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a);
  const institutions = Array.from(new Set(publications.map(p => isArabic ? p.institutionAr : p.institution))).sort();
  const types = Array.from(new Set(publications.map(p => p.type)));
  const allTopics = Array.from(new Set(publications.flatMap(p => isArabic ? p.topicAr : p.topic))).sort();

  // Filter publications
  const filteredPublications = publications.filter(pub => {
    const matchesSearch = isArabic
      ? pub.titleAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.institutionAr.includes(searchQuery) ||
        pub.descriptionAr.toLowerCase().includes(searchQuery.toLowerCase())
      : pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesYear = selectedYear === "all" || pub.year.toString() === selectedYear;
    const matchesInstitution = selectedInstitution === "all" || 
      (isArabic ? pub.institutionAr : pub.institution) === selectedInstitution;
    const matchesType = selectedType === "all" || pub.type === selectedType;
    const matchesTopic = selectedTopic === "all" || 
      (isArabic ? pub.topicAr : pub.topic).includes(selectedTopic);
    
    return matchesSearch && matchesYear && matchesInstitution && matchesType && matchesTopic;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir={isArabic ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="container">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <BookOpen className="w-3 h-3 mr-1" />
            {isArabic ? "مكتبة الأدبيات المالية" : "Financial Literature Library"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? "مكتبة الأدبيات المالية والاقتصادية" : "Financial & Economic Literature Library"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {isArabic
              ? "مستودع شامل للتقارير والدراسات والأوراق البحثية حول الاقتصاد والمالية في اليمن من أبرز المؤسسات الدولية والإقليمية"
              : "Comprehensive repository of reports, studies, and research papers on Yemen's economy and finance from leading international and regional institutions"}
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="container -mt-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white shadow-lg border-t-4 border-indigo-600">
            <CardContent className="pt-6">
              <FileText className="w-10 h-10 text-indigo-600 mb-2" />
              <div className="text-3xl font-bold text-gray-900">{stats.totalPublications}</div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "منشور" : "Publications"}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border-t-4 border-purple-600">
            <CardContent className="pt-6">
              <Building2 className="w-10 h-10 text-purple-600 mb-2" />
              <div className="text-3xl font-bold text-gray-900">{stats.totalInstitutions}</div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "مؤسسة" : "Institutions"}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border-t-4 border-pink-600">
            <CardContent className="pt-6">
              <BookOpen className="w-10 h-10 text-pink-600 mb-2" />
              <div className="text-3xl font-bold text-gray-900">{stats.totalPages.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "صفحة" : "Pages"}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border-t-4 border-blue-600">
            <CardContent className="pt-6">
              <Calendar className="w-10 h-10 text-blue-600 mb-2" />
              <div className="text-3xl font-bold text-gray-900">
                {stats.yearRange.max - stats.yearRange.min + 1}
              </div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "سنة من التغطية" : "Years of Coverage"}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filters */}
      <div className="container mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              {isArabic ? "البحث والتصفية" : "Search & Filter"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder={isArabic ? "بحث في العنوان أو المؤسسة أو الوصف..." : "Search title, institution, or description..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder={isArabic ? "السنة" : "Year"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isArabic ? "جميع السنوات" : "All Years"}</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedInstitution} onValueChange={setSelectedInstitution}>
                <SelectTrigger>
                  <SelectValue placeholder={isArabic ? "المؤسسة" : "Institution"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isArabic ? "جميع المؤسسات" : "All Institutions"}</SelectItem>
                  {institutions.map(inst => (
                    <SelectItem key={inst} value={inst}>{inst}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder={isArabic ? "النوع" : "Type"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isArabic ? "جميع الأنواع" : "All Types"}</SelectItem>
                  <SelectItem value="report">{isArabic ? "تقرير" : "Report"}</SelectItem>
                  <SelectItem value="study">{isArabic ? "دراسة" : "Study"}</SelectItem>
                  <SelectItem value="paper">{isArabic ? "ورقة بحثية" : "Paper"}</SelectItem>
                  <SelectItem value="brief">{isArabic ? "موجز" : "Brief"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Publications List */}
      <div className="container pb-16">
        <div className="grid grid-cols-1 gap-6">
          {filteredPublications.map(pub => (
            <Card key={pub.id} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                        {pub.year}
                      </Badge>
                      <Badge variant="outline">
                        {isArabic 
                          ? pub.type === "report" ? "تقرير"
                            : pub.type === "study" ? "دراسة"
                            : pub.type === "paper" ? "ورقة بحثية"
                            : "موجز"
                          : pub.type}
                      </Badge>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        {pub.pages} {isArabic ? "صفحة" : "pages"}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      {isArabic ? pub.titleAr : pub.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base">
                      <Building2 className="w-4 h-4" />
                      {isArabic ? pub.institutionAr : pub.institution}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  {isArabic ? pub.descriptionAr : pub.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {(isArabic ? pub.topicAr : pub.topic).map(topic => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      {isArabic ? "تحميل" : "Download"}
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {isArabic ? "عرض على الإنترنت" : "View Online"}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <Card>
            <CardContent className="py-16 text-center">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">
                {isArabic ? "لم يتم العثور على منشورات" : "No publications found"}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
