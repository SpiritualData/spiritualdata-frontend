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
import LogIn from "../pages/Login";
import Signup from "../pages/Signup";
import Donations from "../pages/Donations";
import Policies from "../pages/Policies";
import OutcomeChat from "../pages/OutcomeChat";
import RequireAuthentication from "../auth/RequireAuthentication";
import Products from "../pages/Products";
import ProductsOutcomeChat from "../pages/ProductsOutcomeChat";
import ResearchChat from "../pages/ResearchChat";
import GeneralChat from "../pages/GeneralChat";
import MentalHealth from "../pages/MentalHealth";
import Quest from "../pages/Products/Quest";

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
        <Route path="donations" element={<Donations />} />
        <Route path="data-discovery" element={<DataDiscovery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/sign-in/*" element={<LogIn />} />
        <Route path="/sign-up/*" element={<Signup />} />
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
        {/* PlaceHolder Pages Routes */}
        <Route path="/products" element={<Products />} />
        {/* To be replaced later with dynamic routing*/}
        <Route
          path="/products/outcome-chat"
          element={<ProductsOutcomeChat />}
        />
        <Route path="/products/research-chat" element={<ResearchChat />} />
        <Route path="/products/general-chat" element={<GeneralChat />} />
        <Route path="/products/mental-health-chat" element={<MentalHealth />} />
        <Route path="/products/quest" element={<Quest />} />

        {/*  */}
      </Routes>
    </ClerkProvider>
  );
};

export default useClerkRoutes;
