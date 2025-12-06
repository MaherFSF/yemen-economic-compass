import { Breadcrumb } from "@/components/Breadcrumb";
import StakeholderDetail from "@/components/StakeholderDetail";
import { DollarSign, Users, Building2, TrendingUp } from "lucide-react";

export default function IMFPage() {
  const projects = [
    {
      id: "imf1",
      titleEn: "Extended Credit Facility (ECF)",
      titleAr: "تسهيل الائتمان الممدد",
      amount: "$551M",
      date: "2014-2017",
      status: "completed" as const,
      descriptionEn: "Three-year program supporting macroeconomic stability, fiscal reforms, subsidy reduction, and revenue mobilization. Fuel subsidy costs reduced from 4.2% of GDP to 1.8% of GDP; tax revenue increased 12%",
      descriptionAr: "برنامج لمدة ثلاث سنوات يدعم الاستقرار الاقتصادي الكلي، والإصلاحات المالية، وتخفيض الدعم، وتعبئة الإيرادات. انخفضت تكاليف دعم الوقود من 4.2% من الناتج المحلي الإجمالي إلى 1.8%؛ زادت الإيرادات الضريبية بنسبة 12%"
    },
    {
      id: "imf2",
      titleEn: "Emergency Assistance for COVID-19",
      titleAr: "المساعدة الطارئة لكوفيد-19",
      amount: "$26.3M",
      date: "2020",
      status: "completed" as const,
      descriptionEn: "Rapid financing to address urgent balance of payments needs arising from the COVID-19 pandemic and support essential health expenditures",
      descriptionAr: "تمويل سريع لمعالجة احتياجات ميزان المدفوعات العاجلة الناشئة عن جائحة كوفيد-19 ودعم النفقات الصحية الأساسية"
    },
    {
      id: "imf3",
      titleEn: "Article IV Consultation",
      titleAr: "مشاورات المادة الرابعة",
      amount: "Technical Assistance",
      date: "2025",
      status: "active" as const,
      descriptionEn: "IMF resumed Article IV consultations after 11 years, providing macroeconomic assessment, policy advice, and reform framework for economic recovery",
      descriptionAr: "استأنف صندوق النقد الدولي مشاورات المادة الرابعة بعد 11 عاماً، مما يوفر تقييماً اقتصادياً كلياً، ومشورة سياسية، وإطار إصلاح للتعافي الاقتصادي"
    },
    {
      id: "imf4",
      titleEn: "Technical Assistance on Fiscal Management",
      titleAr: "المساعدة الفنية في الإدارة المالية",
      amount: "Capacity Building",
      date: "2014-2024",
      status: "active" as const,
      descriptionEn: "Strengthened budget preparation, revenue administration, and public financial management. Tax collection efficiency improved 18%; budget execution transparency increased",
      descriptionAr: "عزز إعداد الميزانية، وإدارة الإيرادات، وإدارة المالية العامة. تحسنت كفاءة تحصيل الضرائب بنسبة 18%؛ زادت شفافية تنفيذ الميزانية"
    },
    {
      id: "imf5",
      titleEn: "Technical Assistance on Monetary Policy",
      titleAr: "المساعدة الفنية في السياسة النقدية",
      amount: "Capacity Building",
      date: "2016-2024",
      status: "active" as const,
      descriptionEn: "Advisory support to Central Bank of Yemen on exchange rate management, liquidity operations, and banking supervision despite institutional fragmentation",
      descriptionAr: "دعم استشاري للبنك المركزي اليمني بشأن إدارة سعر الصرف، وعمليات السيولة، والإشراف المصرفي رغم التجزئة المؤسسية"
    }
  ];

  const impactMetrics = [
    {
      labelEn: "Total Funding",
      labelAr: "إجمالي التمويل",
      value: "$577M",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      labelEn: "Active Programs",
      labelAr: "البرامج النشطة",
      value: "3",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      labelEn: "Technical Missions",
      labelAr: "البعثات الفنية",
      value: "25+",
      icon: <Users className="w-6 h-6" />
    },
    {
      labelEn: "Reform Areas",
      labelAr: "مجالات الإصلاح",
      value: "12",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const keyAchievementsEn = [
    "Resumed Article IV consultations in 2025 after 11-year hiatus, providing critical macroeconomic assessment",
    "Supported fiscal reforms reducing fuel subsidy costs from 4.2% to 1.8% of GDP (2014-2019)",
    "Increased tax revenue by 12% through revenue administration reforms and capacity building",
    "Provided $26.3M emergency assistance during COVID-19 pandemic for urgent balance of payments needs",
    "Strengthened public financial management with 18% improvement in tax collection efficiency",
    "Maintained technical assistance despite conflict through remote advisory and virtual missions",
    "Advised Central Bank on exchange rate management and liquidity operations during dual authority crisis",
    "Supported budget preparation and fiscal transparency improvements in government institutions"
  ];

  const keyAchievementsAr = [
    "استأنف مشاورات المادة الرابعة في 2025 بعد توقف 11 عاماً، مما يوفر تقييماً اقتصادياً كلياً حاسماً",
    "دعم الإصلاحات المالية التي خفضت تكاليف دعم الوقود من 4.2% إلى 1.8% من الناتج المحلي الإجمالي (2014-2019)",
    "زاد الإيرادات الضريبية بنسبة 12% من خلال إصلاحات إدارة الإيرادات وبناء القدرات",
    "قدم 26.3 مليون دولار مساعدة طارئة خلال جائحة كوفيد-19 لاحتياجات ميزان المدفوعات العاجلة",
    "عزز إدارة المالية العامة مع تحسن بنسبة 18% في كفاءة تحصيل الضرائب",
    "حافظ على المساعدة الفنية رغم الصراع من خلال الاستشارات عن بعد والبعثات الافتراضية",
    "نصح البنك المركزي بشأن إدارة سعر الصرف وعمليات السيولة خلال أزمة السلطة المزدوجة",
    "دعم إعداد الميزانية وتحسينات الشفافية المالية في المؤسسات الحكومية"
  ];

  const challengesEn = [
    "Dual authority structure creates conflicting policy frameworks and coordination challenges",
    "Limited government capacity and institutional fragmentation reduce reform implementation effectiveness",
    "Exchange rate divergence and currency volatility complicate macroeconomic stabilization efforts",
    "Security constraints prevent in-person missions and direct technical assistance delivery",
    "Fiscal revenue collapse from oil export halt limits government's ability to implement reforms",
    "Banking sector fragmentation restricts monetary policy transmission and financial system stability",
    "Humanitarian crisis diverts resources from structural reforms to emergency response",
    "Political fragmentation and competing authorities complicate policy dialogue and program design"
  ];

  const challengesAr = [
    "يخلق هيكل السلطة المزدوج أطر سياسية متضاربة وتحديات تنسيق",
    "تقلل القدرة الحكومية المحدودة والتجزئة المؤسسية من فعالية تنفيذ الإصلاح",
    "يعقد انحراف سعر الصرف وتقلب العملة جهود الاستقرار الاقتصادي الكلي",
    "تمنع القيود الأمنية البعثات الشخصية وتقديم المساعدة الفنية المباشرة",
    "يحد انهيار الإيرادات المالية من وقف صادرات النفط من قدرة الحكومة على تنفيذ الإصلاحات",
    "يقيد تجزئة القطاع المصرفي انتقال السياسة النقدية واستقرار النظام المالي",
    "تحول الأزمة الإنسانية الموارد من الإصلاحات الهيكلية إلى الاستجابة للطوارئ",
    "يعقد التجزئة السياسية والسلطات المتنافسة الحوار السياسي وتصميم البرنامج"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <Breadcrumb
          items={[
            { label: "Home", labelAr: "الرئيسية", href: "/" },
            { label: "Stakeholders", labelAr: "أصحاب المصلحة", href: "/stakeholders" },
            { label: "IMF", labelAr: "صندوق النقد الدولي" }
          ]}
        />

        <div className="mt-8">
          <StakeholderDetail
            nameEn="International Monetary Fund (IMF)"
            nameAr="صندوق النقد الدولي"
            type="International Financial Institution"
            descriptionEn="The IMF provides financial assistance, policy advice, and technical assistance to Yemen, focusing on macroeconomic stability, fiscal reforms, and capacity building despite the ongoing crisis."
            descriptionAr="يقدم صندوق النقد الدولي المساعدة المالية، والمشورة السياسية، والمساعدة الفنية لليمن، مع التركيز على الاستقرار الاقتصادي الكلي، والإصلاحات المالية، وبناء القدرات رغم الأزمة المستمرة."
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/International_Monetary_Fund_logo.svg/200px-International_Monetary_Fund_logo.svg.png"
            website="https://www.imf.org/en/Countries/YEM"
            email="yemen@imf.org"
            location="Washington, D.C., USA | Regional Office: Dubai, UAE"
            totalFunding="$577M (2014-2025)"
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
