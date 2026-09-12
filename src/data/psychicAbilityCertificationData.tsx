import bannerImage from "../assets/images/initiatives/pacheader.webp";
import scrollimage1 from "../assets/images/products/app1.webp";
import scrollimage2 from "../assets/images/products/app2.webp";
import scrollimage3 from "../assets/images/products/app3.webp";

export const headerData = {
  image: bannerImage,
  heading: "Psychic Ability Certification",
  desc: "A rigorous scientific program to test, verify, and certify genuine psychic abilities with transparency and credibility.",
};

export const tiltHeadData = {
  bgText: "Psychic Initiative",
  title: "Psychic Ability Certification Initiative",
  desc: "The Psychic Ability Certification program tests claims of psychic ability under scientific conditions and publishes the full record of every assessment, whatever it shows. It is the world's first structured certification system covering every psychic ability, one protocol holding telekinesis, levitation, extrasensory perception, mediumship, and abilities that have no standard test yet. Every assessment is pre-registered in public, run against a control, scored against a stated statistical threshold, watched in person by at least three independent witnesses, and recorded on video.",
};

export const scrollCardsData = [
  {
    title: "Background",
    desc: "Despite decades of peer reviewed research showing statistical evidence, systematic testing of advanced psychic ability with credible witnesses has been limited due to lack of resources and motivation. Spiritual Data intends to change this by creating a transparent and scientific program for testing telekinesis, ESP, levitation, and more.",
    btn: "Apply to be tested",
    img: scrollimage1,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdi7zXNri8uXouwlOMV64WcYNXeQOlVX7nS7Su6YM9V4AyJCg/viewform?usp=sf_link",
  },
  {
    title: "Purpose",
    desc: "The purpose of this initiative is to provide more credible evidence of advanced psychic ability, create a regulated certification system, motivate scientific research, and guide individuals to authentic practitioners who demonstrate real, verifiable skills.",
    btn: "Apply to be tested",
    img: scrollimage2,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdi7zXNri8uXouwlOMV64WcYNXeQOlVX7nS7Su6YM9V4AyJCg/viewform?usp=sf_link",
  },
  {
    title: "Approach",
    desc: "Our certification process follows a published ethics and testing protocol: standardized and customizable tests, independent witnesses, video recording, and independent PhD-level validation. Participants are classified by reliability, from Demonstrably Psychic to Super Psychic.",
    btn: "Apply to be tested",
    img: scrollimage3,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdi7zXNri8uXouwlOMV64WcYNXeQOlVX7nS7Su6YM9V4AyJCg/viewform?usp=sf_link",
  },
];

export const psychicAbilityDetailsData = [
  {
    id: 1,
    title: "Scientific Testing",
    desc: "All demonstrations are conducted under strict conditions, including comparison with controls, independent witnesses, and video documentation.",
    secHead: "DETAILS",
    secSubHead1: "PSYCHIC",
    secSubHead2: "CERTIFICATION",
  },
  {
    id: 2,
    title: "Standardized Abilities",
    desc: "Testing procedures focus on common abilities such as telekinesis, ESP, and levitation, with flexibility for unique skills.",
    secHead: "DETAILS",
    secSubHead1: "PSYCHIC",
    secSubHead2: "CERTIFICATION",
  },
  {
    id: 3,
    title: "Certification Levels",
    desc: "Participants are ranked as Demonstrably Psychic, Certified Psychic, Reliably Psychic, or Super Psychic, depending on results.",
    secHead: "DETAILS",
    secSubHead1: "PSYCHIC",
    secSubHead2: "CERTIFICATION",
  },
  {
    id: 4,
    title: "Verification Standards",
    desc: "Tests require multiple independent witnesses, at least one PhD researcher, control experiments, and statistical significance where possible.",
    secHead: "DETAILS",
    secSubHead1: "PSYCHIC",
    secSubHead2: "CERTIFICATION",
  },
  {
    id: 5,
    title: "Transparency",
    desc: "Results are published with full detail, including accuracy rates, conditions, and methodology, ensuring credibility and public trust.",
    secHead: "DETAILS",
    secSubHead1: "PSYCHIC",
    secSubHead2: "CERTIFICATION",
  },
  {
    id: 6,
    title: "Impact",
    desc: "This initiative could change global perception of psychic abilities, support further research, and create opportunities for genuine practitioners.",
    secHead: "DETAILS",
    secSubHead1: "PSYCHIC",
    secSubHead2: "CERTIFICATION",
  },
];

/**
 * Recruitment status for the certification programme, shown wherever the site
 * invites someone to apply. Set to open by Joshua on 7 September 2026, when he
 * approved recruiting before any ethics review rather than after it. Flip
 * `open` to false and update `label` and `note` if recruiting is ever paused.
 */
export const certificationRecruitmentStatus = {
  open: true,
  label: "Applications are open",
  note: "We are recruiting participants now. Send the form in and we will come back to you to arrange the screening conversation. Taking part is free, and every completed assessment is published whatever it shows.",
};

