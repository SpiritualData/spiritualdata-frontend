import React, { useRef, useState, FormEvent } from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Button,
  useTheme,
  Container,
  Fade,
  styled,
  TextField,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import faqImage from "../../assets/images/contact/oldcontactRequest.webp";
import { useNavigate } from "react-router-dom";
import { useInView } from "../../hooks/useInView";
import { Alert, TransitionUp } from "../../components/SnackbarAlert";
import emailjs from "@emailjs/browser";
import theme from "../../styles/theme";

const ctaSections = [
  {
    title:
      "Support our mission and help us grow. To contribute, please visit our Donate page.",
    button: "Donate",
    path: "/donate",
  },
  {
    title:
      "Interested in joining our mission-driven team? Explore open roles and apply on our Careers page.",
    button: "Careers",
    path: "/careers",
  },
  {
    title:
      "Have ideas for collaboration or partnership? Reach out using our contact form.",
    button: "Contact Form",
    path: "#contact-form",
  },
];

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

const ContactRequest = () => {
  const form = useRef(null);
  const faqRef = useRef(null);
  const contactTopRef = useRef(null);

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
  const theme = useTheme();
  const navigate = useNavigate();
  const { ref: cardRef, inView: cardInView } = useInView();
  const { ref: imageRef, inView: imageInView } = useInView();

  const handleButtonClick = (path: string) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, transparent 100%)`,
      }}
    >
      <Container maxWidth="lg">
        {" "}
        <Grid container>
          {/* CTA Section */}
          <Grid
            item
            xs={12}
            sm={6}
            {...({} as any)}
            sx={{ width: { xs: "100%", md: "50%" } }}
          >
            <Box
              ref={cardRef}
              sx={{
                background: "#fafaf5",
                borderRadius: 4,
                boxShadow: "0 1px 6px 0 #0001",
                px: { xs: 3, sm: 4, md: 6 },
                py: { xs: 5, md: 8 },
                display: "flex",
                flexDirection: "column",
                maxWidth: { xs: "100%", md: 540 },
                mx: { xs: "auto", md: 0 },
                opacity: cardInView ? 1 : 0,
                transform: cardInView ? "translateY(0)" : "translateY(40px)",
                transition: "all 0.8s ease",
              }}
            >
              <Typography
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: 3,
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: theme.palette.text.secondary,
                  mb: 2,
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.9rem",
                  },
                }}
              >
                Get Involved
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.2rem",
                    md: "2.4rem",
                    lg: "2.8em",
                  },
                  lineHeight: 1.17,
                  color: theme.palette.text.primary,
                  mb: 5,
                  letterSpacing: 2,
                }}
              >
                Contact & Connect
              </Typography>

              {ctaSections.map((section, idx) => {
                const { ref, inView } = useInView();

                return (
                  <React.Fragment key={section.button}>
                    <Box
                      ref={ref}
                      sx={{
                        display: "flex",
                        gap: 3,
                        alignItems: "flex-start",
                        py: 2,
                        opacity: inView ? 1 : 0,
                        transform: inView
                          ? "translateX(0)"
                          : "translateX(40px)",
                        transition: "all 0.6s ease",
                        flexDirection: {
                          xs: "column",
                          sm: "row",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          mt: { xs: 0, sm: "2px" },
                          bgcolor: theme.palette.primary.hero,
                          borderRadius: 2,
                          width: 40,
                          height: 40,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 1px 3px #0002",
                          flexShrink: 0,
                          mx: { xs: "auto", sm: 0 },
                        }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: theme.palette.primary.focus,
                            fontSize: 28,
                          }}
                        />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: {
                              xs: "1rem",
                              sm: "1.16rem",
                              md: "1.22rem",
                            },
                            color: theme.palette.text.primary,
                            textAlign: { xs: "center", sm: "left" },
                          }}
                        >
                          {section.title}
                        </Typography>
                        <Box
                          sx={{
                            mt: 1.5,
                            display: "flex",
                            justifyContent: {
                              xs: "center",
                              sm: "flex-start",
                            },
                          }}
                        >
                          <Button
                            onClick={() => handleButtonClick(section.path)}
                            sx={{
                              backgroundColor: theme.palette.primary.focus,
                              color: theme.palette.primary.hero,
                              borderRadius: 8,
                              mt: 2,
                              height: 48,
                              width: { xs: "100%", sm: 200 },
                              maxWidth: 260,
                              fontWeight: 700,
                              fontSize: "16px",
                              textTransform: "uppercase",
                              fontFamily: "Poppins, sans-serif",
                              letterSpacing: "0.5px",
                              transition: "all 0.3s ease",
                              boxShadow: "0 2px 8px #0001",
                              "&:hover": {
                                backgroundColor: theme.palette.primary.hero,
                                color: theme.palette.primary.focus,
                              },
                            }}
                          >
                            {section.button}
                          </Button>
                        </Box>
                      </Box>
                    </Box>

                    {idx < ctaSections.length - 1 && (
                      <Divider sx={{ my: 1.5, borderColor: "#ECEBE5" }} />
                    )}
                  </React.Fragment>
                );
              })}
            </Box>
          </Grid>

          {/* Image Section */}

          <Grid
            item
            xs={12}
            sm={6}
            // pl={2}
            component="div"
            sx={{
              display: "flex",
              alignItems: "center", // centers vertically
              justifyContent: "center", // centers horizontally
              width: { xs: "100%", md: "50%" },
              marginTop: { xs: "40px", md: "0" },
            }}
            // width="50%"
            {...({} as any)}
          >
            <Box
              id="contact-form"
              sx={{
                backgroundColor: theme.palette.primary.main,
                p: { xs: 4, md: 6 },
                width: "100%",
                // mb: { xs: 0, md: 10 },
                borderRadius: 2,
                border: "3px solid transparent",
                transition:
                  "box-shadow 0.5s ease, border-color 0.5s ease, transform 0.3s ease",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
                scrollMarginTop: "100px",
                // "&:hover": {
                //   boxShadow: "0px 0px 20px rgba(0,0,0,0.6)",
                //   borderColor: theme.palette.primary.focus,
                // },
              }}
            >
              <Fade in={true} timeout={4000}>
                <Box
                  component="form"
                  ref={form}
                  onSubmit={sendEmail}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    py: 4.5,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: theme.palette.text.primary,
                      textAlign: "center",
                    }}
                  >
                    Contact Form
                  </Typography>
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
                      sx={{ width: { xs: "100%", lg: "48%" } }}
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
                      sx={{ width: { xs: "100%", lg: "48%" } }}
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
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactRequest;
