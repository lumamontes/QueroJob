import * as React from 'react';
import {
    Button, View, Text, SafeAreaView,
    TextInput, ActivityIndicator, TouchableOpacity, StyleSheet, StatusBar
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Entypo } from '@expo/vector-icons';

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Digite um email válido")
        .required('Preencha o seu email'),
    password: yup
        .string()
        .required('Preenche a sua senha')
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
});

export default function Login({navigation }) {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <View style={styles.loginContainer}>
                    <Text style={{ color: '#4E9F3D', fontSize: 36, fontFamily: 'Poppins_700Bold' }} >QueroJob</Text>
                    <Formik
                        initialValues={{ email: '', password: '' }}
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

                                {formikProps.isSubmitting ? (
                                    <ActivityIndicator size="small" color="#4E9F3D" />
                                ) : (
                                    <TouchableOpacity title="Submit" onPress={formikProps.handleSubmit} style={
                                        styles.login_button
                                    }>
                                        <Text style={styles.text_button}>Entrar</Text>
                                    </TouchableOpacity>
                                )}
                            </React.Fragment>
                        )}
                    </Formik>
                    <TouchableOpacity title="Submit" onPress={() => navigation.navigate('Register')} style={
                        styles.register_button
                    }>
                        <Text style={styles.text_button_register}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    login_button: {
        backgroundColor: '#D8E9A8',
        height: 52,
        width: '100%',
        borderRadius: 6,
        padding: 10,
        display: 'flex',
        justifyContent: 'center'
    },
    register_button: {
        backgroundColor: '#1E5128',
        height: 52,
        width: '100%',
        borderRadius: 6,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
    },
    text_button: {
        fontSize: 18,
        color: '#1E5128',
        fontWeight: 'bold',
        fontFamily: 'Roboto_700Bold',
        textAlign: 'center'
    },
    text_button_register: {
        fontSize: 18,
        color: '#F1F1F1',
        fontWeight: 'bold',
        fontFamily: 'Roboto_700Bold',
        textAlign: 'center'
    }
})