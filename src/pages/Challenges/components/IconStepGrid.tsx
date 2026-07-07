import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export type ChallengeStep = {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  action?: React.ReactNode;
};

/** Responsive grid of icon cards, one per process step. */
const IconStepGrid: React.FC<{ steps: ChallengeStep[] }> = ({ steps }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
        gap: { xs: 3, md: 4 },
      }}
    >
      {steps.map((step, index) => (
        <Box
          key={step.title}
          sx={{
            backgroundColor: theme.palette.cosmic.elevated,
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            boxShadow: `0px 4px 24px ${theme.palette.cardshadow.main}`,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: `0px 10px 30px ${theme.palette.cardshadow.main}`,
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                backgroundColor: theme.palette.primary.hero,
                color: theme.palette.primary.focus,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {step.icon}
            </Box>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 2,
                color: theme.palette.text.secondary,
              }}
            >
              Step {index + 1}
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
            {step.title}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ color: "text.secondary", lineHeight: 1.7, flexGrow: 1 }}
          >
            {step.description}
          </Typography>
          {step.action && <Box sx={{ mt: 1 }}>{step.action}</Box>}
        </Box>
      ))}
    </Box>
  );
};

export default IconStepGrid;
