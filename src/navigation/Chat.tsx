import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import ChatListScreen from '../screens/chat/ChatListScreen';
import ChatScreen from '../screens/chat/ChatScreen';

const Chat = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Chat" component={ChatScreen} />

      <Stack.Screen name="ChatList" component={ChatListScreen} />
    </Stack.Navigator>
  );
};

export default Chat;
