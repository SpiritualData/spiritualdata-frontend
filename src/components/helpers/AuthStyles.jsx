import { Link } from "react-router-dom";
import { Card, TextField, Button, styled, Typography } from "@mui/material";

export const StyledCard = styled(Card)({
  width: "80%",
  height: "80%",
  padding: "16px",
  margin: "auto",
  borderRadius: "10px",
  boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.15)",
});

export const StyledDivider = styled("div")({
  display: "flex",
  alignItems: "center",
  margin: "16px 0",
});

export const StyledLine = styled("hr")({
  flexGrow: 1,
  borderColor: "lightgray",
});

export const StyledSpan = styled("span")({
  padding: "0 10px",
});

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const ForgotPassword = styled(Typography)(({ theme }) => ({
  textDecoration: "none",
  fontSize: "12px",
  cursor: "pointer",
  color: theme.palette.primary.main,
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const StyledGoogleButton = styled(Button)(() => ({
  color: "#4285F4",
  borderColor: "#4285F4",
  textTransform: "none",
  fontSize: "13px",
  "&:hover": {
    background: "lightgray",
  },
}));

export const StyledFacebookButton = styled(Button)(() => ({
  color: "#3B5998",
  borderColor: "#3B5998",
  textTransform: "none",
  fontSize: "13px",
  padding: 10,
  "&:hover": {
    background: "lightgray",
  },
  "& .MuiSvgIcon-root": {
    fill: "#3B5998",
  },
}));

export const StyledTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    color: "black",
  },
  "& .MuiInputBase-input": {
    color: "#333",
  },
});
