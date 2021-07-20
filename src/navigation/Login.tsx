import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginIntroScreen from '../screens/login/LoginIntroScreen';
import LoginMainScreen from '../screens/login/LoginScreen';
import FindIdScreen from '../screens/login/FindIdScreen';
import FindPwdScreen from '../screens/login/FindPwdScreen';

const Stack = createStackNavigator();

const Login = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginIntro"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginIntro" component={LoginIntroScreen} />
      <Stack.Screen name="LoginMain" component={LoginMainScreen} />
      <Stack.Screen name="FindId" component={FindIdScreen} />
      <Stack.Screen name="FindPwd" component={FindPwdScreen} />
    </Stack.Navigator>
  );
};

export default Login;
