# Yemen Economic Compass Platform

**منصة البوصلة الاقتصادية للحرب في اليمن | Yemen Economic Intelligence & Foresight Platform**

A comprehensive, bilingual (Arabic/English) economic intelligence platform providing data-driven analysis, forecasting, and policy recommendations for Yemen's parallel financial systems.

---

## 🌟 Platform Overview

The Yemen Economic Compass is a world-class think tank platform developed by **CauseWay Foundation** to provide stakeholders with:

- **Real-time economic intelligence** across 12 key indicators
- **Interactive data visualizations** with 15+ advanced charts
- **Scenario forecasting** for policy planning (2025-2030)
- **Stakeholder-specific dashboards** for donors, CBY, researchers
- **Comprehensive literature library** with 46+ publications
- **Intelligent analysis systems** for causation mapping and impact assessment
- **Full bilingual support** (Arabic/English) with cultural sensitivity

---

## 📊 Key Features

### 1. **Economic Intelligence Hub**
- **Master Compass Widget**: 12 real-time indicators (GDP, inflation, FX rates, poverty, oil, sanctions, banking stress)
- **ScrollytellingTimeline**: Interactive 10-year journey (2015-2025) with 24 major events
- **News Aggregator**: Curated economic news with advanced filtering
- **Key Statistics Dashboard**: 59 quantitative claims with source attribution

### 2. **Advanced Analytics**
- **Scenario Forecasting Engine**: Adjust 5 variables, visualize 3 scenarios (optimistic/baseline/pessimistic)
- **Policy Impact Meter**: ROI calculations for 4 major interventions (2.8x-4.2x returns)
- **Monetary Policy Simulator**: Test CBY interventions (interest rates, reserve requirements, FX controls)
- **Financial Flows Network**: Interactive Sankey diagram showing $20B+ flows

### 3. **Stakeholder Dashboards**
- **Executive Dashboard** (World Bank/IMF/Donors): KPIs, project monitoring, impact metrics, risk assessment
- **CBY-Aden Dashboard**: Exchange rate monitoring, monetary policy tracker, banking sector health, foreign reserves
- **Researcher Dashboard**: Data explorer, methodology documentation, citation tools

### 4. **Comprehensive Pages (44 total)**
- Economic Crisis Timeline
- Currency War Analysis
- Dual Central Bank Structure
- Commercial Banks Hub (10 banks)
- Microfinance Observatory (8 programs)
- Sanctions Tracker (UN/US/EU)
- Financial Literature Library (46+ publications)
- Stakeholder Intelligence Hub (5 actors)
- Saudi Arabia Deep Dive
- World Bank Journey
- CAC Bank Profile
- Tadhamon Islamic Bank Profile
- Financial Power Map
- And 31 more...

