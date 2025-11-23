import React from "react";
import { Box, Typography, useTheme, Stack } from "@mui/material";
import DonationMethod from "./DonationsMethod";

const ClosingCTA: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.cosmic.secondary,
        py: { xs: 10, md: 14 },
        px: { xs: 3, sm: 6, md: 10, lg: 16 },
        textAlign: "center",
      }}
    >
      <Box maxWidth="900px" mx="auto">
        {/* Main CTA Headline */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
            color: theme.palette.primary.hover,
            lineHeight: 1.3,
            mb: 3,
          }}
        >
          Let's Make the Next Frontier of Science About the Soul
        </Typography>

        {/* Supporting Text */}
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
            color: theme.palette.text.primary,
            fontWeight: 400,
            lineHeight: 1.7,
            mb: 5,
          }}
        >
          Your belief in our mission keeps discovery alive.
        </Typography>

        {/* Donate Button */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          <DonationMethod title={"Donate Now"} />
        </Stack>

        {/* Additional Info */}
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
            color: theme.palette.text.secondary,
            fontStyle: "italic",
          }}
        >
          100% secure • Tax deductible (U.S.) • Impact updates shared quarterly
        </Typography>
      </Box>
    </Box>
  );
};

export default ClosingCTA;
