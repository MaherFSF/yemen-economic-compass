# MASTER BLUEPRINT - Yemen Economic Compass
**Complete System Architecture & Implementation Status**

---

## 1. PAGES INVENTORY (46 Total)

### 1.1 Landing & Core Pages
| Page | Path | Status | Dependencies | Outputs | Purpose |
|------|------|--------|--------------|---------|---------|
| **NewLandingPage** | `/` | ✅ LIVE | LanguageContext | Hero, 4 audiences, 6 features, intelligence explanation | World-class landing with teal/blue (EN) + burgundy/gold (AR) themes |
| **LandingPage** (old) | `/old-landing` | ✅ ARCHIVED | ScrollytellingTimeline, MasterCompass | Timeline, stats, quick access | Original landing page (preserved) |
| **About** | `/about` | ✅ IMPLEMENTED | - | Platform description | About Yemen Economic Compass |
| **AboutCauseWay** | `/about-causeway` | ✅ IMPLEMENTED | - | CauseWay Foundation info | Organization background |

### 1.2 Dashboard Pages
| Page | Path | Status | Dependencies | Outputs | Purpose |
|------|------|--------|--------------|---------|---------|
| **CompassDashboard** | `/compass` | ✅ IMPLEMENTED | MasterCompass, EconomicIndicators | Multi-indicator dashboard | Main economic dashboard |
| **ExecutiveDashboard** | `/executive-dashboard` | ✅ IMPLEMENTED | Charts, indicators | Executive summary | High-level overview for decision-makers |
| **CBYDashboard** | `/cby-dashboard` | ✅ IMPLEMENTED | CBY data | Central bank metrics | CBY-specific dashboard |
| **AnalyticsDashboard** | `/analytics` | ✅ IMPLEMENTED | Various data sources | Analytics views | Data analytics interface |

### 1.3 Central Bank Pages
| Page | Path | Status | Dependencies | Outputs | Purpose |
|------|------|--------|--------------|---------|---------|
| **CBYAdenTracker** | `/cby-aden` | ✅ IMPLEMENTED | CBY-Aden data | Tracker interface | Monitor CBY-Aden activities |
| **CBYSanaaTracker** | `/cby-sanaa` | ✅ IMPLEMENTED | CBY-Sana'a data | Tracker interface | Monitor CBY-Sana'a activities |
| **CBYAdenPage** (stakeholder) | `/stakeholders/cby-aden` | ✅ NEW | Research data | 5 tabs: Overview, Role, Impact, Risks, Options | Comprehensive CBY-Aden stakeholder page |

### 1.4 Stakeholder Pages
| Page | Path | Status | Dependencies | Outputs | Purpose |
|------|------|--------|--------------|---------|---------|
| **StakeholderHub** | `/stakeholders` | ✅ IMPLEMENTED | Stakeholder data | Directory/index | Central stakeholder directory |
| **HayelSaeedAnamGroup** | `/stakeholders/hayel-saeed-anam` | ✅ NEW | Research, IFC data, UN panel | 5 tabs: Overview, Role, Subsidiaries, Risks, Options | HSA Group comprehensive page (92+ companies, Tadhamon ownership) |
| **SaudiArabiaPage** | `/stakeholders/saudi-arabia` | ✅ IMPLEMENTED | Saudi data | Country profile | Saudi Arabia stakeholder page |
| **WorldBankJourney** | `/world-bank` | ✅ IMPLEMENTED | WB project data | WB-specific journey | World Bank dedicated page |

### 1.5 Banking Sector Pages
| Page | Path | Status | Dependencies | Outputs | Purpose |
|------|------|--------|--------------|---------|---------|
| **CommercialBanksHub** | `/banks` | ✅ IMPLEMENTED | Bank data | Bank directory | Commercial banks observatory |
| **CACBank** | `/banks/cac` | ✅ IMPLEMENTED | CAC data | Bank profile | CAC Bank detailed page |
| **TadhamonBank** | `/banks/tadhamon` | ✅ IMPLEMENTED | Tadhamon data | Bank profile | Tadhamon Bank detailed page |
| **MicrofinanceObservatory** | `/microfinance` | ✅ IMPLEMENTED | MFI data | MFI directory | Microfinance institutions hub |

