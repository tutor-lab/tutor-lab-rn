import React from 'react';
import 'react-native-gesture-handler';
import {View, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';

import {colors, icons} from '../../../constants';
import {
  ImageSection,
  Tutor,
  Title,
  SystemTypes,
  Heart,
  Review,
  Percent,
  LecturePrices,
  LectureSubjects,
} from './index';
import {StarRating} from '../';
import {LectureListType} from '../../../types/data';

type Props = {
  data: LectureListType;
  onPress: () => any;
};
const Card = ({data, onPress}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
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
        <ImageSection
          thumbnail={data.thumbnail}
          isGroup={data.lecturePrices.map(item => item.isGroup)}
          difficultyType={data.difficultyType}
        />
      </View>
      <View style={styles.detail}>
        <View style={styles.systemTypes}>
          <SystemTypes systemTypes={data.systemTypes} />
        </View>
        <View style={styles.title}>
          <Title title={data.title} />
        </View>
        <View style={styles.title}>
          <LectureSubjects lectureSubjects={data.lectureSubjects} />
        </View>
        <View style={styles.tutor}>
          <Tutor tutor={data.lectureTutor.nickname} />
        </View>
        <View style={styles.count}>
          {/* <View style={styles.heart}>
            <Heart heart={56} />
          </View>  <View style={styles.divider}>
            <WithLocalSvg asset={icons.line_vertical} />
          </View> */}
          <View style={styles.star}>
            <StarRating rating={data.scoreAverage} size={11} />
          </View>
          <View style={styles.review}>
            <Review review={data.reviewCount} />
          </View>
        </View>
        <View style={styles.bottom}>
          {/* <View style={styles.percent}>
            <Percent discount={50} />
          </View> */}
          <View style={styles.lecturePrice}>
            <LecturePrices lecturePrices={data.lecturePrices} />
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
    borderRadius: 8,
    backgroundColor: colors.white,
    marginBottom: 16,
  },
  imageSection: {
    width: '100%',
    height: 115,
    position: 'relative',
  },
  detail: {paddingHorizontal: 16.5, marginBottom: 23},
  systemTypes: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 19,
    marginTop: 16,
  },
  title: {marginTop: 7},
  tutor: {flexDirection: 'row', alignItems: 'center', marginTop: 8},
  heart: {flexDirection: 'row', alignItems: 'center'},
  star: {flexDirection: 'row', alignItems: 'center', width: 60},
  review: {flexDirection: 'row', alignItems: 'center', paddingLeft: 4},
  count: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  divider: {marginHorizontal: 8},
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  percent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 40,
  },
  lecturePrice: {},
});
