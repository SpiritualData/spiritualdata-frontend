import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import videoBg from "../../assets/images/products/video-bg-1.webp";
import { useInView } from "../../hooks/useInView";

type QuestMissionData = {
  badge: string;
  title: string;
  description: string;
};

const QuestMission = ({ data }: { data: QuestMissionData }) => {
  const theme = useTheme();
  const fadeStart = alpha(theme.palette.primary.main, 1);
  const fadeEnd = alpha(theme.palette.primary.main, 0);
  const { ref, inView } = useInView({ threshold: 0.35 });

  return (
    <section
      ref={ref}
      style={{
        backgroundImage: `url(${videoBg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "30px",
          background: `linear-gradient(to bottom, ${fadeStart}, ${fadeEnd})`,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30px",
          background: `linear-gradient(to top, ${fadeStart}, ${fadeEnd})`,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          minHeight: { xs: "70vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          perspective: "1200px",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              borderRadius: { xs: 4, md: 6 },
              border: `0.5px solid ${alpha(theme.palette.common.white, 0.005)}`,
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.common.black,
                0.72,
              )}, ${alpha(theme.palette.primary.main, 0.5)})`,
              boxShadow: `
                                0 24px 70px ${alpha(theme.palette.common.black, 0.55)},
                                0 0 40px ${alpha(theme.palette.primary.main, 0.25)}
                            `,
              backdropFilter: "blur(6px)",
              maxWidth: 1200,
              mx: "auto",
              px: { xs: 3, sm: 6, md: 10 },
              py: { xs: 5, sm: 6, md: 7 },
              textAlign: "center",
              transformStyle: "preserve-3d",
              willChange: "transform",
              animation: inView
                ? "questVisionCardIn 2.6s cubic-bezier(0.22, 1, 0.36, 1) both"
                : "none",
              "@keyframes questVisionCardIn": {
                "0%": {
                  transform: "translateY(30px) rotateY(0deg) scale(0.98)",
                },
                "55%": {
                  transform: "translateY(-18px) rotateY(720deg) scale(1.02)",
                },
                "75%": {
                  transform: "translateY(8px) rotateY(720deg) scale(0.995)",
                },
                "100%": {
                  transform: "translateY(0px) rotateY(720deg) scale(1)",
                },
              },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
                py: 0.5,
                borderRadius: 999,
                border: `1px solid ${alpha(
                  theme.palette.primary.focus || theme.palette.primary.main,
                  0.7,
                )}`,
                color:
                  theme.palette.primary.focus || theme.palette.primary.main,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontSize: "0.7rem",
                fontWeight: 600,
                mb: 2,
                backgroundColor: alpha(theme.palette.common.black, 0.3),
              }}
            >
              {data.badge}
            </Box>
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.common.white,
                fontWeight: 700,
                mb: 2,
                letterSpacing: 0.8,
              }}
            >
              {data.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: alpha(theme.palette.common.white, 0.78),
                maxWidth: 820,
                mx: "auto",
                lineHeight: 1.7,
                letterSpacing: 0.9,
              }}
            >
              {data.description}
            </Typography>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default QuestMission;
