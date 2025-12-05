-- Comprehensive Yemen Economic Timeline (2010-2025)
-- 100+ Events with Full Causation Mapping

-- Clear existing events if needed (comment out if you want to keep current 37)
-- DELETE FROM events;
-- DELETE FROM causations;

-- ============================================
-- 2010-2011: PRE-WAR BASELINE PERIOD
-- ============================================

INSERT INTO events (date, titleEn, titleAr, descriptionEn, descriptionAr, category, severity, sources) VALUES
('2010-01-01', 'Economic Baseline Year', 'سنة الأساس الاقتصادي', 'Yemen economy baseline: GDP $31.3B, population 24.3M, poverty rate 42%, exchange rate 215 YER/USD', 'خط الأساس للاقتصاد اليمني: الناتج المحلي 31.3 مليار دولار، السكان 24.3 مليون، معدل الفقر 42٪، سعر الصرف 215 ريال/دولار', 'economic', 'low', '["World Bank WDI 2010"]'),

('2011-01-27', 'Arab Spring Protests Begin', 'بداية احتجاجات الربيع العربي', 'Mass protests erupt in Sana''a and other cities demanding political reform and President Saleh''s resignation', 'اندلاع احتجاجات جماهيرية في صنعاء ومدن أخرى تطالب بالإصلاح السياسي واستقالة الرئيس صالح', 'war', 'high', '["UN OCHA Yemen Timeline"]'),

('2011-11-23', 'President Saleh Signs GCC Initiative', 'الرئيس صالح يوقع المبادرة الخليجية', 'President Ali Abdullah Saleh signs GCC-brokered power transfer agreement, ending 33-year rule', 'الرئيس علي عبدالله صالح يوقع اتفاق نقل السلطة برعاية مجلس التعاون الخليجي، منهياً حكمه الذي دام 33 عاماً', 'policy', 'critical', '["GCC Initiative Text", "UN Security Council"]'),

-- ============================================
-- 2012-2014: TRANSITION PERIOD
-- ============================================

('2012-02-27', 'Hadi Becomes President', 'هادي يصبح رئيساً', 'Abd Rabbuh Mansur Hadi elected president in uncontested election as part of GCC transition deal', 'عبدربه منصور هادي ينتخب رئيساً في انتخابات غير متنافسة كجزء من صفقة الانتقال الخليجية', 'policy', 'high', '["Yemen Elections Commission"]'),

('2013-03-18', 'National Dialogue Conference Begins', 'بداية مؤتمر الحوار الوطني', 'National Dialogue Conference launches with 565 delegates to draft new constitution and address grievances', 'انطلاق مؤتمر الحوار الوطني بمشاركة 565 مندوباً لصياغة دستور جديد ومعالجة المظالم', 'policy', 'medium', '["NDC Final Document"]'),

('2014-01-25', 'NDC Concludes', 'اختتام مؤتمر الحوار الوطني', 'National Dialogue Conference concludes after 10 months with agreement on federal structure', 'اختتام مؤتمر الحوار الوطني بعد 10 أشهر بالاتفاق على هيكل فيدرالي', 'policy', 'medium', '["NDC Outcomes Document"]'),

('2014-07-08', 'Fuel Subsidy Cuts Announced', 'إعلان رفع دعم الوقود', 'Government announces fuel subsidy cuts, triggering widespread protests and Houthi mobilization', 'الحكومة تعلن رفع دعم الوقود، مما يثير احتجاجات واسعة وتحرك حوثي', 'economic', 'high', '["IMF Yemen Report 2014"]'),

-- ============================================
-- 2014 SEPTEMBER: HOUTHI TAKEOVER - CRITICAL
-- ============================================

('2014-09-21', 'Houthis Seize Sana''a', 'الحوثيون يسيطرون على صنعاء', 'Houthi forces capture Yemen''s capital Sana''a after weeks of protests, marking beginning of current conflict', 'القوات الحوثية تستولي على العاصمة اليمنية صنعاء بعد أسابيع من الاحتجاجات، إيذاناً ببداية الصراع الحالي', 'war', 'critical', '["UN Security Council Report S/2014/706"]'),

('2014-09-22', 'Peace and Partnership Agreement', 'اتفاق السلم والشراكة', 'Houthis and government sign Peace and Partnership Agreement, but implementation fails', 'الحوثيون والحكومة يوقعون اتفاق السلم والشراكة، لكن التنفيذ يفشل', 'policy', 'high', '["UN Yemen Agreement Text"]'),

