import React from "react";
import { useLocation } from "react-router";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./components/helpers/theme";
import Navbar from "./components/componentsExtended/Navbar";
import Footer from "./components/componentsExtended/Footer";
import useClerkRoutes from "./components/hooks/routes";

function App() {
  const location = useLocation();
  const locations = ["/chat", "/sign-in", "/sign-up"];

  const partialSimilarityCheck = (locations, pathname) => {
    return locations.some((location) => pathname.startsWith(location));
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      {!partialSimilarityCheck(locations, location.pathname) && <Navbar />}
      <main>{useClerkRoutes()}</main>
      {!partialSimilarityCheck(locations, location.pathname) && <Footer />}
    </ThemeProvider>
  );
}

export default App;
