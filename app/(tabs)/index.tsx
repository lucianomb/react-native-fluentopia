import { Image } from "@/tw/image";
import { useUser } from "@clerk/expo";
import { MaterialIcons } from "@expo/vector-icons";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
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
        contentContainerStyle={styles.scrollContent}
      >
        {/* ── Header ──────────────────────────────────────────────────── */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            {selectedLanguage?.flag ? (
              <Image
                source={{ uri: selectedLanguage.flag }}
                style={styles.flagImage}
                className="rounded-full"
              />
            ) : (
              <View style={styles.flagPlaceholder} />
            )}
            <Text style={styles.greeting}>
              Hola, {user?.firstName ?? "there"}! 👋
            </Text>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.streakBadge}>
              <Image source={images.streakFire} style={styles.streakIcon} />
              <Text style={styles.streakCount}>{STREAK_COUNT}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.bellButton}>
              <MaterialIcons
                name="notifications-none"
                size={24}
                color="#0d132b"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Daily Goal Card ──────────────────────────────────────────── */}
        <View style={styles.goalCard}>
          <View style={styles.goalContent}>
            <Text style={styles.goalLabel}>Daily goal</Text>
            <Text style={styles.goalXP}>
              <Text style={styles.goalXPBold}>{CURRENT_XP}</Text>
              <Text style={styles.goalXPTotal}> / {DAILY_GOAL_XP} XP</Text>
            </Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${xpPercent}%` }]} />
            </View>
          </View>
          <Image source={images.treasure} style={styles.treasureImage} />
        </View>

        {/* ── Continue Learning Banner ─────────────────────────────────── */}
        <View style={styles.continueBanner}>
          <View style={styles.continueContent}>
            <Text style={styles.continueLabel}>Continue learning</Text>
            <Text style={styles.continueLang}>
              {selectedLanguage?.name ?? "Spanish"}
            </Text>
            <Text style={styles.continueUnit}>
              A1 • Unit {currentUnit?.order ?? CURRENT_UNIT_ORDER}
            </Text>
            <TouchableOpacity
              style={styles.continueButton}
              activeOpacity={0.85}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
          <Image source={images.palace} style={styles.palaceImage} />
        </View>

        {/* ── Today's Plan ─────────────────────────────────────────────── */}
        <View style={styles.planSection}>
          <View style={styles.planHeader}>
            <Text style={styles.planTitle}>Today's plan</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.planList}>
            {TODAY_PLAN.map((item, index) => (
              <View key={item.id}>
                <View style={styles.planItem}>
                  <View
                    style={[
                      styles.planIconBox,
                      { backgroundColor: item.iconBg },
                    ]}
                  >
                    <MaterialIcons name={item.icon} size={20} color="#ffffff" />
                  </View>
                  <View style={styles.planItemText}>
                    <Text style={styles.planItemTitle}>{item.title}</Text>
                    <Text style={styles.planItemSubtitle}>{item.subtitle}</Text>
                  </View>
                  {item.completed ? (
                    <View style={styles.checkCircleFilled}>
                      <MaterialIcons name="check" size={16} color="#ffffff" />
                    </View>
                  ) : (
                    <View style={styles.checkCircleEmpty} />
                  )}
                </View>
                {index < TODAY_PLAN.length - 1 && (
                  <View style={styles.divider} />
                )}
              </View>
            ))}
          </View>
        </View>

        {/* ── Next Up Card ─────────────────────────────────────────────── */}
        <View style={styles.nextUpCard}>
          <View style={styles.nextUpContent}>
            <Text style={styles.nextUpLabel}>Next up</Text>
            <Text style={styles.nextUpTitle}>AI Video Call</Text>
            <Text style={styles.nextUpSubtitle}>Practice speaking</Text>
          </View>
          <View style={styles.nextUpRight}>
            <Image
              source={{ uri: "https://picsum.photos/seed/teacher/80/80" }}
              style={styles.teacherAvatar}
              className="rounded-full"
            />
            <TouchableOpacity style={styles.videoButton} activeOpacity={0.85}>
              <MaterialIcons name="videocam" size={22} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 16,
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 8,
    paddingBottom: 4,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  flagImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  flagPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#e5e7eb",
  },
  greeting: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#0d132b",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  streakBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  streakIcon: {
    width: 22,
    height: 22,
  },
  streakCount: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#0d132b",
  },
  bellButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },

  // Daily Goal Card
  goalCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fdf6ee",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 18,
    overflow: "hidden",
  },
  goalContent: {
    flex: 1,
    gap: 6,
  },
  goalLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#6b7280",
  },
  goalXP: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  goalXPBold: {
    fontFamily: "Poppins-Bold",
    fontSize: 28,
    color: "#0d132b",
  },
  goalXPTotal: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6b7280",
  },
  progressTrack: {
    height: 8,
    backgroundColor: "#f0e6d3",
    borderRadius: 4,
    marginTop: 4,
    width: "80%",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#ff8a00",
    borderRadius: 4,
  },
  treasureImage: {
    width: 70,
    height: 70,
    marginLeft: 12,
  },

  // Continue Banner
  continueBanner: {
    borderRadius: 20,
    backgroundColor: "#6c4ef5",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
    minHeight: 160,
  },
  continueContent: {
    flex: 1,
    padding: 20,
    paddingBottom: 20,
    gap: 4,
  },
  continueLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "rgba(255,255,255,0.8)",
  },
  continueLang: {
    fontFamily: "Poppins-Bold",
    fontSize: 26,
    color: "#ffffff",
    lineHeight: 32,
  },
  continueUnit: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "rgba(255,255,255,0.8)",
    marginBottom: 12,
  },
  continueButton: {
    borderWidth: 1.5,
    borderColor: "#ffffff",
    borderRadius: 24,
    paddingHorizontal: 22,
    paddingVertical: 8,
    alignSelf: "flex-start",
  },
  continueButtonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#ffffff",
  },
  palaceImage: {
    width: 140,
    height: 150,
    marginRight: -4,
  },

  // Today's Plan
  planSection: {
    gap: 12,
  },
  planHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  planTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 17,
    color: "#0d132b",
  },
  viewAllText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#6c4ef5",
  },
  planList: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  planItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    gap: 14,
  },
  planIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  planItemText: {
    flex: 1,
    gap: 2,
  },
  planItemTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#0d132b",
  },
  planItemSubtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#6b7280",
  },
  checkCircleFilled: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#6c4ef5",
    alignItems: "center",
    justifyContent: "center",
  },
  checkCircleEmpty: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#d1d5db",
  },
  divider: {
    height: 1,
    backgroundColor: "#f3f4f6",
    marginLeft: 58,
  },

  // Next Up
  nextUpCard: {
    backgroundColor: "#edf7f0",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  nextUpContent: {
    flex: 1,
    gap: 2,
  },
  nextUpLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#6b7280",
  },
  nextUpTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 17,
    color: "#0d132b",
  },
  nextUpSubtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#6b7280",
  },
  nextUpRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  teacherAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#c6ebd5",
  },
  videoButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#21c16b",
    alignItems: "center",
    justifyContent: "center",
  },
});
