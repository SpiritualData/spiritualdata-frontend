import { Modal, Box, Typography, Button } from "@mui/material";
import {
  createSubscription,
  redirectToCheckout,
} from "../../utils/services/paymentService";

const SubscriptionModal = ({ isSubscribed, userId, setIsSubscribed }) => {
  // const handleSubscribe = async () => {
  //   try {
  //     const session = await createSubscription(
  //       "payments/create-checkout-session",
  //       userId,
  //       process.env.REACT_APP_STRIPE_PRICE_ID_PREMIUM_SUBSCRIPTION
  //     );
  //     if (session?.data?.stripeId) {
  //       await redirectToCheckout(session.data.stripeId);
  //     } else {
  //       console.error("Stripe session ID is missing from the response.");
  //       alert(
  //         "An error occurred while creating the subscription session. Please try again."
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error during subscription process:", error);
  //     if (error.response?.status === 401) {
  //       alert("You are not authenticated. Please log in and try again.");
  //     } else if (error.response?.status === 400) {
  //       alert("Invalid request. Please check your details and try again.");
  //     } else {
  //       alert("An unexpected error occurred. Please try again later.");
  //     }
  //     setIsSubscribed(false);
  //   }
  // };

  return (
    <Modal
      open={isSubscribed}
      onClose={() => setIsSubscribed(false)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "transparent",
        backdropFilter: isSubscribed ? "blur(2px)" : "none",
        transition: "backdrop-filter 0.3s ease",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: 4,
          borderRadius: 3,
          textAlign: "center",
          width: { xs: "90%", sm: 400 },
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          animation: "fadeIn 0.3s ease-in-out",
          position: "relative",
          outline: "0px solid transparent",
          margin: "0px 10px",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: "#333",
            mb: 2,
          }}
        >
          You need to subscribe to continue.
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            color: "#666",
            lineHeight: 1.6,
          }}
        >
          Please click the Subscribe button to start chatting.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setIsSubscribed(false)}
            sx={{
              borderRadius: 50,
              paddingX: 3,
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            // onClick={handleSubscribe}
            sx={{
              borderRadius: 50,
              paddingX: 3,
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            Subscribe
          </Button> 
        </Box>
      </Box>
    </Modal>
  );
};

export default SubscriptionModal;