### 1.6 Analysis & Tools Pages
| Page | Path | Status | Dependencies | Outputs | Purpose |
|------|------|--------|--------------|---------|---------|
| **FinancialCalculators** | `/calculators` | ✅ IMPLEMENTED | Historical FX, inflation data | Inflation calculator, FX calculator | Economic calculators (557 lines) |
| **ScenarioForecasting** | `/forecasting` | ✅ IMPLEMENTED | ScenarioSimulator | Scenario outputs | "What if" scenario analysis |
| **PolicyRecommendations** | `/policy` | ✅ IMPLEMENTED | PolicyImpactMeter | Policy recommendations | Evidence-based policy advice |
| **MonetaryPolicySimulator** | Component | ✅ IMPLEMENTED | Monetary data | Simulation results | Monetary policy simulation tool |
| **ScenarioSimulator** | Component | ✅ IMPLEMENTED | Economic models | Scenario projections | General scenario simulator |
| **PolicyImpactMeter** | Component | ✅ IMPLEMENTED | Policy data | Impact assessments | Policy impact visualization |

### 1.7 Data & Visualization Pages
| Page | Path | Status | Dependencies | Outputs | Purpose |
|------|------|--------|--------------|---------|---------|
| **DataVisualization** | `/data-viz` | ✅ IMPLEMENTED | EChartsWrapper | Charts | Data visualization hub |
| **AdvancedVisualizations** | `/advanced-viz` | ✅ IMPLEMENTED | Advanced charts | Complex visualizations | Advanced data viz |
| **Charts** | `/charts` | ✅ IMPLEMENTED | Chart data | Basic charts | Chart gallery |
| **KeyStatistics** | `/key-statistics` | ✅ IMPLEMENTED | Stats data | Key metrics | Statistics dashboard |
| **StatisticalIndicators** | `/indicators` | ✅ IMPLEMENTED | Indicator data | Indicator views | Statistical indicators page |

### 1.8 Timeline & Events Pages
| Page | Path | Status | Dependencies | Outputs | Purpose |
|------|------|--------|--------------|---------|---------|
| **Timeline** | `/timeline` | ✅ IMPLEMENTED | Events data feed | Timeline view | Main timeline page |
| **EventsTimeline** | `/events` | ✅ IMPLEMENTED | Events data feed | Event list | Events timeline |
| **ScrollytellingTimeline** | Component | ✅ IMPLEMENTED | Events data feed (2015-2025, 24 events) | Interactive scrolling timeline | Scrollytelling timeline component |

### 1.9 Content & Research Pages
| Page | Path | Status | Dependencies | Outputs | Purpose |
|------|------|--------|--------------|---------|---------|
| **ResearchLibrary** | `/research` | ✅ IMPLEMENTED | PDF reports | Research catalog | Research library |
| **FinancialLiterature** | `/literature` | ✅ IMPLEMENTED | Literature data | Literature catalog | Financial literature hub |
| **InternationalReports** | `/reports` | ✅ IMPLEMENTED | Report data | Report catalog | International reports |
| **FileManager** | `/files` | ✅ IMPLEMENTED | File storage | File management | File manager interface |
| **NewsAggregator** | `/news` | ✅ IMPLEMENTED | News feeds | News list | News aggregation page |

### 1.10 Thematic Pages
| Page | Path | Status | Dependencies | Outputs | Purpose |
|------|------|--------|--------------|---------|---------|
| **EconomicCrisis** | `/economic-crisis` | ✅ IMPLEMENTED | Crisis data | Crisis analysis | Economic crisis page |
| **CurrencyWar** | `/currency-war` | ✅ IMPLEMENTED | Currency data | Currency analysis | Currency war analysis |
| **SanctionsTracker** | `/sanctions` | ✅ IMPLEMENTED | Sanctions data | Sanctions list | Sanctions tracking |
| **FinancialTransformation** | `/transformation` | ✅ IMPLEMENTED | Transformation data | Transformation analysis | Financial transformation |
| **FinancialPowerMap** | `/power-map` | ✅ IMPLEMENTED | Power map data | Power visualization | Financial power mapping |
| **FinancialFlowsNetwork** | `/financial-flows` | ✅ IMPLEMENTED | Flow data | Network visualization | Financial flows network |

