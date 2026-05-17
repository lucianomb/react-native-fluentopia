import VerificationModal from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { useSSO } from "@clerk/expo";
import { useSignUp } from "@clerk/expo/legacy";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();
import { type Href, useRouter } from "expo-router";
import { usePostHog } from "posthog-react-native";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignUpScreen() {
  const router = useRouter();
  const { signUp, isLoaded, setActive } = useSignUp();
  const { startSSOFlow } = useSSO();
  const posthog = usePostHog();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialAuth = async (
    strategy: "oauth_google" | "oauth_apple" | "oauth_facebook",
  ) => {
    setError("");
    try {
      const {
        createdSessionId,
        setActive: setActiveSession,
        authSessionResult,
      } = await startSSOFlow({
        strategy,
        redirectUrl: Linking.createURL("/"),
      });
      if (createdSessionId && setActiveSession) {
        await setActiveSession({ session: createdSessionId });
        posthog.capture("social_auth_completed", {
          strategy,
          screen: "sign_up",
        });
        router.replace("/(tabs)" as Href);
      } else if (authSessionResult?.type === "cancel") {
        // user dismissed — do nothing
      }
    } catch (err: any) {
      const message =
        err?.errors?.[0]?.longMessage ??
        err?.errors?.[0]?.message ??
        err?.message ??
        "Social sign up failed. Please try again.";
      setError(message);
    }
  };

  const handleSignUp = async () => {
    if (!email.trim() || !password.trim()) return;
    if (!isLoaded) return;
    setError("");
    setIsLoading(true);
    try {
      await signUp.create({
        emailAddress: email,
        password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      posthog.capture("sign_up_submitted", { method: "email" });
      setModalVisible(true);
    } catch (err: any) {
      setError(err?.errors?.[0]?.message ?? "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = async (code: string) => {
    if (!isLoaded) return;
    setError("");
    try {
      const result = await signUp.attemptEmailAddressVerification({ code });
      if (result.status === "complete") {
        posthog.capture("sign_up_completed", { method: "email" });
        setModalVisible(false);
        await setActive({ session: result.createdSessionId });
        router.replace("/(tabs)" as Href);
      }
    } catch (err: any) {
      const message =
        err?.errors?.[0]?.message ?? "Invalid code. Please try again.";
      setError(message);
      throw new Error(message);
    }
  };

  const handleResend = async () => {
    if (!isLoaded) return;
    try {
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
    } catch {
      // silently ignore
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Back button */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="mt-2 ml-4 w-10 h-10 items-center justify-center"
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={24} color="#0d132b" />
          </TouchableOpacity>

          {/* Title */}
          <View className="px-6 mt-4">
            <Text className="font-poppins-bold text-[28px] leading-9 text-text-primary">
              Create your account
            </Text>
            <Text className="mt-1 font-poppins text-[15px] text-text-secondary leading-5.5">
              Start your language journey today ✨
            </Text>
          </View>

          {/* Mascot */}
          <View className="items-center mt-6 mb-6">
            <View className="w-37.5 h-37.5 items-center justify-center">
              <Text className="absolute top-1 -left-1 text-[#f5c842] text-base font-bold">
                ✦
              </Text>
              <Text className="absolute top-0 -right-2 text-[#4d8bff] text-sm font-bold">
                ✦
              </Text>
              <Text className="absolute bottom-2 -right-0.5 text-[#f5c842] text-xs font-bold">
                ✦
              </Text>
              <Image
                source={images.mascotAuth2}
                className="w-37.5 h-37.5"
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Form */}
          <View className="px-6 gap-3">
            {/* Email */}
            <View className="border-[1.5px] border-border rounded-2xl px-4 py-3 bg-white">
              <Text className="font-poppins text-[13px] text-text-secondary mb-0.5">
                Email
              </Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="you@example.com"
                placeholderTextColor="#9ca3af"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                style={styles.input}
              />
            </View>

            {/* Password */}
            <View className="border-[1.5px] border-border rounded-2xl px-4 py-3 bg-white">
              <Text className="font-poppins text-[13px] text-text-secondary mb-0.5">
                Password
              </Text>
              <View className="flex-row items-center">
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••••"
                  placeholderTextColor="#9ca3af"
                  secureTextEntry={!showPassword}
                  autoComplete="new-password"
                  style={[styles.input, styles.passwordInput]}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  className="p-1"
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={22}
                    color="#9ca3af"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity
              className="btn-primary mt-2"
              activeOpacity={0.85}
              onPress={handleSignUp}
              disabled={isLoading}
              style={{ opacity: isLoading ? 0.7 : 1 }}
            >
              <Text className="text-white text-[17px] font-poppins-semibold">
                {isLoading ? "Creating account…" : "Sign Up"}
              </Text>
            </TouchableOpacity>

            {/* Error */}
            {error ? (
              <Text className="font-poppins text-[13px] text-[#e05252] text-center -mt-1">
                {error}
              </Text>
            ) : null}

            {/* Divider */}
            <View className="flex-row items-center my-1 gap-2">
              <View className="flex-1 h-px bg-border" />
              <Text className="font-poppins text-[13px] text-text-secondary">
                or continue with
              </Text>
              <View className="flex-1 h-px bg-border" />
            </View>

            {/* Social Buttons */}
            <SocialButton
              icon={<AntDesign name="google" size={22} color="#DB4437" />}
              label="Continue with Google"
              onPress={() => handleSocialAuth("oauth_google")}
            />
            <SocialButton
              icon={<Ionicons name="logo-facebook" size={24} color="#1877F2" />}
              label="Continue with Facebook"
              onPress={() => handleSocialAuth("oauth_facebook")}
            />
            <SocialButton
              icon={<AntDesign name="apple" size={22} color="#000000" />}
              label="Continue with Apple"
              onPress={() => handleSocialAuth("oauth_apple")}
            />
          </View>

          {/* Footer */}
          <View className="flex-row justify-center items-center mt-7">
            <Text className="font-poppins text-sm text-text-secondary">
              Already have an account?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => router.replace("/(auth)/sign-in")}
              activeOpacity={0.7}
            >
              <Text className="font-poppins-semibold text-sm text-brand-purple">
                Log in
              </Text>
            </TouchableOpacity>
          </View>

          {/* Required for Clerk bot protection */}
          <View nativeID="clerk-captcha" />
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={modalVisible}
        email={email}
        onClose={() => setModalVisible(false)}
        onVerify={handleVerify}
        onResend={handleResend}
        error={error}
      />
    </SafeAreaView>
  );
}

function SocialButton({
  icon,
  label,
  onPress,
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      className="flex-row items-center border-[1.5px] border-border rounded-2xl py-3.5 px-5 bg-white"
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View className="w-7 items-center">{icon}</View>
      <Text className="font-poppins-medium text-[15px] text-text-primary ml-3">
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scroll: {
    paddingBottom: 32,
  },
  input: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#0d132b",
    padding: 0,
  },
  passwordInput: {
    flex: 1,
  },
});
