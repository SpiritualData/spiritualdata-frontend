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
        // background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, transparent 100%)`,

        backgroundColor: "#F2F3EB",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23f2f3eb' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23f2f3eb' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23f2f3eb' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23f2f3eb' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23F2F3EB' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23e8ebd6' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23e1e7be' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23dbe5a2' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23d6e784' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23D3EB63' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "cover",
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






