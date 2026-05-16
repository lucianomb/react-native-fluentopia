import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AITeacherScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f7fb" }}>
      <View className="flex-1 items-center justify-center">
        <Text className="h3 color-text-primary">AI Teacher</Text>
        <Text className="body-md color-text-secondary mt-2">Coming soon</Text>
      </View>
    </SafeAreaView>
  );
}
