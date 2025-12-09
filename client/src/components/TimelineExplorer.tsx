import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { trpc } from '@/lib/trpc';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Search, Filter, Calendar, TrendingUp, AlertTriangle, Users, DollarSign, X } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface Event {
  id: number;
  date: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  category: string;
  severity?: string;
  impact?: string;
  source?: string;
}

export default function TimelineExplorer() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Fetch all events
  const { data: events, isLoading } = trpc.events.list.useQuery();

  // Categories with colors
  const categories = [
    { value: 'all', label: isArabic ? 'الكل' : 'All', color: 'bg-gray-500' },
    { value: 'war', label: isArabic ? 'حرب' : 'War', color: 'bg-red-500' },
    { value: 'economic', label: isArabic ? 'اقتصادي' : 'Economic', color: 'bg-blue-500' },
    { value: 'policy', label: isArabic ? 'سياسة' : 'Policy', color: 'bg-green-500' },
    { value: 'humanitarian', label: isArabic ? 'إنساني' : 'Humanitarian', color: 'bg-orange-500' },
    { value: 'political', label: isArabic ? 'سياسي' : 'Political', color: 'bg-purple-500' },
  ];

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.color : 'bg-gray-500';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'war':
        return <AlertTriangle className="h-4 w-4" />;
      case 'economic':
        return <TrendingUp className="h-4 w-4" />;
      case 'policy':
        return <DollarSign className="h-4 w-4" />;
      case 'humanitarian':
        return <Users className="h-4 w-4" />;
      case 'political':
        return <Calendar className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  // Filter events
  const filteredEvents = useMemo(() => {
    if (!events) return [];
    
    let filtered = events;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(e => e.category === selectedCategory);
    }

    // Filter by year
    if (selectedYear) {
      filtered = filtered.filter(e => new Date(e.date).getFullYear() === selectedYear);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(e => 
        (e.titleEn?.toLowerCase().includes(query)) ||
        (e.titleAr?.includes(searchQuery)) ||
        (e.descriptionEn?.toLowerCase().includes(query)) ||
        (e.descriptionAr?.includes(searchQuery))
      );
    }

    return filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [events, selectedCategory, selectedYear, searchQuery]);

  // Group events by year
  const eventsByYear = useMemo(() => {
    const grouped: Record<number, Event[]> = {};
    filteredEvents.forEach(event => {
      const year = new Date(event.date).getFullYear();
      if (!grouped[year]) {
        grouped[year] = [];
      }
      grouped[year].push(event);
    });
    return grouped;
  }, [filteredEvents]);

  const years = Object.keys(eventsByYear).map(Number).sort((a, b) => a - b);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            {isArabic ? 'البحث والتصفية' : 'Search & Filter'}
          </CardTitle>
          <CardDescription>
            {isArabic
              ? `${filteredEvents.length} حدث من أصل ${events?.length || 0}`
              : `${filteredEvents.length} events of ${events?.length || 0} total`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={isArabic ? 'ابحث عن الأحداث...' : 'Search events...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <Button
                  key={cat.value}
                  variant={selectedCategory === cat.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.value)}
                  className="gap-2"
                >
                  {selectedCategory === cat.value && <Filter className="h-3 w-3" />}
                  {cat.label}
                </Button>
              ))}
            </div>

            {/* Year Navigation */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedYear === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedYear(null)}
              >
                {isArabic ? 'كل السنوات' : 'All Years'}
              </Button>
              {Array.from({ length: 16 }, (_, i) => 2010 + i).map(year => (
                <Button
                  key={year}
                  variant={selectedYear === year ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </Button>
              ))}
            </div>

            {/* Active Filters */}
            {(selectedCategory !== 'all' || selectedYear || searchQuery) && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{isArabic ? 'التصفيات النشطة:' : 'Active filters:'}</span>
                {selectedCategory !== 'all' && (
                  <Badge variant="secondary">
                    {categories.find(c => c.value === selectedCategory)?.label}
                  </Badge>
                )}
                {selectedYear && (
                  <Badge variant="secondary">{selectedYear}</Badge>
                )}
                {searchQuery && (
                  <Badge variant="secondary">{searchQuery}</Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedYear(null);
                    setSearchQuery('');
                  }}
                >
                  {isArabic ? 'مسح الكل' : 'Clear all'}
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

        {/* Events by Year */}
        <div className="space-y-12">
          {years.map(year => (
            <div key={year} className="relative">
              {/* Year Marker */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg">
                  {year}
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                <Badge variant="secondary" className="text-sm">
                  {eventsByYear[year].length} {isArabic ? 'حدث' : 'events'}
                </Badge>
              </div>

              {/* Events for this year */}
              <div className="ml-24 space-y-4">
                {eventsByYear[year].map((event, index) => (
                  <Card
                    key={event.id}
                    className="hover:shadow-lg transition-all cursor-pointer border-l-4"
                    style={{ borderLeftColor: getCategoryColor(event.category).replace('bg-', '#') }}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={`${getCategoryColor(event.category)} text-white`}>
                              <span className="flex items-center gap-1">
                                {getCategoryIcon(event.category)}
                                {categories.find(c => c.value === event.category)?.label}
                              </span>
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {new Date(event.date).toLocaleDateString(isArabic ? 'ar-YE' : 'en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <CardTitle className="text-lg">
                            {isArabic ? event.titleAr : event.titleEn}
                          </CardTitle>
                        </div>
                        {event.impact && (
                          <Badge variant="outline" className="shrink-0">
                            {event.impact}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {isArabic ? event.descriptionAr : event.descriptionEn}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {isArabic ? 'لم يتم العثور على أحداث' : 'No events found'}
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedYear(null);
                setSearchQuery('');
              }}
            >
              {isArabic ? 'مسح التصفيات' : 'Clear filters'}
            </Button>
          </div>
        )}
      </div>

      {/* Event Detail Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-3 mb-3">
                  <Badge className={`${getCategoryColor(selectedEvent.category)} text-white`}>
                    <span className="flex items-center gap-1">
                      {getCategoryIcon(selectedEvent.category)}
                      {categories.find(c => c.value === selectedEvent.category)?.label}
                    </span>
                  </Badge>
                  {selectedEvent.impact && (
                    <Badge variant="outline">{selectedEvent.impact}</Badge>
                  )}
                </div>
                <DialogTitle className="text-2xl">
                  {isArabic ? selectedEvent.titleAr : selectedEvent.titleEn}
                </DialogTitle>
                <DialogDescription>
                  {new Date(selectedEvent.date).toLocaleDateString(isArabic ? 'ar-YE' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">
                    {isArabic ? 'الوصف' : 'Description'}
                  </h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {isArabic ? selectedEvent.descriptionAr : selectedEvent.descriptionEn}
                  </p>
                </div>
                {selectedEvent.source && (
                  <div>
                    <h3 className="font-semibold mb-2">
                      {isArabic ? 'المصدر' : 'Source'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedEvent.source}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
