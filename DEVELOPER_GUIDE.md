# Yemen Economic Compass - Developer Guide

Complete guide for developers working on the Yemen Economic Compass platform.

---

## 🎯 Quick Start

```bash
# Clone repository
git clone <repository-url>
cd yemen-financial-report

# Install dependencies
pnpm install

# Set up environment
cp .env.example .env
# Edit .env with your credentials

# Push database schema
pnpm db:push

# Start development server
pnpm dev
```

Access the application at `http://localhost:3000`

---

## 📁 Project Structure

```
yemen-financial-report/
├── client/                      # Frontend React application
│   ├── public/                  # Static assets
│   │   ├── yemen-compass-logo.png
│   │   ├── logo-arabic.png
│   │   ├── logo-bilingual.png
│   │   └── causeway-logo.png
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   │   ├── ui/             # shadcn/ui components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MasterCompass.tsx
│   │   │   ├── ScrollytellingTimeline.tsx
│   │   │   └── ...
│   │   ├── contexts/           # React contexts
│   │   │   ├── LanguageContext.tsx
│   │   │   └── ThemeContext.tsx
│   │   ├── data/               # Data feeds
│   │   │   ├── feeds/
│   │   │   │   ├── fx_rates.ts
│   │   │   │   ├── inflation.ts
│   │   │   │   ├── gdp.ts
│   │   │   │   ├── poverty.ts
│   │   │   │   └── events.ts
│   │   │   └── schemas/
│   │   │       └── common.ts
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Utilities
│   │   │   ├── utils.ts
│   │   │   └── trpc.ts
│   │   ├── pages/              # Page components (44 total)
│   │   │   ├── LandingPage.tsx
│   │   │   ├── About.tsx
│   │   │   ├── CompassDashboard.tsx
│   │   │   ├── ExecutiveDashboard.tsx
│   │   │   ├── CBYDashboard.tsx
│   │   │   └── ...
│   │   ├── App.tsx             # Main app component with routes
│   │   ├── main.tsx            # React entry point
│   │   └── index.css           # Global styles
├── server/                      # Backend Express application
│   ├── _core/                  # Core server functionality
│   │   ├── index.ts           # Server entry point
│   │   ├── trpc.ts            # tRPC configuration
│   │   ├── oauth.ts           # OAuth authentication
│   │   ├── context.ts         # Request context
│   │   ├── env.ts             # Environment variables
│   │   └── ...
│   ├── db.ts                   # Database connection
│   ├── routers.ts              # tRPC routers
│   └── index.ts                # Server exports
├── drizzle/                    # Database schema
│   └── schema.ts               # Table definitions (9 tables)
├── shared/                     # Shared types and constants
│   ├── const.ts                # Constants
│   └── _core/                  # Core shared types
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind configuration
├── vite.config.ts              # Vite configuration
├── drizzle.config.ts           # Drizzle ORM configuration
└── README.md                   # Main documentation
```

---

## 🛠️ Development Workflow

### 1. Create a New Feature

#### Step 1: Create Feature Branch
```bash
git checkout -b feature/your-feature-name
```

#### Step 2: Develop
- Add components in `client/src/components/`
- Add pages in `client/src/pages/`
- Add routes in `client/src/App.tsx`
- Add API endpoints in `server/routers.ts`

#### Step 3: Test
```bash
pnpm dev
# Test in browser
```

#### Step 4: Commit
```bash
git add .
git commit -m "feat: add your feature description"
```

#### Step 5: Save Checkpoint (Manus Platform)
- Click "Save Checkpoint" in UI
- Add descriptive message

---

### 2. Add a New Page

#### Example: Create "Donors Dashboard" Page

**Step 1: Create Component**
```tsx
// client/src/pages/DonorsDashboard.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DonorsDashboard() {
  const { language } = useLanguage();
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">
        {language === 'ar' ? 'لوحة المانحين' : 'Donors Dashboard'}
      </h1>
      
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'ar' ? 'نظرة عامة' : 'Overview'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Your content here */}
        </CardContent>
      </Card>
    </div>
  );
}
```

**Step 2: Add Route**
```tsx
// client/src/App.tsx
import DonorsDashboard from "./pages/DonorsDashboard";

function Router() {
  return (
    <Switch>
      {/* Existing routes */}
      <Route path="/donors-dashboard" component={DonorsDashboard} />
    </Switch>
  );
}
```

**Step 3: Add Navigation Link**
```tsx
// client/src/components/Header.tsx
<Link href="/donors-dashboard">
  {language === 'ar' ? 'لوحة المانحين' : 'Donors Dashboard'}
</Link>
```

---

### 3. Add Database Table

#### Example: Create "Donors" Table

