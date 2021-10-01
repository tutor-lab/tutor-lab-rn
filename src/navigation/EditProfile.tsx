import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import EditProfileScreen from '../screens/editProfile/EditProfileScreen';
import EditInfoScreen from '../screens/editProfile/EditInfoScreen';
import ChangePwdScreen from '../screens/editProfile/ChangePwdScreen';
import SetClassScreen from '../screens/editProfile/SetClassScreen';
import WithdrawalScreen from '../screens/editProfile/WithdrawalScreen';

const Detail = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="EditProfile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="EditInfo" component={EditInfoScreen} />
      <Stack.Screen name="ChangePwd" component={ChangePwdScreen} />
      <Stack.Screen name="SetClass" component={SetClassScreen} />
      <Stack.Screen name="Withdrawal" component={WithdrawalScreen} />
    </Stack.Navigator>
  );
};

export default Detail;
