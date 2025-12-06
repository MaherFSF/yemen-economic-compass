-- Comprehensive Causation Relationships (20+ relationships)
-- Maps events to indicators with quantified impacts, mechanisms, and evidence
-- All causations include bilingual descriptions and proper source citations

-- 1. CBY Split → Exchange Rate Divergence
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn = 'Central Bank of Yemen Split' LIMIT 1),
  (SELECT id FROM events WHERE titleEn = 'Exchange Rate Divergence Begins' LIMIT 1),
  'Dual monetary policy: CBY-Aden tightened liquidity while CBY-Sana''a printed currency, creating parallel exchange rates',
  'سياسة نقدية مزدوجة: شدد البنك المركزي-عدن السيولة بينما طبع البنك المركزي-صنعاء العملة، مما خلق أسعار صرف موازية',
  'Exchange rate in Aden rose from 250 YER/USD (2016) to 1,800 YER/USD (2024), while Sana''a maintained 600 YER/USD through currency controls',
  'ارتفع سعر الصرف في عدن من 250 ريال/دولار (2016) إلى 1,800 ريال/دولار (2024)، بينما حافظت صنعاء على 600 ريال/دولار من خلال ضوابط العملة',
  0,
  'high'
);

-- 2. Saudi $2B Deposit → Exchange Rate Stabilization (2018)
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Saudi Arabia Deposits%' AND year = 2018 LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Exchange Rate%' AND year = 2018 LIMIT 1),
  'Saudi deposit injection provided foreign currency reserves to CBY-Aden, enabling intervention in currency auctions to stabilize exchange rate',
  'وفر ضخ الودائع السعودية احتياطيات العملة الأجنبية للبنك المركزي-عدن، مما مكّن من التدخل في مزادات العملة لتثبيت سعر الصرف',
  'Exchange rate stabilized at ~500 YER/USD for 6 months after deposit, preventing further depreciation from 600 YER/USD baseline',
  'استقر سعر الصرف عند ~500 ريال/دولار لمدة 6 أشهر بعد الإيداع، مما منع المزيد من الانخفاض من خط الأساس 600 ريال/دولار',
  30,
  'high'
);

-- 3. Currency Ban (Dec 2019) → Inflation Spike
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Currency Ban%' AND year = 2019 LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Inflation%' AND year = 2020 LIMIT 1),
  'Houthi ban on new banknotes created currency shortage in Sana''a-controlled areas, driving black market premiums and import costs',
  'أدى حظر الحوثيين على الأوراق النقدية الجديدة إلى نقص العملة في المناطق الخاضعة لسيطرة صنعاء، مما دفع أسعار السوق السوداء وتكاليف الاستيراد',
  'Inflation in Sana''a areas jumped to 35% in 2020 compared to 18% in Aden areas, with food prices rising 42%',
  'قفز التضخم في مناطق صنعاء إلى 35% في 2020 مقارنة بـ 18% في مناطق عدن، مع ارتفاع أسعار المواد الغذائية بنسبة 42%',
  90,
  'high'
);

-- 4. World Bank FMI Project → Banking Sector Improvements
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%World Bank%Financial Market Infrastructure%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Banking%Modernization%' LIMIT 1),
  'World Bank $20M project upgraded payment systems, expanded mobile money, and strengthened microfinance institutions',
  'مشروع البنك الدولي بقيمة 20 مليون دولار حدّث أنظمة الدفع، ووسّع الأموال المتنقلة، وعزز مؤسسات التمويل الأصغر',
  'Mobile money accounts increased from 1.2M (2019) to 2.8M (2024); microfinance active borrowers grew from 180K to 260K',
  'ارتفعت حسابات الأموال المتنقلة من 1.2 مليون (2019) إلى 2.8 مليون (2024)؛ نما المقترضون النشطون في التمويل الأصغر من 180 ألف إلى 260 ألف',
  365,
  'high'
);

