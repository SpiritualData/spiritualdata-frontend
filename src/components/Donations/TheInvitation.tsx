import React from "react";
import { Box, Typography, useTheme, Stack } from "@mui/material";
import DonationMethod from "./DonationsMethod";

const TheInvitation: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.cosmic.primary,
         background: `linear-gradient(to bottom, ${theme.palette.cosmic.secondary} 0%, transparent 50%)`,
         backgroundBlendMode: "overlay",
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 6, md: 10, lg: 16 },
      }}
    >
      <Box maxWidth="1000px" mx="auto" textAlign="center">
        {/* Section Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
            color: theme.palette.primary.hover,
            mb: 4,
          }}
        >
          The Invitation
        </Typography>

        {/* Main Message */}
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.35rem", md: "1.5rem" },
            color: theme.palette.text.primary,
            fontWeight: 500,
            lineHeight: 1.7,
            mb: 4,
          }}
        >
          Join the movement to make science serve the soul.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.2rem" },
            color: theme.palette.text.primary,
            lineHeight: 1.8,
            mb: 3,
          }}
        >
          Your support is not just a donation — it's a statement of belief in a
          better, more conscious future.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.2rem" },
            color: theme.palette.text.primary,
            lineHeight: 1.8,
            mb: 5,
          }}
        >
          Together, we can make spirituality verifiable and compassion scalable.
        </Typography>

        {/* CTA Button */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 3 }}
        >
          <DonationMethod title={"Become a Donor → "} />
        </Stack>

        {/* Supporting Info */}
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

export default TheInvitation;
