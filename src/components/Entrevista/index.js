
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import PerguntaEntrevistaCard from '../PerguntaEntrevistaCard';
const { width, height } = Dimensions.get('screen');

const perguntas = [
    {
        id: '1',
        data_pergunta: '21/06',
        titulo: 'Qual foi sua maior conquis...',
    },
    {
        id: '2',
        data_pergunta: '21/06',
        titulo: 'Qual foi sua maior conquis...',
    },
]

export default function Entrevista(props) {
    return (
        <View style={styles.menu_container}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.question_container} onPress={() => props.navigation.navigate('PerguntaDia')}>
                    <MaterialCommunityIcons name="file-question" size={24} color="#4E9F3D" />
                    <Text style={styles.text_question}>Pergunta do dia</Text>
                    <AntDesign name="right" size={24} color="#4E9F3D" />
                </TouchableOpacity>
                <Text style={styles.description}>Responda a uma simulação de entrevista de emprego</Text>
            </View>
            <View style={styles.answers_container}> 
                <Text style={styles.title}>Perguntas respondidas</Text>
                    <FlatList
                        data={perguntas}
                        keyExtractor={pergunta => String(pergunta.id)}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item: pergunta }) => 
                        (
                            <PerguntaEntrevistaCard data={pergunta.data_pergunta} question={pergunta.titulo} navigation={props.navigation}/>
                        )}
                    >
            </FlatList>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.8,
        flex: 0.2,
        justifyContent: 'space-around',
        borderBottomColor: '#E3E3E3',
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginBottom: 30,
    },
    description: {
        fontSize: 14,
        fontFamily: 'Roboto_400Regular',
        color: '#727272',
    },
    answers_container: {
        width: width * 0.8,
        flex: 0.5,
        justifyContent: 'space-around',
    },
    title: {
        color: '#4E9F3D',
        fontSize: 24,
        fontFamily: 'Roboto_700Bold',
        marginBottom: 20,
    },
    menu_container: {
        flex: 1,
    },
    question_container: {
        width: '100%',
        height: 67,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#EAEAEA',
        borderRadius: 8,

    },
    text_question: {
        color: '#1E5128',
        fontFamily: 'Roboto_700Bold',
        fontSize: 18,
    },
});
