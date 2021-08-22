import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../../constants';

type Props = {name: string};

const Profile = ({name}: Props) => {
  return (
    <View>
      <Text style={[fonts[500], styles.name]}>{name}</Text>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  name: {fontSize: 14, color: colors.sub},
});