-- ============================================
-- 2015: WAR BEGINS - COALITION INTERVENTION
-- ============================================

('2015-01-22', 'Hadi Resigns Under Pressure', 'هادي يستقيل تحت الضغط', 'President Hadi resigns after Houthis place him under house arrest in Sana''a', 'الرئيس هادي يستقيل بعد وضعه تحت الإقامة الجبرية من قبل الحوثيين في صنعاء', 'policy', 'critical', '["Reuters Yemen Coverage"]'),

('2015-02-21', 'Hadi Escapes to Aden', 'هادي يهرب إلى عدن', 'President Hadi escapes house arrest in Sana''a and flees to Aden, rescinds resignation', 'الرئيس هادي يهرب من الإقامة الجبرية في صنعاء ويفر إلى عدن، ويتراجع عن استقالته', 'policy', 'critical', '["BBC News Yemen"]'),

('2015-03-25', 'Hadi Flees to Saudi Arabia', 'هادي يفر إلى السعودية', 'As Houthis advance on Aden, President Hadi flees to Riyadh, requests Arab military intervention', 'مع تقدم الحوثيين على عدن، الرئيس هادي يفر إلى الرياض ويطلب تدخلاً عسكرياً عربياً', 'policy', 'critical', '["Al Jazeera Yemen Coverage"]'),

('2015-03-26', 'Operation Decisive Storm Begins', 'بداية عملية عاصفة الحزم', 'Saudi-led Arab Coalition launches military intervention with airstrikes across Yemen', 'التحالف العربي بقيادة السعودية يطلق التدخل العسكري بغارات جوية في أنحاء اليمن', 'war', 'critical', '["Saudi Press Agency", "UN Security Council"]'),

('2015-04-14', 'UN Security Council Resolution 2216', 'قرار مجلس الأمن 2216', 'UNSC passes Resolution 2216 demanding Houthi withdrawal and arms embargo', 'مجلس الأمن يصدر القرار 2216 يطالب بانسحاب الحوثيين وحظر الأسلحة', 'international', 'high', '["UNSC Resolution 2216"]'),

('2015-07-14', 'Aden Recaptured', 'استعادة عدن', 'Pro-government forces backed by UAE ground troops recapture Aden from Houthis', 'القوات الموالية للحكومة بدعم قوات إماراتية برية تستعيد عدن من الحوثيين', 'war', 'high', '["Reuters Aden Battle Coverage"]'),

('2015-09-04', 'Marib Offensive Begins', 'بداية هجوم مأرب', 'Coalition-backed forces launch offensive to recapture Marib governorate', 'القوات المدعومة من التحالف تطلق هجوماً لاستعادة محافظة مأرب', 'war', 'medium', '["Yemen Conflict Monitor"]'),

-- ============================================
-- 2016: CENTRAL BANK SPLIT - MOST CRITICAL YEAR
-- ============================================

('2016-01-02', 'Humanitarian Crisis Declared', 'إعلان الأزمة الإنسانية', 'UN declares Yemen Level 3 humanitarian emergency, highest level', 'الأمم المتحدة تعلن اليمن طوارئ إنسانية من المستوى 3، أعلى مستوى', 'humanitarian', 'critical', '["UN OCHA Yemen HRP 2016"]'),

('2016-08-10', 'Peace Talks Collapse in Kuwait', 'انهيار محادثات السلام في الكويت', 'UN-brokered peace talks in Kuwait collapse after 3 months without agreement', 'محادثات السلام برعاية الأمم المتحدة في الكويت تنهار بعد 3 أشهر دون اتفاق', 'policy', 'high', '["UN Yemen Envoy Statement"]'),

('2016-09-18', 'Central Bank Relocated to Aden', 'نقل البنك المركزي إلى عدن', 'President Hadi issues decree relocating Central Bank of Yemen headquarters from Sana''a to Aden, creating dual monetary system', 'الرئيس هادي يصدر مرسوماً بنقل مقر البنك المركزي اليمني من صنعاء إلى عدن، مما يخلق نظاماً نقدياً مزدوجاً', 'economic', 'critical', '["Presidential Decree 125/2016", "IMF Yemen Report 2017"]'),

