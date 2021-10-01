import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import MyPageTabScreen from '../screens/main/MyPageTabScreen';

const MyPageTab = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="MyPageTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyPageTab" component={MyPageTabScreen} />
    </Stack.Navigator>
  );
};

export default MyPageTab;
