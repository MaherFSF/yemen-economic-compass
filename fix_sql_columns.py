#!/usr/bin/env python3
import re

# Read the SQL file
with open('comprehensive_research_inserts.sql', 'r') as f:
    content = f.read()

# Fix column names from camelCase to snake_case to match DB schema
replacements = {
    'title_en': 'titleEn',
    'title_ar': 'titleAr',
    'description_en': 'descriptionEn',
    'description_ar': 'descriptionAr',
    'created_at': 'createdAt',
    'updated_at': 'updatedAt',
    'name_en': 'nameEn',
    'name_ar': 'nameAr',
    'confidence_level': 'confidenceLevel'
}

# Apply replacements
for db_col, schema_col in replacements.items():
    content = content.replace(db_col, schema_col)

# Write fixed SQL
with open('comprehensive_research_inserts_fixed.sql', 'w') as f:
    f.write(content)

print("✅ Fixed SQL column names to match schema")
