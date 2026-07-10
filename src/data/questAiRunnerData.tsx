import { JSX } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import SecurityIcon from "@mui/icons-material/Security";
import HubIcon from "@mui/icons-material/Hub";
import ExtensionIcon from "@mui/icons-material/Extension";
import DescriptionIcon from "@mui/icons-material/Description";

interface heroData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  subHead: string;
  subDesc: string;
}

interface featuresData {
  icon: JSX.Element;
  title: string;
  subHead: string;
  desc: string;
}

interface missionData {
  badge: string;
  title: string;
  description: string;
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
  title: "Quest AI Runner",
  description:
    "Spiritual Data's open source AI task orchestrator and executor. It is the brain that runs Quest's queued AI tasks in production.",
  buttonText: "View on GitHub",
  buttonLink: "https://github.com/SpiritualData/quest-ai-runner",
  subHead: "What is Quest AI Runner?",
  subDesc:
    "Quest AI Runner picks up the AI tasks your team enqueues in Quest and executes them. It grounds itself in the context of each task, reasons through the work, holds itself to a written goal standard, confirms before acting, and escalates to a human when a decision needs one. It is domain-free by design: organization-specific behavior comes from the configuration and adapters you supply.",
};

export const featuresData: featuresData[] = [
  {
    icon: <SettingsIcon />,
    title: "Domain-Free by Design",
    subHead: "One runner, any organization.",
    desc: "The runner carries no organization-specific logic. It knows how to ground itself in context, reason, and work to a standard. Your configuration and adapters define how it behaves for your team.",
  },
  {
    icon: <FactCheckIcon />,
    title: "Written Goal Standards",
    subHead: "It knows what done looks like.",
    desc: "Every task is executed against a written goal standard, so the runner works toward a defined, checkable result instead of a vague instruction.",
  },
  {
    icon: <SecurityIcon />,
    title: "Confirm, Then Escalate",
    subHead: "Humans stay in the loop.",
    desc: "The runner confirms before acting, and when a decision genuinely needs a person it escalates to a human instead of guessing. Consequential calls stay with your team.",
  },
  {
    icon: <HubIcon />,
    title: "Intelligent Parallel Context",
    subHead: "The right context for each task.",
    desc: "The runner assembles the context each task needs efficiently, and it handles many tasks in parallel without letting their contexts bleed into each other.",
  },
  {
    icon: <ExtensionIcon />,
    title: "Model Registry",
    subHead: "Multiple providers and models.",
    desc: "A model registry supports multiple AI providers and models, so you choose which model handles which work and can switch without rewriting the runner.",
  },
  {
    icon: <DescriptionIcon />,
    title: "Documents as Context",
    subHead: "Files become working material.",
    desc: "Documents and files uploaded with a task become context the runner reads and uses while executing, so the work reflects the material your team actually provided.",
  },
];

export const missionData: missionData = {
  badge: "Open Source",
  title: "Built in production, released for everyone",
  description:
    "Spiritual Data built Quest AI Runner to run its own team's AI tasks in production, and it still does that job every day. It is released as open source under the Apache 2.0 license, so any team running AI tasks against Quest can use it, read every line, and adapt it with their own configuration and adapters.",
};

export const callToAction: callToAction = {
  title: "Ready to Explore ",
  highlight: "Quest AI Runner",
  suffix: "...?",
  subtitle:
    "Quest AI Runner is free and open source under the Apache 2.0 license.",
  additionalSubtitle:
    "It executes the AI tasks your team enqueues in Quest.",
  buttonText: "View on GitHub",
  buttonLink: "https://github.com/SpiritualData/quest-ai-runner",
  footerNote: "Free and open source",
  additionalFooterNote1: "Apache 2.0 license",
  additionalFooterNote2: "Pairs with Quest, where teams enqueue their AI tasks",
};
