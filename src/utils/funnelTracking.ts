/**
 * Source and landing-page tracking for the Quest funnel (home page and Quest product page).
 *
 * - First touch: the utm tags and referrer host of the session's first page load are kept in sessionStorage.
 * - Visit ping: POST /api/landing-visits once per page, per day, per browser (event "visit").
 * - Click ping: the same endpoint with event "cta_click" when a Quest sign-up link or button is used.
 * - Sign-up links get ref=landing-<slug>, vid (the anonymous visitor id) plus the utm tags and referrer_host, which the Quest app reads and
 *   sends with its sign-up attribution call.
 * No cookies, no IP address, no personal data. It only sends from the production hosts, like the /start pages.
 */

export const PING_HOSTS = ["spiritualdata.org", "www.spiritualdata.org"];
const PING_URL = "https://api.prod.spiritualdata.org/api/landing-visits";
const VISITOR_KEY = "sd-landing-visitor";
const FIRST_TOUCH_KEY = "sd-first-touch";
const VISIT_DAY_KEY_PREFIX = "sd-visit-day-";
const SIGN_UP_HOST = "quest.spiritualdata.org";
const MAX_LENGTH = 100;

export interface FirstTouch {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  referrer_host: string;
}

export const EMPTY_TOUCH: FirstTouch = {
  utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "", referrer_host: "",
};

/** The slug the funnel knows this path by (app/data/funnel_landing_pages.json), or null for any other page. */
export function pageSlugForPath(pathname: string): string | null {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return "home";
  if (path === "/products/quest") return "quest-product";
  return null;
}

function cleanValue(raw: string | null | undefined): string {
  return (raw ?? "").trim().slice(0, MAX_LENGTH);
}

/** The host of a referrer URL when it is another site, else "" (direct, or an internal navigation). */
export function externalReferrerHost(referrer: string, ownHost: string): string {
  try {
    const host = new URL(referrer).hostname.toLowerCase();
    return host && host !== ownHost.toLowerCase() ? host : "";
  } catch {
    return "";
  }
}

/** What this page load arrived with: the utm tags in its address and the referring host. */
export function touchFromLocation(search: string, referrer: string, ownHost: string): FirstTouch {
  const query = new URLSearchParams(search);
  return {
    utm_source: cleanValue(query.get("utm_source")),
    utm_medium: cleanValue(query.get("utm_medium")),
    utm_campaign: cleanValue(query.get("utm_campaign")),
    utm_content: cleanValue(query.get("utm_content")),
    referrer_host: externalReferrerHost(referrer, ownHost),
  };
}

/**
 * A Quest entry link with the landing page and the first-touch tags added. Existing values in the link win.
 * Every entry link (sign-up, sign-in, the app's root) gets vid and the first-touch tags, because the Sign In
 * buttons in the navigation bar and drawer are where most visitors enter the app, and a new person can create
 * the account from there. Before this, only /sign-up links were tagged, so a YouTube or Meta visitor who used
 * Sign In reached the app with nothing and the account read as direct or unknown. The app stores these tags
 * from any address and sends them through POST /api/users/signup-attribution, which only tags an account
 * created in the last 24 hours, so a returning person signing in is never re-attributed.
 * ref=landing-<slug> stays on /sign-up links only: the app posts ref to /api/users/referral/record, which writes
 * a campaign source onto any account that has none, whatever its age.
 */
export function decorateSignUpUrl(url: string, slug: string | null, touch: FirstTouch, visitor = ""): string {
  try {
    const parsed = new URL(url, "https://" + SIGN_UP_HOST);
    if (!isQuestEntryUrl(url)) return url;
    const set = (key: string, value: string) => {
      if (value && !parsed.searchParams.has(key)) parsed.searchParams.set(key, value);
    };
    if (slug && parsed.pathname.startsWith("/sign-up")) parsed.searchParams.set("ref", "landing-" + slug);
    set("vid", visitor.slice(0, 64));
    (Object.keys(touch) as Array<keyof FirstTouch>).forEach((key) => set(key, touch[key]));
    return parsed.toString();
  } catch {
    return url;
  }
}

