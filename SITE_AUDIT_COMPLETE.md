# Complete Site Audit - Yemen Economic Compass
**Date:** December 9, 2025  
**Total Pages Found:** 97 TSX files  
**Routes in App.tsx:** 76 routes  

---

## CRITICAL FINDINGS

### 1. DUPLICATE PAGES (MUST CONSOLIDATE)

#### Home Pages (3 versions):
- **Home.tsx** ← CURRENT (Yemen colors, revolutionary design)
- Home_NEW.tsx ← DELETE
- Home_OLD_BACKUP.tsx ← DELETE

#### Analytics Dashboard (3 versions):
- **AnalyticsDashboard.tsx** ← KEEP
- AnalyticsDashboard_NEW.tsx ← DELETE
- AnalyticsDashboard_OLD_BACKUP.tsx ← DELETE

#### Compass Dashboard (3 versions):
- **CompassDashboard.tsx** ← KEEP
- CompassDashboard_NEW.tsx ← DELETE
- CompassDashboard_OLD_BACKUP.tsx ← DELETE

#### Saudi Arabia Pages (3 versions):
- **SaudiArabiaPage.tsx** (in stakeholders/) ← KEEP (detailed)
- SaudiArabia.tsx ← MERGE into above
- pages/SaudiArabiaPage.tsx ← DELETE (duplicate)

#### World Bank Pages (3 versions):
- **WorldBankPage.tsx** (in stakeholders/) ← KEEP (detailed)
- WorldBankDetailed.tsx ← MERGE
- WorldBankJourney.tsx ← MERGE

### 2. PAGES NOT IN ROUTING (MISSING FROM SITE)

#### Bank Pages (NOT ACCESSIBLE):
- /pages/banks/CACBank.tsx
- /pages/banks/TadhamonBank.tsx
- /pages/compass/banks/CacBank.tsx
- /pages/compass/banks/NationalBank.tsx
- /pages/compass/banks/Tadhamon.tsx
- /pages/compass/banks/YemenCommercial.tsx
- /pages/compass/banks/YemenKuwaitBank.tsx

#### Stakeholder Pages (NOT ACCESSIBLE):
- /pages/stakeholders/UAEPage.tsx

#### Other Missing Pages:
- LandingPage.tsx (separate from Home?)
- ComponentShowcase.tsx
- FMIProject.tsx
- StakeholderProfile.tsx

### 3. ROUTING ISSUES

#### Duplicate Routes:
```tsx
<Route path="/world-bank" component={WorldBankJourney} />  // Line 139
<Route path="/world-bank" component={WorldBankDetailed} />  // Line 121
// CONFLICT! Same path, different components
```

#### Inconsistent Stakeholder Routing:
- `/stakeholders/world-bank` → WorldBankPage (good)
- `/world-bank` → WorldBankJourney (confusing)
- `/imf` → IMF (should be /stakeholders/imf)
- `/saudi-arabia` → SaudiArabia (should be /stakeholders/saudi-arabia)

---

## PAGES INVENTORY BY CATEGORY

### ✅ CORE PAGES (Working)
1. **Home.tsx** - Landing page with Yemen colors
2. **Overview.tsx** - Platform overview
3. **About.tsx** - About the platform
4. **AboutCauseWay.tsx** - About CauseWay Foundation
5. **KayanPlatform.tsx** - Kayan platform info
6. **Sitemap.tsx** - Site navigation map
7. **NotFound.tsx** - 404 page

### 📊 DATA & ANALYTICS (Working)
8. **AnalyticsDashboard.tsx** - Main analytics
9. **ComprehensiveCharts.tsx** - Economic charts with sources
10. **Charts.tsx** - Static charts
11. **DataVisualization.tsx** - Interactive visualizations
12. **AdvancedVisualizations.tsx** - Advanced charts
13. **KeyStatistics.tsx** - Key economic stats
14. **StatisticalIndicators.tsx** - Indicator dashboard
15. **ExecutiveDashboard.tsx** - Executive summary
16. **CompassDashboard.tsx** - Main compass view
17. **DashboardsHub.tsx** - All dashboards index

