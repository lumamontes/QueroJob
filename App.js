import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

import {
  Rubik_700Bold,
} from '@expo-google-fonts/rubik'

import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Rubik_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Image
          style={styles.heroImage}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2018/09/25/11/45/pixel-cells-3702056_960_720.png ',
          }}
        />
        <View>
          <Text style={{ color: '#4E9F3D', fontSize: 36, fontFamily: 'Poppins_700Bold' }} >QueroJob</Text>
          <Text style={{ color: '#1E5128', fontSize: 48, fontFamily: 'Rubik_700Bold' }} >Trilhe seu futuro profissional</Text>
        </View>
          <TouchableOpacity style={styles.startButton}>
            <Text style={{ color: 'white', fontSize: 26, fontFamily: 'Poppins_400Regular' }}>Começar</Text>
            <AntDesign name="right" size={24} color="#F1F1F1" />
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  heroImage: {
    width: 300,
    height: 200,
  },
  startButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1E5128',
    fontWeight: 'bold',
    fontSize: 24,
    borderRadius: 30,
    width: 302,
    height: 67,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