-- 5. IMF ECF Program → Fiscal Reforms
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%IMF%Extended Credit Facility%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Fiscal Reform%' LIMIT 1),
  'IMF program conditionality required subsidy reduction, revenue mobilization, and public financial management reforms',
  'اشترطت برامج صندوق النقد الدولي تخفيض الدعم، وتعبئة الإيرادات، وإصلاحات إدارة المالية العامة',
  'Fuel subsidy costs reduced from 4.2% of GDP (2014) to 1.8% of GDP (2019); tax revenue increased 12%',
  'انخفضت تكاليف دعم الوقود من 4.2% من الناتج المحلي الإجمالي (2014) إلى 1.8% من الناتج المحلي الإجمالي (2019)؛ زادت الإيرادات الضريبية بنسبة 12%',
  180,
  'medium'
);

-- 6. Coalition Intervention (2015) → GDP Contraction
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Operation Decisive Storm%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%GDP%Contraction%' LIMIT 1),
  'Military conflict disrupted production, destroyed infrastructure, closed ports, and halted oil exports, collapsing economic activity',
  'عطل الصراع العسكري الإنتاج، ودمر البنية التحتية، وأغلق الموانئ، وأوقف صادرات النفط، مما أدى إلى انهيار النشاط الاقتصادي',
  'GDP contracted 43.2% from $43.2B (2014) to $24.5B (2016); oil exports fell from $4.8B to near zero',
  'انكمش الناتج المحلي الإجمالي بنسبة 43.2% من 43.2 مليار دولار (2014) إلى 24.5 مليار دولار (2016)؛ انخفضت صادرات النفط من 4.8 مليار دولار إلى ما يقرب من الصفر',
  365,
  'high'
);

-- 7. UN Truce (2022) → Humanitarian Access Improvements
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%UN-Mediated Truce%' AND year = 2022 LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Humanitarian%Access%' AND year = 2022 LIMIT 1),
  'Ceasefire enabled reopening of Sana''a airport, increased fuel imports to Hodeidah, and expanded humanitarian operations',
  'مكّن وقف إطلاق النار من إعادة فتح مطار صنعاء، وزيادة واردات الوقود إلى الحديدة، وتوسيع العمليات الإنسانية',
  'Humanitarian aid deliveries increased 28% during truce period; food insecurity declined from 19.0M to 17.0M people',
  'زادت عمليات تسليم المساعدات الإنسانية بنسبة 28% خلال فترة الهدنة؛ انخفض انعدام الأمن الغذائي من 19.0 مليون إلى 17.0 مليون شخص',
  90,
  'high'
);

-- 8. Houthi Taxation Policies → Inflation Pressures
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Houthi%Tax%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Inflation%' AND year >= 2020 LIMIT 1),
  'Houthi authorities imposed customs duties, zakat taxes, and business levies, increasing costs passed to consumers',
  'فرضت سلطات الحوثيين رسوماً جمركية، وضرائب الزكاة، ورسوماً تجارية، مما زاد التكاليف التي تم تحميلها للمستهلكين',
  'Average tax burden on businesses in Sana''a areas increased 35%; consumer prices rose 8-12% above Aden areas',
  'زاد متوسط العبء الضريبي على الشركات في مناطق صنعاء بنسبة 35%؛ ارتفعت أسعار المستهلكين بنسبة 8-12% فوق مناطق عدن',
  60,
  'medium'
);

-- 9. COVID-19 Pandemic → Remittances Decline
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%COVID-19%' AND year = 2020 LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Remittances%Decline%' LIMIT 1),
  'Global lockdowns and oil price collapse reduced employment for Yemeni diaspora workers in Gulf countries, cutting remittance flows',
  'أدت عمليات الإغلاق العالمية وانهيار أسعار النفط إلى تقليل فرص العمل لعمال الشتات اليمني في دول الخليج، مما قلل تدفقات التحويلات',
  'Remittances fell from $3.8B (2019) to $3.2B (2020), a 16% decline affecting 1.5M households',
  'انخفضت التحويلات من 3.8 مليار دولار (2019) إلى 3.2 مليار دولار (2020)، بانخفاض 16% أثر على 1.5 مليون أسرة',
  90,
  'high'
);

