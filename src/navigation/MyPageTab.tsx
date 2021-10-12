import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyPageTabScreen from '../screens/main/MyPageTabScreen';

const MyPageTab = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="MyPageTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyPageTab" component={MyPageTabScreen} />
    </Stack.Navigator>
  );
};

export default MyPageTab;
