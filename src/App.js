import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/componentsExtended/Navbar";
import LogIn from "./components/pages/Login";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import DataDiscovery from "./components/pages/DataDiscovery";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import Signup from "./components/pages/Signup";
import Footer from "./components/componentsExtended/Footer";
import theme from "./components/helpers/theme";
import NotFound from "./components/pages/NotFound";

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<Signup />} />
      <Route path="data-discovery" element={<DataDiscovery />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main>{routes}</main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