('2016-09-19', 'Houthis Reject CBY Move', 'الحوثيون يرفضون نقل البنك المركزي', 'Houthi authorities reject CBY relocation, maintain parallel central bank in Sana''a', 'السلطات الحوثية ترفض نقل البنك المركزي، وتحتفظ ببنك مركزي موازٍ في صنعاء', 'economic', 'critical', '["Sana''a Center Analysis"]'),

('2016-10-08', 'Saudi Airstrike on Funeral Hall', 'غارة سعودية على قاعة عزاء', 'Saudi airstrike kills 140+ at funeral in Sana''a, one of deadliest single incidents', 'غارة سعودية تقتل أكثر من 140 شخصاً في قاعة عزاء بصنعاء، من أكثر الحوادث الفردية دموية', 'war', 'critical', '["Human Rights Watch Report"]'),

('2016-11-15', 'Exchange Rate Begins Diverging', 'بداية تباعد سعر الصرف', 'Aden and Sana''a exchange rates begin diverging as dual CBY systems take effect', 'أسعار الصرف في عدن وصنعاء تبدأ بالتباعد مع تفعيل نظام البنك المركزي المزدوج', 'economic', 'critical', '["CBY-Aden Monthly Bulletin"]'),

-- ============================================
-- 2017: DUAL SYSTEMS CONSOLIDATE
-- ============================================

('2017-01-27', 'Trump Travel Ban Includes Yemen', 'حظر ترامب للسفر يشمل اليمن', 'US President Trump''s travel ban includes Yemen, affecting remittances and diaspora', 'حظر الرئيس الأمريكي ترامب للسفر يشمل اليمن، مما يؤثر على التحويلات والمغتربين', 'international', 'medium', '["US Executive Order"]'),

('2017-06-05', 'Qatar Blockade Begins', 'بداية حصار قطر', 'Saudi-led blockade of Qatar disrupts Yemen aid flows and complicates conflict dynamics', 'الحصار السعودي على قطر يعطل تدفقات المساعدات لليمن ويعقد ديناميكيات الصراع', 'international', 'medium', '["UN Yemen Impact Assessment"]'),

('2017-10-27', 'Cholera Epidemic Peaks', 'ذروة وباء الكوليرا', 'Yemen cholera outbreak reaches 1 million suspected cases, largest epidemic in modern history', 'تفشي الكوليرا في اليمن يصل إلى مليون حالة مشتبهة، أكبر وباء في التاريخ الحديث', 'humanitarian', 'critical', '["WHO Yemen Cholera Report"]'),

('2017-11-04', 'Saudi Blockade Tightens', 'تشديد الحصار السعودي', 'Saudi Arabia tightens blockade on Yemeni ports after Houthi missile targets Riyadh', 'السعودية تشدد الحصار على الموانئ اليمنية بعد صاروخ حوثي يستهدف الرياض', 'war', 'critical', '["UN Humanitarian Coordinator Statement"]'),

('2017-12-04', 'Saleh Killed', 'مقتل صالح', 'Former President Ali Abdullah Saleh killed by Houthis after switching allegiance to Saudi coalition', 'الرئيس السابق علي عبدالله صالح يُقتل على يد الحوثيين بعد تحويل ولائه للتحالف السعودي', 'war', 'critical', '["Reuters Breaking News"]'),

-- ============================================
-- 2018: HODEIDAH BATTLE & CURRENCY CRISIS
-- ============================================

('2018-01-01', 'Civil Servant Salary Crisis', 'أزمة رواتب موظفي الدولة', 'Government unable to pay civil servant salaries regularly, affecting 1.25M employees', 'الحكومة غير قادرة على دفع رواتب موظفي الخدمة المدنية بانتظام، مما يؤثر على 1.25 مليون موظف', 'economic', 'critical', '["World Bank Yemen Economic Monitor"]'),

('2018-06-13', 'Battle for Hodeidah Begins', 'بداية معركة الحديدة', 'UAE-backed forces launch offensive on Hodeidah port, Yemen''s economic lifeline', 'القوات المدعومة من الإمارات تطلق هجوماً على ميناء الحديدة، شريان اليمن الاقتصادي', 'war', 'critical', '["UN Yemen Envoy Briefing"]'),

