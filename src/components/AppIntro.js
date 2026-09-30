import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { colors } from '../config/theme';
export default function AppIntro() {
 return <View style={styles.container}><Image source={require('../../assets/rick-logo.png')} resizeMode="contain" style={styles.image} accessibilityLabel="Rick and Morty: Rick pepinillo en el espacio" /><Text style={styles.title}>Perfil 3 · Mario Arteaga</Text></View>;
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 24 }, image: { width: '75%', height: '60%' }, title: { color: colors.text, fontSize: 20, fontWeight: '700', textAlign: 'center' } });
