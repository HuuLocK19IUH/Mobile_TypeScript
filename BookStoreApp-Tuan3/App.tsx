import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { Header } from './components/Header';
import { CategoryChips } from './components/CategoryChips';
import { BookGrid } from './components/BookGrid';
import { FloatingCartButton } from './components/FloatingCartButton';
import { BOOKS } from './data';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handlePressBook = (id: number) => {
    // demo: mỗi lần click sách -> tăng giỏ hàng
    setCartCount(prev => prev + 1);
  };

  return (
    <View style={styles.screen}>
      {/* 1. Header cố định trên cùng */}
      <Header />

      {/* 2. ScrollView chứa Chips + Grid */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Category Chips */}
        <CategoryChips />

        {/* Book Grid */}
        <BookGrid books={BOOKS} onPressBook={handlePressBook} />
      </ScrollView>

      {/* 3. Nút giỏ nổi — NGOÀI ScrollView */}
      <FloatingCartButton
        count={cartCount}
        onPress={() => {
          console.log('Go to Cart');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F8FAFC' },
  content: { padding: 16, paddingBottom: 100 },
});