import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import {BACKEND_URL} from 'react-native-dotenv';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from './src/navigation/Login';
import Signup from './src/navigation/Signup';
import Main from './src/navigation/Main';
import Detail from './src/navigation/Detail';
import TutorInfo from './src/navigation/TutorInfo';
import Chat from './src/navigation/Chat';

const Stack = createStackNavigator();

const App = () => {
  axios.defaults.baseURL = BACKEND_URL;
  axios.interceptors.request.use(async function (config) {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="TutorInfo" component={TutorInfo} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
