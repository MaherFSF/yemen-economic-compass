import React, { createContext, useContext, useState, useCallback } from 'react';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
  relevance: number;
}

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: SearchResult[];
  isSearching: boolean;
  performSearch: (query: string) => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Comprehensive search index of all platform content
const searchIndex: SearchResult[] = [
  // Dashboard Pages
  { title: "Executive Dashboard", description: "KPIs for donors and international institutions", url: "/executive-dashboard", category: "Dashboards", relevance: 0 },
  { title: "CBY Dashboard", description: "Central Bank of Yemen monitoring and analysis", url: "/cby-dashboard", category: "Dashboards", relevance: 0 },
  { title: "Compass Dashboard", description: "Comprehensive economic overview", url: "/compass", category: "Dashboards", relevance: 0 },
  
  // Data & Analysis
  { title: "Key Statistics", description: "Essential economic indicators and metrics", url: "/key-statistics", category: "Data", relevance: 0 },
  { title: "Financial Transformation", description: "Analysis of Yemen's financial system evolution", url: "/transformation", category: "Analysis", relevance: 0 },
  { title: "Power Map", description: "Financial power dynamics and stakeholder relationships", url: "/power-map", category: "Analysis", relevance: 0 },
  { title: "Advanced Visualizations", description: "Interactive charts and data visualizations", url: "/advanced-viz", category: "Data", relevance: 0 },
  { title: "Charts", description: "Economic and financial charts", url: "/charts", category: "Data", relevance: 0 },
  { title: "Statistical Indicators", description: "Comprehensive statistical data", url: "/indicators", category: "Data", relevance: 0 },
  
  // Crisis & Economy
  { title: "Economic Crisis", description: "Analysis of Yemen's economic crisis", url: "/economic-crisis", category: "Analysis", relevance: 0 },
  { title: "Currency War", description: "Exchange rate crisis and currency dynamics", url: "/currency-war", category: "Analysis", relevance: 0 },
  { title: "Youth Economy", description: "Youth employment and economic participation", url: "/youth-economy", category: "Analysis", relevance: 0 },
  { title: "Investment", description: "Investment climate and opportunities", url: "/investment", category: "Analysis", relevance: 0 },
  { title: "Climate Finance", description: "Green economy and climate financing", url: "/climate-finance", category: "Analysis", relevance: 0 },
  
  // Stakeholders
  { title: "Stakeholder Hub", description: "Central hub for all stakeholder profiles", url: "/stakeholders", category: "Stakeholders", relevance: 0 },
  { title: "Saudi Arabia", description: "Saudi Arabia's role in Yemen's economy", url: "/stakeholders/saudi-arabia", category: "Stakeholders", relevance: 0 },
  { title: "Hayel Saeed Anam", description: "Major Yemeni business conglomerate", url: "/stakeholders/hayel-saeed-anam", category: "Stakeholders", relevance: 0 },
  { title: "World Bank Journey", description: "World Bank's engagement in Yemen", url: "/world-bank", category: "Stakeholders", relevance: 0 },
  { title: "Financial Flows Network", description: "Network of financial flows and relationships", url: "/financial-flows", category: "Stakeholders", relevance: 0 },
  
  // Banking
  { title: "Commercial Banks", description: "Overview of Yemen's commercial banking sector", url: "/banks", category: "Banking", relevance: 0 },
  { title: "Microfinance", description: "Microfinance institutions and services", url: "/microfinance", category: "Banking", relevance: 0 },
  { title: "CBY Aden", description: "Central Bank of Yemen - Aden branch", url: "/cby-aden", category: "Banking", relevance: 0 },
  { title: "CBY Sana'a", description: "Central Bank of Yemen - Sana'a branch", url: "/cby-sanaa", category: "Banking", relevance: 0 },
  
  // Context & History
  { title: "Timeline", description: "Historical timeline of economic events", url: "/timeline", category: "History", relevance: 0 },
  { title: "Events", description: "Key economic and political events", url: "/events", category: "History", relevance: 0 },
  { title: "Main Cities", description: "Economic profiles of major Yemeni cities", url: "/cities", category: "Geography", relevance: 0 },
  
  // Reports & Research
  { title: "International Reports", description: "Reports from World Bank, IMF, UN", url: "/reports", category: "Research", relevance: 0 },
  { title: "Research Library", description: "Comprehensive research collection", url: "/literature", category: "Research", relevance: 0 },
  { title: "News Aggregator", description: "Latest economic news and updates", url: "/news", category: "Resources", relevance: 0 },
  
  // Policy & Forecasting
  { title: "Policy Recommendations", description: "Evidence-based policy recommendations", url: "/policy", category: "Policy", relevance: 0 },
  { title: "Scenario Forecasting", description: "Economic scenario modeling", url: "/forecasting", category: "Analysis", relevance: 0 },
  { title: "Sanctions Tracker", description: "Economic sanctions monitoring", url: "/sanctions", category: "Analysis", relevance: 0 },
  
  // Tools
  { title: "Financial Calculators", description: "Economic and financial calculation tools", url: "/calculators", category: "Tools", relevance: 0 },
  { title: "File Manager", description: "Document and file management", url: "/files", category: "Tools", relevance: 0 },
  { title: "Analytics Dashboard", description: "Platform usage analytics", url: "/analytics", category: "Tools", relevance: 0 },
  
  // About
  { title: "About Platform", description: "About Yemen Economic Compass", url: "/about", category: "About", relevance: 0 },
  { title: "Full Story", description: "Complete narrative of Yemen's economic transformation", url: "/story", category: "About", relevance: 0 },
  { title: "Overview", description: "Platform overview and introduction", url: "/overview", category: "About", relevance: 0 },
  { title: "CauseWay Foundation", description: "About CauseWay Foundation", url: "/about-causeway", category: "About", relevance: 0 },
  { title: "Kayan Platform", description: "Kayan economic platform", url: "/kayan", category: "About", relevance: 0 },
  { title: "Sitemap", description: "Complete site navigation map", url: "/sitemap", category: "Navigation", relevance: 0 }
];

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = useCallback((query: string) => {
    if (!query || query.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay for better UX
    setTimeout(() => {
      const lowerQuery = query.toLowerCase().trim();
      const words = lowerQuery.split(' ');
      
      // Calculate relevance score for each result
      const results = searchIndex.map(item => {
        let relevance = 0;
        const searchText = `${item.title} ${item.description} ${item.category}`.toLowerCase();
        
        // Exact title match gets highest score
        if (item.title.toLowerCase().includes(lowerQuery)) {
          relevance += 100;
        }
        
        // Partial matches in title
        words.forEach(word => {
          if (item.title.toLowerCase().includes(word)) {
            relevance += 50;
          }
        });
        
        // Matches in description
        words.forEach(word => {
          if (item.description.toLowerCase().includes(word)) {
            relevance += 20;
          }
        });
        
        // Category match
        if (item.category.toLowerCase().includes(lowerQuery)) {
          relevance += 30;
        }
        
        // Full text search
        if (searchText.includes(lowerQuery)) {
          relevance += 10;
        }
        
        return { ...item, relevance };
      });
      
      // Filter and sort by relevance
      const filteredResults = results
        .filter(item => item.relevance > 0)
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, 10); // Top 10 results
      
      setSearchResults(filteredResults);
      setIsSearching(false);
    }, 300);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  }, []);

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      searchResults,
      isSearching,
      performSearch,
      clearSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider');
  }
  return context;
}
