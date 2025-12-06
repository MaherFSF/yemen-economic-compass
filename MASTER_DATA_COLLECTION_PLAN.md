# MASTER DATA COLLECTION & INGESTION PLAN
**Yemen Economic Compass - Comprehensive Transformation**

**Created:** January 6, 2025  
**Target:** Transform from 223 indicators to 5,000+ with complete 2010-2025 coverage

---

## PHASE 1: IMMEDIATE CRITICAL FIXES (Priority 1 - TODAY)

### Fix 1: Homepage Metrics Accuracy
**Current Problem:** Shows 4,416 data points (actual: 223)

**Solution:**
```typescript
// Create API endpoint: server/routes/stats.ts
export async function getPlatformStats() {
  const [indicators, events, actors, causations] = await Promise.all([
    db.select({ count: sql`COUNT(*)` }).from(indicators),
    db.select({ count: sql`COUNT(*)` }).from(events),
    db.select({ count: sql`COUNT(*)` }).from(actors),
    db.select({ count: sql`COUNT(*)` }).from(causations)
  ]);
  
  return {
    indicators: indicators[0].count,
    events: events[0].count,
    actors: actors[0].count,
    causations: causations[0].count
  };
}

// Update Homepage to use dynamic data
const { data: stats } = useQuery('platform-stats', fetchStats);
```

**Files to Edit:**
1. `/server/routes/stats.ts` - Create new endpoint
2. `/client/src/pages/Home.tsx` - Replace hard-coded numbers
3. `/server/index.ts` - Add route

**Time:** 30 minutes

---

### Fix 2: Console Errors
**Errors:**
1. Timeline.tsx - File exists, import issue resolved
2. "decimal is not defined" - Schema type issue

**Solution:**
```typescript
// drizzle/schema.ts - Replace decimal with varchar for TiDB compatibility
// Before:
amount: decimal("amount", { precision: 10, scale: 2 })

// After:
amount: varchar("amount", { length: 20 })  // Store as string, parse as needed
```

**Time:** 15 minutes

---

### Fix 3: Add Source Citations to Charts
**Create reusable component:**
```typescript
// client/src/components/ChartFooter.tsx
export function ChartFooter({ sources, lastUpdated, dataPoints }) {
  return (
    <div className="mt-4 pt-4 border-t text-sm text-muted-foreground">
      <div className="flex justify-between">
        <div>
          <strong>Sources:</strong> {sources.join(', ')}
        </div>
        <div>
          Last updated: {lastUpdated} | Data points: {dataPoints}
        </div>
      </div>
    </div>
  );
}
```

**Apply to all charts in:**
- `/client/src/pages/ComprehensiveCharts.tsx`
- `/client/src/pages/Charts.tsx`

**Time:** 45 minutes

---

## PHASE 2: AUTOMATED DATA COLLECTION (Priority 2 - NEXT 48 HOURS)

### Strategy: Build Self-Executing Data Pipeline

**Approach:**
1. Create modular data collectors for each source
2. Run collectors to generate JSON files
3. Create database ingestion scripts
4. Execute ingestion in batches

---

### Collector 1: World Bank Data
**Script:** `collectors/worldbank-collector.py`

**Data to Collect:**
- GDP (annual, 2010-2025) = 16 data points
- GDP per capita (annual, 2010-2025) = 16 data points
- GDP growth rate (annual, 2010-2025) = 16 data points
- Inflation (annual, 2010-2025) = 16 data points
- Population (annual, 2010-2025) = 16 data points
- Poverty rate (available years) = ~5 data points
- Life expectancy (annual, 2010-2025) = 16 data points
- Unemployment (available years) = ~10 data points
- Remittances (annual, 2010-2025) = 16 data points
- Exports (annual, 2010-2025) = 16 data points
- Imports (annual, 2010-2025) = 16 data points
- Government revenue (available years) = ~8 data points
- Mortality rate (annual, 2010-2025) = 16 data points
- School enrollment (available years) = ~10 data points
- Access to electricity (available years) = ~10 data points

