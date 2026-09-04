/**
 * The published "Spiritual Data Prize for Proof of the Paranormal" document.
 *
 * This is the canonical copy of the text rendered at
 * /initiatives/psychic-ability-certification/prize. It lives here as
 * structured data rather than as JSX prose so there is exactly one copy of it,
 * the same arrangement `certificationProtocolData.ts` uses for the protocol.
 *
 * WHY THIS PAGE EXISTS. Joshua, 2026-09-04: the programme should read to a
 * skeptical reader as a serious paranormal testing organisation, and a standing
 * prize is the clearest way to say that. It also makes the programme the kind
 * of thing that belongs on Wikipedia's "List of prizes for evidence of the
 * paranormal".
 *
 * VOICE, and this is the hard rule for anyone editing this file. Joshua,
 * 2026-09-04: "there should be nothing implying the organization believes in
 * the phenomena. Spiritual Data is neutral. It should speak as an independent
 * observer on the current problems." The page states what we do and what the
 * record will show. It does not argue for the phenomena, does not defend
 * itself, and does not describe what other organisations fail to do. Existing
 * awards are referred to only through the complaints practitioners make about
 * them, which is a fact about the field rather than a claim about a rival.
 * Keep it short: the prize pages this one sits beside state their conditions in
 * a sentence.
 *
 * PENDING JOSHUA. Nothing here is deployed. The sum is set at Joshua's figure
 * of 1,000 dollars plus travel costs; how the money is held is still unstated
 * because it is unverified. See
 * ../../../../psychic_certification/prize_for_proof_of_the_paranormal.md.
 */

import type { ProtocolBlock } from "./certificationProtocolData";
import bannerImage from "../assets/images/initiatives/pacheader.webp";

/**
 * The prize sum, in US dollars, written once and formatted everywhere from
 * here. Set by Joshua on 2026-09-04. Travel costs are paid on top of it and are
 * described in the text rather than carried as a figure, because they are
 * agreed case by case.
 */
export const PARANORMAL_PRIZE_USD = 1000;

export const paranormalPrizeAmount = `$${PARANORMAL_PRIZE_USD.toLocaleString(
  "en-US"
)}`;

