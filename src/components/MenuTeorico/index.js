
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, FlatList, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('screen');

export default function MenuTeorico(props) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}> Desenvolvimento</Text>
                <Text style={styles.content}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>
            <View>
                <Text style={styles.title}> Cargos</Text>
                <Text style={styles.content}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>
            <View>
                <Text style={styles.title}>Faixa Salarial</Text>
                <Text style={styles.content}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>
            <View>
                <Text style={styles.title}>Habilidades buscadas</Text>
                <Text style={styles.content}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1F1F1',
        width: '80%',
        height: '70%',
        justifyContent: 'space-around'
    },
    title: {
        color: '#1E5128',
        fontSize: 24,
        fontFamily: 'Roboto_700Bold'
    },
    content: {
        color: '#727272',
        fontSize:18,
        fontFamily: 'Roboto_400Regular'
    }
});
