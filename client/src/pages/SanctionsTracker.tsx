import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Shield, 
  AlertTriangle,
  User,
  Building2,
  Calendar,
  ExternalLink,
  FileText
} from "lucide-react";

interface Sanction {
  id: string;
  entity_name: string;
  entity_name_ar: string;
  entity_type: "individual" | "organization";
  authority: string;
  date_imposed: string;
  status: "active" | "lifted";
  rationale: string;
  rationale_ar: string;
  impact: string;
  impact_ar: string;
}

const sanctions: Sanction[] = [
  {
    id: "1",
    entity_name: "Abdul-Malik al-Houthi",
    entity_name_ar: "عبد الملك الحوثي",
    entity_type: "individual",
    authority: "UN Security Council",
    date_imposed: "2015-04-14",
    status: "active",
    rationale: "Leader of Ansar Allah (Houthis), designated for threatening peace in Yemen.",
    rationale_ar: "زعيم أنصار الله (الحوثيين)، معين لتهديد السلام في اليمن.",
    impact: "Asset freeze and travel ban. Limited practical impact.",
    impact_ar: "تجميد الأصول وحظر السفر. تأثير عملي محدود."
  },
  {
    id: "2",
    entity_name: "Ansar Allah (Houthis)",
    entity_name_ar: "أنصار الله (الحوثيون)",
    entity_type: "organization",
    authority: "US Treasury",
    date_imposed: "2021-01-10",
    status: "lifted",
    rationale: "Designated as Foreign Terrorist Organization by Trump administration.",
    rationale_ar: "تصنيف كمنظمة إرهابية أجنبية من قبل إدارة ترامب.",
    impact: "Lifted by Biden in Feb 2021 to facilitate humanitarian aid.",
    impact_ar: "رفع من قبل بايدن في فبراير 2021 لتسهيل المساعدات الإنسانية."
  }
];

export default function SanctionsTracker() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSanctions = useMemo(() => {
    return sanctions.filter(s => 
      s.entity_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.entity_name_ar.includes(searchQuery)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-destructive/5 p-8">
      <div className="container">
        <div className="flex items-center gap-4 mb-8">
          <Shield className="h-12 w-12 text-destructive" />
          <div>
            <h1 className="text-4xl font-bold">
              {isArabic ? "متتبع العقوبات" : "Sanctions Tracker"}
            </h1>
            <p className="text-muted-foreground">
              {isArabic ? "قاعدة بيانات العقوبات الدولية" : "International Sanctions Database"}
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{isArabic ? "البحث" : "Search"}</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder={isArabic ? "ابحث..." : "Search..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </CardContent>
        </Card>

        <div className="space-y-4">
          {filteredSanctions.map(s => (
            <Card key={s.id}>
              <CardHeader>
                <CardTitle>{isArabic ? s.entity_name_ar : s.entity_name}</CardTitle>
                <CardDescription>
                  <Badge>{s.authority}</Badge>
                  <Badge variant={s.status === "active" ? "destructive" : "secondary"}>
                    {s.status}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{isArabic ? s.rationale_ar : s.rationale}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
