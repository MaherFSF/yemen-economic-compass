import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">منصّة البوصلة الاقتصادية</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              منصة بحثية شاملة لتحليل النظام المالي والاقتصادي في اليمن (2015-2025)
            </p>
            <div className="text-xs text-muted-foreground">
              مشروع بحثي من كوزواي للاستشارات
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/compass">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    لوحة البوصلة
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/key-statistics">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    الإحصاءات الرئيسية
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/transformation">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    التحول المالي
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/advanced-viz">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    رسوم بيانية متقدمة
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/literature">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    المكتبة البحثية
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* About CauseWay */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">عن كوزواي</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-causeway">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    مؤسسة كوزواي
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about-causeway">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    كوزواي أركاديا
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about-causeway">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    كوزواي للاستشارات
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about-causeway">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    كوزواي للمشاريع
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/kayan">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    منصة كيان
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* CauseWay Logos */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">مدعوم من</h3>
            <div className="space-y-4">
              <Link href="/about-causeway">
                <div className="cursor-pointer hover:opacity-80 transition-opacity">
                  <img 
                    src="/causeway-main.jpeg" 
                    alt="CauseWay" 
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/about-causeway">
                  <div className="cursor-pointer hover:opacity-80 transition-opacity">
                    <img 
                      src="/causeway-foundation.jpeg" 
                      alt="CauseWay Foundation" 
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </Link>
                <Link href="/about-causeway">
                  <div className="cursor-pointer hover:opacity-80 transition-opacity">
                    <img 
                      src="/causeway-consultancies.jpeg" 
                      alt="CauseWay Consultancies" 
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              © {currentYear} CauseWay Foundation. جميع الحقوق محفوظة.
            </div>
            <div className="flex items-center gap-4">
              <span>منصّة البوصلة الاقتصادية للحرب في اليمن</span>
              <span>•</span>
              <span>Yemen Economic Compass</span>
            </div>
            <div className="text-xs">
              by Maher F.S. Farea
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
