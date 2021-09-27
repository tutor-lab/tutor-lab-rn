import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TutorInfoScreen from '../screens/tutorInfo/TutorInfoScreen';

const Stack = createStackNavigator();

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
