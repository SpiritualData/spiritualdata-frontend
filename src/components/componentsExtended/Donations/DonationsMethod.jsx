import { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";

import stripe from "../../../assets/stripe.png";
import paypal from "../../../assets/paypal-logo.webp";

const data = [
  {
    label: "Paypal",
    image: paypal, // We will directly embed the PayPal button instead of using an image
    description:
      "PayPal is supported in more than 200 countries. A PayPal account is not required.",
    path: "#paypal",
  },
  {
    label: "Stripe",
    image: stripe,
    description:
      "Stripe is supported in 46 countries.",
    path: "https://donate.stripe.com/7sI03ggDG42kb6g9AA",
  },
];

const DonationMethod = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [label, setLabel] = useState();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [amount, setAmount] = useState("10");

  useEffect(() => {
      // Load PayPal SDK when the component is mounted
      if (window.PayPal) {
        window.PayPal.Donation.Button({
          env: "production",
          hosted_button_id: "KVX8B435LBFY4",
          image: {
            src: "https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif",
            alt: "Donate with PayPal button",
            title: "PayPal - The safer, easier way to pay online!",
          },
        }).render("#paypal-button-container");
      }
    });

  const numberPattern = /^(\d+\.?\d*|\.\d+)$/;

  const handleOpenPopup = (label) => {
    setLabel(label);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleAmountChange = (event) => {
    const { value } = event.target;
    if (numberPattern.test(value)) {
      setAmount(value);
    } else if (value === "") {
      setAmount("0.1");
    }
  };

  const handleContinue = () => {
    handleClosePopup();
    if (label === "Stripe") {
      window.location.href = "https://your-stripe-checkout-url";
    }
  };

  const onToken = (token) => {
    setShowSnackbar(true);
  };

  return (
    <Grid
      container
      item
      sx={{
        background: "#F3F6F8",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        gap: { xs: 6, sm: 4 },
      }}
      pt={{ xs: 4, md: 8 }}
      pb={{ xs: 8, md: 12 }}
      px={{ xs: 2, md: 6 }}
    >
      <Stack px={{ xs: "10%", md: "24%" }} mb={{ xs: 0, md: 2 }}>
        <Typography sx={{ fontWeight: "bold", mb: 1 }} variant="h4">
          How would you like to donate?
        </Typography>
      </Stack>

      {data.map((item, index) => {
        return (
          <Grid item xs={12} sm={5.5} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                pb: 4,
                cursor: "pointer",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  "& Button": {
                    background: (theme) => theme.palette.primary.hover,
                    color: "white",
                    opacity: 0.9,
                  },
                  "& h4": {
                    color: (theme) => theme.palette.primary.hover,
                  },
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                {item.label === "PayPal" ? (
                  <div id="paypal-button-container">
                    {/* PayPal button will be rendered here */}
                  </div>
                ) : (
                  <>
                    <img
                      src={item.image}
                      alt={item.label}
                      width="180"
                      height="120"
                      style={{
                        transform: item.label === "Stripe" ? "scale(1.1)" : "none",
                      }}
                    />
                    <Typography variant="body1" sx={{ textAlign: "left", color: "black" }}>
                      {item.description}
                    </Typography>
                  </>
                )}
              </CardContent>
              {item.label === "Stripe" ? (
                <Button
                  sx={{
                    background: "black",
                    color: (theme) => theme.palette.text.secondary,
                    textTransform: "none",
                    height: "42px",
                    width: "200px",
                    px: 6,
                    borderRadius: 20,
                  }}
                  onClick={() => window.location.href = item.path}
                >
                  Use {item.label}
                </Button>
              ) : (
                <div style={{ width: "100%", textAlign: "center" }}>
                  <div id="paypal-button-container">
                    {/* PayPal button is rendered here */}
                  </div>
                </div>
              )}
            </Card>
          </Grid>
        );
      })}

    </Grid>
  );
};

export default DonationMethod;
