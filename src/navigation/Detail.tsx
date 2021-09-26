import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../screens/detail/MainScreen';
import PaymentScreen from '../screens/detail/PaymentScreen';

const Detail = (props:any) => {
  const Stack = createStackNavigator();

  console.log('route123123',props)
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}>
   
      <Stack.Screen name={"Main"}>{() => <MainScreen {...props} />}</Stack.Screen>
      {/* <Stack.Screen name="Payment" component={PaymentScreen} /> */}
      <Stack.Screen name={"Payment"}>{() => <PaymentScreen {...props} />}</Stack.Screen>
    </Stack.Navigator>
  );
};

export default Detail;
