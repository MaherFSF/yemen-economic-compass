import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar'); // Arabic as default

  useEffect(() => {
    // Set document direction and language based on selected language
    const isArabic = language === 'ar';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Store language preference
    localStorage.setItem('preferred-language', language);
  }, [language]);
  
  // Load saved language preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('preferred-language') as Language | null;
    if (saved && (saved === 'ar' || saved === 'en')) {
      setLanguage(saved);
    }
  }, []);

  const t = (key: string) => {
    // This is a placeholder - in production, use proper i18n library
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
