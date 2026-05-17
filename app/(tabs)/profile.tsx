import { useClerk, useUser } from "@clerk/expo";
import { type Href, useRouter } from "expo-router";
import { usePostHog } from "posthog-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const posthog = usePostHog();
  const router = useRouter();

  const handleSignOut = async () => {
    await posthog.capture("sign_out");
    posthog.reset();
    await signOut();
    router.replace("/onboarding" as Href);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f7fb" }}>
      <View className="flex-1 items-center justify-center gap-4 px-6">
        <Text className="h3 color-text-primary">
          {user?.firstName ?? "Profile"}
        </Text>
        <Text className="body-md color-text-secondary">
          {user?.primaryEmailAddress?.emailAddress}
        </Text>
        <TouchableOpacity
          className="px-6 py-3 rounded-xl border border-border mt-4"
          activeOpacity={0.85}
          onPress={handleSignOut}
        >
          <Text className="body-md color-text-secondary font-poppins-semibold">
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
