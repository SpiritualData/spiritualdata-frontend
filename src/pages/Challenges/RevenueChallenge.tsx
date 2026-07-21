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

/** Inline link used in the "want to know more" pointers. */
const MoreInfoLink: React.FC<{
  href: string;
  internal?: boolean;
  children: React.ReactNode;
}> = ({ href, internal, children }) => {
  const linkSx = {
    fontWeight: 600,
    color: "primary.hero",
    textDecoration: "underline",
    textDecorationColor: "currentColor",
    textDecorationThickness: "2px",
    textUnderlineOffset: "3px",
    "&:hover": {
      textDecorationColor: "primary.focus",
      textDecorationThickness: "3px",
    },
  };

  if (internal) {
    return (
      <Link component={RouterLink} to={href} sx={linkSx}>
        {children}
      </Link>
    );
  }

  const isEmail = href.startsWith("mailto:");
  return (
    <Link
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener"}
      sx={linkSx}
    >
      {children}
    </Link>
  );
};

const milestones: TimelineMilestone[] = [
  {
    date: "Open now",
    title: "Registration is open",
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
    body: "$50 for passing demo day. What's left of the $1,000 is shared out in proportion to the revenue each team brings in, up to 10 times your team's own revenue. It's a reward for opening a new revenue path, not a commission.",
  },
  {
    title: "Real backing.",
    body: "Ask for what you need when you register: access to our code, an ad account with a set budget, whatever else your approach takes. We confirm what we can give you before you start.",
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
        {
          label: "Plans and pricing",
          href: "https://quest-docs.spiritualdata.org/reference/plans",
        },
      ],
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 32 }} />,
      name: "Transform Your Life with Quest",
      description:
        "Four weeks, live, taught through Quest: weekly sessions, personal feedback, daily practice. Earns through course seats on sliding-scale pricing; a cohort is ready to run.",
      links: [
        {
          label: "Event page",
          href: "https://quest.spiritualdata.org/events/transform-your-life-with-quest",
        },
        {
          label: "Course guide",
          href: "https://quest-docs.spiritualdata.org/course/",
        },
      ],
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
      name: "Concept AI",
      description:
        "Ask a spiritual question, get a statistical answer backed by an explorable knowledge graph. Earns through Researcher subscriptions ($29/month) and credit packs.",
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
        "The same engine for your own tools: create an API key from your account and go. Earns through those same Researcher subscriptions and credits, spent through the API.",
      links: [{ label: "Product page", href: "/products/concept-ai" }],
    },
    {
      icon: <MemoryIcon sx={{ fontSize: 32 }} />,
      name: "Quest AI Runner",
      description:
        "Our open-source AI task orchestrator. The tool is free, but paid services built on it that bill through Spiritual Data count.",
      links: [
        {
          label: "GitHub: SpiritualData/quest-ai-runner",
          href: "https://github.com/SpiritualData/quest-ai-runner",
        },
        { label: "Product page", href: "/products/quest-ai-runner" },
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
      icon: <VpnKeyIcon sx={{ fontSize: 28 }} />,
      title: "Get real access",
      description:
        "We set up whatever we approved from your request, so you're not selling empty-handed.",
    },
    {
      icon: <StorefrontIcon sx={{ fontSize: 28 }} />,
      title: "Sell from day one",
      description:
        "Revenue counts the moment we confirm you. You get a referral link, so every sale is tracked to your team.",
    },
    {
      icon: <CoPresentIcon sx={{ fontSize: 28 }} />,
      title: "Demo day: September 4",
      description: "Show your approach live and public.",
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 28 }} />,
      title: "Final stretch to October 2",
      description: "Keep selling. Results October 9.",
    },
  ];

  const finePrint: FaqItem[] = [
    {
      title: "Who can enter",
      detail:
        "Everyone who has applied to work or volunteer at Spiritual Data, plus the Spiritual Data team. Register with the email address from your application so we can match you to it. Not eligible this time? We expect to run more challenges, so write to us and we'll keep you posted.",
    },
    {
      title: "What counts as revenue",
      detail:
        "Revenue counts when Spiritual Data actually received the payment, it came from your team's work after registration, and the customer is someone you didn't know before the challenge. Friends, family, and your own purchases don't count. Strangers do. The revenue itself stays with Spiritual Data: we bill the customer, we receive the payment, and your team earns its share of the pool for bringing it in.",
    },
    {
      title: "How the pool pays out",
      detail:
        "Every team that passes demo day earns $50. What's left of the $1,000 is shared out in proportion to the revenue each team brought in, so the team that brings in the most earns the most. Your share is capped at 10 times your own qualifying revenue, so a team that brings in $30 earns at most $300, however the rest of the field does. Payouts follow verification against our payment records.",
    },
    {
      title: "Team size and finding teammates",
      detail:
        "Teams can have up to five members, and entering solo is fine. One team per person. Every entrant joins the challenge space on Quest to find teammates, and we host a kickoff call in week one. Rosters lock August 14.",
    },
    {
      title: "Captains and splits",
      detail:
        "Each team names a captain, who registers the team, holds the referral link, and receives the team's share. Tell us your split at registration, or it's equal shares.",
    },
    {
      title: "Access and resources",
      detail:
        "Request what you need at registration: code access, an ad account with a set budget, and more. We approve requests case by case. If you don't already work with Spiritual Data, you'll sign our standard agreement first.",
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
          Data, plus the Spiritual Data team.
        </Typography>
      </ChallengeHero>

      {/* Intro */}
      <Section background="white">
        <Box sx={{ maxWidth: 850, mx: "auto" }}>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", lineHeight: 1.8, letterSpacing: 0.5 }}
          >
            Pick one of our products, find the people who will pay for it, and
            sell it. Spiritual Data bills the customer and receives the revenue,
            and the $1,000 pool goes to the teams that bring in the most.
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
            We're a nonprofit answering spiritual questions with scientific
            rigor. Scaling that takes revenue, so we're asking the people who
            already raised their hand to help find it.
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
                <strong>Quest subscribers:</strong> a landing page and funnel
                aimed at one specific audience.
              </li>
              <li>
                <strong>Course seats:</strong> an outreach campaign that fills
                the next cohort.
              </li>
              <li>
                <strong>Mentors:</strong> a pipeline that recruits coaches and
                therapists onto the marketplace.
              </li>
              <li>
                <strong>Concept AI:</strong> a research service built on the
                API, billed through Spiritual Data.
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
        <Callout
          title="Want to know more first?"
          sx={{ mt: { xs: 4, md: 5 }, maxWidth: 850, mx: "auto" }}
        >
          The{" "}
          <MoreInfoLink href="https://quest-docs.spiritualdata.org">
            Quest documentation
          </MoreInfoLink>{" "}
          covers the product feature by feature, including the{" "}
          <MoreInfoLink href="https://quest-docs.spiritualdata.org/guide/mentors">
            mentors guide
          </MoreInfoLink>{" "}
          for the marketplace. Unsure whether your idea qualifies, or how you'd
          bill through us? Email{" "}
          <MoreInfoLink href={`mailto:${CHALLENGE_CONTACT_EMAIL}`}>
            {CHALLENGE_CONTACT_EMAIL}
          </MoreInfoLink>{" "}
          before you build.
        </Callout>
      </Section>

      {/* How it works */}
      <Section background="white">
        <SectionTitle>How It Works</SectionTitle>
        <IconStepGrid steps={steps} />
      </Section>

      {/* Judging */}
      <Section background={theme.palette.cosmic.primary}>
        <SectionTitle subtitle="Open any area for what the judges look for.">
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
