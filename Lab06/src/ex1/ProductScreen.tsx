import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { colors, formatPrice } from "../theme";
import { PHONE_COLORS } from "../data/phones";
import { Phone } from "../types";
import { Stars } from "../components/Stars";
import type { SelectPhoneParamList } from "./SelectPhoneApp";

type Props = NativeStackScreenProps<SelectPhoneParamList, "Product"> & {
  phone: Phone;
};

export function ProductScreen({ navigation, route, phone }: Props) {
  const picked = route.params?.color;
  const shown = picked ?? phone.defaultColor;

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.imageWrap}>
        <Image
          source={PHONE_COLORS[shown].image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{phone.name}</Text>
        <View style={styles.row}>
          <Stars value={phone.rating} />
          <Text style={styles.review}>(Xem {phone.reviewCount} đánh giá)</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.price}>{formatPrice(phone.price)}</Text>
          <Text style={styles.oldPrice}>{formatPrice(phone.oldPrice)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.badge}>{phone.badge}</Text>
          <Text style={styles.badgeHelp}> ?</Text>
        </View>

        {/* TODO 1: nút chọn màu */}
        <Pressable
          style={styles.chooseBtn}
          onPress={() => navigation.navigate("ChooseColor", { color: picked })}
        >
          <Text style={styles.chooseText}>
            {picked ? "4 MÀU-CHỌN LOẠI" : "4 MÀU-CHỌN MÀU"}
          </Text>
          <Text style={styles.chooseArrow}>{">"}</Text>
        </Pressable>
      </View>

      {/* TODO 2: nút CHỌN MUA, nằm sát đáy (root là flex column,
          imageWrap có flex: 1 nên khối này bị đẩy xuống đáy) */}
      <Pressable style={styles.buyBtn} onPress={() => {}}>
        <Text style={styles.buyText}>CHỌN MUA</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 },
  imageWrap: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: "100%", height: 320 },
  info: { gap: 10, paddingBottom: 12 },
  name: { fontSize: 16, fontWeight: "600", color: colors.text },
  row: { flexDirection: "row", alignItems: "center", gap: 8, flexWrap: "wrap" },
  review: { fontSize: 14, color: colors.muted },
  price: { fontSize: 20, fontWeight: "800", color: colors.text },
  oldPrice: {
    fontSize: 15,
    color: colors.muted,
    textDecorationLine: "line-through",
  },
  badge: { fontSize: 13, fontWeight: "700", color: colors.red },
  badgeHelp: {
    fontSize: 13,
    fontWeight: "700",
    color: "#fff",
    backgroundColor: colors.red,
    borderRadius: 10,
    width: 20,
    height: 20,
    textAlign: "center",
    overflow: "hidden",
  },
  chooseBtn: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 4,
    position: "relative",
  },
  chooseText: { fontSize: 14, fontWeight: "600", color: colors.text },
  chooseArrow: {
    position: "absolute",
    right: 12,
    top: 10,
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },
  buyBtn: {
    backgroundColor: colors.red,
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 8,
  },
  buyText: { color: "#fff", fontSize: 16, fontWeight: "800" },
});
