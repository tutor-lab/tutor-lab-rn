import React,{useState} from 'react';
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
import Chatting from './src/navigation/Chatting';

const Stack = createStackNavigator();

const App = () => {
  console.log('BACKEND_URL=',BACKEND_URL)
  const [isToken,setIsToken] = useState("")
  const token = AsyncStorage.getItem('accessToken', (err, result) => {
    setIsToken(result)
    return result
  });

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
        {/* {isToken?
        <Stack.Screen name="Main" component={Main} />
      : <Stack.Screen name="Login" component={Login} />} */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="TutorInfo" component={TutorInfo} />
        <Stack.Screen name="Chatting" component={Chatting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