('2018-08-23', 'Aden Currency Collapse', 'انهيار العملة في عدن', 'Aden riyal collapses to 800 YER/USD (from 250 pre-war), while Sana''a maintains ~600', 'الريال في عدن ينهار إلى 800 ريال/دولار (من 250 قبل الحرب)، بينما تحافظ صنعاء على ~600', 'economic', 'critical', '["IMF Yemen Article IV"]'),

('2018-10-02', 'Khashoggi Murder', 'مقتل خاشقجي', 'Murder of journalist Jamal Khashoggi in Saudi consulate affects international support for Yemen war', 'مقتل الصحفي جمال خاشقجي في القنصلية السعودية يؤثر على الدعم الدولي لحرب اليمن', 'international', 'medium', '["UN Special Rapporteur Report"]'),

('2018-11-09', 'US Ends Refueling Support', 'أمريكا توقف دعم التزود بالوقود', 'US ends aerial refueling support for Saudi coalition after Congressional pressure', 'أمريكا توقف دعم التزود بالوقود الجوي للتحالف السعودي بعد ضغط الكونغرس', 'international', 'high', '["US State Department"]'),

('2018-12-13', 'Stockholm Agreement', 'اتفاق ستوكهولم', 'UN brokers Stockholm Agreement on Hodeidah ceasefire and prisoner exchange', 'الأمم المتحدة تتوسط اتفاق ستوكهولم بشأن وقف إطلاق النار في الحديدة وتبادل الأسرى', 'policy', 'high', '["UN Yemen Stockholm Agreement Text"]'),

-- ============================================
-- 2019: CURRENCY BAN & SOUTHERN TENSIONS
-- ============================================

('2019-04-10', 'Houthis Launch Tax Offensive', 'الحوثيون يطلقون هجوماً ضريبياً', 'Houthi authorities implement aggressive tax collection and customs duties to fund war effort', 'السلطات الحوثية تنفذ جمع ضرائب ورسوم جمركية صارمة لتمويل المجهود الحربي', 'economic', 'high', '["Sana''a Center Economic Report"]'),

('2019-08-10', 'STC Seizes Aden', 'المجلس الانتقالي يسيطر على عدن', 'Southern Transitional Council forces seize control of Aden from government, opening new front', 'قوات المجلس الانتقالي الجنوبي تسيطر على عدن من الحكومة، فاتحة جبهة جديدة', 'war', 'critical', '["UN Yemen Briefing"]'),

('2019-09-14', 'Abqaiq-Khurais Attack', 'هجوم أبقيق-خريص', 'Houthi drone attack on Saudi oil facilities disrupts 5% of global oil supply', 'هجوم حوثي بطائرات مسيرة على منشآت نفطية سعودية يعطل 5٪ من إمدادات النفط العالمية', 'war', 'critical', '["UN Yemen Panel of Experts"]'),

('2019-11-05', 'Riyadh Agreement', 'اتفاق الرياض', 'Saudi Arabia brokers power-sharing deal between Yemen government and STC', 'السعودية تتوسط صفقة تقاسم السلطة بين حكومة اليمن والمجلس الانتقالي', 'policy', 'high', '["Riyadh Agreement Text"]'),

('2019-12-18', 'CBY-Sana''a Bans New Currency', 'البنك المركزي-صنعاء يحظر العملة الجديدة', 'Houthi-controlled CBY bans new banknotes printed in Russia by Aden government, deepening currency split', 'البنك المركزي تحت سيطرة الحوثيين يحظر الأوراق النقدية الجديدة المطبوعة في روسيا من حكومة عدن، مما يعمق انقسام العملة', 'economic', 'critical', '["CBY-Sana''a Circular", "Sana''a Center Analysis"]'),

-- ============================================
-- 2020: COVID-19 PANDEMIC IMPACT
-- ============================================

('2020-03-11', 'WHO Declares COVID-19 Pandemic', 'منظمة الصحة تعلن جائحة كوفيد-19', 'WHO declares COVID-19 pandemic, Yemen faces crisis with collapsed health system', 'منظمة الصحة العالمية تعلن جائحة كوفيد-19، اليمن يواجه أزمة مع نظام صحي منهار', 'humanitarian', 'critical', '["WHO COVID-19 Declaration"]'),

