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
import processbgvideo from "../assets/images/Products/process.mp4";

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

interface whatItLooksLikeItem {
  title: string;
  description: string;
  top: number;
  left?: number;
  right?: number;
}

interface whatItLooksLikeData {
  eyebrow: string;
  title: string;
  description: string;
  leftItems: whatItLooksLikeItem[];
  rightItems: whatItLooksLikeItem[];
}

interface questMissionData {
  badge: string;
  title: string;
  description: string;
}

export interface questProcessItem {
  title: string;
  description: string;
}

export interface questProcessItems {
  overline: string;
  heading: string;
  media: string;
  reasons: questProcessItem[];
}

export const heroData = {
  title: "Quest",
  description:
    "Quest means Qualitative Understanding Enables Self Transformation, designed for people pursuing meaningful change with AI planning, research, and structured accountability.",
  buttonText: "Begin Your Quest",
  buttonLink: "https://quest.spiritualdata.org/sign-up",
  subHead: "Serious Goals Need Real Guidance",
  subDesc:
    "Quest supports your growth in mental health, physical wellbeing, intuition, relationships, and career progress with research-backed insight, contextual AI, and consistent accountability.",
};

export const stepsData: stepsData[] = [
  {
    step: "1. Design Your Quest",
    icon: <ImageIcon fontSize="large" />,
    title: "Clarify your mission",
    desc: "Share your meaningful goal, from mental health to intuitive growth or career success. Quest asks thoughtful questions to understand your values, context, and the outcome you truly want.",
  },
  {
    step: "2. Create Your Roadmap.",
    icon: <CloudQueueIcon fontSize="large" />,
    title: "Get your science-based plan",
    desc: "Quest analyzes your context using AI and Deep Inquiry, mapping a timeline with milestones, practices, and research-backed strategies drawn from millions of papers.",
  },
  {
    step: "3. Act, Track and Adapt",
    icon: <MicIcon fontSize="large" />,
    title: "Stay accountable as habits guide us",
    desc: "Quest sends habit reminders, tracks logs like dreams or practice entries, and checks in proactively. Record progress, adjust routines, and get support when obstacles appear in your timeline.",
  },
  {
    step: "4. Achieve & Refine",
    icon: <AccessTimeIcon fontSize="large" />,
    title: "Celebrate and refine your transformation.",
    desc: "Review your outcomes, celebrate milestones, and let Quest suggest next steps or mentor support. Your goals align into one clear timeline supported by data-guided habits for long-term growth.",
  },
];

export const featuresData: featuresData[] = [
  {
    icon: <SettingsIcon />,
    title: "Personal Context",
    subHead: "Detail Your Goal With Clarity",
    desc: "Quest helps you clearly describe your goal, situation, constraints, and priorities. That personal context is then used to generate smarter recommendations, timelines, and habit plans tailored specifically to you.",
  },
  {
    icon: <ExtensionIcon />,
    title: "Intelligent FollowThroughs",
    subHead: "Habit Reminders, Proactive Followups",
    desc: "Quest checks in when habits slip, sends timely reminders, and provides supportive nudges. It tracks your commitments, notices patterns, and helps you stay accountable without pressure or guilt.",
  },
  {
    icon: <NotificationsIcon />,
    title: "Goal Timeline Monitoring",
    subHead: "See Your Progress Clearly",
    desc: "Track habits, goals, and collections through simple visual charts. Weekly insights show what works, what slows you down, and how your roadmap evolves as your data grows.",
  },
  {
    icon: <SecurityIcon />,
    title: "Spiritual Data Collections",
    subHead: "Personalized Reflection Tracking",
    desc: "Build customized collections for dreams, habits, reflections, goal practice attempts, or spiritual experiences. Quest uses this data to personalize weekly insights and refine your goal plan.",
  },
  {
    icon: <VpnKeyIcon />,
    title: "Scientific Knowledgebase",
    subHead: "Research-Informed Decisions",
    desc: "Search 26-million+ research papers and 100k+ life experiences, including near-death case studies and Reddit success stories. Deep Inquiry analyzes evidence alongside your context to recommend grounded strategies.",
  },
  {
    icon: <HelpIcon />,
    title: "Mentorship",
    subHead: "Work With The Right Mentor",
    desc: "Quest connects you with carefully matched mentors based on your goals and progress data. Through structured check-ins and evidence-informed guidance, mentors help refine your strategy and keep you moving forward.",
  },
];

