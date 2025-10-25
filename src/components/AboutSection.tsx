import {
  Box,
  Grid,
  Typography,
  Button,
  Fade,
  Slide,
  useTheme,
} from "@mui/material";
import React from "react";
import { useInView } from "../hooks/useInView";
import ImageSlider from "./ImageSlider";
import { useNavigate } from "react-router-dom";

const AboutSection: React.FC = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({ threshold: 0.3 });

  const navigate = useNavigate();
  const loaded = inView;

  return (
    <>
      <Box
        ref={ref}
        component="section"
        sx={{
          color: theme.palette.text.primary,
          py: { xs: 8, md: 10 },
          px: { xs: 3, md: 12, lg: 24 },
          backgroundColor: "white",
        }}
      >
        {/* Top Row: ABOUT US label */}
        <Typography
          variant="overline"
          sx={{
            fontWeight: 600,
            letterSpacing: "3px",
            color: "#1F2540",
            fontSize: 15,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          ABOUT US
        </Typography>

        {/* Middle Row: Heading + CTA */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-end" },
            justifyContent: "space-between",
            gap: 3,
            textAlign: { xs: "center", md: "left" },
            mb: { xs: 6, md: 6 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "1.8rem", md: "3.3rem" },
              lineHeight: 1.3,
              color: "#1F2540",
              flex: 1,
            }}
          >
            We Exist to Restore What's Been Hidden From You
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate("/origin-story")}
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
              width: { xs: "100%", md: "auto" },
              mt: { xs: 3, md: 0 },
              "&:hover": {
                backgroundColor: theme.palette.primary.hover,
                color: theme.palette.common.white,
              },
            }}
          >
            View Origin Story
          </Button>
        </Box>

        {/* Bottom Row */}
        <Grid container spacing={2} alignItems="stretch" flexDirection="row">
          {/* Main Column */}
          <Grid item xs={12} component="div" {...({} as any)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              {/* Top Text */}
              {inView && (
                <Fade in timeout={2000}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: "1.05rem",
                      lineHeight: 1.6,
                      mb: { xs: 4, md: 8 },
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    The most important truths have been hidden by taboo and
                    authority, just as they had been for Spiritual Data's
                    founder, despite higher education. Most people don't realize
                    that parapsychology researchers have already uncovered
                    evidence that could radically reshape the world's spiritual
                    beliefs, if understood.
                    <br />
                    <br />
                    In 2014, scientists openly called for moving past the limits
                    of the materialist paradigm, because of scientific
                    authorities ignoring spiritual and paranormal experiences
                    and punishing dissent. At Spiritual Data, we don't choose
                    the answers, but we let the evidence speak. Our AI algorithm
                    is built to be unbiased, data-driven, and open. So you can
                    explore what's most likely true according to the algorithm,
                    and argue if you disagree.
                  </Typography>
                </Fade>
              )}

              {/* Cards */}
              <Grid
                container
                spacing={3}
                justifyContent="flex-start"
                alignItems="stretch"
                sx={{
                  flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
                }}
              >
                {/* Card 1 */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                  component="div"
                  {...({} as any)}
                >
                  {inView && (
                    <Fade in timeout={3000}>
                      <Slide direction="up" in={loaded} timeout={3000}>
                        <Box
                          sx={{
                            width: 320, // ✅ consistent width for all cards
                            backgroundColor: theme.palette.darkcard.main,
                            color: theme.palette.darkcard.contrastText,
                            borderRadius: "16px",
                            boxShadow: `0 6px 24px ${theme.palette.cardshadow.main}`,
                            px: { xs: 2.5, sm: 3, md: 3.5 },
                            py: { xs: 2.5, sm: 3, md: 3 },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                            boxSizing: "border-box",
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 500,
                              lineHeight: 1.3,
                              fontSize: {
                                xs: "1rem",
                                sm: "1.2rem",
                                lg: "1.4rem",
                              },
                              mb: 2,
                            }}
                          >
                            Explore the data with our AI chat
                          </Typography>

                          <Button
                            onClick={() => navigate("/sign-up")}
                            variant="contained"
                            sx={{
                              backgroundColor: theme.palette.primary.focus,
                              color: "#1F2540",
                              px: { xs: 2.5, sm: 3 },
                              py: { xs: 0.8, sm: 1 },
                              fontWeight: 600,
                              borderRadius: "30px",
                              textTransform: "uppercase",
                              fontSize: { xs: "0.7rem", md: "0.75rem" },
                              letterSpacing: "0.1rem",
                              transition: "all 0.3s ease",
                              alignSelf: "flex-start",
                              "&:hover": {
                                backgroundColor: theme.palette.primary.light,
                                color: theme.palette.primary.hero,
                                scale: 1.05,
                              },
                            }}
                          >
                            Sign Up
                          </Button>
                        </Box>
                      </Slide>
                    </Fade>
                  )}
                </Grid>

                {/* Card 2 */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                  component="div"
                  {...({} as any)}
                >
                  {inView && (
                    <Fade in timeout={3000}>
                      <Slide direction="up" in={loaded} timeout={3200}>
                        <Box
                          sx={{
                            width: 320, // ✅ consistent width for all cards
                            backgroundColor: theme.palette.darkcard.main,
                            color: theme.palette.darkcard.contrastText,
                            borderRadius: "16px",
                            boxShadow: `0 6px 24px ${theme.palette.cardshadow.main}`,
                            px: { xs: 2.5, sm: 3, md: 3.5 },
                            py: { xs: 2.5, sm: 3, md: 3 },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                            boxSizing: "border-box",
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 500,
                              lineHeight: 1.3,
                              fontSize: {
                                xs: "1rem",
                                sm: "1.2rem",
                                lg: "1.4rem",
                              },
                              mb: 2,
                            }}
                          >
                            Apply our data to your personal goals
                          </Typography>

                          <Button
                            onClick={() => navigate("/products/quest")}
                            variant="contained"
                            sx={{
                              backgroundColor: theme.palette.primary.focus,
                              color: "#1F2540",
                              px: { xs: 2.5, sm: 3 },
                              py: { xs: 0.8, sm: 1 },
                              fontWeight: 600,
                              borderRadius: "30px",
                              textTransform: "uppercase",
                              fontSize: { xs: "0.7rem", md: "0.75rem" },
                              letterSpacing: "0.1rem",
                              transition: "all 0.3s ease",
                              alignSelf: "flex-start",
                              "&:hover": {
                                backgroundColor: theme.palette.primary.light,
                                color: theme.palette.primary.hero,
                                scale: 1.05,
                              },
                            }}
                          >
                            Learn about Quest
                          </Button>
                        </Box>
                      </Slide>
                    </Fade>
                  )}
                </Grid>

                {/* Card 3 */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                  component="div"
                  {...({} as any)}
                >
                  {inView && (
                    <Fade in timeout={3000}>
                      <Slide direction="up" in={loaded} timeout={3400}>
                        <Box
                          sx={{
                            width: 320, // ✅ consistent width for all cards
                            backgroundColor: theme.palette.darkcard.main,
                            color: theme.palette.darkcard.contrastText,
                            borderRadius: "16px",
                            boxShadow: `0 6px 24px ${theme.palette.cardshadow.main}`,
                            px: { xs: 2.5, sm: 3, md: 3.5 },
                            py: { xs: 2.5, sm: 3, md: 3 },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                            boxSizing: "border-box",
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 500,
                              lineHeight: 1.3,
                              fontSize: {
                                xs: "1rem",
                                sm: "1.2rem",
                                lg: "1.4rem",
                              },
                              mb: 2,
                            }}
                          >
                            See our initiatives
                          </Typography>

                          <Button
                            onClick={() => navigate("/initiatives")}
                            variant="contained"
                            sx={{
                              backgroundColor: theme.palette.primary.focus,
                              color: "#1F2540",
                              px: { xs: 2.5, sm: 3 },
                              py: { xs: 0.8, sm: 1 },
                              fontWeight: 600,
                              borderRadius: "30px",
                              textTransform: "uppercase",
                              fontSize: { xs: "0.7rem", md: "0.75rem" },
                              letterSpacing: "0.1rem",
                              transition: "all 0.3s ease",
                              alignSelf: "flex-start",
                              "&:hover": {
                                backgroundColor: theme.palette.primary.light,
                                color: theme.palette.primary.hero,
                                scale: 1.05,
                              },
                            }}
                          >
                            Learn More
                          </Button>
                        </Box>
                      </Slide>
                    </Fade>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Temporarily hidden - keeping for later use */}
      {/* <ImageSlider /> */}
    </>
  );
};

export default AboutSection;
