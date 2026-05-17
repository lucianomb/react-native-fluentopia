import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";

import { useLanguageStore } from "@/store/languageStore";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { selectedLanguage, isHydrated } = useLanguageStore();

  if (!isLoaded || !isHydrated) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  if (!selectedLanguage) {
    return <Redirect href="/language-select" />;
  }

  return <Redirect href="/(tabs)" />;
}
