import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../../constants';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={[fonts[500], styles.text]}>
        금융권 취업을 위한 데이터 분석 및 모델링 SQL, R, Python
      </Text>
    </View>
  );
};
export default Title;

const styles = StyleSheet.create({
  container: {marginTop: 7},
  text: {fontSize: 16.5, lineHeight: 22.5, color: colors.sub},
});