### 1.11 Other Pages
| Page | Path | Status | Dependencies | Outputs | Purpose |
|------|------|--------|--------------|---------|---------|
| **MainCities** | `/cities` | ✅ IMPLEMENTED | City data | City profiles | Main cities page |
| **StoryPage** | `/story` | ✅ IMPLEMENTED | Story content | Narrative | Story/narrative page |
| **Overview** | `/overview` | ✅ IMPLEMENTED | Overview data | Summary | Overview page |
| **KayanPlatform** | `/kayan` | ✅ IMPLEMENTED | Kayan data | Platform info | Kayan platform page |
| **FMIProject** | Not routed | ✅ EXISTS | FMI data | Project info | Financial Market Infrastructure project |
| **ComponentShowcase** | Not routed | ✅ EXISTS | UI components | Component demos | Component showcase |
| **Home** | Not routed | ✅ EXISTS | - | Home content | Alternative home page |
| **NotFound** | `/404` | ✅ IMPLEMENTED | - | 404 page | Not found page |

---

## 2. COMPONENTS INVENTORY (19 Core + shadcn/ui)

### 2.1 Intelligence & Simulation Components
| Component | File | Status | Dependencies | Outputs | Purpose |
|-----------|------|--------|--------------|---------|---------|
| **ScenarioSimulator** | ScenarioSimulator.tsx | ✅ IMPLEMENTED | Economic models, sliders | Scenario projections (FX, inflation, GDP) | "What if" scenario engine |
| **MonetaryPolicySimulator** | MonetaryPolicySimulator.tsx | ✅ IMPLEMENTED | Monetary models | Policy simulation results | Monetary policy simulator |
| **PolicyImpactMeter** | PolicyImpactMeter.tsx | ✅ IMPLEMENTED | Policy data | Impact scores/visualizations | Policy impact assessment |
| **AIChatBox** | AIChatBox.tsx | ✅ IMPLEMENTED | AI backend | Chat interface | AI analyst interface (RAG) |

### 2.2 Visualization Components
| Component | File | Status | Dependencies | Outputs | Purpose |
|-----------|------|--------|--------------|---------|---------|
| **MasterCompass** | MasterCompass.tsx | ✅ IMPLEMENTED | Multi-indicator data | Compass visualization | Multi-dimensional indicator widget |
| **ScrollytellingTimeline** | ScrollytellingTimeline.tsx | ✅ IMPLEMENTED | Events data feed (24 events, 2015-2025) | Interactive timeline | Scrollytelling timeline |
| **EChartsWrapper** | EChartsWrapper.tsx | ✅ IMPLEMENTED | Apache ECharts | Chart rendering | ECharts integration wrapper |
| **EconomicIndicators** | EconomicIndicators.tsx | ✅ IMPLEMENTED | Indicator data | Indicator displays | Economic indicators component |
| **CurrencyBadge** | CurrencyBadge.tsx | ✅ IMPLEMENTED | Currency data | Badge display | Currency badge component |
| **NewsTicker** | NewsTicker.tsx | ✅ IMPLEMENTED | News feed | Ticker display | News ticker component |

### 2.3 Layout & Navigation Components
| Component | File | Status | Dependencies | Outputs | Purpose |
|-----------|------|--------|--------------|---------|---------|
| **Header** | Header.tsx | ✅ IMPLEMENTED | Navigation, LanguageContext | Header bar | Site header |
| **Footer** | Footer.tsx | ✅ IMPLEMENTED | - | Footer bar | Site footer |
| **Navigation** | Navigation.tsx | ✅ IMPLEMENTED | Route data | Nav menu | Navigation component |
| **DashboardLayout** | DashboardLayout.tsx | ✅ IMPLEMENTED | Sidebar, content area | Dashboard layout | Dashboard layout wrapper |
| **DashboardLayoutSkeleton** | DashboardLayoutSkeleton.tsx | ✅ IMPLEMENTED | - | Loading skeleton | Dashboard loading state |

### 2.4 Utility Components
| Component | File | Status | Dependencies | Outputs | Purpose |
|-----------|------|--------|--------------|---------|---------|
| **ErrorBoundary** | ErrorBoundary.tsx | ✅ IMPLEMENTED | React error boundary | Error display | Error boundary wrapper |
| **FileUpload** | FileUpload.tsx | ✅ IMPLEMENTED | File API | Upload interface | File upload component |
| **ManusDialog** | ManusDialog.tsx | ✅ IMPLEMENTED | Dialog UI | Modal dialog | Dialog component |
| **Map** | Map.tsx | ✅ IMPLEMENTED | Google Maps proxy | Map display | Google Maps integration |

---

## 3. DATA ARCHITECTURE

