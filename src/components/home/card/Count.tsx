import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';

import {Heart, Star, Review} from './index';
import {icons} from '../../../constants';

const Count = () => {
  return (
    <View style={styles.container}>
      <Heart />
      <View style={styles.divide}>
        <WithLocalSvg asset={icons.line_vertical} />
      </View>
      <Star />
      <Review />
    </View>
  );
};
export default Count;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
  divide: {marginHorizontal: 8},
});
