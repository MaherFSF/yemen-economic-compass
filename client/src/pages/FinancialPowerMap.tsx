import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, TrendingUp, Shield, DollarSign, Users, Building2, Info } from "lucide-react";

interface Actor {
  id: number;
  name: string;
  nameAr: string;
  category: "state" | "non-state" | "international" | "financial";
  power: number; // 0-100
  legitimacy: number; // 0-100
  description: string;
  descriptionAr: string;
  territorialControl: string;
  territorialControlAr: string;
  revenueSource: string;
  revenueSourceAr: string;
  financialCapacity: string;
  financialCapacityAr: string;
  internationalRecognition: string;
  internationalRecognitionAr: string;
  color: string;
}

const actors: Actor[] = [
  {
    id: 1,
    name: "Internationally Recognized Government (IRG)",
    nameAr: "الحكومة المعترف بها دولياً",
    category: "state",
    power: 45,
    legitimacy: 75,
    description: "The internationally recognized government based in Aden holds formal legitimacy but faces challenges in exercising effective control over territory and financial institutions. Controls CBY-Aden and has access to international financial support.",
    descriptionAr: "الحكومة المعترف بها دولياً المقرة في عدن تمتلك الشرعية الرسمية ولكنها تواجه تحديات في ممارسة السيطرة الفعلية على الأراضي والمؤسسات المالية. تسيطر على البنك المركزي عدن ولديها وصول إلى الدعم المالي الدولي.",
    territorialControl: "Southern and Eastern Yemen (partial)",
    territorialControlAr: "جنوب وشرق اليمن (جزئي)",
    revenueSource: "Oil/gas exports, international aid, customs",
    revenueSourceAr: "صادرات النفط/الغاز، المساعدات الدولية، الجمارك",
    financialCapacity: "Moderate - dependent on external support",
    financialCapacityAr: "متوسطة - تعتمد على الدعم الخارجي",
    internationalRecognition: "Full recognition by UN and international community",
    internationalRecognitionAr: "اعتراف كامل من الأمم المتحدة والمجتمع الدولي",
    color: "#3b82f6"
  },
  {
    id: 2,
    name: "Ansar Allah (Houthis)",
    nameAr: "أنصار الله (الحوثيون)",
    category: "non-state",
    power: 70,
    legitimacy: 35,
    description: "De facto authority in northern Yemen with control over CBY-Sana'a, major population centers, and key economic infrastructure. Exercises significant financial control through taxation, customs, and regulatory enforcement.",
    descriptionAr: "السلطة الفعلية في شمال اليمن مع السيطرة على البنك المركزي صنعاء، والمراكز السكانية الرئيسية، والبنية التحتية الاقتصادية الرئيسية. تمارس سيطرة مالية كبيرة من خلال الضرائب والجمارك والإنفاذ التنظيمي.",
    territorialControl: "Northern Yemen including Sana'a (70% of population)",
    territorialControlAr: "شمال اليمن بما في ذلك صنعاء (70% من السكان)",
    revenueSource: "Customs (Hodeidah port), taxation, telecom revenues",
    revenueSourceAr: "الجمارك (ميناء الحديدة)، الضرائب، إيرادات الاتصالات",
    financialCapacity: "High - effective revenue collection",
    financialCapacityAr: "عالية - تحصيل إيرادات فعال",
    internationalRecognition: "Not recognized; designated as terrorist organization by some",
    internationalRecognitionAr: "غير معترف به؛ مصنف كمنظمة إرهابية من قبل البعض",
    color: "#ef4444"
  },
  {
    id: 3,
    name: "Southern Transitional Council (STC)",
    nameAr: "المجلس الانتقالي الجنوبي",
    category: "non-state",
    power: 40,
    legitimacy: 45,
    description: "Separatist movement with de facto control over parts of southern Yemen including Aden. Competes with IRG for authority and has influence over local financial flows and port revenues.",
    descriptionAr: "حركة انفصالية ذات سيطرة فعلية على أجزاء من جنوب اليمن بما في ذلك عدن. تتنافس مع الحكومة المعترف بها دولياً على السلطة ولها تأثير على التدفقات المالية المحلية وإيرادات الموانئ.",
    territorialControl: "Aden and parts of southern governorates",
    territorialControlAr: "عدن وأجزاء من المحافظات الجنوبية",
    revenueSource: "Port revenues (Aden), local taxation, UAE support",
    revenueSourceAr: "إيرادات الموانئ (عدن)، الضرائب المحلية، الدعم الإماراتي",
    financialCapacity: "Moderate - localized revenue base",
    financialCapacityAr: "متوسطة - قاعدة إيرادات محلية",
    internationalRecognition: "Limited; supported by UAE",
    internationalRecognitionAr: "محدود؛ مدعوم من الإمارات",
    color: "#f59e0b"
  },
  {
    id: 4,
    name: "Saudi-led Coalition",
    nameAr: "التحالف بقيادة السعودية",
    category: "international",
    power: 60,
    legitimacy: 50,
    description: "Military coalition supporting IRG with significant financial leverage through aid, budget support, and control over key economic assets. Influences monetary policy and financial sector decisions.",
    descriptionAr: "تحالف عسكري يدعم الحكومة المعترف بها دولياً برافعة مالية كبيرة من خلال المساعدات ودعم الميزانية والسيطرة على الأصول الاقتصادية الرئيسية. يؤثر على السياسة النقدية وقرارات القطاع المالي.",
    territorialControl: "None (military presence and air operations)",
    territorialControlAr: "لا شيء (وجود عسكري وعمليات جوية)",
    revenueSource: "N/A (provides financial support to IRG)",
    revenueSourceAr: "غير متاح (يقدم الدعم المالي للحكومة المعترف بها دولياً)",
    financialCapacity: "Very High - major donor and creditor",
    financialCapacityAr: "عالية جداً - مانح ودائن رئيسي",
    internationalRecognition: "Full recognition as sovereign states",
    internationalRecognitionAr: "اعتراف كامل كدول ذات سيادة",
    color: "#10b981"
  },
  {
    id: 5,
    name: "International Humanitarian Agencies",
    nameAr: "الوكالات الإنسانية الدولية",
    category: "international",
    power: 55,
    legitimacy: 80,
    description: "UN agencies, INGOs, and humanitarian organizations controlling billions in aid flows. Significant influence over financial channels through cash transfer programs and humanitarian operations.",
    descriptionAr: "وكالات الأمم المتحدة والمنظمات غير الحكومية الدولية والمنظمات الإنسانية التي تسيطر على مليارات من تدفقات المساعدات. تأثير كبير على القنوات المالية من خلال برامج التحويلات النقدية والعمليات الإنسانية.",
    territorialControl: "None (operational presence nationwide)",
    territorialControlAr: "لا شيء (وجود تشغيلي على المستوى الوطني)",
    revenueSource: "N/A (disburses $2.5B+ annually in aid)",
    revenueSourceAr: "غير متاح (تصرف أكثر من 2.5 مليار دولار سنوياً في المساعدات)",
    financialCapacity: "Very High - major capital flows",
    financialCapacityAr: "عالية جداً - تدفقات رأسمالية كبيرة",
    internationalRecognition: "Full recognition and operational access",
    internationalRecognitionAr: "اعتراف كامل ووصول تشغيلي",
    color: "#8b5cf6"
  },
  {
    id: 6,
    name: "Money Exchangers & Microfinance Banks",
    nameAr: "الصرافون وبنوك التمويل الأصغر",
    category: "financial",
    power: 65,
    legitimacy: 60,
    description: "Parallel financial system handling majority of payments, remittances, and humanitarian transfers. Operates across conflict lines with de facto monopoly on cross-border financial flows.",
    descriptionAr: "نظام مالي موازٍ يتعامل مع غالبية المدفوعات والتحويلات والتحويلات الإنسانية. يعمل عبر خطوط الصراع مع احتكار فعلي للتدفقات المالية عبر الحدود.",
    territorialControl: "None (operational networks nationwide)",
    territorialControlAr: "لا شيء (شبكات تشغيلية على المستوى الوطني)",
    revenueSource: "Transaction fees, exchange margins, float income",
    revenueSourceAr: "رسوم المعاملات، هوامش الصرف، دخل التعويم",
    financialCapacity: "High - controls payment infrastructure",
    financialCapacityAr: "عالية - تسيطر على البنية التحتية للمدفوعات",
    internationalRecognition: "Operational partnerships with UN/INGOs",
    internationalRecognitionAr: "شراكات تشغيلية مع الأمم المتحدة/المنظمات غير الحكومية الدولية",
    color: "#ec4899"
  },
  {
    id: 7,
    name: "Commercial Banks",
    nameAr: "البنوك التجارية",
    category: "financial",
    power: 25,
    legitimacy: 40,
    description: "Traditional banking sector severely weakened by conflict, dual regulation, and loss of market share to parallel financial system. Limited operational capacity and declining public trust.",
    descriptionAr: "القطاع المصرفي التقليدي ضعيف بشدة بسبب الصراع والتنظيم المزدوج وفقدان حصة السوق لصالح النظام المالي الموازي. قدرة تشغيلية محدودة وثقة عامة متراجعة.",
    territorialControl: "None (branch networks divided by frontlines)",
    territorialControlAr: "لا شيء (شبكات الفروع مقسمة بخطوط المواجهة)",
    revenueSource: "Treasury bills, declining fee income",
    revenueSourceAr: "أذون الخزانة، دخل رسوم متراجع",
    financialCapacity: "Low - severely constrained operations",
    financialCapacityAr: "منخفضة - عمليات مقيدة بشدة",
    internationalRecognition: "Formal banking licenses (dual regulation)",
    internationalRecognitionAr: "تراخيص مصرفية رسمية (تنظيم مزدوج)",
    color: "#64748b"
  },
  {
    id: 8,
    name: "Expatriate Yemeni Diaspora",
    nameAr: "الشتات اليمني المغترب",
    category: "international",
    power: 50,
    legitimacy: 70,
    description: "Yemeni workers abroad sending $3.8B+ annually in remittances, representing critical lifeline for household consumption. Influences financial channel choice and exchange rate dynamics.",
    descriptionAr: "العمال اليمنيون في الخارج يرسلون أكثر من 3.8 مليار دولار سنوياً في التحويلات، مما يمثل شريان حياة حرج لاستهلاك الأسر. يؤثر على اختيار القناة المالية وديناميكيات سعر الصرف.",
    territorialControl: "None (external actors)",
    territorialControlAr: "لا شيء (فاعلون خارجيون)",
    revenueSource: "N/A (source of remittance inflows)",
    revenueSourceAr: "غير متاح (مصدر تدفقات التحويلات)",
    financialCapacity: "High - $3.8B+ annual remittances",
    financialCapacityAr: "عالية - أكثر من 3.8 مليار دولار تحويلات سنوية",
    internationalRecognition: "N/A (individual citizens abroad)",
    internationalRecognitionAr: "غير متاح (مواطنون أفراد في الخارج)",
    color: "#06b6d4"
  }
];