### 3.1 Data Feeds (client/src/data/feeds/)
| Feed | File | Status | Source | Data Range | Purpose |
|------|------|--------|--------|------------|---------|
| **Events** | events.ts | ✅ IMPLEMENTED | Manual curation | 2015-2025 (24 major events) | Timeline events feed |
| **FX Rates** | fx_rates.ts | ✅ IMPLEMENTED | CBY, market data | 2010-2025 | Exchange rate historical data |
| **GDP** | gdp.ts | ✅ IMPLEMENTED | World Bank, IMF | 2010-2025 | GDP time series |
| **Inflation** | inflation.ts | ✅ IMPLEMENTED | IMF, CBY | 2010-2025 | Inflation rates |
| **Poverty** | poverty.ts | ✅ IMPLEMENTED | World Bank | 2010-2025 | Poverty indicators |

### 3.2 Database Schema (drizzle/schema.ts - 274 lines, 9 tables)
| Table | Status | Fields | Purpose |
|-------|--------|--------|---------|
| **users** | ✅ IMPLEMENTED | id, openId, name, email, avatar, role, createdAt | User authentication |
| **files** | ✅ IMPLEMENTED | id, name, path, size, mimeType, uploadedBy, createdAt | File storage metadata |
| **events** | ✅ IMPLEMENTED | id, date, title, description, category, actors, impact, sources, createdAt | Timeline events |
| **actors** | ✅ IMPLEMENTED | id, name, type, description, role, influence, createdAt | Stakeholder profiles |
| **indicators** | ✅ IMPLEMENTED | id, name, value, unit, date, source, confidence, createdAt | Economic indicators |
| **causations** | ✅ IMPLEMENTED | id, cause, effect, strength, evidence, createdAt | Cause-effect relationships |
| **recommendations** | ✅ IMPLEMENTED | id, title, description, priority, stakeholders, timeline, createdAt | Policy recommendations |
| **banks** | ✅ IMPLEMENTED | id, name, type, ownership, branches, assets, status, createdAt | Banking institutions |
| **stakeholders** | ✅ IMPLEMENTED | id, name, type, role, risks, options, createdAt | Stakeholder action tracking |

### 3.3 External API Integrations
| API | Status | Purpose | Usage |
|-----|--------|---------|-------|
| **World Bank WDI** | ⚠️ TODO | GDP, poverty, development indicators | Real-time economic data |
| **IMF API** | ⚠️ TODO | Macroeconomic indicators, Article IV | Official IMF data |
| **OCHA FTS** | ⚠️ TODO | Humanitarian funding tracking | Aid flow data |
| **WFP VAM** | ⚠️ TODO | Food security, market prices | Food security monitoring |
| **JODI** | ⚠️ TODO | Oil data | Energy sector data |
| **UN/EU/OFAC Sanctions** | ⚠️ TODO | Sanctions lists | Sanctions tracking |
| **Google Maps (Manus Proxy)** | ✅ IMPLEMENTED | Maps, geocoding, places | Map integration |

---

## 4. ALGORITHMS & INTELLIGENCE LAYERS

### 4.1 Calculators
| Calculator | Location | Status | Inputs | Outputs | Algorithm |
|------------|----------|--------|--------|---------|-----------|
| **Inflation Calculator** | FinancialCalculators.tsx | ✅ IMPLEMENTED | Base amount, start date, end date | Adjusted amount, % change | Historical CPI-based adjustment |
| **Exchange Rate Calculator** | FinancialCalculators.tsx | ✅ IMPLEMENTED | Amount, date, currency pair | Converted amount | Historical FX rate lookup |

### 4.2 Simulators
| Simulator | Location | Status | Inputs | Outputs | Algorithm |
|-----------|----------|--------|--------|---------|-----------|
| **Scenario Simulator** | ScenarioSimulator.tsx | ✅ IMPLEMENTED | Oil volumes, aid volumes, FX policy, sanctions intensity, shipping costs | FX (Aden), FX gap, inflation, food basket cost, fiscal space index, banking stress index, poverty trend | Rule-based elasticity models (documented, illustrative) |
| **Monetary Policy Simulator** | MonetaryPolicySimulator.tsx | ✅ IMPLEMENTED | Interest rates, reserve requirements, FX interventions | Money supply, inflation, exchange rate impacts | Monetary transmission mechanism model |

