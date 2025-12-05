import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, Download, ExternalLink, Filter, Search, 
  Building2, Calendar, Tag, Globe, FileText, BarChart3,
  TrendingUp, Users, DollarSign, AlertCircle, ChevronLeft, ChevronRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PublicationData {
  input: string;
  output: {
    organization: string;
    total_publications: number;
    year_coverage: string;
    key_data_points: string;
    publication_urls: string;
    executive_summary: string;
    data_quality: string;
  };
  error: string;
}

interface PublicationsResponse {
  results: PublicationData[];
}

export default function ResearchLibrary() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrg, setSelectedOrg] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [publicationsData, setPublicationsData] = useState<PublicationData[]>([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 20;

  // Load publications data
  useEffect(() => {
    fetch('/data/publications.json')
      .then(res => res.json())
      .then((data: PublicationsResponse) => {
        setPublicationsData(data.results || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load publications:', err);
        setLoading(false);
      });
  }, []);

  // Calculate statistics
  const statistics = useMemo(() => {
    const totalPublications = publicationsData.reduce((sum, item) => sum + (item.output?.total_publications || 0), 0);
    const organizations = publicationsData.length;
    const years = new Set<string>();
    
    publicationsData.forEach(item => {
      const yearRange = item.output?.year_coverage || '';
      const matches = yearRange.match(/\d{4}/g);
      if (matches) {
        matches.forEach(year => years.add(year));
      }
    });

    return {
      totalPublications,
      organizations,
      yearsCovered: years.size,
      earliestYear: Math.min(...Array.from(years).map(Number)),
      latestYear: Math.max(...Array.from(years).map(Number))
    };
  }, [publicationsData]);

  // Get unique organizations for filter
  const organizations = useMemo(() => {
    return Array.from(new Set(publicationsData.map(item => item.output?.organization || 'Unknown').filter(Boolean))).sort();
  }, [publicationsData]);

  // Filter publications
  const filteredPublications = useMemo(() => {
    return publicationsData.filter(item => {
      const matchesSearch = searchQuery === "" || 
        (item.output?.organization || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.output?.executive_summary || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.input || '').toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesOrg = selectedOrg === "all" || (item.output?.organization || '') === selectedOrg;
      
      const matchesYear = selectedYear === "all" || (item.output?.year_coverage || '').includes(selectedYear);

      return matchesSearch && matchesOrg && matchesYear;
    });
  }, [publicationsData, searchQuery, selectedOrg, selectedYear]);

  // Pagination
  const totalPages = Math.ceil(filteredPublications.length / itemsPerPage);
  const paginatedPublications = filteredPublications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedOrg, selectedYear]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#8B1538] via-[#0D9488] to-[#475569] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 px-4 py-2 bg-white/10 backdrop-blur-md border-white/20">
              <BookOpen className="h-4 w-4 mr-2" />
              {isArabic ? "مكتبة الأبحاث الشاملة" : "Comprehensive Research Library"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isArabic ? "مكتبة الأبحاث الاقتصادية" : "Economic Research Library"}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {isArabic 
                ? `${statistics.totalPublications.toLocaleString()} منشور من ${statistics.organizations} مؤسسة موثوقة تغطي ${statistics.yearsCovered} عامًا (${statistics.earliestYear}-${statistics.latestYear})`
                : `${statistics.totalPublications.toLocaleString()} publications from ${statistics.organizations} credible institutions covering ${statistics.yearsCovered} years (${statistics.earliestYear}-${statistics.latestYear})`
              }
            </p>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-[#D4AF37] mx-auto mb-2" />
                  <div className="text-3xl font-bold">{statistics.totalPublications.toLocaleString()}</div>
                  <div className="text-sm text-white/80">{isArabic ? "منشور" : "Publications"}</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6 text-center">
                  <Building2 className="h-8 w-8 text-[#D4AF37] mx-auto mb-2" />
                  <div className="text-3xl font-bold">{statistics.organizations}</div>
                  <div className="text-sm text-white/80">{isArabic ? "مؤسسة" : "Organizations"}</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-[#D4AF37] mx-auto mb-2" />
                  <div className="text-3xl font-bold">{statistics.yearsCovered}</div>
                  <div className="text-sm text-white/80">{isArabic ? "عام" : "Years"}</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 text-[#D4AF37] mx-auto mb-2" />
                  <div className="text-3xl font-bold">{filteredPublications.length}</div>
                  <div className="text-sm text-white/80">{isArabic ? "نتيجة" : "Results"}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b bg-white dark:bg-slate-800 sticky top-0 z-10 shadow-md">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder={isArabic ? "ابحث في المنشورات..." : "Search publications..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Organization Filter */}
            <div>
              <select
                value={selectedOrg}
                onChange={(e) => setSelectedOrg(e.target.value)}
                className="w-full h-10 px-3 rounded-md border border-input bg-background"
              >
                <option value="all">{isArabic ? "جميع المؤسسات" : "All Organizations"}</option>
                {organizations.map(org => (
                  <option key={org} value={org}>{org}</option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full h-10 px-3 rounded-md border border-input bg-background"
              >
                <option value="all">{isArabic ? "جميع السنوات" : "All Years"}</option>
                {Array.from({ length: 16 }, (_, i) => 2010 + i).map(year => (
                  <option key={year} value={year.toString()}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-12">
        <div className="container">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">{isArabic ? "جاري التحميل..." : "Loading..."}</p>
            </div>
          ) : (
            <>
              <div className="grid gap-6">
                {paginatedPublications.map((item, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="font-semibold">
                              <Building2 className="h-3 w-3 mr-1" />
                              {item.output?.organization || 'Unknown'}
                            </Badge>
                            {item.output?.year_coverage && (
                              <Badge variant="secondary">
                                <Calendar className="h-3 w-3 mr-1" />
                                {item.output.year_coverage}
                              </Badge>
                            )}
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                              {item.output?.total_publications || 0} {isArabic ? "منشور" : "publications"}
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl mb-2">
                            {item.output?.organization || 'Unknown'} - {isArabic ? "المجموعة الكاملة" : "Complete Collection"}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {item.input}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Badge className={
                            (item.output?.data_quality || '').includes("Excellent") ? "bg-green-600" :
                            (item.output?.data_quality || '').includes("Good") ? "bg-blue-600" :
                            "bg-yellow-600"
                          }>
                            {item.output?.data_quality || 'Unknown'}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            {isArabic ? "الملخص التنفيذي" : "Executive Summary"}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {(item.output?.executive_summary || 'No summary available').slice(0, 500)}...
                          </p>
                        </div>

                        {item.output?.key_data_points && (
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <BarChart3 className="h-4 w-4" />
                              {isArabic ? "نقاط البيانات الرئيسية" : "Key Data Points"}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {item.output.key_data_points.split(',').slice(0, 10).join(', ')}...
                            </p>
                          </div>
                        )}

                        {item.output?.publication_urls && (
                          <div className="flex flex-wrap gap-2">
                            {item.output.publication_urls.split(',').slice(0, 3).map((url, urlIndex) => (
                              <Button
                                key={urlIndex}
                                variant="outline"
                                size="sm"
                                className="gap-2"
                                onClick={() => window.open(url.trim(), '_blank')}
                              >
                                <ExternalLink className="h-4 w-4" />
                                {isArabic ? "عرض المنشور" : "View Publication"} {urlIndex + 1}
                              </Button>
                            ))}
                            {item.output.publication_urls.split(',').length > 3 && (
                              <Badge variant="secondary">
                                +{item.output.publication_urls.split(',').length - 3} {isArabic ? "المزيد" : "more"}
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    {isArabic ? "السابق" : "Previous"}
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(pageNum)}
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    {isArabic ? "التالي" : "Next"}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {filteredPublications.length === 0 && (
                <div className="text-center py-20">
                  <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">
                    {isArabic ? "لم يتم العثور على نتائج" : "No results found"}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
