import { Image } from "@/tw/image";
import { Text, View } from "react-native";

import { images } from "@/constants/images";

type DailyGoalCardProps = {
  currentXP: number;
  dailyGoalXP: number;
  xpPercent: number;
};

export function DailyGoalCard({
  currentXP,
  dailyGoalXP,
  xpPercent,
}: DailyGoalCardProps) {
  return (
    <View className="flex-row items-center bg-[#fdf6ee] rounded-[20px] px-5 py-4.5 overflow-hidden">
      <View className="flex-1 gap-1.5">
        <Text className="font-[Poppins-Regular] text-[13px] text-[#6b7280]">
          Daily goal
        </Text>
        <View className="flex-row items-baseline">
          <Text className="font-poppins-bold text-[28px] text-[#0d132b]">
            {currentXP}
          </Text>
          <Text className="font-[Poppins-Regular] text-sm text-[#6b7280]">
            {" "}
            / {dailyGoalXP} XP
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
  );
}