### 4.3 Impact Assessment
| Tool | Location | Status | Inputs | Outputs | Algorithm |
|------|----------|--------|--------|---------|-----------|
| **Policy Impact Meter** | PolicyImpactMeter.tsx | ✅ IMPLEMENTED | Policy parameters, stakeholder data | Impact scores, beneficiary estimates, risk assessments | Multi-criteria scoring with stakeholder weighting |

### 4.4 Confidence Scoring
| System | Status | Inputs | Outputs | Algorithm |
|--------|--------|--------|---------|-----------|
| **Data Confidence Scoring** | ⚠️ PARTIAL (indicators table has confidence field) | Source quality, freshness, cross-checks | Confidence score (0-100) | Source reliability + recency + triangulation |
| **Conflict Resolution** | ⚠️ TODO | Multiple conflicting data points | Reconciled value + confidence band | Triangulation with weighted averaging |

### 4.5 Memory Graph & RAG
| Component | Status | Inputs | Outputs | Algorithm |
|-----------|--------|--------|---------|-----------|
| **Memory Graph** | ⚠️ TODO (causations table exists) | Actors, events, indicators, policies (10+ years) | Relationship graph | Graph database of causal relationships |
| **RAG AI Analyst** | ⚠️ PARTIAL (AIChatBox exists) | User query, curated PDFs, indicator data | Structured answer (EN/AR) with citations | Closed-corpus RAG with paragraph-level source citation |

---

## 5. STANDARDS & METHODOLOGIES

### 5.1 International Standards
| Standard | Status | Application | Implementation |
|----------|--------|-------------|----------------|
| **IMF Country Codes** | ⚠️ TODO | Country classification | Use IMF standard codes |
| **World Bank Poverty Definitions** | ⚠️ TODO | $2.15/day poverty line | Apply WB definitions |
| **IMF Fiscal Indicators** | ⚠️ TODO | Debt/GDP, deficit/GDP | Use IMF calculation methods |
| **OECD DAC Sector Codes** | ⚠️ TODO | Aid tracking | Use DAC5 codes |
| **IATI Standards** | ⚠️ TODO | Aid transparency | Implement IATI XML export |
| **Basel Banking Standards** | ⚠️ TODO | Banking supervision | Apply Basel III where applicable |

### 5.2 Citation Standards
| Standard | Status | Application | Implementation |
|----------|--------|-------------|----------------|
| **APA 7th Edition** | ⚠️ TODO | Academic citations | Implement APA formatter |
| **Chicago Manual of Style** | ⚠️ TODO | Alternative citation | Implement Chicago formatter |
| **BibTeX Export** | ⚠️ TODO | Research integration | Generate BibTeX |

---

## 6. QUALITY ASSURANCE CHECKLISTS

### 6.1 Timeline Events Validation
- [x] Operation Decisive Storm (March 26, 2015) - VERIFIED
- [x] Central Bank split (September 18, 2016) - VERIFIED
- [ ] Hodeidah Battle (June-December 2018)
- [ ] Stockholm Agreement (December 13, 2018)
- [ ] COVID-19 first case (April 10, 2020)
- [ ] All 2021-2025 events with sources
- [ ] All actors accurate (Houthis, Saudi Coalition, IRG, STC)
- [ ] Source citations for each event

### 6.2 Statistics Validation
- [ ] $2.4B humanitarian aid (OCHA FTS 2024)
- [ ] 8.2M beneficiaries (World Bank/UN)
- [ ] 1,800 YER/USD parallel rate (CBY/market)
- [ ] All GDP figures
- [ ] Inflation rates (IMF)
- [ ] Poverty statistics (80%, World Bank)
- [ ] Food insecurity (17M, WFP)
- [ ] Banking sector statistics

### 6.3 Functionality Testing
- [ ] Year filters on Timeline (2015-2025)
- [ ] Category filters on News Aggregator
- [ ] Relevance filters (high/medium/low)
- [ ] Search functionality across all pages
- [ ] Stakeholder filters on Stakeholder Hub
- [ ] Bank filters on Commercial Banks Hub
- [ ] Event type filters on Timeline
- [ ] All calculators work correctly
- [ ] All simulators produce valid outputs
- [ ] All links work (no 404s)
- [ ] Database connections stable
- [ ] File uploads/downloads work

### 6.4 Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS/Android)

### 6.5 Accessibility Testing
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Color contrast ratios (WCAG AA)
- [ ] ARIA labels correct
- [ ] Focus indicators visible

