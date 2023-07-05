import { SignUp } from "@clerk/clerk-react";
import { ArrowBack } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
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
      <SignUp
        redirectUrl={"/chat"}
        routing="path"
        path="/sign-up"
        signInUrl={"/sign-in"}
      />
    </Grid>
  );
};

export default Signup;
