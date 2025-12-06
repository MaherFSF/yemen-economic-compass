import { createConnection } from 'mysql2/promise';

const connection = await createConnection(process.env.DATABASE_URL);

// Additional causations to add (bringing total from 15 to 25+)
const newCausations = [
  {
    // Fuel Crisis → Transportation Cost Surge
    causePattern: '%Fuel%Crisis%',
    effectPattern: '%Transport%',
    mechanismEn: 'Fuel shortages and black market premiums increased transportation costs by 120%, raising prices for all imported and domestic goods. Diesel prices rose 180% above official rates; food basket prices increased 35%',
    mechanismAr: 'أدى نقص الوقود وأقساط السوق السوداء إلى زيادة تكاليف النقل بنسبة 120%، مما رفع أسعار جميع السلع المستوردة والمحلية. ارتفعت أسعار الديزل بنسبة 180% فوق الأسعار الرسمية؛ زادت أسعار السلة الغذائية بنسبة 35%',
    strength: 85,
    confidence: 90,
    evidence: JSON.stringify([
      { source: 'WFP Yemen Fuel Market Analysis 2021', url: 'https://www.wfp.org/countries/yemen' },
      { source: 'Yemen Petroleum Company Price Reports', url: 'https://www.ypc.com.ye' }
    ])
  },
  {
    // Healthcare System Collapse → Disease Outbreak Surge
    causePattern: '%Healthcare%',
    effectPattern: '%Disease%',
    mechanismEn: 'Hospital closures, medicine shortages, and unpaid health workers reduced disease surveillance and treatment capacity. Cholera cases exceeded 2.5M (2016-2022); diphtheria outbreak affected 5,000; measles cases increased 340%',
    mechanismAr: 'أدى إغلاق المستشفيات، ونقص الأدوية، وعدم دفع رواتب العاملين الصحيين إلى تقليل المراقبة والقدرة على العلاج. تجاوزت حالات الكوليرا 2.5 مليون (2016-2022)؛ أثر تفشي الدفتيريا على 5,000؛ زادت حالات الحصبة بنسبة 340%',
    strength: 90,
    confidence: 95,
    evidence: JSON.stringify([
      { source: 'WHO Yemen Health Cluster Report 2022', url: 'https://www.who.int/countries/yem' },
      { source: 'UNICEF Yemen Humanitarian Situation Report', url: 'https://www.unicef.org/yemen' }
    ])
  },
  {
    // Education Disruption → Youth Unemployment Rise
    causePattern: '%Education%',
    effectPattern: '%Youth%Unemployment%',
    mechanismEn: 'School closures and teacher salary suspensions reduced education quality and enrollment, limiting youth skills and employability. Youth unemployment (15-24) increased from 24% (2014) to 38% (2022); 2M children out of school; literacy rates declined 12%',
    mechanismAr: 'أدى إغلاق المدارس وتعليق رواتب المعلمين إلى تقليل جودة التعليم والتسجيل، مما حد من مهارات الشباب وقابليتهم للتوظيف. ارتفعت بطالة الشباب (15-24) من 24% (2014) إلى 38% (2022)؛ 2 مليون طفل خارج المدرسة؛ انخفضت معدلات محو الأمية بنسبة 12%',
    strength: 82,
    confidence: 88,
    evidence: JSON.stringify([
      { source: 'UNICEF Yemen Education in Crisis Report 2022', url: 'https://www.unicef.org/yemen' },
      { source: 'ILO Yemen Labour Force Survey 2022', url: 'https://www.ilo.org/beirut/countries/yemen' }
    ])
  },
  {
    // UNDP Resilience Programs → Livelihood Recovery
    causePattern: '%UNDP%',
    effectPattern: '%Livelihood%',
    mechanismEn: 'UNDP cash-for-work programs and small business grants provided income to 500K households, enabling economic recovery. Programs created 8.5M workdays, rehabilitated 1,200 infrastructure projects, supported 45K small businesses',
    mechanismAr: 'وفرت برامج النقد مقابل العمل ومنح الأعمال الصغيرة من برنامج الأمم المتحدة الإنمائي دخلاً لـ 500 ألف أسرة، مما مكّن من التعافي الاقتصادي. أنشأت البرامج 8.5 مليون يوم عمل، وأعادت تأهيل 1,200 مشروع بنية تحتية، ودعمت 45 ألف مشروع صغير',
    strength: 78,
    confidence: 85,
    evidence: JSON.stringify([
      { source: 'UNDP Yemen Annual Report 2023', url: 'https://www.undp.org/yemen' },
      { source: 'Yemen Emergency Crisis Response Project Results', url: 'https://www.undp.org/yemen/projects' }
    ])
  },
  {
    // Saudi Coalition Support → Government Operational Capacity
    causePattern: '%Saudi%Support%',
    effectPattern: '%Government%Operation%',
    mechanismEn: 'Saudi financial support totaling $3.158B (2015-2024) enabled IRG to maintain minimal government operations, pay partial salaries to 400K civil servants, and fund essential services, covering 35% of government budget',
    mechanismAr: 'مكّن الدعم المالي السعودي البالغ 3.158 مليار دولار (2015-2024) الحكومة اليمنية من الحفاظ على عمليات حكومية دنيا، ودفع رواتب جزئية لـ 400 ألف موظف مدني، وتمويل الخدمات الأساسية، بتغطية 35% من ميزانية الحكومة',
    strength: 87,
    confidence: 92,
    evidence: JSON.stringify([
      { source: 'Saudi Development Program for Yemen Reports', url: 'https://www.ksrelief.org' },
      { source: 'Yemen Ministry of Planning Budget Documents', url: 'https://www.mop.gov.ye' }
    ])
  },
  {
    // Houthi Taxation Policies → Inflation Pressures
    causePattern: '%Houthi%Tax%',
    effectPattern: '%Inflation%',
    mechanismEn: 'Houthi authorities imposed customs duties, zakat taxes, and business levies, increasing costs passed to consumers. Average tax burden on businesses in Sana\'a areas increased 35%; consumer prices rose 8-12% above Aden areas',
    mechanismAr: 'فرضت سلطات الحوثيين رسوماً جمركية، وضرائب الزكاة، ورسوماً تجارية، مما زاد التكاليف التي تم تحميلها للمستهلكين. زاد متوسط العبء الضريبي على الشركات في مناطق صنعاء بنسبة 35%؛ ارتفعت أسعار المستهلكين بنسبة 8-12% فوق مناطق عدن',
    strength: 75,
    confidence: 80,
    evidence: JSON.stringify([
      { source: 'Sana\'a Center Economic Bulletin 2023', url: 'https://sanaacenter.org' },
      { source: 'WFP Yemen Market Price Monitoring', url: 'https://www.wfp.org/countries/yemen' }
    ])
  },
  {
    // Water Crisis → Agricultural Production Decline
    causePattern: '%Water%',
    effectPattern: '%Agriculture%',
    mechanismEn: 'Groundwater depletion, infrastructure damage, and fuel shortages for pumping reduced agricultural output by 40%. Wheat production fell from 180K tons (2014) to 108K tons (2020); irrigated land decreased 35%',
    mechanismAr: 'أدى استنزاف المياه الجوفية، وتلف البنية التحتية، ونقص الوقود للضخ إلى تقليل الإنتاج الزراعي بنسبة 40%. انخفض إنتاج القمح من 180 ألف طن (2014) إلى 108 ألف طن (2020)؛ انخفضت الأراضي المروية بنسبة 35%',
    strength: 83,
    confidence: 87,
    evidence: JSON.stringify([
      { source: 'FAO Yemen Agriculture Sector Assessment 2021', url: 'https://www.fao.org/yemen' },
      { source: 'World Bank Yemen Water Crisis Report', url: 'https://www.worldbank.org/en/country/yemen' }
    ])
  },
  {
    // Telecommunications Infrastructure Damage → Digital Economy Disruption
    causePattern: '%Telecommunication%',
    effectPattern: '%Digital%Economy%',
    mechanismEn: 'Conflict damage to telecom infrastructure and power outages reduced internet penetration from 24% (2014) to 18% (2020), limiting e-commerce, remote work, and digital financial services. Mobile money growth slowed 45%',
    mechanismAr: 'أدى تلف البنية التحتية للاتصالات وانقطاع التيار الكهربائي إلى تقليل انتشار الإنترنت من 24% (2014) إلى 18% (2020)، مما حد من التجارة الإلكترونية، والعمل عن بعد، والخدمات المالية الرقمية. تباطأ نمو الأموال المتنقلة بنسبة 45%',
    strength: 70,
    confidence: 75,
    evidence: JSON.stringify([
      { source: 'ITU Yemen ICT Statistics 2021', url: 'https://www.itu.int/en/ITU-D/Statistics' },
      { source: 'Yemen Telecommunications Sector Report', url: 'https://www.yemennet.ye' }
    ])
  },
  {
    // IMF Technical Assistance → Fiscal Management Improvements
    causePattern: '%IMF%Technical%Assistance%',
    effectPattern: '%Fiscal%Management%',
    mechanismEn: 'IMF capacity building programs strengthened budget preparation, revenue administration, and public financial management. Tax collection efficiency improved 18%; budget execution transparency increased; fiscal reporting standards upgraded',
    mechanismAr: 'عززت برامج بناء القدرات من صندوق النقد الدولي إعداد الميزانية، وإدارة الإيرادات، وإدارة المالية العامة. تحسنت كفاءة تحصيل الضرائب بنسبة 18%؛ زادت شفافية تنفيذ الميزانية؛ تم تحديث معايير التقارير المالية',
    strength: 72,
    confidence: 82,
    evidence: JSON.stringify([
      { source: 'IMF Yemen Technical Assistance Reports', url: 'https://www.imf.org/en/Countries/YEM' },
      { source: 'Yemen Ministry of Finance Capacity Development', url: 'https://www.mof.gov.ye' }
    ])
  },
  {
    // Displacement Crisis → Urban Strain
    causePattern: '%Displacement%',
    effectPattern: '%Urban%',
    mechanismEn: 'Internal displacement of 4.5M people overwhelmed urban infrastructure and services in host communities. Housing costs in Aden increased 85%; water prices rose 120%; unemployment in host areas increased 28%',
    mechanismAr: 'أدى النزوح الداخلي لـ 4.5 مليون شخص إلى إرهاق البنية التحتية الحضرية والخدمات في المجتمعات المضيفة. زادت تكاليف الإسكان في عدن بنسبة 85%؛ ارتفعت أسعار المياه بنسبة 120%؛ زادت البطالة في المناطق المضيفة بنسبة 28%',
    strength: 80,
    confidence: 85,
    evidence: JSON.stringify([
      { source: 'IOM Yemen Displacement Tracking Matrix 2024', url: 'https://displacement.iom.int/yemen' },
      { source: 'UNHCR Yemen Operational Update', url: 'https://www.unhcr.org/yemen' }
    ])
  }
];

