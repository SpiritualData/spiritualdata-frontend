/**
 * The published "Spiritual Data Prize for Proof of the Paranormal" document.
 *
 * This is the canonical copy of the text rendered at
 * /initiatives/psychic-ability-certification/prize. It lives here as
 * structured data rather than as JSX prose so there is exactly one copy of it,
 * the same arrangement `certificationProtocolData.ts` uses for the protocol.
 *
 * WHY THIS PAGE EXISTS. Joshua, 2026-09-04: the certification programme should
 * read to a skeptical reader as a serious paranormal testing organisation
 * rather than as an advocacy project, and a standing monetary prize for a
 * result at the highest certification level is the clearest way to say that.
 * It also makes the programme the kind of thing that belongs on Wikipedia's
 * "List of prizes for evidence of the paranormal", which is a goal in its own
 * right and one we would rather reach before we have certified anyone.
 *
 * PENDING JOSHUA. The prize sum below is a proposal, not a decision. Nothing on
 * this page should be deployed until he confirms the figure and how the money
 * is held, because a published sum is a public financial commitment we cannot
 * quietly walk back. See
 * ../../../../psychic_certification/prize_for_proof_of_the_paranormal.md.
 */

import type { ProtocolBlock } from "./certificationProtocolData";
import bannerImage from "../assets/images/initiatives/pacheader.webp";

/**
 * The prize sum, in US dollars, written once and formatted everywhere from
 * here. PROPOSED, pending Joshua's confirmation.
 */
export const PARANORMAL_PRIZE_USD = 10000;

export const paranormalPrizeAmount = `$${PARANORMAL_PRIZE_USD.toLocaleString(
  "en-US"
)}`;

export const prizeHeaderData = {
  image: bannerImage,
  heading: "Prize for Proof of the Paranormal",
  desc: `A standing ${paranormalPrizeAmount} prize, open to anyone and currently unclaimed.`,
};

export interface PrizeSection {
  /** Anchor id, used by the in-page section index. */
  id: string;
  /** Section number as printed in the document. */
  number: number;
  title: string;
  blocks: ProtocolBlock[];
}

export const paranormalPrizeMeta = {
  title: "Spiritual Data Prize for Proof of the Paranormal",
  subtitle: "Spiritual Data · Version 1.0 · 2026-09-04",
  intro: `Spiritual Data offers a standing prize of ${paranormalPrizeAmount} to the first person who demonstrates a psychic ability at the Super Psychic level of our published certification protocol. The prize is open to anyone, there is no entry fee, and the decision is made by reviewers holding a PhD who are independent of Spiritual Data. As of the date of this document it is unclaimed.`,
  footer: "Version 1.0, 2026-09-04. Paid once. Unclaimed.",
  status: "Unclaimed",
};

