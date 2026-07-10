import React from "react";
import { Box, Link, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ConstructionIcon from "@mui/icons-material/Construction";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import MemoryIcon from "@mui/icons-material/Memory";
import {
  BUILDERS_CHALLENGE_FORM_URL,
  CHALLENGE_CONTACT_EMAIL,
} from "../../config/challenges";
import { useNoIndex } from "./components/useNoIndex";
import {
  Section,
  SectionTitle,
  CtaButton,
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
    date: "October 9",
    title: "Entries open",
    description: "Tell us what you plan to build.",
  },
  {
    date: "November 20",
    title: "Submissions close",
    description: "Working demo required, with URL and video.",
  },
  {
    date: "December 4",
    title: "Pitch day",
    description: "Live and public; top submissions pitch to the judges.",
  },
  {
    date: "Mid-December",
    title: "Investment decisions",
    description: "First checks go out.",
  },
];

const rewards: RewardCard[] = [
  {
    stat: "Up to $10,000",
    title: "A shot at real investment.",
    body: "Joshua Mathias, Spiritual Data's founder, is personally investing up to $10,000 in startup ideas built on Spiritual Data technology. Challenge winners get a guaranteed pitch slot.",
  },
  {
    title: "You own your project outright.",
    body: "The code, the product, and any revenue it earns are yours. We ask only for permission to showcase your work.",
  },
  {
    title: "An audience.",
    body: "Strong projects get featured at our public pitch day and across Spiritual Data's channels.",
  },
];

const judgingCriteria = [
  {
    title: "Does it provide unique value to its users?",
    detail:
      "Ventures win markets by being someone's best option. The judges look at who the user is, what the project does for them that nothing else does, and whether anyone outside your team would genuinely miss it if it disappeared.",
  },
  {
    title: "Does it genuinely use Spiritual Data's technology to provide value?",
    detail:
      "The technology has to be load-bearing. The judges ask what breaks if Concept AI, Quest, or Quest AI Runner were removed from your project: if the answer is nothing, it doesn't qualify. Deep, real integration scores; a thin wrapper doesn't.",
  },
  {
    title: "What evidence is there that it will earn revenue?",
    detail:
      "This is investment judging: a working demo with real usage beats any plan. Signals in order: paying customers, active users, a concrete audience you can reach, then credible pricing and a believable path to first revenue within three months.",
  },
  {
    title: "Does it advance Spiritual Data's mission?",
    detail:
      "Spiritual Data exists to answer spiritual questions with scientific rigor. Projects score here when their success also advances that mission: more evidence explored, more people asking better questions, more rigor applied to spiritual claims.",
  },
  {
    title:
      "Does the team responsible have the skills and commitment necessary to scale the project successfully?",
    detail:
      "Investment follows people. The judges look for a committed founder, the skills to keep building after pitch day, honest accounting of what's still hard, and the follow-through the six-week build window already put on display.",
  },
];