**Step 1: Define Schema**
```typescript
// drizzle/schema.ts
export const donors = mysqlTable("donors", {
  id: int("id").autoincrement().primaryKey(),
  nameEn: varchar("nameEn", { length: 255 }).notNull(),
  nameAr: varchar("nameAr", { length: 255 }).notNull(),
  type: mysqlEnum("type", ["bilateral", "multilateral", "private"]).notNull(),
  totalContributions: int("totalContributions"),
  activeProjects: int("activeProjects"),
  website: varchar("website", { length: 500 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Donor = typeof donors.$inferSelect;
export type InsertDonor = typeof donors.$inferInsert;
```

**Step 2: Push to Database**
```bash
pnpm db:push
```

**Step 3: Create tRPC Router**
```typescript
// server/routers.ts
import * as db from "./db";
import { donors } from "../drizzle/schema";
import { z } from "zod";

export const donorsRouter = router({
  list: publicProcedure
    .query(async () => {
      return await db.query.donors.findMany();
    }),
    
  create: protectedProcedure
    .input(z.object({
      nameEn: z.string(),
      nameAr: z.string(),
      type: z.enum(["bilateral", "multilateral", "private"]),
      totalContributions: z.number().optional(),
      activeProjects: z.number().optional(),
      website: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      const [donor] = await db.insert(donors).values(input);
      return donor;
    }),
});

// Add to main router
export const appRouter = router({
  // ... existing routers
  donors: donorsRouter,
});
```

**Step 4: Use in Frontend**
```tsx
// client/src/pages/DonorsDashboard.tsx
import { trpc } from "@/lib/trpc";

export default function DonorsDashboard() {
  const { data: donors, isLoading } = trpc.donors.list.useQuery();
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      {donors?.map(donor => (
        <Card key={donor.id}>
          <CardTitle>{donor.nameEn}</CardTitle>
          <p>Total: ${donor.totalContributions}</p>
        </Card>
      ))}
    </div>
  );
}
```

---

### 4. Add Data Feed

#### Example: Create "Aid Flows" Feed

**Step 1: Create Feed File**
```typescript
// client/src/data/feeds/aid_flows.ts
import { z } from "zod";

const AidFlowSchema = z.object({
  year: z.number(),
  donor: z.string(),
  sector: z.string(),
  amount: z.number(),
  currency: z.string(),
  source: z.string(),
});

export type AidFlow = z.infer<typeof AidFlowSchema>;

export const aidFlows: AidFlow[] = [
  {
    year: 2024,
    donor: "World Bank",
    sector: "Financial Infrastructure",
    amount: 50000000,
    currency: "USD",
    source: "World Bank Annual Report 2024",
  },
  // ... more data
];

// Helper functions
export function getFlowsByDonor(donor: string): AidFlow[] {
  return aidFlows.filter(f => f.donor === donor);
}

export function getFlowsByYear(year: number): AidFlow[] {
  return aidFlows.filter(f => f.year === year);
}

export function getTotalByDonor(donor: string): number {
  return getFlowsByDonor(donor).reduce((sum, f) => sum + f.amount, 0);
}
```

**Step 2: Use in Components**
```tsx
import { aidFlows, getTotalByDonor } from "@/data/feeds/aid_flows";

export default function DonorProfile({ donorName }: { donorName: string }) {
  const total = getTotalByDonor(donorName);
  const flows = getFlowsByDonor(donorName);
  
  return (
    <div>
      <h2>Total Contributions: ${total.toLocaleString()}</h2>
      {flows.map((flow, i) => (
        <div key={i}>
          {flow.year}: ${flow.amount} - {flow.sector}
        </div>
      ))}
    </div>
  );
}
```

---

### 5. Add Visualization

#### Example: Create Donors Pie Chart

```tsx
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { aidFlows } from "@/data/feeds/aid_flows";

export default function DonorsPieChart() {
  // Aggregate data by donor
  const donorTotals = aidFlows.reduce((acc, flow) => {
    acc[flow.donor] = (acc[flow.donor] || 0) + flow.amount;
    return acc;
  }, {} as Record<string, number>);
  
  const data = Object.entries(donorTotals).map(([name, value]) => ({
    name,
    value,
  }));
  
  const COLORS = ['#8B1538', '#D4AF37', '#4080FF', '#57A9FB', '#37D4CF'];
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
```

---

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices

```tsx
// ✅ Good: Use semantic spacing
<div className="container mx-auto py-8 px-4">

// ❌ Bad: Hardcoded values
<div style={{ padding: "32px", maxWidth: "1200px" }}>

// ✅ Good: Use color tokens
<div className="bg-primary text-primary-foreground">

// ❌ Bad: Hardcoded colors
<div style={{ backgroundColor: "#8B1538", color: "#FFFFFF" }}>

// ✅ Good: Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// ❌ Bad: Fixed layout
<div style={{ display: "flex", width: "1200px" }}>
```

