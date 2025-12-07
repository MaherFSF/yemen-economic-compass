import { useLanguage } from "@/contexts/LanguageContext";

interface ChartFooterProps {
  sources: string[];
  lastUpdated?: string;
  dataPoints?: number;
  methodology?: string;
}

/**
 * Professional chart footer component with source citations
 * Displays data sources, last update date, and methodology
 * Supports bilingual display (EN/AR)
 */
export function ChartFooter({ 
  sources, 
  lastUpdated = "December 2025", 
  dataPoints,
  methodology 
}: ChartFooterProps) {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="mt-6 pt-4 border-t border-border/50">
      <div className="flex flex-col gap-2 text-xs text-muted-foreground">
        {/* Sources */}
        <div className="flex flex-wrap items-start gap-1">
          <span className="font-semibold text-foreground/80">
            {isArabic ? "المصادر:" : "Sources:"}
          </span>
          <span className="flex-1">
            {sources.join(", ")}
          </span>
        </div>

        {/* Metadata row */}
        <div className="flex flex-wrap items-center gap-4 text-[11px]">
          {/* Last Updated */}
          <div className="flex items-center gap-1">
            <span className="font-medium text-foreground/70">
              {isArabic ? "آخر تحديث:" : "Last updated:"}
            </span>
            <span>{lastUpdated}</span>
          </div>

          {/* Data Points */}
          {dataPoints && (
            <div className="flex items-center gap-1">
              <span className="font-medium text-foreground/70">
                {isArabic ? "نقاط البيانات:" : "Data points:"}
              </span>
              <span>{dataPoints.toLocaleString()}</span>
            </div>
          )}

          {/* Methodology */}
          {methodology && (
            <div className="flex items-center gap-1">
              <span className="font-medium text-foreground/70">
                {isArabic ? "المنهجية:" : "Methodology:"}
              </span>
              <span className="italic">{methodology}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Compact version for smaller charts
 */
export function ChartFooterCompact({ sources, lastUpdated = "Dec 2025" }: Pick<ChartFooterProps, "sources" | "lastUpdated">) {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="mt-3 pt-2 border-t border-border/30 text-[10px] text-muted-foreground">
      <span className="font-medium">{isArabic ? "المصادر:" : "Sources:"}</span>{" "}
      {sources.join(", ")} • {lastUpdated}
    </div>
  );
}
