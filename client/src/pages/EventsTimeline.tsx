import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Calendar, MapPin } from "lucide-react";

// Event data structure
interface Event {
  id: number;
  date: string;
  year: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  category: "military" | "economic" | "political" | "diplomatic" | "humanitarian";
  severity: "critical" | "high" | "medium" | "low";
  location: string;
}

// Fetch events from database
const { data: dbEvents, isLoading: eventsLoading } = trpc.events.list.useQuery();

// Hardcoded events for fallback
const hardcodedEvents: Event[] = [
  {
    id: 1,
    date: "2014-09-21",
    year: 2014,
    title_ar: "سيطرة الحوثيين على صنعاء",
    title_en: "Houthis seize Sana'a",
    description_ar: "استولى الحوثيون (مع حلفاء صالح) على صنعاء، مما أدى إلى تهميش حكومة هادي",
    description_en: "Houthis (with Saleh loyalists) seize Sana'a, marginalizing Hadi's government",
    category: "military",
    severity: "critical",
    location: "Sana'a"
  },
  {
    id: 2,
    date: "2015-01-22",
    year: 2015,
    title_ar: "استقالة الرئيس هادي",
    title_en: "President Hadi resigns",
    description_ar: "محاصرة القصر الرئاسي من قبل مسلحين حوثيين؛ إعلان هادي استقالته (تراجع عنها لاحقاً)",
    description_en: "Houthi gunmen surround presidential palace; Hadi announces resignation (later rescinded)",
    category: "political",
    severity: "critical",
    location: "Sana'a"
  },
  {
    id: 3,
    date: "2015-03-26",
    year: 2015,
    title_ar: "بدء عملية عاصفة الحزم",
    title_en: "Operation Decisive Storm begins",
    description_ar: "إطلاق التحالف بقيادة السعودية عملية عاصفة الحزم لاستعادة حكومة هادي",
    description_en: "Saudi-led coalition launches Operation Decisive Storm to restore Hadi",
    category: "military",
    severity: "critical",
    location: "Yemen-wide"
  },
  {
    id: 4,
    date: "2016-09-18",
    year: 2016,
    title_ar: "نقل البنك المركزي إلى عدن",
    title_en: "Central Bank relocated to Aden",
    description_ar: "نقل المقر الرئيسي للبنك المركزي من صنعاء إلى عدن، مما أدى إلى انقسام النظام النقدي",
    description_en: "CBY headquarters moved from Sana'a to Aden, formalizing monetary bifurcation",
    category: "economic",
    severity: "critical",
    location: "Aden"
  },
  {
    id: 5,
    date: "2017-08-15",
    year: 2017,
    title_ar: "تعويم الريال اليمني",
    title_en: "Yemeni Rial floated",
    description_ar: "قرار الحكومة بتعويم الريال، مما أدى إلى انهيار قيمته",
    description_en: "IRG floats the rial, leading to currency crash",
    category: "economic",
    severity: "critical",
    location: "Aden"
  },
  {
    id: 6,
    date: "2018-12-13",
    year: 2018,
    title_ar: "اتفاق ستوكهولم",
    title_en: "Stockholm Agreement",
    description_ar: "وقف إطلاق النار في الحديدة وصفقة تبادل الأسرى",
    description_en: "Hodeidah ceasefire and prisoner exchange deal",
    category: "diplomatic",
    severity: "high",
    location: "Hodeidah"
  },
  {
    id: 7,
    date: "2019-11-05",
    year: 2019,
    title_ar: "اتفاق الرياض",
    title_en: "Riyadh Agreement",
    description_ar: "اتفاق حكومة هادي والمجلس الانتقالي الجنوبي على إصلاحات تقاسم السلطة",
    description_en: "Hadi government and STC agree to power-sharing reforms",
    category: "political",
    severity: "high",
    location: "Riyadh"
  },
  {
    id: 8,
    date: "2019-12-20",
    year: 2019,
    title_ar: "حظر العملة الجديدة",
    title_en: "New currency ban",
    description_ar: "حظرت سلطات صنعاء جميع الأوراق النقدية الجديدة المطبوعة في عدن",
    description_en: "Sana'a authorities banned all new Aden-printed banknotes",
    category: "economic",
    severity: "critical",
    location: "Sana'a"
  },
  {
    id: 9,
    date: "2020-04-09",
    year: 2020,
    title_ar: "وقف إطلاق نار أحادي الجانب",
    title_en: "Unilateral ceasefire",
    description_ar: "إعلان السعودية والإمارات وقف إطلاق نار لمدة شهرين بسبب كوفيد-19",
    description_en: "Saudi-UAE announce 2-month ceasefire (COVID-19 pretext)",
    category: "diplomatic",
    severity: "medium",
    location: "Yemen-wide"
  },
  {
    id: 10,
    date: "2020-12-30",
    year: 2020,
    title_ar: "هجوم مطار عدن",
    title_en: "Aden airport attack",
    description_ar: "هجوم انتحاري على مطار عدن يقتل 22 شخصاً",
    description_en: "Suicide attack on Aden airport kills 22",
    category: "military",
    severity: "high",
    location: "Aden"
  },
  {
    id: 11,
    date: "2022-04-02",
    year: 2022,
    title_ar: "هدنة الأمم المتحدة",
    title_en: "UN-brokered truce",
    description_ar: "بدء هدنة لمدة شهرين بوساطة الأمم المتحدة؛ تشكيل مجلس القيادة الرئاسي",
    description_en: "2-month UN truce begins; Presidential Leadership Council formed",
    category: "diplomatic",
    severity: "high",
    location: "Yemen-wide"
  },
  {
    id: 12,
    date: "2022-04-15",
    year: 2022,
    title_ar: "حصار صادرات النفط",
    title_en: "Oil export blockade",
    description_ar: "تصعيد الحوثيين للحرب الاقتصادية: حصار محطات تصدير النفط",
    description_en: "Houthis escalate economic warfare: blockade IRG oil terminals",
    category: "economic",
    severity: "critical",
    location: "Shabwa/Hadramawt"
  },
  {
    id: 13,
    date: "2023-04-14",
    year: 2023,
    title_ar: "أكبر عملية تبادل أسرى",
    title_en: "Largest prisoner exchange",
    description_ar: "تبادل 887 أسيراً (706 من الحوثيين، 181 من الحكومة)",
    description_en: "887 prisoners exchanged (706 by Houthis, 181 by IRG)",
    category: "humanitarian",
    severity: "medium",
    location: "Yemen-wide"
  },
  {
    id: 14,
    date: "2023-10-19",
    year: 2023,
    title_ar: "هجمات البحر الأحمر",
    title_en: "Red Sea attacks begin",
    description_ar: "بدء الحوثيين هجمات صاروخية وبطائرات مسيرة على الشحن في البحر الأحمر",
    description_en: "Houthis begin missile/drone attacks on Red Sea shipping",
    category: "military",
    severity: "high",
    location: "Red Sea"
  },
  {
    id: 15,
    date: "2024-01-15",
    year: 2024,
    title_ar: "شبكة التحويل الموحدة",
    title_en: "Unified transfer network",
    description_ar: "إطلاق شبكة تحويل موحدة (UNMoney) لتوحيد شبكات تحويل الأموال",
    description_en: "Launch of Unified Money Transfer Network (UNMoney)",
    category: "economic",
    severity: "medium",
    location: "Aden"
  },
  {
    id: 16,
    date: "2024-07-17",
    year: 2024,
    title_ar: "سحب تراخيص البنوك",
    title_en: "Bank license revocations",
    description_ar: "سحب تراخيص 6 بنوك كبرى مقرها صنعاء لم تنتقل إلى عدن",
    description_en: "Revocation of licenses of 6 major Sana'a-based banks",
    category: "economic",
    severity: "high",
    location: "Aden"
  },
  {
    id: 17,
    date: "2024-08-20",
    year: 2024,
    title_ar: "إصلاحات سعر الصرف",
    title_en: "Exchange rate reforms",
    description_ar: "إجراءات جديدة لضبط سعر الصرف أدت إلى تحسن 40% في قيمة الريال",
    description_en: "New FX controls lead to 40% appreciation of the rial",
    category: "economic",
    severity: "high",
    location: "Aden"
  },
  {
    id: 18,
    date: "2025-08-15",
    year: 2025,
    title_ar: "حزمة مساعدات سعودية",
    title_en: "Saudi aid package",
    description_ar: "إعلان حزمة مساعدات سعودية بقيمة 1.2 مليار دولار",
    description_en: "Announcement of $1.2 billion Saudi aid package",
    category: "economic",
    severity: "medium",
    location: "Riyadh"
  },
  {
    id: 19,
    date: "2025-09-10",
    year: 2025,
    title_ar: "وقف العقوبات الأمريكية",
    title_en: "US halts Houthi sanctions",
    description_ar: "الولايات المتحدة توقف العقوبات على الحوثيين وسط مفاوضات إقليمية",
    description_en: "US halts Houthi sanctions amid regional rapprochement talks",
    category: "diplomatic",
    severity: "medium",
    location: "Washington"
  }
];

