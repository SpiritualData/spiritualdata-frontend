/**
 * The published "Spiritual Data Prize for Proof of the Paranormal" document.
 *
 * This is the canonical copy of the text rendered at
 * /initiatives/psychic-ability-certification/prize. It lives here as
 * structured data and not as JSX prose so there is exactly one copy of it,
 * the same arrangement `certificationProtocolData.ts` uses for the protocol.
 *
 * WHY THIS PAGE EXISTS. Joshua, 2026-09-04: the programme should read to a
 * skeptical reader as a serious paranormal testing organisation, and a standing
 * prize is the clearest way to say that. It also makes the programme the kind
 * of thing that belongs on Wikipedia's "List of prizes for evidence of the
 * paranormal".
 *
 * VOICE, and this is the hard rule for anyone editing this file.
 *
 * 1. Neutral. Joshua, 2026-09-04: "there should be nothing implying the
 *    organization believes in the phenomena. Spiritual Data is neutral. It
 *    should speak as an independent observer on the current problems." The page
 *    states what we do and what the record will show.
 * 2. Say what we do. Joshua, 2026-09-05: "keep saying over and over to say what
 *    we're doing, not implicitly making excuses or what we're not doing".
 *    "There is no entry fee and no cost to take part" is a fact and stays. A
 *    sentence shaped "X and not Y" gets rewritten as "X".
 * 3. The word "rather" does not appear in the rendered copy. Joshua, 2026-09-05,
 *    named it as a tell of AI speech, along with the construction it carries.
 * 4. Do not describe what other organisations fail to do. Existing awards are
 *    referred to only through the complaints practitioners make about them,
 *    which is a fact about the field and not a claim about a rival. We do not
 *    tell a skeptical reader what the record of unclaimed prizes means; the
 *    page addresses the complaints and lets the testing settle the question.
 * 5. Say "unclaimed" twice at most: once in the header strapline and once in
 *    the status section. Joshua, 2026-09-05: "the page awkwardly says it's
 *    unclaimed too many times".
 * 6. Short. The prize pages this one sits beside state their conditions in a
 *    sentence.
 * 7. The skeptic identity line under the intro is Joshua's own sentence, word for
 *    word, 2026-09-05: "Spiritual Data is a skeptic organization focused on
 *    intellectual autonomy through awareness of information to avoid deception."
 *    It is on the About page too. Do not paraphrase it and do not localise its
 *    spelling.
 * 8. Section 2's opening paragraph is Joshua's wording, 2026-09-05, and the list
 *    that follows it carries the heading "Complaints:" so a reader sees at once
 *    that these are complaints other people make and not complaints we make.
 * 9. What makes a session independent is its witnesses, not its reviewers. Joshua,
 *    2026-09-05: the PhD reviewers "would likely be our advisors so I'm not sure
 *    we should say they're independent". So the page never calls a reviewer
 *    independent; it states that three or more independent witnesses are present
 *    in person and the session is on video, and it says plainly that a reviewer
 *    may be one of our own advisors.
 *
 * PENDING JOSHUA. This page is deployed to the review site only,
 * https://qa.spiritualdata.org/initiatives/psychic-ability-certification/prize,
 * which is where Joshua reads it. It is not on the public site, and merging to
 * main is his call. The sum is Joshua's figure of 1,000 dollars plus travel
 * costs, and it is paid under the sponsorship agreement in section 5, which is
 * the condition he set on 2026-09-05: "the prize is only for if they agree to
 * be sponsored for another prize". See
 * ../../../../psychic_certification/prize_for_proof_of_the_paranormal.md.
 */

import type { ProtocolBlock } from "./certificationProtocolData";
import bannerImage from "../assets/images/initiatives/pacheader.webp";

/**
 * The prize sum, in US dollars, written once and formatted everywhere from
 * here. Set by Joshua on 2026-09-04. Travel costs are paid on top of it and are
 * described in the text and not carried as a figure, because they are agreed
 * case by case.
 */
export const PARANORMAL_PRIZE_USD = 1000;

export const paranormalPrizeAmount = `$${PARANORMAL_PRIZE_USD.toLocaleString(
  "en-US"
)}`;

export const prizeHeaderData = {
  image: bannerImage,
  heading: "Prize for Proof of the Paranormal",
  desc: `${paranormalPrizeAmount} plus travel costs, open to anyone, unclaimed.`,
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
  subtitle: "Spiritual Data · Version 1.3 · 2026-09-05",
  intro: `Spiritual Data offers ${paranormalPrizeAmount} plus travel costs to the first person who demonstrates a psychic ability at the Super Psychic level of our published certification protocol and who agrees to be sponsored for an attempt at another organisation's award. It is open to anyone, there is no entry fee, and every session is witnessed in person by at least three independent witnesses and recorded on video.`,
  /**
   * Joshua's sentence, 2026-09-05, printed under the intro paragraph and on the
   * About page. Word for word, US spelling included.
   */
  identity:
    "Spiritual Data is a skeptic organization focused on intellectual autonomy through awareness of information to avoid deception.",
  footer: "Version 1.3, 2026-09-05",
};