const BuildersChallenge: React.FC = () => {
  const theme = useTheme();
  useNoIndex();

  const technology: TechnologyCard[] = [
    {
      icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
      name: "Concept AI",
      description:
        "Evidence from research papers and firsthand experiences becomes structured concepts and statistical conclusions you can build against. Create an API key from your account and go.",
      links: [
        {
          label: "Open Concept AI",
          href: "https://conceptai.spiritualdata.org",
        },
        { label: "Product page", href: "/products/concept-ai" },
      ],
    },
    {
      icon: <TrackChangesIcon sx={{ fontSize: 32 }} />,
      name: "Quest",
      description:
        "Our AI goal-planning product: people define what they want and work with AI toward it. Integrations, coaching tools, and companion apps are all fair game.",
      links: [
        { label: "Open Quest", href: "https://quest.spiritualdata.org" },
        { label: "Product page", href: "/products/quest" },
      ],
    },
    {
      icon: <MemoryIcon sx={{ fontSize: 32 }} />,
      name: "Quest AI Runner",
      description:
        "Our open-source (Apache 2.0) AI task orchestrator: domain-free by design. Build your own AI workers on it.",
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
      icon: <EditNoteIcon sx={{ fontSize: 28 }} />,
      title: "Enter",
      description: "Tell us what you plan to build.",
      action: (
        <CtaButton
          label="Enter the challenge"
          href={BUILDERS_CHALLENGE_FORM_URL}
          sx={{ height: 42, px: 3, fontSize: "13px" }}
        />
      ),
    },
    {
      icon: <ConstructionIcon sx={{ fontSize: 28 }} />,
      title: "Build",
      description:
        "Work solo or as a team. Use of Spiritual Data services runs on the same public pricing available to everyone.",
    },
    {
      icon: <AssignmentTurnedInIcon sx={{ fontSize: 28 }} />,
      title: "Submit by Friday, November 20",
      description:
        "A working demo is required with URL and video. Slides are not a demo.",
    },
    {
      icon: <CoPresentIcon sx={{ fontSize: 28 }} />,
      title: "Pitch day, Friday, December 4",
      description:
        "Top submissions will have the opportunity to pitch to the judging panel. Live, public, and recorded.",
    },
  ];

  const finePrint: FaqItem[] = [
    {
      title: "The structure",
      detail:
        "Two to four ventures at $2,500 to $5,000 each, up to $10,000 total, through a standard SAFE or a simple revenue-share agreement. Investment can arrive in stages tied to milestones, like first revenue or first paying customers.",
    },
    {
      title: "What qualifies",
      detail:
        "A committed founder, a working product or credible prototype, genuine use of Spiritual Data technology or clear alignment with its mission, and a plausible path to first revenue within three months. Anyone can apply; challenge winners are fast-tracked.",
    },
    {
      title: "Stated plainly",
      detail:
        "Joshua serves on Spiritual Data's board and takes no personal return from Spiritual Data itself. These investments go to independent ventures owned by their builders, on arm's-length terms.",
    },
  ];

  return (
    <>
      <ChallengeHero
        titleLead="The Spiritual Data"
        titleAccent="Builders Challenge"
        tagline="Build on our technology. Keep everything you make. The best builders get backed with up to $10,000."
        ctaLabel="Enter the challenge"
        ctaHref={BUILDERS_CHALLENGE_FORM_URL}
      >
        <Typography
          variant="body2"
          sx={{ mt: 4, color: "text.secondary", letterSpacing: 0.5 }}
        >
          Already applied to work or volunteer at Spiritual Data? The{" "}
          <Link
            component={RouterLink}
            to="/challenges/revenue-challenge"
            sx={{
              fontWeight: 600,
              color: "primary.hero",
              textDecorationColor: "inherit",
            }}
          >
            Revenue Challenge
          </Link>{" "}
          runs first, this summer.
        </Typography>
      </ChallengeHero>

      {/* Intro */}
      <Section background="white">
        <Box sx={{ maxWidth: 850, mx: "auto" }}>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", lineHeight: 1.8, letterSpacing: 0.5 }}
          >
            Spiritual Data exists to answer spiritual questions with scientific
            rigor. We built real technology to do it; this fall, build
            something with it: a product, an integration, a research tool. If
            it works and it's real, it qualifies.
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

      {/* Technology */}
      <Section background={theme.palette.cosmic.primary}>
        <SectionTitle subtitle='Not sure your idea fits? It probably does. "Uses the technology in any way" is the whole rule.'>
          The Technology
        </SectionTitle>
        <TechnologyCards cards={technology} />
      </Section>

      {/* How it works */}
      <Section background="white">
        <SectionTitle>How It Works</SectionTitle>
        <IconStepGrid steps={steps} />
      </Section>

      {/* Judging */}
      <Section background={theme.palette.cosmic.primary}>
        <SectionTitle subtitle="Tap any area for what the judges look for.">
          Judging Is Across 5 Areas
        </SectionTitle>
        <JudgingList criteria={judgingCriteria} />
      </Section>

      {/* Investment offer */}
      <Section background="white">
        <SectionTitle subtitle="After pitch day, Spiritual Data's founder personally backs the best ventures.">
          The Investment Offer
        </SectionTitle>
        <FaqList items={finePrint} />
      </Section>

      <ChallengeBottomCta
        heading="Ready to build on Spiritual Data?"
        ctaLabel="Enter the challenge"
        ctaHref={BUILDERS_CHALLENGE_FORM_URL}
        email={CHALLENGE_CONTACT_EMAIL}
      />
    </>
  );
};

export default BuildersChallenge;
