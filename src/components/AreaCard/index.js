
  
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign} from '@expo/vector-icons';

export default function AreaCard(props) {
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
 
});
