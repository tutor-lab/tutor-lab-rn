import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../../constants';

const Review = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>20</Text>
      <Text style={[styles.count, fonts[400]]}>개 후기</Text>
    </View>
  );
};
export default Review;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', paddingLeft: 4},
  count: {
    fontFamily: fonts.montserrat_400,
    fontSize: 12.5,
    color: colors.light_gray,
  },
});
