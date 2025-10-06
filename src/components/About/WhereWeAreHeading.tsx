import { useInView } from "@/hooks/useInView";
import { East } from "@mui/icons-material";
import { Box, Button, Grid, Slide, Typography, useTheme } from "@mui/material";
import React from "react";
import { alpha } from "@mui/material/styles";
import bgimg from "../../assets/Images/About/bg.gif";
import sideImg from "../../assets/Images/About/image3456.webp";

const WhereWeAreHeading: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.2,
  });

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const contrastText = theme.palette.getContrastText(
    theme.palette.primary.main
  );

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 10, md: 20 },
        px: { xs: 2, md: 30 },
        position: "relative",
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: alpha(theme.palette.primary.main, 0.2),
          zIndex: 0,
        },
        "& > *": {
          position: "relative",
          zIndex: 1,
        },
      }}
    >
      {/* Heading */}
      <Slide direction="up" in={sectionInView} timeout={600}>
        <Typography
          variant="h2"
          fontWeight={600}
          sx={{
            color: isDark ? contrastText : theme.palette.primary.main,
            textShadow: `0 0 10px ${theme.palette.primary.focus}`,
            letterSpacing: 2,
            textAlign: "center",
            fontSize: { xs: "26px", md: "50px" },
            mb: { xs: 4, md: 6 },
          }}
        >
          Where We're Headed
        </Typography>
      </Slide>

      {/* Top Row - Intro Paragraph */}
      <Slide direction="up" in={sectionInView} timeout={800}>
        <Typography
          variant="body1"
          sx={{
            letterSpacing: 1.5,
            textAlign: "justify",
            fontSize: { xs: 16, md: 20 },
            lineHeight: 2.1,
            mb: { xs: 4, md: 0 },
            color: theme.palette.primary.main,
          }}
        >
          We envision a world where spiritual science is not fringe - it's
          foundational. A world where reliable evidence guides our biggest
          questions - and where consciousness, compassion, wisdom, and
          connection are at the center of progress.
        </Typography>
      </Slide>

      {/* Bottom Row with Two Columns */}
      <Grid
        container
        spacing={0}
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Column */}
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
          component="div"
          {...({} as any)}
        >
          {/* Paragraph */}
          <Slide direction="left" in={sectionInView} timeout={900}>
            <Typography
              variant="body1"
              sx={{
                letterSpacing: 1.5,
                textAlign: "justify",
                fontSize: { xs: 16, md: 20 },
                lineHeight: 2.1,
                maxWidth: 700,
                mb: 6,
                color: theme.palette.primary.main,
              }}
            >
              We're not just building tools - we are building a movement. One
              that replaces division with clarity, isolation with connection,
              and confusion with understanding. As technology evolves, so will
              our capacity to reveal deeper truths - together.
            </Typography>
          </Slide>

          {/* CTA Button */}
          <Slide direction="left" in={sectionInView} timeout={1100}>
            <Button
              variant="outlined"
              sx={{
                alignSelf: { xs: "center", md: "flex-start" },
                backgroundColor: theme.palette.primary.hero,
                color: theme.palette.primary.focus,
                borderRadius: 8,
                height: 42,
                px: 3,
                ml: { xs: 0, md: 1 },
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                fontFamily: "Poppins, sans-serif",
                letterSpacing: "0.5px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: theme.palette.primary.focus,
                  color: theme.palette.primary.hero,
                },
              }}
            >
              Help Build the Future
              <East sx={{ ml: 0.5, fontSize: "16px" }} />
            </Button>
          </Slide>
        </Grid>

        {/* Right Column - Image */}
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          sx={{
            mt: { xs: 0, md: 4 },
            ml: { xs: 0, md: 4 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          component="div"
          {...({} as any)}
        >
          <Slide direction="right" in={sectionInView} timeout={1200}>
            <Box
              sx={{
                width: "100%",
                maxWidth: 450,
                borderRadius: 5,
                overflow: "hidden",
                border: `8px solid ${theme.palette.primary.main}`,
                boxShadow: theme.palette.primary.focus
                  ? `0 0 30px ${alpha(theme.palette.primary.main, 0.7)}`
                  : undefined,
              }}
            >
              <Box
                component="img"
                src={sideImg}
                alt="Future Vision"
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhereWeAreHeading;
