import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EditProfileListScreen from '../screens/editProfile/EditProfileListScreen';
import EditInfoScreen from '../screens/editProfile/EditInfoScreen';
import ChangePwdScreen from '../screens/editProfile/ChangePwdScreen';
import SetClassScreen from '../screens/editProfile/SetClassScreen';
import WithdrawalScreen from '../screens/editProfile/WithdrawalScreen';

const EditProfile = () => {
  const Stack = createNativeStackNavigator<EditProfileStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="EditProfileList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="EditProfileList" component={EditProfileListScreen} />
      <Stack.Screen name="EditInfo" component={EditInfoScreen} />
      <Stack.Screen name="ChangePwd" component={ChangePwdScreen} />
      <Stack.Screen name="SetClass" component={SetClassScreen} />
      <Stack.Screen name="Withdrawal" component={WithdrawalScreen} />
    </Stack.Navigator>
  );
};

export default EditProfile;
