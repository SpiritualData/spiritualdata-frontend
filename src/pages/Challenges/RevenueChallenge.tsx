import React from "react";
import { Box, Link, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import MemoryIcon from "@mui/icons-material/Memory";
import SchoolIcon from "@mui/icons-material/School";
import ApiIcon from "@mui/icons-material/Api";
import {
  REVENUE_CHALLENGE_FORM_URL,
  CHALLENGE_CONTACT_EMAIL,
} from "../../config/challenges";
import { useNoIndex } from "./components/useNoIndex";
import {
  Section,
  SectionTitle,
  CtaButton,
  Callout,
} from "./components/ChallengeElements";
import {
  ChallengeHero,
  ChallengeBottomCta,
} from "./components/ChallengeHero";
import ChallengeTimeline, {
  TimelineMilestone,
} from "./components/ChallengeTimeline";
import IconStepGrid, { ChallengeStep } from "./components/IconStepGrid";
import TechnologyCards, {
  TechnologyCard,
} from "./components/TechnologyCards";
import RewardCards, { RewardCard } from "./components/RewardCards";
import JudgingList from "./components/JudgingList";
import FaqList, { FaqItem } from "./components/FaqList";

const milestones: TimelineMilestone[] = [
  {
    date: "Mid-July",
    title: "Registration opens",
    description: "Register, then start selling.",
  },
  {
    date: "August 14",
    title: "Rosters lock",
    description: "Teams are fixed from here.",
  },
  {
    date: "September 4",
    title: "Demo day",
    description: "Show your work live. Pass, and earn $50.",
  },
  {
    date: "October 2",
    title: "Selling ends",
    description: "Last day revenue counts.",
  },
  {
    date: "October 9",
    title: "Results",
    description: "Payouts announced.",
  },
];

const rewards: RewardCard[] = [
  {
    stat: "$1,000",
    title: "in prize money.",
    body: "Your team earns $50 for passing demo day, then $10 for every $100 of revenue it brings Spiritual Data. Bring in $2,000 and that's $200. Your team splits its share however it likes.",
  },
  {
    title: "Real backing.",
    body: "Ask for what you need when you register: access to our code, an ad account with a capped budget, whatever else your approach takes. We confirm what we can give you before you start.",
  },
  {
    title: "An audience.",
    body: "The best approaches get promoted through Spiritual Data's channels, and every team presents at a live, public, recorded demo day.",
  },
];

const judgingCriteria = [
  {
    title: "Does it provide unique value to its users?",
    detail:
      "Winning approaches serve someone specific. The judges look at who the customer is, what they get from the offer, and why they'd choose it over doing nothing or buying elsewhere. A narrow audience served well beats a broad audience served vaguely.",
  },
  {
    title:
      "Does it genuinely apply Spiritual Data's products or technology to provide value?",
    detail:
      "The product has to be the substance of the offer, not a logo on it. The judges check that customers actually use Quest, the course, Concept AI, or Quest AI Runner as part of what they're paying for, and that the approach shows real understanding of the product it sells.",
  },
  {
    title:
      "How strong and credible is the approach to earning Spiritual Data revenue?",
    detail:
      "Evidence beats projections. Real signals come first: paying customers so far, responses from the target audience, conversion through the funnel. Then the plan for the final stretch: the channel, the offer, and whether the numbers hold up.",
  },
  {
    title: "Does it advance Spiritual Data's mission?",
    detail:
      "Spiritual Data exists to answer spiritual questions with scientific rigor. An approach scores here when the customers it brings also grow the mission: researchers working in Concept AI, people pursuing real goals on Quest, new audiences meeting rigorous spiritual research for the first time.",
  },
  {
    title:
      "Does the team responsible have the skills and commitment necessary to scale the project successfully?",
    detail:
      "A revenue path matters most if it keeps working after the challenge. The judges look at whether the team knows its audience, has the skills its channel demands, showed up consistently through the challenge, and could keep the path running or hand it off cleanly after October.",
  },
];

const RevenueChallenge: React.FC = () => {
  const theme = useTheme();
  useNoIndex();

  const products: TechnologyCard[] = [
    {
      icon: <TrackChangesIcon sx={{ fontSize: 32 }} />,
      name: "Quest",
      description:
        "Define a quest, plan it with AI, build habits and milestones, share it with friends or a mentor. Earns through subscriptions from $10/month and a mentor marketplace launching this quarter.",
      links: [
        { label: "Open Quest", href: "https://quest.spiritualdata.org" },
        { label: "Product page", href: "/products/quest" },
      ],
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 32 }} />,
      name: "Transform Your Life with Quest",
      description:
        "Four weeks, live, taught through Quest: weekly sessions, personal feedback, daily practice. Earns through course seats; a cohort is ready to run.",
      links: [
        {
          label: "Event page",
          href: "https://quest.spiritualdata.org/events/transform-your-life-with-quest",
        },
      ],
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
      name: "Concept AI",
      description:
        "Ask a spiritual question, get a statistical answer backed by an explorable knowledge graph. Earns through Researcher subscriptions and credit packs.",
      links: [
        {
          label: "Open Concept AI",
          href: "https://conceptai.spiritualdata.org",
        },
        { label: "Product page", href: "/products/concept-ai" },
      ],
    },
    {
      icon: <ApiIcon sx={{ fontSize: 32 }} />,
      name: "Concept AI API",
      description:
        "The same engine for your own tools: create an API key from your account and go. Earns through the same subscriptions and credits.",
      links: [{ label: "Product page", href: "/products/concept-ai" }],
    },
    {
      icon: <MemoryIcon sx={{ fontSize: 32 }} />,
      name: "Quest AI Runner",
      description:
        "Our open-source AI task orchestrator. Free itself; paid services built on it that bill through Spiritual Data count.",
      links: [
        {
          label: "GitHub: SpiritualData/quest-ai-runner",
          href: "https://github.com/SpiritualData/quest-ai-runner",
        },
      ],
    },
  ];

  const steps: ChallengeStep[] = [
    {
      icon: <HowToRegIcon sx={{ fontSize: 28 }} />,
      title: "Register",
      description:
        "Tell us your approach and what access you'd like. We confirm every registration before you start.",
      action: (
        <CtaButton
          label="Register your team"
          href={REVENUE_CHALLENGE_FORM_URL}
          sx={{ height: 42, px: 3, fontSize: "13px" }}
        />
      ),
    },
    {
      icon: <StorefrontIcon sx={{ fontSize: 28 }} />,
      title: "Sell from day one",
      description:
        "Once we confirm you, revenue counts. You get a referral link so every sale is tracked to your team.",
    },
    {
      icon: <VpnKeyIcon sx={{ fontSize: 28 }} />,
      title: "Get real access",
      description:
        "We set up whatever we approved from your request. Not on the team yet? You'll sign our standard agreement first.",
    },
    {
      icon: <CoPresentIcon sx={{ fontSize: 28 }} />,
      title: "Demo day: September 4",
      description:
        "Show your approach live and public. Every team the judges pass earns $50 on the spot.",
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 28 }} />,
      title: "Final stretch to October 2",
      description: "Keep selling. Results and payouts announced October 9.",
    },
  ];

  const finePrint: FaqItem[] = [
    {
      title: "Who can enter",
      detail:
        "Everyone who has applied to work or volunteer at Spiritual Data, plus current team members. Register with the email address from your application so we can match you to it.",
    },
    {
      title: "What counts as revenue",
      detail:
        "Payments Spiritual Data actually received, resulting from your team's work after registration, from real customers you didn't know before the challenge. Friends, family, and your own purchases don't count; strangers do.",
    },
    {
      title: "How the pool pays out",
      detail:
        "Every team that passes demo day earns $50. What's left of the $1,000 pays $10 for every $100 of qualifying revenue, so a team that brings in $2,000 earns $200. If the teams together earn more than the remaining pool covers at that rate, the pool splits in proportion to revenue instead. Payouts follow verification against our payment records.",
    },
    {
      title: "Where the revenue goes",
      detail: (
        <>
          To Spiritual Data. That is what makes an entry qualify: we bill the
          customer, we receive the payment, and your team earns its share of the
          prize pool for bringing it in. Want to build something you own and
          keep the revenue yourself? That's the{" "}
          <Link
            component={RouterLink}
            to="/challenges/builders-challenge"
            sx={{ fontWeight: 600, color: "primary.hero" }}
          >
            Builders Challenge
          </Link>
          , which runs after this one.
        </>
      ),
    },
    {
      title: "Teams, captains, and splits",
      detail:
        "Enter solo or with up to four teammates, one team per person. Every entrant joins the challenge space on Quest to find teammates, and we host a kickoff call in week one. Each team names a captain, who registers the team, holds the referral link, and receives the team's share. Tell us your split at registration or it's equal shares. Rosters lock August 14.",
    },
    {
      title: "Access and resources",
      detail:
        "Request what you need at registration: code access, an ad account with a limited budget, and more. We approve requests case by case. If you're not already a team member, you'll sign our standard agreement first.",
    },
  ];

  return (
    <>
      <ChallengeHero
        titleLead="The Spiritual Data"
        titleAccent="Revenue Challenge"
        tagline="Sell our products to real customers. Earn a cut of a $1,000 pool for the revenue you bring in."
        ctaLabel="Register your team"
        ctaHref={REVENUE_CHALLENGE_FORM_URL}
      >
        <Typography
          variant="body2"
          sx={{ mt: 4, color: "text.secondary", letterSpacing: 0.5 }}
        >
          Open to everyone who has applied to work or volunteer at Spiritual
          Data, plus the current team. Never applied? The{" "}
          <Link
            component={RouterLink}
            to="/challenges/builders-challenge"
            sx={{
              fontWeight: 600,
              color: "primary.hero",
              textDecorationColor: "inherit",
            }}
          >
            Builders Challenge
          </Link>{" "}
          is open to everyone.
        </Typography>
      </ChallengeHero>

      {/* Intro */}
      <Section background="white">
        <Box sx={{ maxWidth: 850, mx: "auto" }}>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", lineHeight: 1.8, letterSpacing: 0.5 }}
          >
            Spiritual Data is a nonprofit answering spiritual questions with
            scientific rigor. Scaling that mission takes revenue, so we're
            asking the people who already raised their hand to help find it.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              fontSize: "1.1rem",
              lineHeight: 1.8,
              letterSpacing: 0.5,
            }}
          >
            The products are already built and already sell. What we need is
            people who can put them in front of the right audiences. Pick one
            product, find the people who will pay for it, and sell it. Spiritual
            Data bills the customer and receives the revenue, and your team
            earns a share of the pool for every $100 it brings in.
          </Typography>
          <Callout title="What that looks like in practice" sx={{ mt: 4 }}>
            <Box
              component="ul"
              sx={{
                pl: 3,
                m: 0,
                "& li": { mb: 1.5 },
                "& li:last-of-type": { mb: 0 },
              }}
            >
              <li>
                A landing page and funnel that turns one specific audience into
                Quest subscribers.
              </li>
              <li>
                An outreach campaign that fills the next cohort of the Transform
                Your Life course.
              </li>
              <li>
                A pipeline that recruits coaches and therapists onto Quest's
                mentor marketplace.
              </li>
              <li>
                A research service built on the Concept AI API, billed through
                Spiritual Data.
              </li>
            </Box>
          </Callout>
        </Box>
      </Section>

      {/* Timeline */}
      <Section background={theme.palette.cosmic.primary}>
        <SectionTitle>The Timeline</SectionTitle>
        <ChallengeTimeline milestones={milestones} />
      </Section>

      {/* Rewards */}
      <Section background="white">
        <SectionTitle>Rewards</SectionTitle>
        <RewardCards rewards={rewards} />
      </Section>

      {/* Products */}
      <Section background={theme.palette.cosmic.primary}>
        <SectionTitle subtitle="Pick one. Selling a single product well is a complete entry. New offerings that package what already exists count too.">
          The Products You'll Be Selling
        </SectionTitle>
        <TechnologyCards cards={products} />
      </Section>

      {/* How it works */}
      <Section background="white">
        <SectionTitle>How It Works</SectionTitle>
        <IconStepGrid steps={steps} />
      </Section>

      {/* Judging */}
      <Section background={theme.palette.cosmic.primary}>
        <SectionTitle subtitle="Tap any area for what the judges look for.">
          Demo Day Is Judged Across 5 Areas
        </SectionTitle>
        <JudgingList criteria={judgingCriteria} />
      </Section>

      {/* Fine print */}
      <Section background="white">
        <SectionTitle>The Fine Print</SectionTitle>
        <FaqList items={finePrint} />
      </Section>

      <ChallengeBottomCta
        heading="Ready to build Spiritual Data a path to revenue?"
        ctaLabel="Register your team"
        ctaHref={REVENUE_CHALLENGE_FORM_URL}
        email={CHALLENGE_CONTACT_EMAIL}
      />
    </>
  );
};

export default RevenueChallenge;
