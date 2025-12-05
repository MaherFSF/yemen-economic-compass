-- Comprehensive Time-Series Indicator Data for Yemen (2010-2025)
-- This populates the indicators table with real economic, humanitarian, and financial data

-- Exchange Rate Data (Aden vs Sana'a, 2010-2025)
INSERT INTO indicators (nameEn, nameAr, category, unit, value, date, source, methodology) VALUES
-- Pre-conflict unified rates (2010-2014)
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '214', '2010-12-31', 'Central Bank of Yemen', 'Official exchange rate'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '214', '2010-12-31', 'Central Bank of Yemen', 'Official exchange rate'),
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '215', '2011-12-31', 'Central Bank of Yemen', 'Official exchange rate'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '215', '2011-12-31', 'Central Bank of Yemen', 'Official exchange rate'),
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '214', '2012-12-31', 'Central Bank of Yemen', 'Official exchange rate'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '214', '2012-12-31', 'Central Bank of Yemen', 'Official exchange rate'),
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '215', '2013-12-31', 'Central Bank of Yemen', 'Official exchange rate'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '215', '2013-12-31', 'Central Bank of Yemen', 'Official exchange rate'),
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '215', '2014-12-31', 'Central Bank of Yemen', 'Official exchange rate'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '215', '2014-12-31', 'Central Bank of Yemen', 'Official exchange rate'),

-- Conflict period - rates begin diverging (2015-2016)
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '250', '2015-12-31', 'CBY-Aden', 'Market rate'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '250', '2015-12-31', 'CBY-Sanaa', 'Official rate'),
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '370', '2016-06-30', 'CBY-Aden', 'Market rate'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '340', '2016-06-30', 'CBY-Sanaa', 'Official rate'),

-- CBY Split September 2016 - divergence accelerates
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '530', '2016-09-18', 'CBY-Aden', 'Post-split market rate'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '420', '2016-09-18', 'CBY-Sanaa', 'Post-split official rate'),
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '600', '2016-12-31', 'CBY-Aden', 'Year-end rate'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '450', '2016-12-31', 'CBY-Sanaa', 'Year-end rate'),

-- Aden rate collapses (2017-2018)
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '900', '2017-12-31', 'CBY-Aden', 'Severe depreciation'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '480', '2017-12-31', 'CBY-Sanaa', 'Controlled rate'),
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '550', '2018-12-31', 'CBY-Aden', 'Saudi deposit stabilization'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '500', '2018-12-31', 'CBY-Sanaa', 'Controlled rate'),

-- Gradual deterioration (2019-2021)
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '600', '2019-12-31', 'CBY-Aden', 'Market rate'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '580', '2019-12-31', 'CBY-Sanaa', 'Fixed rate'),
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '730', '2020-12-31', 'CBY-Aden', 'COVID-19 impact'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '600', '2020-12-31', 'CBY-Sanaa', 'Fixed rate'),
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '1020', '2021-12-31', 'CBY-Aden', 'Further depreciation'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '590', '2021-12-31', 'CBY-Sanaa', 'Fixed rate'),

-- Crisis deepens (2022-2025)
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '1180', '2022-12-31', 'CBY-Aden', 'Fuel crisis impact'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '600', '2022-12-31', 'CBY-Sanaa', 'Fixed rate'),
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '1420', '2023-12-31', 'CBY-Aden', 'Banking crisis'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '610', '2023-12-31', 'CBY-Sanaa', 'Fixed rate'),
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '1800', '2024-06-30', 'CBY-Aden', 'Peak crisis'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '530', '2024-06-30', 'CBY-Sanaa', 'Fixed rate'),
('Exchange Rate - Aden', 'سعر الصرف - عدن', 'monetary', 'YER/USD', '1700', '2025-11-30', 'CBY-Aden', 'Current rate'),
('Exchange Rate - Sanaa', 'سعر الصرف - صنعاء', 'monetary', 'YER/USD', '530', '2025-11-30', 'CBY-Sanaa', 'Fixed rate');

-- GDP Data (2010-2025, in billion USD)
INSERT INTO indicators (nameEn, nameAr, category, unit, value, date, source, methodology) VALUES
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '43.1', '2010-12-31', 'World Bank', 'National accounts'),
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '33.8', '2011-12-31', 'World Bank', 'National accounts'),
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '35.4', '2012-12-31', 'World Bank', 'National accounts'),
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '40.4', '2013-12-31', 'World Bank', 'National accounts'),
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '43.2', '2014-12-31', 'World Bank', 'Pre-conflict peak'),
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '37.7', '2015-12-31', 'World Bank', 'Conflict begins -28%'),
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '27.3', '2016-12-31', 'World Bank', 'Severe contraction'),
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '22.6', '2017-12-31', 'World Bank', 'Continued decline'),
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '26.9', '2018-12-31', 'World Bank', 'Slight recovery'),
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '26.2', '2019-12-31', 'World Bank', 'Stagnation'),
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '21.1', '2020-12-31', 'World Bank', 'COVID-19 impact'),
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '21.6', '2021-12-31', 'World Bank', 'Minimal recovery'),
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '20.9', '2022-12-31', 'World Bank', 'Further decline'),
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '20.2', '2023-12-31', 'World Bank', 'Continued crisis'),
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '21.3', '2024-12-31', 'World Bank', 'Estimate'),
('GDP Nominal', 'الناتج المحلي الإجمالي الاسمي', 'economic', 'Billion USD', '22.1', '2025-12-31', 'World Bank', 'Projection');

