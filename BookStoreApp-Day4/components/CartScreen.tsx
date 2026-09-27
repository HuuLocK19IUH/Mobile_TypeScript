import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

const CART = [
  {
    id: 1,
    title: "Clean Code",
    price: 120000,
    quantity: 1,
    cover: "https://picsum.photos/100/100",
  },
  {
    id: 2,
    title: "Refactoring",
    price: 150000,
    quantity: 2,
    cover: "https://picsum.photos/100/100",
  },
];

export default function CartScreen() {
  const total = CART.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      {/* LIST */}
      <ScrollView contentContainerStyle={styles.list}>
        {CART.map((item) => (
          <View key={item.id} style={styles.row}>
            <Image source={{ uri: item.cover }} style={styles.image} />

            <View style={styles.info}>
              <Text>{item.title}</Text>
              <Text>SL: {item.quantity}</Text>
            </View>

            <Text style={styles.price}>
              {(item.price * item.quantity).toLocaleString()} đ
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.total}>
          Tổng: {total.toLocaleString()} đ
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Thanh toán</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  list: {
    padding: 12,
    paddingBottom: 140, // 🔥 tránh bị footer + tab che
  },

  row: {
    flexDirection: "row", // 🔥 yêu cầu đề
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 6,
  },

  info: {
    flex: 1, // 🔥 chiếm phần giữa
    marginLeft: 10,
  },

  price: {
    width: 100, // 🔥 cố định bên phải
    textAlign: "right",
    fontWeight: "700",
    color: "green",
  },

  footer: {
    position: "absolute",
    bottom: 70, // 🔥 nằm trên tab bar
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
  },

  total: {
    fontWeight: "700",
    fontSize: 16,
  },

  button: {
    backgroundColor: "#4338CA",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
  },
});