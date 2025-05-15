import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { ArrowBack } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  // const tooltipContent = (
  //   <>
  //     Ensure that Chrome's popup blocker is not preventing the Clerk popup from
  //     appearing:
  //     <br />
  //     <br />
  //     - Go to Chrome Settings → Privacy and Security → Site Settings → Pop-ups
  //     and redirects.
  //     <br />
  //     <br />- Make sure the setting allows pop-ups from the site you are working
  //     on.
  //   </>
  // );

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

      {/* <Tooltip title={tooltipContent} placement="top" arrow>
        <Chip
          icon={<Info />}
          label="Still don't see the form? Hover for instructions or click to refresh"
          sx={{
            position: "absolute",
            top: { xs: 70, sm: 20 },
            right: { xs: 10, sm: 20 },
            color: "#4691B8",
            borderColor: "#4691B8",
            cursor: "pointer",
          }}
          onClick={() => window.location.reload()}
        />
      </Tooltip> */}

      <SignUp
        fallbackRedirectUrl={"/chat"}
        routing="path"
        path="/sign-up"
        signInUrl={"/sign-in"}
      />
    </Grid>
  );
};

export default Signup;
