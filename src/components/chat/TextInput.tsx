import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, TextInput} from 'react-native';

import {colors, fonts} from '../../constants';

type Props = React.ComponentProps<typeof TextInput>;

const Input = ({...props}: Props) => {
  return <TextInput placeholderTextColor={colors.light_gray} {...props} />;
};
export default Input;

const styles = StyleSheet.create({
  text: {fontSize: 14, lineHeight: 20},
});
