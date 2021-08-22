import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../../constants';

type Props = {lecture_count: number; review_count: number; store_count: number};

const Count = ({lecture_count, review_count, store_count}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={[fonts[400], styles.title]}>강의 </Text>
        <Text style={styles.count}>{lecture_count}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={[fonts[400], styles.title]}>후기 </Text>
        <Text style={styles.count}>{review_count}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={[fonts[400], styles.title]}>저장 </Text>
        <Text style={styles.count}>{store_count}</Text>
      </View>
    </View>
  );
};
export default Count;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  title: {fontSize: 11, color: colors.light_gray},
  count: {
    fontFamily: fonts.montserrat_500,
    fontSize: 12,
    color: colors.light_gray,
  },
  textBox: {marginRight: 9, flexDirection: 'row'},
});
