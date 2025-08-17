import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function Contacto({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text>Nueva pantalla con ScrollView</Text>
        <Text>Podés agregar más contenido acá</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 12,
    },
});
