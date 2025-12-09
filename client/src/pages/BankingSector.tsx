import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Building2, TrendingDown, TrendingUp, Shield, MapPin } from "lucide-react";
import { Link } from "wouter";

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
}

export default function BankingSector() {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/trpc/banks.getAll')
      .then(res => res.json())
      .then(data => {
        const banksData = data.result?.data?.json || data.result?.data || data.result || [];
        setBanks(Array.isArray(banksData) ? banksData : []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load banks:', err);
        setBanks([]);
        setLoading(false);
      });
  }, []);

  const sanctionedBanks = Array.isArray(banks) ? banks.filter(b => b.sanctionsStatus?.toLowerCase().includes('sanctioned')) : [];
  const commercialBanks = Array.isArray(banks) ? banks.filter(b => b.type === 'commercial') : [];
  const islamicBanks = Array.isArray(banks) ? banks.filter(b => b.type === 'islamic') : [];
  const microfinanceBanks = Array.isArray(banks) ? banks.filter(b => b.type === 'microfinance') : [];
  
  // Calculate branch network collapse
  const banksWithBranchData = banks.filter(b => b.branches2014 && b.branches2025);
  const totalBranches2014 = banksWithBranchData.reduce((sum, b) => sum + (b.branches2014 || 0), 0);
  const totalBranches2025 = banksWithBranchData.reduce((sum, b) => sum + (b.branches2025 || 0), 0);
  const branchDecline = totalBranches2014 > 0 
    ? Math.round(((totalBranches2014 - totalBranches2025) / totalBranches2014) * 100)
    : 0;

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
          <p className="mt-4 text-muted-foreground">Loading banking sector data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-12 w-12" />
            <h1 className="text-4xl font-bold">Yemen Banking Sector Intelligence</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive analysis of {banks.length} commercial and Islamic banks operating in Yemen's fractured financial system (2010-2025)
          </p>
        </div>
      </div>

      <div className="container py-12">
        {/* Critical Alert - Sanctions */}
        {sanctionedBanks.length > 0 && (
          <Card className="mb-8 border-red-300 bg-red-50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <CardTitle className="text-red-900">US Treasury Sanctions (January 2025)</CardTitle>
              </div>
              <CardDescription className="text-red-700">
                {sanctionedBanks.length} major Yemeni banks designated by OFAC for supporting Houthi operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {sanctionedBanks.map(bank => (
                  <Link key={bank.id} href={`/banking/${bank.id}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer border-red-200">
                      <CardHeader>
                        <CardTitle className="text-lg">{bank.nameEn}</CardTitle>
                        <CardDescription className="text-sm">{bank.nameAr}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Badge className="bg-red-600 text-white mb-2">SANCTIONED</Badge>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {bank.sanctionsStatus?.substring(0, 150)}...
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Key Statistics */}
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Banks</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{banks.length}</div>
              <p className="text-xs text-muted-foreground">
                {commercialBanks.length} commercial, {islamicBanks.length} Islamic, {microfinanceBanks.length} microfinance
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sanctioned Banks</CardTitle>
              <Shield className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">{sanctionedBanks.length}</div>
              <p className="text-xs text-muted-foreground">
                US Treasury OFAC designations (Jan 2025)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Branch Network Collapse</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">-{branchDecline}%</div>
              <p className="text-xs text-muted-foreground">
                {totalBranches2014} (2014) → {totalBranches2025} (2025)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Operational Split</CardTitle>
              <MapPin className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">
                {banks.filter(b => b.operationalStatus2025?.includes('Split')).length}
              </div>
              <p className="text-xs text-muted-foreground">
                Banks operating in both Aden and Sana'a
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sector Fragmentation */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Banking Sector Fragmentation (2016 CBY Split)</CardTitle>
            <CardDescription>
              The 2016 Central Bank of Yemen split created two parallel banking systems, forcing banks to choose between Aden and Sana'a
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 bg-green-50">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  CBY-Aden (Internationally Recognized)
                </h3>
                <ul className="space-y-2 text-sm">
                  {banks.filter(b => 
                    b.operationalStatus2025?.includes('Aden') || 
                    (b.sanctionsStatus && !b.sanctionsStatus.toLowerCase().includes('sanctioned'))
                  ).map(bank => (
                    <li key={bank.id} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      {bank.nameEn}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border rounded-lg p-6 bg-red-50">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  CBY-Sana'a (Houthi-Controlled)
                </h3>
                <ul className="space-y-2 text-sm">
                  {sanctionedBanks.map(bank => (
                    <li key={bank.id} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      {bank.nameEn} <Badge className="ml-2 bg-red-600 text-white text-xs">SANCTIONED</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* All Banks List */}
        <Card>
          <CardHeader>
            <CardTitle>All Banks ({banks.length})</CardTitle>
            <CardDescription>
              Click on any bank for detailed profile, financial indicators, sanctions status, and crisis impact analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {banks.map(bank => (
                <Link key={bank.id} href={`/banking/${bank.id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{bank.nameEn}</CardTitle>
                          <CardDescription className="text-sm">{bank.nameAr}</CardDescription>
                        </div>
                        {bank.sanctionsStatus?.toLowerCase().includes('sanctioned') && (
                          <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                        )}
                      </div>
                      <div className="flex gap-2 flex-wrap mt-2">
                        <Badge className={getTypeColor(bank.type)}>{bank.type}</Badge>
                        <Badge className={getStatusColor(bank.status)}>{bank.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        {bank.foundingYear && (
                          <p className="text-muted-foreground">Founded: {bank.foundingYear}</p>
                        )}
                        {bank.ownership && (
                          <p className="text-muted-foreground line-clamp-1">
                            {bank.ownership}
                          </p>
                        )}
                        {bank.branches2014 && bank.branches2025 && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>
                              {bank.branches2014} → {bank.branches2025} branches
                              {bank.branches2025 > bank.branches2014 ? (
                                <TrendingUp className="inline h-4 w-4 text-green-600 ml-1" />
                              ) : (
                                <TrendingDown className="inline h-4 w-4 text-red-600 ml-1" />
                              )}
                            </span>
                          </div>
                        )}
                        {bank.assets && (
                          <p className="text-muted-foreground">
                            Assets: ${bank.assets}M ({bank.assetsYear})
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
