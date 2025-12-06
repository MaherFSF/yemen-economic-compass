-- Comprehensive Stakeholder Data Population
-- Based on deep research from World Bank, IMF, UNDP, Saudi Arabia, and Houthis sources

-- ============================================
-- WORLD BANK STAKEHOLDER DATA
-- ============================================

-- Update World Bank actor with comprehensive information
UPDATE actors SET
  descriptionEn = 'The World Bank Group has been engaged in Yemen since 1969, providing critical development financing and technical assistance. Despite the ongoing conflict since 2015, the World Bank has maintained its commitment through the Emergency Crisis Response Project (ECRP) worth $848.58 million, which has supported livelihood opportunities and basic services. The Bank works in partnership with UNDP to implement large-scale cash-for-work programs. Key focus areas include: preserving basic services, supporting institutional capacity, emergency response, social protection, and economic recovery. The World Bank has provided over $3 billion in total assistance to Yemen since 2010.',
  descriptionAr = 'تعمل مجموعة البنك الدولي في اليمن منذ عام 1969، حيث تقدم تمويلاً إنمائياً حاسماً ومساعدة فنية. وعلى الرغم من الصراع المستمر منذ عام 2015، حافظ البنك الدولي على التزامه من خلال مشروع الاستجابة للأزمات الطارئة (ECRP) بقيمة 848.58 مليون دولار، والذي دعم فرص كسب العيش والخدمات الأساسية. يعمل البنك بالشراكة مع برنامج الأمم المتحدة الإنمائي لتنفيذ برامج النقد مقابل العمل واسعة النطاق. تشمل مجالات التركيز الرئيسية: الحفاظ على الخدمات الأساسية، ودعم القدرات المؤسسية، والاستجابة للطوارئ، والحماية الاجتماعية، والتعافي الاقتصادي. قدم البنك الدولي أكثر من 3 مليارات دولار من المساعدات الإجمالية لليمن منذ عام 2010.',
  role = 'International Financial Institution - Development Financing',
  website = 'https://www.worldbank.org/en/country/yemen',
  contactInfo = JSON_OBJECT(
    'headquarters', 'Washington, D.C., USA',
    'yemenOffice', 'Amman, Jordan (relocated due to conflict)',
    'email', 'yemen@worldbank.org',
    'phone', '+962 6 5509301'
  ),
  fundingProvided = 3000000000.00,
  projects = JSON_ARRAY(
    'Emergency Crisis Response Project (ECRP) - $848.58M',
    'Yemen Emergency Crisis Response Project (YECRP) - $300M with UNDP',
    'Social Fund for Development Phase IV - $60M (2010)',
    'Financial Inclusion and Education Project - $30M (2025)',
    'Infrastructure and Financial Markets Development - $20M (2025)',
    'Public Finance Modernization Project',
    'Economic Recovery Credit Project',
    'Private Sector Growth and Social Protection DPG'
  )
WHERE nameEn = 'World Bank';

-- ============================================
-- IMF STAKEHOLDER DATA
-- ============================================

