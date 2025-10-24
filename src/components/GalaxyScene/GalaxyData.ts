export interface GalaxyEntry {
  id: string;
  name: string;
  position: [number, number, number];
  color: string;
  planets: string[];
}

export const GALAXIES: GalaxyEntry[] = [
  {
    id: "personal",
    name: "Personal Growth & Inner Conflicts",
    position: [-4, 0, -6],
    color: "#ff8a65",
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
    planets: [
      "Birth, Death & Grief",
      "Loss, Failure & Renewal",
      "Career, Success & Spiritual Purpose",
      "Health Crises & Recovery",
      "Midlife Awakening / Dark Night of the Soul",
    ],
  },
];
