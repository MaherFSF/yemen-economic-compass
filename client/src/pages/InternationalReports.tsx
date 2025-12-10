import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, ExternalLink, Calendar, Building2, Search, Filter } from "lucide-react";

interface Report {
  id: string;
  title: string;
  titleAr: string;
  organization: string;
  organizationAr: string;
  date: string;
  category: string;
  categoryAr: string;
  url: string;
  summary: string;
  summaryAr: string;
  keyFindings: string[];
  keyFindingsAr: string[];
}

const reports: Report[] = [
  {
    id: "wb-yem-2025",
    title: "Yemen Economic Monitor: Persistent Fragility amid Rising Risks",
    titleAr: "مرصد اليمن الاقتصادي: هشاشة مستمرة وسط مخاطر متزايدة",
    organization: "World Bank",
    organizationAr: "البنك الدولي",
    date: "June 2025",
    category: "Economic Analysis",
    categoryAr: "تحليل اقتصادي",
    url: "https://documents1.worldbank.org/curated/en/099822505292530706/pdf/IDU-7009880b-d070-472d-9bf2-5cc72a3fc75d.pdf",
    summary: "The Yemen Economic Monitor provides an update on key economic developments and policies over the past six months. Real GDP is projected to contract by 1.5% in 2025, while inflation topped 30% in 2024.",
    summaryAr: "يقدم مرصد اليمن الاقتصادي تحديثاً عن التطورات والسياسات الاقتصادية الرئيسية خلال الأشهر الستة الماضية. من المتوقع أن ينكمش الناتج المحلي الإجمالي الحقيقي بنسبة 1.5٪ في 2025، بينما تجاوز التضخم 30٪ في 2024.",
    keyFindings: [
      "Real GDP per capita has dropped 58% since 2015",
      "Inflation topped 30% in 2024",
      "Ongoing blockade on oil exports continues",
      "Fiscal strain and fragmentation persist",
      "Economic outlook for 2025 remains bleak"
    ],
    keyFindingsAr: [
      "انخفض نصيب الفرد من الناتج المحلي الإجمالي الحقيقي بنسبة 58٪ منذ 2015",
      "تجاوز التضخم 30٪ في 2024",
      "استمرار الحصار على صادرات النفط",
      "استمرار الضغوط المالية والتفتت",
      "تبقى التوقعات الاقتصادية لعام 2025 قاتمة"
    ]
  },
  {
    id: "imf-art4-2025",
    title: "Yemen: Concluding Statement of the 2025 IMF Article IV Mission",
    titleAr: "اليمن: البيان الختامي لبعثة صندوق النقد الدولي للمادة الرابعة 2025",
    organization: "International Monetary Fund",
    organizationAr: "صندوق النقد الدولي",
    date: "October 2025",
    category: "Economic Assessment",
    categoryAr: "تقييم اقتصادي",
    url: "https://www.imf.org/en/news/articles/2025/10/09/imf-cs-yemen-2025-imf-article-iv-mission",
    summary: "First IMF Article IV consultation in 11 years. Yemen's economy contracted for the third year in a row in 2024, with GDP contracting by 1.5% due to falling oil and LPG production.",
    summaryAr: "أول مشاورات للمادة الرابعة لصندوق النقد الدولي منذ 11 عاماً. انكمش اقتصاد اليمن للعام الثالث على التوالي في 2024، حيث انكمش الناتج المحلي الإجمالي بنسبة 1.5٪ بسبب انخفاض إنتاج النفط والغاز المسال.",
    keyFindings: [
      "GDP contracted by 1.5% in 2024",
      "Falling oil and LPG production",
      "Projected inflation of 20.4% in 2025",
      "Moderate recovery expected from 2026 (0.5% growth)",
      "First Article IV consultation since 2014"
    ],
    keyFindingsAr: [
      "انكمش الناتج المحلي الإجمالي بنسبة 1.5٪ في 2024",
      "انخفاض إنتاج النفط والغاز المسال",
      "توقعات بتضخم 20.4٪ في 2025",
      "توقعات بتعافٍ معتدل من 2026 (نمو 0.5٪)",
      "أول مشاورات للمادة الرابعة منذ 2014"
    ]
  },
  {
    id: "un-poe-2025",
    title: "UN Panel of Experts on Yemen - Final Report 2025",
    titleAr: "فريق خبراء الأمم المتحدة المعني باليمن - التقرير النهائي 2025",
    organization: "United Nations Security Council",
    organizationAr: "مجلس الأمن التابع للأمم المتحدة",
    date: "October 2025",
    category: "Sanctions & Violations",
    categoryAr: "عقوبات وانتهاكات",
    url: "https://main.un.org/securitycouncil/en/sanctions/2140/panel-of-experts/work-and-mandate/reports",
    summary: "The Panel's 2025 Final Report documents systematic violations of Security Council resolutions, sanctions implementation, and conflict-related economic activities.",
    summaryAr: "يوثق التقرير النهائي لفريق الخبراء لعام 2025 الانتهاكات المنهجية لقرارات مجلس الأمن، وتنفيذ العقوبات، والأنشطة الاقتصادية المرتبطة بالصراع.",
    keyFindings: [
      "Systematic violations of Security Council resolutions",
      "Sanctions evasion mechanisms documented",
      "Illicit financial flows tracked",
      "Arms embargo violations",
      "Economic warfare tactics"
    ],
    keyFindingsAr: [
      "انتهاكات منهجية لقرارات مجلس الأمن",
      "توثيق آليات التهرب من العقوبات",
      "تتبع التدفقات المالية غير المشروعة",
      "انتهاكات حظر الأسلحة",
      "تكتيكات الحرب الاقتصادية"
    ]
  },
  {
    id: "unhcr-arr-2024",
    title: "UNHCR Annual Results Report 2024 - Yemen",
    titleAr: "تقرير النتائج السنوية للمفوضية السامية للأمم المتحدة لشؤون اللاجئين 2024 - اليمن",
    organization: "UNHCR",
    organizationAr: "المفوضية السامية للأمم المتحدة لشؤون اللاجئين",
    date: "May 2025",
    category: "Humanitarian",
    categoryAr: "إنساني",
    url: "https://www.unhcr.org/sites/default/files/2025-06/Yemen%20ARR%202024.pdf",
    summary: "Yemen's economic crisis has left many displaced families in substandard conditions with limited access to services. Inadequate water and sanitation infrastructure compounds the humanitarian crisis.",
    summaryAr: "تركت الأزمة الاقتصادية في اليمن العديد من الأسر النازحة في ظروف دون المستوى مع محدودية الوصول إلى الخدمات. تفاقم البنية التحتية غير الكافية للمياه والصرف الصحي الأزمة الإنسانية.",
    keyFindings: [
      "4.5 million internally displaced persons",
      "Substandard living conditions",
      "Limited access to basic services",
      "Water and sanitation crisis",
      "Protection concerns for vulnerable populations"
    ],
    keyFindingsAr: [
      "4.5 مليون نازح داخلياً",
      "ظروف معيشية دون المستوى",
      "محدودية الوصول إلى الخدمات الأساسية",
      "أزمة المياه والصرف الصحي",
      "مخاوف حماية للفئات الضعيفة"
    ]
  },
  {
    id: "unocha-hrp-2025",
    title: "Yemen Humanitarian Response Plan 2025",
    titleAr: "خطة الاستجابة الإنسانية لليمن 2025",
    organization: "UN OCHA",
    organizationAr: "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية",
    date: "January 2025",
    category: "Humanitarian",
    categoryAr: "إنساني",
    url: "https://www.unocha.org/yemen",
    summary: "In 2025, more than 19 million people in Yemen require humanitarian assistance. The plan calls for $2.47 billion in funding to address urgent needs.",
    summaryAr: "في عام 2025، يحتاج أكثر من 19 مليون شخص في اليمن إلى المساعدة الإنسانية. تدعو الخطة إلى تمويل بقيمة 2.47 مليار دولار لتلبية الاحتياجات العاجلة.",
    keyFindings: [
      "19 million people need humanitarian assistance",
      "$2.47 billion funding requirement",
      "Deepening humanitarian crisis",
      "Food insecurity affects majority",
      "Healthcare system collapse"
    ],
    keyFindingsAr: [
      "19 مليون شخص بحاجة إلى المساعدة الإنسانية",
      "متطلبات تمويل بقيمة 2.47 مليار دولار",
      "تعميق الأزمة الإنسانية",
      "انعدام الأمن الغذائي يؤثر على الأغلبية",
      "انهيار النظام الصحي"
    ]
  },
  {
    id: "fews-fso-2025",
    title: "Yemen Food Security Outlook: October 2025 - May 2026",
    titleAr: "توقعات الأمن الغذائي في اليمن: أكتوبر 2025 - مايو 2026",
    organization: "FEWS NET",
    organizationAr: "شبكة نظم الإنذار المبكر بالمجاعة",
    date: "October 2025",
    category: "Food Security",
    categoryAr: "أمن غذائي",
    url: "https://reliefweb.int/report/yemen/yemen-food-security-outlook-conflict-and-its-impacts-economy-are-resulting-emergency-outcomes-october-2025-may-2026",
    summary: "Conflict and its impacts on the economy are resulting in Emergency (IPC Phase 4) outcomes. Nearly 600,000 farming and herding families face acute food insecurity.",
    summaryAr: "يؤدي الصراع وآثاره على الاقتصاد إلى نتائج طارئة (المرحلة 4 من التصنيف المتكامل لمراحل الأمن الغذائي). يواجه ما يقرب من 600,000 أسرة زراعية ورعوية انعدام الأمن الغذائي الحاد.",
    keyFindings: [
      "Emergency (IPC Phase 4) food insecurity",
      "600,000 farming families affected",
      "Conflict-driven economic collapse",
      "Agricultural sector devastation",
      "Urgent support needed"
    ],
    keyFindingsAr: [
      "انعدام أمن غذائي طارئ (المرحلة 4)",
      "600,000 أسرة زراعية متأثرة",
      "انهيار اقتصادي مدفوع بالصراع",
      "دمار القطاع الزراعي",
      "حاجة ماسة للدعم"
    ]
  }
];