### 6.6 Performance Testing
- [ ] Lighthouse audit (target: 90+ score)
- [ ] Load time on slow connections (<2s on 3G)
- [ ] Bundle size (<500KB)
- [ ] Lazy loading works
- [ ] Throttled CPU performance

---

## 7. STAKEHOLDER MICROSITES (100+ Target)

### 7.1 Implemented (3)
| Stakeholder | Path | Status | Tabs | Content |
|-------------|------|--------|------|---------|
| **Hayel Saeed Anam Group** | `/stakeholders/hayel-saeed-anam` | ✅ NEW | 5 (Overview, Role, Subsidiaries, Risks, Options) | 92+ companies, Tadhamon ownership, IFC investment, UN panel findings |
| **Saudi Arabia** | `/stakeholders/saudi-arabia` | ✅ IMPLEMENTED | Multiple | Country profile, economic role |
| **CBY-Aden** | `/stakeholders/cby-aden` | ✅ NEW | 5 (Overview, Role, Impact, Risks, Options) | Monetary authority, dual system, stabilization efforts |

### 7.2 Priority TODO (15+)
- [ ] **CBY-Sana'a** (Houthi-controlled central bank)
- [ ] **Houthi Movement** (Ansar Allah) - control areas, economic policies, revenue sources
- [ ] **IRG** (Internationally Recognized Government) - economic policies, fiscal challenges
- [ ] **STC** (Southern Transitional Council) - separatist agenda, Aden control
- [ ] **UAE** - military role, economic support, port control
- [ ] **Oman** - mediation, economic ties, humanitarian corridor
- [ ] **Iran** - Houthi support, sanctions impact
- [ ] **Qatar** - humanitarian aid, mediation
- [ ] **Kuwait** - humanitarian aid, reconstruction
- [ ] **Egypt** - military support, economic ties
- [ ] **Jordan** - refugee impact, economic cooperation
- [ ] **IMF** - programs, Article IV, assessments
- [ ] **UNDP** - development projects, governance
- [ ] **WFP** - food assistance, cash transfers
- [ ] **UNICEF** - child protection, education, health

### 7.3 Commercial Banks (15+ TODO)
- [x] **CAC Bank** - ✅ IMPLEMENTED
- [x] **Tadhamon Bank** - ✅ IMPLEMENTED
- [ ] Yemen Kuwait Bank
- [ ] Yemen Commercial Bank
- [ ] National Bank of Yemen
- [ ] Cooperative & Agricultural Credit Bank
- [ ] Saba Islamic Bank
- [ ] United Bank
- [ ] Yemen Bank for Reconstruction & Development
- [ ] Al-Kuraimi Islamic Microfinance Bank
- [ ] Alkuraimi Exchange
- [ ] International Bank of Yemen
- [ ] Arab Bank
- [ ] Shamil Bank
- [ ] Al-Amal Microfinance Bank

### 7.4 UN Agencies & Donors (10+ TODO)
- [ ] UN OCHA
- [ ] UNHCR
- [ ] IOM
- [ ] WHO
- [ ] USAID
- [ ] UK FCDO
- [ ] EU
- [ ] Germany (GIZ/KfW)
- [ ] Netherlands
- [ ] Sweden
- [ ] Switzerland

---

## 8. MISSING/TODO COMPONENTS

### 8.1 Critical Missing
1. **Stakeholder Directory/Index Page** - Central navigation for 100+ stakeholders
2. **API Integration Layer** - World Bank WDI, IMF, OCHA FTS, WFP VAM, JODI, sanctions
3. **Memory Graph Implementation** - Full causal relationship graph
4. **RAG AI Analyst** - Complete closed-corpus RAG with PDF ingestion
5. **Confidence Scoring System** - Automated confidence calculation
6. **Data Export Functionality** - CSV, Excel, PDF, chart PNG/SVG export
7. **Public API** - RESTful API for researchers
8. **tRPC Endpoints** - CRUD for all database tables
9. **Contextual Photos** - High-quality Yemen economic imagery
10. **Mobile Optimization** - Responsive fixes for all pages

### 8.2 Content Gaps
1. **90-page PDF extraction** - Only partially extracted (pages 1-30)
2. **Stakeholder microsites** - 3/100+ implemented
3. **Bank pages** - 2/15+ implemented
4. **UN agency pages** - 0/10+ implemented
5. **Regional actor pages** - 1/8 implemented (Saudi only)

