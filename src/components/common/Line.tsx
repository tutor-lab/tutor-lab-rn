import React from 'react';
import {View, StyleSheet, ColorValue} from 'react-native';
import {colors} from '../../constants';

type Props = {
  height?: number;
  color?: ColorValue;
};
const Line = ({height = 1, color = colors.line}: Props) => {
  return (
    <View style={[styles.line, {height: height, backgroundColor: color}]} />
  );
};

export default Line;

const styles = StyleSheet.create({
  line: {width: '100%'},
});
