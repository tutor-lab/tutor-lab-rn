import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../screens/home/MainScreen';
import DetailScreen from '../screens/home/DetailScreen';

const Home = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Detail"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default Home;
