import { Breadcrumb } from "@/components/Breadcrumb";
import StakeholderDetail from "@/components/StakeholderDetail";
import { DollarSign, Users, Building2, TrendingUp } from "lucide-react";

export default function WorldBankPage() {
  const projects = [
    {
      id: "wb1",
      titleEn: "Financial Market Infrastructure Project",
      titleAr: "مشروع البنية التحتية للأسواق المالية",
      amount: "$20M",
      date: "2019-2024",
      status: "active" as const,
      descriptionEn: "Upgraded payment systems, expanded mobile money from 1.2M to 2.8M accounts, and strengthened microfinance institutions with active borrowers growing from 180K to 260K",
      descriptionAr: "حدّث أنظمة الدفع، ووسّع حسابات الأموال المتنقلة من 1.2 مليون إلى 2.8 مليون حساب، وعزز مؤسسات التمويل الأصغر مع نمو المقترضين النشطين من 180 ألف إلى 260 ألف"
    },
    {
      id: "wb2",
      titleEn: "Yemen Social Fund for Development",
      titleAr: "الصندوق الاجتماعي للتنمية",
      amount: "$60M",
      date: "2010-2023",
      status: "completed" as const,
      descriptionEn: "Community-driven development projects providing infrastructure, education, and livelihood support to vulnerable communities across Yemen",
      descriptionAr: "مشاريع تنمية مجتمعية توفر البنية التحتية والتعليم ودعم سبل العيش للمجتمعات الضعيفة في جميع أنحاء اليمن"
    },
    {
      id: "wb3",
      titleEn: "Private Sector Growth Project",
      titleAr: "مشروع نمو القطاع الخاص",
      amount: "$15M",
      date: "2010-2015",
      status: "completed" as const,
      descriptionEn: "Supported SME development, business environment reforms, and access to finance for private sector growth",
      descriptionAr: "دعم تطوير المشاريع الصغيرة والمتوسطة، وإصلاحات بيئة الأعمال، والوصول إلى التمويل لنمو القطاع الخاص"
    },
    {
      id: "wb4",
      titleEn: "Financial Inclusion Project",
      titleAr: "مشروع الشمول المالي",
      amount: "$30M",
      date: "2025-2029",
      status: "planned" as const,
      descriptionEn: "Expand digital financial services, strengthen microfinance sector, and improve access to credit for underserved populations",
      descriptionAr: "توسيع الخدمات المالية الرقمية، وتعزيز قطاع التمويل الأصغر، وتحسين الوصول إلى الائتمان للسكان المحرومين"
    },
    {
      id: "wb5",
      titleEn: "Yemen Emergency Health and Nutrition Project",
      titleAr: "مشروع الصحة والتغذية الطارئ في اليمن",
      amount: "$200M",
      date: "2017-2024",
      status: "active" as const,
      descriptionEn: "Emergency health services, nutrition interventions, and disease outbreak response reaching 8.5M beneficiaries",
      descriptionAr: "خدمات الصحة الطارئة، والتدخلات الغذائية، والاستجابة لتفشي الأمراض التي تصل إلى 8.5 مليون مستفيد"
    },
    {
      id: "wb6",
      titleEn: "Yemen Emergency Crisis Response Project",
      titleAr: "مشروع الاستجابة لأزمة الطوارئ في اليمن",
      amount: "$150M",
      date: "2016-2023",
      status: "completed" as const,
      descriptionEn: "Cash-for-work programs, infrastructure rehabilitation, and livelihood support creating 5M workdays and supporting 350K households",
      descriptionAr: "برامج النقد مقابل العمل، وإعادة تأهيل البنية التحتية، ودعم سبل العيش التي أنشأت 5 ملايين يوم عمل ودعمت 350 ألف أسرة"
    }
  ];

  const impactMetrics = [
    {
      labelEn: "Total Funding",
      labelAr: "إجمالي التمويل",
      value: "$475M",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      labelEn: "Active Projects",
      labelAr: "المشاريع النشطة",
      value: "2",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      labelEn: "Beneficiaries",
      labelAr: "المستفيدون",
      value: "8.5M",
      icon: <Users className="w-6 h-6" />
    },
    {
      labelEn: "Completed Projects",
      labelAr: "المشاريع المكتملة",
      value: "4",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const keyAchievementsEn = [
    "Expanded mobile money accounts from 1.2M to 2.8M (2019-2024), increasing financial inclusion by 133%",
    "Strengthened microfinance sector with active borrowers growing from 180K to 260K, with women comprising 58% of portfolio",
    "Provided emergency health services to 8.5M beneficiaries, preventing disease outbreaks and reducing maternal mortality",
    "Created 5M workdays through cash-for-work programs, supporting 350K households with livelihood opportunities",
    "Rehabilitated 1,200 infrastructure projects including schools, health facilities, water systems, and roads",
    "Supported 45K small businesses with grants and technical assistance, creating 180K jobs",
    "Maintained World Bank engagement despite conflict through innovative remote implementation mechanisms"
  ];

  const keyAchievementsAr = [
    "وسّع حسابات الأموال المتنقلة من 1.2 مليون إلى 2.8 مليون (2019-2024)، مما زاد الشمول المالي بنسبة 133%",
    "عزز قطاع التمويل الأصغر مع نمو المقترضين النشطين من 180 ألف إلى 260 ألف، مع تشكيل النساء 58% من المحفظة",
    "قدم خدمات الصحة الطارئة لـ 8.5 مليون مستفيد، مما منع تفشي الأمراض وقلل وفيات الأمهات",
    "أنشأ 5 ملايين يوم عمل من خلال برامج النقد مقابل العمل، ودعم 350 ألف أسرة بفرص سبل العيش",
    "أعاد تأهيل 1,200 مشروع بنية تحتية بما في ذلك المدارس والمرافق الصحية وأنظمة المياه والطرق",
    "دعم 45 ألف مشروع صغير بالمنح والمساعدة الفنية، مما خلق 180 ألف وظيفة",
    "حافظ على مشاركة البنك الدولي رغم الصراع من خلال آليات التنفيذ عن بعد المبتكرة"
  ];

  const challengesEn = [
    "Dual authority structure complicates project implementation and coordination between Aden and Sana'a",
    "Security constraints limit field monitoring and direct implementation in conflict-affected areas",
    "Currency volatility and exchange rate divergence create budgeting and procurement challenges",
    "Banking sector fragmentation restricts fund transfers and payment systems",
    "Limited government capacity and institutional weakening reduce project sustainability",
    "Humanitarian access restrictions delay project activities and increase operational costs",
    "Funding gaps due to competing global crises reduce available resources for Yemen programs"
  ];

  const challengesAr = [
    "يعقد هيكل السلطة المزدوج تنفيذ المشاريع والتنسيق بين عدن وصنعاء",
    "تحد القيود الأمنية من المراقبة الميدانية والتنفيذ المباشر في المناطق المتأثرة بالصراع",
    "يخلق تقلب العملة وانحراف سعر الصرف تحديات في الميزانية والمشتريات",
    "يقيد تجزئة القطاع المصرفي تحويلات الأموال وأنظمة الدفع",
    "تقلل القدرة الحكومية المحدودة والضعف المؤسسي من استدامة المشروع",
    "تؤخر قيود الوصول الإنساني أنشطة المشروع وتزيد التكاليف التشغيلية",
    "تقلل فجوات التمويل بسبب الأزمات العالمية المتنافسة الموارد المتاحة لبرامج اليمن"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <Breadcrumb
          items={[
            { label: "Home", labelAr: "الرئيسية", href: "/" },
            { label: "Stakeholders", labelAr: "أصحاب المصلحة", href: "/stakeholders" },
            { label: "World Bank", labelAr: "البنك الدولي" }
          ]}
        />

        <div className="mt-8">
          <StakeholderDetail
            nameEn="World Bank"
            nameAr="البنك الدولي"
            type="International Financial Institution"
            descriptionEn="The World Bank provides financial and technical assistance to Yemen, focusing on emergency response, health, infrastructure, and financial sector development despite the ongoing conflict."
            descriptionAr="يقدم البنك الدولي المساعدة المالية والفنية لليمن، مع التركيز على الاستجابة للطوارئ والصحة والبنية التحتية وتنمية القطاع المالي رغم الصراع المستمر."
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/World_Bank_logo.svg/200px-World_Bank_logo.svg.png"
            website="https://www.worldbank.org/en/country/yemen"
            email="yemen@worldbank.org"
            location="Washington, D.C., USA | Regional Office: Amman, Jordan"
            totalFunding="$475M (2010-2025)"
            projects={projects}
            impactMetrics={impactMetrics}
            keyAchievementsEn={keyAchievementsEn}
            keyAchievementsAr={keyAchievementsAr}
            challengesEn={challengesEn}
            challengesAr={challengesAr}
          />
        </div>
      </div>
    </div>
  );
}
