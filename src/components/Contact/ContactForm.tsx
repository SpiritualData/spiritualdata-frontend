import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  Grid,
  Snackbar,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { FormEvent } from "react";
import { Alert, TransitionUp } from "../SnackbarAlert";
import formImage from "../../assets/contactForm.png";

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

const ContactForm = () => {
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
    
  return (
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
  );
};

export default ContactForm;