### 8.3 Functionality Gaps
1. **Scenario tools** - Simulators exist but need more scenarios
2. **Recommendations** - Page exists but needs stakeholder-specific tailoring
3. **Sanctions tracking** - Page exists but needs live data integration
4. **News aggregation** - Page exists but needs RSS/API feeds
5. **File management** - Basic interface exists, needs S3 integration

---

## 9. DEPENDENCIES MAP

### 9.1 Core Dependencies
```
NewLandingPage
├── LanguageContext
└── UI Components (Card, Badge, Button)

CompassDashboard
├── MasterCompass
│   └── Multi-indicator data (FX, GDP, inflation, poverty)
├── EconomicIndicators
│   └── Indicator data feeds
└── DashboardLayout

ScrollytellingTimeline
├── Events data feed (events.ts)
│   └── 24 events (2015-2025)
└── Intersection Observer API

FinancialCalculators
├── FX Rates data feed (fx_rates.ts)
├── Inflation data feed (inflation.ts)
└── Historical calculation algorithms

ScenarioSimulator
├── Economic models (elasticities)
├── Input sliders (oil, aid, FX, sanctions, shipping)
└── Output projections (FX, inflation, food, fiscal, banking, poverty)

HayelSaeedAnamGroup
├── Research data (Wikipedia, HSA website, IFC reports)
├── UN panel findings
└── Stakeholder template structure

CBYAdenPage
├── Research data (Sana'a Center, World Bank, Reuters, ODI)
├── CBY-Aden data
└── Stakeholder template structure
```

### 9.2 Data Flow
```
External Sources → Data Feeds → Components → Pages → User
    ↓                  ↓            ↓         ↓
World Bank WDI → gdp.ts → MasterCompass → CompassDashboard → Dashboard View
IMF API → inflation.ts → EconomicIndicators → ExecutiveDashboard → Metrics
OCHA FTS → (TODO) → (TODO) → WorldBankJourney → Funding Data
Manual Curation → events.ts → ScrollytellingTimeline → LandingPage → Timeline
```

---

## 10. IMPLEMENTATION STATUS SUMMARY

### 10.1 Completed ✅
- **46 pages** implemented and routed
- **19 core components** built
- **5 data feeds** (events, FX, GDP, inflation, poverty)
- **9 database tables** with schema
- **3 stakeholder microsites** (HSA, Saudi, CBY-Aden)
- **2 bank pages** (CAC, Tadhamon)
- **3 simulators** (Scenario, Monetary Policy, Policy Impact)
- **2 calculators** (Inflation, FX)
- **New landing page** with world-class design
- **Bilingual system** (Arabic/English) throughout
- **Google Maps integration** via Manus proxy

### 10.2 Partial ⚠️
- **API integrations** - Only Google Maps done, 6 major APIs pending
- **RAG AI Analyst** - AIChatBox exists but RAG backend incomplete
- **Confidence scoring** - Database field exists but algorithm not implemented
- **Memory graph** - Causations table exists but graph not built
- **Data export** - No export functionality yet
- **Mobile optimization** - Some pages responsive, needs comprehensive testing

### 10.3 TODO ❌
- **97+ stakeholder microsites** - Only 3 done
- **13+ bank pages** - Only 2 done
- **10+ UN agency pages** - None done
- **7 regional actor pages** - Only 1 done (Saudi)
- **API integration layer** - 0/6 major APIs integrated
- **Public API** - Not started
- **tRPC endpoints** - No CRUD endpoints implemented
- **Contextual photos** - No Yemen-specific imagery generated
- **Standards implementation** - No IMF/WB/OECD/IATI standards applied
- **Citation system** - No APA/Chicago/BibTeX export
- **Data export** - No CSV/Excel/PDF export
- **QA validation** - Most checklist items unchecked

---

## 11. NEXT STEPS (Prioritized)

### Phase 1: Build Priority Stakeholder Pages (Current)
1. ✅ Hayel Saeed Anam Group - DONE
2. ✅ CBY-Aden - DONE
3. ⚠️ CBY-Sana'a - IN PROGRESS
4. Houthi Movement (Ansar Allah)
5. IRG (Internationally Recognized Government)
6. UAE
7. Tadhamon Bank (separate from HSA)
8. Remaining 15+ commercial banks

