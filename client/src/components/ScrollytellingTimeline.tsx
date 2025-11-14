import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingDown, TrendingUp, AlertTriangle, Users, DollarSign, Building2 } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  type: "war" | "policy" | "humanitarian" | "economic" | "international";
  impact: "critical" | "high" | "medium";
  image?: string;
}

interface YearSummary {
  year: number;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  keyActors: Array<{
    name: { en: string; ar: string };
    actions: { en: string; ar: string };
  }>;
  majorImpacts: Array<{
    category: string;
    description: { en: string; ar: string };
  }>;
  statistics: Array<{
    label: { en: string; ar: string };
    value: string;
    change: "up" | "down" | "stable";
  }>;
}

const timelineEvents: TimelineEvent[] = [
  // 2015
  {
    date: "2015-03-26",
    title: { en: "Operation Decisive Storm Begins", ar: "بداية عملية عاصفة الحزم" },
    description: { en: "Saudi-led coalition launches military intervention, marking the start of full-scale conflict", ar: "التحالف بقيادة السعودية يبدأ التدخل العسكري، مما يمثل بداية الصراع الشامل" },
    type: "war",
    impact: "critical"
  },
  {
    date: "2015-09-01",
    title: { en: "Banking System Begins to Fracture", ar: "بداية انهيار النظام المصرفي" },
    description: { en: "Commercial banks start experiencing liquidity crises and operational disruptions", ar: "البنوك التجارية تبدأ بمواجهة أزمات سيولة واضطرابات تشغيلية" },
    type: "economic",
    impact: "critical"
  },
  // 2016
  {
    date: "2016-09-18",
    title: { en: "Central Bank Split", ar: "انقسام البنك المركزي" },
    description: { en: "IRG relocates Central Bank headquarters from Sana'a to Aden, creating dual monetary authorities", ar: "الحكومة المعترف بها تنقل مقر البنك المركزي من صنعاء إلى عدن، مما يخلق سلطتين نقديتين" },
    type: "policy",
    impact: "critical"
  },
  {
    date: "2016-12-01",
    title: { en: "Currency Divergence Begins", ar: "بداية تباعد العملة" },
    description: { en: "Exchange rates start diverging between Aden and Sana'a controlled areas", ar: "أسعار الصرف تبدأ بالتباعد بين المناطق الخاضعة لعدن وصنعاء" },
    type: "economic",
    impact: "high"
  },
  // 2017
  {
    date: "2017-01-01",
    title: { en: "Humanitarian Cash Transfer Rollout", ar: "إطلاق التحويلات النقدية الإنسانية" },
    description: { en: "$2.5B in emergency cash begins flowing through money exchangers and hawala networks", ar: "2.5 مليار دولار من النقد الطارئ تبدأ بالتدفق عبر شبكات الصرافة والحوالة" },
    type: "humanitarian",
    impact: "critical"
  },
  {
    date: "2017-11-06",
    title: { en: "Saudi Blockade Imposed", ar: "فرض الحصار السعودي" },
    description: { en: "Coalition imposes air, sea, and land blockade, severely restricting imports and humanitarian access", ar: "التحالف يفرض حصاراً جوياً وبحرياً وبرياً، مما يقيد الواردات والوصول الإنساني بشدة" },
    type: "international",
    impact: "critical"
  },
  // 2018
  {
    date: "2018-06-01",
    title: { en: "Hodeidah Battle Begins", ar: "بداية معركة الحديدة" },
    description: { en: "Coalition launches offensive on Hodeidah port, threatening Yemen's primary import gateway", ar: "التحالف يشن هجوماً على ميناء الحديدة، مهدداً البوابة الرئيسية للواردات" },
    type: "war",
    impact: "critical"
  },
  {
    date: "2018-12-13",
    title: { en: "Stockholm Agreement", ar: "اتفاق ستوكهولم" },
    description: { en: "UN-brokered ceasefire agreement for Hodeidah, providing temporary respite", ar: "اتفاق وقف إطلاق النار بوساطة الأمم المتحدة للحديدة، يوفر راحة مؤقتة" },
    type: "international",
    impact: "high"
  },
  // 2019
  {
    date: "2019-08-10",
    title: { en: "Southern Transitional Council Seizes Aden", ar: "المجلس الانتقالي الجنوبي يسيطر على عدن" },
    description: { en: "STC takes control of Aden from IRG forces, adding another layer of fragmentation", ar: "المجلس الانتقالي يسيطر على عدن من قوات الحكومة، مضيفاً طبقة أخرى من التشرذم" },
    type: "war",
    impact: "high"
  },
  {
    date: "2019-12-01",
    title: { en: "Currency Crisis Deepens", ar: "تعمق أزمة العملة" },
    description: { en: "Aden riyal reaches 600 per USD while Sana'a maintains 560, divergence widens to 7%", ar: "الريال في عدن يصل إلى 600 مقابل الدولار بينما صنعاء تحافظ على 560، التباعد يتسع إلى 7%" },
    type: "economic",
    impact: "high"
  },
  // 2020
  {
    date: "2020-03-01",
    title: { en: "COVID-19 Pandemic Hits Yemen", ar: "جائحة كوفيد-19 تضرب اليمن" },
    description: { en: "Pandemic exacerbates humanitarian crisis, disrupts aid delivery, and collapses healthcare", ar: "الجائحة تفاقم الأزمة الإنسانية، تعطل إيصال المساعدات، وتنهار الرعاية الصحية" },
    type: "humanitarian",
    impact: "critical"
  },
  {
    date: "2020-06-01",
    title: { en: "Bank Disintermediation Accelerates", ar: "تسارع تجاوز البنوك" },
    description: { en: "Bank payment share drops to 12%, non-bank channels dominate at 88%", ar: "حصة المدفوعات المصرفية تنخفض إلى 12%، القنوات غير المصرفية تهيمن بنسبة 88%" },
    type: "economic",
    impact: "critical"
  },
  // 2021
  {
    date: "2021-02-01",
    title: { en: "Marib Offensive Intensifies", ar: "تصعيد هجوم مأرب" },
    description: { en: "Houthi forces launch major offensive on Marib, last northern stronghold of IRG", ar: "القوات الحوثية تشن هجوماً كبيراً على مأرب، آخر معقل شمالي للحكومة" },
    type: "war",
    impact: "high"
  },
  {
    date: "2021-10-01",
    title: { en: "Microfinance Licensing Surge", ar: "موجة ترخيص التمويل الأصغر" },
    description: { en: "13 microfinance bank licenses issued, formalizing informal financial sector", ar: "إصدار 13 ترخيص بنك تمويل أصغر، إضفاء الطابع الرسمي على القطاع المالي غير الرسمي" },
    type: "policy",
    impact: "high"
  },
  // 2022
  {
    date: "2022-04-02",
    title: { en: "UN-Brokered Truce", ar: "الهدنة بوساطة الأمم المتحدة" },
    description: { en: "Two-month nationwide ceasefire begins, providing brief period of reduced violence", ar: "بداية وقف إطلاق نار على مستوى البلاد لمدة شهرين، يوفر فترة قصيرة من تراجع العنف" },
    type: "international",
    impact: "high"
  },
  {
    date: "2022-10-02",
    title: { en: "Truce Expires", ar: "انتهاء الهدنة" },
    description: { en: "Ceasefire ends without renewal, violence resumes but at lower intensity", ar: "انتهاء وقف إطلاق النار دون تجديد، العنف يستأنف لكن بكثافة أقل" },
    type: "international",
    impact: "medium"
  },
  // 2023
  {
    date: "2023-04-01",
    title: { en: "Saudi-Houthi Talks Begin", ar: "بداية المحادثات السعودية-الحوثية" },
    description: { en: "Direct negotiations between Saudi Arabia and Houthis commence in Sana'a", ar: "بداية المفاوضات المباشرة بين السعودية والحوثيين في صنعاء" },
    type: "international",
    impact: "high"
  },
  {
    date: "2023-12-01",
    title: { en: "Digital Payment Boom", ar: "طفرة المدفوعات الرقمية" },
    description: { en: "E-money users reach 2.5M, digital payments institutionalized through parallel ledger", ar: "مستخدمو النقود الإلكترونية يصلون إلى 2.5 مليون، المدفوعات الرقمية مؤسسة عبر دفتر موازٍ" },
    type: "economic",
    impact: "high"
  },
  // 2024
  {
    date: "2024-01-12",
    title: { en: "Red Sea Attacks Begin", ar: "بداية هجمات البحر الأحمر" },
    description: { en: "Houthis launch attacks on commercial shipping in Red Sea, disrupting global trade", ar: "الحوثيون يشنون هجمات على الشحن التجاري في البحر الأحمر، معطلين التجارة العالمية" },
    type: "international",
    impact: "critical"
  },
  {
    date: "2024-07-01",
    title: { en: "Currency Collapse Accelerates", ar: "تسارع انهيار العملة" },
    description: { en: "Aden riyal hits 2,800 per USD, 13-fold increase from 2014, monthly inflation reaches 35%", ar: "الريال في عدن يصل إلى 2,800 مقابل الدولار، زيادة 13 ضعفاً من 2014، التضخم الشهري يصل إلى 35%" },
    type: "economic",
    impact: "critical"
  },
  // 2025
  {
    date: "2025-03-01",
    title: { en: "Humanitarian Funding Crisis", ar: "أزمة تمويل إنسانية" },
    description: { en: "Only 19% of required $2.5B humanitarian funding secured, signaling escalating crisis", ar: "فقط 19% من التمويل الإنساني المطلوب البالغ 2.5 مليار دولار تم تأمينه، مما يشير إلى أزمة متصاعدة" },
    type: "humanitarian",
    impact: "critical"
  },
  {
    date: "2025-06-01",
    title: { en: "Parallel Financial System Institutionalized", ar: "إضفاء الطابع المؤسسي على النظام المالي الموازي" },
    description: { en: "Non-bank channels dominate 88% of payments, formal banks relegated to SWIFT compliance", ar: "القنوات غير المصرفية تهيمن على 88% من المدفوعات، البنوك الرسمية مقتصرة على الامتثال لسويفت" },
    type: "economic",
    impact: "critical"
  }
];