export const useCasesData: useCasesData[] = [
  {
    id: 1,
    title: "Spiritual Growth",
  },
  {
    id: 2,
    title: "Personal Development",
  },
  {
    id: 3,
    title: "Health & Wellness",
  },
  {
    id: 4,
    title: "Productivity",
  },
  {
    id: 5,
    title: "Relationships",
  },
  {
    id: 6,
    title: "Creative Expression",
  },
  {
    id: 7,
    title: "Life Transitions",
  },
  {
    id: 8,
    title: "Push Boundaries",
  },
  {
    id: 9,
    title: "Spiritual Growth",
  },
  {
    id: 10,
    title: "Personal Development",
  },
  {
    id: 11,
    title: "Health & Wellness",
  },
  {
    id: 12,
    title: "Productivity",
  },
  {
    id: 13,
    title: "Relationships",
  },
  {
    id: 14,
    title: "Creative Expression",
  },
  {
    id: 15,
    title: "Life Transitions",
  },
  {
    id: 16,
    title: "Push Boundaries",
  },
];

export const callToAction: callToAction = {
  title: "Ready to Begin Your",
  highlight: "Quest",
  suffix: "...?",
  subtitle:
    "AI-guided goal planning with structured accountability at a fraction of traditional coaching costs.",
  additionalSubtitle: "More accessible than Pro ChatGPT",
  buttonText: "Start Your First Quest",
  buttonLink: "https://quest.spiritualdata.org/sign-up",
  footerNote:
    "Free community access - $5 single quest or $10/month (Compared to ChatGPT $20)",
  additionalFooterNote1: "",
  additionalFooterNote2: "Your data stays private",
};

export const whatItLooksLikeData: whatItLooksLikeData = {
  eyebrow: "Our Specialties",
  title: "What A Real Quest Looks Like",
  description:
    "Quest supports people improving mental wellbeing, physical health, intuition, relationships, and career growth through research-backed insight and structured accountability.",
  leftItems: [
    {
      title: "Welcome",
      description: "Clarify purposeful vision with guidance",
      left: 15,
      top: 12,
    },
    {
      title: "Category",
      description: "Set lasting goals and map fresh actions",
      left: 0,
      top: 38,
    },
    {
      title: "Goal",
      description: "Review insights to track your progress",
      left: 0,
      top: 64,
    },
    {
      title: "Context",
      description: "Review your gains and absorb lessons",
      left: 15,
      top: 90,
    },
  ],
  rightItems: [
    {
      title: "Preferences",
      description: "Clarify purposeful vision with guidance",
      right: 15,
      top: 12,
    },
    {
      title: "Deep Inquiry",
      description: "Build steady habits and keep steady pace",
      right: 0,
      top: 38,
    },
    {
      title: "Strategies",
      description: "Review insights to track your progress",
      right: 0,
      top: 64,
    },
    {
      title: "Plan",
      description: "Review your gains and absorb lessons",
      right: 15,
      top: 90,
    },
  ],
};

export const questMissionData: questMissionData = {
  badge: "Our Vision",
  title: "Build the clearest path from intention to transformation",
  description:
    "Quest exists to help people turn ambitious goals into measurable progress. We combine deep inquiry, scientific evidence, and guided accountability so every step feels intentional, trackable, and aligned with the life you want to build.",
};

export const questProcessItems: questProcessItems = {
  overline: "Clarity Is a System.",
  heading:
    "Start your Quest in minutes. Turn any goal into a personalized, step-by-step execution system powered by intelligent guidance.",
  media: processbgvideo,
  reasons: [
    {
      title: "Enter Your Goal",
      description:
        "Define what you want to achieve and how success will feel in real life. Quest captures your intention, scope, and time horizon, then begins structuring it into a clear, actionable outcome you can commit to with confidence.",
    },
    {
      title: "Answer Context Questions",
      description:
        "Share your current situation, challenges, resources, and preferences. This grounding detail lets Quest tailor your plan to your real schedule and constraints, not generic advice or one-size-fits-all routines, so it feels doable from day one.",
    },
    {
      title: "Select Expert Perspectives",
      description:
        "Choose the lenses and methodologies you trust, from evidence-based frameworks to spiritual traditions or coaching styles. Quest blends those aligned perspectives into a roadmap that fits how you learn, decide, and act without diluting your values.",
    },
    {
      title: "Get Personalized Strategies",
      description:
        "Receive a fully structured plan with timelines, milestones, goals, and daily habits, ready to execute immediately. Each step is prioritized and paced so you can make steady progress, track momentum, and adjust as your life changes.",
    },
  ],
};