export const certificationApplyFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdi7zXNri8uXouwlOMV64WcYNXeQOlVX7nS7Su6YM9V4AyJCg/viewform?usp=sf_link";

/**
 * The contact route section 6 of the published protocol already gives for
 * volunteers and researchers. Surfaced on the apply page because the protocol
 * cannot staff a single session without these people.
 */
export const certificationVolunteerEmail = "support@spiritualdata.org";

/** The roles named in section 3.1 and section 6 of the published protocol. */
export const certificationVolunteerRolesData = [
  {
    title: "Witnesses",
    desc: "Present in the room at a session, signing a statement describing what you observed. At least one witness has to be independent of both the researcher and the participant.",
  },
  {
    title: "Methodologists",
    desc: "Helping design a fair test of an ability our standard procedures do not cover, without weakening the standards every session is held to.",
  },
  {
    title: "Reviewers holding a PhD",
    desc: "Assessing the record of a completed session and signing off on what it does and does not show.",
  },
  {
    title: "Coordination",
    desc: "Scheduling sessions, keeping the published record current, and making sure applicants hear back.",
  },
];

/** Sub-pages of the certification initiative, surfaced from the overview page. */
export const certificationSubPagesData = [
  {
    id: 2,
    eyebrow: "The record",
    title: "Published Assessments",
    desc: "The public record of every completed assessment, including the ones that demonstrate nothing. Each entry carries its protocol, controls, witnesses, statistics, and independent reviewer sign-off.",
    btn: "See the record",
    link: "/initiatives/psychic-ability-certification/certified",
  },
  {
    id: 3,
    eyebrow: "Take part",
    title: "Apply to be Tested",
    desc: "What applying actually involves, step by step, from the first screening conversation to your follow-up session. Participation is free, and nothing is measured until you have read the consent documentation and signed.",
    btn: "How to apply",
    link: "/initiatives/psychic-ability-certification/apply",
  },
  {
    id: 5,
    eyebrow: "Take part",
    title: "Apply to be a Witness",
    desc: "Every session needs three or more people in the room from outside this organization, watching under agreed conditions and signing a statement of what they saw. One session, in person, and your name on the record.",
    btn: "Witness a session",
    link: "/initiatives/psychic-ability-certification/witness",
  },
  {
    id: 4,
    eyebrow: "The prize",
    title: "Spiritual Data Prize for Proof of the Paranormal",
    desc: "A standing $1,000 prize plus travel costs for the first demonstration to reach the Super Psychic level of the published protocol, paid under an agreement to be sponsored for an attempt at another organisation's award. Open to anyone, anywhere, no entry fee, decided by reviewers holding a PhD who do not work for Spiritual Data. Unclaimed.",
    btn: "About the prize",
    link: "/initiatives/psychic-ability-certification/prize",
  },
  {
    id: 1,
    eyebrow: "The standard",
    title: "Ethics and Testing Protocol",
    desc: "The full published protocol: the participant protections, the witness and control standards every demonstration must meet, the statistical threshold, pre-registration, and the commitment to publish every completed assessment.",
    btn: "Read the protocol",
    link: "/initiatives/psychic-ability-certification/ethics",
  },
];

export const certifiedHeaderData = {
  image: bannerImage,
  heading: "Published Assessments",
  desc: "Every completed assessment, published in full, including the assessments that demonstrate nothing.",
};

export const ethicsHeaderData = {
  image: bannerImage,
  heading: "Ethics and Testing Protocol",
  desc: "The program's ethical standard and its testing protocol, published in full so participants know what they are agreeing to.",
};

export const applyHeaderData = {
  image: bannerImage,
  heading: "Apply to be Tested",
  desc: "What applying involves, from first conversation to results, and what you are agreeing to at each step.",
};

export const assessmentDetailHeaderData = {
  image: bannerImage,
  heading: "Assessment Record",
  desc: "One assessment in full: the protocol, the controls, the witnesses, the statistics, and the independent review.",
};

/** The sequence in section 3.3 of the published Ethics and Testing Protocol. */
export const applyStepsData = [
  {
    id: 1,
    title: "Application",
    duration: "A form",
    desc: "You tell us what you can do and what you are willing to demonstrate.",
  },
  {
    id: 2,
    title: "Screening conversation",
    duration: "About 30 minutes",
    desc: "A two-way conversation, not an examination: what your ability is, what conditions it needs, what a fair test of it would look like, and whether we can currently provide one.",
  },
  {
    id: 3,
    title: "Consent review",
    duration: "As long as you need",
    desc: "Written documentation, your questions answered, your signature. No session is scheduled until this is complete.",
  },
  {
    id: 4,
    title: "Testing session",
    duration: "Typically 60 to 90 minutes",
    desc: "Run to the published standards: three or more in-person witnesses including a trained researcher and an independent witness, at least one meaningful control experiment, signed witness statements, and video recording.",
  },
  {
    id: 5,
    title: "Independent review",
    duration: "After the session",
    desc: "One or two PhD-level researchers assess the session record and sign off on what it shows.",
  },
  {
    id: 6,
    title: "Follow-up session",
    duration: "About 30 minutes",
    desc: "Your results, what they mean, what classification if any they support, and what you would like done with them. You see your results before anyone else does.",
  },
];

