import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

import Home from "../pages/Home";
import About from "../pages/About";
import DataDiscovery from "../pages/DataDiscovery";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Chat from "../pages/Chat";
import LogIn from "../pages/Login";
import Signup from "../pages/Signup";

const useClerkRoutes = () => {
  const navigate = useNavigate();

  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="data-discovery" element={<DataDiscovery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/sign-in/*" element={<LogIn />} />
        <Route path="/sign-up/*" element={<Signup />} />
        <Route
          path="/chat"
          element={
            <RequireAuthentication>
              <Chat />
            </RequireAuthentication>
          }
        />
      </Routes>
    </ClerkProvider>
  );
};

const RequireAuthentication = ({ children }) => {
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
