import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import FreeBoardTabScreen from '../screens/main/FreeBoardTabScreen';

const FreeBoardTab = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="FreeBoardTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="FreeBoardTab" component={FreeBoardTabScreen} />
    </Stack.Navigator>
  );
};

export default FreeBoardTab;
