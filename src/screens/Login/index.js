import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
export default function Login({ navigation }) {
    return (
      <View style={styles.container}>
          <Text>Login</Text>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
})