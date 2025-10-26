import { Route, Routes } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { hotjar } from "react-hotjar";
import { ReactElement } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Research from "../pages/Research";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Chat from "../pages/Chat";
import Donations from "../pages/Donations";
import Policies from "../pages/Policies";
import OutcomeChat from "../pages/OutcomeChat";
import RequireAuthentication from "../auth/RequireAuthentication";
import ProductsOutcomeChat from "../pages/ProductsOutcomeChat";
import ResearchChat from "../pages/ResearchChat";
import GeneralChat from "../pages/GeneralChat";
import MentalHealth from "../pages/MentalHealth";
import Quest from "../pages/Products/Quest";
import AuthPage from "../pages/AuthPage";
import Careers from "../pages/Careers";
import Products from "../pages/Products";
import ConceptAi from "../pages/Products/ConceptAi";
import Initiatives from "../pages/Initiatives";
import EstimatingTruth from "../pages/Initiatives/EstimatingTruth";
import WikipediaAdvocacy from "../pages/Initiatives/WikipediaAdvocacy";
import PsychicAbilityCertification from "../pages/Initiatives/PsychicAbilityCertification";
import Crisis from "../pages/Crisis";
import Change from "../pages/Change";
import OriginStory from "../pages/OriginStory";
import GalaxiesPage from "../pages/Galaxies";// added for GalaxyScene route

interface HotjarConfig {
  id: string;
  sv: number;
}

const hotjarConfig: HotjarConfig = {
  id: import.meta.env.VITE_HOTJAR_ID,
  sv: Number(import.meta.env.VITE_HOTJAR_VERSION) || 6,
};

hotjar.initialize({ id: Number(hotjarConfig.id), sv: hotjarConfig.sv });

const useClerkRoutes = (): ReactElement => {
  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | undefined;

  const isValidClerkKey = (key?: string) => {
    if (!key) return false;
    const trimmed = key.trim();
    // Common placeholder checks: 'your_clerk_publishable_key' or empty/undefined
    if (trimmed.length === 0) return false;
    if (/your[_-]?clerk|your_clerk_publishable_key/i.test(trimmed)) return false;
    return true;
  };

  const routes = (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="donate" element={<Donations />} />
        <Route path="research" element={<Research />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="origin-story" element={<OriginStory />} />
      <Route path="galaxies" element={<GalaxiesPage />} /> {/* added for GalaxyScene route */}
        <Route path="crisis" element={<Crisis />} />
        <Route path="change" element={<Change />} />
        <Route path="careers" element={<Careers />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route
          path="/initiatives/estimating-truth"
          element={<EstimatingTruth />}
        />
        <Route
          path="/initiatives/wikipedia-advocacy"
          element={<WikipediaAdvocacy />}
        />
        <Route
          path="/initiatives/psychic-ability-certification"
          element={<PsychicAbilityCertification />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/sign-in/*" element={<AuthPage />} />
        <Route path="/sign-up/*" element={<AuthPage />} />
        <Route
          path="/cookies"
          element={<Policies fileName="/cookies.html" />}
        />
        <Route
          path="/privacy"
          element={<Policies fileName="/privacy.html" />}
        />
        <Route path="/terms" element={<Policies fileName="/terms.html" />} />
        <Route
          path="/chat"
          element={
            <RequireAuthentication>
              <Chat />
            </RequireAuthentication>
          }
        />
        <Route
          path="/outcome-chat"
          element={
            <RequireAuthentication>
              <OutcomeChat />
            </RequireAuthentication>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/outcome-chat"
          element={<ProductsOutcomeChat />}
        />
        <Route path="/products/research-chat" element={<ResearchChat />} />
        <Route path="/products/general-chat" element={<GeneralChat />} />
        <Route path="/products/mental-health-chat" element={<MentalHealth />} />
        <Route path="/products/quest" element={<Quest />} />
        <Route path="/products/concept-ai" element={<ConceptAi />} />
        {/*  */}
      </Routes>
  );

  if (isValidClerkKey(clerkPubKey)) {
return (
  <ClerkProvider publishableKey={clerkPubKey!}>
    {routes}
  </ClerkProvider>
);
  }

  // If Clerk key is missing or invalid, warn and render routes without ClerkProvider
  // This prevents the app from crashing during development when environment variables are not set.
  // NOTE: Authentication-dependent pages will not work until a valid key is provided.
  // Check your `.env` and set VITE_CLERK_PUBLISHABLE_KEY to your actual publishable key.
  // See: https://dashboard.clerk.com/last-active?path=api-keys
  // eslint-disable-next-line no-console
  console.warn("Clerk publishable key missing or invalid. Rendering without ClerkProvider.");
  return routes;
};

export default useClerkRoutes;
