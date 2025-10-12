import cors1 from "../assets/images/products/conceptAiCor1.webp"
import cors2 from "../assets/images/products/conceptAiCor2.webp"
import cors3 from "../assets/images/products/conceptAiCor3.webp"
import cors4 from "../assets/images/products/conceptAiCor4.webp"
import cors5 from "../assets/images/products/conceptAiCor5.webp"
import cors6 from "../assets/images/products/conceptAiCor6.webp"
import image1 from "../assets/images/products/app1.webp";
import image2 from "../assets/images/products/app2.webp";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SecurityIcon from "@mui/icons-material/Security";
import image3 from "../assets/images/products/app3.webp";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import FunctionsIcon from "@mui/icons-material/Functions";
import HubIcon from "@mui/icons-material/Hub";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import LanIcon from "@mui/icons-material/Lan";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import GroupWorkIcon from "@mui/icons-material/GroupWork";

interface heroData {
  title: string;
  description: string;
  buttonText: string;
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
    "Multidisciplinary, bias-resistant AI for hypothesis testing, knowledge integration, and research collaboration.",
  buttonText: "JOIN THE WAITLIST",
  subHead: "What is Concept AI?",
  subDesc:
    "Concept AI is an advanced research framework that unites empirical data, human experiences, and philosophical ideas into a single, bias-resistant knowledge system. Researchers can define concepts, ask questions, and receive context-aware, probabilistic answers - empowering deeper insights across diverse domains.",
};

export const capabilitiesData: capabilitiesData[] = [
  {
    title: "Knowledge Graph Representation",
    description:
      "Integrates research papers, datasets, experiential reports, and qualitative accounts into a richly connected network of concepts, relationships, and evidence. This structure enables cross-referencing between disciplines, linking abstract ideas to concrete data, and revealing patterns that would be difficult to detect in isolated studies.",
    image: cors1,
    icon: <HubIcon fontSize="large" />,
  },
  {
    title: "Statistical & Probabilistic Reasoning",
    description:
      "Uses Bayesian inference and graph-based probability modeling to evaluate hypotheses with transparent confidence scoring. Incorporates prior knowledge, updates dynamically as new evidence is added, and accounts for uncertainty, ensuring that conclusions remain accurate and relevant over time.",
    image: cors2,
    icon: <FunctionsIcon fontSize="large" />,
  },
  {
    title: "Multidisciplinary Integration",
    description:
      "Seamlessly merges insights from sciences, humanities, and metaphysics into a unified framework. Enables researchers to find meaningful connections between fields, such as parallels between cognitive neuroscience and philosophy of mind, or between ecological modeling and network theory.",
    image: cors3,
    icon: <AutoGraphIcon fontSize="large" />,
  },
  {
    title: "Bias Reduction",
    description:
      "Mitigates publication bias, researcher bias, and systemic methodological bias by incorporating unpublished and grey literature, generating objective hypotheses, simulating blind analyses, and applying automated peer review checks — resulting in a more reliable evidence base.",
    image: cors4,
    icon: <FactCheckIcon fontSize="large" />,
  },
  {
    title: "Diverse Evidence Integration",
    description:
      "Combines quantitative results, qualitative narratives, theoretical arguments, historical records, simulations, and big data analytics into a single evaluative model. Applies contextual weighting so that each evidence type is considered appropriately for the domain and research question.",
    image: cors5,
    icon: <LanIcon fontSize="large" />,
  },
  {
    title: "Paradigm Ranking",
    description:
      "Statistically evaluates and scores competing paradigms by measuring how well they explain the available evidence. The system operates across three hierarchical levels: hypotheses are validated directly against evidence, theories are scored based on supporting hypotheses that align with their explanations, and paradigms are ranked according to theories that match their foundational assumptions — revealing which worldviews explain the most data.",
    image: cors6,
    icon: <PsychologyIcon fontSize="large" />,
  },
];

export const applicationsData = [
  {
    id: 1,
    image: image1,
    title: "Application Parapsychology",
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
      "Integrates data across psychology, neuroscience, physics, mathematics, law, and environmental sciences.",
  },
];

export const researchData: researchData[] = [
  { type: "single", content: "Add new domains and concepts" },
  {
    type: "double",
    content: [
      "Upload datasets with metadata",
      "Ask research questions with domain-specific filters",
    ],
  },
  {
    type: "title",
    title: "RESEARCH INTERFACE",
    subtitle: "The Spiritual Data Research Interface enables researchers to:",
  },
  {
    type: "double",
    content: [
      "Generate automated hypotheses",
      "Review results via semantic maps and statistical dashboards",
    ],
  },
  { type: "single", content: "Export data, visualisations, and reports" },
];

export const sellingPointsData: SellingPoint[] = [
  {
    title: "Holistic Knowledge Graph",
    description:
      "Uniting diverse evidence and human experience into a comprehensive, interconnected framework.",
    icon: <HubIcon sx={{ fontSize: 48, color: "#fff" }} />,
    gradient: "linear-gradient(135deg, #7B5CFF, #6A4DFF)",
  },
  {
    title: "Bias-Resistant Methodology",
    description:
      "Ensuring objectivity and integrity across every stage of the research lifecycle.",
    icon: <SecurityIcon sx={{ fontSize: 48, color: "#fff" }} />,
    gradient: "linear-gradient(135deg, #FFB347, #FF9A00)",
  },
  {
    title: "Multi-Perspective Integration",
    description:
      "Blending scientific, philosophical, and cultural insights for richer understanding.",
    icon: <LightbulbIcon sx={{ fontSize: 48, color: "#fff" }} />,
    gradient: "linear-gradient(135deg, #FF6B6B, #FF4C4C)",
  },
  {
    title: "Context-Aware Outputs",
    description:
      "Delivering results that specify applicability boundaries for precise use.",
    icon: <TrackChangesIcon sx={{ fontSize: 48, color: "#fff" }} />,
    gradient: "linear-gradient(135deg, #4FC3F7, #00B0FF)",
  },
  {
    title: "Collaborative & Adaptive Framework",
    description:
      "Customisable structure with continuous updates and evolving hypotheses.",
    icon: <GroupWorkIcon sx={{ fontSize: 48, color: "#fff" }} />,
    gradient: "linear-gradient(135deg, #FF6FD8, #FF3CAC)",
  },
];

export const callToAction: callToAction = {
  title: "Join the Waitlist for ",
  highlight: "Concept AI",
  suffix: "...?",
  subtitle:
    "Be the first to access Concept AI and collaborate with leading researchers",
  additionalSubtitle:
    "in building the next generation of scientific knowledge integration.",
  buttonText: "Join the Waitlist",
  buttonLink: "/sign-up",
  footerNote: "",
  additionalFooterNote1: "",
  additionalFooterNote2: "Your data stays private",
};
