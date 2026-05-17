import { Image } from "@/tw/image";
import { Text, TouchableOpacity, View } from "react-native";

import { images } from "@/constants/images";
import type { Language, Unit } from "@/types/learning";

type ContinueLearningBannerProps = {
  selectedLanguage: Language | null;
  currentUnit: Unit | undefined;
  currentUnitOrder: number;
};

export function ContinueLearningBanner({
  selectedLanguage,
  currentUnit,
  currentUnitOrder,
}: ContinueLearningBannerProps) {
  return (
    <View className="rounded-[20px] bg-brand-purple overflow-hidden flex-row items-end min-h-40">
      <View className="flex-1 p-5 gap-1">
        <Text className="font-[Poppins-Regular] text-[13px] text-white/80">
          Continue learning
        </Text>
        <Text className="font-poppins-bold text-[26px] text-white leading-8">
          {selectedLanguage?.name ?? "Spanish"}
        </Text>
        <Text className="font-[Poppins-Regular] text-[13px] text-white/80 mb-3">
          A1 • Unit {currentUnit?.order ?? currentUnitOrder}
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
  );
}
