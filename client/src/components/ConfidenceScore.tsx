import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

/**
 * Confidence Score Component
 * 
 * Displays source confidence as a color bar with detailed breakdown.
 * Shows 5 dimensions: timeliness, transparency, methodology, independence, consistency.
 */

export interface ConfidenceScoreProps {
  score: number; // 0-100
  level: "low" | "medium" | "high" | "very_high";
  dimensions?: {
    timeliness: number;
    transparency: number;
    methodology: number;
    independence: number;
    consistency: number;
  };
  sourceName?: string;
  compact?: boolean;
}

export function ConfidenceScore({
  score,
  level,
  dimensions,
  sourceName,
  compact = false,
}: ConfidenceScoreProps) {
  // Color mapping
  const colorMap = {
    low: "bg-red-500",
    medium: "bg-yellow-500",
    high: "bg-green-500",
    very_high: "bg-emerald-600",
  };

  const textColorMap = {
    low: "text-red-700 dark:text-red-400",
    medium: "text-yellow-700 dark:text-yellow-400",
    high: "text-green-700 dark:text-green-400",
    very_high: "text-emerald-700 dark:text-emerald-400",
  };

  const labelMap = {
    low: "Low Confidence",
    medium: "Medium Confidence",
    high: "High Confidence",
    very_high: "Very High Confidence",
  };

  const dimensionLabels = {
    timeliness: "Timeliness",
    transparency: "Transparency",
    methodology: "Methodology",
    independence: "Independence",
    consistency: "Consistency",
  };

  if (compact) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-flex items-center gap-1 cursor-help">
            <div className="w-12 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full ${colorMap[level]} transition-all`}
                style={{ width: `${score}%` }}
              />
            </div>
            <span className={`text-xs font-medium ${textColorMap[level]}`}>
              {score}%
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs">
          <div className="space-y-2">
            <div className="font-semibold">{labelMap[level]}</div>
            {sourceName && (
              <div className="text-xs text-muted-foreground">
                Source: {sourceName}
              </div>
            )}
            {dimensions && (
              <div className="space-y-1 text-xs">
                {Object.entries(dimensions).map(([key, value]) => (
                  <div key={key} className="flex justify-between gap-2">
                    <span>{dimensionLabels[key as keyof typeof dimensionLabels]}:</span>
                    <span className="font-medium">{value}%</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <div className="border rounded-lg p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Source Confidence</span>
        </div>
        <span className={`text-sm font-semibold ${textColorMap[level]}`}>
          {labelMap[level]}
        </span>
      </div>

      {sourceName && (
        <div className="text-xs text-muted-foreground">
          Source: {sourceName}
        </div>
      )}

      {/* Overall confidence bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Overall</span>
          <span className="font-medium">{score}%</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full ${colorMap[level]} transition-all`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>

      {/* Dimension breakdown */}
      {dimensions && (
        <div className="space-y-2 pt-2 border-t">
          <div className="text-xs font-medium text-muted-foreground">
            Confidence Dimensions
          </div>
          {Object.entries(dimensions).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">
                  {dimensionLabels[key as keyof typeof dimensionLabels]}
                </span>
                <span className="font-medium">{value}%</span>
              </div>
              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary/60 transition-all"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-xs text-muted-foreground pt-2 border-t">
        Confidence score reflects timeliness, transparency, methodology,
        independence, and consistency with other sources.
      </div>
    </div>
  );
}
