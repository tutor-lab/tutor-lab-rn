import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/navigation/Login';
import Main from './src/navigation/Main';
import Detail from './src/navigation/Detail';
import Chatting from './src/navigation/Chatting';
import Signup from './src/navigation/Signup';
import axios from 'axios';

const Stack = createStackNavigator();

const App = () => {
  axios.defaults.baseURL = 'http://3.35.255.192:8081/';

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />


        <Stack.Screen name="Chatting" component={Chatting} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