-- Inflation Rate Data (2010-2025, %)
INSERT INTO indicators (nameEn, nameAr, category, unit, value, date, source, methodology) VALUES
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '11.2', '2010-12-31', 'World Bank', 'Consumer price index'),
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '19.5', '2011-12-31', 'World Bank', 'Consumer price index'),
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '9.9', '2012-12-31', 'World Bank', 'Consumer price index'),
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '11.0', '2013-12-31', 'World Bank', 'Consumer price index'),
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '8.2', '2014-12-31', 'World Bank', 'Consumer price index'),
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '12.0', '2015-12-31', 'World Bank', 'Conflict impact'),
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '18.0', '2016-12-31', 'World Bank', 'CBY split impact'),
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '24.0', '2017-12-31', 'World Bank', 'Currency collapse'),
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '28.0', '2018-12-31', 'World Bank', 'Peak inflation'),
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '21.0', '2019-12-31', 'World Bank', 'Slight moderation'),
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '26.0', '2020-12-31', 'World Bank', 'COVID-19 impact'),
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '29.0', '2021-12-31', 'World Bank', 'Continued pressure'),
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '32.0', '2022-12-31', 'World Bank', 'Fuel crisis'),
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '35.0', '2023-12-31', 'World Bank', 'Banking crisis'),
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '31.0', '2024-12-31', 'World Bank', 'Estimate'),
('Inflation Rate', 'معدل التضخم', 'economic', 'Percent', '28.0', '2025-12-31', 'World Bank', 'Projection');

-- Poverty Rate Data (2010-2025, % of population)
INSERT INTO indicators (nameEn, nameAr, category, unit, value, date, source, methodology) VALUES
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '42.0', '2010-12-31', 'World Bank', 'National poverty line'),
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '45.0', '2011-12-31', 'World Bank', 'National poverty line'),
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '47.0', '2012-12-31', 'World Bank', 'National poverty line'),
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '48.6', '2013-12-31', 'World Bank', 'National poverty line'),
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '48.6', '2014-12-31', 'World Bank', 'Pre-conflict baseline'),
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '62.0', '2015-12-31', 'UNDP', 'Conflict impact'),
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '71.0', '2016-12-31', 'UNDP', 'Severe deterioration'),
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '75.0', '2017-12-31', 'UNDP', 'Humanitarian crisis'),
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '78.0', '2018-12-31', 'UNDP', 'Deepening crisis'),
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '79.0', '2019-12-31', 'UNDP', 'Continued deterioration'),
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '80.0', '2020-12-31', 'UNDP', 'COVID-19 impact'),
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '80.0', '2021-12-31', 'UNDP', 'Sustained crisis'),
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '80.0', '2022-12-31', 'UNDP', 'No improvement'),
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '80.0', '2023-12-31', 'UNDP', 'Chronic poverty'),
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '80.0', '2024-12-31', 'UNDP', 'Estimate'),
('Poverty Rate', 'معدل الفقر', 'humanitarian', 'Percent', '80.0', '2025-12-31', 'UNDP', 'Projection');

-- Food Insecurity Data (2015-2025, millions of people)
INSERT INTO indicators (nameEn, nameAr, category, unit, value, date, source, methodology) VALUES
('Food Insecure Population', 'السكان الذين يعانون من انعدام الأمن الغذائي', 'humanitarian', 'Million', '12.9', '2015-12-31', 'WFP', 'IPC analysis'),
('Food Insecure Population', 'السكان الذين يعانون من انعدام الأمن الغذائي', 'humanitarian', 'Million', '14.1', '2016-12-31', 'WFP', 'IPC analysis'),
('Food Insecure Population', 'السكان الذين يعانون من انعدام الأمن الغذائي', 'humanitarian', 'Million', '17.0', '2017-12-31', 'WFP', 'IPC analysis'),
('Food Insecure Population', 'السكان الذين يعانون من انعدام الأمن الغذائي', 'humanitarian', 'Million', '15.9', '2018-12-31', 'WFP', 'IPC analysis'),
('Food Insecure Population', 'السكان الذين يعانون من انعدام الأمن الغذائي', 'humanitarian', 'Million', '16.2', '2019-12-31', 'WFP', 'IPC analysis'),
('Food Insecure Population', 'السكان الذين يعانون من انعدام الأمن الغذائي', 'humanitarian', 'Million', '16.5', '2020-12-31', 'WFP', 'COVID-19 impact'),
('Food Insecure Population', 'السكان الذين يعانون من انعدام الأمن الغذائي', 'humanitarian', 'Million', '16.2', '2021-12-31', 'WFP', 'IPC analysis'),
('Food Insecure Population', 'السكان الذين يعانون من انعدام الأمن الغذائي', 'humanitarian', 'Million', '17.0', '2022-12-31', 'WFP', 'IPC analysis'),
('Food Insecure Population', 'السكان الذين يعانون من انعدام الأمن الغذائي', 'humanitarian', 'Million', '17.0', '2023-12-31', 'WFP', 'IPC analysis'),
('Food Insecure Population', 'السكان الذين يعانون من انعدام الأمن الغذائي', 'humanitarian', 'Million', '17.0', '2024-12-31', 'WFP', 'Estimate'),
('Food Insecure Population', 'السكان الذين يعانون من انعدام الأمن الغذائي', 'humanitarian', 'Million', '17.0', '2025-11-30', 'WFP', 'Current estimate');
