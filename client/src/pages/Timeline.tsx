import { useState, useMemo } from "react";
import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  TrendingDown, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  Globe, 
  Search, 
  Filter, 
  Loader2 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const categoryIcons = {
  war: AlertTriangle,
  economic: TrendingDown,
  policy: Users,
  humanitarian: TrendingUp,
  international: Globe,
};

const categoryColors = {
  war: "border-red-500 bg-red-50 dark:bg-red-950",
  economic: "border-blue-500 bg-blue-50 dark:bg-blue-950",
  policy: "border-purple-500 bg-purple-50 dark:bg-purple-950",
  humanitarian: "border-orange-500 bg-orange-50 dark:bg-orange-950",
  international: "border-green-500 bg-green-50 dark:bg-green-950",
};

const severityColors = {
  low: "bg-gray-100 dark:bg-gray-800",
  medium: "bg-yellow-100 dark:bg-yellow-900",
  high: "bg-orange-100 dark:bg-orange-900",
  critical: "bg-red-100 dark:bg-red-900",
};

export default function Timeline() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const { data: events, isLoading } = trpc.events.list.useQuery();
  const { data: causations } = trpc.causations.list.useQuery();

  // Extract unique years from events
  const years = useMemo(() => {
    if (!events) return [];
    const yearSet = new Set(events.map(e => new Date(e.date).getFullYear()));
    return Array.from(yearSet).sort((a, b) => b - a);
  }, [events]);

  // Filter events
  const filteredEvents = useMemo(() => {
    if (!events) return [];
    
    return events.filter(event => {
      const matchesSearch = searchQuery === "" || 
        event.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.titleAr.includes(searchQuery) ||
        event.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.descriptionAr.includes(searchQuery);
      
      const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
      
      const eventYear = new Date(event.date).getFullYear().toString();
      const matchesYear = selectedYear === "all" || eventYear === selectedYear;
      
      return matchesSearch && matchesCategory && matchesYear;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [events, searchQuery, selectedCategory, selectedYear]);

  // Get causations for an event
  const getEventCausations = (eventId: number) => {
    if (!causations) return { causes: [], effects: [] };
    
    const causes = causations.filter(c => c.effectEventId === eventId);
    const effects = causations.filter(c => c.causeEventId === eventId);
    
    return { causes, effects };
  };

  if (isLoading) {
    return (
      <div className="w-full py-12">
        <div className="container max-w-6xl flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  const categories = ["all", "war", "economic", "policy", "humanitarian", "international"];

  return (
    <div className="w-full py-12">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            2010 - 2025
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? "الخط الزمني الشامل" : "Comprehensive Timeline"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isArabic 
              ? `${events?.length || 0} حدث رئيسي عبر 16 عاماً من التحولات الاقتصادية والسياسية`
              : `${events?.length || 0} major events across 16 years of economic and political transformation`
            }
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                {isArabic ? "إجمالي الأحداث" : "Total Events"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{events?.length || 0}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                {isArabic ? "السنوات" : "Years"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{years.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                {isArabic ? "العلاقات السببية" : "Causations"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{causations?.length || 0}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                {isArabic ? "حرجة" : "Critical"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {events?.filter(e => e.severity === "critical").length || 0}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              {isArabic ? "تصفية" : "Filters"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder={isArabic ? "بحث..." : "Search..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {isArabic ? "الفئة" : "Category"}
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {isArabic 
                      ? cat === "all" ? "الكل" : 
                        cat === "war" ? "حرب" :
                        cat === "economic" ? "اقتصادي" :
                        cat === "policy" ? "سياسة" :
                        cat === "humanitarian" ? "إنساني" :
                        "دولي"
                      : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Year */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {isArabic ? "السنة" : "Year"}
              </label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedYear === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedYear("all")}
                >
                  {isArabic ? "الكل" : "All"}
                </Button>
                {years.map(year => (
                  <Button
                    key={year}
                    variant={selectedYear === year.toString() ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedYear(year.toString())}
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>

          {/* Events */}
          <div className="space-y-8">
            {filteredEvents.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center text-muted-foreground">
                  {isArabic ? "لا توجد أحداث" : "No events found"}
                </CardContent>
              </Card>
            ) : (
              filteredEvents.map((event, idx) => {
                const Icon = categoryIcons[event.category as keyof typeof categoryIcons] || AlertTriangle;
                const { causes, effects } = getEventCausations(event.id);
                const isEven = idx % 2 === 0;
                const eventDate = new Date(event.date);
                
                return (
                  <div key={event.id} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className="absolute right-0 md:left-1/2 transform md:-translate-x-1/2">
                      <div className={`h-4 w-4 rounded-full border-4 ${
                        event.severity === 'critical' ? 'bg-red-500 border-red-200' :
                        event.severity === 'high' ? 'bg-orange-500 border-orange-200' :
                        event.severity === 'medium' ? 'bg-yellow-500 border-yellow-200' :
                        'bg-gray-500 border-gray-200'
                      }`}></div>
                    </div>

                    {/* Card */}
                    <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8 pr-12' : 'md:pl-8 pr-12'}`}>
                      <Card className={`border-l-4 ${categoryColors[event.category as keyof typeof categoryColors]} hover:shadow-lg transition-shadow`}>
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${severityColors[event.severity as keyof typeof severityColors]}`}>
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-bold text-lg">{eventDate.getFullYear()}</span>
                                  <span className="text-sm text-muted-foreground">
                                    {eventDate.toLocaleDateString(isArabic ? "ar-YE" : "en-US", { month: "short", day: "numeric" })}
                                  </span>
                                </div>
                                <CardTitle className="text-base">
                                  {isArabic ? event.titleAr : event.titleEn}
                                </CardTitle>
                              </div>
                            </div>
                            <Badge variant={event.severity === "critical" ? "destructive" : "secondary"}>
                              {isArabic 
                                ? event.severity === "critical" ? "حرج" :
                                  event.severity === "high" ? "عالي" :
                                  event.severity === "medium" ? "متوسط" :
                                  "منخفض"
                                : event.severity}
                            </Badge>
                          </div>
                          <CardDescription className="mt-2">
                            <Badge variant="outline" className="text-xs">
                              {isArabic 
                                ? event.category === "war" ? "حرب" :
                                  event.category === "economic" ? "اقتصادي" :
                                  event.category === "policy" ? "سياسة" :
                                  event.category === "humanitarian" ? "إنساني" :
                                  "دولي"
                                : event.category}
                            </Badge>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {isArabic ? event.descriptionAr : event.descriptionEn}
                          </p>
                          
                          {/* Causations */}
                          {(causes.length > 0 || effects.length > 0) && (
                            <div className="pt-3 border-t space-y-2">
                              {causes.length > 0 && (
                                <div className="text-xs">
                                  <span className="font-semibold text-blue-600">
                                    {isArabic ? "تسبب فيه:" : "Caused by:"}
                                  </span>
                                  <span className="text-muted-foreground ml-1">
                                    {causes.length} {isArabic ? "حدث" : "event(s)"}
                                  </span>
                                </div>
                              )}
                              {effects.length > 0 && (
                                <div className="text-xs">
                                  <span className="font-semibold text-orange-600">
                                    {isArabic ? "أدى إلى:" : "Led to:"}
                                  </span>
                                  <span className="text-muted-foreground ml-1">
                                    {effects.length} {isArabic ? "حدث" : "event(s)"}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Summary */}
        <Card className="mt-12 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">
              {isArabic ? "16 عاماً بالأرقام" : "16 Years in Numbers"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">80%</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {isArabic ? "الفقر" : "Poverty"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">240%</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {isArabic ? "فجوة الصرف" : "FX Gap"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">17M</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {isArabic ? "جوعى" : "Food Insecure"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{events?.length || 0}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {isArabic ? "الأحداث" : "Events"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
