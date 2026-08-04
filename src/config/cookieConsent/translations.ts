/**
 * Cookie Consent Translations
 *
 * This file contains all the text content for the cookie consent banner
 * and preferences modal. Supports multiple languages if needed.
 */

import type CookieConsent from "vanilla-cookieconsent";

type Translation = CookieConsent.Translation;

export const translations: Record<string, Translation> = {
  en: {
    consentModal: {
      title: "We value your privacy",
      description:
        "We use cookies to enhance your experience, analyze traffic, and for marketing. You can customize your preferences anytime.",
      acceptAllBtn: "Accept All",
      acceptNecessaryBtn: "Reject All",
      showPreferencesBtn: "Manage Preferences",
      footer:
        '<a href="/privacy">Privacy Policy</a> · <a href="/cookies">Cookie Policy</a>',
    },
    preferencesModal: {
      title: "Cookie Preferences",
      acceptAllBtn: "Accept All",
      acceptNecessaryBtn: "Reject All",
      savePreferencesBtn: "Save Preferences",
      closeIconLabel: "Close",
      sections: [
        {
          title: "Cookie Usage",
          description:
            "We use cookies to ensure basic functionality and enhance your experience. You can choose which categories to allow.",
        },
        {
          title: "Essential Cookies",
          description:
            "Required for the website to function properly. These cookies enable core functionality such as security, authentication, and accessibility. They cannot be disabled.",
          linkedCategory: "necessary",
          cookieTable: {
            headers: {
              name: "Name",
              domain: "Domain",
              description: "Description",
              expiration: "Expiration",
            },
            body: [
              {
                name: "sd_cc",
                domain: "spiritualdata.org",
                description: "Stores cookie consent preferences",
                expiration: "1 year",
              },
              {
                name: "__session, *clerk*",
                domain: ".spiritualdata.org",
                description:
                  "Clerk - user authentication and session management",
                expiration: "Session to 1 month",
              },
              {
                name: "__cf_bm, _cfuvid, cf_clearance",
                domain: ".spiritualdata.org",
                description: "Cloudflare - security and bot protection",
                expiration: "Session to 1 year",
              },
              {
                name: "__stripe_mid, __stripe_sid",
                domain: "js.stripe.com",
                description: "Stripe - fraud prevention and session state",
                expiration: "1 year",
              },
              {
                name: "ts_c, paypal_storage, nsid",
                domain: ".paypal.com",
                description: "PayPal - security and donation processing",
                expiration: "Session to 20 years",
              },
            ],
          },
        },
        {
          title: "Analytics Cookies",
          description:
            "Help us understand how visitors interact with our site through anonymous data collection. This helps us improve our services and user experience.",
          linkedCategory: "analytics",
          cookieTable: {
            headers: {
              name: "Name",
              domain: "Domain",
              description: "Description",
              expiration: "Expiration",
            },
            body: [
              {
                name: "_ga, _ga_*, _gid, _gcl_au, _gat",
                domain: "spiritualdata.org",
                description:
                  "Google Analytics - distinguishes users and throttles requests",
                expiration: "2 years",
              },
              {
                name: "_hjSession*, _hjAbsoluteSessionInProgress, _hjIncludedInSessionSample_*",
                domain: "spiritualdata.org",
                description: "Hotjar - session analytics and settings",
                expiration: "Up to 1 year",
              },
              {
                name: "_beehiiv_session, _beehiiv_attribution",
                domain: ".beehiiv.com",
                description: "Beehiiv - newsletter management and attribution",
                expiration: "30 days",
              },
            ],
          },
        },
        {
          title: "Marketing Cookies",
          description:
            "Used to deliver relevant advertisements and measure campaign effectiveness. These cookies track your activity across websites.",
          linkedCategory: "marketing",
          cookieTable: {
            headers: {
              name: "Name",
              domain: "Domain",
              description: "Description",
              expiration: "Expiration",
            },
            body: [
              {
                name: "_fbp, fr",
                domain: ".spiritualdata.org / .facebook.com",
                description:
                  "Meta Pixel - ad targeting and conversion tracking",
                expiration: "3 months",
              },
            ],
          },
        },
        {
          title: "More Information",
          description:
            'For questions about our use of cookies, please <a href="/contact">contact us</a>.',
        },
      ],
    },
  },
};
