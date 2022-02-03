
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,FlatList} from 'react-native';

export default function MenuTeorico(props) {
    const [menus, setMenus] = useState({});
    const LoadMenus = [];
    const Options = [
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
            <View>
                <FlatList
                    data={Options}
                    keyExtractor={option => String(option.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: option }) =>
                    (
                        <TouchableOpacity onPress={() => navigation.navigate(props.link)}>
                            <Text style={styles.title}>{props.title}</Text>
                        </TouchableOpacity>
                    )}
                >
                </FlatList> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
 
});
