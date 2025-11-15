import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { PLATFORM_NAME_AR, PLATFORM_NAME_EN } from '@/const';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              {isArabic ? PLATFORM_NAME_AR : PLATFORM_NAME_EN}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isArabic
                ? "منصة بحثية شاملة لتحليل النظام المالي والاقتصادي في اليمن (2015-2025)"
                : "Comprehensive research platform analyzing Yemen's financial and economic system (2015-2025)"
              }
            </p>
            <div className="text-xs text-muted-foreground">
              {isArabic
                ? "مشروع بحثي من كوزواي للاستشارات"
                : "A research project by CauseWay Consultancies"
              }
            </div>
          </div>
          
          {/* Quick Links - Data & Analysis */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              {isArabic ? "البيانات والتحليل" : "Data & Analysis"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/compass">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "لوحة البوصلة" : "Compass Dashboard"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/key-statistics">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "الإحصاءات الرئيسية" : "Key Statistics"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/transformation">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "التحول المالي" : "Financial Transformation"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/power-map">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "خريطة القوى" : "Power Map"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/advanced-viz">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "رسوم بيانية متقدمة" : "Advanced Visualizations"}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              {isArabic ? "الموارد" : "Resources"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/research">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "الأبحاث" : "Research"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/literature">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "المكتبة البحثية" : "Research Library"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "الأخبار" : "News"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/timeline">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "الخط الزمني" : "Timeline"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/stakeholders">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "أصحاب المصلحة" : "Stakeholders"}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* About CauseWay */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              {isArabic ? "عن كوزواي" : "About CauseWay"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-causeway">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "مؤسسة كوزواي" : "CauseWay Foundation"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about-causeway">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "كوزواي أركاديا" : "CauseWay Arcadia"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about-causeway">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "كوزواي للاستشارات" : "CauseWay Consultancies"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about-causeway">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "كوزواي للمشاريع" : "CauseWay Projects"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/kayan">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "منصة كيان" : "Kayan Platform"}
                  </span>
                </Link>
              </li>
            </ul>
            
            {/* CauseWay Logos */}
            <div className="mt-4 space-y-3">
              <Link href="/about-causeway">
                <div className="cursor-pointer hover:opacity-80 transition-opacity">
                  <img 
                    src="/causeway-main.jpeg" 
                    alt="CauseWay" 
                    className="h-12 w-auto object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              © {currentYear} CauseWay Foundation. {isArabic ? "جميع الحقوق محفوظة" : "All rights reserved"}.
            </div>
            <div className="flex items-center gap-4">
              <span>{isArabic ? PLATFORM_NAME_AR : PLATFORM_NAME_EN}</span>
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
