import React from "react";
import { Send } from "@mui/icons-material";
import { Grid, IconButton, TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ButtonLoader from "../Loader";
import { useLocation } from "react-router-dom";
import { KeyboardEvent, ChangeEvent } from "react";
import { ChatHistoryItem } from "../../pages/Chat";

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

interface InputFieldProps {
  input: string;
  selected: string | null;
  error: string | null;
  chatHistory: ChatHistoryItem[];
  isTyping: boolean;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSend: (e: React.FormEvent) => Promise<void>;
}

const InputField = ({
  input,
  setInput,
  handleSend,
  isTyping,
}: InputFieldProps) => {
  const location = useLocation();

  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      px={location.pathname === "/chat" ? { xs: 2, md: 16 } : 2}
      py={2}
    >
      <ThemeProvider theme={inputTheme}>
        <TextField
          sx={{
            width: "80%",
            borderRadius: "10px",
            border: "0.8px solid grey",
          }}
          size="small"
          multiline
          maxRows={6}
          placeholder="Type your message here..."
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          onKeyDown={(e: KeyboardEvent) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend(e);
            }
          }}
          InputProps={{
            endAdornment: (
              <>
                <IconButton
                  onClick={(e: React.MouseEvent) => handleSend(e)}
                  sx={{ color: "#fff" }}
                >
                  {isTyping ? <ButtonLoader /> : <Send />}
                </IconButton>
              </>
            ),
          }}
        />
      </ThemeProvider>
    </Grid>
  );
};

export default InputField;