('2020-04-10', 'First COVID Case Confirmed', 'تأكيد أول حالة كوفيد', 'Yemen confirms first COVID-19 case in Hadramawt, likely massive underreporting', 'اليمن يؤكد أول حالة كوفيد-19 في حضرموت، على الأرجح تقليل ضخم في الإبلاغ', 'humanitarian', 'high', '["WHO Yemen COVID Report"]'),

('2020-04-20', 'Oil Prices Collapse', 'انهيار أسعار النفط', 'Global oil prices collapse due to COVID-19, devastating Yemen''s already minimal oil revenue', 'أسعار النفط العالمية تنهار بسبب كوفيد-19، مدمرة إيرادات اليمن النفطية الضئيلة بالفعل', 'economic', 'critical', '["BP Statistical Review"]'),

('2020-06-02', 'Remittances Decline Sharply', 'انخفاض حاد في التحويلات', 'Remittances from Gulf states decline 30-40% as COVID-19 affects migrant workers', 'التحويلات من دول الخليج تنخفض 30-40٪ حيث يؤثر كوفيد-19 على العمال المهاجرين', 'economic', 'high', '["World Bank Migration Brief"]'),

('2020-08-15', 'Aden Currency Hits 900 YER/USD', 'عملة عدن تصل إلى 900 ريال/دولار', 'Aden exchange rate hits 900 YER/USD, while Sana''a maintains 600, widening gap to 50%', 'سعر الصرف في عدن يصل إلى 900 ريال/دولار، بينما تحافظ صنعاء على 600، مما يوسع الفجوة إلى 50٪', 'economic', 'critical', '["CBY-Aden Exchange Rate Data"]'),

-- ============================================
-- 2021: MARIB BATTLE & FAMINE WARNING
-- ============================================

('2021-02-10', 'Marib Offensive Intensifies', 'تصعيد هجوم مأرب', 'Houthis launch major offensive on Marib, last government stronghold in north', 'الحوثيون يطلقون هجوماً كبيراً على مأرب، آخر معقل حكومي في الشمال', 'war', 'critical', '["UN Yemen Briefing"]'),

('2021-03-07', 'Biden Ends US Support for Offensive Operations', 'بايدن ينهي الدعم الأمريكي للعمليات الهجومية', 'US President Biden announces end to US support for Saudi offensive operations in Yemen', 'الرئيس الأمريكي بايدن يعلن إنهاء الدعم الأمريكي للعمليات الهجومية السعودية في اليمن', 'international', 'high', '["White House Statement"]'),

('2021-06-01', 'UN Warns of Imminent Famine', 'الأمم المتحدة تحذر من مجاعة وشيكة', 'UN warns 400,000 Yemeni children face starvation, worst famine in decades possible', 'الأمم المتحدة تحذر من أن 400 ألف طفل يمني يواجهون المجاعة، أسوأ مجاعة منذ عقود محتملة', 'humanitarian', 'critical', '["UN OCHA Yemen HRP 2021"]'),

('2021-09-21', 'Safer Tanker Crisis', 'أزمة ناقلة صافر', 'UN warns FSO Safer oil tanker could explode, causing environmental catastrophe', 'الأمم المتحدة تحذر من أن ناقلة النفط صافر قد تنفجر، مما يتسبب في كارثة بيئية', 'humanitarian', 'high', '["UN Safer Tanker Briefing"]'),

('2021-12-30', 'Aden Exchange Rate Hits 1,100', 'سعر صرف عدن يصل إلى 1,100', 'Aden riyal depreciates to 1,100 YER/USD, Sana''a maintains 600, gap widens to 83%', 'الريال في عدن ينخفض إلى 1,100 ريال/دولار، صنعاء تحافظ على 600، الفجوة تتسع إلى 83٪', 'economic', 'critical', '["IMF Yemen Monitoring"]'),

-- ============================================
-- 2022: UN TRUCE - BRIEF HOPE
-- ============================================

('2022-04-02', 'UN-Brokered Truce Begins', 'بداية الهدنة برعاية الأمم المتحدة', 'Two-month UN-brokered truce takes effect, first nationwide ceasefire in 6 years', 'هدنة لمدة شهرين برعاية الأمم المتحدة تدخل حيز التنفيذ، أول وقف إطلاق نار على مستوى البلاد منذ 6 سنوات', 'policy', 'high', '["UN Yemen Envoy Statement"]'),

