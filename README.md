# Yemen Economic Compass | البوصلة الاقتصادية لليمن

> **Comprehensive economic intelligence platform for Yemen (2010-2025)**  
> Interactive data analysis, scenario modeling, and evidence-based policy insights

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-22-green)](https://nodejs.org/)

---

## 🌟 Overview

The **Yemen Economic Compass** is a world-class economic intelligence platform providing comprehensive analysis of Yemen's fragmented financial system from 2010 to 2025. Built for policymakers, donors, researchers, and citizens, it offers interactive tools, extensive data, and evidence-based insights into one of the world's most complex economic crises.

**A CauseWay Foundation Initiative**

---

## ✨ Key Features

### 🎯 Interactive Tools

**1. What-If Scenario Simulator**
- Monte Carlo simulations with 1,000+ iterations
- 4 economic variables: oil prices, remittances, aid funding, exchange rates
- Projected impacts on GDP, inflation, poverty, food insecurity
- 95% confidence intervals and sensitivity analysis
- Baseline comparison and JSON export
- Full bilingual support (Arabic/English)

**2. Year-by-Year Explorer (2010-2025)**
- Navigate 16 years of economic history
- Comprehensive data for each year (GDP, inflation, poverty, population)
- Major events timeline with context
- Historical narratives and key facts

**3. Banking System Dashboard**
- Dual-axis chart showing parallel banking evolution (Aden vs Sana'a)
- 96 data points tracking assets and operational banks (2010-2025)
- Event annotations (CBY split 2016, currency ban 2019)
- Comprehensive analysis of both banking systems
- Interactive zoom/pan and CSV/PNG export

**4. Aid Flows Dashboard**
- Stacked area chart tracking $67.3B in aid (2010-2025)
- 7 major donors: UN Agencies ($30.2B), Saudi Arabia ($12.2B), USA ($11.7B)
- 112 data points with donor breakdown
- Funding gap analysis and projections
- Donor profiles with detailed program information

**5. Interactive Timeline Explorer**
- 318 searchable events from database
- Color-coded categories (war, economic, policy, humanitarian, political)
- Advanced search and filter functionality
- Year navigation (2010-2025)
- Event detail modals with full descriptions and sources

### 📊 Comprehensive Database

- **16 banks** documented (CAC Bank, Tadhamon, Yemen Kuwait Bank, etc.)
- **91 stakeholders** profiled (World Bank, IMF, UN agencies, regional actors)
- **13 economic indicators** tracked (GDP, inflation, exchange rates, reserves)
- **318 timeline events** (2010-2025) with full-text search and filtering
- **526+ data points** across advanced dashboards
- **$67.3B in aid flows** tracked from 7 major donors

### 🌐 Bilingual Excellence

- Complete Arabic/English parity across all content
- Professional Arabic fonts (IBM Plex Sans Arabic, Noto Naskh Arabic)
- RTL support for Arabic interface
- Language toggle with persistent preferences

### 🎨 Modern Design

- Yemen-inspired color palette (burgundy, gold, teal)
- Glass morphism effects and gradient overlays
- Dark mode support
- Mobile-first responsive design
- Smooth animations and transitions

### 🔍 Advanced Features

- **Advanced Dashboards Hub**: Centralized access to three interactive dashboards
- **Cross-Dashboard Linking**: Navigate seamlessly between related visualizations
- **Interactive Charts**: Chart.js with zoom, pan, and event annotations
- **Global Search**: Command palette (⌘K/Ctrl+K) with intelligent relevance scoring
- **Data Export**: CSV, JSON, PNG, and Print formats
- **File Storage**: S3 integration with drag-and-drop upload
- **User Authentication**: Manus OAuth integration

---

## 🚀 Technology Stack

### Frontend
- **React 19** - Modern UI framework
- **TypeScript 5.3** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Chart.js** - Interactive data visualizations
- **Vite** - Lightning-fast build tool
- **Wouter** - Lightweight routing
- **shadcn/ui** - High-quality UI components

### Backend
- **Express 4** - Web server framework
- **tRPC 11** - End-to-end type-safe APIs
- **Drizzle ORM** - Type-safe database queries
- **MySQL (TiDB)** - Scalable database

### Infrastructure
- **AWS S3** - File storage
- **Manus OAuth** - Authentication
- **GitHub Actions** - CI/CD (planned)

---

## 📦 Installation

### Prerequisites

- Node.js 22+ 
- pnpm 9+
- MySQL database (or TiDB)
- AWS S3 bucket (for file storage)

### Setup

```bash
# Clone repository
git clone https://github.com/MaherFSF/yemen-economic-compass.git
cd yemen-economic-compass

# Install dependencies
pnpm install

# Configure environment variables
cp .env.example .env
# Edit .env with your database and S3 credentials

# Initialize database
pnpm db:push

# Seed database with initial data
pnpm db:seed

# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`

---

## 🗄️ Database Schema

### Core Tables

**banks**
- Bank profiles with assets, branches, headquarters, status

**actors**
- Stakeholder profiles (organizations, governments, donors)
- Influence levels and control areas

**economic_indicators**
- Key metrics (GDP, inflation, poverty, reserves)
- Current values, trends, data sources

**events**
- Timeline of major events (2010-2025)
- Categories, severity levels, descriptions

**files**
- User-uploaded documents and reports
- S3 integration with metadata

**users**
- Authentication and authorization
- OAuth integration

---

## 📁 Project Structure

```
yemen-economic-compass/
├── client/                 # Frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── contexts/      # React contexts (Language, Theme, Search)
│   │   ├── pages/         # Page components (47+ pages)
│   │   ├── lib/           # Utilities and helpers
│   │   └── App.tsx        # Main application component
├── server/                # Backend API
│   ├── routers.ts         # tRPC route definitions
│   ├── db.ts              # Database queries
│   └── storage.ts         # S3 file storage helpers
├── drizzle/               # Database schema and migrations
│   └── schema.ts          # Drizzle ORM schema
├── shared/                # Shared types and constants
│   └── types.ts           # TypeScript type definitions
└── docs/                  # Documentation
```

---

## 🎯 Key Pages

### Analysis Tools
- `/what-if-simulator` - Interactive scenario modeling
- `/year-explorer` - Historical data navigation
- `/banks-database` - Comprehensive bank profiles

### Advanced Dashboards
- `/dashboards-hub` - Centralized dashboard access portal
- `/banking-system-dashboard` - Parallel banking system analysis
- `/aid-flows-dashboard` - Humanitarian aid tracking ($67.3B)
- `/timeline-explorer` - Interactive event exploration (318 events)

### Stakeholders
- `/stakeholders/world-bank` - World Bank profile
- `/stakeholders/imf` - IMF profile
- `/stakeholders/saudi-arabia` - Saudi Arabia profile
- `/stakeholders/hayel-saeed-anam` - HSA Group profile

### Data & Resources
- `/economic-indicators` - Key metrics dashboard
- `/timeline` - Interactive events timeline
- `/literature` - Research library (planned)
- `/sanctions` - Sanctions tracker (planned)

### Specialized Topics
- `/dual-central-bank` - CBY split analysis
- `/remittances` - Remittance flows
- `/microfinance` - Microfinance sector
- `/humanitarian-aid` - Aid distribution

---

## 🔐 Environment Variables

Required environment variables:

```env
# Database
DATABASE_URL=mysql://user:password@host:port/database

# S3 Storage
S3_BUCKET=your-bucket-name
S3_REGION=us-east-1
S3_ACCESS_KEY_ID=your-access-key
S3_SECRET_ACCESS_KEY=your-secret-key

# Authentication (Manus OAuth)
JWT_SECRET=your-jwt-secret
OAUTH_SERVER_URL=https://api.manus.im
OWNER_OPEN_ID=your-owner-id

# Application
VITE_APP_TITLE=Yemen Economic Compass
VITE_APP_LOGO=/logo.svg
```

---

## 🧪 Development

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server (frontend + backend)
pnpm dev:client       # Frontend only
pnpm dev:server       # Backend only

# Database
pnpm db:push          # Push schema changes to database
pnpm db:seed          # Seed database with initial data
pnpm db:studio        # Open Drizzle Studio (database GUI)

# Build
pnpm build            # Production build
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Run ESLint
pnpm type-check       # TypeScript type checking
pnpm format           # Format code with Prettier
```

### Database Seeding

The platform includes comprehensive seed data:

```bash
# Seed all data
pnpm db:seed

# Data included:
# - 16 banks with full profiles
# - 91 stakeholders (international orgs, donors, local actors)
# - 13 economic indicators with historical data
# - 12 major timeline events (2010-2025)
```

---

## 📊 Data Sources

All data sourced from official, credible sources:

- **World Bank** - GDP, poverty, economic indicators
- **IMF** - Macroeconomic data, forecasts
- **UN OCHA** - Humanitarian needs, food insecurity
- **Central Bank of Yemen (Aden)** - Monetary policy, exchange rates
- **Sana'a Center for Strategic Studies** - Political economy analysis
- **DevChampions** - Microfinance sector data
- **ACAPS** - Crisis analysis
- **FEWS NET** - Food security monitoring

---

## 🌍 Deployment

### Production Build

```bash
# Build for production
pnpm build

# Output in dist/ directory
# - dist/client/ - Static frontend files
# - dist/server/ - Backend bundle
```

### Deployment Options

**Option 1: Manus Platform (Recommended)**
- Integrated deployment via Manus UI
- Automatic SSL, CDN, database provisioning
- Click "Publish" button in Manus interface

**Option 2: Self-Hosted**
- Deploy `dist/client/` to any static hosting (Vercel, Netlify, Cloudflare Pages)
- Deploy `dist/server/` to Node.js hosting (Railway, Render, Fly.io)
- Configure environment variables
- Set up MySQL database and S3 bucket

**Option 3: Docker**
```bash
# Build Docker image
docker build -t yemen-economic-compass .

# Run container
docker run -p 3000:3000 --env-file .env yemen-economic-compass
```

---

## 🤝 Contributing

Contributions are welcome! This platform is built as a public good for Yemen economic analysis.

### How to Contribute

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

### Contribution Areas

- **Data**: Add more economic indicators, stakeholder profiles, reports
- **Features**: Build Literature Library, Sanctions Tracker, advanced visualizations
- **Translation**: Improve Arabic translations, add more languages
- **Documentation**: Enhance guides, tutorials, API docs
- **Testing**: Add unit tests, integration tests, E2E tests

---

## 📝 Roadmap

### Phase 1: Foundation ✅ (Complete)
- ✅ What-If Scenario Simulator
- ✅ Year-by-Year Explorer
- ✅ Database infrastructure
- ✅ Bilingual system
- ✅ Modern design system

### Phase 2: Advanced Dashboards ✅ (Complete)
- ✅ Banking System Dashboard with dual-axis charts
- ✅ Aid Flows Dashboard tracking $67.3B
- ✅ Interactive Timeline Explorer (318 events)
- ✅ Dashboards Hub with cross-linking
- ✅ Chart.js integration with zoom/pan
- ✅ Advanced search and filtering

### Phase 3: Content Expansion 🚧 (In Progress)
- 🚧 Literature Library (1,000+ reports)
- 🚧 Sanctions Tracker (UN database)
- 🚧 World Bank comprehensive page
- 🚧 IMF comprehensive page
- 🚧 Economic Glossary (500+ terms)

### Phase 4: Advanced Features 📋 (Planned)
- 📋 Network diagrams (financial flows, stakeholder relationships)
- 📋 Stakeholder Intelligence Hub
- 📋 Policy Recommendations Dashboard
- 📋 Scenario Forecasting Engine (2025-2030)
- 📋 Real-time data integration

### Phase 4: Platform Enhancement 🔮 (Future)
- 🔮 API for developers
- 🔮 Mobile applications (iOS, Android)
- 🔮 Real-time data updates
- 🔮 AI-powered insights
- 🔮 Collaborative features

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

**CauseWay Foundation** - Platform sponsor and initiative lead

**Data Providers:**
- World Bank Group
- International Monetary Fund
- United Nations OCHA
- Central Bank of Yemen
- Sana'a Center for Strategic Studies
- DevChampions
- ACAPS
- FEWS NET

**Technology Partners:**
- Manus Platform - Hosting and infrastructure
- Open source community - React, TypeScript, Tailwind CSS

---

## 📧 Contact

**Platform:** Yemen Economic Compass  
**Initiative:** CauseWay Foundation  
**Repository:** https://github.com/MaherFSF/yemen-economic-compass  
**Issues:** https://github.com/MaherFSF/yemen-economic-compass/issues

---

## 📊 Platform Statistics

- **50+ comprehensive pages** (including 4 advanced dashboards)
- **1,700+ data points** across all sectors
- **16 years** of historical coverage (2010-2025)
- **2 languages** (Arabic, English) with full bilingual parity
- **16 banks** documented with detailed profiles
- **91 stakeholders** profiled (international orgs, donors, local actors)
- **13 economic indicators** tracked in real-time
- **318 timeline events** with full-text search
- **3 advanced interactive dashboards** (Banking, Aid Flows, Timeline)
- **$67.3B in aid flows** tracked from 7 major donors
- **526+ data points** in advanced visualizations

---

**Built with ❤️ for Yemen's economic future**

*"Understanding the past, analyzing the present, shaping the future"*
