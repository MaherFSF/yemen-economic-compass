import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Search, ExternalLink, AlertTriangle, Users, Building2, Ban, DollarSign } from "lucide-react";

const sanctions = [
  {
    id: "un-001",
    authority: "UN Security Council",
    type: "Arms Embargo",
    target: "All parties in Yemen",
    targetType: "general",
    date: "2015-04-14",
    resolution: "UNSCR 2216 (2015)",
    description: {
      en: "Comprehensive arms embargo on all parties to the conflict, asset freeze and travel ban on designated individuals",
      ar: "حظر شامل على الأسلحة على جميع أطراف النزاع، تجميد الأصول وحظر السفر على الأفراد المحددين"
    },
    impact: {
      en: "Restricts weapons flow, limits Houthi military capabilities, affects all armed groups",
      ar: "يقيد تدفق الأسلحة، يحد من القدرات العسكرية الحوثية، يؤثر على جميع الجماعات المسلحة"
    },
    status: "active",
    source: "https://www.un.org/securitycouncil/sanctions/2140"
  },
  {
    id: "un-002",
    authority: "UN Security Council",
    type: "Individual Sanctions",
    target: "Abdul Malik al-Houthi",
    targetType: "individual",
    date: "2015-04-14",
    resolution: "UNSCR 2216 (2015)",
    description: {
      en: "Asset freeze and travel ban on Houthi leader Abdul Malik al-Houthi for threatening peace and security",
      ar: "تجميد الأصول وحظر السفر على زعيم الحوثيين عبد الملك الحوثي لتهديد السلام والأمن"
    },
    impact: {
      en: "Limits international financial transactions, restricts travel, symbolic political pressure",
      ar: "يحد من المعاملات المالية الدولية، يقيد السفر، ضغط سياسي رمزي"
    },
    status: "active",
    source: "https://www.un.org/securitycouncil/sanctions/2140/materials"
  },
  {
    id: "un-003",
    authority: "UN Security Council",
    type: "Individual Sanctions",
    target: "Ahmed Ali Abdullah Saleh",
    targetType: "individual",
    date: "2015-04-14",
    resolution: "UNSCR 2216 (2015)",
    description: {
      en: "Asset freeze and travel ban on former president's son for supporting Houthi takeover",
      ar: "تجميد الأصول وحظر السفر على نجل الرئيس السابق لدعم الاستيلاء الحوثي"
    },
    impact: {
      en: "Freezes international assets, prevents international travel, limits financial operations",
      ar: "يجمد الأصول الدولية، يمنع السفر الدولي، يحد من العمليات المالية"
    },
    status: "active",
    source: "https://www.un.org/securitycouncil/sanctions/2140/materials"
  },
  {
    id: "us-001",
    authority: "US Treasury (OFAC)",
    type: "Terrorist Designation",
    target: "Ansar Allah (Houthis)",
    targetType: "organization",
    date: "2021-01-19",
    resolution: "Executive Order 13224",
    description: {
      en: "Designated Houthis as Foreign Terrorist Organization (FTO) and Specially Designated Global Terrorist (SDGT)",
      ar: "تصنيف الحوثيين كمنظمة إرهابية أجنبية (FTO) وإرهابيين عالميين محددين بشكل خاص (SDGT)"
    },
    impact: {
      en: "Severe restrictions on financial transactions, humanitarian concerns, reversed Feb 2021 then re-designated Jan 2024",
      ar: "قيود شديدة على المعاملات المالية، مخاوف إنسانية، تم إلغاؤه في فبراير 2021 ثم أعيد تصنيفه في يناير 2024"
    },
    status: "active",
    source: "https://home.treasury.gov/policy-issues/financial-sanctions/recent-actions"
  },
  {
    id: "us-002",
    authority: "US Treasury (OFAC)",
    type: "Individual Sanctions",
    target: "Sa'id al-Jamal",
    targetType: "individual",
    date: "2023-06-15",
    resolution: "Executive Order 13224",
    description: {
      en: "Designated for leading Houthi financial network, managing oil smuggling operations worth hundreds of millions",
      ar: "تم تصنيفه لقيادة الشبكة المالية الحوثية، إدارة عمليات تهريب النفط بقيمة مئات الملايين"
    },
    impact: {
      en: "Freezes US assets, prohibits US persons from transactions, disrupts Houthi revenue streams",
      ar: "يجمد الأصول الأمريكية، يحظر المعاملات مع الأشخاص الأمريكيين، يعطل مصادر إيرادات الحوثيين"
    },
    status: "active",
    source: "https://home.treasury.gov/news/press-releases/jy1554"
  },
  {
    id: "us-003",
    authority: "US Treasury (OFAC)",
    type: "Entity Sanctions",
    target: "Houthi Financial Network (multiple entities)",
    targetType: "organization",
    date: "2024-01-17",
    resolution: "Executive Order 13224",
    description: {
      en: "Designated network of exchange houses, trading companies, and individuals supporting Houthi financial operations",
      ar: "تصنيف شبكة من محلات الصرافة والشركات التجارية والأفراد الداعمين للعمليات المالية الحوثية"
    },
    impact: {
      en: "Disrupts Houthi access to international financial system, targets revenue generation, affects money exchange operations",
      ar: "يعطل وصول الحوثيين إلى النظام المالي الدولي، يستهدف توليد الإيرادات، يؤثر على عمليات الصرافة"
    },
    status: "active",
    source: "https://home.treasury.gov/news/press-releases/jy2024"
  },
  {
    id: "us-004",
    authority: "US Treasury (OFAC)",
    type: "Individual Sanctions",
    target: "Muhammad Abd al-Qadir al-Dailami",
    targetType: "individual",
    date: "2024-10-17",
    resolution: "Executive Order 13224",
    description: {
      en: "Designated for managing Houthi financial operations, including taxation and customs revenue collection",
      ar: "تم تصنيفه لإدارة العمليات المالية الحوثية، بما في ذلك جمع الضرائب وعائدات الجمارك"
    },
    impact: {
      en: "Freezes assets, blocks transactions, targets Houthi domestic revenue generation",
      ar: "يجمد الأصول، يحظر المعاملات، يستهدف توليد الإيرادات المحلية الحوثية"
    },
    status: "active",
    source: "https://home.treasury.gov/policy-issues/financial-sanctions/recent-actions"
  },
  {
    id: "eu-001",
    authority: "European Union",
    type: "Individual Sanctions",
    target: "Abdul Malik al-Houthi",
    targetType: "individual",
    date: "2015-04-20",
    resolution: "Council Decision 2015/693",
    description: {
      en: "Asset freeze and travel ban on Houthi leader, aligned with UN sanctions",
      ar: "تجميد الأصول وحظر السفر على زعيم الحوثيين، متوافق مع عقوبات الأمم المتحدة"
    },
    impact: {
      en: "Restricts access to EU financial system, prevents travel to EU member states",
      ar: "يقيد الوصول إلى النظام المالي للاتحاد الأوروبي، يمنع السفر إلى الدول الأعضاء"
    },
    status: "active",
    source: "https://www.consilium.europa.eu/en/policies/sanctions/yemen/"
  },
  {
    id: "eu-002",
    authority: "European Union",
    type: "Arms Embargo",
    target: "All parties in Yemen",
    targetType: "general",
    date: "2015-04-20",
    resolution: "Council Decision 2015/693",
    description: {
      en: "Prohibition on sale, supply, transfer or export of arms and related materiel to Yemen",
      ar: "حظر بيع أو توريد أو نقل أو تصدير الأسلحة والمواد ذات الصلة إلى اليمن"
    },
    impact: {
      en: "Restricts weapons flow from EU, complements UN arms embargo",
      ar: "يقيد تدفق الأسلحة من الاتحاد الأوروبي، يكمل حظر الأسلحة الأممي"
    },
    status: "active",
    source: "https://www.consilium.europa.eu/en/policies/sanctions/yemen/"
  },
  {
    id: "uk-001",
    authority: "United Kingdom",
    type: "Individual Sanctions",
    target: "Houthi Financial Network",
    targetType: "organization",
    date: "2024-02-12",
    resolution: "Yemen (Sanctions) Regulations 2020",
    description: {
      en: "Asset freeze on individuals and entities involved in Houthi financial operations and Red Sea attacks",
      ar: "تجميد الأصول على الأفراد والكيانات المشاركة في العمليات المالية الحوثية وهجمات البحر الأحمر"
    },
    impact: {
      en: "Blocks UK-based assets, prevents UK financial institutions from dealing with designated persons",
      ar: "يحظر الأصول في المملكة المتحدة، يمنع المؤسسات المالية البريطانية من التعامل مع الأشخاص المحددين"
    },
    status: "active",
    source: "https://www.gov.uk/government/collections/financial-sanctions-regime-specific-consolidated-lists-and-releases"
  },
];