export const paranormalPrizeSections: PrizeSection[] = [
  {
    id: "the-prize",
    number: 1,
    title: "The prize",
    blocks: [
      {
        kind: "paragraph",
        text: `**${paranormalPrizeAmount} plus travel costs, paid once, to the first person who demonstrates a psychic ability at the Super Psychic level** of the Psychic Ability Certification protocol. That is the highest of the protocol's four levels, and it asks for the ability to be demonstrated repeatedly under controlled conditions.`,
      },
      {
        kind: "paragraph",
        text: "**The prize is paid under the sponsorship agreement in section 5.** The winner agrees to let Spiritual Data fund an attempt at an award offered by another testing organisation, and a share of anything won there returns to Spiritual Data and funds this work. The terms are agreed in writing before anything is booked.",
      },
      {
        kind: "paragraph",
        text: "There is no entry fee and no cost to take part.",
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
        text: "Prizes for evidence of the paranormal have been offered for decades and none has been claimed. Parapsychologists and believers have complaints about how these prizes are run. This prize is built around answering those concerns, so that the testing settles the question and the record shows plainly what it settled.",
      },
      {
        kind: "subheading",
        text: "Complaints:",
      },
      {
        kind: "list",
        ordered: false,
        items: [
          "**Distance.** People who claim a reliable ability are rare, and they are seldom near the organisation offering an award. We bring the assessment to the participant and find witnesses in their location.",
          "**Awareness.** Most practitioners never hear about an award, and many who do have no particular reason to pursue it. We approach known claimants directly, and we record the claims we receive in a publicly searchable database.",
          "**Test design.** A standing complaint is that tests are built in ways that stop an ability from working. Our protocol fixes the things that make a result mean something, which are witnesses, a control condition, video, a statistical threshold and independent review, and the procedure itself is agreed with the participant.",
          "**Willingness to test.** Testing organisations have limited capacity and decide most applications on the application alone. We test first and recommend the people who pass to other awards, which puts a screened candidate in front of them. Where an award declines to test someone we have certified, we record that publicly.",
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
        text: "Any psychic ability qualifies. Telekinesis, levitation, extrasensory perception and mediumship have standard procedures. An applicant whose ability is outside those agrees a procedure with the researcher working with them, which then has to meet the same standards as any other test.",
      },
      {
        kind: "paragraph",
        text: "**Where a result can be scored statistically, the threshold at the Super Psychic level is a probability of less than 1 in 1 quadrillion against chance**, so that a result stands against the chance of someone among the billions of people alive having got it right by luck. The lower certification levels use 1 in 1 million, the standard the field uses. Where an ability is physical, such as moving an object, the demonstration is judged against a control condition run in the same session.",
      },
      {
        kind: "paragraph",
        text: "Each criterion is written to give a definite pass or fail, and it is fixed in public before the session, so the result stands as it was defined in advance. A certification comes from a live session run under this protocol.",
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
        text: "These are the conditions in the published protocol, which applies to every assessment we run. They are the standard, and they are the same for every applicant.",
      },
      {
        kind: "list",
        ordered: false,
        items: [
          "**A written protocol agreement, signed before a session is scheduled.** The procedure, the conditions the ability needs, and the criteria for success are set out in writing and agreed by both the participant and the researcher, and they change only by agreement of both.",
          "**Three or more independent witnesses present in person**, none of them working for Spiritual Data and none with a prior relationship to the participant, and at least one of them a trained researcher.",
          "**The witnesses are present where the effect is.** For an ability that moves or affects an object, they are with the object. For an ability that receives information, they are with the information, which is often somewhere other than where the participant is.",
          "**At least one meaningful control experiment** during the same session.",
          "**Signed witness statements** describing what each witness observed.",
          "**Video recording of the session**, with no exceptions.",
          "**Sign-off by one or two reviewers holding a PhD**, who assess the session record afterwards. Where a reviewer is one of Spiritual Data's own scientific advisors we say so, and every reviewer is named in the published record. What makes a session independent is its witnesses and its video, which are there so a reader can check the reviewers' judgement against the same evidence.",
          "**Public pre-registration**: the procedure and the criteria for success are recorded publicly before the session, so a result stands as it was defined in advance.",
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
        text: "The awards offered elsewhere are far larger than this one. A certification at the Super Psychic level is evidence a participant can put in front of them, and Spiritual Data pays for the attempt: travel, accommodation and the cost of arranging the test, funded up front by us.",
      },
      {
        kind: "paragraph",
        text: "In exchange, a share of any prize money won there returns to Spiritual Data and funds our nonprofit mission of continuing this work. The share is agreed in writing before anything is booked.",
      },
      {
        kind: "paragraph",
        text: `This agreement is what the ${paranormalPrizeAmount} and the travel costs are paid under. A participant who reaches the Super Psychic level and decides against the sponsorship still has the assessment published in full on the public record, under their own terms.`,
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
        kind: "paragraph",
        text: "You tell us what your ability is, the conditions it needs, and how often it works. A screening conversation of about thirty minutes settles what a fair test of it looks like. The procedure and the criteria for success are then written down, agreed and signed, and only after that is a session scheduled. The session is followed by independent review and a follow-up conversation about what the result means.",
      },
      {
        kind: "list",
        ordered: false,
        items: [
          "Open to anyone aged 18 or over, or younger with the agreement of a parent or guardian.",
          "Open worldwide. We arrange the assessment in your location and find the witnesses there.",
          "**You may be published anonymously.** Your name is a separate permission from your result. Claiming the prize means telling us who you are so we can pay you, and your name stays yours to publish or withhold.",
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
        text: "**The prize is unclaimed, and no assessment has been completed yet.** [The public record](/initiatives/psychic-ability-certification/certified) carries every completed assessment in full as sessions are run, including assessments that demonstrate nothing, and reports the prize's status as it stands.",
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
