import type { Language } from "@/types/learning";

export const languages: Language[] = [
  {
    id: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "https://flagcdn.com/w320/es.png",
    difficulty: "beginner",
    totalUnits: 3,
    learners: "28.4M",
  },
  {
    id: "fr",
    name: "French",
    nativeName: "Français",
    flag: "https://flagcdn.com/w320/fr.png",
    difficulty: "beginner",
    totalUnits: 3,
    learners: "19.4M",
  },
  {
    id: "jp",
    name: "Japanese",
    nativeName: "日本語",
    flag: "https://flagcdn.com/w320/jp.png",
    difficulty: "intermediate",
    totalUnits: 2,
    learners: "12.7M",
  },
  // {
  //   id: "ko",
  //   name: "Korean",
  //   nativeName: "한국어",
  //   flag: "https://flagcdn.com/w320/kr.png",
  //   difficulty: "intermediate",
  //   totalUnits: 2,
  //   learners: "9.3M",
  // },
  {
    id: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "https://flagcdn.com/w320/de.png",
    difficulty: "beginner",
    totalUnits: 2,
    learners: "8.1M",
  },
  // {
];

export function getLanguageById(id: string): Language | undefined {
  return languages.find((lang) => lang.id === id);
}
