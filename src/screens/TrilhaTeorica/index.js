import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import TrilhaCard from '../../components/TrilhaCard';


export default function TrilhaTeorica({ navigation }) {
    const Options = [
        {
            id: '1',
            title: 'Área',
            aulas: '1',
            progress: 0.9,
            cardcolor: '#B66666',
            function: 'Area',
        },
        {
            id: '2',
            title: 'Currículo',
            aulas: '12',
            progress: 0.4,
            cardcolor: '#3F8FA8'
        },
        {
            id: '3',
            title: 'Vagas',
            aulas: '10',
            progress: 0.6,
            cardcolor: '#267B19'
        },
        {
            id: '4',
            title: 'Portfólio',
            aulas: '10',
            progress: 0.6,
            cardcolor: '#B66666'
        },
    ];
    return (
        <View style={styles.container}>
            <View style={styles.text_container}>
                <Text style={styles.title}>Trilhas</Text>
                <Text style={styles.area_title}>Desenvolvimento</Text>
            </View>
            <View style={styles.options_container}>
                <FlatList
                    data={Options}
                    keyExtractor={option => String(option.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: option }) =>
                    (
                        <TrilhaCard 
                            title={option.title} 
                            progress={option.progress} 
                            aulas={option.aulas} 
                            cardcolor={option.cardcolor}
                            navigation={navigation}
                            function={option.function}
                        />
                    )}
                >
                </FlatList> 
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 20,
        color: '#727272',
        marginBottom: 10,
        fontFamily: 'Roboto_700Bold',
    },
    text_container: {
        width: '80%',
        height: '100%',
        justifyContent: 'center',
        flex: 0.5,
        paddingTop: 20

    },
    area_title: {
        fontSize: 18,
        color: '#4E9F3D',
        fontFamily: 'Roboto_400Regular'

    },
    options_container: {
        width: '80%',
    }
});
