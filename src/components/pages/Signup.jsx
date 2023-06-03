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

import SignUp from "../../assests/SignUp.png";
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

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  return (
    <Grid container justifyContent="center" alignItems="center" my={3}>
      <StyledCard>
        <Grid container spacing={4} my={2}>
          <Grid item xs={12} sm={6}>
            <img
              src={SignUp}
              alt="signup"
              style={{ width: "100%", height: "100%" }}
            />{" "}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            mt={{ xs: 0, sm: 4 }}
            pr={{ xs: 0, sm: 2, md: 8 }}
          >
            <Typography variant="h4" sx={{ fontWeight: "500" }}>
              Sign up
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              Already have an account?{" "}
              <StyledLink to="/login">SignIn</StyledLink>
            </Typography>
            <Stack spacing={2} my={3} alignItems="center">
              <StyledTextField label="Name" size="small" fullWidth />
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
              <StyledTextField
                label="Repeat Password"
                variant="outlined"
                type={showPasswordRepeat ? "text" : "password"}
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowPasswordRepeat(!showPasswordRepeat)
                        }
                      >
                        {showPasswordRepeat ? <VisibilityOff /> : <Visibility />}
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
                Sign Up
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
                Sign up with Google
              </StyledGoogleButton>
              <StyledFacebookButton variant="outlined" startIcon={<Facebook />}>
                Sign up with Facebook
              </StyledFacebookButton>
            </Stack>
          </Grid>
        </Grid>
      </StyledCard>
    </Grid>
  );
};

export default Signup;
