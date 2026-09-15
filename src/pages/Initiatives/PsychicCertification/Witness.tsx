import React from "react";
import { Box, Button, Container, Paper, Typography, useTheme } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link as RouterLink } from "react-router-dom";
import HeaderSection from "../../../components/Initiatives/NestedInitiativesHeader";
import {
  certificationVolunteerEmail,
  certificationWitnessFormUrl,
  witnessHeaderData,
  witnessStepsData,
  witnessTermsData,
  witnessWhoData,
} from "../../../data/psychicAbilityCertificationData";

const Witness: React.FC = () => {
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

  return (
    <>
      <HeaderSection data={witnessHeaderData} />

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
              display: "block",
              width: "fit-content",
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
              display: "block",
              width: "fit-content",
              borderBottom: `5px solid ${theme.palette.primary.focus}`,
              pb: "4px",
              mb: 2,
            }}
          >
            Why a session needs you
          </Typography>

          <Typography
            sx={{
              maxWidth: 820,
              color: theme.palette.text.secondary,
              lineHeight: 1.9,
              mb: { xs: 5, md: 7 },
            }}
          >
            Spiritual Data tests claimed psychic abilities against a protocol we
            publish in full before any session runs. A test is worth something
            when people outside this organization watched it happen and put
            their names to what they saw. So every session needs three or more
            witnesses in the room, present in person, alongside a continuous
            video record. Critical thinking is the point of the seat: your job
            is to check whether the agreed conditions actually held, and to say
            so either way. You can read the whole standard before you decide
            anything, in the{" "}
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
            .
          </Typography>

          {/* The five steps, drawn from the witness search procedure */}
          <Box sx={{ display: "grid", gap: 2.5, mb: { xs: 6, md: 9 } }}>
            {witnessStepsData.map((step) => (
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

          {/* Who we are asking */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Sansation, sans-serif",
              fontWeight: 700,
              display: "block",
              width: "fit-content",
              borderBottom: `5px solid ${theme.palette.primary.focus}`,
              pb: "4px",
              mb: 3,
            }}
          >
            Who we are asking
          </Typography>

          <Box sx={{ display: "grid", gap: 1.5, mb: { xs: 5, md: 7 } }}>
            {witnessWhoData.map((who) => (
              <Box
                key={who.title}
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
                    maxWidth: 820,
                  }}
                >
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: theme.palette.text.primary }}
                  >
                    {who.title}:
                  </Box>{" "}
                  {who.desc}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* The terms */}
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
              The terms, in full
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.9,
                maxWidth: 820,
                mb: 3,
              }}
            >
              Everything that applies to you as a witness is on this page, so
              you can decide from here.
            </Typography>

            <Box sx={{ display: "grid", gap: 1.5 }}>
              {witnessTermsData.map((term) => (
                <Box
                  key={term}
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
                    sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}
                  >
                    {term}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>

          {/* The one call to action */}
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
              Put your name on the register
            </Typography>
            <Typography
              sx={{ opacity: 0.85, lineHeight: 1.9, maxWidth: 760, mb: 3 }}
            >
              The form takes about two minutes. We contact you only when a
              session is scheduled near you, and you can say no to any session
              and stay on the register. If you would like to talk it through
              first, write to {certificationVolunteerEmail} and say so.
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Button
                href={certificationWitnessFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={primaryButtonSx}
              >
                Volunteer to witness
              </Button>
              <Button
                href={`mailto:${certificationVolunteerEmail}?subject=${encodeURIComponent(
                  "A question about witnessing an assessment"
                )}`}
                variant="outlined"
                sx={{
                  backgroundColor: "transparent",
                  color: theme.palette.primary.focus,
                  border: `1px solid ${theme.palette.primary.focus}`,
                  borderRadius: 8,
                  height: 46,
                  px: 4,
                  fontWeight: 700,
                  fontSize: "14px",
                  textTransform: "uppercase",
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "0.5px",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.focus,
                    color: theme.palette.primary.hero,
                  },
                }}
              >
                Ask a question first
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Witness;
