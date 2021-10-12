import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ChatScreen from '../screens/chat/ChatScreen';

type Props = {props: {params: {params: {itemId: number}}}};

const Chat = (props: any) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        initialParams={props.route.params.params}
      />
    </Stack.Navigator>
  );
};

export default Chat;
