import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Button from './Button';
import { colors } from '../config/theme';
export default function Feedback({ loading, message, onRetry }) {
  return <View style={styles.box}>{loading && <ActivityIndicator size="large" color={colors.purple} />}<Text style={styles.text}>{message}</Text>{onRetry && <Button title="Reintentar" onPress={onRetry} />}</View>;
}
const styles = StyleSheet.create({ box: { padding: 24, gap: 18 }, text: { color: colors.muted, textAlign: 'center', fontSize: 16 } });
