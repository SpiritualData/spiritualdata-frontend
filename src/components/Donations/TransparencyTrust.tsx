import React from "react";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ScienceIcon from "@mui/icons-material/Science";
import GroupsIcon from "@mui/icons-material/Groups";
import StorageIcon from "@mui/icons-material/Storage";
import CampaignIcon from "@mui/icons-material/Campaign";

interface BudgetItem {
  category: string;
  icon: React.ReactNode;
  color: string;
}

const TransparencyTrust: React.FC = () => {
  const theme = useTheme();

  const budgetItems: BudgetItem[] = [
    {
      category: "Research & Product Development",
      icon: <ScienceIcon sx={{ fontSize: 32 }} />,
      color: theme.palette.primary.focus as string,
    },
    {
      category: "Community Impact Programs",
      icon: <GroupsIcon sx={{ fontSize: 32 }} />,
      color: theme.palette.primary.hover as string,
    },
    {
      category: "Data Infrastructure & AI Ethics Oversight",
      icon: <StorageIcon sx={{ fontSize: 32 }} />,
      color: "#4A90E2",
    },
    {
      category: "Operations & Outreach",
      icon: <CampaignIcon sx={{ fontSize: 32 }} />,
      color: "#7B68EE",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: theme.palette.cosmic.secondary,
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 6, md: 10, lg: 16 },
      }}
    >
      <Box maxWidth="1200px" mx="auto">
        {/* Section Title */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
              color: theme.palette.primary.hover,
              mb: 2,
            }}
          >
            Transparency & Trust
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
              color: theme.palette.text.secondary,
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            We believe transparency is the foundation of faith — in science and
            in giving.
          </Typography>
        </Box>

        {/* Budget Breakdown */}
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            pb: { xs: 4, md: 6 },
            borderRadius: 4,
            bgcolor: theme.palette.cosmic.elevated,
            boxShadow: `0px 4px 16px ${theme.palette.cardshadow.main}`,
            mb: 5,
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.hover,
              mb: 4,
              textAlign: "center",
              fontSize: { xs: "1.3rem", md: "1.5rem" },
            }}
          >
            Here's how your contribution is used:
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {budgetItems.map((item, index) => (
              <Grid size={{xs:6, sm:6, md:3}} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: { xs: 1.5, md: 2 },
                    borderRadius: 2,
                    bgcolor: theme.palette.cosmic.secondary,
                    minHeight: { xs: 100, md: 120 },
                  }}
                >
                  <Box sx={{ color: item.color, mb: 1.5 }}>
                    {item.icon}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.9rem" },
                      lineHeight: 1.3,
                    }}
                  >
                    {item.category}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Verification Icons and Text */}
        <Grid container spacing={4} justifyContent="center">
          <Grid size={{xs:12,md:6}}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                borderRadius: 3,
                bgcolor: theme.palette.cosmic.elevated,
                height: "100%",
              }}
            >
              <AssessmentIcon
                sx={{
                  fontSize: 40,
                  color: theme.palette.primary.focus,
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.primary.hover,
                    mb: 1,
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                  }}
                >
                  Annual Donor Reports
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  We publish annual donor reports with verified impact metrics
                  showing exactly how your contribution creates change.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TransparencyTrust;
