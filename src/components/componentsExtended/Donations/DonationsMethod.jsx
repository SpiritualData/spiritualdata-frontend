import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import paypal from "../../../assets/paypal-logo.webp";
import stripe from "../../../assets/stripe.png";

const data = [
  {
    label: "Paypal",
    image: paypal,
    description:
      "Support Spiritual Data in exploring life's biggest questions with secure and hassle-free payments through Paypal. Your generous donations empower our community to dive deeper into the realms of spirituality, fostering growth, understanding, and unity.",
    path: "#paypal",
  },
  {
    label: "Stripe",
    image: stripe,
    description:
      "Explore the uncharted territories of spirituality with Spiritual Data's Discovery page, and contribute through Stripe's seamless and trusted payment system. Together, we pool knowledge, experiences, and insights, helping you navigate your personal spiritual journey with more clarity and confidence.",
    path: "#stripe",
  },
];

const DonationMethod = () => {

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
              // onClick={() => handleOpenPopup(item.label)}
            >
              <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                <img
                  src={item.image}
                  alt={item.label}
                  width="180"
                  height="120"
                  style={{
                    transform:
                      item.label === "Paypal" ? "scale(1.6)" : "scale(1.1)",
                  }}
                />
                <Typography variant="body1" sx={{ color: "gray" }}>
                  {item.description}
                </Typography>
              </CardContent>
              <Button
                sx={{
                  background: "gray",
                  color: (theme) => theme.palette.text.secondary,
                  textTransform: "none",
                  height: "42px",
                  width: "200px",
                  px: 6,
                  borderRadius: 20,
                }}
              >
                Use {item.label}
              </Button>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DonationMethod;
