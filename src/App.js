import React from "react";
// import { useLocation } from "react-router";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./components/helpers/theme";
// import Navbar from "./components/componentsExtended/Navbar";
// import Footer from "./components/componentsExtended/Footer";
import useClerkRoutes from "./components/hooks/routes";

function App() {
  // const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      {/* {location.pathname !== "/chat" && <Navbar />} */}
      <main>{useClerkRoutes()}</main>
      {/* {location.pathname !== "/chat" && <Footer />} */}
    </ThemeProvider>
  );
}

export default App;
