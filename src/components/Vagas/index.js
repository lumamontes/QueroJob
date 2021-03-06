
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import AulasCard from '../AulasCard';
import ArtigosCard from '../ArtigoCard';
const {width, height} = Dimensions.get('screen');

const Options = [
    {
        id: '1',
        nome_aula: 'Introdução',
        link_aula: 'e_0yQQ9Bksg',
        foto_aula: ''
    },
]

const artigos = [
    {
        id: '1',
        titulo: 'Dicas para entrevistas',
        link: 'https://coodesh.com/blog/candidates/dicas/entrevista-tecnica-para-desenvolvedores',
        foto_aula: ''
    },
]

export default function Curriculo(props) {
    return (
        <View style={styles.menu_container}>
             <View style={styles.content_container}>
                <Text style={styles.title}>Aulas</Text>
                <FlatList
                    data={Options}
                    keyExtractor={item => item.id}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                    (<AulasCard link={item.link_aula
                    
                    } />
                    )}
                >
                </FlatList>
            </View>
            <View>
                <Text style={styles.title}>Artigos</Text>
                <FlatList
                    data={artigos}
                    keyExtractor={item => item.id}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                    (<ArtigosCard artigo_title={item.titulo
                    } link={item.link}/>
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
    content_container: {
        marginBottom: 30
    },
    title: {
        color: '#4E9F3D',
        fontSize: 24,
        fontFamily: 'Roboto_700Bold',
        marginBottom: 10
    },
    menu_container: {
        height: '30%',
        marginLeft: 30
    }
});