export default function SanctionsTracker() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  
  const [searchQuery, setSearchQuery] = useState("");
  const [authorityFilter, setAuthorityFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredSanctions = sanctions.filter(sanction => {
    const matchesSearch = searchQuery === "" || 
      sanction.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sanction.description.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sanction.description.ar.includes(searchQuery);
    
    const matchesAuthority = authorityFilter === "all" || sanction.authority === authorityFilter;
    const matchesType = typeFilter === "all" || sanction.type === typeFilter;
    const matchesStatus = statusFilter === "all" || sanction.status === statusFilter;

    return matchesSearch && matchesAuthority && matchesType && matchesStatus;
  });

  const stats = {
    total: sanctions.length,
    active: sanctions.filter(s => s.status === "active").length,
    individuals: sanctions.filter(s => s.targetType === "individual").length,
    organizations: sanctions.filter(s => s.targetType === "organization").length,
    un: sanctions.filter(s => s.authority.includes("UN")).length,
    us: sanctions.filter(s => s.authority.includes("US")).length,
    eu: sanctions.filter(s => s.authority.includes("EU") || s.authority.includes("United Kingdom")).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50" dir={isArabic ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white py-16">
        <div className="container">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Shield className="w-3 h-3 mr-1" />
            {isArabic ? "متتبع العقوبات الشامل" : "Comprehensive Sanctions Tracker"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? "قاعدة بيانات العقوبات على اليمن" : "Yemen Sanctions Database"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {isArabic
              ? "متتبع شامل لعقوبات الأمم المتحدة والولايات المتحدة والاتحاد الأوروبي على الأفراد والكيانات المتعلقة بالصراع اليمني"
              : "Comprehensive tracker of UN, US, and EU sanctions on individuals and entities related to the Yemen conflict"}
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
                <div className="text-xs text-gray-600 mt-1">{isArabic ? "إجمالي العقوبات" : "Total Sanctions"}</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{stats.active}</div>
                <div className="text-xs text-gray-600 mt-1">{isArabic ? "نشطة" : "Active"}</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stats.individuals}</div>
                <div className="text-xs text-gray-600 mt-1">{isArabic ? "أفراد" : "Individuals"}</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{stats.organizations}</div>
                <div className="text-xs text-gray-600 mt-1">{isArabic ? "كيانات" : "Organizations"}</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">{stats.un}</div>
                <div className="text-xs text-gray-600 mt-1">{isArabic ? "الأمم المتحدة" : "UN"}</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">{stats.us}</div>
                <div className="text-xs text-gray-600 mt-1">{isArabic ? "الولايات المتحدة" : "US"}</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">{stats.eu}</div>
                <div className="text-xs text-gray-600 mt-1">{isArabic ? "الاتحاد الأوروبي" : "EU/UK"}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filters */}
      <div className="container pb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              {isArabic ? "بحث وتصفية" : "Search & Filter"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <Input
                  placeholder={isArabic ? "بحث..." : "Search..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Select value={authorityFilter} onValueChange={setAuthorityFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder={isArabic ? "جميع السلطات" : "All Authorities"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{isArabic ? "جميع السلطات" : "All Authorities"}</SelectItem>
                    <SelectItem value="UN Security Council">{isArabic ? "مجلس الأمن" : "UN Security Council"}</SelectItem>
                    <SelectItem value="US Treasury (OFAC)">{isArabic ? "الخزانة الأمريكية" : "US Treasury (OFAC)"}</SelectItem>
                    <SelectItem value="European Union">{isArabic ? "الاتحاد الأوروبي" : "European Union"}</SelectItem>
                    <SelectItem value="United Kingdom">{isArabic ? "المملكة المتحدة" : "United Kingdom"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder={isArabic ? "جميع الأنواع" : "All Types"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{isArabic ? "جميع الأنواع" : "All Types"}</SelectItem>
                    <SelectItem value="Individual Sanctions">{isArabic ? "عقوبات فردية" : "Individual Sanctions"}</SelectItem>
                    <SelectItem value="Entity Sanctions">{isArabic ? "عقوبات كيانات" : "Entity Sanctions"}</SelectItem>
                    <SelectItem value="Arms Embargo">{isArabic ? "حظر أسلحة" : "Arms Embargo"}</SelectItem>
                    <SelectItem value="Terrorist Designation">{isArabic ? "تصنيف إرهابي" : "Terrorist Designation"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder={isArabic ? "جميع الحالات" : "All Status"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{isArabic ? "جميع الحالات" : "All Status"}</SelectItem>
                    <SelectItem value="active">{isArabic ? "نشطة" : "Active"}</SelectItem>
                    <SelectItem value="lifted">{isArabic ? "مرفوعة" : "Lifted"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {(searchQuery || authorityFilter !== "all" || typeFilter !== "all" || statusFilter !== "all") && (
              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {isArabic ? `عرض ${filteredSanctions.length} من ${sanctions.length}` : `Showing ${filteredSanctions.length} of ${sanctions.length}`}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setAuthorityFilter("all");
                    setTypeFilter("all");
                    setStatusFilter("all");
                  }}
                >
                  {isArabic ? "مسح الفلاتر" : "Clear Filters"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Sanctions List */}
      <div className="container pb-12">
        <div className="space-y-4">
          {filteredSanctions.map((sanction) => (
            <Card key={sanction.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={sanction.status === "active" ? "default" : "secondary"}>
                        {sanction.status === "active" ? (isArabic ? "نشطة" : "Active") : (isArabic ? "مرفوعة" : "Lifted")}
                      </Badge>
                      <Badge variant="outline">
                        {sanction.targetType === "individual" && <Users className="w-3 h-3 mr-1" />}
                        {sanction.targetType === "organization" && <Building2 className="w-3 h-3 mr-1" />}
                        {sanction.targetType === "general" && <Ban className="w-3 h-3 mr-1" />}
                        {sanction.targetType === "individual" ? (isArabic ? "فرد" : "Individual") : 
                         sanction.targetType === "organization" ? (isArabic ? "كيان" : "Organization") :
                         (isArabic ? "عام" : "General")}
                      </Badge>
                      <Badge variant="outline" className="bg-gray-100">
                        {sanction.authority}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{sanction.target}</CardTitle>
                    <CardDescription className="text-base">
                      {sanction.type} • {sanction.date} • {sanction.resolution}
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={sanction.source} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {isArabic ? "المصدر" : "Source"}
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    {isArabic ? "الوصف" : "Description"}
                  </h4>
                  <p className="text-gray-700">
                    {isArabic ? sanction.description.ar : sanction.description.en}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    {isArabic ? "التأثير الاقتصادي" : "Economic Impact"}
                  </h4>
                  <p className="text-gray-700">
                    {isArabic ? sanction.impact.ar : sanction.impact.en}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredSanctions.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  {isArabic ? "لا توجد نتائج. جرب تعديل معايير البحث أو التصفية." : "No results found. Try adjusting your search or filter criteria."}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Key Insights */}
      <div className="container pb-12">
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              {isArabic ? "رؤى رئيسية" : "Key Insights"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>
              {isArabic
                ? "• العقوبات الأممية تشمل حظر أسلحة شامل وعقوبات فردية على قادة الحوثيين منذ 2015"
                : "• UN sanctions include comprehensive arms embargo and individual sanctions on Houthi leaders since 2015"}
            </p>
            <p>
              {isArabic
                ? "• الولايات المتحدة أعادت تصنيف الحوثيين كمنظمة إرهابية في يناير 2024 بعد هجمات البحر الأحمر"
                : "• US re-designated Houthis as terrorist organization in January 2024 following Red Sea attacks"}
            </p>
            <p>
              {isArabic
                ? "• العقوبات الأمريكية تستهدف الشبكة المالية الحوثية، بما في ذلك عمليات تهريب النفط"
                : "• US sanctions target Houthi financial network, including oil smuggling operations"}
            </p>
            <p>
              {isArabic
                ? "• الاتحاد الأوروبي والمملكة المتحدة يحافظان على عقوبات متوافقة مع الأمم المتحدة"
                : "• EU and UK maintain sanctions aligned with UN measures"}
            </p>
            <p>
              {isArabic
                ? "• العقوبات أثرت بشكل كبير على وصول الحوثيين إلى النظام المالي الدولي"
                : "• Sanctions have significantly impacted Houthi access to international financial system"}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
