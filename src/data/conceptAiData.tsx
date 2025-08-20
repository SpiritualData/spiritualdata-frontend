import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import SecurityIcon from "@mui/icons-material/Security";
import cors1 from "../assets/Images/Products/concept/image1.png"
import cors2 from "../assets/Images/Products/concept/image2.png"
import cors3 from "../assets/Images/Products/concept/image3.png"
import cors4 from "../assets/Images/Products/concept/image4.png"
import cors5 from "../assets/Images/Products/concept/image5.png"
import cors6 from "../assets/Images/Products/concept/image6.png"

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
    image: cors1
  },
  {
    title: "Statistical & Probabilistic Reasoning",
    description:
        "Uses Bayesian inference and graph-based probability modeling to evaluate hypotheses with transparent confidence scoring. Incorporates prior knowledge, updates dynamically as new evidence is added, and accounts for uncertainty, ensuring that conclusions remain accurate and relevant over time.",
      image: cors2
    },
    {
      title: "Multidisciplinary Integration",
      description:
        "Seamlessly merges insights from sciences, humanities, and metaphysics into a unified framework. Enables researchers to find meaningful connections between fields, such as parallels between cognitive neuroscience and philosophy of mind, or between ecological modeling and network theory.",
      image: cors3
    },
    {
      title: "Bias Reduction",
      description:
        "Mitigates publication bias, researcher bias, and systemic methodological bias by incorporating unpublished and grey literature, generating objective hypotheses, simulating blind analyses, and applying automated peer review checks — resulting in a more reliable evidence base.",
      image: cors4
    },
    {
      title: "Diverse Evidence Integration",
      description:
        "Combines quantitative results, qualitative narratives, theoretical arguments, historical records, simulations, and big data analytics into a single evaluative model. Applies contextual weighting so that each evidence type is considered appropriately for the domain and research question.",
      image: cors5
    },
    {
      title: "Specialised Domain Support",
      description:
        "Provides advanced analytical tools tailored to specific research areas, such as parapsychology replication studies, theory development for psi phenomena, and mapping of exceptional human experiences like NDEs, STEs, and OBEs — all within the same rigorous, bias-resistant framework.",
      image: cors6
    }  
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
