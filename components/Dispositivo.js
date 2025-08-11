import React, { useState } from "react";
import { TextInput, Button, View, Text, Image, StyleSheet } from 'react-native';
import { Pressable } from "react-native-web";

export default function Dispositivo (){
    return(
    <View>
        <Image source={{uri: 'https://acdn-us.mitiendanube.com/stores/001/593/734/products/ngs-025-rj-marzo-20191-e7ad1646b181ad357216267077747762-1024-1024.jpg'}}/>
        <Pressable>
            <Image source={{uri: 'https://images.vexels.com/media/users/3/153377/isolated/preview/4e3ad7aee69e5da6de7e91b63e3952de-apagar-el-icono-de-trazo.png'}}/>
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
})