import { Send } from "@mui/icons-material";
import { Grid, IconButton, TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const inputTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&:hover .MuiInputBase-input": {
              color: "#fff",
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiInputBase-input": {
            color: "#fff",
          },
          "& .MuiInputBase-input::-webkit-scrollbar": {
            width: "6px",
          },
          "& .MuiInputBase-input::-webkit-scrollbar-thumb": {
            backgroundColor: "#D4D4D4",
            borderRadius: "3px",
          },
          "& .MuiInputBase-input::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#B8B8B8",
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

const InputField = ({ input, setInput, handleSend }) => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      px={{ xs: 2, md: 16 }}
      my={2}
    >
      <ThemeProvider theme={inputTheme}>
        <TextField
          sx={{
            width: "80%",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#41404F",
          }}
          size="small"
          multiline
          maxRows={6}
          placeholder="Type your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend(e);
            }
          }}
          InputProps={{
            endAdornment: (
              <>
                <IconButton
                  onClick={(e) => handleSend(e)}
                  disabled={
                    // isLoading ||
                    !input
                  }
                  sx={{ color: "#fff" }}
                >
                  <Send />
                </IconButton>
                {/* {isLoading && (
                    <CircularProgress
                      size={24}
                      color="primary"
                      sx={{ marginLeft: "10px" }}
                    />
                  )} */}
              </>
            ),
          }}
        />
      </ThemeProvider>
    </Grid>
  );
};

export default InputField;
