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

  return (
    <ThemeProvider theme={theme}>
      {!locations.includes(location.pathname) && <Navbar />}
      <main>{useClerkRoutes()}</main>
      {!locations.includes(location.pathname) && <Footer />}
    </ThemeProvider>
  );
}

export default App;
