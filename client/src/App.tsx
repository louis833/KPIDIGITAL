import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import EducationPage from "@/pages/EducationPage";
import DigitalFoundations from "@/pages/DigitalFoundations";
import ClarityCalculator from "@/pages/ClarityCalculator";
import SystemsCalculator from "@/pages/SystemsCalculator";
import GrowthCalculator from "@/pages/GrowthCalculator";
import QuizResultsPage from "@/pages/QuizResultsPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/education/:slug" component={EducationPage} />
      <Route path="/digital-foundations" component={DigitalFoundations} />
      <Route path="/clarity-calculator" component={ClarityCalculator} />
      <Route path="/systems-calculator" component={SystemsCalculator} />
      <Route path="/growth-calculator" component={GrowthCalculator} />
      <Route path="/results/:id" component={QuizResultsPage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
