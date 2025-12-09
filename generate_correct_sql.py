#!/usr/bin/env python3
import json
import re

# Load research results
with open('/home/ubuntu/yemen_comprehensive_research.json', 'r') as f:
    data = json.load(f)

def sanitize_sql(text):
    if text is None:
        return ''
    return str(text).replace("'", "''").replace('\\', '\\\\')

# Generate events SQL
events_sql = []
event_id = 1000

for result in data['results']:
    if result['error']:
        continue
    
    output = result['output']
    input_text = result['input']
    
    # Extract year
    year_match = re.search(r'Yemen (\d{4}):', input_text)
    year = year_match.group(1) if year_match else '2020'
    
    date = f"{year}-01-01"
    title_en = f"Major Events {year}" if year_match else input_text[:100]
    title_ar = f"أحداث رئيسية {year}" if year_match else input_text[:100]
    description_en = sanitize_sql(output['key_findings'][:500])
    description_ar = f"ملخص: {description_en[:200]}"
    
    # Map category - events table only accepts: war, policy, humanitarian, economic, international
    category_map = {
        'year': 'economic',
        'causation': 'economic',
        'institution': 'international',
        'actor': 'international',
        'sanctions': 'policy',
        'control': 'war',
        'transparency': 'policy'
    }
    category = category_map.get(output['research_category'], 'economic')
    
    # sources is a JSON array field
    sources_json = sanitize_sql(f'["{output["top_sources"]}"]')
    
    sql = f"""INSERT INTO events (titleEn, titleAr, descriptionEn, descriptionAr, date, category, severity, sources)
VALUES ('{sanitize_sql(title_en)}', '{sanitize_sql(title_ar)}', '{description_en}', '{sanitize_sql(description_ar)}', '{date}', '{category}', 'high', '{sources_json}');"""
    
    events_sql.append(sql)

# Write SQL file
with open('research_events_insert.sql', 'w', encoding='utf-8') as f:
    f.write("-- Comprehensive Research Events Insertions\n")
    f.write(f"-- Total events: {len(events_sql)}\n\n")
    for sql in events_sql:
        f.write(sql + "\n")

print(f"✅ Generated {len(events_sql)} event INSERT statements")
