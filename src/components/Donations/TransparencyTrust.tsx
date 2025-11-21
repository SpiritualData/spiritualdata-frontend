import React from "react";
import { Box, Typography, useTheme, Grid, LinearProgress } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AssessmentIcon from "@mui/icons-material/Assessment";

interface BudgetItem {
  category: string;
  percentage: number;
  color: string;
}

const TransparencyTrust: React.FC = () => {
  const theme = useTheme();

  const budgetItems: BudgetItem[] = [
    {
      category: "Research & Product Development",
      percentage: 65,
      color: theme.palette.primary.focus as string,
    },
    {
      category: "Community Impact Programs",
      percentage: 20,
      color: theme.palette.primary.hover as string,
    },
    {
      category: "Data Infrastructure & AI Ethics Oversight",
      percentage: 10,
      color: "#4A90E2",
    },
    {
      category: "Operations & Outreach",
      percentage: 5,
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
            borderRadius: 4,
            bgcolor: theme.palette.cosmic.elevated,
            boxShadow: `0px 4px 16px ${theme.palette.cardshadow.main}`,
            mb: 5,
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

          <Grid container spacing={3}>
            {budgetItems.map((item, index) => (
              <Grid size={{xs:12}} key={index}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "0.95rem", md: "1rem" },
                      }}
                    >
                      {item.category}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: item.color,
                        fontSize: { xs: "1.1rem", md: "1.2rem" },
                      }}
                    >
                      {item.percentage}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={item.percentage}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      bgcolor: theme.palette.cosmic.secondary,
                      "& .MuiLinearProgress-bar": {
                        bgcolor: item.color,
                        borderRadius: 5,
                      },
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Verification Icons and Text */}
        <Grid container spacing={4}>
          <Grid  size={{xs:12,md:6}}>
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
              <VerifiedUserIcon
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
                  Independent Audits
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  Our accounts are independently audited to ensure complete
                  financial accountability and integrity.
                </Typography>
              </Box>
            </Box>
          </Grid>

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
