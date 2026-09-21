import bannerImage from "../assets/images/initiatives/banner.webp";

/**
 * Copy and data for the /mentorship page.
 *
 * Sources: quest_subscribers_growth/mentorship_launch/kickoff_2026-09-21.md
 * (section 2, the niche and brand voice) and
 * registration_entry_point_2026-09-21.md (section 5, the build task).
 *
 * Rules this file is held to, and anyone editing it inherits them:
 *  - Quest runs in the browser. Never say download the app, never name a store.
 *  - Mentor applications open on the launch date. The date is Joshua's call and
 *    is not set, so `mentorshipLaunchDate` below is an explicit placeholder.
 *  - No claimed user numbers, no outcome claims we have not measured, no
 *    pricing promises and no revenue-share promises. Those are undecided
 *    (mentor_offer_draft_2026-09-21.md, "What is NOT decided").
 *  - Say what we do. Plain sentences, no hedging, no em dashes, and none
 *    of the banned filler words from the brand voice note.
 */

export const mentorshipHeaderData = {
  image: bannerImage,
  heading: "Quest Mentorship",
  desc: "A place for practitioners and the people they guide. Sign up now, before the features are finished.",
};

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
 * PLACEHOLDER. The launch date is Joshua's decision and has not been set.
 * When he sets it, change `announced` to true and put the date in `date`.
 * Do not invent a date here.
 */
export const mentorshipLaunchDate = {
  announced: false,
  date: "",
  placeholder: "[launch date to be announced]",
  note: "Mentor applications open on the launch date. Create your Quest account now and we will write to you the day they open.",
};

export const mentorshipIntro = {
  title: "Two sides, one account",
  body: "Quest holds a person's goals, habits, reflections and check-ins in one place, in their own hands. Mentorship connects the people who guide that work to the people doing it. You can create your account today. The mentorship features arrive on the launch date, and your account is waiting for them.",
};

export const mentorAudience = {
  eyebrow: "For mentors",
  title: "You already have clients. Bring the work with you.",
  intro:
    "Coaches, spiritual directors, energy workers, psychics, therapists working outside the clinical frame, and teachers with their own practice.",
  points: [
    "Your client's work continues between sessions. Goals, habits and reflections stay in one place, and your client chooses what to share with you.",
    "Less time chasing, reminding and re-reading notes, so the hours you have go to the people in front of you.",
    "A profile and a booking page, so someone looking for the way you work can find you.",
    "The option to pay for a client's Quest AI subscription and fold it into what you already offer.",
  ],
  ctaLabel: "Sign up as a mentor",
  ctaUrl: mentorSignUpUrl,
  footnote:
    "Creating your account is free. Mentor applications open on the launch date, and the account you make today is the one you apply with.",
};

export const menteeAudience = {
  eyebrow: "For mentees",
  title: "You want a human alongside the AI.",
  intro:
    "For people open to spirituality and alternative methods who also want the best of science, critical thinking and AI.",
  points: [
    "A free Quest account, with your goals, habits and reflections in one place.",
    "A place to keep the work going between sessions, on your own time.",
    "A way to find a mentor who works the way you do, when mentor matching opens.",
    "Your data is yours. You choose what a mentor sees.",
  ],
  ctaLabel: "Sign up as a mentee",
  ctaUrl: menteeSignUpUrl,
  footnote:
    "Creating your account is free, and you can start using Quest today without waiting for the launch.",
};

export const mentorshipStepsData = [
  {
    id: 1,
    title: "Create your Quest account",
    desc: "Sign up with your email and confirm the six-digit code we send you. That is a real Quest account, and you can start using it immediately.",
  },
  {
    id: 2,
    title: "Use Quest now",
    desc: "Set goals, track habits and work with Quest AI. Everything you record before the launch is still there after it.",
  },
  {
    id: 3,
    title: "We write to you on the launch date",
    desc: "Mentor applications open then. Mentors apply from inside the app, and mentees can start looking for a mentor.",
  },
];

export const mentorshipBrowserNote = {
  title: "Quest runs in your browser",
  body: "Go to quest.spiritualdata.org and sign up. There is nothing to install. We are working on the phone apps, and we will tell you when they are ready.",
};

export const mentorshipQuestions = {
  title: "Questions before you sign up",
  body: "Write to us and a person will answer. Tell us whether you are asking as a mentor or as a mentee, and what you want to know.",
  email: "support@spiritualdata.org",
  subject: "Quest mentorship launch",
};