export const prizeHeaderData = {
  image: bannerImage,
  heading: "Prize for Proof of the Paranormal",
  desc: `${paranormalPrizeAmount} plus travel costs, open to anyone, currently unclaimed.`,
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
  subtitle: "Spiritual Data · Version 1.1 · 2026-09-04",
  intro: `Spiritual Data offers ${paranormalPrizeAmount} plus travel costs to the first person who demonstrates a psychic ability at the Super Psychic level of our published certification protocol. It is open to anyone, there is no entry fee, and the decision is made by reviewers holding a PhD who are independent of Spiritual Data. It is unclaimed.`,
  footer: "Version 1.1, 2026-09-04. Paid once. Unclaimed.",
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
        text: `**${paranormalPrizeAmount} plus travel costs, paid once, to the first person who demonstrates a psychic ability at the Super Psychic level** of the Psychic Ability Certification protocol. That is the highest of the protocol's four levels, and the one that requires an ability to be demonstrated repeatedly under controlled conditions rather than once.`,
      },
      {
        kind: "paragraph",
        text: "Travel and accommodation for the testing session are agreed in advance and paid whether or not the attempt succeeds. There is no entry fee and no cost to take part.",
      },
      {
        kind: "paragraph",
        text: "Spiritual Data takes no position on the outcome. The protocol was published before any session was run, the criteria for success are fixed in public before each session, and every completed assessment is published whatever it showed.",
      },
    ],
  },
  {
    id: "why-it-exists",
    number: 2,
    title: "Why this prize exists",
    blocks: [
      {
        kind: "paragraph",
        text: "Prizes for evidence of the paranormal have been offered for decades and none has been claimed. The usual reading of that record is that there is nothing to find. Practitioners and parapsychologists give a different set of reasons, and unlike the question itself those reasons can be acted on. This prize is built around them.",
      },
      {
        kind: "list",
        ordered: false,
        items: [
          "**Distance.** People who claim a reliable ability are rare and are rarely near the organisation offering an award. We pay travel and accommodation to the testing session.",
          "**Awareness.** Most never hear about an award, and many who do have no particular reason to pursue it. We approach known claimants directly rather than waiting to be approached, and we record claims in a publicly searchable database.",
          "**Test design.** A standing complaint is that tests are built in ways that stop an ability from working. Our protocol fixes the things that make a result mean something, which are witnesses, a control condition, video, a statistical threshold and independent review, and leaves the procedure itself to be agreed with the participant.",
          "**Willingness to test.** Awards are not always willing to test an applicant. We test first and then recommend the people who pass to other awards, which offers those awards a screened candidate rather than an unknown one. Where an award declines to test someone we have certified, we record that publicly as well.",
        ],
      },
      {
        kind: "paragraph",
        text: "What this produces is a record: who was tested, under what conditions, and what happened. That record is the purpose, and it is worth the same to us whichever way it comes out.",
      },
    ],
  },
  {
    id: "what-must-be-shown",
    number: 3,
    title: "What has to be demonstrated",
    blocks: [
      {
        kind: "paragraph",
        text: "Any psychic ability qualifies. Telekinesis, levitation, extrasensory perception and mediumship have standard procedures. An applicant whose ability is not covered agrees a procedure with the researcher working with them, which then has to meet the same standards as any other test.",
      },
      {
        kind: "paragraph",
        text: "**Where a result can be scored statistically, the threshold is a probability of less than 1 in 1 quadrillion against chance.** Where an ability is physical rather than statistical, such as moving an object, the demonstration is judged against a control condition run in the same session.",
      },
      {
        kind: "paragraph",
        text: "Reaching a lower certification level is a real result and is published as one. The prize is for the top level only.",
      },
    ],
  },
  {
    id: "conditions",
    number: 4,
    title: "The conditions, and who decides",
    blocks: [
      {
        kind: "paragraph",
        text: "These are the conditions in the published protocol, which applies to every assessment we run. They are not extra hurdles attached to the prize.",
      },
      {
        kind: "list",
        ordered: false,
        items: [
          "**Three or more witnesses in the room**, at least one a trained researcher and at least one independent of both the researcher and the participant.",
          "**At least one meaningful control experiment** during the same session.",
          "**Signed witness statements** describing what each witness observed.",
          "**Video recording of the session**, with no exceptions.",
          "**Sign-off by one or two reviewers holding a PhD** who assess the session record afterwards and who do not work for Spiritual Data. Spiritual Data cannot certify anyone on its own authority.",
          "**Public pre-registration**: the procedure and the criteria for success are recorded publicly before the session, so no result can be reinterpreted afterwards in either direction.",
        ],
      },
      {
        kind: "paragraph",
        text: "The full protocol, including the participant protections that go with these conditions, is published at [the ethics and testing protocol](/initiatives/psychic-ability-certification/ethics). It is what an applicant agrees to.",
      },
      {
        kind: "paragraph",
        text: "Skeptical organisations and individual researchers are welcome to nominate an observer, propose a tighter control for a specific procedure, or review a session record. Write to us and we will publish who took part.",
      },
    ],
  },
  {
    id: "sponsorship",
    number: 5,
    title: "Sponsorship for other awards",
    blocks: [
      {
        kind: "paragraph",
        text: "The awards offered elsewhere are far larger than this one. A certification at the Super Psychic level is evidence a participant can put in front of them, and Spiritual Data will pay for the attempt: travel, accommodation and the cost of arranging the test, funded up front by us.",
      },
      {
        kind: "paragraph",
        text: "In exchange, a share of any prize money won is returned to Spiritual Data and goes to our nonprofit mission of continuing this work. The share is agreed in writing before we commit anything.",
      },
      {
        kind: "paragraph",
        text: "Sponsorship is optional and nothing else depends on it. Whether or not a participant takes it, we publish the assessment and the participant has the result on the public record under their own terms.",
      },
    ],
  },
  {
    id: "entering",
    number: 6,
    title: "Entering",
    blocks: [
      {
        kind: "paragraph",
        text: "You apply through the certification programme, exactly like any other applicant. Every applicant is eligible for the prize without doing anything additional.",
      },
      {
        kind: "list",
        ordered: false,
        items: [
          "Open to anyone aged 18 or over, or younger with the agreement of a parent or guardian.",
          "Open worldwide. Testing is in person and travel is paid.",
          "**You may be published anonymously.** Your name is a separate permission from your result. Claiming the prize means telling us who you are so we can pay you, and it does not oblige you to let us publish your name.",
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
    number: 7,
    title: "Status and the public record",
    blocks: [
      {
        kind: "paragraph",
        text: "**The prize is unclaimed.** Every completed assessment is published in full at [the public record](/initiatives/psychic-ability-certification/certified), including assessments that demonstrate nothing, and the prize's status is reported there as it stands.",
      },
      {
        kind: "paragraph",
        text: "If it is claimed, we publish the session record that claimed it: the pre-registration, the procedure, the controls, the witness statements, the statistics, the reviewers, and the video where the participant has consented to its release.",
      },
      {
        kind: "paragraph",
        text: "The prize is paid once. If it is claimed we intend to offer it again, and this page will say so.",
      },
    ],
  },
];
