#!/bin/bash

# Create placeholder pages for all stakeholder navigation links

PAGES_DIR="/home/ubuntu/yemen-financial-report/client/src/pages"

# Array of pages to create
declare -a pages=(
  "UAE"
  "UNOCHA"
  "WFP"
  "UNHCR"
  "IOM"
  "UNICEF"
  "WHO"
  "FAO"
  "UNDP"
  "GovernmentAden"
  "GovernmentSanaa"
  "Donors"
  "BilateralDonors"
)

# Create each page
for page in "${pages[@]}"; do
  cat > "$PAGES_DIR/${page}.tsx" << 'EOF'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PAGENAME() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <Construction className="w-12 h-12 text-orange-500" />
              <div>
                <CardTitle className="text-3xl">
                  {isArabic ? "قيد الإنشاء" : "Under Construction"}
                </CardTitle>
                <CardDescription>
                  {isArabic ? "هذه الصفحة قيد التطوير" : "This page is under development"}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {isArabic 
                ? "نعمل على إنشاء محتوى شامل لهذه الصفحة. يرجى التحقق مرة أخرى قريبًا."
                : "We are working on creating comprehensive content for this page. Please check back soon."
              }
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
EOF
  # Replace PAGENAME with actual page name
  sed -i "s/PAGENAME/${page}/g" "$PAGES_DIR/${page}.tsx"
  echo "Created $PAGES_DIR/${page}.tsx"
done

echo "All placeholder pages created successfully!"