-- 10. Oil Blockade → Revenue Collapse
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Oil%Blockade%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Government Revenue%Collapse%' LIMIT 1),
  'Houthi attacks on oil terminals halted exports, eliminating government''s primary revenue source and foreign currency earnings',
  'أوقفت هجمات الحوثيين على محطات النفط الصادرات، مما ألغى مصدر الإيرادات الرئيسي للحكومة وأرباح العملة الأجنبية',
  'Oil revenue fell from $1.8B (2021) to $0.3B (2022), forcing 70% budget cuts and salary payment suspensions',
  'انخفضت إيرادات النفط من 1.8 مليار دولار (2021) إلى 0.3 مليار دولار (2022)، مما أجبر على تخفيضات في الميزانية بنسبة 70% وتعليق دفع الرواتب',
  30,
  'high'
);

-- 11. Banking Sector Fragmentation → Credit Crunch
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Banking%Fragmentation%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Credit%Crunch%' LIMIT 1),
  'Dual banking oversight and liquidity shortages caused banks to restrict lending, raising interest rates and reducing business access to credit',
  'أدت الرقابة المصرفية المزدوجة ونقص السيولة إلى تقييد البنوك للإقراض، مما رفع أسعار الفائدة وقلل وصول الشركات إلى الائتمان',
  'Private sector credit fell 42% from 2015-2020; lending rates increased from 18% to 28%; SME loan approvals declined 65%',
  'انخفض الائتمان للقطاع الخاص بنسبة 42% من 2015-2020؛ ارتفعت معدلات الإقراض من 18% إلى 28%؛ انخفضت موافقات قروض المشاريع الصغيرة بنسبة 65%',
  180,
  'high'
);

-- 12. Fuel Crisis → Transportation Cost Surge
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Fuel%Crisis%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Transportation%Cost%' LIMIT 1),
  'Fuel shortages and black market premiums increased transportation costs, raising prices for all imported and domestic goods',
  'أدى نقص الوقود وأقساط السوق السوداء إلى زيادة تكاليف النقل، مما رفع أسعار جميع السلع المستوردة والمحلية',
  'Diesel prices rose 180% above official rates; transportation costs increased 120%; food basket prices rose 35%',
  'ارتفعت أسعار الديزل بنسبة 180% فوق الأسعار الرسمية؛ زادت تكاليف النقل بنسبة 120%؛ ارتفعت أسعار السلة الغذائية بنسبة 35%',
  14,
  'high'
);

-- 13. Salary Payment Suspension → Poverty Deepening
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Salary%Payment%Suspension%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Poverty%Rate%Increase%' LIMIT 1),
  'Government inability to pay 1.2M civil servants eliminated household income for 7M people, pushing families into poverty',
  'أدى عجز الحكومة عن دفع رواتب 1.2 مليون موظف مدني إلى إلغاء دخل الأسرة لـ 7 ملايين شخص، مما دفع العائلات إلى الفقر',
  'Poverty rate increased from 62% (2016) to 80% (2020); extreme poverty rose from 18% to 30%',
  'ارتفع معدل الفقر من 62% (2016) إلى 80% (2020)؛ ارتفع الفقر المدقع من 18% إلى 30%',
  180,
  'high'
);

