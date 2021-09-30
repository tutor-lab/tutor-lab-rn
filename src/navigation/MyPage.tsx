import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import MyPageScreen from '../screens/mypage/MyPageScreen';

const MyPage = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="MyPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyPage" component={MyPageScreen} />
    </Stack.Navigator>
  );
};

export default MyPage;
