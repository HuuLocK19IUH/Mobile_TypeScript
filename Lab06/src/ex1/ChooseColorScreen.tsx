import React, { useState } from "react";
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
import { COLOR_ORDER, PHONE_COLORS } from "../data/phones";
import { ColorKey, Phone } from "../types";
import type { SelectPhoneParamList } from "./SelectPhoneApp";

type Props = NativeStackScreenProps<SelectPhoneParamList, "ChooseColor"> & {
  phone: Phone;
};

export function ChooseColorScreen({ navigation, route, phone }: Props) {
  const [picked, setPicked] = useState<ColorKey | undefined>(
    route.params?.color
  );
  const [line1, line2] = phone.name.split(" - ");
  const shown = picked ?? phone.defaultColor;

  return (
    <SafeAreaView style={styles.root}>
      {/* Nửa trên: nền trắng */}
      <View style={styles.header}>
        <Image
          source={PHONE_COLORS[shown].image}
          style={styles.thumb}
          resizeMode="contain"
        />
        <View style={styles.headerText}>
          <Text style={styles.small}>{line1}</Text>
          <Text style={styles.small}>{line2}</Text>
          {/* TODO 3: chỉ khi đã chọn màu mới hiện thêm 3 dòng này */}
          {picked ? (
            <>
              <Text style={styles.small}>
                Màu:{" "}
                <Text style={styles.bold}>{PHONE_COLORS[picked].label}</Text>
              </Text>
              <Text style={styles.small}>
                Cung cấp bởi{" "}
                <Text style={styles.bold}>{phone.supplier}</Text>
              </Text>
              <Text style={styles.bold}>{formatPrice(phone.price)}</Text>
            </>
          ) : null}
        </View>
      </View>

      {/* Nửa dưới: nền xám */}
      <View style={styles.body}>
        <Text style={styles.hint}>Chọn một màu bên dưới:</Text>
        <View style={styles.swatches}>
          {COLOR_ORDER.map((key) => (
            <Pressable
              key={key}
              onPress={() => setPicked(key)}
              style={[
                styles.swatch,
                { backgroundColor: PHONE_COLORS[key].hex },
                picked === key && styles.swatchOn,
              ]}
            />
          ))}
        </View>

        {/* TODO 4: nút XONG, quay lại Product kèm màu đã chọn.
            Dùng dạng object { name, params, merge: true } để params
            được merge vào màn Product đã có, thay vì push thêm màn mới. */}
        <Pressable
          style={styles.doneBtn}
          onPress={() =>
            navigation.navigate({
              name: "Product",
              params: { color: picked },
              merge: true,
            })
          }
        >
          <Text style={styles.doneText}>XONG</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    padding: 16,
    gap: 12,
    alignItems: "center",
  },
  thumb: { width: 110, height: 110 },
  headerText: { flex: 1, gap: 4 },
  small: { fontSize: 14, color: colors.text },
  bold: { fontSize: 14, fontWeight: "800", color: colors.text },
  body: {
    flex: 1,
    backgroundColor: colors.grey,
    padding: 16,
    gap: 12,
  },
  hint: { fontSize: 15, color: colors.text },
  swatches: { gap: 10 },
  swatch: { height: 56, borderRadius: 6 },
  swatchOn: { borderWidth: 3, borderColor: colors.navy },
  doneBtn: {
    backgroundColor: colors.blue,
    borderRadius: 4,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
  },
  doneText: { color: "#fff", fontSize: 16, fontWeight: "800" },
});
