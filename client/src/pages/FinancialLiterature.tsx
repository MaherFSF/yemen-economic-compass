import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Building2, FileText, Calendar, Download, Search, ExternalLink } from "lucide-react";

interface Publication {
  id: string;
  title: string;
  titleAr: string;
  institution: string;
  institutionAr: string;
  year: number;
  pages: number;
  type: "report" | "paper" | "brief" | "study";
  topic: string[];
  topicAr: string[];
  url: string;
  description: string;
  descriptionAr: string;
}

const publications: Publication[] = [
  {
    id: "wb-2025-spring",
    title: "Yemen Economic Monitor - Spring 2025",
    titleAr: "مرصد الاقتصاد اليمني - ربيع 2025",
    institution: "World Bank",
    institutionAr: "البنك الدولي",
    year: 2025,
    pages: 45,
    type: "report",
    topic: ["economy", "gdp", "inflation", "poverty"],
    topicAr: ["اقتصاد", "ناتج محلي", "تضخم", "فقر"],
    url: "https://documents1.worldbank.org/curated/en/099822505292530706/pdf/IDU-7009880b-d070-472d-9bf2-5cc72a3fc75d.pdf",
    description: "Comprehensive analysis of Yemen's economic situation including GDP contraction, inflation trends, and poverty levels",
    descriptionAr: "تحليل شامل للوضع الاقتصادي في اليمن بما في ذلك انكماش الناتج المحلي واتجاهات التضخم ومستويات الفقر"
  },
  {
    id: "imf-2025-art4",
    title: "IMF Article IV Consultation - October 2025",
    titleAr: "مشاورات صندوق النقد الدولي المادة الرابعة - أكتوبر 2025",
    institution: "International Monetary Fund",
    institutionAr: "صندوق النقد الدولي",
    year: 2025,
    pages: 78,
    type: "report",
    topic: ["monetary", "fiscal", "banking", "exchange-rate"],
    topicAr: ["نقدي", "مالي", "مصرفي", "سعر-صرف"],
    url: "https://www.imf.org/en/Publications/CR/Issues/2025/10/15/yemen-2025-article-iv-consultation",
    description: "First IMF consultation in 11 years covering monetary policy, fiscal sustainability, and banking sector reforms",
    descriptionAr: "أول مشاورة لصندوق النقد الدولي منذ 11 عاماً تغطي السياسة النقدية والاستدامة المالية وإصلاحات القطاع المصرفي"
  },
  {
    id: "un-poe-2025",
    title: "UN Panel of Experts Report on Yemen - S/2025/650",
    titleAr: "تقرير فريق خبراء الأمم المتحدة بشأن اليمن - S/2025/650",
    institution: "United Nations Security Council",
    institutionAr: "مجلس الأمن التابع للأمم المتحدة",
    year: 2025,
    pages: 156,
    type: "report",
    topic: ["sanctions", "violations", "arms", "economy"],
    topicAr: ["عقوبات", "انتهاكات", "أسلحة", "اقتصاد"],
    url: "https://www.securitycouncilreport.org/un-documents/yemen/",
    description: "Comprehensive report on sanctions violations, arms transfers, and economic warfare tactics",
    descriptionAr: "تقرير شامل عن انتهاكات العقوبات ونقل الأسلحة وتكتيكات الحرب الاقتصادية"
  },
  {
    id: "ocha-hno-2025",
    title: "Humanitarian Needs Overview 2025",
    titleAr: "نظرة عامة على الاحتياجات الإنسانية 2025",
    institution: "UN OCHA",
    institutionAr: "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية",
    year: 2025,
    pages: 92,
    type: "report",
    topic: ["humanitarian", "food-security", "health", "displacement"],
    topicAr: ["إنساني", "أمن-غذائي", "صحة", "نزوح"],
    url: "https://reliefweb.int/report/yemen/yemen-humanitarian-needs-overview-2025",
    description: "Assessment of humanitarian needs affecting 21.6 million people requiring assistance",
    descriptionAr: "تقييم الاحتياجات الإنسانية التي تؤثر على 21.6 مليون شخص يحتاجون إلى المساعدة"
  },
  {
    id: "unhcr-2024",
    title: "UNHCR Annual Results Report 2024 - Yemen",
    titleAr: "تقرير النتائج السنوية للمفوضية السامية للأمم المتحدة لشؤون اللاجئين 2024 - اليمن",
    institution: "UNHCR",
    institutionAr: "المفوضية السامية للأمم المتحدة لشؤون اللاجئين",
    year: 2024,
    pages: 34,
    type: "report",
    topic: ["refugees", "idps", "protection", "assistance"],
    topicAr: ["لاجئون", "نازحون", "حماية", "مساعدة"],
    url: "https://reporting.unhcr.org/yemen",
    description: "Overview of refugee and IDP situation, protection challenges, and humanitarian response",
    descriptionAr: "نظرة عامة على وضع اللاجئين والنازحين داخلياً وتحديات الحماية والاستجابة الإنسانية"
  },
  {
    id: "fews-2025",
    title: "Yemen Food Security Outlook - January to September 2025",
    titleAr: "توقعات الأمن الغذائي في اليمن - يناير إلى سبتمبر 2025",
    institution: "FEWS NET",
    institutionAr: "شبكة نظم الإنذار المبكر بالمجاعة",
    year: 2025,
    pages: 28,
    type: "brief",
    topic: ["food-security", "famine", "agriculture", "prices"],
    topicAr: ["أمن-غذائي", "مجاعة", "زراعة", "أسعار"],
    url: "https://fews.net/east-africa/yemen",
    description: "Food security analysis and projections for Yemen covering acute food insecurity phases",
    descriptionAr: "تحليل الأمن الغذائي وتوقعات اليمن التي تغطي مراحل انعدام الأمن الغذائي الحاد"
  },
  {
    id: "sanaa-center-2024-banking",
    title: "Yemen's Banking Crisis: Fragmentation and Economic Warfare",
    titleAr: "أزمة القطاع المصرفي في اليمن: التفتت والحرب الاقتصادية",
    institution: "Sana'a Center for Strategic Studies",
    institutionAr: "مركز صنعاء للدراسات الاستراتيجية",
    year: 2024,
    pages: 67,
    type: "study",
    topic: ["banking", "central-bank", "currency", "financial-sector"],
    topicAr: ["مصرفي", "بنك-مركزي", "عملة", "قطاع-مالي"],
    url: "https://sanaacenter.org/publications/analysis/",
    description: "In-depth analysis of the dual banking system and its impact on Yemen's economy",
    descriptionAr: "تحليل معمق للنظام المصرفي المزدوج وتأثيره على اقتصاد اليمن"
  },
  {
    id: "wb-2024-mpo",
    title: "Yemen Macro Poverty Outlook 2024",
    titleAr: "توقعات الفقر الكلي في اليمن 2024",
    institution: "World Bank",
    institutionAr: "البنك الدولي",
    year: 2024,
    pages: 12,
    type: "brief",
    topic: ["poverty", "economy", "projections"],
    topicAr: ["فقر", "اقتصاد", "توقعات"],
    url: "https://www.worldbank.org/en/country/yemen/publication/macro-poverty-outlook",
    description: "Short-term economic and poverty projections for Yemen",
    descriptionAr: "توقعات اقتصادية وفقر قصيرة الأجل لليمن"
  },
  {
    id: "imf-2021-sdr",
    title: "IMF Special Drawing Rights Allocation to Yemen - 2021",
    titleAr: "تخصيص حقوق السحب الخاصة لصندوق النقد الدولي لليمن - 2021",
    institution: "International Monetary Fund",
    institutionAr: "صندوق النقد الدولي",
    year: 2021,
    pages: 8,
    type: "brief",
    topic: ["monetary", "sdr", "reserves"],
    topicAr: ["نقدي", "حقوق-سحب", "احتياطيات"],
    url: "https://www.imf.org/en/Topics/special-drawing-right",
    description: "Details of the $665 million SDR allocation to Yemen for COVID-19 response",
    descriptionAr: "تفاصيل تخصيص 665 مليون دولار من حقوق السحب الخاصة لليمن للاستجابة لكوفيد-19"
  },
  {
    id: "sanaa-center-2023-oil",
    title: "Yemen's Oil and Gas Sector: Control, Revenue, and Conflict",
    titleAr: "قطاع النفط والغاز في اليمن: السيطرة والإيرادات والصراع",
    institution: "Sana'a Center for Strategic Studies",
    institutionAr: "مركز صنعاء للدراسات الاستراتيجية",
    year: 2023,
    pages: 89,
    type: "study",
    topic: ["oil", "gas", "energy", "revenues"],
    topicAr: ["نفط", "غاز", "طاقة", "إيرادات"],
    url: "https://sanaacenter.org/publications/analysis/",
    description: "Comprehensive analysis of oil and gas production, export blockades, and revenue disputes",
    descriptionAr: "تحليل شامل لإنتاج النفط والغاز وحصار التصدير ونزاعات الإيرادات"
  },
  {
    id: "chatham-house-2023",
    title: "Yemen's Economic Collapse and the Role of External Actors",
    titleAr: "الانهيار الاقتصادي في اليمن ودور الجهات الخارجية",
    institution: "Chatham House",
    institutionAr: "تشاتام هاوس",
    year: 2023,
    pages: 54,
    type: "paper",
    topic: ["economy", "saudi", "uae", "iran", "international"],
    topicAr: ["اقتصاد", "سعودية", "إمارات", "إيران", "دولي"],
    url: "https://www.chathamhouse.org/",
    description: "Analysis of how regional and international actors have shaped Yemen's economic trajectory",
    descriptionAr: "تحليل كيف شكلت الجهات الإقليمية والدولية المسار الاقتصادي لليمن"
  },
  {
    id: "acaps-2024",
    title: "Yemen Crisis Analysis - Economic Drivers of Humanitarian Needs",
    titleAr: "تحليل أزمة اليمن - المحركات الاقتصادية للاحتياجات الإنسانية",
    institution: "ACAPS",
    institutionAr: "ACAPS",
    year: 2024,
    pages: 42,
    type: "report",
    topic: ["humanitarian", "economy", "crisis", "analysis"],
    topicAr: ["إنساني", "اقتصاد", "أزمة", "تحليل"],
    url: "https://www.acaps.org/countries/yemen",
    description: "Analysis of how economic factors drive humanitarian needs in Yemen",
    descriptionAr: "تحليل كيف تدفع العوامل الاقتصادية الاحتياجات الإنسانية في اليمن"
  },
  {
    id: "devchamp-2024-microfinance",
    title: "Microfinance in Yemen: Resilience Amid Conflict",
    titleAr: "التمويل الأصغر في اليمن: الصمود وسط الصراع",
    institution: "Development Champions",
    institutionAr: "أبطال التنمية",
    year: 2024,
    pages: 38,
    type: "study",
    topic: ["microfinance", "financial-inclusion", "sfd"],
    topicAr: ["تمويل-أصغر", "شمول-مالي", "صندوق-اجتماعي"],
    url: "https://www.devchampions.org/",
    description: "Study of microfinance sector performance and challenges during the conflict",
    descriptionAr: "دراسة أداء قطاع التمويل الأصغر والتحديات خلال الصراع"
  },
  {
    id: "csis-2023-yemen",
    title: "Yemen's Fragmented Economy: Pathways to Stabilization",
    titleAr: "اقتصاد اليمن المجزأ: مسارات الاستقرار",
    institution: "Center for Strategic and International Studies",
    institutionAr: "مركز الدراسات الاستراتيجية والدولية",
    year: 2023,
    pages: 71,
    type: "study",
    topic: ["economy", "stabilization", "reconstruction", "policy"],
    topicAr: ["اقتصاد", "استقرار", "إعمار", "سياسة"],
    url: "https://www.csis.org/programs/middle-east-program/yemen",
    description: "Policy recommendations for economic stabilization and reconstruction in Yemen",
    descriptionAr: "توصيات سياسية للاستقرار الاقتصادي وإعادة الإعمار في اليمن"
  },
  {
    id: "mei-2024-currency",
    title: "The Currency War in Yemen: Monetary Policy as a Weapon",
    titleAr: "حرب العملة في اليمن: السياسة النقدية كسلاح",
    institution: "Middle East Institute",
    institutionAr: "معهد الشرق الأوسط",
    year: 2024,
    pages: 29,
    type: "paper",
    topic: ["currency", "monetary", "central-bank", "warfare"],
    topicAr: ["عملة", "نقدي", "بنك-مركزي", "حرب"],
    url: "https://www.mei.edu/",
    description: "Analysis of how currency policies have been weaponized in Yemen's conflict",
    descriptionAr: "تحليل كيف تم تسليح سياسات العملة في صراع اليمن"
  },
  {
    id: "arab-monetary-fund-2024",
    title: "Arab Monetary Fund Support to Yemen 2024",
    titleAr: "دعم صندوق النقد العربي لليمن 2024",
    institution: "Arab Monetary Fund",
    institutionAr: "صندوق النقد العربي",
    year: 2024,
    pages: 16,
    type: "brief",
    topic: ["monetary", "aid", "support", "arab"],
    topicAr: ["نقدي", "مساعدات", "دعم", "عربي"],
    url: "https://www.amf.org.ae/",
    description: "Overview of Arab Monetary Fund's financial support and technical assistance to Yemen",
    descriptionAr: "نظرة عامة على الدعم المالي والمساعدة الفنية من صندوق النقد العربي لليمن"
  },
  {
    id: "sfd-2025-june",
    title: "Social Fund for Development - Microfinance Portfolio Report June 2025",
    titleAr: "الصندوق الاجتماعي للتنمية - تقرير محفظة التمويل الأصغر يونيو 2025",
    institution: "Social Fund for Development",
    institutionAr: "الصندوق الاجتماعي للتنمية",
    year: 2025,
    pages: 52,
    type: "report",
    topic: ["microfinance", "sfd", "portfolio", "performance"],
    topicAr: ["تمويل-أصغر", "صندوق-اجتماعي", "محفظة", "أداء"],
    url: "http://www.sfd-yemen.org/",
    description: "Comprehensive report on microfinance programs and specialized banks performance",
    descriptionAr: "تقرير شامل عن برامج التمويل الأصغر وأداء البنوك المتخصصة"
  },
  {
    id: "deeproot-2024-stc",
    title: "The Southern Transitional Council and Yemen's Economic Future",
    titleAr: "المجلس الانتقالي الجنوبي ومستقبل اليمن الاقتصادي",
    institution: "DeepRoot Consulting",
    institutionAr: "ديب روت للاستشارات",
    year: 2024,
    pages: 47,
    type: "study",
    topic: ["stc", "south", "economy", "separatism"],
    topicAr: ["انتقالي-جنوبي", "جنوب", "اقتصاد", "انفصال"],
    url: "https://www.deeproot.consulting/",
    description: "Analysis of STC's economic agenda and its impact on Yemen's unity",
    descriptionAr: "تحليل الأجندة الاقتصادية للمجلس الانتقالي الجنوبي وتأثيرها على وحدة اليمن"
  },
  {
    id: "sanaa-center-2023-currency",
    title: "The Riyal Divide: Yemen's Dual Currency Crisis",
    titleAr: "انقسام الريال: أزمة العملة المزدوجة في اليمن",
    institution: "Sana'a Center for Strategic Studies",
    institutionAr: "مركز صنعاء للدراسات الاستراتيجية",
    year: 2023,
    pages: 56,
    type: "study",
    topic: ["currency", "monetary", "exchange-rate", "banking"],
    topicAr: ["عملة", "نقدي", "سعر-صرف", "مصرفي"],
    url: "https://sanaacenter.org/publications/analysis/",
    description: "Detailed analysis of the dual currency system and its economic impact",
    descriptionAr: "تحليل تفصيلي لنظام العملة المزدوجة وتأثيره الاقتصادي"
  },
  {
    id: "sanaa-center-2022-humanitarian",
    title: "Yemen's Humanitarian Crisis: Economic Dimensions",
    titleAr: "الأزمة الإنسانية في اليمن: الأبعاد الاقتصادية",
    institution: "Sana'a Center for Strategic Studies",
    institutionAr: "مركز صنعاء للدراسات الاستراتيجية",
    year: 2022,
    pages: 64,
    type: "report",
    topic: ["humanitarian", "economy", "poverty", "food-security"],
    topicAr: ["إنساني", "اقتصاد", "فقر", "أمن-غذائي"],
    url: "https://sanaacenter.org/publications/analysis/",
    description: "Examination of economic factors driving humanitarian needs",
    descriptionAr: "دراسة العوامل الاقتصادية التي تدفع الاحتياجات الإنسانية"
  },
  {
    id: "wb-2023-update",
    title: "Yemen Economic Update - Fall 2023",
    titleAr: "تحديث الاقتصاد اليمني - خريف 2023",
    institution: "World Bank",
    institutionAr: "البنك الدولي",
    year: 2023,
    pages: 38,
    type: "report",
    topic: ["economy", "gdp", "inflation", "fiscal"],
    topicAr: ["اقتصاد", "ناتج-محلي", "تضخم", "مالي"],
    url: "https://www.worldbank.org/en/country/yemen",
    description: "Semi-annual economic update covering fiscal and monetary developments",
    descriptionAr: "تحديث اقتصادي نصف سنوي يغطي التطورات المالية والنقدية"
  },
  {
    id: "imf-2022-consultation",
    title: "IMF Staff Report - Yemen 2022",
    titleAr: "تقرير موظفي صندوق النقد - اليمن 2022",
    institution: "International Monetary Fund",
    institutionAr: "صندوق النقد الدولي",
    year: 2022,
    pages: 45,
    type: "report",
    topic: ["monetary", "fiscal", "reserves", "debt"],
    topicAr: ["نقدي", "مالي", "احتياطيات", "ديون"],
    url: "https://www.imf.org/en/Countries/YEM",
    description: "IMF staff assessment of Yemen's economic and financial situation",
    descriptionAr: "تقييم موظفي صندوق النقد للوضع الاقتصادي والمالي في اليمن"
  },
  {
    id: "un-escwa-2023",
    title: "ESCWA - Yemen Economic and Social Impact Assessment 2023",
    titleAr: "الإسكوا - تقييم الأثر الاقتصادي والاجتماعي لليمن 2023",
    institution: "UN Economic and Social Commission for Western Asia",
    institutionAr: "اللجنة الاقتصادية والاجتماعية لغربي آسيا",
    year: 2023,
    pages: 112,
    type: "report",
    topic: ["economy", "social", "impact", "reconstruction"],
    topicAr: ["اقتصاد", "اجتماعي", "أثر", "إعمار"],
    url: "https://www.unescwa.org/",
    description: "Comprehensive assessment of conflict impact on economy and society",
    descriptionAr: "تقييم شامل لأثر الصراع على الاقتصاد والمجتمع"
  },
  {
    id: "wfp-2024",
    title: "WFP Yemen Market Analysis 2024",
    titleAr: "تحليل الأسواق في اليمن - برنامج الأغذية العالمي 2024",
    institution: "World Food Programme",
    institutionAr: "برنامج الأغذية العالمي",
    year: 2024,
    pages: 35,
    type: "report",
    topic: ["food-security", "markets", "prices", "humanitarian"],
    topicAr: ["أمن-غذائي", "أسواق", "أسعار", "إنساني"],
    url: "https://www.wfp.org/countries/yemen",
    description: "Market analysis covering food prices, supply chains, and access",
    descriptionAr: "تحليل الأسواق يغطي أسعار الغذاء وسلاسل الإمداد والوصول"
  },
  {
    id: "undp-2023",
    title: "UNDP Yemen Recovery and Peacebuilding Assessment 2023",
    titleAr: "برنامج الأمم المتحدة الإنمائي - تقييم التعافي وبناء السلام في اليمن 2023",
    institution: "United Nations Development Programme",
    institutionAr: "برنامج الأمم المتحدة الإنمائي",
    year: 2023,
    pages: 87,
    type: "report",
    topic: ["reconstruction", "peacebuilding", "development", "economy"],
    topicAr: ["إعمار", "بناء-سلام", "تنمية", "اقتصاد"],
    url: "https://www.undp.org/yemen",
    description: "Assessment of recovery needs and peacebuilding priorities",
    descriptionAr: "تقييم احتياجات التعافي وأولويات بناء السلام"
  },
  {
    id: "icg-2022",
    title: "International Crisis Group - Yemen's Economic Collapse",
    titleAr: "مجموعة الأزمات الدولية - الانهيار الاقتصادي في اليمن",
    institution: "International Crisis Group",
    institutionAr: "مجموعة الأزمات الدولية",
    year: 2022,
    pages: 41,
    type: "report",
    topic: ["economy", "conflict", "crisis", "policy"],
    topicAr: ["اقتصاد", "صراع", "أزمة", "سياسة"],
    url: "https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/yemen",
    description: "Analysis of economic drivers of conflict and policy recommendations",
    descriptionAr: "تحليل المحركات الاقتصادية للصراع والتوصيات السياسية"
  },
  {
    id: "gcc-2024",
    title: "GCC Support to Yemen Economic Stabilization 2024",
    titleAr: "دعم مجلس التعاون الخليجي للاستقرار الاقتصادي في اليمن 2024",
    institution: "Gulf Cooperation Council",
    institutionAr: "مجلس التعاون لدول الخليج العربية",
    year: 2024,
    pages: 31,
    type: "brief",
    topic: ["aid", "stabilization", "saudi", "uae"],
    topicAr: ["مساعدات", "استقرار", "سعودية", "إمارات"],
    url: "https://www.gcc-sg.org/",
    description: "Overview of GCC financial support and economic stabilization efforts",
    descriptionAr: "نظرة عامة على الدعم المالي وجهود الاستقرار الاقتصادي من مجلس التعاون"
  },
  {
    id: "brookings-2023",
    title: "Brookings - Yemen's Path to Economic Recovery",
    titleAr: "بروكينغز - مسار اليمن نحو التعافي الاقتصادي",
    institution: "Brookings Institution",
    institutionAr: "معهد بروكينغز",
    year: 2023,
    pages: 48,
    type: "paper",
    topic: ["recovery", "reconstruction", "policy", "economy"],
    topicAr: ["تعافي", "إعمار", "سياسة", "اقتصاد"],
    url: "https://www.brookings.edu/",
    description: "Policy paper on pathways to economic recovery and reconstruction",
    descriptionAr: "ورقة سياسات حول مسارات التعافي الاقتصادي وإعادة الإعمار"
  },
  {
    id: "atlantic-council-2022",
    title: "Atlantic Council - Yemen's Fragmented Financial System",
    titleAr: "مجلس الأطلسي - النظام المالي المجزأ في اليمن",
    institution: "Atlantic Council",
    institutionAr: "مجلس الأطلسي",
    year: 2022,
    pages: 39,
    type: "study",
    topic: ["banking", "financial-sector", "fragmentation", "governance"],
    topicAr: ["مصرفي", "قطاع-مالي", "تجزئة", "حوكمة"],
    url: "https://www.atlanticcouncil.org/",
    description: "Analysis of financial sector fragmentation and governance challenges",
    descriptionAr: "تحليل تجزئة القطاع المالي وتحديات الحوكمة"
  },
  {
    id: "oxfam-2024",
    title: "Oxfam - Yemen Inequality and Economic Justice Report 2024",
    titleAr: "أوكسفام - تقرير عدم المساواة والعدالة الاقتصادية في اليمن 2024",
    institution: "Oxfam International",
    institutionAr: "أوكسفام الدولية",
    year: 2024,
    pages: 52,
    type: "report",
    topic: ["inequality", "poverty", "justice", "humanitarian"],
    topicAr: ["عدم-مساواة", "فقر", "عدالة", "إنساني"],
    url: "https://www.oxfam.org/en/what-we-do/countries/yemen",
    description: "Report on economic inequality and social justice in Yemen",
    descriptionAr: "تقرير عن عدم المساواة الاقتصادية والعدالة الاجتماعية في اليمن"
  },
  {
    id: "carnegie-2023",
    title: "Carnegie - Yemen's Economic Fragmentation and Regional Dynamics",
    titleAr: "كارنيغي - التجزئة الاقتصادية في اليمن والديناميكيات الإقليمية",
    institution: "Carnegie Endowment for International Peace",
    institutionAr: "مؤسسة كارنيغي للسلام الدولي",
    year: 2023,
    pages: 44,
    type: "paper",
    topic: ["economy", "regional", "fragmentation", "geopolitics"],
    topicAr: ["اقتصاد", "إقليمي", "تجزئة", "جيوسياسية"],
    url: "https://carnegieendowment.org/",
    description: "Analysis of economic fragmentation and regional power dynamics",
    descriptionAr: "تحليل التجزئة الاقتصادية وديناميكيات القوة الإقليمية"
  },
  {
    id: "iom-2024",
    title: "IOM Yemen Migration and Economic Displacement Report 2024",
    titleAr: "المنظمة الدولية للهجرة - تقرير الهجرة والنزوح الاقتصادي في اليمن 2024",
    institution: "International Organization for Migration",
    institutionAr: "المنظمة الدولية للهجرة",
    year: 2024,
    pages: 36,
    type: "report",
    topic: ["migration", "displacement", "economy", "humanitarian"],
    topicAr: ["هجرة", "نزوح", "اقتصاد", "إنساني"],
    url: "https://www.iom.int/countries/yemen",
    description: "Report on migration patterns and economic drivers of displacement",
    descriptionAr: "تقرير عن أنماط الهجرة والمحركات الاقتصادية للنزوح"
  },
  {
    id: "ilo-2023",
    title: "ILO Yemen Labor Market and Employment Assessment 2023",
    titleAr: "منظمة العمل الدولية - تقييم سوق العمل والتوظيف في اليمن 2023",
    institution: "International Labour Organization",
    institutionAr: "منظمة العمل الدولية",
    year: 2023,
    pages: 58,
    type: "report",
    topic: ["employment", "labor", "economy", "livelihoods"],
    topicAr: ["توظيف", "عمل", "اقتصاد", "سبل-عيش"],
    url: "https://www.ilo.org/beirut/countries/yemen/",
    description: "Assessment of labor market conditions and employment challenges",
    descriptionAr: "تقييم ظروف سوق العمل وتحديات التوظيف"
  },
  {
    id: "cby-aden-annual-2023",
    title: "Central Bank of Yemen (Aden) - Annual Report 2023",
    titleAr: "البنك المركزي اليمني (عدن) - التقرير السنوي 2023",
    institution: "Central Bank of Yemen (Aden)",
    institutionAr: "البنك المركزي اليمني (عدن)",
    year: 2023,
    pages: 156,
    type: "report",
    topic: ["central-bank", "monetary", "banking", "financial-infrastructure"],
    topicAr: ["بنك-مركزي", "نقدي", "مصرفي", "بنية-تحتية-مالية"],
    url: "https://www.english.cby-ye.com/files/66e7e260be038.pdf",
    description: "Official annual report covering economic, monetary, and financial developments in 2023",
    descriptionAr: "التقرير السنوي الرسمي يغطي التطورات الاقتصادية والنقدية والمالية في 2023"
  },
  {
    id: "cby-aden-monetary-2025-may",
    title: "CBY-Aden Monetary and Financial Developments - May 2025",
    titleAr: "البنك المركزي عدن - التطورات النقدية والمالية مايو 2025",
    institution: "Central Bank of Yemen (Aden)",
    institutionAr: "البنك المركزي اليمني (عدن)",
    year: 2025,
    pages: 24,
    type: "brief",
    topic: ["monetary", "banking", "exchange-rate", "macroeconomic-analysis"],
    topicAr: ["نقدي", "مصرفي", "سعر-صرف", "تحليل-اقتصاد-كلي"],
    url: "https://english.cby-ye.com/files/68924f421b8b0.pdf",
    description: "Monthly report on monetary and financial developments including CBY balance sheet analysis",
    descriptionAr: "تقرير شهري عن التطورات النقدية والمالية بما في ذلك تحليل الميزانية العمومية"
  },
  {
    id: "cby-aden-quarterly-2021-q2",
    title: "CBY-Aden Quarterly Bulletin - Q2 2021",
    titleAr: "البنك المركزي عدن - النشرة الربع سنوية الربع الثاني 2021",
    institution: "Central Bank of Yemen (Aden)",
    institutionAr: "البنك المركزي اليمني (عدن)",
    year: 2021,
    pages: 32,
    type: "brief",
    topic: ["monetary", "banking", "macroeconomic-analysis"],
    topicAr: ["نقدي", "مصرفي", "تحليل-اقتصاد-كلي"],
    url: "https://english.cby-ye.com/researchandstatistics",
    description: "Quarterly statistical bulletin with monetary and banking sector data",
    descriptionAr: "نشرة إحصائية ربع سنوية مع بيانات القطاع النقدي والمصرفي"
  },
  {
    id: "cby-aden-annual-2020",
    title: "Central Bank of Yemen (Aden) - Annual Report 2020",
    titleAr: "البنك المركزي اليمني (عدن) - التقرير السنوي 2020",
    institution: "Central Bank of Yemen (Aden)",
    institutionAr: "البنك المركزي اليمني (عدن)",
    year: 2020,
    pages: 142,
    type: "report",
    topic: ["central-bank", "monetary", "banking", "macroeconomic-analysis"],
    topicAr: ["بنك-مركزي", "نقدي", "مصرفي", "تحليل-اقتصاد-كلي"],
    url: "https://english.cby-ye.com/researchandstatistics",
    description: "Annual report covering economic and monetary developments during COVID-19 pandemic",
    descriptionAr: "التقرير السنوي يغطي التطورات الاقتصادية والنقدية خلال جائحة كوفيد-19"
  },
  {
    id: "cby-unified-2015",
    title: "Central Bank of Yemen - Annual Report 2015 (Pre-Split)",
    titleAr: "البنك المركزي اليمني - التقرير السنوي 2015 (قبل الانقسام)",
    institution: "Central Bank of Yemen (Unified)",
    institutionAr: "البنك المركزي اليمني (الموحد)",
    year: 2015,
    pages: 128,
    type: "report",
    topic: ["central-bank", "monetary", "banking", "conflict-economics"],
    topicAr: ["بنك-مركزي", "نقدي", "مصرفي", "اقتصاد-صراع"],
    url: "https://www.cby-ye.com/",
    description: "Last annual report before CBY split, covering onset of conflict's economic impact",
    descriptionAr: "آخر تقرير سنوي قبل انقسام البنك المركزي، يغطي بداية الأثر الاقتصادي للصراع"
  },
  {
    id: "fao-2024",
    title: "FAO Yemen Food Security and Agriculture Assessment 2024",
    titleAr: "منظمة الأغذية والزراعة - تقييم الأمن الغذائي والزراعة في اليمن 2024",
    institution: "Food and Agriculture Organization",
    institutionAr: "منظمة الأغذية والزراعة",
    year: 2024,
    pages: 68,
    type: "report",
    topic: ["food-security", "agriculture", "humanitarian-crisis"],
    topicAr: ["أمن-غذائي", "زراعة", "أزمة-إنسانية"],
    url: "https://www.fao.org/yemen/",
    description: "Comprehensive assessment of food security situation and agricultural production",
    descriptionAr: "تقييم شامل لوضع الأمن الغذائي والإنتاج الزراعي"
  },
  {
    id: "odi-2023",
    title: "ODI - Yemen Economic Governance and Institutional Fragmentation 2023",
    titleAr: "معهد التنمية الخارجية - الحوكمة الاقتصادية والتجزئة المؤسسية في اليمن 2023",
    institution: "Overseas Development Institute",
    institutionAr: "معهد التنمية الخارجية",
    year: 2023,
    pages: 73,
    type: "study",
    topic: ["political-economy", "governance", "conflict-economics"],
    topicAr: ["اقتصاد-سياسي", "حوكمة", "اقتصاد-صراع"],
    url: "https://odi.org/en/publications/",
    description: "Analysis of economic governance challenges and institutional fragmentation",
    descriptionAr: "تحليل تحديات الحوكمة الاقتصادية والتجزئة المؤسسية"
  },
  {
    id: "sanaa-center-2021-remittances",
    title: "Sana'a Center - Remittances and the Yemeni Economy",
    titleAr: "مركز صنعاء - التحويلات والاقتصاد اليمني",
    institution: "Sana'a Center for Strategic Studies",
    institutionAr: "مركز صنعاء للدراسات الاستراتيجية",
    year: 2021,
    pages: 42,
    type: "paper",
    topic: ["remittances", "economy", "financial-infrastructure"],
    topicAr: ["تحويلات", "اقتصاد", "بنية-تحتية-مالية"],
    url: "https://sanaacenter.org/publications/analysis/",
    description: "Analysis of remittance flows and their critical role in Yemen's economy",
    descriptionAr: "تحليل تدفقات التحويلات ودورها الحاسم في الاقتصاد اليمني"
  },
  {
    id: "sanaa-center-2020-digital-payments",
    title: "Sana'a Center - Digital Payments and Financial Inclusion in Yemen",
    titleAr: "مركز صنعاء - المدفوعات الرقمية والشمول المالي في اليمن",
    institution: "Sana'a Center for Strategic Studies",
    institutionAr: "مركز صنعاء للدراسات الاستراتيجية",
    year: 2020,
    pages: 51,
    type: "study",
    topic: ["digital-payments", "financial-inclusion", "banking"],
    topicAr: ["مدفوعات-رقمية", "شمول-مالي", "مصرفي"],
    url: "https://sanaacenter.org/publications/analysis/",
    description: "Study of mobile money and digital payment systems during conflict",
    descriptionAr: "دراسة المال المحمول وأنظمة الدفع الرقمي خلال الصراع"
  },
  {
    id: "unhcr-2024",
    title: "UNHCR Yemen - Displacement and Economic Impact Report 2024",
    titleAr: "مفوضية الأمم المتحدة لشؤون اللاجئين - تقرير النزوح والأثر الاقتصادي في اليمن 2024",
    institution: "United Nations High Commissioner for Refugees",
    institutionAr: "مفوضية الأمم المتحدة لشؤون اللاجئين",
    year: 2024,
    pages: 55,
    type: "report",
    topic: ["displacement", "humanitarian-crisis", "economy"],
    topicAr: ["نزوح", "أزمة-إنسانية", "اقتصاد"],
    url: "https://www.unhcr.org/yemen.html",
    description: "Report on internal displacement and its economic consequences",
    descriptionAr: "تقرير عن النزوح الداخلي وعواقبه الاقتصادية"
  },
  {
    id: "acled-2024",
    title: "ACLED Yemen Conflict and Economic Activity Data 2024",
    titleAr: "ACLED - بيانات الصراع والنشاط الاقتصادي في اليمن 2024",
    institution: "Armed Conflict Location & Event Data Project",
    institutionAr: "مشروع بيانات موقع وأحداث النزاعات المسلحة",
    year: 2024,
    pages: 28,
    type: "brief",
    topic: ["conflict-economics", "data", "macroeconomic-analysis"],
    topicAr: ["اقتصاد-صراع", "بيانات", "تحليل-اقتصاد-كلي"],
    url: "https://acleddata.com/",
    description: "Conflict event data and analysis of impact on economic activity",
    descriptionAr: "بيانات أحداث الصراع وتحليل الأثر على النشاط الاقتصادي"
  },
  {
    id: "devchampions-2022-smes",
    title: "DevChampions - Small and Medium Enterprises in Yemen 2022",
    titleAr: "أبطال التنمية - المشاريع الصغيرة والمتوسطة في اليمن 2022",
    institution: "Development Champions",
    institutionAr: "أبطال التنمية",
    year: 2022,
    pages: 46,
    type: "study",
    topic: ["smes", "economy", "microfinance"],
    topicAr: ["مشاريع-صغيرة", "اقتصاد", "تمويل-أصغر"],
    url: "https://www.devchampions.org/",
    description: "Study of SME sector challenges and opportunities during conflict",
    descriptionAr: "دراسة تحديات وفرص قطاع المشاريع الصغيرة والمتوسطة خلال الصراع"
  },
  {
    id: "wb-2022-poverty",
    title: "World Bank - Yemen Poverty Assessment 2022",
    titleAr: "البنك الدولي - تقييم الفقر في اليمن 2022",
    institution: "World Bank",
    institutionAr: "البنك الدولي",
    year: 2022,
    pages: 94,
    type: "report",
    topic: ["poverty", "economy", "humanitarian-crisis"],
    topicAr: ["فقر", "اقتصاد", "أزمة-إنسانية"],
    url: "https://www.worldbank.org/en/country/yemen",
    description: "Comprehensive poverty assessment showing 80% poverty rate",
    descriptionAr: "تقييم شامل للفقر يظهر معدل فقر 80%"
  },
  {
    id: "imf-2019-smp",
    title: "IMF Staff-Monitored Program for Yemen 2019",
    titleAr: "صندوق النقد الدولي - برنامج مراقبة الموظفين لليمن 2019",
    institution: "International Monetary Fund",
    institutionAr: "صندوق النقد الدولي",
    year: 2019,
    pages: 62,
    type: "report",
    topic: ["monetary", "fiscal", "economic-recovery"],
    topicAr: ["نقدي", "مالي", "تعافي-اقتصادي"],
    url: "https://www.imf.org/en/Countries/YEM",
    description: "IMF program assessment and macroeconomic framework recommendations",
    descriptionAr: "تقييم برنامج صندوق النقد وتوصيات الإطار الاقتصادي الكلي"
  },
  {
    id: "wb-2018-reconstruction",
    title: "World Bank - Yemen Dynamic Needs Assessment 2018",
    titleAr: "البنك الدولي - تقييم الاحتياجات الديناميكي لليمن 2018",
    institution: "World Bank",
    institutionAr: "البنك الدولي",
    year: 2018,
    pages: 186,
    type: "report",
    topic: ["reconstruction", "economy", "conflict-economics"],
    topicAr: ["إعمار", "اقتصاد", "اقتصاد-صراع"],
    url: "https://documents1.worldbank.org/curated/en/508301539801659212/pdf/130967-REVISED-BRI-PUBLIC-Disclosed-10-19-2018.pdf",
    description: "Comprehensive assessment of reconstruction needs and economic damage",
    descriptionAr: "تقييم شامل لاحتياجات إعادة الإعمار والأضرار الاقتصادية"
  },
  {
    id: "sanaa-center-2019-taxation",
    title: "Sana'a Center - Taxation and Revenue Collection in Divided Yemen",
    titleAr: "مركز صنعاء - الضرائب وتحصيل الإيرادات في اليمن المنقسم",
    institution: "Sana'a Center for Strategic Studies",
    institutionAr: "مركز صنعاء للدراسات الاستراتيجية",
    year: 2019,
    pages: 48,
    type: "study",
    topic: ["taxation", "political-economy", "conflict-economics"],
    topicAr: ["ضرائب", "اقتصاد-سياسي", "اقتصاد-صراع"],
    url: "https://sanaacenter.org/publications/analysis/",
    description: "Analysis of parallel taxation systems and revenue collection mechanisms",
    descriptionAr: "تحليل أنظمة الضرائب الموازية وآليات تحصيل الإيرادات"
  },
  {
    id: "sanaa-center-2018-ports",
    title: "Sana'a Center - Yemen's Ports: Economic Lifelines and Political Battlegrounds",
    titleAr: "مركز صنعاء - موانئ اليمن: شرايين اقتصادية وساحات معارك سياسية",
    institution: "Sana'a Center for Strategic Studies",
    institutionAr: "مركز صنعاء للدراسات الاستراتيجية",
    year: 2018,
    pages: 62,
    type: "study",
    topic: ["ports", "trade", "political-economy"],
    topicAr: ["موانئ", "تجارة", "اقتصاد-سياسي"],
    url: "https://sanaacenter.org/publications/analysis/",
    description: "Analysis of port control, revenue generation, and economic impact",
    descriptionAr: "تحليل سيطرة الموانئ وتوليد الإيرادات والأثر الاقتصادي"
  },
  {
    id: "sanaa-center-2017-salaries",
    title: "Sana'a Center - Public Sector Salaries and Yemen's Economic Crisis",
    titleAr: "مركز صنعاء - رواتب القطاع العام والأزمة الاقتصادية في اليمن",
    institution: "Sana'a Center for Strategic Studies",
    institutionAr: "مركز صنعاء للدراسات الاستراتيجية",
    year: 2017,
    pages: 39,
    type: "paper",
    topic: ["salaries", "economy", "humanitarian-crisis"],
    topicAr: ["رواتب", "اقتصاد", "أزمة-إنسانية"],
    url: "https://sanaacenter.org/publications/analysis/",
    description: "Analysis of public sector salary crisis and humanitarian impact",
    descriptionAr: "تحليل أزمة رواتب القطاع العام والأثر الإنساني"
  },
  {
    id: "sanaa-center-2016-cby-split",
    title: "Sana'a Center - The Central Bank Split and Economic Fragmentation",
    titleAr: "مركز صنعاء - انقسام البنك المركزي والتجزئة الاقتصادية",
    institution: "Sana'a Center for Strategic Studies",
    institutionAr: "مركز صنعاء للدراسات الاستراتيجية",
    year: 2016,
    pages: 44,
    type: "paper",
    topic: ["central-bank", "monetary", "conflict-economics"],
    topicAr: ["بنك-مركزي", "نقدي", "اقتصاد-صراع"],
    url: "https://sanaacenter.org/publications/analysis/",
    description: "Analysis of the 2016 CBY split and its immediate economic consequences",
    descriptionAr: "تحليل انقسام البنك المركزي 2016 وعواقبه الاقتصادية الفورية"
  }
];

