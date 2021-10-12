import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TutorInfoScreen from '../screens/tutorInfo/TutorInfoScreen';

const Stack = createNativeStackNavigator();

const TutorInfo = () => {
  return (
    <Stack.Navigator
      initialRouteName="TutorInfo"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TutorInfo" component={TutorInfoScreen} />
    </Stack.Navigator>
  );
};

export default TutorInfo;
