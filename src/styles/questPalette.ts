import type { Theme } from "@mui/material";

/**
 * The Quest product palette (warm paper, ink, Quest purple), shared with the
 * Quest niche landing pages. Pages that sell Quest itself use it instead of
 * the site's navy and gold, so a visitor sees one consistent Quest look.
 */
export const questPalette = {
  ink: "#16142a",
  purple: "#6655db",
  purpleDark: "#5545c7",
  paper: "#f7f6f3",
  muted: "#686675",
  line: "#e6e3ec",
  lavender: "#f0eefc",
  lavenderLine: "#dcd7f7",
  /** Accent on dark surfaces (navbar and footer links, their buttons). */
  lavenderBright: "#c9c1ff",
};

/** Routes whose navbar and footer take the Quest palette. */
export const questPaletteRoutes = ["/mentorship"];

/** The site theme with the navbar and footer recoloured to the Quest palette. */
export const withQuestPalette = (theme: Theme): Theme => ({
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      ...theme.palette.primary,
      hover: questPalette.ink,
      hero: questPalette.ink,
      focus: questPalette.lavenderBright,
    },
  },
});
