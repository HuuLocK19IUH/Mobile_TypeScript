import { Stack } from "expo-router";
import { View } from "react-native";
import { BottomTabBar } from "../../components/BottomTabBar";

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      {/* STACK */}
      <Stack screenOptions={{ headerShown: false }} />

      {/* TAB BAR */}
      <BottomTabBar />
    </View>
  );
}