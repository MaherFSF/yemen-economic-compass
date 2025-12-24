import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Fuel, 
  TrendingUp, 
  TrendingDown, 
  Download, 
  FileSpreadsheet,
  FileText,
  Image as ImageIcon,
  AlertTriangle,
  Info
} from 'lucide-react';
import { getLatestFuelPrice, getFuelComparison, getFuelPriceTrend } from '@/data/feeds/fuel_prices';
import { useRef, useCallback } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface FuelDashboardProps {
  compact?: boolean;
}

export default function FuelDashboard({ compact = false }: FuelDashboardProps) {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const chartRef = useRef<HTMLDivElement>(null);
  
  const adenFuel = getLatestFuelPrice('aden');
  const sanaaFuel = getLatestFuelPrice('sanaa');
  const comparison = getFuelComparison();
  
  const t = {
    title: isArabic ? 'أسعار الوقود' : 'Fuel Prices',
    subtitle: isArabic ? 'مقارنة أسعار الوقود بين عدن وصنعاء' : 'Fuel price comparison between Aden and Sana\'a',
    petrol: isArabic ? 'البنزين' : 'Petrol',
    diesel: isArabic ? 'الديزل' : 'Diesel',
    lpg: isArabic ? 'غاز الطبخ' : 'LPG (12kg)',
    aden: isArabic ? 'عدن' : 'Aden',
    sanaa: isArabic ? 'صنعاء' : 'Sana\'a',
    gap: isArabic ? 'الفجوة' : 'Gap',
    perLiter: isArabic ? 'ريال/لتر' : 'YER/L',
    perCylinder: isArabic ? 'ريال/أسطوانة' : 'YER/cyl',
    export: isArabic ? 'تصدير' : 'Export',
    exportCSV: isArabic ? 'تصدير CSV' : 'Export CSV',
    exportExcel: isArabic ? 'تصدير Excel' : 'Export Excel',
    exportPDF: isArabic ? 'تصدير PDF' : 'Export PDF',
    exportImage: isArabic ? 'تصدير صورة' : 'Export Image',
    source: isArabic ? 'المصدر: OCHA, WFP' : 'Source: OCHA, WFP',
    lastUpdated: isArabic ? 'آخر تحديث: ديسمبر 2025' : 'Last updated: December 2025',
    warning: isArabic ? 'فجوة سعرية كبيرة بين المنطقتين' : 'Significant price gap between zones',
  };

  // Export functions
  const exportToCSV = useCallback(() => {
    const headers = ['Fuel Type', 'Aden (YER)', 'Sana\'a (YER)', 'Gap (%)'];
    const rows = [
      ['Petrol', adenFuel.petrol, sanaaFuel.petrol, comparison.petrol.gap],
      ['Diesel', adenFuel.diesel, sanaaFuel.diesel, comparison.diesel.gap],
      ['LPG (12kg)', adenFuel.lpg, sanaaFuel.lpg, comparison.lpg.gap],
    ];
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'yemen_fuel_prices.csv';
    link.click();
  }, [adenFuel, sanaaFuel, comparison]);

  const exportToJSON = useCallback(() => {
    const data = {
      exportDate: new Date().toISOString(),
      source: 'Yemen Economic Observatory - OCHA, WFP Market Monitoring',
      data: {
        aden: adenFuel,
        sanaa: sanaaFuel,
        comparison: comparison,
      }
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'yemen_fuel_prices.json';
    link.click();
  }, [adenFuel, sanaaFuel, comparison]);

  const fuelTypes = [
    { 
      key: 'petrol' as const, 
      label: t.petrol, 
      unit: t.perLiter,
      icon: '⛽',
      aden: adenFuel.petrol,
      sanaa: sanaaFuel.petrol,
      gap: comparison.petrol.gap,
    },
    { 
      key: 'diesel' as const, 
      label: t.diesel, 
      unit: t.perLiter,
      icon: '🛢️',
      aden: adenFuel.diesel,
      sanaa: sanaaFuel.diesel,
      gap: comparison.diesel.gap,
    },
    { 
      key: 'lpg' as const, 
      label: t.lpg, 
      unit: t.perCylinder,
      icon: '🔥',
      aden: adenFuel.lpg,
      sanaa: sanaaFuel.lpg,
      gap: comparison.lpg.gap,
    },
  ];

  if (compact) {
    return (
      <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Fuel className="w-5 h-5 text-orange-500" />
              {t.title}
            </CardTitle>
            <Badge variant="outline" className="text-orange-500 border-orange-500/30">
              {isArabic ? 'مباشر' : 'LIVE'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            {fuelTypes.map((fuel) => (
              <div key={fuel.key} className="text-center p-3 bg-white/5 rounded-lg">
                <div className="text-2xl mb-1">{fuel.icon}</div>
                <div className="text-xs text-white/60 mb-1">{fuel.label}</div>
                <div className="text-lg font-bold text-orange-400">
                  {fuel.aden.toLocaleString()}
                </div>
                <div className="text-xs text-red-400">+{fuel.gap}%</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden" ref={chartRef}>
      <CardHeader className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-b border-orange-500/20">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              <Fuel className="w-6 h-6 text-orange-500" />
              {t.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{t.subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-orange-500 border-orange-500/30">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              {isArabic ? 'مباشر' : 'LIVE'}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  {t.export}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={exportToCSV}>
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  {t.exportCSV}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={exportToJSON}>
                  <FileText className="w-4 h-4 mr-2" />
                  JSON
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        {/* Warning Banner */}
        <div className="flex items-center gap-2 p-3 mb-6 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
          <span className="text-sm text-amber-600 dark:text-amber-400">{t.warning}</span>
        </div>

        {/* Fuel Prices Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {fuelTypes.map((fuel) => (
            <div 
              key={fuel.key} 
              className="p-5 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{fuel.icon}</span>
                  <span className="font-semibold">{fuel.label}</span>
                </div>
                <Badge 
                  variant="destructive" 
                  className="bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20"
                >
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +{fuel.gap}%
                </Badge>
              </div>
              
              <div className="space-y-3">
                {/* Aden Price */}
                <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                  <span className="text-sm font-medium">{t.aden}</span>
                  <div className="text-right">
                    <div className="text-xl font-bold text-red-600 dark:text-red-400">
                      {fuel.aden.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">{fuel.unit}</div>
                  </div>
                </div>
                
                {/* Sana'a Price */}
                <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                  <span className="text-sm font-medium">{t.sanaa}</span>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600 dark:text-green-400">
                      {fuel.sanaa.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">{fuel.unit}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Source Attribution */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Info className="w-4 h-4" />
            {t.source}
          </div>
          <div className="text-xs text-muted-foreground">
            {t.lastUpdated}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
