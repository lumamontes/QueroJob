
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, FlatList, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('screen');

const Options = [
    {
        id: '1',
        nome_aula: 'Introdução',
        link_aula: '',
        foto_aula: ''
    },
    {
        id: '2',
        nome_aula: 'Introdução2',
        link_aula: '',
        foto_aula: ''
    },

    {
        id: '3',
        nome_aula: 'Conclusão',
        link_aula: '',
        foto_aula: ''
    },
]

const artigos = [
    {
        id: '1',
        nome_aula: 'Introdução',
        link_aula: '',
        foto_aula: ''
    },
    {
        id: '2',
        nome_aula: 'Introdução2',
        link_aula: '',
        foto_aula: ''
    },

    {
        id: '3',
        nome_aula: 'Conclusão',
        link_aula: '',
        foto_aula: ''
    },
]

export default function Curriculo(props) {
    return (
        <View style={styles.menu_container}>
            <View>

                <Text style={styles.title}>Aulas</Text>
                <FlatList
                    data={Options}
                    keyExtractor={item => item.id}
                    numColumns={Options.length}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                    (<View style={styles.container}>
                        <Text>{item.nome_aula}</Text>
                    </View>
                    )}
                >
                </FlatList>
            </View>

            <View>
                <Text style={styles.title}>Artigos</Text>
                <FlatList
                    data={Options}
                    keyExtractor={item => item.id}
                    numColumns={Options.length}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                    (<View style={styles.container}>
                        <Text>{item.nome_aula}</Text>
                    </View>
                    )}
                >
                </FlatList>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 155,
        height: 142,
        borderRadius: 6,
        backgroundColor: 'red',
        marginLeft: 10
    },
    menu_option: {
        backgroundColor: 'red',
        marginHorizontal: 10,

    },
    title: {
        color: '#4E9F3D',
        fontSize: 24,
        fontFamily: 'Roboto_700Bold'
    },
    menu_container: {
        height: '30%',
        marginLeft: 30
    }
});
