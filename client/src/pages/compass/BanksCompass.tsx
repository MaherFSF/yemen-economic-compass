import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building2, TrendingDown, Users, DollarSign } from "lucide-react";

export default function BanksCompass() {
  const banks = [
    { name: "CAC Bank", type: "Commercial", status: "Active", founded: 1993 },
    { name: "Yemen Kuwait Bank", type: "Commercial", status: "Active", founded: 1997 },
    { name: "Tadhamon Islamic Bank", type: "Islamic", status: "Active", founded: 2002 },
    // ... 52 more banks
  ];

  return (
    <div className="w-full space-y-8">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-2">البنوك اليمنية</h1>
        <p className="text-lg text-muted-foreground">دليل شامل لـ 55+ بنك تجاري وإسلامي</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {banks.map((bank) => (
          <Link key={bank.name} href={`/compass/banks/${bank.name.toLowerCase().replace(/\s+/g, '-')}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="h-6 w-6 text-primary" />
                  <CardTitle>{bank.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Type:</strong> {bank.type}</p>
                  <p><strong>Status:</strong> {bank.status}</p>
                  <p><strong>Founded:</strong> {bank.founded}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
