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

const milestones: TimelineMilestone[] = [
  {
    date: "Mid-July",
    title: "Registration opens",
    description: "Kickoff and team matching call.",
  },
  {
    date: "August 14",
    title: "Rosters lock",
    description: "Switch teams freely until then; after that rosters are fixed.",
  },
  {
    date: "September 4",
    title: "Demo day",
    description: "$50 endorsements for every team that passes the bar.",
  },
  {
    date: "October 2",
    title: "Selling window ends",
    description: "Qualifying revenue counts through this date.",
  },
  {
    date: "October 9",
    title: "Results and payouts",
    description: "Each team's share is announced and paid.",
  },
];

const rewards: RewardCard[] = [
  {
    stat: "$1,000",
    title: "in prize money.",
    body: "Pass the bar at demo day and your team earns $50 and our endorsement for the final stretch. From there, your team earns $10 for every $100 of revenue it brings Spiritual Data, paid from what's left of the pool. If teams collectively bring in more revenue than the pool covers at that rate, what's left splits in proportion to revenue instead. Each team divides its share among its members however it chooses. Only real revenue counts: paying customers you didn't know before the challenge started.",
  },
  {
    title: "You own what you build.",
    body: "The code, tooling, and funnels you create are yours; we ask only for permission to showcase your work. What makes an entry qualify is that the revenue itself goes to Spiritual Data.",
  },
  {
    title: "An audience.",
    body: "The strongest demos and pitches get promoted through Spiritual Data's channels during the revenue phase, and every team shows its work at a live, public demo day.",
  },
];

const judgingCriteria = [
  "Does it provide unique value to its users?",
  "Does it genuinely apply Spiritual Data's products or technology to provide value?",
  "How strong and credible is the approach to earning Spiritual Data revenue?",
  "Does it advance Spiritual Data's mission?",
  "Does the team responsible have the skills and commitment necessary to scale the project successfully?",
];

