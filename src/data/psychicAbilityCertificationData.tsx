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
  desc: "The Psychic Ability Certification program aims to provide practically undeniable evidence of psychic abilities through transparent and ethical testing. By applying scientific standards—witness verification, control experiments, and independent PhD-level review—Spiritual Data offers the world's first structured certification system for all psychic abilities, helping regulate the industry and motivating further research.",
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

export const certificationApplyFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdi7zXNri8uXouwlOMV64WcYNXeQOlVX7nS7Su6YM9V4AyJCg/viewform?usp=sf_link";

/** Sub-pages of the certification initiative, surfaced from the overview page. */
export const certificationSubPagesData = [
  {
    id: 1,
    eyebrow: "The standard",
    title: "Ethics and Testing Protocol",
    desc: "The full published protocol: the participant protections, the witness and control standards every demonstration must meet, the statistical threshold, pre-registration, and the commitment to publish every completed assessment.",
    btn: "Read the protocol",
    link: "/initiatives/psychic-ability-certification/ethics",
  },
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
    desc: "What applying actually involves, step by step, from the first screening conversation to your follow-up session. Participation is free, voluntary, and revocable at any point.",
    btn: "How to apply",
    link: "/initiatives/psychic-ability-certification/apply",
  },
];

export const certifiedHeaderData = {
  image: bannerImage,
  heading: "Published Assessments",
  desc: "Every completed assessment, published in full — including the assessments that demonstrate nothing.",
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

/** Drawn from section 2 of the published protocol — participant protections. */
export const applyProtectionsData = [
  "Participation is free. There is no fee, and we do not currently offer compensation.",
  "You may withdraw at any point — before, during, or after a session — without giving a reason, and withdraw your data with you.",
  "Nothing about you is published without your consent, and that includes null results.",
  "Being publicly identified is a separate permission from being published, granted individually and revocable.",
  "A null result carries no stigma here. A session that demonstrates nothing is a normal outcome of honest testing.",
  "You may bring a support person to the consent conversation, and to a testing session where it does not compromise the controlled conditions.",
  "Participants are 18 or older.",
];