### 5. **Calculators & Tools**
- Inflation Calculator (2014-2025 data)
- Exchange Rate Calculator (Aden/Sana'a comparison)
- Scenario Simulator
- Policy Impact Calculator
- Monetary Policy Simulator
- Financial Flow Analyzer

### 6. **Data Infrastructure**
- **5 comprehensive data feeds**: FX rates, inflation, GDP, poverty, events (2010-2025)
- **9 database tables**: users, files, events, actors, indicators, causations, recommendations, banks, stakeholders
- **Zod validation** for data integrity
- **TypeScript type safety** across all feeds
- **30+ helper functions** for data manipulation

---

## 🏗️ Technical Architecture

### Frontend Stack
- **React 19** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **TailwindCSS 4** - Utility-first styling
- **Wouter** - Lightweight routing
- **Apache ECharts** - Advanced visualizations
- **Recharts** - Responsive charts
- **Framer Motion** - Smooth animations
- **Lucide Icons** - Beautiful icons

### Backend Stack
- **Express 4** - Web server
- **tRPC 11** - Type-safe API
- **MySQL (TiDB Cloud)** - Scalable database
- **Drizzle ORM** - Type-safe database queries
- **Manus OAuth** - Secure authentication
- **AWS S3** - File storage
- **JWT** - Session management

### Design System
- **Fonts**: IBM Plex Sans Arabic, Noto Naskh Arabic, Inter, Source Serif Pro, Playfair Display
- **Colors**: Burgundy (#8B1538), Gold (#D4AF37), Teal (#4080FF), Blue (#57A9FB), Green (#37D4CF), Amber (#FBE842)
- **Branding**: CauseWay Foundation (Established 2025)

---

## 🚀 Installation Guide

### Prerequisites
- Node.js 22.13.0 or higher
- pnpm 10.4.1 or higher
- MySQL database (or TiDB Cloud account)
- AWS S3 bucket (for file storage)

### Step 1: Clone Repository
```bash
git clone <repository-url>
cd yemen-financial-report
```

### Step 2: Install Dependencies
```bash
pnpm install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=mysql://user:password@host:port/database?ssl={"rejectUnauthorized":true}

# JWT Secret
JWT_SECRET=your-secret-key-here

# OAuth
OAUTH_SERVER_URL=https://api.manus.im
OWNER_OPEN_ID=your-owner-openid
OWNER_NAME=Your Name

# S3 Storage
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1
S3_BUCKET=your-bucket-name

# Frontend
VITE_APP_TITLE=Yemen Economic Compass
VITE_APP_LOGO=/yemen-compass-logo.png
VITE_FRONTEND_FORGE_API_KEY=your-api-key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
```

### Step 4: Initialize Database
```bash
# Push schema to database
pnpm db:push

# (Optional) Seed with initial data
pnpm db:seed
```

### Step 5: Start Development Server
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

---

## 📦 Database Schema

### Tables Overview

#### 1. **users**
- Authentication and user management
- Fields: id, openId, name, email, loginMethod, role, createdAt, updatedAt, lastSignedIn

#### 2. **files**
- Document storage metadata
- Fields: id, filename, fileKey, url, mimeType, fileSize, category, description, uploadedBy, createdAt, updatedAt

#### 3. **events**
- Timeline events with comprehensive metadata
- Fields: id, date, titleEn, titleAr, descriptionEn, descriptionAr, category, severity, actors, impacts, sources, photoUrl, createdAt, updatedAt

#### 4. **actors**
- Stakeholder profiles
- Fields: id, nameEn, nameAr, type, category, status, descriptionEn, descriptionAr, foundedDate, keyFigures, interests, capabilities, createdAt, updatedAt

#### 5. **indicators**
- Economic/financial indicators with time series
- Fields: id, nameEn, nameAr, category, unit, value, date, source, methodology, createdAt, updatedAt

#### 6. **causations**
- Cause-effect relationships between events
- Fields: id, causeEventId, effectEventId, strength, confidence, mechanismEn, mechanismAr, evidence, createdAt, updatedAt

#### 7. **recommendations**
- Policy recommendations
- Fields: id, titleEn, titleAr, descriptionEn, descriptionAr, targetActorId, priority, status, evidence, expectedImpact, methodology, createdAt, updatedAt

#### 8. **banks**
- Banking institution profiles
- Fields: id, nameEn, nameAr, type, status, assets, deposits, branches, establishedDate, challenges, metrics, createdAt, updatedAt

#### 9. **stakeholders**
- Stakeholder actions and impacts tracking
- Fields: id, actorId, nameEn, nameAr, category, role, interests, actions, impacts, createdAt, updatedAt

---

## 🔌 API Endpoints (tRPC)

### System Routes
- `system.health` - Health check
- `system.me` - Get current user
- `system.logout` - Logout user

### File Routes
- `files.upload` - Upload file to S3
- `files.list` - List all files
- `files.delete` - Delete file
- `files.getUrl` - Get presigned URL

### Data Routes (To Be Implemented)
- `events.list` - List all events
- `events.create` - Create new event
- `events.update` - Update event
- `events.delete` - Delete event
- `actors.list` - List all actors
- `indicators.list` - List all indicators
- `banks.list` - List all banks
- `recommendations.list` - List all recommendations

---

## 📚 Data Feeds

### 1. FX Rates Feed (`client/src/data/feeds/fx_rates.ts`)
- Annual and monthly exchange rates (2010-2025)
- Aden vs Sana'a rates
- Gap percentage calculations
- Source attribution

### 2. Inflation Feed (`client/src/data/feeds/inflation.ts`)
- Annual inflation rates (2010-2025)
- Aden vs Sana'a comparison
- Cumulative inflation calculations
- Food basket prices

### 3. GDP Feed (`client/src/data/feeds/gdp.ts`)
- Nominal and real GDP (2010-2025)
- Per capita calculations
- Growth rates
- World Bank data

### 4. Poverty Feed (`client/src/data/feeds/poverty.ts`)
- Poverty headcount (2010-2025)
- Food insecurity data
- IDP statistics
- Humanitarian needs

### 5. Events Feed (`client/src/data/feeds/events.ts`)
- Major economic/political events (2014-2025)
- Event categorization
- Actor involvement
- Impact assessment

---

## 🎨 Component Library

### Core Components
- `Header` - Main navigation with bilingual support
- `Footer` - Footer with CauseWay branding
- `MasterCompass` - 12-indicator dashboard widget
- `ScrollytellingTimeline` - Interactive timeline
- `NewsTicker` - Auto-scrolling news feed
- `EChartsWrapper` - ECharts integration wrapper
- `CurrencyBadge` - Currency label helper
- `DashboardLayout` - Consistent dashboard layout
- `FileUpload` - Drag-and-drop file uploader

### Advanced Components
- `PolicyImpactMeter` - ROI calculator
- `ScenarioSimulator` - Policy scenario tester
- `MonetaryPolicySimulator` - CBY intervention simulator
- `EconomicIndicators` - Sidebar indicators panel
- `Map` - Google Maps integration

---

## 🌐 Deployment Guide

### Option 1: Manus Platform (Recommended)
1. Save checkpoint in development environment
2. Click "Publish" button in Management UI
3. Platform automatically deployed to `https://your-project.manus.space`

### Option 2: Manual Deployment

#### Build for Production
```bash
pnpm build
```

#### Deploy Backend
```bash
# Set environment variables on your server
# Start server
node server/index.js
```

#### Deploy Frontend
```bash
# Upload dist/ folder to CDN or static hosting
# Configure reverse proxy (nginx/Apache) to route API calls to backend
```

#### Environment Variables for Production
- Set `NODE_ENV=production`
- Configure database connection string
- Set JWT secret
- Configure S3 credentials
- Set OAuth URLs

---

## 👥 User Roles

### Public User
- View all public pages
- Access calculators and visualizations
- Download reports
- No login required

### Authenticated User
- Upload files
- Save preferences
- Bookmark content
- Access personalized dashboards

### Admin User
- Manage content
- Upload publications
- Edit database records
- Access admin dashboard

---

## 📖 Developer Guide

### Project Structure
```
yemen-financial-report/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── contexts/      # React contexts
│   │   ├── data/          # Data feeds
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilities
│   │   ├── pages/         # Page components
│   │   └── App.tsx        # Main app component
├── server/                # Backend Express application
│   ├── _core/            # Core server functionality
│   ├── db.ts             # Database connection
│   ├── routers.ts        # tRPC routers
│   └── index.ts          # Server entry point
├── drizzle/              # Database schema
│   └── schema.ts         # Table definitions
├── shared/               # Shared types and constants
└── package.json          # Dependencies
```

### Adding a New Page
1. Create component in `client/src/pages/YourPage.tsx`
2. Add route in `client/src/App.tsx`
3. Add navigation link in `client/src/components/Header.tsx`
4. Add bilingual content in component

### Adding a New Database Table
1. Define schema in `drizzle/schema.ts`
2. Run `pnpm db:push` to update database
3. Create tRPC router in `server/routers.ts`
4. Add frontend queries using tRPC hooks

### Adding a New Data Feed
1. Create feed file in `client/src/data/feeds/`
2. Define Zod schema for validation
3. Export typed data
4. Import in components

---

## 🔒 Security

- **Authentication**: Manus OAuth with JWT sessions
- **Authorization**: Role-based access control (user/admin)
- **Data Validation**: Zod schemas on all inputs
- **SQL Injection**: Prevented by Drizzle ORM
- **XSS Protection**: React automatic escaping
- **CSRF Protection**: SameSite cookies
- **File Upload**: Type and size validation
- **S3 Access**: Presigned URLs with expiration

---

## 🧪 Testing

### Run Tests
```bash
pnpm test
```

### Type Checking
```bash
pnpm tsc --noEmit
```

### Linting
```bash
pnpm lint
```

---

## 📊 Data Sources

1. **World Bank WDI API** - GDP, poverty, economic indicators
2. **OCHA FTS API** - Humanitarian funding data
3. **WFP VAM API** - Food basket prices
4. **IMF Data Services** - Fiscal indicators
5. **JODI Oil Data** - Oil production statistics
6. **UN Sanctions Lists** - Sanctions tracking
7. **US Treasury OFAC** - US sanctions
8. **EU Sanctions** - EU sanctions
9. **CBY-Aden Reports** - Official central bank data
10. **Sana'a Center Studies** - Yemen-specific research
11. **FAO Reports** - Food security data
12. **UNHCR Reports** - Displacement data
13. **ACLED Data** - Conflict events
14. **DevChampions Studies** - Development research

---

## 📝 License

Copyright © 2025 CauseWay Foundation. All rights reserved.

---

## 👨‍💻 Credits

**Developed by:** CauseWay Foundation  
**Lead Researcher:** Maher F.S. Farea  
**Platform:** Manus AI Development Environment  
**Established:** 2025  

---

## 📞 Contact

For questions, feedback, or collaboration:
- **Website:** https://kayan.manus.space
- **Platform:** Yemen Economic Compass
- **Organization:** CauseWay Foundation

---

## 🗺️ Roadmap

### Phase 1: Foundation ✅
- Database architecture
- Core pages
- Bilingual system
- Basic visualizations

### Phase 2: Intelligence ✅
- Scenario forecasting
- Policy recommendations
- Stakeholder dashboards
- Advanced analytics

### Phase 3: Expansion (In Progress)
- 100+ stakeholder pages
- API integrations (World Bank, IMF, OCHA)
- Machine learning recommendations
- Real-time data feeds

### Phase 4: Scale (Planned)
- Mobile application
- API for external researchers
- Automated report generation
- Multi-country expansion

---

**Built with ❤️ for Yemen's economic recovery and sustainable peace**