/** A link into the Quest app where a person can sign up or sign in: /sign-up, /sign-in or the app's root. */
export function isQuestEntryUrl(url: string): boolean {
  try {
    const parsed = new URL(url, "https://" + SIGN_UP_HOST);
    const path = parsed.pathname.replace(/\/+$/, "");
    return parsed.hostname === SIGN_UP_HOST && (path === "" || path.startsWith("/sign-up") || path.startsWith("/sign-in"));
  } catch {
    return false;
  }
}

export function isSignUpUrl(url: string): boolean {
  try {
    const parsed = new URL(url, "https://" + SIGN_UP_HOST);
    return parsed.hostname === SIGN_UP_HOST && parsed.pathname.startsWith("/sign-up");
  } catch {
    return false;
  }
}

export interface PingPayload extends FirstTouch {
  page: string;
  visitor: string;
  event: "visit" | "cta_click";
}

export function buildPayload(page: string, visitor: string, event: "visit" | "cta_click", touch: FirstTouch): PingPayload {
  return { page, visitor, event, ...touch };
}

// ---- browser side -------------------------------------------------------------------------------------------

function isLiveHost(): boolean {
  return PING_HOSTS.includes(window.location.hostname);
}

function visitorId(): string {
  try {
    const stored = window.localStorage.getItem(VISITOR_KEY);
    if (stored) return stored;
    const fresh = window.crypto.randomUUID();
    window.localStorage.setItem(VISITOR_KEY, fresh);
    return fresh;
  } catch {
    return window.crypto.randomUUID();
  }
}

/** The tags of the session's first page load, remembered so later pages of the visit keep the real source. */
export function firstTouch(): FirstTouch {
  try {
    const stored = window.sessionStorage.getItem(FIRST_TOUCH_KEY);
    if (stored) return { ...EMPTY_TOUCH, ...JSON.parse(stored) };
  } catch {
    // Storage blocked: fall through to what this load carries.
  }
  const touch = touchFromLocation(window.location.search, document.referrer, window.location.hostname);
  try {
    window.sessionStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(touch));
  } catch {
    // Not remembered; the next page load works it out again.
  }
  return touch;
}

function send(payload: PingPayload): void {
  try {
    fetch(PING_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Counting never breaks the page.
  }
}

/** Call on every route change: remembers the first touch and counts one visit per page per day. */
export function trackPageView(pathname: string): void {
  const touch = firstTouch();
  const slug = pageSlugForPath(pathname);
  if (!slug || !isLiveHost()) return;
  const day = new Date().toISOString().slice(0, 10);
  try {
    if (window.localStorage.getItem(VISIT_DAY_KEY_PREFIX + slug) === day) return;
    window.localStorage.setItem(VISIT_DAY_KEY_PREFIX + slug, day);
  } catch {
    // Storage blocked: send anyway, the server counts one per visitor per day.
  }
  send(buildPayload(slug, visitorId(), "visit", touch));
}

/**
 * A Quest entry URL ready to open with its tags. A sign-up link click is also counted as a call-to-action click
 * when this page is a tracked landing page; sign-in and root links are tagged but not counted, since returning
 * people use them too.
 */
export function prepareSignUp(url: string): string {
  if (!isQuestEntryUrl(url)) return url;
  const touch = firstTouch();
  const slug = pageSlugForPath(window.location.pathname);
  const visitor = visitorId();
  if (slug && isLiveHost() && isSignUpUrl(url)) send(buildPayload(slug, visitor, "cta_click", touch));
  return decorateSignUpUrl(url, slug, touch, visitor);
}

let installed = false;

/** Once per app: tags Quest entry links on click and entry buttons (Sign In, sign-up) that call window.open. */
export function installSignUpTracking(): void {
  if (installed || typeof window === "undefined") return;
  installed = true;
  document.addEventListener(
    "click",
    (event) => {
      const anchor = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor || !isQuestEntryUrl(anchor.href)) return;
      anchor.href = prepareSignUp(anchor.href);
    },
    true,
  );
  const originalOpen = window.open.bind(window);
  window.open = (url?: string | URL, ...rest: unknown[]) =>
    originalOpen(typeof url === "string" ? prepareSignUp(url) : url, ...(rest as [string?, string?]));
}