console.log(`Adding ${newCausations.length} new causations to database...\n`);

let successCount = 0;
let errorCount = 0;

for (let i = 0; i < newCausations.length; i++) {
  const causation = newCausations[i];
  
  try {
    // Find cause event ID
    const [causeRows] = await connection.execute(
      `SELECT id FROM events WHERE titleEn LIKE ? LIMIT 1`,
      [causation.causePattern]
    );
    
    // Find effect event ID
    const [effectRows] = await connection.execute(
      `SELECT id FROM events WHERE titleEn LIKE ? LIMIT 1`,
      [causation.effectPattern]
    );
    
    if (causeRows.length === 0 || effectRows.length === 0) {
      console.log(`⚠️  Skipping causation ${i + 1}: Event not found (cause: ${causation.causePattern}, effect: ${causation.effectPattern})`);
      errorCount++;
      continue;
    }
    
    const causeEventId = causeRows[0].id;
    const effectEventId = effectRows[0].id;
    
    // Insert causation
    await connection.execute(
      `INSERT INTO causations (causeEventId, effectEventId, mechanismEn, mechanismAr, strength, confidence, evidence) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        causeEventId,
        effectEventId,
        causation.mechanismEn,
        causation.mechanismAr,
        causation.strength,
        causation.confidence,
        causation.evidence
      ]
    );
    
    console.log(`✅ Causation ${i + 1}/${newCausations.length} added: ${causation.causePattern} → ${causation.effectPattern}`);
    successCount++;
    
  } catch (err) {
    console.error(`❌ Error adding causation ${i + 1}: ${err.message}`);
    errorCount++;
  }
}

// Verify total causations
const [rows] = await connection.execute('SELECT COUNT(*) as total FROM causations');
console.log(`\n✅ Successfully added: ${successCount}`);
console.log(`⚠️  Skipped/Failed: ${errorCount}`);
console.log(`📊 Total causations in database: ${rows[0].total}`);

await connection.end();
