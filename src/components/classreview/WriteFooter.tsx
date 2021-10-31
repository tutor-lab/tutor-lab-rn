import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';

import {Commonstyles} from '../../components/common';
import {colors, fonts} from '../../constants';

const WriteFooter = () => {
  return (
    <View style={[Commonstyles.padding, styles.padding]}>
      <Text style={[fonts[700], styles.title]}>후기 작성 안내</Text>
      <View style={styles.textBox}>
        <Text style={[fonts[400], styles.text]}>
          1. 후기 내용은 20자 이상 작성합니다. 강의와 관련없는 내용, 이메일,
          휴대전화 번호 등의 개인정보/광고/비속어가 포함 된 후기는 블라인드 처리
          됩니다.
        </Text>
      </View>
      <View style={styles.textBox}>
        <Text style={[fonts[400], styles.text]}>
          2. 최종 등록된 후기는 공개되어 튜터랩 사용자가 조회 가능하며, 댓글이
          등록될 수 있습니다.
        </Text>
      </View>
    </View>
  );
};

export default WriteFooter;

const styles = StyleSheet.create({
  padding: {paddingVertical: 15},
  ratingBox: {
    width: 220,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  title: {fontSize: 13},
  textBox: {paddingVertical: 10, width: '100%'},
  text: {fontSize: 10, color: colors.light_gray, lineHeight: 13.62},
});
