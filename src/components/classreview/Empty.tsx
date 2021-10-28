import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';
import {fonts, icons, colors} from '../../constants';

type Props = {text: string};

const ReviewList = ({text}: Props) => {
  return (
    <View style={styles.container}>
      <WithLocalSvg asset={icons.review_none} />
      <View style={styles.margin} />
      <Text style={[fonts[700], styles.text]}>{text}</Text>
    </View>
  );
};

export default ReviewList;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  margin: {marginBottom: 18},
  text: {color: colors.light_gray, fontSize: 14},
});
