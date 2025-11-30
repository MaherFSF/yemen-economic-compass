import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Globe } from "lucide-react";

export default function CountriesCompass() {
  const countries = [
    { name: "Saudi Arabia", role: "Coalition Lead", aid: "$16B+", influence: "Very High" },
    { name: "United Arab Emirates", role: "Coalition Member", aid: "$8B+", influence: "Very High" },
    { name: "United States", role: "Coalition Support", aid: "$1.2B+", influence: "High" },
    { name: "United Kingdom", role: "Coalition Support", aid: "$500M+", influence: "High" },
    // ... more countries
  ];

  return (
    <div className="w-full space-y-8">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-2">الدول والجهات الفاعلة الدولية</h1>
        <p className="text-lg text-muted-foreground">تحليل شامل للدول ذات الصلة باقتصاد اليمن</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {countries.map((country) => (
          <Link key={country.name} href={`/compass/countries/${country.name.toLowerCase().replace(/\s+/g, '-')}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  {country.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Role:</strong> {country.role}</p>
                  <p><strong>Aid:</strong> {country.aid}</p>
                  <p><strong>Influence:</strong> {country.influence}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
