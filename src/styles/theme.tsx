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
    cosmic: {
      primary: string;
      secondary: string;
      elevated: string;
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
    cosmic?: {
      primary: string;
      secondary: string;
      elevated: string;
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
      main: "#F4F6FA",
      focus: "#FFBF00",
      hover: "#000d2c",
      hero: "#2D3239",
    },
    text: {
      primary: "#1F2540",
      secondary: "#2D3443",
    },
    chatbot: {
      sidebar: "#171717",
      chatBox: "#212121",
    },
    darkcard: {
      main: "#000d2c", // Dark blue to match navbar/footer and cosmic theme
      contrastText: "#F2F3EB",
    },
    cardshadow: {
      main: "rgba(0,0,0,0.2)",
    },
    cosmic: {
      primary: "#F4F6FA",
      secondary: "#D6DBE8",
      elevated: "#FFFFFF",
    },
  },
});

export default theme;
