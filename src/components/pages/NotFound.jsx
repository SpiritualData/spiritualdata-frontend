import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { SentimentVeryDissatisfied } from "@mui/icons-material";

const SpinningIcon = styled(SentimentVeryDissatisfied)(({ theme }) => ({
  fontSize: "5rem",
  color: theme.palette.error.main,
  animation: "spin 5s linear infinite",
  "@keyframes spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
}));

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        gap: "1rem",
      }}
    >
      <SpinningIcon />
      <Typography variant="h4" align="center">
        404, page not found!
      </Typography>
    </Box>
  );
};

export default NotFound;
