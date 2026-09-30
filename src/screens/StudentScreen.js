import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '../components/Button';
import { student } from '../config/student';
import { colors } from '../config/theme';
export default function StudentScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  return <ScrollView contentContainerStyle={[styles.page, { paddingBottom: Math.max(insets.bottom, 24) }]}>
    <Image source={require('../../assets/rick-splash.png')} style={styles.icon} resizeMode="contain" accessibilityLabel="Rick" />
    <Text style={styles.tag}>DESARROLLO DE APLICACIONES MÓVILES</Text>
    <Text style={styles.heading}>Hola, soy{ '\n' }{student.name}</Text>
    <Text style={styles.subtitle}>Mi perfil y una exploración del universo de Rick and Morty.</Text>
    <View style={styles.card}>{[['Nombre', student.name], ['Carnet', student.carnet], ['Sección', student.section], ['Grupo', student.group]].map(([label, value]) => <View key={label} style={styles.row}><Text style={styles.label}>{label}</Text><Text style={styles.value}>{value}</Text></View>)}</View>
    <Button title="Explorar personajes →" onPress={() => navigation.navigate('Characters')} />
    <Text style={styles.footer}>Perfil 3 · React Native + Expo</Text>
  </ScrollView>;
}
const styles = StyleSheet.create({ page: { padding: 24, gap: 22 }, icon: { height: 220, width: 160, alignSelf: 'center' }, tag: { fontSize: 11, letterSpacing: 2, color: colors.purple }, heading: { fontSize: 36, lineHeight: 43, fontWeight: '800', color: colors.text }, subtitle: { fontSize: 16, lineHeight: 24, color: colors.muted }, card: { backgroundColor: colors.surface, borderRadius: 22, padding: 20, gap: 20, borderWidth: 1, borderColor: colors.border }, row: { gap: 5 }, label: { color: colors.muted, fontSize: 13 }, value: { color: colors.text, fontSize: 18, fontWeight: '600' }, footer: { color: colors.muted, textAlign: 'center', fontSize: 12 } });
