import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BreadcrumbItem {
  label: string;
  labelAr: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
          {item.href ? (
            <Link href={item.href}>
              <a className="hover:text-foreground transition-colors">
                {isArabic ? item.labelAr : item.label}
              </a>
            </Link>
          ) : (
            <span className="text-foreground font-medium">
              {isArabic ? item.labelAr : item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
