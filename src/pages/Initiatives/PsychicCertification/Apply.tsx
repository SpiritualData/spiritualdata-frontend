import React from "react";
import { Box, Button, Container, Paper, Typography, useTheme } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link as RouterLink } from "react-router-dom";
import HeaderSection from "../../../components/Initiatives/NestedInitiativesHeader";
import {
  applyHeaderData,
  applyProtectionsData,
  applyStepsData,
  certificationApplyFormUrl,
} from "../../../data/psychicAbilityCertificationData";

const Apply: React.FC = () => {
  const theme = useTheme();

  const primaryButtonSx = {
    backgroundColor: theme.palette.primary.focus,
    color: theme.palette.primary.hero,
    borderRadius: 8,
    height: 46,
    px: 4,
    fontWeight: 700,
    fontSize: "14px",
    textTransform: "uppercase",
    fontFamily: "Poppins, sans-serif",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.hero,
      color: theme.palette.primary.focus,
    },
  };

  const secondaryButtonSx = {
    backgroundColor: "transparent",
    color: theme.palette.primary.hero,
    border: `1px solid ${theme.palette.primary.hero}`,
    borderRadius: 8,
    height: 46,
    px: 4,
    fontWeight: 700,
    fontSize: "14px",
    textTransform: "uppercase",
    fontFamily: "Poppins, sans-serif",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.hero,
      color: theme.palette.primary.focus,
    },
  };

  return (
    <>
      <HeaderSection data={applyHeaderData} />

      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.cosmic.primary,
          py: { xs: 6, md: 10 },
        }}
      >
        <Container>
          <Typography
            component={RouterLink}
            to="/initiatives/psychic-ability-certification"
            sx={{
              display: "inline-block",
              mb: 3,
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: theme.palette.text.secondary,
              textDecoration: "none",
              "&:hover": { color: theme.palette.primary.hero },
            }}
          >
            ← Psychic Ability Certification
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontFamily: "Sansation, sans-serif",
              fontWeight: 700,
              display: "inline-block",
              borderBottom: `5px solid ${theme.palette.primary.focus}`,
              pb: "4px",
              mb: 2,
            }}
          >
            What applying involves
          </Typography>

          <Typography
            sx={{
              maxWidth: 820,
              color: theme.palette.text.secondary,
              lineHeight: 1.9,
              mb: { xs: 5, md: 7 },
            }}
          >
            Applying starts a conversation, not a test. Nothing is measured
            until you have had a screening conversation, read the written
            consent documentation, asked whatever you want to ask, and signed.
            The whole sequence is set out in the{" "}
            <Typography
              component={RouterLink}
              to="/initiatives/psychic-ability-certification/ethics"
              sx={{
                color: theme.palette.primary.hero,
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              published ethics and testing protocol
            </Typography>
            , and this page is a plain summary of it.
          </Typography>

          {/* The six-step sequence, section 3.3 of the protocol */}
          <Box sx={{ display: "grid", gap: 2.5, mb: { xs: 6, md: 9 } }}>
            {applyStepsData.map((step) => (
              <Paper
                key={step.id}
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.cosmic.secondary}`,
                  backgroundColor: theme.palette.cosmic.elevated,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 1.5, sm: 3 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Sansation, sans-serif",
                    fontWeight: 700,
                    fontSize: "2.5rem",
                    lineHeight: 1,
                    color: theme.palette.primary.focus,
                    textShadow: `0 0 1px ${theme.palette.primary.hero}`,
                    minWidth: 56,
                  }}
                >
                  {step.id}
                </Typography>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                      gap: 1.5,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Sansation, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        color: theme.palette.text.secondary,
                        border: `1px solid ${theme.palette.cosmic.secondary}`,
                        borderRadius: 1,
                        px: 1,
                        py: 0.25,
                      }}
                    >
                      {step.duration}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.9,
                      mt: 1,
                    }}
                  >
                    {step.desc}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>

          {/* Participant protections, section 2 of the protocol */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 2,
              border: `1px solid ${theme.palette.cosmic.secondary}`,
              borderTop: `6px solid ${theme.palette.primary.focus}`,
              backgroundColor: theme.palette.cosmic.elevated,
              mb: { xs: 5, md: 7 },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Sansation, sans-serif",
                fontWeight: 700,
                mb: 1,
              }}
            >
              Free, voluntary, and yours to stop
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.9,
                maxWidth: 820,
                mb: 3,
              }}
            >
              These protections apply from the first conversation onward, and
              they do not depend on anyone's permission but yours.
            </Typography>

            <Box sx={{ display: "grid", gap: 1.5 }}>
              {applyProtectionsData.map((protection) => (
                <Box
                  key={protection}
                  sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}
                >
                  <CheckCircleOutlineIcon
                    sx={{
                      fontSize: 20,
                      mt: "3px",
                      color: theme.palette.primary.focus,
                    }}
                  />
                  <Typography
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.8,
                    }}
                  >
                    {protection}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>

          <Box
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 2,
              backgroundColor: theme.palette.darkcard.main,
              color: theme.palette.darkcard.contrastText,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Sansation, sans-serif",
                fontWeight: 700,
                mb: 1,
              }}
            >
              Start with the application form
            </Typography>
            <Typography
              sx={{ opacity: 0.85, lineHeight: 1.9, maxWidth: 760, mb: 3 }}
            >
              Tell us what you can do and what you would be willing to
              demonstrate. If a fair test of your ability is something we can
              currently provide, we will arrange the screening conversation from
              there. If it is not, we will say so.
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Button
                href={certificationApplyFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={primaryButtonSx}
              >
                Apply to be tested
              </Button>
              <Button
                component={RouterLink}
                to="/initiatives/psychic-ability-certification/certified"
                variant="outlined"
                sx={{
                  ...secondaryButtonSx,
                  color: theme.palette.primary.focus,
                  border: `1px solid ${theme.palette.primary.focus}`,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.focus,
                    color: theme.palette.primary.hero,
                  },
                }}
              >
                See the published record
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Apply;
