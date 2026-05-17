import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type LessonStatus = "completed" | "in_progress" | "not_started";

type Progress = Record<string, LessonStatus>;

const initialProgress: Progress = {
  "es-u1-l1": "completed",
  "es-u1-l2": "completed",
  "es-u1-l3": "in_progress",
  "fr-u1-l1": "completed",
  "fr-u1-l2": "in_progress",
  "jp-u1-l1": "completed",
  "jp-u2-l1": "in_progress",
  "de-u1-l1": "in_progress",
};

interface LessonState {
  progress: Progress;
  currentUnitIds: Record<string, string>; // languageId → unitId
  setLessonStatus: (lessonId: string, status: LessonStatus) => void;
  setCurrentUnit: (languageId: string, unitId: string) => void;
  getLessonStatus: (lessonId: string) => LessonStatus;
  getCurrentUnitId: (languageId: string) => string | null;
}

export const useLessonStore = create<LessonState>()(
  persist(
    (set, get) => ({
      progress: initialProgress,
      currentUnitIds: {
        es: "es-unit-1",
        fr: "fr-unit-1",
        jp: "jp-unit-1",
        de: "de-unit-1",
      },
      setLessonStatus: (lessonId, status) =>
        set((state) => ({
          progress: { ...state.progress, [lessonId]: status },
        })),
      setCurrentUnit: (languageId, unitId) =>
        set((state) => ({
          currentUnitIds: { ...state.currentUnitIds, [languageId]: unitId },
        })),
      getLessonStatus: (lessonId) => get().progress[lessonId] ?? "not_started",
      getCurrentUnitId: (languageId) =>
        get().currentUnitIds[languageId] ?? null,
    }),
    {
      name: "lesson-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
