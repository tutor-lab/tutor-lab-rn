import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FreeBoardTabScreen from '../screens/main/FreeBoardTabScreen';

const FreeBoardTab = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="FreeBoardTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="FreeBoardTab" component={FreeBoardTabScreen} />
    </Stack.Navigator>
  );
};

export default FreeBoardTab;
