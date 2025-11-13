import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Charts from "./pages/Charts";
import FMIProject from "./pages/FMIProject";
import StoryPage from "./pages/StoryPage";
import Timeline from "./pages/Timeline";
import About from "./pages/About";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path={"/"} component={LandingPage} />
          <Route path={"/home"} component={Home} />
          <Route path={"/overview"} component={Overview} />
          <Route path={"/charts"} component={Charts} />
          <Route path={"/story"} component={StoryPage} />
          <Route path={"/timeline"} component={Timeline} />
          <Route path={"/dashboard"} component={Timeline} />
          <Route path={"/about"} component={About} />
          <Route path={"/404"} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
