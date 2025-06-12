import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material";
import theme from "./styles/theme";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import useClerkRoutes from "./hooks/routes";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  const location = useLocation();

  const hiddenRoutes = ["/outcome-chat", "/chat", "/sign-in", "/sign-up"];

  const shouldHideElements = (routes: string[], pathname: string): boolean => {
    return routes.some((route) => pathname.startsWith(route));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme as Theme}>
      {!shouldHideElements(hiddenRoutes, location.pathname) && <Navbar />}
      <div id="back-to-top-anchor"></div>
      <main>{useClerkRoutes()}</main>
      {!shouldHideElements(hiddenRoutes, location.pathname) && <Footer />}
      {!shouldHideElements(hiddenRoutes, location.pathname) && <ScrollToTop />}
    </ThemeProvider>
  );
};

export default App;
