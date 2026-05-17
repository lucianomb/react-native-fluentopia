import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LessonCard } from "@/components/LessonCard";
import { images } from "@/constants/images";
import { getLessonsByUnit } from "@/data/lessons";
import { getUnitById, getUnitsByLanguage } from "@/data/units";
import { useLanguageStore } from "@/store/languageStore";
import { useLessonStore } from "@/store/lessonStore";

type Tab = "lessons" | "practice";

export default function LearnScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("lessons");

  const { selectedLanguage } = useLanguageStore();
  const { getCurrentUnitId, getLessonStatus } = useLessonStore();

  if (!selectedLanguage) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View className="flex-1 items-center justify-center px-6">
          <Text className="h3 text-text-primary text-center">
            No language selected
          </Text>
          <Text className="body-md text-text-secondary text-center mt-2">
            Go to the home screen to select a language.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const currentUnitId =
    getCurrentUnitId(selectedLanguage.id) ?? `${selectedLanguage.id}-unit-1`;

  const unit =
    getUnitById(currentUnitId) ?? getUnitsByLanguage(selectedLanguage.id)[0];
  const lessons = unit ? getLessonsByUnit(unit.id) : [];

  const completedCount = lessons.filter(
    (l) => getLessonStatus(l.id) === "completed",
  ).length;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)")}
            style={styles.backButton}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Ionicons name="chevron-back" size={24} color="#0d132b" />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle} numberOfLines={1}>
              {unit?.title ?? "Lessons"}
            </Text>
            <Text style={styles.headerSubtitle}>
              Unit {unit?.order ?? 1} {"•"} {completedCount} / {lessons.length}{" "}
              lessons
            </Text>
          </View>

          <TouchableOpacity hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Ionicons name="bookmark" size={24} color="#ffc800" />
          </TouchableOpacity>
        </View>

        {/* ── Hero Image ─────────────────────────────────────────────────── */}
        <View style={styles.heroContainer}>
          <Image
            source={images.palace}
            style={styles.heroBackground}
            resizeMode="cover"
          />
          <Image
            source={images.mascotWelcome}
            style={styles.heroMascot}
            resizeMode="contain"
          />
        </View>

        {/* ── Tab Switcher ───────────────────────────────────────────────── */}
        <View style={styles.tabBar}>
          <TouchableOpacity
            onPress={() => setActiveTab("lessons")}
            style={[styles.tab, activeTab === "lessons" && styles.tabActive]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "lessons" && styles.tabTextActive,
              ]}
            >
              Lessons
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("practice")}
            style={[styles.tab, activeTab === "practice" && styles.tabActive]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "practice" && styles.tabTextActive,
              ]}
            >
              Practice
            </Text>
          </TouchableOpacity>
        </View>

        {/* ── Content ────────────────────────────────────────────────────── */}
        {activeTab === "lessons" ? (
          <View style={styles.lessonList}>
            {lessons.length === 0 ? (
              <View className="items-center py-10">
                <Text className="body-md text-text-secondary text-center">
                  No lessons available for this unit yet.
                </Text>
              </View>
            ) : (
              lessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  status={getLessonStatus(lesson.id)}
                  onPress={() =>
                    router.push({
                      pathname: "/lesson/[lessonId]",
                      params: { lessonId: lesson.id },
                    })
                  }
                />
              ))
            )}
          </View>
        ) : (
          <View className="items-center py-16 px-6">
            <Text className="h3 text-text-primary text-center">
              Practice coming soon
            </Text>
            <Text className="body-md text-text-secondary text-center mt-2">
              Interactive practice exercises will be available here.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: "#ffffff",
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerCenter: {
    flex: 1,
    marginHorizontal: 8,
  },
  headerTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    lineHeight: 26,
    color: "#0d132b",
  },
  headerSubtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    lineHeight: 20,
    color: "#6b7280",
    marginTop: 1,
  },
  heroContainer: {
    height: 220,
    overflow: "hidden",
    backgroundColor: "#e8f4fd",
    position: "relative",
  },
  heroBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  heroMascot: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 160,
    height: 210,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 2.5,
    borderBottomColor: "transparent",
  },
  tabActive: {
    borderBottomColor: "#6c4ef5",
  },
  tabText: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    lineHeight: 22,
    color: "#6b7280",
  },
  tabTextActive: {
    fontFamily: "Poppins-SemiBold",
    color: "#6c4ef5",
  },
  lessonList: {
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 12,
  },
});
