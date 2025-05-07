import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import StripeCheckout from "react-stripe-checkout";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const popupStyle = {
  minWidth: { xs: 200, sm: 360 },
  textAlign: "center",
};

const popupTitleStyle = {
  fontWeight: "bold",
  fontSize: 24,
};

const popupTextFieldStyle = {
  marginBottom: 2,
};

const popupButtonStyle = {
  background: "black",
  color: (theme: any) => theme.palette.text.secondary,
  textTransform: "none",
  height: "46px",
  width: "200px",
  px: 6,
  borderRadius: 20,
  "&:hover": {
    background: (theme: any) => theme.palette.primary.hover,
    color: "white",
    opacity: 0.9,
  },
};

interface AmountDialogueProps {
  openPopup: boolean;
  handleAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToken: (token: any) => void;
  handleClosePopup: () => void;
  amount: string;
  label: "Stripe" | "PayPal";
}

const AmountDialouge: React.FC<AmountDialogueProps> = ({
  openPopup,
  handleAmountChange,
  onToken,
  handleClosePopup,
  amount,
  label,
}) => {
  return (
    <Dialog open={openPopup} onClose={handleClosePopup}>
      <DialogContent sx={popupStyle}>
        <DialogTitle sx={popupTitleStyle}>Enter Amount (USD)</DialogTitle>
        <Stack>
          <TextField
            type="number"
            value={amount}
            onChange={handleAmountChange}
            sx={popupTextFieldStyle}
          />
          {label === "Stripe" ? (
            <StripeCheckout
              token={onToken}
              stripeKey={import.meta.env.VITE_STRIPE_PUBLIC_KEY}
              name="Spiritual Data Donation"
              currency="USD"
              panelLabel="Donate"
              amount={Number(amount) * 100}
              disabled={!amount || Number(amount) === 0}
            >
              <Button
                disabled={!amount || Number(amount) === 0}
                sx={popupButtonStyle}
              >
                Continue
              </Button>
            </StripeCheckout>
          ) : Number(amount) > 0 ? (
            <PayPalScriptProvider
              options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: amount,
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (data, actions) => {
                  const details = await actions.order?.capture();
                  const name = details?.payer.name?.given_name;
                  alert("Transaction completed by " + name);
                }}
              />
            </PayPalScriptProvider>
          ) : null}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default AmountDialouge;
