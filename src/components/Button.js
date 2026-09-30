import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../config/theme';
export default function Button({ title, onPress, disabled = false }) {
  return <Pressable accessibilityRole="button" disabled={disabled} onPress={onPress} style={({ pressed }) => [styles.button, { opacity: disabled ? 0.45 : pressed ? 0.75 : 1 }]}><Text style={styles.text}>{title}</Text></Pressable>;
}
const styles = StyleSheet.create({ button: { backgroundColor: colors.green, padding: 16, borderRadius: 16, alignItems: 'center' }, text: { color: colors.background, fontWeight: '700', fontSize: 16 } });
