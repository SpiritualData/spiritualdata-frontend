import { useRef, useState, FormEvent } from "react";
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
  Snackbar,
  styled,
  Slide,
  Fade,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { Alert, TransitionUp } from "../../components/SnackbarAlert";
import image from "../../assets/Images/Contact/banner.webp";
import theme from "../../styles/theme";
import { keyframes } from "@emotion/react";

// === Floating Animation ===
const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// === Styled TextField reused ===
const StyledTextField = styled(TextField)(() => ({
  "& .MuiInputLabel-root": { color: "#1F2540", fontSize: "1rem" },
  "& .MuiInputBase-input": {
    color: "#1F2540",
    fontSize: "1.1rem",
    paddingTop: "18px",
    paddingBottom: "18px",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
    "& fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.focus,
    },
  },
}));

const Contact = () => {
  const form = useRef(null);
  const faqRef = useRef(null);
  const contactTopRef = useRef(null);
  const theme = useTheme();

  const [buttonText, setButtonText] = useState("Send Message");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarColor, setSnackbarColor] = useState("success");
  const [transition] = useState(() => TransitionUp);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("Sending...");
    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSnackbarMessage("Email sent successfully!");
          setSnackbarColor("success");
          setShowSnackbar(true);
          setButtonText("Send Message");
          if (form.current)
            (form.current as unknown as HTMLFormElement).reset();
        },
        () => {
          setSnackbarMessage("Failed to send. Please try again later.");
          setSnackbarColor("error");
          setShowSnackbar(true);
          setButtonText("Send Message");
        }
      );
  };

  const handleCloseSnackbar = () => setShowSnackbar(false);

  return (
    <>
      <div ref={contactTopRef} />
      <Box
        sx={{
          background: `linear-gradient(180deg, ${theme.palette.darkcard.contrastText} 0%, ${theme.palette.primary.focus} 100%)`,
          display: "flex",
          justifyContent: "center",
          flexDirection: { md: "row", xs: "column" },
          position: "relative",
          height: { xs: "auto", md: 250 },
          pb: { sm: 15 },
          mb: { md: 140, lg: 65 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            height: { xs: "auto", md: 650 },
            borderRadius: 4,
            overflow: { xs: "visible", lg: "hidden" },
            pt: { xs: 4, md: 20 },
            gap: 6,
          }}
        >
          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={14}
          >
            {/* === LEFT COLUMN === */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{ maxWidth: { xs: "100%", md: "100%", lg: "50%" } }}
              component="div"
              {...({} as any)}
            >
              <Stack
                spacing={4}
                alignItems={{ xs: "center", lg: "flex-start" }}
                textAlign={{ xs: "center", lg: "left" }}
              >
                <Fade in={true} timeout={2000}>
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: "auto", md: 310 },
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    <Box
                      component="img"
                      src={image}
                      sx={{
                        position: { xs: "relative", md: "absolute" },
                        top: { md: "-60%" },
                        left: { md: "10%" },
                        transform: {
                          xs: "none",
                          md: "translate(-50%, -50%)",
                        },
                        display: "block",
                        mx: { xs: "auto", md: "initial" },
                        width: { xs: "50vw", sm: "40vw", md: "auto" },
                        height: { xs: "auto", md: 400, lg: 500 },
                        maxWidth: "100%",
                        zIndex: 2,
                        mt: { xs: 8, sm: 10, md: 15, lg: 3 },
                        pointerEvents: "none",
                        animation: `${float} 5s ease-in-out infinite`,
                      }}
                    />
                  </Box>
                </Fade>

                <Slide direction="up" in={true} timeout={2000}>
                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        color: theme.palette.text.primary,
                        letterSpacing: 1,
                      }}
                    >
                      Contact Us
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                      }}
                    >
                      Get in Touch With Our AI Experts
                    </Typography>
                  </Box>
                </Slide>

                <Slide direction="up" in={true} timeout={3000}>
                  <Box
                    sx={{
                      backgroundColor: "#3D4050",
                      color: "#fff",
                      px: 3,
                      py: 1.2,
                      borderRadius: "12px",
                      fontWeight: 500,
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                      fontFamily: theme.typography.fontFamily,
                      zIndex: 2,
                      transition: "all 0.3s ease, box-shadow 0.3s ease",
                      height: 65,
                      width: 300,
                      "&:hover": {
                        transform: "scale(1.03)",
                        boxShadow: "0 10px 24px rgba(0, 0, 0, 0.2)",
                        cursor: "pointer",
                      },
                    }}
                    onClick={() =>
                      faqRef.current &&
                      (faqRef.current as HTMLElement).scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    <Box
                      sx={{
                        backgroundColor: theme.palette.primary.focus,
                        color: theme.palette.primary.hover,
                        width: 45,
                        height: 45,
                        borderRadius: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: "1.8rem",
                        px: 0.75,
                      }}
                    >
                      A
                    </Box>
                    <Box sx={{ flexGrow: 1, padding: 1 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "white",
                          fontWeight: 500,
                          fontSize: "1.4rem",
                          wordWrap: "break-word",
                          lineHeight: 1.2,
                          textAlign: "left",
                          letterSpacing: 2,
                          width: "auto",
                        }}
                      >
                        Frequently Asked Questions
                      </Typography>
                    </Box>
                  </Box>
                </Slide>
              </Stack>
            </Grid>

            {/* === RIGHT COLUMN === */}
            <Slide direction="up" in={true} timeout={2000}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ maxWidth: { xs: "100%", md: "100%", lg: "50%" } }}
                component="div"
                {...({} as any)}
              >
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    p: { xs: 4, md: 6 },
                    mb: { xs: 0, md: 10 },
                    borderRadius: 2,
                    border: "3px solid transparent",
                    transition:
                      "box-shadow 0.5s ease, border-color 0.5s ease, transform 0.3s ease",
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
                    "&:hover": {
                      boxShadow: "0px 0px 20px rgba(0,0,0,0.6)",
                      borderColor: theme.palette.primary.focus,
                    },
                  }}
                >
                  <Fade in={true} timeout={4000}>
                    <Box
                      component="form"
                      ref={form}
                      onSubmit={sendEmail}
                      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                    >
                      <StyledTextField
                        name="name"
                        label="Your Name"
                        required
                        fullWidth
                      />
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          component="div"
                          {...({} as any)}
                        >
                          <StyledTextField
                            name="email"
                            label="Email"
                            type="email"
                            required
                            fullWidth
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          component="div"
                          {...({} as any)}
                        >
                          <StyledTextField
                            name="number"
                            label="Phone Number"
                            type="tel"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                      <StyledTextField
                        name="subject"
                        label="Your Subject"
                        fullWidth
                      />
                      <StyledTextField
                        name="message"
                        label="Your Message"
                        required
                        multiline
                        minRows={4}
                        fullWidth
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          backgroundColor: theme.palette.primary.focus,
                          color: theme.palette.primary.hero,
                          border: "4px solid transparent",
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          borderRadius: 8,
                          py: 1.5,
                          mt: 2,
                          scale: 0.98,
                          letterSpacing: 2,
                          transition: "all 0.5s ease",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.hover,
                            borderColor: theme.palette.primary.focus,
                            color: "#fff",
                            scale: 1,
                          },
                        }}
                      >
                        {buttonText}
                      </Button>
                    </Box>
                  </Fade>
                </Box>
              </Grid>
            </Slide>
          </Grid>

          <Snackbar
            open={showSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            TransitionComponent={transition}
          >
            <Alert
              severity={snackbarColor as "success" | "error"}
              onClose={handleCloseSnackbar}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