export default function FinancialPowerMap() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [selectedActor, setSelectedActor] = useState<Actor | null>(null);
  const [hoveredActor, setHoveredActor] = useState<Actor | null>(null);

  const displayedActor = hoveredActor || selectedActor;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {language === "en" 
              ? "Financial Power Map: Yemen's Stakeholder Landscape" 
              : "خريطة القوة المالية: مشهد أصحاب المصلحة في اليمن"}
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            {language === "en" 
              ? "Interactive analysis of power dynamics and legitimacy among key financial actors" 
              : "تحليل تفاعلي لديناميكيات القوة والشرعية بين الفاعلين الماليين الرئيسيين"}
          </p>
          <Button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            variant="outline"
            className="mb-6"
          >
            {language === "en" ? "العربية" : "English"}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Power-Legitimacy Scatter Plot */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  {language === "en" ? "Power vs Legitimacy Matrix" : "مصفوفة القوة مقابل الشرعية"}
                </CardTitle>
                <CardDescription>
                  {language === "en" 
                    ? "Position of actors based on their financial power and political legitimacy" 
                    : "موقع الفاعلين بناءً على قوتهم المالية وشرعيتهم السياسية"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-[600px] bg-white rounded-lg border-2 border-slate-200">
                  {/* Axes */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-300" style={{ bottom: "10%" }} />
                  <div className="absolute top-0 bottom-0 left-0 w-px bg-slate-300" style={{ left: "10%" }} />
                  
                  {/* Axis Labels */}
                  <div className="absolute bottom-2 right-4 text-sm font-semibold text-slate-600">
                    {language === "en" ? "Legitimacy →" : "الشرعية ←"}
                  </div>
                  <div className="absolute top-4 left-2 text-sm font-semibold text-slate-600 -rotate-90 origin-left">
                    {language === "en" ? "Power →" : "القوة ←"}
                  </div>
                  
                  {/* Quadrant Labels */}
                  <div className="absolute top-[15%] right-[15%] text-xs text-slate-400 font-semibold">
                    {language === "en" ? "High Power, High Legitimacy" : "قوة عالية، شرعية عالية"}
                  </div>
                  <div className="absolute top-[15%] left-[15%] text-xs text-slate-400 font-semibold">
                    {language === "en" ? "High Power, Low Legitimacy" : "قوة عالية، شرعية منخفضة"}
                  </div>
                  <div className="absolute bottom-[15%] right-[15%] text-xs text-slate-400 font-semibold">
                    {language === "en" ? "Low Power, High Legitimacy" : "قوة منخفضة، شرعية عالية"}
                  </div>
                  <div className="absolute bottom-[15%] left-[15%] text-xs text-slate-400 font-semibold">
                    {language === "en" ? "Low Power, Low Legitimacy" : "قوة منخفضة، شرعية منخفضة"}
                  </div>
                  
                  {/* Grid Lines */}
                  {[25, 50, 75].map(val => (
                    <div key={`h-${val}`} className="absolute left-0 right-0 h-px bg-slate-100" style={{ bottom: `${10 + val * 0.8}%` }} />
                  ))}
                  {[25, 50, 75].map(val => (
                    <div key={`v-${val}`} className="absolute top-0 bottom-0 w-px bg-slate-100" style={{ left: `${10 + val * 0.8}%` }} />
                  ))}
                  
                  {/* Actors */}
                  {actors.map(actor => {
                    const x = 10 + actor.legitimacy * 0.8;
                    const y = 90 - actor.power * 0.8;
                    const isSelected = selectedActor?.id === actor.id;
                    const isHovered = hoveredActor?.id === actor.id;
                    
                    return (
                      <div
                        key={actor.id}
                        className="absolute cursor-pointer transition-all"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                          zIndex: isSelected || isHovered ? 20 : 10
                        }}
                        onClick={() => setSelectedActor(actor)}
                        onMouseEnter={() => setHoveredActor(actor)}
                        onMouseLeave={() => setHoveredActor(null)}
                      >
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transition-all ${
                            isSelected || isHovered ? "scale-125 ring-4 ring-blue-300" : ""
                          }`}
                          style={{ backgroundColor: actor.color }}
                        >
                          {actor.id}
                        </div>
                        {(isSelected || isHovered) && (
                          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded shadow-lg text-xs font-semibold whitespace-nowrap border-2"
                               style={{ borderColor: actor.color }}>
                            {language === "en" ? actor.name : actor.nameAr}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                {/* Legend */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {actors.map(actor => (
                    <button
                      key={actor.id}
                      onClick={() => setSelectedActor(actor)}
                      className={`flex items-center gap-2 p-2 rounded border-2 transition-all ${
                        selectedActor?.id === actor.id ? "bg-blue-50 border-blue-600" : "border-slate-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                           style={{ backgroundColor: actor.color }}>
                        {actor.id}
                      </div>
                      <span className="text-xs font-medium text-slate-700 truncate">
                        {language === "en" ? actor.name.split(" ")[0] : actor.nameAr.split(" ")[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actor Details Panel */}
          <div>
            {displayedActor ? (
              <Card className="sticky top-4">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                         style={{ backgroundColor: displayedActor.color }}>
                      {displayedActor.id}
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {language === "en" ? displayedActor.name : displayedActor.nameAr}
                      </CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {displayedActor.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">
                    {language === "en" ? displayedActor.description : displayedActor.descriptionAr}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Target className="h-4 w-4 text-blue-600" />
                        <span className="text-xs font-semibold text-slate-600">
                          {language === "en" ? "Power Score" : "درجة القوة"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600" style={{ width: `${displayedActor.power}%` }} />
                        </div>
                        <span className="text-sm font-bold text-blue-600">{displayedActor.power}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="h-4 w-4 text-green-600" />
                        <span className="text-xs font-semibold text-slate-600">
                          {language === "en" ? "Legitimacy Score" : "درجة الشرعية"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-600" style={{ width: `${displayedActor.legitimacy}%` }} />
                        </div>
                        <span className="text-sm font-bold text-green-600">{displayedActor.legitimacy}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Tabs defaultValue="control">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="control">
                        {language === "en" ? "Control" : "السيطرة"}
                      </TabsTrigger>
                      <TabsTrigger value="financial">
                        {language === "en" ? "Financial" : "المالية"}
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="control" className="mt-4 space-y-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 className="h-4 w-4 text-slate-600" />
                          <span className="text-xs font-semibold text-slate-600">
                            {language === "en" ? "Territorial Control" : "السيطرة الإقليمية"}
                          </span>
                        </div>
                        <p className="text-sm text-slate-700">
                          {language === "en" ? displayedActor.territorialControl : displayedActor.territorialControlAr}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Info className="h-4 w-4 text-slate-600" />
                          <span className="text-xs font-semibold text-slate-600">
                            {language === "en" ? "International Recognition" : "الاعتراف الدولي"}
                          </span>
                        </div>
                        <p className="text-sm text-slate-700">
                          {language === "en" ? displayedActor.internationalRecognition : displayedActor.internationalRecognitionAr}
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="financial" className="mt-4 space-y-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign className="h-4 w-4 text-slate-600" />
                          <span className="text-xs font-semibold text-slate-600">
                            {language === "en" ? "Revenue Source" : "مصدر الإيرادات"}
                          </span>
                        </div>
                        <p className="text-sm text-slate-700">
                          {language === "en" ? displayedActor.revenueSource : displayedActor.revenueSourceAr}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="h-4 w-4 text-slate-600" />
                          <span className="text-xs font-semibold text-slate-600">
                            {language === "en" ? "Financial Capacity" : "القدرة المالية"}
                          </span>
                        </div>
                        <p className="text-sm text-slate-700">
                          {language === "en" ? displayedActor.financialCapacity : displayedActor.financialCapacityAr}
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <Users className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">
                    {language === "en" 
                      ? "Click on an actor in the map to view detailed information" 
                      : "انقر على فاعل في الخريطة لعرض معلومات مفصلة"}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Insights */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>{language === "en" ? "Key Insights" : "رؤى رئيسية"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">
                  {language === "en" ? "Legitimacy-Power Gap" : "فجوة الشرعية والقوة"}
                </h4>
                <p className="text-sm text-blue-800">
                  {language === "en" 
                    ? "IRG holds high legitimacy (75) but moderate power (45), while Houthis have high power (70) but low legitimacy (35)" 
                    : "الحكومة المعترف بها دولياً تمتلك شرعية عالية (75) لكن قوة متوسطة (45)، بينما الحوثيون لديهم قوة عالية (70) لكن شرعية منخفضة (35)"}
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">
                  {language === "en" ? "Financial Sector Dominance" : "هيمنة القطاع المالي"}
                </h4>
                <p className="text-sm text-green-800">
                  {language === "en" 
                    ? "Money exchangers (65 power, 60 legitimacy) have surpassed commercial banks (25 power, 40 legitimacy) as primary financial infrastructure" 
                    : "الصرافون (65 قوة، 60 شرعية) تجاوزوا البنوك التجارية (25 قوة، 40 شرعية) كبنية تحتية مالية أساسية"}
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">
                  {language === "en" ? "Humanitarian Influence" : "التأثير الإنساني"}
                </h4>
                <p className="text-sm text-purple-800">
                  {language === "en" 
                    ? "International agencies (55 power, 80 legitimacy) wield significant financial influence through $2.5B+ annual aid flows" 
                    : "الوكالات الدولية (55 قوة، 80 شرعية) تمارس تأثيراً مالياً كبيراً من خلال تدفقات مساعدات تزيد عن 2.5 مليار دولار سنوياً"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
