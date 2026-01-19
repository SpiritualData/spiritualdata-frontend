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
                name: "_ga, _ga_*",
                domain: "spiritualdata.org",
                description: "Google Analytics - distinguishes unique users",
                expiration: "2 years",
              },
              {
                name: "_hj*",
                domain: "spiritualdata.org",
                description: "Hotjar - session analytics and heatmaps",
                expiration: "1 year",
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
                name: "_fbp",
                domain: ".spiritualdata.org",
                description: "Meta Pixel - ad targeting and conversion tracking",
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
