import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import { useEffect, useState } from "react";
import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { MaterialIcons } from "@expo/vector-icons";

const BUBBLE_SIZE = 48;
const TAB_COUNT = 5;
const SPRING_CONFIG = { damping: 18, stiffness: 200, mass: 0.8 };

type TabRoute = {
  name: string;
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

const TAB_ROUTES: TabRoute[] = [
  { name: "index", title: "Home", icon: "home" },
  { name: "learn", title: "Learn", icon: "menu-book" },
  { name: "ai-teacher", title: "AI Teacher", icon: "auto-awesome" },
  { name: "chat", title: "Chat", icon: "chat-bubble-outline" },
  { name: "profile", title: "Profile", icon: "person-outline" },
];

function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const [tabBarWidth, setTabBarWidth] = useState(0);
  const insets = useSafeAreaInsets();
  const bubbleX = useSharedValue(0);

  const tabWidth = tabBarWidth / TAB_COUNT;

  // Slide bubble to active tab whenever index or measured width changes
  useEffect(() => {
    if (tabBarWidth === 0) return;
    const targetX = state.index * tabWidth + (tabWidth - BUBBLE_SIZE) / 2;
    bubbleX.value = withSpring(targetX, SPRING_CONFIG);
  }, [state.index, tabBarWidth]);

  const bubbleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: bubbleX.value }],
  }));

  const handleLayout = (e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    if (width > 0 && width !== tabBarWidth) {
      setTabBarWidth(width);
      // Snap immediately on first measure (no animation)
      const snapX =
        state.index * (width / TAB_COUNT) +
        (width / TAB_COUNT - BUBBLE_SIZE) / 2;
      bubbleX.value = snapX;
    }
  };

  return (
    <View
      style={[styles.tabBar, { paddingBottom: Math.max(insets.bottom, 12) }]}
      onLayout={handleLayout}
    >
      {/* Sliding purple bubble — absolutely positioned */}
      <Animated.View
        style={[styles.bubble, bubbleStyle]}
        pointerEvents="none"
      />

      {TAB_ROUTES.map((tab, index) => {
        const isActive = state.index === index;

        const handlePress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: state.routes[index]?.key,
            canPreventDefault: true,
          });
          if (!event.defaultPrevented) {
            navigation.navigate(tab.name);
          }
        };

        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabItem}
            onPress={handlePress}
            activeOpacity={0.8}
            accessibilityRole="tab"
            accessibilityLabel={tab.title}
            accessibilityState={{ selected: isActive }}
          >
            <View style={styles.iconWrapper}>
              <MaterialIcons
                name={tab.icon}
                size={22}
                color={isActive ? "#ffffff" : "#9ca3af"}
              />
            </View>
            {!isActive && <Text style={styles.tabLabel}>{tab.title}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
    paddingTop: 10,
    alignItems: "center",
  },
  // The single sliding purple circle — top: paddingTop + (TAB_ITEM_HEIGHT - BUBBLE_SIZE) / 2
  bubble: {
    position: "absolute",
    top: 10 + (56 - BUBBLE_SIZE) / 2,
    left: 0,
    width: BUBBLE_SIZE,
    height: BUBBLE_SIZE,
    borderRadius: BUBBLE_SIZE / 2,
    backgroundColor: "#6c4ef5",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    gap: 2,
  },
  iconWrapper: {
    width: BUBBLE_SIZE,
    height: BUBBLE_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#9ca3af",
  },
});

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="learn" options={{ title: "Learn" }} />
      <Tabs.Screen name="ai-teacher" options={{ title: "AI Teacher" }} />
      <Tabs.Screen name="chat" options={{ title: "Chat" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
