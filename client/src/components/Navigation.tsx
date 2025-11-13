import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText, BarChart3, Info, Home, Building2, Calendar, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const isArabic = language === 'ar';

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const navItems = [
    { href: "/", label: { ar: "الرئيسية", en: "Home" }, icon: Home },
    { href: "/story", label: { ar: "القصة الكاملة", en: "Full Story" }, icon: FileText },
    { href: "/economic-crisis", label: { ar: "الأزمة الاقتصادية", en: "Economic Crisis" }, icon: BarChart3 },
    { href: "/currency-war", label: { ar: "حرب العملة", en: "Currency War" }, icon: BarChart3 },
    { href: "/cities", label: { ar: "المدن الرئيسية", en: "Main Cities" }, icon: Building2 },
    { href: "/events", label: { ar: "الأحداث", en: "Events" }, icon: Calendar },
    { href: "/analytics", label: { ar: "لوحة التحليلات", en: "Analytics" }, icon: BarChart3 },
    { href: "/research", label: { ar: "مكتبة الأبحاث", en: "Research" }, icon: Building2 },
    { href: "/about", label: { ar: "من نحن", en: "About" }, icon: Info },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-3">
            <img src="/causeway-logo.png" alt="CauseWay" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">CauseWay</span>
              <span className="text-xs text-muted-foreground">
                {isArabic ? "للاستشارات" : "Consultancies"}
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className="gap-2"
                  size="sm"
                >
                  <Icon className="h-4 w-4" />
                  {item.label[language]}
                </Button>
              </Link>
            );
          })}
          
          {/* Language Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2 ml-2"
          >
            <Globe className="h-4 w-4" />
            {language === 'ar' ? 'EN' : 'عربي'}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
          >
            <Globe className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="w-full justify-start gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label[language]}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
