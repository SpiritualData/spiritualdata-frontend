import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import emailjs from "@emailjs/browser";

import PageHeader from "../helpers/PageHeader";
import image from "../../assets/contact.webp";
import formImage from "../../assets/contactForm.png";
import PageDef from "../componentsExtended/PageDef";

const StyledCard = styled(Card)({
  width: "80%",
  height: "80%",
  padding: "16px",
  margin: "auto",
  borderRadius: "10px",
  boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.15)",
});

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: "gray",
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

const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarColor, setSnackbarColor] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSnackbarMessage("Email sent successfully!");
          setSnackbarColor("green");
          setShowSnackbar(true);
          setButtonText("Send");
          e.target.reset();
        },
        (error) => {
          setSnackbarMessage(
            "Request failed, please try again or contact on the email provided below!"
          );
          setSnackbarColor("red");
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

      <PageDef
        title={"CONTACT US"}
        heading={"Drop us Message for any Query"}
        details={
          "Your voice matters at Spiritual Data. Get involved, share experiences, contribute insights. We grow and learn together in this spiritual journey"
        }
      />

      <StyledCard>
        <Grid container spacing={4} mb={{ xs: 2, md: 0 }}>
          <Grid item sx={{ display: { xs: "none", md: "block" } }} md={4}>
            <img
              src={formImage}
              alt="signup"
              style={{ width: "100%", height: "100%" }}
            />{" "}
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
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
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      label="Name"
                      name="name"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      label="Email"
                      name="email"
                      size="small"
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      label="Phone"
                      name="number"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
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
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
                style={{
                  position: "fixed",
                  backgroundColor: snackbarColor,
                  bottom: "20px",
                  left: "20px",
                  minWidth: "200px",
                  zIndex: 9999,
                }}
                ContentProps={{
                  style: { backgroundColor: snackbarColor, color: "white" },
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </StyledCard>

      <Grid
        item
        xs={12}
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

        <Grid item mt={2} sx={{ gap: 10 }}>
          <StyledIcon as={Facebook} />
          <StyledIcon as={Instagram} />
          <StyledIcon as={Twitter} />
          <StyledIcon as={LinkedIn} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
