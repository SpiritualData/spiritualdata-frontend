import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

/** Full-width page section with the site's standard horizontal padding. */
export const Section: React.FC<{
  children: React.ReactNode;
  background?: string;
  sx?: SxProps<Theme>;
}> = ({ children, background, sx }) => (
  <Box
    sx={{
      width: "100%",
      boxSizing: "border-box",
      backgroundColor: background || "transparent",
      px: { xs: 2, sm: 6, md: 12, lg: 20 },
      py: { xs: 6, md: 10 },
      ...sx,
    }}
  >
    <Box sx={{ maxWidth: 1150, mx: "auto" }}>{children}</Box>
  </Box>
);

/** Centered section heading with the site's gold glow treatment. */
export const SectionTitle: React.FC<{
  children: React.ReactNode;
  light?: boolean;
  subtitle?: string;
}> = ({ children, light, subtitle }) => {
  const theme = useTheme();
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          letterSpacing: 2,
          fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
          color: light
            ? theme.palette.darkcard.contrastText
            : theme.palette.text.primary,
          textShadow: `0 0 30px ${theme.palette.primary.focus}`,
        }}
      >
        {children}
      </Typography>
      {subtitle && (
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            letterSpacing: 1,
            fontWeight: 400,
            color: light
              ? theme.palette.darkcard.contrastText
              : theme.palette.text.secondary,
            fontSize: { xs: "1rem", md: "1.15rem" },
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

/** The site's primary gold call-to-action button, sized large. */
export const CtaButton: React.FC<{
  label: string;
  href: string;
  sx?: SxProps<Theme>;
}> = ({ label, href, sx }) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      size="large"
      href={href}
      target="_blank"
      rel="noopener"
      sx={{
        backgroundColor: theme.palette.primary.focus,
        color: theme.palette.primary.hero,
        borderRadius: 8,
        height: 52,
        px: 5,
        fontWeight: 700,
        fontSize: "15px",
        textTransform: "uppercase",
        fontFamily: "Poppins, sans-serif",
        letterSpacing: 2,
        boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: theme.palette.primary.hero,
          color: theme.palette.primary.focus,
        },
        ...sx,
      }}
    >
      {label}
    </Button>
  );
};

/** Highlighted callout box with a gold accent bar. */
export const Callout: React.FC<{
  title?: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}> = ({ title, children, sx }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderLeft: `5px solid ${theme.palette.primary.focus}`,
        backgroundColor: theme.palette.cosmic.elevated,
        boxShadow: `0px 4px 24px ${theme.palette.cardshadow.main}`,
        borderRadius: 2,
        p: { xs: 3, md: 4 },
        ...sx,
      }}
    >
      {title && (
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, mb: 1.5, letterSpacing: 1 }}
        >
          {title}
        </Typography>
      )}
      <Typography
        variant="body1"
        component="div"
        sx={{ lineHeight: 1.7, letterSpacing: 0.5, color: "text.secondary" }}
      >
        {children}
      </Typography>
    </Box>
  );
};
