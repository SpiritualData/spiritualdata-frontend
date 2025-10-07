import { Route, Routes } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { hotjar } from "react-hotjar";
import { ReactElement } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import DataDiscovery from "../pages/DataDiscovery";
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
  const clerkPubKey: string = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="donate" element={<Donations />} />
        <Route path="data-discovery" element={<DataDiscovery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
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
    </ClerkProvider>
  );
};

export default useClerkRoutes;
