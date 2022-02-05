import React from 'react';
import {
    View, Text,
    StyleSheet, Dimensions, FlatList
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import RespostaEntrevistaCard from '../../components/RespostaEntrevistaCard';

import { useHeaderHeight } from '@react-navigation/elements';

const { width, height } = Dimensions.get('screen');
const Respostas_sugeridas = [
    {
        id: '1',
        resposta: 'Falar de tal e tal experiência profissional da pessoa e tal e tal, explicação aqui.',
        person: 'Luma G. M.',
        profissao: 'Desenvolvedora no Proesc',
        avatar: <FontAwesome name="user" size={24} color={'#000000'} />
    },
    {
        id: '2',
        resposta: 'Falar de tal e tal experiência profissional da pessoa e tal e tal, explicação aqui.',
        person: 'Luma G. M.',
        profissao: 'Desenvolvedora no Proesc',
        avatar: <FontAwesome name="user" size={24} color={'#000000'} />
    },
]


export default function Respostas({ navigation }) {
    const headerHeight = useHeaderHeight();
    return (
        <View style={[styles.container, { marginTop: headerHeight }
        ]}>
            <View style={styles.text_container}>
                <Text style={styles.subtitle}>Pergunta do dia 27/02</Text>
                <Text style={styles.question}>Qual foi a sua maior conquista profissional até o momento?</Text>
            </View>
            <View style={styles.questions_container}>
                <Text style={styles.title}>Minha resposta</Text>
                <View style={styles.reply_container}>
                    <Text style={styles.reply}>A minha maior experiência foi quando aconteceu tal coisa e tal e aí fiquei muito realizada profissionalmente.</Text>
                </View>

                <Text style={styles.title}>Respostas sugeridas</Text>
                <View>
                <FlatList
                        data={Respostas_sugeridas}
                        keyExtractor={pergunta => String(pergunta.id)}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item: pergunta }) => 
                        (
                            <RespostaEntrevistaCard resposta={pergunta.resposta} person={pergunta.person} profissao={pergunta.profissao}>
                                {pergunta.avatar}
                            </RespostaEntrevistaCard>
                        )}
                    >
                        </FlatList>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text_container: {
        width: width * 0.8, alignItems: 'center',
        justifyContent: 'space-around',
        flex: 0.2, 
        borderBottomColor: '#E3E3E3',
        borderBottomWidth: 2,
        paddingBottom: 10,
    },
    subtitle: {
        color: '#727272',
        fontSize: 18,
        fontFamily: 'Poppins_700Bold',
        alignSelf: 'flex-start'
    },
    question: {
        color: '#727272',
        fontSize: 18,
        fontFamily: 'Roboto_700Bold'
    },

    questions_container: {
        width: width * 0.8,
        marginTop: 20,
        flex: 0.7,
        justifyContent: 'space-around',
    },
    title: {
        color: '#4E9F3D',
        fontFamily: 'Roboto_700Bold',
        fontSize: 16,
    },
    reply_container: {
        backgroundColor: '#EAEAEA',
        borderRadius: 8,
        minHeight: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    reply: {
        color: '#727272',
        fontSize: 16,
        fontFamily: 'Roboto_400Regular'
    }
});