**Subtotal:** ~200 indicators from World Bank

---

### Collector 2: IMF Data
**Sources:**
- IMF Article IV Consultation Reports (2010, 2012, 2014, 2018)
- IMF Staff Reports
- IMF Data Mapper (if API available)

**Data to Extract:**
- Fiscal balance (annual) = 16 data points
- Public debt (annual) = 16 data points
- Current account balance (annual) = 16 data points
- Foreign reserves (annual) = 16 data points
- Exchange rate (official, annual average) = 16 data points
- Money supply (M2, annual) = 16 data points
- Credit to private sector (annual) = 16 data points

**Subtotal:** ~120 indicators from IMF

---

### Collector 3: UN OCHA Data
**Sources:**
- Humanitarian Needs Overview (2015-2025)
- Humanitarian Response Plan (2015-2025)
- Financial Tracking Service

**Data to Extract:**
- People in need (annual, 2015-2025) = 11 data points
- Food insecure population (annual, 2015-2025) = 11 data points
- IDPs (annual, 2015-2025) = 11 data points
- Humanitarian funding required (annual, 2015-2025) = 11 data points
- Humanitarian funding received (annual, 2015-2025) = 11 data points
- Funding gap (annual, 2015-2025) = 11 data points

**Subtotal:** ~70 indicators from UN OCHA

---

### Collector 4: WFP Market Data
**Sources:**
- WFP Market Watch (monthly reports)
- WFP Food Security Updates

**Data to Extract:**
- Wheat price (monthly, 2015-2025) = 120 data points
- Rice price (monthly, 2015-2025) = 120 data points
- Cooking oil price (monthly, 2015-2025) = 120 data points
- Sugar price (monthly, 2015-2025) = 120 data points
- Fuel price (monthly, 2015-2025) = 120 data points
- Food basket cost (monthly, 2015-2025) = 120 data points

**Subtotal:** ~720 indicators from WFP

---

### Collector 5: Central Bank of Yemen Data
**Sources:**
- CBY-Aden Annual Reports
- CBY-Aden Statistical Bulletins
- CBY-Sana'a announcements

**Data to Extract:**
- Exchange rate Aden (monthly, 2016-2025) = 108 data points
- Exchange rate Sana'a (monthly, 2016-2025) = 108 data points
- Foreign reserves (quarterly, 2010-2025) = 64 data points
- Money supply (quarterly, 2010-2025) = 64 data points
- Banking sector deposits (annual, 2010-2025) = 16 data points
- Banking sector loans (annual, 2010-2025) = 16 data points
- Number of operating banks (annual, 2010-2025) = 16 data points

**Subtotal:** ~400 indicators from CBY

---

### Collector 6: Oil & Gas Data
**Sources:**
- Ministry of Oil & Minerals
- OPEC Statistical Bulletin
- BP Statistical Review

**Data to Extract:**
- Oil production (monthly, 2010-2025) = 192 data points
- Gas production (monthly, 2010-2025) = 192 data points
- Oil exports (monthly, 2010-2025) = 192 data points
- Oil revenue (monthly, 2010-2025) = 192 data points
- Oil prices (Brent, monthly, 2010-2025) = 192 data points

**Subtotal:** ~960 indicators from Oil/Gas sector

---

### Collector 7: Trade Data
**Sources:**
- Yemen Customs Authority
- UN Comtrade
- World Bank WITS

**Data to Extract:**
- Total imports (monthly, 2010-2025) = 192 data points
- Total exports (monthly, 2010-2025) = 192 data points
- Trade balance (monthly, 2010-2025) = 192 data points
- Imports by category (10 categories × 16 years) = 160 data points
- Exports by category (5 categories × 16 years) = 80 data points

**Subtotal:** ~820 indicators from Trade data

---

