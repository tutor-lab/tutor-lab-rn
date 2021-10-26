import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../../constants';

type Props = {
  percent: number;
  score: string;
};
const Total = ({percent, score}: Props) => {
  const sliceScore = (text: string) => {
    let count: string = text[2] === '0' ? text[0] : text;
    return count;
  };

  return (
    <View style={styles.container}>
      <Text style={[fonts[400], styles.text]}>수강생의 </Text>
      <Text style={styles.count}>{percent}</Text>
      <Text style={[fonts[400], styles.text]}>%가 </Text>
      <Text style={styles.count}>{sliceScore(score)}</Text>
      <Text style={[fonts[400], styles.text]}>점을 주었습니다!</Text>
    </View>
  );
};

export default Total;

var styles = StyleSheet.create({
  container: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    height: 22,
  },
  text: {
    fontFamily: fonts.montserrat_500,
    fontSize: 13,
    color: colors.light_gray,
  },
  count: {
    fontFamily: fonts.montserrat_500,
    fontSize: 13,
    color: colors.light_gray,
  },
});
