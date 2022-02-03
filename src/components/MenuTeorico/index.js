
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,FlatList, Dimensions} from 'react-native';

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
            title: 'Portfólio2',
            link: 'portfolio'
        },
        {
            title: 'Portfólio3',
            link: 'portfolio'
        },        {
            title: 'Portfólio4',
            link: 'portfolio'
        },        {
            title: 'Portfólio5',
            link: 'portfolio'
        },        {
            title: 'Portfólio6',
            link: 'portfolio'
        },        {
            title: 'Portfólio7',
            link: 'portfolio'
        },
    ];
    const {width} = Dimensions.get('window');
    return (
        <View style={styles.container}>
            <FlatList
                data={menus}
                pagingEnabled
                style={styles.menu_container}
                snapToOffsets={[...Array(menus.lenght).map(
                    (x,i) => i = (width * 0.8 -40) + (i-1)* 40
                 )]}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                keyExtractor={option => String(option.title)}
                snapToAlignment='start'
                scrollEventThrottle={16}
                decelerationRate="fast"
                showsVerticalScrollIndicator={false}
                renderItem={({ item: option }) =>
                (
                    <TouchableOpacity style={ [styles.menu_option, {height: width/2.6, width: width*0.8 - 20}]} onPress={() => navigation.navigate(option.link)}>
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
        backgroundColor: '#F1F1F1',
    },
    menu_option: {
        backgroundColor: 'red',
        marginHorizontal: 10,

    },
    title: {
        color: '#727272',
        fontSize: 21
    },
    menu_container: {
        backgroundColor: 'white'
    }
});
