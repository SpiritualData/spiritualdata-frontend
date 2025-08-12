import React from "react";
import PageHeader from "../components/PageHeader";
import banner from "../assets/images/About/banner.webp";
import AboutHero from "../components/About/AboutHero";
import WhyWeStarted from "../components/About/WhyWeStarted";
import GuidingPrinciples from "../components/About/GuidingPrinciples";
import SocialImpact from "../components/About/SocialImpact";
import WhereWeAreHeading from "../components/About/WhereWeAreHeading";
import BoardMembers from "../components/About/BoarMembers";

const About: React.FC = () => {
  return (
    <>
      <PageHeader image={banner} page={"ABOUT"} sx={{ mb: 4 }} />
      <AboutHero />
      <WhyWeStarted />
      <GuidingPrinciples />
      <SocialImpact />
      <BoardMembers />
      <WhereWeAreHeading />
    </>
  );
};

export default About;
