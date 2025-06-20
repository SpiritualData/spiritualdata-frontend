import { useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
// import axios from "../utils/axios";
import stripe from "../../assets/stripe.png";
import paypal from "../../assets/paypal-logo.webp";

const data = [
  {
    label: "Paypal",
    image: paypal,
    description:
      "PayPal is supported in more than 200 countries. A PayPal account is not required.",
    path: "https://www.paypal.com/donate/?hosted_button_id=KVX8B435LBFY4",
  },
  {
    label: "Stripe",
    image: stripe,
    description: "Stripe is supported in 46 countries.",
    path: "https://donate.stripe.com/7sI03ggDG42kb6g9AA",
  },
];

const DonationMethod = () => {
  // const [openPopup, setOpenPopup] = useState(false);
  // const [label, setLabel] = useState();
  // const [showSnackbar, setShowSnackbar] = useState(false);
  // const [amount, setAmount] = useState("10");

  useEffect(() => {
    // Load PayPal SDK when the component is mounted
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
  });

  // const numberPattern = /^(\d+\.?\d*|\.\d+)$/;

  // const handleOpenPopup = (label) => {
  //   setLabel(label);
  //   setOpenPopup(true);
  // };

  // const handleClosePopup = () => {
  //   setOpenPopup(false);
  // };

  // const handleAmountChange = (event) => {
  //   const { value } = event.target;
  //   if (numberPattern.test(value)) {
  //     setAmount(value);
  //   } else if (value === "") {
  //     setAmount("0.1");
  //   }
  // };

  // const onToken = async (token) => {
  //   try {
  //     const response = await axios.post("/create-payment-intent/", {
  //       token_id: token.id,
  //       amount: amount * 100,
  //       email: token.email,
  //     });

  //     if (response.status === 200) {
  //       console.log("Charge successful:", response.data.charge);
  //       setShowSnackbar(true);
  //       handleClosePopup();
  //     } else {
  //       console.error("Charge failed:", response.data.detail);
  //       alert(`Charge failed: ${response.data.detail}`);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error.response ? error.response.data : error.message);
  //     alert("There was an error processing your donation. Please try again.");
  //   }
  // };

  return (
    <Grid
      container
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
          <Grid
            sx={{
              width: { xs: "100%", sm: "45%" },
            }}
            key={index}
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
                <>
                  <img
                    src={item.image}
                    alt={item.label}
                    width="180"
                    height="120"
                    style={{
                      transform:
                        item.label === "Stripe" ? "scale(1.1)" : "none",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "left", color: "black" }}
                  >
                    {item.description}
                  </Typography>
                </>
              </CardContent>
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
                onClick={() => (window.location.href = item.path)}
              >
                Use {item.label}
              </Button>
            </Card>
          </Grid>
        );
      })}

      {/* <AmountDialouge
            openPopup={openPopup}
            handleAmountChange={handleAmountChange}
            handleClosePopup={handleClosePopup}
            onToken={onToken}
            amount={amount}
            label={label}
          />
    
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={showSnackbar}
            autoHideDuration={3000}
            onClose={() => setShowSnackbar(false)}
            message="Donation Successful, thank you for your contribution!"
            ContentProps={{
              style: { backgroundColor: "green", color: "white" },
            }}
          /> */}
    </Grid>
  );
};

export default DonationMethod;
