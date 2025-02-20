import { loadStripe } from "@stripe/stripe-js";
import apiClient from "../axios";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const createSubscription = async (endpoint, userId, priceId) => {
  try {
    const response = await apiClient.post(endpoint, { userId, priceId });
    return response.data;
  } catch (error) {
    console.error("Error creating subscription:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request data:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    throw error;
  }
};

const redirectToCheckout = async (sessionId) => {
  try {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
    if (error) {
      console.error("Stripe Checkout Error:", error);
      throw error;
    }
  } catch (error) {
    console.error("Error during redirect to checkout:", error);
    throw error;
  }
};

export { createSubscription, redirectToCheckout };
