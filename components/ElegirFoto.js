import React, { useState } from "react";
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { TextInput, Button, View, Text, StyleSheet } from 'react-native';
import { Pressable } from "react-native-web";

export default function ElegirFoto() {
    const [imagen, setImagen] = useState(null);
    const seleccionarDeGaleria = () =>{
        launchImageLibrary({mediaType: 'photo'}, (response)=>{
            if(response.didCancel){
                console.log("El usuario canceló");
            }
            else if(response.errorMessage){
                console.log('ImagePicker error: ', response.errorMessage);
            }
            else{
                setImagen(response.assets[0].uri);
            }
        })
    }
    const sacarFoto = () =>{
        launchCamera({mediaType: 'photo'}, (response)=>{
            if(response.didCancel){
                console.log('El usuario canceló');
            }
            else if(response.errorMessage){
                console.log('ImagePicker error: ', errorMessage);
            }
            else{
                setImagen(response.assets[0].uri);
            }
        })
    }

    return(
        <View style={styles.container}>
            <Pressable onPress={seleccionarDeGaleria} style={styles.buttonFoto}>
                <Text style={styles.textoPress}>Abrir galería</Text>
            </Pressable>
            <Pressable onPress={sacarFoto} style={styles.buttonFoto}>
                <Text style={styles.textoPress}>Sacar foto</Text>
            </Pressable>
            {imagen && (
                <Image source={{uri: imagen}} style={styles.imagenSeleccionada}/>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagenSeleccionada:{
        width: '30%',
        borderRadius:50
    },
    buttonFoto: {
        width: '50%',
        border: '1px solid black',
        backgroundColor:'white',
        height: 40,
        fontSize: 15,
        borderRadius:5,
        justifyContent: "center",
        margin: '0.5%',
        border: '1px solid #30376e'
    },
    textoPress: {
        textAlign: 'center',
        color: '#30376e'
    }
})