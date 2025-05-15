import { loadStripe, Stripe } from "@stripe/stripe-js";
import apiClient from "../axios";

const stripePromise: Promise<Stripe | null> = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY
);

interface SubscriptionResponse {
  sessionId: string;
  [key: string]: any;
}

interface ErrorResponse {
  response?: {
    data: any;
    status: number;
    headers: any;
  };
  request?: any;
  message: string;
}

const createSubscription = async (
  endpoint: string,
  userId: string,
  priceId: string
): Promise<SubscriptionResponse> => {
  try {
    const response = await apiClient.post(endpoint, { userId, priceId });
    return response.data;
  } catch (error: unknown) {
    const err = error as ErrorResponse;
    console.error("Error creating subscription:", err);

    if (err.response) {
      console.error("Response data:", err.response.data);
      console.error("Response status:", err.response.status);
      console.error("Response headers:", err.response.headers);
    } else if (err.request) {
      console.error("Request data:", err.request);
    } else {
      console.error("Error message:", err.message);
    }
    throw error;
  }
};

const redirectToCheckout = async (sessionId: string): Promise<void> => {
  try {
    const stripe = await stripePromise;
    if (!stripe) {
      throw new Error("Stripe failed to initialize");
    }

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.error("Stripe Checkout Error:", error);
      throw error;
    }
  } catch (error: unknown) {
    console.error("Error during redirect to checkout:", error);
    throw error;
  }
};

export { createSubscription, redirectToCheckout };
