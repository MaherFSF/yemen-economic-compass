#!/usr/bin/env python3
"""
Generate SQL INSERT statements from parallel research data
This creates a massive SQL file that can be executed directly
"""

import json
import re
from datetime import datetime

# Load research data
with open('/home/ubuntu/yemen_years_research.json', 'r') as f:
    years_data = json.load(f)

with open('/home/ubuntu/yemen_actors_research.json', 'r') as f:
    actors_data = json.load(f)

# Output SQL file
output_file = '/home/ubuntu/yemen-financial-report/massive-data-insert.sql'
sql_statements = []

print("=" * 60)
print("GENERATING SQL FROM RESEARCH DATA")
print("=" * 60)

# ============================================================================
# EVENTS FROM YEARS RESEARCH
# ============================================================================

print("\n📅 Generating Events SQL...")
event_count = 0

for year_result in years_data['results']:
    if 'output' not in year_result or not year_result['output']:
        continue
    
    output = year_result['output']
    year = output.get('year', '')
    if not year:
        continue
    
    # Main year summary event
    title_en = f"Yemen Economy {year} - Year in Review"
    title_ar = f"اقتصاد اليمن {year} - مراجعة السنة"
    desc_en = output.get('major_events_summary', '').replace("'", "''")
    desc_ar = desc_en  # TODO: Translate
    date = f"{year}-12-31"
    sources = output.get('sources', '').replace("'", "''")
    
    sql = f"""INSERT INTO events (titleEn, titleAr, descriptionEn, descriptionAr, date, category, impactLevel, sources, tags)
VALUES ('{title_en}', '{title_ar}', '{desc_en}', '{desc_ar}', '{date}', 'economic', 'high', '{sources}', 'year-{year},annual-review');"""
    
    sql_statements.append(sql)
    event_count += 1
    
    # Parse causations to create individual events
    causations_text = output.get('causations', '')
    if causations_text:
        lines = [line.strip() for line in causations_text.split('\n') if line.strip()]
        for line in lines:
            match = re.match(r'^(.+?)\s*→\s*(.+?)(?:\s*\((.+?)\))?$', line)
            if match:
                cause, effect, impact = match.groups()
                cause = cause.strip().replace("'", "''")
                effect = effect.strip().replace("'", "''")
                impact = (impact or '').strip().replace("'", "''")
                
                event_title = cause[:200]  # Limit length
                event_desc = f"{cause} led to {effect}. {impact}"[:500]
                
                sql = f"""INSERT INTO events (titleEn, titleAr, descriptionEn, descriptionAr, date, category, impactLevel, sources, tags)
VALUES ('{event_title}', '{event_title}', '{event_desc}', '{event_desc}', '{year}-06-30', 'political', 'medium', '{sources}', 'year-{year},causation');"""
                
                sql_statements.append(sql)
                event_count += 1

print(f"  ✓ Generated {event_count} event INSERT statements")

# ============================================================================
# INDICATORS FROM YEARS RESEARCH
# ============================================================================

print("\n📊 Generating Indicators SQL...")
indicator_count = 0

