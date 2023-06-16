import React, { useState } from "react";
import {
  Grid,
  Typography,
  Stack,
  Button,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Facebook, Visibility, VisibilityOff } from "@mui/icons-material";

import Login from "../../assests/Login.png";
import GoogleLogo from "../../assests/Google__G__Logo.svg.webp";
import {
  ForgotPassword,
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
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" my={3}>
      <StyledCard>
        <Grid container spacing={4} mb={{ xs: 2, md: 0 }}>
          <Grid item sx={{ display: { xs: "none", sm: "block" } }} sm={6}>
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
              {!forgotPassword
                ? "Don't have an account?"
                : "Recover your account"}
              {!forgotPassword && <StyledLink to="/signup">SignUp</StyledLink>}
            </Typography>
            <Stack spacing={2} mt={3} mb={4} alignItems="center">
              <StyledTextField
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
              />

              {!forgotPassword ? (
                <>
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

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <FormControlLabel
                      sx={{ marginTop: -2 }}
                      control={
                        <Checkbox
                          checked={rememberMe}
                          onChange={handleRememberMeChange}
                          color="primary"
                          sx={{ color: "gray" }}
                        />
                      }
                      label={
                        <Typography variant="body2">Remember me</Typography>
                      }
                    />
                    <ForgotPassword
                      variant="body2"
                      onClick={() => setForgotPassword(true)}
                    >
                      Forgot Password?
                    </ForgotPassword>
                  </Stack>
                </>
              ) : (
                <Stack alignItems="center" width="100%">
                  <ForgotPassword
                    variant="body2"
                    sx={{ color: "gray" }}
                    onClick={() => setForgotPassword(false)}
                  >
                    Back to login?
                  </ForgotPassword>
                </Stack>
              )}

              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  width: { xs: "100%", md: "70%" },
                  py: "2%",
                  mt: 1,
                }}
              >
                {!forgotPassword ? "Sign In" : "Send"}
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