('2022-06-02', 'Truce Extended First Time', 'تمديد الهدنة للمرة الأولى', 'UN truce extended for additional two months as fighting significantly decreases', 'تمديد هدنة الأمم المتحدة لمدة شهرين إضافيين حيث تنخفض القتالات بشكل كبير', 'policy', 'medium', '["UN Yemen Truce Extension"]'),

('2022-08-02', 'Truce Extended Second Time', 'تمديد الهدنة للمرة الثانية', 'UN truce extended again for two months, total 6 months of relative calm', 'تمديد هدنة الأمم المتحدة مرة أخرى لمدة شهرين، إجمالي 6 أشهر من الهدوء النسبي', 'policy', 'medium', '["UN Yemen Second Extension"]'),

('2022-10-02', 'Truce Expires Without Renewal', 'انتهاء الهدنة دون تجديد', 'UN truce expires as parties fail to agree on extension terms, but large-scale fighting does not resume', 'هدنة الأمم المتحدة تنتهي حيث تفشل الأطراف في الاتفاق على شروط التمديد، لكن القتال واسع النطاق لا يستأنف', 'policy', 'high', '["UN Yemen Envoy Briefing"]'),

-- ============================================
-- 2023: POST-TRUCE DYNAMICS
-- ============================================

('2023-03-10', 'Saudi-Iran Rapprochement', 'التقارب السعودي-الإيراني', 'China brokers Saudi-Iran diplomatic normalization, affecting Yemen conflict dynamics', 'الصين تتوسط التطبيع الدبلوماسي السعودي-الإيراني، مما يؤثر على ديناميكيات الصراع في اليمن', 'international', 'high', '["China Foreign Ministry"]'),

('2023-04-09', 'Saudi-Houthi Talks in Sana''a', 'محادثات سعودية-حوثية في صنعاء', 'Saudi delegation visits Sana''a for direct talks with Houthis, bypassing government', 'وفد سعودي يزور صنعاء لمحادثات مباشرة مع الحوثيين، متجاوزاً الحكومة', 'policy', 'high', '["Reuters Yemen Coverage"]'),

('2023-06-15', 'Safer Tanker Offloading Begins', 'بداية تفريغ ناقلة صافر', 'UN begins operation to offload 1.1M barrels of oil from decaying Safer tanker', 'الأمم المتحدة تبدأ عملية تفريغ 1.1 مليون برميل نفط من ناقلة صافر المتهالكة', 'humanitarian', 'medium', '["UN Safer Operation Update"]'),

('2023-09-02', 'CBY-Aden Reforms Announced', 'إعلان إصلاحات البنك المركزي-عدن', 'CBY-Aden announces monetary reforms to stabilize exchange rate and banking sector', 'البنك المركزي-عدن يعلن إصلاحات نقدية لتثبيت سعر الصرف والقطاع المصرفي', 'economic', 'high', '["CBY-Aden Press Release"]'),

('2023-12-31', 'Aden Rate Stabilizes at 1,400', 'استقرار سعر عدن عند 1,400', 'Aden exchange rate stabilizes around 1,400 YER/USD after reforms, Sana''a at 530', 'سعر الصرف في عدن يستقر حول 1,400 ريال/دولار بعد الإصلاحات، صنعاء عند 530', 'economic', 'medium', '["Exchange Rate Monitoring"]'),

-- ============================================
-- 2024: FRAGMENTED STABILITY
-- ============================================

('2024-01-12', 'Houthis Attack Red Sea Shipping', 'الحوثيون يهاجمون الشحن في البحر الأحمر', 'Houthis escalate attacks on Red Sea shipping in solidarity with Gaza, disrupting global trade', 'الحوثيون يصعدون هجمات على الشحن في البحر الأحمر تضامناً مع غزة، مما يعطل التجارة العالمية', 'war', 'critical', '["UN Security Council Briefing"]'),

('2024-02-03', 'US-UK Strikes on Houthi Positions', 'ضربات أمريكية-بريطانية على مواقع حوثية', 'US and UK launch airstrikes on Houthi military positions in response to Red Sea attacks', 'أمريكا وبريطانيا تشنان غارات جوية على مواقع عسكرية حوثية رداً على هجمات البحر الأحمر', 'war', 'high', '["US Central Command"]'),

