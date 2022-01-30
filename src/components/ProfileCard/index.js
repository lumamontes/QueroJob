
  
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign} from '@expo/vector-icons';

export default function ProfileCard(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => (props.navigation).navigate(props.function)}>
            <View style={styles.icon}>
                {props.children}
            </View>
            <Text style={styles.title}>{props.title}</Text>
            <AntDesign name="right" size={24} color="#4E9F3D" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#F1F1F1',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 18,
        fontFamily: 'Roboto_700Bold',
        color: '#727272'
      },
      icon: {
          backgroundColor: '#fff',
          width: 41,
          height: 41,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
      }
});
