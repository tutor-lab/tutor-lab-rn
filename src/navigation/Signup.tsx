import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CreateAccount from '../screens/signup/CreateAccount';

const Signup = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="CreateAccount"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
};

export default Signup;
