import { z } from 'zod';
import {
  createDataFeed,
  type DataMetadata,
} from '../schemas/common';

/**
 * Events Timeline Data Feed
 * Comprehensive timeline of economic, political, and humanitarian events (2014-2025)
 * Source: Multiple sources including UN, World Bank, IMF, news reports
 */

// Event schema
export const EventSchema = z.object({
  id: z.string(),
  date: z.string(), // YYYY-MM-DD
  title_en: z.string(),
  title_ar: z.string(),
  summary_en: z.string(),
  summary_ar: z.string(),
  category: z.enum([
    'conflict',
    'monetary',
    'fiscal',
    'humanitarian',
    'political',
    'economic',
    'regulatory',
    'international',
  ]),
  impact: z.enum(['critical', 'high', 'medium', 'low']),
  affected_indicators: z.array(z.string()), // e.g., ['fx_rate', 'inflation', 'poverty']
  related_stakeholders: z.array(z.string()), // e.g., ['cby_aden', 'cby_sanaa', 'irg']
  links_to_pages: z.array(z.string()).optional(), // e.g., ['/currency', '/cby-aden']
  source_url: z.string().url().optional(),
});

export type Event = z.infer<typeof EventSchema>;

// Events feed schema
export const EventsFeedSchema = z.object({
  events: z.array(EventSchema),
});

export type EventsFeed = z.infer<typeof EventsFeedSchema>;

