import { JSX } from "react";
import {
  Settings as SettingsIcon,
  Extension as ExtensionIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  VpnKey as VpnKeyIcon,
  Help as HelpIcon,
} from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import MicIcon from "@mui/icons-material/Mic";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface heroData {
  title: string;
  description: string;
  buttonText: string;
  subHead: string;
  subDesc: string;
}
interface stepsData {
  step: string;
  icon: JSX.Element;
  title: string;
  desc: string;
}

interface featuresData {
  icon: JSX.Element;
  title: string;
  subHead: string;
  desc: string;
}

interface useCasesData {
  id: number;
  title: string;
}

interface callToAction {
  title: string;
  highlight?: string;
  suffix?: string;
  subtitle: string;
  additionalSubtitle?: string;
  buttonText: string;
  buttonLink?: string;
  footerNote: string;
  additionalFooterNote1?: string;
  additionalFooterNote2?: string;
}

export const heroData = {
  title: "Quest",
  description:
    "Quest means Qualitative Understanding Enables Self Transformation, built for power-users, achieving transformative goals with AI planning, research, accountability.",
  buttonText: "Begin Your Quest",
  buttonLink: "https://quest.spiritualdata.org/sign-up",
  subHead: "Power Users Need True Guidance",
  subDesc:
    "Quest backs powerusers for mental health, body health, psychic ability, relationships, and career wins with science, AI context, and accountability.",
};

export const stepsData: stepsData[] = [
  {
    step: "1. Design Your Quest",
    icon: <ImageIcon fontSize="large" />,
    title: "Clarify your mission",
    desc: "Share your transformative goal-plan, from mental health to psychic ability or career success. Quest asks ultra-precise questions to capture contextual values, and the outcome you most want.",
  },
  {
    step: "2. Create Your Roadmap.",
    icon: <CloudQueueIcon fontSize="large" />,
    title: "Get your science-based plan",
    desc: "Quest analyzes your context with AI and Deep Inquiry, mapping a timeline with milestones, practices, and research-backed verified strategies drawn from millions of papers.",
  },
  {
    step: "3. Act, Track and Adapt",
    icon: <MicIcon fontSize="large" />,
    title: "Stay accountable as habits guide us",
    desc: "Quest sends habit reminders, tracks logs like dreams or practice logs, and checks in proactive. Record progress, adjust habits, and get support when blocks appear on timeline for you.",
  },
  {
    step: "4. Achieve & Refine",
    icon: <AccessTimeIcon fontSize="large" />,
    title: "Celebrate and refine your transformation.",
    desc: "Review your outcomes, celebrate milestones, and let Quest recommend future quests, mentors, or communities. Your combined goals become one timetable with data-guided habits for life.",
  },
];

export const featuresData: featuresData[] = [
  {
    icon: <SettingsIcon />,
    title: "Deep-Inquiry Conversation",
    subHead: "Deep-Inquiry Guides Goal Roadmaps",
    desc: "Start with high-context interviews. Quest uses Qualitative Understanding, Deep Inquiry, and your history to surface priorities, define outcomes, and align habits with your most important goals today.",
  },
  {
    icon: <ExtensionIcon />,
    title: "Intelligent FollowThroughs",
    subHead: "Habit Reminders, Proactive Followups",
    desc: "Quest checks in when habits slip, sends pings, and offers mentor nudges. It tracks your promises, notices trends, and keeps you accountable without stress or guilt for power users.",
  },
  {
    icon: <NotificationsIcon />,
    title: "Goal Timeline Monitoring",
    subHead: "See Your Data Flowing!",
    desc: "Track habits, goals, and collections in crystal charts. Weekly insights show what works, what stalls, and how your roadmap evolves as data grows for each quest and timeline cycle.",
  },
  {
    icon: <SecurityIcon />,
    title: "Spiritual Data Collections",
    subHead: "Beyond-Metrics Metamorphosis Way",
    desc: "Build customized collections for dreams, habits, reflections, goalpractice attempts, or spirituality experiences. Quest uses this dataset to hyper-personalize weekly insights and refine your goal plan.",
  },
  {
    icon: <VpnKeyIcon />,
    title: "Scientific Knowledgebase",
    subHead: "Science Fuels Wisdom",
    desc: "Search 26-million+ papers, and 100k-plus life-experiences, from near-death case-studies to Reddit posts-online. Deep Inquiry analyzes evidence and your context to recommend strategies for goal planning success.",
  },
  {
    icon: <HelpIcon />,
    title: "Community Mentors",
    subHead: "Hire A Mentor!",
    desc: "Mentorships are coming soon: Quest will matchmake specialists and mentees for paid-tier check-ins, plus communitywide worlds with planets, towns, chat and shared goal scoreboard you create inside a 3D spaceworld.",
  },
];

export const useCasesData: useCasesData[] = [
  {
    id: 1,
    title: "Emotional Health",
  },
  {
    id: 2,
    title: "Psychic Capabilities",
  },
  {
    id: 3,
    title: "Mind And Wellness",
  },
  {
    id: 4,
    title: "GoalTimeline",
  },
  {
    id: 5,
    title: "Connectedness",
  },
  {
    id: 6,
    title: "Near-Death Research",
  },
  {
    id: 7,
    title: "Human Capability",
  },
  {
    id: 8,
    title: "Psychic Ability",
  },
  {
    id: 9,
    title: "Emotional Health",
  },
  {
    id: 10,
    title: "Psychic Capabilities",
  },
  {
    id: 11,
    title: "Mind And Wellness",
  },
  {
    id: 12,
    title: "GoalTimeline",
  },
  {
    id: 13,
    title: "Connectedness",
  },
  {
    id: 14,
    title: "Near-Death Research",
  },
  {
    id: 15,
    title: "Human Capability",
  },
  {
    id: 16,
    title: "Psychic Ability",
  },
];

export const callToAction: callToAction = {
  title: "Ready to Begin Your",
  highlight: "Quest",
  suffix: "...?",
  subtitle:
    "Add meaning to your life through clear direction and smart strategies.",
  additionalSubtitle: "Your journey starts now.",
  buttonText: "Start Your First Quest",
  buttonLink: "https://quest.spiritualdata.org/sign-up",
  footerNote:
    "Free community access - $5/month (single quest), $10/month (almost no limits)",
  additionalFooterNote1: "",
  additionalFooterNote2: "Your data stays private",
};
