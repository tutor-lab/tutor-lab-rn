import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import ChatListScreen from '../screens/chat/ChatListScreen';

const Chat = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="ChatList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChatList" component={ChatListScreen} />
    </Stack.Navigator>
  );
};

export default Chat;
