import bannerImage from "../assets/images/initiatives/banner.webp";

/**
 * Copy and data for the /mentorship page.
 *
 * Sources: quest_subscribers_growth/ai_driven/source_of_truth/niche_and_brand_voice.md
 * (the niche and brand voice of record), quest_subscribers_growth/NICHE_FUNNEL_FEATURES.md
 * (the pain point and what each side pays for; that doc links back to this
 * page, so change them together) and
 * mentorship_launch/registration_entry_point_2026-09-21.md (section 5).
 *
 * Rules this file is held to, and anyone editing it inherits them:
 *  - Quest runs in the browser. Never say download the app, never name a store.
 *  - Mentor applications open on Sunday 25 October 2026, the last Sunday of the
 *    month, which is the day the monthly Quest session already runs.
 *  - No claimed user numbers, no outcome claims we have not measured, no
 *    pricing promises and no revenue-share promises. Those are undecided
 *    (mentor_offer_draft_2026-09-21.md, "What is NOT decided"). The 1,000 and
 *    10,000 below are the stated goal for 25 October, asked for by name by
 *    Joshua on 21 September 2026: "Also important to mention explicitly the
 *    1000 and 10,000. That was a key part of it to build excitement." Say them
 *    as what we are building to, never as a count we hold today, and never
 *    show a live total while it is small.
 *  - Say what we do, never what is missing or unfinished. Joshua, 21 September
 *    2026: "AI keeps saying what we're not doing or what's not there instead of
 *    just not mentioning it." No em dashes, no hedging, no banned filler.
 */

