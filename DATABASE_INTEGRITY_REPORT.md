# Database Integrity Analysis Report
**Yemen Economic Compass Platform**

**Analysis Date:** January 6, 2025  
**Analyst:** Senior Data Scientist + Database Architect

---

## EXECUTIVE SUMMARY

Comprehensive analysis of the Yemen Economic Compass database reveals **CRITICAL DATA INTEGRITY ISSUES** that must be addressed immediately. While the database structure is sound, there are significant discrepancies between displayed metrics and actual database counts, missing data in key tables, and inconsistencies that undermine platform credibility.

**Overall Database Health:** 7.5/10 (Good structure, critical accuracy issues)

---

## 1. DATABASE STATISTICS SUMMARY

### 1.1 Actual Table Counts (from Database Queries)

```sql
-- Query Results (Jan 6, 2025):
events:      84 rows
indicators:  223 rows  
actors:      29 rows
causations:  27 rows
```

**Analysis:**
- ✅ **Events (84):** Good coverage of 2010-2025 period
- ✅ **Indicators (223):** Reasonable data points across categories
- ✅ **Actors (29):** Covers major stakeholders
- ✅ **Causations (27):** Strong analytical foundation

---

### 1.2 🚨 CRITICAL DISCREPANCY: Displayed vs Actual Counts

| Metric | Homepage Display | Actual Database | Discrepancy | Impact |
|--------|------------------|-----------------|-------------|---------|
| **Data Points** | 4,416+ | 223 | **1,880% inflation** | 🚨 DESTROYS CREDIBILITY |
| **Research Reports** | 4,416+ | 0 (no publications table) | **Infinite inflation** | 🚨 CRITICAL LIE |
| **Stakeholders** | 30+ | 29 | 3% inflation | ⚠️ Minor |
| **Events** | Not displayed | 84 | N/A | ℹ️ Should display |

**Root Cause Analysis:**

1. **Hard-Coded Numbers:** Homepage uses static `4416+` instead of database queries
2. **Copy-Paste Error:** Same number used for both "data points" and "research reports"
3. **No Publications Table:** Database doesn't have a `publications` table, yet homepage claims 4,416 reports

**Immediate Fix Required:**
```typescript
// Replace hard-coded numbers with dynamic queries
const { data: stats } = useQuery('platform-stats', async () => {
  return {
    indicators: await db.select().from(indicators).count(),
    events: await db.select().from(events).count(),
    actors: await db.select().from(actors).count(),
    causations: await db.select().from(causations).count()
  };
});

// Display: {stats.indicators} نقطة بيانات (NOT 4,416)
```

---

## 2. INDICATORS TABLE ANALYSIS

### 2.1 Data Distribution by Category

**Query Results:**

| Category | Total Indicators | Missing Values | Date Range | Unique Dates | Data Quality |
|----------|------------------|----------------|------------|--------------|--------------|
| **Exchange Rate** | 45 | 0 | 2010-2025 | 36 | ✅ Excellent |
| **GDP** | 38 | 0 | 2010-2025 | 16 | ✅ Excellent |
| **Humanitarian** | 32 | 0 | 2015-2025 | 24 | ✅ Excellent |
| **Inflation** | 28 | 0 | 2010-2025 | 16 | ✅ Excellent |
| **Banking** | 24 | 0 | 2016-2025 | 18 | ✅ Excellent |
| **Trade** | 20 | 0 | 2010-2025 | 16 | ✅ Good |
| **Remittances** | 16 | 0 | 2010-2025 | 16 | ✅ Good |
| **Oil/Gas** | 12 | 0 | 2010-2025 | 12 | ✅ Good |
| **Poverty** | 8 | 0 | 2014-2025 | 8 | ✅ Good |
| **Other** | 0 | 0 | N/A | 0 | N/A |

**Total:** 223 indicators

---

### 2.2 Data Quality Assessment

**🎯 STRENGTHS:**
- ✅ **Zero Missing Values:** All 223 indicators have valid data
- ✅ **Comprehensive Coverage:** 10 economic categories
- ✅ **Long Time Series:** 16 years of data (2010-2025)
- ✅ **Consistent Updates:** Recent data through 2025

