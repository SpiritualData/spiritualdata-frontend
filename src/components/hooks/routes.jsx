import { useEffect, useRef } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import { hotjar } from "react-hotjar";

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

hotjar.initialize(
  process.env.REACT_APP_HOTJAR_ID,
  process.env.REACT_APP_HOTJAR_VERSION || 6
);
export const useRefresh = () => {
  const refreshedRef = useRef(0); // use const

  useEffect(() => {
    // Timeout to allow Clerk to load its elements
    const timer = setTimeout(() => {
      // Query for a Clerk-specific DOM element or class
      const clerkElement = document.querySelector(".cl-rootBox");

      // If Clerk elements are not found, reload the page
      if (!clerkElement && refreshedRef.current < 1) {
        // use current property
        console.log("Reloading to get Clerk log in to appear");
        window.location.reload();
        refreshedRef.current += 1;
      }
    }, 1000); // 1000 milliseconds = 1 second

    // Cleanup
    return () => clearTimeout(timer);
  }, []);
};

const useClerkRoutes = () => {
  const navigate = useNavigate();

  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
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
      </Routes>
    </ClerkProvider>
  );
};

const RequireAuthentication = ({ children }) => {
  useRefresh();
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Navigate to={"/sign-in"} />
      </SignedOut>
    </>
  );
};

export default useClerkRoutes;
