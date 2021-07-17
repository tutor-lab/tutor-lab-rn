import React from 'react';
import {View, Text} from 'react-native';

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<LoginStackParamList>;
  route: RouteProp<LoginStackParamList, 'LoginMain'>;
}

const LoginMainScreen = () => {
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginMainScreen;
