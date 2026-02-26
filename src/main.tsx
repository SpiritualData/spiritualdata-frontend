import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "./index.css";
import theme from "./styles/theme";
import App from "./App";
import { CookieConsentProvider } from "./components/CookieConsent";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <CookieConsentProvider>
          <App />
        </CookieConsentProvider>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);