export default function EventsTimeline() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  // Use database events if available, otherwise use hardcoded
  const events = dbEvents?.map((e: any) => ({
    id: e.id,
    date: e.date,
    year: parseInt(e.date.split('-')[0]),
    title_ar: e.titleAr,
    title_en: e.titleEn,
    description_ar: e.descriptionAr,
    description_en: e.descriptionEn,
    category: e.category,
    severity: e.severity,
    location: 'Yemen'
  })) || hardcodedEvents;

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSeverity, setSelectedSeverity] = useState<string>("all");

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesSearch = searchTerm === "" || 
      (isArabic ? event.title_ar : event.title_en).toLowerCase().includes(searchTerm.toLowerCase()) ||
      (isArabic ? event.description_ar : event.description_en).toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = selectedYear === "all" || event.year.toString() === selectedYear;
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesSeverity = selectedSeverity === "all" || event.severity === selectedSeverity;

    return matchesSearch && matchesYear && matchesCategory && matchesSeverity;
  });

  // Get category stats
  const categoryStats = {
    military: events.filter((e: Event) => e.category === "military").length,
    economic: events.filter((e: Event) => e.category === "economic").length,
    political: events.filter((e: Event) => e.category === "political").length,
    diplomatic: events.filter((e: Event) => e.category === "diplomatic").length,
    humanitarian: events.filter((e: Event) => e.category === "humanitarian").length,
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      military: "bg-red-600",
      economic: "bg-blue-600",
      political: "bg-purple-600",
      diplomatic: "bg-green-600",
      humanitarian: "bg-orange-600",
    };
    return colors[category as keyof typeof colors] || "bg-gray-600";
  };

  const getSeverityColor = (severity: string) => {
    const colors = {
      critical: "bg-red-600",
      high: "bg-orange-600",
      medium: "bg-yellow-600",
      low: "bg-green-600",
    };
    return colors[severity as keyof typeof colors] || "bg-gray-600";
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      military: isArabic ? "عسكري" : "Military",
      economic: isArabic ? "اقتصادي" : "Economic",
      political: isArabic ? "سياسي" : "Political",
      diplomatic: isArabic ? "دبلوماسي" : "Diplomatic",
      humanitarian: isArabic ? "إنساني" : "Humanitarian",
    };
    return labels[category as keyof typeof labels] || category;
  };

  const getSeverityLabel = (severity: string) => {
    const labels = {
      critical: isArabic ? "حرج" : "Critical",
      high: isArabic ? "عالي" : "High",
      medium: isArabic ? "متوسط" : "Medium",
      low: isArabic ? "منخفض" : "Low",
    };
    return labels[severity as keyof typeof labels] || severity;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Badge variant="outline" className="mb-4 bg-white/10 border-white/30 text-white">
            {isArabic ? "الخط الزمني التفاعلي" : "Interactive Timeline"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isArabic 
              ? "الأحداث والتحليلات" 
              : "Events & Analytics"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {isArabic
              ? "رؤى معمقة وتحليلات شاملة للأحداث والفاعلين والتأثيرات الاقتصادية"
              : "In-depth insights and comprehensive analysis of events, actors, and economic impacts"}
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="container mx-auto px-4 -mt-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{events.length}</div>
                <p className="text-gray-600">
                  {isArabic ? "إجمالي الأحداث" : "Total Events"}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">12</div>
                <p className="text-gray-600">
                  {isArabic ? "سنوات من التحليل" : "Years of Analysis"}
                </p>
                <p className="text-sm text-gray-500 mt-1">2014-2025</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">5</div>
                <p className="text-gray-600">
                  {isArabic ? "تصنيفات" : "Categories"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              {isArabic ? "تصفية الأحداث" : "Filter Events"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4" dir={isArabic ? "rtl" : "ltr"}>
              {/* Search */}
              <div className="relative">
                <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder={isArabic ? "بحث في الأحداث..." : "Search events..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>

              {/* Year Filter */}
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder={isArabic ? "جميع السنوات" : "All Years"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isArabic ? "جميع السنوات" : "All Years"}</SelectItem>
                  {[2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025].map(year => (
                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder={isArabic ? "جميع التصنيفات" : "All Categories"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isArabic ? "جميع التصنيفات" : "All Categories"}</SelectItem>
                  <SelectItem value="military">{isArabic ? "عسكري" : "Military"} ({categoryStats.military})</SelectItem>
                  <SelectItem value="economic">{isArabic ? "اقتصادي" : "Economic"} ({categoryStats.economic})</SelectItem>
                  <SelectItem value="political">{isArabic ? "سياسي" : "Political"} ({categoryStats.political})</SelectItem>
                  <SelectItem value="diplomatic">{isArabic ? "دبلوماسي" : "Diplomatic"} ({categoryStats.diplomatic})</SelectItem>
                  <SelectItem value="humanitarian">{isArabic ? "إنساني" : "Humanitarian"} ({categoryStats.humanitarian})</SelectItem>
                </SelectContent>
              </Select>

              {/* Severity Filter */}
              <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
                <SelectTrigger>
                  <SelectValue placeholder={isArabic ? "جميع المستويات" : "All Severity Levels"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isArabic ? "جميع المستويات" : "All Levels"}</SelectItem>
                  <SelectItem value="critical">{isArabic ? "حرج" : "Critical"}</SelectItem>
                  <SelectItem value="high">{isArabic ? "عالي" : "High"}</SelectItem>
                  <SelectItem value="medium">{isArabic ? "متوسط" : "Medium"}</SelectItem>
                  <SelectItem value="low">{isArabic ? "منخفض" : "Low"}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters Display */}
            {(selectedYear !== "all" || selectedCategory !== "all" || selectedSeverity !== "all" || searchTerm) && (
              <div className="mt-4 flex flex-wrap gap-2" dir={isArabic ? "rtl" : "ltr"}>
                <span className="text-sm text-gray-600">{isArabic ? "الفلاتر النشطة:" : "Active filters:"}</span>
                {selectedYear !== "all" && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedYear("all")}>
                    {selectedYear} ×
                  </Badge>
                )}
                {selectedCategory !== "all" && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCategory("all")}>
                    {getCategoryLabel(selectedCategory)} ×
                  </Badge>
                )}
                {selectedSeverity !== "all" && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedSeverity("all")}>
                    {getSeverityLabel(selectedSeverity)} ×
                  </Badge>
                )}
                {searchTerm && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setSearchTerm("")}>
                    "{searchTerm}" ×
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedYear("all");
                    setSelectedCategory("all");
                    setSelectedSeverity("all");
                    setSearchTerm("");
                  }}
                  className="h-6 text-xs"
                >
                  {isArabic ? "مسح الكل" : "Clear all"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Events List */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 text-gray-600" dir={isArabic ? "rtl" : "ltr"}>
            {isArabic 
              ? `عرض ${filteredEvents.length} من ${events.length} حدث`
              : `Showing ${filteredEvents.length} of ${events.length} events`}
          </div>

          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6" dir={isArabic ? "rtl" : "ltr"}>
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Date */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <Badge className={getCategoryColor(event.category)}>
                        {getCategoryLabel(event.category)}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {isArabic ? event.title_ar : event.title_en}
                        </h3>
                        <Badge variant="outline" className={getSeverityColor(event.severity) + " text-white border-0"}>
                          {getSeverityLabel(event.severity)}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">
                        {isArabic ? event.description_ar : event.description_en}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-gray-500">
                  {isArabic 
                    ? "لم يتم العثور على أحداث تطابق معايير البحث"
                    : "No events found matching your search criteria"}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
