

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function ArtigosCards(props) {
    return (
        <TouchableOpacity style={styles.question_container}>
            <MaterialCommunityIcons name="file-question" size={20} color="#4E9F3D" />
            <Text style={styles.text_question}>{props.artigo_title}</Text>
            <AntDesign name="right" size={20} color="#4E9F3D" />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    question_container: {
        width: '90%',
        height: 67,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#EAEAEA',
        borderRadius: 8,
        marginBottom: 10
      },
      text_question: {
        color: '#1E5128',
        fontFamily: 'Roboto_700Bold',
        fontSize: 18,
      },    
});
