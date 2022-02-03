import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign} from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

export default function TrilhaCard(props) {
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor: `${props.cardcolor}` }]} onPress={() => (props.navigation).navigate(props.function)}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.aulas} aulas</Text>
        <Progress.Bar progress={props.progress} width={200} height={3} color={'#F9F6F6'} unfilledColor={'#C4C4C4'} borderColor={'transparent'}/>
      </View>
      <View>
        <AntDesign name="right" size={24} color="#FFFFFF" />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderRadius: 8,    
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
  },
  title: {
    fontSize: 18,
    color: '#F1F1F1',
    fontFamily: 'Roboto_700Bold'
  },
  subtitle: {
    fontSize: 18,
    color: '#D2D2D2',
    fontFamily: 'Roboto_400Regular',
    marginBottom: 10,
  }
});
