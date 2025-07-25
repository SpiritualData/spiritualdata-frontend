import InsightsIcon from "@mui/icons-material/Insights";
import PublicIcon from "@mui/icons-material/Public";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorageIcon from "@mui/icons-material/Storage";
import { JSX } from "react";

interface floatersData {
    text: string,
    icon: JSX.Element,
    link: string,
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
    link: "/change",
  },
  {
    text: "Change We Are Bringing",
    icon: <PsychologyIcon fontSize="inherit" />,
    link: "/change",
  },
  {
    text: "Spiritual Crisis Support",
    icon: <StorageIcon fontSize="inherit" />,
    link: "/crisis",
  },
];
