#!/usr/bin/env python3
"""
Fetch ALL Yemen indicators from World Bank Data API
This script will collect thousands of data points for Yemen (2010-2025)
"""

import sys
import json
import time
from typing import Dict, Any, List

sys.path.append('/opt/.manus/.sandbox-runtime')
from data_api import ApiClient

def get_yemen_indicators(page=1, page_size=100):
    """Fetch Yemen-specific indicators from World Bank"""
    client = ApiClient()
    
    try:
        # Search for Yemen-related indicators
        response = client.call_api('DataBank/indicator_list', query={
            'q': 'Yemen',
            'page': page,
            'pageSize': page_size
        })
        return response
    except Exception as e:
        print(f"Error fetching indicators: {str(e)}")
        return {}

def get_all_indicators(max_pages=50):
    """Fetch all available World Bank indicators"""
    all_indicators = []
    
    for page in range(1, max_pages + 1):
        print(f"Fetching page {page}...")
        result = get_yemen_indicators(page=page, page_size=100)
        
        if not result or 'data' not in result:
            break
            
        indicators = result.get('data', [])
        if not indicators:
            break
            
        all_indicators.extend(indicators)
        
        # Check if we've reached the last page
        if page >= result.get('pages', 0):
            break
            
        time.sleep(0.5)  # Rate limiting
    
    return all_indicators

def categorize_indicators(indicators):
    """Categorize indicators by topic"""
    categories = {}
    
    for indicator in indicators:
        topics = indicator.get('topics', [])
        for topic in topics:
            topic_name = topic.get('value', 'Other')
            if topic_name not in categories:
                categories[topic_name] = []
            categories[topic_name].append(indicator)
    
    return categories

def save_indicators_to_file(indicators, filename='worldbank_indicators.json'):
    """Save indicators to JSON file"""
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(indicators, f, indent=2, ensure_ascii=False)
    print(f"Saved {len(indicators)} indicators to {filename}")

def extract_key_indicators():
    """Extract key economic indicators for Yemen"""
    client = ApiClient()
    
    # Key indicator codes for Yemen
    key_indicators = {
        'NY.GDP.MKTP.CD': 'GDP (current US$)',
        'NY.GDP.PCAP.CD': 'GDP per capita (current US$)',
        'NY.GDP.MKTP.KD.ZG': 'GDP growth (annual %)',
        'FP.CPI.TOTL.ZG': 'Inflation, consumer prices (annual %)',
        'PA.NUS.FCRF': 'Official exchange rate (LCU per US$)',
        'SP.POP.TOTL': 'Population, total',
        'SI.POV.DDAY': 'Poverty headcount ratio',
        'SL.UEM.TOTL.ZS': 'Unemployment, total (% of labor force)',
        'BX.TRF.PWKR.CD.DT': 'Personal remittances, received (current US$)',
        'NE.EXP.GNFS.CD': 'Exports of goods and services (current US$)',
        'NE.IMP.GNFS.CD': 'Imports of goods and services (current US$)',
        'GC.REV.XGRT.GD.ZS': 'Revenue, excluding grants (% of GDP)',
        'GC.XPN.TOTL.GD.ZS': 'Expense (% of GDP)',
        'SH.DYN.MORT': 'Mortality rate, under-5 (per 1,000 live births)',
        'SE.PRM.NENR': 'School enrollment, primary (% net)',
        'SH.MED.BEDS.ZS': 'Hospital beds (per 1,000 people)',
        'EG.ELC.ACCS.ZS': 'Access to electricity (% of population)',
        'SH.H2O.SMDW.ZS': 'People using safely managed drinking water (%)',
        'SP.DYN.LE00.IN': 'Life expectancy at birth, total (years)',
        'EN.POP.DNST': 'Population density (people per sq. km)'
    }
    
    indicator_details = {}
    
    for code, name in key_indicators.items():
        try:
            print(f"Fetching: {name} ({code})")
            result = client.call_api('DataBank/indicator_detail', 
                                   path_params={'indicatorCode': code})
            if result:
                indicator_details[code] = result
            time.sleep(0.3)  # Rate limiting
        except Exception as e:
            print(f"Error fetching {code}: {str(e)}")
    
    return indicator_details

def main():
    print("=" * 60)
    print("WORLD BANK YEMEN DATA COLLECTION")
    print("=" * 60)
    
    # Step 1: Fetch all indicators
    print("\nStep 1: Fetching all World Bank indicators...")
    all_indicators = get_all_indicators(max_pages=50)
    print(f"Total indicators fetched: {len(all_indicators)}")
    
    # Step 2: Categorize indicators
    print("\nStep 2: Categorizing indicators by topic...")
    categories = categorize_indicators(all_indicators)
    print(f"Categories found: {len(categories)}")
    for category, indicators in categories.items():
        print(f"  - {category}: {len(indicators)} indicators")
    
    # Step 3: Save all indicators
    print("\nStep 3: Saving indicators to file...")
    save_indicators_to_file(all_indicators, 
                           '/home/ubuntu/yemen-financial-report/worldbank_all_indicators.json')
    
    # Step 4: Extract key indicators for Yemen
    print("\nStep 4: Extracting key Yemen indicators...")
    key_indicators = extract_key_indicators()
    print(f"Key indicators extracted: {len(key_indicators)}")
    
    # Save key indicators
    save_indicators_to_file(key_indicators,
                           '/home/ubuntu/yemen-financial-report/worldbank_yemen_key_indicators.json')
    
    # Step 5: Generate summary report
    print("\nStep 5: Generating summary report...")
    summary = {
        'total_indicators': len(all_indicators),
        'categories': {cat: len(inds) for cat, inds in categories.items()},
        'key_indicators': list(key_indicators.keys()),
        'collection_date': time.strftime('%Y-%m-%d %H:%M:%S')
    }
    
    with open('/home/ubuntu/yemen-financial-report/worldbank_summary.json', 'w') as f:
        json.dump(summary, f, indent=2)
    
    print("\n" + "=" * 60)
    print("DATA COLLECTION COMPLETE!")
    print("=" * 60)
    print(f"\nFiles created:")
    print("  1. worldbank_all_indicators.json ({} indicators)".format(len(all_indicators)))
    print("  2. worldbank_yemen_key_indicators.json ({} indicators)".format(len(key_indicators)))
    print("  3. worldbank_summary.json")
    print("\nNext steps:")
    print("  - Parse JSON files to extract data points")
    print("  - Insert into database (indicators table)")
    print("  - Repeat for IMF, UN, and other sources")

if __name__ == "__main__":
    main()
