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
  /*
  {"content": "<p>에디터 입력</p>", 
"difficultyName": "", 
"difficultyType": "INTERMEDIATE", 
"id": 25, 
"introduce": "소개글 입력", 
"lecturePrices": [
  {"groupNumber": 0, 
  "isGroup": false, 
  "pertimeCost": 3000, 
  "pertimeLecture": 4, 
  "totalCost": 48000,
   "totalTime": 16}
  ], 
"lectureSubjects": [{"krSubject": "Java", "parent": "1"}, {"krSubject": "JavaScript", "parent": "1"}],
 "subTitle": "HTML&CSS를 한번에! 탄탄한 개념이해부터 실습까지 한 강의로 끝내기, 실무 가능한 실력으로 😎
", "systemTypes": [{"name": "온라인", "type": "ONLINE"}, {"name": "오프라인", "type": "OFFLINE"}], 
"thumbnail": "https://tutorlab.s3.ap-northeast-2.amazonaws.com/7683d70e-518d-4aaf-8b99-b7b465aa3003", 
"title": "김버그의 HTML&CSS는 재밌다"}
   */
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
