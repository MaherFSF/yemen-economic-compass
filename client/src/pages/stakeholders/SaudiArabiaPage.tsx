import { Breadcrumb } from "@/components/Breadcrumb";
import StakeholderDetail from "@/components/StakeholderDetail";
import { DollarSign, Users, Building2, TrendingUp } from "lucide-react";

export default function SaudiArabiaPage() {
  const projects = [
    {
      id: "sa1",
      titleEn: "$2B Deposit to Central Bank (2018)",
      titleAr: "إيداع 2 مليار دولار في البنك المركزي (2018)",
      amount: "$2,000M",
      date: "2018",
      status: "completed" as const,
      descriptionEn: "Foreign currency deposit to CBY-Aden enabling currency auction interventions. Exchange rate stabilized at ~500 YER/USD for 6 months, preventing further depreciation and supporting import financing",
      descriptionAr: "إيداع عملة أجنبية للبنك المركزي-عدن مما مكّن من تدخلات مزادات العملة. استقر سعر الصرف عند ~500 ريال/دولار لمدة 6 أشهر، مما منع المزيد من الانخفاض ودعم تمويل الواردات"
    },
    {
      id: "sa2",
      titleEn: "Additional $1B Deposit (2021)",
      titleAr: "إيداع إضافي بقيمة 1 مليار دولار (2021)",
      amount: "$1,000M",
      date: "2021",
      status: "completed" as const,
      descriptionEn: "Additional foreign currency support during economic crisis, enabling continued government operations and essential import financing",
      descriptionAr: "دعم عملة أجنبية إضافي خلال الأزمة الاقتصادية، مما مكّن من استمرار العمليات الحكومية وتمويل الواردات الأساسية"
    },
    {
      id: "sa3",
      titleEn: "$2B Extended Deposit (2022)",
      titleAr: "تمديد إيداع بقيمة 2 مليار دولار (2022)",
      amount: "$2,000M",
      date: "2022",
      status: "completed" as const,
      descriptionEn: "Extended deposit facility supporting CBY-Aden's foreign reserves and exchange rate management during truce period",
      descriptionAr: "تسهيل إيداع ممدد يدعم احتياطيات البنك المركزي-عدن الأجنبية وإدارة سعر الصرف خلال فترة الهدنة"
    },
    {
      id: "sa4",
      titleEn: "$500M Economic Support (2024)",
      titleAr: "دعم اقتصادي بقيمة 500 مليون دولار (2024)",
      amount: "$500M",
      date: "2024",
      status: "completed" as const,
      descriptionEn: "Economic support package for budget financing, salary payments, and essential services during oil export halt crisis",
      descriptionAr: "حزمة دعم اقتصادي لتمويل الميزانية، ودفع الرواتب، والخدمات الأساسية خلال أزمة وقف صادرات النفط"
    },
    {
      id: "sa5",
      titleEn: "$368M Support Package (2025)",
      titleAr: "حزمة دعم بقيمة 368 مليون دولار (2025)",
      amount: "$368M",
      date: "2025",
      status: "active" as const,
      descriptionEn: "Comprehensive support for government operations, infrastructure rehabilitation, and humanitarian assistance",
      descriptionAr: "دعم شامل للعمليات الحكومية، وإعادة تأهيل البنية التحتية، والمساعدة الإنسانية"
    },
    {
      id: "sa6",
      titleEn: "Additional $90M Aid (2025)",
      titleAr: "مساعدات إضافية بقيمة 90 مليون دولار (2025)",
      amount: "$90M",
      date: "2025",
      status: "active" as const,
      descriptionEn: "Emergency aid for humanitarian needs, health services, and food security support",
      descriptionAr: "مساعدات طارئة للاحتياجات الإنسانية، والخدمات الصحية، ودعم الأمن الغذائي"
    },
    {
      id: "sa7",
      titleEn: "King Salman Humanitarian Aid Center",
      titleAr: "مركز الملك سلمان للإغاثة",
      amount: "$1,200M+",
      date: "2015-2025",
      status: "active" as const,
      descriptionEn: "Humanitarian and development projects including health, education, water, shelter, and food security reaching 15M+ beneficiaries",
      descriptionAr: "مشاريع إنسانية وتنموية بما في ذلك الصحة والتعليم والمياه والمأوى والأمن الغذائي تصل إلى 15+ مليون مستفيد"
    }
  ];

  const impactMetrics = [
    {
      labelEn: "Total Support",
      labelAr: "إجمالي الدعم",
      value: "$7.16B",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      labelEn: "Active Programs",
      labelAr: "البرامج النشطة",
      value: "3",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      labelEn: "Beneficiaries",
      labelAr: "المستفيدون",
      value: "15M+",
      icon: <Users className="w-6 h-6" />
    },
    {
      labelEn: "Budget Support",
      labelAr: "دعم الميزانية",
      value: "35%",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const keyAchievementsEn = [
    "Provided $7.16B total support (2015-2025), making Saudi Arabia the largest bilateral donor to Yemen",
    "Stabilized exchange rate through $5B in Central Bank deposits, preventing currency collapse",
    "Enabled government to pay partial salaries to 400K civil servants, covering 35% of budget needs",
    "King Salman Center delivered 1,200+ humanitarian projects reaching 15M beneficiaries",
    "Supported essential imports of food, fuel, and medicine through foreign currency provision",
    "Maintained Aden as operational capital through infrastructure and security support",
    "Facilitated diplomatic engagement including Saudi-Houthi talks in 2023 for peace process",
    "Provided critical budget support during oil export halt, preventing complete government collapse"
  ];

  const keyAchievementsAr = [
    "قدم 7.16 مليار دولار دعم إجمالي (2015-2025)، مما جعل السعودية أكبر مانح ثنائي لليمن",
    "استقر سعر الصرف من خلال 5 مليارات دولار ودائع البنك المركزي، مما منع انهيار العملة",
    "مكّن الحكومة من دفع رواتب جزئية لـ 400 ألف موظف مدني، بتغطية 35% من احتياجات الميزانية",
    "قدم مركز الملك سلمان 1,200+ مشروع إنساني وصل إلى 15 مليون مستفيد",
    "دعم الواردات الأساسية من الغذاء والوقود والأدوية من خلال توفير العملة الأجنبية",
    "حافظ على عدن كعاصمة تشغيلية من خلال دعم البنية التحتية والأمن",
    "سهّل المشاركة الدبلوماسية بما في ذلك المحادثات السعودية-الحوثية في 2023 لعملية السلام",
    "قدم دعماً حاسماً للميزانية خلال وقف صادرات النفط، مما منع الانهيار الحكومي الكامل"
  ];

  const challengesEn = [
    "Military intervention costs and humanitarian crisis strain Saudi resources and regional stability",
    "Dual authority structure complicates aid delivery and coordination between Aden and Sana'a",
    "Houthi attacks on Saudi territory and Red Sea shipping escalate regional tensions",
    "Limited government capacity reduces effectiveness of budget support and reform implementation",
    "Exchange rate volatility continues despite deposits, requiring ongoing financial support",
    "Political fragmentation among anti-Houthi forces complicates unified governance support",
    "International criticism of coalition operations affects Saudi Arabia's regional role and aid delivery",
    "Oil export halt reduces government revenue, increasing dependency on Saudi budget support"
  ];

  const challengesAr = [
    "تكاليف التدخل العسكري والأزمة الإنسانية تجهد الموارد السعودية والاستقرار الإقليمي",
    "يعقد هيكل السلطة المزدوج تسليم المساعدات والتنسيق بين عدن وصنعاء",
    "تصعد هجمات الحوثيين على الأراضي السعودية والشحن في البحر الأحمر التوترات الإقليمية",
    "تقلل القدرة الحكومية المحدودة من فعالية دعم الميزانية وتنفيذ الإصلاح",
    "يستمر تقلب سعر الصرف رغم الودائع، مما يتطلب دعماً مالياً مستمراً",
    "يعقد التجزئة السياسية بين القوى المناهضة للحوثيين دعم الحكم الموحد",
    "تؤثر الانتقادات الدولية لعمليات التحالف على دور السعودية الإقليمي وتسليم المساعدات",
    "يقلل وقف صادرات النفط من إيرادات الحكومة، مما يزيد الاعتماد على دعم الميزانية السعودية"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <Breadcrumb
          items={[
            { label: "Home", labelAr: "الرئيسية", href: "/" },
            { label: "Stakeholders", labelAr: "أصحاب المصلحة", href: "/stakeholders" },
            { label: "Saudi Arabia", labelAr: "المملكة العربية السعودية" }
          ]}
        />

        <div className="mt-8">
          <StakeholderDetail
            nameEn="Kingdom of Saudi Arabia"
            nameAr="المملكة العربية السعودية"
            type="Regional Government / Bilateral Donor"
            descriptionEn="Saudi Arabia is Yemen's largest bilateral donor, providing financial support, humanitarian aid, and diplomatic engagement. The Kingdom leads the Arab Coalition supporting the internationally recognized government."
            descriptionAr="المملكة العربية السعودية هي أكبر مانح ثنائي لليمن، حيث تقدم الدعم المالي، والمساعدات الإنسانية، والمشاركة الدبلوماسية. تقود المملكة التحالف العربي الداعم للحكومة المعترف بها دولياً."
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/200px-Flag_of_Saudi_Arabia.svg.png"
            website="https://www.ksrelief.org"
            email="info@ksrelief.org"
            location="Riyadh, Saudi Arabia"
            totalFunding="$7.16B (2015-2025)"
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
