import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Fade,
  Slide,
  useTheme,
} from "@mui/material";
import { useInView } from "../hooks/useInView";
import coreImage from "@/assets/images/About/about3.webp";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";
import FaqSection from "@/components/FaqSection";
import AchievementsSection from "@/components/AchievementsSection";
import banner from "../assets/images/About/banner.webp";

const About: React.FC = () => {
  const theme = useTheme();
  const { ref, inView } = useInView();
  const navigate = useNavigate();

  return (
    <>
      <PageHeader image={banner} page={"ABOUT"} sx={{ mb: 4 }} />
      <Box
        ref={ref}
        component="section"
        sx={{
          px: { xs: 3, md: 23 },
          py: 10,
          color: theme.palette.text.primary,
          height: 650,
        }}
      >
        <Grid
          container
          wrap="wrap"
          sx={{
            justifyContent: "space-between",
            alignItems: "stretch",
            height: "100%",
          }}
        >
          {/* Left Main Column */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              width: { sm: "100%", md: "60%" },
              height: "100%",
            }}
            component="div"
            {...({} as any)}
          >
            <Fade in={inView} timeout={1000}>
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Top Row: Section Heading */}
                <Box mb={4}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: theme.palette.darkcard.main,
                      fontWeight: 600,
                      fontSize: 14,
                      letterSpacing: 3,
                      mb: 2,
                      ml: 0.5,
                    }}
                  >
                    ABOUT US
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: "2rem", md: "3.4rem" },
                      lineHeight: 1.1,
                      color: theme.palette.primary.hero,
                      flex: 1,
                      minWidth: 0,
                      fontFamily: theme.typography.fontFamily,
                    }}
                  >
                    Restoring Clarity
                    <br /> Building Tools for Truth
                  </Typography>
                </Box>

                {/* Bottom Row: Nested Columns */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 4,
                    flexWrap: "wrap",
                  }}
                >
                  {/* Left Column */}
                  <Box sx={{ flex: 1, minWidth: "250px", mr: 4 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "2rem",
                        fontWeight: 600,
                        textAlign: "justify",
                      }}
                      gutterBottom
                    >
                      Driven by Purpose, <br /> Guided by Innovation
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "1rem",
                        fontFamily: theme.typography.fontFamily,
                        mt: 2,
                        textAlign: "justify",
                        letterSpacing: 1,
                        lineHeight: 1.4,
                      }}
                    >
                      "Spiritual truth hasn't disappeared - it's been buried. At
                      Spiritual Data, our vision is simple but transformative:
                      To change the world by changing the source of people's
                      beliefs. For too long, spiritual questions have been
                      shaped by authority, taboo, or personal opinion."
                    </Typography>
                    <Button
                      onClick={() => navigate("/sign-up")}
                      variant="outlined"
                      sx={{
                        borderColor: theme.palette.primary.hover,
                        color: theme.palette.primary.hover,
                        px: 4.5,
                        py: 1,
                        mt: 5,
                        letterSpacing: 1,
                        fontWeight: 700,
                        fontSize: "0.875rem",
                        borderRadius: "999px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: theme.palette.primary.focus,
                          color: theme.palette.primary.hero,
                          border: "none",
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      Join Our Team
                    </Button>
                  </Box>

                  {/* Right Column (Image) */}
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      minWidth: "250px",
                      height: "100%",
                      boxShadow: `0 0 20px ${theme.palette.darkcard.main}`,
                      elevation: 24,
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={coreImage}
                      alt="Core Values"
                      sx={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "380px",
                        maxHeight: "450px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Grid>

          {/* Right Main Column */}
          <Box
            xs={12}
            md={6}
            sx={{
              width: { sm: "100%", md: "35%" },
              height: "100%",
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "column",
              mt: 1,
            }}
            component="div"
            {...({} as any)}
          >
            <Slide direction="up" in={inView} timeout={1000}>
              <Box
                sx={{
                  maxWidth: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Top Row: Text + CTA */}
                <Grid container spacing={2}>
                  <Grid item xs={12} component="div" {...({} as any)}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: 16,
                        fontFamily: theme.typography.fontFamily,
                        textAlign: "justify",
                        letterSpacing: 1,
                        lineHeight: 1.4,
                      }}
                    >
                      We're a nonprofit organization building AI-powered tools
                      to help humanity discover spiritual truth through unbiased
                      evidence, not belief.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} component="div" {...({} as any)}>
                    <Button
                      onClick={() => navigate("/change")}
                      variant="contained"
                      sx={{
                        backgroundColor: theme.palette.primary.focus,
                        color: theme.palette.primary.hover,
                        px: 3.5,
                        py: 1,
                        mt: 3,
                        fontWeight: 600,
                        letterSpacing: 0.7,
                        fontSize: "0.8rem",
                        borderRadius: "999px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        fontFamily: theme.typography.fontFamily,
                        "&:hover": {
                          backgroundColor: theme.palette.primary.hero,
                          color: theme.palette.primary.focus,
                        },
                      }}
                    >
                      Explore Our Mission
                    </Button>
                  </Grid>
                </Grid>

                {/* Bottom Row */}
                <Grid container spacing={5}>
                  {/* What Defines Us */}
                  <Grid
                    item
                    xs={12}
                    sx={{ borderBottom: "1.5px solid rgba(0,0,0,0.1)", pb: 4 }}
                    component="div"
                    {...({} as any)}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 600,
                        mb: 1,
                        letterSpacing: 1.1,
                      }}
                    >
                      What Defines Us
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: 16,
                        fontFamily: theme.typography.fontFamily,
                        textAlign: "justify",
                        letterSpacing: 1,
                        lineHeight: 1.4,
                      }}
                    >
                      We believe that when people are shown undeniable, unbiased
                      evidence, a global shift becomes possible - a move toward
                      clarity, intellectual humility, and a deeper sense of
                      shared truth.
                    </Typography>
                  </Grid>

                  {/* What We Believe */}
                  <Grid
                    item
                    xs={12}
                    sx={{ borderBottom: "1.5px solid rgba(0,0,0,0.1)", pb: 4 }}
                    component="div"
                    {...({} as any)}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 600,
                        mb: 1,
                        letterSpacing: 1.1,
                      }}
                    >
                      What We Believe, What We Deliver
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontFamily: theme.typography.fontFamily,
                        letterSpacing: 1,
                        fontSize: 16,
                        lineHeight: 1.4,
                      }}
                    >
                      When spiritual understanding is grounded in data - not
                      dogma - something powerful happens: People stop arguing,
                      and start listening. Divisions shrink. Curiosity replaces
                      fear.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Slide>
          </Box>
        </Grid>
      </Box>
      <AchievementsSection />
      <FaqSection />
    </>
  );
};

export default About;
