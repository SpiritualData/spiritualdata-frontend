/**
 * Cookie Consent Configuration
 *
 * Main configuration for vanilla-cookieconsent library.
 * This config uses native script blocking via type="text/plain" + data-category attributes.
 *
 * @see https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */

import type CookieConsent from "vanilla-cookieconsent";
import { translations } from "./translations";

type CookieConsentConfig = CookieConsent.CookieConsentConfig;

/**
 * Cookie consent configuration object.
 *
 * Note: Callbacks (onFirstConsent, onConsent, onChange) are intentionally
 * omitted here and should be added when calling CookieConsent.run() in
 * the React component to allow for React state updates.
 */
export const cookieConsentConfig: CookieConsentConfig = {
  // ===================
  // Core Settings
  // ===================

  /**
   * Require explicit consent before enabling non-essential cookies.
   * This is the GDPR-compliant default.
   */
  mode: "opt-in",

  /**
   * Automatically show the consent modal if consent is not valid.
   */
  autoShow: true,

  /**
   * Allow page interaction while the banner is visible.
   * Set to true if you want to block the page until consent.
   */
  disablePageInteraction: false,

  /**
   * Hide the banner from bots/crawlers to prevent indexing modal content.
   */
  hideFromBots: true,

  /**
   * Intercept and manage script tags with data-category attribute.
   * This enables native script blocking.
   */
  manageScriptTags: true,

  /**
   * Automatically clear cookies when user opts out of a category.
   */
  autoClearCookies: true,

  /**
   * Revision number for consent versioning.
   * Increment this when you make significant changes to cookie usage
   * to prompt users to review their consent again.
   */
  revision: 1,

  // ===================
  // Cookie Settings
  // ===================

  cookie: {
    /**
     * Name of the cookie that stores user's consent preferences.
     */
    name: "sd_cc",

    /**
     * Cookie path.
     */
    path: "/",

    /**
     * SameSite attribute for the cookie.
     */
    sameSite: "Lax",

    /**
     * Number of days until the cookie expires.
     */
    expiresAfterDays: 365,
  },

  // ===================
  // Cookie Categories
  // ===================

  categories: {
    /**
     * Essential cookies - always enabled, cannot be disabled.
     * Includes: Cloudflare security, Clerk authentication.
     */
    necessary: {
      enabled: true,
      readOnly: true,
    },

    /**
     * Analytics cookies - disabled by default (opt-in).
     * Includes: Google Analytics, Hotjar.
     */
    analytics: {
      enabled: false,
      readOnly: false,
      autoClear: {
        cookies: [
          { name: /^_ga/ }, // Google Analytics cookies
          { name: /^_gid/ }, // Google Analytics session cookie
          { name: /^_hj/ }, // Hotjar cookies
        ],
        reloadPage: false,
      },
    },

    /**
     * Marketing cookies - disabled by default (opt-in).
     * Includes: Meta (Facebook) Pixel.
     */
    marketing: {
      enabled: false,
      readOnly: false,
      autoClear: {
        cookies: [
          { name: "_fbp" }, // Meta Pixel browser ID
          { name: "fr" }, // Meta Pixel ad delivery/measurement
        ],
        reloadPage: false,
      },
    },
  },

  // ===================
  // UI Configuration
  // ===================

  guiOptions: {
    consentModal: {
      /**
       * Layout of the consent modal.
       * Options: 'box', 'box wide', 'box inline', 'cloud', 'cloud inline', 'bar', 'bar inline'
       */
      layout: "box wide",

      /**
       * Position of the consent modal.
       */
      position: "bottom center",

      /**
       * Give equal width to all buttons.
       */
      equalWeightButtons: true,

      /**
       * Swap the position of the accept/reject buttons.
       */
      flipButtons: false,
    },

    preferencesModal: {
      /**
       * Layout of the preferences modal.
       * Options: 'box', 'bar', 'bar wide'
       */
      layout: "box",

      /**
       * Position of the preferences modal.
       */
      position: "right",

      /**
       * Give equal width to all buttons.
       */
      equalWeightButtons: true,

      /**
       * Swap the position of the accept/reject buttons.
       */
      flipButtons: false,
    },
  },

  // ===================
  // Language & Translations
  // ===================

  language: {
    /**
     * Default language code.
     */
    default: "en",

    /**
     * Inline translations object.
     */
    translations,
  },
};
