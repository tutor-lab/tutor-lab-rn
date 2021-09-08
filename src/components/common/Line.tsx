import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../constants';

type Props = {
  height?: number;
};
const Line = ({height = 1}: Props) => {
  return <View style={[styles.line, {height: height}]} />;
};

export default Line;

const styles = StyleSheet.create({
  line: {width: '100%', backgroundColor: colors.line},
});
