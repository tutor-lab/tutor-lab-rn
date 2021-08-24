import React from 'react';
import 'react-native-gesture-handler';
import {Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../constants';

type Props = {discount: number};
const Percent = ({discount}: Props) => {
  return (
    <>
      <Text style={styles.priceText}>{discount}</Text>
      <Text style={styles.priceText}>%{'  '}</Text>
    </>
  );
};
export default Percent;

const styles = StyleSheet.create({
  priceText: {
    fontFamily: fonts.montserrat_600,
    fontSize: 16,
    color: colors.red,
  },
});
