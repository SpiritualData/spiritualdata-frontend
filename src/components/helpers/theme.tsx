import { createTheme } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles/createPalette";

// Extend the theme's Palette and PaletteColor interfaces
declare module "@mui/material/styles" {
  interface Palette {
    chatbot: {
      sidebar: string;
      chatBox: string;
    };
  }
  interface PaletteOptions {
    chatbot?: {
      sidebar: string;
      chatBox: string;
    };
  }

  interface PaletteColor {
    focus?: string;
    hover?: string;
  }

  interface SimplePaletteColorOptions {
    focus?: string;
    hover?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#15161B",
      focus: "#FE4801",
      hover: "darkorange",
    },
    text: {
      primary: "#222",
      secondary: "#fff",
    },
    chatbot: {
      sidebar: "#171717",
      chatBox: "#212121",
    },
  },
});

export default theme;
