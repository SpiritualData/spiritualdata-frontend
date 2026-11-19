// Run: npm run test:funnel (bundles with esbuild, runs with node --test). Pure functions only, no browser.
import { test } from "node:test";
import assert from "node:assert/strict";
import { decorateSignUpUrl, isQuestEntryUrl, isSignUpUrl, EMPTY_TOUCH } from "./funnelTracking";

const youtube = { ...EMPTY_TOUCH, utm_source: "youtube", utm_medium: "video", utm_campaign: "niche-videos", utm_content: "video-5" };

test("the navbar Sign In link keeps the visitor's source and visitor id", () => {
  const out = new URL(decorateSignUpUrl("https://quest.spiritualdata.org/sign-in", "home", youtube, "v123"));
  assert.equal(out.pathname, "/sign-in");
  assert.equal(out.searchParams.get("utm_source"), "youtube");
  assert.equal(out.searchParams.get("utm_content"), "video-5");
  assert.equal(out.searchParams.get("vid"), "v123");
  // No ref on sign-in: /referral/record would stamp it on an old account.
  assert.equal(out.searchParams.get("ref"), null);
});

test("the app root link is tagged too", () => {
  const out = new URL(decorateSignUpUrl("https://quest.spiritualdata.org", "home", youtube, "v1"));
  assert.equal(out.searchParams.get("utm_source"), "youtube");
  assert.equal(out.searchParams.get("ref"), null);
});

test("sign-up links still get ref=landing-<page>, and values already in a link win", () => {
  const out = new URL(decorateSignUpUrl("https://quest.spiritualdata.org/sign-up?utm_source=partner", "quest-product", youtube, "v1"));
  assert.equal(out.searchParams.get("ref"), "landing-quest-product");
  assert.equal(out.searchParams.get("utm_source"), "partner");
  assert.equal(out.searchParams.get("vid"), "v1");
});

test("links that are not Quest entry points are left alone", () => {
  for (const url of ["https://quest.spiritualdata.org/events/x", "https://example.org/sign-in", "/products/quest"]) {
    assert.equal(isQuestEntryUrl(url), false, url);
    assert.equal(decorateSignUpUrl(url, "home", youtube, "v1"), url);
  }
  assert.equal(isQuestEntryUrl("https://quest.spiritualdata.org/sign-in"), true);
  assert.equal(isSignUpUrl("https://quest.spiritualdata.org/sign-in"), false);
});
