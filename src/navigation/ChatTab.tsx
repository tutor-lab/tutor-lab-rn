import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import ChatTabScreen from '../screens/main/ChatTabScreen';

const ChatTab = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="ChatTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChatTab" component={ChatTabScreen} />
    </Stack.Navigator>
  );
};

export default ChatTab;
