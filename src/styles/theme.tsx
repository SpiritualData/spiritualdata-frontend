import { createTheme } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    chatbot: {
      sidebar: string;
      chatBox: string;
    };
    darkcard: {
      main: string;
      contrastText: string;
    };
    cardshadow: {
      main: string;
    };
  }
  interface PaletteOptions {
    chatbot?: {
      sidebar: string;
      chatBox: string;
    };
    darkcard?: {
      main: string;
      contrastText: string;
    };
    cardshadow?: {
      main: string;
    };
  }

  interface PaletteColor {
    focus?: string;
    hover?: string;
    hero?: string;
  }

  interface SimplePaletteColorOptions {
    focus?: string;
    hover?: string;
    hero?: string;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Outfit, sans-serif",
  },
  palette: {
    primary: {
      main: "#F2F3EB",
      focus: "#D3EB63",
      hover: "#1F2540",
      hero: "#2D3239",
    },
    text: {
      primary: "#1F2540",
      secondary: "#4A4F58",
    },
    chatbot: {
      sidebar: "#171717",
      chatBox: "#212121",
    },
    darkcard: {
      main: "#2D3239",
      contrastText: "#F2F3EB",
    },
    cardshadow: {
      main: "rgba(0,0,0,0.2)",
    },
  },
});

export default theme;
