import image1 from "../assets/images/about/sliderImage1.webp";
import image2 from "../assets/images/about/sliderImage2.webp";
import image3 from "../assets/images/about/sliderImage3.webp";
import image4 from "../assets/images/about/sliderImage4.webp";
import image5 from "../assets/images/products/questId.webp";
import image6 from "../assets/images/products/conceptAiId.webp";
import questCardImage from "../assets/images/products/questId.webp";
import conceptAiCardImage from "../assets/images/products/conceptAiId.webp";

export const experimentalProductData = [
  {
    name: "outcome-chat",
    id: 1,
    label: "Transforming Conversations with AI: Outcome-Driven Chatbots",
    description:
      " leverages AI to facilitate intelligent, goal-oriented conversations, helping businesses enhance customer experience and streamline support workflows through outcome-based dialogue models.",
    subDesc: "Outcome-Chat",
    image: image1,
    logo1: "/assets/ProductCardImages/react.webp",
    logo2: "/assets/ProductCardImages/nodeJs.webp",
    logo3: "/assets/ProductCardImages/aws.webp",
    tags: [
      "Healthcare & Life Sciences",
      "Finance & Fintech",
      "Media & Entertainment",
      "Education & E-learning",
    ],
    expert: ["Web Development", "AI & NLP", "Business Process Automation"],
  },
  {
    name: "research-Chat",
    id: 2,
    label: "AI-Enhanced Research Assistant for Smarter Insights",
    description:
      " is an AI-powered assistant built to support researchers by providing context-aware suggestions, summarizations, and literature mapping across a wide range of disciplines.",
    subDesc: "Research-Chat",
    image: image2,
    logo1: "/assets/ProductCardImages/typescript.webp",
    logo2: "/assets/ProductCardImages/nextJs.webp",
    logo3: "/assets/ProductCardImages/mui.webp",
    tags: [
      "Education & E-learning",
      "Data Science & AI",
      "Healthcare & Life Sciences",
    ],
    expert: ["Web Development", "AI & NLP", "Cloud"],
  },
  {
    name: "general-Chat",
    id: 3,
    label: "Multi-Purpose AI Chat Platform for Everyday Conversations",
    description:
      " is a versatile conversational AI platform built to handle diverse topics ranging from personal productivity to customer service, designed for smooth and responsive interaction.",
    subDesc: "General-Chat",
    image: image3,
    logo1: "/assets/ProductCardImages/python.webp",
    logo2: "/assets/ProductCardImages/FastAPI.webp",
    logo3: "/assets/ProductCardImages/js.webp",
    tags: [
      "Retail & E-Commerce",
      "Media & Entertainment",
      "Logistic & Transport",
    ],
    expert: [
      "Web Development",
      "Mobile App Development",
      "Internet of Things (IoT)",
    ],
  },
  {
    name: "mental-health-chat",
    id: 4,
    label: "Compassionate AI Support for Mental Wellness",
    description:
      " offers empathetic AI-driven mental health support with tools for stress tracking, guided journaling, and CBT-based interaction modules tailored to individual well-being.",
    subDesc: "Mental-Health-Chat",
    image: image4,
    logo1: "/assets/ProductCardImages/nodeJs.webp",
    logo2: "/assets/ProductCardImages/nextJs.webp",
    logo3: "/assets/ProductCardImages/aws.webp",
    tags: [
      "Healthcare & Life Sciences",
      "Education & E-learning",
      "Data Science & AI",
    ],
    expert: ["Web Development", "AI & NLP", "DevOps", "Cloud"],
  },
];

export const availableProductData = [
  {
    name: "quest",
    id: 3,
    label: "AI-Powered Spiritual and Philosophical Discovery",
    description:
      " is an AI tool that helps users explore spiritual, philosophical, and existential questions, offering multi-perspective insights and deeper understanding.",
    subDesc: "Quest",
    image: image5,
    logo1: "/assets/ProductCardImages/python.webp",
    logo2: "/assets/ProductCardImages/fastapi.webp",
    logo3: "/assets/ProductCardImages/aws.webp",
    tags: [
      "Philosophy & Spirituality",
      "Education & E-learning",
      "Research & Exploration",
    ],
    expert: ["AI & NLP", "Data Visualization", "Knowledge Mapping"],
  },
  {
    name: "concept-ai",
    id: 4,
    label: "Transforming Abstract Ideas into Structured Understanding",
    description:
      " simplifies complex ideas using advanced models, turning abstract concepts into clear, structured representations for thinkers and educators.",
    subDesc: "Concept AI",
    image: image6,
    logo1: "/assets/ProductCardImages/javascript.webp",
    logo2: "/assets/ProductCardImages/nextJs.webp",
    logo3: "/assets/ProductCardImages/mui.webp",
    tags: ["Innovation & Research", "Cognitive Sciences", "Data Science & AI"],
    expert: ["AI & NLP", "Data Processing", "Knowledge Structuring"],
  },
];

export const productCardData = [
  {
    id: 1,
    title: "Quest for personal transformation",
    description:
      "Turn your aspirations into achievements through AI-guided accountability, personalized roadmaps, and intelligent support for spiritual growth, wellness, and life goals.",
    image: questCardImage,
    link: "/products/quest",
    author: "Spiritual Data",
    buttonText: "Learn about Quest",
  },
  {
    id: 2,
    title: "Concept AI for Researchers",
    description:
      "Navigate complex research domains with bias-resistant AI that integrates diverse evidence, evaluates hypotheses probabilistically, and reveals scientific consensus across disciplines.",
    image: conceptAiCardImage,
    link: "/products/concept-ai",
    author: "Spiritual Data",
    buttonText: "Learn about Concept AI",
  },
];
