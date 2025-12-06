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
    const yearSet = new Set(events.map(e => e.date.substring(0, 4)));
    return Array.from(yearSet).sort();
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
      const matchesYear = selectedYear === "all" || event.date.startsWith(selectedYear);
      
      return matchesSearch && matchesCategory && matchesYear;
    }).sort((a, b) => b.date.localeCompare(a.date)); // Sort by date descending
  }, [events, searchQuery, selectedCategory, selectedYear]);

  // Count events by category
  const categoryCounts = useMemo(() => {
    if (!events) return {};
    return events.reduce((acc, event) => {
      acc[event.category] = (acc[event.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [events]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-10 h-10" />
            <h1 className="text-4xl font-bold">
              {isArabic ? "الخط الزمني الشامل" : "Comprehensive Timeline"}
            </h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            {isArabic 
              ? "73 حدثاً رئيسياً عبر 16 عاماً (2010-2025) مع علاقات السببية والتأثيرات الاقتصادية"
              : "73 major events across 16 years (2010-2025) with causation relationships and economic impacts"}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
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
                {isArabic ? "السنوات المغطاة" : "Years Covered"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{years.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                {isArabic ? "علاقات السببية" : "Causations"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{causations?.length || 0}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                {isArabic ? "الأحداث الحرجة" : "Critical Events"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">
                {events?.filter(e => e.severity === "critical").length || 0}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5" />
            <h2 className="text-lg font-semibold">
              {isArabic ? "تصفية الأحداث" : "Filter Events"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder={isArabic ? "ابحث في الأحداث..." : "Search events..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="all">{isArabic ? "جميع الفئات" : "All Categories"}</option>
              <option value="war">{isArabic ? "حرب" : "War"} ({categoryCounts.war || 0})</option>
              <option value="economic">{isArabic ? "اقتصادي" : "Economic"} ({categoryCounts.economic || 0})</option>
              <option value="policy">{isArabic ? "سياسة" : "Policy"} ({categoryCounts.policy || 0})</option>
              <option value="humanitarian">{isArabic ? "إنساني" : "Humanitarian"} ({categoryCounts.humanitarian || 0})</option>
              <option value="international">{isArabic ? "دولي" : "International"} ({categoryCounts.international || 0})</option>
            </select>

            {/* Year Filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="all">{isArabic ? "جميع السنوات" : "All Years"}</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            {isArabic ? "عرض" : "Showing"} {filteredEvents.length} {isArabic ? "من" : "of"} {events?.length || 0} {isArabic ? "حدث" : "events"}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {filteredEvents.map((event, index) => {
            const Icon = categoryIcons[event.category as keyof typeof categoryIcons];
            const colorClass = categoryColors[event.category as keyof typeof categoryColors];
            const severityClass = severityColors[event.severity as keyof typeof severityColors];

            return (
              <div key={event.id} className="relative">
                {/* Timeline Line */}
                {index < filteredEvents.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-purple-300 dark:from-blue-700 dark:to-purple-700" />
                )}

                <Card className={`${colorClass} border-l-4 hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">
                            {isArabic ? event.titleAr : event.titleEn}
                          </CardTitle>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant="outline" className="gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(event.date).toLocaleDateString(isArabic ? 'ar' : 'en', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </Badge>
                            <Badge className={severityClass}>
                              {isArabic 
                                ? event.severity === "critical" ? "حرج" 
                                  : event.severity === "high" ? "عالي"
                                  : event.severity === "medium" ? "متوسط"
                                  : "منخفض"
                                : event.severity}
                            </Badge>
                            <Badge variant="secondary">
                              {isArabic 
                                ? event.category === "war" ? "حرب"
                                  : event.category === "economic" ? "اقتصادي"
                                  : event.category === "policy" ? "سياسة"
                                  : event.category === "humanitarian" ? "إنساني"
                                  : "دولي"
                                : event.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {isArabic ? event.descriptionAr : event.descriptionEn}
                    </CardDescription>

                    {/* Actors */}
                    {event.actors && (() => {
                      try {
                        const actorsList = JSON.parse(event.actors);
                        return actorsList && actorsList.length > 0;
                      } catch {
                        return false;
                      }
                    })() && (
                      <div className="mb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-semibold text-muted-foreground">
                            {isArabic ? "الجهات الفاعلة:" : "Actors:"}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {(() => {
                            try {
                              const actorsList = JSON.parse(event.actors!);
                              return actorsList.map((actor: string, i: number) => (
                                <Badge key={i} variant="outline">{actor}</Badge>
                              ));
                            } catch {
                              return null;
                            }
                          })()}
                        </div>
                      </div>
                    )}

                    {/* Source */}
                    {event.sources && (
                      <div className="text-xs text-muted-foreground mt-3 pt-3 border-t">
                        {isArabic ? "المصدر:" : "Source:"} {event.sources}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <AlertTriangle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {isArabic ? "لم يتم العثور على أحداث" : "No events found"}
            </h3>
            <p className="text-muted-foreground">
              {isArabic ? "جرب تغيير معايير البحث أو التصفية" : "Try changing your search or filter criteria"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