### Collector 8: Humanitarian Indicators
**Sources:**
- UNICEF Yemen
- WHO Yemen
- UNHCR Yemen
- IOM Yemen

**Data to Extract:**
- Malnutrition rate (annual, 2015-2025) = 11 data points
- Cholera cases (annual, 2016-2025) = 10 data points
- Measles cases (annual, 2015-2025) = 11 data points
- Dengue cases (annual, 2015-2025) = 11 data points
- Displaced persons (quarterly, 2015-2025) = 44 data points
- Refugees (annual, 2015-2025) = 11 data points
- Health facilities functioning (annual, 2015-2025) = 11 data points
- Water access (annual, 2015-2025) = 11 data points

**Subtotal:** ~120 indicators from Humanitarian sources

---

## TOTAL INDICATORS TARGET: 3,410+

**Breakdown:**
- World Bank: 200
- IMF: 120
- UN OCHA: 70
- WFP: 720
- CBY: 400
- Oil/Gas: 960
- Trade: 820
- Humanitarian: 120

**To reach 5,000+, add:**
- Conflict data (ACLED): 500 indicators
- Social indicators (education, health): 500 indicators
- Infrastructure data: 300 indicators
- Regional data (by governorate): 470 indicators

---

## PHASE 3: EVENTS EXPANSION (Priority 3 - WEEK 2)

### Target: 500+ events (from 84)

**Approach: Year-by-Year Event Collection**

### 2010 (Pre-Crisis) - Target: 15 events
- Economic situation baseline
- Political developments
- Key policy decisions
- Regional context

### 2011 (Arab Spring) - Target: 40 events
- Month-by-month protest timeline
- Economic impacts
- Political transitions
- Security incidents

### 2012 (Transition) - Target: 25 events
- Hadi inauguration
- National Dialogue
- Economic reforms
- International support

### 2013 (Fragile Stability) - Target: 20 events
- National Dialogue milestones
- Economic policies
- Security challenges
- Regional developments

### 2014 (Crisis Escalation) - Target: 30 events
- Houthi expansion
- Government collapse
- Economic deterioration
- International responses

### 2015 (War Begins) - Target: 50 events
- Operation Decisive Storm
- Humanitarian crisis
- Economic collapse
- Blockade impacts
- Monthly conflict developments

### 2016 (Fragmentation) - Target: 45 events
- CBY split
- Banking crisis
- Humanitarian escalation
- Peace talks
- Monthly developments

### 2017 (Blockade & Cholera) - Target: 40 events
- Cholera outbreak
- Blockade intensification
- Economic impacts
- Humanitarian crisis
- Monthly developments

### 2018 (Hodeidah & Deposits) - Target: 40 events
- Battle of Hodeidah
- Saudi deposits
- Stockholm Agreement
- Economic impacts
- Monthly developments

### 2019 (Currency Ban) - Target: 35 events
- Currency ban
- Riyadh Agreement
- STC tensions
- Economic impacts
- Monthly developments

### 2020 (COVID & Multiple Crises) - Target: 40 events
- COVID-19 pandemic
- STC self-rule
- Economic impacts
- Humanitarian crisis
- Monthly developments

### 2021 (Marib & Fuel Crisis) - Target: 35 events
- Marib offensive
- Fuel crisis
- Biden policy
- Economic impacts
- Monthly developments

### 2022 (Truce & Oil) - Target: 40 events
- UN Truce
- Oil exports
- Truce expiration
- Economic impacts
- Monthly developments

### 2023 (Banking Crisis & Talks) - Target: 35 events
- Banking crisis
- Saudi-Houthi talks
- Prisoner exchange
- Economic impacts
- Monthly developments

### 2024 (Red Sea Crisis) - Target: 40 events
- Red Sea attacks
- Economic impacts
- Peace efforts
- Monthly developments

### 2025 (Current Year) - Target: 10 events (so far)
- Ongoing developments
- Economic situation
- Peace negotiations