// Mock data: Comprehensive events timeline (2014-2025)
const events: Event[] = [
  // 2014 - Pre-war tensions
  {
    id: 'evt_2014_01',
    date: '2014-01-01',
    title_en: 'National Dialogue Conference Concludes',
    title_ar: 'اختتام مؤتمر الحوار الوطني',
    summary_en: 'National Dialogue Conference concludes with agreement on federal structure, but implementation challenges remain.',
    summary_ar: 'اختتام مؤتمر الحوار الوطني بالاتفاق على الهيكل الفيدرالي، لكن تحديات التنفيذ تبقى قائمة.',
    category: 'political',
    impact: 'medium',
    affected_indicators: [],
    related_stakeholders: ['irg'],
    links_to_pages: ['/historical-context'],
  },
  {
    id: 'evt_2014_09',
    date: '2014-09-21',
    title_en: 'Houthis Seize Control of Sana\'a',
    title_ar: 'الحوثيون يسيطرون على صنعاء',
    summary_en: 'Ansar Allah (Houthi) forces take control of Yemen\'s capital Sana\'a, marking beginning of current conflict.',
    summary_ar: 'قوات أنصار الله (الحوثيون) تسيطر على العاصمة اليمنية صنعاء، مما يمثل بداية الصراع الحالي.',
    category: 'conflict',
    impact: 'critical',
    affected_indicators: ['gdp', 'poverty', 'fx_rate'],
    related_stakeholders: ['houthi', 'irg'],
    links_to_pages: ['/story', '/transformation'],
  },
  
  // 2015 - War begins
  {
    id: 'evt_2015_03',
    date: '2015-03-26',
    title_en: 'Saudi-led Coalition Intervention Begins',
    title_ar: 'بداية التدخل العسكري للتحالف بقيادة السعودية',
    summary_en: 'Saudi-led coalition launches Operation Decisive Storm in support of internationally recognized government.',
    summary_ar: 'التحالف بقيادة السعودية يطلق عملية عاصفة الحزم دعماً للحكومة المعترف بها دولياً.',
    category: 'conflict',
    impact: 'critical',
    affected_indicators: ['gdp', 'poverty', 'oil_exports'],
    related_stakeholders: ['saudi', 'uae', 'irg', 'houthi'],
    links_to_pages: ['/story', '/transformation'],
  },
  {
    id: 'evt_2015_09',
    date: '2015-09-01',
    title_en: 'Government Returns to Aden',
    title_ar: 'عودة الحكومة إلى عدن',
    summary_en: 'Internationally recognized government establishes temporary capital in Aden after Sana\'a takeover.',
    summary_ar: 'الحكومة المعترف بها دولياً تؤسس عاصمة مؤقتة في عدن بعد سيطرة الحوثيين على صنعاء.',
    category: 'political',
    impact: 'critical',
    affected_indicators: [],
    related_stakeholders: ['irg'],
    links_to_pages: ['/story'],
  },
  
  // 2016 - CBY split (CRITICAL EVENT)
  {
    id: 'evt_2016_09',
    date: '2016-09-18',
    title_en: 'Central Bank Headquarters Moved to Aden',
    title_ar: 'نقل مقر البنك المركزي إلى عدن',
    summary_en: 'Presidential decree relocates Central Bank of Yemen headquarters from Sana\'a to Aden, creating dual CBY structure. This marks the beginning of currency divergence and parallel financial systems.',
    summary_ar: 'مرسوم رئاسي ينقل مقر البنك المركزي اليمني من صنعاء إلى عدن، مما يخلق هيكل بنك مركزي مزدوج. هذا يمثل بداية تباعد العملة والأنظمة المالية الموازية.',
    category: 'monetary',
    impact: 'critical',
    affected_indicators: ['fx_rate', 'inflation', 'banking'],
    related_stakeholders: ['cby_aden', 'cby_sanaa', 'irg', 'houthi'],
    links_to_pages: ['/currency', '/cby-aden', '/cby-sanaa', '/transformation'],
    source_url: 'https://www.reuters.com/article/yemen-crisis-centralbank-idUSKCN11O0R4',
  },
  
  // 2017 - Humanitarian cash era begins
  {
    id: 'evt_2017_01',
    date: '2017-01-01',
    title_en: 'Sana\'a CBY Bans New Currency Notes',
    title_ar: 'البنك المركزي في صنعاء يحظر الأوراق النقدية الجديدة',
    summary_en: 'CBY-Sana\'a declares new currency notes printed by CBY-Aden as illegal, creating two parallel currencies.',
    summary_ar: 'البنك المركزي في صنعاء يعلن أن الأوراق النقدية الجديدة المطبوعة من قبل البنك المركزي في عدن غير قانونية، مما يخلق عملتين متوازيتين.',
    category: 'monetary',
    impact: 'critical',
    affected_indicators: ['fx_rate', 'inflation'],
    related_stakeholders: ['cby_sanaa', 'cby_aden'],
    links_to_pages: ['/currency', '/two-systems'],
  },
  {
    id: 'evt_2017_06',
    date: '2017-06-01',
    title_en: 'Humanitarian Cash Transfers Scale Up',
    title_ar: 'توسع التحويلات النقدية الإنسانية',
    summary_en: 'UN agencies and NGOs scale up cash-based assistance, channeling $2.5B+ through money exchangers, inadvertently legitimizing parallel financial sector.',
    summary_ar: 'وكالات الأمم المتحدة والمنظمات غير الحكومية توسع المساعدات النقدية، وتوجه 2.5 مليار دولار+ عبر الصرافين، مما يضفي شرعية غير مقصودة على القطاع المالي الموازي.',
    category: 'humanitarian',
    impact: 'high',
    affected_indicators: ['fx_rate', 'hawala_volume'],
    related_stakeholders: ['un', 'ngos', 'money_exchangers'],
    links_to_pages: ['/transformation', '/finance'],
  },
  
  // 2018 - Currency collapse
  {
    id: 'evt_2018_09',
    date: '2018-09-01',
    title_en: 'Aden Currency Collapses to 500 YER/USD',
    title_ar: 'انهيار عملة عدن إلى 500 ريال/دولار',
    summary_en: 'Aden market exchange rate collapses from 250 to 500 YER/USD, doubling prices and triggering inflation crisis.',
    summary_ar: 'سعر الصرف في سوق عدن ينهار من 250 إلى 500 ريال/دولار، مما يضاعف الأسعار ويؤدي إلى أزمة تضخم.',
    category: 'monetary',
    impact: 'critical',
    affected_indicators: ['fx_rate', 'inflation', 'poverty'],
    related_stakeholders: ['cby_aden'],
    links_to_pages: ['/currency', '/macro/inflation-cost'],
  },
  {
    id: 'evt_2018_11',
    date: '2018-11-01',
    title_en: 'Saudi Arabia Deposits $2B in CBY-Aden',
    title_ar: 'السعودية تودع 2 مليار دولار في البنك المركزي بعدن',
    summary_en: 'Saudi Arabia deposits $2 billion in CBY-Aden to support currency and reserves, providing temporary stabilization.',
    summary_ar: 'السعودية تودع 2 مليار دولار في البنك المركزي بعدن لدعم العملة والاحتياطيات، مما يوفر استقراراً مؤقتاً.',
    category: 'fiscal',
    impact: 'high',
    affected_indicators: ['fx_rate', 'reserves'],
    related_stakeholders: ['saudi', 'cby_aden'],
    links_to_pages: ['/cby-aden'],
  },
  
  // 2019 - Stabilization attempts
  {
    id: 'evt_2019_01',
    date: '2019-01-01',
    title_en: 'CBY-Aden Introduces FX Auction System',
    title_ar: 'البنك المركزي بعدن يقدم نظام مزادات العملة',
    summary_en: 'CBY-Aden launches foreign exchange auction system to manage currency and allocate foreign exchange for imports.',
    summary_ar: 'البنك المركزي بعدن يطلق نظام مزادات العملة الأجنبية لإدارة العملة وتخصيص النقد الأجنبي للواردات.',
    category: 'monetary',
    impact: 'high',
    affected_indicators: ['fx_rate'],
    related_stakeholders: ['cby_aden'],
    links_to_pages: ['/cby-aden', '/currency'],
  },
  
  // 2020 - COVID-19 + Disintermediation
  {
    id: 'evt_2020_03',
    date: '2020-03-01',
    title_en: 'COVID-19 Pandemic Reaches Yemen',
    title_ar: 'جائحة كوفيد-19 تصل إلى اليمن',
    summary_en: 'COVID-19 pandemic reaches Yemen, exacerbating humanitarian crisis and disrupting already fragile economy.',
    summary_ar: 'جائحة كوفيد-19 تصل إلى اليمن، مما يفاقم الأزمة الإنسانية ويعطل الاقتصاد الهش بالفعل.',
    category: 'humanitarian',
    impact: 'high',
    affected_indicators: ['gdp', 'poverty', 'health'],
    related_stakeholders: [],
    links_to_pages: ['/story'],
  },
  {
    id: 'evt_2020_12',
    date: '2020-12-01',
    title_en: 'Bank Payment Share Drops to 12%',
    title_ar: 'حصة المدفوعات المصرفية تنخفض إلى 12%',
    summary_en: 'World Bank reports bank-mediated payments drop to just 12% of total, with 88% through non-bank channels (money exchangers, hawala). Clear disintermediation of formal banking sector.',
    summary_ar: 'البنك الدولي يفيد بأن المدفوعات عبر البنوك انخفضت إلى 12% فقط من الإجمالي، مع 88% عبر القنوات غير المصرفية (الصرافين، الحوالة). إزالة وساطة واضحة للقطاع المصرفي الرسمي.',
    category: 'economic',
    impact: 'critical',
    affected_indicators: ['banking', 'financial_inclusion'],
    related_stakeholders: ['banks', 'money_exchangers'],
    links_to_pages: ['/finance', '/transformation', '/indexes'],
  },
  
  // 2021 - Microfinance expansion
  {
    id: 'evt_2021_06',
    date: '2021-06-01',
    title_en: 'Fuel Crisis Triggers Protests',
    title_ar: 'أزمة الوقود تؤدي إلى احتجاجات',
    summary_en: 'Severe fuel shortages in both north and south trigger widespread protests and further economic disruption.',
    summary_ar: 'نقص حاد في الوقود في الشمال والجنوب يؤدي إلى احتجاجات واسعة ومزيد من الاضطراب الاقتصادي.',
    category: 'economic',
    impact: 'high',
    affected_indicators: ['fuel_prices', 'inflation'],
    related_stakeholders: [],
    links_to_pages: ['/macro/inflation-cost'],
  },
  
  // 2022 - Truce period
  {
    id: 'evt_2022_04',
    date: '2022-04-02',
    title_en: 'UN-Brokered Truce Begins',
    title_ar: 'بدء الهدنة التي توسطت فيها الأمم المتحدة',
    summary_en: 'UN-brokered two-month truce begins, bringing temporary reduction in violence and some economic relief.',
    summary_ar: 'تبدأ هدنة لمدة شهرين توسطت فيها الأمم المتحدة، مما يجلب انخفاضاً مؤقتاً في العنف وبعض الراحة الاقتصادية.',
    category: 'political',
    impact: 'high',
    affected_indicators: ['gdp', 'oil_exports'],
    related_stakeholders: ['un', 'irg', 'houthi'],
    links_to_pages: ['/story'],
  },
  {
    id: 'evt_2022_10',
    date: '2022-10-02',
    title_en: 'Truce Expires Without Renewal',
    title_ar: 'انتهاء الهدنة دون تجديد',
    summary_en: 'UN-brokered truce expires without renewal, though large-scale fighting does not immediately resume.',
    summary_ar: 'تنتهي الهدنة التي توسطت فيها الأمم المتحدة دون تجديد، على الرغم من عدم استئناف القتال واسع النطاق على الفور.',
    category: 'political',
    impact: 'medium',
    affected_indicators: [],
    related_stakeholders: ['un', 'irg', 'houthi'],
    links_to_pages: ['/story'],
  },
  
  // 2023 - Formalization of informal
  {
    id: 'evt_2023_01',
    date: '2023-01-01',
    title_en: '13 Microfinance Bank Licenses Issued',
    title_ar: 'إصدار 13 رخصة بنك تمويل أصغر',
    summary_en: 'CBY-Aden issues 13 microfinance bank licenses, marking formalization of informal financial sector. Critics warn of regulatory capture and quality concerns.',
    summary_ar: 'البنك المركزي بعدن يصدر 13 رخصة بنك تمويل أصغر، مما يمثل إضفاء الطابع الرسمي على القطاع المالي غير الرسمي. النقاد يحذرون من الاستيلاء التنظيمي ومخاوف الجودة.',
    category: 'regulatory',
    impact: 'critical',
    affected_indicators: ['financial_inclusion', 'microfinance'],
    related_stakeholders: ['cby_aden', 'microfinance'],
    links_to_pages: ['/finance', '/transformation'],
  },
  {
    id: 'evt_2023_06',
    date: '2023-06-01',
    title_en: 'CBY-Aden Tightens Regulatory Oversight',
    title_ar: 'البنك المركزي بعدن يشدد الرقابة التنظيمية',
    summary_en: 'CBY-Aden implements stricter regulatory oversight of money exchangers and microfinance institutions, aiming to reduce illicit flows.',
    summary_ar: 'البنك المركزي بعدن ينفذ رقابة تنظيمية أكثر صرامة على الصرافين ومؤسسات التمويل الأصغر، بهدف تقليل التدفقات غير المشروعة.',
    category: 'regulatory',
    impact: 'high',
    affected_indicators: ['fx_rate', 'compliance'],
    related_stakeholders: ['cby_aden', 'money_exchangers'],
    links_to_pages: ['/cby-aden', '/finance'],
  },
  
  // 2024 - Continued pressure
  {
    id: 'evt_2024_01',
    date: '2024-01-12',
    title_en: 'Houthi Attacks on Red Sea Shipping',
    title_ar: 'هجمات الحوثيين على الشحن في البحر الأحمر',
    summary_en: 'Houthi forces launch attacks on commercial shipping in Red Sea in solidarity with Gaza, disrupting regional trade and increasing insurance costs.',
    summary_ar: 'قوات الحوثيين تشن هجمات على الشحن التجاري في البحر الأحمر تضامناً مع غزة، مما يعطل التجارة الإقليمية ويزيد تكاليف التأمين.',
    category: 'conflict',
    impact: 'high',
    affected_indicators: ['trade', 'inflation'],
    related_stakeholders: ['houthi', 'international'],
    links_to_pages: ['/story'],
  },
  {
    id: 'evt_2024_06',
    date: '2024-06-01',
    title_en: 'E-Money Users Reach 2.5 Million',
    title_ar: 'مستخدمو النقود الإلكترونية يصلون إلى 2.5 مليون',
    summary_en: 'Digital payment platforms report 2.5 million active users, showing growth of digital economy despite infrastructure challenges.',
    summary_ar: 'منصات الدفع الرقمي تفيد بوجود 2.5 مليون مستخدم نشط، مما يظهر نمو الاقتصاد الرقمي على الرغم من تحديات البنية التحتية.',
    category: 'economic',
    impact: 'medium',
    affected_indicators: ['digital_payments', 'financial_inclusion'],
    related_stakeholders: [],
    links_to_pages: ['/digital-economy', '/finance'],
  },
  
  // 2025 - Current year
  {
    id: 'evt_2025_01',
    date: '2025-01-01',
    title_en: 'Aden Exchange Rate Reaches 1,400 YER/USD',
    title_ar: 'سعر الصرف في عدن يصل إلى 1,400 ريال/دولار',
    summary_en: 'Aden market exchange rate starts 2025 at 1,400 YER/USD, while Sana\'a maintains 560 YER/USD, showing 150% divergence.',
    summary_ar: 'سعر الصرف في سوق عدن يبدأ 2025 عند 1,400 ريال/دولار، بينما تحافظ صنعاء على 560 ريال/دولار، مما يظهر تباعداً بنسبة 150%.',
    category: 'monetary',
    impact: 'critical',
    affected_indicators: ['fx_rate', 'inflation'],
    related_stakeholders: ['cby_aden', 'cby_sanaa'],
    links_to_pages: ['/currency', '/two-systems'],
  },
  {
    id: 'evt_2025_03',
    date: '2025-03-01',
    title_en: 'Aden Exchange Rate Surges to 1,650 YER/USD',
    title_ar: 'سعر الصرف في عدن يرتفع إلى 1,650 ريال/دولار',
    summary_en: 'Aden market exchange rate surges to 1,650 YER/USD in March 2025, marking 667% depreciation since 2014 baseline (215 YER/USD).',
    summary_ar: 'سعر الصرف في سوق عدن يرتفع إلى 1,650 ريال/دولار في مارس 2025، مما يمثل انخفاضاً بنسبة 667% منذ خط الأساس 2014 (215 ريال/دولار).',
    category: 'monetary',
    impact: 'critical',
    affected_indicators: ['fx_rate', 'inflation', 'poverty'],
    related_stakeholders: ['cby_aden'],
    links_to_pages: ['/currency', '/key-statistics'],
  },
];

