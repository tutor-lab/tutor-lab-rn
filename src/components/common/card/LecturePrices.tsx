import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {Text, View, StyleSheet} from 'react-native';
import {colors, fonts, utils} from '../../../constants';

type Props = {
  lecturePrices: {
    lecturePriceId: number;
    isGroup: boolean;
    groupNumber: number;
    totalTime: number;
    pertimeLecture: number;
    pertimeCost: number;
    totalCost: number;
    isGroupStr: string;
    content: string;
  }[];
};

const LecturePrices = ({lecturePrices}: Props) => {
  const [minPrice, setMinPrice] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selectPrice = () => {
    const min = lecturePrices.reduce((acc, curr) => {
      return acc.pertimeCost > curr.pertimeCost ? curr : acc;
    });
    setMinPrice(min.pertimeCost);
  };

  useEffect(() => {
    selectPrice();
  }, [lecturePrices, selectPrice]);
  return (
    <View style={styles.container}>
      <Text style={styles.price}>{utils.numberWithCommas(minPrice)}</Text>
      <Text style={[styles.price, styles.text]}> 원</Text>
      <Text style={styles.divider}>{'  '}/ </Text>
      <View style={styles.textLine}>
        <Text style={styles.divider}>1</Text>
        <Text style={[fonts[400], styles.divider]}>시간 기준</Text>
      </View>
    </View>
  );
};
export default LecturePrices;

const styles = StyleSheet.create({
  textLine: {flexDirection: 'row', alignItems: 'center', height: '100%'},
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
