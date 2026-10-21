/**
 * Copy and data for the /mentorship page.
 *
 * Sources: quest_subscribers_growth/ai_driven/source_of_truth/niche_and_brand_voice.md
 * (the niche and brand voice of record), quest_subscribers_growth/NICHE_FUNNEL_FEATURES.md
 * (the pain point and what each side pays for; that doc links back to this
 * page, so change them together) and
 * mentorship_launch/registration_entry_point_2026-09-21.md (section 5).
 * The visual style matches the Quest niche landing pages in
 * quest_subscribers_growth/landing_pages/demo (Payal, 16 October 2026): short,
 * precise copy, one idea per line.
 *
 * Rules this file is held to, and anyone editing it inherits them:
 *  - Quest runs in the browser. Never say download the app, never name a store.
 *  - Mentor applications open on Sunday 25 October 2026, the last Sunday of the
 *    month, which is the day the monthly Quest session already runs.
 *  - No claimed user numbers, no outcome claims we have not measured, no
 *    pricing promises and no revenue-share promises. Those are undecided
 *    (mentor_offer_draft_2026-09-21.md, "What is NOT decided"). The 1,000 and
 *    10,000 below are the stated goal for 31 December 2026 (25 October is when
 *    mentorship opens and we share it widely, not the date of the goal; Joshua,
 *    6 October 2026), asked for by name by
 *    Joshua on 21 September 2026: "Also important to mention explicitly the
 *    1000 and 10,000. That was a key part of it to build excitement." Say them
 *    as what we are building to, never as a count we hold today, and never
 *    show a live total while it is small.
 *  - Say what we do, never what is missing or unfinished. Joshua, 21 September
 *    2026: "AI keeps saying what we're not doing or what's not there instead of
 *    just not mentioning it." No em dashes, no hedging, no banned filler.
 */

/** The web address of the product, and the only door we point anyone at. */
export const questWebUrl = "https://quest.spiritualdata.org";

/**
 * The two launch CTAs. The ?ref slug is read by quest-frontend's root layout
 * and stored on the new user as signup_source, so the mentor side and the
 * mentee side are counted separately from the day this page is live.
 * Keep the slugs to [A-Za-z0-9][A-Za-z0-9._-]* and under 64 characters.
 */
export const mentorSignUpUrl =
  "https://quest.spiritualdata.org/sign-up?ref=mentor-launch";
export const menteeSignUpUrl =
  "https://quest.spiritualdata.org/sign-up?ref=mentee-launch";

/**
 * Every CTA opens a short form first (email plus one phrase), so a visitor is
 * counted even if they never finish sign-up, and then goes on to the sign-up
 * link above. The form posts to Quest's public community-interest endpoint
 * (quest-backend app/api/endpoints/community_interest.py): no login, one row
 * per email and category, linked to the account when the email matches one.
 * The two category ids below are the two sides of the launch.
 */
export const questApiUrl = "https://api.prod.spiritualdata.org";
export const mentorshipInterestPath = "/api/community-interest/signup";

export const mentorshipInterest = {
  mentor: {
    categoryId: "mentor-launch",
    categoryName: "Mentorship launch: mentors",
    title: "Tell us what you mentor",
    intro: "Two quick answers, then you create your free account.",
    topicLabel: "What would you like to mentor for?",
    topicPlaceholder: "e.g. a steady morning practice",
  },
  mentee: {
    categoryId: "mentee-launch",
    categoryName: "Mentorship launch: seeking a mentor",
    title: "What are you looking for?",
    intro: "Two quick answers, then you create your free account.",
    topicLabel: "What would you like mentorship for?",
    topicPlaceholder: "e.g. finding calm in a career change",
  },
  emailLabel: "Your email",
  submitLabel: "Continue to sign up",
  sendingLabel: "Saving...",
  privacy: "We use your email to tell you when mentorship opens.",
  successText: "Thank you. Taking you to sign up.",
  errorText: "That did not save. Try again, or",
  skipLabel: "continue to sign up.",
  invalidEmail: "Enter a valid email address.",
  topicRequired: "Add a few words.",
};

