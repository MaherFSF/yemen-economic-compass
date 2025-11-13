import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, MapPin, Users, TrendingUp, AlertCircle, Search, CheckCircle, XCircle, Clock } from "lucide-react";

interface Bank {
  id: string;
  name: string;
  nameAr: string;
  type: "conventional" | "islamic";
  status: "operational" | "suspended" | "relocated" | "split";
  headquarters: string;
  headquartersAr: string;
  controlZone: "aden" | "sanaa" | "both" | "neutral";
  branches: number;
  assets: string;
  assetsAr: string;
  ownership: string;
  ownershipAr: string;
  cbyCompliance: "aden" | "sanaa" | "both" | "neither";
  correspondentBanking: "active" | "limited" | "suspended";
  description: string;
  descriptionAr: string;
  keyIssues: string[];
  keyIssuesAr: string[];
}

const banks: Bank[] = [
  {
    id: "cac",
    name: "Central Bank of Yemen",
    nameAr: "البنك المركزي اليمني",
    type: "conventional",
    status: "split",
    headquarters: "Split: Aden (IRG) / Sana'a (Houthi)",
    headquartersAr: "منقسم: عدن (الحكومة الشرعية) / صنعاء (الحوثي)",
    controlZone: "both",
    branches: 18,
    assets: "N/A (Central Bank)",
    assetsAr: "غير متاح (بنك مركزي)",
    ownership: "Government",
    ownershipAr: "حكومي",
    cbyCompliance: "both",
    correspondentBanking: "suspended",
    description: "Split into two competing entities since 2016, creating parallel monetary systems",
    descriptionAr: "انقسم إلى كيانين متنافسين منذ 2016، مما خلق أنظمة نقدية موازية",
    keyIssues: [
      "Dual monetary authority",
      "Conflicting policies",
      "Loss of international recognition for Sana'a branch",
      "Currency fragmentation"
    ],
    keyIssuesAr: [
      "سلطة نقدية مزدوجة",
      "سياسات متضاربة",
      "فقدان الاعتراف الدولي لفرع صنعاء",
      "تفتت العملة"
    ]
  },
  {
    id: "cac-commercial",
    name: "CAC Bank",
    nameAr: "بنك التسليف التعاوني والزراعي",
    type: "conventional",
    status: "operational",
    headquarters: "Sana'a",
    headquartersAr: "صنعاء",
    controlZone: "sanaa",
    branches: 52,
    assets: "$450 million",
    assetsAr: "450 مليون دولار",
    ownership: "State-owned",
    ownershipAr: "مملوك للدولة",
    cbyCompliance: "sanaa",
    correspondentBanking: "suspended",
    description: "State-owned agricultural and cooperative credit bank, primarily operates in Houthi areas",
    descriptionAr: "بنك ائتمان زراعي وتعاوني مملوك للدولة، يعمل بشكل أساسي في مناطق الحوثيين",
    keyIssues: [
      "Under Houthi control",
      "Limited international access",
      "Focused on agricultural sector",
      "Suspended by CBY-Aden"
    ],
    keyIssuesAr: [
      "تحت سيطرة الحوثيين",
      "وصول دولي محدود",
      "يركز على القطاع الزراعي",
      "معلق من قبل البنك المركزي في عدن"
    ]
  },
  {
    id: "nbe",
    name: "National Bank of Yemen",
    nameAr: "البنك الأهلي اليمني",
    type: "conventional",
    status: "operational",
    headquarters: "Aden",
    headquartersAr: "عدن",
    controlZone: "both",
    branches: 45,
    assets: "$1.2 billion",
    assetsAr: "1.2 مليار دولار",
    ownership: "Private (40% government stake)",
    ownershipAr: "خاص (40٪ حصة حكومية)",
    cbyCompliance: "aden",
    correspondentBanking: "limited",
    description: "Largest commercial bank, relocated HQ to Aden, maintains presence in both zones",
    descriptionAr: "أكبر بنك تجاري، نقل المقر إلى عدن، يحتفظ بوجود في كلا المنطقتين",
    keyIssues: [
      "Dual operations complexity",
      "Liquidity challenges",
      "Correspondent banking restrictions",
      "Regulatory compliance burden"
    ],
    keyIssuesAr: [
      "تعقيد العمليات المزدوجة",
      "تحديات السيولة",
      "قيود المراسلة المصرفية",
      "عبء الامتثال التنظيمي"
    ]
  },
  {
    id: "yib",
    name: "Yemen International Bank",
    nameAr: "بنك اليمن الدولي",
    type: "conventional",
    status: "operational",
    headquarters: "Aden",
    headquartersAr: "عدن",
    controlZone: "both",
    branches: 38,
    assets: "$900 million",
    assetsAr: "900 مليون دولار",
    ownership: "Private",
    ownershipAr: "خاص",
    cbyCompliance: "aden",
    correspondentBanking: "limited",
    description: "Major private bank with strong international connections, relocated to Aden",
    descriptionAr: "بنك خاص كبير مع اتصالات دولية قوية، انتقل إلى عدن",
    keyIssues: [
      "Branch closures in Houthi areas",
      "Reduced correspondent banking",
      "Capital adequacy pressures",
      "Technology infrastructure challenges"
    ],
    keyIssuesAr: [
      "إغلاق فروع في مناطق الحوثيين",
      "تقليل المراسلة المصرفية",
      "ضغوط كفاية رأس المال",
      "تحديات البنية التحتية التكنولوجية"
    ]
  },
  {
    id: "tadhamon",
    name: "Tadhamon International Islamic Bank",
    nameAr: "بنك التضامن الإسلامي الدولي",
    type: "islamic",
    status: "operational",
    headquarters: "Sana'a",
    headquartersAr: "صنعاء",
    controlZone: "both",
    branches: 63,
    assets: "$800 million",
    assetsAr: "800 مليون دولار",
    ownership: "Private (Islamic Development Bank stake)",
    ownershipAr: "خاص (حصة البنك الإسلامي للتنمية)",
    cbyCompliance: "both",
    correspondentBanking: "limited",
    description: "Largest Islamic bank, maintains operations in both zones despite challenges",
    descriptionAr: "أكبر بنك إسلامي، يحتفظ بعمليات في كلا المنطقتين رغم التحديات",
    keyIssues: [
      "Dual regulatory compliance",
      "Sharia compliance challenges",
      "Limited international Islamic banking access",
      "Capital flight concerns"
    ],
    keyIssuesAr: [
      "الامتثال التنظيمي المزدوج",
      "تحديات الامتثال الشرعي",
      "وصول محدود للخدمات المصرفية الإسلامية الدولية",
      "مخاوف هروب رأس المال"
    ]
  },
  {
    id: "ykb",
    name: "Yemen Kuwait Bank",
    nameAr: "بنك اليمن والكويت",
    type: "conventional",
    status: "relocated",
    headquarters: "Aden (formerly Sana'a)",
    headquartersAr: "عدن (سابقاً صنعاء)",
    controlZone: "aden",
    branches: 28,
    assets: "$650 million",
    assetsAr: "650 مليون دولار",
    ownership: "Joint (Kuwaiti partnership)",
    ownershipAr: "مشترك (شراكة كويتية)",
    cbyCompliance: "aden",
    correspondentBanking: "active",
    description: "Relocated entirely to Aden, closed Sana'a operations, maintains Gulf connections",
    descriptionAr: "انتقل بالكامل إلى عدن، أغلق عمليات صنعاء، يحتفظ بالاتصالات الخليجية",
    keyIssues: [
      "Lost Sana'a market access",
      "Reduced branch network",
      "Rebuilding operations in Aden",
      "Staff relocation challenges"
    ],
    keyIssuesAr: [
      "فقدان الوصول إلى سوق صنعاء",
      "تقليص شبكة الفروع",
      "إعادة بناء العمليات في عدن",
      "تحديات نقل الموظفين"
    ]
  },
  {
    id: "alkuraimi",
    name: "Alkuraimi Islamic Microfinance Bank",
    nameAr: "بنك الكريمي الإسلامي للتمويل الأصغر",
    type: "islamic",
    status: "operational",
    headquarters: "Sana'a",
    headquartersAr: "صنعاء",
    controlZone: "both",
    branches: 180,
    assets: "$171 million",
    assetsAr: "171 مليون دولار",
    ownership: "Private (Alkuraimi Group)",
    ownershipAr: "خاص (مجموعة الكريمي)",
    cbyCompliance: "both",
    correspondentBanking: "limited",
    description: "Largest microfinance bank with extensive branch network across Yemen",
    descriptionAr: "أكبر بنك للتمويل الأصغر مع شبكة فروع واسعة في جميع أنحاء اليمن",
    keyIssues: [
      "Dual regulatory oversight",
      "Microfinance sector challenges",
      "High operational costs",
      "Client poverty deepening"
    ],
    keyIssuesAr: [
      "إشراف تنظيمي مزدوج",
      "تحديات قطاع التمويل الأصغر",
      "تكاليف تشغيل عالية",
      "تعميق فقر العملاء"
    ]
  },
  {
    id: "amal",
    name: "Al-Amal Microfinance Bank",
    nameAr: "بنك الأمل للتمويل الأصغر",
    type: "islamic",
    status: "operational",
    headquarters: "Sana'a",
    headquartersAr: "صنعاء",
    controlZone: "both",
    branches: 89,
    assets: "$89 million",
    assetsAr: "89 مليون دولار",
    ownership: "Private (Social Fund for Development backed)",
    ownershipAr: "خاص (مدعوم من الصندوق الاجتماعي للتنمية)",
    cbyCompliance: "both",
    correspondentBanking: "limited",
    description: "Second-largest microfinance bank, strong rural presence",
    descriptionAr: "ثاني أكبر بنك للتمويل الأصغر، حضور ريفي قوي",
    keyIssues: [
      "Rural access challenges",
      "Security concerns",
      "Funding constraints",
      "High NPL ratios"
    ],
    keyIssuesAr: [
      "تحديات الوصول الريفي",
      "مخاوف أمنية",
      "قيود التمويل",
      "نسب قروض متعثرة عالية"
    ]
  },
  {
    id: "ygb",
    name: "Yemen Gulf Bank",
    nameAr: "بنك اليمن والخليج",
    type: "conventional",
    status: "suspended",
    headquarters: "Sana'a",
    headquartersAr: "صنعاء",
    controlZone: "sanaa",
    branches: 20,
    assets: "$300 million",
    assetsAr: "300 مليون دولار",
    ownership: "Private",
    ownershipAr: "خاص",
    cbyCompliance: "sanaa",
    correspondentBanking: "suspended",
    description: "Suspended by CBY-Aden in August 2025 for operating under Houthi control",
    descriptionAr: "معلق من قبل البنك المركزي في عدن في أغسطس 2025 للعمل تحت سيطرة الحوثيين",
    keyIssues: [
      "License suspension by CBY-Aden",
      "Assets freeze measures",
      "Correspondent banking cut-off",
      "International isolation"
    ],
    keyIssuesAr: [
      "تعليق الترخيص من البنك المركزي في عدن",
      "تدابير تجميد الأصول",
      "قطع المراسلة المصرفية",
      "عزلة دولية"
    ]
  },
  {
    id: "united",
    name: "United Bank",
    nameAr: "البنك المتحد",
    type: "conventional",
    status: "suspended",
    headquarters: "Sana'a",
    headquartersAr: "صنعاء",
    controlZone: "sanaa",
    branches: 15,
    assets: "$250 million",
    assetsAr: "250 مليون دولار",
    ownership: "Private",
    ownershipAr: "خاص",
    cbyCompliance: "sanaa",
    correspondentBanking: "suspended",
    description: "Suspended by CBY-Aden for compliance violations and Houthi affiliation",
    descriptionAr: "معلق من قبل البنك المركزي في عدن لانتهاكات الامتثال والانتماء للحوثيين",
    keyIssues: [
      "Regulatory non-compliance",
      "Houthi control allegations",
      "AML/CFT violations",
      "Limited operations"
    ],
    keyIssuesAr: [
      "عدم الامتثال التنظيمي",
      "اتهامات بالسيطرة الحوثية",
      "انتهاكات مكافحة غسل الأموال",
      "عمليات محدودة"
    ]
  }
];

