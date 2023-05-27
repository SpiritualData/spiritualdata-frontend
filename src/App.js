import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/componentsExtended/Navbar";
import LogIn from "./components/pages/Login";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import DataDiscovery from "./components/pages/DataDiscovery";
import LandingPage from "./components/pages/LandingPage";
import Contact from "./components/pages/Contact";

function App() {
  
    const routes = (
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<Home />} />
        <Route path="data-discovery" element={<DataDiscovery/>} />
        <Route path="blog" element={<Home />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="about" element={<About/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );

  return (
  <>
  <Navbar />
  <main>
          {routes}
      </main>
  </>);
}

export default App;
