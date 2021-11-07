import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fonts, colors} from '../../constants';
import {Commonstyles, Line} from '../../components/common';

const WriteCard = ({navigation}) => {
  return (
    <View>
      <View style={[Commonstyles.padding, styles.padding]}>
        <Text style={styles.date}>2021.07.01</Text>
      </View>
      <Line />
      <View style={[Commonstyles.padding, styles.padding, styles.row]}>
        <View style={styles.leftSection}>
          <View style={styles.imageWrapper}>{/* 이미지 */}</View>
          <View style={styles.textSection}>
            <Text style={[fonts[400], styles.text, {color: colors.light_gray}]}>
              김하나
            </Text>
            <Text
              style={[fonts[400], styles.text]}
              numberOfLines={2}
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
            style={styles.writeBtn}
            onPress={() => navigation.navigate('ReviewWrite')}>
            <Text style={[fonts[700], {color: colors.main, fontSize: 13}]}>
              후기작성
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Line height={8} />
    </View>
  );
};

export default WriteCard;

const styles = StyleSheet.create({
  padding: {paddingVertical: 15},
  row: {flexDirection: 'row', alignItems: 'center'},
  date: {
    fontFamily: fonts.montserrat_600,
    fontSize: 15,
    color: colors.sub,
  },
  imageWrapper: {
    height: 70,
    width: 70,
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