UPDATE actors SET
  descriptionEn = 'The International Monetary Fund (IMF) has provided critical financial and technical support to Yemen through multiple Extended Credit Facility (ECF) arrangements. The IMF approved a $369.8 million ECF in 2010 and a $552.9 million ECF in 2014, both aimed at supporting economic reforms and fiscal sustainability. The 2014 arrangement was suspended in 2016 due to the conflict. After an 11-year hiatus, the IMF resumed Article IV consultations with Yemen in 2025, focusing on restoring core economic functions, rebuilding statistical capacity, and enhancing coordination with development partners. Key reform areas include: fiscal sustainability, inflation control, governance strengthening, institutional capacity building, and monetary policy coordination.',
  descriptionAr = 'قدم صندوق النقد الدولي دعماً مالياً وفنياً حاسماً لليمن من خلال ترتيبات متعددة لتسهيل الائتمان الممدد (ECF). وافق الصندوق على تسهيل ائتماني ممدد بقيمة 369.8 مليون دولار في عام 2010 وتسهيل آخر بقيمة 552.9 مليون دولار في عام 2014، وكلاهما يهدف إلى دعم الإصلاحات الاقتصادية والاستدامة المالية. تم تعليق ترتيب 2014 في عام 2016 بسبب الصراع. بعد توقف دام 11 عاماً، استأنف الصندوق مشاورات المادة الرابعة مع اليمن في عام 2025، مع التركيز على استعادة الوظائف الاقتصادية الأساسية، وإعادة بناء القدرات الإحصائية، وتعزيز التنسيق مع شركاء التنمية.',
  role = 'International Financial Institution - Monetary Policy and Economic Stability',
  website = 'https://www.imf.org/en/Countries/YEM',
  contactInfo = JSON_OBJECT(
    'headquarters', 'Washington, D.C., USA',
    'middleEastDept', 'Middle East and Central Asia Department',
    'email', 'publicaffairs@imf.org'
  ),
  fundingProvided = 922700000.00,
  projects = JSON_ARRAY(
    'Extended Credit Facility (ECF) - $369.8M (2010-2012)',
    'Extended Credit Facility (ECF) - $552.9M (2014-2016, suspended)',
    'Article IV Consultation Mission (2025)',
    'Technical Assistance on Fiscal Policy',
    'Statistical Capacity Building',
    'Monetary Policy Advisory Services'
  )
WHERE nameEn = 'International Monetary Fund';

-- ============================================
-- UNDP STAKEHOLDER DATA
-- ============================================

UPDATE actors SET
  descriptionEn = 'The United Nations Development Programme (UNDP) has been operating in Yemen for over 55 years, providing critical support for development, emergency response, and resilience building. UNDP implements the $300 million Yemen Emergency Crisis Response Project (YECRP) in partnership with the World Bank, focusing on large-scale cash-for-work programs that have benefited over 400,000 people directly and 2.5 million indirectly. Through the Local-to-Regional Financing Facility (L2RF), UNDP has supported local authorities in implementing 177+ projects, improving services for over 7 million people. Key programs include: Economic Recovery and Development (ERD), livelihoods support, social cohesion initiatives, renewable energy projects, integrated water resources management, and institutional strengthening.',
  descriptionAr = 'يعمل برنامج الأمم المتحدة الإنمائي في اليمن منذ أكثر من 55 عاماً، حيث يقدم دعماً حاسماً للتنمية والاستجابة للطوارئ وبناء القدرة على الصمود. ينفذ البرنامج مشروع الاستجابة للأزمات الطارئة في اليمن (YECRP) بقيمة 300 مليون دولار بالشراكة مع البنك الدولي، مع التركيز على برامج النقد مقابل العمل واسعة النطاق التي استفاد منها أكثر من 400,000 شخص بشكل مباشر و2.5 مليون بشكل غير مباشر. من خلال مرفق التمويل من المحلي إلى الإقليمي (L2RF)، دعم البرنامج السلطات المحلية في تنفيذ أكثر من 177 مشروعاً، مما أدى إلى تحسين الخدمات لأكثر من 7 ملايين شخص.',
  role = 'UN Development Agency - Emergency Response and Development',
  website = 'https://www.undp.org/yemen',
  contactInfo = JSON_OBJECT(
    'headquarters', 'New York, USA',
    'yemenOffice', 'Sana\'a, Yemen',
    'email', 'registry.ye@undp.org',
    'phone', '+967 1 448 605'
  ),
  fundingProvided = 500000000.00,
  projects = JSON_ARRAY(
    'Yemen Emergency Crisis Response Project (YECRP) - $300M',
    'Economic Recovery and Development (ERD) Programme',
    'Local-to-Regional Financing Facility (L2RF) - 177+ projects',
    'Empowering Yemeni Women',
    'Catalysing Renewable Energy',
    'Integrated Water Resources Management',
    'COVID-19 Emergency Health Response - $685K with Al Kuraimi Bank',
    'Institutional and Economic Resilience Project'
  )
WHERE nameEn = 'United Nations Development Programme';

-- ============================================
-- SAUDI ARABIA STAKEHOLDER DATA
-- ============================================