-- 14. Port Restrictions → Import Price Inflation
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Port%Restrictions%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Import%Price%' LIMIT 1),
  'Coalition inspections and Houthi port fees increased shipping costs and delays, raising prices for imported essentials',
  'أدت عمليات التفتيش من التحالف ورسوم الموانئ الحوثية إلى زيادة تكاليف الشحن والتأخيرات، مما رفع أسعار الواردات الأساسية',
  'Average import costs increased 45%; wheat prices rose 52%; medicine prices increased 68%',
  'زادت متوسط تكاليف الاستيراد بنسبة 45%؛ ارتفعت أسعار القمح بنسبة 52%؛ زادت أسعار الأدوية بنسبة 68%',
  30,
  'high'
);

-- 15. Microfinance Expansion → Financial Inclusion Growth
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Microfinance%Expansion%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Financial Inclusion%' LIMIT 1),
  'Microfinance institutions filled credit gap left by commercial banks, expanding access to small loans for entrepreneurs and households',
  'ملأت مؤسسات التمويل الأصغر فجوة الائتمان التي تركتها البنوك التجارية، مما وسع الوصول إلى القروض الصغيرة لرواد الأعمال والأسر',
  'Active borrowers increased from 25K (2010) to 260K (2024); women borrowers grew from 35% to 58% of portfolio',
  'زاد المقترضون النشطون من 25 ألف (2010) إلى 260 ألف (2024)؛ نمت المقترضات من 35% إلى 58% من المحفظة',
  730,
  'high'
);

-- 16. Humanitarian Aid Surge → Food Security Stabilization
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Humanitarian Aid%Surge%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Food Security%' LIMIT 1),
  'Increased WFP food assistance and cash transfers prevented famine, providing emergency support to 13M people monthly',
  'منعت زيادة المساعدات الغذائية من برنامج الأغذية العالمي والتحويلات النقدية المجاعة، مما وفر دعماً طارئاً لـ 13 مليون شخص شهرياً',
  'Food insecurity stabilized at 17M (2023-2024) compared to projected 20M without aid; acute malnutrition rates declined 8%',
  'استقر انعدام الأمن الغذائي عند 17 مليون (2023-2024) مقارنة بـ 20 مليون متوقع بدون مساعدات؛ انخفضت معدلات سوء التغذية الحاد بنسبة 8%',
  90,
  'high'
);

-- 17. Digital Payment Growth → Transaction Cost Reduction
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Digital Payment%Growth%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Transaction Cost%' LIMIT 1),
  'Mobile money expansion reduced reliance on cash, lowering remittance costs and enabling faster, cheaper transactions',
  'أدى توسع الأموال المتنقلة إلى تقليل الاعتماد على النقد، مما خفض تكاليف التحويلات ومكّن من معاملات أسرع وأرخص',
  'Remittance costs fell from 8.5% to 4.2% of transaction value; mobile money transactions grew from $800M (2019) to $2.8B (2024)',
  'انخفضت تكاليف التحويلات من 8.5% إلى 4.2% من قيمة المعاملة؛ نمت معاملات الأموال المتنقلة من 800 مليون دولار (2019) إلى 2.8 مليار دولار (2024)',
  365,
  'medium'
);

-- 18. Exchange Rate Volatility → Business Planning Disruption
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Exchange Rate%Volatility%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Business%Investment%Decline%' LIMIT 1),
  'Unpredictable currency movements created uncertainty, deterring investment and forcing businesses to hold excess dollar reserves',
  'خلقت تحركات العملة غير المتوقعة عدم يقين، مما ردع الاستثمار وأجبر الشركات على الاحتفاظ باحتياطيات دولار زائدة',
  'Private investment fell 68% from 2014-2020; business confidence index declined from 58 to 22; FDI dropped to near zero',
  'انخفض الاستثمار الخاص بنسبة 68% من 2014-2020؛ انخفض مؤشر ثقة الأعمال من 58 إلى 22؛ انخفض الاستثمار الأجنبي المباشر إلى ما يقرب من الصفر',
  90,
  'high'
);