const yearSummaries: YearSummary[] = [
  {
    year: 2015,
    title: { en: "System Fracture", ar: "انهيار النظام" },
    description: { en: "The conflict begins, triggering the collapse of Yemen's unified financial system", ar: "بداية الصراع، مما يؤدي إلى انهيار النظام المالي الموحد لليمن" },
    keyActors: [
      {
        name: { en: "Saudi-led Coalition", ar: "التحالف بقيادة السعودية" },
        actions: { en: "Launched Operation Decisive Storm, military intervention begins", ar: "أطلق عملية عاصفة الحزم، بداية التدخل العسكري" }
      },
      {
        name: { en: "Houthi Movement", ar: "الحركة الحوثية" },
        actions: { en: "Consolidated control over Sana'a and northern regions", ar: "عززت السيطرة على صنعاء والمناطق الشمالية" }
      },
      {
        name: { en: "Commercial Banks", ar: "البنوك التجارية" },
        actions: { en: "Began experiencing liquidity crises and operational disruptions", ar: "بدأت بمواجهة أزمات سيولة واضطرابات تشغيلية" }
      }
    ],
    majorImpacts: [
      {
        category: "Economic",
        description: { en: "Banking system begins to fracture, liquidity crises emerge", ar: "النظام المصرفي يبدأ بالانهيار، أزمات السيولة تظهر" }
      },
      {
        category: "Humanitarian",
        description: { en: "Civilian casualties mount, displacement begins", ar: "الخسائر المدنية تتزايد، النزوح يبدأ" }
      },
      {
        category: "Political",
        description: { en: "IRG loses control of capital, conflict escalates", ar: "الحكومة تفقد السيطرة على العاصمة، الصراع يتصاعد" }
      }
    ],
    statistics: [
      { label: { en: "GDP Growth", ar: "نمو الناتج المحلي" }, value: "-28%", change: "down" },
      { label: { en: "Poverty Rate", ar: "معدل الفقر" }, value: "54%", change: "up" },
      { label: { en: "Exchange Rate", ar: "سعر الصرف" }, value: "250 YER/USD", change: "stable" }
    ]
  },
  {
    year: 2016,
    title: { en: "Monetary Fragmentation", ar: "التشرذم النقدي" },
    description: { en: "Central Bank split creates dual monetary authorities and divergent currency systems", ar: "انقسام البنك المركزي يخلق سلطتين نقديتين ونظامي عملة متباعدين" },
    keyActors: [
      {
        name: { en: "IRG", ar: "الحكومة المعترف بها" },
        actions: { en: "Relocated Central Bank to Aden, established CBY-Aden", ar: "نقلت البنك المركزي إلى عدن، أسست البنك المركزي-عدن" }
      },
      {
        name: { en: "Houthi Movement", ar: "الحركة الحوثية" },
        actions: { en: "Maintained control of CBY-Sana'a, continued operations", ar: "حافظت على السيطرة على البنك المركزي-صنعاء، واصلت العمليات" }
      },
      {
        name: { en: "Money Exchangers", ar: "الصرافون" },
        actions: { en: "Began filling liquidity gaps left by banks", ar: "بدأوا بملء فجوات السيولة التي تركتها البنوك" }
      }
    ],
    majorImpacts: [
      {
        category: "Monetary",
        description: { en: "Dual central banks create divergent monetary policies", ar: "البنكان المركزيان يخلقان سياسات نقدية متباعدة" }
      },
      {
        category: "Economic",
        description: { en: "Currency begins diverging between regions", ar: "العملة تبدأ بالتباعد بين المناطق" }
      },
      {
        category: "Financial",
        description: { en: "Banking system confidence collapses", ar: "ثقة النظام المصرفي تنهار" }
      }
    ],
    statistics: [
      { label: { en: "GDP Growth", ar: "نمو الناتج المحلي" }, value: "-9.8%", change: "down" },
      { label: { en: "Exchange Rate (Aden)", ar: "سعر الصرف (عدن)" }, value: "250 YER/USD", change: "stable" },
      { label: { en: "Exchange Rate (Sana'a)", ar: "سعر الصرف (صنعاء)" }, value: "250 YER/USD", change: "stable" }
    ]
  },
  {
    year: 2017,
    title: { en: "Humanitarian Monetization", ar: "تحويل المساعدات إلى نقد" },
    description: { en: "$2.5B in emergency cash flows through money exchangers, legitimizing parallel financial sector", ar: "2.5 مليار دولار من النقد الطارئ يتدفق عبر الصرافين، مما يضفي الشرعية على القطاع المالي الموازي" },
    keyActors: [
      {
        name: { en: "Humanitarian Organizations", ar: "المنظمات الإنسانية" },
        actions: { en: "Channeled $2.5B through hawala networks for cash transfers", ar: "وجهت 2.5 مليار دولار عبر شبكات الحوالة للتحويلات النقدية" }
      },
      {
        name: { en: "Money Exchangers", ar: "الصرافون" },
        actions: { en: "Acquired public legitimacy, became primary payment channel", ar: "اكتسبوا الشرعية العامة، أصبحوا قناة الدفع الأساسية" }
      },
      {
        name: { en: "Saudi Coalition", ar: "التحالف السعودي" },
        actions: { en: "Imposed blockade, severely restricted imports", ar: "فرض الحصار، قيد الواردات بشدة" }
      }
    ],
    majorImpacts: [
      {
        category: "Financial",
        description: { en: "Parallel financial sector emerges and gains legitimacy", ar: "القطاع المالي الموازي يظهر ويكتسب الشرعية" }
      },
      {
        category: "Humanitarian",
        description: { en: "Cash transfers reach millions, but create dependency", ar: "التحويلات النقدية تصل إلى الملايين، لكن تخلق اعتماداً" }
      },
      {
        category: "Economic",
        description: { en: "Blockade exacerbates shortages, inflation accelerates", ar: "الحصار يفاقم النقص، التضخم يتسارع" }
      }
    ],
    statistics: [
      { label: { en: "Cash Transfers", ar: "التحويلات النقدية" }, value: "$2.5B", change: "up" },
      { label: { en: "Exchange Rate (Aden)", ar: "سعر الصرف (عدن)" }, value: "370 YER/USD", change: "down" },
      { label: { en: "Poverty Rate", ar: "معدل الفقر" }, value: "62%", change: "up" }
    ]
  },
  {
    year: 2018,
    title: { en: "Port Crisis", ar: "أزمة الموانئ" },
    description: { en: "Battle for Hodeidah threatens Yemen's primary import gateway, deepening humanitarian crisis", ar: "معركة الحديدة تهدد البوابة الرئيسية للواردات، مما يعمق الأزمة الإنسانية" },
    keyActors: [
      {
        name: { en: "Saudi-led Coalition", ar: "التحالف بقيادة السعودية" },
        actions: { en: "Launched offensive on Hodeidah port", ar: "شن هجوماً على ميناء الحديدة" }
      },
      {
        name: { en: "UN", ar: "الأمم المتحدة" },
        actions: { en: "Brokered Stockholm Agreement ceasefire", ar: "توسطت في اتفاق ستوكهولم لوقف إطلاق النار" }
      },
      {
        name: { en: "Houthi Movement", ar: "الحركة الحوثية" },
        actions: { en: "Defended Hodeidah, maintained port control", ar: "دافعت عن الحديدة، حافظت على السيطرة على الميناء" }
      }
    ],
    majorImpacts: [
      {
        category: "Humanitarian",
        description: { en: "Import capacity threatened, food insecurity spikes", ar: "القدرة على الاستيراد مهددة، انعدام الأمن الغذائي يرتفع" }
      },
      {
        category: "Economic",
        description: { en: "Trade disruptions worsen economic conditions", ar: "اضطرابات التجارة تزيد الأوضاع الاقتصادية سوءاً" }
      },
      {
        category: "Political",
        description: { en: "Stockholm Agreement provides brief respite", ar: "اتفاق ستوكهولم يوفر راحة قصيرة" }
      }
    ],
    statistics: [
      { label: { en: "Food Insecurity", ar: "انعدام الأمن الغذائي" }, value: "65%", change: "up" },
      { label: { en: "Exchange Rate (Aden)", ar: "سعر الصرف (عدن)" }, value: "500 YER/USD", change: "down" },
      { label: { en: "Poverty Rate", ar: "معدل الفقر" }, value: "66%", change: "up" }
    ]
  },
  {
    year: 2019,
    title: { en: "Southern Fragmentation", ar: "التشرذم الجنوبي" },
    description: { en: "STC seizes Aden, adding another layer of political and economic fragmentation", ar: "المجلس الانتقالي يسيطر على عدن، مضيفاً طبقة أخرى من التشرذم السياسي والاقتصادي" },
    keyActors: [
      {
        name: { en: "Southern Transitional Council", ar: "المجلس الانتقالي الجنوبي" },
        actions: { en: "Seized control of Aden from IRG forces", ar: "سيطر على عدن من قوات الحكومة" }
      },
      {
        name: { en: "UAE", ar: "الإمارات" },
        actions: { en: "Backed STC, complicated coalition dynamics", ar: "دعمت المجلس الانتقالي، عقدت ديناميكيات التحالف" }
      },
      {
        name: { en: "IRG", ar: "الحكومة المعترف بها" },
        actions: { en: "Lost control of temporary capital Aden", ar: "فقدت السيطرة على العاصمة المؤقتة عدن" }
      }
    ],
    majorImpacts: [
      {
        category: "Political",
        description: { en: "Three-way fragmentation: IRG, Houthis, STC", ar: "تشرذم ثلاثي: الحكومة، الحوثيون، المجلس الانتقالي" }
      },
      {
        category: "Economic",
        description: { en: "Currency divergence widens to 7%", ar: "تباعد العملة يتسع إلى 7%" }
      },
      {
        category: "Financial",
        description: { en: "CBY-Aden authority further weakened", ar: "سلطة البنك المركزي-عدن تضعف أكثر" }
      }
    ],
    statistics: [
      { label: { en: "Exchange Rate (Aden)", ar: "سعر الصرف (عدن)" }, value: "600 YER/USD", change: "down" },
      { label: { en: "Exchange Rate (Sana'a)", ar: "سعر الصرف (صنعاء)" }, value: "560 YER/USD", change: "stable" },
      { label: { en: "Currency Divergence", ar: "تباعد العملة" }, value: "7%", change: "up" }
    ]
  },
  {
    year: 2020,
    title: { en: "Clear Disintermediation", ar: "التجاوز الواضح" },
    description: { en: "Bank payment share collapses to 12%, non-bank channels dominate at 88%", ar: "حصة المدفوعات المصرفية تنهار إلى 12%، القنوات غير المصرفية تهيمن بنسبة 88%" },
    keyActors: [
      {
        name: { en: "Microfinance Institutions", ar: "مؤسسات التمويل الأصغر" },
        actions: { en: "Expanded operations, filled banking void", ar: "وسعت العمليات، ملأت الفراغ المصرفي" }
      },
      {
        name: { en: "Money Exchangers", ar: "الصرافون" },
        actions: { en: "Became dominant payment channel", ar: "أصبحوا قناة الدفع المهيمنة" }
      },
      {
        name: { en: "Commercial Banks", ar: "البنوك التجارية" },
        actions: { en: "Relegated to SWIFT compliance, lost retail business", ar: "اقتصرت على الامتثال لسويفت، فقدت الأعمال التجارية" }
      }
    ],
    majorImpacts: [
      {
        category: "Financial",
        description: { en: "Bank disintermediation complete, parallel system dominant", ar: "تجاوز البنوك مكتمل، النظام الموازي مهيمن" }
      },
      {
        category: "Economic",
        description: { en: "Bank fee income collapses -65%", ar: "دخل رسوم البنوك ينهار -65%" }
      },
      {
        category: "Humanitarian",
        description: { en: "COVID-19 exacerbates crisis, healthcare collapses", ar: "كوفيد-19 يفاقم الأزمة، الرعاية الصحية تنهار" }
      }
    ],
    statistics: [
      { label: { en: "Bank Payment Share", ar: "حصة المدفوعات المصرفية" }, value: "12%", change: "down" },
      { label: { en: "Non-Bank Channels", ar: "القنوات غير المصرفية" }, value: "88%", change: "up" },
      { label: { en: "Poverty Rate", ar: "معدل الفقر" }, value: "68%", change: "up" }
    ]
  },
  {
    year: 2021,
    title: { en: "Marib Crisis", ar: "أزمة مأرب" },
    description: { en: "Houthi offensive on Marib threatens last IRG stronghold in north", ar: "الهجوم الحوثي على مأرب يهدد آخر معقل للحكومة في الشمال" },
    keyActors: [
      {
        name: { en: "Houthi Movement", ar: "الحركة الحوثية" },
        actions: { en: "Launched major offensive on Marib", ar: "شنت هجوماً كبيراً على مأرب" }
      },
      {
        name: { en: "IRG", ar: "الحكومة المعترف بها" },
        actions: { en: "Defended Marib, issued microfinance licenses", ar: "دافعت عن مأرب، أصدرت تراخيص التمويل الأصغر" }
      },
      {
        name: { en: "Microfinance Banks", ar: "بنوك التمويل الأصغر" },
        actions: { en: "13 licenses issued, formalizing informal sector", ar: "إصدار 13 ترخيصاً، إضفاء الطابع الرسمي على القطاع غير الرسمي" }
      }
    ],
    majorImpacts: [
      {
        category: "Military",
        description: { en: "Marib remains contested, massive displacement", ar: "مأرب تبقى متنازعاً عليها، نزوح ضخم" }
      },
      {
        category: "Financial",
        description: { en: "Microfinance licensing surge formalizes parallel sector", ar: "موجة ترخيص التمويل الأصغر تضفي الطابع الرسمي على القطاع الموازي" }
      },
      {
        category: "Economic",
        description: { en: "Oil exports remain disrupted", ar: "صادرات النفط تبقى معطلة" }
      }
    ],
    statistics: [
      { label: { en: "Microfinance Licenses", ar: "تراخيص التمويل الأصغر" }, value: "13", change: "up" },
      { label: { en: "IDPs", ar: "النازحون" }, value: "4.3M", change: "up" },
      { label: { en: "Exchange Rate (Aden)", ar: "سعر الصرف (عدن)" }, value: "1,000 YER/USD", change: "down" }
    ]
  },
  {
    year: 2022,
    title: { en: "Fragile Truce", ar: "الهدنة الهشة" },
    description: { en: "UN-brokered truce provides brief respite but expires without renewal", ar: "الهدنة بوساطة الأمم المتحدة توفر راحة قصيرة لكنها تنتهي دون تجديد" },
    keyActors: [
      {
        name: { en: "UN", ar: "الأمم المتحدة" },
        actions: { en: "Brokered two-month nationwide ceasefire", ar: "توسطت في وقف إطلاق نار على مستوى البلاد لمدة شهرين" }
      },
      {
        name: { en: "All Parties", ar: "جميع الأطراف" },
        actions: { en: "Observed truce but failed to renew", ar: "التزمت بالهدنة لكن فشلت في التجديد" }
      },
      {
        name: { en: "Digital Payment Providers", ar: "مزودو الدفع الرقمي" },
        actions: { en: "Expanded e-money services", ar: "وسعوا خدمات النقود الإلكترونية" }
      }
    ],
    majorImpacts: [
      {
        category: "Security",
        description: { en: "Violence reduced but not eliminated", ar: "العنف انخفض لكن لم يتوقف" }
      },
      {
        category: "Economic",
        description: { en: "Brief economic respite, limited recovery", ar: "راحة اقتصادية قصيرة، تعافٍ محدود" }
      },
      {
        category: "Financial",
        description: { en: "Digital payments continue expanding", ar: "المدفوعات الرقمية تواصل التوسع" }
      }
    ],
    statistics: [
      { label: { en: "Truce Duration", ar: "مدة الهدنة" }, value: "6 months", change: "stable" },
      { label: { en: "E-Money Users", ar: "مستخدمو النقود الإلكترونية" }, value: "1.8M", change: "up" },
      { label: { en: "Poverty Rate", ar: "معدل الفقر" }, value: "72%", change: "up" }
    ]
  },
  {
    year: 2023,
    title: { en: "Saudi-Houthi Rapprochement", ar: "التقارب السعودي-الحوثي" },
    description: { en: "Direct negotiations begin, digital payment boom accelerates", ar: "المفاوضات المباشرة تبدأ، طفرة المدفوعات الرقمية تتسارع" },
    keyActors: [
      {
        name: { en: "Saudi Arabia", ar: "السعودية" },
        actions: { en: "Initiated direct talks with Houthis in Sana'a", ar: "بدأت محادثات مباشرة مع الحوثيين في صنعاء" }
      },
      {
        name: { en: "Houthi Movement", ar: "الحركة الحوثية" },
        actions: { en: "Engaged in negotiations, maintained territorial control", ar: "انخرطت في المفاوضات، حافظت على السيطرة الإقليمية" }
      },
      {
        name: { en: "Digital Payment Providers", ar: "مزودو الدفع الرقمي" },
        actions: { en: "E-money users reached 2.5M", ar: "مستخدمو النقود الإلكترونية وصلوا إلى 2.5 مليون" }
      }
    ],
    majorImpacts: [
      {
        category: "Political",
        description: { en: "Saudi-Houthi talks bypass IRG, shift power dynamics", ar: "المحادثات السعودية-الحوثية تتجاوز الحكومة، تغير ديناميكيات القوة" }
      },
      {
        category: "Financial",
        description: { en: "Digital payments institutionalized, parallel ledger established", ar: "المدفوعات الرقمية مؤسسة، دفتر موازٍ مؤسس" }
      },
      {
        category: "Economic",
        description: { en: "Exchange rate divergence remains stable", ar: "تباعد سعر الصرف يبقى مستقراً" }
      }
    ],
    statistics: [
      { label: { en: "E-Money Users", ar: "مستخدمو النقود الإلكترونية" }, value: "2.5M", change: "up" },
      { label: { en: "Exchange Rate (Aden)", ar: "سعر الصرف (عدن)" }, value: "1,225 YER/USD", change: "down" },
      { label: { en: "Poverty Rate", ar: "معدل الفقر" }, value: "74%", change: "up" }
    ]
  },
  {
    year: 2024,
    title: { en: "Red Sea Crisis", ar: "أزمة البحر الأحمر" },
    description: { en: "Houthi attacks on shipping disrupt global trade, currency collapses", ar: "هجمات الحوثيين على الشحن تعطل التجارة العالمية، العملة تنهار" },
    keyActors: [
      {
        name: { en: "Houthi Movement", ar: "الحركة الحوثية" },
        actions: { en: "Launched attacks on Red Sea shipping", ar: "شنت هجمات على الشحن في البحر الأحمر" }
      },
      {
        name: { en: "International Community", ar: "المجتمع الدولي" },
        actions: { en: "Responded with naval operations", ar: "رد بعمليات بحرية" }
      },
      {
        name: { en: "CBY-Aden", ar: "البنك المركزي-عدن" },
        actions: { en: "Unable to stabilize currency", ar: "غير قادر على استقرار العملة" }
      }
    ],
    majorImpacts: [
      {
        category: "International",
        description: { en: "Yemen becomes global security concern", ar: "اليمن يصبح قلقاً أمنياً عالمياً" }
      },
      {
        category: "Economic",
        description: { en: "Currency collapse accelerates, inflation spikes to 35%", ar: "انهيار العملة يتسارع، التضخم يرتفع إلى 35%" }
      },
      {
        category: "Humanitarian",
        description: { en: "Living conditions deteriorate further", ar: "ظروف المعيشة تتدهور أكثر" }
      }
    ],
    statistics: [
      { label: { en: "Exchange Rate (Aden)", ar: "سعر الصرف (عدن)" }, value: "2,800 YER/USD", change: "down" },
      { label: { en: "Monthly Inflation", ar: "التضخم الشهري" }, value: "35%", change: "up" },
      { label: { en: "Currency Depreciation", ar: "انخفاض قيمة العملة" }, value: "30% (2025 alone)", change: "down" }
    ]
  },
  {
    year: 2025,
    title: { en: "Formalization of the Informal", ar: "إضفاء الطابع الرسمي على غير الرسمي" },
    description: { en: "Parallel financial system fully institutionalized, humanitarian crisis deepens", ar: "النظام المالي الموازي مؤسس بالكامل، الأزمة الإنسانية تتعمق" },
    keyActors: [
      {
        name: { en: "Microfinance Banks", ar: "بنوك التمويل الأصغر" },
        actions: { en: "Dominate retail finance, 88% of payments", ar: "تهيمن على التمويل التجزئة، 88% من المدفوعات" }
      },
      {
        name: { en: "Money Exchangers", ar: "الصرافون" },
        actions: { en: "Fully legitimized, primary liquidity providers", ar: "مشروعة بالكامل، مزودو السيولة الأساسيون" }
      },
      {
        name: { en: "Commercial Banks", ar: "البنوك التجارية" },
        actions: { en: "Relegated to SWIFT compliance only", ar: "مقتصرة على الامتثال لسويفت فقط" }
      }
    ],
    majorImpacts: [
      {
        category: "Financial",
        description: { en: "Parallel system institutionalized, formal banks marginalized", ar: "النظام الموازي مؤسس، البنوك الرسمية مهمشة" }
      },
      {
        category: "Humanitarian",
        description: { en: "Only 19% of $2.5B funding secured, crisis escalates", ar: "فقط 19% من 2.5 مليار دولار تمويل تم تأمينه، الأزمة تتصاعد" }
      },
      {
        category: "Economic",
        description: { en: "Real income per capita at 45% of 2015 level", ar: "الدخل الحقيقي للفرد عند 45% من مستوى 2015" }
      }
    ],
    statistics: [
      { label: { en: "Non-Bank Payment Share", ar: "حصة المدفوعات غير المصرفية" }, value: "88%", change: "up" },
      { label: { en: "Poverty Rate", ar: "معدل الفقر" }, value: "76%", change: "up" },
      { label: { en: "Humanitarian Funding", ar: "التمويل الإنساني" }, value: "19% of $2.5B", change: "down" }
    ]
  }
];

