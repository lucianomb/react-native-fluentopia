import { useUser } from "@clerk/expo";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ContinueLearningBanner } from "@/components/ContinueLearningBanner";
import { DailyGoalCard } from "@/components/DailyGoalCard";
import { HomeHeader } from "@/components/HomeHeader";
import { TodayPlanList, type PlanItem } from "@/components/TodayPlanList";
import { units } from "@/data/units";
import { useLanguageStore } from "@/store/languageStore";

const DAILY_GOAL_XP = 20;
const CURRENT_XP = 15;
const STREAK_COUNT = 12;
const CURRENT_UNIT_ORDER = 3;

const TODAY_PLAN: PlanItem[] = [
  {
    id: "1",
    title: "Lesson",
    subtitle: "At the café",
    icon: "menu-book",
    iconBg: "#6c4ef5",
    completed: true,
  },
  {
    id: "2",
    title: "AI Conversation",
    subtitle: "Talk about your day",
    icon: "headphones",
    iconBg: "#6c4ef5",
    completed: false,
  },
  {
    id: "3",
    title: "New words",
    subtitle: "10 words",
    icon: "chat-bubble",
    iconBg: "#ef4444",
    completed: false,
  },
];

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguage } = useLanguageStore();

  const currentUnit =
    units.find(
      (u) =>
        u.languageId === selectedLanguage?.id && u.order === CURRENT_UNIT_ORDER,
    ) ?? units.find((u) => u.languageId === selectedLanguage?.id);

  const xpPercent = Math.min((CURRENT_XP / DAILY_GOAL_XP) * 100, 100);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f7fb" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 24,
          gap: 16,
        }}
      >
        <HomeHeader
          selectedLanguage={selectedLanguage}
          firstName={user?.firstName}
          streakCount={STREAK_COUNT}
        />
        <DailyGoalCard
          currentXP={CURRENT_XP}
          dailyGoalXP={DAILY_GOAL_XP}
          xpPercent={xpPercent}
        />
        <ContinueLearningBanner
          selectedLanguage={selectedLanguage}
          currentUnit={currentUnit}
          currentUnitOrder={CURRENT_UNIT_ORDER}
        />
        <TodayPlanList plan={TODAY_PLAN} />
      </ScrollView>
    </SafeAreaView>
  );
}