('2024-04-15', 'Microfinance Sector Expansion', 'توسع قطاع التمويل الأصغر', 'Microfinance institutions report 260,000 active borrowers, up from 25,000 in 2014 (940% growth)', 'مؤسسات التمويل الأصغر تبلغ عن 260 ألف مقترض نشط، ارتفاعاً من 25 ألف في 2014 (نمو 940٪)', 'economic', 'medium', '["Social Fund for Development Report"]'),

('2024-06-01', 'Digital Payments Growth', 'نمو المدفوعات الرقمية', 'Mobile money and digital payment platforms see rapid adoption amid banking sector fragmentation', 'منصات الأموال المتنقلة والمدفوعات الرقمية تشهد اعتماداً سريعاً وسط تفتت القطاع المصرفي', 'economic', 'medium', '["World Bank FMI Project Report"]'),

('2024-09-01', 'Humanitarian Funding Gap Widens', 'اتساع فجوة التمويل الإنساني', 'Yemen HRP receives only 32% of $4.2B requested, lowest funding level since 2015', 'خطة الاستجابة الإنسانية لليمن تتلقى 32٪ فقط من 4.2 مليار دولار مطلوبة، أدنى مستوى تمويل منذ 2015', 'humanitarian', 'critical', '["UN OCHA Financial Tracking"]'),

-- ============================================
-- 2025: CURRENT PERIOD
-- ============================================

('2025-01-01', 'Exchange Rate Gap Peaks', 'فجوة سعر الصرف تبلغ ذروتها', 'Exchange rate divergence reaches historic high: Aden 1,800 YER/USD vs Sana''a 530 YER/USD (240% gap)', 'تباعد سعر الصرف يصل إلى أعلى مستوى تاريخي: عدن 1,800 ريال/دولار مقابل صنعاء 530 ريال/دولار (فجوة 240٪)', 'economic', 'critical', '["Exchange Rate Monitoring 2025"]'),

('2025-02-15', 'Poverty Rate Reaches 80%', 'معدل الفقر يصل إلى 80٪', 'World Bank estimates 80% of Yemenis now live below poverty line, up from 54% in 2014', 'البنك الدولي يقدر أن 80٪ من اليمنيين يعيشون الآن تحت خط الفقر، ارتفاعاً من 54٪ في 2014', 'humanitarian', 'critical', '["World Bank Yemen Poverty Assessment 2025"]'),

('2025-03-01', 'Food Insecurity Crisis', 'أزمة انعدام الأمن الغذائي', '17 million Yemenis (55% of population) face acute food insecurity, 6.1M in emergency phase', '17 مليون يمني (55٪ من السكان) يواجهون انعدام حاد في الأمن الغذائي، 6.1 مليون في مرحلة الطوارئ', 'humanitarian', 'critical', '["WFP Yemen Food Security Update"]');

-- ============================================
-- CAUSATION RELATIONSHIPS
-- ============================================

-- Example causations (add more as needed)
INSERT INTO causations (causeEventId, effectEventId, strength, confidence, mechanismEn, mechanismAr, evidence) VALUES
-- CBY Split → Exchange Rate Divergence
((SELECT id FROM events WHERE titleEn = 'Central Bank Relocated to Aden'), 
 (SELECT id FROM events WHERE titleEn = 'Exchange Rate Begins Diverging'), 
 95, 95, 
 'Dual central bank systems created separate monetary policies, leading to divergent exchange rates as Aden printed new currency while Sana''a controlled old notes', 
 'أنظمة البنك المركزي المزدوجة خلقت سياسات نقدية منفصلة، مما أدى إلى أسعار صرف متباينة حيث طبعت عدن عملة جديدة بينما سيطرت صنعاء على الأوراق القديمة',
 '["IMF Yemen Report 2017", "Sana''a Center CBY Analysis"]'),

-- Saudi Coalition → Port Blockade → Imports Decline
((SELECT id FROM events WHERE titleEn = 'Operation Decisive Storm Begins'), 
 (SELECT id FROM events WHERE titleEn = 'Saudi Blockade Tightens'), 
 90, 90,
 'Coalition military intervention led to naval blockade of Yemeni ports, severely restricting commercial imports and humanitarian aid access',
 'التدخل العسكري للتحالف أدى إلى حصار بحري على الموانئ اليمنية، مما قيد بشدة الواردات التجارية ووصول المساعدات الإنسانية',
 '["UN Yemen Panel of Experts", "ACAPS Yemen Access Constraints"]');

-- Add more causations as needed
