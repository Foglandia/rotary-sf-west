import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
import Leadership from "@/pages/Leadership";
import JoinUs from "@/pages/JoinUs";
import Activities from "@/pages/Activities";
import ActivitiesCalendar from "@/pages/ActivitiesCalendar";
import ActivityDetail from "@/pages/ActivityDetail";
import SocialEvents from "@/pages/SocialEvents";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-use" component={TermsOfUse} />
      <Route path="/leadership" component={Leadership} />
      <Route path="/join-us" component={JoinUs} />
      <Route path="/activities" component={Activities} />
      <Route path="/activities-calendar" component={ActivitiesCalendar} />
      <Route path="/activity/:id" component={ActivityDetail} />
      <Route path="/social-events" component={SocialEvents} />
      <Route path="/membership" component={JoinUs} />
      
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
