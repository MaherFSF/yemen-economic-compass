import { useState, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { trpc } from "@/lib/trpc";
import { useLanguage } from "@/contexts/LanguageContext";
import { Upload, File, X, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface FileUploadProps {
  onUploadSuccess?: () => void;
}

export default function FileUpload({ onUploadSuccess }: FileUploadProps) {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [category, setCategory] = useState<"report" | "chart" | "document" | "image" | "other">("document");
  const [description, setDescription] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const uploadMutation = trpc.files.upload.useMutation({
    onSuccess: () => {
      toast.success(isArabic ? "تم رفع الملف بنجاح" : "File uploaded successfully");
      setSelectedFile(null);
      setDescription("");
      setUploadProgress(0);
      setIsUploading(false);
      onUploadSuccess?.();
    },
    onError: (error) => {
      toast.error(error.message || (isArabic ? "فشل رفع الملف" : "Failed to upload file"));
      setIsUploading(false);
      setUploadProgress(0);
    },
  });

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, []);

  const handleFileSelect = (file: File) => {
    // Validate file size (max 50MB)
    const maxSize = 50 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error(isArabic ? "حجم الملف يتجاوز 50 ميجابايت" : "File size exceeds 50MB");
      return;
    }

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/gif",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];

    if (!allowedTypes.includes(file.type)) {
      toast.error(isArabic ? "نوع الملف غير مدعوم" : "File type not supported");
      return;
    }

    setSelectedFile(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error(isArabic ? "الرجاء اختيار ملف" : "Please select a file");
      return;
    }

    setIsUploading(true);
    setUploadProgress(10);

    // Read file as base64
    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64Data = e.target?.result as string;
      const base64Content = base64Data.split(',')[1]; // Remove data:mime;base64, prefix

      setUploadProgress(30);

      try {
        await uploadMutation.mutateAsync({
          filename: selectedFile.name,
          mimeType: selectedFile.type,
          fileSize: selectedFile.size,
          category,
          description: description || undefined,
          base64Data: base64Content,
        });
        setUploadProgress(100);
      } catch (error) {
        console.error("Upload error:", error);
      }
    };

    reader.onerror = () => {
      toast.error(isArabic ? "فشل قراءة الملف" : "Failed to read file");
      setIsUploading(false);
      setUploadProgress(0);
    };

    reader.readAsDataURL(selectedFile);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setUploadProgress(0);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          {isArabic ? "رفع ملف جديد" : "Upload New File"}
        </CardTitle>
        <CardDescription>
          {isArabic
            ? "رفع تقارير، مخططات، أو مستندات (حد أقصى 50 ميجابايت)"
            : "Upload reports, charts, or documents (max 50MB)"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Drag and Drop Area */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          }`}
        >
          {selectedFile ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <File className="h-12 w-12 text-primary" />
                <div className="text-left flex-1">
                  <p className="font-medium">{selectedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatFileSize(selectedFile.size)}
                  </p>
                </div>
                {!isUploading && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRemoveFile}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {isUploading && (
                <div className="space-y-2">
                  <Progress value={uploadProgress} />
                  <p className="text-sm text-muted-foreground">
                    {isArabic ? "جاري الرفع..." : "Uploading..."} {uploadProgress}%
                  </p>
                </div>
              )}

              {uploadProgress === 100 && (
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span>{isArabic ? "تم الرفع بنجاح" : "Upload complete"}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <Upload className="h-16 w-16 mx-auto text-muted-foreground" />
              <div>
                <p className="text-lg font-medium mb-2">
                  {isArabic ? "اسحب وأفلت الملف هنا" : "Drag and drop file here"}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {isArabic ? "أو" : "or"}
                </p>
                <Label htmlFor="file-input">
                  <Button variant="outline" asChild>
                    <span>
                      {isArabic ? "اختر ملف" : "Choose File"}
                    </span>
                  </Button>
                </Label>
                <Input
                  id="file-input"
                  type="file"
                  className="hidden"
                  onChange={handleFileInputChange}
                  accept=".pdf,.png,.jpg,.jpeg,.gif,.doc,.docx,.xls,.xlsx"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {isArabic
                  ? "PDF, صور, Word, Excel (حد أقصى 50 ميجابايت)"
                  : "PDF, Images, Word, Excel (max 50MB)"}
              </p>
            </div>
          )}
        </div>

        {/* File Details Form */}
        {selectedFile && !isUploading && uploadProgress === 0 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="category">
                {isArabic ? "الفئة" : "Category"}
              </Label>
              <Select value={category} onValueChange={(value: any) => setCategory(value)}>
                <SelectTrigger id="category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="report">
                    {isArabic ? "تقرير" : "Report"}
                  </SelectItem>
                  <SelectItem value="chart">
                    {isArabic ? "مخطط" : "Chart"}
                  </SelectItem>
                  <SelectItem value="document">
                    {isArabic ? "مستند" : "Document"}
                  </SelectItem>
                  <SelectItem value="image">
                    {isArabic ? "صورة" : "Image"}
                  </SelectItem>
                  <SelectItem value="other">
                    {isArabic ? "أخرى" : "Other"}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">
                {isArabic ? "الوصف (اختياري)" : "Description (optional)"}
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={isArabic ? "أضف وصفاً للملف..." : "Add a description for the file..."}
                rows={3}
              />
            </div>

            <Button
              onClick={handleUpload}
              className="w-full"
              disabled={isUploading}
            >
              {isArabic ? "رفع الملف" : "Upload File"}
            </Button>
          </div>
        )}

        {/* Supported File Types Info */}
        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium mb-1">
                {isArabic ? "أنواع الملفات المدعومة:" : "Supported file types:"}
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>{isArabic ? "مستندات PDF" : "PDF documents"}</li>
                <li>{isArabic ? "صور (PNG, JPG, JPEG, GIF)" : "Images (PNG, JPG, JPEG, GIF)"}</li>
                <li>{isArabic ? "مستندات Word (DOC, DOCX)" : "Word documents (DOC, DOCX)"}</li>
                <li>{isArabic ? "جداول Excel (XLS, XLSX)" : "Excel spreadsheets (XLS, XLSX)"}</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
