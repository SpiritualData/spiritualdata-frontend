export interface GalaxyEntry {
  id: string;
  name: string;
  position: [number, number, number];
  color: string;
  scale?: number;
  theme?: {
    bg?: string;
    glow?: string;
    mood?: string;
  };
  planets: string[];
}

export const GALAXIES: GalaxyEntry[] = [
  {
    id: "personal",
    name: "Personal Growth & Inner Conflicts",
    position: [-4, 0, -6],
    color: "#ff8a65",
    scale: 1.4,
    theme: { bg: "#1e0b06", glow: "#ffab91", mood: "introspective" },
    planets: [
      "Self-Awareness & Mindfulness",
      "Ego, Identity, and Detachment",
      "Guilt, Shame & Forgiveness",
      "Fear, Doubt & Faith",
      "Purpose and Meaning",
      "Healing from Trauma",
    ],
  },
  {
    id: "relationships",
    name: "Relationships & Connection",
    position: [0, 1.5, -8],
    color: "#90caf9",
    scale: 1.6,
    theme: { bg: "#071428", glow: "#90caf9", mood: "connected" },
    planets: [
      "Love & Compassion",
      "Boundaries & Energy Exchange",
      "Family & Generational Patterns",
      "Friendship, Community & Loneliness",
      "Romantic Relationships & Soul Connections",
    ],
  },
  {
    id: "transitions",
    name: "Life Events & Transitions",
    position: [5, -1, -7],
    color: "#b39ddb",
    scale: 1.5,
    theme: { bg: "#140418", glow: "#b39ddb", mood: "transformative" },
    planets: [
      "Birth, Death & Grief",
      "Loss, Failure & Renewal",
      "Career, Success & Spiritual Purpose",
      "Health Crises & Recovery",
      "Midlife Awakening / Dark Night of the Soul",
    ],
  },
];
