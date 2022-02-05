
  
import React from 'react';
import {WebView} from 'react-native-webview';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign} from '@expo/vector-icons';

export default function AulasCard(props) {
    return (
        <View style={styles.container}>
            <View style={{width: '90%', height: 350}}>
                <WebView
                    style={{marginTop: 20}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: `https://www.youtube.com/embed/${props.link}`}}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
});
