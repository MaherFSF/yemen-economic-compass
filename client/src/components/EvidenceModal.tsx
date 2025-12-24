import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, FileText, Database, TrendingUp, AlertCircle } from "lucide-react";

interface Source {
  id: string;
  title: string;
  publisher: string;
  date: string;
  url?: string;
  page?: string;
  snippet?: string;
}

interface Transformation {
  type: string;
  description: string;
  formula?: string;
}

interface EvidenceData {
  claim: string;
  claimAr?: string;
  value: string;
  confidence: "A" | "B" | "C" | "D";
  sources: Source[];
  transformations?: Transformation[];
  alternatives?: {
    value: string;
    source: string;
    reason: string;
  }[];
  methodology?: string;
  limitations?: string[];
  whatWouldChange?: string;
}

interface EvidenceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: EvidenceData;
}

const confidenceDescriptions = {
  A: {
    label: "High Confidence",
    description: "Audited/official data, consistent across multiple independent sources",
    color: "emerald"
  },
  B: {
    label: "Medium Confidence",
    description: "Credible but partial, lagged, or from single source",
    color: "blue"
  },
  C: {
    label: "Low Confidence",
    description: "Indirect proxy, modelled estimate, or high uncertainty",
    color: "amber"
  },
  D: {
    label: "Very Low Confidence",
    description: "Disputed, conflicting sources, or very low reliability",
    color: "red"
  }
};

export default function EvidenceModal({ open, onOpenChange, data }: EvidenceModalProps) {
  const confidenceInfo = confidenceDescriptions[data.confidence];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            Show Me How You Know This
          </DialogTitle>
          <DialogDescription className="text-base" lang="ar">
            أرني كيف تعرف هذا
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Claim */}
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="text-sm text-muted-foreground mb-2">Claim / المزعم</div>
            <div className="text-xl font-semibold mb-1">{data.claim}</div>
            {data.claimAr && (
              <div className="text-lg text-muted-foreground" lang="ar">{data.claimAr}</div>
            )}
            <div className="flex items-center gap-3 mt-3">
              <div className="text-3xl font-bold text-primary">{data.value}</div>
              <Badge className={`confidence-${data.confidence.toLowerCase()}`}>
                Confidence: {data.confidence}
              </Badge>
            </div>
          </div>

          {/* Confidence Rating Explanation */}
          <div className={`p-4 bg-${confidenceInfo.color}-500/10 border border-${confidenceInfo.color}-500/20 rounded-lg`}>
            <div className="flex items-start gap-3">
              <AlertCircle className={`h-5 w-5 text-${confidenceInfo.color}-600 flex-shrink-0 mt-0.5`} />
              <div>
                <div className="font-semibold mb-1">{confidenceInfo.label}</div>
                <div className="text-sm text-muted-foreground">{confidenceInfo.description}</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="sources" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="sources">Sources</TabsTrigger>
              <TabsTrigger value="transformations">Transformations</TabsTrigger>
              <TabsTrigger value="alternatives">Alternatives</TabsTrigger>
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
            </TabsList>

            {/* Sources Tab */}
            <TabsContent value="sources" className="space-y-4 mt-4">
              <div className="text-sm text-muted-foreground mb-4">
                {data.sources.length} source{data.sources.length !== 1 ? 's' : ''} used for this claim
              </div>
              {data.sources.map((source, index) => (
                <div key={source.id} className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="font-semibold mb-1">{source.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {source.publisher} • {source.date}
                        {source.page && ` • Page ${source.page}`}
                      </div>
                    </div>
                    {source.url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={source.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                  {source.snippet && (
                    <div className="p-3 bg-muted/50 rounded text-sm italic border-l-2 border-primary">
                      "{source.snippet}"
                    </div>
                  )}
                </div>
              ))}
            </TabsContent>

            {/* Transformations Tab */}
            <TabsContent value="transformations" className="space-y-4 mt-4">
              {data.transformations && data.transformations.length > 0 ? (
                <>
                  <div className="text-sm text-muted-foreground mb-4">
                    Data transformations applied to raw source data
                  </div>
                  {data.transformations.map((transform, index) => (
                    <div key={index} className="p-4 border rounded-lg space-y-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <div className="font-semibold">{transform.type}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {transform.description}
                      </div>
                      {transform.formula && (
                        <div className="p-3 bg-muted/50 rounded font-mono text-sm">
                          {transform.formula}
                        </div>
                      )}
                    </div>
                  ))}
                </>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No transformations applied — data used as published
                </div>
              )}
            </TabsContent>

            {/* Alternatives Tab */}
            <TabsContent value="alternatives" className="space-y-4 mt-4">
              {data.alternatives && data.alternatives.length > 0 ? (
                <>
                  <div className="text-sm text-muted-foreground mb-4">
                    Alternative estimates from other sources
                  </div>
                  {data.alternatives.map((alt, index) => (
                    <div key={index} className="p-4 border rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold">{alt.value}</div>
                        <Badge variant="outline">{alt.source}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-semibold">Why they differ:</span> {alt.reason}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No alternative estimates found
                </div>
              )}
            </TabsContent>

            {/* Methodology Tab */}
            <TabsContent value="methodology" className="space-y-4 mt-4">
              {data.methodology && (
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold mb-2">Methodology</div>
                  <div className="text-sm text-muted-foreground whitespace-pre-line">
                    {data.methodology}
                  </div>
                </div>
              )}

              {data.limitations && data.limitations.length > 0 && (
                <div className="p-4 border border-amber-500/20 bg-amber-500/10 rounded-lg">
                  <div className="font-semibold mb-2 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    Limitations & Caveats
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {data.limitations.map((limitation, index) => (
                      <li key={index}>{limitation}</li>
                    ))}
                  </ul>
                </div>
              )}

              {data.whatWouldChange && (
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <div className="font-semibold mb-2">What Would Change This Conclusion?</div>
                  <div className="text-sm text-muted-foreground">
                    {data.whatWouldChange}
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Footer */}
          <div className="pt-4 border-t flex items-center justify-between text-sm text-muted-foreground">
            <div>
              This evidence pack is part of Yemen Economic Crisis Observatory's transparency commitment
            </div>
            <Button variant="outline" size="sm">
              <Database className="h-4 w-4 mr-2" />
              Export Evidence Pack
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
