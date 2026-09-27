import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookDetailScreen() {
  const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 120000,
    cover: "https://picsum.photos/300/400",
    description:
      "Đây là mô tả rất dài... ".repeat(20), // giả lập nội dung dài
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ẢNH BÌA */}
      <Image source={{ uri: book.cover }} style={styles.cover} />

      {/* SCROLL NỘI DUNG */}
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <Text style={styles.price}>{book.price.toLocaleString()} đ</Text>

        <Text style={styles.description}>{book.description}</Text>
      </ScrollView>

      {/* FOOTER CỐ ĐỊNH */}
      <View style={styles.footer}>
        <Text style={styles.footerPrice}>
          {book.price.toLocaleString()} đ
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Thêm vào giỏ</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  // 📌 Ảnh bìa
  cover: {
    width: 200,
    aspectRatio: 3 / 4,
    alignSelf: "center", // 🔥 yêu cầu đề
    marginTop: 16,
    borderRadius: 8,
  },

  // 📌 Scroll giữa
  scroll: {
    flex: 1, // 🔥 QUAN TRỌNG
  },
  content: {
    padding: 16,
    paddingBottom: 100, // tránh bị footer che
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "green",
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    lineHeight: 20,
  },

  // 📌 Footer cố định
  footer: {
    flexDirection: "row", // 🔥 yêu cầu đề
    justifyContent: "space-between", // 🔥 yêu cầu đề
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },

  footerPrice: {
    fontSize: 16,
    fontWeight: "700",
  },

  button: {
    backgroundColor: "#4338CA",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});