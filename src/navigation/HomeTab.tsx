import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTabScreen from '../screens/main/HomeTabScreen';

const HomeTab = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTab" component={HomeTabScreen} />
    </Stack.Navigator>
  );
};

export default HomeTab;
