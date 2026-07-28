/**
 * The published "Psychic Ability Certification: Ethics and Protocol" document.
 *
 * This is the canonical copy of the document that is rendered at
 * /initiatives/psychic-ability-certification/ethics. It lives here as
 * structured data rather than as JSX prose (or as a static HTML file in
 * public/) so there is exactly one copy of the text.
 *
 * Emphasis inside a string is marked with **double asterisks**; the page
 * renders those runs in bold. Nothing else is interpreted.
 */

export type ProtocolBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "subheading"; text: string }
  | { kind: "list"; ordered: boolean; items: string[] };

export interface ProtocolSection {
  /** Anchor id, used by the in-page section index. */
  id: string;
  /** Section number as printed in the document. */
  number: number;
  title: string;
  blocks: ProtocolBlock[];
}

export const certificationProtocolMeta = {
  title: "Psychic Ability Certification: Ethics and Protocol",
  subtitle: "Spiritual Data · Version 1.0 · 2026-07-28",
  intro:
    "This document is the program's ethical standard and its testing protocol, published in full so that participants know what they are agreeing to and so that anyone evaluating our results can see the conditions under which they were produced.",
  footer: "Version 1.0, 2026-07-28.",
};

export const certificationProtocolSections: ProtocolSection[] = [
  {
    id: "why-this-document",
    number: 1,
    title: "Why this document exists instead of an ethics-board approval",
    blocks: [
      {
        kind: "paragraph",
        text: "Independent ethics review exists to protect people from harm in **specific research studies**: a defined protocol, a defined population, defined aims, a defined end. Review boards evaluate a study. They do not, as a rule, review and approve a standing service.",
      },
      {
        kind: "paragraph",
        text: "The certification program is a service. We test individuals against a published standard and issue them a classification, in the way a laboratory certifies a measurement or a professional body credentials a practitioner. That activity carries real obligations to the people who go through it, which is what the rest of this document sets out. It is not a research study, and asking a review board to approve it as one is a category error that cost this program most of a year.",
      },
      {
        kind: "paragraph",
        text: "Our position, stated plainly so it can be held against us:",
      },
      {
        kind: "list",
        ordered: false,
        items: [
          "**The certification service operates under this published protocol.** We hold ourselves to it, and we publish it so participants and critics can both check.",
          "**Specific research studies get reviewed as research studies.** When we analyze the certification record and write it up for a journal, that is a defined project with defined aims, and it goes through the appropriate ethics process at that point, including through the institutional route available to our researchers.",
          "**We will seek an independent determination in writing** on whether the certification service constitutes human-subjects research, and publish whatever we are told, whether or not it favors us.",
          "**Participation is voluntary and fully informed before anyone is tested.** That protection does not depend on any board, and it applies from the first conversation.",
        ],
      },
      {
        kind: "paragraph",
        text: "We would rather be judged on the protections we actually provide and publish than on a stamp that no participant will ever read.",
      },
    ],
  },
  {
    id: "participant-protections",
    number: 2,
    title: "Participant protections",
    blocks: [
      {
        kind: "paragraph",
        text: "These apply to everyone who contacts us, from first conversation onward.",
      },
      {
        kind: "paragraph",
        text: "**Publication is part of participating.** Every completed assessment is published, whatever the result. This is the one thing that is not optional, and it is the point. If a result could be withheld after the fact, the published record would drift toward successes only and would prove nothing. You agree to this before you are tested, never after you have seen how it went.",
      },
      {
        kind: "paragraph",
        text: "**You can be anonymous.** Publishing your name is a separate choice from publishing the result, and it is yours. An anonymous record carries the same protocol, the same statistics, the same witness statements, and the same reviewer sign-off, without identifying information. Your name and your inclusion in the public practitioner listing are permissions you grant separately and can withdraw later.",
      },
      {
        kind: "paragraph",
        text: "**Video is where anonymity costs you something.** Every session is recorded, with no exceptions, because the witnesses and the reviewers need it. A video shows who you are, so we do not publish it if you are anonymous. It stays in the review record. That makes an anonymous assessment harder for an outside reader to check on their own, and it is a real trade. Decide it knowingly rather than by default.",
      },
      {
        kind: "paragraph",
        text: "**Voluntary up to the session.** You can decline, ask anything, or withdraw at any point before your testing session, without giving a reason and without consequence.",
      },
      {
        kind: "paragraph",
        text: "**Informed consent before anything is tested.** Before any testing session you receive a full written description of what will happen, who will be present, what will be recorded, and exactly what publication means, including that a result demonstrating nothing is published the same as any other. You have as long as you want to read it and ask questions. Consent is given in writing.",
      },
      {
        kind: "paragraph",
        text: "**You see your results first.** Results are reviewed with you in a follow-up session before they go anywhere else.",
      },
      {
        kind: "paragraph",
        text: "**A null result carries no stigma here.** Many things affect performance on a given day, and a session that demonstrates nothing is a normal outcome of honest testing, not a verdict on you. Feedback is given respectfully and concretely.",
      },
      {
        kind: "paragraph",
        text: "**You may bring a support person** to the consent conversation, and to a testing session where their presence does not compromise the controlled conditions. If it would, we will say so and explain why.",
      },
      {
        kind: "paragraph",
        text: "**Participants are 18 or older.** We do not test minors.",
      },
      {
        kind: "paragraph",
        text: "**No fee, and no payment.** Participation costs you nothing. We do not currently offer compensation, and we say so up front rather than implying a reward.",
      },
      {
        kind: "paragraph",
        text: "**Your data is held securely** and used only for the purposes you agreed to. You may request a copy of your own data at any time, and you may ask us to delete the personal information you gave us. A published assessment record stays published, though it can be de-identified on request.",
      },
      {
        kind: "paragraph",
        text: "**You can raise a concern** with the program at any time, and if you are not satisfied, with Spiritual Data's board. Contact routes are published with this document.",
      },
    ],
  },
  {
    id: "testing-protocol",
    number: 3,
    title: "The testing protocol",
    blocks: [
      {
        kind: "subheading",
        text: "3.1 Standards that apply to every demonstration",
      },
      {
        kind: "paragraph",
        text: "Set by Spiritual Data's board and unchanged since:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Three or more in-person witnesses**, at least one a trained researcher and at least one an independent witness with no close ties to either the researcher or the participant. (In some configurations witnesses are present only at the tester's location.)",
          "**At least one meaningful control experiment** during the demonstration event.",
          "**Witness statements**, signed, describing what each witness observed and their assessment of its validity.",
          "**Video recording** of the event.",
          "**Independent review by one or two qualified researchers holding PhDs**, who sign off on the demonstration.",
        ],
      },
      { kind: "subheading", text: "3.2 Ability-specific procedures" },
      {
        kind: "paragraph",
        text: "A standard default procedure is defined for each ability.",
      },
      {
        kind: "list",
        ordered: false,
        items: [
          "**Where statistics apply**, the result must reach a probability against chance of less than one in one quadrillion. That threshold is deliberately extreme: it holds even if everyone on earth attempted the test multiple times.",
          "**For physical abilities** such as telekinesis and levitation, controls carry the weight of validity. Statistical approaches may also be used where the ability allows it, for example repeated movement against a control, or influence on a random number generator. Visible movement against a control is also acceptable verification.",
          "**Healing is not part of the standard test set** at this stage. It is the hardest ability to verify and it raises ethical questions the program is not yet equipped to answer well. Applicants with healing abilities may still apply and propose a procedure for consideration.",
          "**The standard tests will not cover every ability.** A participant may request an alternative procedure, and the researcher working with them may agree a different test. The general standards in 3.1 continue to apply, which is what keeps a customized test valid.",
        ],
      },
      { kind: "subheading", text: "3.3 The sequence" },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Application.** You tell us what you can do and what you are willing to demonstrate.",
          "**Screening conversation, about 30 minutes.** A two-way conversation, not an examination: what your ability is, what conditions it needs, what a fair test of it would look like, and whether we can currently provide one.",
          "**Consent review.** Written documentation, your questions answered, your signature, with no session scheduled until this is complete.",
          "**Testing session, typically 60 to 90 minutes.** Run to the standards in 3.1 and the procedure agreed in 3.2.",
          "**Independent review.** One or two PhD-level researchers assess the session record.",
          "**Follow-up session, about 30 minutes.** Your results, what they mean, what classification if any they support, and what you would like done with them.",
        ],
      },
      { kind: "subheading", text: "3.4 Pre-registration" },
      {
        kind: "paragraph",
        text: "The intended procedure and the criteria for success are recorded publicly before a session takes place. This prevents a test from being reinterpreted after the fact, in either direction, and it costs us nothing but discipline.",
      },
    ],
  },
  {
    id: "classification",
    number: 4,
    title: "Classification",
    blocks: [
      {
        kind: "paragraph",
        text: "Participants are classified by what they demonstrate and how consistently they demonstrate it, across four levels: **Demonstrably Psychic, Certified Psychic, Reliably Psychic, and Super Psychic.** A defined procedure exists for each level. The classification is earned from results and is never a matter of anyone's opinion of the participant.",
      },
      {
        kind: "paragraph",
        text: "Classification is an outcome of testing, not a product for sale. There is no route to a level other than demonstrating it under the conditions above.",
      },
    ],
  },
  {
    id: "publication",
    number: 5,
    title: "Publication",
    blocks: [
      {
        kind: "paragraph",
        text: "**Every completed assessment is published in full**, with accuracy rates, conditions, and methodology, including the assessments that demonstrate nothing. A program that reports only its successes is not evidence of anything.",
      },
      {
        kind: "paragraph",
        text: "Agreeing to publication is a condition of participating, settled in writing before testing rather than after a result is known. What stays optional is your name. A participant who chooses anonymity is published without identifying information, and without the session video, which cannot be made anonymous.",
      },
      {
        kind: "paragraph",
        text: "Participants who demonstrate ability at the highest levels may be offered co-authorship on resulting papers where their contribution warrants it.",
      },
    ],
  },
  {
    id: "who-runs-this",
    number: 6,
    title: "Who runs this, and its conflicts",
    blocks: [
      {
        kind: "paragraph",
        text: "The program is led by **Joshua Mathias**, founder of Spiritual Data and a PhD researcher in Integral and Transpersonal Psychology at CIIS. Parapsychologist **Patrizio Tressoldi** advises the initiative.",
      },
      {
        kind: "paragraph",
        text: "The obvious conflict is stated rather than hidden: Spiritual Data has an institutional interest in psychic abilities being demonstrable. The safeguards against that interest distorting results are the ones a critic would ask for anyway, and they are the reason this document specifies them: independent witnesses with no ties to us, controls in every session, independent PhD-level sign-off, pre-registration, and publication of failures.",
      },
      {
        kind: "paragraph",
        text: "We welcome volunteers and researchers who want to assist with the work and help lead it, including as witnesses, methodologists, and reviewers. Independent participation strengthens the result.",
      },
    ],
  },
  {
    id: "status-and-revision",
    number: 7,
    title: "Status and revision",
    blocks: [
      {
        kind: "paragraph",
        text: "This document governs the certification service as operated from its publication date. It will be revised as the protocol develops, with changes dated and the reason recorded. Participants are assessed under the version in force when they consent, and are told if it changes.",
      },
    ],
  },
];