**TOTAL EVENTS: 540**

---

## PHASE 4: ACTORS EXPANSION (Priority 4 - WEEK 2)

### Target: 100+ actors (from 29)

**Categories:**

### Non-State Actors (15)
1. Houthis (Ansar Allah) - CRITICAL
2. Southern Transitional Council (STC)
3. Islah Party
4. General People's Congress (GPC)
5. Al-Qaeda in the Arabian Peninsula (AQAP)
6. ISIS-Yemen
7. Southern Resistance
8. Tihama Resistance
9. Giants Brigades
10. Security Belt Forces
11. Shabwani Elite Forces
12. Hadrami Elite Forces
13. National Resistance
14. Joint Forces (West Coast)
15. Tribal Confederations

### Regional Actors (12)
16. Iran
17. Turkey
18. Qatar
19. Oman
20. Jordan
21. Egypt
22. Kuwait
23. Bahrain
24. Iraq
25. Sudan
26. Djibouti
27. Somalia

### International Actors (15)
28. United States
29. United Kingdom
30. France
31. Russia
32. China
33. European Union
34. Germany
35. Italy
36. Spain
37. Netherlands
38. Sweden
39. Switzerland
40. Japan
41. South Korea
42. Canada

### UN Agencies (15)
43. UN OCHA
44. UNDP
45. UNICEF
46. WFP
47. WHO
48. UNHCR
49. IOM
50. FAO
51. UNESCO
52. UNOPS
53. UNFPA
54. UN Women
55. UNEP
56. ILO
57. UN Special Envoy Office

### International NGOs (15)
58. Oxfam
59. International Rescue Committee (IRC)
60. Médecins Sans Frontières (MSF)
61. CARE International
62. Save the Children
63. Norwegian Refugee Council (NRC)
64. Danish Refugee Council (DRC)
65. Islamic Relief
66. Mercy Corps
67. Action Against Hunger
68. International Medical Corps
69. ACTED
70. Handicap International
71. Relief International
72. Solidarités International

### Financial Institutions (10)
73. Islamic Development Bank
74. Arab Monetary Fund
75. OPEC Fund
76. Kuwait Fund for Arab Economic Development
77. Abu Dhabi Fund for Development
78. Saudi Fund for Development
79. Qatar Development Fund
80. Arab Fund for Economic and Social Development
81. African Development Bank
82. Asian Development Bank

### Commercial Banks (18)
83-100. All 18 commercial banks operating in Yemen

**TOTAL ACTORS: 100+**

---

## PHASE 5: CAUSATIONS EXPANSION (Priority 5 - WEEK 3)

### Target: 100+ causations (from 27)

**Approach: Systematic Mapping**

### War → Economic (20 causations)
- Operation Decisive Storm → GDP collapse
- Airstrikes → Infrastructure damage
- Blockade → Import costs
- Port restrictions → Food prices
- Conflict → Capital flight
- etc.

### Policy → Economic (20 causations)
- CBY split → Exchange rate divergence
- Currency ban → Inflation
- Fuel subsidy removal → Riots
- Salary suspension → Teacher strikes
- etc.

### Economic → Humanitarian (20 causations)
- Currency depreciation → Poverty
- Inflation → Food insecurity
- Unemployment → Migration
- Revenue collapse → Service delivery
- etc.

### International → Economic (20 causations)
- Saudi deposits → Currency stabilization
- Aid flows → Humanitarian access
- Oil blockade → Revenue collapse
- Sanctions → Banking isolation
- etc.

### Natural/Health → Economic (10 causations)
- Cholera → Healthcare costs
- Floods → Infrastructure damage
- COVID-19 → Remittances decline
- Drought → Agricultural output
- etc.

### Peace/Conflict → Economic (10 causations)
- UN Truce → Humanitarian access
- Truce expiration → Oil halt
- Peace talks → Investment interest
- Prisoner exchange → Optimism
- etc.