/**
 * The launch date. Sunday 25 October 2026 is the last Sunday of October, which is
 * the day the monthly Quest session already runs, so the launch has an event
 * around it. Joshua asked for a day to be picked (email, 21 September 2026);
 * changing it is his call.
 */
export const mentorshipLaunchDate = "Sunday 25 October 2026";

/**
 * The problem the visitor already has, said first: insight fades between
 * sessions and every session starts by catching up. This is the number one
 * pain point in NICHE_FUNNEL_FEATURES.md, section 1; keep the two in step.
 */
export const mentorshipHero = {
  eyebrow: "Quest Mentorship",
  note: "Free account. Runs in your browser, on any phone or computer.",
  /**
   * The toggle. The whole page follows it: this headline and subtitle, the hero
   * card, and every section below (see `mentorshipByAudience`). A mentee never
   * reads "client" and a mentor never reads a pitch written for the other side.
   */
  audiences: {
    mentor: {
      toggleLabel: "I'm a mentor",
      headline: { before: "Spend your hours ", accent: "guiding", after: ", not catching up." },
      subtitle:
        "Quest holds each client's goals, habits and reflections in one place, so every check-in starts where the last one ended.",
    },
    mentee: {
      toggleLabel: "I'm seeking guidance",
      headline: { before: "Keep your insight alive, with ", accent: "a human beside you", after: "." },
      subtitle:
        "Quest holds your goals, habits and reflections in one place, so what you work out with a mentor is still there on Wednesday.",
    },
  },
};

/**
 * The hero illustration: how a mentor and a mentee work together on Quest.
 * Made-up people, clearly a sample. Every activity is something Quest does:
 * a linked quest the mentor can see, a direct chat, and priced check-ins.
 */
export const mentorshipConnection = {
  mentor: { initial: "A", name: "Ana", role: "Mentor" },
  mentee: { initial: "S", name: "Sam", role: "Mentee" },
  quest: { label: "Shared quest", title: "A steady morning practice", progress: 64 },
  /** The same three ways of working together, told from each side. */
  activity: {
    mentor: [
      { kind: "check", title: "Keeps a check", text: "Ana sees Sam kept the practice 5 of 7 days." },
      { kind: "talk", title: "Talks between sessions", text: "“How did the restless mornings go?”" },
      { kind: "meet", title: "Meets for check-ins", text: "Thursday check-in, 30 minutes." },
    ],
    mentee: [
      { kind: "check", title: "Ana keeps a check", text: "Sam shares the quest, and Ana follows the progress." },
      { kind: "talk", title: "Ask between sessions", text: "“The mornings felt calmer once I changed my phone habit.”" },
      { kind: "meet", title: "Meet for check-ins", text: "Thursday check-in, starting from what is next." },
    ],
  },
};

/**
 * The real Quest screens a person works from between sessions. Plan and Daily
 * Reflection only: the monthly review screenshot carries a real person's goals,
 * so it stays off the public site. Images live in assets/images/mentorship. The
 * screens are the same for both sides; the words are told from each side.
 */
export const mentorshipScreens = {
  eyebrow: "See it",
  mentor: {
    title: "What your clients work from between sessions.",
    items: [
      {
        key: "plan",
        label: "Plan",
        title: "The whole quest at a glance",
        desc: "A client's goal broken into years, quarters, months, weeks and days.",
        alt: "Quest dashboard showing a goal plan broken into time periods",
      },
      {
        key: "reflection",
        label: "Daily reflection",
        title: "A few minutes to look back and plan ahead",
        desc: "Clients reflect on yesterday and describe today in plain words. Quest turns it into goals.",
        alt: "Quest daily reflection with a prompt for yesterday and a plan for today",
      },
    ],
  },
  mentee: {
    title: "What you work from between sessions.",
    items: [
      {
        key: "plan",
        label: "Plan",
        title: "The whole quest at a glance",
        desc: "Your goal broken into years, quarters, months, weeks and days.",
        alt: "Quest dashboard showing a goal plan broken into time periods",
      },
      {
        key: "reflection",
        label: "Daily reflection",
        title: "A few minutes to look back and plan ahead",
        desc: "Reflect on yesterday and describe today in plain words. Quest turns it into goals.",
        alt: "Quest daily reflection with a prompt for yesterday and a plan for today",
      },
    ],
  },
};

