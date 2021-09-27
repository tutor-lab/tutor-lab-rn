import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import ChattingScreen from '../screens/chatting/ChattingScreen';

type Props = {props: {params: {params: {itemId: number}}}};
const Chatting = (props: any) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Chatting"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Chatting" component={ChattingScreen} initialParams={props.route.params.params}/>
      
    </Stack.Navigator>
  );
};

export default Chatting;
