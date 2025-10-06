import React from "react";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import AchievementsSection from "../components/AchievementsSection";
import WhyChooseUs from "../components/WhyShooseUs";
import InitiativeSection from "../components/HeroInitiativeSection";
import ContactSection from "../components/ContactSection";
import ReviewsSection from "../components/ReviewsSection";
import FaqSection from "../components/FaqSection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
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
