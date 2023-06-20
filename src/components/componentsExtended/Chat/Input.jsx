import { createTheme } from "@mui/material/styles";

export const inputTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#none", // update border color on hover
            },
            "&:hover .MuiInputBase-input": {
              color: "#fff", // update font color on hover
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiInputBase-input": {
            color: "#fff", // update default font color
          },
          "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: 10,
          },
          input: {
            WebkitBoxShadow: "0 0 0 1000px #41404F inset",
            WebkitTextFillColor: "#e0dede",
            borderRadius: "10px",
          },
        },
      },
    },
  },
});