for year_result in years_data['results']:
    if 'output' not in year_result or not year_result['output']:
        continue
    
    output = year_result['output']
    year = output.get('year', '')
    if not year:
        continue
    
    date = f"{year}-12-31"
    
    # GDP Indicator
    gdp_data = output.get('gdp_data', '')
    if gdp_data:
        gdp_match = re.search(r'\$?([\d.]+)B?', gdp_data)
        if gdp_match:
            value = gdp_match.group(1)
            source = gdp_data.replace("'", "''")
            
            sql = f"""INSERT INTO indicators (nameEn, nameAr, category, value, unit, date, source, methodology)
VALUES ('GDP (current US$) - {year}', 'الناتج المحلي الإجمالي - {year}', 'economic', '{value}', 'billion USD', '{date}', '{source}', 'World Bank/IMF national accounts');"""
            
            sql_statements.append(sql)
            indicator_count += 1
    
    # Exchange Rate Indicator
    er_data = output.get('exchange_rate', '')
    if er_data:
        er_match = re.search(r'([\d.]+)\s*YER/USD', er_data)
        if er_match:
            value = er_match.group(1)
            source = er_data.replace("'", "''")
            
            sql = f"""INSERT INTO indicators (nameEn, nameAr, category, value, unit, date, source, methodology)
VALUES ('Exchange Rate (YER/USD) - {year}', 'سعر الصرف - {year}', 'financial', '{value}', 'YER/USD', '{date}', '{source}', 'Central Bank of Yemen');"""
            
            sql_statements.append(sql)
            indicator_count += 1
    
    # Inflation Rate Indicator
    infl_data = output.get('inflation_rate', '')
    if infl_data:
        infl_match = re.search(r'([\d.]+)%', infl_data)
        if infl_match:
            value = infl_match.group(1)
            source = infl_data.replace("'", "''")
            
            sql = f"""INSERT INTO indicators (nameEn, nameAr, category, value, unit, date, source, methodology)
VALUES ('Inflation Rate (CPI) - {year}', 'معدل التضخم - {year}', 'economic', '{value}', 'percent', '{date}', '{source}', 'Consumer Price Index');"""
            
            sql_statements.append(sql)
            indicator_count += 1
    
    # Humanitarian Indicators
    hum_data = output.get('humanitarian_data', '')
    if hum_data:
        # Food Insecurity
        food_match = re.search(r'([\d.]+)M?\s+food\s+insecure', hum_data, re.IGNORECASE)
        if food_match:
            value = food_match.group(1)
            unit = 'million people' if 'M' in food_match.group(0) else 'people'
            source = hum_data.replace("'", "''")
            
            sql = f"""INSERT INTO indicators (nameEn, nameAr, category, value, unit, date, source, methodology)
VALUES ('Food Insecure Population - {year}', 'السكان الذين يعانون من انعدام الأمن الغذائي - {year}', 'humanitarian', '{value}', '{unit}', '{date}', '{source}', 'UN OCHA/WFP');"""
            
            sql_statements.append(sql)
            indicator_count += 1
        
        # IDPs
        idp_match = re.search(r'([\d.]+)M?\s+IDPs?', hum_data, re.IGNORECASE)
        if idp_match:
            value = idp_match.group(1)
            unit = 'million people' if 'M' in idp_match.group(0) else 'people'
            source = hum_data.replace("'", "''")
            
            sql = f"""INSERT INTO indicators (nameEn, nameAr, category, value, unit, date, source, methodology)
VALUES ('Internally Displaced Persons - {year}', 'النازحون داخلياً - {year}', 'humanitarian', '{value}', '{unit}', '{date}', '{source}', 'IOM/UNHCR');"""
            
            sql_statements.append(sql)
            indicator_count += 1
        
        # Funding
        fund_match = re.search(r'\$?([\d.]+)M?\s+funding', hum_data, re.IGNORECASE)
        if fund_match:
            value = fund_match.group(1)
            source = hum_data.replace("'", "''")
            
            sql = f"""INSERT INTO indicators (nameEn, nameAr, category, value, unit, date, source, methodology)
VALUES ('Humanitarian Funding - {year}', 'التمويل الإنساني - {year}', 'humanitarian', '{value}', 'million USD', '{date}', '{source}', 'UN OCHA FTS');"""
            
            sql_statements.append(sql)
            indicator_count += 1

print(f"  ✓ Generated {indicator_count} indicator INSERT statements")

# ============================================================================
# ACTORS FROM ACTORS RESEARCH
# ============================================================================

print("\n👥 Generating Actors SQL...")
actor_count = 0

for actor_result in actors_data['results']:
    if 'output' not in actor_result or not actor_result['output']:
        continue
    
    output = actor_result['output']
    actor_name = output.get('actor_name', '')
    if not actor_name:
        continue
    
    actor_name_clean = actor_name.replace("'", "''")
    actor_type = output.get('actor_type', 'other').replace("'", "''")
    role_summary = output.get('role_summary', '').replace("'", "''")
    website = output.get('contact_info', '').replace("'", "''")[:200]
    
    sql = f"""INSERT INTO actors (nameEn, nameAr, type, descriptionEn, descriptionAr, website, active)
VALUES ('{actor_name_clean}', '{actor_name_clean}', '{actor_type}', '{role_summary}', '{role_summary}', '{website}', true);"""
    
    sql_statements.append(sql)
    actor_count += 1

print(f"  ✓ Generated {actor_count} actor INSERT statements")

# ============================================================================
# WRITE SQL FILE
# ============================================================================

print(f"\n💾 Writing SQL file...")

with open(output_file, 'w', encoding='utf-8') as f:
    f.write("-- MASSIVE DATA INSERTION SCRIPT\n")
    f.write("-- Generated from parallel research data\n")
    f.write(f"-- Generated: {datetime.now().isoformat()}\n")
    f.write(f"-- Total statements: {len(sql_statements)}\n\n")
    
    for sql in sql_statements:
        f.write(sql + "\n\n")

print(f"  ✓ Wrote {len(sql_statements)} SQL statements to {output_file}")

# ============================================================================
# SUMMARY
# ============================================================================

print("\n" + "=" * 60)
print("SQL GENERATION COMPLETE!")
print("=" * 60)
print(f"""
📊 GENERATED SQL STATEMENTS:
  - Events: {event_count}
  - Indicators: {indicator_count}
  - Actors: {actor_count}
  
  TOTAL: {len(sql_statements)} INSERT statements

📁 Output file: {output_file}

Next step: Execute the SQL file to populate the database
""")
