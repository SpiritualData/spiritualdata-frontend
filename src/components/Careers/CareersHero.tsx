import React, { useEffect, useMemo, useState } from "react";
import { Box, Typography, Button, Fade, Slide } from "@mui/material";
import { useTheme } from "@mui/material";
import image1 from "../../assets/images/careers/careers1.webp";
import image2 from "../../assets/images/careers/careers2.webp";
import image3 from "../../assets/images/careers/careers3.webp";
import image4 from "../../assets/images/careers/careers4.webp";
import image5 from "../../assets/images/careers/careers5.webp";
import image6 from "../../assets/images/careers/careers6.webp";
import { useInView } from "../../hooks/useInView";

const HeroWithFloatingImages: React.FC = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({ threshold: 0.3 });

  const images = useMemo(
    () => [
      {
        src: image1,
        top: { xs: "5%", md: "10%" },
        left: { xs: "2%", md: "5%" },
        width: { xs: 140, sm: 180, md: 250 },
        height: { xs: 140, sm: 180, md: 250 },
        dir: "right",
      },
      {
        src: image2,
        top: { xs: "5%", md: "10%" },
        right: { xs: "8%", md: "15%" },
        width: { xs: 220, sm: 300, md: 400 },
        height: { xs: 110, sm: 150, md: 200 },
        dir: "left",
      },
      {
        src: image3,
        top: { xs: "20%", md: "30%" },
        left: { xs: "8%", md: "15%" },
        width: { xs: 130, sm: 160, md: 200 },
        height: { xs: 85, sm: 110, md: 130 },
        dir: "right",
      },
      {
        src: image4,
        top: { xs: "38%", md: "45%" },
        right: { xs: "2%", md: "5%" },
        width: { xs: 200, sm: 240, md: 300 },
        height: { xs: 120, sm: 150, md: 180 },
        dir: "left",
      },
      {
        src: image5,
        bottom: { xs: "8%", md: "10%" },
        left: { xs: "5%", md: "10%" },
        width: { xs: 140, sm: 170, md: 200 },
        height: { xs: 180, sm: 210, md: 250 },
        dir: "right",
      },
      {
        src: image6,
        bottom: { xs: "3%", md: "4%" },
        right: { xs: "15%", md: "28%" },
        width: { xs: 200, sm: 240, md: 300 },
        height: { xs: 190, sm: 230, md: 280 },
        dir: "left",
      },
    ],
    []
  );

  const [showTitle, setShowTitle] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [visibleImages, setVisibleImages] = useState(() =>
    images.map(() => false)
  );

  useEffect(() => {
    if (!inView) return;
    setShowTitle(true);
    const t1 = setTimeout(() => setShowBody(true), 150);
    const t2 = setTimeout(() => setShowButtons(true), 300);
    const base = 450;
    const step = 140;
    const timers = images.map((_, idx) =>
      setTimeout(() => {
        setVisibleImages((prev) => prev.map((v, i) => (i === idx ? true : v)));
      }, base + idx * step)
    );

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      timers.forEach(clearTimeout);
    };
  }, [inView, images]);

  const APPLY_URL = "https://forms.gle/E6A9p3GgvUDoy2q18";
  const LEARN_URL =
    "https://spiritualdata.notion.site/Learn-more-about-Spiritual-Data-1b40ed83d417801ebe34f6ffa015c0c0";

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.cosmic.primary,
        overflow: "hidden",
        px: { xs: 2, md: 0 }, // small padding on mobile
      }}
    >
      {/* Center Text */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: { xs: "100%", md: 700 },
          ml: { xs: 0, md: 10 },
        }}
      >
        {/* Title */}
        <Slide in={showTitle} direction="up" timeout={1000} mountOnEnter>
          <div>
            <Fade in={showTitle} timeout={800}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2rem", md: "3rem" },
                  textAlign: "left",
                  letterSpacing: 2,
                }}
              >
                <span
                  style={{
                    fontSize: "4.5rem",
                    color: theme.palette.primary.hero,
                    textShadow: `0 0 10px ${theme.palette.primary.focus}`,
                  }}
                >
                  Careers{" "}
                </span>{" "}
                at Spiritual Data
              </Typography>
            </Fade>
          </div>
        </Slide>

        {/* Body */}
        <Slide in={showBody} direction="up" timeout={500} mountOnEnter>
          <div>
            <Fade in={showBody} timeout={800}>
              <Typography
                variant="body1"
                sx={{
                  my: 4,
                  fontSize: "1.1rem",
                  textAlign: "left",
                  letterSpacing: 2,
                }}
              >
                Join Spiritual Data to enable intellectual autonomy and
                scientific collaboration at global scale. If you're excited to
                own meaningful problems - and see your work change lives - this
                is your place.
              </Typography>
            </Fade>
          </div>
        </Slide>

        {/* Buttons */}
        <Slide in={showButtons} direction="up" timeout={500} mountOnEnter>
          <div>
            <Fade in={showButtons} timeout={800}>
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent="flex-start"
                gap={2}
                mt={5}
              >
                <Button
                  variant="contained"
                  href={APPLY_URL}
                  sx={{
                    backgroundColor: theme.palette.primary.hero,
                    color: theme.palette.primary.focus,
                    borderRadius: 8,
                    height: 42,
                    px: 3,
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    fontFamily: "Poppins, sans-serif",
                    letterSpacing: "0.5px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.focus,
                      color: theme.palette.primary.hero,
                    },
                  }}
                >
                  Apply Now
                </Button>
                <Button
                  variant="contained"
                  href={LEARN_URL}
                  sx={{
                    backgroundColor: theme.palette.primary.focus,
                    color: theme.palette.primary.hero,
                    borderRadius: 8,
                    height: 42,
                    px: 3,
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    fontFamily: "Poppins, sans-serif",
                    letterSpacing: "0.5px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.hero,
                      color: theme.palette.primary.focus,
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Fade>
          </div>
        </Slide>
      </Box>

      {/* Floating Images */}
      {images.map((img, i) => (
        <Fade in={visibleImages[i]} key={i} timeout={1500}>
          <Box
            component="img"
            src={img.src}
            alt={`Floating ${i}`}
            sx={{
              position: "absolute",
              borderRadius: 6,
              boxShadow: `0 0 50px ${theme.palette.primary.hero}`,
              objectFit: "cover",
              willChange: "transform, opacity",
              ...img,
            }}
          />
        </Fade>
      ))}
    </Box>
  );
};

export default HeroWithFloatingImages;






