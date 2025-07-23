import React from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import initiativeImage1 from "../assets/images/Initiatives/initiatives1.webp";
import initiativeImage2 from "../assets/images/Initiatives/initiatives2.webp";
import initiativeImage3 from "../assets/images/Initiatives/initiatives3.webp";
import initiativeImage4 from "../assets/images/Initiatives/initiatives4.webp";
import initiativeImage5 from "../assets/images/Initiatives/initiatives5.webp";
import initiativeImage6 from "../assets/images/Initiatives/initiatives6.webp";
import InitiativeCard from "../components/Initiatives/HeroInitiativeCard";

const Initiatives = [
  {
    title: "Evidence Engine",
    icon: initiativeImage1,
    description:
      "Ranks claims based on evidence using a transparent scoring system—not opinion or popularity.",
  },
  {
    title: "Experience Archive",
    icon: initiativeImage2,
    description:
      "A structured database of firsthand spiritual, mystical, and peak experiences from across traditions.",
  },
  {
    title: "Hypothesis Tracker",
    icon: initiativeImage3,
    description:
      "Explores evolving truth hypotheses and calculates how likely each is, based on new inputs.",
  },
  {
    title: "Transparency Portal",
    icon: initiativeImage4,
    description:
      "See exactly how each claim was analyzed—every step, source, and weight is open and verifiable.",
  },
  {
    title: "Community Insight Lab",
    icon: initiativeImage5,
    description:
      "Gather and compare the lived insights of seekers, skeptics, researchers, and wisdom traditions.",
  },
  {
    title: "Open Source Spirituality",
    icon: initiativeImage6,
    description:
      "A global collaboration to develop transparent, unbiased spiritual knowledge—freely accessible to all.",
  },
];


const HeroInitiativeSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
        backgroundColor: "white",
      }}
    >
      {/* Top Heading */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="body2"
          sx={{
            letterSpacing: "4px",
            fontWeight: 600,
            color: theme.palette.primary.hero,
          }}
        >
          OUR INITIATIVES
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            color: theme.palette.primary.hero,
            mt: 1,
          }}
        >
          Powering Truth Through <br /> AI and Collective Insight
        </Typography>
      </Box>

      {/* Grid of 3x3 Initiatives */}
      <Grid container sx={{ justifyContent: "center" }}>
        {Initiatives.map((service, idx) => (
          <InitiativeCard key={idx} data={service} idx={idx} />
        ))}
      </Grid>
    </Box>
  );
};

export default HeroInitiativeSection;
