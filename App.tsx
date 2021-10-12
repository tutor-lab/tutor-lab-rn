import React, {useState} from 'react';
import {BACKEND_URL} from 'react-native-dotenv';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import Login from './src/navigation/Login';
import Signup from './src/navigation/Signup';
import Main from './src/navigation/Main';
import Detail from './src/navigation/Detail';
import TutorInfo from './src/screens/tutorInfo/TutorInfoScreen';
import MyPageList from './src/navigation/MyPageList';
import EditProfile from './src/navigation/EditProfile';
import ChatDetail from './src/screens/chatdetail/ChatDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isToken, setIsToken] = useState('');
  const token = AsyncStorage.getItem('accessToken', (err, result) => {
    setIsToken(result);
    return result;
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
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="TutorInfo" component={TutorInfo} />
        <Stack.Screen name="ChatDetail" component={ChatDetail} />
        <Stack.Screen name="MyPageList" component={MyPageList} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