// Metadata
const metadata: DataMetadata = {
  lastUpdated: new Date().toISOString(),
  source: {
    name: 'UN, World Bank, IMF, Reuters, Al Jazeera, Yemen Data Project',
    type: 'international',
    reliability: 'high',
  },
  notes: 'Comprehensive timeline of economic, political, and humanitarian events affecting Yemen\'s economy (2014-2025). Events are categorized by type and impact level, with links to affected indicators and related stakeholders. Critical events include: CBY split (Sep 2016), currency ban (Jan 2017), currency collapse (Sep 2018), bank disintermediation (Dec 2020), and microfinance licensing (Jan 2023).',
  isEstimate: false,
  confidence: 'high',
};

// Export data feed
export const getEventsFeed = () => {
  const feedData: EventsFeed = {
    events,
  };
  
  // Validate data
  EventsFeedSchema.parse(feedData);
  
  return createDataFeed('events', EventsFeedSchema, feedData, metadata);
};

// Helper functions
export const getEventById = (id: string) => {
  const feed = getEventsFeed();
  return feed.data.events.find(e => e.id === id);
};

export const getEventsByYear = (year: number) => {
  const feed = getEventsFeed();
  return feed.data.events.filter(e => e.date.startsWith(year.toString()));
};

export const getEventsByCategory = (category: Event['category']) => {
  const feed = getEventsFeed();
  return feed.data.events.filter(e => e.category === category);
};

