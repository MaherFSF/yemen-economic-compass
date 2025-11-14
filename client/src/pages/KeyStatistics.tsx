import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, TrendingDown, TrendingUp, AlertTriangle, DollarSign, Users, Building2, Percent, Calendar } from "lucide-react";

interface StatisticClaim {
  id: number;
  category: string;
  metric: string;
  value: string;
  year: string;
  trend: "up" | "down" | "stable" | "critical";
  source: string;
  page: number;
  context: string;
  arabicMetric: string;
  arabicContext: string;
}

const statisticsClaims: StatisticClaim[] = [
  {
    id: 1,
    category: "GDP & Economic Output",
    metric: "GDP per capita decline",
    value: "58%",
    year: "2014-2025",
    trend: "critical",
    source: "Attached PDF",
    page: 1,
    context: "Per capita has plummeted by an alarming 58%, reflecting a profound erosion of productive capacity",
    arabicMetric: "انخفاض نصيب الفرد من الناتج المحلي الإجمالي",
    arabicContext: "انخفض نصيب الفرد بنسبة 58% مما يعكس تآكلاً عميقاً في القدرة الإنتاجية"
  },
  {
    id: 2,
    category: "Inflation",
    metric: "Inflation rate in government areas",
    value: "30%+",
    year: "2025",
    trend: "critical",
    source: "Attached PDF",
    page: 1,
    context: "Inflationary pressures, with government-controlled areas experiencing inflation rates exceeding 30%",
    arabicMetric: "معدل التضخم في المناطق الحكومية",
    arabicContext: "ضغوط تضخمية مع معدلات تضخم تتجاوز 30% في المناطق الخاضعة للحكومة"
  },
  {
    id: 3,
    category: "Currency",
    metric: "Rial depreciation in 2025",
    value: "30%",
    year: "2025",
    trend: "critical",
    source: "Attached PDF",
    page: 1,
    context: "The Yemeni rial's value critically depreciated by 30% in 2025 alone, pushing monthly inflation",
    arabicMetric: "انخفاض قيمة الريال في 2025",
    arabicContext: "انخفضت قيمة الريال اليمني بشكل حرج بنسبة 30% في عام 2025 وحده"
  },
  {
    id: 4,
    category: "Inflation",
    metric: "Monthly inflation by July 2025",
    value: "35%",
    year: "2025",
    trend: "critical",
    source: "Attached PDF",
    page: 1,
    context: "Monthly inflation reached 35% by July 2025",
    arabicMetric: "التضخم الشهري بحلول يوليو 2025",
    arabicContext: "وصل التضخم الشهري إلى 35% بحلول يوليو 2025"
  },
  {
    id: 5,
    category: "Humanitarian Aid",
    metric: "Humanitarian appeal funding secured",
    value: "19%",
    year: "2025",
    trend: "critical",
    source: "Attached PDF",
    page: 1,
    context: "Underfunding, with only 19% of the required $2.5 billion secured as of September 2025",
    arabicMetric: "تمويل النداء الإنساني المؤمن",
    arabicContext: "نقص التمويل، مع تأمين 19% فقط من 2.5 مليار دولار المطلوبة حتى سبتمبر 2025"
  },
  {
    id: 6,
    category: "GDP & Economic Output",
    metric: "Real GDP growth rate",
    value: "-1.5%",
    year: "2025",
    trend: "down",
    source: "Attached PDF",
    page: 3,
    context: "Consistently negative, declining from +2.0% in 2014 to an estimated -1.5% in 2025",
    arabicMetric: "معدل نمو الناتج المحلي الإجمالي الحقيقي",
    arabicContext: "سلبي باستمرار، انخفض من +2.0% في 2014 إلى -1.5% المقدرة في 2025"
  },
  {
    id: 7,
    category: "GDP & Economic Output",
    metric: "GDP as % of 2015 baseline",
    value: "45%",
    year: "2025",
    trend: "critical",
    source: "Attached PDF",
    page: 3,
    context: "Plummeted to just 45% of its 2015 baseline, representing a catastrophic economic collapse",
    arabicMetric: "الناتج المحلي الإجمالي كنسبة من خط الأساس 2015",
    arabicContext: "انخفض إلى 45% فقط من خط الأساس لعام 2015، مما يمثل انهياراً اقتصادياً كارثياً"
  },
  {
    id: 8,
    category: "Poverty",
    metric: "Poverty rate increase",
    value: "54% → 76%",
    year: "2014-2025",
    trend: "critical",
    source: "Attached PDF",
    page: 3,
    context: "Poverty rates have surged from 54% in 2014 to a projected 76% in 2025, affecting three-quarters of the population",
    arabicMetric: "زيادة معدل الفقر",
    arabicContext: "ارتفعت معدلات الفقر من 54% في 2014 إلى 76% المتوقعة في 2025، مما يؤثر على ثلاثة أرباع السكان"
  },
  {
    id: 9,
    category: "Currency",
    metric: "Exchange rate deterioration",
    value: "215 → 2,800",
    year: "2014-2025",
    trend: "critical",
    source: "Attached PDF",
    page: 4,
    context: "Exchange rate (YER/USD) deteriorated from 215 in 2014 to approximately 2,800 in 2025",
    arabicMetric: "تدهور سعر الصرف",
    arabicContext: "تدهور سعر الصرف (ريال/دولار) من 215 في 2014 إلى حوالي 2,800 في 2025"
  },
  {
    id: 10,
    category: "Currency",
    metric: "Exchange rate at lowest point",
    value: "2,905 YER/USD",
    year: "July 2025",
    trend: "critical",
    source: "Attached PDF",
    page: 5,
    context: "The Yemeni Rial reached a record low of 2,905 per USD in July 2025",
    arabicMetric: "سعر الصرف في أدنى نقطة",
    arabicContext: "وصل الريال اليمني إلى أدنى مستوى قياسي عند 2,905 للدولار في يوليو 2025"
  },
  {
    id: 11,
    category: "Currency",
    metric: "Exchange rate increase since 2014",
    value: "13-fold",
    year: "2014-2025",
    trend: "critical",
    source: "Attached PDF",
    page: 5,
    context: "The dramatic increase in the USD/YER exchange rate, nearly 13-fold since 2014, reflects a profound currency crisis",
    arabicMetric: "زيادة سعر الصرف منذ 2014",
    arabicContext: "الزيادة الدراماتيكية في سعر صرف الدولار/الريال، حوالي 13 ضعفاً منذ 2014، تعكس أزمة عملة عميقة"
  },
  {
    id: 12,
    category: "Currency",
    metric: "CBY-Aden rate after stabilization",
    value: "1,676 YER/USD",
    year: "2025",
    trend: "stable",
    source: "Attached PDF",
    page: 7,
    context: "Stabilization measures bringing it to YER 1,676 per USD in Aden-controlled areas",
    arabicMetric: "سعر البنك المركزي عدن بعد الاستقرار",
    arabicContext: "إجراءات الاستقرار أوصلته إلى 1,676 ريال للدولار في المناطق الخاضعة لعدن"
  },
  {
    id: 13,
    category: "Financial Inclusion",
    metric: "Bank account ownership",
    value: "6%",
    year: "2025",
    trend: "critical",
    source: "Attached PDF",
    page: 7,
    context: "Alarming levels of exclusion, with only 6% of the population having bank accounts",
    arabicMetric: "ملكية الحسابات المصرفية",
    arabicContext: "مستويات مقلقة من الاستبعاد، مع 6% فقط من السكان لديهم حسابات مصرفية"
  },
  {
    id: 14,
    category: "Informal Economy",
    metric: "Informal sector employment",
    value: "95%",
    year: "2025",
    trend: "critical",
    source: "Attached PDF",
    page: 7,
    context: "Informal sector, where an estimated 95% of economic activity occurs outside formal channels",
    arabicMetric: "العمالة في القطاع غير الرسمي",
    arabicContext: "القطاع غير الرسمي، حيث يحدث ما يقدر بـ 95% من النشاط الاقتصادي خارج القنوات الرسمية"
  },
  {
    id: 15,
    category: "Currency",
    metric: "IRG-controlled areas exchange rate",
    value: "~1,300 YER/USD",
    year: "2024",
    trend: "down",
    source: "Attached PDF",
    page: 8,
    context: "Government of Yemen (GoY)-controlled areas had depreciated sharply to around 1,300 YR per US dollar",
    arabicMetric: "سعر الصرف في المناطق الخاضعة للحكومة الشرعية",
    arabicContext: "المناطق الخاضعة لحكومة اليمن انخفضت بشكل حاد إلى حوالي 1,300 ريال للدولار"
  },
  {
    id: 16,
    category: "Currency",
    metric: "Houthi-controlled areas exchange rate",
    value: "~1,630 YER/USD",
    year: "2024",
    trend: "stable",
    source: "Attached PDF",
    page: 8,
    context: "Houthi-controlled areas maintained approximately 1,630 YR per US dollar",
    arabicMetric: "سعر الصرف في المناطق الخاضعة للحوثيين",
    arabicContext: "المناطق الخاضعة للحوثيين حافظت على حوالي 1,630 ريال للدولار"
  },
  {
    id: 17,
    category: "Currency",
    metric: "Currency appreciation in IRG areas",
    value: "40%+",
    year: "2024-2025",
    trend: "up",
    source: "Attached PDF",
    page: 8,
    context: "Appreciation of over 40% from its lowest points in IRG-controlled areas",
    arabicMetric: "ارتفاع قيمة العملة في مناطق الحكومة الشرعية",
    arabicContext: "ارتفاع بأكثر من 40% من أدنى نقاطها في المناطق الخاضعة للحكومة الشرعية"
  },
  {
    id: 18,
    category: "Digital Payments",
    metric: "Digital payment adoption increase",
    value: "10% → 70%",
    year: "2019-2024",
    trend: "up",
    source: "Attached PDF",
    page: 18,
    context: "Adoption rates skyrocketing from an estimated 10% in 2019 to 70% in 2024",
    arabicMetric: "زيادة اعتماد الدفع الرقمي",
    arabicContext: "معدلات الاعتماد ارتفعت بشكل صاروخي من 10% المقدرة في 2019 إلى 70% في 2024"
  },
  {
    id: 19,
    category: "Humanitarian Aid",
    metric: "Humanitarian appeal target",
    value: "$2.5 billion",
    year: "2025",
    trend: "stable",
    source: "Attached PDF",
    page: 28,
    context: "Required $2.5 billion humanitarian appeal for 2025",
    arabicMetric: "هدف النداء الإنساني",
    arabicContext: "نداء إنساني مطلوب بقيمة 2.5 مليار دولار لعام 2025"
  },
  {
    id: 20,
    category: "Food Security",
    metric: "Inadequate food consumption",
    value: "62%",
    year: "2025",
    trend: "critical",
    source: "Attached PDF",
    page: 28,
    context: "World Food Programme reports a staggering 62% of Yemenis now experience inadequate food consumption",
    arabicMetric: "استهلاك غذائي غير كافٍ",
    arabicContext: "برنامج الأغذية العالمي يفيد بأن 62% من اليمنيين يعانون من استهلاك غذائي غير كافٍ"
  },
  {
    id: 21,
    category: "Food Security",
    metric: "Food insecurity increase",
    value: "15%",
    year: "Recent period",
    trend: "up",
    source: "Attached PDF",
    page: 28,
    context: "Representing a 15% increase in food insecurity from the previous period",
    arabicMetric: "زيادة انعدام الأمن الغذائي",
    arabicContext: "مما يمثل زيادة بنسبة 15% في انعدام الأمن الغذائي عن الفترة السابقة"
  },
  {
    id: 22,
    category: "Humanitarian Aid",
    metric: "Local entity funding",
    value: "20%",
    year: "2025",
    trend: "down",
    source: "Attached PDF",
    page: 28,
    context: "A mere 20% of humanitarian funds are channeled through local entities",
    arabicMetric: "تمويل الكيانات المحلية",
    arabicContext: "20% فقط من الأموال الإنسانية يتم توجيهها عبر الكيانات المحلية"
  },
  {
    id: 23,
    category: "Humanitarian Aid",
    metric: "International localization target",
    value: "40%",
    year: "Standard",
    trend: "stable",
    source: "Attached PDF",
    page: 28,
    context: "Substantially below the internationally recognized target of 40% for direct local funding",
    arabicMetric: "الهدف الدولي للتوطين",
    arabicContext: "أقل بكثير من الهدف المعترف به دولياً وهو 40% للتمويل المحلي المباشر"
  },
  {
    id: 24,
    category: "Currency",
    metric: "Currency disparity between regions",
    value: "100%",
    year: "2025",
    trend: "critical",
    source: "Attached PDF",
    page: 35,
    context: "Yemeni Riyal (YER), which currently sees a 100% disparity in value between northern and southern regions",
    arabicMetric: "التفاوت في قيمة العملة بين المناطق",
    arabicContext: "الريال اليمني يشهد حالياً تفاوتاً بنسبة 100% في القيمة بين المناطق الشمالية والجنوبية"
  },
  {
    id: 25,
    category: "Revenue",
    metric: "Oil revenue share of government budget",
    value: "50%+",
    year: "Pre-war",
    trend: "down",
    source: "Attached PDF",
    page: 35,
    context: "Oil revenues constituted over 50% of government revenue before the conflict",
    arabicMetric: "حصة إيرادات النفط من ميزانية الحكومة",
    arabicContext: "شكلت إيرادات النفط أكثر من 50% من إيرادات الحكومة قبل الصراع"
  },
  {
    id: 26,
    category: "Financial Inclusion",
    metric: "Underserved populations",
    value: "70%",
    year: "2025",
    trend: "critical",
    source: "Attached PDF",
    page: 35,
    context: "Underserved populations, including the 70% without access to formal financial services",
    arabicMetric: "السكان المحرومون من الخدمات",
    arabicContext: "السكان المحرومون من الخدمات، بما في ذلك 70% بدون وصول إلى الخدمات المالية الرسمية"
  },
  {
    id: 27,
    category: "Economic Growth",
    metric: "Potential annual growth rate (peace scenario)",
    value: "5%",
    year: "Next 15 years",
    trend: "up",
    source: "Attached PDF",
    page: 35,
    context: "Potential average annual growth rate of 5% over the next 15 years, contingent on robust investment and institutional reforms",
    arabicMetric: "معدل النمو السنوي المحتمل (سيناريو السلام)",
    arabicContext: "معدل نمو سنوي محتمل بنسبة 5% على مدى السنوات الـ15 القادمة، مشروط باستثمارات قوية وإصلاحات مؤسسية"
  },
  {
    id: 28,
    category: "Digital Infrastructure",
    metric: "Internet penetration",
    value: "17.7%",
    year: "2024",
    trend: "down",
    source: "Complete.txt",
    page: 0,
    context: "Only about 17.7 percent of the population was online in 2024, one of the weakest internet infrastructures globally",
    arabicMetric: "انتشار الإنترنت",
    arabicContext: "حوالي 17.7% فقط من السكان كانوا متصلين بالإنترنت في 2024، واحدة من أضعف البنى التحتية للإنترنت عالمياً"
  },
  {
    id: 29,
    category: "Climate Finance",
    metric: "Climate adaptation finance per capita",
    value: "$0.60",
    year: "2015-2021",
    trend: "critical",
    source: "Complete.txt",
    page: 0,
    context: "Yemen has received only about US$0.60 per capita in adaptation finance between 2015 and 2021",
    arabicMetric: "تمويل التكيف المناخي للفرد",
    arabicContext: "حصل اليمن على 0.60 دولار فقط للفرد في تمويل التكيف المناخي بين 2015 و2021"
  },
  {
    id: 30,
    category: "Climate Finance",
    metric: "Climate finance in stable countries",
    value: "$100+",
    year: "2015-2021",
    trend: "stable",
    source: "Complete.txt",
    page: 0,
    context: "Far below more stable countries that receive over US$100 per capita in climate finance",
    arabicMetric: "التمويل المناخي في الدول المستقرة",
    arabicContext: "أقل بكثير من الدول الأكثر استقراراً التي تحصل على أكثر من 100 دولار للفرد في التمويل المناخي"
  },
  {
    id: 31,
    category: "SDG Progress",
    metric: "SDG targets on track globally",
    value: "17%",
    year: "2025",
    trend: "down",
    source: "Complete.txt",
    page: 0,
    context: "Globally, only 17 percent of SDG targets are on track, with significant regression on poverty, hunger, and inequality",
    arabicMetric: "أهداف التنمية المستدامة على المسار الصحيح عالمياً",
    arabicContext: "عالمياً، 17% فقط من أهداف التنمية المستدامة على المسار الصحيح، مع تراجع كبير في الفقر والجوع وعدم المساواة"
  },
  {
    id: 32,
    category: "GDP & Economic Output",
    metric: "Real GDP growth 2014",
    value: "+2.0%",
    year: "2014",
    trend: "stable",
    source: "Attached PDF",
    page: 3,
    context: "Real GDP growth was +2.0% in 2014 before the conflict began",
    arabicMetric: "نمو الناتج المحلي الإجمالي الحقيقي 2014",
    arabicContext: "كان نمو الناتج المحلي الإجمالي الحقيقي +2.0% في 2014 قبل بدء الصراع"
  },
  {
    id: 33,
    category: "GDP & Economic Output",
    metric: "GDP baseline comparison",
    value: "100%",
    year: "2015",
    trend: "stable",
    source: "Attached PDF",
    page: 4,
    context: "GDP in 2015 set as 100% baseline for comparison",
    arabicMetric: "مقارنة خط الأساس للناتج المحلي الإجمالي",
    arabicContext: "تم تحديد الناتج المحلي الإجمالي في 2015 كخط أساس بنسبة 100% للمقارنة"
  },
  {
    id: 34,
    category: "GDP & Economic Output",
    metric: "GDP decline by 2020",
    value: "62%",
    year: "2020",
    trend: "down",
    source: "Attached PDF",
    page: 4,
    context: "GDP declined to 62% of 2015 baseline by 2020",
    arabicMetric: "انخفاض الناتج المحلي الإجمالي بحلول 2020",
    arabicContext: "انخفض الناتج المحلي الإجمالي إلى 62% من خط الأساس لعام 2015 بحلول 2020"
  },
  {
    id: 35,
    category: "GDP & Economic Output",
    metric: "GDP decline by 2023",
    value: "46%",
    year: "2023",
    trend: "down",
    source: "Attached PDF",
    page: 4,
    context: "GDP further declined to 46% of 2015 baseline by 2023",
    arabicMetric: "انخفاض الناتج المحلي الإجمالي بحلول 2023",
    arabicContext: "انخفض الناتج المحلي الإجمالي أكثر إلى 46% من خط الأساس لعام 2015 بحلول 2023"
  },
  {
    id: 36,
    category: "Currency",
    metric: "Exchange rate 2015",
    value: "215 YER/USD",
    year: "2015",
    trend: "stable",
    source: "Attached PDF",
    page: 4,
    context: "Exchange rate was 215 YER/USD in 2015",
    arabicMetric: "سعر الصرف 2015",
    arabicContext: "كان سعر الصرف 215 ريال/دولار في 2015"
  },
  {
    id: 37,
    category: "Currency",
    metric: "Exchange rate 2020",
    value: "600 YER/USD",
    year: "2020",
    trend: "down",
    source: "Attached PDF",
    page: 4,
    context: "Exchange rate deteriorated to 600 YER/USD by 2020",
    arabicMetric: "سعر الصرف 2020",
    arabicContext: "تدهور سعر الصرف إلى 600 ريال/دولار بحلول 2020"
  },
  {
    id: 38,
    category: "Currency",
    metric: "Exchange rate 2023",
    value: "1,225 YER/USD",
    year: "2023",
    trend: "down",
    source: "Attached PDF",
    page: 4,
    context: "Exchange rate further deteriorated to 1,225 YER/USD by 2023",
    arabicMetric: "سعر الصرف 2023",
    arabicContext: "تدهور سعر الصرف أكثر إلى 1,225 ريال/دولار بحلول 2023"
  },
  {
    id: 39,
    category: "Poverty",
    metric: "Poverty rate 2014",
    value: "54%",
    year: "2014",
    trend: "stable",
    source: "Attached PDF",
    page: 5,
    context: "Poverty rate was approximately 54% in 2014",
    arabicMetric: "معدل الفقر 2014",
    arabicContext: "كان معدل الفقر حوالي 54% في 2014"
  },
  {
    id: 40,
    category: "Poverty",
    metric: "Poverty rate 2025",
    value: "74%",
    year: "2025",
    trend: "up",
    source: "Attached PDF",
    page: 5,
    context: "Poverty rate projected to reach approximately 74% in 2025",
    arabicMetric: "معدل الفقر 2025",
    arabicContext: "من المتوقع أن يصل معدل الفقر إلى حوالي 74% في 2025"
  },
  {
    id: 41,
    category: "Currency",
    metric: "USD/YER exchange rate 2014",
    value: "~215",
    year: "2014",
    trend: "stable",
    source: "Attached PDF",
    page: 5,
    context: "USD/YER exchange rate was approximately 215 in 2014",
    arabicMetric: "سعر صرف الدولار/الريال 2014",
    arabicContext: "كان سعر صرف الدولار/الريال حوالي 215 في 2014"
  },
  {
    id: 42,
    category: "Currency",
    metric: "USD/YER exchange rate mid-conflict",
    value: "~1,200",
    year: "Mid-conflict",
    trend: "down",
    source: "Attached PDF",
    page: 5,
    context: "USD/YER exchange rate reached approximately 1,200 during mid-conflict period",
    arabicMetric: "سعر صرف الدولار/الريال منتصف الصراع",
    arabicContext: "وصل سعر صرف الدولار/الريال إلى حوالي 1,200 خلال فترة منتصف الصراع"
  },
  {
    id: 43,
    category: "Currency",
    metric: "USD/YER exchange rate 2025",
    value: "~2,800",
    year: "2025",
    trend: "down",
    source: "Attached PDF",
    page: 5,
    context: "USD/YER exchange rate reached approximately 2,800 in 2025",
    arabicMetric: "سعر صرف الدولار/الريال 2025",
    arabicContext: "وصل سعر صرف الدولار/الريال إلى حوالي 2,800 في 2025"
  },
  {
    id: 44,
    category: "Digital Payments",
    metric: "Individual digital payment adoption 2019",
    value: "5%",
    year: "2019",
    trend: "stable",
    source: "Chart 04",
    page: 0,
    context: "Individual digital payment adoption was approximately 5% in 2019",
    arabicMetric: "اعتماد الأفراد للدفع الرقمي 2019",
    arabicContext: "كان اعتماد الأفراد للدفع الرقمي حوالي 5% في 2019"
  },
  {
    id: 45,
    category: "Digital Payments",
    metric: "Individual digital payment adoption 2024",
    value: "20%",
    year: "2024",
    trend: "up",
    source: "Chart 04",
    page: 0,
    context: "Individual digital payment adoption increased to 20% by 2024",
    arabicMetric: "اعتماد الأفراد للدفع الرقمي 2024",
    arabicContext: "زاد اعتماد الأفراد للدفع الرقمي إلى 20% بحلول 2024"
  },
  {
    id: 46,
    category: "Digital Payments",
    metric: "Business digital payment adoption 2019",
    value: "8%",
    year: "2019",
    trend: "stable",
    source: "Chart 04",
    page: 0,
    context: "Business digital payment adoption was approximately 8% in 2019",
    arabicMetric: "اعتماد الشركات للدفع الرقمي 2019",
    arabicContext: "كان اعتماد الشركات للدفع الرقمي حوالي 8% في 2019"
  },
  {
    id: 47,
    category: "Digital Payments",
    metric: "Business digital payment adoption 2024",
    value: "35%",
    year: "2024",
    trend: "up",
    source: "Chart 04",
    page: 0,
    context: "Business digital payment adoption increased to 35% by 2024",
    arabicMetric: "اعتماد الشركات للدفع الرقمي 2024",
    arabicContext: "زاد اعتماد الشركات للدفع الرقمي إلى 35% بحلول 2024"
  },
  {
    id: 48,
    category: "Digital Payments",
    metric: "Government services digital payment 2019",
    value: "2%",
    year: "2019",
    trend: "stable",
    source: "Chart 04",
    page: 0,
    context: "Government services digital payment was approximately 2% in 2019",
    arabicMetric: "الدفع الرقمي للخدمات الحكومية 2019",
    arabicContext: "كان الدفع الرقمي للخدمات الحكومية حوالي 2% في 2019"
  },
  {
    id: 49,
    category: "Digital Payments",
    metric: "Government services digital payment 2024",
    value: "15%",
    year: "2024",
    trend: "up",
    source: "Chart 04",
    page: 0,
    context: "Government services digital payment increased to 15% by 2024",
    arabicMetric: "الدفع الرقمي للخدمات الحكومية 2024",
    arabicContext: "زاد الدفع الرقمي للخدمات الحكومية إلى 15% بحلول 2024"
  },
  {
    id: 50,
    category: "Microfinance",
    metric: "Active borrowers 2010",
    value: "25,000",
    year: "2010",
    trend: "stable",
    source: "Chart 03",
    page: 0,
    context: "Microfinance active borrowers were approximately 25,000 in 2010",
    arabicMetric: "المقترضون النشطون 2010",
    arabicContext: "كان المقترضون النشطون في التمويل الأصغر حوالي 25,000 في 2010"
  },
  {
    id: 51,
    category: "Microfinance",
    metric: "Active borrowers 2024",
    value: "260,000",
    year: "2024",
    trend: "up",
    source: "Chart 03",
    page: 0,
    context: "Microfinance active borrowers increased to 260,000 by 2024",
    arabicMetric: "المقترضون النشطون 2024",
    arabicContext: "زاد المقترضون النشطون في التمويل الأصغر إلى 260,000 بحلول 2024"
  },
  {
    id: 52,
    category: "Microfinance",
    metric: "Active depositors 2010",
    value: "30,000",
    year: "2010",
    trend: "stable",
    source: "Chart 03",
    page: 0,
    context: "Microfinance active depositors were approximately 30,000 in 2010",
    arabicMetric: "المودعون النشطون 2010",
    arabicContext: "كان المودعون النشطون في التمويل الأصغر حوالي 30,000 في 2010"
  },
  {
    id: 53,
    category: "Microfinance",
    metric: "Active depositors 2024",
    value: "420,000",
    year: "2024",
    trend: "up",
    source: "Chart 03",
    page: 0,
    context: "Microfinance active depositors increased to 420,000 by 2024",
    arabicMetric: "المودعون النشطون 2024",
    arabicContext: "زاد المودعون النشطون في التمويل الأصغر إلى 420,000 بحلول 2024"
  },
  {
    id: 54,
    category: "Inflation",
    metric: "Inflation rate Aden 2014",
    value: "8%",
    year: "2014",
    trend: "stable",
    source: "Chart 01",
    page: 0,
    context: "Inflation rate in Aden was approximately 8% in 2014",
    arabicMetric: "معدل التضخم عدن 2014",
    arabicContext: "كان معدل التضخم في عدن حوالي 8% في 2014"
  },
  {
    id: 55,
    category: "Inflation",
    metric: "Inflation rate Aden 2025",
    value: "35%",
    year: "2025",
    trend: "up",
    source: "Chart 01",
    page: 0,
    context: "Inflation rate in Aden reached approximately 35% by 2025",
    arabicMetric: "معدل التضخم عدن 2025",
    arabicContext: "وصل معدل التضخم في عدن إلى حوالي 35% بحلول 2025"
  },
  {
    id: 56,
    category: "Inflation",
    metric: "Inflation rate Sana'a 2014",
    value: "8%",
    year: "2014",
    trend: "stable",
    source: "Chart 01",
    page: 0,
    context: "Inflation rate in Sana'a was approximately 8% in 2014",
    arabicMetric: "معدل التضخم صنعاء 2014",
    arabicContext: "كان معدل التضخم في صنعاء حوالي 8% في 2014"
  },
  {
    id: 57,
    category: "Inflation",
    metric: "Inflation rate Sana'a 2025",
    value: "15%",
    year: "2025",
    trend: "up",
    source: "Chart 01",
    page: 0,
    context: "Inflation rate in Sana'a reached approximately 15% by 2025",
    arabicMetric: "معدل التضخم صنعاء 2025",
    arabicContext: "وصل معدل التضخم في صنعاء إلى حوالي 15% بحلول 2025"
  },
  {
    id: 58,
    category: "Currency",
    metric: "Exchange rate Aden 2014",
    value: "215 YER/USD",
    year: "2014",
    trend: "stable",
    source: "Chart 02",
    page: 0,
    context: "Exchange rate in Aden was 215 YER/USD in 2014",
    arabicMetric: "سعر الصرف عدن 2014",
    arabicContext: "كان سعر الصرف في عدن 215 ريال/دولار في 2014"
  },
  {
    id: 59,
    category: "Currency",
    metric: "Exchange rate Sana'a 2025",
    value: "650 YER/USD",
    year: "2025",
    trend: "stable",
    source: "Chart 02",
    page: 0,
    context: "Exchange rate in Sana'a maintained approximately 650 YER/USD in 2025",
    arabicMetric: "سعر الصرف صنعاء 2025",
    arabicContext: "حافظ سعر الصرف في صنعاء على حوالي 650 ريال/دولار في 2025"
  }
];

