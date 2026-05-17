import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { images } from "@/constants/images";
import type { LessonStatus } from "@/store/lessonStore";
import type { Lesson } from "@/types/learning";

interface Props {
  lesson: Lesson;
  status: LessonStatus;
  onPress: () => void;
}

export function LessonCard({ lesson, status, onPress }: Props) {
  const isCompleted = status === "completed";
  const isInProgress = status === "in_progress";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.card, isInProgress && styles.cardActive]}
    >
      <View className="flex-1 mr-3">
        <Text style={[styles.label, isInProgress && styles.labelActive]}>
          Lesson {lesson.order}
        </Text>
        <Text style={styles.title}>{lesson.title}</Text>
        {isInProgress && <Text style={styles.inProgressText}>In progress</Text>}
        {!isCompleted && !isInProgress && (
          <Text style={styles.subtext}>
            0 / {lesson.activities.length} activities
          </Text>
        )}
      </View>

      {isCompleted && (
        <View style={styles.checkBadge}>
          <Ionicons name="checkmark" size={20} color="#ffffff" />
        </View>
      )}

      {isInProgress && (
        <Image
          source={images.mascotLogo}
          style={styles.mascotIcon}
          resizeMode="contain"
        />
      )}

      {!isCompleted && !isInProgress && (
        <View style={styles.lockBadge}>
          <Ionicons name="lock-closed-outline" size={17} color="#9ca3af" />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardActive: {
    backgroundColor: "#f3f0ff",
    borderColor: "#6c4ef5",
    borderWidth: 1.5,
  },
  label: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 18,
    color: "#9ca3af",
    marginBottom: 2,
  },
  labelActive: {
    color: "#6c4ef5",
    fontFamily: "Poppins-Medium",
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    lineHeight: 22,
    color: "#0d132b",
  },
  inProgressText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 18,
    color: "#6c4ef5",
    marginTop: 2,
  },
  subtext: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 18,
    color: "#9ca3af",
    marginTop: 2,
  },
  checkBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#21c16b",
    alignItems: "center",
    justifyContent: "center",
  },
  lockBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: "#e5e7eb",
    alignItems: "center",
    justifyContent: "center",
  },
  mascotIcon: {
    width: 48,
    height: 48,
  },
});
