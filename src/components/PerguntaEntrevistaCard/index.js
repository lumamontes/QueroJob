

import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function PerguntaEntrevistaCard(props, navigation) {
    return (
        <TouchableOpacity style={styles.question_container} onPress={() => props.navigation.navigate('Respostas', {data_pergunta: props.data, question: props.question, navigation: props.navigation})}>
            <Text style={styles.data}>{props.data}</Text>
            <Text style={styles.text_question}>{props.question}</Text>
            <AntDesign name="right" size={14} color="#4E9F3D" />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    question_container: {
        width: '100%',
        height: 67,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#EAEAEA',
        borderRadius: 8,
        marginBottom: 15
    },
    text_question: {
        color: '#1E5128',
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
    },    
    data: {
        color: '#4E9F3D',
        fontFamily: 'Roboto_700Bold',
        fontSize: 14,
    },


});
