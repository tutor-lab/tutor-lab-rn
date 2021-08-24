import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {colors, icons} from '../../../constants';
import {WithLocalSvg} from 'react-native-svg/src';

type Props = {};
const Button = ({}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => console.log('arrow press')}
      style={styles.container}>
      <View style={styles.button}>
        <WithLocalSvg asset={icons.arrow_right_main} />
      </View>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: {height: 34, width: 34},
  button: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.line,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