const eventTypeColors = {
  war: "bg-red-500/20 text-red-700 border-red-500",
  policy: "bg-blue-500/20 text-blue-700 border-blue-500",
  humanitarian: "bg-orange-500/20 text-orange-700 border-orange-500",
  economic: "bg-purple-500/20 text-purple-700 border-purple-500",
  international: "bg-green-500/20 text-green-700 border-green-500"
};

const eventTypeIcons = {
  war: AlertTriangle,
  policy: Building2,
  humanitarian: Users,
  economic: TrendingDown,
  international: DollarSign
};

export default function ScrollytellingTimeline() {
  const { language } = useLanguage();
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineHeight = rect.height;
      
      // Calculate progress (0 to 100)
      const scrollProgress = Math.max(0, Math.min(100, 
        ((windowHeight - rect.top) / (timelineHeight + windowHeight)) * 100
      ));
      
      setProgress(scrollProgress);
      
      // Determine active year based on scroll position
      const yearIndex = Math.floor((scrollProgress / 100) * yearSummaries.length);
      const year = yearSummaries[yearIndex]?.year || null;
      setActiveYear(year);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={timelineRef} className="relative min-h-[500vh] py-20">
      {/* Progress Indicator */}
      <div className="fixed top-20 right-8 z-50">
        <div className="flex flex-col items-center gap-2">
          <div className="text-sm font-semibold text-muted-foreground">
            {language === "ar" ? "التقدم" : "Progress"}
          </div>
          <div className="relative w-2 h-40 bg-muted rounded-full overflow-hidden">
            <div 
              className="absolute bottom-0 w-full bg-primary transition-all duration-300"
              style={{ height: `${progress}%` }}
            />
          </div>
          <div className="text-xs font-medium text-muted-foreground">
            {Math.round(progress)}%
          </div>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {language === "ar" ? "رحلة عشر سنوات" : "A Decade's Journey"}
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === "ar" 
              ? "2015-2025: كيف أعادت الحرب تشكيل النظام المالي اليمني"
              : "2015-2025: How War Rewired Yemen's Financial System"}
          </p>
        </div>

        {/* Events Timeline */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => {
            const Icon = eventTypeIcons[event.type];
            const year = parseInt(event.date.split("-")[0]);
            const isActiveYear = year === activeYear;
            
            return (
              <div 
                key={index}
                className={`relative transition-all duration-500 ${
                  isActiveYear ? "scale-105 opacity-100" : "scale-100 opacity-70"
                }`}
              >
                <Card className={`p-6 border-l-4 ${eventTypeColors[event.type]}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${eventTypeColors[event.type]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className={eventTypeColors[event.type]}>
                          {event.date}
                        </Badge>
                        <Badge variant="outline">
                          {language === "ar" 
                            ? event.type === "war" ? "حرب" 
                              : event.type === "policy" ? "سياسة"
                              : event.type === "humanitarian" ? "إنساني"
                              : event.type === "economic" ? "اقتصادي"
                              : "دولي"
                            : event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {language === "ar" ? event.title.ar : event.title.en}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === "ar" ? event.description.ar : event.description.en}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Year Summaries */}
        {yearSummaries.map((summary, index) => (
          <div key={summary.year} className="my-32">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-primary mb-4">{summary.year}</div>
                <h3 className="text-3xl font-bold mb-2">
                  {language === "ar" ? summary.title.ar : summary.title.en}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {language === "ar" ? summary.description.ar : summary.description.en}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Key Actors */}
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    {language === "ar" ? "الفاعلون الرئيسيون" : "Key Actors"}
                  </h4>
                  <div className="space-y-3">
                    {summary.keyActors.map((actor, i) => (
                      <div key={i} className="p-3 bg-background rounded-lg">
                        <div className="font-semibold mb-1">
                          {language === "ar" ? actor.name.ar : actor.name.en}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {language === "ar" ? actor.actions.ar : actor.actions.en}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Major Impacts */}
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    {language === "ar" ? "التأثيرات الرئيسية" : "Major Impacts"}
                  </h4>
                  <div className="space-y-3">
                    {summary.majorImpacts.map((impact, i) => (
                      <div key={i} className="p-3 bg-background rounded-lg">
                        <div className="font-semibold mb-1">{impact.category}</div>
                        <div className="text-sm text-muted-foreground">
                          {language === "ar" ? impact.description.ar : impact.description.en}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5" />
                  {language === "ar" ? "الإحصائيات الرئيسية" : "Key Statistics"}
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {summary.statistics.map((stat, i) => (
                    <div key={i} className="p-4 bg-background rounded-lg text-center">
                      <div className="text-sm text-muted-foreground mb-1">
                        {language === "ar" ? stat.label.ar : stat.label.en}
                      </div>
                      <div className="text-2xl font-bold flex items-center justify-center gap-2">
                        {stat.value}
                        {stat.change === "up" && <TrendingUp className="w-4 h-4 text-red-500" />}
                        {stat.change === "down" && <TrendingDown className="w-4 h-4 text-red-500" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ))}

        {/* Final Message */}
        <div className="text-center py-20">
          <h3 className="text-3xl font-bold mb-4">
            {language === "ar" ? "نهاية رحلة، بداية أخرى" : "End of One Journey, Start of Another"}
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            {language === "ar" 
              ? "عشر سنوات أعادت تشكيل كيفية حركة المال في اليمن. ماذا سيحمل العقد القادم؟"
              : "Ten years that rewired how money moves in Yemen. What will the next decade bring?"}
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            {language === "ar" ? "استكشف المزيد" : "Explore More"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