export default function CommercialBanksHub() {
  const [language, setLanguage] = useState<"en" | "ar">("ar");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedZone, setSelectedZone] = useState("all");

  const filteredBanks = banks.filter(bank => {
    const matchesSearch = language === "en"
      ? bank.name.toLowerCase().includes(searchQuery.toLowerCase())
      : bank.nameAr.includes(searchQuery);
    
    const matchesType = selectedType === "all" || bank.type === selectedType;
    const matchesStatus = selectedStatus === "all" || bank.status === selectedStatus;
    const matchesZone = selectedZone === "all" || bank.controlZone === selectedZone;
    
    return matchesSearch && matchesType && matchesStatus && matchesZone;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational": return "bg-green-100 text-green-800 border-green-200";
      case "suspended": return "bg-red-100 text-red-800 border-red-200";
      case "relocated": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "split": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getZoneColor = (zone: string) => {
    switch (zone) {
      case "aden": return "bg-blue-100 text-blue-800";
      case "sanaa": return "bg-red-100 text-red-800";
      case "both": return "bg-purple-100 text-purple-800";
      case "neutral": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getComplianceIcon = (compliance: string) => {
    switch (compliance) {
      case "aden": return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "sanaa": return <AlertCircle className="w-4 h-4 text-red-600" />;
      case "both": return <Clock className="w-4 h-4 text-yellow-600" />;
      case "neither": return <XCircle className="w-4 h-4 text-gray-600" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white py-16">
        <div className="container">
          <div className="flex justify-between items-start mb-6">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Building2 className="w-3 h-3 mr-1" />
                {language === "ar" ? "استخبارات القطاع المصرفي" : "Banking Sector Intelligence"}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {language === "ar" ? "مركز استخبارات البنوك التجارية" : "Commercial Banks Intelligence Hub"}
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl">
                {language === "ar" 
                  ? "قاعدة بيانات شاملة لجميع البنوك التجارية اليمنية مع تتبع الحالة التشغيلية، الامتثال التنظيمي، والأداء المالي في ظل الانقسام المصرفي"
                  : "Comprehensive database of all Yemeni commercial banks with operational status tracking, regulatory compliance, and financial performance amid banking fragmentation"}
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Building2 className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">{banks.length}</div>
                <div className="text-slate-200">{language === "ar" ? "بنك موثق" : "Banks Documented"}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <CheckCircle className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">{banks.filter(b => b.status === "operational").length}</div>
                <div className="text-slate-200">{language === "ar" ? "بنك عامل" : "Operational Banks"}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <XCircle className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">{banks.filter(b => b.status === "suspended").length}</div>
                <div className="text-slate-200">{language === "ar" ? "بنك معلق" : "Suspended Banks"}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <MapPin className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold">{banks.reduce((sum, b) => sum + b.branches, 0)}</div>
                <div className="text-slate-200">{language === "ar" ? "إجمالي الفروع" : "Total Branches"}</div>
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
              <Search className="w-5 h-5" />
              {language === "ar" ? "تصفية البنوك" : "Filter Banks"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder={language === "ar" ? "بحث عن بنك..." : "Search for bank..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder={language === "ar" ? "جميع الأنواع" : "All Types"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === "ar" ? "جميع الأنواع" : "All Types"}</SelectItem>
                  <SelectItem value="conventional">{language === "ar" ? "تقليدي" : "Conventional"}</SelectItem>
                  <SelectItem value="islamic">{language === "ar" ? "إسلامي" : "Islamic"}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder={language === "ar" ? "جميع الحالات" : "All Statuses"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === "ar" ? "جميع الحالات" : "All Statuses"}</SelectItem>
                  <SelectItem value="operational">{language === "ar" ? "عامل" : "Operational"}</SelectItem>
                  <SelectItem value="suspended">{language === "ar" ? "معلق" : "Suspended"}</SelectItem>
                  <SelectItem value="relocated">{language === "ar" ? "منتقل" : "Relocated"}</SelectItem>
                  <SelectItem value="split">{language === "ar" ? "منقسم" : "Split"}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedZone} onValueChange={setSelectedZone}>
                <SelectTrigger>
                  <SelectValue placeholder={language === "ar" ? "جميع المناطق" : "All Zones"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === "ar" ? "جميع المناطق" : "All Zones"}</SelectItem>
                  <SelectItem value="aden">{language === "ar" ? "عدن" : "Aden"}</SelectItem>
                  <SelectItem value="sanaa">{language === "ar" ? "صنعاء" : "Sana'a"}</SelectItem>
                  <SelectItem value="both">{language === "ar" ? "كلاهما" : "Both"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Banks List */}
      <div className="container pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBanks.map(bank => (
            <Card key={bank.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <Badge variant="outline" className={getStatusColor(bank.status)}>
                        {language === "ar" 
                          ? bank.status === "operational" ? "عامل" 
                            : bank.status === "suspended" ? "معلق"
                            : bank.status === "relocated" ? "منتقل"
                            : "منقسم"
                          : bank.status}
                      </Badge>
                      <Badge className={getZoneColor(bank.controlZone)}>
                        {language === "ar" 
                          ? bank.controlZone === "aden" ? "عدن"
                            : bank.controlZone === "sanaa" ? "صنعاء"
                            : bank.controlZone === "both" ? "كلاهما"
                            : "محايد"
                          : bank.controlZone}
                      </Badge>
                      <Badge variant="outline">
                        {language === "ar" 
                          ? bank.type === "conventional" ? "تقليدي" : "إسلامي"
                          : bank.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {language === "ar" ? bank.nameAr : bank.name}
                    </CardTitle>
                    <CardDescription>
                      {language === "ar" ? bank.descriptionAr : bank.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {language === "ar" ? "المقر" : "Headquarters"}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <MapPin className="w-4 h-4" />
                        {language === "ar" ? bank.headquartersAr : bank.headquarters}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {language === "ar" ? "الفروع" : "Branches"}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Building2 className="w-4 h-4" />
                        {bank.branches}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {language === "ar" ? "الأصول" : "Assets"}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <TrendingUp className="w-4 h-4" />
                        {language === "ar" ? bank.assetsAr : bank.assets}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {language === "ar" ? "الملكية" : "Ownership"}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Users className="w-4 h-4" />
                        {language === "ar" ? bank.ownershipAr : bank.ownership}
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">
                        {language === "ar" ? "الامتثال التنظيمي" : "Regulatory Compliance"}
                      </span>
                      {getComplianceIcon(bank.cbyCompliance)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {language === "ar" 
                        ? bank.cbyCompliance === "aden" ? "ملتزم مع البنك المركزي في عدن"
                          : bank.cbyCompliance === "sanaa" ? "يعمل تحت البنك المركزي في صنعاء"
                          : bank.cbyCompliance === "both" ? "امتثال مزدوج"
                          : "غير ملتزم"
                        : `Complies with CBY-${bank.cbyCompliance}`}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">
                      {language === "ar" ? "القضايا الرئيسية" : "Key Issues"}
                    </h4>
                    <ul className="space-y-1">
                      {(language === "ar" ? bank.keyIssuesAr : bank.keyIssues).map((issue, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0 text-amber-600" />
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBanks.length === 0 && (
          <Card>
            <CardContent className="py-16 text-center">
              <Building2 className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">
                {language === "ar" ? "لم يتم العثور على بنوك" : "No banks found"}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
