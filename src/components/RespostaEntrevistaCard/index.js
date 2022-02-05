

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function RespostaEntrevistaCard(props) {
    return (
        <View style={styles.reply_container}>
            <View style={{ alignItems: 'center', justifyContent: 'center',}}><Text style={styles.reply}>{props.resposta}</Text></View>
            <View style={styles.reply_info}>
                <View>
                    <Text style={styles.title}>{props.person}</Text>
                    <Text style={styles.subtitle}>{props.profissao}</Text>
                </View>
                <Image style={styles.avatar}
                    source={{ uri: 'https://imgur.com/fHFyM9g.jpg' }}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    reply_container: {
        backgroundColor: '#EAEAEA',
        borderRadius: 8,
        minHeight: 130,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 10,

    },
    reply: {
        color: '#000000',
        fontSize: 16,
        marginBottom: 10
    },
    title: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'Roboto_700Bold'
    },
    subtitle: {
        color: '#000000',
        fontSize: 14,
        fontFamily: 'Roboto_400Regular'
    },
    reply_info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },

});
