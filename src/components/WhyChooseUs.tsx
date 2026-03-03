import { useEffect, useRef, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import type { WhyChooseUsData } from "../data/homeData";

type WhyChooseUsProps = {
  data: WhyChooseUsData;
};

const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.001 },
    );

    observer.observe(element);

    // Handle initial visibility on mount.
    const rect = element.getBoundingClientRect();
    const initiallyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (initiallyVisible) {
      setIsInView(true);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      const playAttempt = video.play();
      if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(() => undefined);
      }
    } else {
      video.pause();
    }
  }, [isInView]);

  const { media, overline, heading, reasons } = data;
  const normalizedMedia =
    typeof media === "string"
      ? {
          src: media,
          type: /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(media) ? "video" : "image",
        }
      : media;
  const isVideo = normalizedMedia.type === "video";

  return (
    <Box
      ref={sectionRef}
      id="why-choose-us-section"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // ✅ stack on mobile, side by side on md+
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: theme.palette.cosmic.primary,
        zIndex: -2,
      }}
    >
      {/* Conditionally render fixed media only while in view */}
      {isInView && (
        <>
          {isVideo ? (
            <Box
              component="video"
              ref={videoRef}
              src={normalizedMedia.src}
              autoPlay
              muted
              loop
              playsInline
              sx={{
                position: { xs: "relative", md: "fixed" },
                display: "block",
                top: 0,
                left: 0,
                mt: { xs: 5, md: 12 },
                width: { xs: "100%", md: isVideo ? "40vw" : "50vw" },
                height: { xs: "60vh", md: "90vh" },
                objectFit: "contain",
                objectPosition: {
                  xs: "center",
                  md: isVideo ? "right" : "center",
                },
                zIndex: { xs: 0, md: -1 },
                bgcolor: theme.palette.primary.main,
              }}
            />
          ) : (
            <Box
              sx={{
                position: { xs: "relative", md: "fixed" }, // ✅ fixed only on md+, relative on mobile
                display: { xs: "none", md: "block" },
                top: 0,
                left: 0,
                width: { xs: "100%", md: "50vw" },
                height: { xs: "40vh", md: "100vh" },
                backgroundImage: `url(${normalizedMedia.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: -1,
              }}
            />
          )}
        </>
      )}
      {/* Left spacer to balance the layout (only needed on md+) */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: { md: "50vw" },
          minHeight: { md: "100vh" },
          flexShrink: 0,
        }}
      />

      {/* Right scrollable content */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          backgroundColor: isVideo ? theme.palette.primary.main : null,
          pr: isVideo ? { xs: 3, md: 10, lg: 30 } : { xs: 3, md: 10, lg: 20 },
          pl: isVideo ? { xs: 3, md: 0, lg: 10 } : { xs: 3, md: 10, lg: 20 },
          py: { xs: 6, md: 12 },
          zIndex: 1,
        }}
      >
        <Typography
          variant="overline"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "12px", md: "14px" },
            letterSpacing: "4px",
            color: theme.palette.primary.hover,
            textTransform: "uppercase",
          }}
        >
          {overline}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            mb: 8,
            color: theme.palette.primary.hover,
            lineHeight: 1.2,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            whiteSpace: "pre-line",
          }}
        >
          {heading}
        </Typography>

        {reasons.map((item, index) => (
          <Box
            key={index}
            sx={{
              mb: 4,
              pb: 3,
              borderBottom: "1px solid",
              borderColor: theme.palette.divider,
            }}
          >
            {/* Top Row: Icon + Title */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 1,
              }}
            >
              {/* Icon inside dark square box */}
              <Box
                sx={{
                  borderRadius: 1,
                  backgroundColor: theme.palette.text.primary,
                  p: 0.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 18,
                  height: 25,
                }}
              >
                <CheckCircleIcon
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: { xs: 24, md: 30 },
                  }}
                />
              </Box>

              {/* Heading */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
                  color: "#1F2540",
                  fontSize: { xs: 20, md: 28 },
                }}
              >
                {item.title}
              </Typography>
            </Box>

            {/* Bottom Row: Description */}
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                fontSize: { xs: 14, md: 16 },
                mr: { xs: 5, md: 0 },
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
