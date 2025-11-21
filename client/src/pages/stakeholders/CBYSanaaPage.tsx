import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Landmark, 
  Users, 
  TrendingDown, 
  AlertTriangle,
  Target,
  DollarSign,
  Calendar,
  Shield,
  Building2,
  FileText,
  Ban,
  Coins
} from "lucide-react";

export default function CBYSanaaPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Central Bank of Yemen - Sana'a (CBY-Sana'a)",
      subtitle: "Houthi-Controlled De Facto Monetary Authority",
      overview: {
        title: "Overview",
        description: "The Central Bank of Yemen in Sana'a (CBY-Sana'a) is the de facto monetary authority operating in Houthi-controlled areas of Yemen since the September 2016 split. While not internationally recognized, it continues to exercise monetary functions in northern Yemen including Sana'a, Sa'ada, and Hodeidah. The CBY-Sana'a operates independently from the internationally recognized CBY-Aden, creating a dual central banking system that has deepened Yemen's economic fragmentation.",
        stats: [
          { label: "Control Since", value: "Sept 2016", icon: Calendar },
          { label: "Recognition", value: "De Facto Only", icon: Shield },
          { label: "Governor", value: "Hashem al-Madani", icon: Users },
          { label: "Status", value: "US Sanctioned", icon: Ban }
        ]
      },
      role: {
        title: "Role & Operations",
        description: "CBY-Sana'a functions as the monetary authority for Houthi-controlled territories, managing currency circulation, banking supervision, and government finances in areas under Ansar Allah control. Despite lacking international recognition, it maintains operational control over commercial banks and money services businesses in northern Yemen.",
        functions: [
          {
            title: "Currency Management",
            description: "Issues new currency (50-rial coin in July 2025) and manages cash circulation in Houthi areas, often in conflict with CBY-Aden policies",
            icon: Coins
          },
          {
            title: "Banking Supervision",
            description: "Regulates commercial banks and money services businesses in Sana'a and Houthi-controlled regions",
            icon: Landmark
          },
          {
            title: "Government Banking",
            description: "Serves as banker to the Houthi de facto administration, managing revenues from ports, taxes, and customs",
            icon: Building2
          },
          {
            title: "Foreign Exchange Control",
            description: "Attempts to regulate FX rates and manage limited foreign currency reserves in Houthi territories",
            icon: DollarSign
          },
          {
            title: "Sanctions Evasion",
            description: "Facilitates financial flows for Houthi operations through money services businesses and informal channels",
            icon: Shield
          },
          {
            title: "Economic Warfare",
            description: "Uses monetary policy as tool in conflict, including competitive currency issuance and banking restrictions",
            icon: TrendingDown
          }
        ]
      },
      impact: {
        title: "Economic Impact & Currency War",
        description: "CBY-Sana'a's operations have significantly contributed to Yemen's economic fragmentation, currency instability, and humanitarian crisis. The July 2025 issuance of a new 50-rial coin marked a major escalation in the currency war with CBY-Aden.",
        challenges: [
          {
            year: "2016",
            title: "De Facto Control Established",
            description: "Houthis retained control of CBY headquarters in Sana'a after IRG relocated to Aden, creating parallel monetary authority",
            impact: "Institutional rupture, dual monetary system"
          },
          {
            year: "2017-2020",
            title: "Competitive Currency Printing",
            description: "Both CBY-Sana'a and CBY-Aden printed currency independently, fueling inflation and rial depreciation",
            impact: "Currency fragmentation, inflation spike"
          },
          {
            year: "2021-2024",
            title: "Banking Sector Fragmentation",
            description: "Banks forced to operate under dual regulatory systems, limiting liquidity and cross-border transactions",
            impact: "Financial isolation, liquidity crisis"
          },
          {
            year: "July 2025",
            title: "50-Rial Coin Issuance",
            description: "CBY-Sana'a issued new 50-rial coin, rejected by CBY-Aden as 'forged' and 'economic warfare escalation'",
            impact: "Currency war escalation, further fragmentation"
          },
          {
            year: "Jan-Sept 2025",
            title: "US Treasury Sanctions Wave",
            description: "Governor Hashem al-Madani sanctioned (Jan 2025), Yemen Kuwait Bank (Jan), International Bank of Yemen (April), dozens of facilitators (Sept)",
            impact: "International isolation, correspondent banking loss"
          }
        ]
      },
      risks: {
        title: "Risks & Sanctions",
        items: [
          {
            risk: "US Treasury Sanctions",
            description: "Governor Hashem al-Madani and affiliated banks (Yemen Kuwait Bank, International Bank of Yemen) sanctioned for supporting Houthi operations",
            severity: "Critical",
            icon: Ban
          },
          {
            risk: "Currency War Escalation",
            description: "Competitive currency issuance with CBY-Aden risks hyperinflation and complete currency collapse",
            severity: "Critical",
            icon: Coins
          },
          {
            risk: "International Isolation",
            description: "No international recognition, no IMF/World Bank relationships, no correspondent banking access",
            severity: "Critical",
            icon: Shield
          },
          {
            risk: "Money Laundering & Terrorism Financing",
            description: "US Treasury alleges CBY-Sana'a facilitates Houthi fundraising, weapons procurement, and sanctions evasion",
            severity: "Critical",
            icon: AlertTriangle
          },
          {
            risk: "Banking Sector Collapse",
            description: "Sanctioned banks and fragmented system risk complete financial sector breakdown in Houthi areas",
            severity: "High",
            icon: Landmark
          },
          {
            risk: "Humanitarian Impact",
            description: "Banking restrictions and sanctions complicate humanitarian aid delivery to 20+ million people in Houthi areas",
            severity: "High",
            icon: Users
          }
        ]
      },
      options: {
        title: "Policy Options & Scenarios",
        description: "Addressing the CBY-Sana'a challenge requires balancing humanitarian needs, sanctions enforcement, and long-term monetary reunification:",
        recommendations: [
          {
            title: "Humanitarian Banking Exemptions",
            description: "Create targeted sanctions exemptions for humanitarian transactions to ensure aid delivery while maintaining pressure on Houthi military operations",
            priority: "Critical",
            stakeholders: ["US Treasury", "UN", "CBY-Sana'a", "Humanitarian Agencies"]
          },
          {
            title: "Technical Monetary Coordination",
            description: "Establish back-channel technical dialogue between CBY-Sana'a and CBY-Aden to prevent currency collapse and coordinate emergency measures",
            priority: "High",
            stakeholders: ["CBY-Sana'a", "CBY-Aden", "UN Mediators", "IMF"]
          },
          {
            title: "Sanctions Enforcement & Compliance",
            description: "Strengthen enforcement of existing sanctions while providing clear compliance pathways for legitimate banking activities",
            priority: "High",
            stakeholders: ["US Treasury", "OFAC", "EU", "Commercial Banks"]
          },
          {
            title: "Post-Conflict Reunification Planning",
            description: "Develop detailed roadmap for CBY reunification as part of broader peace settlement, including governance, staffing, and policy coordination",
            priority: "High",
            stakeholders: ["CBY-Sana'a", "CBY-Aden", "UN", "IMF", "World Bank"]
          },
          {
            title: "Alternative Financial Channels",
            description: "Support development of alternative remittance and payment channels (mobile money, hawala oversight) to maintain financial flows for civilians",
            priority: "Medium",
            stakeholders: ["CBY-Sana'a", "CBY-Aden", "Telecom Operators", "Money Services Businesses"]
          }
        ]
      },
      sanctions: {
        title: "US Treasury Sanctions Timeline",
        items: [
          {
            date: "January 17, 2025",
            target: "Hashem Ismail Ali Ahmad al-Madani (Governor)",
            reason: "Governor of Houthi-aligned CBY-Sana'a, facilitating Houthi financial operations",
            authority: "OFAC"
          },
          {
            date: "January 17, 2025",
            target: "Yemen Kuwait Bank for Trade and Investment YSC",
            reason: "Financial support to Ansarallah (Houthis)",
            authority: "OFAC"
          },
          {
            date: "April 17, 2025",
            target: "International Bank of Yemen Y.S.C (IBY)",
            reason: "Financial support to Houthis, key facilitators sanctioned",
            authority: "OFAC"
          },
          {
            date: "September 11, 2025",
            target: "Dozens of Houthi financial facilitators",
            reason: "Full cycle of Houthi fundraising, smuggling, and attack operations",
            authority: "OFAC"
          },
          {
            date: "December 19, 2024",
            target: "Sana'a-based money services businesses",
            reason: "Used by Houthis to move large sums and circumvent sanctions",
            authority: "OFAC"
          }
        ]
      },
      sources: {
        title: "Sources & References",
        items: [
          "US Treasury: Treasury Increases Financial Pressure on the Houthis (January 17, 2025)",
          "US Treasury: Treasury Maintains Pressure on Houthi Procurement and Financing Schemes (December 19, 2024)",
          "US Treasury: Treasury Sanctions Houthi Illicit Revenue and Procurement Networks (September 11, 2025)",
          "US Treasury: Treasury Targets International Bank of Yemen for Support to the Houthis (April 17, 2025)",
          "Sana'a Center: Currency War Threatens to Deepen Yemen's Monetary Rift (July 18, 2025)",
          "Sana'a Center: The Yemen Review, January-March 2025 (March 12, 2025)",
          "Yemen Ministry of Foreign Affairs: Central Bank rejects Militias' announcement of forged 50 Riyal coin (July 13, 2025)",
          "CGTN: Yemen New Coin - Central Bank of Yemen condemns issue (July 15, 2025)",
          "Yemen Monitor: New US Sanctions Imposed on Houthi Leaders (December 20, 2024)"
        ]
      }
    },
    ar: {
      title: "البنك المركزي اليمني - صنعاء",
      subtitle: "السلطة النقدية الفعلية الخاضعة لسيطرة الحوثيين",
      overview: {
        title: "نظرة عامة",
        description: "البنك المركزي اليمني في صنعاء هو السلطة النقدية الفعلية العاملة في المناطق الخاضعة لسيطرة الحوثيين منذ انقسام سبتمبر 2016. على الرغم من عدم الاعتراف الدولي به، إلا أنه يواصل ممارسة الوظائف النقدية في شمال اليمن بما في ذلك صنعاء وصعدة والحديدة. يعمل البنك المركزي في صنعاء بشكل مستقل عن البنك المركزي المعترف به دولياً في عدن، مما أدى إلى إنشاء نظام مصرفي مركزي مزدوج عمق التفتت الاقتصادي في اليمن.",
        stats: [
          { label: "السيطرة منذ", value: "سبتمبر 2016", icon: Calendar },
          { label: "الاعتراف", value: "فعلي فقط", icon: Shield },
          { label: "المحافظ", value: "هاشم المدني", icon: Users },
          { label: "الحالة", value: "مُعاقب أمريكياً", icon: Ban }
        ]
      },
      role: {
        title: "الدور والعمليات",
        description: "يعمل البنك المركزي في صنعاء كسلطة نقدية للأراضي الخاضعة لسيطرة الحوثيين، ويدير تداول العملة والإشراف المصرفي والمالية الحكومية في المناطق الخاضعة لسيطرة أنصار الله. على الرغم من عدم الاعتراف الدولي، فإنه يحتفظ بالسيطرة التشغيلية على البنوك التجارية وشركات خدمات الصرافة في شمال اليمن.",
        functions: [
          {
            title: "إدارة العملة",
            description: "يصدر عملة جديدة (عملة 50 ريال في يوليو 2025) ويدير تداول النقد في المناطق الحوثية، غالباً في صراع مع سياسات البنك المركزي في عدن",
            icon: Coins
          },
          {
            title: "الإشراف المصرفي",
            description: "ينظم البنوك التجارية وشركات خدمات الصرافة في صنعاء والمناطق الخاضعة لسيطرة الحوثيين",
            icon: Landmark
          },
          {
            title: "الخدمات المصرفية الحكومية",
            description: "يعمل كمصرف للإدارة الفعلية للحوثيين، ويدير الإيرادات من الموانئ والضرائب والجمارك",
            icon: Building2
          },
          {
            title: "السيطرة على النقد الأجنبي",
            description: "يحاول تنظيم أسعار الصرف الأجنبي وإدارة احتياطيات محدودة من العملات الأجنبية في الأراضي الحوثية",
            icon: DollarSign
          },
          {
            title: "التهرب من العقوبات",
            description: "يسهل التدفقات المالية لعمليات الحوثيين من خلال شركات خدمات الصرافة والقنوات غير الرسمية",
            icon: Shield
          },
          {
            title: "الحرب الاقتصادية",
            description: "يستخدم السياسة النقدية كأداة في الصراع، بما في ذلك إصدار العملة التنافسي والقيود المصرفية",
            icon: TrendingDown
          }
        ]
      },
      impact: {
        title: "التأثير الاقتصادي وحرب العملات",
        description: "ساهمت عمليات البنك المركزي في صنعاء بشكل كبير في التفتت الاقتصادي في اليمن وعدم استقرار العملة والأزمة الإنسانية. شكل إصدار عملة 50 ريال الجديدة في يوليو 2025 تصعيداً كبيراً في حرب العملات مع البنك المركزي في عدن.",
        challenges: [
          {
            year: "2016",
            title: "إنشاء السيطرة الفعلية",
            description: "احتفظ الحوثيون بالسيطرة على مقر البنك المركزي في صنعاء بعد انتقال الحكومة الشرعية إلى عدن، مما أدى إلى إنشاء سلطة نقدية موازية",
            impact: "تمزق مؤسسي، نظام نقدي مزدوج"
          },
          {
            year: "2017-2020",
            title: "طباعة العملة التنافسية",
            description: "طبع كل من البنك المركزي في صنعاء والبنك المركزي في عدن العملة بشكل مستقل، مما أدى إلى التضخم وانخفاض قيمة الريال",
            impact: "تفتت العملة، ارتفاع التضخم"
          },
          {
            year: "2021-2024",
            title: "تفتت القطاع المصرفي",
            description: "أُجبرت البنوك على العمل تحت أنظمة تنظيمية مزدوجة، مما حد من السيولة والمعاملات عبر الحدود",
            impact: "عزلة مالية، أزمة سيولة"
          },
          {
            year: "يوليو 2025",
            title: "إصدار عملة 50 ريال",
            description: "أصدر البنك المركزي في صنعاء عملة 50 ريال جديدة، رفضها البنك المركزي في عدن باعتبارها 'مزورة' و'تصعيد للحرب الاقتصادية'",
            impact: "تصعيد حرب العملات، مزيد من التفتت"
          },
          {
            year: "يناير-سبتمبر 2025",
            title: "موجة عقوبات الخزانة الأمريكية",
            description: "عوقب المحافظ هاشم المدني (يناير 2025)، بنك اليمن والكويت (يناير)، البنك الدولي اليمني (أبريل)، عشرات الميسرين (سبتمبر)",
            impact: "عزلة دولية، فقدان البنوك المراسلة"
          }
        ]
      },
      risks: {
        title: "المخاطر والعقوبات",
        items: [
          {
            risk: "عقوبات الخزانة الأمريكية",
            description: "عوقب المحافظ هاشم المدني والبنوك التابعة (بنك اليمن والكويت، البنك الدولي اليمني) لدعم عمليات الحوثيين",
            severity: "حرجة",
            icon: Ban
          },
          {
            risk: "تصعيد حرب العملات",
            description: "إصدار العملة التنافسي مع البنك المركزي في عدن يخاطر بالتضخم المفرط والانهيار الكامل للعملة",
            severity: "حرجة",
            icon: Coins
          },
          {
            risk: "العزلة الدولية",
            description: "لا اعتراف دولي، لا علاقات مع صندوق النقد الدولي/البنك الدولي، لا وصول إلى البنوك المراسلة",
            severity: "حرجة",
            icon: Shield
          },
          {
            risk: "غسل الأموال وتمويل الإرهاب",
            description: "تزعم الخزانة الأمريكية أن البنك المركزي في صنعاء يسهل جمع الأموال للحوثيين وشراء الأسلحة والتهرب من العقوبات",
            severity: "حرجة",
            icon: AlertTriangle
          },
          {
            risk: "انهيار القطاع المصرفي",
            description: "البنوك المعاقبة والنظام المفتت يخاطران بانهيار كامل للقطاع المالي في المناطق الحوثية",
            severity: "عالية",
            icon: Landmark
          },
          {
            risk: "التأثير الإنساني",
            description: "القيود المصرفية والعقوبات تعقد تقديم المساعدات الإنسانية لأكثر من 20 مليون شخص في المناطق الحوثية",
            severity: "عالية",
            icon: Users
          }
        ]
      },
      options: {
        title: "الخيارات السياسية والسيناريوهات",
        description: "معالجة تحدي البنك المركزي في صنعاء تتطلب الموازنة بين الاحتياجات الإنسانية وإنفاذ العقوبات وإعادة التوحيد النقدي طويل الأجل:",
        recommendations: [
          {
            title: "استثناءات مصرفية إنسانية",
            description: "إنشاء استثناءات مستهدفة من العقوبات للمعاملات الإنسانية لضمان تقديم المساعدات مع الحفاظ على الضغط على العمليات العسكرية للحوثيين",
            priority: "حرجة",
            stakeholders: ["الخزانة الأمريكية", "الأمم المتحدة", "البنك المركزي صنعاء", "الوكالات الإنسانية"]
          },
          {
            title: "التنسيق النقدي الفني",
            description: "إنشاء حوار فني عبر القنوات الخلفية بين البنك المركزي في صنعاء والبنك المركزي في عدن لمنع انهيار العملة وتنسيق التدابير الطارئة",
            priority: "عالية",
            stakeholders: ["البنك المركزي صنعاء", "البنك المركزي عدن", "وسطاء الأمم المتحدة", "صندوق النقد الدولي"]
          },
          {
            title: "إنفاذ العقوبات والامتثال",
            description: "تعزيز إنفاذ العقوبات الحالية مع توفير مسارات امتثال واضحة للأنشطة المصرفية المشروعة",
            priority: "عالية",
            stakeholders: ["الخزانة الأمريكية", "OFAC", "الاتحاد الأوروبي", "البنوك التجارية"]
          },
          {
            title: "التخطيط لإعادة التوحيد بعد الصراع",
            description: "تطوير خارطة طريق مفصلة لإعادة توحيد البنك المركزي كجزء من تسوية سلمية أوسع، بما في ذلك الحوكمة والتوظيف وتنسيق السياسات",
            priority: "عالية",
            stakeholders: ["البنك المركزي صنعاء", "البنك المركزي عدن", "الأمم المتحدة", "صندوق النقد الدولي", "البنك الدولي"]
          },
          {
            title: "قنوات مالية بديلة",
            description: "دعم تطوير قنوات بديلة للتحويلات والدفع (المال المحمول، إشراف الحوالة) للحفاظ على التدفقات المالية للمدنيين",
            priority: "متوسطة",
            stakeholders: ["البنك المركزي صنعاء", "البنك المركزي عدن", "مشغلو الاتصالات", "شركات خدمات الصرافة"]
          }
        ]
      },
      sanctions: {
        title: "جدول عقوبات الخزانة الأمريكية",
        items: [
          {
            date: "17 يناير 2025",
            target: "هاشم إسماعيل علي أحمد المدني (المحافظ)",
            reason: "محافظ البنك المركزي في صنعاء المتحالف مع الحوثيين، تسهيل العمليات المالية للحوثيين",
            authority: "OFAC"
          },
          {
            date: "17 يناير 2025",
            target: "بنك اليمن والكويت للتجارة والاستثمار",
            reason: "الدعم المالي لأنصار الله (الحوثيين)",
            authority: "OFAC"
          },
          {
            date: "17 أبريل 2025",
            target: "البنك الدولي اليمني",
            reason: "الدعم المالي للحوثيين، عوقب الميسرون الرئيسيون",
            authority: "OFAC"
          },
          {
            date: "11 سبتمبر 2025",
            target: "عشرات الميسرين الماليين للحوثيين",
            reason: "دورة كاملة من جمع الأموال للحوثيين والتهريب وعمليات الهجوم",
            authority: "OFAC"
          },
          {
            date: "19 ديسمبر 2024",
            target: "شركات خدمات الصرافة في صنعاء",
            reason: "استخدمها الحوثيون لنقل مبالغ كبيرة والتهرب من العقوبات",
            authority: "OFAC"
          }
        ]
      },
      sources: {
        title: "المصادر والمراجع",
        items: [
          "الخزانة الأمريكية: الخزانة تزيد الضغط المالي على الحوثيين (17 يناير 2025)",
          "الخزانة الأمريكية: الخزانة تحافظ على الضغط على مخططات الشراء والتمويل الحوثية (19 ديسمبر 2024)",
          "الخزانة الأمريكية: الخزانة تعاقب شبكات الإيرادات والمشتريات غير المشروعة للحوثيين (11 سبتمبر 2025)",
          "الخزانة الأمريكية: الخزانة تستهدف البنك الدولي اليمني لدعم الحوثيين (17 أبريل 2025)",
          "مركز صنعاء: حرب العملات تهدد بتعميق الصدع النقدي في اليمن (18 يوليو 2025)",
          "مركز صنعاء: مراجعة اليمن، يناير-مارس 2025 (12 مارس 2025)",
          "وزارة الخارجية اليمنية: البنك المركزي يرفض إعلان الميليشيات عن عملة 50 ريال مزورة (13 يوليو 2025)",
          "CGTN: عملة اليمن الجديدة - البنك المركزي اليمني يدين الإصدار (15 يوليو 2025)",
          "مرصد اليمن: عقوبات أمريكية جديدة على قادة الحوثيين (20 ديسمبر 2024)"
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-800 to-orange-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Landmark className="h-12 w-12" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{t.title}</h1>
              <p className="text-xl text-red-100">{t.subtitle}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {t.overview.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Icon className="h-6 w-6 mb-2 text-red-200" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-red-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="overview">{language === 'en' ? 'Overview' : 'نظرة عامة'}</TabsTrigger>
            <TabsTrigger value="role">{language === 'en' ? 'Role' : 'الدور'}</TabsTrigger>
            <TabsTrigger value="impact">{language === 'en' ? 'Impact' : 'التأثير'}</TabsTrigger>
            <TabsTrigger value="risks">{language === 'en' ? 'Risks' : 'المخاطر'}</TabsTrigger>
            <TabsTrigger value="options">{language === 'en' ? 'Options' : 'الخيارات'}</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.overview.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-gray-700">{t.overview.description}</p>
              </CardContent>
            </Card>

            {/* Sanctions Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Ban className="h-6 w-6 text-red-600" />
                  {t.sanctions.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {t.sanctions.items.map((sanction, index) => (
                    <Card key={index} className="border-l-4 border-l-red-600">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge variant="destructive" className="mb-2">{sanction.date}</Badge>
                            <CardTitle className="text-lg">{sanction.target}</CardTitle>
                          </div>
                          <Badge variant="outline">{sanction.authority}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{sanction.reason}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Role Tab */}
          <TabsContent value="role" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.role.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">{t.role.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.role.functions.map((func, index) => {
                    const Icon = func.icon;
                    return (
                      <Card key={index} className="border-2 border-red-100">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-100 rounded-lg">
                              <Icon className="h-6 w-6 text-red-700" />
                            </div>
                            <CardTitle className="text-lg">{func.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{func.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.impact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">{t.impact.description}</p>
                
                <div className="space-y-4">
                  {t.impact.challenges.map((challenge, index) => (
                    <Card key={index} className="border-l-4 border-l-orange-500">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge variant="outline" className="mb-2">{challenge.year}</Badge>
                            <CardTitle className="text-lg">{challenge.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-gray-700">{challenge.description}</p>
                        <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded">
                          <p className="text-sm font-semibold text-orange-800">
                            {language === 'en' ? 'Impact:' : 'التأثير:'} {challenge.impact}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Risks Tab */}
          <TabsContent value="risks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.risks.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {t.risks.items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Card key={index} className="border-l-4 border-l-red-600">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <Icon className="h-6 w-6 text-red-600" />
                              <CardTitle className="text-lg">{item.risk}</CardTitle>
                            </div>
                            <Badge variant="destructive">
                              {item.severity}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{item.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Options Tab */}
          <TabsContent value="options" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.options.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">{t.options.description}</p>
                
                <div className="space-y-4">
                  {t.options.recommendations.map((rec, index) => (
                    <Card key={index} className="border-l-4 border-l-green-500">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{rec.title}</CardTitle>
                          <Badge variant={rec.priority === "Critical" || rec.priority === "حرجة" ? "destructive" : rec.priority === "High" || rec.priority === "عالية" ? "default" : "secondary"}>
                            {rec.priority}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-gray-700">{rec.description}</p>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-2">
                            {language === 'en' ? 'Stakeholders:' : 'أصحاب المصلحة:'}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {rec.stakeholders.map((stakeholder, i) => (
                              <Badge key={i} variant="outline">{stakeholder}</Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Sources Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl">{t.sources.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {t.sources.items.map((source, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{source}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
