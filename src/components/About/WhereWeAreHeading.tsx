import { useInView } from "@/hooks/useInView";
import { East } from "@mui/icons-material";
import { Box, Button, Slide, Typography, useTheme } from "@mui/material";
import React from "react";

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
        py: 20,
        px: { xs: 2, md: 30 },
        backgroundColor: "primary.main",
      }}
    >
      {/* Title */}
      <Slide direction="up" in={sectionInView} timeout={600}>
        <Typography
          variant="h2"
          fontWeight={600}
          sx={{
            color: isDark ? contrastText : theme.palette.primary.hero,
            textShadow: `0 0 10px ${theme.palette.primary.focus}`,
            letterSpacing: 2,
            textAlign: "center",
            fontSize: { xs: "26px", md: "50px" },
          }}
        >
          Where We're Headed
        </Typography>
      </Slide>

      {/* Paragraph */}
      <Slide direction="up" in={sectionInView} timeout={800}>
        <Typography
          variant="body1"
          sx={{
            letterSpacing: 2,
            textAlign: "center",
              fontSize: { xs: 16, md: 20 },
              mt: 5,
              mb: 8,
              lineHeight: 2,
          }}
        >
          We envision a world where spiritual science is not fringe - it's
          foundational. A world where every person has access to tools that help
          them understand their consciousness, their purpose, and their place in
          the universe. A world where evidence - not belief - guides our biggest
          questions. As technology evolves, so will our capacity to reveal
          deeper truths - together. We're not just building tools, we're
          building a movement: one that replaces division with clarity,
          isolation with connection, and confusion with understanding. When
          spiritual evidence becomes undeniable, unity becomes inevitable.
        </Typography>
      </Slide>

      {/* Button */}
      <Slide direction="up" in={sectionInView} timeout={1000}>
        <Button
          // component={Link}
          // to="/dona"
          variant="outlined"
          sx={{
            backgroundColor: theme.palette.primary.hero,
            borderRadius: 8,
            height: 42,
            px: 3,
            fontWeight: 600,
            fontSize: "14px",
            textTransform: "uppercase",
            fontFamily: "Poppins, sans-serif",
            letterSpacing: "0.8px",
            transition: "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
            color: theme.palette.primary.focus,
            "&:hover": {
              backgroundColor: theme.palette.primary.focus,
              color: theme.palette.primary.hero,
            },
            display: "flex",
            alignItems: "center",
            mx: "auto",
          }}
        >
          Help Build the Future
          <East sx={{ ml: 0.5, fontSize: "16px" }} />
        </Button>
      </Slide>
    </Box>
  );
};

export default WhereWeAreHeading;
