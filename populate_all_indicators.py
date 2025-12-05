#!/usr/bin/env python3
"""
Comprehensive Indicators Database Population Script
Populates Yemen Economic Compass with time series data (2010-2025)
"""

import mysql.connector
import os
from datetime import datetime

# Database connection from environment variables
db_config = {
    'host': os.getenv('DATABASE_HOST', 'localhost').split(':')[0],
    'port': int(os.getenv('DATABASE_HOST', 'localhost:3306').split(':')[1] if ':' in os.getenv('DATABASE_HOST', 'localhost:3306') else 3306),
    'user': os.getenv('DATABASE_USER', 'root'),
    'password': os.getenv('DATABASE_PASSWORD', ''),
    'database': os.getenv('DATABASE_NAME', 'yemen_compass')
}

# All indicators data
indicators_data = [
    # Exchange Rate Aden (YER/USD) - 12 data points
    ('Exchange Rate (Aden)', 'سعر الصرف (عدن)', 'Currency', 'YER/USD', '215', '2014-12-31', 'CBY-Aden', 'Official rate'),
    ('Exchange Rate (Aden)', 'سعر الصرف (عدن)', 'Currency', 'YER/USD', '250', '2015-12-31', 'CBY-Aden', 'Official rate'),
    ('Exchange Rate (Aden)', 'سعر الصرف (عدن)', 'Currency', 'YER/USD', '250', '2016-12-31', 'CBY-Aden', 'Official rate'),
    ('Exchange Rate (Aden)', 'سعر الصرف (عدن)', 'Currency', 'YER/USD', '250', '2017-12-31', 'CBY-Aden', 'Official rate'),
    ('Exchange Rate (Aden)', 'سعر الصرف (عدن)', 'Currency', 'YER/USD', '486', '2018-12-31', 'CBY-Aden', 'Official rate'),
    ('Exchange Rate (Aden)', 'سعر الصرف (عدن)', 'Currency', 'YER/USD', '580', '2019-12-31', 'CBY-Aden', 'Official rate'),
    ('Exchange Rate (Aden)', 'سعر الصرف (عدن)', 'Currency', 'YER/USD', '710', '2020-12-31', 'CBY-Aden', 'Official rate'),
    ('Exchange Rate (Aden)', 'سعر الصرف (عدن)', 'Currency', 'YER/USD', '1030', '2021-12-31', 'CBY-Aden', 'Parallel market'),
    ('Exchange Rate (Aden)', 'سعر الصرف (عدن)', 'Currency', 'YER/USD', '1180', '2022-12-31', 'CBY-Aden', 'Parallel market'),
    ('Exchange Rate (Aden)', 'سعر الصرف (عدن)', 'Currency', 'YER/USD', '1300', '2023-12-31', 'CBY-Aden', 'Parallel market'),
    ('Exchange Rate (Aden)', 'سعر الصرف (عدن)', 'Currency', 'YER/USD', '1650', '2024-12-31', 'CBY-Aden', 'Parallel market'),
    ('Exchange Rate (Aden)', 'سعر الصرف (عدن)', 'Currency', 'YER/USD', '1800', '2025-01-31', 'CBY-Aden', 'Parallel market'),
    
    # Exchange Rate Sanaa (YER/USD) - 12 data points
    ('Exchange Rate (Sanaa)', 'سعر الصرف (صنعاء)', 'Currency', 'YER/USD', '215', '2014-12-31', 'CBY-Sanaa', 'Official rate'),
    ('Exchange Rate (Sanaa)', 'سعر الصرف (صنعاء)', 'Currency', 'YER/USD', '250', '2015-12-31', 'CBY-Sanaa', 'Official rate'),
    ('Exchange Rate (Sanaa)', 'سعر الصرف (صنعاء)', 'Currency', 'YER/USD', '250', '2016-12-31', 'CBY-Sanaa', 'Official rate'),
    ('Exchange Rate (Sanaa)', 'سعر الصرف (صنعاء)', 'Currency', 'YER/USD', '250', '2017-12-31', 'CBY-Sanaa', 'Official rate'),
    ('Exchange Rate (Sanaa)', 'سعر الصرف (صنعاء)', 'Currency', 'YER/USD', '480', '2018-12-31', 'CBY-Sanaa', 'Parallel market'),
    ('Exchange Rate (Sanaa)', 'سعر الصرف (صنعاء)', 'Currency', 'YER/USD', '600', '2019-12-31', 'CBY-Sanaa', 'Parallel market'),
    ('Exchange Rate (Sanaa)', 'سعر الصرف (صنعاء)', 'Currency', 'YER/USD', '620', '2020-12-31', 'CBY-Sanaa', 'Parallel market'),
    ('Exchange Rate (Sanaa)', 'سعر الصرف (صنعاء)', 'Currency', 'YER/USD', '600', '2021-12-31', 'CBY-Sanaa', 'Parallel market'),
    ('Exchange Rate (Sanaa)', 'سعر الصرف (صنعاء)', 'Currency', 'YER/USD', '560', '2022-12-31', 'CBY-Sanaa', 'Parallel market'),
    ('Exchange Rate (Sanaa)', 'سعر الصرف (صنعاء)', 'Currency', 'YER/USD', '530', '2023-12-31', 'CBY-Sanaa', 'Parallel market'),
    ('Exchange Rate (Sanaa)', 'سعر الصرف (صنعاء)', 'Currency', 'YER/USD', '520', '2024-12-31', 'CBY-Sanaa', 'Parallel market'),
    ('Exchange Rate (Sanaa)', 'سعر الصرف (صنعاء)', 'Currency', 'YER/USD', '560', '2025-01-31', 'CBY-Sanaa', 'Parallel market'),
    
    # Inflation Rate (%) - 16 data points
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '11.2', '2010-12-31', 'IMF', 'CPI annual change'),
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '19.5', '2011-12-31', 'IMF', 'CPI annual change'),
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '9.9', '2012-12-31', 'IMF', 'CPI annual change'),
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '11.0', '2013-12-31', 'IMF', 'CPI annual change'),
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '8.2', '2014-12-31', 'IMF', 'CPI annual change'),
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '39.4', '2015-12-31', 'IMF', 'CPI annual change'),
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '5.2', '2016-12-31', 'IMF', 'CPI annual change'),
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '24.7', '2017-12-31', 'IMF', 'CPI annual change'),
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '41.8', '2018-12-31', 'IMF', 'CPI annual change'),
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '10.0', '2019-12-31', 'IMF', 'CPI annual change'),
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '25.0', '2020-12-31', 'IMF', 'CPI annual change'),
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '45.0', '2021-12-31', 'IMF', 'CPI annual change'),
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '35.0', '2022-12-31', 'IMF', 'CPI annual change'),
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '28.0', '2023-12-31', 'IMF', 'CPI annual change'),
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '32.0', '2024-12-31', 'IMF Estimate', 'CPI annual change'),
    ('Inflation Rate', 'معدل التضخم', 'Prices', 'Percent', '30.0', '2025-12-31', 'IMF Projection', 'CPI annual change'),
    
    # Poverty Headcount (%) - 7 data points
    ('Poverty Headcount', 'نسبة الفقر', 'Social', 'Percent', '42.0', '2010-12-31', 'World Bank', 'Below national poverty line'),
    ('Poverty Headcount', 'نسبة الفقر', 'Social', 'Percent', '54.5', '2014-12-31', 'World Bank', 'Below national poverty line'),
    ('Poverty Headcount', 'نسبة الفقر', 'Social', 'Percent', '62.0', '2016-12-31', 'World Bank Estimate', 'Below national poverty line'),
    ('Poverty Headcount', 'نسبة الفقر', 'Social', 'Percent', '75.0', '2019-12-31', 'World Bank Estimate', 'Below national poverty line'),
    ('Poverty Headcount', 'نسبة الفقر', 'Social', 'Percent', '79.0', '2020-12-31', 'World Bank Estimate', 'Below national poverty line'),
    ('Poverty Headcount', 'نسبة الفقر', 'Social', 'Percent', '80.0', '2021-12-31', 'World Bank Estimate', 'Below national poverty line'),
    ('Poverty Headcount', 'نسبة الفقر', 'Social', 'Percent', '80.0', '2024-12-31', 'World Bank Estimate', 'Below national poverty line'),
    
    # Food Insecurity (Million People) - 8 data points
    ('Food Insecurity', 'انعدام الأمن الغذائي', 'Humanitarian', 'Million People', '10.2', '2015-12-31', 'WFP', 'IPC Phase 3+'),
    ('Food Insecurity', 'انعدام الأمن الغذائي', 'Humanitarian', 'Million People', '14.1', '2017-12-31', 'WFP', 'IPC Phase 3+'),
    ('Food Insecurity', 'انعدام الأمن الغذائي', 'Humanitarian', 'Million People', '15.9', '2018-12-31', 'WFP', 'IPC Phase 3+'),
    ('Food Insecurity', 'انعدام الأمن الغذائي', 'Humanitarian', 'Million People', '16.2', '2019-12-31', 'WFP', 'IPC Phase 3+'),
    ('Food Insecurity', 'انعدام الأمن الغذائي', 'Humanitarian', 'Million People', '16.5', '2020-12-31', 'WFP', 'IPC Phase 3+'),
    ('Food Insecurity', 'انعدام الأمن الغذائي', 'Humanitarian', 'Million People', '16.9', '2021-12-31', 'WFP', 'IPC Phase 3+'),
    ('Food Insecurity', 'انعدام الأمن الغذائي', 'Humanitarian', 'Million People', '17.0', '2022-12-31', 'WFP', 'IPC Phase 3+'),
    ('Food Insecurity', 'انعدام الأمن الغذائي', 'Humanitarian', 'Million People', '17.3', '2024-12-31', 'WFP', 'IPC Phase 3+'),
    
    # Remittances (USD Billions) - 9 data points
    ('Remittances', 'التحويلات المالية', 'External Flows', 'USD Billions', '3.3', '2010-12-31', 'World Bank', 'Personal remittances received'),
    ('Remittances', 'التحويلات المالية', 'External Flows', 'USD Billions', '3.4', '2013-12-31', 'World Bank', 'Personal remittances received'),
    ('Remittances', 'التحويلات المالية', 'External Flows', 'USD Billions', '3.4', '2014-12-31', 'World Bank', 'Personal remittances received'),
    ('Remittances', 'التحويلات المالية', 'External Flows', 'USD Billions', '3.4', '2015-12-31', 'World Bank', 'Personal remittances received'),
    ('Remittances', 'التحويلات المالية', 'External Flows', 'USD Billions', '3.6', '2016-12-31', 'World Bank', 'Personal remittances received'),
    ('Remittances', 'التحويلات المالية', 'External Flows', 'USD Billions', '3.8', '2017-12-31', 'World Bank', 'Personal remittances received'),
    ('Remittances', 'التحويلات المالية', 'External Flows', 'USD Billions', '3.8', '2020-12-31', 'World Bank', 'Personal remittances received'),
    ('Remittances', 'التحويلات المالية', 'External Flows', 'USD Billions', '4.0', '2022-12-31', 'World Bank Estimate', 'Personal remittances received'),
    ('Remittances', 'التحويلات المالية', 'External Flows', 'USD Billions', '3.8', '2024-12-31', 'World Bank Estimate', 'Personal remittances received'),
    
    # Humanitarian Aid (USD Billions) - 11 data points
    ('Humanitarian Aid', 'المساعدات الإنسانية', 'External Flows', 'USD Billions', '0.4', '2014-12-31', 'UN OCHA FTS', 'Total funding'),
    ('Humanitarian Aid', 'المساعدات الإنسانية', 'External Flows', 'USD Billions', '1.6', '2015-12-31', 'UN OCHA FTS', 'Total funding'),
    ('Humanitarian Aid', 'المساعدات الإنسانية', 'External Flows', 'USD Billions', '1.8', '2016-12-31', 'UN OCHA FTS', 'Total funding'),
    ('Humanitarian Aid', 'المساعدات الإنسانية', 'External Flows', 'USD Billions', '2.1', '2017-12-31', 'UN OCHA FTS', 'Total funding'),
    ('Humanitarian Aid', 'المساعدات الإنسانية', 'External Flows', 'USD Billions', '2.0', '2018-12-31', 'UN OCHA FTS', 'Total funding'),
    ('Humanitarian Aid', 'المساعدات الإنسانية', 'External Flows', 'USD Billions', '3.2', '2019-12-31', 'UN OCHA FTS', 'Total funding'),
    ('Humanitarian Aid', 'المساعدات الإنسانية', 'External Flows', 'USD Billions', '1.9', '2020-12-31', 'UN OCHA FTS', 'Total funding'),
    ('Humanitarian Aid', 'المساعدات الإنسانية', 'External Flows', 'USD Billions', '2.3', '2021-12-31', 'UN OCHA FTS', 'Total funding'),
    ('Humanitarian Aid', 'المساعدات الإنسانية', 'External Flows', 'USD Billions', '2.3', '2022-12-31', 'UN OCHA FTS', 'Total funding'),
    ('Humanitarian Aid', 'المساعدات الإنسانية', 'External Flows', 'USD Billions', '2.5', '2023-12-31', 'UN OCHA FTS', 'Total funding'),
    ('Humanitarian Aid', 'المساعدات الإنسانية', 'External Flows', 'USD Billions', '2.4', '2024-12-31', 'UN OCHA FTS', 'Total funding'),
    
    # Oil Production (Thousand bbl/day) - 15 data points
    ('Oil Production', 'إنتاج النفط', 'Natural Resources', 'Thousand bbl/day', '260', '2010-12-31', 'BP Statistical Review', 'Crude oil production'),
    ('Oil Production', 'إنتاج النفط', 'Natural Resources', 'Thousand bbl/day', '155', '2011-12-31', 'BP Statistical Review', 'Crude oil production'),
    ('Oil Production', 'إنتاج النفط', 'Natural Resources', 'Thousand bbl/day', '153', '2012-12-31', 'BP Statistical Review', 'Crude oil production'),
    ('Oil Production', 'إنتاج النفط', 'Natural Resources', 'Thousand bbl/day', '177', '2013-12-31', 'BP Statistical Review', 'Crude oil production'),
    ('Oil Production', 'إنتاج النفط', 'Natural Resources', 'Thousand bbl/day', '133', '2014-12-31', 'BP Statistical Review', 'Crude oil production'),
    ('Oil Production', 'إنتاج النفط', 'Natural Resources', 'Thousand bbl/day', '18', '2015-12-31', 'BP Statistical Review', 'Crude oil production'),
    ('Oil Production', 'إنتاج النفط', 'Natural Resources', 'Thousand bbl/day', '12', '2016-12-31', 'BP Statistical Review', 'Crude oil production'),
    ('Oil Production', 'إنتاج النفط', 'Natural Resources', 'Thousand bbl/day', '45', '2017-12-31', 'BP Statistical Review', 'Crude oil production'),
    ('Oil Production', 'إنتاج النفط', 'Natural Resources', 'Thousand bbl/day', '65', '2018-12-31', 'BP Statistical Review', 'Crude oil production'),
    ('Oil Production', 'إنتاج النفط', 'Natural Resources', 'Thousand bbl/day', '70', '2019-12-31', 'BP Statistical Review', 'Crude oil production'),
    ('Oil Production', 'إنتاج النفط', 'Natural Resources', 'Thousand bbl/day', '55', '2020-12-31', 'BP Statistical Review', 'Crude oil production'),
    ('Oil Production', 'إنتاج النفط', 'Natural Resources', 'Thousand bbl/day', '45', '2021-12-31', 'BP Statistical Review', 'Crude oil production'),
    ('Oil Production', 'إنتاج النفط', 'Natural Resources', 'Thousand bbl/day', '40', '2022-12-31', 'BP Statistical Review', 'Crude oil production'),
    ('Oil Production', 'إنتاج النفط', 'Natural Resources', 'Thousand bbl/day', '35', '2023-12-31', 'BP Statistical Review', 'Crude oil production'),
    ('Oil Production', 'إنتاج النفط', 'Natural Resources', 'Thousand bbl/day', '30', '2024-12-31', 'Industry Estimates', 'Crude oil production'),
    
    # Population (Million) - 9 data points
    ('Population', 'عدد السكان', 'Demographics', 'Million', '24.0', '2010-12-31', 'UN Population Division', 'Total population'),
    ('Population', 'عدد السكان', 'Demographics', 'Million', '25.0', '2012-12-31', 'UN Population Division', 'Total population'),
    ('Population', 'عدد السكان', 'Demographics', 'Million', '26.2', '2014-12-31', 'UN Population Division', 'Total population'),
    ('Population', 'عدد السكان', 'Demographics', 'Million', '27.6', '2016-12-31', 'UN Population Division', 'Total population'),
    ('Population', 'عدد السكان', 'Demographics', 'Million', '28.5', '2018-12-31', 'UN Population Division', 'Total population'),
    ('Population', 'عدد السكان', 'Demographics', 'Million', '29.8', '2020-12-31', 'UN Population Division', 'Total population'),
    ('Population', 'عدد السكان', 'Demographics', 'Million', '30.5', '2022-12-31', 'UN Population Division', 'Total population'),
    ('Population', 'عدد السكان', 'Demographics', 'Million', '31.2', '2024-12-31', 'UN Population Division', 'Total population'),
    ('Population', 'عدد السكان', 'Demographics', 'Million', '31.9', '2025-12-31', 'UN Population Division', 'Total population projection'),
]

