import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import { colors } from "./src/theme";
import { PHONES } from "./src/data/phones";
import { SelectPhoneApp } from "./src/ex1/SelectPhoneApp";
import { SelectPhoneApi } from "./src/ex1/SelectPhoneApi";
import { BottomTabApp } from "./src/ex3/BottomTabApp";
import { StackTabApp } from "./src/ex4/StackTabApp";
import { DrawerApp } from "./src/ex5/DrawerApp";

type ExerciseKey = "ex1" | "ex2" | "ex3" | "ex4" | "ex5";

const MENU: { key: ExerciseKey; title: string; desc: string }[] = [
  { key: "ex1", title: "Bài 1 — Select Phone", desc: "Stack, truyền params, nhận màu quay lại" },
  { key: "ex2", title: "Bài 2 — Select Phone + API", desc: "fetch, loading / lỗi / thử lại (mockapi.io)" },
  { key: "ex3", title: "Bài 3 — Bottom Tab", desc: "Home / Search / Profile, Ionicons" },
  { key: "ex4", title: "Bài 4 — Stack + Tab + Params", desc: "Products / Favorites, Context yêu thích" },
  { key: "ex5", title: "Bài 5 — Drawer", desc: "Home / Profile / Settings, Switch" },
];

export default function App() {
  const [selected, setSelected] = useState<ExerciseKey | null>(null);

  if (selected) {
    const content =
      selected === "ex1" ? (
        <SelectPhoneApp phone={PHONES[0]} />
      ) : selected === "ex2" ? (
        <SelectPhoneApi />
      ) : selected === "ex3" ? (
        <BottomTabApp />
      ) : selected === "ex4" ? (
        <StackTabApp />
      ) : (
        <DrawerApp />
      );
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.exerciseRoot}>
          <Pressable style={styles.backBar} onPress={() => setSelected(null)}>
            <Text style={styles.backText}>← Menu (Bài 1 → 5)</Text>
          </Pressable>
          <View style={{ flex: 1 }}>{content}</View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.menu}>
        <Text style={styles.heading}>Lab 06 — Navigation</Text>
        <Text style={styles.sub}>Chọn một bài để chạy:</Text>
        {MENU.map((m) => (
          <Pressable
            key={m.key}
            style={styles.menuBtn}
            onPress={() => setSelected(m.key)}
          >
            <Text style={styles.menuTitle}>{m.title}</Text>
            <Text style={styles.menuDesc}>{m.desc}</Text>
          </Pressable>
        ))}
        <Text style={styles.note}>
          Bài 2 chưa đặt EXPO_PUBLIC_API_URL sẽ chạy chế độ offline (dữ liệu
          mẫu, giả lập trễ 600ms để thấy loading).
        </Text>
      </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  exerciseRoot: { flex: 1, backgroundColor: "#fff" },
  backBar: { paddingHorizontal: 16, paddingVertical: 10, backgroundColor: colors.bg },
  backText: { fontSize: 15, fontWeight: "700", color: colors.blue },
  menu: { padding: 20, gap: 12 },
  heading: { fontSize: 24, fontWeight: "800", color: colors.text },
  sub: { fontSize: 16, color: colors.muted },
  menuBtn: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 10,
    padding: 16,
    gap: 4,
  },
  menuTitle: { fontSize: 17, fontWeight: "700", color: colors.text },
  menuDesc: { fontSize: 14, color: colors.muted },
  note: { fontSize: 13, color: colors.muted, marginTop: 8 },
});
