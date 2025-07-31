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
import { useInView } from "@/hooks/useInView";
import ImageSlider from "./ImageSlider";
import { useNavigate } from "react-router-dom";
import mainImage from "../assets/images/About/about1.webp";
import playImage from "../assets/images/About/about2.webp";
import PlayableImage from "./heroSection/PlayableImage";

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
          pt: { xs: 8, md: 10 },
          pb: { xs: 0, md: 0 },
          px: { xs: 3, md: 24 },
          backgroundColor: "white",
        }}
      >
        {/* Top Row: ABOUT US label */}
        <Box>
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
        </Box>

        {/* Middle Row: Heading + CTA */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "end",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "2rem", md: "3.3rem" },
              lineHeight: 1,
              color: "#1F2540",
              flex: 1,
              minWidth: 0,
              fontFamily: "revert",
            }}
          >
            The Most Important Truths Were Hidden. At Spiritual Data, We Let AI
            and Evidence Work Together to Help You See Clearly.
          </Typography>

          <Button
            variant="contained"
            onClick={() => {
              navigate("/about");
            }}
            sx={{
              backgroundColor: theme.palette.primary.focus,
              color: "#1F2540",
              px: 3.5,
              py: 1.2,
              fontWeight: 600,
              borderRadius: 8,
              textTransform: "none",
              fontSize: "0.9rem",
              whiteSpace: "nowrap",
              letterSpacing: "0.08rem",
              ml: { xs: 0, md: 3 },
              mt: { xs: 3, md: 0 },
              "&:hover": {
                backgroundColor: theme.palette.primary.hover,
                color: "#fff",
              },
            }}
          >
            View Origin Story
          </Button>
        </Box>

        {/* Bottom Row: Left Info Blocks + Right Image */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Column */}
          <Grid
            item
            xs={12}
            md={10}
            sx={{ maxWidth: "57%", height: "200%" }}
            component="div"
            {...({} as any)}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                minHeight: 400,
              }}
            >
              {/* Top: Typography */}
              {inView && (
                <Fade in={true} timeout={2000}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#444",
                      fontSize: "1.05rem",
                      lineHeight: 1.6,
                      letterSpacing: "0.05rem",
                      mb: 23,
                      wordWrap: "normal",
                      textWrap: "pretty",
                    }}
                  >
                    The most important truths have been hidden by taboo and
                    authority, just as they had been for Spiritual Data's
                    founder, despite higher education. Most people don't realize
                    that parapsychology researchers have already uncovered
                    evidence that could radically reshape the world's spiritual
                    beliefs, but if understood.
                    <br />
                    <br />
                    In 2014, scientists openly called for moving past the limits
                    of the materialist paradigm, which leaves spirituality out
                    of science and punishes dissent. But at Spiritual Data, we
                    don't claim to have the answers, but we let the evidence
                    speak. Our AI algorithm is built to be unbiased,
                    data-driven, and open. So you can explore what's most likely
                    true.
                  </Typography>
                </Fade>
              )}

              {/* Bottom: Nested 2 Columns */}
              <Grid
                container
                spacing={3}
                sx={{ justifyContent: "space-between" }}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ width: "48%", height: "100%" }}
                  component="div"
                  {...({} as any)}
                >
                  {inView && (
                    <Fade in={true} timeout={2000}>
                      <Slide direction="up" in={loaded} timeout={2000}>
                        <Box
                          sx={{
                            backgroundColor: theme.palette.darkcard.main,
                            color: theme.palette.darkcard.contrastText,
                            borderRadius: "16px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            boxShadow: `0 6px 24px ${theme.palette.cardshadow.main}`,
                            height: "100%",
                            width: "100%",
                          }}
                        >
                          <PlayableImage
                            imageSrc={playImage}
                            alt="Play Video"
                            videoLink="https://drive.google.com/drive/u/2/folders/1vdME4X8jWs-uVepZ8tsWns36Wq6MnSwL"
                          />
                        </Box>
                      </Slide>
                    </Fade>
                  )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ width: "48%", height: "100%" }}
                  component="div"
                  {...({} as any)}
                >
                  {inView && (
                    <Fade in={true} timeout={2000}>
                      <Slide direction="up" in={loaded} timeout={2000}>
                        <Box
                          sx={{
                            backgroundColor: theme.palette.darkcard.main,
                            color: theme.palette.darkcard.contrastText,
                            borderRadius: "16px",
                            px: 5,
                            py: 3,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            boxShadow: `0 6px 24px ${theme.palette.cardshadow.main}`,
                            height: "auto",
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 500,
                              mb: 9,
                              lineHeight: 1.3,
                              fontSize: { xs: "1.6rem", md: "1.9rem" },
                            }}
                          >
                            Join the Movement
                            <br />
                            With Spiritual Data
                          </Typography>
                          <Button
                            onClick={() => navigate("/sign-up")}
                            variant="contained"
                            sx={{
                              backgroundColor: theme.palette.primary.focus,
                              color: "#1F2540",
                              px: 3.5,
                              py: 1.2,
                              fontWeight: 600,
                              borderRadius: "30px",
                              textTransform: "uppercase",
                              fontSize: "0.75rem",
                              letterSpacing: "0.1rem",
                              mb: 2.5,
                              transition: "scale 0.3s ease-in-out",
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
              </Grid>
            </Box>
          </Grid>

          {/* Right Column: Main Image */}
          <Grid
            item
            xs={12}
            md={6}
            maxHeight={"30%"}
            component="div"
            {...({} as any)}
          >
            {inView && (
              <Fade in={true} timeout={2000}>
                <Box
                  component="img"
                  src={mainImage}
                  alt="Main Visual"
                  sx={{
                    width: "100%",
                    objectFit: "fill",
                    maxWidth: "450px",
                    borderRadius: "16px",
                    boxShadow: `0 0 24px ${theme.palette.primary.hero}44`,
                    my: 10,
                    display: "block",
                  }}
                />
              </Fade>
            )}
          </Grid>
        </Grid>
      </Box>
      <ImageSlider />
    </>
  );
};

export default AboutSection;
