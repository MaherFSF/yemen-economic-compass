import { Button } from './ui/button';
import { Download, FileSpreadsheet, FileText } from 'lucide-react';
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
}

export default function DataExport({ data, filename, title }: DataExportProps) {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const exportToCSV = () => {
    if (!data || data.length === 0) {
      toast.error(isArabic ? 'لا توجد بيانات للتصدير' : 'No data to export');
      return;
    }

    try {
      // Get headers from first object
      const headers = Object.keys(data[0]);
      
      // Create CSV content
      const csvContent = [
        headers.join(','),
        ...data.map(row => 
          headers.map(header => {
            const value = row[header];
            // Handle values with commas or quotes
            if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
              return `"${value.replace(/"/g, '""')}"`;
            }
            return value;
          }).join(',')
        )
      ].join('\n');

      // Create blob and download
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${filename}_${new Date().toISOString().split('T')[0]}.csv`;
      link.click();
      
      toast.success(isArabic ? 'تم تصدير البيانات بنجاح' : 'Data exported successfully');
    } catch (error) {
      toast.error(isArabic ? 'فشل تصدير البيانات' : 'Failed to export data');
    }
  };

  const exportToJSON = () => {
    if (!data || data.length === 0) {
      toast.error(isArabic ? 'لا توجد بيانات للتصدير' : 'No data to export');
      return;
    }

    try {
      const jsonContent = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonContent], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${filename}_${new Date().toISOString().split('T')[0]}.json`;
      link.click();
      
      toast.success(isArabic ? 'تم تصدير البيانات بنجاح' : 'Data exported successfully');
    } catch (error) {
      toast.error(isArabic ? 'فشل تصدير البيانات' : 'Failed to export data');
    }
  };

  const exportToExcel = () => {
    // For now, export as CSV (Excel can open CSV files)
    // In future, can integrate xlsx library for true Excel format
    exportToCSV();
  };

  const printData = () => {
    window.print();
    toast.success(isArabic ? 'جاهز للطباعة' : 'Ready to print');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          {isArabic ? 'تصدير' : 'Export'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {title && (
          <>
            <DropdownMenuLabel>{title}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem onClick={exportToCSV} className="cursor-pointer">
          <FileSpreadsheet className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
          {isArabic ? 'تصدير CSV' : 'Export CSV'}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportToExcel} className="cursor-pointer">
          <FileSpreadsheet className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
          {isArabic ? 'تصدير Excel' : 'Export Excel'}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportToJSON} className="cursor-pointer">
          <FileText className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
          {isArabic ? 'تصدير JSON' : 'Export JSON'}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={printData} className="cursor-pointer">
          <FileText className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
          {isArabic ? 'طباعة' : 'Print'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
