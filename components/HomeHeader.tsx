import { Image } from "@/tw/image";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { images } from "@/constants/images";
import type { Language } from "@/types/learning";

type HomeHeaderProps = {
  selectedLanguage: Language | null;
  firstName: string | null | undefined;
  streakCount: number;
};

export function HomeHeader({
  selectedLanguage,
  firstName,
  streakCount,
}: HomeHeaderProps) {
  return (
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
          Hola, {firstName ?? "there"}! 👋
        </Text>
      </View>
      <View className="flex-row items-center gap-3">
        <View className="flex-row items-center gap-1">
          <Image source={images.streakFire} className="w-5.5 h-5.5" />
          <Text className="font-poppins-semibold text-[15px] text-[#0d132b]">
            {streakCount}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-9 h-9 items-center justify-center"
        >
          <MaterialIcons name="notifications-none" size={24} color="#0d132b" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
