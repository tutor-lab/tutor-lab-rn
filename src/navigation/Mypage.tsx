import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PurchasedScreen from '../screens/mypage/PurchasedScreen';
import WishListScreen from '../screens/mypage/WishListScreen';
import EditProfile from './EditProfile';
import DashBoardActivityScreen from '../screens/mypage/DashBoardActivityScreen';
import SettingScreen from '../screens/mypage/SettingScreen';
import NoticeScreen from '../screens/mypage/NoticeScreen';
import TermsScreen from '../screens/mypage/TermsScreen';
import ContactUsScreen from '../screens/mypage/ContactUsScreen';
import ClassReview from '../navigation/ClassReview';
const Stack = createNativeStackNavigator();

const Mypage = () => {
  return (
    <Stack.Navigator
      initialRouteName={'EditProfile'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen
        name="DashBoardActivity"
        component={DashBoardActivityScreen}
      />
      <Stack.Screen name="ClassReview" component={ClassReview} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Notice" component={NoticeScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
      <Stack.Screen name="ContactUs" component={ContactUsScreen} />
    </Stack.Navigator>
  );
};

export default Mypage;
