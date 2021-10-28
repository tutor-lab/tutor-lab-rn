import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../../constants';

type Props = {review: number};
const Review = ({review}: Props) => {
  return (
    <>
      <Text style={styles.count}>{review}</Text>
      <Text style={[fonts[400], styles.count]}>개 후기</Text>
    </>
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
