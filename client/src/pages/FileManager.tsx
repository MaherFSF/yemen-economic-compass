import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import FileUpload from "@/components/FileUpload";
import {
  Search,
  Download,
  Trash2,
  File,
  FileText,
  Image,
  BarChart3,
  FolderOpen,
  Calendar,
  User,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { getLoginUrl } from "@/const";

export default function FileManager() {
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: files, isLoading, refetch } = trpc.files.list.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const deleteMutation = trpc.files.delete.useMutation({
    onSuccess: () => {
      toast.success(isArabic ? "تم حذف الملف بنجاح" : "File deleted successfully");
      refetch();
    },
    onError: (error) => {
      toast.error(error.message || (isArabic ? "فشل حذف الملف" : "Failed to delete file"));
    },
  });

  const handleDelete = async (fileId: number, filename: string) => {
    if (confirm(isArabic ? `هل تريد حذف "${filename}"؟` : `Delete "${filename}"?`)) {
      await deleteMutation.mutateAsync({ fileId });
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString(isArabic ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "report":
        return <FileText className="h-5 w-5" />;
      case "chart":
        return <BarChart3 className="h-5 w-5" />;
      case "image":
        return <Image className="h-5 w-5" />;
      case "document":
        return <File className="h-5 w-5" />;
      default:
        return <FolderOpen className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "report":
        return "bg-blue-500/10 text-blue-700 border-blue-500";
      case "chart":
        return "bg-purple-500/10 text-purple-700 border-purple-500";
      case "image":
        return "bg-green-500/10 text-green-700 border-green-500";
      case "document":
        return "bg-orange-500/10 text-orange-700 border-orange-500";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-500";
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, { en: string; ar: string }> = {
      report: { en: "Report", ar: "تقرير" },
      chart: { en: "Chart", ar: "مخطط" },
      document: { en: "Document", ar: "مستند" },
      image: { en: "Image", ar: "صورة" },
      other: { en: "Other", ar: "أخرى" },
    };
    return isArabic ? labels[category]?.ar : labels[category]?.en;
  };

  const filteredFiles = files?.filter((file) => {
    const matchesSearch =
      searchQuery === "" ||
      file.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.description?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "all" || file.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Show login prompt if not authenticated
  if (!authLoading && !isAuthenticated) {
    return (
      <div className="w-full py-12">
        <div className="container max-w-4xl">
          <Card>
            <CardContent className="p-12 text-center">
              <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">
                {isArabic ? "تسجيل الدخول مطلوب" : "Login Required"}
              </h2>
              <p className="text-muted-foreground mb-6">
                {isArabic
                  ? "يجب تسجيل الدخول لإدارة الملفات"
                  : "You need to login to manage files"}
              </p>
              <Button asChild>
                <a href={getLoginUrl()}>
                  {isArabic ? "تسجيل الدخول" : "Login"}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-12">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4" variant="outline">
            {isArabic ? "إدارة الملفات" : "File Management"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? "مدير الملفات" : "File Manager"}
          </h1>
          <p className="text-xl text-muted-foreground">
            {isArabic
              ? "رفع وإدارة التقارير والمستندات والمخططات"
              : "Upload and manage reports, documents, and charts"}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                {files?.length || 0}
              </div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "إجمالي الملفات" : "Total Files"}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {files?.filter((f) => f.category === "report").length || 0}
              </div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "تقارير" : "Reports"}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {files?.filter((f) => f.category === "chart").length || 0}
              </div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "مخططات" : "Charts"}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">
                {files?.filter((f) => f.category === "document").length || 0}
              </div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "مستندات" : "Documents"}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-1">
            <FileUpload onUploadSuccess={() => refetch()} />
          </div>

          {/* Files List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  {isArabic ? "البحث والتصفية" : "Search & Filter"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder={isArabic ? "ابحث في الملفات..." : "Search files..."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium mb-2 block">
                    {isArabic ? "الفئة" : "Category"}
                  </Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">
                        {isArabic ? "جميع الفئات" : "All Categories"}
                      </SelectItem>
                      <SelectItem value="report">
                        {isArabic ? "تقارير" : "Reports"}
                      </SelectItem>
                      <SelectItem value="chart">
                        {isArabic ? "مخططات" : "Charts"}
                      </SelectItem>
                      <SelectItem value="document">
                        {isArabic ? "مستندات" : "Documents"}
                      </SelectItem>
                      <SelectItem value="image">
                        {isArabic ? "صور" : "Images"}
                      </SelectItem>
                      <SelectItem value="other">
                        {isArabic ? "أخرى" : "Other"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Files List */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {isArabic ? "ملفاتي" : "My Files"}
                </CardTitle>
                <CardDescription>
                  {isArabic
                    ? `عرض ${filteredFiles?.length || 0} من ${files?.length || 0} ملف`
                    : `Showing ${filteredFiles?.length || 0} of ${files?.length || 0} files`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                  </div>
                ) : filteredFiles && filteredFiles.length > 0 ? (
                  <div className="space-y-4">
                    {filteredFiles.map((file) => (
                      <Card key={file.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                              {getCategoryIcon(file.category)}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-medium truncate">{file.filename}</h3>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                    <Badge
                                      variant="outline"
                                      className={getCategoryColor(file.category)}
                                    >
                                      {getCategoryLabel(file.category)}
                                    </Badge>
                                    <span>{formatFileSize(file.fileSize)}</span>
                                  </div>
                                </div>
                              </div>

                              {file.description && (
                                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                                  {file.description}
                                </p>
                              )}

                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {formatDate(file.createdAt)}
                                </div>
                              </div>

                              <div className="flex items-center gap-2 mt-3">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  asChild
                                >
                                  <a href={file.url} target="_blank" rel="noopener noreferrer">
                                    <Download className="h-4 w-4 mr-2" />
                                    {isArabic ? "تحميل" : "Download"}
                                  </a>
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleDelete(file.id, file.filename)}
                                  disabled={deleteMutation.isPending}
                                >
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  {isArabic ? "حذف" : "Delete"}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FolderOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">
                      {isArabic ? "لا توجد ملفات" : "No files found"}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {isArabic
                        ? "ابدأ برفع ملفك الأول"
                        : "Start by uploading your first file"}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label({ children, className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={`text-sm font-medium ${className || ""}`} {...props}>
      {children}
    </label>
  );
}