### Component Patterns

```tsx
// ✅ Good: Reusable component with props
interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: "up" | "down";
}

export function StatCard({ title, value, icon, trend }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={cn(
            "text-xs",
            trend === "up" ? "text-green-600" : "text-red-600"
          )}>
            {trend === "up" ? "↑" : "↓"}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

// Usage
<StatCard 
  title="Total Aid" 
  value="$2.4B" 
  icon={<DollarSign />} 
  trend="up" 
/>
```

---

## 🌐 Bilingual Development

### Language Context

```tsx
import { useLanguage } from "@/contexts/LanguageContext";

export default function MyComponent() {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{language === 'ar' ? 'عنوان' : 'Title'}</h1>
      <button onClick={toggleLanguage}>
        {language === 'ar' ? 'English' : 'العربية'}
      </button>
    </div>
  );
}
```

### Content Object Pattern

```tsx
const content = {
  ar: {
    title: "لوحة التحكم",
    description: "نظرة عامة على المؤشرات الاقتصادية",
    cta: "عرض التفاصيل",
  },
  en: {
    title: "Dashboard",
    description: "Overview of economic indicators",
    cta: "View Details",
  },
};

export default function MyComponent() {
  const { language } = useLanguage();
  const t = content[language];
  
  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.description}</p>
      <button>{t.cta}</button>
    </div>
  );
}
```

---

## 🔌 API Development

### tRPC Procedures

```typescript
// Public procedure (no auth required)
export const publicRouter = router({
  getStats: publicProcedure
    .query(async () => {
      return {
        totalEvents: await db.query.events.findMany().length,
        totalActors: await db.query.actors.findMany().length,
      };
    }),
});

// Protected procedure (auth required)
export const protectedRouter = router({
  uploadFile: protectedProcedure
    .input(z.object({
      filename: z.string(),
      content: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      // ctx.user is guaranteed to exist
      const file = await uploadToS3(input.filename, input.content);
      return file;
    }),
});

// Admin procedure (admin role required)
export const adminRouter = router({
  deleteUser: adminProcedure
    .input(z.object({ userId: z.number() }))
    .mutation(async ({ input }) => {
      await db.delete(users).where(eq(users.id, input.userId));
      return { success: true };
    }),
});
```

### Frontend Usage

```tsx
import { trpc } from "@/lib/trpc";

export default function MyComponent() {
  // Query
  const { data, isLoading, error } = trpc.public.getStats.useQuery();
  
  // Mutation
  const uploadMutation = trpc.protected.uploadFile.useMutation({
    onSuccess: () => {
      console.log("File uploaded!");
    },
  });
  
  const handleUpload = () => {
    uploadMutation.mutate({
      filename: "report.pdf",
      content: "...",
    });
  };
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <p>Total Events: {data?.totalEvents}</p>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
```

---

## 🧪 Testing

### Component Testing

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  it("renders title correctly", () => {
    render(<MyComponent />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
  
  it("handles click events", async () => {
    const { user } = render(<MyComponent />);
    const button = screen.getByRole("button");
    await user.click(button);
    expect(screen.getByText("Clicked!")).toBeInTheDocument();
  });
});
```

### API Testing

```typescript
import { describe, it, expect } from "vitest";
import { appRouter } from "./routers";

describe("API Routes", () => {
  it("returns stats", async () => {
    const caller = appRouter.createCaller({});
    const stats = await caller.public.getStats();
    expect(stats.totalEvents).toBeGreaterThan(0);
  });
});
```

---

## 🐛 Debugging

### Browser DevTools
```tsx
// Add debug logs
console.log("Data:", data);
console.table(data);

// React DevTools
// Install React DevTools extension
// Inspect component props and state
```

### Server Logs
```typescript
// Add logging
console.log("[API] Request received:", input);
console.error("[API] Error:", error);

// View logs
pm2 logs yemen-compass
```

### Database Queries
```typescript
// Log SQL queries
import { drizzle } from "drizzle-orm/mysql2";

const db = drizzle(connection, {
  logger: true, // Enable query logging
});
```

---

## 📦 Build & Deploy

### Development Build
```bash
pnpm dev
```

### Production Build
```bash
pnpm build
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

## 🔧 Troubleshooting

### Common Issues

**Issue: TypeScript errors**
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Issue: Database connection failed**
```bash
# Check DATABASE_URL
echo $DATABASE_URL

# Test connection
mysql -h host -u user -p
```

**Issue: Port already in use**
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Drizzle ORM Docs](https://orm.drizzle.team/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Developer Guide Version 1.0 - Updated January 2025**
