import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet, Image } from 'react-native';
import { Pressable } from "react-native-web";

export default function Home() {
    const isAuthenticated = false;
    return (
        <View>
            <Text>Dispositivos</Text>
            <View>
                <Dispositivo/>
                <Dispositivo/>
                <Pressable>
                    <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828926.png'}}/>
                </Pressable>
            </View>
            <Text>Clima</Text>
            {/* Va a haber que conectar con la API del clima */}
            <Text>Última actividad</Text>
            <View>
                
            </View>

        </View>
    );
}
