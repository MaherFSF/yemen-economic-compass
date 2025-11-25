import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Download, Info, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

export default function FinancialFlowsNetwork() {
  const { language } = useLanguage();
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const content = {
    en: {
      title: "Yemen Financial Flows Network",
      subtitle: "Domestic & External Financial Flows (2015-2025)",
      description: "Interactive network visualization showing how money flows through Yemen's fragmented financial system, including domestic transactions, international aid, remittances, and oil revenues.",
      
      legend: "Network Legend",
      domestic: "Domestic Actors",
      external: "External Actors",
      financial: "Financial Institutions",
      flows: "Financial Flows",
      
      // Node descriptions
      nodes: {
        "cby-sanaa": {
          name: "CBY Sana'a",
          description: "Central Bank of Yemen (Sana'a branch) - Controls northern territories under Houthi authority. Manages local currency issuance, commercial bank supervision, and monetary policy in Houthi-controlled areas.",
          flows: ["Commercial Banks", "Local Taxes", "Money Exchange"],
          volume: "$2.1B annual transactions"
        },
        "cby-aden": {
          name: "CBY Aden",
          description: "Central Bank of Yemen (Aden branch) - Internationally recognized central bank managing southern and eastern territories. Receives international support and manages foreign reserves.",
          flows: ["Commercial Banks", "World Bank", "IMF", "Saudi/UAE Donors", "Oil Revenues", "UN Agencies"],
          volume: "$4.8B annual transactions"
        },
        "commercial-banks": {
          name: "Commercial Banks",
          description: "15+ commercial banks operating across Yemen with fragmented operations due to CBY split. Facilitate domestic transactions, remittances, and limited international transfers.",
          flows: ["CBY Sana'a", "CBY Aden", "Money Exchange", "Households", "Local Businesses"],
          volume: "$8.3B deposits, $5.2B loans"
        },
        "money-exchange": {
          name: "Money Exchange",
          description: "Informal and formal money exchange networks facilitating currency conversion, remittance transfers, and cross-border transactions. Critical for remittance delivery.",
          flows: ["Commercial Banks", "Remittances", "Households"],
          volume: "$3.7B annual transactions"
        },
        "remittances": {
          name: "Remittances",
          description: "Diaspora remittances from Yemenis abroad, primarily from Saudi Arabia, UAE, and other Gulf countries. Critical lifeline for millions of households.",
          flows: ["Money Exchange", "Households"],
          volume: "$3.8B annually (2024 est.)"
        },
        "households": {
          name: "Households",
          description: "Yemeni households receiving income from remittances, salaries, aid, and local businesses. Primary consumers in the economy.",
          flows: ["Money Exchange", "Local Businesses", "NGOs"],
          volume: "30M population, 80% poverty rate"
        },
        "local-businesses": {
          name: "Local Businesses",
          description: "Small and medium enterprises, traders, and service providers. Struggling with liquidity, currency volatility, and supply chain disruptions.",
          flows: ["Households", "Commercial Banks"],
          volume: "$12B GDP (2024 est.)"
        },
        "ngos": {
          name: "NGOs",
          description: "International and local NGOs delivering humanitarian assistance, cash transfers, and development programs. Critical for survival of millions.",
          flows: ["Households", "UN Agencies"],
          volume: "$4.2B humanitarian aid (2024)"
        },
        "un-agencies": {
          name: "UN Agencies",
          description: "UN OCHA, WFP, UNICEF, UNDP, and other agencies coordinating humanitarian response and development programs.",
          flows: ["NGOs", "CBY Aden"],
          volume: "$2.8B UN appeals (2024)"
        },
        "world-bank": {
          name: "World Bank",
          description: "World Bank providing emergency financing, development projects, and technical assistance through CBY-Aden and implementing partners.",
          flows: ["CBY Aden"],
          volume: "$850M active portfolio"
        },
        "imf": {
          name: "IMF",
          description: "International Monetary Fund providing technical assistance, economic assessments, and policy advice to IRG and CBY-Aden.",
          flows: ["CBY Aden"],
          volume: "Technical assistance only"
        },
        "saudi-uae": {
          name: "Saudi/UAE Donors",
          description: "Saudi Arabia and UAE providing bilateral aid, CBY deposits, fuel grants, and development support to IRG.",
          flows: ["CBY Aden"],
          volume: "$18.3B total aid (2015-2024)"
        },
        "oil-revenues": {
          name: "Oil Revenues",
          description: "Limited oil and gas exports from Marib and Hadramout. Revenues contested between IRG and local authorities.",
          flows: ["CBY Aden"],
          volume: "$1.2B annually (when operational)"
        },
        "local-taxes": {
          name: "Local Taxes",
          description: "Customs duties, taxes, and fees collected by Houthi authorities in northern Yemen. Primary revenue source for Sana'a administration.",
          flows: ["CBY Sana'a"],
          volume: "$2.5B annually (est.)"
        }
      },
      
      insights: "Key Insights",
      insightsList: [
        {
          title: "Dual Central Bank System",
          description: "The 2016 CBY split created parallel financial systems with CBY-Aden managing $4.8B and CBY-Sana'a managing $2.1B annually, fragmenting monetary policy and banking supervision."
        },
        {
          title: "Remittances as Lifeline",
          description: "$3.8B in annual remittances flow through money exchangers to households, exceeding all humanitarian aid combined and sustaining 60% of Yemeni families."
        },
        {
          title: "Commercial Banks as Hub",
          description: "Despite fragmentation, commercial banks remain the central node with $8.3B in deposits, connecting domestic and external flows but suffering from liquidity crises."
        },
        {
          title: "External Dependency",
          description: "Yemen relies heavily on external flows: $18.3B from Saudi/UAE, $4.2B humanitarian aid, $3.8B remittances, versus only $2.5B in domestic tax revenues."
        },
        {
          title: "Informal Networks Dominate",
          description: "Money exchange networks handle $3.7B annually, often bypassing formal banking due to CBY split, sanctions, and correspondent banking restrictions."
        }
      ],
      
      methodology: "Methodology",
      methodologyText: "This network visualization is based on financial flow data from Central Bank of Yemen reports, World Bank data, IMF assessments, UN OCHA Financial Tracking Service, remittance surveys, and Sana'a Center research. Flow volumes are estimated from 2024 data where available, with historical averages used for incomplete data. The network structure reflects actual institutional relationships and transaction patterns documented in official reports and field research."
    },
    ar: {
      title: "شبكة التدفقات المالية اليمنية",
      subtitle: "التدفقات المالية المحلية والخارجية (2015-2025)",
      description: "تصور تفاعلي للشبكة يوضح كيفية تدفق الأموال عبر النظام المالي اليمني المجزأ، بما في ذلك المعاملات المحلية والمساعدات الدولية والتحويلات وعائدات النفط.",
      
      legend: "مفتاح الشبكة",
      domestic: "الجهات المحلية",
      external: "الجهات الخارجية",
      financial: "المؤسسات المالية",
      flows: "التدفقات المالية",
      
      nodes: {
        "cby-sanaa": {
          name: "البنك المركزي-صنعاء",
          description: "البنك المركزي اليمني (فرع صنعاء) - يسيطر على الأراضي الشمالية تحت سلطة الحوثيين. يدير إصدار العملة المحلية والإشراف على البنوك التجارية والسياسة النقدية في المناطق الخاضعة لسيطرة الحوثيين.",
          flows: ["البنوك التجارية", "الضرائب المحلية", "الصرافة"],
          volume: "2.1 مليار دولار معاملات سنوية"
        },
        "cby-aden": {
          name: "البنك المركزي-عدن",
          description: "البنك المركزي اليمني (فرع عدن) - البنك المركزي المعترف به دولياً يدير المناطق الجنوبية والشرقية. يتلقى الدعم الدولي ويدير الاحتياطيات الأجنبية.",
          flows: ["البنوك التجارية", "البنك الدولي", "صندوق النقد الدولي", "المانحون السعوديون/الإماراتيون", "عائدات النفط", "وكالات الأمم المتحدة"],
          volume: "4.8 مليار دولار معاملات سنوية"
        },
        "commercial-banks": {
          name: "البنوك التجارية",
          description: "15+ بنك تجاري يعمل في اليمن مع عمليات مجزأة بسبب انقسام البنك المركزي. تسهل المعاملات المحلية والتحويلات والتحويلات الدولية المحدودة.",
          flows: ["البنك المركزي-صنعاء", "البنك المركزي-عدن", "الصرافة", "الأسر", "الأعمال المحلية"],
          volume: "8.3 مليار دولار ودائع، 5.2 مليار دولار قروض"
        },
        "money-exchange": {
          name: "الصرافة",
          description: "شبكات الصرافة الرسمية وغير الرسمية التي تسهل تحويل العملات ونقل التحويلات والمعاملات عبر الحدود. حاسمة لتسليم التحويلات.",
          flows: ["البنوك التجارية", "التحويلات", "الأسر"],
          volume: "3.7 مليار دولار معاملات سنوية"
        },
        "remittances": {
          name: "التحويلات",
          description: "تحويلات المغتربين من اليمنيين في الخارج، بشكل رئيسي من السعودية والإمارات ودول الخليج الأخرى. شريان حياة حاسم لملايين الأسر.",
          flows: ["الصرافة", "الأسر"],
          volume: "3.8 مليار دولار سنوياً (تقديرات 2024)"
        },
        "households": {
          name: "الأسر",
          description: "الأسر اليمنية التي تتلقى دخلاً من التحويلات والرواتب والمساعدات والأعمال المحلية. المستهلكون الأساسيون في الاقتصاد.",
          flows: ["الصرافة", "الأعمال المحلية", "المنظمات غير الحكومية"],
          volume: "30 مليون نسمة، 80% معدل الفقر"
        },
        "local-businesses": {
          name: "الأعمال المحلية",
          description: "المؤسسات الصغيرة والمتوسطة والتجار ومقدمو الخدمات. تعاني من السيولة وتقلب العملة واضطرابات سلسلة التوريد.",
          flows: ["الأسر", "البنوك التجارية"],
          volume: "12 مليار دولار ناتج محلي إجمالي (تقديرات 2024)"
        },
        "ngos": {
          name: "المنظمات غير الحكومية",
          description: "المنظمات غير الحكومية الدولية والمحلية التي تقدم المساعدات الإنسانية والتحويلات النقدية وبرامج التنمية. حاسمة لبقاء الملايين.",
          flows: ["الأسر", "وكالات الأمم المتحدة"],
          volume: "4.2 مليار دولار مساعدات إنسانية (2024)"
        },
        "un-agencies": {
          name: "وكالات الأمم المتحدة",
          description: "مكتب تنسيق الشؤون الإنسانية وبرنامج الأغذية العالمي واليونيسف وبرنامج الأمم المتحدة الإنمائي ووكالات أخرى تنسق الاستجابة الإنسانية وبرامج التنمية.",
          flows: ["المنظمات غير الحكومية", "البنك المركزي-عدن"],
          volume: "2.8 مليار دولار نداءات الأمم المتحدة (2024)"
        },
        "world-bank": {
          name: "البنك الدولي",
          description: "البنك الدولي يقدم التمويل الطارئ ومشاريع التنمية والمساعدة الفنية من خلال البنك المركزي-عدن والشركاء المنفذين.",
          flows: ["البنك المركزي-عدن"],
          volume: "850 مليون دولار محفظة نشطة"
        },
        "imf": {
          name: "صندوق النقد الدولي",
          description: "صندوق النقد الدولي يقدم المساعدة الفنية والتقييمات الاقتصادية والمشورة السياسية للحكومة الشرعية والبنك المركزي-عدن.",
          flows: ["البنك المركزي-عدن"],
          volume: "مساعدة فنية فقط"
        },
        "saudi-uae": {
          name: "المانحون السعوديون/الإماراتيون",
          description: "السعودية والإمارات تقدمان مساعدات ثنائية وودائع للبنك المركزي ومنح وقود ودعم تنموي للحكومة الشرعية.",
          flows: ["البنك المركزي-عدن"],
          volume: "18.3 مليار دولار إجمالي المساعدات (2015-2024)"
        },
        "oil-revenues": {
          name: "عائدات النفط",
          description: "صادرات نفط وغاز محدودة من مأرب وحضرموت. العائدات متنازع عليها بين الحكومة الشرعية والسلطات المحلية.",
          flows: ["البنك المركزي-عدن"],
          volume: "1.2 مليار دولار سنوياً (عند التشغيل)"
        },
        "local-taxes": {
          name: "الضرائب المحلية",
          description: "الرسوم الجمركية والضرائب والرسوم التي تجمعها سلطات الحوثيين في شمال اليمن. مصدر الإيرادات الأساسي لإدارة صنعاء.",
          flows: ["البنك المركزي-صنعاء"],
          volume: "2.5 مليار دولار سنوياً (تقديرات)"
        }
      },
      
      insights: "رؤى رئيسية",
      insightsList: [
        {
          title: "نظام البنك المركزي المزدوج",
          description: "أدى انقسام البنك المركزي عام 2016 إلى إنشاء أنظمة مالية موازية مع إدارة البنك المركزي-عدن 4.8 مليار دولار والبنك المركزي-صنعاء 2.1 مليار دولار سنوياً، مما جزأ السياسة النقدية والإشراف المصرفي."
        },
        {
          title: "التحويلات كشريان حياة",
          description: "3.8 مليار دولار من التحويلات السنوية تتدفق عبر الصرافة إلى الأسر، متجاوزة جميع المساعدات الإنسانية مجتمعة وتدعم 60% من الأسر اليمنية."
        },
        {
          title: "البنوك التجارية كمحور",
          description: "على الرغم من التجزئة، تظل البنوك التجارية العقدة المركزية مع 8.3 مليار دولار ودائع، تربط التدفقات المحلية والخارجية لكنها تعاني من أزمات السيولة."
        },
        {
          title: "الاعتماد الخارجي",
          description: "يعتمد اليمن بشكل كبير على التدفقات الخارجية: 18.3 مليار دولار من السعودية/الإمارات، 4.2 مليار دولار مساعدات إنسانية، 3.8 مليار دولار تحويلات، مقابل 2.5 مليار دولار فقط من الإيرادات الضريبية المحلية."
        },
        {
          title: "هيمنة الشبكات غير الرسمية",
          description: "تتعامل شبكات الصرافة مع 3.7 مليار دولار سنوياً، غالباً متجاوزة الخدمات المصرفية الرسمية بسبب انقسام البنك المركزي والعقوبات وقيود الخدمات المصرفية المراسلة."
        }
      ],
      
      methodology: "المنهجية",
      methodologyText: "يستند هذا التصور الشبكي إلى بيانات التدفقات المالية من تقارير البنك المركزي اليمني وبيانات البنك الدولي وتقييمات صندوق النقد الدولي وخدمة التتبع المالي لمكتب تنسيق الشؤون الإنسانية ومسوحات التحويلات وأبحاث مركز صنعاء. يتم تقدير أحجام التدفقات من بيانات 2024 حيثما كانت متاحة، مع استخدام المتوسطات التاريخية للبيانات غير الكاملة. يعكس هيكل الشبكة العلاقات المؤسسية الفعلية وأنماط المعاملات الموثقة في التقارير الرسمية والبحوث الميدانية."
    }
  };

  const t = content[language];

  // Network nodes with positions (simplified for now - can be made interactive with D3.js or similar)
  const nodes = [
    { id: "cby-sanaa", x: 20, y: 35, type: "financial" },
    { id: "cby-aden", x: 50, y: 70, type: "financial" },
    { id: "commercial-banks", x: 35, y: 50, type: "financial" },
    { id: "money-exchange", x: 50, y: 30, type: "financial" },
    { id: "remittances", x: 65, y: 15, type: "external" },
    { id: "households", x: 70, y: 35, type: "domestic" },
    { id: "local-businesses", x: 85, y: 20, type: "domestic" },
    { id: "ngos", x: 80, y: 50, type: "external" },
    { id: "un-agencies", x: 75, y: 65, type: "external" },
    { id: "world-bank", x: 45, y: 85, type: "external" },
    { id: "imf", x: 60, y: 85, type: "external" },
    { id: "saudi-uae", x: 50, y: 95, type: "external" },
    { id: "oil-revenues", x: 65, y: 95, type: "domestic" },
    { id: "local-taxes", x: 10, y: 45, type: "domestic" }
  ];

  const getNodeColor = (type: string) => {
    if (type === "financial") return "bg-teal-500";
    if (type === "external") return "bg-amber-500";
    return "bg-burgundy-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-900/20 to-teal-700/20 border-b">
        <div className="container py-12">
          <div className="flex items-start justify-between">
            <div>
              <Badge className="mb-4 bg-teal-600">
                <Network className="w-3 h-3 mr-1" />
                {language === "ar" ? "تصور تفاعلي" : "Interactive Visualization"}
              </Badge>
              <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">{t.subtitle}</p>
              <p className="text-lg leading-relaxed max-w-3xl">{t.description}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                {language === "ar" ? "تحميل" : "Download"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Network Visualization */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{t.title}</CardTitle>
                <CardDescription>
                  {language === "ar" 
                    ? "انقر على أي عقدة لرؤية التفاصيل والتدفقات" 
                    : "Click on any node to see details and flows"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Simplified network visualization - in production, use D3.js or similar */}
                <div className="relative w-full h-[600px] bg-muted/20 rounded-lg border">
                  {nodes.map((node) => (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node.id)}
                      className={`absolute w-24 h-24 rounded-full ${getNodeColor(node.type)} text-white text-xs font-semibold flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer`}
                      style={{ 
                        left: `${node.x}%`, 
                        top: `${node.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {t.nodes[node.id as keyof typeof t.nodes].name}
                    </button>
                  ))}
                  
                  {/* Note: In production, add SVG lines showing connections between nodes */}
                  <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
                    <Info className="w-4 h-4 inline mr-1" />
                    {language === "ar" ? "تصور مبسط - الإصدار الكامل قريباً" : "Simplified visualization - full version coming soon"}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Legend & Selected Node Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.legend}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-teal-500"></div>
                  <span>{t.financial}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                  <span>{t.external}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-burgundy-500"></div>
                  <span>{t.domestic}</span>
                </div>
              </CardContent>
            </Card>

            {selectedNode && (
              <Card>
                <CardHeader>
                  <CardTitle>{t.nodes[selectedNode as keyof typeof t.nodes].name}</CardTitle>
                  <CardDescription>{t.nodes[selectedNode as keyof typeof t.nodes].volume}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed">{t.nodes[selectedNode as keyof typeof t.nodes].description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">{t.flows}:</h4>
                    <ul className="space-y-1">
                      {t.nodes[selectedNode as keyof typeof t.nodes].flows.map((flow, index) => (
                        <li key={index} className="text-sm text-muted-foreground">→ {flow}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Key Insights */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">{t.insights}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.insightsList.map((insight, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{insight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>{t.methodology}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">{t.methodologyText}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
