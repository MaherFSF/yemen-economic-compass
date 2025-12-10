import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Building2, TrendingDown, TrendingUp, Shield, MapPin, ArrowLeft, Calendar, Users } from "lucide-react";

interface Bank {
  id: number;
  nameEn: string;
  nameAr: string;
  type: string;
  status: string;
  foundingYear: string | null;
  ownership: string | null;
  sanctionsStatus: string | null;
  operationalStatus2025: string | null;
  branches2014: number | null;
  branches2025: number | null;
  assets: number | null;
  assetsYear: string | null;
  crisisImpact: string | null;
  compellingNarrative: string | null;
  topSources: string | null;
  dataConfidence: string | null;
}

export default function BankDetail() {
  const [, params] = useRoute("/banking/:id");
  const [bank, setBank] = useState<Bank | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.id) return;
    
    fetch(`/api/trpc/banks.getById?input=${encodeURIComponent(JSON.stringify({ id: parseInt(params.id) }))}`)
      .then(res => res.json())
      .then(data => {
        const bankData = data.result?.data?.json || data.result?.data || null;
        setBank(bankData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load bank:', err);
        setLoading(false);
      });
  }, [params?.id]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'bg-green-100 text-green-800 border-green-300';
      case 'struggling': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'critical': return 'bg-red-100 text-red-800 border-red-300';
      case 'inactive': return 'bg-gray-100 text-gray-800 border-gray-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'commercial': return 'bg-blue-100 text-blue-800';
      case 'islamic': return 'bg-purple-100 text-purple-800';
      case 'microfinance': return 'bg-green-100 text-green-800';
      case 'exchange': return 'bg-orange-100 text-orange-800';
      case 'development': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading bank details...</p>
        </div>
      </div>
    );
  }

  if (!bank) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Bank Not Found</h2>
          <p className="text-muted-foreground mb-4">The requested bank could not be found.</p>
          <Link href="/banking">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Banking Sector
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const isSanctioned = bank.sanctionsStatus?.toLowerCase().includes('sanctioned');
  const branchChange = bank.branches2014 && bank.branches2025 
    ? Math.round(((bank.branches2025 - bank.branches2014) / bank.branches2014) * 100)
    : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className={`py-12 ${isSanctioned ? 'bg-gradient-to-r from-red-600 to-red-800' : 'bg-gradient-to-r from-blue-600 to-blue-800'} text-white`}>
        <div className="container">
          <Link href="/banking">
            <Button variant="ghost" className="text-white hover:bg-slate-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Banking Sector
            </Button>
          </Link>
          
          <div className="flex items-start gap-4">
            <Building2 className="h-16 w-16 flex-shrink-0" />
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{bank.nameEn}</h1>
              <p className="text-xl text-blue-100 mb-4">{bank.nameAr}</p>
              <div className="flex gap-2 flex-wrap">
                <Badge className={`${getTypeColor(bank.type)} text-sm`}>{bank.type}</Badge>
                <Badge className={`${getStatusColor(bank.status)} text-sm`}>{bank.status}</Badge>
                {isSanctioned && (
                  <Badge className="bg-red-900 text-white text-sm flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" />
                    SANCTIONED
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Sanctions Alert */}
        {isSanctioned && (
          <Card className="mb-8 border-red-300 bg-red-50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <CardTitle className="text-red-900">US Treasury Sanctions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-red-800">{bank.sanctionsStatus}</p>
            </CardContent>
          </Card>
        )}

        {/* Compelling Narrative */}
        {bank.compellingNarrative && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Bank Story</CardTitle>
              <CardDescription>The journey of {bank.nameEn} through Yemen's crisis</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{bank.compellingNarrative}</p>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-8 md:grid-cols-2">
          {/* Profile */}
          <Card>
            <CardHeader>
              <CardTitle>Bank Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {bank.foundingYear && (
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Founded</p>
                    <p className="text-muted-foreground">{bank.foundingYear}</p>
                  </div>
                </div>
              )}
              
              {bank.ownership && (
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Ownership</p>
                    <p className="text-muted-foreground">{bank.ownership}</p>
                  </div>
                </div>
              )}
              
              {bank.operationalStatus2025 && (
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Operational Status (2025)</p>
                    <p className="text-muted-foreground">{bank.operationalStatus2025}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Financial Indicators */}
          <Card>
            <CardHeader>
              <CardTitle>Financial Indicators</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {bank.assets && (
                <div>
                  <p className="font-medium mb-1">Total Assets</p>
                  <p className="text-3xl font-bold">${bank.assets}M</p>
                  <p className="text-sm text-muted-foreground">As of {bank.assetsYear}</p>
                </div>
              )}
              
              {bank.branches2014 && bank.branches2025 && (
                <div>
                  <p className="font-medium mb-1">Branch Network Evolution</p>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span className="text-2xl font-bold">
                      {bank.branches2014} → {bank.branches2025}
                    </span>
                    {branchChange !== null && (
                      <Badge className={branchChange > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                        {branchChange > 0 ? '+' : ''}{branchChange}%
                        {branchChange > 0 ? (
                          <TrendingUp className="inline h-4 w-4 ml-1" />
                        ) : (
                          <TrendingDown className="inline h-4 w-4 ml-1" />
                        )}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Pre-war (2014) vs Current (2025)
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Crisis Impact */}
        {bank.crisisImpact && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Crisis Impact Analysis</CardTitle>
              <CardDescription>How the 2011 revolution, 2015 war, and 2016 CBY split affected {bank.nameEn}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{bank.crisisImpact}</p>
            </CardContent>
          </Card>
        )}

        {/* Data Quality */}
        <div className="grid gap-8 md:grid-cols-2 mt-8">
          {bank.topSources && (
            <Card>
              <CardHeader>
                <CardTitle>Sources</CardTitle>
                <CardDescription>Top 3 credible sources used for this research</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {bank.topSources.split(',').map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-sm">{source.trim()}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {bank.dataConfidence && (
            <Card>
              <CardHeader>
                <CardTitle>Data Confidence</CardTitle>
                <CardDescription>Assessment of data quality and reliability</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{bank.dataConfidence}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
