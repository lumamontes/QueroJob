import * as React from 'react';
import {
    View, Text, SafeAreaView,
    TextInput, ActivityIndicator, TouchableOpacity, StyleSheet, StatusBar
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Entypo } from '@expo/vector-icons';
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

export default function Register({ navigation }) {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <View style={styles.loginContainer}>
                    <Formik
                        initialValues={{ name: '', email: '', password: '', area: '' }}
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
                                <TextInput
                                    name="name"
                                    placeholder="Nome"
                                    style={styles.textInput}
                                    onChangeText={formikProps.handleChange('name')}
                                    onBlur={formikProps.handleBlur('email')}
                                    value={formikProps.name}
                                />
                                <Text style={{ color: 'red' }}>{formikProps.errors.name}</Text>
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
                                <View style={styles.searchSection}>
                                    <TextInput
                                        name="password"
                                        placeholder="Senha"
                                        style={styles.input}
                                        onChangeText={formikProps.handleChange('password')}
                                        // onBlur={formikProps.handleBlur('password')}
                                        value={formikProps.password}
                                        secureTextEntry={true}
                                    />
                                    <Entypo style={styles.showIcon} name="eye-with-line" size={24} color="#727272" />
                                </View>
                                <Text style={{ color: 'red' }}>{formikProps.errors.password}</Text>
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
                                {formikProps.isSubmitting ? (
                                    <ActivityIndicator size="small" color="#4E9F3D" />
                                ) : (
                                    <TouchableOpacity title="Submit" onPress={() => navigation.navigate('Home')} style={
                                        styles.register_button
                                    }>
                                        {/* <TouchableOpacity title="Submit" onPress={formikProps.handleSubmit} style={
                                        styles.register_button
                                    }> */}
                                        <Text style={styles.text_button_register}>Cadastre-se</Text>
                                    </TouchableOpacity>
                                )}
                            </React.Fragment>
                        )}
                    </Formik>
                </View>
                <View style={styles.link_container}>
                    <Text>Já possui conta?                       
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.url_login} > Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        fontFamily: 'Roboto_700Bold',

    },
    loginContainer: {
        width: '75%',
        alignItems: 'center',
    },
    textInput: {
        height: 52,
        width: '100%',
        margin: 10,
        color: '#727272',
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 8,
        padding: 10
    },

    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
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
    register_button: {
        backgroundColor: '#1E5128',
        height: 52,
        width: '100%',
        borderRadius: 6,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        marginTop: 30,
    },
    text_button_register: {
        fontSize: 18,
        color: '#F1F1F1',
        fontWeight: 'bold',
        fontFamily: 'Roboto_700Bold',
        textAlign: 'center'
    },
    pickerStyles: {
        width: '100%',
        backgroundColor: '#fff',
        color: '#424242'
    },
    link_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    url_login:{
        color: '#4E9F3D',
        fontWeight: 'bold'
    }
})