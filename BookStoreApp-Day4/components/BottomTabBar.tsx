import React from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { usePathname } from "expo-router";



export function BottomTabBar() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { key: "home", label: "Trang chủ", route: "/" },
    { key: "category", label: "Danh mục", route: "/category" },
    { key: "cart", label: "Giỏ hàng", route: "/cart" },
    { key: "account", label: "Tài khoản", route: "/account" },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <Pressable
          key={tab.key}
          style={styles.tab}
          onPress={() => router.push(tab.route as any)} // 🔥 đúng chỗ
        >
          <Text style={styles.icon}>●</Text>
          <Text style={[
  styles.label,
  pathname === tab.route && styles.active
]}>
  {tab.label}
</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // 🔥 yêu cầu đề
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#fff",
  },
  tab: {
    flex: 1, // 🔥 chia đều 4 phần
    flexDirection: "column", // icon trên - text dưới
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 18,
    color: "#9CA3AF",
  },
  label: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  active: {
    color: "#4338CA",
    fontWeight: "700",
  },
});