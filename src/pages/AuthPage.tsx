import React, { useEffect, useMemo, useState, useCallback } from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ParticlesBg from "../components/Particle";

const styles = (theme: any) => `
.dual-auth-container {
  width: 1000px; max-width: 98vw; min-height: 650px; position: relative;
  border-radius: 24px; overflow: hidden; box-shadow: 0 8px 32px ${theme.palette.cardshadow.main};
  background: ${theme.palette.primary.main}; display: flex; align-items: stretch;
}
.dual-auth-forms {
  display: flex;
  width: 200%; height: 100%;
  transition: transform 0.8s cubic-bezier(.68,-0.55,.27,1.55);
  transform: translateX(0%);
}
.auth-form-side {
  width: 50%; min-width: 50%; min-height: 650px;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  background: ${theme.palette.primary.main}; z-index: 1; padding: 32px;
  transition: opacity 0.5s;
  box-sizing: border-box;
}
.overlay-slider-panel {
  position: absolute; top: 0; left: 0;
  width: 50%; height: 100%; z-index: 2;
  background: linear-gradient(135deg,${theme.palette.primary.focus} 0%, ${theme.palette.primary.main} 50%,${theme.palette.primary.focus} 100%);
  color: ${theme.palette.primary.hero};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 48px 32px;
  box-sizing:
  border-box;
  border-radius: 0;
  box-shadow: 0 8px 32px ${theme.palette.cardshadow.main};
  transition: transform 0.8s cubic-bezier(.68,-0.55,.27,1.55), border-radius 0.8s;
  will-change: transform;
  pointer-events: none;
}
.dual-auth-container.signup-mode .overlay-slider-panel {
  transform: translateX(100%);
  border-top-left-radius: 0; border-bottom-left-radius: 0;
  border-top-right-radius: 0; border-bottom-right-radius: 0;
}
.overlay-slider-panel .overlay-content { pointer-events: auto; }

@media (max-width: 900px) {
  .dual-auth-container { flex-direction: column; width: 100vw; min-width: unset; height: auto; }
  .dual-auth-forms { width: 100%; min-width: 100%; flex-direction: column; }
  .auth-form-side, .overlay-slider-panel { width: 100% !important; min-width: 100%; height: auto; border-radius: 0 !important;}
  .overlay-slider-panel { position: relative; transform: none !important; }
  .dual-auth-container.signup-mode .overlay-slider-panel { transform: none !important; }
}

/* Multi-Layer Loader Styles */
.loader-bg {
  background: ${theme.palette.primary.focus}22;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  opacity: 1;
  transition: opacity 0.4s cubic-bezier(.4,0,.2,1);
  pointer-events: all;
}
.loader-bg.fade-out {
  opacity: 0;
  pointer-events: none;
}
.loader-multi { position: relative; width: 240px; height: 240px; }
.loader-ring {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  margin: auto; border-radius: 50%;
  border-style: solid;
  border-color: ${theme.palette.primary.hero}b3 transparent transparent transparent;
  background: transparent;
}
.loader-ring1 { width: 220px; height: 220px; border-width: 8px; animation: loader-spin1 2.2s linear infinite; opacity: 0.8; }
.loader-ring2 { width: 180px; height: 180px; border-width: 6px; animation: loader-spin2 1.2s linear infinite; opacity: 0.5; }
.loader-ring3 { width: 120px; height: 120px; border-width: 4px; animation: loader-spin3 0.7s linear infinite; opacity: 0.3; }

@keyframes loader-spin1 { 100% { transform: rotate(360deg);} }
@keyframes loader-spin2 { 100% { transform: rotate(-360deg);} }
@keyframes loader-spin3 { 100% { transform: rotate(360deg);} }

/* Hide Clerk logo and branding only */
.cl-internal-b3fm6y, .cl-logoBox, .cl-footer, .cl-footerAction, .cl-footerActionLink, .cl-logoImage, .cl-footerActionText {
  display: none !important;
}

/* Change button color to match app theme */
.cl-formButtonPrimary {
  background-color: ${theme.palette.primary.focus} !important;
  color: ${theme.palette.text.primary} !important;
  font-family: 'Outfit', sans-serif !important;
}

.cl-formButtonPrimary:hover {
  background-color: #B8D954 !important;
}
`;

