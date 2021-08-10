import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import LectureTab from './LectureTab';
import LectureDetailScreen from '../screens/lecture/LectureDetailScreen';

const Stack = createStackNavigator();

const Lecture = () => {
  return (
    <Stack.Navigator
      initialRouteName="LectureTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LectureTab" component={LectureTab} />
      <Stack.Screen name="LectureDetail" component={LectureDetailScreen} />
    </Stack.Navigator>
  );
};

export default Lecture;
