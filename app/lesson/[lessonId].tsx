import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { getLessonById } from "@/data/lessons";

export default function LessonScreen() {
  const router = useRouter();
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();
  const lesson = getLessonById(lessonId);

  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);

  if (!lesson) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.notFoundText}>Lesson not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f7fb" }}>
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons name="chevron-back" size={24} color="#0d132b" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>AI Teacher</Text>
          <View style={styles.onlineRow}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>Online</Text>
          </View>
        </View>

        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerIconBtn}>
            <Ionicons name="videocam-outline" size={18} color="#0d132b" />
          </TouchableOpacity>
          <View style={styles.headerIconBtn}>
            <Text style={styles.xpText}>{lesson.xpReward}</Text>
          </View>
          <TouchableOpacity style={styles.headerIconBtn}>
            <Ionicons name="notifications-outline" size={18} color="#0d132b" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ── Teacher Visual Area ─────────────────────────────────────────── */}
      <View style={styles.teacherArea}>
        {/* Fox / AI Teacher Mascot */}
        <Image
          source={images.mascotWelcome}
          style={styles.mascot}
          resizeMode="contain"
        />

        {/* Teacher Speech Bubble */}
        <View style={styles.speechBubbleWrapper}>
          <View style={styles.speechBubble}>
            <View style={styles.speechContent}>
              <View>
                <Text style={styles.speechText}>¡Muy bien!</Text>
                <Text style={styles.speechText}>That was great! 👏</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <Ionicons name="volume-high" size={24} color="#6c4ef5" />
              </TouchableOpacity>
            </View>
          </View>
          {/* Bubble tail pointing down-left toward the fox */}
          <View style={styles.bubbleTail} />
        </View>
      </View>

      {/* ── Controls ────────────────────────────────────────────────────── */}
      <View style={styles.controlsRow}>
        <View style={styles.controlItem}>
          <TouchableOpacity
            style={styles.controlBtn}
            onPress={() => setIsCameraOn(!isCameraOn)}
            activeOpacity={0.8}
          >
            <Ionicons name="videocam" size={22} color="#0d132b" />
          </TouchableOpacity>
          <Text style={styles.controlLabel}>Camera</Text>
        </View>

        <View style={styles.controlItem}>
          <TouchableOpacity
            style={styles.controlBtn}
            onPress={() => setIsMicOn(!isMicOn)}
            activeOpacity={0.8}
          >
            <Ionicons
              name={isMicOn ? "mic" : "mic-off"}
              size={22}
              color="#0d132b"
            />
          </TouchableOpacity>
          <Text style={styles.controlLabel}>Mic</Text>
        </View>

        <View style={styles.controlItem}>
          <TouchableOpacity
            style={styles.controlBtn}
            onPress={() => setShowSubtitles(!showSubtitles)}
            activeOpacity={0.8}
          >
            <MaterialIcons name="translate" size={22} color="#0d132b" />
          </TouchableOpacity>
          <Text style={styles.controlLabel}>Subtitles</Text>
        </View>

        <View style={styles.controlItem}>
          <TouchableOpacity
            style={[styles.controlBtn, styles.endCallBtn]}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <View style={styles.endCallIconWrapper}>
              <Ionicons name="call" size={22} color="#ffffff" />
            </View>
          </TouchableOpacity>
          <Text style={styles.controlLabel}>End Call</Text>
        </View>
      </View>

      {/* ── Feedback Card ───────────────────────────────────────────────── */}
      <View style={styles.feedbackCard}>
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Speaking</Text>
          <Text style={[styles.feedbackScore, { color: "#21c16b" }]}>
            Excellent
          </Text>
        </View>
        <View style={styles.feedbackDivider} />
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Pronunciation</Text>
          <Text style={[styles.feedbackScore, { color: "#4d8bff" }]}>
            Great
          </Text>
        </View>
        <View style={styles.feedbackDivider} />
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Grammar</Text>
          <Text style={[styles.feedbackScore, { color: "#6c4ef5" }]}>
            Good
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  notFoundText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6b7280",
  },

  // ── Header ──────────────────────────────────────────────────────────────
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 10,
  },
  headerCenter: {
    flex: 1,
    marginLeft: 10,
  },
  headerTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    lineHeight: 24,
    color: "#0d132b",
  },
  onlineRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 1,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#21c16b",
  },
  onlineText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 18,
    color: "#21c16b",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerIconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1.5,
    borderColor: "#e5e7eb",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  xpText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#0d132b",
  },

  // ── Teacher Visual Area ──────────────────────────────────────────────────
  teacherArea: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 18,
    marginHorizontal: 12,
    marginTop: 6,
    backgroundColor: "#ede8e0",
    alignItems: "center",
    justifyContent: "center",
  },
  mascot: {
    width: "80%",
    height: "70%",
  },
  speechBubbleWrapper: {
    position: "absolute",
    bottom: 14,
    left: 14,
    right: 14,
  },
  speechBubble: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  speechContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  speechText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    lineHeight: 25,
    color: "#0d132b",
  },
  bubbleTail: {
    width: 0,
    height: 0,
    borderTopWidth: 14,
    borderRightWidth: 12,
    borderTopColor: "#ffffff",
    borderRightColor: "transparent",
    marginLeft: 22,
    marginTop: -1,
  },

  // ── Controls ─────────────────────────────────────────────────────────────
  controlsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 10,
    marginTop: 6,
  },
  controlItem: {
    alignItems: "center",
    gap: 8,
  },
  controlBtn: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  endCallBtn: {
    backgroundColor: "#ef4444",
    borderColor: "#ef4444",
  },
  endCallIconWrapper: {
    transform: [{ rotate: "135deg" }],
  },
  controlLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 18,
    color: "#6b7280",
  },

  // ── Feedback Card ─────────────────────────────────────────────────────────
  feedbackCard: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 14,
    borderRadius: 18,
    paddingVertical: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  feedbackItem: {
    flex: 1,
    alignItems: "center",
    gap: 5,
  },
  feedbackLabel: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 13,
    lineHeight: 19,
    color: "#0d132b",
  },
  feedbackScore: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    lineHeight: 20,
  },
  feedbackDivider: {
    width: 1,
    backgroundColor: "#e5e7eb",
    marginVertical: 4,
  },
});
