import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import ElegirFoto from '../components/ElegirFoto';

export default function AgregarDispositivo({ navigation }) {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
            nombre: '',
            descripcion: '',
            foto: ''
        }
    });
    const onSubmit = (data) => {
        // evitar "Cannot update a component ... while rendering a diferente componente"
        // deferir la navegación al siguiente tick para no causar un setState durante el render
        setTimeout(() => {
            navigation.navigate('HomeMain');
        }, 0);
    };
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <View style={styles.contenido}>
                <Text style={styles.textoInicio}>Añadir dispositivo</Text>
                <Text style={styles.campoTexto}>Foto de perfil</Text>
                <ElegirFoto/>
                {errors.foto && <Text style={styles.textoError}>{errors.foto.message}</Text>}
                <Text style={styles.campoTexto}>Nombre</Text>
                <Controller
                control={control}
                name='nombre'
                rules={{ required: 'Ingrese el nombre' }}
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
                <Text style={styles.campoTexto}>Descripción</Text>
                <Controller
                control={control}
                name='descripcion'
                rules={{ required: 'Ingrese la descripción' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                    style={styles.input}
                    placeholder='Descripción (habitaciones)'
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    />
                )}
                />
                {errors.descripcion && <Text style={styles.textoError}>{errors.descripcion.message}</Text>}
                <View style={styles.buttonCont}>
                    <Pressable style={styles.boton} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.textButton}>Añadir</Text>
                    </Pressable>
                </View>
            </View>
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