UPDATE actors SET
  descriptionEn = 'The Kingdom of Saudi Arabia has been the largest bilateral donor to Yemen, providing over $3.15 billion in direct financial support since 2018. Saudi Arabia deposited $2 billion in Yemen\'s Central Bank in Aden in March 2018 to stabilize the currency and support the economy, with the deposit duration extended in May 2022. Additional support includes: $200 million grant (October 2018), $500 million economic support (December 2024), $368 million new support package (September 2025), and $90 million additional aid (November 2025). The Saudi Program for Development and Reconstruction of Yemen (SDRPY) has implemented hundreds of projects across health, education, water, energy, and infrastructure sectors. Saudi Arabia also leads the Arab Coalition that intervened militarily in Yemen in March 2015.',
  descriptionAr = 'تعد المملكة العربية السعودية أكبر مانح ثنائي لليمن، حيث قدمت أكثر من 3.15 مليار دولار من الدعم المالي المباشر منذ عام 2018. أودعت السعودية ملياري دولار في البنك المركزي اليمني في عدن في مارس 2018 لتحقيق استقرار العملة ودعم الاقتصاد، مع تمديد مدة الوديعة في مايو 2022. يشمل الدعم الإضافي: منحة بقيمة 200 مليون دولار (أكتوبر 2018)، ودعم اقتصادي بقيمة 500 مليون دولار (ديسمبر 2024)، وحزمة دعم جديدة بقيمة 368 مليون دولار (سبتمبر 2025)، ومساعدات إضافية بقيمة 90 مليون دولار (نوفمبر 2025). نفذ البرنامج السعودي لتنمية وإعمار اليمن (SDRPY) مئات المشاريع في قطاعات الصحة والتعليم والمياه والطاقة والبنية التحتية.',
  role = 'Bilateral Donor and Coalition Leader',
  website = 'https://www.ksrelief.org',
  contactInfo = JSON_OBJECT(
    'headquarters', 'Riyadh, Saudi Arabia',
    'sdrpy', 'Saudi Program for Development and Reconstruction of Yemen',
    'ksrelief', 'King Salman Humanitarian Aid and Relief Centre'
  ),
  fundingProvided = 3158000000.00,
  projects = JSON_ARRAY(
    'Central Bank Deposit - $2B (March 2018, extended May 2022)',
    'Economic Grant - $200M (October 2018)',
    'Budget Support - $500M (December 2024)',
    'Economic Support Package - $368M (September 2025)',
    'Additional Aid - $90M (November 2025)',
    'SDRPY Infrastructure Projects',
    'Health Sector Support',
    'Education Sector Projects',
    'Water and Energy Infrastructure',
    'Petroleum Derivatives Subsidies'
  )
WHERE nameEn = 'Saudi Arabia';

-- ============================================
-- HOUTHIS (ANSAR ALLAH) STAKEHOLDER DATA
-- ============================================

