import * as React from 'react';
import {
   StyleSheet,Text,View
} from 'react-native'
// import { View } from 'react-native-web';


export default function Home() {
  return (
    // <SafeAreaView>
    <View>
        <Text>Olá, Bruna</Text>
        <View>
            <Text>Pergunta do dia</Text>
        </View>
        <View>
            <Text>Continuar trilha</Text>
            <View>
                <Text>conteúdo card </Text>
            </View>
        </View>
        <View>
            <Text>Meu progresso</Text>
            <View></View>
            <View></View>
        </View>
    </View>
   // {/* </SafeAreaView> */}
  );
}
let styles = StyleSheet.create({
  back: {
      backgroundColor: '#F1F1F1',
      color: '#727272',
  },
  header: {
    backgroundColor: '#F1F1F1'
  }

});