import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
export default function App() {
    const isAuthenticated = false;
    return (
        <View style={styles.container}></View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});