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
                ? "منصة بحثية شاملة لتحليل النظام المالي والاقتصادي في اليمن (2010-2025)"
                : "Comprehensive research platform analyzing Yemen's financial and economic system (2010-2025)"
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
                <Link href="/dashboards-hub">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "مركز لوحات المعلومات" : "Dashboards Hub"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/what-if-simulator">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "محاكي السيناريوهات" : "What-If Simulator"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/year-explorer">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "مستكشف السنوات" : "Year Explorer"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/banks-database">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "قاعدة بيانات البنوك" : "Banks Database"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/economic-indicators">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "المؤشرات الاقتصادية" : "Economic Indicators"}
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
                <Link href="/remittances">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "التحويلات المالية" : "Remittances"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/humanitarian-aid">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "المساعدات الإنسانية" : "Humanitarian Aid"}
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
                <Link href="/files">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {isArabic ? "إدارة الملفات" : "File Storage"}
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
                <a href="https://kayan.manus.space" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                  {isArabic ? "منصة كيان" : "Kayan Platform"}
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
            

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