**TOTAL CAUSATIONS: 100+**

---

## PHASE 6: REPORTS UPLOAD (Priority 6 - WEEK 3-4)

### Target: 300+ reports

**Categories:**

### World Bank (50 reports)
- Yemen Economic Monitor (quarterly, 2015-2025)
- Country reports
- Project documents
- Sector studies

### IMF (30 reports)
- Article IV Consultations
- Staff Reports
- Emergency Financing documents
- Technical Assistance reports

### UN (100 reports)
- OCHA HNO/HRP (annual, 2015-2025)
- Agency reports (UNDP, UNICEF, WFP, WHO, etc.)
- Special Envoy reports
- Security Council reports

### Research Centers (50 reports)
- Sana'a Center publications
- Yemen Policy Center
- Chatham House
- Carnegie Middle East
- International Crisis Group

### Government (30 reports)
- CBY Annual Reports
- Ministry reports
- Budget documents
- Statistical bulletins

### Think Tanks & Academic (40 reports)
- Journal articles
- Policy briefs
- Working papers
- Conference proceedings

**TOTAL REPORTS: 300+**

---

## IMPLEMENTATION TIMELINE

### Week 1: Critical Fixes + Data Collection Setup
- **Day 1-2:** Implement critical fixes (homepage, console errors, citations)
- **Day 3-4:** Build data collectors (World Bank, IMF, UN)
- **Day 5-7:** Run collectors, generate JSON files

### Week 2: Data Ingestion + Events Expansion
- **Day 8-10:** Create ingestion scripts, populate database
- **Day 11-14:** Expand events (2010-2025 comprehensive timeline)

### Week 3: Actors + Causations Expansion
- **Day 15-17:** Add 70+ new actors with profiles
- **Day 18-21:** Map 70+ new causations

### Week 4: Reports Upload + Final Verification
- **Day 22-25:** Upload and index 300+ reports
- **Day 26-28:** Verify data integrity, test platform
- **Day 29-30:** Final checkpoint and deployment

---

## SUCCESS METRICS

**By End of Week 1:**
- ✅ Homepage shows accurate metrics
- ✅ Zero console errors
- ✅ All charts have source citations
- ✅ 500+ indicators collected (JSON files ready)

**By End of Week 2:**
- ✅ 3,000+ indicators in database
- ✅ 500+ events documented
- ✅ Year-by-year coverage complete (2010-2025)

**By End of Week 3:**
- ✅ 100+ actors profiled
- ✅ 100+ causations mapped
- ✅ 5,000+ indicators in database

**By End of Week 4:**
- ✅ 300+ reports uploaded
- ✅ Platform fully verified
- ✅ Professional-grade quality
- ✅ Rating: 9.0/10

---

## NEXT IMMEDIATE ACTIONS

1. **Implement Fix 1:** Homepage metrics (30 min)
2. **Implement Fix 2:** Console errors (15 min)
3. **Implement Fix 3:** Chart citations (45 min)
4. **Save checkpoint** with critical fixes
5. **Build World Bank collector** (2 hours)
6. **Build IMF collector** (2 hours)
7. **Build UN OCHA collector** (2 hours)
8. **Run all collectors** overnight
9. **Create ingestion script** (3 hours)
10. **Populate database** (automated)

**Total Time for Critical Path:** ~12 hours of development + automated execution

---

## CONCLUSION

This plan provides a **systematic, achievable roadmap** to transform the Yemen Economic Compass from 223 indicators to 5,000+ with complete 2010-2025 coverage, making it the definitive authoritative source for Yemen economic data.

**Key Success Factors:**
1. **Automation:** Build collectors that run independently
2. **Modularity:** Each collector is self-contained
3. **Verification:** Data integrity checks at every step
4. **Documentation:** Every data point has source citation
5. **Professionalism:** Expert-level quality throughout

**Let's execute!** 🚀
