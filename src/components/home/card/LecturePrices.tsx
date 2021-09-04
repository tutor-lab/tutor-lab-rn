import React from 'react';
import 'react-native-gesture-handler';
import {Text, View, StyleSheet} from 'react-native';
import {colors, fonts, utils} from '../../../constants';

type Props = {
  lecturePrices: {
    groupNumber: number;
    isGroup: boolean;
    pertimeCost: number;
    pertimeLecture: number;
    totalCost: number;
    totalTime: number;
  };
};

const LecturePrices = ({lecturePrices}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>
        {utils.numberWithCommas(lecturePrices.totalCost)}
      </Text>
      <Text style={[styles.price, styles.text]}> 원</Text>
      <Text style={styles.divider}>{'  '}/ </Text>
      <View
        style={{flexDirection: 'row', alignItems: 'center', height: '100%'}}>
        <Text style={styles.divider}>{lecturePrices.totalTime}</Text>
        <Text style={[styles.divider, fonts[400]]}>시간 기준</Text>
      </View>
    </View>
  );
};
export default LecturePrices;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: '100%',
  },
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
