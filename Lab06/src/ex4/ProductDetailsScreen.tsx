import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors, formatPrice } from "../theme";
import { PHONE_COLORS, PHONES } from "../data/phones";
import { Stars } from "../components/Stars";
import { RootProps } from "./types";
import { useFavorites } from "./FavoritesContext";

export function ProductDetailsScreen({ route }: RootProps<"ProductDetails">) {
  const { id } = route.params;
  // TODO 4: lấy id rồi tìm phone trong PHONES
  const phone = PHONES.find((p) => p.id === id);
  const { has, toggle } = useFavorites();

  // TODO 5: không tìm thấy
  if (!phone) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>Không tìm thấy sản phẩm #{id}</Text>
      </View>
    );
  }

  const saved = has(phone.id);
  return (
    <View style={styles.root}>
      {/* TODO 6: ảnh (màu mặc định), tên, sao, giá, nhà cung cấp */}
      <Image
        source={PHONE_COLORS[phone.defaultColor].image}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.name}>{phone.name}</Text>
      <View style={styles.row}>
        <Stars value={phone.rating} />
        <Text style={styles.muted}>(Xem {phone.reviewCount} đánh giá)</Text>
      </View>
      <Text style={styles.price}>{formatPrice(phone.price)}</Text>
      <Text style={styles.muted}>Cung cấp bởi {phone.supplier}</Text>

      {/* TODO 7: nút yêu thích */}
      <Pressable
        style={[styles.favBtn, saved && styles.favBtnOn]}
        onPress={() => toggle(phone.id)}
      >
        <Text style={styles.favText}>
          {saved ? "♥ Đã lưu" : "♡ Lưu vào yêu thích"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, padding: 16, gap: 10, backgroundColor: "#fff" },
  center: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  notFound: { fontSize: 16, color: colors.muted, textAlign: "center" },
  image: { width: "100%", height: 280 },
  name: { fontSize: 17, fontWeight: "700", color: colors.text },
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  price: { fontSize: 20, fontWeight: "800", color: colors.text },
  muted: { fontSize: 14, color: colors.muted },
  favBtn: {
    borderWidth: 1,
    borderColor: colors.red,
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 8,
  },
  favBtnOn: { backgroundColor: "#FDECEA" },
  favText: { fontSize: 16, fontWeight: "700", color: colors.red },
});
