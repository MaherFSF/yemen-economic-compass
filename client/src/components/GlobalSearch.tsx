import { useEffect, useState } from 'react';
import { useSearch } from '@/contexts/SearchContext';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Search, FileText, BarChart3, Users, BookOpen, Map, TrendingUp } from 'lucide-react';
import { useLocation } from 'wouter';

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const { searchQuery, setSearchQuery, searchResults, isSearching, performSearch, clearSearch } = useSearch();
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const isArabic = language === 'ar';

  // Keyboard shortcut: Cmd+K or Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    performSearch(value);
  };

  const handleSelect = (url: string) => {
    setLocation(url);
    setOpen(false);
    clearSearch();
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Dashboards': return BarChart3;
      case 'Data': return FileText;
      case 'Analysis': return TrendingUp;
      case 'Stakeholders': return Users;
      case 'Research': return BookOpen;
      case 'Geography': return Map;
      default: return FileText;
    }
  };

  // Group results by category
  const groupedResults = searchResults.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, typeof searchResults>);

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        <Search className="h-4 w-4" />
        <span className="hidden md:inline">
          {isArabic ? 'بحث...' : 'Search...'}
        </span>
        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Search Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder={isArabic ? 'ابحث في المنصة...' : 'Search platform...'}
          value={searchQuery}
          onValueChange={handleSearch}
        />
        <CommandList>
          {isSearching && (
            <div className="py-6 text-center text-sm text-muted-foreground">
              {isArabic ? 'جاري البحث...' : 'Searching...'}
            </div>
          )}
          
          {!isSearching && searchQuery && searchResults.length === 0 && (
            <CommandEmpty>
              {isArabic ? 'لم يتم العثور على نتائج' : 'No results found'}
            </CommandEmpty>
          )}

          {!isSearching && Object.keys(groupedResults).map((category) => {
            const Icon = getCategoryIcon(category);
            return (
              <CommandGroup key={category} heading={category}>
                {groupedResults[category].map((result) => (
                  <CommandItem
                    key={result.url}
                    value={result.url}
                    onSelect={() => handleSelect(result.url)}
                    className="cursor-pointer"
                  >
                    <Icon className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                    <div className="flex-1">
                      <div className="font-medium">{result.title}</div>
                      <div className="text-xs text-muted-foreground">{result.description}</div>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            );
          })}

          {!searchQuery && (
            <CommandGroup heading={isArabic ? 'الصفحات الشائعة' : 'Popular Pages'}>
              <CommandItem onSelect={() => handleSelect('/compass')}>
                <BarChart3 className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                {isArabic ? 'لوحة البوصلة' : 'Compass Dashboard'}
              </CommandItem>
              <CommandItem onSelect={() => handleSelect('/key-statistics')}>
                <FileText className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                {isArabic ? 'الإحصاءات الرئيسية' : 'Key Statistics'}
              </CommandItem>
              <CommandItem onSelect={() => handleSelect('/stakeholders')}>
                <Users className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                {isArabic ? 'أصحاب المصلحة' : 'Stakeholders'}
              </CommandItem>
              <CommandItem onSelect={() => handleSelect('/story')}>
                <BookOpen className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                {isArabic ? 'القصة الكاملة' : 'Full Story'}
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