const teamBullets = [
  {
    title: "Find teammates.",
    body: "Everyone who enters gets invited to the challenge space on Quest, our own product, where the whole challenge lives. Post a short intro: what you want to build, what you're good at, and what you're missing. In the first week we'll also host a kickoff call where anyone can pitch their idea in one minute and recruit on the spot.",
  },
  {
    title: "Pick a captain.",
    body: "Each team names one captain: the single point of contact who registers the team, holds the team's referral link, and receives the team's share of the pool.",
  },
  {
    title: "Agree on your split up front.",
    body: "When your team registers, tell us how you'll divide your share. If you don't say, it's equal shares. Settling this on day one beats negotiating after the money exists.",
  },
  {
    title: "One team per person, rosters lock August 14.",
    body: "You can switch teams freely until Friday, August 14; after that rosters are fixed so revenue attribution stays clean. Revenue belongs to the team that earned it, even if someone leaves.",
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
        "Define a quest, plan it with AI, build the habits and milestones to get there, and share it with friends or a mentor. How it earns: subscriptions from $10/month, plus a mentor marketplace launching this quarter where coaches and therapists take paid sessions.",
      links: [
        { label: "Open Quest", href: "https://quest.spiritualdata.org" },
        { label: "Product page", href: "/products/quest" },
      ],
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 32 }} />,
      name: "Transform Your Life with Quest",
      description:
        "Four weeks, live, taught through Quest itself: weekly sessions, personal feedback, daily practice. How it earns: course seats on sliding-scale pricing; a full cohort is ready to run again.",
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
        "Ask a spiritual question, get a statistical answer: evidence from research papers and firsthand experiences becomes structured concepts, conclusions, and an explorable knowledge graph. How it earns: Researcher subscriptions ($29/month) and credit packs.",
      links: [
        { label: "Open Concept AI", href: "https://conceptai.spiritualdata.org" },
        { label: "Product page", href: "/products/concept-ai" },
      ],
    },
    {
      icon: <ApiIcon sx={{ fontSize: 32 }} />,
      name: "Concept AI API",
      description:
        "The same truth-estimation engine, programmatic, for building your own research tools: create an API key from your account and go. How it earns: the same subscriptions and credits, spent through the API.",
    },
    {
      icon: <MemoryIcon sx={{ fontSize: 32 }} />,
      name: "Quest AI Runner",
      description:
        "Our open-source AI task orchestrator, the executor behind Quest's AI tasks in production. How it earns: free itself; paid services built on it that bill through Spiritual Data count.",
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
      description: (
        <>
          Tell us the revenue approach you plan to take, plus anything you'd
          like access to: code, an ad account with a limited budget, other
          resources. Use the email address from your Spiritual Data application
          so we can match you to it; entry is open to past applicants and
          current team members. We review every registration and confirm your
          idea before you start. If you've never applied, the{" "}
          <Link
            component={RouterLink}
            to="/builders-challenge"
            sx={{ fontWeight: 600 }}
          >
            Builders Challenge
          </Link>{" "}
          is open to everyone.
        </>
      ),
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
        "The products are already live, so revenue counts from the moment your registration is confirmed, as long as it came from your team's work after that. You'll get a referral link or code so your customers and revenue are tracked to your team.",
    },
    {
      icon: <VpnKeyIcon sx={{ fontSize: 28 }} />,
      title: "Get real access",
      description:
        "Whatever you requested at registration and we approved: Spiritual Data code access, a capped ad budget, and more. If you're not already a team member, we'll send you our standard agreement to sign first.",
    },
    {
      icon: <CoPresentIcon sx={{ fontSize: 28 }} />,
      title: "Demo day: Friday, September 4",
      description:
        "Every team demos its approach to revenue, whatever form that takes: a landing page and funnel, a new product feature, a mentor-recruitment pipeline, an outreach campaign with responses coming in. Live, public, and recorded. Every approach that passes the judges' bar earns $50 on the spot and our endorsement for the final stretch; the judges also pick the strongest approaches for Spiritual Data to promote through its own channels.",
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 28 }} />,
      title: "Final stretch through Friday, October 2",
      description:
        "Keep selling. Results are announced Friday, October 9: each team earns $10 for every $100 of qualifying revenue it brought Spiritual Data since registration, paid from what's left of the $1,000 after endorsements. If teams collectively earn more than that pool covers, it splits in proportion to revenue instead.",
    },
  ];

  return (
    <>
      <ChallengeHero
        titleLead="The Spiritual Data"
        titleAccent="Revenue Challenge"
        tagline="$1,000 for whoever builds Spiritual Data a real path to revenue."
        ctaLabel="Register your team"
        ctaHref={REVENUE_CHALLENGE_FORM_URL}
      />

      {/* Intro */}
      <Section background="white">
        <Box sx={{ maxWidth: 850, mx: "auto" }}>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", lineHeight: 1.8, letterSpacing: 0.5 }}
          >
            Spiritual Data is a nonprofit on an ambitious mission: answering
            spiritual questions with scientific rigor and overcoming bias in
            science. Scaling that mission takes sustainable revenue, and we're
            turning to the people who already raised their hand: this challenge
            is open to everyone who has applied to work or volunteer at
            Spiritual Data, along with our current team.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              letterSpacing: 0.5,
              mt: 3,
            }}
          >
            The challenge is about our products: Quest, the Transform Your
            Life with Quest course, Concept AI (the app and its API), and
            Quest AI Runner. They already work. The innovation we're after is
            in how to apply them and sell them: find the audiences, offers, and
            channels that bring Spiritual Data paying customers. You only have
            to sell one: pick the product that fits your audience, and selling
            it well is a complete entry. You can also create new offerings
            that leverage what exists (a coaching offer around Quest, a
            research service on Concept AI), or build something new on our
            technology if that's your path, but most winning approaches will
            likely start from what already exists. If the revenue flows to
            Spiritual Data and it's real, it qualifies.
          </Typography>
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
        <SectionTitle subtitle="You only have to sell one. Pick the product that fits your audience; new offerings that package what exists count too.">
          The Products You'll Be Selling
        </SectionTitle>
        <TechnologyCards cards={products} />
        <Callout sx={{ mt: 5, maxWidth: 820, mx: "auto" }}>
          Not sure your idea fits? One test: does it sell our products (or
          something new built on our technology), and does the revenue reach
          Spiritual Data? If yes, it fits.
        </Callout>
      </Section>

      {/* Teams */}
      <Section background="white">
        <SectionTitle subtitle="Enter solo or in a team of up to five. Both work; a good pair usually beats either alone.">
          Teams and How to Form One
        </SectionTitle>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {teamBullets.map((bullet) => (
            <Box
              key={bullet.title}
              sx={{
                backgroundColor: theme.palette.cosmic.primary,
                borderRadius: 3,
                p: { xs: 3, md: 4 },
                boxShadow: `0px 4px 24px ${theme.palette.cardshadow.main}`,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, letterSpacing: 1, mb: 1.5 }}
              >
                {bullet.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.7 }}
              >
                {bullet.body}
              </Typography>
            </Box>
          ))}
        </Box>
      </Section>

      {/* How it works */}
      <Section background={theme.palette.cosmic.primary}>
        <SectionTitle>How It Works</SectionTitle>
        <IconStepGrid steps={steps} />
      </Section>

      {/* Judging */}
      <Section background="white">
        <SectionTitle>Demo Day Is Judged Across 5 Areas</SectionTitle>
        <JudgingList criteria={judgingCriteria} />
        <Callout
          title="What counts as revenue"
          sx={{ mt: 6, maxWidth: 820, mx: "auto" }}
        >
          Payments Spiritual Data actually received, that resulted from your
          team's work after registration, from real customers you didn't know
          before the challenge. Friends, family, and your own purchases don't
          count; strangers do.
        </Callout>
      </Section>

      {/* Why */}
      <Section background={theme.palette.cosmic.primary}>
        <SectionTitle>Why We're Doing This</SectionTitle>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            letterSpacing: 0.5,
            maxWidth: 850,
            mx: "auto",
          }}
        >
          Spiritual Data is a nonprofit and exists to make an impact. We want
          to see our technology put to good use, while finding opportunities
          for sustainable revenue. Finding sustainable revenue paths will allow
          us to scale our ambitious mission to overcome bias in science.
        </Typography>
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