export const paranormalPrizeSections: PrizeSection[] = [
  {
    id: "the-prize",
    number: 1,
    title: "The prize",
    blocks: [
      {
        kind: "paragraph",
        text: `**${paranormalPrizeAmount}, paid once, to the first person who reaches the Super Psychic level** of the Psychic Ability Certification protocol. That is the highest of the four levels the protocol defines, and it is the one that requires an ability to be demonstrated repeatedly under controlled conditions rather than once.`,
      },
      {
        kind: "paragraph",
        text: "Most prizes of this kind are offered by skeptical organisations, on the reasoning that an unclaimed prize is itself an argument. We are offering one from the other direction. We think these abilities are real and testable, we have published the standard we will test them against, and we are putting money behind the claim that someone will meet it.",
      },
      {
        kind: "paragraph",
        text: "The prize changes nothing about how an assessment is run. The protocol, the witnesses, the controls, the statistical threshold, and the publication commitment are identical whether or not the prize is in play. It is a consequence of a result, never an input to one.",
      },
    ],
  },
  {
    id: "what-must-be-shown",
    number: 2,
    title: "What has to be demonstrated",
    blocks: [
      {
        kind: "paragraph",
        text: "Any psychic ability qualifies. The programme is not restricted to one phenomenon: telekinesis, levitation, extrasensory perception, and mediumship all have standard procedures, and an applicant whose ability is not covered may agree a procedure with the researcher working with them, which then has to meet the same general standards as any other test.",
      },
      {
        kind: "paragraph",
        text: "**Where a result can be scored statistically, the threshold is a probability of less than 1 in 1 quadrillion against chance.** That is set deliberately far beyond conventional significance, so that the result would still stand if everyone alive had taken the same test several times over. Where an ability is physical rather than statistical, such as moving an object, the demonstration is judged against a control condition run in the same session.",
      },
      {
        kind: "paragraph",
        text: "Reaching a lower certification level is a real result and is published as one, but it does not claim the prize. The prize is for the top level only.",
      },
    ],
  },
  {
    id: "conditions",
    number: 3,
    title: "The conditions",
    blocks: [
      {
        kind: "paragraph",
        text: "These are the conditions in the published protocol, which applies to every assessment we run. They are not extra hurdles invented for the prize.",
      },
      {
        kind: "list",
        ordered: false,
        items: [
          "**Three or more witnesses in the room**, at least one of them a trained researcher, and at least one of them independent of both the researcher and the participant.",
          "**At least one meaningful control experiment** during the same session.",
          "**Signed witness statements** describing what each witness observed and what they made of it.",
          "**Video recording of the session**, with no exceptions.",
          "**Sign-off by one or two reviewers holding a PhD** who assess the session record after the fact.",
          "**Public pre-registration**: the procedure and the criteria for success are recorded publicly before the session, so no result can be reinterpreted afterwards in either direction.",
        ],
      },
      {
        kind: "paragraph",
        text: "The full protocol, including the participant protections that go with these conditions, is published at [the ethics and testing protocol](/initiatives/psychic-ability-certification/ethics). Read it before applying. It is what you would be agreeing to.",
      },
    ],
  },
  {
    id: "who-decides",
    number: 4,
    title: "Who decides, and the obvious objection",
    blocks: [
      {
        kind: "paragraph",
        text: "The obvious objection to a prize offered by an organisation that believes in the phenomenon is that the organisation is marking its own homework. It is a fair objection and the design answers it directly.",
      },
      {
        kind: "list",
        ordered: false,
        items: [
          "**The reviewers are independent.** Certification at any level, including the level that claims this prize, is decided by reviewers holding a PhD who do not work for Spiritual Data. Spiritual Data cannot certify a participant on its own authority.",
          "**One witness must be independent** of both Spiritual Data's researcher and the participant, and that witness signs a statement of what they saw.",
          "**The criteria are fixed before the session**, published, and not adjustable afterwards.",
          "**Every completed assessment is published whatever it showed**, so the record cannot drift toward successes. A reader can count the failures.",
        ],
      },
      {
        kind: "paragraph",
        text: "**We would rather this were harder still.** If you are a skeptical organisation or an individual researcher and you want to nominate an independent observer, propose a tighter control for a specific procedure, or review a session record yourself, write to us. We will say yes, and we will publish the fact that you were involved.",
      },
    ],
  },
  {
    id: "entering",
    number: 5,
    title: "Entering",
    blocks: [
      {
        kind: "paragraph",
        text: "**There is no entry fee and there is no cost to participate.** You apply through the certification programme, exactly like any other applicant, and every applicant is eligible for the prize without doing anything additional.",
      },
      {
        kind: "list",
        ordered: false,
        items: [
          "Open to anyone aged 18 or over, or younger with the agreement of a parent or guardian.",
          "Open worldwide. Testing is in person, so travel has to be worked out case by case, and we would rather solve that than lose a genuine applicant to it.",
          "**You may be published anonymously.** Your name is a separate permission from your result. Claiming the prize means telling us who you are so we can pay you, but it does not oblige you to let us publish your name.",
          "You may withdraw at any point before your testing session, for any reason or none.",
        ],
      },
      {
        kind: "paragraph",
        text: "Start at [how to apply](/initiatives/psychic-ability-certification/apply). Applying begins a screening conversation, not a test.",
      },
    ],
  },
  {
    id: "status-and-record",
    number: 6,
    title: "Status and the public record",
    blocks: [
      {
        kind: "paragraph",
        text: "**The prize is currently unclaimed.** Every completed assessment we run is published in full at [the public record](/initiatives/psychic-ability-certification/certified), including assessments that demonstrate nothing, and the prize's status is reported there honestly whether or not it flatters us.",
      },
      {
        kind: "paragraph",
        text: "If it is claimed, we publish the session record that claimed it: the pre-registration, the procedure, the controls, the witness statements, the statistics, the reviewers, and the video where the participant has consented to its release. A win that could not be examined would be worth nothing to us.",
      },
      {
        kind: "paragraph",
        text: "The prize is paid once. If it is claimed we intend to offer it again, and we will say so on this page rather than leaving the question open.",
      },
    ],
  },
];
