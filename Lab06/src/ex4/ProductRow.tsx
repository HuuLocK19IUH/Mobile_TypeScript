import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors, formatPrice } from "../theme";
import { PHONE_COLORS } from "../data/phones";
import { Phone } from "../types";
import { Stars } from "../components/Stars";

export function ProductRow({
  phone,
  onPress,
}: {
  phone: Phone;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image
        source={PHONE_COLORS[phone.defaultColor].image}
        style={styles.thumb}
        resizeMode="contain"
      />
      <View style={styles.info}>
        <Text style={styles.name}>{phone.name.split(" - ")[0]}</Text>
        <Stars value={phone.rating} />
        <Text style={styles.price}>{formatPrice(phone.price)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 8,
    padding: 12,
  },
  thumb: { width: 64, height: 64 },
  info: { flex: 1, gap: 4 },
  name: { fontSize: 15, fontWeight: "600", color: colors.text },
  price: { fontSize: 15, fontWeight: "800", color: colors.text },
});
