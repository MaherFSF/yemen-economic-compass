import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { TrendingUp } from "lucide-react";

export default function MicrofinanceCompass() {
  const mfis = [
    { name: "Al-Amal Microfinance Bank", borrowers: 260000, status: "Active" },
    { name: "National Microfinance Foundation", borrowers: 45000, status: "Active" },
    // ... 33 more MFIs
  ];

  return (
    <div className="w-full space-y-8">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-2">مؤسسات التمويل الأصغر</h1>
        <p className="text-lg text-muted-foreground">دليل شامل لـ 35+ مؤسسة تمويل أصغر</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mfis.map((mfi) => (
          <Link key={mfi.name} href={`/compass/microfinance/${mfi.name.toLowerCase().replace(/\s+/g, '-')}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  {mfi.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600">{mfi.borrowers.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">المقترضون النشطون</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
