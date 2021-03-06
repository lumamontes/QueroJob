import * as React from 'react';
import { NavigationContainer,getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView, StyleSheet,Text
} from 'react-native'
import Landing from './src/screens/Landing';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import EditProfile from './src/screens/Profile/edit';
import TrilhaTeorica from './src/screens/TrilhaTeorica';
import TrilhaPratica from './src/screens/TrilhaPratica';
import Area from './src/screens/Area';
import PerguntaDia from './src/screens/PerguntaDia';
import Respostas from './src/screens/Respostas';
import { FontAwesome, FontAwesome5} from '@expo/vector-icons'; 

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  switch (routeName) {
    case 'Feed':
      return 'News feed';
    case 'Profile':
      return 'My profile';
    case 'Account':
      return 'My account';
  }
}
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
          name="TrilhaTeorica" 
          component={TrilhaTeorica}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="book" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="TrilhaPratica" 
          component={TrilhaPratica}
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
            options={({ route }) => ({
              headerTitle: getHeaderTitle(route), headerShown: false,
            })}     
          />
          <Stack.Screen 
            name="EditProfile" 
            component={EditProfile}  
            options={{ title: 'Editar perfil'}}
            headerTint
        
          />
           <Stack.Screen 
            name="Area" 
            component={Area}  
            options={{ headerShown: false
             }} 
          />
          <Stack.Screen 
            name="PerguntaDia" 
            component={PerguntaDia}  
            options={{ title: 'Pergunta do dia', headerTransparent: true}}
            headerTitleStyle={{ color: '#4E9F3D', fontSize: 24, fontFamily: 'Roboto_700Bold' }}
            headerTintColor='#4E9F3D'
          />

          <Stack.Screen 
            name="Respostas" 
            component={Respostas}  
            options={{ title: 'Respostas', headerTransparent: true}}
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