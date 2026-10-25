import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { PHONES } from "../data/phones";
import { colors } from "../theme";
import { TabProps } from "./types";
import { useFavorites } from "./FavoritesContext";
import { ProductRow } from "./ProductRow";

export function FavoritesTab({ navigation }: TabProps<"Favorites">) {
  // TODO 8: lấy ids từ useFavorites(), lọc PHONES theo ids
  const { ids } = useFavorites();
  const favs = PHONES.filter((p) => ids.includes(p.id));

  if (favs.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.empty}>Chưa có sản phẩm nào được lưu.</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={favs}
      keyExtractor={(p) => p.id}
      contentContainerStyle={{ padding: 16, gap: 10 }}
      renderItem={({ item }) => (
        <ProductRow
          phone={item}
          onPress={() =>
            navigation.navigate("ProductDetails", { id: item.id })
          }
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  empty: { fontSize: 16, color: colors.muted, textAlign: "center" },
});
