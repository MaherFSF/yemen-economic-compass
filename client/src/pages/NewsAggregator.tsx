import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { Search, ExternalLink, Calendar, Tag, TrendingUp, AlertCircle } from "lucide-react";

interface NewsItem {
  id: number;
  title: { en: string; ar: string };
  summary: { en: string; ar: string };
  source: string;
  date: string;
  category: "economic" | "political" | "humanitarian" | "banking" | "international";
  url: string;
  relevance: "high" | "medium" | "low";
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: {
      en: "Yemen's Rial Hits Record Low as Economic Crisis Deepens",
      ar: "الريال اليمني يسجل أدنى مستوى قياسي مع تعمق الأزمة الاقتصادية"
    },
    summary: {
      en: "The Yemeni rial in Aden-controlled areas has fallen to 2,800 per USD, marking a 30% depreciation in 2025 alone and pushing monthly inflation to 35%.",
      ar: "انخفض الريال اليمني في المناطق الخاضعة لعدن إلى 2,800 مقابل الدولار، مسجلاً انخفاضاً بنسبة 30% في عام 2025 وحده ودافعاً التضخم الشهري إلى 35%."
    },
    source: "Reuters",
    date: "2025-07-15",
    category: "economic",
    url: "https://www.reuters.com/world/middle-east/yemen-rial-record-low-2025-07-15/",
    relevance: "high"
  },
  {
    id: 2,
    title: {
      en: "UN Warns of Humanitarian Catastrophe as Aid Funding Falls Short",
      ar: "الأمم المتحدة تحذر من كارثة إنسانية مع نقص تمويل المساعدات"
    },
    summary: {
      en: "Only 19% of the required $2.5 billion humanitarian funding has been secured as of September 2025, threatening aid delivery to millions of Yemenis.",
      ar: "تم تأمين 19% فقط من التمويل الإنساني المطلوب البالغ 2.5 مليار دولار حتى سبتمبر 2025، مما يهدد إيصال المساعدات إلى ملايين اليمنيين."
    },
    source: "UN OCHA",
    date: "2025-09-10",
    category: "humanitarian",
    url: "https://www.unocha.org/yemen/about-ocha-yemen",
    relevance: "high"
  },
  {
    id: 3,
    title: {
      en: "Central Bank of Yemen (Aden) Announces New Monetary Policy Measures",
      ar: "البنك المركزي اليمني (عدن) يعلن إجراءات سياسة نقدية جديدة"
    },
    summary: {
      en: "CBY-Aden has introduced new measures to stabilize the rial, including restrictions on foreign currency transactions and increased oversight of money exchangers.",
      ar: "أدخل البنك المركزي-عدن إجراءات جديدة لاستقرار الريال، بما في ذلك قيود على معاملات العملات الأجنبية وزيادة الرقابة على الصرافين."
    },
    source: "Central Bank of Yemen (Aden)",
    date: "2025-06-20",
    category: "banking",
    url: "https://www.cby-ye.com/",
    relevance: "high"
  },
  {
    id: 4,
    title: {
      en: "Houthi Authorities Impose New Taxes on Businesses in Sana'a",
      ar: "السلطات الحوثية تفرض ضرائب جديدة على الشركات في صنعاء"
    },
    summary: {
      en: "The Houthi-controlled government in Sana'a has introduced new taxation measures targeting businesses and remittances, raising concerns about economic burden on citizens.",
      ar: "أدخلت الحكومة الخاضعة للحوثيين في صنعاء إجراءات ضريبية جديدة تستهدف الشركات والحوالات، مما يثير مخاوف بشأن العبء الاقتصادي على المواطنين."
    },
    source: "Sana'a Center for Strategic Studies",
    date: "2025-05-15",
    category: "economic",
    url: "https://sanaacenter.org/",
    relevance: "medium"
  },
  {
    id: 5,
    title: {
      en: "Saudi Arabia and Houthis Resume Direct Negotiations",
      ar: "السعودية والحوثيون يستأنفون المفاوضات المباشرة"
    },
    summary: {
      en: "Direct talks between Saudi Arabia and Houthi representatives have resumed in Muscat, focusing on economic issues including port operations and salary payments.",
      ar: "استؤنفت المحادثات المباشرة بين السعودية وممثلي الحوثيين في مسقط، مع التركيز على القضايا الاقتصادية بما في ذلك عمليات الموانئ ودفع الرواتب."
    },
    source: "Al Jazeera",
    date: "2025-08-05",
    category: "political",
    url: "https://www.aljazeera.com/",
    relevance: "high"
  },
  {
    id: 6,
    title: {
      en: "World Bank Report: Yemen's GDP Contracted by 50% Since 2015",
      ar: "تقرير البنك الدولي: الناتج المحلي لليمن انكمش بنسبة 50% منذ 2015"
    },
    summary: {
      en: "A new World Bank report confirms that Yemen's real GDP has contracted by approximately 50% since the conflict began, with real income per capita at just 45% of 2015 levels.",
      ar: "تقرير جديد للبنك الدولي يؤكد أن الناتج المحلي الحقيقي لليمن انكمش بنحو 50% منذ بداية الصراع، مع دخل الفرد الحقيقي عند 45% فقط من مستويات 2015."
    },
    source: "World Bank",
    date: "2025-04-10",
    category: "economic",
    url: "https://www.worldbank.org/en/country/yemen",
    relevance: "high"
  },
  {
    id: 7,
    title: {
      en: "Microfinance Institutions Report Record Growth Despite Crisis",
      ar: "مؤسسات التمويل الأصغر تسجل نمواً قياسياً رغم الأزمة"
    },
    summary: {
      en: "Yemen's microfinance sector has grown significantly, with total portfolio reaching $85 million and serving over 260,000 clients, filling the gap left by traditional banks.",
      ar: "نما قطاع التمويل الأصغر في اليمن بشكل كبير، حيث وصلت المحفظة الإجمالية إلى 85 مليون دولار وخدمت أكثر من 260,000 عميل، ملأت الفجوة التي تركتها البنوك التقليدية."
    },
    source: "Social Fund for Development",
    date: "2025-06-01",
    category: "banking",
    url: "https://www.sfd-yemen.org/",
    relevance: "medium"
  },
  {
    id: 8,
    title: {
      en: "Red Sea Shipping Attacks Impact Yemen's Import Capacity",
      ar: "هجمات الشحن في البحر الأحمر تؤثر على قدرة اليمن الاستيرادية"
    },
    summary: {
      en: "Houthi attacks on commercial shipping in the Red Sea have disrupted trade routes, increasing import costs and exacerbating food insecurity in Yemen.",
      ar: "أدت هجمات الحوثيين على الشحن التجاري في البحر الأحمر إلى تعطيل طرق التجارة، مما زاد تكاليف الاستيراد وفاقم انعدام الأمن الغذائي في اليمن."
    },
    source: "BBC News",
    date: "2025-01-20",
    category: "international",
    url: "https://www.bbc.com/news",
    relevance: "high"
  },
  {
    id: 9,
    title: {
      en: "Digital Payment Platforms Expand in Yemen Amid Banking Crisis",
      ar: "منصات الدفع الرقمي تتوسع في اليمن وسط أزمة مصرفية"
    },
    summary: {
      en: "E-money users in Yemen have reached 2.5 million, with digital payment platforms becoming the primary means of financial transactions as traditional banking services remain limited.",
      ar: "وصل مستخدمو النقود الإلكترونية في اليمن إلى 2.5 مليون، حيث أصبحت منصات الدفع الرقمي الوسيلة الأساسية للمعاملات المالية بينما تظل الخدمات المصرفية التقليدية محدودة."
    },
    source: "Middle East Eye",
    date: "2025-03-15",
    category: "banking",
    url: "https://www.middleeasteye.net/",
    relevance: "medium"
  },
  {
    id: 10,
    title: {
      en: "IMF Warns of Prolonged Economic Fragmentation in Yemen",
      ar: "صندوق النقد الدولي يحذر من تشرذم اقتصادي طويل الأمد في اليمن"
    },
    summary: {
      en: "The International Monetary Fund has warned that Yemen's dual monetary system and fragmented economic governance could persist for years, hindering recovery efforts.",
      ar: "حذر صندوق النقد الدولي من أن النظام النقدي المزدوج في اليمن والحوكمة الاقتصادية المجزأة قد تستمر لسنوات، مما يعيق جهود التعافي."
    },
    source: "IMF",
    date: "2025-02-28",
    category: "international",
    url: "https://www.imf.org/en/Countries/YEM",
    relevance: "high"
  },
  {
    id: 11,
    title: {
      en: "Commercial Banks Struggle with Liquidity Crisis",
      ar: "البنوك التجارية تكافح أزمة سيولة"
    },
    summary: {
      en: "Yemen's commercial banks continue to face severe liquidity constraints, with many branches closed and limited capacity to process transactions, forcing customers to rely on alternative channels.",
      ar: "تواصل البنوك التجارية اليمنية مواجهة قيود سيولة شديدة، مع إغلاق العديد من الفروع وقدرة محدودة على معالجة المعاملات، مما يجبر العملاء على الاعتماد على قنوات بديلة."
    },
    source: "Yemen Times",
    date: "2025-07-01",
    category: "banking",
    url: "https://www.yementimes.com/",
    relevance: "medium"
  },
  {
    id: 12,
    title: {
      en: "Food Prices Surge 40% in Government-Controlled Areas",
      ar: "أسعار الغذاء ترتفع 40% في المناطق الخاضعة للحكومة"
    },
    summary: {
      en: "Food prices in government-controlled southern Yemen have surged by 40% in the past six months, driven by currency depreciation and supply chain disruptions.",
      ar: "ارتفعت أسعار الغذاء في جنوب اليمن الخاضع للحكومة بنسبة 40% في الأشهر الستة الماضية، مدفوعة بانخفاض قيمة العملة واضطرابات سلسلة التوريد."
    },
    source: "FEWS NET",
    date: "2025-08-20",
    category: "humanitarian",
    url: "https://fews.net/east-africa/yemen",
    relevance: "high"
  }
];

