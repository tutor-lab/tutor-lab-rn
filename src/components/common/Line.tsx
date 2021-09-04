import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../constants';

const Line = () => {
  return <View style={styles.line} />;
};

export default Line;

const styles = StyleSheet.create({
  line: {height: 1, width: '100%', backgroundColor: colors.line},
});
