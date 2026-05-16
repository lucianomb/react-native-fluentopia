import { useAuth, useClerk } from "@clerk/expo";
import { Redirect } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text className="h1 color-brand-purple">Fluentopia</Text>
      <TouchableOpacity
        className="bg-brand-purple px-6 py-3 rounded-xl"
        activeOpacity={0.85}
        onPress={() => signOut()}
      >
        <Text className="text-white font-poppins-semibold text-base">
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}
