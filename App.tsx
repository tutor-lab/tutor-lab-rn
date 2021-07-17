import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/navigation/Login';

const LoginStack = createStackNavigator<LoginStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator screenOptions={{headerShown: false}}>
        <LoginStack.Screen name="Login" component={Login} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
