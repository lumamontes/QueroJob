import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView, StyleSheet
} from 'react-native'
import Landing from './src/screens/Landing';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <SafeAreaView>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Login" component={Login}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name="Register" 
          component={Register}  
          options={{ title: 'Criar conta'}}
          />
        </Stack.Navigator>

      </NavigationContainer> 
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
export default App;