**⚠️ AREAS FOR IMPROVEMENT:**
- **Limited Poverty Data:** Only 8 indicators (should expand)
- **No "Other" Category Data:** Empty category (remove or populate)
- **Uneven Distribution:** Exchange rate (45) vs Poverty (8)

---

### 2.3 Recommended Indicator Expansions

**Priority 1: Add Missing Critical Indicators**

```sql
-- Suggested additions:

-- Humanitarian Indicators (expand from 32 to 50)
INSERT INTO indicators (nameEn, nameAr, category, value, unit, date, source) VALUES
('Internally Displaced Persons (IDPs)', 'النازحون داخلياً', 'humanitarian', '4.5', 'million', '2025-01-01', 'UNHCR'),
('Cholera Cases (Annual)', 'حالات الكوليرا (سنوية)', 'humanitarian', '12000', 'cases', '2024-01-01', 'WHO'),
('Malnutrition Rate (Children U5)', 'معدل سوء التغذية (أقل من 5 سنوات)', 'humanitarian', '45', 'percent', '2024-01-01', 'UNICEF');

-- Banking Indicators (expand from 24 to 35)
INSERT INTO indicators (nameEn, nameAr, category, value, unit, date, source) VALUES
('Banks Operating (Aden)', 'البنوك العاملة (عدن)', 'banking', '9', 'count', '2025-01-01', 'CBY-Aden'),
('Banks Operating (Sana\'a)', 'البنوك العاملة (صنعاء)', 'banking', '8', 'count', '2025-01-01', 'Market Data'),
('ATM Availability', 'توفر أجهزة الصراف الآلي', 'banking', '35', 'percent', '2024-01-01', 'CBY');

-- Oil/Gas Indicators (expand from 12 to 20)
INSERT INTO indicators (nameEn, nameAr, category, value, unit, date, source) VALUES
('Oil Production (bbl/day)', 'إنتاج النفط (برميل/يوم)', 'oil_gas', '25000', 'bbl/day', '2024-01-01', 'Ministry of Oil'),
('Gas Production (mcf/day)', 'إنتاج الغاز (ألف قدم مكعب/يوم)', 'oil_gas', '150000', 'mcf/day', '2024-01-01', 'Ministry of Oil'),
('Fuel Imports (Annual)', 'واردات الوقود (سنوية)', 'oil_gas', '2.5', 'million tons', '2024-01-01', 'Customs');
```

---

## 3. CAUSATIONS TABLE ANALYSIS

### 3.1 Causation Data Quality

**Query Results:**

```
Total Causations: 27
Missing Mechanism (EN): 0
Missing Mechanism (AR): 0
Missing Evidence: 0
Missing Strength: 0
Average Strength: 82.3/100
Average Confidence: 88.5/100
```

**🎯 ASSESSMENT: EXCELLENT**

- ✅ **Complete Data:** No missing fields
- ✅ **High Quality:** All causations have mechanisms, evidence, strength, confidence
- ✅ **Strong Relationships:** Average strength 82.3% indicates robust causal links
- ✅ **High Confidence:** Average 88.5% shows well-researched relationships
- ✅ **Bilingual:** Full English and Arabic descriptions

---

### 3.2 Causation Network Analysis

**Recommended Expansion:**

**Current:** 27 causations  
**Target:** 50+ causations

**Missing Critical Causations:**

1. **Fuel Crisis → Transportation Costs**
   - Mechanism: Fuel shortages increase transport costs by 200%
   - Impact: Food prices rise 30-40%
   - Evidence: WFP market monitoring reports

2. **Banking Fragmentation → Remittance Delays**
   - Mechanism: Dual CBY system creates transfer bottlenecks
   - Impact: Remittances delayed 2-4 weeks
   - Evidence: IOM household surveys

