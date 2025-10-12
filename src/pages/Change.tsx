import React from "react";
import { Box, Button, Grid, Slide, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import image from "../assets/images/change/banner.webp";
import PageDef from "../components/PageDef";
import theme from "../styles/theme";
import ChangeCard from "../components/change/ChangeCard";
import mainImage from "../assets/images/change/change.webp";
import { useInView } from "../hooks/useInView";

const data = [
  {
    title: "Finding Answers",
    desc: "Our AI engine is designed to analyze spiritual and scientific data across multiple domains—parapsychology, neuroscience, philosophy, and more. It estimates which claims are most likely true using transparent logic and evidence synthesis. Users can follow the data trail, explore multiple perspectives, and make up their own minds with confidence. We believe AI should empower independent thinking—not dictate answers.",
    link: "/initiatives/estimating-truth",
    linkText: "Learn about Truth Estimation",
  },
  {
    title: "Fixing the Record",
    desc: "Many important spiritual discoveries—especially in consciousness and psi research—have been distorted, downplayed, or outright removed from public platforms like Wikipedia. We're advocating for fair, evidence-based representation of this knowledge, correcting the record and ensuring people have access to credible information. It's not about promoting belief—it's about restoring balance and transparency to the public conversation.",
    link: "/initiatives/wikipedia-parapsychology",
    linkText: "Explore The Wikipedia Advocacy",
  },
  {
    title: "Proving What's Possible",
    desc: "We're conducting real-world experiments to rigorously test psychic and spiritual phenomena. These experiments are recorded, statistically analyzed, and peer-reviewed by professionals in both science and spirituality. Our goal is not to sensationalize, but to certify phenomena that mainstream science often ignores—under conditions that even skeptics can respect. When properly tested and verified, spiritual abilities can shift the scientific paradigm.",
    link: "/initiatives/psychic-certification",
    linkText: "Explore The Research In Action",
  },
];

const Change: React.FC = () => {
  const { ref: changeRef, inView: changeInView } = useInView();
  const { ref: agiRef, inView: agiInView } = useInView();
  const { ref: realRef, inView: realInView } = useInView();
  const { ref: imgRef, inView: imgInView } = useInView();
  const { ref: btnRef, inView: btnInView } = useInView();

  return (
    <Grid
      container
      component="div"
      {...({} as any)}
    >
      <PageHeader image={image} page={"Change"} sx={{ mb: 4 }} />

      <PageDef
        title={"MISSION AND CLAIM"}
        heading={
          "We are providing undeniable evidence to encourage an open mind"
        }
        details={""}
        custom={true}
      />

      <Box
        sx={{
          py: 8,
          color: "primary.contrastText",
          width: "100%",
          px: { xs: 2, sm: 8, md: 35 },
          pt: 5,
        }}
      >
        <Box
          mb={6}
          sx={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "70%", height: 700, p: 0 }}>
            <Box ref={changeRef}>
              <Slide direction="up" in={changeInView} timeout={700}>
                <Box mb={6}>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    The Change We Are Bringing
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                      width: "100%",
                      fontFamily: theme.typography.fontFamily,
                    }}
                  >
                    We're building a new standard for truth—one grounded in
                    data, not ideology. At Spiritual Data, we aim to liberate
                    spiritual and scientific understanding from institutional
                    bias and dogma. Our approach is rooted in radical
                    transparency and collaboration: a scientific AGI that
                    evaluates spiritual questions based on probabilities, not
                    beliefs. This is more than just technology—it's a movement
                    to restore clarity and empower people to make informed,
                    independent decisions about what's true.
                  </Typography>
                </Box>
              </Slide>
            </Box>

            <Box ref={agiRef}>
              <Slide direction="up" in={agiInView} timeout={700}>
                <Box mb={6}>
                  <Typography variant="h4" fontWeight={600} gutterBottom>
                    What is a Scientific AGI?
                  </Typography>
                  <Typography color="text.secondary">
                    A Scientific Artificial General Intelligence is an advanced
                    reasoning system trained not to mimic opinions, but to
                    evaluate reality based on hard data. Unlike traditional AI
                    chatbots that reflect human bias, this AGI:
                  </Typography>
                  <ul
                    style={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.8,
                    }}
                  >
                    <li>
                      Draws conclusions from evidence, not personal beliefs or
                      cultural norms.
                    </li>
                    <li>
                      Estimates truth probabilistically, using statistical and
                      logical reasoning.
                    </li>
                    <li>
                      Operates transparently, so its conclusions can be
                      peer-reviewed and improved over time.
                    </li>
                    <li>
                      Combats institutional bias, surfacing insights that might
                      otherwise be excluded or suppressed.
                    </li>
                  </ul>
                </Box>
              </Slide>
            </Box>

            <Box ref={realRef}>
              <Slide direction="up" in={realInView} timeout={700}>
                <Box mb={6}>
                  <Typography variant="h4" fontWeight={600} gutterBottom>
                    How We're Making It Real
                  </Typography>
                  <Typography color="text.secondary" mb={4}>
                    Building a scientific AGI is only part of the solution.
                    Changing the world's relationship to spiritual truth
                    requires a multi-pronged approach—tools, advocacy, research,
                    and education.
                  </Typography>
                </Box>
              </Slide>
            </Box>
          </Box>

          <Box ref={imgRef} width={"25%"}>
            <Slide direction="up" in={imgInView} timeout={700}>
              <Box
                component="img"
                src={mainImage}
                alt="AI Hero"
                sx={{
                  maxWidth: { xs: "90%", sm: "420px", md: "100%" },
                  height: 700,
                  zIndex: 1,
                  objectFit: "cover",
                  borderRadius: 5,
                  boxShadow: `0 0 24px ${theme.palette.primary.hero}44`,
                }}
              />
            </Slide>
          </Box>
        </Box>

        <Box mb={6}>
          <Grid container spacing={4}>
            {data.map((item, index) => (
              <ChangeCard item={item} index={index} key={index} />
            ))}
          </Grid>
        </Box>

        <Box ref={btnRef}>
          <Slide direction="up" in={btnInView} timeout={900}>
            <Box textAlign="center" mt={15}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="/join"
                sx={{
                  backgroundColor: theme.palette.primary.focus,
                  color: theme.palette.primary.hero,
                  borderRadius: 8,
                  height: 42,
                  px: 4,
                  fontWeight: 700,
                  fontSize: "14px",
                  textTransform: "uppercase",
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "0.5px",
                  ml: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.hero,
                    color: theme.palette.primary.focus,
                  },
                }}
              >
                See Our Initiatives
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="/join"
                sx={{
                  backgroundColor: theme.palette.primary.hero,
                  border: `1px solid ${theme.palette.primary.focus}`,
                  color: theme.palette.primary.focus,
                  borderRadius: 8,
                  height: 42,
                  px: 4,
                  fontWeight: 700,
                  fontSize: "14px",
                  textTransform: "uppercase",
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "0.5px",
                  ml: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.focus,
                    color: theme.palette.primary.hero,
                  },
                }}
              >
                Join the Movement
              </Button>
            </Box>
          </Slide>
        </Box>
      </Box>
    </Grid>
  );
};

export default Change;
