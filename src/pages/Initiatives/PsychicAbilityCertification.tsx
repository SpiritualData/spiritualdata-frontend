import React from "react";
import HeaderSection from "../../components/Initiatives/NestedInitiativesHeader";
import TitleHead from "../../components/Initiatives/TitleHead";
import ScrollStackCards from "../../components/Initiatives/ScrollCards";
import DetailsCards from "../../components/Initiatives/DetailsCards";
import SubPageCards from "../../components/Initiatives/SubPageCards";
import {
  headerData,
  tiltHeadData,
  scrollCardsData,
  psychicAbilityDetailsData,
  certificationSubPagesData,
} from "../../data/psychicAbilityCertificationData";
const PsychicAbilityCertification: React.FC = () => {
  return (
    <>
      <HeaderSection data={headerData} />
      <SubPageCards
        data={certificationSubPagesData}
        heading="Check the program yourself"
        subheading="The standard we hold ourselves to, the public record of completed assessments, and how to take part are all published. None of it requires taking our word for anything."
      />
      <TitleHead data={tiltHeadData} />
      <ScrollStackCards data={scrollCardsData} />
      <DetailsCards data={psychicAbilityDetailsData} />
    </>
  );
};

export default PsychicAbilityCertification;
