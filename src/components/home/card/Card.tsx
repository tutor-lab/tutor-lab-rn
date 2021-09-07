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
  Star,
  Review,
  Percent,
  LecturePrices,
  LectureSubjects,
} from './index';
import {LectureList} from '../../../types/data';

type Props = {
  data: LectureList;
  navigation: any;
};
const Card = ({data, navigation}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('Detail', {screen: 'Main'})}
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
          isGroup={data.lecturePrices[0].isGroup}
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
          <Tutor />
        </View>
        <View style={styles.count}>
          <View style={styles.heart}>
            <Heart heart={56} />
          </View>
          <View style={styles.divider}>
            <WithLocalSvg asset={icons.line_vertical} />
          </View>
          <View style={styles.star}>
            <Star rating={5} />
          </View>
          <View style={styles.review}>
            <Review review={28} />
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.percent}>
            <Percent discount={50} />
          </View>
          <View style={styles.lecturePrice}>
            <LecturePrices lecturePrices={data.lecturePrices[0]} />
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
  detail: {paddingHorizontal: 16.5, height: 195},
  systemTypes: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 19,
    marginTop: 16,
  },
  title: {marginTop: 7},
  tutor: {height: 20, flexDirection: 'row', alignItems: 'center', marginTop: 8},
  heart: {flexDirection: 'row', alignItems: 'center'},
  star: {flexDirection: 'row', alignItems: 'center'},
  review: {flexDirection: 'row', alignItems: 'center', paddingLeft: 4},
  count: {
    height: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  divider: {marginHorizontal: 8},
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    height: 25,
  },
  percent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 40,
  },
  lecturePrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
