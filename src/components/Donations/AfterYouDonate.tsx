import React from "react";
import { Box, Typography, useTheme, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InsightsIcon from "@mui/icons-material/Insights";
import UpdateIcon from "@mui/icons-material/Update";

interface Benefit {
  icon: React.ReactNode;
  text: string;
}

const AfterYouDonate: React.FC = () => {
  const theme = useTheme();

  const benefits: Benefit[] = [
    {
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      text: "A personal thank-you message from our research team",
    },
    {
      icon: <InsightsIcon sx={{ fontSize: 32 }} />,
      text: "Access to exclusive project insights as a supporter",
    },
    {
      icon: <UpdateIcon sx={{ fontSize: 32 }} />,
      text: "Quarterly updates showing how your contribution is changing real lives",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: theme.palette.cosmic.primary,
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 6, md: 10, lg: 16 },
      }}
    >
      <Box maxWidth="1000px" mx="auto">
        {/* Section Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
            color: theme.palette.primary.hover,
            textAlign: "center",
            mb: 2,
          }}
        >
          After You Donate
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
            color: theme.palette.text.secondary,
            textAlign: "center",
            mb: 5,
            fontWeight: 400,
          }}
        >
          You'll immediately receive:
        </Typography>

        {/* Benefits List */}
        <Stack spacing={3} mb={5}>
          {benefits.map((benefit, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2.5,
                py: { xs: 2.5, md: 3 },
                px: { xs: 2.5, md: 8 },
                borderRadius: 3,
                bgcolor: theme.palette.cosmic.secondary,
                boxShadow: `0px 2px 8px ${theme.palette.cardshadow.main}`,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateX(8px)",
                  boxShadow: `0px 4px 12px ${theme.palette.cardshadow.main}`,
                },
              }}
            >
              <Box
                sx={{
                  color: theme.palette.primary.focus,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {benefit.icon}
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                {benefit.text}
              </Typography>
            </Box>
          ))}
        </Stack>

        {/* Closing Message */}
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1.15rem", sm: "1.25rem", md: "1.35rem" },
              color: theme.palette.primary.hover,
              fontWeight: 600,
              lineHeight: 1.7,
            }}
          >
            Because when you give to Spiritual Data, you're not just funding
            research — you're investing in the world's moral future.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AfterYouDonate;
