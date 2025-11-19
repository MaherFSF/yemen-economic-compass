# Content Extraction from 90-Page PDF

## Key Insights from Document

### Platform Vision
- **Tagline**: "A bilingual platform that watches Yemen's economy, learns from 10+ years of real data, and turns it into clear, actionable insight"
- **Core Function**: Tracks actors, indicators, and events; connects dots to explain what changed, why, and what to do next

### Target Audiences (4 Groups)
1. **Policymakers**: CBY, MoF, PLC ministries, commercial banks/MFIs
2. **Donors/IFIs**: World Bank, IMF, EU, FCDO, USAID, IsDB, regional funds
3. **UN agencies/NGOs**: UN agencies/NGOs and serious media
4. **Researchers**: Researchers and graduate students

### Core Deliverables (6 Features)
1. **Live dashboards** - with trusted numbers and sources
2. **Stakeholder microsites** - 100+ explaining each actor's role, risks, and options
3. **10-year timeline** - key economic/financial events with citations
4. **Scenario tools** - "What if oil exports resume?" "What if FX auctions change?"
5. **Recommendations** - evidence-based actions tailored to each stakeholder
6. **Closed-corpus AI analyst** - drafts briefs and memos in EN/AR using only verified data and uploaded reports (no open web answers)

### Intelligence Architecture
**Data Sources**:
- Original, credible sources: World Bank, IMF, OCHA/FTS, WFP/HDX, JODI, UN/EU/OFAC sanctions
- PDFs uploaded by users: CBY reports, Sana'a Centre, ODI, etc.

**Confidence Scoring**:
- Assigns confidence score based on source quality, freshness, cross-checks
- Lower-confidence claims triangulated before use in decision outputs

**Memory Graph**:
- Keeps memory graph of actors, events, indicators, policies across 10+ years
- Retrieves relevant pieces when user asks questions or runs scenarios
- Explains logic and cites sources
- Learns over time which signals are most predictive, adjusts weights transparently

---

## Action Items for Implementation

### CRITICAL MISSING ELEMENTS TO BUILD:
1. ✅ Already have: Timeline, dashboards, calculators
2. ❌ MISSING: 100+ stakeholder microsites (only have 2 banks)
3. ❌ MISSING: Scenario tools with "What if" functionality
4. ❌ MISSING: AI analyst interface
5. ❌ PARTIALLY DONE: Recommendations (have page but needs stakeholder-specific tailoring)

### Design Requirements from PDF:
- **Color scheme**: Teal/turquoise (#4FD1C5) + Blue (#3B82F6) for English version
- **Clean, modern layout**: Light backgrounds, clear typography
- **Numbered sections**: Visual hierarchy with numbered cards
- **Professional think-tank aesthetic**: World Bank/IMF level quality

---

## Next Steps:
1. Continue reading PDF to extract stakeholder list
2. Build 100+ stakeholder microsites
3. Redesign landing page with new color scheme
4. Create separate English design system
5. Add scenario "What if" tools
6. Implement AI analyst interface
