import React from "react";
import { Box, Link, Typography, useTheme } from "@mui/material";
import { CtaButton } from "./ChallengeElements";

/** Light hero section matching the site's careers/product hero style. */
export const ChallengeHero: React.FC<{
  titleLead: string;
  titleAccent: string;
  tagline: string;
  ctaLabel: string;
  ctaHref: string;
  children?: React.ReactNode;
}> = ({ titleLead, titleAccent, tagline, ctaLabel, ctaHref, children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        minHeight: { xs: "60vh", md: "75vh" },
        backgroundColor: theme.palette.cosmic.primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 6, md: 12 },
        py: { xs: 10, md: 12 },
      }}
    >
      <Box sx={{ maxWidth: 850, textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            letterSpacing: 2,
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
            lineHeight: 1.3,
          }}
        >
          {titleLead}{" "}
          <Box
            component="span"
            sx={{
              display: "block",
              fontSize: { xs: "2.5rem", sm: "3.25rem", md: "4rem" },
              color: theme.palette.primary.hero,
              textShadow: `0 0 12px ${theme.palette.primary.focus}`,
            }}
          >
            {titleAccent}
          </Box>
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mt: 4,
            fontWeight: 500,
            letterSpacing: 1,
            lineHeight: 1.5,
            color: "text.secondary",
            fontSize: { xs: "1.15rem", md: "1.5rem" },
          }}
        >
          {tagline}
        </Typography>
        <Box sx={{ mt: 5 }}>
          <CtaButton label={ctaLabel} href={ctaHref} />
        </Box>
        {children}
      </Box>
    </Box>
  );
};

/** Dark closing section that repeats the call to action. */
export const ChallengeBottomCta: React.FC<{
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  email: string;
}> = ({ heading, ctaLabel, ctaHref, email }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: theme.palette.primary.hero,
        color: theme.palette.darkcard.contrastText,
        textAlign: "center",
        px: { xs: 2, sm: 6, md: 12 },
        py: { xs: 8, md: 12 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          letterSpacing: 2,
          mb: 4,
          fontSize: { xs: "1.5rem", md: "2.25rem" },
          textShadow: `0 0 30px ${theme.palette.primary.focus}`,
        }}
      >
        {heading}
      </Typography>
      <CtaButton label={ctaLabel} href={ctaHref} />
      <Typography
        variant="body1"
        sx={{ mt: 4, letterSpacing: 1, lineHeight: 1.7 }}
      >
        Questions? Email{" "}
        <Link
          href={`mailto:${email}`}
          sx={{
            color: theme.palette.primary.focus,
            textDecorationColor: theme.palette.primary.focus,
            fontWeight: 600,
          }}
        >
          {email}
        </Link>
        . We read everything.
      </Typography>
    </Box>
  );
};
