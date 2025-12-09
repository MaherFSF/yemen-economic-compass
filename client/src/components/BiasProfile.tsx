import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/**
 * Bias Profile Component
 * 
 * Shows structural biases and incentives for each source.
 * Never dismisses a source, always contextualizes their perspective.
 */

export interface BiasProfileProps {
  sourceName: string;
  primaryBias: string;
  biasDescription: string;
  narrativeTendency: string;
  strengths: string;
  fundingSource?: string;
  politicalAffiliation?: string;
  economicInterests?: string;
  typicalFraming?: string;
  blindSpots?: string;
  bestUsedFor?: string;
  exampleBias?: Array<{
    situation: string;
    bias: string;
    impact: string;
  }>;
  compact?: boolean;
}

export function BiasProfile({
  sourceName,
  primaryBias,
  biasDescription,
  narrativeTendency,
  strengths,
  fundingSource,
  politicalAffiliation,
  economicInterests,
  typicalFraming,
  blindSpots,
  bestUsedFor,
  exampleBias,
  compact = false,
}: BiasProfileProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (compact) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="inline-flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <AlertTriangle className="w-3 h-3" />
            {primaryBias}
          </Badge>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
              <Info className="w-3 h-3 mr-1" />
              {isOpen ? "Hide" : "Show"} Context
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent className="mt-2">
          <div className="text-xs text-muted-foreground space-y-1 pl-4 border-l-2 border-muted">
            <p><strong>Bias:</strong> {biasDescription}</p>
            <p><strong>Tendency:</strong> {narrativeTendency}</p>
            <p><strong>Strengths:</strong> {strengths}</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Card className="border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              Source Context: {sourceName}
            </CardTitle>
            <CardDescription>
              Understanding structural biases and incentives
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-background">
            {primaryBias}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Bias Description */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Info className="w-4 h-4" />
            Bias Profile
          </div>
          <p className="text-sm text-muted-foreground">
            {biasDescription}
          </p>
        </div>

        {/* Structural Incentives */}
        {(fundingSource || politicalAffiliation || economicInterests) && (
          <div className="space-y-2 pt-2 border-t">
            <div className="text-sm font-medium">Structural Incentives</div>
            <div className="space-y-1 text-sm">
              {fundingSource && (
                <div>
                  <span className="text-muted-foreground">Funding:</span>{" "}
                  <span>{fundingSource}</span>
                </div>
              )}
              {politicalAffiliation && (
                <div>
                  <span className="text-muted-foreground">Political ties:</span>{" "}
                  <span>{politicalAffiliation}</span>
                </div>
              )}
              {economicInterests && (
                <div>
                  <span className="text-muted-foreground">Economic interests:</span>{" "}
                  <span>{economicInterests}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Narrative Tendency */}
        <div className="space-y-2 pt-2 border-t">
          <div className="text-sm font-medium">How Bias Shapes Narrative</div>
          <p className="text-sm text-muted-foreground">
            {narrativeTendency}
          </p>
          {typicalFraming && (
            <div className="text-xs text-muted-foreground">
              <strong>Typical framing:</strong> {typicalFraming}
            </div>
          )}
          {blindSpots && (
            <div className="text-xs text-muted-foreground">
              <strong>Blind spots:</strong> {blindSpots}
            </div>
          )}
        </div>

        {/* Strengths */}
        <div className="space-y-2 pt-2 border-t">
          <div className="flex items-center gap-2 text-sm font-medium text-green-700 dark:text-green-400">
            <CheckCircle2 className="w-4 h-4" />
            Strengths Despite Bias
          </div>
          <p className="text-sm text-muted-foreground">
            {strengths}
          </p>
          {bestUsedFor && (
            <div className="text-xs text-muted-foreground">
              <strong>Best used for:</strong> {bestUsedFor}
            </div>
          )}
        </div>

        {/* Examples */}
        {exampleBias && exampleBias.length > 0 && (
          <div className="space-y-2 pt-2 border-t">
            <div className="text-sm font-medium">Examples</div>
            <div className="space-y-2">
              {exampleBias.map((example, idx) => (
                <div key={idx} className="text-xs space-y-1 p-2 bg-background rounded border">
                  <div><strong>Situation:</strong> {example.situation}</div>
                  <div><strong>Bias:</strong> {example.bias}</div>
                  <div><strong>Impact:</strong> {example.impact}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="text-xs text-muted-foreground pt-2 border-t italic">
          This platform never dismisses sources. We contextualize their perspective
          to help you understand how incentives might shape the narrative.
        </div>
      </CardContent>
    </Card>
  );
}
