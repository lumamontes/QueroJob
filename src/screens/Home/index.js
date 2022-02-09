import * as React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Image, Pressable
} from 'react-native'
// import { View } from 'react-native-web';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
export default function Home({ navigation }) {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.home_container}>
        <Text style={styles.welcome_title}>Olá, Bruna</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('PerguntaDia')} style={styles.question_container}>
          <MaterialCommunityIcons name="file-question" size={24} color="#4E9F3D" />
          <Text style={styles.text_question}>Pergunta do dia</Text>
          <AntDesign name="right" size={24} color="#4E9F3D" />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('Area')} style={styles.card_container}>
          <Text style={styles.title}>Continuar trilha</Text>
          <View style={styles.card}>
            <Image
              style={styles.card_image}
              source={{
                uri: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              }}
            />
            <View style={styles.card_content}>
              <View style={styles.card_texts}>
                <Text style={styles.card_title}>Desenvolvimento </Text>
                <Text style={styles.card_subtitle}>Área</Text>
              </View>
              <View style={styles.pressable}>
              {/* <Pressable style={styles.pressable} onPress={() => setModalVisible(true)}> */}
                <AntDesign name="caretright" size={20} color="#fff" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.card_container}>
          <Text style={styles.title}>Meu progresso</Text>
          <View style={{ display: 'flex', width: '100%' }}>
            <Text style={styles.progress_title}>Trilha teórica</Text>
            <Progress.Bar progress={0.3} width={300} height={15} color={'#4E9F3D'} unfilledColor={'#fff'} />

            <Text style={styles.progress_title}>Trilha prática</Text>
            <Progress.Bar progress={0.7} width={300}  height={15} color={'#4E9F3D'} unfilledColor={'#fff'}/>

          </View>
        </View>
      </View>
    </View>
  );
}
let styles = StyleSheet.create({
  back: {
    backgroundColor: '#F1F1F1',
    color: '#727272',
  },
  header: {
    backgroundColor: '#F1F1F1'
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  home_container: {
    width: '80%',
    height: '80%',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  welcome_title: {
    alignSelf: 'flex-start',
    color: '#1E5128',
    fontFamily: 'Poppins_700Bold',
    fontSize: 30

  },
  question_container: {
    width: '100%',
    height: 67,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    borderRadius: 8,
  },
  text_question: {
    color: '#1E5128',
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Roboto_700Bold',
    color: '#4E9F3D',
    alignSelf: 'flex-start',
    marginBottom: 10
  },
  card_container: {
    display: 'flex', width: '100%', alignItems: 'center',
  },
  card: {
    width: '100%',
    height: 174,
    shadowColor: "#000",
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  card_image: {
    width: '100%',
    height: 128,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  card_content: {
    width: '100%',
    height: 46,
    padding: 5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#F1F1F1',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  card_title: {
    color: '#4E9F3D',
    fontFamily: 'Roboto_700Bold',
    fontSize: 16
  },
  card_subtitle: {
    color: '#727272',
    fontSize: 14
  },
  pressable: {
    width: 32,
    height: 32,
    backgroundColor: '#4E9F3D',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress_title: {
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',
    color: '#1E5128',
    alignSelf: 'flex-start'
  }

});