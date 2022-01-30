import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView, StyleSheet
} from 'react-native'
import Landing from './src/screens/Landing';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import { FontAwesome, FontAwesome5} from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
          backgroundColor: '#1E5128',
          borderTopColor: 'transparent',
      },
      tabBarActiveTintColor: 'white',
      tabBarShowLabel: false,
      headerStyle: {
          backgroundColor: '#1E1E1E',
          height: 100,
      },
      headerTitleStyle: {
          color: '#FFFFFF'
      }
  }}
    >
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
        }}
        />
        <Tab.Screen 
          name="Login" 
          component={Login}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="book" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Pratica" 
          component={Register}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="pen" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="User" 
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}
        />
    </Tab.Navigator>
  )
}

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
          <Stack.Screen 
            name="Login" 
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Register" 
            component={Register}  
            options={{ title: 'Criar conta'}}
          />
          <Stack.Screen 
            name="Home" 
            component={Tabs}  
            options={{
              headerShown: false,
            }}          
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