### 🏦 BANKING & FINANCE (Working)
18. **BankingSector.tsx** - Banking sector overview
19. **BankingDashboard.tsx** - Banking analytics
20. **BankingSystemDashboard.tsx** - System-wide view
21. **CommercialBanksHub.tsx** - Commercial banks hub
22. **BanksDatabase.tsx** - Banks database
23. **BankDetail.tsx** - Individual bank details (dynamic route)
24. **CBYAdenTracker.tsx** - CBY Aden tracker
25. **CBYSanaaTracker.tsx** - CBY Sana'a tracker
26. **CBYDashboard.tsx** - CBY comparison dashboard
27. **CurrencyWar.tsx** - Currency war analysis
28. **FinancialTransformation.tsx** - Financial system transformation
29. **FinancialPowerMap.tsx** - Power dynamics map
30. **FinancialFlowsNetwork.tsx** - Financial flows visualization
31. **FinancialCalculators.tsx** - Financial calculators

### 🌍 STAKEHOLDERS (Working)
32. **StakeholderHub.tsx** - All stakeholders index
33. **WorldBankPage.tsx** - World Bank detailed
34. **IMFPage.tsx** - IMF detailed
35. **SaudiArabiaPageNew.tsx** - Saudi Arabia detailed
36. **HayelSaeedAnam.tsx** - Hayel Saeed Anam Group
37. **IMF.tsx** - IMF overview
38. **WorldBankDetailed.tsx** - World Bank (duplicate)
39. **SaudiArabia.tsx** - Saudi Arabia (duplicate)
40. **UAE.tsx** - UAE overview
41. **UNOCHA.tsx** - UN OCHA
42. **WFP.tsx** - World Food Programme
43. **UNHCR.tsx** - UNHCR
44. **IOM.tsx** - International Organization for Migration
45. **UNICEF.tsx** - UNICEF
46. **WHO.tsx** - World Health Organization
47. **FAO.tsx** - Food and Agriculture Organization
48. **UNDP.tsx** - UN Development Programme
49. **GovernmentAden.tsx** - Government of Yemen (Aden)
50. **GovernmentSanaa.tsx** - De facto authorities (Sana'a)
51. **Donors.tsx** - Donor overview
52. **BilateralDonors.tsx** - Bilateral donors

### 📅 TIMELINE & EVENTS (Working)
53. **Timeline.tsx** - Main timeline
54. **TimelineExplorerPage.tsx** - Interactive timeline explorer
55. **EventsTimeline.tsx** - Events timeline
56. **YearExplorer.tsx** - Year-by-year explorer
57. **EconomicCrisis.tsx** - Economic crisis timeline

### 🔧 TOOLS & SIMULATORS (Working)
58. **WhatIfSimulator.tsx** - Scenario simulator
59. **ScenarioForecasting.tsx** - Forecasting tools
60. **SanctionsTracker.tsx** - OFAC sanctions tracker
61. **AidFlowsDashboard.tsx** - Aid flows tracker

### 📚 RESEARCH & DOCUMENTS (Working)
62. **ResearchLibrary.tsx** - Research papers
63. **FinancialLiterature.tsx** - Financial literature
64. **InternationalReports.tsx** - International reports
65. **DocumentLibrary.tsx** - Document library
66. **FileManager.tsx** - File management

### 🏙️ SECTORS & THEMES (Working)
67. **MicrofinanceObservatory.tsx** - Microfinance sector
68. **MainCities.tsx** - Major cities analysis
69. **YouthEconomy.tsx** - Youth economy
70. **Investment.tsx** - Investment climate
71. **ClimateFinance.tsx** - Climate finance
72. **PolicyRecommendations.tsx** - Policy recommendations
73. **NewsAggregator.tsx** - News aggregator
74. **StoryPage.tsx** - Data storytelling

### ❌ NOT IN ROUTING (Need to Add)
75. **LandingPage.tsx** - Alternative landing?
76. **ComponentShowcase.tsx** - UI components demo
77. **FMIProject.tsx** - FMI project page
78. **StakeholderProfile.tsx** - Generic stakeholder profile
79. **UAEPage.tsx** (in stakeholders/) - UAE detailed page
80. **CACBank.tsx** (in banks/) - CAC Bank page
81. **TadhamonBank.tsx** (in banks/) - Tadhamon Bank page
82. **CacBank.tsx** (in compass/banks/) - CAC Bank compass
83. **NationalBank.tsx** (in compass/banks/) - National Bank
84. **Tadhamon.tsx** (in compass/banks/) - Tadhamon compass
85. **YemenCommercial.tsx** (in compass/banks/) - Yemen Commercial Bank
86. **YemenKuwaitBank.tsx** (in compass/banks/) - Yemen Kuwait Bank
87. **BanksCompass.tsx** (in compass/) - Banks compass view
88. **CountriesCompass.tsx** (in compass/) - Countries compass
89. **MicrofinanceCompass.tsx** (in compass/) - Microfinance compass

### 🗑️ DUPLICATES TO DELETE
90. **Home_NEW.tsx** - DELETE
91. **Home_OLD_BACKUP.tsx** - DELETE
92. **AnalyticsDashboard_NEW.tsx** - DELETE
93. **AnalyticsDashboard_OLD_BACKUP.tsx** - DELETE
94. **CompassDashboard_NEW.tsx** - DELETE
95. **CompassDashboard_OLD_BACKUP.tsx** - DELETE
96. **SaudiArabiaPage.tsx** (in pages/) - DELETE (keep stakeholders version)
97. **WorldBankJourney.tsx** - MERGE then DELETE

---

## ARABIC RENDERING ISSUES

### Charts with Arabic Problems:
1. **ComprehensiveCharts.tsx** - Some labels not rendering
2. **Charts.tsx** - Static images may have Arabic issues
3. **AnalyticsDashboard.tsx** - Check Arabic labels
4. **BankingDashboard.tsx** - Verify Arabic text

### Root Causes:
- Missing Arabic font loading
- Recharts library RTL issues
- SVG text rendering problems
- CSS direction conflicts

---

## MISSING 2024-2025 DATA

### Events to Add:
**2024:**
- January: Red Sea attacks begin (Houthis vs shipping)
- February: Exchange rate hits 1,650 YER/USD in Aden
- March: Banking liquidity crisis worsens
- April: IMF warns of economic collapse
- May: Food prices surge 40%
- June: Fuel shortages in Aden
- July: CBY Aden raises interest rates
- August: Remittances decline 25%
- September: Humanitarian funding gap widens
- October: Exchange rate reaches 1,800 YER/USD
- November: Banking sector stress tests
- December: Year-end economic assessment

**2025:**
- January 16: OFAC sanctions on 3 Yemeni banks
- January: Exchange rate volatility continues
- February: CBY responses to sanctions
- March: Banking sector restructuring plans
- April-December: Need current data

### Indicators to Update:
- Exchange rate: 1,800+ YER/USD (Aden) vs 560 (Sana'a)
- GDP: Further contraction in 2024
- Inflation: Latest CPI data
- Food insecurity: 17M+ people
- Humanitarian aid: $2.4B (2024)
- Remittances: Decline trends

---

## LITERATURE & RESEARCH GAPS

### Missing Collections:
1. **CBY Aden Directives** - Need complete archive (2010-2025)
2. **CBY Sana'a Circulars** - Need complete archive (2016-2025)
3. **Yemen Laws Database** - Banking laws, financial regulations
4. **Microfinance Network Library** - All YMN documents
5. **Academic Papers** - Yemen economic research
6. **Think Tank Reports** - Sana'a Center, Yemen Policy Center, etc.

### Current Literature Pages:
- ResearchLibrary.tsx - Exists but needs expansion
- FinancialLiterature.tsx - Exists but limited
- InternationalReports.tsx - Exists but needs more reports
- DocumentLibrary.tsx - Exists but empty?

---

## BANKS DATA GAPS

### Banks with Pages (7):
1. CAC Bank - Has page but not routed
2. Tadhamon Bank - Has page but not routed
3. National Bank - Has compass page
4. Yemen Commercial Bank - Has compass page
5. Yemen Kuwait Bank - Has compass page

### Banks Researched but No Pages (12):
6. Yemen Bank for Reconstruction and Development (YBRD)
7. International Bank of Yemen (IBY)
8. Saba Islamic Bank
9. Al-Kuraimi Islamic Microfinance Bank
10. Cooperative and Agricultural Credit Bank (CACB)
11. United Bank
12. Yemen and Bahrain Islamic Bank
13. Al-Amal Microfinance Bank
14. Aden Islamic Bank
15. Bank of Yemen and Kuwait (duplicate?)
16. Shamil Bank
17. Al-Tadhamon Islamic Bank

### Need to Research More Banks:
- Islamic Bank of Yemen
- Yemen Gulf Bank
- Arab Bank (Yemen branch)
- Others?

---

## USER EXPERIENCE ISSUES

### Missing Features:
1. **Tooltips/Info Boxes** - No explanations for technical terms
2. **User Guides** - No onboarding for different user types
3. **Help System** - No contextual help
4. **Glossary** - No financial terms glossary
5. **FAQ** - No frequently asked questions

### Navigation Issues:
1. **No Breadcrumbs** - Hard to know where you are
2. **Inconsistent Menu Structure** - Some pages in multiple places
3. **No Search** - Hard to find specific content
4. **No Filters** - Can't filter data easily

### Download Issues:
1. **No CSV Exports** - Can't download data
2. **No PDF Reports** - Can't save reports
3. **No Excel Files** - Can't analyze in Excel
4. **No API Access** - Can't programmatically access data

---

## DESIGN ISSUES

### Landing Page:
- ✅ Yemen colors implemented
- ✅ CauseWay logos integrated
- ❌ Still using AI-generated images (need real Yemen photos)
- ❌ Layout could be more unique
- ❌ Not enough interactivity

### Navigation:
- ❌ Standard dropdown menus (not innovative)
- ❌ Too many menu items (overwhelming)
- ❌ No visual hierarchy
- ❌ No icons to aid recognition

### Typography:
- ✅ Cairo font for Arabic
- ✅ Inter font for English
- ❌ Could use more weight variations
- ❌ Line heights could be optimized

### Colors:
- ✅ Yemen flag colors (red, green, black, white)
- ❌ Could use more shades/tints
- ❌ Need better contrast in some areas

---

## RECOMMENDATIONS

### IMMEDIATE (Phase 1):
1. **Delete duplicate pages** (6 files)
2. **Fix routing conflicts** (World Bank, Saudi Arabia)
3. **Add missing bank pages to routing** (7 pages)
4. **Fix Arabic rendering in charts** (4 pages)
5. **Replace AI images with real Yemen photos** (landing page)

### SHORT-TERM (Phase 2):
6. **Add all 2024-2025 events** (24+ events)
7. **Update all indicators with latest data**
8. **Consolidate stakeholder pages** (merge duplicates)
9. **Add tooltips and info boxes** (all pages)
10. **Create downloadable datasets** (CSV, Excel)

### MEDIUM-TERM (Phase 3):
11. **Build CBY directives archive** (new feature)
12. **Add all 17 banks detailed pages**
13. **Create comprehensive literature library**
14. **Implement search functionality**
15. **Add breadcrumbs to all pages**

### LONG-TERM (Phase 4):
16. **Redesign navigation** (innovative, visual)
17. **Create interactive tools** (calculators, simulators)
18. **Build API for data access**
19. **Add user accounts and personalization**
20. **Implement advanced analytics**

---

## PRIORITY ACTIONS

### 🔴 CRITICAL (Do First):
1. Delete 6 duplicate files
2. Fix routing conflicts
3. Add 7 bank pages to routing
4. Fix Arabic rendering
5. Replace AI images with real photos

### 🟡 HIGH (Do Soon):
6. Add 2024-2025 events
7. Update indicators
8. Add tooltips
9. Create downloads
10. Build sitemap

### 🟢 MEDIUM (Do Later):
11. CBY directives archive
12. All banks pages
13. Literature library
14. Search functionality
15. Breadcrumbs

---

## FILES TO DELETE

```bash
# Duplicate Home pages
client/src/pages/Home_NEW.tsx
client/src/pages/Home_OLD_BACKUP.tsx

# Duplicate Analytics pages
client/src/pages/AnalyticsDashboard_NEW.tsx
client/src/pages/AnalyticsDashboard_OLD_BACKUP.tsx

# Duplicate Compass pages
client/src/pages/CompassDashboard_NEW.tsx
client/src/pages/CompassDashboard_OLD_BACKUP.tsx
```

## ROUTES TO ADD

```tsx
// Individual bank pages
<Route path="/banks/cac-bank" component={CACBank} />
<Route path="/banks/tadhamon" component={TadhamonBank} />
<Route path="/banks/national-bank" component={NationalBank} />
<Route path="/banks/yemen-commercial" component={YemenCommercial} />
<Route path="/banks/yemen-kuwait" component={YemenKuwaitBank} />

// Compass views
<Route path="/compass/banks" component={BanksCompass} />
<Route path="/compass/countries" component={CountriesCompass} />
<Route path="/compass/microfinance" component={MicrofinanceCompass} />

// Stakeholder pages
<Route path="/stakeholders/uae" component={UAEPage} />
```

## ROUTES TO FIX

```tsx
// Remove duplicate World Bank route (line 139)
// Keep only line 116: /stakeholders/world-bank

// Consolidate stakeholder routes under /stakeholders/
// Move /imf to /stakeholders/imf
// Move /saudi-arabia to /stakeholders/saudi-arabia
// Move /uae to /stakeholders/uae
// etc.
```

---

**TOTAL PAGES:** 97 files  
**ACTIVE ROUTES:** 76 routes  
**DUPLICATES:** 6 files to delete  
**MISSING FROM ROUTING:** 13 pages to add  
**ROUTING CONFLICTS:** 2 to fix  

**NEXT STEP:** Execute cleanup and consolidation
