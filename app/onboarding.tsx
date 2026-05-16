import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo + App Name */}
      <View className="flex-row items-center justify-center mt-6 gap-2">
        <Image
          source={images.mascotLogo}
          className="w-10 h-10"
          resizeMode="contain"
        />
        <Text className="text-[28px] font-poppins-semibold text-text-primary tracking-tight">
          fluentopia
        </Text>
      </View>

      {/* Heading + Subtitle */}
      <View className="px-6 mt-8">
        <Text className="font-poppins-bold text-[36px] leading-[44px] text-text-primary">
          Your AI language <Text className="text-brand-purple">teacher.</Text>
        </Text>
        <Text className="mt-3 text-[16px] font-poppins text-text-secondary leading-[24px]">
          Real conversations, personalized lessons, anytime, anywhere.
        </Text>
      </View>

      {/* Mascot + Speech Bubbles */}
      <View className="flex-1 items-center justify-center">
        <View className="w-80 h-80 relative items-center justify-center">
          {/* Hello bubble - left */}
          <View className="speech-bubble bg-[#eef0fb] -left-2.5 top-20">
            <Text className="text-[15px] font-poppins-medium text-text-primary">
              Hello!
            </Text>
          </View>

          {/* ¡Hola! bubble - upper right */}
          <View className="speech-bubble bg-[#eeebfd] -right-2.5 top-5">
            <Text className="text-[15px] font-poppins-medium text-brand-purple">
              ¡Hola!
            </Text>
          </View>

          {/* 你好! bubble - right */}
          <View className="speech-bubble bg-[#fdeaea] right-0 top-[150px]">
            <Text className="text-[15px] font-poppins-medium text-[#e05252]">
              你好!
            </Text>
          </View>

          <Image
            source={images.mascotWelcome}
            className="w-70 h-70"
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Get Started Button */}
      <View className="px-6 pb-8">
        <TouchableOpacity
          className="btn-primary"
          activeOpacity={0.85}
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text className="text-white text-[18px] font-poppins-semibold">
            Get Started
          </Text>
          <Text className="text-white text-[18px] font-poppins-semibold ml-2">
            ›
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
