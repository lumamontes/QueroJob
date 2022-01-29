import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from './src/screens/Landing';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
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
          <Stack.Screen name="Register" component={Register}
          />
          {/* <Stack.Screen name="Rankings" component={Rankings} /> */}
        </Stack.Navigator>

      </NavigationContainer> 
    </>
  );
}

export default App;