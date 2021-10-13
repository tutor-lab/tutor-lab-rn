import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ClassDetailScreen from '../screens/detail/ClassDetailScreen';
import PaymentScreen from '../screens/detail/PaymentScreen';

type Props = {props: {params: {params: {itemId: number}}}};

const Detail = (props: any) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="ClassDetail"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ClassDetail"
        component={ClassDetailScreen}
        initialParams={props.route.params}
      />
      <Stack.Screen name={'Payment'} component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export default Detail;