UPDATE actors SET
  descriptionEn = 'Ansar Allah (Houthis) is a Zaidi Shia political and military movement that has controlled northwestern Yemen, including the capital Sana\'a, since September 2014. The movement controls the Central Bank of Yemen in Sana\'a and implements independent monetary policies, including banning the circulation of new currency printed by the Aden-based central bank (December 2019) and issuing new coins and banknotes (2025). The Houthi-controlled areas maintain a relatively stable exchange rate of approximately 530 YER/USD compared to over 1,700 YER/USD in government-controlled areas. Ansar Allah controls major revenue sources including customs at Sana\'a airport and Hodeidah port, taxation, and trade regulation. Since November 2023, the Houthis have conducted attacks on commercial shipping in the Red Sea in solidarity with Gaza, significantly disrupting international maritime trade.',
  descriptionAr = 'أنصار الله (الحوثيون) هي حركة سياسية وعسكرية زيدية شيعية تسيطر على شمال غرب اليمن، بما في ذلك العاصمة صنعاء، منذ سبتمبر 2014. تسيطر الحركة على البنك المركزي اليمني في صنعاء وتنفذ سياسات نقدية مستقلة، بما في ذلك حظر تداول العملة الجديدة المطبوعة من قبل البنك المركزي في عدن (ديسمبر 2019) وإصدار عملات معدنية وورقية جديدة (2025). تحافظ المناطق الخاضعة لسيطرة الحوثيين على سعر صرف مستقر نسبياً يبلغ حوالي 530 ريال يمني مقابل الدولار مقارنة بأكثر من 1,700 ريال يمني في المناطق الخاضعة لسيطرة الحكومة. يسيطر أنصار الله على مصادر الإيرادات الرئيسية بما في ذلك الجمارك في مطار صنعاء وميناء الحديدة والضرائب وتنظيم التجارة.',
  role = 'De Facto Authority in Northwestern Yemen',
  website = 'https://www.ansarollah.com',
  contactInfo = JSON_OBJECT(
    'control', 'Sana\'a and Northwestern Yemen',
    'population', 'Approximately 70% of Yemen\'s population',
    'institutions', 'Central Bank of Yemen (Sana\'a branch), Supreme Political Council'
  ),
  fundingProvided = 0.00,
  projects = JSON_ARRAY(
    'Central Bank of Yemen (Sana\'a) Operations',
    'Currency Ban Implementation (December 2019)',
    'New Currency Issuance (2025)',
    'Customs Revenue Collection (Hodeidah Port, Sana\'a Airport)',
    'Taxation System',
    'Trade Regulation',
    'Exchange Rate Stabilization',
    'Red Sea Maritime Operations (2023-2025)'
  )
WHERE nameEn = 'Houthis (Ansar Allah)';

-- ============================================
-- ADD MORE COMPREHENSIVE EVENTS
-- ============================================

-- World Bank Events
INSERT INTO events (date, titleEn, titleAr, descriptionEn, descriptionAr, category, severity, actors, impacts, sources, photoUrl) VALUES
('2010-03-30', 'World Bank Approves $60M for Yemen Social Fund', 'البنك الدولي يوافق على 60 مليون دولار لصندوق التنمية الاجتماعية', 'The World Bank Board of Directors approved the Yemen Social Fund for Development Phase IV project for $60 million to support community-driven development and social protection programs.', 'وافق مجلس إدارة البنك الدولي على مشروع صندوق التنمية الاجتماعية في اليمن المرحلة الرابعة بقيمة 60 مليون دولار لدعم التنمية المجتمعية وبرامج الحماية الاجتماعية.', 'international', 'medium', JSON_ARRAY('World Bank', 'Yemen Government'), JSON_ARRAY('Social protection strengthened', 'Community development supported'), JSON_ARRAY('https://reliefweb.int/report/yemen/world-bank-grants-us60-million-social-fund-development-yemen'), NULL),

('2010-12-14', 'World Bank Grant for Private Sector Growth', 'منحة البنك الدولي لنمو القطاع الخاص', 'World Bank approved a Development Policy Grant for Yemen to foster private sector growth in the non-hydrocarbon economy and strengthen social protection systems.', 'وافق البنك الدولي على منحة سياسة التنمية لليمن لتعزيز نمو القطاع الخاص في الاقتصاد غير النفطي وتعزيز أنظمة الحماية الاجتماعية.', 'economic', 'medium', JSON_ARRAY('World Bank', 'Yemen Government'), JSON_ARRAY('Private sector support', 'Economic diversification'), JSON_ARRAY('https://www.worldbank.org/en/news/press-release/2010/12/14/yemen-world-bank-grant-to-support-private-sector-growth-and-social-protection'), NULL),

('2018-03-15', 'Saudi Arabia Deposits $2B in Yemen Central Bank', 'السعودية تودع ملياري دولار في البنك المركزي اليمني', 'Saudi Arabia signed an agreement to deposit $2 billion in the Central Bank of Yemen in Aden to stabilize the Yemeni riyal and support the economy. This was the largest single financial intervention to support Yemen\'s currency.', 'وقعت السعودية اتفاقية لإيداع ملياري دولار في البنك المركزي اليمني في عدن لتحقيق استقرار الريال اليمني ودعم الاقتصاد. كان هذا أكبر تدخل مالي منفرد لدعم عملة اليمن.', 'economic', 'critical', JSON_ARRAY('Saudi Arabia', 'Central Bank of Yemen - Aden'), JSON_ARRAY('Currency stabilization', 'Exchange rate support', 'Import capacity restored'), JSON_ARRAY('https://www.spa.gov.sa/w643033', 'https://www.mof.gov.sa/en/MediaCenter/news/Pages/news_16032018.aspx'), NULL),

