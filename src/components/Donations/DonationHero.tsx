import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Fade,
  Slide,
  Stack,
} from "@mui/material";
import DonationMethod from "./DonationsMethod";
import backgroundImage from "../../assets/images/donate/background/bg-shape-career.png"
const DonationHero: React.FC = () => {
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.cosmic.primary,
        backgroundImage: `url(${backgroundImage})`, // 👈 Add your image path here
        backgroundSize: "cover", // ensures the image covers the section
        backgroundPosition: "top", // centers the image
        backgroundRepeat: "no-repeat", // avoids repeating tiles
        minHeight: { xs: "70vh", sm: "60vh", md: "65vh" },
        px: { xs: 3, sm: 6, md: 10, lg: 16 },
        pt: { xs: 8, sm: 10, md: 12 },
        pb: { xs: 6, sm: 8, md: 10 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Box maxWidth="1000px">
        {/* Main Headline */}
        <Fade in={loaded} timeout={800}>
          <Slide direction="up" in={loaded} timeout={800}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: "2rem",
                  sm: "2.8rem",
                  md: "3.5rem",
                  lg: "4rem",
                },
                color: theme.palette.primary.hover,
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Help Science Find the Soul Again.
            </Typography>
          </Slide>
        </Fade>

        {/* Subheadline */}
        <Fade in={loaded} timeout={1000}>
          <Slide direction="up" in={loaded} timeout={1000}>
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.15rem",
                  md: "1.25rem",
                },
                color: theme.palette.text.primary,
                lineHeight: 1.7,
                mb: 2,
                maxWidth: "900px",
                mx: "auto",
              }}
            >
              We're building the world's first global research movement that uses data science to study and strengthen human faith,
              empathy, and well-being. Your donation funds the products & research that will help future generations live with purpose,
              peace, and truth.
            </Typography>
          </Slide>
        </Fade>

       

        {/* CTA Button */}
        <Fade in={loaded} timeout={1200}>
          <Slide direction="up" in={loaded} timeout={1200}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mb: 3 }}
            >
              <DonationMethod title={"Donate Now — Make Science Serve the Soul"} />
            </Stack>
          </Slide>
        </Fade>

        {/* Supporting Emotional Line */}
        <Fade in={loaded} timeout={1400}>
          <Slide direction="up" in={loaded} timeout={1400}>
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xs: "0.95rem",
                  sm: "1.05rem",
                  md: "1.1rem",
                },
                color: theme.palette.primary.focus,
                fontWeight: 600,
                fontStyle: "italic",
                mt: 4,
              }}
            >
              Every dollar you give helps us prove what truly heals the human
              heart.
            </Typography>
          </Slide>
        </Fade>
      </Box>
    </Box>
  );
};

export default DonationHero;