/** The goal for 31 December 2026. Say it as what we are building to. */
export const mentorshipGoal = {
  eyebrow: "What we are building toward",
  stats: [
    { value: "1,000", label: "mentors" },
    { value: "10,000", label: "people they guide" },
  ],
  by: "by 31 December 2026",
  lines: {
    mentor: `Applications open ${mentorshipLaunchDate}. The account you create today is the one you apply with.`,
    mentee: `Mentorship opens ${mentorshipLaunchDate}. The account you create today is the one you choose a mentor with.`,
  },
};

export const mentorAudience = {
  eyebrow: "For mentors",
  title: "Know where each client is before you meet.",
  who: "Coaches, spiritual directors, energy workers, psychics, therapists outside the clinical frame, and teachers.",
  points: [
    "See your client's shared goals, habits and reflections before every check-in.",
    "Set what a check-in includes and what it costs.",
    "A profile and booking page so the right people find you.",
  ],
  ctaLabel: "Sign up as a mentor",
  ctaUrl: mentorSignUpUrl,
  footnote: `Applications open ${mentorshipLaunchDate}.`,
  switchPrompt: "Looking for guidance instead?",
  switchLabel: "See the page for people seeking a mentor",
};

export const menteeAudience = {
  eyebrow: "For people seeking guidance",
  title: "Your growth, held in one place.",
  who: "For people open to spirituality and growth who also value science and real results.",
  points: [
    "Your goals, habits and reflections in one place, so Sunday's insight is still there on Wednesday.",
    "One balance you can spend with any mentor on Quest.",
    "Your data is yours. You choose what each mentor sees.",
  ],
  ctaLabel: "Sign up to find a mentor",
  ctaUrl: menteeSignUpUrl,
  footnote: "Quest is yours to use from today.",
  switchPrompt: "Want to mentor instead?",
  switchLabel: "See the page for mentors",
};

/**
 * How the mentorship model works, told from each side. The balance and the
 * priced check-in are live in quest-backend: MenteeBalance (one balance per
 * mentee, across every mentor), a mentor-set check_in_price, and a completed
 * check-in that debits it (app/models/subscription.py,
 * app/api/endpoints/mentors/check_ins.py). No prices, cuts or payout terms
 * here; those are Joshua's calls. `icon` names map to MUI icons in
 * pages/Mentorship.tsx.
 */
export const mentorshipModel = {
  eyebrow: "How it works",
  mentor: {
    title: "How mentoring works on Quest.",
    items: [
      { icon: "wallet", title: "You set the check-in", desc: "Choose what a check-in includes and what it costs. A completed check-in comes from your client's balance." },
      { icon: "checkin", title: "The full picture at every check-in", desc: "Your client's shared goals, habits and progress are already there, so a short check-in goes far." },
      { icon: "record", title: "A record that remembers", desc: "See the habits kept, goals moved and reflections written since you last met, as far as your client shares them." },
      { icon: "ai", title: "AI on your side, if you want it", desc: "Bring your own Quest AI to prepare for a check-in and follow up after. Your guidance comes first." },
    ],
  },
  mentee: {
    title: "How finding a mentor works.",
    items: [
      { icon: "wallet", title: "One balance, any mentor", desc: "Add to one balance and spend it on check-ins with whichever mentors suit you." },
      { icon: "checkin", title: "Your mentor starts where you are", desc: "Share a quest and your goals, habits and progress are already there, so the time goes to what is next." },
      { icon: "record", title: "A record that remembers", desc: "Habits kept, goals moved, reflections written. It belongs to you." },
      { icon: "ai", title: "AI beside you, if you want it", desc: "Use Quest AI to prepare for a session and follow up after. Human guidance comes first." },
    ],
  },
};

