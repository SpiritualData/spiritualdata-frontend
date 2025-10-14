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
              backgroundColor: "#F2F3EB",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Cellipse fill='none' stroke-width='200' id='a' rx='600' ry='450'/%3E%3C/defs%3E%3Cg transform='scale(0.838)' style='transform-origin:center'%3E%3Cg transform='rotate(140.4 0 0)' style='transform-origin:center'%3E%3Cg transform='rotate(-160 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%23D3EB63' href='%23a' transform='rotate(-60 0 0) scale(0.4)'/%3E%3Cuse stroke='%23d5eb6a' href='%23a' transform='rotate(-50 0 0) scale(0.5)'/%3E%3Cuse stroke='%23d7ec71' href='%23a' transform='rotate(-40 0 0) scale(0.6)'/%3E%3Cuse stroke='%23d8ec77' href='%23a' transform='rotate(-30 0 0) scale(0.7)'/%3E%3Cuse stroke='%23daed7e' href='%23a' transform='rotate(-20 0 0) scale(0.8)'/%3E%3Cuse stroke='%23dbed84' href='%23a' transform='rotate(-10 0 0) scale(0.9)'/%3E%3Cuse stroke='%23dded8b' href='%23a'/%3E%3Cuse stroke='%23dfee91' href='%23a' transform='rotate(10 0 0) scale(1.1)'/%3E%3Cuse stroke='%23e0ee97' href='%23a' transform='rotate(20 0 0) scale(1.2)'/%3E%3Cuse stroke='%23e2ef9d' href='%23a' transform='rotate(30 0 0) scale(1.3)'/%3E%3Cuse stroke='%23e3efa3' href='%23a' transform='rotate(40 0 0) scale(1.4)'/%3E%3Cuse stroke='%23e5efaa' href='%23a' transform='rotate(50 0 0) scale(1.5)'/%3E%3Cuse stroke='%23e6f0b0' href='%23a' transform='rotate(60 0 0) scale(1.6)'/%3E%3Cuse stroke='%23e7f0b6' href='%23a' transform='rotate(70 0 0) scale(1.7)'/%3E%3Cuse stroke='%23e9f0bc' href='%23a' transform='rotate(80 0 0) scale(1.8)'/%3E%3Cuse stroke='%23eaf1c2' href='%23a' transform='rotate(90 0 0) scale(1.9)'/%3E%3Cuse stroke='%23ebf1c7' href='%23a' transform='rotate(100 0 0) scale(2)'/%3E%3Cuse stroke='%23ecf1cd' href='%23a' transform='rotate(110 0 0) scale(2.1)'/%3E%3Cuse stroke='%23eef2d3' href='%23a' transform='rotate(120 0 0) scale(2.2)'/%3E%3Cuse stroke='%23eff2d9' href='%23a' transform='rotate(130 0 0) scale(2.3)'/%3E%3Cuse stroke='%23f0f2df' href='%23a' transform='rotate(140 0 0) scale(2.4)'/%3E%3Cuse stroke='%23f1f3e5' href='%23a' transform='rotate(150 0 0) scale(2.5)'/%3E%3Cuse stroke='%23F2F3EB' href='%23a' transform='rotate(160 0 0) scale(2.6)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",

              // backgroundImage: `url(${image})`,
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
                    backgroundColor: theme.palette.primary.main,
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
