import React from 'react';
import 'react-native-gesture-handler';
import {View, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';

import {colors, icons} from '../../../constants';
import {
  ImageSection,
  Tutor,
  Title,
  Remote,
  Heart,
  Star,
  Review,
  Percent,
  Price,
} from './index';

type Props = {
  data: {
    id: number;
    tag: string[];
    remote: string[];
    title: string;
    tutor: string;
    heart: number;
    rating: number;
    review: number;
    discount: number;
    price: string;
  };
};

const Card = ({data}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.container,
        {
          ...Platform.select({
            ios: {
              shadowColor: 'rgba(0, 19, 37, 0.1)',
              shadowOffset: {width: 2, height: 2},
              shadowOpacity: 2,
            },
            android: {elevation: 2},
          }),
        },
      ]}>
      <View style={styles.imageSection}>
        <ImageSection tag={data.tag} />
      </View>
      <View style={styles.detail}>
        <View style={styles.class}>
          <Remote remote={data.remote} />
        </View>
        <View style={styles.title}>
          <Title title={data.title} />
        </View>
        <View style={styles.tutor}>
          <Tutor />
        </View>
        <View style={styles.count}>
          <View style={styles.heart}>
            <Heart heart={data.heart} />
          </View>
          <View style={styles.divider}>
            <WithLocalSvg asset={icons.line_vertical} />
          </View>
          <View style={styles.star}>
            <Star rating={data.rating} />
          </View>
          <View style={styles.review}>
            <Review review={data.review} />
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.percent}>
            <Percent discount={data.discount} />
          </View>
          <View style={styles.price}>
            <Price price={data.price} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

var styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 310,
    borderRadius: 8,
    backgroundColor: colors.white,
    marginBottom: 16,
  },
  imageSection: {
    width: '100%',
    height: 115,
    position: 'relative',
  },
  detail: {paddingHorizontal: 16.5, height: 295},
  class: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 19,
    marginTop: 16,
  },
  title: {marginTop: 7, height: 48},
  tutor: {flexDirection: 'row', marginTop: 8},
  heart: {flexDirection: 'row', alignItems: 'center'},
  star: {flexDirection: 'row', alignItems: 'center'},
  review: {flexDirection: 'row', alignItems: 'center', paddingLeft: 4},
  count: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
  divider: {marginHorizontal: 8},
  bottom: {flexDirection: 'row', alignItems: 'center', marginTop: 8},
  percent: {flexDirection: 'row', alignItems: 'center'},
  price: {flexDirection: 'row', alignItems: 'center'},
});
