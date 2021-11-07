import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ReviewListScreen from '../screens/classreview/ReviewListScreen';
import ReviewWriteScreen from '../screens/classreview/ReviewWriteScreen';

const ClassReview = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="ReviewList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ReviewList" component={ReviewListScreen} />
      <Stack.Screen name="ReviewWrite" component={ReviewWriteScreen} />
    </Stack.Navigator>
  );
};

export default ClassReview;