def main():
    print("Connecting to database...")
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        print(f"✓ Connected to database: {db_config['database']}")
        
        # Insert all indicators
        insert_query = """
        INSERT INTO indicators (nameEn, nameAr, category, unit, value, date, source, methodology)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """
        
        print(f"\nInserting {len(indicators_data)} indicator data points...")
        cursor.executemany(insert_query, indicators_data)
        conn.commit()
        
        print(f"✓ Successfully inserted {cursor.rowcount} indicators")
        
        # Verify insertion
        cursor.execute("SELECT COUNT(*) FROM indicators")
        total_count = cursor.fetchone()[0]
        print(f"✓ Total indicators in database: {total_count}")
        
        # Show summary by category
        cursor.execute("""
            SELECT category, COUNT(*) as count 
            FROM indicators 
            GROUP BY category 
            ORDER BY count DESC
        """)
        print("\n📊 Indicators by Category:")
        for category, count in cursor.fetchall():
            print(f"   {category}: {count} data points")
        
        cursor.close()
        conn.close()
        print("\n✓ Database population complete!")
        
    except mysql.connector.Error as err:
        print(f"✗ Database error: {err}")
        return 1
    except Exception as e:
        print(f"✗ Error: {e}")
        return 1
    
    return 0

if __name__ == "__main__":
    exit(main())
