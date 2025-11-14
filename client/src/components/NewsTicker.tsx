import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, AlertCircle, DollarSign, Building2 } from "lucide-react";

interface NewsItem {
  id: string;
  titleEn: string;
  titleAr: string;
  source: string;
  date: string;
  category: "fx" | "policy" | "aid" | "oil" | "banking";
  url?: string;
}

const newsData: NewsItem[] = [
  {
    id: "1",
    titleEn: "CBY-Aden announces new FX auction rules to stabilize the riyal",
    titleAr: "البنك المركزي في عدن يعلن قواعد جديدة لمزادات العملة لتحقيق الاستقرار",
    source: "CBY-Aden",
    date: "2025-03-15",
    category: "policy",
    url: "#"
  },
  {
    id: "2",
    titleEn: "Exchange rate in Aden reaches 1,650 YER/USD amid liquidity crisis",
    titleAr: "سعر الصرف في عدن يصل إلى 1,650 ريال/دولار وسط أزمة سيولة",
    source: "Market Data",
    date: "2025-03-14",
    category: "fx",
    url: "#"
  },
  {
    id: "3",
    titleEn: "UN announces $2.7B humanitarian appeal for Yemen in 2025",
    titleAr: "الأمم المتحدة تعلن نداء إنساني بقيمة 2.7 مليار دولار لليمن في 2025",
    source: "OCHA",
    date: "2025-03-10",
    category: "aid",
    url: "#"
  },
  {
    id: "4",
    titleEn: "Oil exports from Marib resume after 3-month halt",
    titleAr: "استئناف صادرات النفط من مأرب بعد توقف 3 أشهر",
    source: "Reuters",
    date: "2025-03-08",
    category: "oil",
    url: "#"
  },
  {
    id: "5",
    titleEn: "13 microfinance banks report 2.5M active e-money users",
    titleAr: "13 بنك تمويل أصغر يبلغ عن 2.5 مليون مستخدم نشط للنقد الإلكتروني",
    source: "CBY-Sana'a",
    date: "2025-03-05",
    category: "banking",
    url: "#"
  },
  {
    id: "6",
    titleEn: "US Treasury adds 3 Yemeni exchange companies to OFAC sanctions list",
    titleAr: "وزارة الخزانة الأمريكية تضيف 3 شركات صرافة يمنية إلى قائمة العقوبات",
    source: "OFAC",
    date: "2025-03-01",
    category: "policy",
    url: "#"
  }
];

export default function NewsTicker() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "fx": return <TrendingUp className="h-4 w-4" />;
      case "policy": return <AlertCircle className="h-4 w-4" />;
      case "aid": return <DollarSign className="h-4 w-4" />;
      case "oil": return <TrendingUp className="h-4 w-4" />;
      case "banking": return <Building2 className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };
  
  const getCategoryLabel = (category: string) => {
    const labels = {
      fx: { en: "Exchange Rate", ar: "سعر الصرف" },
      policy: { en: "Policy", ar: "سياسة" },
      aid: { en: "Humanitarian Aid", ar: "مساعدات إنسانية" },
      oil: { en: "Oil & Energy", ar: "نفط وطاقة" },
      banking: { en: "Banking", ar: "مصرفية" }
    };
    return isArabic ? labels[category as keyof typeof labels].ar : labels[category as keyof typeof labels].en;
  };
  
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    if (isArabic) {
      return date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">
          {isArabic ? "آخر الأخبار المالية" : "Latest Financial News"}
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {isPaused ? (isArabic ? "تشغيل" : "Play") : (isArabic ? "إيقاف" : "Pause")}
          </button>
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {newsData.length}
          </span>
        </div>
      </div>
      
      {/* News Ticker */}
      <Card 
        className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="space-y-4">
          {/* Category Badge */}
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              {getCategoryIcon(newsData[currentIndex].category)}
              {getCategoryLabel(newsData[currentIndex].category)}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {formatDate(newsData[currentIndex].date)}
            </span>
          </div>
          
          {/* Title */}
          <h4 className="text-xl font-semibold leading-tight">
            {isArabic ? newsData[currentIndex].titleAr : newsData[currentIndex].titleEn}
          </h4>
          
          {/* Source */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {isArabic ? "المصدر: " : "Source: "}
              <span className="font-medium">{newsData[currentIndex].source}</span>
            </span>
            {newsData[currentIndex].url && (
              <a 
                href={newsData[currentIndex].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1"
              >
                {isArabic ? "اقرأ المزيد" : "Read more"}
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </Card>
      
      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-2">
        {newsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "w-8 bg-primary" 
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to news ${index + 1}`}
          />
        ))}
      </div>
      
      {/* View All Link */}
      <div className="text-center">
        <a 
          href="/news" 
          className="text-primary hover:underline font-medium"
        >
          {isArabic ? "عرض جميع الأخبار →" : "View all news →"}
        </a>
      </div>
    </div>
  );
}
