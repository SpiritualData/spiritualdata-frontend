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

const StyledCard = styled(Card)({
  width: "80%",
  height: "80%",
  padding: "16px",
  margin: "auto",
  borderRadius: "10px",
  boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.15)",
});

export const StyledTextField = styled(TextField)(() => ({
  "& .MuiInputLabel-root": {
    color: "black",
  },
  "& .MuiInputBase-input": {
    color: "#333",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
    boxShadow: "none",
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#E6E6E6",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    borderColor: "transparent",
    boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
  },
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
  const [snackbarColor, setSnackbarColor] = useState<"success" | "error">(
    "success"
  );
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

  const gridItemStyles: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Grid container>
          <PageHeader image={image} page={"Contact"} />
    
          <PageDef
            title={"CONTACT US"}
            heading={"We'd love to hear from you!"}
            details={
              "Your voice matters at Spiritual Data. Get involved, share experiences, critique our methods. Spiritual Data is community-driven."
            }
          />
    
          <StyledCard>
            <Grid container spacing={4} mb={{ xs: 2, md: 0 }}>
              <Grid size={{md:4}} sx={{ display: { xs: "none", md: "block" } }}>
                <img
                  src={formImage}
                  alt="signup"
                  style={{ width: "100%", height: "100%" }}
                />{" "}
              </Grid>
              <Grid
                size={{ xs: 12, md: 8 }}
                mt={{ xs: 0, sm: 2 }}
                px={{ xs: 0, sm: 1, md: 2 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack spacing={2} mt={3} mb={4} alignItems="flex-end">
                  <form ref={form} onSubmit={sendEmail}>
                    <Grid container spacing={2} mb={2}>
                      <Grid size={{xs:12, sm:6}}>
                        <StyledTextField
                          label="Name"
                          name="name"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid size={{xs:12, sm:6}}>
                        <StyledTextField
                          label="Email"
                          name="email"
                          size="small"
                          fullWidth
                          required
                        />
                      </Grid>
    
                      <Grid size={{xs:12, sm:6}} >
                        <StyledTextField
                          label="Phone"
                          name="number"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid size={{xs:12, sm:6}}>
                        <StyledTextField
                          label="Subject"
                          name="subject"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                    </Grid>
    
                    <StyledTextField
                      label="Message"
                      name="message"
                      minRows={6}
                      maxRows={6}
                      multiline
                      fullWidth
                      required
                    />
    
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        textTransform: "none",
                        width: "30%",
                        py: "2%",
                        mt: 1,
                      }}
                    >
                      {buttonText}
                    </Button>
                  </form>
    
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
                </Stack>
              </Grid>
            </Grid>
          </StyledCard>
    
          <Grid
            size={{xs:12}}
            my={{ xs: 4, sm: 8 }}
            px={{ xs: 4, md: "26%" }}
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
  );
};

export default Contact;
