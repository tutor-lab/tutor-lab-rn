import React from 'react';
import 'react-native-gesture-handler';
import {Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../constants';

type Props = {price: string};

const Price = ({price}: Props) => {
  return (
    <>
      <Text style={styles.price}>{price}</Text>
      <Text style={[styles.price, styles.text]}> 원</Text>
      <Text style={styles.divider}>{'  '}/ 1개월 기준</Text>
    </>
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
  text: {fontSize: 13},
  divider: {
    fontFamily: fonts.montserrat_400,
    fontSize: 13,
    color: colors.light_gray,
  },
});
