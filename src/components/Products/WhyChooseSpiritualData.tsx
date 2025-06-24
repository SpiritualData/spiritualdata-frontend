import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import LockIcon from "@mui/icons-material/Lock";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";

const data = [
  {
    title: "Privacy First",
    icon: LockIcon,
    description:
      "At Spiritual Data, privacy is a core commitment. Your data stays yours — we never share or sell it. With encryption and transparent handling, we ensure your information is secure and always under your control.",
  },
  {
    title: "Purpose-Built AI",
    icon: BuildCircleIcon,
    description:
      "Our AI solutions are built with purpose — not just innovation for innovation’s sake. We design tools that solve real problems, deliver practical value, and create measurable impact in everyday life.",
  },
  {
    title: "Human-Centric Design",
    icon: FavoriteIcon,
    description:
      "We build AI with empathy, focusing on clarity, ease, and emotional intelligence. Our tools make technology feel personal, supportive, and aligned with real human needs — not just business goals.",
  },
];

const WhyChooseSpiritualData: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py: 3,
        px: 1.5,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Why Choose Spiritual Data?
      </Typography>

      <Grid container spacing={8} justifyContent="center" mt={2}>
        {data.map((item) => (
          <Grid sx={{maxWidth: "25%", xs:12, sm:4, }} key={item.title}>
            <item.icon
              sx={{ fontSize: 40, color: theme.palette.primary.focus }}
            />
            <Typography variant="subtitle1" fontWeight="medium" mt={1}>
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              textAlign={"justify"}
            >
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Box mt={6} px={isSmallScreen ? 2 : 10}>
        <Typography variant="body1" fontStyle="italic" color="text.primary">
          "At Spiritual Data, we believe in AI that empowers people, not
          replaces them."
        </Typography>
        <Typography
          variant="subtitle2"
          color={theme.palette.primary.focus}
          mt={1}
        >
          —The Spiritual Data Team
        </Typography>
      </Box>
    </Box>
  );
};

export default WhyChooseSpiritualData;
