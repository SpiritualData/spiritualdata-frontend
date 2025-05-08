/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Backend API base URL
   * @example "http://192.168.0.199:8000"
   */
  readonly VITE_BACKEND_URL: string;

  /**
   * Clerk authentication publishable key
   * @example "pk_test_aW4tbWluay0xMS5jbGVyay5hY2NvdW50cy5kZXYk"
   */
  readonly VITE_CLERK_PUBLISHABLE_KEY: string;

  /**
   * EmailJS service ID
   * @example "service_ynlzw2t"
   */
  readonly VITE_EMAILJS_SERVICE_ID: string;

  /**
   * EmailJS template ID
   * @example "template_hb31yxe"
   */
  readonly VITE_EMAILJS_TEMPLATE_ID: string;

  /**
   * EmailJS public key
   * @example "2oFODktJ6wJ1GmE48"
   */
  readonly VITE_EMAILJS_PUBLIC_KEY: string;

  /**
   * Hotjar tracking ID
   * @example "3676851"
   */
  readonly VITE_HOTJAR_ID: string;

  /**
   * Hotjar version
   * @default 6
   */
  readonly VITE_HOTJAR_VERSION: string;

  /**
   * Stripe public key
   * @example "pk_live_51N5vAyKYXrCUYXLKU7894osvOLhBtRCGJMwnT1yOhwyHICH1sJAXaZ9RhY86qAtcRxgpUjlwWtwuOrw0r3GnNJLW00Y6HoxYu1"
   */
  readonly VITE_STRIPE_PUBLIC_KEY: string;

  /**
   * PayPal client ID
   * @example "AVOev0ud4hUyELwEbGWYnhMSEmDHemaql-lBGst-GopPL80kb_2a17goXNI1YWnLX2ZCrqNZt3FK6QR2"
   */
  readonly VITE_PAYPAL_CLIENT_ID: string;

  /**
   * Stripe premium subscription price ID
   * @example "price_1QWgJyKYXrCUYXLKW1IWPRHA"
   */
  readonly VITE_STRIPE_PRICE_ID_PREMIUM_SUBSCRIPTION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
