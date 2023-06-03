import React, { useState } from "react";
import {
  Grid,
  Typography,
  Stack,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Facebook, Visibility, VisibilityOff } from "@mui/icons-material";

import Login from "../../assests/Login.png";
import GoogleLogo from "../../assests/Google__G__Logo.svg.webp";
import {
  StyledCard,
  StyledDivider,
  StyledFacebookButton,
  StyledGoogleButton,
  StyledLine,
  StyledLink,
  StyledSpan,
  StyledTextField,
} from "../componentsExtended/AuthStyles";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Grid container justifyContent="center" alignItems="center" my={3}>
      <StyledCard>
        <Grid container spacing={4} mb={{ xs: 2, md: 0 }}>
          <Grid item xs={12} sm={6}>
            <img
              src={Login}
              alt="signup"
              style={{ width: "100%", height: "100%" }}
            />{" "}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            mt={{ xs: 0, sm: 8 }}
            pr={{ xs: 0, sm: 2, md: 8 }}
          >
            <Typography variant="h4" sx={{ fontWeight: "500" }}>
              Sign In
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              Don't have an account?{" "}
              <StyledLink to="/signup">SignUp</StyledLink>
            </Typography>
            <Stack spacing={2} mt={3} mb={4} alignItems="center">
              <StyledTextField
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
              />
              <StyledTextField
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  width: { xs: "100%", md: "70%" },
                  py: "2%",
                  mt: 1,
                }}
              >
                Sign In
              </Button>
            </Stack>

            <StyledDivider>
              <StyledLine />
              <StyledSpan>or</StyledSpan>
              <StyledLine />
            </StyledDivider>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              mt={3}
              justifyContent="center"
            >
              <StyledGoogleButton
                variant="outlined"
                startIcon={
                  <img
                    src={GoogleLogo}
                    alt="Google logo"
                    style={{ width: "20px", height: "20px" }}
                  />
                }
              >
                Sign in with Google
              </StyledGoogleButton>
              <StyledFacebookButton variant="outlined" startIcon={<Facebook />}>
                Sign in with Facebook
              </StyledFacebookButton>
            </Stack>
          </Grid>
        </Grid>
      </StyledCard>
    </Grid>
  );
};

export default LogIn;
