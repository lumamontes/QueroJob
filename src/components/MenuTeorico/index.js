
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,FlatList} from 'react-native';

export default function MenuTeorico(props) {
    const menus = [
        {
            title: 'Área',
            link: 'area'
        },
        {
            title: 'Currículo',
            link: 'curriculo'
        },
        {
            title: 'Vagas',
            link: 'vagas'
        },
        {
            title: 'Portfólio',
            link: 'portfolio'
        },
    ];
  
    return (
        <View style={styles.container}>
            <FlatList
                data={menus}
                style={styles.menus}
                keyExtractor={option => String(option.title)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: option }) =>
                (
                    <TouchableOpacity style={styles.menu_option} onPress={() => navigation.navigate(option.link)}>
                        <Text style={styles.title}>{option.title}</Text>
                    </TouchableOpacity>
                )}
            >
            </FlatList> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        backgroundColor: 'red',
        color: 'white',
    },
    menus: {
        flexDirection: 'row',
        backgroundColor: 'blue',
    },
    menu_option: {
        width: '100%',
        backgroundColor: 'green',
        textAlign: 'center'
    }

});
