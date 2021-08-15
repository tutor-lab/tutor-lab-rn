import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../constants';

const Percent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>20</Text>
      <Text style={styles.priceText}>%{'  '}</Text>
    </View>
  );
};
export default Percent;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  priceText: {
    fontFamily: fonts.montserrat_600,
    fontSize: 14,
    color: colors.red,
  },
});