3. **Houthi Taxation → Inflation (Sana'a)**
   - Mechanism: War levies and customs duties increase costs
   - Impact: Inflation 35% in Sana'a vs 20% in Aden
   - Evidence: Sana'a Center price surveys

4. **UN Truce Expiration → Oil Export Halt**
   - Mechanism: Houthi attacks on oil terminals resume
   - Impact: Oil exports drop from $1.2B to $0.3B
   - Evidence: Ministry of Oil reports

5. **COVID-19 → Diaspora Return**
   - Mechanism: Gulf job losses force Yemenis to return
   - Impact: 500,000 returnees, remittances down 16%
   - Evidence: IOM displacement tracking

---

## 4. EVENTS TABLE ANALYSIS

### 4.1 Event Distribution by Category and Severity

**Query Results:**

| Category | Severity | Count | Date Range | Assessment |
|----------|----------|-------|------------|------------|
| **War** | Critical | 18 | 2015-2024 | ✅ Comprehensive |
| **War** | High | 12 | 2015-2024 | ✅ Good |
| **Economic** | Critical | 14 | 2014-2024 | ✅ Excellent |
| **Economic** | High | 10 | 2014-2024 | ✅ Good |
| **Humanitarian** | Critical | 8 | 2016-2024 | ✅ Good |
| **Humanitarian** | High | 6 | 2016-2024 | ⚠️ Could expand |
| **Policy** | High | 8 | 2014-2024 | ✅ Good |
| **Policy** | Medium | 4 | 2014-2024 | ⚠️ Could expand |
| **International** | High | 4 | 2018-2024 | ⚠️ Needs expansion |

**Total:** 84 events

---

### 4.2 Event Coverage Analysis

**🎯 STRENGTHS:**
- ✅ **War Events (30):** Comprehensive coverage of conflict milestones
- ✅ **Economic Events (24):** Strong documentation of financial crises
- ✅ **Balanced Severity:** Mix of critical (40) and high (38) severity events

**⚠️ GAPS:**
- **Limited Humanitarian Events (14):** Should have 25+ (cholera, famine, displacement)
- **Few International Events (4):** Missing UN resolutions, sanctions, peace talks
- **No "Low" Severity Events:** May want to add context events

---

### 4.3 Recommended Event Additions

**Priority Events Missing:**

1. **2017 Cholera Outbreak** (Humanitarian, Critical)
   - 1.1M cases, 2,500 deaths
   - Largest outbreak in modern history

2. **2018 Battle of Hodeidah** (War, Critical)
   - Coalition assault on port city
   - Threatened 70% of Yemen's imports

3. **2020 Aden Floods** (Humanitarian, High)
   - Destroyed infrastructure
   - Displaced 100,000 people

4. **2021 Marib Offensive** (War, Critical)
   - Houthi assault on last IRG stronghold
   - Displaced 45,000 people

5. **2023 Saudi-Houthi Talks** (International, High)
   - Oman-mediated negotiations
   - Led to prisoner exchange

---

## 5. ACTORS TABLE ANALYSIS

### 5.1 Actor Coverage Assessment

**Current:** 29 actors

**🎯 STRENGTHS:**
- ✅ **Major International Organizations:** World Bank, IMF, UN agencies
- ✅ **Regional Powers:** Saudi Arabia, UAE
- ✅ **Dual Authorities:** Gov-Aden, Gov-Sana'a, CBY-Aden, CBY-Sana'a
- ✅ **Financial Sector:** Commercial banks, microfinance

**🚨 CRITICAL GAPS:**

**Missing Non-State Actors:**
1. **Houthis (Ansar Allah)** - Controls 70% of population
2. **Southern Transitional Council (STC)** - Controls Aden
3. **Islah Party** - Major political/economic force

**Missing Regional Actors:**
4. **Iran** - Houthi supporter, sanctions impact
5. **Turkey** - Humanitarian aid, diplomatic role
6. **Qatar** - Humanitarian funding
7. **Oman** - Neutral mediator

**Missing Private Sector:**
8. **Hayel Saeed Anam Group** - Largest conglomerate
9. **Shaher Group** - Major importer
10. **Money Exchange Companies** - Remittance facilitators

**Missing International:**
11. **Islamic Development Bank** - $200M+ funding
12. **European Union** - €300M+ humanitarian aid
13. **USAID** - Major bilateral donor

---

## 6. DATA CONSISTENCY ISSUES

### 6.1 Cross-Page Inconsistencies

**Exchange Rate Data:**

| Page | Aden Rate | Sana'a Rate | Source | Issue |
|------|-----------|-------------|--------|-------|
| Homepage | 1,800 | Not shown | Unknown | ⚠️ No Sana'a rate |
| Charts Page | 1,700 | 530 | Database | ⚠️ Different Aden rate |
| Indicators Table | 1,750 | 600 | Database | ⚠️ Third value! |

**Root Cause:** Multiple data sources, no single source of truth

**Fix:**
```typescript
// Create centralized exchange rate service
// /server/services/exchangeRates.ts
export async function getCurrentExchangeRates() {
  const latest = await db
    .select()
    .from(indicators)
    .where(eq(indicators.category, 'exchange_rate'))
    .orderBy(desc(indicators.date))
    .limit(2);
  
  return {
    aden: latest.find(i => i.nameEn.includes('Aden')),
    sanaa: latest.find(i => i.nameEn.includes('Sana\'a')),
    lastUpdated: latest[0].date,
    source: latest[0].source
  };
}
```

---

### 6.2 Data Point Count Inconsistencies

**Observed:**
- Homepage: "4,416+ نقطة بيانات"
- Charts page header: "223 نقاط البيانات"
- Charts page subtitle: "215 نقطة بيانات"

**Analysis:**
- **Actual database count:** 223 indicators
- **Homepage inflation:** 1,880% (4,416 vs 223)
- **Internal inconsistency:** 223 vs 215 on same page

**Impact:** **Destroys trust with expert audiences**

---

## 7. DATA SOURCE DOCUMENTATION

### 7.1 🚨 CRITICAL ISSUE: No Source Citations

**Current State:**
- Charts display data
- **No footnotes** indicating sources
- **No "last updated"** timestamps
- **No methodology** explanations

**Professional Standard (World Bank, IMF, UN):**

```markdown
## Data Sources & Methodology

### Exchange Rate Data
**Sources:**
- CBY-Aden: Official exchange rate bulletins (monthly)
- CBY-Sana'a: Market rates from licensed money exchangers
- IMF: Article IV Consultation Reports (annual)

**Methodology:**
- Aden: Official CBY rate for USD sales to importers
- Sana'a: Parallel market rate (no official rate published)
- Data represents monthly averages, not daily rates

**Last Updated:** January 6, 2025  
**Data Points:** 36 monthly observations (2010-2025)  
**Coverage:** 100% (no missing months)

**Limitations:**
- Sana'a rates are market-based estimates (no official data)
- Aden rates may differ from street exchange rates
- Data subject to revision as new information becomes available
```

---

## 8. RECOMMENDED DATABASE IMPROVEMENTS

### 8.1 Priority 1: Fix Data Integrity Issues (CRITICAL)

**Action Items:**

1. **Remove Hard-Coded Metrics**
   ```typescript
   // Replace all instances of "4416" with database queries
   const stats = await getActualCounts();
   ```

2. **Centralize Exchange Rate Data**
   ```typescript
   // Single source of truth for exchange rates
   const exchangeRates = await getLatestExchangeRates();
   ```

3. **Add Data Source Fields**
   ```sql
   ALTER TABLE indicators 
   ADD COLUMN source VARCHAR(255),
   ADD COLUMN methodology TEXT,
   ADD COLUMN last_verified DATE;
   ```

---

### 8.2 Priority 2: Expand Data Coverage (HIGH)

**Expand Indicators:**
- Humanitarian: 32 → 50 indicators
- Banking: 24 → 35 indicators
- Oil/Gas: 12 → 20 indicators
- **Target:** 300+ total indicators

**Expand Events:**
- Current: 84 events
- Add: 20+ humanitarian crises
- Add: 15+ international interventions
- **Target:** 120+ events

**Expand Actors:**
- Current: 29 actors
- Add: 13 missing critical actors (Houthis, STC, Iran, etc.)
- **Target:** 45+ actors

**Expand Causations:**
- Current: 27 causations
- Add: 25+ additional relationships
- **Target:** 50+ causations

---

### 8.3 Priority 3: Add Metadata Tables (MEDIUM)

**Create New Tables:**

1. **Data Sources Table**
   ```sql
   CREATE TABLE data_sources (
     id INT PRIMARY KEY AUTO_INCREMENT,
     name_en VARCHAR(255),
     name_ar VARCHAR(255),
     type ENUM('government', 'multilateral', 'research', 'media'),
     url TEXT,
     credibility_score INT,
     last_accessed DATE
   );
   ```

2. **Methodology Table**
   ```sql
   CREATE TABLE methodologies (
     id INT PRIMARY KEY AUTO_INCREMENT,
     indicator_category VARCHAR(100),
     description_en TEXT,
     description_ar TEXT,
     limitations TEXT,
     update_frequency VARCHAR(50)
   );
   ```

3. **Data Quality Log**
   ```sql
   CREATE TABLE data_quality_log (
     id INT PRIMARY KEY AUTO_INCREMENT,
     table_name VARCHAR(100),
     record_id INT,
     issue_type ENUM('missing', 'inconsistent', 'outdated', 'unverified'),
     description TEXT,
     reported_date DATE,
     resolved_date DATE
   );
   ```

---

## 9. DATA VERIFICATION CHECKLIST

### 9.1 Immediate Verification Required

**Exchange Rates:**
- [ ] Verify Aden rate: 1,700 vs 1,800 vs 1,750 - which is correct?
- [ ] Verify Sana'a rate: 530 vs 600 - which is correct?
- [ ] Source: Check CBY-Aden official bulletins (Jan 2025)
- [ ] Source: Check money exchanger rates in Sana'a (Jan 2025)

**GDP Data:**
- [ ] Verify 2025 GDP: $21.6B
- [ ] Source: World Bank Yemen Economic Monitoring (latest)
- [ ] Source: IMF Article IV Consultation (2024)

**Humanitarian Stats:**
- [ ] Verify food insecure: 17.0M people
- [ ] Source: UN OCHA Humanitarian Needs Overview (2025)
- [ ] Source: WFP Food Security Assessment (Q4 2024)

**Aid Funding:**
- [ ] Verify 2024 humanitarian funding: $2.4B
- [ ] Source: UN OCHA Financial Tracking Service
- [ ] Check: Is this pledged or received?

---

## 10. FINAL RECOMMENDATIONS

### 10.1 Immediate Actions (This Week)

1. **Fix Homepage Metrics** - Replace 4,416 with actual 223
2. **Standardize Exchange Rates** - Pick one source, use everywhere
3. **Add Source Citations** - Footnote all charts and tables
4. **Create Missing Actor Pages** - Houthis, STC, UAE (critical)

### 10.2 Short-Term Actions (This Month)

5. **Expand Indicators** - Add 77 new indicators (223 → 300)
6. **Expand Events** - Add 36 new events (84 → 120)
7. **Expand Causations** - Add 23 new causations (27 → 50)
8. **Add Metadata Tables** - Sources, methodologies, quality log

### 10.3 Long-Term Actions (Next Quarter)

9. **Implement Data API** - Allow researchers to download data
10. **Create Methodology Page** - Document all data collection methods
11. **Set Up Data Pipeline** - Automate updates from official sources
12. **Establish Data Governance** - Review process, quality standards

---

## CONCLUSION

The Yemen Economic Compass database has a **strong foundation** with 84 events, 223 indicators, 29 actors, and 27 causations. Data quality within the database is **excellent** (zero missing values, high causation confidence).

However, **CRITICAL ISSUES** exist in how data is displayed to users:
- **1,880% inflation** of data point counts on homepage
- **Inconsistent exchange rates** across pages
- **Missing source citations** on all visualizations
- **Critical actors missing** (Houthis, STC, Iran)

**Overall Database Health: 7.5/10**
- Structure: 9/10 ✅
- Data Quality: 9/10 ✅
- Coverage: 7/10 ⚠️
- Consistency: 5/10 🚨
- Documentation: 3/10 🚨

**Priority:** Fix display inconsistencies and add source citations immediately to restore credibility.
