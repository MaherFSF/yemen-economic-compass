import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { SearchProvider } from "./contexts/SearchContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Charts from "./pages/Charts";
import StoryPage from "./pages/StoryPage";
import ResearchLibrary from "./pages/ResearchLibrary";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import Timeline from "./pages/Timeline";
import About from "./pages/About";
import EconomicCrisis from "./pages/EconomicCrisis";
import CurrencyWar from "./pages/CurrencyWar";
import EventsTimeline from "./pages/EventsTimeline";
import MainCities from "./pages/MainCities";
import InternationalReports from "./pages/InternationalReports";
import MicrofinanceObservatory from "./pages/MicrofinanceObservatory";
import CBYAdenTracker from "./pages/CBYAdenTracker";
import CBYSanaaTracker from "./pages/CBYSanaaTracker";
import CommercialBanksHub from "./pages/CommercialBanksHub";
import FinancialLiterature from "./pages/FinancialLiterature";
import FinancialCalculators from "./pages/FinancialCalculators";
import DataVisualization from "./pages/DataVisualization";
import StakeholderHub from "./pages/StakeholderHub";
import KeyStatistics from "./pages/KeyStatistics";
import FinancialTransformation from "./pages/FinancialTransformation";
import FinancialPowerMap from "./pages/FinancialPowerMap";
import CompassDashboard from "./pages/CompassDashboard";
import AdvancedVisualizations from "./pages/AdvancedVisualizations";
import AboutCauseWay from "./pages/AboutCauseWay";
import KayanPlatform from "./pages/KayanPlatform";
import SanctionsTracker from "./pages/SanctionsTracker";
import ScenarioForecasting from "./pages/ScenarioForecasting";
import PolicyRecommendations from "./pages/PolicyRecommendations";
import StatisticalIndicators from "./pages/StatisticalIndicators";
import NewsAggregator from "./pages/NewsAggregator";
import FileManager from "./pages/FileManager";
import ExecutiveDashboard from "./pages/ExecutiveDashboard";
import CBYDashboard from "./pages/CBYDashboard";
import SaudiArabiaPage from "./pages/SaudiArabiaPage";
import WorldBankJourney from "./pages/WorldBankJourney";
import FinancialFlowsNetwork from "./pages/FinancialFlowsNetwork";
import HayelSaeedAnam from "./pages/stakeholders/HayelSaeedAnam";
import YouthEconomy from "./pages/YouthEconomy";
import Investment from "./pages/Investment";
import ClimateFinance from "./pages/ClimateFinance";
import Sitemap from "./pages/Sitemap";
import BanksDatabase from "./pages/BanksDatabase";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/overview"} component={Overview} />
      <Route path={"/charts"} component={Charts} />
      <Route path={"/story"} component={StoryPage} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/research" component={ResearchLibrary} />
      <Route path="/analytics" component={AnalyticsDashboard} />
      <Route path={"/dashboard"} component={Timeline} />
      <Route path={"/about"} component={About} />
      <Route path={"/economic-crisis"} component={EconomicCrisis} />
      <Route path={"/currency-war"} component={CurrencyWar} />
      <Route path={"/events"} component={EventsTimeline} />
      <Route path={"/cities"} component={MainCities} />
      <Route path={"/reports"} component={InternationalReports} />
      <Route path={"/microfinance"} component={MicrofinanceObservatory} />
      <Route path={"/cby-aden"} component={CBYAdenTracker} />
      <Route path={"/cby-sanaa"} component={CBYSanaaTracker} />
      <Route path={"/banks"} component={CommercialBanksHub} />
      <Route path={"/literature"} component={FinancialLiterature} />
      <Route path={"/calculators"} component={FinancialCalculators} />
      <Route path={"/data-viz"} component={DataVisualization} />
      <Route path={"/stakeholders"} component={StakeholderHub} />
        <Route path="/stakeholders/saudi-arabia" component={SaudiArabiaPage} />
        <Route path="/stakeholders/hayel-saeed-anam" component={HayelSaeedAnam} />
          <Route path="/world-bank" component={WorldBankJourney} />
      <Route path="/financial-flows" component={FinancialFlowsNetwork} />
      <Route path="/sanctions" component={SanctionsTracker} />
      <Route path="/key-statistics" component={KeyStatistics} />
      <Route path="/transformation" component={FinancialTransformation} />
      <Route path="/power-map" component={FinancialPowerMap} />
      <Route path="/compass" component={CompassDashboard} />
      <Route path="/advanced-viz" component={AdvancedVisualizations} />
      <Route path="/about-causeway" component={AboutCauseWay} />
      <Route path="/kayan" component={KayanPlatform} />
      <Route path={"/forecasting"} component={ScenarioForecasting} />
      <Route path={"/policy"} component={PolicyRecommendations} />
      <Route path={"/indicators"} component={StatisticalIndicators} />
      <Route path={"/news"} component={NewsAggregator} />
      <Route path={"/files"} component={FileManager} />
      <Route path={"/executive-dashboard"} component={ExecutiveDashboard} />
      <Route path={"/cby-dashboard"} component={CBYDashboard} />
      <Route path={"/youth-economy"} component={YouthEconomy} />
      <Route path={"/investment"} component={Investment} />
      <Route path={"/climate-finance"} component={ClimateFinance} />
      <Route path={"/sitemap"} component={Sitemap} />
      <Route path={"/banks-database"} component={BanksDatabase} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <SearchProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <Router />
              </main>
              <Footer />
            </div>
          </TooltipProvider>
        </LanguageProvider>
        </SearchProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