('2018-10-03', 'Saudi Arabia Grants $200M to Yemen', 'السعودية تمنح 200 مليون دولار لليمن', 'Saudi Arabia deposited a $200 million grant in the Central Bank of Yemen to support the government budget and provide economic relief.', 'أودعت السعودية منحة بقيمة 200 مليون دولار في البنك المركزي اليمني لدعم ميزانية الحكومة وتوفير الإغاثة الاقتصادية.', 'economic', 'high', JSON_ARRAY('Saudi Arabia', 'Yemen Government'), JSON_ARRAY('Budget support', 'Economic relief'), JSON_ARRAY('https://www.spa.gov.sa/w760040'), NULL),

('2022-05-16', 'Saudi Extends $2B Deposit at Yemen Central Bank', 'السعودية تمدد وديعة ملياري دولار', 'Saudi Arabia and Yemen signed an agreement to extend the duration of the Kingdom\'s 2018 $2 billion deposit at Yemen\'s Central Bank, providing continued currency support.', 'وقعت السعودية واليمن اتفاقية لتمديد مدة وديعة المملكة البالغة ملياري دولار لعام 2018 في البنك المركزي اليمني، مما يوفر دعماً مستمراً للعملة.', 'economic', 'high', JSON_ARRAY('Saudi Arabia', 'Central Bank of Yemen - Aden'), JSON_ARRAY('Currency stability maintained', 'Confidence restored'), JSON_ARRAY('https://www.reuters.com/business/finance/saudi-extends-2018-deposit-yemen-central-bank-spa-yemen-cenbank-2022-05-16/'), NULL),

('2024-12-27', 'Saudi Arabia Provides $500M Economic Support', 'السعودية تقدم 500 مليون دولار دعم اقتصادي', 'Saudi Arabia announced new economic support worth $500 million to strengthen the Yemeni government budget and bolster the Central Bank of Yemen.', 'أعلنت السعودية عن دعم اقتصادي جديد بقيمة 500 مليون دولار لتعزيز ميزانية الحكومة اليمنية ودعم البنك المركزي اليمني.', 'economic', 'critical', JSON_ARRAY('Saudi Arabia', 'Yemen Government', 'Central Bank of Yemen - Aden'), JSON_ARRAY('Budget strengthened', 'Currency supported', 'Import capacity increased'), JSON_ARRAY('https://english.aawsat.com/business/5095798-saudi-arabia-provides-500-million-financial-support-yemen'), NULL),

('2025-06-17', 'World Bank Approves $30M for Financial Inclusion', 'البنك الدولي يوافق على 30 مليون دولار للشمول المالي', 'World Bank approved two grants totaling $30 million: $20 million for Infrastructure and Financial Markets Inclusion Project implemented by UNDP, and $10 million for education support.', 'وافق البنك الدولي على منحتين بقيمة 30 مليون دولار: 20 مليون دولار لمشروع تطوير البنية التحتية والشمول للأسواق المالية ينفذه برنامج الأمم المتحدة الإنمائي، و10 ملايين دولار لدعم التعليم.', 'economic', 'high', JSON_ARRAY('World Bank', 'UNDP', 'Yemen Government'), JSON_ARRAY('Financial inclusion improved', 'Payment systems developed', 'Education supported'), JSON_ARRAY('https://www.albankaldawli.org/ar/news/press-release/2025/06/17/world-bank-approves-us-30-million-to-support-financial-inclusion-and-education-in-yemen'), NULL),

