import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native-web';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import ElegirFoto from '../components/ElegirFoto';

export default function Login({ navigation }) {
    const { control, handleSubmit, formState: {errors} } = useForm({
        defaultValues:{
            nombre: '',
            email: '',
            contrasena: '',
            foto: ''
        }
    });
    const onSubmit = (data) => {
        navigation.navigate('EnviadoExito');

        //No sé si conviene renderizarlo o directamente crear una nueva screen(?
    }
    return (

        <View style={styles.container}>
            <View style={styles.contenido}>
                <Text style={styles.textoInicio}>Registrar</Text>
                <Text style={styles.campoTexto}>Mail</Text>
                <Controller
                control={control}
                name='mail'
                rules={{
                    required: 'Ingrese su mail',
                    pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                    style={styles.input}
                    placeholder='Mail'
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    />
                )}
                />
                {errors.mail && <Text style={styles.textoError}>{errors.mail.message}</Text>}

                <Text style={styles.campoTexto}>Nombre</Text>
                <Controller
                control={control}
                name='nombre'
                rules={{ required: 'Ingrese su nombre' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                    style={styles.input}
                    placeholder='Nombre'
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    />
                )}
                />
                {errors.nombre && <Text style={styles.textoError}>{errors.nombre.message}</Text>}
                <Text style={styles.campoTexto}>Contraseña</Text>
                <Controller
                control={control}
                name='contrasena'
                rules={{
                    required: 'Ingrese su contraseña',
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                    style={styles.input}
                    placeholder='Contraseña'
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    secureTextEntry={true} 
                    />
                )}
                />
                {errors.contrasena && <Text style={styles.textoError}>{errors.contrasena.message}</Text>}
                <Text style={styles.campoTexto}>Foto de perfil</Text>
                <Controller
                control={control}
                name='foto'
                rules={{ required: 'Ingrese el link a la foto' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                    style={styles.input}
                    placeholder='Foto de perfil'
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    />
                )}
                />
                <ElegirFoto/>
                {errors.foto && <Text style={styles.textoError}>{errors.foto.message}</Text>}
                <Pressable onPress={() => navigation.navigate('Iniciar sesión')}>
                    <Text style={styles.noCuenta}>Iniciar sesión</Text>
                </Pressable>
                <View style={styles.buttonCont}>
                    <Pressable style={styles.boton} onPress={handleSubmit(onSubmit)}><Text style={styles.textButton}>Enviar</Text></Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textoInicio: {
      fontSize: 24,
      marginBottom: 20,
    },
    campoTexto: {
      fontSize: 16,
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'left',
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      backgroundColor: 'white',
    },
    contenido: {  
      width: '40%',    
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 15
    },
    noCuenta: {
        fontStyle: 'italic',
        marginTop: 10,
        marginBottom: 10,
    },
    boton: {
      backgroundColor: '#636891',
      width: '40%',
      padding: 10,
      borderRadius: 6,
      alignItems: 'center',
      marginTop: 10,
    },
    textButton: {
      color: 'white',
      fontSize: 16,
    },
    buttonCont: {
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center'
    },

    textoError: {
        color: 'red'
    }
});