type LoaderProps = { fade: boolean; theme: any };

function MultiLayerLoader({ fade }: LoaderProps) {
  return (
    <div className={`loader-bg${fade ? " fade-out" : ""}`}>
      <div className="loader-multi">
        <div className="loader-ring loader-ring1" />
        <div className="loader-ring loader-ring2" />
        <div className="loader-ring loader-ring3" />
      </div>
    </div>
  );
}

const AuthPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:900px)");
  const location = useLocation();
  const navigate = useNavigate();

  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [signupMode, setSignupMode] = useState(true);

  const goToSignIn = useCallback(() => navigate("/sign-in"), [navigate]);
  const goToSignUp = useCallback(() => navigate("/sign-up"), [navigate]);

  useEffect(() => {
    const isSignUp = location.pathname.startsWith("/sign-up");
    setSignupMode(!isSignUp);
  }, [location.pathname]);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1700);
    const removeTimer = setTimeout(() => setShowLoader(false), 2100);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const overlayBg = useMemo(
    () => ({
      backgroundColor: theme.palette.primary.main,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23ebeddc' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%23e5e9cc' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%23e0e6ba' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23dce5a7' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23d8e692' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23d5e87b' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%23D3EB63' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
    }),
    [theme.palette.primary.main]
  );

  return (
    <>
      <style>{styles(theme)}</style>

      {showLoader && <MultiLayerLoader fade={fadeOut} theme={theme} />}

      <Box
        sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
      >
        <ParticlesBg
          baseCount={130}
          maxSpeed={0.7}
          connect
          connectDistance={140}
          mouseRepel
          zIndex={0}
        />

        {!showLoader && (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "100vh", backgroundColor: "white", p: 2 }}
          >
            <Button
              variant="outlined"
              component={Link}
              to="/"
              startIcon={<ArrowBack />}
              sx={{
                position: "absolute",
                top: 30,
                left: 20,
                borderColor: theme.palette.text.primary,
                backgroundColor: theme.palette.primary.focus,
                color: theme.palette.primary.hero,
                borderRadius: "50px",
                height: 50,
                px: 4,
                mb: "16px",
                fontWeight: 700,
                fontSize: "16px",
                textTransform: "uppercase",
                fontFamily: theme.typography.fontFamily,
                letterSpacing: 1,
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "2px solid transparent",
                "&:hover": {
                  backgroundColor: theme.palette.primary.hero,
                  color: theme.palette.primary.focus,
                },
              }}
            >
              Go to Home
            </Button>

            <div
              className={`dual-auth-container${
                signupMode ? " signup-mode" : ""
              }`}
            >
              <div className="dual-auth-forms">
                {(!isMobile || !signupMode) && (
                  <div className="auth-form-side">
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: "98vw",
                        mx: "auto",
                        my: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h3"
                        mb={6}
                        fontWeight="800"
                        letterSpacing={2}
                        sx={{
                          color: theme.palette.text.primary,
                          fontFamily: "Outfit",
                          textAlign: "center",
                          fontSize: { xs: "2rem", md: "2.5rem" },
                        }}
                      >
                        Welcome Back
                      </Typography>

                      <SignIn
                        signUpUrl="/sign-up"
                        fallbackRedirectUrl="/onboarding"
                        appearance={{
                          elements: {
                            headerTitle: { display: "none" },
                            headerSubtitle: { display: "none" },
                            logoBox: { display: "none" },
                            logoImage: { display: "none" },
                            footer: { display: "none" },
                            footerAction: { display: "none" },
                            footerActionLink: { display: "none" },
                          },
                        }}
                      />
                      
                      {/* Sign In to Sign Up Link */}
                      <Box sx={{ mt: 4, textAlign: "center" }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: theme.palette.text.secondary,
                            fontFamily: "Outfit",
                            mb: 1
                          }}
                        >
                          Don't have an account?
                        </Typography>
                        <Typography
                          component={Link}
                          to="/sign-up"
                          sx={{
                            color: theme.palette.primary.focus,
                            fontFamily: "Outfit",
                            fontWeight: "600",
                            fontSize: "16px",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              color: theme.palette.text.primary,
                              textDecoration: "underline",
                            },
                          }}
                        >
                          Create Account
                        </Typography>
                      </Box>
                    </Box>
                  </div>
                )}

                {(!isMobile || signupMode) && (
                  <div className="auth-form-side">
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: "98vw",
                        mx: "auto",
                        my: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h3"
                        mb={6}
                        fontWeight="800"
                        letterSpacing={2}
                        sx={{
                          color: theme.palette.text.primary,
                          fontFamily: "Outfit",
                          textAlign: "center",
                          fontSize: { xs: "2rem", md: "2.5rem" },
                        }}
                      >
                        Join Us
                      </Typography>

                      <SignUp
                        fallbackRedirectUrl="/onboarding"
                        signInUrl="/sign-in"
                        appearance={{
                          elements: {
                            headerTitle: { display: "none" },
                            headerSubtitle: { display: "none" },
                            logoBox: { display: "none" },
                            logoImage: { display: "none" },
                            footer: { display: "none" },
                            footerAction: { display: "none" },
                            footerActionLink: { display: "none" },
                          },
                        }}
                      />
                      
                      {/* Sign Up to Sign In Link */}
                      <Box sx={{ mt: 4, textAlign: "center" }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: theme.palette.text.secondary,
                            fontFamily: "Outfit",
                            mb: 1
                          }}
                        >
                          Already have an account?
                        </Typography>
                        <Typography
                          component={Link}
                          to="/sign-in"
                          sx={{
                            color: theme.palette.primary.focus,
                            fontFamily: "Outfit",
                            fontWeight: "600",
                            fontSize: "16px",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              color: theme.palette.text.primary,
                              textDecoration: "underline",
                            },
                          }}
                        >
                          Sign In
                        </Typography>
                      </Box>
                    </Box>
                  </div>
                )}
              </div>

              <div className="overlay-slider-panel" style={overlayBg}>
                <div className="overlay-content">
                  {!signupMode ? (
                    <>
                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb={4}
                        letterSpacing={2}
                        fontFamily={theme.typography.fontFamily}
                      >
                        Already <br />
                        Registered
                      </Typography>
                      <Typography
                        variant="body1"
                        mb={5}
                        lineHeight={1.5}
                        letterSpacing={1}
                      >
                        Access your sacred insights <br />
                        and continue your journey.
                      </Typography>
                      <Button
                        variant="outlined"
                        onClick={goToSignIn}
                        sx={{
                          backgroundColor: theme.palette.primary.hero,
                          color: theme.palette.primary.focus,
                          border: `2px solid ${theme.palette.primary.hero}`,
                          borderRadius: 8,
                          height: 45,
                          px: 4,
                          fontWeight: 700,
                          fontSize: "16px",
                          textTransform: "uppercase",
                          fontFamily: theme.typography.fontFamily,
                          letterSpacing: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.focus,
                            color: theme.palette.primary.hero,
                            border: `2px solid ${theme.palette.primary.hero}`,
                          },
                        }}
                      >
                        CONTINUE JOURNEY
                      </Button>
                    </>
                  ) : (
                    <>
                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb={4}
                        letterSpacing={2}
                        fontFamily={theme.typography.fontFamily}
                      >
                        New to <br />
                        Spiritual Data?
                      </Typography>
                      <Typography
                        variant="body1"
                        mb={5}
                        lineHeight={1.5}
                        letterSpacing={1}
                      >
                        Create your account <br />
                        and unlock the wisdom within.
                      </Typography>
                      <Button
                        variant="outlined"
                        onClick={goToSignUp}
                        sx={{
                          backgroundColor: theme.palette.primary.hero,
                          color: theme.palette.primary.focus,
                          border: `2px solid ${theme.palette.primary.hero}`,
                          borderRadius: 8,
                          height: 45,
                          px: 4,
                          fontWeight: 700,
                          fontSize: "16px",
                          textTransform: "uppercase",
                          fontFamily: theme.typography.fontFamily,
                          letterSpacing: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.focus,
                            color: theme.palette.primary.hero,
                            border: `2px solid ${theme.palette.primary.hero}`,
                          },
                        }}
                      >
                        BEGIN JOURNEY
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default AuthPage;
