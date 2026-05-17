import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export type PlanItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  iconBg: string;
  completed: boolean;
};

type TodayPlanListProps = {
  plan: PlanItem[];
};

export function TodayPlanList({ plan }: TodayPlanListProps) {
  return (
    <View className="gap-3">
      <View className="flex-row items-center justify-between">
        <Text className="font-poppins-bold text-[17px] text-[#0d132b]">
          {"Today's plan"}
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text className="font-poppins-semibold text-sm text-[#6c4ef5]">
            View all
          </Text>
        </TouchableOpacity>
      </View>

      <View className="bg-white rounded-[20px] px-4 py-1">
        {plan.map((item, index) => (
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
            {index < plan.length - 1 && (
              <View className="h-px bg-[#f3f4f6] ml-14.5" />
            )}
          </View>
        ))}
      </View>
    </View>
  );
}