### Phase 2: Generate Contextual Photos
1. Yemen markets (Sana'a, Aden, Taiz)
2. Banking halls and financial institutions
3. Ports (Hodeidah, Aden, Mukalla)
4. Currency exchange scenes
5. Economic activity imagery
6. Hero images for all major pages

### Phase 3: Mobile Optimization
1. Test all 46 pages on mobile devices
2. Fix responsive layouts
3. Ensure touch-friendly interactions (44px minimum)
4. Optimize images for mobile bandwidth
5. Test ScrollytellingTimeline on mobile

### Phase 4: Integrate Live Data APIs
1. World Bank WDI API
2. IMF API
3. OCHA FTS API
4. WFP VAM API
5. JODI API
6. UN/EU/OFAC Sanctions APIs

### Phase 5: Complete Missing Features
1. tRPC CRUD endpoints for all 9 tables
2. Data export (CSV, Excel, PDF, charts)
3. Public API for researchers
4. Complete RAG AI Analyst backend
5. Implement confidence scoring algorithm
6. Build memory graph from causations table

### Phase 6: Final QA & Testing
1. Validate all statistics with sources
2. Test all filters and search
3. Cross-browser testing (5 browsers)
4. Accessibility testing (WCAG AA)
5. Performance testing (Lighthouse 90+)
6. Load testing on slow connections

---

## 12. CONFLICT RESOLUTION LOG

### 12.1 Resolved Conflicts
1. **Landing Page** - NewLandingPage (teal/blue EN, burgundy/gold AR) replaces old LandingPage (preserved at `/old-landing`)
2. **CBY Pages** - CBYAdenTracker (tracker interface) vs CBYAdenPage (stakeholder page) - Both kept, different purposes
3. **Tadhamon Bank** - Mentioned in HSA page as subsidiary, also has dedicated bank page - Consistent, no conflict

### 12.2 Pending Conflicts
1. **Data Feeds vs API Integration** - Static data feeds (events.ts, fx_rates.ts, etc.) vs live API integration - DECISION: Keep static feeds for historical data, add API integration for real-time updates
2. **Stakeholder Hub vs Individual Pages** - StakeholderHub (directory) vs individual stakeholder pages - DECISION: Hub is index/directory, individual pages are detailed profiles
3. **Multiple Dashboard Pages** - CompassDashboard, ExecutiveDashboard, CBYDashboard, AnalyticsDashboard - DECISION: Each serves different audience/purpose, keep all

---

## 13. TECHNICAL DEBT

### 13.1 TypeScript Errors
- **7 TS errors** in PolicyRecommendations.tsx - ReactNode type mismatch in iterator
- **Module not found** - server/_core/index.ts import errors (likely from rollback)

### 13.2 Code Quality
- **FinancialCalculators.tsx** - 557 lines, consider splitting into separate calculator components
- **Duplicate code** - Stakeholder page templates (HSA, CBY-Aden) should be abstracted into reusable template
- **Missing tests** - No vitest tests written yet

### 13.3 Performance
- **Bundle size** - Not measured yet, target <500KB
- **Image optimization** - No WebP conversion yet
- **Lazy loading** - Not implemented for all images
- **Code splitting** - Not optimized yet

---

## 14. DOCUMENTATION STATUS

### 14.1 Existing Documentation
- ✅ README.md - Comprehensive project README
- ✅ DEPLOYMENT_GUIDE.md - Deployment instructions
- ✅ DEVELOPER_GUIDE.md - Developer onboarding
- ✅ COMPREHENSIVE_AUDIT.md - 40+ checkpoint audit
- ✅ CURRENT_STATUS.md - Status summary
- ✅ RETRIEVAL_TODO.md - Code retrieval tracking
- ✅ PDF_CONTENT_EXTRACTION.md - PDF extraction notes
- ✅ todo.md - Comprehensive TODO list (500+ items)
- ✅ MASTER_BLUEPRINT.md - This document

### 14.2 Missing Documentation
- ❌ API documentation (no API yet)
- ❌ Component storybook/showcase documentation
- ❌ Data dictionary for all datasets
- ❌ Methodology documentation for algorithms
- ❌ User guide for end users
- ❌ Admin guide for content management

---

**END OF MASTER BLUEPRINT**

*Last Updated: Current session*
*Total Pages: 46 | Total Components: 19 | Total Data Feeds: 5 | Total DB Tables: 9*
*Implementation: ~40% Complete | Priority: Stakeholder pages, API integration, mobile optimization*
