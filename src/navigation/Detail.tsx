import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import DetailScreen from '../screens/detail/DetailScreen';
import PaymentScreen from '../screens/detail/PaymentScreen';

type Props = {props: {params: {params: {itemId: number}}}};

const Detail = (props: any) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Detail"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        initialParams={props.route.params}
      />
      <Stack.Screen name={'Payment'} component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export default Detail;
