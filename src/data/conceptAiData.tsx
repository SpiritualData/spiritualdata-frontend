import cors1 from "../assets/images/products/conceptAiCor1.webp"
import cors2 from "../assets/images/products/conceptAiCor2.webp"
import cors3 from "../assets/images/products/conceptAiCor3.webp"
import cors4 from "../assets/images/products/conceptAiCor4.webp"
import cors5 from "../assets/images/products/conceptAiCor5.webp"
import cors6 from "../assets/images/products/conceptAiCor6.webp"
import image1 from "../assets/images/products/app1.webp";
import image2 from "../assets/images/products/app2.webp";
import SecurityIcon from "@mui/icons-material/Security";
import image3 from "../assets/images/products/app3.webp";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import FunctionsIcon from "@mui/icons-material/Functions";
import HubIcon from "@mui/icons-material/Hub";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import LanIcon from "@mui/icons-material/Lan";
import DownloadIcon from "@mui/icons-material/Download";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import GroupWorkIcon from "@mui/icons-material/GroupWork";

interface heroData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  subHead: string;
  subDesc: string;
}
interface capabilitiesData {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface researchData {
  type: "single" | "double" | "title";
  content?: string | string[];
  title?: string;
  subtitle?: string;
}

interface SellingPoint {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
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

export const heroData: heroData = {
  title: "Concept AI",
  description:
    "Spiritual Data's AI research workspace. It turns evidence, from research papers to firsthand human experiences, into structured concepts and statistical conclusions.",
  buttonText: "Open Concept AI",
  buttonLink: "https://conceptai.spiritualdata.org",
  subHead: "What is Concept AI?",
  subDesc:
    "Concept AI organizes evidence on a concept graph database that spans multiple domains. You define concepts, add evidence, and ask questions. The system estimates the statistical truth of each conclusion and records every step it took, so you can audit exactly how each answer was reached.",
};

export const capabilitiesData: capabilitiesData[] = [
  {
    title: "Knowledge Graph Explorer",
    description:
      "An interactive force-directed map of domains and concepts. Explore how ideas connect across domains, follow the relationships between concepts, and see where the evidence clusters. The graph makes cross-domain links visible instead of leaving them buried in separate literatures.",
    image: cors1,
    icon: <HubIcon fontSize="large" />,
  },
  {
    title: "Statistical Truth Estimation",
    description:
      "Concept AI weighs the evidence behind each concept and produces statistical conclusions rather than opinions. As new evidence is added, conclusions update, so the numbers reflect the current state of the evidence instead of a snapshot from the past.",
    image: cors2,
    icon: <FunctionsIcon fontSize="large" />,
  },
  {
    title: "Multi-Domain Support",
    description:
      "Work across many domains on a single concept graph database. Concepts link across domain boundaries, so findings in one field can inform questions in another, and the same evidence base serves researchers coming from different disciplines.",
    image: cors3,
    icon: <AutoGraphIcon fontSize="large" />,
  },
  {
    title: "Full Transparency",
    description:
      "Every conclusion surfaces its complete action trace. Open any answer and audit each step the system took to reach it: the evidence it read, the concepts it consulted, and the reasoning it applied. Nothing is hidden behind a black box.",
    image: cors4,
    icon: <FactCheckIcon fontSize="large" />,
  },
  {
    title: "Evidence of Every Kind",
    description:
      "Bring in research papers, datasets, and firsthand human experiences. Concept AI structures all of it into concepts and relationships, so quantitative results and qualitative accounts can be weighed together within the same statistical framework.",
    image: cors5,
    icon: <LanIcon fontSize="large" />,
  },
  {
    title: "Dataset Exports & API",
    description:
      "Subscribers can export datasets from the concept graph for their own analysis, publications, and pipelines. A programmatic API is on the way and is currently accessible through a waitlist, so you can plan integrations before general availability.",
    image: cors6,
    icon: <DownloadIcon fontSize="large" />,
  },
];

export const applicationsData = [
  {
    id: 1,
    image: image1,
    title: "Parapsychology",
    description:
      "Identifies complex replication factors, refines theories, operationally defines psi, and predicts replication success rates.",
  },
  {
    id: 2,
    image: image2,
    title: "Exceptional Human Experiences",
    description:
      "Analyses Near-Death Experiences, Spiritually Transformative Experiences, and Out-of-Body Experiences to uncover cultural, psychological, and phenomenological patterns.",
  },
  {
    id: 3,
    image: image3,
    title: "Multidisciplinary Science",
    description:
      "Integrates data across psychology, neuroscience, physics, medicine, other natural sciences, and philosophy.",
  },
];

export const researchData: researchData[] = [
  { type: "single", content: "Create domains and define concepts" },
  {
    type: "double",
    content: [
      "Add evidence, from papers to firsthand experiences",
      "Ask questions, get statistical conclusions",
    ],
  },
  {
    type: "title",
    title: "RESEARCH WORKSPACE",
    subtitle: "Concept AI gives researchers one place to:",
  },
  {
    type: "double",
    content: [
      "Audit any conclusion through its action trace",
      "Explore the knowledge graph across domains",
    ],
  },
  { type: "single", content: "Export datasets (for subscribers)" },
];

export const sellingPointsData: SellingPoint[] = [
  {
    title: "Statistical Truth Estimation",
    description:
      "Evidence, from research papers to firsthand human experiences, becomes structured concepts and statistical conclusions.",
    icon: <FunctionsIcon sx={{ fontSize: 48, color: "#fff" }} />,
    gradient: "linear-gradient(135deg, #7B5CFF, #6A4DFF)",
  },
  {
    title: "Full Transparency",
    description:
      "Every conclusion carries its complete action trace, so you can audit how the answer was reached.",
    icon: <SecurityIcon sx={{ fontSize: 48, color: "#fff" }} />,
    gradient: "linear-gradient(135deg, #FFB347, #FF9A00)",
  },
  {
    title: "Knowledge Graph Explorer",
    description:
      "An interactive force-directed map of domains and concepts, showing how ideas connect across fields.",
    icon: <HubIcon sx={{ fontSize: 48, color: "#fff" }} />,
    gradient: "linear-gradient(135deg, #FF6B6B, #FF4C4C)",
  },
  {
    title: "Multi-Domain by Design",
    description:
      "One concept graph database spans many domains, linking evidence and ideas across field boundaries.",
    icon: <TrackChangesIcon sx={{ fontSize: 48, color: "#fff" }} />,
    gradient: "linear-gradient(135deg, #4FC3F7, #00B0FF)",
  },
  {
    title: "Built for Working Researchers",
    description:
      "Start free, upgrade for dataset exports, and join the waitlist for the coming programmatic API.",
    icon: <GroupWorkIcon sx={{ fontSize: 48, color: "#fff" }} />,
    gradient: "linear-gradient(135deg, #FF6FD8, #FF3CAC)",
  },
];

export const callToAction: callToAction = {
  title: "Ready to Research with ",
  highlight: "Concept AI",
  suffix: "...?",
  subtitle:
    "Start free. The Researcher plan is $29/month or $290/year, per seat for teams.",
  additionalSubtitle:
    "Credit packs: $15 for 1,000 credits, $60 for 5,000, or $200 for 25,000.",
  buttonText: "Open Concept AI",
  buttonLink: "https://conceptai.spiritualdata.org",
  footerNote: "Free tier to start",
  additionalFooterNote1: "API access coming soon, join the waitlist",
  additionalFooterNote2: "Your data stays private",
};