/** Who a visitor will be connecting with, from the niche of record. */
export const mentorshipPeople = {
  mentor: {
    eyebrow: "Who you will guide",
    title: "People open to the spiritual, grounded in evidence.",
    intro:
      "Quest is built by Spiritual Data, a nonprofit that studies spiritual experience with the tools of science.",
    tags: [
      { icon: "growth", text: "People growing toward big life goals" },
      { icon: "inquiry", text: "Open inquiry on both sides" },
      { icon: "mentor", text: "Fellow mentors with a practice of their own" },
      { icon: "ai", text: "AI as a means to a more conscious life" },
    ],
  },
  mentee: {
    eyebrow: "Who you will meet",
    title: "Open to the spiritual, grounded in evidence.",
    intro:
      "Quest is built by Spiritual Data, a nonprofit that studies spiritual experience with the tools of science.",
    tags: [
      { icon: "mentor", text: "Mentors with a practice of their own" },
      { icon: "growth", text: "People growing toward big life goals" },
      { icon: "inquiry", text: "Open inquiry on both sides" },
      { icon: "ai", text: "AI as a means to a more conscious life" },
    ],
  },
};

/** The questions that stop a sign-up. Facts only: no prices, no payout terms. */
export const mentorshipFaq = {
  eyebrow: "Questions",
  title: "Before you sign up.",
  mentor: [
    { q: "Is it free?", a: "Creating your account is free, and you can start using Quest today." },
    { q: "Do I need to download anything?", a: "No. Quest runs in your browser at quest.spiritualdata.org, on any phone or computer." },
    { q: "What do I see of my clients' goals and reflections?", a: "What each client chooses to share with you. Their data stays theirs." },
    { q: "When can I start as a mentor?", a: `Mentor applications open on ${mentorshipLaunchDate}. The account you create today is the one you apply with.` },
    { q: "Who is behind Quest?", a: "Spiritual Data, a nonprofit that studies spiritual experience with the tools of science." },
  ],
  mentee: [
    { q: "Is it free?", a: "Creating your account is free, and you can start using Quest today." },
    { q: "Do I need to download anything?", a: "No. Quest runs in your browser at quest.spiritualdata.org, on any phone or computer." },
    { q: "Who sees my goals and reflections?", a: "You do. You choose what each mentor sees, and your data stays yours." },
    { q: "When can I choose a mentor?", a: `Mentorship opens on ${mentorshipLaunchDate}, and we email you that morning. The account you create today is the one you choose with.` },
    { q: "Who is behind Quest?", a: "Spiritual Data, a nonprofit that studies spiritual experience with the tools of science." },
  ],
};

export const mentorshipSteps = {
  eyebrow: "What happens next",
  mentor: {
    title: "Three steps to your first client.",
    items: [
      { id: 1, title: "Create your free account", desc: "Sign up with your email. It works right away." },
      { id: 2, title: "Try Quest yourself", desc: "Set goals, track habits and work with Quest AI, so you know what your clients will use." },
      { id: 3, title: "25 October: applications open", desc: "We email you that morning. Apply, set your check-ins and open your booking page." },
    ],
  },
  mentee: {
    title: "Three steps to your first check-in.",
    items: [
      { id: 1, title: "Create your free account", desc: "Sign up with your email. It works right away." },
      { id: 2, title: "Start using Quest", desc: "Set goals, track habits and work with Quest AI." },
      { id: 3, title: "25 October: mentorship opens", desc: "We email you that morning. Choose a mentor and book your first check-in." },
    ],
  },
};

export const mentorshipFinal = {
  eyebrow: `Opens ${mentorshipLaunchDate}`,
  mentor: { heading: "Be one of the first mentors." },
  mentee: { heading: "Be ready from the first day." },
};

export const mentorshipQuestions = {
  text: "Questions? A person will answer.",
  email: "support@spiritualdata.org",
  subject: "Quest mentorship launch",
};
