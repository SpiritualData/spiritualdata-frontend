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

      <Button
        sx={{
          position: "absolute",
          background: "#fff",
          textTransform: "none",
          top: { xs: 70, sm: 20 },
          right: { xs: 10, sm: 20 },
          "&:hover": {
            color: "#4691B8",
            opacity: 0.9,
          },
        }}
        onClick={() => window.location.reload(false)}
      >
        Don't see a pop-up? Click to&nbsp;
        <b style={{ color: "#4691B8" }}> refresh</b>
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
