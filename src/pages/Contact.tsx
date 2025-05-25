import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  Grid,
  Snackbar,
  Stack,
  SvgIcon,
  TextField,
  Typography,
  styled,
  Box,
  Container,
} from "@mui/material";
import { LinkedIn, X, YouTube } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import { FormEvent } from "react";
import { SxProps } from "@mui/material/styles";

import PageHeader from "../components/PageHeader";
import image from "../assets/contact.webp";
import formImage from "../assets/contactForm.png";
import PageDef from "../components/PageDef";
import { Alert, TransitionUp } from "../components/SnackbarAlert";
import { links } from "../data/footerData";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
  borderRadius: "10px",
  boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.15)",
  backgroundColor: "#fff",
  maxWidth: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: "black",
  },
  "& .MuiInputBase-input": {
    color: "#333",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
  },
  width: "100%",
}));

const StyledIcon = styled("div")(({ theme }) => ({
  color: "gray",
  margin: "0 6px 0 6px",
  border: "1px solid lightgray",
  borderRadius: 20,
  padding: 6,
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.text.secondary,
    background: theme.palette.primary.hover,
  },
}));

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [buttonText, setButtonText] = useState<string>("Send");
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarColor, setSnackbarColor] = useState<"success" | "error">("success");
  const [transition] = useState(() => TransitionUp);

  const sendEmail = (e: FormEvent) => {
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
          setButtonText("Send");
          form.current?.reset();
        },
        () => {
          setSnackbarMessage(
            "Request failed, please try again or contact on the email provided below!"
          );
          setSnackbarColor("error");
          setShowSnackbar(true);
          setButtonText("Send");
        }
      );
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <Grid container>
      <PageHeader image={image} page={"Contact"} />
    
      <Grid container spacing={{ xs: 4, md: 6 }} direction="column" p={{ xs: 2, md: 6 }}>
        <Grid>
          <PageDef
            title={"CONTACT US"}
            heading={"We'd love to hear from you!"}
            details={
              "Your voice matters at Spiritual Data. Get involved, share experiences, critique our methods. Spiritual Data is community-driven."
            }
          />
        </Grid>

        <Grid container justifyContent="center">
          <Grid size={{ xs: 12, md: 10 }}>
            <StyledCard>
              <Grid container spacing={{ xs: 2, md: 4 }}>
                <Grid size={{ md: 4 }} sx={{ display: { xs: "none", md: "block" } }}>
                  <Box
                    component="img"
                    src={formImage}
                    alt="contact form"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: 1,
                      maxHeight: "600px",
                      padding: 2,
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Box 
                    component="form" 
                    ref={form} 
                    onSubmit={sendEmail} 
                    noValidate
                    sx={{
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <StyledTextField
                          label="Name"
                          name="name"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <StyledTextField
                          label="Email"
                          name="email"
                          size="small"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <StyledTextField
                          label="Phone"
                          name="number"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <StyledTextField
                          label="Subject"
                          name="subject"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid size={12}>
                        <StyledTextField
                          label="Message"
                          name="message"
                          minRows={6}
                          maxRows={6}
                          multiline
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                          variant="contained"
                          type="submit"
                          sx={{
                            textTransform: "none",
                            width: { xs: "100%", sm: "200px" },
                            py: 1.5,
                            borderRadius: 2,
                            backgroundColor: (theme) => theme.palette.primary.focus,
                            "&:hover": {
                              backgroundColor: (theme) => theme.palette.primary.hover,
                            },
                          }}
                        >
                          {buttonText}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </StyledCard>
          </Grid>
        </Grid>

        <Grid
          size={{xs:12}}
          my={{ xs: 4, sm: 8 }}
          px={{ xs: 2, md: 4 }}
          sx={{ textAlign: "center" }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "26px" },
              fontWeight: "bold",
            }}
          >
            Email Address:
          </Typography>
          <a
            href="mailto:support@spiritualdata.org"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "26px" },
                fontWeight: "bold",
                color: (theme) => theme.palette.primary.focus,
                "&:hover": {
                  color: (theme) => theme.palette.primary.hover,
                },
              }}
            >
              support@spiritualdata.org
            </Typography>
          </a>
    
          <Grid
            size={12}
            mt={2}
            sx={{ display: "flex", justifyContent: "center", gap: 2 }}
          >
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <StyledIcon as={LinkedIn} />
            </a>
    
            <a href={links.twitter} target="_blank" rel="noopener noreferrer">
              <StyledIcon as={X} />
            </a>
    
            <a href={links.youtube} target="_blank" rel="noopener noreferrer">
              <StyledIcon as={YouTube} />
            </a>
            <a href={links.discord} target="_blank" rel="noopener noreferrer">
              <StyledIcon>
                <SvgIcon>
                  <path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.2.38-.44.87-.6 1.25a18.27 18.27 0 0 0-5.5 0c-.16-.4-.4-.87-.6-1.25a.08.08 0 0 0-.09-.04 19.74 19.74 0 0 0-4.88 1.52.07.07 0 0 0-.04.03A20.26 20.26 0 0 0 .1 18.06a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.02c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.1 13.1 13.1 0 0 1-1.87-.9.08.08 0 0 1 0-.12l.36-.3a.07.07 0 0 1 .08 0 14.2 14.2 0 0 0 12.06 0 .07.07 0 0 1 .08 0l.37.3a.08.08 0 0 1 0 .12 12.3 12.3 0 0 1-1.88.9.08.08 0 0 0-.04.1c.36.7.78 1.36 1.23 2a.08.08 0 0 0 .08.02c1.96-.6 3.95-1.52 6-3.03a.08.08 0 0 0 .04-.05c.5-5.18-.84-9.68-3.55-13.66a.06.06 0 0 0-.03-.03zM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42Z" />
                </SvgIcon>
              </StyledIcon>
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={2000}
        TransitionComponent={transition}
        onClose={handleCloseSnackbar}
      >
        <Alert severity={snackbarColor} onClose={handleCloseSnackbar}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Contact;
