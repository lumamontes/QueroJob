
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, FlatList, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default function MenuTeorico(props) {
    const habilidades = [{
        nome: 'Conhecimento de lógica de programação'
    }, {
        nome: 'Analisar e resolver problemas'

    }, {
        nome: 'Atualizar-se e estudar constantemente'

    }, {
        nome: 'Compreender diferentes tipos de linguagem de programação'

    }, {
        nome: 'Inglês'

    }
    ]

    const cargos = [{
        cargo: 'Desenvolvedor Web'
    }, {
        cargo: 'Desenvolvedor Android'

    }, {
        cargo: 'Desevolvendor FullStrack'

    }, {
        cargo: 'Desenvolvedor Mobile'

    }

    ]

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}> Desenvolvimento</Text>
                <Text style={styles.content}>
                    A área de Desenvolvimento foca na construção de sites, aplicativos, softwares, bancos de dados e quaisquer páginas que podemos encontrar e construir na internet hoje, das mais simples até as mais complexas.</Text>
            </View>
            <View>
                <Text style={styles.title}> Cargos</Text>
                <FlatList
                    data={cargos}
                    keyExtractor={option => String(cargos.cargo)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: option }) =>
                    (
                        <Text style={styles.content}>{option.cargo}</Text>


                    )}
                >
                </FlatList> 
            </View>
            <View>
                <Text style={styles.title}>Faixa Salarial</Text>
                <Text style={styles.content}>
                    Desenvolvedor Web é de R$ 2.949 (em média)</Text>
            </View>
            <View>
                <Text style={styles.title}>Habilidades buscadas</Text>
                <FlatList
                    data={habilidades}
                    keyExtractor={option => String(habilidades.nome)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: option }) =>
                    (
                        <Text style={styles.content}>{option.nome}</Text>


                    )}
                >
                </FlatList> 
                    
                    
                    
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
        fontSize: 18,
        fontFamily: 'Roboto_400Regular'
    }
});
