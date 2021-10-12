import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyPageScreen from '../screens/main/MyPageScreen';

const MyPageTab = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="MyPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyPage" component={MyPageScreen} />
    </Stack.Navigator>
  );
};

export default MyPageTab;
