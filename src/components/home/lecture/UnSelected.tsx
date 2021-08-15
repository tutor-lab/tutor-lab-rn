import React from 'react';
import 'react-native-gesture-handler';
import {Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../../../constants';

type Props = {
  text: string;
};

const Select = ({text}: Props) => {
  return <Text style={[fonts[500], styles.unSelected]}>{text}</Text>;
};
export default Select;

const styles = StyleSheet.create({
  unSelected: {fontSize: 16, color: colors.light_gray},
});
