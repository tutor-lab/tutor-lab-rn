import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import ChattingScreen from '../screens/chatting/ChattingScreen';

const Chatting = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Chatting"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Chatting" component={ChattingScreen} />
    </Stack.Navigator>
  );
};

export default Chatting;
