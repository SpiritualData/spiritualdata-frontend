import React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HeaderSection from "../components/Initiatives/NestedInitiativesHeader";
import {
  menteeAudience,
  mentorAudience,
  mentorshipBrowserNote,
  mentorshipHeaderData,
  mentorshipIntro,
  mentorshipLaunchDate,
  mentorshipQuestions,
  mentorshipStepsData,
  questWebUrl,
} from "../data/mentorshipData";

/**
 * /mentorship: the registration door for the mentorship launch.
 *
 * Both CTAs go to the live Quest sign-up with a ref slug, so a mentor and a
 * mentee are counted separately with no new backend code. All copy lives in
 * src/data/mentorshipData.tsx, including the launch-date placeholder.
 */
const Mentorship: React.FC = () => {
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

  const audiences = [mentorAudience, menteeAudience];

  return (
    <>
      <HeaderSection data={mentorshipHeaderData} />

      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.cosmic.primary,
          py: { xs: 6, md: 10 },
        }}
      >
        <Container>
          {/* The launch-date notice. The date itself is not set, so this shows a
              marked placeholder until mentorshipLaunchDate.announced is true. */}
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.75,
              maxWidth: 820,
              mb: 4,
              p: { xs: 2, md: 2.5 },
              borderRadius: 2,
              border: `1px solid ${theme.palette.primary.focus}`,
              borderLeft: `6px solid ${theme.palette.primary.focus}`,
              backgroundColor: theme.palette.cosmic.elevated,
            }}
          >
            <Box sx={{ display: "flex", gap: 1.25, alignItems: "center" }}>
              <CheckCircleOutlineIcon
                sx={{ fontSize: 20, color: theme.palette.primary.focus }}
              />
              <Typography
                sx={{
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  fontSize: "13px",
                }}
              >
                Sign-ups are open now
              </Typography>
            </Box>
            <Typography
              sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}
            >
              {mentorshipLaunchDate.note}{" "}
              <Box component="span" sx={{ fontWeight: 700 }}>
                {mentorshipLaunchDate.announced
                  ? mentorshipLaunchDate.date
                  : mentorshipLaunchDate.placeholder}
              </Box>
            </Typography>
          </Paper>

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
            {mentorshipIntro.title}
          </Typography>

          <Typography
            sx={{
              maxWidth: 820,
              color: theme.palette.text.secondary,
              lineHeight: 1.9,
              mb: { xs: 5, md: 7 },
            }}
          >
            {mentorshipIntro.body}
          </Typography>

          {/* The two audiences, side by side, each with its own CTA. */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 3, md: 4 },
              mb: { xs: 6, md: 9 },
            }}
          >
            {audiences.map((audience) => (
              <Paper
                key={audience.eyebrow}
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.cosmic.secondary}`,
                  borderTop: `6px solid ${theme.palette.primary.focus}`,
                  backgroundColor: theme.palette.cosmic.elevated,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: theme.palette.text.secondary,
                    mb: 1,
                  }}
                >
                  {audience.eyebrow}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Sansation, sans-serif",
                    fontWeight: 700,
                    mb: 1.5,
                  }}
                >
                  {audience.title}
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.9,
                    mb: 2.5,
                  }}
                >
                  {audience.intro}
                </Typography>

                <Box sx={{ display: "grid", gap: 1.5, mb: 3 }}>
                  {audience.points.map((point) => (
                    <Box
                      key={point}
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        alignItems: "flex-start",
                      }}
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
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: "auto" }}>
                  <Button
                    href={audience.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    sx={primaryButtonSx}
                  >
                    {audience.ctaLabel}
                  </Button>
                  <Typography
                    sx={{
                      mt: 2,
                      fontSize: "14px",
                      color: theme.palette.text.secondary,
                      lineHeight: 1.8,
                    }}
                  >
                    {audience.footnote}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>

          {/* What happens, in order, so nobody expects a feature that is not
              open yet. */}
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
            What happens next
          </Typography>

          <Box sx={{ display: "grid", gap: 2.5, mb: { xs: 6, md: 9 } }}>
            {mentorshipStepsData.map((step) => (
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

          {/* Where the product actually is today: the browser. */}
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
              {mentorshipBrowserNote.title}
            </Typography>
            <Typography
              sx={{ opacity: 0.85, lineHeight: 1.9, maxWidth: 760, mb: 3 }}
            >
              {mentorshipBrowserNote.body}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Button
                href={mentorAudience.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={primaryButtonSx}
              >
                {mentorAudience.ctaLabel}
              </Button>
              <Button
                href={menteeAudience.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
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
                {menteeAudience.ctaLabel}
              </Button>
            </Box>
            <Typography sx={{ opacity: 0.7, mt: 3, fontSize: "14px" }}>
              Open Quest directly at{" "}
              <Box
                component="a"
                href={questWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.primary.focus,
                  fontWeight: 700,
                }}
              >
                quest.spiritualdata.org
              </Box>
            </Typography>
          </Box>

          <Paper
            elevation={0}
            sx={{
              mt: 3,
              p: { xs: 3, md: 5 },
              borderRadius: 2,
              border: `1px solid ${theme.palette.cosmic.secondary}`,
              backgroundColor: theme.palette.cosmic.elevated,
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
              {mentorshipQuestions.title}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.9,
                maxWidth: 820,
                mb: 3,
              }}
            >
              {mentorshipQuestions.body}
            </Typography>
            <Button
              href={`mailto:${mentorshipQuestions.email}?subject=${encodeURIComponent(
                mentorshipQuestions.subject
              )}`}
              variant="outlined"
              sx={secondaryButtonSx}
            >
              Write to us
            </Button>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Mentorship;
