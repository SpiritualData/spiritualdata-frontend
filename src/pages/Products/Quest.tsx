import { useRef } from "react";
import Steps from "../../components/Quest/Steps";
import Features from "../../components/Quest/Features";
import UseCases from "../../components/Quest/UseCases";
import {
  stepsData,
  featuresData,
  useCasesData,
  callToAction,
  heroData,
} from "../../data/questData";
import ProductHero from "@/components/Products/ProductHero";
import CalltoAction from "../../components/Products/CallToAction";

const Quest = () => {
  const useCasesRef = useRef<HTMLDivElement | null>(null);
  const scrollToUseCases = () => {
    useCasesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ProductHero
        content={heroData}
        product="quest"
        onScrollClick={scrollToUseCases}
      />
      <Features data={featuresData} />
      <Steps data={stepsData} />
      <UseCases data={useCasesData} />

      {/* Scroll Target */}
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

export default Quest;
