import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "../components/Header";
import { CategoryChips } from "../components/CategoryChips";
import { BookGrid } from "../components/BookGrid";
import { FloatingCartButton } from "../components/FloatingCartButton";

import { BOOKS } from "../data"; // giả sử bạn đã có data
import { useRouter } from "expo-router";

export default function HomeScreen() {
    const router = useRouter();

    const handlePressBook = (id: number) => {
        console.log("CLICK", id);
        router.push("/detail");
    };
  

  const handleCartPress = () => {
    console.log("Open cart");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER (KHÔNG SCROLL) */}
      <Header />

      {/* SCROLL VIEW */}
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <CategoryChips />
        <BookGrid books={BOOKS} onPressBook={handlePressBook} />
      </ScrollView>

      {/* FLOATING BUTTON (KHÔNG ĐƯỢC ĐẶT TRONG SCROLLVIEW) */}
      <FloatingCartButton count={2} onPress={handleCartPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative", // QUAN TRỌNG để button absolute hoạt động đúng
    backgroundColor: "#F9FAFB",
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: 12,
    paddingBottom: 100, // 🔥 tránh bị Floating button che
  },
});