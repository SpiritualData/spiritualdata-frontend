import React from "react";
import HeaderSection from "../../components/Initiatives/NestedInitiativesHeader";
import TitleHead from "../../components/Initiatives/TitleHead";
import ScrollStackCards from "../../components/Initiatives/ScrollCards";
import DetailsCards from "../../components/Initiatives/DetailsCards";
import {
  headerData,
  tiltHeadData,
  scrollCardsData,
  wikipediaDetailsData,
} from "../../data/wikipediaAdvocacyData";
const WikipediaAdvocacy: React.FC = () => {
  return (
    <>
      <HeaderSection data={headerData} />
      <TitleHead data={tiltHeadData} />
      <ScrollStackCards data={scrollCardsData} />
      <DetailsCards data={wikipediaDetailsData} />
    </>
  );
};

export default WikipediaAdvocacy;
