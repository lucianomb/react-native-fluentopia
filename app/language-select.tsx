import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import { useLanguageStore } from "@/store/languageStore";
import { Image } from "@/tw/image";
import type { Language } from "@/types/learning";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { usePostHog } from "posthog-react-native";
import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function LanguageSelectScreen() {
  const router = useRouter();
  const { setSelectedLanguage } = useLanguageStore();
  const posthog = usePostHog();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase()),
  );

  const selectedLanguage = languages.find((l) => l.id === selectedId);

  function handleConfirm() {
    if (!selectedId || !selectedLanguage) return;
    posthog.capture("language_selected", {
      language_id: selectedLanguage.id,
      language_name: selectedLanguage.name,
    });
    setSelectedLanguage(selectedLanguage);
    router.replace("/");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {/* Header */}
      <View className="flex-row items-center px-5 pt-4 pb-2">
        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.7}
          className="w-10 h-10 items-center justify-center"
        >
          <Ionicons name="chevron-back" size={24} color="#0d132b" />
        </TouchableOpacity>
        <Text className="flex-1 text-center font-poppins-semibold text-[18px] text-text-primary mr-10">
          Choose a language
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Search Bar */}
        <View className="mx-5 mt-3 mb-5 flex-row items-center bg-surface rounded-full px-4 h-12.5">
          <Ionicons name="search" size={20} color="#6b7280" />
          <TextInput
            className="flex-1 ml-3 font-poppins text-text-primary text-[15px]"
            placeholder="Search languages"
            placeholderTextColor="#6b7280"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Popular Label */}
        <Text className="mx-5 mb-3 font-poppins-bold text-[16px] text-text-primary">
          Popular
        </Text>

        {/* Language List */}
        <View className="mx-5">
          {filtered.map((language) => (
            <LanguageItem
              key={language.id}
              language={language}
              selected={selectedId === language.id}
              onPress={() =>
                setSelectedId(selectedId === language.id ? null : language.id)
              }
            />
          ))}
        </View>
      </ScrollView>

      {/* Confirm Button — fixed above earth */}
      <View className="mx-5 py-4">
        <TouchableOpacity
          className="btn-primary"
          activeOpacity={0.85}
          disabled={!selectedId}
          onPress={handleConfirm}
          style={{ opacity: selectedId ? 1 : 0.4 }}
        >
          <Text className="font-poppins-semibold text-white text-[16px]">
            {selectedLanguage
              ? `Continue with ${selectedLanguage.name}`
              : "Choose a language"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Earth Illustration */}
      <View style={{ height: 200, overflow: "hidden" }}>
        <Image
          source={images.earth}
          style={{
            width: "100%",
            height: 200,
            position: "relative",
          }}
          // content fit cover, aligned to top
          contentFit="cover"
          contentPosition="top"
        />
      </View>
    </SafeAreaView>
  );
}

function LanguageItem({
  language,
  selected,
  onPress,
}: {
  language: Language;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className="flex-row items-center py-4 px-4 rounded-2xl border mb-2"
      style={{
        borderColor: selected ? "#6c4ef5" : "transparent",
        backgroundColor: selected ? "#f0ecff" : "transparent",
      }}
    >
      {!selected && (
        <View
          className="absolute bottom-0 left-4 right-4"
          style={{ height: 1, backgroundColor: "#e5e7eb" }}
        />
      )}
      {/* Flag */}
      <View className="w-12 h-12 rounded-full overflow-hidden bg-surface">
        <Image
          source={{ uri: language.flag }}
          className="w-12 h-12"
          contentFit="cover"
        />
      </View>

      {/* Name + Learners */}
      <View className="flex-1 ml-4">
        <Text className="font-poppins-semibold text-[15px] text-text-primary">
          {language.name}
        </Text>
        <Text className="body-sm text-text-secondary mt-0.5">
          {language.learners} learners
        </Text>
      </View>

      {/* Checkmark or Chevron */}
      {selected ? (
        <View className="w-8 h-8 rounded-full bg-brand-purple items-center justify-center">
          <Ionicons name="checkmark" size={18} color="#ffffff" />
        </View>
      ) : (
        <Ionicons name="chevron-forward" size={20} color="#6b7280" />
      )}
    </TouchableOpacity>
  );
}
