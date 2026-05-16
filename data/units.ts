import type { Unit } from "@/types/learning";

export const units: Unit[] = [
  // ─── Spanish ───────────────────────────────────────────────────────────────
  {
    id: "es-unit-1",
    languageId: "es",
    title: "Greetings & Basics",
    description: "Say hello, introduce yourself, and handle simple small talk.",
    order: 1,
    color: "#FF6B6B",
  },
  {
    id: "es-unit-2",
    languageId: "es",
    title: "Numbers & Time",
    description: "Count to 100, tell the time, and talk about days and dates.",
    order: 2,
    color: "#4ECDC4",
  },
  {
    id: "es-unit-3",
    languageId: "es",
    title: "Food & Dining",
    description: "Order at a restaurant, describe food, and talk about meals.",
    order: 3,
    color: "#FFE66D",
  },

  // ─── French ────────────────────────────────────────────────────────────────
  {
    id: "fr-unit-1",
    languageId: "fr",
    title: "Greetings & Basics",
    description: "Introduce yourself and hold basic conversations in French.",
    order: 1,
    color: "#A8DADC",
  },
  {
    id: "fr-unit-2",
    languageId: "fr",
    title: "Getting Around",
    description: "Ask for directions, use transportation, and navigate a city.",
    order: 2,
    color: "#457B9D",
  },
  {
    id: "fr-unit-3",
    languageId: "fr",
    title: "Shopping & Money",
    description: "Shop in stores, ask prices, and handle simple transactions.",
    order: 3,
    color: "#E63946",
  },

  // ─── Japanese ──────────────────────────────────────────────────────────────
  {
    id: "jp-unit-1",
    languageId: "jp",
    title: "Hiragana Basics",
    description: "Learn the core hiragana characters and basic pronunciation.",
    order: 1,
    color: "#F4A261",
  },
  {
    id: "jp-unit-2",
    languageId: "jp",
    title: "Greetings & Politeness",
    description: "Greet people correctly and use polite expressions.",
    order: 2,
    color: "#E76F51",
  },

  // ─── German ────────────────────────────────────────────────────────────────
  {
    id: "de-unit-1",
    languageId: "de",
    title: "Greetings & Basics",
    description: "Start conversations in German and introduce yourself.",
    order: 1,
    color: "#2A9D8F",
  },
  {
    id: "de-unit-2",
    languageId: "de",
    title: "Family & People",
    description: "Describe family members and talk about people around you.",
    order: 2,
    color: "#264653",
  },
];

export function getUnitsByLanguage(languageId: string): Unit[] {
  return units
    .filter((unit) => unit.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}

export function getUnitById(id: string): Unit | undefined {
  return units.find((unit) => unit.id === id);
}
