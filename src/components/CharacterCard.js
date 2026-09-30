import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { colors } from '../config/theme';
const statuses = { Alive: 'Vivo', Dead: 'Muerto', unknown: 'Desconocido' };
export default function CharacterCard({ character }) {
  return <View style={styles.card}>
    <Image source={{ uri: character.image }} style={styles.image} accessibilityLabel={`Imagen de ${character.name}`} />
    <View style={styles.body}><Text style={styles.status}>{statuses[character.status] || character.status} · {character.species}</Text><Text style={styles.name}>{character.name}</Text>
      <Text style={styles.description}>{character.name} pertenece a la especie {character.species}. Su lugar de origen es {character.origin.name} y su última ubicación conocida es {character.location.name}.</Text>
      <Text style={styles.meta}>Género: {character.gender} · Episodios: {character.episode.length}</Text>
    </View>
  </View>;
}
const styles = StyleSheet.create({ card: { backgroundColor: colors.surface, borderRadius: 22, overflow: 'hidden', marginBottom: 18, borderWidth: 1, borderColor: colors.border }, image: { width: '100%', aspectRatio: 1 }, body: { padding: 20, gap: 10 }, status: { color: colors.purple, fontSize: 13 }, name: { color: colors.text, fontWeight: '800', fontSize: 24 }, description: { color: colors.muted, lineHeight: 22, fontSize: 15 }, meta: { color: colors.purple, fontSize: 13 } });
