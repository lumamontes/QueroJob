import React from 'react';
import {
    View, Text, SafeAreaView,
    TextInput, ActivityIndicator, TouchableOpacity, StyleSheet, Image
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Picker } from '@react-native-picker/picker';

const areas = ['Desenvolvimento', 'Comercial'];

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required('Preencha o seu nome')
        .min(8, ({ min }) => `Nome deve ter no mínimo ${min} caracteres`),
    email: yup
        .string()
        .email("Digite um email válido")
        .required('Preencha o seu email'),
    password: yup
        .string()
        .required('Preenche a sua senha')
        .min(8, ({ min }) => `Senha deve ter no mínimo ${min} characters`),
    area: yup
        .string()
        .required('Escolha sua área'),
});

export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.profile_container}>
                <Image style={styles.avatar}
                    source={{ uri: 'https://imgur.com/fHFyM9g.jpg' }}
                />
                <Text style={styles.profile_name}>Alterar foto</Text>
            </View>
            <View style={styles.form_container}>
                <Formik
                    initialValues={{ name: 'Bruna Ferreira', email: 'brunaferreira@gmail.com', area: '' }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            actions.setSubmitting(false);
                        }, 1000);
                        console.log(values)
                    }}
                    validationSchema={validationSchema}
                >
                    {(formikProps,) => (
                        <React.Fragment>
                            <Text style={styles.label_form}>Nome</Text>
                            <TextInput
                                name="name"
                                placeholder="Nome"
                                style={styles.textInput}
                                onChangeText={formikProps.handleChange('name')}
                                onBlur={formikProps.handleBlur('email')}
                                value={formikProps.name}
                            />
                            <Text style={{ color: 'red' }}>{formikProps.errors.name}</Text>
                            <Text style={styles.label_form}>Email</Text>
                            <TextInput
                                name="email"
                                placeholder="Email"
                                style={styles.textInput}
                                onChangeText={formikProps.handleChange('email')}
                                // onBlur={formikProps.handleBlur('email')}
                                value={formikProps.email}
                                keyboardType="email-address"
                            />
                            <Text style={{ color: 'red' }}>{formikProps.errors.email}</Text>

                            <Text style={styles.label_form}>Área</Text>
                            <Picker
                                mode={'dropdown'}
                                placeholder={{ label: "Select you favourite language", value: null }}
                                selectedValue={formikProps.values.area}
                                style={styles.pickerStyles}
                                onValueChange={formikProps.handleChange('area')}>
                                {
                                    areas.map(area => <Picker.Item key={area} label={area} value={area} />)
                                }
                            </Picker>
                            <View style={styles.button_container}>

                            {formikProps.isSubmitting ? (
                                <ActivityIndicator size="small" color="#4E9F3D" />
                                ) : (
                                <TouchableOpacity style={styles.startButton}>
                                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Roboto_700Bold' }}>Salvar</Text>
                                </TouchableOpacity>

                            )}
                            </View>
                        </React.Fragment>
                    )}
                </Formik>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    profile_container: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#E3E3E3',
        borderBottomWidth: 2,
        padding: 40,
    },
    avatar: {
        width: 75,
        height: 71,
        borderRadius: 50,
    },
    profile_name: {
        marginTop: 15,
        color: '#727272',
        fontSize: 16,
        fontFamily: 'Roboto_400Regular'
    },
    profile_area: {
        fontSize: 14,
        color: '#727272',
        fontFamily: 'Roboto_400Regular'
    },
    form_container: {
        width: '80%',
        marginTop: 40
    },
    textInput: {
        height: 52,
        width: '100%',
        color: '#727272',
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 8,
        padding: 10
    },
    input: {
        flex: 1,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    pickerStyles: {
        width: '100%',
        backgroundColor: '#fff',
        color: '#424242'
    },
    button_container:{
        borderTopColor: '#E3E3E3',
        borderTopWidth: 2,
        paddingTop: 40,
        marginTop: 40
    },
    startButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#4E9F3D',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 30,
        width: '100%',
        height: 51,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      label_form:{
          color: '#727272',
          fontSize: 16,
          fontFamily: 'Roboto_400Regular',
          marginBottom: 5
      }
});
