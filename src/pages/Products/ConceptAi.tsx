import { useRef } from "react";
import ProductHero from "@/components/Products/ProductHero";
import CalltoAction from "../../components/Products/CallToAction";
import {
  callToAction,
  heroData,
  capabilitiesData,
  applicationsData,
  researchData,
  sellingPointsData,
} from "../../data/conceptAiData";
import CoreCapabilities from "../../components/ConceptAI/CoreCapabilities";
import Applications from "../../components/ConceptAI/Applications";
import ResearchInterface from "../../components/ConceptAI/ResearchInterface";
import { Sell } from "@mui/icons-material";
import SellingPoints from "../../components/ConceptAI/SellingPoints";

const ConceptAi = () => {
  const useCasesRef = useRef<HTMLDivElement | null>(null);

  const scrollToUseCases = () => {
    useCasesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ProductHero
        content={heroData}
        onScrollClick={scrollToUseCases}
        product="concept-ai"
      />
      <CoreCapabilities data={capabilitiesData} />
      <Applications data={applicationsData} />
      <ResearchInterface data={researchData} />
      <SellingPoints data={sellingPointsData} />
      <div
        ref={useCasesRef}
        style={{
          scrollMarginTop: "150px",
        }}
      >
        <CalltoAction data={callToAction} />
      </div>
    </>
  );
};

export default ConceptAi;
