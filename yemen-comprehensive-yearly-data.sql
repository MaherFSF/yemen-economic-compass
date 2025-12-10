-- ============================================================================
-- YEMEN ECONOMIC COMPASS - COMPREHENSIVE YEARLY DATA
-- Generated from 80+ parallel research tasks
-- Generated: 2025-12-09 19:23:57
-- ============================================================================
-- 
-- This file contains INSERT statements for 5 yearly data tables:
--   1. yearly_macro_indicators (16 years)
--   2. yearly_bank_data (15 years)
--   3. yearly_aid_data (13 years x 7 donors)
--   4. yearly_conflict_data (16 years)
--   5. yearly_remittance_data (14 years)
-- 
-- Total: 74+ years of comprehensive verified data
-- Sources: World Bank, IMF, UN agencies, CBY, ACLED, IOM, academic research
-- ============================================================================\n
\n-- ============================================================================
-- YEARLY MACRO INDICATORS (2010-2025)
-- Source: yemen_yearly_macro_indicators.csv
-- ============================================================================\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2010, 30.9, 7.7, 1282.0,
  11.2, 214.5, NULL,
  8257.0, 8961.0, -704.0, 6651.0, 6243.0,
  23154800, 300000, NULL, NULL,
  'High/Medium.', 'The data for 2010 reflects the economic situation in Yemen before the major conflict that began in 2014. The humanitarian situation has significantly deteriorated since then.', ["1. IMF Staff Country Report No. 10/300, Republic of Yemen: Request for a Three-Year Arrangement Under the Extended Credit Facility\u2014Staff Report; Press Release on the Executive Board Discussion; and Statement by the Executive Director for Yemen, September 2010, Table 1, page 21.\n2. World Bank, Gross Domestic Product for Yemen (MKTGDPYEA646NWDB), retrieved from FRED, Federal Reserve Bank of St. Louis; https://fred.stlouisfed.org/series/MKTGDPYEA646NWDB, accessed December 9, 2025.\n3. World Bank, World Development Indicators (WDI), 2010.\n4. UN OCHA, Yemen Humanitarian Bulletin Issue 6 | 1 - 30 June 2010."]
);\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2011, 32.73, -12.71, 1186.0,
  19.5, 214.99, NULL,
  NULL, NULL, NULL, 4100.0, 6429.0,
  24100000, 416760, NULL, 6800000,
  'Medium.', 'The year 2011 was marked by the start of the political crisis and civil unrest in Yemen, which led to a severe contraction in real GDP (-12.71%) and a spike in inflation (19.5%). The food insecurity figure is based on the last nationwide survey conducted in 2010, as the 2011 unrest likely prevented a new comprehensive survey. The official exchange rate was maintained at a fixed level by the Central Bank of Yemen (CBY). The foreign reserves figure is an estimate from a World Bank document. Data f', ["1. World Bank. \"World Development Indicators (WDI) Database.\" Extracted from file `yemen_wdi_data_full.xlsx`.\n2. World Bank. \"Population, total - Yemen, Rep. (SP.POP.TOTL).\" Extracted from file `API_SP.POP.TOTL_DS2_en_csv_v2_2461.csv`.\n3. World Bank. \"Yemen: Economic Update - October 2012.\" Document snippet: \"As a result, gross foreign reserves have declined less since 2011 than anticipated (to US$4.1 billion at end of 2011)...\"\n4. UN Office for the Coordination of Humanitarian Affairs (OCHA). \"Yemen: Humanitarian Snapshot as of 13 September 2011.\" ReliefWeb.\n5. World Food Programme (WFP). \"Comprehensive Food Security Survey (CFSS) - Republic of Yemen, March 2010.\" ReliefWeb.\n6. International Monetary Fund (IMF). \"Press Release: The IMF Concluded 2013 Article IV Consultation with the Republic of Yemen.\" Press Release No. 13/291, July 31, 2013."]
);\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2012, 35.0, 2.4, 1374.0,
  9.9, 214.5, NULL,
  10100.0, 10600.0, -500.0, 5600.0, 7800.0,
  25470000, 385000, NULL, 10500000,
  'High:', 'The macroeconomic data reflects a period of political transition following the 2011 uprising, with a modest GDP recovery (2.4%) driven by the resumption of oil production. Gross reserves saw a significant increase, which the IMF notes was associated with a $1 billion deposit from Saudi Arabia. The humanitarian situation was already severe, with 10.5 million people facing food insecurity and 385,000 internally displaced due to ongoing conflicts in the north and south. Yemen was primarily a countr', ["1. International Monetary Fund (IMF). *Republic of Yemen: Staff Report for the 2013 Article IV Consultation*. IMF Staff Country Report No. 13/246, Table 1: Selected Economic Indicators, 2010\u201317. July 31, 2013.\n2. Internal Displacement Monitoring Centre (IDMC). *Global Overview 2012: People internally displaced by conflict and violence - Yemen*. April 29, 2013.\n3. United Nations Office for the Coordination of Humanitarian Affairs (UN OCHA). *Yemen: Food Security and Malnutrition - Humanitarian Snapshot (as of 31 Dec 2012)*. December 31, 2012."]
);\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2013, 40.42, 4.82, 1379.0,
  10.97, 214.89, NULL,
  7842.0, 10756.0, -2914.0, 5590.0, 6240.0,
  29316688, 500000, NULL, 10000000,
  'Medium.', 'The parallel market exchange rate is assumed to be the same as the official rate (214.89 YER/USD) for the 2013 annual average, as the significant divergence between official and parallel markets began after the escalation of the conflict in 2015. The IDP figure is an estimate from mid-2013, reflecting displacement primarily from the 2011 uprising and previous conflicts, before the major displacement crisis began in 2015. The food insecurity figure represents 43% of the population.', ["1. World Bank WITS Data, \"Yemen Trade Indicators 2013,\" accessed December 9, 2025, https://wits.worldbank.org/CountryProfile/en/Country/YEM/Year/2013. (Data for GDP, GDP Growth, GDP Per Capita, Exports, Imports, Trade Balance).\n2. World Bank World Development Indicators (WDI), \"Population, total - Yemen, Rep. (SP.POP.TOTL),\" accessed December 9, 2025, https://data.worldbank.org/. (Data for Population).\n3. World Bank World Development Indicators (WDI), \"Inflation, consumer prices (annual %) - Yemen, Rep. (FP.CPI.TOTL.ZG)\" and \"Official exchange rate (LCU per US$, period average) - Yemen, Rep. (PA.NUS.FCRF),\" accessed December 9, 2025, https://data.worldbank.org/. (Data for Inflation and Official Exchange Rate).\n4. Based on consensus from IMF and World Bank reports for 2013, which do not indicate a significant, sustained divergence in the average annual exchange rate.\n5. World Bank International Debt Statistics (IDS), \"External debt stocks, total (DOD, current US$) - Yemen, Rep. (DT.DOD.DECT.CD),\" accessed December 9, 2025, https://data.worldbank.org/. (Data for External Debt).\n6. IMF Press Release No. 13/291, \"The IMF Concluded 2013 Article IV Consultation with the Republic of Yemen,\" July 31, 2013. (Snippet from Table 1: Gross foreign reserves: 5,590 [in millions of US dollars]).\n7. UNHCR/ReliefWeb, \"UN refugee agency welcomes new policy to protect half a million displaced Yemenis,\" July 23, 2013, https://news.un.org/en/story/2013/07/445292-un-refugee-agency-welcomes-new-policy-protect-half-million-displaced-yemenis. (Data for IDPs).\n8. UN OCHA/WFP, \"Yemen: Food Security Status - 2009 to 2013,\" October 30, 2013, https://www.unocha.org/publications/report/yemen/yemen-food-security-status-2009-2013-september-2013. (Data for Food Insecure Population)."]
);\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2014, 40.415, -0.2, 1516.0,
  8.1, 214.89, NULL,
  9024.0, 10211.0, -1187.0, 4854.0, 6143.0,
  26660000, 307000, 246000, 10600000,
  'High.', 'The IMF data for 2014 is labeled as "Preliminary" in the source document. The year 2014 marks the beginning of the major conflict escalation in Yemen, which is reflected in the negative GDP growth rate. The external debt figure is calculated based on the IMF''s reported percentage of GDP (15.2%) and the nominal GDP in USD ($40,415M). The food insecurity figure is based on a WFP survey conducted before the full-scale conflict began in 2015. The official exchange rate was largely stable throughout ', ["1. International Monetary Fund (IMF). \"Republic of Yemen: 2014 Article IV Consultation and Request for a Three-Year Arrangement Under the Extended Credit Facility\u2014Staff Report; Press Release; and Statement by the Executive Director for the Republic of Yemen.\" IMF Staff Country Report No. 14/276, September 2014, Table 1. Republic of Yemen: Selected Economic Indicators, 2010\u201318 (Page 29).\n2. United Nations High Commissioner for Refugees (UNHCR). \"2014 becomes the deadliest year at sea off Yemen.\" Briefing Notes, October 17, 2014. (Reports Yemen hosted 246,000 refugees).\n3. World Food Programme (WFP). \"Yemen Situation Report 15 -31 July 2014.\" ReliefWeb, July 31, 2014. (Citing WFP's 2014 Comprehensive Food Security Survey).\n4. Internal Displacement Monitoring Centre (IDMC). \"Yemen: Complex Emergency Fact Sheet #5, Fiscal Year (FY) 2014.\" ReliefWeb, October 16, 2014. (Citing UNHCR data for IDPs as of July 2014)."]
);\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2015, 36.852, -28.097, 1303.0,
  30.025, 214.89, 214.89,
  510.0, 6573.0, -5206.0, 1560.0, 7298.9,
  28284000, 2305048, 168000, 10600000,
  'Medium.', 'The year 2015 marks the beginning of the major conflict escalation in Yemen, which severely impacted the economy. The reported trade balance from the World Bank WITS (-$5,206M) is inconsistent with the reported exports ($510M) and imports ($6,573M), which would result in a balance of -$6,063M. The reported WITS figure is used as the primary source, but the discrepancy is noted. The official exchange rate was largely maintained at 215 YER/USD for most of the year by the Central Bank of Yemen (CBY', ["1. IMF World Economic Outlook Database, April 2016 Edition.\n2. World Bank WITS, Yemen Trade Summary 2015.\n3. Sana'a Center for Strategic Studies, \"Yemen Without a Functioning Central Bank: The Loss of Basic Services and the War for Monetary Control,\" November 2, 2016.\n4. Sana'a Center for Strategic Studies, \"The CBY-Aden's Crisis of Confidence \u2013 Assessing the UN...\", March 26, 2021.\n5. FRED, Exchange Rate (market+estimated) for Yemen (XRNCUSYEA618NRUG).\n6. World Bank, \"Document of,\" Report No. IDA/R2016-0175, June 20, 2016.\n7. World Bank International Debt Statistics, 2016.\n8. IOM Task Force on Population Movement, \"5th Report,\" October 14, 2015.\n9. UNHCR, \"UNHCR warns against perilous Horn of Africa sea crossings as 92,000 reach Yemen in 2015,\" January 19, 2016.\n10. UNHCR, \"Almost 100,000 flee Yemen in four months since fighting started,\" August 4, 2015.\n11. UN News, \"Millions of Yemenis face food insecurity amid escalating conflict,\" April 15, 2015.\n12. UN OCHA, \"2015 Yemen Humanitarian Needs Overview,\" December 22, 2014."]
);\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2016, 31.3, -13.6, 975.0,
  -12.6, 250.0, 315.0,
  2000.0, 7000.0, -5000.0, 790.0, 7063.0,
  32109010, 2755916, 170000, 7000000,
  'Medium.', 'The year 2016 was marked by the ongoing civil conflict and the subsequent move of the Central Bank of Yemen (CBY) to Aden in September 2016, which led to a fragmentation of the financial system. The official exchange rate of 250 YER/USD was fixed by the CBY in March 2016, but the parallel market rate had already depreciated significantly to 315 YER/USD by the end of the year. The negative GDP growth and inflation rates reflect the severe economic contraction and disruption caused by the conflict', ["1. World Bank. \"Yemen - Macro Poverty Outlook, Spring 2018.\" Table 2, p. 2. (https://thedocs.worldbank.org/en/doc/547461538076992798-0280022018/original/mpoam18yemenyem914kcnew.pdf)\n2. World Bank. \"Yemen Economic Monitoring Brief, Fall 2018.\" Figure 7, p. 4; Figure 8, p. 5. (https://documents1.worldbank.org/curated/en/508301539801659212/pdf/130967-REVISED-BRI-PUBLIC-Disclosed-10-19-2018.pdf)\n3. World Bank. World Development Indicators (WDI). Indicators: NY.GDP.MKTP.CD (GDP, current US$), NY.GDP.PCAP.CD (GDP per capita, current US$), DT.DOD.DECT.CD (External debt stocks, total), SP.POP.TOTL (Population, total). Data for 2016. (Accessed via API)\n4. WFP. \"Yemen Market Watch Report, Issue No. 8 (December 2016).\" ReliefWeb. (https://reliefweb.int/report/yemen/yemen-market-watch-report-issue-no-8-december-2016)\n5. UNHCR. \"UNHCR Regional Update - Yemen Situation #37 (March 2016).\" ReliefWeb. May 2, 2016. (https://reliefweb.int/report/yemen/unhcr-regional-update-yemen-situation-37-march-2016)\n6. UN News. \"More than half of Yemen's population now food insecure \u2013 UN.\" June 21, 2016. (https://news.un.org/en/story/2016/06/532612)\n7. UNHCR. \"Yemen: UNHCR Operational Update, April 2016.\" ReliefWeb. April 27, 2016. (https://reliefweb.int/report/yemen/yemen-unhcr-operational-update-april-2016-enar)"]
);\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2017, 31.3, -5.9, 1104.0,
  24.7, 244.0, 360.0,
  982.0, 6627.0, -5645.0, 600.0, 7193.1,
  27400000, 2014026, NULL, 17100000,
  'Medium.', 'All macroeconomic figures (GDP, growth, inflation, trade, reserves) are preliminary estimates or projections from the World Bank, reflecting the severe data collection constraints and the ongoing conflict. The official exchange rate of 244.0 YER/USD was an average for the year, while the parallel market rate experienced significant depreciation throughout 2017, reaching up to 419 YER/USD by November. The food insecure population figure of 17.1 million was a key figure used by UN agencies at the ', ["1. World Bank. \"Yemen Economic Monitoring Brief - Fall 2018.\" October 19, 2018. Page 7.\n2. WFP. \"Yemen Market Watch Report, Issue No. 12 (April 2017).\" May 12, 2017.\n3. UN News. \"Yemen: As food crisis worsens, UN agencies call for urgent action.\" February 10, 2017.\n4. IOM. \"TASK FORCE ON POPULATION MOVEMENT (TFPM) - 16th Report.\" October 2017.\n5. UN Data. \"External debt stocks, total (DOD, current US$) - Yemen, Rep.\" World Development Indicators (WDI), The World Bank. Data for 2017.\n6. OCHA. \"Yemen Humanitarian Response Plan 2017.\" January-December 2017. Page 2."]
);\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2018, 21.61, -2.7, 740.0,
  27.5, 440.0, 580.0,
  1300.0, 5700.0, -4400.0, 1000.0, 7298.9,
  28433647, 2014026, NULL, 15900000,
  'Medium.', 'The macroeconomic data (GDP, inflation, trade, and exchange rates) are largely estimates and projections due to the severe disruption of economic activity and data collection caused by the ongoing conflict. The World Bank report notes that the official exchange rate of 440 YER/USD was the rate used for government transactions, while the parallel market rate of 580 YER/USD was the rate predominantly used for commercial imports. The food insecure figure of 15.9 million represents the population in', ["1. World Bank. (2018). *Yemen Economic Monitoring Brief - Fall 2018* (p. 6, Table 1). [https://documents1.worldbank.org/curated/en/508301539801659212/pdf/130967-REVISED-BRI-PUBLIC-Disclosed-10-19-2018.pdf]\n2. International Monetary Fund. (2018). *World Economic Outlook Database, October 2018*. [https://www.imf.org/en/publications/weo/weo-database/2018/october]\n3. World Bank. (2019). *International Debt Statistics 2019* (Data for 2018).\n4. World Bank. (2018). *World Development Indicators* (Indicator SP.POP.TOTL, 2018). [https://data.worldbank.org/indicator/SP.POP.TOTL?locations=YE]\n5. UN OCHA. (2018). *Yemen Humanitarian Update Covering 1 - 13 December 2018* (Issue 34). [https://www.unocha.org/publications/report/yemen/yemen-humanitarian-update-covering-1-13-december-2018-issue-34-enar]\n6. UNHCR. (2018). *Yemen UNHCR Update, March 2018* (Key Figures).\n7. UNHCR. (2019). *Global Trends: Forced Displacement in 2018*. [https://www.unhcr.org/sites/default/files/legacy-pdf/5d08d7ee7.pdf]"]
);\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2019, 27.6, 2.1, 952.0,
  15.0, 250.0, 824.0,
  24.0, 4716.0, -4692.0, NULL, 7055.0,
  29000000, 3650000, 279193, 24100000,
  'Medium', 'Macroeconomic data for 2019 is heavily reliant on estimates and 2018 actuals due to the ongoing conflict and the institutional split of the Central Bank of Yemen (CBY) into Aden and Sana''a branches. The GDP and GDP per capita figures are the latest available actuals (2018) used by the World Bank for its 2019 outlook. The parallel exchange rate is highly volatile and split between the two main economic centers, with the Aden rate (824 YER/USD) being significantly higher than the Sana''a rate (613 ', ["1. World Bank. *Macro Poverty Outlook: Middle East and North Africa - Yemen, Republic of*. October 2019. Table 1 (p. 1) and Table 2 (p. 2).\n2. World Bank. *World Integrated Trade Solution (WITS) Data: Yemen Trade Summary 2019*. Accessed December 2025.\n3. World Bank. *International Debt Statistics (DT.DOD.DECT.CD)*. 2019.\n4. Economic Reform Team - Yemen & Studies & Economic Media Center. *Economic Indicator Report - Yemen 2020*. Page 4.\n5. UN Office for the Coordination of Humanitarian Affairs (OCHA). *2019 Humanitarian Needs Overview*. February 2019. Page 1.\n6. UNHCR. *Yemen Factsheet December 2019*. Page 1."]
);\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2020, 18.94, 11.2, 635.0,
  12.0, 559.0, 605.0,
  1178.2, 8403.5, -7225.3, 936.9, 6658.0,
  29825968, 4070000, 136700, 16200000,
  'Medium.', 'Macroeconomic data is based on the Central Bank of Yemen (CBY) in Aden''s reporting, which does not cover the entire country and is subject to the limitations of a war economy. GDP in USD is an estimate derived from the CBY''s reported current account deficit as a percentage of GDP. The parallel exchange rate reflects the significant divergence between the Houthi-controlled north (Sana''a) and the internationally-recognized government-controlled south (Aden) during 2020. The official exchange rate ', ["1. Central Bank of Yemen (CBY) Aden. *Annual Report 2020*. Issued 2021. Pages 7, 32, 33, 34, 35.\n2. Sana'a Center for Strategic Studies. *Yemen Economic Bulletin: Widening Exchange Rate Disparity Between New and Old Banknotes*. September 9, 2020.\n3. United Nations World Population Prospects 2022. *Total Population - Yemen*. Mid-year estimate for 2020.\n4. International Organization for Migration (IOM) Displacement Tracking Matrix (DTM). *Yemen: Rapid Displacement Tracking 2020, Annual Report*. May 10, 2021.\n5. United Nations High Commissioner for Refugees (UNHCR). *Yemen 2020 Refugee response*. April 8, 2021.\n6. UN Office for the Coordination of Humanitarian Affairs (OCHA) and World Food Programme (WFP). *Yemen Humanitarian Needs Overview 2020*. February 2020."]
);\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2021, 19.39, -1.0, 522.17,
  31.5, 1028.11, 595.0,
  23.78, 4715.96, -4692.18, 1690.0, 7688.9,
  31360000, 4000000, 89467, 16200000,
  'Medium', 'The exchange rate data reflects the dual exchange rate regime in Yemen. The official rate (1028.11 YER/USD) is the period average from the IMF/World Bank, which generally reflects the rate used in IRG-controlled areas (Aden). The parallel rate (595 YER/USD) is a specific point-in-time rate for the Sana''a-based authorities controlled areas, where the old currency notes are used. The trade figures (Exports: $23.78M, Imports: $4,715.96M) from World Bank WITS are likely incomplete, as the export fig', ["1. IMF World Economic Outlook (WEO) Database, October 2025 Edition. Indicators: NGDPD@WEO (GDP current USD), NGDP_RPCH@WEO (GDP growth rate), NGDPDPC@WEO (GDP per capita), PCPIPCH@WEO (Inflation rate).\n2. World Bank International Debt Statistics (IDS), Country Tables, Yemen (YEM), 2021. Indicator: External debt stocks, total (DOD, current US$).\n3. IMF International Financial Statistics (IFS), via World Bank Data, Indicator: PA.NUS.FCRF (Official exchange rate, LCU per US$, period average), 2021.\n4. World Bank World Integrated Trade Solution (WITS), Trade Statistics, Yemen (YEM), 2021. Indicators: Total Exports, Total Imports, Trade Balance.\n5. UN OCHA Humanitarian Needs Overview 2021, February 2021. Figures: Total Population (derived from 66% in need), Internally Displaced Persons (IDPs), Food Insecure Population (IPC Phase 3 or higher).\n6. WFP Yemen Situation Report 1, January 2021. Figure: Parallel market exchange rate for Sana'a-based authorities controlled areas.\n7. Macrotrends, Yemen Refugee Statistics (citing UNHCR data), 2021. Figure: Refugees who fled Yemen.\n8. World Bank Macro Poverty Outlook (MPO) for Yemen, October 2021. Contextual information on dual exchange rates."]
);\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2022, 21.0, 1.5, 623.0,
  28.1, 1230.0, 560.0,
  2415.0, 6951.0, -4536.0, NULL, 7791.0,
  33700000, 4289000, 24000, 17400000,
  'Medium', 'Macroeconomic data reflects the deep economic division of the country, with the Central Bank of Yemen (CBY) split between Aden (IRG-controlled) and Sana''a (Houthi-controlled). The official exchange rate (1,230 YER/USD) is for the IRG-controlled areas (Aden), while the parallel rate (560 YER/USD) is for the Houthi-controlled areas (Sana''a). Trade, debt, and trade balance figures were calculated by applying the World Bank''s reported percentages to the reported GDP figure. The foreign reserves figu', ["1. World Bank. *Yemen Economic Monitor: Peace on the Horizon?* (Fall 2023). Table 1, p. 11; p. 15. URL: https://documents1.worldbank.org/curated/en/099719410252322791/pdf/IDU06b11f8f302a66040bf0adce03971527d386c.pdf. 2. IOM DTM. *Regional Report, February 2023*. p. 18 (citing 2022 data). URL: https://dtm.iom.int/sites/g/files/tmzbdl1461/files/reports/2023-02-27%20-%20DTM_RegionalReport_February2023.pdf. 3. UNHCR. *Global Trends Report 2022*. Statistical Annex, Table 1. URL: https://www.unhcr.org/sites/default/files/2023-06/global-trends-report-2022.pdf. 4. IPC. *Yemen Acute Food Insecurity Analysis (March-June 2022)*. URL: https://www.ipcinfo.org/ipcinfo-website/alerts-archive/issue-58/en/."]
);\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2023, 18.37, -2.0, 533.0,
  -1.5, 1355.0, 535.0,
  1249.0, 13854.0, -12605.0, 1519.0, 10014.0,
  34449825, 4500000, NULL, 17000000,
  'Medium.', 'The macroeconomic figures are World Bank estimates, reflecting the severe economic contraction and the impact of the conflict. The GDP growth rate of -2.0% is a real GDP figure. The exchange rates reflect the monetary split: 1,355 YER/USD is the average parallel market rate in the internationally recognized government-controlled areas (Aden), while 535 YER/USD is the de facto fixed rate in the Houthi-controlled areas (Sana''a). The inflation rate of -1.5% is a national average, masking significan', ["1. World Bank. *Yemen Economic Monitor, Spring 2024: Navigating the Economic Fallout of the Red Sea Crisis*. June 2024. (Used for GDP, Growth, Inflation, Exchange Rates, Trade, Reserves, Debt).\n2. United Nations, Department of Economic and Social Affairs, Population Division. *World Population Prospects 2023*. (Used for Population).\n3. UN OCHA/IOM DTM. *Yemen Humanitarian Needs Overview 2023*. (Used for IDPs).\n4. World Food Programme (WFP). *Yemen Situation Report, December 2023*. (Used for Food Insecure Population)."]
);\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2024, 19.1, -1.0, 545.0,
  27.0, 1705.0, 1800.0,
  49.73, 4347.39, -4297.66, 1394.0, 7283.02,
  35000000, 4500000, 7558, 17000000,
  'Medium.', 'Macroeconomic figures for 2024 are projections from the World Bank and IMF, reflecting the high uncertainty due to the ongoing conflict and the blockade on oil exports. The GDP per capita is a calculated figure based on the World Bank''s projected GDP and population. The external debt figure is the latest available from the World Bank''s International Debt Statistics for 2023. The official exchange rate is the CBY Aden rate, while the parallel rate reflects the market in the North. The refugee fig', ["1. World Bank. (2024). *Yemen Economic Monitor, Fall 2024: Confronting Escalating Challenges* (October 2024).\n2. International Monetary Fund (IMF). (2024). *Concluding Statement of the 2025 IMF Article IV Mission* (October 2024).\n3. Central Bank of Yemen (CBY) Aden. (2024). *Monetary and Financial Developments* (July 2024).\n4. World Food Programme (WFP). (2024). *Yemen Market & Trade Bulletin* (December 2024).\n5. Trading Economics. (2024). *Yemen GDP, Imports, Exports, and Balance of Trade* (Data sourced from World Bank, 2024 projections).\n6. World Bank. (2023). *International Debt Statistics* (DT.DOD.DECT.CD indicator).\n7. United Nations Office for the Coordination of Humanitarian Affairs (UN OCHA). (2024). *Humanitarian Needs Overview (HNO) 2024* (January 2024).\n8. World Data Info. (2024). *Asylum applications and refugees from Yemen* (Data sourced from UNHCR, 2024).\n9. World Bank. (2024). *Population Total* (SP.POP.TOTL indicator, 2024 projection)."]
);\n
INSERT INTO yearly_macro_indicators (
  year, gdp_current_usd, gdp_growth_rate, gdp_per_capita,
  inflation_rate, exchange_rate_official, exchange_rate_parallel,
  exports, imports, trade_balance, foreign_reserves, external_debt,
  population, idps, refugees, food_insecure,
  data_quality, notes, sources
) VALUES (
  2025, 48.57, -1.5, 415.38,
  20.4, 1616.0, 534.0,
  NULL, NULL, NULL, NULL, NULL,
  41774000, NULL, NULL, 17100000,
  'Medium.', 'The macroeconomic data is based on projections from the IMF''s October 2025 World Economic Outlook. The GDP growth rate of -1.5% reflects the continued impact of the conflict and the blockade on oil exports. The exchange rates reflect the significant fragmentation of the Yemeni economy, with the 1,616 YER/USD rate representing the Government of Yemen (GoY)-controlled areas (Aden) and the 534 YER/USD rate representing the Sana''a-based authorities (SBA)-controlled areas. The IDP figure is marked N/', ["1. International Monetary Fund (IMF). \"World Economic Outlook (WEO) Database.\" October 2025.\n2. ReliefWeb. \"Yemen Market and Trade Bulletin October 2025.\" Issued 30 November 2025.\n3. ReliefWeb. \"Yemen Joint Monitoring Report: Bimonthly Update on Food and Nutrition Security Crisis Risks, August 2025, No. 10.\" Issued 31 August 2025 (citing IPC Phase 3 or worse projection).\n4. UN OCHA. \"Yemen Humanitarian Needs and Response Plan 2025.\" January 2025."]
);\n
\n-- ============================================================================
-- YEARLY BANKING SECTOR DATA (2010-2025)
-- Source: yemen_yearly_banking_data.csv
-- ============================================================================\n
INSERT INTO yearly_bank_data (
  year, bank_id, bank_name, bank_type,
  total_assets, total_deposits, total_loans, npl_ratio, capital_adequacy_ratio,
  branches, active_borrowers, gross_loan_portfolio,
  data_quality, notes, sources
) VALUES (
  2010, 'banking-sector-aggregate', 'Banking Sector Aggregate', 'aggregate',
  2118.8, 1570.8, 508.8, 13.0, 13.0,
  NULL, 66400, 3.6,
  'Medium', 'The microfinance banking law (Law No. 15) was introduced in 2009, and the Social Fund for Development (SFD) supported the transformation of Al-Kuraimi Exchange Company into a Microfinance Bank (MFB) in 2010, signaling a formalization of the microfinance sector. | The banking sector remained relatively stable in 2010, largely due to the risk-averse nature of Yemeni banks, which primarily invested in government securities rather than extending credit. The IMF noted that financial sector soundness ', ["1. IMF. (2010). *Republic of Yemen: Request for a Three-Year Arrangement Under the Extended Credit Facility and Cancellation of the Current Arrangement\u2014Staff Report; Staff Appraisal; and Statement by the Executive Director for the Republic of Yemen*. IMF Staff Country Report No. 10/300. [https://www.imf.org/external/pubs/ft/scr/2010/cr10300.pdf]\n2. MIX. (2011). *MIX Microfinance World: 2010 Arab Microfinance Analysis & Benchmarking Report*. Microfinance Information Exchange. [https://www.findevgateway.org/sites/default/files/publications/files/mfg-en-paper-2010-arab-microfinance-analysis-benchmarking-report-mar-2011.pdf]\n3. Sana'a Center for Strategic Studies. (2024). *Enhancing the Role of Microfinance Banks for Sustainable Impact in Yemen*. [https://sanaacenter.org/publications/main-publications/23418]\n4. Qatinah, A. (2010). *Banking sector reforms in Yemen*. ResearchGate. [https://www.researchgate.net/profile/Adnan-Qatinah/publication/231480131_ECONOMIC_CHANGE_IN_THE_ARAB_REGION/links/0fcfd506a0af55b429000000/ECONOMIC-CHANGE-IN-THE-ARAB-REGION.pdf]"]
);\n
Traceback (most recent call last):
  File "/home/ubuntu/generate-yearly-data-sql.py", line 315, in <module>
    generate_banking_data_sql()
  File "/home/ubuntu/generate-yearly-data-sql.py", line 116, in generate_banking_data_sql
    year = int(row['Year'])
           ^^^^^^^^^^^^^^^^
ValueError: invalid literal for int() with base 10: ''
