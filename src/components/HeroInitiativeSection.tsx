import React from "react";
import { Box, Typography, Grid, useTheme, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import initiativeImage1 from "../assets/images/initiatives/initiatives1.webp";
import initiativeImage2 from "../assets/images/initiatives/initiatives2.webp";
import initiativeImage3 from "../assets/images/initiatives/initiatives3.webp";
import initiativeImage4 from "../assets/images/initiatives/initiatives4.webp";
import initiativeImage5 from "../assets/images/initiatives/initiatives5.webp";
import initiativeImage6 from "../assets/images/initiatives/initiatives6.webp";
import InitiativeCard from "./Initiatives/HeroInitiativeCard";

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
      "A structured database of firsthand spiritual, mystical, mental health, and transformative experiences from across traditions.",
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
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
        backgroundColor: theme.palette.cosmic.primary,
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
          WHAT WE'RE DOING
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

      {/* Button */}
      <Box textAlign="center" mt={6}>
        <Button
          variant="contained"
          onClick={() => navigate("/initiatives")}
          sx={{
            backgroundColor: theme.palette.primary.focus,
            color: "#1F2540",
            px: 3.5,
            py: 1.2,
            fontWeight: 600,
            borderRadius: 8,
            textTransform: "none",
            fontSize: "0.9rem",
            letterSpacing: "0.08rem",
            "&:hover": {
              backgroundColor: theme.palette.primary.hover,
              color: theme.palette.common.white,
            },
          }}
        >
          See Our Initiatives
        </Button>
      </Box>
    </Box>
  );
};

export default HeroInitiativeSection;
