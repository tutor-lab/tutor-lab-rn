import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../constants';

const Price = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>197,000</Text>
      <Text style={[styles.price, {fontSize: 13}]}> 원</Text>
      <Text style={styles.divider}>{'  '}/ 1개월 기준</Text>
    </View>
  );
};
export default Price;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  price: {
    fontFamily: fonts.montserrat_600,
    fontSize: 18,
    color: colors.sub,
  },
  divider: {
    fontFamily: fonts.montserrat_400,
    fontSize: 13,
    color: colors.light_gray,
  },
});
