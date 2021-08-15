import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';

import {Tutor, Title, Tag, Heart, Star, Review, Percent, Price} from './index';
import {colors, icons, fonts} from '../../../constants';

const Detail = () => {
  return (
    <View style={styles.container}>
      <Tag />
      <Title />
      <Tutor />
      {/* 후기,하트,리뷰 */}
      <View style={styles.count}>
        <Heart />
        <View style={styles.divider}>
          <WithLocalSvg asset={icons.line_vertical} />
        </View>
        <Star />
        <Review />
      </View>
      {/* 가격 */}
      <View style={styles.price}>
        <Percent />
        <Price />
      </View>
    </View>
  );
};

export default Detail;

var styles = StyleSheet.create({
  container: {paddingHorizontal: 16.5, height: 295},
  count: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
  divider: {marginHorizontal: 8},
  reviewBox: {flexDirection: 'row', alignItems: 'center', paddingLeft: 4},
  reviewCount: {
    fontFamily: fonts.montserrat_400,
    fontSize: 12.5,
    color: colors.light_gray,
  },
  price: {flexDirection: 'row', alignItems: 'center', marginTop: 8},
});
