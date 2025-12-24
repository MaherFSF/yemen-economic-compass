import { useCallback, useRef } from 'react';
import { Button } from './ui/button';
import { Download, FileSpreadsheet, FileText, FileImage, Printer, FileJson } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from './ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

interface DataExportProps {
  data: any[];
  filename: string;
  title?: string;
  chartRef?: React.RefObject<HTMLDivElement>;
  columns?: { key: string; label: string; labelAr?: string }[];
}

export function DataExport({ data, filename, title, chartRef, columns }: DataExportProps) {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const t = {
    export: isArabic ? 'تصدير' : 'Export',
    exportCSV: isArabic ? 'تصدير CSV' : 'Export CSV',
    exportExcel: isArabic ? 'تصدير Excel' : 'Export Excel',
    exportJSON: isArabic ? 'تصدير JSON' : 'Export JSON',
    exportImage: isArabic ? 'تصدير صورة PNG' : 'Export PNG Image',
    print: isArabic ? 'طباعة' : 'Print',
    success: isArabic ? 'تم التصدير بنجاح' : 'Export successful',
    error: isArabic ? 'فشل التصدير' : 'Export failed',
    noData: isArabic ? 'لا توجد بيانات للتصدير' : 'No data to export',
  };

  // Get headers for export
  const getHeaders = useCallback(() => {
    if (columns) {
      return columns.map(col => isArabic && col.labelAr ? col.labelAr : col.label);
    }
    if (data && data.length > 0) {
      return Object.keys(data[0]);
    }
    return [];
  }, [columns, data, isArabic]);

  // Get column keys
  const getKeys = useCallback(() => {
    if (columns) {
      return columns.map(col => col.key);
    }
    if (data && data.length > 0) {
      return Object.keys(data[0]);
    }
    return [];
  }, [columns, data]);

  const exportToCSV = () => {
    if (!data || data.length === 0) {
      toast.error(t.noData);
      return;
    }

    try {
      const headers = getHeaders();
      const keys = getKeys();
      
      // Add BOM for Arabic support in Excel
      const BOM = '\uFEFF';
      
      const csvContent = BOM + [
        headers.join(','),
        ...data.map(row => 
          keys.map(key => {
            const value = row[key];
            if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
              return `"${value.replace(/"/g, '""')}"`;
            }
            return value ?? '';
          }).join(',')
        )
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${filename}_${new Date().toISOString().split('T')[0]}.csv`;
      link.click();
      
      toast.success(t.success);
    } catch (error) {
      toast.error(t.error);
      console.error('CSV export error:', error);
    }
  };

  const exportToJSON = () => {
    if (!data || data.length === 0) {
      toast.error(t.noData);
      return;
    }

    try {
      const exportData = {
        metadata: {
          title: title || filename,
          exportDate: new Date().toISOString(),
          source: isArabic ? 'مرصد الاقتصاد اليمني' : 'Yemen Economic Observatory',
          recordCount: data.length,
          language: language,
        },
        data: data,
      };
      
      const jsonContent = JSON.stringify(exportData, null, 2);
      const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${filename}_${new Date().toISOString().split('T')[0]}.json`;
      link.click();
      
      toast.success(t.success);
    } catch (error) {
      toast.error(t.error);
      console.error('JSON export error:', error);
    }
  };

  const exportToExcel = () => {
    // Export as CSV with proper formatting for Excel
    exportToCSV();
  };

  const exportToImage = async () => {
    if (!chartRef?.current) {
      toast.error(t.error);
      return;
    }

    try {
      // Dynamic import html2canvas
      const html2canvas = (await import('html2canvas')).default;
      
      const canvas = await html2canvas(chartRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });
      
      const link = document.createElement('a');
      link.download = `${filename}_${new Date().toISOString().split('T')[0]}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
      
      toast.success(t.success);
    } catch (error) {
      toast.error(t.error);
      console.error('Image export error:', error);
    }
  };

  const printData = () => {
    if (chartRef?.current) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        const direction = isArabic ? 'rtl' : 'ltr';
        const fontFamily = isArabic ? "'Noto Naskh Arabic', 'Amiri', serif" : "'Inter', sans-serif";
        
        printWindow.document.write(`
          <!DOCTYPE html>
          <html dir="${direction}" lang="${isArabic ? 'ar' : 'en'}">
          <head>
            <meta charset="UTF-8">
            <title>${title || filename}</title>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet">
            <style>
              * { box-sizing: border-box; }
              body { 
                font-family: ${fontFamily};
                padding: 40px;
                direction: ${direction};
                background: white;
                color: #1a1a1a;
                line-height: 1.6;
              }
              h1 { 
                text-align: center; 
                margin-bottom: 30px;
                font-size: 24px;
                color: #0f172a;
                border-bottom: 2px solid #e2e8f0;
                padding-bottom: 15px;
              }
              .content {
                max-width: 100%;
                overflow-x: auto;
              }
              .source {
                text-align: center;
                color: #64748b;
                font-size: 12px;
                margin-top: 30px;
                padding-top: 15px;
                border-top: 1px solid #e2e8f0;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
              }
              th, td {
                border: 1px solid #e2e8f0;
                padding: 12px;
                text-align: ${isArabic ? 'right' : 'left'};
              }
              th {
                background-color: #f8fafc;
                font-weight: 600;
                color: #0f172a;
              }
              tr:nth-child(even) {
                background-color: #f8fafc;
              }
              @media print {
                body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                @page { margin: 1cm; }
              }
            </style>
          </head>
          <body>
            <h1>${title || filename}</h1>
            <div class="content">${chartRef.current.innerHTML}</div>
            <div class="source">
              ${isArabic ? 'المصدر: مرصد الاقتصاد اليمني' : 'Source: Yemen Economic Observatory'} | 
              ${new Date().toLocaleDateString(isArabic ? 'ar-YE' : 'en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </body>
          </html>
        `);
        printWindow.document.close();
        setTimeout(() => printWindow.print(), 500);
      }
    } else {
      window.print();
    }
    toast.success(isArabic ? 'جاهز للطباعة' : 'Ready to print');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          {t.export}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        {title && (
          <>
            <DropdownMenuLabel className="text-xs text-muted-foreground">{title}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem onClick={exportToCSV} className="cursor-pointer">
          <FileSpreadsheet className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
          {t.exportCSV}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportToExcel} className="cursor-pointer">
          <FileSpreadsheet className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
          {t.exportExcel}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportToJSON} className="cursor-pointer">
          <FileJson className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
          {t.exportJSON}
        </DropdownMenuItem>
        {chartRef && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={exportToImage} className="cursor-pointer">
              <FileImage className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
              {t.exportImage}
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={printData} className="cursor-pointer">
          <Printer className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
          {t.print}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Utility function to format Arabic numbers
export function formatArabicNumber(num: number): string {
  return num.toLocaleString('ar-EG');
}

// Utility function to format currency for Arabic
export function formatArabicCurrency(num: number, currency: string = 'YER'): string {
  const formatted = num.toLocaleString('ar-EG');
  return currency === 'YER' ? `${formatted} ر.ي` : `${formatted} ${currency}`;
}

// Utility function to format percentage for Arabic
export function formatArabicPercent(num: number): string {
  return `${num.toLocaleString('ar-EG')}%`;
}

// Utility function to format date for Arabic
export function formatArabicDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('ar-YE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
