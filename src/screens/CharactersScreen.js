import React, { useEffect, useRef } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useCharacters from '../hooks/useCharacters';
import CharacterCard from '../components/CharacterCard';
import Feedback from '../components/Feedback';
import Button from '../components/Button';
import { colors } from '../config/theme';
export default function CharactersScreen() {
  const { characters, loading, error, page, pages, retry, next, previous } = useCharacters();
  const insets = useSafeAreaInsets();
  const list = useRef(null);
  useEffect(() => { list.current?.scrollToOffset({ offset: 0, animated: false }); }, [page]);
  return <View style={{ flex: 1, paddingBottom: insets.bottom }}>
    <View style={styles.header}><Text style={styles.heading}>Archivo multiversal</Text><Text style={styles.caption}>Página {page} de {pages} · Personajes de la API</Text></View>
    {loading ? <Feedback loading message="Abriendo el portal…" /> : error ? <Feedback message={error} onRetry={retry} /> : <FlatList ref={list} data={characters} keyExtractor={item => String(item.id)} renderItem={({ item }) => <CharacterCard character={item} />} contentContainerStyle={styles.list} ListEmptyComponent={<Feedback message="No hay personajes disponibles." />} />}
    <View style={styles.controls}><View style={styles.control}><Button title="← Anterior" onPress={previous} disabled={loading || page <= 1} /></View><View style={styles.control}><Button title="Siguiente →" onPress={next} disabled={loading || page >= pages} /></View></View>
  </View>;
}
const styles = StyleSheet.create({ header: { padding: 24, gap: 8 }, heading: { color: colors.text, fontSize: 26, fontWeight: '800' }, caption: { color: colors.muted, fontSize: 13 }, list: { paddingHorizontal: 24, paddingBottom: 12 }, controls: { flexDirection: 'row', gap: 12, padding: 16, borderTopWidth: 1, borderColor: colors.border }, control: { flex: 1 } });
