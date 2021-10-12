import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FreeBoardScreen from '../screens/main/FreeBoardScreen';

const FreeBoardTab = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="FreeBoard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="FreeBoard" component={FreeBoardScreen} />
    </Stack.Navigator>
  );
};

export default FreeBoardTab;
