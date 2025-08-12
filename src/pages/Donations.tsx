import { Box, Container, Grid, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import PageDef from "../components/PageDef";
import ContentSection from "../components/Home/ContentSection";
import skill from "../assets/Images/Donate/skill.webp";
import mission from "../assets/Images/Donate/mission.webp";
import image from "../assets/Images/Donate/nj.webp";
import image1 from "../assets/Images/Donate/tier1.webp";
import image2 from "../assets/Images/Donate/tier2.webp";
import image3 from "../assets/Images/Donate/tier3.webp";
import image4 from "../assets/Images/Donate/tier4.webp";
import RecurringTiers from "../components/Donations/RecurringTiers";
import ContactSection from "../components/ContactSection";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";

const data = [
  {
    tier: "Light Contributor",
    amount: "$10/month",
    impact: "Supports one spiritual dataset being cleaned and made public",
    image: image1,
  },
  {
    tier: "Insight Giver",
    amount: "$25/month",
    impact: "Powers visualization tools for one new research area",
    image: image2,
  },
  {
    tier: "Pattern Illuminator",
    amount: "$50/month",
    impact: "Funds deep-dive analysis and community reports",
    image: image3,
  },
  {
    tier: "Sacred Data Guardian",
    amount: "Custom",
    impact: "Enables larger initiatives (e.g. spiritual census, platform dev)",
    image: image4,
  },
];

const Donate = () => {
  const recurringRef = useRef<HTMLDivElement | null>(null);
  const scrollToRecurring = () => {
    recurringRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const header = useInView();
  const pageDef = useInView();
  const section1 = useInView();
  const section2 = useInView();
  const recurring = useInView();

  return (
    <>
      <Box ref={header.ref}>
        {header.inView && (
          <Box>
            <PageHeader image={image} page={"Donate"} sx={{ mb: 4 }} />
          </Box>
        )}
      </Box>

      <Box ref={pageDef.ref}>
        {pageDef.inView && (
          <Box>
            <PageDef
              title="Donate"
              heading="Help us Illuminate the Spiritual Path with Data-Driven Clarity"
            />
          </Box>
        )}
      </Box>

      <Container disableGutters>
        <Box ref={section1.ref}>
          {section1.inView && (
            <Box borderBottom={1} borderColor="divider" sx={{ mb: 4, pb: 5 }}>
              <ContentSection
                imageSrc2={mission}
                heading="Why Support This Mission?"
                subText="We're fundamentally changing science itself. Spiritual Data's approach is to calculate truth and analyze evidence without bias. Once this system is solid, it can scale and influence belief systems globally. Your support enables us to reach that future faster and make spiritual understanding accessible to everyone."
                buttonText="Choose a Plan"
                buttonFunc={scrollToRecurring}
              />
            </Box>
          )}
        </Box>

        <Box ref={section2.ref}>
          {section2.inView && (
            <Box borderBottom={1} borderColor="divider" sx={{ mb: 4, pb: 5 }}>
              <ContentSection
                imageSrc={skill}
                heading="Donate Your Skills"
                subText="Help us grow by becoming part of Spiritual Data's non-profit mission to calculate truth with AI and move society beyond limiting biases. You can choose how you'd like to contribute and what skills you'd like to use."
                buttonText="Join Now"
                path="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdy6G90oR1lgRv1BqPd3jkbVG11xOlWptQ88IXfKtb2R3lmyg/viewform?usp=send_form"
              />
            </Box>
          )}
        </Box>

        <Box
          ref={(el: HTMLDivElement | null) => {
            if (recurring.ref && typeof recurring.ref !== "function") {
              (
                recurring.ref as React.MutableRefObject<HTMLDivElement | null>
              ).current = el;
            }
            recurringRef.current = el;
          }}
          sx={{ scrollMarginTop: "200px" }}
        >
          {recurring.inView && (
            <Grid
              container
              spacing={1}
              justifyContent="space-between"
              sx={{ my: 15 }}
              component="div"
              {...({} as any)}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ textAlign: "center", mb: 10, width: "100%" }}
              >
                Recurring Contribution Plans
              </Typography>
              <RecurringTiers data={data} />
            </Grid>
          )}
        </Box>
      </Container>

      <ContactSection />
    </>
  );
};

export default Donate;