export default function KeyStatistics() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTrend, setSelectedTrend] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(statisticsClaims.map(c => c.category)))];
  const trends = ["all", "critical", "down", "up", "stable"];
  const years = ["all", ...Array.from(new Set(statisticsClaims.map(c => c.year)))];

  const filteredClaims = statisticsClaims.filter(claim => {
    const matchesSearch = language === "en" 
      ? (claim.metric.toLowerCase().includes(searchQuery.toLowerCase()) || 
         claim.context.toLowerCase().includes(searchQuery.toLowerCase()))
      : (claim.arabicMetric.toLowerCase().includes(searchQuery.toLowerCase()) || 
         claim.arabicContext.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || claim.category === selectedCategory;
    const matchesTrend = selectedTrend === "all" || claim.trend === selectedTrend;
    const matchesYear = selectedYear === "all" || claim.year === selectedYear;
    return matchesSearch && matchesCategory && matchesTrend && matchesYear;
  });

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4" />;
      case "down": return <TrendingDown className="h-4 w-4" />;
      case "critical": return <AlertTriangle className="h-4 w-4" />;
      default: return null;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up": return "bg-green-100 text-green-800 border-green-300";
      case "down": return "bg-orange-100 text-orange-800 border-orange-300";
      case "critical": return "bg-red-100 text-red-800 border-red-300";
      case "stable": return "bg-blue-100 text-blue-800 border-blue-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes("GDP")) return <DollarSign className="h-5 w-5" />;
    if (category.includes("Currency")) return <DollarSign className="h-5 w-5" />;
    if (category.includes("Poverty")) return <Users className="h-5 w-5" />;
    if (category.includes("Inflation")) return <Percent className="h-5 w-5" />;
    if (category.includes("Digital")) return <Building2 className="h-5 w-5" />;
    return <Calendar className="h-5 w-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {language === "en" ? "Key Statistics Dashboard" : "لوحة الإحصاءات الرئيسية"}
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            {language === "en" 
              ? "59 Quantitative Claims from Comprehensive Yemen Economic Analysis" 
              : "59 ادعاءً كمياً من التحليل الاقتصادي الشامل لليمن"}
          </p>
          <Button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            variant="outline"
            className="mb-6"
          >
            {language === "en" ? "العربية" : "English"}
          </Button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">
                {language === "en" ? "Total Claims" : "إجمالي الادعاءات"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">59</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">
                {language === "en" ? "Categories" : "الفئات"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">{categories.length - 1}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">
                {language === "en" ? "Critical Indicators" : "مؤشرات حرجة"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">
                {statisticsClaims.filter(c => c.trend === "critical").length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">
                {language === "en" ? "Filtered Results" : "النتائج المصفاة"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{filteredClaims.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              {language === "en" ? "Search & Filter" : "البحث والتصفية"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {language === "en" ? "Search" : "بحث"}
                </label>
                <Input
                  placeholder={language === "en" ? "Search metrics..." : "ابحث في المقاييس..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {language === "en" ? "Category" : "الفئة"}
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === "all" ? (language === "en" ? "All Categories" : "جميع الفئات") : cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {language === "en" ? "Trend" : "الاتجاه"}
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={selectedTrend}
                  onChange={(e) => setSelectedTrend(e.target.value)}
                >
                  {trends.map(trend => (
                    <option key={trend} value={trend}>
                      {trend === "all" ? (language === "en" ? "All Trends" : "جميع الاتجاهات") : trend}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {language === "en" ? "Year" : "السنة"}
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === "all" ? (language === "en" ? "All Years" : "جميع السنوات") : year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {(searchQuery || selectedCategory !== "all" || selectedTrend !== "all" || selectedYear !== "all") && (
              <div className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedTrend("all");
                    setSelectedYear("all");
                  }}
                >
                  {language === "en" ? "Clear All Filters" : "مسح جميع الفلاتر"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClaims.map((claim) => (
            <Card key={claim.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(claim.category)}
                    <Badge variant="outline" className="text-xs">
                      {claim.category}
                    </Badge>
                  </div>
                  <Badge className={`${getTrendColor(claim.trend)} flex items-center gap-1`}>
                    {getTrendIcon(claim.trend)}
                    {claim.trend}
                  </Badge>
                </div>
                <CardTitle className="text-lg">
                  {language === "en" ? claim.metric : claim.arabicMetric}
                </CardTitle>
                <CardDescription className="text-sm text-slate-500">
                  {claim.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-3">
                  {claim.value}
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  {language === "en" ? claim.context : claim.arabicContext}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{language === "en" ? "Source:" : "المصدر:"} {claim.source}</span>
                  {claim.page > 0 && <span>{language === "en" ? "Page" : "صفحة"} {claim.page}</span>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredClaims.length === 0 && (
          <Card className="mt-8">
            <CardContent className="py-12 text-center">
              <p className="text-slate-500">
                {language === "en" 
                  ? "No statistics found matching your filters. Try adjusting your search criteria." 
                  : "لم يتم العثور على إحصاءات تطابق الفلاتر. حاول تعديل معايير البحث."}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
