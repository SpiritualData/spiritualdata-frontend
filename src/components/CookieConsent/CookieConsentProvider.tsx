/**
 * Cookie Consent Provider
 *
 * React wrapper for vanilla-cookieconsent that provides:
 * - Automatic initialization on mount
 * - React context for accessing consent state
 * - Methods to control the consent UI
 * - TypeScript support
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import { cookieConsentConfig } from "../../config/cookieConsent";

// Import styles - library first, then custom overrides
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "./styles.css";

/* ===========================================
   Types
   =========================================== */

/**
 * Consent state for each cookie category.
 */
interface AcceptedCategories {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

/**
 * Context value exposed to consumers.
 */
interface CookieConsentContextValue {
  /**
   * Current consent state for each category.
   */
  acceptedCategories: AcceptedCategories;

  /**
   * Whether the consent system has been initialized.
   */
  isInitialized: boolean;

  /**
   * Whether the user has given valid consent.
   */
  hasConsent: boolean;

  /**
   * Show the preferences modal.
   */
  showPreferences: () => void;

  /**
   * Show the consent modal.
   */
  showConsentModal: () => void;

  /**
   * Accept specific category or categories.
   * @param categories - Category name or array of category names
   */
  acceptCategory: (categories: string | string[]) => void;

  /**
   * Accept all categories.
   */
  acceptAll: () => void;

  /**
   * Accept only necessary cookies (reject all optional).
   */
  acceptNecessary: () => void;

  /**
   * Reset consent and show the modal again.
   * @param eraseCookie - Whether to erase the consent cookie (default: true)
   */
  resetConsent: (eraseCookie?: boolean) => void;
}

/* ===========================================
   Context
   =========================================== */

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null
);

/* ===========================================
   Provider Component
   =========================================== */

interface CookieConsentProviderProps {
  children: ReactNode;
}

/**
 * Cookie Consent Provider Component
 *
 * Wraps your application and initializes the cookie consent system.
 * Should be placed near the root of your component tree.
 *
 * @example
 * ```tsx
 * <CookieConsentProvider>
 *   <App />
 * </CookieConsentProvider>
 * ```
 */
export function CookieConsentProvider({
  children,
}: CookieConsentProviderProps) {
  // Track initialization to prevent double-init in StrictMode
  const initialized = useRef(false);

  // State
  const [isInitialized, setIsInitialized] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const [acceptedCategories, setAcceptedCategories] =
    useState<AcceptedCategories>({
      necessary: true, // Always true
      analytics: false,
      marketing: false,
    });

  /**
   * Update the accepted categories state from CookieConsent.
   */
  const updateAcceptedCategories = useCallback(() => {
    setAcceptedCategories({
      necessary: true, // Always enabled
      analytics: CookieConsent.acceptedCategory("analytics"),
      marketing: CookieConsent.acceptedCategory("marketing"),
    });
    setHasConsent(CookieConsent.validConsent());
  }, []);

  /**
   * Initialize cookie consent on mount.
   */
  useEffect(() => {
    // Prevent double initialization in React StrictMode
    if (initialized.current) return;
    initialized.current = true;

    const initCookieConsent = async () => {
      try {
        await CookieConsent.run({
          ...cookieConsentConfig,

          // Callback fired on the very first consent action
          onFirstConsent: () => {
            updateAcceptedCategories();
          },

          // Callback fired on first consent and on each page load
          onConsent: () => {
            updateAcceptedCategories();
          },

          // Callback fired when preferences are changed
          onChange: () => {
            updateAcceptedCategories();
          },
        });

        // Check if consent already exists from a previous session
        if (CookieConsent.validConsent()) {
          updateAcceptedCategories();
        }

        setIsInitialized(true);
      } catch (error) {
        console.error("[CookieConsent] Initialization failed:", error);
      }
    };

    initCookieConsent();
  }, [updateAcceptedCategories]);

  /* ===========================================
     Context Methods
     =========================================== */

  const showPreferences = useCallback(() => {
    CookieConsent.showPreferences();
  }, []);

  const showConsentModal = useCallback(() => {
    CookieConsent.show(true);
  }, []);

  const acceptCategory = useCallback((categories: string | string[]) => {
    CookieConsent.acceptCategory(categories);
  }, []);

  const acceptAll = useCallback(() => {
    CookieConsent.acceptCategory("all");
  }, []);

  const acceptNecessary = useCallback(() => {
    CookieConsent.acceptCategory([]);
  }, []);

  const resetConsent = useCallback((eraseCookie = true) => {
    CookieConsent.reset(eraseCookie);
    setAcceptedCategories({
      necessary: true,
      analytics: false,
      marketing: false,
    });
    setHasConsent(false);
  }, []);

  /* ===========================================
     Context Value
     =========================================== */

  const contextValue: CookieConsentContextValue = {
    acceptedCategories,
    isInitialized,
    hasConsent,
    showPreferences,
    showConsentModal,
    acceptCategory,
    acceptAll,
    acceptNecessary,
    resetConsent,
  };

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}
    </CookieConsentContext.Provider>
  );
}

/* ===========================================
   Consumer Hook
   =========================================== */

/**
 * Hook to access cookie consent state and methods.
 *
 * Must be used within a CookieConsentProvider.
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { acceptedCategories, showPreferences } = useCookieConsent();
 *
 *   return (
 *     <div>
 *       <p>Analytics enabled: {acceptedCategories.analytics ? 'Yes' : 'No'}</p>
 *       <button onClick={showPreferences}>Manage Cookies</button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useCookieConsent(): CookieConsentContextValue {
  const context = useContext(CookieConsentContext);

  if (context === null) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider. " +
        "Wrap your application with <CookieConsentProvider>."
    );
  }

  return context;
}
