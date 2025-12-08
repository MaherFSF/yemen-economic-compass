import { ReactNode, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Maximize2, RefreshCw } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ChartContainerProps {
  title: string;
  titleAr: string;
  description?: string;
  descriptionAr?: string;
  children: ReactNode;
  onExportCSV?: () => void;
  onExportPNG?: () => void;
  onReset?: () => void;
  source?: string;
  sourceAr?: string;
  className?: string;
}

export default function ChartContainer({
  title,
  titleAr,
  description,
  descriptionAr,
  children,
  onExportCSV,
  onExportPNG,
  onReset,
  source,
  sourceAr,
  className = ''
}: ChartContainerProps) {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <Card className={`${className} hover:shadow-xl transition-all duration-300`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              {isArabic ? titleAr : title}
            </CardTitle>
            {(description || descriptionAr) && (
              <CardDescription className="mt-2">
                {isArabic ? descriptionAr : description}
              </CardDescription>
            )}
          </div>
          <div className="flex items-center gap-2">
            {onReset && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onReset}
                title={isArabic ? 'إعادة تعيين' : 'Reset Zoom'}
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            )}
            {onExportPNG && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onExportPNG}
                title={isArabic ? 'تصدير PNG' : 'Export PNG'}
              >
                <Download className="h-4 w-4" />
              </Button>
            )}
            {onExportCSV && (
              <Button
                variant="outline"
                size="sm"
                onClick={onExportCSV}
              >
                <Download className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                CSV
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full" style={{ minHeight: '400px' }}>
          {children}
        </div>
        {(source || sourceAr) && (
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold">{isArabic ? 'المصدر: ' : 'Source: '}</span>
              {isArabic ? sourceAr : source}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