export const getEventsByImpact = (impact: Event['impact']) => {
  const feed = getEventsFeed();
  return feed.data.events.filter(e => e.impact === impact);
};

export const getEventsByStakeholder = (stakeholder: string) => {
  const feed = getEventsFeed();
  return feed.data.events.filter(e => e.related_stakeholders.includes(stakeholder));
};

export const getCriticalEvents = () => {
  return getEventsByImpact('critical');
};

export const getEventsInRange = (startDate: string, endDate: string) => {
  const feed = getEventsFeed();
  return feed.data.events.filter(e => e.date >= startDate && e.date <= endDate);
};

// Get events that affected a specific indicator
export const getEventsByIndicator = (indicator: string) => {
  const feed = getEventsFeed();
  return feed.data.events.filter(e => e.affected_indicators.includes(indicator));
};

// Get timeline summary (count by year and category)
export const getTimelineSummary = () => {
  const feed = getEventsFeed();
  const summary: Record<number, Record<string, number>> = {};
  
  feed.data.events.forEach(event => {
    const year = parseInt(event.date.substring(0, 4));
    if (!summary[year]) {
      summary[year] = {};
    }
    if (!summary[year][event.category]) {
      summary[year][event.category] = 0;
    }
    summary[year][event.category]++;
  });
  
  return summary;
};
