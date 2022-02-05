import React from 'react';
import {
    View, Text, SafeAreaView,
    TextInput, ActivityIndicator, TouchableOpacity, StyleSheet, Image,Dimensions
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
const { width, height } = Dimensions.get('screen');
import { useHeaderHeight } from '@react-navigation/elements';

const validationSchema = yup.object().shape({
    question: yup
        .string()
        .required('Preencha sua resposta')
        .min(8, ({ min }) => `Nome deve ter no mínimo ${min} caracteres`),
});

export default function PerguntaDia({ navigation }) {
    const headerHeight = useHeaderHeight();
    return (
        <View style={[styles.container,{marginTop: headerHeight}
        ]}>
            <View style={styles.form_container}>
                <Formik
                    initialValues={{ question: ''}}
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
                            <View>
                            <Text style={styles.label_form}>Qual foi a sua maior conquista profissional até o momento?</Text>
                            <TextInput
                                name="question"
                                placeholder="Responda aqui.."
                                style={styles.textInput}
                                multiline={true}
                                numberOfLines={10}
                                onChangeText={formikProps.handleChange('question')}
                                value={formikProps.question}
                                
                            />

                            <Text style={{ color: 'red' }}>{formikProps.errors.question}</Text>
                            </View>
                            <View style={styles.button_container}>
                            {formikProps.isSubmitting ? (
                                <ActivityIndicator size="small" color="#4E9F3D" />
                                ) : (
                                <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Respostas')}>
                                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Roboto_700Bold' }}>Responder</Text>
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
    form_container: {
        width: width * 0.8,
        height: height * 0.7,
        justifyContent: 'space-around',
        borderTopColor: '#E3E3E3',
        borderTopWidth: 2,
        paddingTop: 40,
        marginTop: 40
    },
    textInput: {
        height: 128,
        width: '100%',
        color: '#727272',
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 8,
        padding: 10
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
        backgroundColor: '#1E5128',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 8,
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
          fontSize: 22,
          textAlign: 'center',
          fontFamily: 'Roboto_400Regular',
          marginBottom: 40
      }
});
