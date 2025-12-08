import mysql from 'mysql2/promise';

const DATABASE_URL = process.env.DATABASE_URL;

async function expandEventsAndActors() {
  console.log('📅 Starting Events & Actors Expansion...\n');
  
  const connection = await mysql.createConnection(DATABASE_URL);
  
  let eventsInserted = 0;
  let actorsInserted = 0;
  
  // ========================================
  // PHASE 1: KEY ACTORS
  // ========================================
  console.log('👥 Phase 1: Adding Key Actors\n');
  
  const actors = [
    {
      nameEn: 'Ansar Allah (Houthis)',
      nameAr: 'أنصار الله (الحوثيون)',
      type: 'armed_group',
      category: 'Armed Movement',
      status: 'active',
      descriptionEn: 'Zaidi Shia armed movement controlling northern Yemen including Sana\'a since 2014',
      descriptionAr: 'حركة مسلحة زيدية شيعية تسيطر على شمال اليمن بما في ذلك صنعاء منذ 2014',
      foundedDate: '1990-01-01',
      keyFigures: JSON.stringify(['Abdul-Malik al-Houthi', 'Mohammed Ali al-Houthi']),
      interests: JSON.stringify(['Political power', 'Resource control', 'Regional influence']),
      capabilities: JSON.stringify(['Military control', 'Tax collection', 'Port management', 'Currency issuance']),
      fundingProvided: 0
    },
    {
      nameEn: 'Internationally Recognized Government (IRG)',
      nameAr: 'الحكومة المعترف بها دوليا',
      type: 'government',
      category: 'Government',
      status: 'active',
      descriptionEn: 'Yemeni government recognized by UN, based in Aden, led by Presidential Leadership Council',
      descriptionAr: 'الحكومة اليمنية المعترف بها من قبل الأمم المتحدة، مقرها عدن، يقودها مجلس القيادة الرئاسي',
      foundedDate: '2015-03-01',
      keyFigures: JSON.stringify(['Rashad al-Alimi (PLC Chairman)', 'Maeen Abdulmalik Saeed (PM)']),
      interests: JSON.stringify(['Sovereignty restoration', 'International support', 'Economic recovery']),
      capabilities: JSON.stringify(['International recognition', 'Oil export control', 'Foreign reserves access', 'Donor coordination']),
      fundingProvided: 0
    },
    {
      nameEn: 'Saudi Arabia',
      nameAr: 'المملكة العربية السعودية',
      type: 'international',
      category: 'Regional Power',
      status: 'active',
      descriptionEn: 'Lead member of Saudi-led coalition supporting IRG since 2015',
      descriptionAr: 'العضو الرئيسي في التحالف بقيادة السعودية الذي يدعم الحكومة المعترف بها دوليا منذ 2015',
      foundedDate: '1932-09-23',
      keyFigures: JSON.stringify(['King Salman bin Abdulaziz', 'Crown Prince Mohammed bin Salman']),
      interests: JSON.stringify(['Regional security', 'Border stability', 'Counter-Iran influence']),
      capabilities: JSON.stringify(['Military intervention', 'Financial support', 'Oil market influence', 'Diplomatic pressure']),
      fundingProvided: 850000000000 // $8.5 billion in cents
    },
    {
      nameEn: 'United Arab Emirates',
      nameAr: 'الإمارات العربية المتحدة',
      type: 'international',
      category: 'Regional Power',
      status: 'active',
      descriptionEn: 'Coalition member with significant influence in southern Yemen',
      descriptionAr: 'عضو في التحالف له تأثير كبير في جنوب اليمن',
      foundedDate: '1971-12-02',
      keyFigures: JSON.stringify(['Sheikh Mohammed bin Zayed Al Nahyan']),
      interests: JSON.stringify(['Port access', 'Counter-terrorism', 'Regional influence']),
      capabilities: JSON.stringify(['Military presence', 'Infrastructure investment', 'Local militia support']),
      fundingProvided: 520000000000 // $5.2 billion in cents
    },
    {
      nameEn: 'United Nations',
      nameAr: 'الأمم المتحدة',
      type: 'international',
      category: 'International Organization',
      status: 'active',
      descriptionEn: 'Leading humanitarian response and peace mediation efforts',
      descriptionAr: 'قيادة الاستجابة الإنسانية وجهود الوساطة للسلام',
      foundedDate: '1945-10-24',
      keyFigures: JSON.stringify(['Martin Griffiths (Former Envoy)', 'Hans Grundberg (Current Envoy)']),
      interests: JSON.stringify(['Humanitarian access', 'Ceasefire', 'Political settlement']),
      capabilities: JSON.stringify(['Mediation', 'Humanitarian coordination', 'Sanctions', 'Monitoring']),
      fundingProvided: 1850000000000 // $18.5 billion humanitarian aid in cents
    },
    {
      nameEn: 'World Bank',
      nameAr: 'البنك الدولي',
      type: 'international',
      category: 'International Financial Institution',
      status: 'active',
      descriptionEn: 'Providing emergency financing and technical assistance',
      descriptionAr: 'تقديم التمويل الطارئ والمساعدة الفنية',
      foundedDate: '1944-07-01',
      keyFigures: JSON.stringify(['Ajay Banga (President)']),
      interests: JSON.stringify(['Economic stabilization', 'Service delivery', 'Poverty reduction']),
      capabilities: JSON.stringify(['Emergency financing', 'Technical assistance', 'Economic analysis', 'Donor coordination']),
      fundingProvided: 280000000000 // $2.8 billion in cents
    },
    {
      nameEn: 'International Monetary Fund',
      nameAr: 'صندوق النقد الدولي',
      type: 'international',
      category: 'International Financial Institution',
      status: 'active',
      descriptionEn: 'Monitoring economic developments and providing policy advice',
      descriptionAr: 'مراقبة التطورات الاقتصادية وتقديم المشورة السياسية',
      foundedDate: '1944-07-01',
      keyFigures: JSON.stringify(['Kristalina Georgieva (MD)']),
      interests: JSON.stringify(['Macroeconomic stability', 'Exchange rate management', 'Fiscal sustainability']),
      capabilities: JSON.stringify(['Economic surveillance', 'Policy advice', 'Technical assistance', 'Emergency financing']),
      fundingProvided: 0
    },
    {
      nameEn: 'World Food Programme',
      nameAr: 'برنامج الأغذية العالمي',
      type: 'international',
      category: 'UN Agency',
      status: 'active',
      descriptionEn: 'Largest humanitarian operation providing food assistance',
      descriptionAr: 'أكبر عملية إنسانية توفر المساعدات الغذائية',
      foundedDate: '1961-01-01',
      keyFigures: JSON.stringify(['Cindy McCain (Executive Director)']),
      interests: JSON.stringify(['Food security', 'Humanitarian access', 'Malnutrition prevention']),
      capabilities: JSON.stringify(['Food distribution', 'Cash assistance', 'Logistics', 'Monitoring']),
      fundingProvided: 1120000000000 // $11.2 billion in cents
    },
    {
      nameEn: 'Southern Transitional Council',
      nameAr: 'المجلس الانتقالي الجنوبي',
      type: 'armed_group',
      category: 'Separatist Movement',
      status: 'active',
      descriptionEn: 'Southern separatist movement seeking independence for South Yemen',
      descriptionAr: 'حركة انفصالية جنوبية تسعى للاستقلال لجنوب اليمن',
      foundedDate: '2017-05-11',
      keyFigures: JSON.stringify(['Aidarus al-Zoubaidi', 'Hani bin Breik']),
      interests: JSON.stringify(['Southern independence', 'Resource control', 'Political autonomy']),
      capabilities: JSON.stringify(['Military forces', 'Administrative control', 'Port management']),
      fundingProvided: 0
    },
    {
      nameEn: 'Central Bank of Yemen (Aden)',
      nameAr: 'البنك المركزي اليمني (عدن)',
      type: 'bank',
      category: 'Central Bank',
      status: 'active',
      descriptionEn: 'Internationally recognized central bank relocated to Aden in 2016',
      descriptionAr: 'البنك المركزي المعترف به دوليا والذي انتقل إلى عدن في 2016',
      foundedDate: '1971-01-01',
      keyFigures: JSON.stringify(['Ahmed Ghaleb (Governor)']),
      interests: JSON.stringify(['Monetary stability', 'Foreign reserves', 'Banking supervision']),
      capabilities: JSON.stringify(['Monetary policy', 'Foreign reserves management', 'Banking regulation', 'Currency issuance']),
      fundingProvided: 0
    },
    {
      nameEn: 'Central Bank of Yemen (Sana\'a)',
      nameAr: 'البنك المركزي اليمني (صنعاء)',
      type: 'bank',
      category: 'Central Bank',
      status: 'active',
      descriptionEn: 'De facto central bank controlled by Ansar Allah in Sana\'a',
      descriptionAr: 'البنك المركزي الفعلي الذي يسيطر عليه أنصار الله في صنعاء',
      foundedDate: '1971-01-01',
      keyFigures: JSON.stringify(['Hashim Ismail (Acting Governor)']),
      interests: JSON.stringify(['Revenue collection', 'Currency control', 'Banking operations']),
      capabilities: JSON.stringify(['Tax collection', 'Banking operations', 'Currency management', 'Customs revenue']),
      fundingProvided: 0
    }
  ];
  
  for (const actor of actors) {
    try {
      await connection.execute(
        `INSERT INTO actors (nameEn, nameAr, type, category, status, descriptionEn, descriptionAr, foundedDate, keyFigures, interests, capabilities, fundingProvided) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          actor.nameEn,
          actor.nameAr,
          actor.type,
          actor.category,
          actor.status,
          actor.descriptionEn,
          actor.descriptionAr,
          actor.foundedDate,
          actor.keyFigures,
          actor.interests,
          actor.capabilities,
          actor.fundingProvided
        ]
      );
      actorsInserted++;
      console.log(`  ✅ ${actor.nameEn} (${actor.category})`);
    } catch (error) {
      if (error.message.includes('Duplicate entry')) {
        console.log(`  ⚠️  Already exists: ${actor.nameEn}`);
      } else {
        console.error(`  ❌ Error:`, error.message);
      }
    }
  }
  
  console.log(`\n  Added ${actorsInserted} actors\n`);
  
  // ========================================
  // PHASE 2: MAJOR ECONOMIC EVENTS (2010-2025)
  // ========================================
  console.log('📅 Phase 2: Adding Major Economic Events (2010-2025)\n');
  
  const events = [
    {
      date: '2010-12-31',
      titleEn: 'Pre-Crisis Baseline: Yemen Economy 2010',
      titleAr: 'خط الأساس قبل الأزمة: اقتصاد اليمن 2010',
      descriptionEn: 'Yemen experienced robust GDP growth of 7.7% driven by LNG exports and high oil prices. However, underlying vulnerabilities included 32% food insecurity, 300,000 IDPs from northern conflicts, and 11.2% inflation.',
      descriptionAr: 'شهد اليمن نموا قويا في الناتج المحلي الإجمالي بنسبة 7.7٪ مدفوعا بصادرات الغاز الطبيعي المسال وارتفاع أسعار النفط. ومع ذلك، شملت نقاط الضعف الأساسية انعدام الأمن الغذائي بنسبة 32٪، و300,000 نازح من الصراعات الشمالية، والتضخم بنسبة 11.2٪.',
      category: 'economic',
      severity: 'medium',
      sources: JSON.stringify(['IMF Staff Report 2010', 'World Bank', 'WFP']),
      impacts: JSON.stringify([
        { indicator: 'GDP Growth', value: '7.7%', direction: 'positive' },
        { indicator: 'Inflation', value: '11.2%', direction: 'negative' },
        { indicator: 'Food Insecurity', value: '7.5M people', direction: 'negative' }
      ])
    },
    {
      date: '2011-02-15',
      titleEn: 'Arab Spring Protests Begin',
      titleAr: 'بداية احتجاجات الربيع العربي',
      descriptionEn: 'Mass protests erupted across Yemen demanding political reform and end to President Saleh\'s rule, triggering economic disruption and infrastructure attacks.',
      descriptionAr: 'اندلعت احتجاجات جماهيرية في جميع أنحاء اليمن تطالب بالإصلاح السياسي وإنهاء حكم الرئيس صالح، مما أدى إلى اضطراب اقتصادي وهجمات على البنية التحتية.',
      category: 'political',
      severity: 'critical',
      sources: JSON.stringify(['BBC', 'Al Jazeera', 'UN OCHA']),
      impacts: JSON.stringify([
        { indicator: 'GDP Growth', value: '-12.7%', direction: 'negative' },
        { indicator: 'Oil Production', value: '-50%', direction: 'negative' },
        { indicator: 'Food Prices', value: '+46%', direction: 'negative' }
      ])
    },
    {
      date: '2011-11-23',
      titleEn: 'GCC Initiative Signed',
      titleAr: 'توقيع مبادرة مجلس التعاون الخليجي',
      descriptionEn: 'President Saleh signed GCC-brokered transition agreement, granting him immunity and establishing framework for political transition.',
      descriptionAr: 'وقع الرئيس صالح اتفاق الانتقال الذي توسطت فيه دول مجلس التعاون الخليجي، ومنحه الحصانة وإنشاء إطار للانتقال السياسي.',
      category: 'political',
      severity: 'high',
      sources: JSON.stringify(['GCC', 'UN', 'Reuters']),
      impacts: JSON.stringify([
        { indicator: 'Political Stability', value: 'Temporary improvement', direction: 'positive' },
        { indicator: 'Investor Confidence', value: 'Slight recovery', direction: 'positive' }
      ])
    },
    {
      date: '2012-02-21',
      titleEn: 'Hadi Elected President',
      titleAr: 'انتخاب هادي رئيسا',
      descriptionEn: 'Abdrabbuh Mansur Hadi elected president in unopposed election, formally ending Saleh\'s 33-year rule.',
      descriptionAr: 'انتخب عبد ربه منصور هادي رئيسا في انتخابات دون منافس، منهيا رسميا حكم صالح الذي دام 33 عاما.',
      category: 'political',
      severity: 'high',
      sources: JSON.stringify(['UN', 'BBC', 'Al Jazeera']),
      impacts: JSON.stringify([
        { indicator: 'GDP Growth', value: '1.4%', direction: 'positive' },
        { indicator: 'Political Transition', value: 'Initiated', direction: 'positive' }
      ])
    },
    {
      date: '2014-07-01',
      titleEn: 'Fuel Subsidy Removal',
      titleAr: 'إلغاء دعم الوقود',
      descriptionEn: 'Government removed fuel subsidies under IMF pressure, triggering massive price increases and public protests.',
      descriptionAr: 'ألغت الحكومة دعم الوقود تحت ضغط صندوق النقد الدولي، مما أدى إلى زيادات هائلة في الأسعار واحتجاجات عامة.',
      category: 'policy',
      severity: 'critical',
      sources: JSON.stringify(['IMF', 'World Bank', 'Crisis Group']),
      impacts: JSON.stringify([
        { indicator: 'Fuel Prices', value: '+90%', direction: 'negative' },
        { indicator: 'Food Prices', value: '+35%', direction: 'negative' },
        { indicator: 'Public Unrest', value: 'Massive protests', direction: 'negative' }
      ])
    },
    {
      date: '2014-09-21',
      titleEn: 'Houthi Takeover of Sana\'a',
      titleAr: 'سيطرة الحوثيين على صنعاء',
      descriptionEn: 'Ansar Allah forces captured Yemen\'s capital Sana\'a, marking the beginning of current civil war and economic collapse.',
      descriptionAr: 'استولت قوات أنصار الله على العاصمة اليمنية صنعاء، مما يمثل بداية الحرب الأهلية الحالية والانهيار الاقتصادي.',
      category: 'war',
      severity: 'critical',
      sources: JSON.stringify(['UN', 'BBC', 'Reuters', 'Al Jazeera']),
      impacts: JSON.stringify([
        { indicator: 'GDP Growth', value: '-3.9%', direction: 'negative' },
        { indicator: 'Government Revenue', value: '-40%', direction: 'negative' },
        { indicator: 'Foreign Investment', value: 'Collapse', direction: 'negative' }
      ])
    },
    {
      date: '2015-03-26',
      titleEn: 'Saudi-Led Coalition Intervention',
      titleAr: 'تدخل التحالف بقيادة السعودية',
      descriptionEn: 'Saudi Arabia launched Operation Decisive Storm with coalition partners, imposing air and sea blockade on Yemen.',
      descriptionAr: 'أطلقت السعودية عملية عاصفة الحزم مع شركاء التحالف، وفرضت حصارا جويا وبحريا على اليمن.',
      category: 'war',
      severity: 'critical',
      sources: JSON.stringify(['Saudi Press Agency', 'UN', 'Reuters']),
      impacts: JSON.stringify([
        { indicator: 'GDP Growth', value: '-28%', direction: 'negative' },
        { indicator: 'Imports', value: '-70%', direction: 'negative' },
        { indicator: 'Humanitarian Crisis', value: 'Severe escalation', direction: 'negative' }
      ])
    },
    {
      date: '2016-09-18',
      titleEn: 'Central Bank Split',
      titleAr: 'انقسام البنك المركزي',
      descriptionEn: 'President Hadi relocated Central Bank from Sana\'a to Aden, creating dual central banking system and accelerating currency collapse.',
      descriptionAr: 'نقل الرئيس هادي البنك المركزي من صنعاء إلى عدن، مما أدى إلى إنشاء نظام مصرفي مركزي مزدوج وتسريع انهيار العملة.',
      category: 'policy',
      severity: 'critical',
      sources: JSON.stringify(['CBY', 'World Bank', 'IMF']),
      impacts: JSON.stringify([
        { indicator: 'Exchange Rate (Aden)', value: '350 YER/USD', direction: 'negative' },
        { indicator: 'Exchange Rate (Sanaa)', value: '250 YER/USD', direction: 'negative' },
        { indicator: 'Banking System', value: 'Fragmented', direction: 'negative' }
      ])
    },
    {
      date: '2017-11-04',
      titleEn: 'Saudi Blockade Tightening',
      titleAr: 'تشديد الحصار السعودي',
      descriptionEn: 'Saudi Arabia tightened blockade after Houthi missile attack, severely restricting imports and humanitarian access.',
      descriptionAr: 'شددت السعودية الحصار بعد هجوم صاروخي حوثي، مما قيد بشدة الواردات والوصول الإنساني.',
      category: 'war',
      severity: 'critical',
      sources: JSON.stringify(['UN OCHA', 'WFP', 'Oxfam']),
      impacts: JSON.stringify([
        { indicator: 'Food Imports', value: '-50%', direction: 'negative' },
        { indicator: 'Fuel Imports', value: '-70%', direction: 'negative' },
        { indicator: 'Food Prices', value: '+35%', direction: 'negative' }
      ])
    },
    {
      date: '2018-12-13',
      titleEn: 'Stockholm Agreement',
      titleAr: 'اتفاق ستوكهولم',
      descriptionEn: 'UN-brokered ceasefire agreement for Hodeidah port, providing temporary relief to humanitarian crisis.',
      descriptionAr: 'اتفاق وقف إطلاق النار الذي توسطت فيه الأمم المتحدة لميناء الحديدة، مما وفر راحة مؤقتة للأزمة الإنسانية.',
      category: 'political',
      severity: 'high',
      sources: JSON.stringify(['UN', 'Reuters', 'BBC']),
      impacts: JSON.stringify([
        { indicator: 'Port Operations', value: 'Partial improvement', direction: 'positive' },
        { indicator: 'Food Imports', value: '+15%', direction: 'positive' },
        { indicator: 'Humanitarian Access', value: 'Improved', direction: 'positive' }
      ])
    },
    {
      date: '2019-12-18',
      titleEn: 'Currency Ban Announcement',
      titleAr: 'إعلان حظر العملة',
      descriptionEn: 'Houthi authorities banned new currency notes printed by Aden government, deepening monetary fragmentation.',
      descriptionAr: 'حظرت سلطات الحوثي الأوراق النقدية الجديدة المطبوعة من قبل حكومة عدن، مما عمق التفتت النقدي.',
      category: 'policy',
      severity: 'critical',
      sources: JSON.stringify(['CBY Aden', 'Reuters', 'Sana\'a Center']),
      impacts: JSON.stringify([
        { indicator: 'Exchange Rate Gap', value: '+25%', direction: 'negative' },
        { indicator: 'Trade Costs', value: '+30%', direction: 'negative' },
        { indicator: 'Monetary Unity', value: 'Collapsed', direction: 'negative' }
      ])
    },
    {
      date: '2020-04-10',
      titleEn: 'COVID-19 Pandemic Impact',
      titleAr: 'تأثير جائحة كوفيد-19',
      descriptionEn: 'COVID-19 pandemic hit Yemen with collapsed health system, remittance decline, and oil price crash.',
      descriptionAr: 'ضربت جائحة كوفيد-19 اليمن مع انهيار النظام الصحي وانخفاض التحويلات وانهيار أسعار النفط.',
      category: 'humanitarian',
      severity: 'critical',
      sources: JSON.stringify(['WHO', 'World Bank', 'UN OCHA']),
      impacts: JSON.stringify([
        { indicator: 'Remittances', value: '-40%', direction: 'negative' },
        { indicator: 'Oil Revenue', value: '-65%', direction: 'negative' },
        { indicator: 'Health System', value: 'Collapsed', direction: 'negative' }
      ])
    },
    {
      date: '2022-04-02',
      titleEn: 'UN-Brokered Truce',
      titleAr: 'الهدنة التي توسطت فيها الأمم المتحدة',
      descriptionEn: 'Two-month nationwide truce agreed, later extended, providing first major pause in fighting since 2015.',
      descriptionAr: 'تم الاتفاق على هدنة وطنية لمدة شهرين، تم تمديدها لاحقا، مما وفر أول توقف كبير في القتال منذ 2015.',
      category: 'political',
      severity: 'high',
      sources: JSON.stringify(['UN', 'Reuters', 'Al Jazeera']),
      impacts: JSON.stringify([
        { indicator: 'Exchange Rate', value: 'Stabilized', direction: 'positive' },
        { indicator: 'Trade Volume', value: '+20%', direction: 'positive' },
        { indicator: 'Humanitarian Access', value: 'Improved', direction: 'positive' }
      ])
    },
    {
      date: '2023-04-07',
      titleEn: 'Saudi-Houthi Dialogue',
      titleAr: 'الحوار السعودي الحوثي',
      descriptionEn: 'Direct negotiations between Saudi Arabia and Ansar Allah in Sana\'a, raising hopes for peace settlement.',
      descriptionAr: 'مفاوضات مباشرة بين السعودية وأنصار الله في صنعاء، مما أثار آمالا بتسوية سلمية.',
      category: 'political',
      severity: 'high',
      sources: JSON.stringify(['Reuters', 'Al Jazeera', 'Sana\'a Center']),
      impacts: JSON.stringify([
        { indicator: 'Investor Sentiment', value: 'Improved', direction: 'positive' },
        { indicator: 'Currency Stability', value: 'Moderate improvement', direction: 'positive' }
      ])
    },
    {
      date: '2023-11-19',
      titleEn: 'Red Sea Shipping Attacks Begin',
      titleAr: 'بداية هجمات الشحن في البحر الأحمر',
      descriptionEn: 'Houthi forces began attacking commercial shipping in Red Sea in solidarity with Gaza, triggering new economic crisis.',
      descriptionAr: 'بدأت قوات الحوثي بمهاجمة الشحن التجاري في البحر الأحمر تضامنا مع غزة، مما أثار أزمة اقتصادية جديدة.',
      category: 'war',
      severity: 'critical',
      sources: JSON.stringify(['Reuters', 'Lloyd\'s List', 'UN']),
      impacts: JSON.stringify([
        { indicator: 'Shipping Costs', value: '+300%', direction: 'negative' },
        { indicator: 'Import Prices', value: '+45%', direction: 'negative' },
        { indicator: 'Exchange Rate (Aden)', value: 'Sharp depreciation', direction: 'negative' }
      ])
    },
    {
      date: '2024-01-12',
      titleEn: 'US-UK Airstrikes on Yemen',
      titleAr: 'الضربات الجوية الأمريكية البريطانية على اليمن',
      descriptionEn: 'US and UK launched airstrikes on Houthi military targets in response to Red Sea attacks, escalating regional tensions.',
      descriptionAr: 'شنت الولايات المتحدة والمملكة المتحدة ضربات جوية على أهداف عسكرية حوثية ردا على هجمات البحر الأحمر، مما صعد التوترات الإقليمية.',
      category: 'war',
      severity: 'critical',
      sources: JSON.stringify(['US DoD', 'BBC', 'Reuters']),
      impacts: JSON.stringify([
        { indicator: 'Regional Stability', value: 'Deteriorated', direction: 'negative' },
        { indicator: 'Investment Climate', value: 'Severely negative', direction: 'negative' }
      ])
    },
    {
      date: '2024-06-15',
      titleEn: 'Exchange Rate Crisis Deepens',
      titleAr: 'تعمق أزمة سعر الصرف',
      descriptionEn: 'Aden riyal reached 1,735 per USD while Sana\'a rate at 845, widening gap to historic levels amid Red Sea crisis.',
      descriptionAr: 'وصل الريال في عدن إلى 1,735 للدولار بينما سعر صنعاء عند 845، مما وسع الفجوة إلى مستويات تاريخية وسط أزمة البحر الأحمر.',
      category: 'economic',
      severity: 'critical',
      sources: JSON.stringify(['CBY Aden', 'Sana\'a Center', 'Trading Economics']),
      impacts: JSON.stringify([
        { indicator: 'Exchange Rate Gap', value: '105%', direction: 'negative' },
        { indicator: 'Purchasing Power', value: '-35%', direction: 'negative' },
        { indicator: 'Food Security', value: 'Severe deterioration', direction: 'negative' }
      ])
    },
    {
      date: '2025-01-01',
      titleEn: 'Humanitarian Crisis at Peak',
      titleAr: 'الأزمة الإنسانية في ذروتها',
      descriptionEn: 'Yemen faces worst humanitarian crisis with 21.6M people needing assistance, currency at historic lows, and food insecurity at 80%+.',
      descriptionAr: 'يواجه اليمن أسوأ أزمة إنسانية مع 21.6 مليون شخص بحاجة إلى المساعدة، والعملة في أدنى مستوياتها التاريخية، وانعدام الأمن الغذائي عند 80٪+.',
      category: 'humanitarian',
      severity: 'critical',
      sources: JSON.stringify(['UN OCHA', 'WFP', 'UNICEF']),
      impacts: JSON.stringify([
        { indicator: 'People in Need', value: '21.6M', direction: 'negative' },
        { indicator: 'Food Insecurity', value: '80%+', direction: 'negative' },
        { indicator: 'Malnutrition', value: '2.2M children', direction: 'negative' }
      ])
    }
  ];
  
  for (const event of events) {
    try {
      await connection.execute(
        `INSERT INTO events (date, titleEn, titleAr, descriptionEn, descriptionAr, category, severity, sources, impacts) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          event.date,
          event.titleEn,
          event.titleAr,
          event.descriptionEn,
          event.descriptionAr,
          event.category,
          event.severity,
          event.sources,
          event.impacts
        ]
      );
      eventsInserted++;
      console.log(`  ✅ ${event.date}: ${event.titleEn}`);
    } catch (error) {
      if (error.message.includes('Duplicate entry')) {
        console.log(`  ⚠️  Already exists: ${event.titleEn}`);
      } else {
        console.error(`  ❌ Error:`, error.message);
      }
    }
  }
  
  console.log(`\n  Added ${eventsInserted} major events\n`);
  
  await connection.end();
  
  console.log(`\n✅ ✅ ✅ EVENTS & ACTORS EXPANSION COMPLETE ✅ ✅ ✅`);
  console.log(`\n📊 SUMMARY:`);
  console.log(`  Actors added: ${actorsInserted}`);
  console.log(`  Events added: ${eventsInserted}`);
  console.log(`\n🎯 Database now contains:`);
  console.log(`   • Comprehensive actor profiles with funding data`);
  console.log(`   • Major economic events (2010-2025) with quantified impacts`);
  console.log(`   • Detailed source citations for all data`);
  console.log(`\n🚀 Ready for causation analysis and visualization!`);
}

expandEventsAndActors().catch(console.error);
