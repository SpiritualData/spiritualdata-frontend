import React from "react";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import AchievementsSection from "../components/AchievementsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import InitiativeSection from "../components/HeroInitiativeSection";
import ContactSection from "../components/ContactSection";
import ReviewsSection from "../components/ReviewsSection";
import FaqSection from "../components/FaqSection";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      {/* Visualisation quick link section */}
      <section style={{ padding: "56px 20px", background: "linear-gradient(180deg, rgba(0,0,0,0.02), transparent)", textAlign: "center" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", marginBottom: 12 }}>Visualisation</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 18 }}>Explore our interactive galaxy visualisation to discover initiatives, products and impact.</p>
          <Link to="/galaxies" style={{ display: "inline-block", background: "#111", color: "#fff", padding: "12px 20px", borderRadius: 8, textDecoration: "none", fontWeight: 700 }}>
            Open Visualisation
          </Link>
        </div>
      </section>
      <AboutSection />
      <AchievementsSection />
      <WhyChooseUs />
      <InitiativeSection />
      <ContactSection />
      <ReviewsSection />
      <FaqSection />
    </>
  );
};

export default Home;
