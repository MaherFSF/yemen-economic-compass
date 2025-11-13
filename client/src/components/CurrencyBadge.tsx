import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CurrencyBadgeProps {
  type: "aden" | "sanaa" | "usd" | "unified";
  className?: string;
  showLabel?: boolean;
}

export function CurrencyBadge({ type, className, showLabel = true }: CurrencyBadgeProps) {
  const configs = {
    aden: {
      label: "YER-Aden",
      labelAr: "ريال عدن",
      description: "New banknotes, IRG-controlled",
      descriptionAr: "أوراق نقدية جديدة، تحت سيطرة الحكومة الشرعية",
      color: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    sanaa: {
      label: "YER-Sana'a",
      labelAr: "ريال صنعاء",
      description: "Old banknotes, Houthi-controlled",
      descriptionAr: "أوراق نقدية قديمة، تحت سيطرة الحوثيين",
      color: "bg-red-600 hover:bg-red-700 text-white",
    },
    usd: {
      label: "USD",
      labelAr: "دولار أمريكي",
      description: "US Dollar",
      descriptionAr: "دولار أمريكي",
      color: "bg-green-600 hover:bg-green-700 text-white",
    },
    unified: {
      label: "YER",
      labelAr: "ريال يمني",
      description: "Unified Yemeni Rial (pre-2016)",
      descriptionAr: "ريال يمني موحد (قبل 2016)",
      color: "bg-gray-600 hover:bg-gray-700 text-white",
    },
  };

  const config = configs[type];

  if (!showLabel) {
    return (
      <span className={cn("inline-flex items-center px-2 py-0.5 rounded text-xs font-medium", config.color, className)}>
        {config.label}
      </span>
    );
  }

  return (
    <Badge className={cn(config.color, className)} title={config.description}>
      {config.label}
    </Badge>
  );
}

// Helper component for displaying exchange rates with proper currency labels
interface ExchangeRateProps {
  rate: number | string;
  currency: "aden" | "sanaa" | "unified";
  date?: string;
  className?: string;
}

export function ExchangeRate({ rate, currency, date, className }: ExchangeRateProps) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <CurrencyBadge type={currency} showLabel={false} />
      <span className="font-mono font-bold">{rate}</span>
      <span className="text-sm text-muted-foreground">per USD</span>
      {date && <span className="text-xs text-muted-foreground">({date})</span>}
    </div>
  );
}

// Helper component for displaying monetary amounts with proper currency
interface MonetaryAmountProps {
  amount: number | string;
  currency: "aden" | "sanaa" | "usd";
  unit?: "million" | "billion" | "trillion";
  className?: string;
}

export function MonetaryAmount({ amount, currency, unit, className }: MonetaryAmountProps) {
  const unitLabels = {
    million: { en: "M", ar: "م" },
    billion: { en: "B", ar: "مليار" },
    trillion: { en: "T", ar: "ت" },
  };

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span className="font-mono font-bold text-lg">{amount}</span>
      {unit && <span className="text-sm text-muted-foreground">{unitLabels[unit].en}</span>}
      <CurrencyBadge type={currency} showLabel={false} />
    </div>
  );
}