export default function NewsAggregator() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedRelevance, setSelectedRelevance] = useState<string>("all");

  const categories = [
    { value: "all", label: { en: "All Categories", ar: "جميع الفئات" } },
    { value: "economic", label: { en: "Economic", ar: "اقتصادي" } },
    { value: "political", label: { en: "Political", ar: "سياسي" } },
    { value: "humanitarian", label: { en: "Humanitarian", ar: "إنساني" } },
    { value: "banking", label: { en: "Banking", ar: "مصرفي" } },
    { value: "international", label: { en: "International", ar: "دولي" } }
  ];

  const relevanceLevels = [
    { value: "all", label: { en: "All Relevance", ar: "جميع المستويات" } },
    { value: "high", label: { en: "High Relevance", ar: "أهمية عالية" } },
    { value: "medium", label: { en: "Medium Relevance", ar: "أهمية متوسطة" } },
    { value: "low", label: { en: "Low Relevance", ar: "أهمية منخفضة" } }
  ];

  const categoryColors = {
    economic: "bg-purple-500/10 text-purple-700 border-purple-500",
    political: "bg-blue-500/10 text-blue-700 border-blue-500",
    humanitarian: "bg-orange-500/10 text-orange-700 border-orange-500",
    banking: "bg-green-500/10 text-green-700 border-green-500",
    international: "bg-teal-500/10 text-teal-700 border-teal-500"
  };

  const relevanceColors = {
    high: "bg-red-500/10 text-red-700 border-red-500",
    medium: "bg-yellow-500/10 text-yellow-700 border-yellow-500",
    low: "bg-gray-500/10 text-gray-700 border-gray-500"
  };

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = searchQuery === "" || 
      item.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.ar.includes(searchQuery) ||
      item.summary.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.ar.includes(searchQuery);
    
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesRelevance = selectedRelevance === "all" || item.relevance === selectedRelevance;

    return matchesSearch && matchesCategory && matchesRelevance;
  });

  return (
    <div className="w-full py-12">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="outline">
            {isArabic ? "أخبار مالية واقتصادية" : "Financial & Economic News"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? "مجمع الأخبار" : "News Aggregator"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isArabic
              ? "آخر الأخبار والتطورات حول الاقتصاد اليمني، النظام المصرفي، والأزمة الإنسانية"
              : "Latest news and developments on Yemen's economy, banking system, and humanitarian crisis"
            }
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">{newsItems.length}</div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "إجمالي الأخبار" : "Total News Items"}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-1">
                {newsItems.filter(n => n.relevance === "high").length}
              </div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "أهمية عالية" : "High Relevance"}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {newsItems.filter(n => n.category === "economic").length}
              </div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "أخبار اقتصادية" : "Economic News"}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">
                {newsItems.filter(n => n.category === "humanitarian").length}
              </div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "أخبار إنسانية" : "Humanitarian News"}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              {isArabic ? "البحث والتصفية" : "Search & Filter"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={isArabic ? "ابحث في الأخبار..." : "Search news..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div>
                <div className="text-sm font-medium mb-2">
                  {isArabic ? "الفئة" : "Category"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <Button
                      key={cat.value}
                      variant={selectedCategory === cat.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(cat.value)}
                    >
                      {isArabic ? cat.label.ar : cat.label.en}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Relevance Filter */}
              <div>
                <div className="text-sm font-medium mb-2">
                  {isArabic ? "مستوى الأهمية" : "Relevance Level"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {relevanceLevels.map(rel => (
                    <Button
                      key={rel.value}
                      variant={selectedRelevance === rel.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedRelevance(rel.value)}
                    >
                      {isArabic ? rel.label.ar : rel.label.en}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Active Filters */}
              {(selectedCategory !== "all" || selectedRelevance !== "all" || searchQuery) && (
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-sm text-muted-foreground">
                    {isArabic ? "الفلاتر النشطة:" : "Active Filters:"}
                  </span>
                  {selectedCategory !== "all" && (
                    <Badge variant="secondary">
                      {isArabic 
                        ? categories.find(c => c.value === selectedCategory)?.label.ar
                        : categories.find(c => c.value === selectedCategory)?.label.en}
                    </Badge>
                  )}
                  {selectedRelevance !== "all" && (
                    <Badge variant="secondary">
                      {isArabic
                        ? relevanceLevels.find(r => r.value === selectedRelevance)?.label.ar
                        : relevanceLevels.find(r => r.value === selectedRelevance)?.label.en}
                    </Badge>
                  )}
                  {searchQuery && (
                    <Badge variant="secondary">
                      {isArabic ? "بحث:" : "Search:"} "{searchQuery}"
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                      setSelectedRelevance("all");
                    }}
                  >
                    {isArabic ? "مسح الكل" : "Clear All"}
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6 text-sm text-muted-foreground">
          {isArabic 
            ? `عرض ${filteredNews.length} من ${newsItems.length} خبر`
            : `Showing ${filteredNews.length} of ${newsItems.length} news items`}
        </div>

        {/* News Items */}
        <div className="space-y-6">
          {filteredNews.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">
                  {isArabic ? "لا توجد أخبار تطابق معايير البحث" : "No news items match your search criteria"}
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredNews.map(item => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className={categoryColors[item.category]}>
                          <Tag className="h-3 w-3 mr-1" />
                          {isArabic 
                            ? categories.find(c => c.value === item.category)?.label.ar
                            : categories.find(c => c.value === item.category)?.label.en}
                        </Badge>
                        <Badge variant="outline" className={relevanceColors[item.relevance]}>
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {isArabic
                            ? relevanceLevels.find(r => r.value === item.relevance)?.label.ar
                            : relevanceLevels.find(r => r.value === item.relevance)?.label.en}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">
                        {isArabic ? item.title.ar : item.title.en}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(item.date).toLocaleDateString(isArabic ? "ar-EG" : "en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}
                        </div>
                        <div>{item.source}</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {isArabic ? item.summary.ar : item.summary.en}
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {isArabic ? "اقرأ المزيد" : "Read More"}
                      <ExternalLink className={`h-4 w-4 ${isArabic ? 'mr-2' : 'ml-2'}`} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
