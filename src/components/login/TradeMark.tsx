import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../../constants';

const TradeMark = () => {
  return <Text style={styles.tradeMark}>@tutorlab</Text>;
};

export default TradeMark;

const styles = StyleSheet.create({
  tradeMark: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.grey,
  },
});
