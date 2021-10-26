import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';

import {fonts, colors, icons} from '../../constants';
import {Commonstyles, Line, StarRating} from '../../components/common';

const ListCard = () => {
  return (
    <View>
      <View style={[Commonstyles.padding, styles.padding, styles.row]}>
        <View style={styles.leftSection}>
          <View style={styles.imageWrapper}>{/* 이미지 */}</View>
          <View style={styles.textSection}>
            <Text style={[fonts[400], styles.text]}>[SQR, R, Python]</Text>
            <Text
              style={[fonts[400], styles.text]}
              numberOfLines={1}
              ellipsizeMode="tail">
              금융권 취업을 위한 데이터 분석 및 모델링
            </Text>
            <Text style={[fonts[400], styles.text, {color: colors.light_gray}]}>
              온라인 / 그룹
            </Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => console.log('더보기ssssss')}>
            <WithLocalSvg asset={icons.more} />
          </TouchableOpacity>
        </View>
      </View>
      <Line />
      <View style={[Commonstyles.padding, styles.padding]}>
        <View style={styles.row}>
          <View style={styles.star}>
            <StarRating rating={3.5} size={10} />
          </View>
          <View>
            <Text style={styles.date}>2021.07.01</Text>
          </View>
        </View>
        <View style={{marginTop: 6}}>
          <Text
            style={[fonts[400], styles.text]}
            numberOfLines={1}
            ellipsizeMode="tail">
            질문이 많았는데도 친절하게 잘 설명해주시고, 초보자인 저도 커리큘럼을
            잘 따라갈 수 있었습니다. 정말 감사드려요
          </Text>
        </View>
      </View>
      <Line height={8} />
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  padding: {paddingVertical: 15},
  star: {width: 66, marginRight: 12},
  row: {flexDirection: 'row', alignItems: 'center'},
  date: {
    fontFamily: fonts.montserrat_500,
    fontSize: 10,
    color: colors.light_gray,
  },
  imageWrapper: {
    height: 50,
    width: 50,
    backgroundColor: colors.skyBlue,
    borderRadius: 6,
  },
  text: {fontSize: 12},
  leftSection: {flex: 3, flexDirection: 'row'},
  textSection: {marginLeft: 12, flex: 1},
  rightSection: {flex: 1, alignItems: 'flex-end'},
  writeBtn: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.main,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 11,
  },
});
