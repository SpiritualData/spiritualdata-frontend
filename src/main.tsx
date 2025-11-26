import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// PWA register helper (virtual module provided by vite-plugin-pwa)
// @ts-ignore: virtual module provided by vite-plugin-pwa (vite-plugin-pwa)
// This import is provided at build time by Vite plugin.
import { registerSW } from 'virtual:pwa-register';
import "./index.css";
import theme from "./styles/theme";
import App from "./App";
import { ThemeProvider } from "@mui/material";

// Register the service worker with basic update handling
const updateSW = registerSW({
  onNeedRefresh() {
    // dispatch an event or prompt the user to refresh
    console.log('New content available — please refresh.');
  },
  onOfflineReady() {
    console.log('App is ready to work offline');
  }
});

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);