/** Drawn from section 2 of the published protocol: participant protections. */
export const applyProtectionsData = [
  "Participation is free. There is no fee.",
  "You may decline, ask anything, or withdraw at any point before your testing session, without giving a reason and without consequence.",
  "Publication is part of participating. Every completed assessment is published, whatever the result, and you agree to that before you are tested, never after you have seen how it went. This doesn't apply to the informal preliminary demonstration.",
  "Your name is optional. You can be published anonymously, with the same protocol, statistics, witness statements, and reviewer sign-off, minus identifying information.",
  "Every session is recorded, with no exceptions. Because a video shows who you are, it is not published if you are anonymous.",
  "A null result carries no stigma here. A session that demonstrates nothing is a normal outcome of honest testing.",
  "You may bring a support person to the consent conversation, and to a testing session where it does not compromise the controlled conditions.",
  "Participants are 18 or older or have agreement from their parent or guardian.",
];

/**
 * The witness page. Built 12 September 2026 so that every witness approach can
 * be a single link instead of a protocol explanation, which is what Joshua
 * asked for on 11 September. The form is the live register sign up recorded in
 * psychic_certification/recruitment/witness_signup_form.md.
 */
export const witnessHeaderData = {
  image: bannerImage,
  heading: "Apply to be a Witness",
  desc: "One session, watched in person, and a short signed statement of what you saw.",
};

export const certificationWitnessFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScks49MPTdZpxheL9MS2Xbg6pf5lNFH7jUroJrZCHq2yWPEDA/viewform";

/** What a witness actually does, in the order it happens. */
export const witnessStepsData = [
  {
    id: 1,
    title: "Put your name on the register",
    duration: "Two minutes",
    desc: "The form asks where you are, what you would be comfortable observing, and any connection you have to this field. Filling it in commits you to nothing.",
  },
  {
    id: 2,
    title: "We contact you when a session is near you",
    duration: "Only then",
    desc: "Witnesses travel to the effect, so a session has to be within reach of you before we write. You can say no to any individual session and stay on the register.",
  },
  {
    id: 3,
    title: "Read the brief and sign a disclosure",
    duration: "About 15 minutes",
    desc: "You get the agreed procedure and the success criteria before the session, in writing. The disclosure records any connection you have to the participant or to us, because that is what the reader of the record needs to judge.",
  },
  {
    id: 4,
    title: "Watch the session in person",
    duration: "60 to 90 minutes",
    desc: "You are in the room with the participant, or in the room with the target information where the ability is about receiving information. The session is recorded on continuous video alongside you.",
  },
  {
    id: 5,
    title: "Sign a statement of what you observed",
    duration: "About 15 minutes",
    desc: "In your own words: what happened, and whether the agreed conditions held. Your statement is published with the session record, including a statement that says the conditions failed.",
  },
];

/** The terms, stated plainly, because they decide whether someone says yes. */
export const witnessTermsData = [
  "The commitment is one session. Saying yes once commits you to nothing after it.",
  "The role is unpaid and there is no reimbursement. This is a free service, and nobody with a financial interest in an outcome holds a witness seat.",
  "Your name and affiliation are published with the session record. You may withhold your name, and the record then says that a name was withheld.",
  "Nobody employed or contracted by Spiritual Data counts toward the three witnesses a session requires, and neither does anyone with a prior relationship to the participant.",
  "You see the procedure and the criteria for success before the session, and they are published before it runs.",
  "Every completed assessment is published whatever it showed, including one that demonstrates nothing.",
];

/** Who we are asking. Specific, because a general ask gets a general answer. */
export const witnessWhoData = [
  {
    title: "People who watch carefully",
    desc: "Most witness seats need attention and a signature, not a qualification. If you can watch a procedure closely and describe what you saw, you can hold one.",
  },
  {
    title: "Members of skeptical and rationalist groups",
    desc: "Any skeptical or rationalist organisation can name someone for a seat at a session near them. An objection is more useful in the room than in a comment afterwards.",
  },
  {
    title: "Researchers and academics",
    desc: "Psychology, physics and statistics departments are where we look first for the seat that assesses whether the controls held.",
  },
  {
    title: "Magicians and mentalists",
    desc: "Where a claimed effect is physical, somebody who knows how such an effect can be produced by other means is the most useful person in the room.",
  },
  {
    title: "Camera operators and videographers",
    desc: "Every session carries a continuous video record. Holding the camera steady for 90 minutes is a real job, and it seats you where you can see everything.",
  },
];
