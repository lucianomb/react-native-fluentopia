import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text className="h1 color-brand-purple">Fluentopia</Text>
      <TouchableOpacity
        onPress={() => router.push("/onboarding")}
        className="bg-brand-purple px-6 py-3 rounded-xl"
      >
        <Text className="text-white font-poppins-semibold text-base">
          View Onboarding
        </Text>
      </TouchableOpacity>
    </View>
  );
}