export const mentorshipHeaderData = {
  image: bannerImage,
  heading: "Quest Mentorship",
  desc: "Guidance that keeps working between sessions. Quest connects people growing with purpose to mentors who value both inner experience and real evidence.",
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
 * The launch date. Sunday 25 October 2026 is the last Sunday of October, which is
 * the day the monthly Quest session already runs, so the launch has an event
 * around it. Joshua asked for a day to be picked (email, 21 September 2026);
 * changing it is his call.
 */
export const mentorshipLaunchDate = {
  announced: true,
  date: "Sunday 25 October 2026",
  placeholder: "Sunday 25 October 2026",
  note: "Create your Quest account now and we will write to you the morning mentor applications open,",
};

/**
 * The problem the visitor already has, said first. Mentors arrive because
 * their work stops when the session ends and every session starts by catching
 * up. Mentees arrive because insight fades within the week. This is the
 * number one pain point in NICHE_FUNNEL_FEATURES.md, section 1; keep the two
 * in step.
 */
export const mentorshipIntro = {
  title: "The real work happens between sessions",
  body: "A good session leaves you with a clear insight. By Wednesday the thread is lost: the notebook is closed, the mentor is elsewhere, and the next session starts by rebuilding what the last one established. Quest keeps that thread. It holds each person's goals, habits, reflections and check-ins in one place over time, so a mentor and the person they guide pick up exactly where they left off.",
  goal: "By Sunday 25 October 2026 we are bringing together 1,000 mentors and 10,000 people they guide. The account you create today is the one you launch with.",
};

export const mentorAudience = {
  eyebrow: "For mentors",
  title: "Spend your hours guiding, not catching up.",
  intro:
    "For coaches, spiritual directors, energy workers, psychics, therapists working outside the clinical frame, and teachers with their own practice.",
  points: [
    "Walk into every check-in with the full picture: the goals, habits and reflections your client has chosen to share, and what changed since you last met.",
    "Set what a check-in includes and what it costs. Clients pay from their mentorship balance when the check-in is done.",
    "Your clients keep working between sessions, with Quest AI helping them on their own material, so your guidance carries through the week.",
    "A profile and a booking page, so people looking for the way you work can find you.",
    "The option to pay for a client's Quest AI subscription and fold it into what you already offer.",
  ],
  ctaLabel: "Sign up as a mentor",
  ctaUrl: mentorSignUpUrl,
  footnote:
    "Creating your account is free. Mentor applications open on Sunday 25 October 2026, and the account you make today is the one you apply with.",
};

export const menteeAudience = {
  eyebrow: "For people seeking guidance",
  title: "Keep your insight alive, with a human beside you.",
  intro:
    "For people open to spirituality and personal transformation who also value science, critical thinking and real results.",
  points: [
    "Your goals, habits and reflections held in one place, so an insight from Sunday is still there on Wednesday.",
    "One mentorship balance you can spend with any mentor on Quest. Try a coach this month and a spiritual director the next.",
    "Mentors who see your progress before you meet, so sessions start with what is next.",
    "Quest AI takes the journaling and re-explaining off your plate, so you spend less time on a screen and more time living it.",
    "Your data is yours. You choose what each mentor sees.",
  ],
  ctaLabel: "Sign up to find a mentor",
  ctaUrl: menteeSignUpUrl,
  footnote:
    "Creating your account is free, and Quest is yours to use from today."
};

/**
 * Who a visitor will be connecting with. Drawn from the niche of record,
 * quest_subscribers_growth/ai_driven/source_of_truth/niche_and_brand_voice.md.
 */
export const mentorshipPeople = {
  title: "The people you will meet here",
  intro:
    "Quest is built by Spiritual Data, a nonprofit that studies spiritual experience with the tools of science. The people it brings together share that spirit.",
  items: [
    {
      title: "Open to the spiritual, grounded in evidence",
      desc: "People who take inner experience seriously and also want to know what actually works. Open inquiry, on both sides of the conversation.",
    },
    {
      title: "Mentors with a practice of their own",
      desc: "Coaches, spiritual directors, energy workers, psychics and teachers who respect their clients' experience and welcome seeing real progress over time.",
    },
    {
      title: "Growing toward something that matters",
      desc: "People working on big life goals, who track what they do and reflect on it, and who want a guide to help them see further.",
    },
    {
      title: "Using AI to live more fully",
      desc: "People who use AI as a means to a conscious life, handing it the busywork so they have more time for practice, people and presence.",
    },
  ],
};

/**
 * How the mentorship model works. The balance and the priced check-in are
 * live in quest-backend: MenteeBalance (one balance per mentee, across every
 * mentor), a mentor-set check_in_price, and a completed check-in that debits
 * it (app/models/subscription.py, app/api/endpoints/mentors/check_ins.py).
 * No prices, cuts or payout terms here; those are Joshua's calls.
 */
export const mentorshipModel = {
  title: "How mentorship works on Quest",
  intro:
    "Mentorship on Quest is built around the time between sessions, so every hour a mentor and client spend together goes further.",
  items: [
    {
      title: "One balance, any mentor",
      desc: "People add to a single mentorship balance and spend it on check-ins with whichever mentors suit them. A coach, a spiritual director and a teacher can all be paid from the same balance.",
    },
    {
      title: "Check-ins with everything in front of you",
      desc: "Each mentor defines what a check-in includes. When one comes up, the client's shared goals, habits, reflections and recent progress are already there, so a short check-in does the work of a long session.",
    },
    {
      title: "Personal data that does the remembering",
      desc: "Quest tracks the daily practice: habits kept, goals moved, reflections written. That record is what makes guidance specific, and it belongs to the person who wrote it.",
    },
    {
      title: "AI on each side, if you want it",
      desc: "Mentor and client can each bring their own Quest AI into their conversation, to summarise, prepare and follow up. Human guidance is the heart of it, and each person decides whether AI joins in.",
    },
  ],
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
    desc: "Set goals, track habits and work with Quest AI. Everything you record stays with your account.",
  },
  {
    id: 3,
    title: "We write to you on Sunday 25 October",
    desc: "Mentor applications open that morning. Mentors apply from inside Quest and set up their check-ins, and everyone else starts choosing a mentor.",
  },
];

export const mentorshipBrowserNote = {
  title: "Quest runs in your browser",
  body: "Go to quest.spiritualdata.org and sign up. There is nothing to install, and it works on your phone the same way.",
};

export const mentorshipQuestions = {
  title: "Questions before you sign up",
  body: "Write to us and a person will answer. Tell us whether you are asking as a mentor or as a mentee, and what you want to know.",
  email: "support@spiritualdata.org",
  subject: "Quest mentorship launch",
};