export default function InternationalReports() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrg, setSelectedOrg] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [language, setLanguage] = useState<"en" | "ar">("ar");

  const filteredReports = reports.filter(report => {
    const matchesSearch = language === "en" 
      ? report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.organization.toLowerCase().includes(searchQuery.toLowerCase())
      : report.titleAr.includes(searchQuery) ||
        report.organizationAr.includes(searchQuery);
    
    const matchesOrg = selectedOrg === "all" || report.organization === selectedOrg;
    const matchesCategory = selectedCategory === "all" || report.category === selectedCategory;
    
    return matchesSearch && matchesOrg && matchesCategory;
  });

  const organizations = Array.from(new Set(reports.map(r => r.organization)));
  const categories = Array.from(new Set(reports.map(r => r.category)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="container">
          <div className="flex justify-between items-start mb-6">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <FileText className="w-3 h-3 mr-1" />
                {language === "ar" ? "مكتبة التقارير" : "Reports Library"}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {language === "ar" ? "مستودع التقارير الدولية" : "International Reports Repository"}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl">
                {language === "ar" 
                  ? "مجموعة شاملة من التقارير والدراسات الصادرة عن المنظمات الدولية حول الوضع الاقتصادي والإنساني في اليمن"
                  : "Comprehensive collection of reports and studies from international organizations on Yemen's economic and humanitarian situation"}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              {language === "en" ? "العربية" : "English"}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">{reports.length}</div>
                <div className="text-blue-100">{language === "ar" ? "تقرير متاح" : "Reports Available"}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">{organizations.length}</div>
                <div className="text-blue-100">{language === "ar" ? "منظمة دولية" : "International Organizations"}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">2025</div>
                <div className="text-blue-100">{language === "ar" ? "آخر تحديث" : "Latest Updates"}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              {language === "ar" ? "تصفية التقارير" : "Filter Reports"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder={language === "ar" ? "بحث في التقارير..." : "Search reports..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedOrg} onValueChange={setSelectedOrg}>
                <SelectTrigger>
                  <SelectValue placeholder={language === "ar" ? "جميع المنظمات" : "All Organizations"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === "ar" ? "جميع المنظمات" : "All Organizations"}</SelectItem>
                  {organizations.map(org => (
                    <SelectItem key={org} value={org}>{org}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder={language === "ar" ? "جميع الفئات" : "All Categories"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === "ar" ? "جميع الفئات" : "All Categories"}</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports Grid */}
      <div className="container pb-16">
        <div className="grid grid-cols-1 gap-6">
          {filteredReports.map(report => (
            <Card key={report.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {language === "ar" ? report.organizationAr : report.organization}
                      </Badge>
                      <Badge variant="secondary">
                        {language === "ar" ? report.categoryAr : report.category}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {report.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      {language === "ar" ? report.titleAr : report.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {language === "ar" ? report.summaryAr : report.summary}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    {language === "ar" ? "النتائج الرئيسية" : "Key Findings"}
                  </h4>
                  <ul className="space-y-1">
                    {(language === "ar" ? report.keyFindingsAr : report.keyFindings).map((finding, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  <Button asChild className="flex items-center gap-2">
                    <a href={report.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      {language === "ar" ? "عرض التقرير" : "View Report"}
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="flex items-center gap-2">
                    <a href={report.url} download>
                      <Download className="w-4 h-4" />
                      {language === "ar" ? "تحميل" : "Download"}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <Card>
            <CardContent className="py-16 text-center">
              <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">
                {language === "ar" ? "لم يتم العثور على تقارير" : "No reports found"}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
