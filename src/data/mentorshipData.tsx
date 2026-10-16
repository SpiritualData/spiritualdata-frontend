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
  headline: { before: "Guidance that keeps working ", accent: "between sessions", after: "." },
  subtitle:
    "Quest holds each person's goals, habits and reflections in one place, so a mentor and the person they guide pick up exactly where they left off.",
  note: "Free account. Runs in your browser, on any phone or computer.",
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
  activity: [
    { kind: "check", title: "Keeps a check", text: "Ana sees Sam kept the practice 5 of 7 days." },
    { kind: "talk", title: "Talks between sessions", text: "“How did the restless mornings go?”" },
    { kind: "meet", title: "Meets for check-ins", text: "Thursday check-in, 30 minutes." },
  ],
};

/** The goal for 31 December 2026. Say it as what we are building to. */
export const mentorshipGoal = {
  eyebrow: "What we are building toward",
  stats: [
    { value: "1,000", label: "mentors" },
    { value: "10,000", label: "people they guide" },
  ],
  by: "by 31 December 2026",
  line: `Mentorship opens on ${mentorshipLaunchDate}. The account you create today is the one you open with.`,
};

export const mentorAudience = {
  eyebrow: "For mentors",
  title: "Spend your hours guiding, not catching up.",
  who: "Coaches, spiritual directors, energy workers, psychics, therapists outside the clinical frame, and teachers.",
  points: [
    "See your client's shared goals, habits and reflections before every check-in.",
    "Set what a check-in includes and what it costs.",
    "A profile and booking page so the right people find you.",
  ],
  ctaLabel: "Sign up as a mentor",
  ctaUrl: mentorSignUpUrl,
  footnote: `Applications open ${mentorshipLaunchDate}.`,
};

export const menteeAudience = {
  eyebrow: "For people seeking guidance",
  title: "Keep your insight alive, with a human beside you.",
  who: "For people open to spirituality and growth who also value science and real results.",
  points: [
    "Your goals, habits and reflections in one place, so Sunday's insight is still there on Wednesday.",
    "One balance you can spend with any mentor on Quest.",
    "Your data is yours. You choose what each mentor sees.",
  ],
  ctaLabel: "Sign up to find a mentor",
  ctaUrl: menteeSignUpUrl,
  footnote: "Quest is yours to use from today.",
};

/**
 * How the mentorship model works. The balance and the priced check-in are
 * live in quest-backend: MenteeBalance (one balance per mentee, across every
 * mentor), a mentor-set check_in_price, and a completed check-in that debits
 * it (app/models/subscription.py, app/api/endpoints/mentors/check_ins.py).
 * No prices, cuts or payout terms here; those are Joshua's calls.
 * `icon` names map to MUI icons in pages/Mentorship.tsx.
 */
export const mentorshipModel = {
  eyebrow: "How it works",
  title: "Built for the time between sessions.",
  items: [
    { icon: "wallet", title: "One balance, any mentor", desc: "Add to one balance and spend it on check-ins with whichever mentors suit you." },
    { icon: "checkin", title: "The full picture at every check-in", desc: "Shared goals, habits and progress are already there, so a short check-in goes far." },
    { icon: "record", title: "A record that remembers", desc: "Habits kept, goals moved, reflections written. It belongs to the person who wrote it." },
    { icon: "ai", title: "AI on each side, if you want it", desc: "Each person can bring their own Quest AI to prepare and follow up. Human guidance comes first." },
  ],
};

/** Who a visitor will be connecting with, from the niche of record. */
export const mentorshipPeople = {
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
};

export const mentorshipSteps = [
  { id: 1, title: "Create your free account", desc: "Sign up with your email. It works right away." },
  { id: 2, title: "Start using Quest", desc: "Set goals, track habits and work with Quest AI." },
  { id: 3, title: "25 October: mentorship opens", desc: "We email you that morning. Mentors apply, and everyone else chooses a mentor." },
];

export const mentorshipFinal = {
  eyebrow: `Opens ${mentorshipLaunchDate}`,
  heading: "Be there from the first day.",
};

export const mentorshipQuestions = {
  text: "Questions? A person will answer.",
  email: "support@spiritualdata.org",
  subject: "Quest mentorship launch",
};
