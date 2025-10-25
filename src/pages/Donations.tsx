import { Box, Container, Grid, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import PageDef from "../components/PageDef";
import ContentSection from "../components/Home/ContentSection";
import skill from "../assets/images/donate/skill.webp";
import mission from "../assets/images/donate/mission.webp";
import image from "../assets/images/donate/nj.webp";
import image1 from "../assets/images/donate/tier1.webp";
import image2 from "../assets/images/donate/tier2.webp";
import image3 from "../assets/images/donate/tier3.webp";
import image4 from "../assets/images/donate/tier4.webp";
import RecurringTiers from "../components/Donations/RecurringTiers";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";

const data = [
  {
    tier: "Light Contributor",
    amount: "$10/month",
    impact: "Bring light to spiritual truth—every contribution helps illuminate the path toward evidence-based understanding",
    image: image1,
  },
  {
    tier: "Insight Giver",
    amount: "$25/month",
    impact: "Your insights matter—support meaningful discoveries that help others find clarity in spiritual questions",
    image: image2,
  },
  {
    tier: "Pattern Illuminator",
    amount: "$50/month",
    impact: "Reveal the bigger picture—help illuminate the patterns connecting spiritual evidence and truth",
    image: image3,
  },
  {
    tier: "Data Guardian",
    amount: "Custom",
    impact: "Protect and advance the mission—be a steward of truth and champion breakthrough discoveries",
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
    <Box sx={{ bgcolor: "cosmic.primary" }}>
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
              heading="Help us Bring Data-Driven Critical Thinking to Spirituality"
            />
          </Box>
        )}
      </Box>

      <Container disableGutters>
        <Box sx={{ px: { xs: 4, md: "17%" }, mb: 6, mt: { xs: 0, md: 2 } }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: "text.primary",
              mb: 2,
              textAlign: "center",
            }}
          >
            Our Mission
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              color: "text.secondary",
              textAlign: "center",
              letterSpacing: 0.8,
              lineHeight: 1.6,
            }}
          >
            Spiritual Data's mission is to provide a neutral source of truth for spiritual beliefs and the nature of reality. We provide a system for undeniable evidence to emerge which persuades change in beliefs and scientific consensus.
          </Typography>
        </Box>

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
                subText="Help us grow by becoming part of Spiritual Data's non-profit mission to provide a neutral source of truth with AI and move society beyond limiting biases. You can choose how you'd like to contribute and what skills you'd like to use."
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
              spacing={3}
              justifyContent="center"
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
    </Box>
  );
};

export default Donate;
