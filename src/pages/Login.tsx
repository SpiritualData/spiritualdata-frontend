import { SignIn } from "@clerk/clerk-react";
import { ArrowBack } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const LogIn: React.FC = () => {
  localStorage.removeItem("user");

  return (
    <Grid
      container
      sx={{ minHeight: "90vh" }}
      justifyContent="center"
      alignItems="center"
      my={8}
    >
      <Button
        variant="outlined"
        component={Link}
        to="/"
        startIcon={<ArrowBack />}
        sx={{
          position: "absolute",
          color: (theme) => theme.palette.text.primary,
          borderColor: (theme) => theme.palette.text.primary,
          top: 20,
          left: 20,
        }}
      >
        Go to Home
      </Button>

      <SignIn
        fallbackRedirectUrl={"/chat"}
        routing="path"
        path="/sign-in"
        signUpUrl={"/sign-up"}
      />
    </Grid>
  );
};

export default LogIn;
