import React from "react";
import HeaderSection from "../../components/Initiatives/NestedInitiativesHeader";
import TitleHead from "../../components/Initiatives/TitleHead";
import ScrollStackCards from "../../components/Initiatives/ScrollCards";
import DetailsCards from "../../components/Initiatives/DetailsCards";
import {
  headerData,
  tiltHeadData,
  scrollCardsData,
  estimatingTruthDetailsData,
} from "../../data/estimatingTruthData";
const EstimatingTruth: React.FC = () => {
  return (
    <>
      <HeaderSection data={headerData} />
      <TitleHead data={tiltHeadData} />
      <ScrollStackCards data={scrollCardsData} />
      <DetailsCards data={estimatingTruthDetailsData} />
    </>
  );
};

export default EstimatingTruth;