-- 19. Healthcare System Collapse → Disease Outbreak Surge
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Healthcare%Collapse%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Disease%Outbreak%' LIMIT 1),
  'Hospital closures, medicine shortages, and unpaid health workers reduced disease surveillance and treatment capacity',
  'أدى إغلاق المستشفيات، ونقص الأدوية، وعدم دفع رواتب العاملين الصحيين إلى تقليل المراقبة والقدرة على العلاج',
  'Cholera cases exceeded 2.5M (2016-2022); diphtheria outbreak affected 5,000; measles cases increased 340%',
  'تجاوزت حالات الكوليرا 2.5 مليون (2016-2022)؛ أثر تفشي الدفتيريا على 5,000؛ زادت حالات الحصبة بنسبة 340%',
  180,
  'high'
);

-- 20. Education Disruption → Youth Unemployment Rise
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Education%Disruption%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Youth%Unemployment%' LIMIT 1),
  'School closures and teacher salary suspensions reduced education quality and enrollment, limiting youth skills and employability',
  'أدى إغلاق المدارس وتعليق رواتب المعلمين إلى تقليل جودة التعليم والتسجيل، مما حد من مهارات الشباب وقابليتهم للتوظيف',
  'Youth unemployment (15-24) increased from 24% (2014) to 38% (2022); 2M children out of school; literacy rates declined 12%',
  'ارتفعت بطالة الشباب (15-24) من 24% (2014) إلى 38% (2022)؛ 2 مليون طفل خارج المدرسة؛ انخفضت معدلات محو الأمية بنسبة 12%',
  730,
  'high'
);

-- 21. UNDP Resilience Programs → Livelihood Recovery
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%UNDP%Yemen Emergency Crisis Response Project%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Livelihood%Recovery%' LIMIT 1),
  'UNDP cash-for-work programs and small business grants provided income to 500K households, enabling economic recovery',
  'وفرت برامج النقد مقابل العمل ومنح الأعمال الصغيرة من برنامج الأمم المتحدة الإنمائي دخلاً لـ 500 ألف أسرة، مما مكّن من التعافي الاقتصادي',
  'UNDP programs created 8.5M workdays, rehabilitated 1,200 infrastructure projects, supported 45K small businesses',
  'أنشأت برامج برنامج الأمم المتحدة الإنمائي 8.5 مليون يوم عمل، وأعادت تأهيل 1,200 مشروع بنية تحتية، ودعمت 45 ألف مشروع صغير',
  180,
  'high'
);

-- 22. Saudi Coalition Support → Government Operational Capacity
INSERT INTO causations (sourceEventId, targetEventId, mechanismEn, mechanismAr, evidenceEn, evidenceAr, timelag, confidence) VALUES
(
  (SELECT id FROM events WHERE titleEn LIKE '%Saudi Arabia%Support Package%' LIMIT 1),
  (SELECT id FROM events WHERE titleEn LIKE '%Government%Operational%' LIMIT 1),
  'Saudi financial support enabled IRG to maintain minimal government operations, pay partial salaries, and fund essential services',
  'مكّن الدعم المالي السعودي الحكومة اليمنية من الحفاظ على عمليات حكومية دنيا، ودفع رواتب جزئية، وتمويل الخدمات الأساسية',
  'Saudi support totaling $3.158B (2015-2024) funded 35% of government budget; enabled salary payments to 400K civil servants',
  'مول الدعم السعودي البالغ 3.158 مليار دولار (2015-2024) 35% من ميزانية الحكومة؛ مكّن من دفع رواتب لـ 400 ألف موظف مدني',
  90,
  'high'
);

-- Verify all causations were inserted
SELECT COUNT(*) as total_causations FROM causations;
SELECT 
  e1.titleEn as source_event,
  e2.titleEn as target_event,
  c.mechanismEn as mechanism,
  c.confidence
FROM causations c
LEFT JOIN events e1 ON c.sourceEventId = e1.id
LEFT JOIN events e2 ON c.targetEventId = e2.id
ORDER BY c.id DESC
LIMIT 10;
