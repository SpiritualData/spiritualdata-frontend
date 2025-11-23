import React from "react";
import {
  Box,
  Typography,
  Fade,
  Slide,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useInView } from "../../hooks/useInView"; // adjust path as needed

const OurMission: React.FC = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        bgcolor: "cosmic.primary",
        py: { xs: 8, sm: 10, md: 12 },
        px: { xs: 3, sm: 6, md: 12 },
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Box>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              color: "text.primary",
              fontWeight: 600,
              fontSize: { xs: "2rem", sm: "2.5rem" },
            }}
          >
            Our Mission
          </Typography>
        </Box>
      </Fade>

      <Slide direction="up" in={inView} timeout={1000}>
        <Box maxWidth="md" mx="auto">
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1rem", sm: "1.25rem" },
              lineHeight: 1.8,
              mt: 2,
            }}
          >
            Provide a neutral source of truth for spiritual beliefs and the
            nature of reality. We create systems that allow undeniable evidence
            to emerge — evidence that persuades both belief and scientific
            consensus to evolve.
          </Typography>
        </Box>
      </Slide>
    </Box>
  );
};

export default OurMission;
