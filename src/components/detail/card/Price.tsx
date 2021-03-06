import React from 'react';
import 'react-native-gesture-handler';
import {Text, StyleSheet} from 'react-native';
import {colors, fonts, utils} from '../../../constants';

type Props = {price: number};

const Price = ({price}: Props) => {
  return (
    <>
      <Text style={styles.price}>{utils.numberWithCommas(price)}</Text>
      <Text style={[fonts[700], styles.text]}> 원</Text>
      <Text style={[fonts[400], styles.divider]}>{'  '}/ 1시간 기준</Text>
    </>
  );
};
export default Price;

const styles = StyleSheet.create({
  price: {
    fontFamily: fonts.montserrat_600,
    fontSize: 20,
    color: colors.sub,
  },
  text: {color: colors.sub, fontSize: 12},
  divider: {
    fontFamily: fonts.montserrat_400,
    fontSize: 12,
    color: colors.light_gray,
  },
});
