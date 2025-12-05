import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Building2, Calendar, Users, FileText, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StakeholderProfile() {
  const { id } = useParams();
  const { language } = useLanguage();
  const isArabic = language === "ar";

  // Fetch stakeholder data from database
  const { data: stakeholder, isLoading } = useQuery({
    queryKey: [`/api/actors/${id}`],
  });

  // Fetch related indicators
  const { data: indicators } = useQuery({
    queryKey: [`/api/indicators?actorId=${id}`],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container py-20">
          <Skeleton className="h-12 w-3/4 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="h-48" />
            <Skeleton className="h-48" />
            <Skeleton className="h-48" />
          </div>
        </div>
      </div>
    );
  }

  if (!stakeholder) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{isArabic ? "لم يتم العثور على الجهة الفاعلة" : "Stakeholder Not Found"}</h1>
          <p className="text-muted-foreground">{isArabic ? "الجهة الفاعلة المطلوبة غير موجودة" : "The requested stakeholder does not exist"}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Building2 className="h-12 w-12 text-primary" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {isArabic ? stakeholder.nameAr : stakeholder.nameEn}
              </h1>
              <div className="flex gap-2 mt-2">
                <Badge variant="outline">{stakeholder.type}</Badge>
                <Badge variant={stakeholder.status === 'active' ? 'default' : 'secondary'}>
                  {stakeholder.status}
                </Badge>
              </div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl">
            {isArabic ? stakeholder.descriptionAr : stakeholder.descriptionEn}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isArabic ? "نوع المؤسسة" : "Organization Type"}
              </CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stakeholder.type}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isArabic ? "الفئة" : "Category"}
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stakeholder.category}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isArabic ? "الحالة" : "Status"}
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold capitalize">{stakeholder.status}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isArabic ? "تاريخ التأسيس" : "Founded"}
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stakeholder.foundedDate ? new Date(stakeholder.foundedDate).getFullYear() : 'N/A'}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Data */}
        {indicators && indicators.length > 0 && (
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                {isArabic ? "المؤشرات ذات الصلة" : "Related Indicators"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {indicators.map((indicator: any) => (
                  <div key={indicator.id} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{isArabic ? indicator.nameAr : indicator.nameEn}</h4>
                      <p className="text-sm text-muted-foreground">{indicator.source}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{indicator.value} {indicator.unit}</div>
                      <div className="text-sm text-muted-foreground">{new Date(indicator.date).getFullYear()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Publications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              {isArabic ? "المنشورات" : "Publications"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {isArabic 
                ? "راجع مكتبة الأبحاث للحصول على جميع المنشورات من هذه المؤسسة"
                : "See Research Library for all publications from this organization"}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
