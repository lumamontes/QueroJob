import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ProfileCard from '../../components/ProfileCard';
import { FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'; 

export default function Profile({ navigation }) {
    const Options = [
        {
          id: '1',
          title: 'Editar perfil',
          icon: <FontAwesome name="user" size={24} color={'#000000'} />,
          function: 'EditProfile'
        },
        {
          id: '2',
          title: 'Sair',
          icon: <MaterialCommunityIcons name="logout" size={24} color="black" />,
          function: 'Login'
        },
      ];
    return (
        <View style={styles.container}>
            <View style={styles.profile_container}>
                <Image style={styles.avatar}
                    source={{ uri: 'https://imgur.com/fHFyM9g.jpg' }}
                />
                <Text style={styles.profile_name}>Bruna</Text>
                <Text style={styles.profile_area}>Desenvolvimento</Text>
            </View>
             <View style={styles.options_container}> 
                <FlatList
                    data={Options}
                    keyExtractor={option => String(option.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: option }) => 
                    (
                        <View style={styles.options_cards}
                        >
                            <ProfileCard title={option.title} navigation={navigation} function={option.function}>
                                {option.icon}
                            </ProfileCard> 
                        </View>
                    )}
                >
            </FlatList>
          </View> 
            <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profile_container: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#E3E3E3',
        borderBottomWidth: 2,
        padding: 40,
        marginTop: 20       
    },
    avatar: {
        width: 75,
        height: 71,
        borderRadius: 50,
    },
    profile_name: {
        marginTop: 15,
        color: '#4E9F3D',
        fontSize: 16,
        fontFamily: 'Roboto_700Bold'
    },
    profile_area: {
        fontSize: 14,
        color: '#727272',
        fontFamily: 'Roboto_400Regular'
    },
    options_container: {
        width: '80%',
        height: '65%',
    },
    options_cards: {
        marginBottom: 20,
    }
});