// Calculate statistics
const stats = {
  totalPublications: publications.length,
  totalInstitutions: new Set(publications.map(p => p.institution)).size,
  totalPages: publications.reduce((sum, p) => sum + p.pages, 0),
  yearRange: {
    min: Math.min(...publications.map(p => p.year)),
    max: Math.max(...publications.map(p => p.year))
  }
};

export default function FinancialLiterature() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedInstitution, setSelectedInstitution] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedTopic, setSelectedTopic] = useState("all");

  // Get unique values for filters
  const years = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a);
  const institutions = Array.from(new Set(publications.map(p => isArabic ? p.institutionAr : p.institution))).sort();
  const types = Array.from(new Set(publications.map(p => p.type)));
  const allTopics = Array.from(new Set(publications.flatMap(p => isArabic ? p.topicAr : p.topic))).sort();

  // Filter publications
  const filteredPublications = publications.filter(pub => {
    const matchesSearch = isArabic
      ? pub.titleAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.institutionAr.includes(searchQuery) ||
        pub.descriptionAr.toLowerCase().includes(searchQuery.toLowerCase())
      : pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesYear = selectedYear === "all" || pub.year.toString() === selectedYear;
    const matchesInstitution = selectedInstitution === "all" || 
      (isArabic ? pub.institutionAr : pub.institution) === selectedInstitution;
    const matchesType = selectedType === "all" || pub.type === selectedType;
    const matchesTopic = selectedTopic === "all" || 
      (isArabic ? pub.topicAr : pub.topic).includes(selectedTopic);
    
    return matchesSearch && matchesYear && matchesInstitution && matchesType && matchesTopic;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir={isArabic ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="container">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <BookOpen className="w-3 h-3 mr-1" />
            {isArabic ? "مكتبة الأدبيات المالية" : "Financial Literature Library"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? "مكتبة الأدبيات المالية والاقتصادية" : "Financial & Economic Literature Library"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {isArabic
              ? "مستودع شامل للتقارير والدراسات والأوراق البحثية حول الاقتصاد والمالية في اليمن من أبرز المؤسسات الدولية والإقليمية"
              : "Comprehensive repository of reports, studies, and research papers on Yemen's economy and finance from leading international and regional institutions"}
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="container -mt-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white shadow-lg border-t-4 border-indigo-600">
            <CardContent className="pt-6">
              <FileText className="w-10 h-10 text-indigo-600 mb-2" />
              <div className="text-3xl font-bold text-gray-900">{stats.totalPublications}</div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "منشور" : "Publications"}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border-t-4 border-purple-600">
            <CardContent className="pt-6">
              <Building2 className="w-10 h-10 text-purple-600 mb-2" />
              <div className="text-3xl font-bold text-gray-900">{stats.totalInstitutions}</div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "مؤسسة" : "Institutions"}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border-t-4 border-pink-600">
            <CardContent className="pt-6">
              <BookOpen className="w-10 h-10 text-pink-600 mb-2" />
              <div className="text-3xl font-bold text-gray-900">{stats.totalPages.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "صفحة" : "Pages"}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border-t-4 border-blue-600">
            <CardContent className="pt-6">
              <Calendar className="w-10 h-10 text-blue-600 mb-2" />
              <div className="text-3xl font-bold text-gray-900">
                {stats.yearRange.max - stats.yearRange.min + 1}
              </div>
              <div className="text-sm text-muted-foreground">
                {isArabic ? "سنة من التغطية" : "Years of Coverage"}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filters */}
      <div className="container mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              {isArabic ? "البحث والتصفية" : "Search & Filter"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder={isArabic ? "بحث في العنوان أو المؤسسة أو الوصف..." : "Search title, institution, or description..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder={isArabic ? "السنة" : "Year"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isArabic ? "جميع السنوات" : "All Years"}</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedInstitution} onValueChange={setSelectedInstitution}>
                <SelectTrigger>
                  <SelectValue placeholder={isArabic ? "المؤسسة" : "Institution"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isArabic ? "جميع المؤسسات" : "All Institutions"}</SelectItem>
                  {institutions.map(inst => (
                    <SelectItem key={inst} value={inst}>{inst}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder={isArabic ? "النوع" : "Type"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isArabic ? "جميع الأنواع" : "All Types"}</SelectItem>
                  <SelectItem value="report">{isArabic ? "تقرير" : "Report"}</SelectItem>
                  <SelectItem value="study">{isArabic ? "دراسة" : "Study"}</SelectItem>
                  <SelectItem value="paper">{isArabic ? "ورقة بحثية" : "Paper"}</SelectItem>
                  <SelectItem value="brief">{isArabic ? "موجز" : "Brief"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Publications List */}
      <div className="container pb-16">
        <div className="grid grid-cols-1 gap-6">
          {filteredPublications.map(pub => (
            <Card key={pub.id} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                        {pub.year}
                      </Badge>
                      <Badge variant="outline">
                        {isArabic 
                          ? pub.type === "report" ? "تقرير"
                            : pub.type === "study" ? "دراسة"
                            : pub.type === "paper" ? "ورقة بحثية"
                            : "موجز"
                          : pub.type}
                      </Badge>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        {pub.pages} {isArabic ? "صفحة" : "pages"}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      {isArabic ? pub.titleAr : pub.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base">
                      <Building2 className="w-4 h-4" />
                      {isArabic ? pub.institutionAr : pub.institution}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  {isArabic ? pub.descriptionAr : pub.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {(isArabic ? pub.topicAr : pub.topic).map(topic => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      {isArabic ? "تحميل" : "Download"}
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {isArabic ? "عرض على الإنترنت" : "View Online"}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <Card>
            <CardContent className="py-16 text-center">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">
                {isArabic ? "لم يتم العثور على منشورات" : "No publications found"}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
