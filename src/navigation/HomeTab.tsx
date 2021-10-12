import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeTabScreen from '../screens/main/HomeTabScreen';

const HomeTab = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTab" component={HomeTabScreen} />
    </Stack.Navigator>
  );
};

export default HomeTab;
