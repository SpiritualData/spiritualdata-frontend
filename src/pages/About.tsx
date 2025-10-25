import React from "react";
import PageHeader from "../components/PageHeader";
import banner from "../assets/images/about/banner.webp";
import AboutHero from "../components/About/AboutHero";
import WhyWeStarted from "../components/About/WhyWeStarted";
import GuidingPrinciples from "../components/About/GuidingPrinciples";
import gpbg from "../assets/images/about/gpbg.webp";
import SocialImpact from "../components/About/SocialImpact";
import BoardMembers from "../components/About/BoardMembers";

const About: React.FC = () => {
  return (
    <>
      <PageHeader image={banner} page={"ABOUT US"} sx={{ mb: 4 }} />
      <AboutHero />
      <WhyWeStarted />
      <GuidingPrinciples backgroundImage={gpbg} />
      <BoardMembers />
      <SocialImpact />
    </>
  );
};

export default About;
