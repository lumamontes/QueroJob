

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

export default function EmBreve(props) {
    return (
        <View style={styles.container}>
            <LottieView
                style={{
                    width: 350,
                    height: 350,
                    backgroundColor: '#F1F1F1',
                }}
                source={require('../../assets/lf30_editor_6jjw4vyz.json')}
                autoPlay={true} loop={true}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
