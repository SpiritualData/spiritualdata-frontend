import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
  Grid,
  Fade,
  Slide,
} from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";
import PublicIcon from "@mui/icons-material/Public";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorageIcon from "@mui/icons-material/Storage";
import FloatingLabel from "./heroSection/FloatingLabel";
import heroImage from "../assets/images/hero/astrounot16.webp";
import { useNavigate } from "react-router-dom";
import { floatersData } from "../data/homeData";

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        scrollSnapAlign: "start",
        // minHeight: { sm: "75%", lg: "100%" },
        minHeight: { xs: "90vh", sm: "85vh", md: "90vh" },

        // px: { xs: 2, sm: 6, md: 12 },
        // pt: { xs: 8, md: 12 },
        px: { xs: 2.5, sm: 5, md: 10, lg: 16, xl: 22 },
        pt: { xs: 8, sm: 10, md: 12, lg: 14 },
        position: "relative",
        overflow: "hidden",
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Grid container justifyContent="center" textAlign="center">
        <Grid item xs={12} md={10} component="div" {...({} as any)}>
          {/* Heading */}
          <Fade in={loaded} timeout={800}>
            <Slide direction="up" in={loaded} timeout={800}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 600,
                  // fontSize: { xs: "2rem", sm: "3rem", md: "5rem" },
                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.6rem",
                    md: "3.8rem",
                    lg: "4.5rem",
                    xl: "5rem",
                  },
                  color: theme.palette.primary.hover,
                  lineHeight: 1.2,
                  // mt: 16,
                  mt: { xs: 6, sm: 8, md: 10, lg: 12 },
                }}
              >
                Spiritual Data = Intellectual Autonomy
              </Typography>
            </Slide>
          </Fade>

          {/* Subheading */}
          <Fade in={loaded} timeout={1000}>
            <Slide direction="up" in={loaded} timeout={1000}>
              <Typography
                variant="body1"
                sx={{
                  mt: 2.5,
                  color: theme.palette.primary.hover,
                  mx: "auto",
                  // maxWidth: 730,
                  // fontSize: { xs: "0.95rem", sm: "1.1rem" },
                  maxWidth: { xs: "90%", sm: "85%", md: "700px", lg: "780px" },
                  fontSize: {
                    xs: "0.9rem",
                    sm: "1rem",
                    md: "1.1rem",
                    lg: "1.2rem",
                  },
                }}
              >
                Discover a new paradigm for scientific consensus, far beyond
                human capability. Spiritual Data exists to expand your
                understanding by showing you the data directly, and analyzing it
                from diverse perspectives. Humans provide the data, AI analyzes
                it from relevant perspectives to overcome bias. Then you can
                decide for yourself.
              </Typography>
            </Slide>
          </Fade>

          {/* Buttons */}
          <Fade in={loaded} timeout={1200}>
            <Slide direction="up" in={loaded} timeout={1200}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                // spacing={2}
                // mt={5}
                spacing={{ xs: 2, sm: 3 }}
                mt={{ xs: 4, sm: 5, md: 6 }}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://discord.com/invite/thQNvPGcJF",
                      "_blank"
                    )
                  }
                  sx={{
                    backgroundColor: theme.palette.primary.focus,
                    color: theme.palette.primary.hover,
                    // px: 4.5,
                    // py: 1,
                    fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                    px: { xs: 3, sm: 4.5 },
                    py: { xs: 0.8, sm: 1 },

                    fontWeight: 600,
                    // fontSize: "0.875rem",
                    borderRadius: "999px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.hero,
                      color: theme.palette.primary.focus,
                    },
                  }}
                >
                  Discord
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open("https://spiritualdata.beehiiv.com/", "_blank")
                  }
                  sx={{
                    backgroundColor: theme.palette.primary.focus,
                    color: theme.palette.primary.hover,
                    px: 4.5,
                    py: 1,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    borderRadius: "999px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.hero,
                      color: theme.palette.primary.focus,
                    },
                  }}
                >
                  Newsletter
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/about-us")}
                  sx={{
                    borderColor: theme.palette.primary.hover,
                    color: theme.palette.primary.hover,
                    px: 4.5,
                    py: 1,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    borderRadius: "999px",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.hero,
                      color: theme.palette.primary.focus,
                    },
                  }}
                >
                  Discover More
                </Button>
              </Stack>
            </Slide>
          </Fade>

          {/* Mobile Cards */}
          <Fade in={loaded} timeout={1400}>
            <Slide direction="up" in={loaded} timeout={1400}>
              <Stack
                spacing={2.5}
                my={6}
                // display={{ xs: "flex", md: "none" }}
                display={{ xs: "flex", sm: "flex", md: "none" }}
                alignItems="center"
              >
                {floatersData.map((item, index) => (
                  <Box
                    onClick={() => {
                      navigate(item.link);
                    }}
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      backgroundColor: theme.palette.primary.dark,
                      color: theme.palette.primary.contrastText,
                      px: 2,
                      py: 1.5,
                      borderRadius: 2,
                      width: "100%",
                      maxWidth: 380,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: theme.palette.primary.focus,
                        color: theme.palette.primary.contrastText,
                        width: 28,
                        height: 28,
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1rem",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography fontWeight={500} fontSize="0.9rem">
                      {item.text}
                    </Typography>
                  </Box>
                ))}
                <Box
                  component="img"
                  src={heroImage}
                  alt="AI Hero"
                  sx={{
                    maxWidth: { xs: "90%", sm: "420px", md: "40%" },
                    height: "auto",
                    zIndex: 1,
                    mt: 4,
                  }}
                />
              </Stack>
            </Slide>
          </Fade>
        </Grid>
      </Grid>

      {/* Floating labels and Image */}
      <Fade in={loaded} timeout={1800}>
        <Slide direction="up" in={loaded} timeout={1800}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              position: "relative",
              mt: { md: 6, lg: 8 },
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: { md: 2, lg: 4 },
            }}
          >
            <FloatingLabel
              text="Crisis We Are Dealing With"
              icon={<InsightsIcon fontSize="inherit" />}
              sx={{
                top: { lg: "0%", md: "10%" },
                left: { lg: "0%", md: "-9%" },
              }}
              link="/crisis"
            />
            <FloatingLabel
              text="Truth Estimation AI"
              icon={<PublicIcon fontSize="inherit" />}
              sx={{ bottom: "33%", left: { lg: "12.5%", md: "-5%" } }}
              link="/change"
            />
            <FloatingLabel
              text="Change We Are Bringing"
              icon={<PsychologyIcon fontSize="inherit" />}
              sx={{
                top: { lg: "0%", md: "10%" },
                right: { lg: "0%", md: "-9%" },
              }}
              link="/change"
            />
            <FloatingLabel
              text="Quest Product"
              icon={<StorageIcon fontSize="inherit" />}
              sx={{ bottom: "33%", right: { lg: "12.5%", md: "-5%" } }}
              link="/products/quest"
            />
            <Box
              component="img"
              src={heroImage}
              alt="AI Hero"
              sx={{
                maxWidth: { xs: "90%", sm: "420px", md: "100%" },
                height: "auto",
                zIndex: 1,
                my: 5,
              }}
            />
          </Box>
        </Slide>
      </Fade>
    </Box>
  );
};

export default HeroSection;
