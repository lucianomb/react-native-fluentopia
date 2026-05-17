import { Image } from "@/tw/image";
import { useUser } from "@clerk/expo";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { units } from "@/data/units";
import { useLanguageStore } from "@/store/languageStore";

const DAILY_GOAL_XP = 20;
const CURRENT_XP = 15;
const STREAK_COUNT = 12;
const CURRENT_UNIT_ORDER = 3;

const TODAY_PLAN = [
  {
    id: "1",
    title: "Lesson",
    subtitle: "At the café",
    icon: "menu-book" as const,
    iconBg: "#6c4ef5",
    completed: true,
  },
  {
    id: "2",
    title: "AI Conversation",
    subtitle: "Talk about your day",
    icon: "headphones" as const,
    iconBg: "#6c4ef5",
    completed: false,
  },
  {
    id: "3",
    title: "New words",
    subtitle: "10 words",
    icon: "chat-bubble" as const,
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
        {/* ── Header ──────────────────────────────────────────────────── */}
        <View className="flex-row items-center justify-between pt-2 pb-1">
          <View className="flex-row items-center gap-2.5">
            {selectedLanguage?.flag ? (
              <Image
                source={{ uri: selectedLanguage.flag }}
                className="w-9 h-9 rounded-full"
              />
            ) : (
              <View className="w-9 h-9 rounded-full bg-border" />
            )}
            <Text className="font-poppins-semibold text-base text-[#0d132b]">
              Hola, {user?.firstName ?? "there"}! 👋
            </Text>
          </View>
          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <Image source={images.streakFire} className="w-5.5 h-5.5" />
              <Text className="font-poppins-semibold text-[15px] text-[#0d132b]">
                {STREAK_COUNT}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              className="w-9 h-9 items-center justify-center"
            >
              <MaterialIcons
                name="notifications-none"
                size={24}
                color="#0d132b"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Daily Goal Card ──────────────────────────────────────────── */}
        <View className="flex-row items-center bg-[#fdf6ee] rounded-[20px] px-5 py-4.5 overflow-hidden">
          <View className="flex-1 gap-1.5">
            <Text className="font-[Poppins-Regular] text-[13px] text-[#6b7280]">
              Daily goal
            </Text>
            <View className="flex-row items-baseline">
              <Text className="font-poppins-bold text-[28px] text-[#0d132b]">
                {CURRENT_XP}
              </Text>
              <Text className="font-[Poppins-Regular] text-sm text-[#6b7280]">
                {" "}
                / {DAILY_GOAL_XP} XP
              </Text>
            </View>
            <View className="h-2 bg-[#f0e6d3] rounded mt-1 overflow-hidden">
              <View
                className="h-full bg-streak rounded"
                style={{ width: `${xpPercent}%` }}
              />
            </View>
          </View>
          <Image source={images.treasure} className="w-17.5 h-17.5 ml-3" />
        </View>

        {/* ── Continue Learning Banner ─────────────────────────────────── */}
        <View className="rounded-[20px] bg-brand-purple overflow-hidden flex-row items-end min-h-40">
          <View className="flex-1 p-5 gap-1">
            <Text className="font-[Poppins-Regular] text-[13px] text-white/80">
              Continue learning
            </Text>
            <Text className="font-poppins-bold text-[26px] text-white leading-8">
              {selectedLanguage?.name ?? "Spanish"}
            </Text>
            <Text className="font-[Poppins-Regular] text-[13px] text-white/80 mb-3">
              A1 • Unit {currentUnit?.order ?? CURRENT_UNIT_ORDER}
            </Text>
            <TouchableOpacity
              className="border-[1.5px] border-white rounded-3xl px-5.5 py-2 self-start"
              activeOpacity={0.85}
            >
              <Text className="font-poppins-semibold text-sm text-white">
                Continue
              </Text>
            </TouchableOpacity>
          </View>
          <Image source={images.palace} className="w-35 h-37.5 -mr-1" />
        </View>

        {/* ── Today's Plan ─────────────────────────────────────────────── */}
        <View className="gap-3">
          <View className="flex-row items-center justify-between">
            <Text className="font-poppins-bold text-[17px] text-[#0d132b]">
              Today's plan
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text className="font-poppins-semibold text-sm text-[#6c4ef5]">
                View all
              </Text>
            </TouchableOpacity>
          </View>

          <View className="bg-white rounded-[20px] px-4 py-1">
            {TODAY_PLAN.map((item, index) => (
              <View key={item.id}>
                <View className="flex-row items-center py-3.5 gap-3.5">
                  <View
                    className="w-11 h-11 rounded-xl items-center justify-center"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <MaterialIcons name={item.icon} size={20} color="#ffffff" />
                  </View>
                  <View className="flex-1 gap-0.5">
                    <Text className="font-poppins-semibold text-sm text-[#0d132b]">
                      {item.title}
                    </Text>
                    <Text className="font-[Poppins-Regular] text-xs text-[#6b7280]">
                      {item.subtitle}
                    </Text>
                  </View>
                  {item.completed ? (
                    <View className="w-7 h-7 rounded-[14px] bg-brand-purple items-center justify-center">
                      <MaterialIcons name="check" size={16} color="#ffffff" />
                    </View>
                  ) : (
                    <View className="w-7 h-7 rounded-[14px] border-2 border-[#d1d5db]" />
                  )}
                </View>
                {index < TODAY_PLAN.length - 1 && (
                  <View className="h-px bg-[#f3f4f6] ml-14.5" />
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
