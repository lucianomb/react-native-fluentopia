import { useAuth, useClerk } from "@clerk/expo";
import { Redirect, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();

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
        onPress={() => router.push("/language-select")}
      >
        <Text className="text-white font-poppins-semibold text-base">
          Choose a Language
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="px-6 py-3 rounded-xl border border-border"
        activeOpacity={0.85}
        onPress={() => signOut()}
      >
        <Text className="text-text-secondary font-poppins-semibold text-base">
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}
