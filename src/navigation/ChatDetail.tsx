import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ChatScreen from '../screens/chatdetail/ChatDetailScreen';

type Props = {props: {params: {params: {itemId: number}}}};

const ChatDetail = (props: any) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="ChatDetail"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ChatDetail"
        component={ChatScreen}
        initialParams={props.route.params.params}
      />
    </Stack.Navigator>
  );
};

export default ChatDetail;
