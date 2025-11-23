export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-muted/30 mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Causeway</span>
                <span className="text-xs text-muted-foreground">Consultancies</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              استشارات متخصصة في التحليل الاقتصادي والمالي والاستراتيجي
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">روابط سريعة</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="/overview" className="hover:text-primary transition-colors">
                  نظرة عامة
                </a>
              </li>
              <li>
                <a href="/charts" className="hover:text-primary transition-colors">
                  الرسوم البيانية
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  من نحن
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">التقرير</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>النظام المالي الموازي في اليمن</p>
              <p className="text-xs">تحليل شامل للفترة 2015-2025</p>
              <p className="text-xs">© {currentYear} Causeway Consultancies</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 text-center">
          <p className="text-xs text-muted-foreground">
            جميع الحقوق محفوظة © {currentYear} Causeway Consultancies - by Maher F.S. Farea
          </p>
        </div>
      </div>
    </footer>
  );
}
