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
    title: string,
    description: string,
    buttonText: string,
    subHead: string,
    subDesc: string
}
interface stepsData {
  step: string;
  icon: JSX.Element;
  title: string;
  desc: string;
}

interface featuresData {
    icon: JSX.Element,
    title: string,
    subHead: string,
    desc: string
}

interface useCasesData {
    id: number,
    title: string
}

interface callToAction {
  title: string;
  highlight?: string;
  suffix?: string;
  subtitle: string;
  additionalSubtitle?: string
  buttonText: string;
  buttonLink?: string;
  footerNote: string;
  additionalFooterNote1?: string;
  additionalFooterNote2?: string;
}

export const heroData = {
  title: "Quest",
  description:
    "Your AI companion for meaningful transformation. Turn aspirations into achievements through guided conversations, intelligent accountability, and progress tracking.",
  buttonText: "Begin Your Quest",
  buttonLink: "https://quest.spiritualdata.org/auth/signup",
  subHead: "Every Journey Deserves a Guide",
  subDesc:
    "Whether you're pursuing spiritual growth, personal transformation, or practical goals, Quest provides the structure and support you need to succeed.",
};

export const stepsData: stepsData[] = [
  {
    step: "1. Define Your Quest",
    icon: <ImageIcon fontSize="large" />,
    title: "Clarify your vision.",
    desc: "Share your desired outcome—whether it's spiritual growth, improved well-being, or personal development. Quest asks thoughtful questions to understand where you are and where you want to go.",
  },
  {
    step: "2. Receive Your Roadmap",
    icon: <CloudQueueIcon fontSize="large" />,
    title: "Get your personalized plan.",
    desc: "Based on your goals and circumstances, Quest creates a step-by-step action plan with milestone dates, recommended practices, and strategies rooted in evidence and insight.",
  },
  {
    step: "3. Take Action & Update",
    icon: <MicIcon fontSize="large" />,
    title: "Stay supported as you move forward.",
    desc: "Begin your journey with confidence. Quest offers reminders, encouragement, and space to reflect as you take steps toward your goal. Log progress and get help when you face challenges.",
  },
  {
    step: "4. Achieve & Evolve",
    icon: <AccessTimeIcon fontSize="large" />,
    title: "Celebrate and expand your transformation.",
    desc: "Reflect on your growth, celebrate milestones, and let Quest recommend new directions based on everything you've accomplished. Your evolution becomes the foundation for future quests.",
  },
];

export const featuresData: featuresData[] = [
  {
    icon: <SettingsIcon />,
    title: "Goal-Driven Conversations",
    subHead: "Turn Conversations Into Progress ",
    desc: "Your journey begins with purposeful conversations. Quest guides you through focused dialogues, asking insightful questions to uncover your true objectives and craft a path toward meaningful outcomes.",
  },
  {
    icon: <ExtensionIcon />,
    title: "Intelligent Accountability",
    subHead: "Gentle Reminders, Thoughtful Support",
    desc: "Quest follows up at the right moments—offering timely nudges, motivation, and helpful insights when you need them most. It's like having a wise mentor who never forgets your goals.",
  },
  {
    icon: <NotificationsIcon />,
    title: "Visual Progress Tracking",
    subHead: "See Your Growth Unfold",
    desc: "Track your progress through intuitive charts and dynamic visuals. From small wins to major milestones, Quest helps you reflect on how far you've come and where you're headed next.",
  },
  {
    icon: <SecurityIcon />,
    title: "Spiritual Data Integration",
    subHead: "Beyond Productivity—Into Purpose",
    desc: "Quest uniquely understands spiritual data—the thoughts, experiences, and decisions that shape your higher self. Perfect for journeys involving metaphysical growth, intuition, and deep personal insight.",
  },
  {
    icon: <VpnKeyIcon />,
    title: "Research-Backed Guidance",
    subHead: "Science Meets Wisdom",
    desc: "Quest blends evidence-based strategies with intuitive reasoning. By drawing from scientific studies, real-world methodologies, and lived human experiences, your path forward is always grounded and personalized.",
  },
  {
    icon: <HelpIcon />,
    title: "Adaptive Learning",
    subHead: "Grows With You",
    desc: "The more you interact, the more Quest understands you. It continuously learns from your responses, preferences, and behavior to offer smarter suggestions, refined strategies, and deeper alignment with your goals.",
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
    "Add meaning to your life through clear direction and smart strategies.",
  additionalSubtitle: "Your journey starts now.",
  buttonText: "Start Your First Quest",
  buttonLink: "https://quest.spiritualdata.org/auth/signup",
  footerNote: "Free to try - $5/month (single quest), $10/month (almost no limits)",
  additionalFooterNote1: "",
  additionalFooterNote2: "Your data stays private",
};
