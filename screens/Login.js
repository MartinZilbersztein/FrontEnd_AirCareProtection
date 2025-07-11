import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native-web';

export default function Login({ navigation }) {
    const { control, handleSubmit, formState: {errors} } = useForm({
        defaultValues:{
            nombre: '',
            email: '',
            contrasena: ''
        }
    });
    const onSubmit = (data) => {
        navigation.navigate('EnviadoExito');

        //No sé si conviene renderizarlo o directamente crear una nueva screen(?
    }
    return (

        <View style={styles.container}>
            <Text>Nombre</Text>
            <Controller
            control={control}
            name='mail'
            rules={{
                required: 'Ingrese su mail',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido'
                  }
            }}
            render={({ field: { onChange, onBlur, value}}) => (
                <TextInput placeholder='Nombre'/>
            )}
            />
            {errors.nombre && <Text>{errors.nombre.message}</Text>}

            <Text>Mail</Text>
            <Controller
            control={control}
            name='nombre'
            rules={{
                required: 'Ingrese su mail',
            }}
            render={({ field: { onChange, onBlur, value}}) => (
                <TextInput placeholder='Nombre'/>
            )}
            />
            {errors.mail && <Text>{errors.mail.message}</Text>}

            <Text>Contraseña</Text>
            <Controller
            control={control}
            name='contrasena'
            rules={{
                required: 'Ingrese su contrasena',
            }}
            render={({ field: { onChange, onBlur, value}}) => (
                <TextInput placeholder='Contraseña'/>
            )}
            />
            {errors.contrasena && <Text>{errors.contrasena.message}</Text>}
            <Pressable onPress={() => navigation.navigate('Registrar')}>
                <Text>¿No tienes una cuenta?</Text>
            </Pressable>
            <Pressable onPress={handleSubmit(onSubmit)}><Text>Enviar</Text></Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});