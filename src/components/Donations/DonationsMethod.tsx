import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Modal,
  Stack,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import stripe from "../../assets/images/donate/stripe.webp";
import paypal from "../../assets/images/donate/paypal.webp";

interface DonationMethodProps {
  amount?: number;
}

const DonationMethod: React.FC<DonationMethodProps> = ({ amount }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const paypalBaseUrl =
    "https://www.paypal.com/donate/?hosted_button_id=KVX8B435LBFY4";
  const stripeBaseUrl = "https://donate.stripe.com/7sI03ggDG42kb6g9AA";

  const withAmountParams = amount ? `&amount=${amount}&currency_code=USD` : "";

  const donationOptions = [
    {
      label: "Paypal",
      image: paypal,
      description: "PayPal works in 200+ countries. No account needed.",
      path: amount ? `${paypalBaseUrl}${withAmountParams}` : paypalBaseUrl,
    },
    {
      label: "Stripe",
      image: stripe,
      description: "Stripe supports secure card donations in 46 countries.",
      path: amount ? `${stripeBaseUrl}?amount=${amount * 100}` : stripeBaseUrl,
    },
  ];

  useEffect(() => {
    if ((window as any).PayPal) {
      (window as any).PayPal.Donation.Button({
        env: "production",
        hosted_button_id: "KVX8B435LBFY4",
        image: {
          src: "https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif",
          alt: "Donate with PayPal button",
          title: "PayPal - The safer, easier way to pay online!",
        },
      }).render("#paypal-button-container");
    }
  }, []);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          px: 4,
          py: 1,
          borderRadius: 5,
          textTransform: "none",
          fontSize: 16,
          fontWeight: 600,
          letterSpacing: 1,
          backgroundColor: theme.palette.primary.focus,
          color: theme.palette.text.primary,
          transition: "all 0.3s ease",
          ":hover": {
            backgroundColor: theme.palette.primary.hover,
            color: theme.palette.primary.focus,
            transform: "scale(1.05)",
          },
        }}
      >
        Donate Now
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          onClick={(e) => e.stopPropagation()}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: theme.palette.darkcard.contrastText,
            boxShadow: 24,
            borderRadius: 4,
            maxWidth: 800,
            width: "90%",
            outline: "none",
          }}
        >
          {/* Close Icon */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: -20,
              right: -20,
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.primary.hero,
              zIndex: 1,
              border: `3px solid ${theme.palette.primary.main}`,
              ":hover": {
                backgroundColor: theme.palette.primary.focus,
                color: theme.palette.text.primary,
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Grid
            container
            sx={{
              // backgroundColor: theme.palette.primary.hover,
              borderRadius: 4,
              textAlign: "center",
              justifyContent: "center",
              gap: { xs: 6, sm: 4 },
              p: { xs: 3, sm: 5 },
              backgroundColor: theme.palette.cosmic.primary,
              position: "relative",
              overflow: "hidden",
              color: theme.palette.text.primary,
            }}
            pt={{ xs: 4, md: 6 }}
            pb={{ xs: 6, md: 8 }}
            px={{ xs: 2, md: 4 }}
          >
            <Stack px={{ xs: "5%", md: "15%" }} mb={{ xs: 0, md: 2 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.primary.hover,
                  mb: 1,
                }}
              >
                How would you like to donate?
              </Typography>
              {typeof amount === "number" && !isNaN(amount) && (
                <Typography variant="body2" color="primary.hover">
                  Amount: ${amount.toFixed(2)}
                </Typography>
              )}
            </Stack>

            {donationOptions.map((item, index) => (
              <Grid
                item
                key={index}
                sx={{ width: { xs: "100%", sm: "45%" } }}
                onClick={() => (window.location.href = item.path)}
                component="div"
                {...({} as any)}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                    pb: 4,
                    cursor: "pointer",
                    borderRadius: 3,
                    backgroundColor: theme.palette.cosmic.primary,
                    boxShadow: `0px 0px 16px ${theme.palette.cardshadow.main}`,
                    transition:
                      "transform 0.3s ease, background-color 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      backgroundColor: theme.palette.primary.focus,
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      pb: 1,
                      textAlign: "center",
                      color: theme.palette.text.primary,
                      justifyContent: "space-between",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.label}
                      width="180"
                      height="120"
                      style={{
                        transform:
                          item.label === "Stripe" ? "scale(1.1)" : "none",
                        marginBottom: "1rem",
                        objectFit: "contain",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: "center",
                        color: theme.palette.text.primary,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default DonationMethod;
