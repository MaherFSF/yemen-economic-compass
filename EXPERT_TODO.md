# 🎯 EXPERT PANEL - COMPREHENSIVE TODO LIST
## Yemen Economic Intelligence Platform - Complete Transformation

**Based on:** 10-Expert Panel Review + 1793-line Master Specification  
**Current Status:** 40% complete (checkpoint c8d691e6)  
**Target:** World-class economic observatory exceeding World Bank/IMF standards

---

## 🚨 IMMEDIATE PRIORITIES (Next 48 Hours)

### P1: DATA ARCHITECTURE FOUNDATION
- [ ] Create `/client/src/data/feeds/` directory structure
- [ ] Implement `fx_rates.ts` (Aden/Sana'a daily exchange rates)
- [ ] Implement `inflation.ts` (CPI North/South monthly)
- [ ] Implement `gdp.ts` (Real GDP annual with 2014=100 index)
- [ ] Implement `poverty.ts` (Poverty rate annual)
- [ ] Implement `events.ts` (Enhanced timeline events)
- [ ] Add Zod schemas for all data feeds
- [ ] Create data context provider (React Context)
- [ ] Add "Last updated" timestamps to all data
- [ ] Add source attribution metadata

### P2: DESIGN SYSTEM ENHANCEMENT
- [ ] Implement brand color tokens in `index.css`:
  * `--brand-teal: #1D8A8A`
  * `--brand-blue: #1F5C8A`
  * `--brand-green: #2B7A0B`
  * `--brand-amber: #C96A15`
- [ ] Add Yemen flag border to homepage (red-white-black, 2px each)
- [ ] Update typography:
  * EN: Inter (UI), Source Serif Pro (headings)
  * AR: IBM Plex Sans Arabic (UI), Noto Naskh Arabic (longform)
- [ ] Create split motif component (animated split map)
- [ ] Add micro-interactions (hover effects, transitions)
- [ ] Implement executive-clean aesthetic

### P3: CRITICAL MISSING PAGES
- [ ] `/story` - Full narrative (2014-2025) with scrollytelling
- [ ] `/currency` - Currency War detailed page with dual-line charts
- [ ] `/two-systems` - Side-by-side comparison (Aden vs Sana'a)
- [ ] `/methodology` - Methods, ethics, sources, limitations
- [ ] `/events` - Enhanced event tracker with advanced filters

---

## 📊 PHASE 1: MACRO DASHBOARDS (Week 1-2)

### Four Critical Dashboards
- [ ] `/macro/output-growth`
  * Area line chart (GDP index 2014=100)
  * Sector composition stacked chart
  * Regional small multiples
  * Institutional insight: "Recovery requires re-activating productive infrastructure"
  
- [ ] `/macro/inflation-cost`
  * Dual series N/S synchronized charts
  * Food/fuel basket strips
  * FX→CPI pass-through scatter plot
  * Institutional insight: "Stabilizing prices begins with stabilizing currency"
  
- [ ] `/macro/poverty-labour`
  * Trend lines with confidence ribbons
  * Underemployment/unemployment proxy series
  * Humanitarian impact section
  * Institutional insight: "Job creation requires business environment reform"
  
- [ ] `/macro/fiscal-space`
  * Revenue/expense waterfall chart
  * Reserves gauge (Aden)
  * Donor inflow timeline
  * Institutional insight: "Political settlement requires revenue-sharing agreement"

---

## 💰 PHASE 2: FINANCIAL SYSTEM DEEP DIVE (Week 3)

### Enhanced Central Bank Pages
- [ ] `/cby-aden` enhancements:
  * Policy tools section (issuance, interest rates, auctions)
  * Decision timeline (2016-2025)
  * Challenges section (reserves depletion, inflation, legitimacy conflict)
  * Integration scenarios for reunification
  
- [ ] `/cby-sanaa` enhancements:
  * Approach section (cash ban, withdrawal controls, e-currency experiments)
  * Decision record (withdrawal limits, cash ban, liquidity rationing)
  * Results analysis (lower official inflation vs cash scarcity cost)
  * Technical integration challenges

### Financial Services & Inclusion
- [ ] `/finance` - New comprehensive page:
  * Microfinance section (expansion, quality challenges, role in marginalized communities)
  * Islamic banking section (limited activities, liquidity constraints)
  * Hawala/exchange networks (backbone of daily finance)
  * Financial inclusion metrics (low bank account penetration)
  * Digital payments opportunities (conditional on infrastructure)
  * Policy priority: License rationalization, governance strengthening

### Composite Indexes
- [ ] `/indexes` - New page with 5 indexes:
  * **HDI-Yemen** (Hawala Dependence Index)
    - Formula, components, measurement method
    - Time series chart (2014-2025)
    - Interpretation guide
  * **BDS** (Bank Disintermediation Score)
    - Bank payment share decline (88% → 12%)
    - Chart showing non-bank channel dominance
  * **LSM** (Licensing Shock Measure)
    - 13 microfinance bank licenses impact
    - Regulatory shock timeline
  * **SII** (Sanctions Intensity Index)
    - UN/EU/OFAC sanctions over time
    - Intensity scoring methodology
  * **SFI** (Sanctions Fragmentation Index)
    - International community consistency measure
    - Fragmentation impact on humanitarian operations

---

## 🗺️ PHASE 3: STAKEHOLDER & GEOGRAPHY (Week 4)

### Enhanced Stakeholder Hub
- [ ] Add comprehensive profiles for 10+ actors:
  * IRG/Presidential Leadership Council (Aden)
  * Ansar Allah/Sana'a authorities
  * Southern Transitional Council
  * Central Bank - Aden
  * Central Bank - Sana'a
  * Commercial banks
  * Microfinance institutions
  * Money exchangers/hawala networks
  * Saudi Arabia (regional actor)
  * UAE (regional actor)
  * Iran (regional actor)
  * IMF/World Bank/UN (international actors)
  
- [ ] Create `/compare` - Stakeholder comparison matrix:
  * Objectives
  * Tools/instruments
  * Resources
  * Allies
  * Vulnerabilities/strengths
  
- [ ] Add accountability scorecards:
  * Evidence-based action tracking
  * Impact assessment
  * Data-driven accountability

### City Pages (Dynamic)
- [ ] Create `/cities/[slug]` dynamic route
- [ ] Implement 6 city profiles:
  * **Sana'a:** Political/population center, relative security, cash scarcity, hawala dependence
  * **Aden:** Interim capital, port, UN presence, high inflation, salary protests
  * **Taiz:** Partially besieged, high logistics costs, business displacement, commercial resilience
  * **Hodeidah:** Import lifeline for north, 2018 war damage, acute poverty, UNVIM role
  * **Marib:** Population boom (IDPs), energy hub, military pressure impact on production
  * **Mukalla/Hadramaut:** Relative stability, eastern ports, fishing, oil revenue demands
  
- [ ] Add city indicators dashboard:
  * FX premium
  * Food basket price
  * Fuel price
  * Electricity hours (if available)
  * Population/displacement data
  
- [ ] Create city comparison tool

### Control Map & Money Flows
- [ ] Implement interactive GeoJSON map:
  * Control areas layer (generalized)
  * Ports layer
  * Oil fields & export terminals
  * Border crossings
  * Customs nodes
  
- [ ] Create Sankey "Follow the Money" diagram:
  * Remittance flows
  * Aid flows
  * Port/customs revenues
  * Oil export routes (stopped/diverted)
  * Visual correlation: territorial control → resources → revenues → markets

---

## 🔍 PHASE 4: DATA TOOLS & EXPLORER (Week 5)

### Data Explorer
- [ ] `/data` - Interactive query interface:
  * Indicator selector (100+ indicators grouped by category)
  * Geography selector (National, IRG, Houthi, governorates)
  * Time range selector (years/months)
  * Chart/table generator
  * Event overlay toggle (mark major events on charts)
  * Comparison mode (two indicators side-by-side)
  * Export options (PNG, CSV, PDF)

### Data Catalog
- [ ] `/catalog` - Complete dataset listing:
  * Metadata for each dataset:
    - Name (e.g., "Real GDP constant 2010 US$")
    - Description (what it measures)
    - Source (World Bank, CSO Yemen, CBY-Aden, WFP, etc.)
    - Frequency (annual, quarterly, monthly)
    - Coverage (years available, regions available)
    - Last update date
    - Notes/limitations (estimates, projections, data gaps)
    - Download link (CSV)
    - API endpoint (if applicable)
  * Categories:
    - Macroeconomic Data
    - Public Finance Data
    - Socioeconomic Data
    - Humanitarian Data
    - Composite Indices
    - Event Data
  * Bulk download option (ZIP all datasets)
  * API documentation
  * Transparency statement: "Due to conflict, official data availability is limited. Some figures are estimates and may be revised."

### Enhanced Calculators
- [ ] Upgrade `/calculators` (FX Calculator):
  * Support 6 currencies: YER-Aden, YER-Sana'a, USD, EUR, SAR, GBP
  * Historical conversion mode (select month/year)
  * Cross-region conversion (Aden ↔ Sana'a via USD)
  * "What was X worth then vs now?" feature
  * Remittance value calculator
  
- [ ] Upgrade `/calculators` (Inflation Calculator):
  * Regional CPI selection (IRG vs Houthi)
  * Base date → Target date conversion
  * Purchasing power erosion display
  * "What could you buy" context (bread loaves, fuel liters)
  * Reverse calculation (today's money → past value)
  * Salary indexing tool

---

## 🎓 PHASE 5: ENGAGEMENT & SUSTAINABILITY (Week 6)

### Membership & Services
- [ ] `/subscribe` - Membership page:
  * Value proposition: "Support open economic knowledge"
  * Subscription benefits:
    - Monthly/quarterly analysis reports
    - Data download alerts
    - Early access to new datasets
    - Member-only webinars
    - Priority data query support
    - Networking community (forum/Slack)
    - Training course discounts
  * Membership tiers:
    - Free User (core content access)
    - Professional Subscriber (paid, all extras)
    - Institutional Partner (tailored analysis, logo recognition)
  * Pricing (if applicable)
  * Testimonial (social proof)
  * Transparency: "Subscription fees support platform sustainability"
  
- [ ] `/services` - Advisory & Custom Research:
  * Custom research offerings:
    - Sectoral studies
    - Policy cost/impact estimates
    - Money flow mapping
  * Public policy services:
    - Cash/fiscal intervention design
    - Institutional reunification pathways
    - National salary payment solutions
  * Data solutions:
    - Tailored dashboards
    - API integration
    - Automated reporting
  * Briefings & presentations:
    - Periodic updates for missions/donors
  * Knowledge translation:
    - Technical content simplification
    - Arabic accessibility for national stakeholders
  * Contact: Dedicated inquiry email
  
- [ ] `/academy` - CauseWay Academy:
  * Mission: "Build data-driven economic analysis capacity for policymakers, researchers, journalists, students"
  * Sample programs:
    - "Reading Economic Indicators & Policy Messaging"
    - "Yemen's Conflict Economy: Diagnostic Tools & Solutions"
    - "Data Visualization & Storytelling with CauseWay Tools"
  * Formats: Self-paced, live webinars, customized institutional workshops
  * Certifications & accessibility: Bilingual, downloadable materials, university partnerships

### Contact & About
- [ ] `/contact` - Secure contact page:
  * Contact form (name, email, organization, message)
  * Inquiry categories (data, research, partnership, press, technical)
  * Response time expectation
  * Security note (encrypted communication)
  * Alternative contact methods (email, social media)
  
- [ ] `/about` enhancements:
  * Governance structure
  * Team profiles (if applicable)
  * Credits & acknowledgments
  * Funding transparency
  * Partnership opportunities
  * Impact metrics dashboard

### Policy Feed
- [ ] `/policy-feed` - Real-time policy actions:
  * Regulatory/monetary/fiscal changes feed
  * Filterable by:
    - Authority (CBY-Aden, CBY-Sanaa, IRG, Houthi authorities)
    - Domain (monetary, fiscal, trade, licensing)
    - Region (Aden, Sana'a, national)
  * Each action card shows:
    - Date
    - Authority
    - Action type
    - Description
    - Immediate effect
    - Related indicators
    - Links to relevant dashboards
  * Timeline view
  * Impact assessment tags

---

## ✅ PHASE 6: QUALITY & PERFORMANCE (Week 7)

### Testing Implementation
- [ ] Install testing dependencies:
  * Vitest (unit testing)
  * Playwright (E2E testing)
  * Lighthouse CI (performance)
  * axe-core (accessibility)
  
- [ ] Unit tests (Vitest):
  * Data feed functions
  * Utility functions
  * Component logic
  * Context providers
  * Target: 80%+ code coverage
  
- [ ] E2E tests (Playwright):
  * Critical user journeys:
    - Homepage → Story → Dashboard
    - Language toggle (EN ↔ AR)
    - Data explorer query & export
    - Calculator usage
    - Filter interactions
    - Mobile navigation
  * Cross-browser testing (Chrome, Firefox, Safari)
  
- [ ] Accessibility tests (axe):
  * WCAG 2.2 AA compliance
  * Keyboard navigation
  * Screen reader compatibility
  * Focus indicators
  * Color contrast
  * ARIA labels
  
- [ ] Performance tests (Lighthouse CI):
  * LCP < 2.5s on mid-tier mobile
  * FID < 100ms
  * CLS < 0.1
  * Core Web Vitals passing

### Performance Optimization
- [ ] Code splitting by route:
  * Lazy load page components
  * Separate vendor bundles
  * Dynamic imports for charts
  
- [ ] Image optimization:
  * Convert to WebP format
  * Responsive images (srcset)
  * Lazy loading (intersection observer)
  * Compress professional charts
  
- [ ] Bundle size optimization:
  * Tree shaking
  * Remove unused dependencies
  * Minification
  * Gzip compression
  * Target: < 500KB initial bundle
  
- [ ] Caching strategy:
  * Service worker (optional)
  * Browser caching headers
  * Data feed caching (localStorage)
  * Chart rendering memoization

### Accessibility Enhancement
- [ ] ARIA labels on all interactive elements:
  * Buttons
  * Links
  * Form inputs
  * Chart controls
  * Navigation menus
  
- [ ] Keyboard navigation:
  * Tab order logical
  * Skip links
  * Focus trapping in modals
  * Escape key handlers
  
- [ ] Screen reader optimization:
  * Semantic HTML
  * Alt text for images
  * Chart data tables (hidden, for screen readers)
  * Live regions for dynamic content
  
- [ ] Visual accessibility:
  * High contrast mode option
  * Visible focus indicators
  * Color-blind safe palettes
  * Scalable text (rem units)

---

## 📝 PHASE 7: CONTENT EXCELLENCE (Week 8)

### Arabic Content Enhancement
- [ ] Professional Arabic content review:
  * Hire native Arabic economist/editor
  * Review all page content
  * Ensure economic terminology consistency
  * Cultural adaptation (not just translation)
  
- [ ] Economic terminology glossary:
  * Create EN-AR glossary for key terms
  * Standardize usage across platform
  * Add tooltips for technical terms
  
- [ ] RTL layout perfection:
  * Test all pages in Arabic mode
  * Fix any layout issues
  * Ensure charts display correctly
  * Verify number formatting (Arabic numerals vs Western)
  
- [ ] Arabic-first content strategy:
  * Identify local stakeholder needs
  * Create Arabic-exclusive content (if needed)
  * Ensure parity with English content

### Institutional Insights
- [ ] Add policy implications to all dashboards:
  * "What this means for policy" section
  * Actionable recommendations
  * Stakeholder-specific insights
  
- [ ] Create humanitarian impact sections:
  * Link macro trends to household welfare
  * FX → Inflation → Food insecurity chain
  * Poverty impact analysis
  * Vulnerable population focus
  
- [ ] Implement correlation analysis panels:
  * FX vs Inflation scatter plots
  * GDP vs Poverty trend comparison
  * Fiscal space vs Service delivery
  * Aid flows vs Humanitarian outcomes
  
- [ ] Add forward projections:
  * Scenario modeling (optimistic, baseline, pessimistic)
  * 2025-2030 projections
  * Policy intervention simulations
  * Reunification scenarios

### Donor Engagement
- [ ] Create impact metrics dashboard:
  * Platform usage statistics
  * User demographics
  * Citation tracking
  * Policy influence examples
  
- [ ] Add success stories:
  * How platform data informed policy
  * Research outputs using platform
  * Capacity building achievements
  
- [ ] Implement testimonials:
  * Quotes from users (policymakers, researchers, donors)
  * Video testimonials (if available)
  * Case studies
  
- [ ] Create funding transparency page:
  * Current funding sources
  * Budget allocation
  * Sustainability plan
  * Donation options

---

## 🎨 ADVANCED VISUALIZATIONS (Ongoing)

### Chart Library Implementation
- [ ] Install Apache ECharts:
  * `pnpm add echarts echarts-for-react`
  * Create chart wrapper components
  * Implement bilingual support
  * Add responsive behavior
  
- [ ] Create chart component library:
  * `LineChart.tsx` - Basic line chart
  * `DualAxisChart.tsx` - Synchronized dual-axis (Aden vs Sana'a)
  * `WaterfallChart.tsx` - Fiscal revenue/expense
  * `SankeyChart.tsx` - Money flow diagram
  * `ScatterPlot.tsx` - Correlation analysis
  * `HeatmapChart.tsx` - Governance matrix
  * `NetworkGraph.tsx` - Stakeholder relationships
  * `SmallMultiples.tsx` - Regional comparisons
  * `TimelineChart.tsx` - Event-annotated timeline
  * `GaugeChart.tsx` - Reserves, indicators

### Interactive Features
- [ ] Event annotations on timelines:
  * Clickable event pins
  * Event details popup
  * Filter events by category
  * Link to event tracker page
  
- [ ] Zoom/pan functionality:
  * Chart zoom controls
  * Pan on drag
  * Reset zoom button
  * Touch gestures (mobile)
  
- [ ] Tooltips with context:
  * Rich tooltips (not just values)
  * Contextual information
  * Source attribution
  * Trend indicators
  
- [ ] Export functionality:
  * Export chart as PNG
  * Export data as CSV
  * Print-friendly view
  * Share link generation

### Scrollytelling Implementation
- [ ] Install scrollytelling library:
  * `pnpm add react-scrollama`
  * Create scrollytelling wrapper
  
- [ ] Implement for `/story` page:
  * Narrative text on left
  * Context charts on right (update as user scrolls)
  * Mobile: "peek" charts with expand
  * Smooth transitions between chart states
  * Progress indicator

---

## 🗂️ REMAINING DATA FEEDS (24 Total)

- [x] 1. `fx_rates.ts` - FX Aden/Sana'a daily
- [x] 2. `inflation.ts` - CPI North/South monthly
- [x] 3. `gdp.ts` - Real GDP annual
- [x] 4. `poverty.ts` - Poverty rate annual
- [x] 5. `events.ts` - Timeline events
- [ ] 6. `food_basket.ts` - Food basket city monthly
- [ ] 7. `fuel_prices.ts` - Fuel prices city monthly
- [ ] 8. `labour_market.ts` - Labour market proxy
- [ ] 9. `fiscal_revenue.ts` - Fiscal revenue monthly
- [ ] 10. `fiscal_expenditure.ts` - Fiscal expenditure monthly
- [ ] 11. `gross_reserves.ts` - Gross reserves Aden monthly
- [ ] 12. `external_support.ts` - External support inflows
- [ ] 13. `oil_exports.ts` - Oil exports monthly
- [ ] 14. `cby_auctions.ts` - CBY auctions
- [ ] 15. `banks_registry.ts` - Banks registry
- [ ] 16. `microfinance.ts` - Microfinance institutions
- [ ] 17. `remittances.ts` - Remittances inflow monthly
- [ ] 18. `sanctions_registry.ts` - Sanctions registry
- [ ] 19. `compliance_events.ts` - Compliance events
- [ ] 20. `policy_actions.ts` - Policy actions feed
- [ ] 21. `control_map.ts` - GeoJSON control map layers
- [ ] 22. `city_indicators.ts` - City indicators monthly
- [ ] 23. `population.ts` - Population & displacement
- [ ] 24. `humanitarian.ts` - Humanitarian indicators (people in need, aid deliveries)

---

## 📋 FINAL CHECKLIST (Before Delivery)

### Technical Excellence
- [ ] 80%+ test coverage (Vitest)
- [ ] All E2E tests passing (Playwright)
- [ ] LCP < 2.5s on mid-tier mobile (Lighthouse)
- [ ] WCAG 2.2 AA compliance (axe)
- [ ] Zero TypeScript errors
- [ ] Zero console errors/warnings
- [ ] Bundle size < 500KB
- [ ] All images optimized (WebP)

### Content Excellence
- [ ] 30+ pages with deep content
- [ ] 2,000+ data points integrated
- [ ] 50+ interactive visualizations
- [ ] 24 data feeds implemented
- [ ] Professional Arabic content reviewed
- [ ] All institutional insights added
- [ ] All humanitarian impact sections added
- [ ] All policy implications sections added

### User Experience
- [ ] Executive-clean aesthetic implemented
- [ ] Micro-interactions throughout
- [ ] Yemen-specific design motifs (flag border, split motif)
- [ ] Brand colors implemented
- [ ] Typography updated (Inter, Source Serif Pro, IBM Plex Sans Arabic)
- [ ] Full keyboard navigation working
- [ ] Screen reader optimized
- [ ] Mobile responsive (all pages)

### Functionality
- [ ] All links working (no 404s)
- [ ] All filters functional
- [ ] All calculators working
- [ ] All charts interactive
- [ ] All exports working (PNG, CSV, PDF)
- [ ] Language toggle working (EN ↔ AR)
- [ ] Search functional (if implemented)
- [ ] All forms working (contact, subscribe)

### Documentation
- [ ] README.md updated
- [ ] METHODOLOGY.md created
- [ ] API documentation (if applicable)
- [ ] Deployment guide
- [ ] User guide (optional)
- [ ] Developer guide (optional)

### Deployment
- [ ] Environment variables configured
- [ ] Build succeeds without errors
- [ ] Preview deployment tested
- [ ] Production deployment tested
- [ ] Analytics configured (Plausible/Umami)
- [ ] Error tracking configured (optional)
- [ ] Performance monitoring (optional)

---

## 🎯 SUCCESS CRITERIA

**The platform will be considered WORLD-CLASS when:**

1. ✅ **Exceeds World Bank/IMF standards** - More comprehensive, interactive, and accessible than comparable platforms
2. ✅ **Cited by policymakers** - Used in policy documents, briefings, and decisions
3. ✅ **Used by researchers** - Referenced in academic papers, reports, and analysis
4. ✅ **Attracts donor funding** - Demonstrates value and sustainability to funders
5. ✅ **Inspires similar platforms** - Becomes a model for conflict economy observatories

**Expert Panel Approval Required:**
- ✅ Dr. Ahmed Al-Yemeni (Content depth & accuracy)
- ✅ Sarah Chen (Financial architecture & insights)
- ✅ Marcus Rodriguez (UX & visualization excellence)
- ✅ Elena Volkov (Technical rigor & performance)
- ✅ Dr. Fatima Hassan (Humanitarian impact & policy relevance)
- ✅ Prof. David Kim (Data quality & methodology)
- ✅ Jennifer Williams (Think tank positioning & strategy)
- ✅ Dr. Omar Khalil (Conflict economy analysis)
- ✅ Layla Mansour (Arabic content & cultural authenticity)
- ✅ Robert Thompson (Donor engagement & sustainability)

---

**ESTIMATED TIMELINE:** 8 weeks intensive development  
**ESTIMATED EFFORT:** 320 hours (40 hours/week × 8 weeks)  
**CONFIDENCE LEVEL:** HIGH (foundations are solid, enhancements are well-defined)

**NEXT REVIEW:** After Phase 1 completion (1 week)
