#!/usr/bin/env python3
"""
Process comprehensive research results and generate SQL INSERT statements
for populating the Yemen Economic Observatory database.
"""

import json
import re
from datetime import datetime

def sanitize_sql(text):
    """Escape single quotes for SQL"""
    if text is None:
        return ''
    return str(text).replace("'", "''")

def generate_events_sql(results):
    """Generate SQL for events table"""
    sql_statements = []
    event_id = 1000  # Start from 1000 to avoid conflicts
    
    for result in results:
        if result['error']:
            continue
            
        output = result['output']
        input_text = result['input']
        
        # Extract year from input if it's a year-based research
        year_match = re.search(r'Yemen (\d{4}):', input_text)
        year = year_match.group(1) if year_match else None
        
        # Parse key findings for events
        findings = output['key_findings']
        category = output['research_category']
        
        # Create event entry
        if year:
            date = f"{year}-01-01"
            title_ar = f"أحداث رئيسية {year}"
            title_en = f"Major Events {year}"
        else:
            date = "2020-01-01"  # Default date
            title_ar = input_text[:100]
            title_en = input_text[:100]
        
        description_en = sanitize_sql(findings[:500])
        description_ar = f"ملخص: {description_en[:200]}"
        
        sql = f"""INSERT INTO events (id, title_en, title_ar, description_en, description_ar, date, category, severity, source, created_at, updated_at)
VALUES ({event_id}, '{sanitize_sql(title_en)}', '{sanitize_sql(title_ar)}', '{description_en}', '{sanitize_sql(description_ar)}', '{date}', '{category}', 'high', '{sanitize_sql(output["top_sources"])}', NOW(), NOW());"""
        
        sql_statements.append(sql)
        event_id += 1
    
    return sql_statements

def generate_indicators_sql(results):
    """Generate SQL for indicators table"""
    sql_statements = []
    indicator_id = 2000  # Start from 2000
    
    for result in results:
        if result['error']:
            continue
            
        output = result['output']
        input_text = result['input']
        
        # Extract year
        year_match = re.search(r'(\d{4})', input_text)
        year = int(year_match.group(1)) if year_match else 2020
        
        # Parse findings for indicator values
        findings = output['key_findings']
        
        # Extract GDP if mentioned
        gdp_match = re.search(r'GDP.*?(\-?\d+\.?\d*)%', findings)
        if gdp_match:
            gdp_value = float(gdp_match.group(1))
            sql = f"""INSERT INTO indicators (id, name_en, name_ar, value, unit, year, category, source, confidence_level, created_at, updated_at)
VALUES ({indicator_id}, 'GDP Growth Rate', 'معدل نمو الناتج المحلي الإجمالي', {gdp_value}, 'percent', {year}, 'economic', '{sanitize_sql(output["top_sources"])}', 0.85, NOW(), NOW());"""
            sql_statements.append(sql)
            indicator_id += 1
        
        # Extract inflation if mentioned
        inflation_match = re.search(r'inflation.*?(\d+\.?\d*)%', findings, re.IGNORECASE)
        if inflation_match:
            inflation_value = float(inflation_match.group(1))
            sql = f"""INSERT INTO indicators (id, name_en, name_ar, value, unit, year, category, source, confidence_level, created_at, updated_at)
VALUES ({indicator_id}, 'Inflation Rate', 'معدل التضخم', {inflation_value}, 'percent', {year}, 'economic', '{sanitize_sql(output["top_sources"])}', 0.85, NOW(), NOW());"""
            sql_statements.append(sql)
            indicator_id += 1
        
        # Extract poverty if mentioned
        poverty_match = re.search(r'poverty.*?(\d+\.?\d*)%', findings, re.IGNORECASE)
        if poverty_match:
            poverty_value = float(poverty_match.group(1))
            sql = f"""INSERT INTO indicators (id, name_en, name_ar, value, unit, year, category, source, confidence_level, created_at, updated_at)
VALUES ({indicator_id}, 'Poverty Rate', 'معدل الفقر', {poverty_value}, 'percent', {year}, 'humanitarian', '{sanitize_sql(output["top_sources"])}', 0.80, NOW(), NOW());"""
            sql_statements.append(sql)
            indicator_id += 1
    
    return sql_statements

def main():
    # Load research results
    with open('/home/ubuntu/yemen_comprehensive_research.json', 'r') as f:
        data = json.load(f)
    
    results = data['results']
    
    # Generate SQL statements
    print("-- Generated SQL INSERT statements from comprehensive research")
    print("-- Total research tasks:", len(results))
    print("-- Generated:", datetime.now().isoformat())
    print()
    
    # Events
    print("-- ========================================")
    print("-- EVENTS TABLE")
    print("-- ========================================")
    events_sql = generate_events_sql(results)
    for sql in events_sql:
        print(sql)
        print()
    
    # Indicators
    print("-- ========================================")
    print("-- INDICATORS TABLE")
    print("-- ========================================")
    indicators_sql = generate_indicators_sql(results)
    for sql in indicators_sql:
        print(sql)
        print()
    
    print(f"-- Total SQL statements generated: {len(events_sql) + len(indicators_sql)}")

if __name__ == '__main__':
    main()
