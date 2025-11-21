import React from "react";
import { Box, Typography, useTheme, Grid } from "@mui/material";

const WhySupportMatters: React.FC = () => {
  const theme = useTheme();

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
            mb: 6,
          }}
        >
          Why Your Support Matters Now
        </Typography>

        {/* Two-column Info Area */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left Column */}
          <Grid  size={{xs:12,md:6}}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.16rem" },
                color: theme.palette.text.primary,
                lineHeight: 1.8,
                mb: 3,
                textAlign: { xs: "center", md: "justify" },
                fontWeight:600
              }}
            >
              We're entering a defining moment in human development.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.16rem" },
                color: theme.palette.text.primary,
                lineHeight: 1.8,
                mb: 3,
                textAlign: { xs: "center", md: "justify" },
                fontWeight:600
              }}
            >
              Science has mapped the brain, but not yet the heart.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.16rem" },
                color: theme.palette.text.primary,
                lineHeight: 1.8,
                mb: 4,
                textAlign: { xs: "center", md: "justify" },
                fontWeight:600
              }}
            >
              We can either let technology widen our emotional gaps, or use it
              to deepen our compassion.
            </Typography>
          </Grid>

          {/* Right Column */}
          <Grid size={{xs:12,md:6}} >
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                bgcolor: theme.palette.cosmic.secondary,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1.15rem", sm: "1.25rem", md: "1.35rem" },
                  color: theme.palette.primary.hover,
                  fontWeight: 600,
                  lineHeight: 1.7,
                  mb: 2,
                }}
              >
                Your donation ensures that data serves humanity — not the other
                way around.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem" },
                  color: theme.palette.text.primary,
                  lineHeight: 1.7,
                }}
              >
                With your help, we can build research and technologies that keep
                human values at the center of progress.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Closing Statement */}
        <Box mt={6} textAlign="center">
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.2rem" },
              color: theme.palette.text.secondary,
              fontWeight: 500,
              lineHeight: 1.8,
              fontStyle: "italic",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Every contribution moves us closer to a measurable model of moral
            and emotional wellness that future generations can rely on.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WhySupportMatters;
