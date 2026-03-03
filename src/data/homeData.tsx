import PublicIcon from "@mui/icons-material/Public";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorageIcon from "@mui/icons-material/Storage";
import { JSX } from "react";
import whyChooseUsImage from "../assets/images/whychooseus/choose.webp";

interface floatersData {
  text: string;
  icon: JSX.Element;
  link: string;
}
export interface WhyChooseUsItem {
  title: string;
  description: string;
}

export type WhyChooseUsMedia =
  | string
  | {
      type: "image" | "video";
      src: string;
      poster?: string;
    };

export interface WhyChooseUsData {
  overline: string;
  heading: string;
  media: WhyChooseUsMedia;
  reasons: WhyChooseUsItem[];
}

export const floatersData: floatersData[] = [
  {
    text: "Crisis We Are Dealing With",
    icon: <PublicIcon fontSize="inherit" />,
    link: "/crisis",
  },
  {
    text: "Truth Estimation AI",
    icon: <PublicIcon fontSize="inherit" />,
    link: "/initiatives/estimating-truth",
  },
  {
    text: "Change We Are Bringing",
    icon: <PsychologyIcon fontSize="inherit" />,
    link: "/change",
  },
  {
    text: "Quest Product",
    icon: <StorageIcon fontSize="inherit" />,
    link: "/products/quest",
  },
];

export const whyChooseUsData: WhyChooseUsData = {
  overline: "Why Choose Us",
  heading: "Powered by Evidence\nBuilt for Spiritual Clarity",
  media: whyChooseUsImage,
  reasons: [
    {
      title: "Unbiased Truth Estimation",
      description:
        "Our AI evaluates claims based on weighted evidence - not belief, authority, or popularity - giving you clarity without dogma. We tackle bias by automating diverse expert perspectives on every data point.",
    },
    {
      title: "Data from All Perspectives",
      description:
        "We aggregate human experiences, scientific studies, and overlooked data sources to ensure no valuable insight is left behind, while critically evaluating reliability.",
    },
    {
      title: "Transparency at Every Step",
      description:
        "The algorithms and data used to reach conclusions are shared openly so you can review - and decide for yourself.",
    },
    {
      title: "Mission-Driven, Not Institution-Funded",
      description:
        "We\u2019re a nonprofit powered by people - not corporations - committed to truth and spiritual autonomy.",
    },
  ],
};
