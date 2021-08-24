import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../screens/detail/MainScreen';

const Detail = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default Detail;