('2025-09-20', 'Saudi Arabia Announces $368M Support Package', 'السعودية تعلن حزمة دعم بقيمة 368 مليون دولار', 'Saudi Arabia announced economic support worth SR1.38 billion ($368 million) through the Saudi Program for Development and Reconstruction of Yemen, including budget support, petroleum subsidies, and operating expenses.', 'أعلنت السعودية عن دعم اقتصادي بقيمة 1.38 مليار ريال (368 مليون دولار) من خلال البرنامج السعودي لتنمية وإعمار اليمن، بما في ذلك دعم الميزانية ودعم المشتقات النفطية ونفقات التشغيل.', 'economic', 'critical', JSON_ARRAY('Saudi Arabia', 'Yemen Government'), JSON_ARRAY('Budget support', 'Fuel subsidies', 'Government operations funded'), JSON_ARRAY('https://www.arabnews.com/node/2616115/saudi-arabia', 'https://www.reuters.com/world/middle-east/saudi-arabia-support-yemeni-government-with-around-368-million-source-says-2025-09-20/'), NULL),

('2025-10-09', 'IMF Resumes Article IV Consultation After 11 Years', 'صندوق النقد يستأنف مشاورات المادة الرابعة بعد 11 عاماً', 'IMF concluded its first Article IV consultation mission to Yemen since 2014, marking the resumption of formal economic surveillance after an 11-year hiatus caused by the conflict. The mission focused on fiscal sustainability, inflation control, and institutional strengthening.', 'اختتم صندوق النقد الدولي أول بعثة لمشاورات المادة الرابعة إلى اليمن منذ عام 2014، مما يمثل استئناف الرقابة الاقتصادية الرسمية بعد توقف دام 11 عاماً بسبب الصراع. ركزت البعثة على الاستدامة المالية والسيطرة على التضخم وتعزيز المؤسسات.', 'international', 'critical', JSON_ARRAY('International Monetary Fund', 'Yemen Government', 'Central Bank of Yemen - Aden'), JSON_ARRAY('Economic surveillance resumed', 'Policy dialogue restored', 'Reform roadmap developed'), JSON_ARRAY('https://www.imf.org/en/news/articles/2025/10/09/imf-cs-yemen-2025-imf-article-iv-mission'), NULL),

('2025-11-16', 'Saudi Arabia Provides Additional $90M Aid', 'السعودية تقدم مساعدات إضافية بقيمة 90 مليون دولار', 'Saudi Arabia announced a new aid package worth $90 million to support Yemen\'s struggling economy and humanitarian response, including energy projects covering 4 cities.', 'أعلنت السعودية عن حزمة مساعدات جديدة بقيمة 90 مليون دولار لدعم اقتصاد اليمن المتعثر والاستجابة الإنسانية، بما في ذلك مشاريع الطاقة التي تغطي 4 مدن.', 'humanitarian', 'high', JSON_ARRAY('Saudi Arabia', 'Yemen Government'), JSON_ARRAY('Economic support', 'Energy projects', 'Humanitarian relief'), JSON_ARRAY('https://www.yemenonline.info/Economy/10763', 'https://www.reuters.com/ar/business/PZVHYNBJIZM37LHF72O53UWYFA-2025-11-16/'), NULL),

('2025-11-17', 'World Bank: Economic Hardship Deepens in Yemen', 'البنك الدولي: تعمق المصاعب الاقتصادية في اليمن', 'World Bank report highlighted deepening economic hardship in Yemen, with banks relocating from Sana\'a to Aden to avoid sanctions and regulatory constraints, further fragmenting the financial sector.', 'أبرز تقرير البنك الدولي تعمق المصاعب الاقتصادية في اليمن، حيث تنقل البنوك من صنعاء إلى عدن لتجنب العقوبات والقيود التنظيمية، مما يزيد من تفتت القطاع المالي.', 'economic', 'critical', JSON_ARRAY('World Bank'), JSON_ARRAY('Banking sector fragmentation', 'Financial instability', 'Economic hardship documented'), JSON_ARRAY('https://www.worldbank.org/en/news/press-release/2025/11/17/economic-hardship-deepens-in-yemen'), NULL);

-- Commit the changes
COMMIT;
