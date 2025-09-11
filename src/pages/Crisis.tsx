import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import initiativeImage1 from "../assets/images/Initiatives/initiatives1.webp";
import initiativeImage2 from "../assets/images/Initiatives/initiatives2.webp";
import initiativeImage3 from "../assets/images/Initiatives/initiatives3.webp";
import image from "../assets/Images/Crisis/banner.webp";
import PageHeader from "../components/PageHeader";
import PageDef from "../components/PageDef";
import InitiativeCard from "../components/Initiatives/HeroInitiativeCard";
import theme from "../styles/theme";
import AchievementsSection from "../components/AchievementsSection";

const Crisis = () => {
  const data = [
    {
      title: "Scientific Consensus Isn't Neutral",
      icon: initiativeImage1,
      description:
        "Scientific consensus is often shaped more by institutions and cultural taboos than by evidence. Topics like consciousness and spirituality are frequently excluded from scientific discourse entirely—even when data exists.",
    },
    {
      title: "Spiritual Seekers Are Isolated",
      icon: initiativeImage2,
      description:
        "People who've had personal spiritual experiences often lack the language, confidence, or context to share them. They’re afraid of being dismissed, so many truths go unspoken and unexamined.",
    },
    {
      title: "Most People Can't Sort Truth from Noise",
      icon: initiativeImage3,
      description:
        "We're expected to make life's biggest decisions with half the information. Between misinformation, sensationalism, and agenda-driven voices, it's nearly impossible to know what's real—especially in spiritual matters.",
    },
  ];

  return (
    <>
      <Grid container>
        {/* Page header */}
        <PageHeader image={image} page={"Crisis"} sx={{ mb: 4 }} />

        <Grid
          container
          spacing={6}
          justifyContent="center"
          sx={{ px: { xs: 2, md: 20 }, mb: 10 }}
        >
          {/* Row 1: PageDef */}
          <Grid
            item
            xs={12}
            sx={{ width: "100%" }}
            component="div"
            {...({} as any)}
          >
            <PageDef
              title={"The Crisis:"}
              heading={"We're Drowning in Distorted Data"}
              details={""}
            />
          </Grid>

          {/* Row 2: Overview Paragraph */}
          <Grid
            item
            xs={12}
            sx={{ width: "100%" }}
            component="div"
            {...({} as any)}
          >
            <Typography
              sx={{
                mt: { xs: -4, md: -8 },
                mb: { xs: 2, md: 4 },
                fontSize: { xs: "13px", sm: "16px" },
                color: "black",
                textAlign: "center",
                letterSpacing: "0.5px",
              }}
            >
              In today's world, we're overwhelmed by distorted and fragmented
              spiritual data—shaping beliefs, guiding donations, and even
              influencing lives built on misinformation. Scientific consensus
              isn't always rooted in evidence, especially when it comes to
              spirituality and consciousness, which are often excluded from
              mainstream discourse. Meanwhile, spiritual seekers remain
              isolated, lacking the language or support to share their personal
              experiences. And for most, the noise is too loud to discern truth
              from illusion. Spiritual Data was created to change that—blending
              evidence-based analysis with open-minded exploration to help
              people navigate life's most meaningful questions with clarity and
              confidence.
            </Typography>
          </Grid>

          {/* Row 4: Initiative Cards */}
          <Grid
            item
            xs={12}
            sx={{ width: "100%" }}
            component="div"
            {...({} as any)}
          >
            <Grid
              container
              spacing={1.5}
              justifyContent="center"
              alignItems="stretch"
            >
              {data.map((item, idx) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={idx}
                  component="div"
                  {...({} as any)}
                >
                  <InitiativeCard
                    data={item}
                    idx={idx}
                    headSx={{ fontSize: "25px" }}
                    bodySx={{ fontSize: "13px" }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Row 5: Justification Paragraph */}
          <Grid
            item
            xs={12}
            sx={{ width: "100%" }}
            component="div"
            {...({} as any)}
          >
            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: "13px", sm: "16px" },
                color: "black",
                textAlign: "center",
                px: { xs: 4, md: "17%" },
              }}
            >
              That's why we created <strong>Spiritual Data</strong>
              <br />
              To cut through distortion with evidence-based tools and AI-powered
              clarity.
              <br />
              So you can decide for yourself.
            </Typography>
          </Grid>

          {/* Row 6: CTA Button */}
          <Grid
            item
            xs={12}
            sx={{ width: "100%", textAlign: "center" }}
            component="div"
            {...({} as any)}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.hover,
                color: theme.palette.primary.focus,
                px: 4.5,
                py: 1,
                fontWeight: 600,
                fontSize: "0.875rem",
                borderRadius: "999px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                "&:hover": {
                  backgroundColor: theme.palette.primary.focus,
                  color: theme.palette.primary.hero,
                },
              }}
            >
              SEE HOW WE ARE CHANGING IT...!
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <AchievementsSection />
    </>
  );
};

export default Crisis;
