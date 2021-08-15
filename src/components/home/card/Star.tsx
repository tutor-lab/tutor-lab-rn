import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';
import {icons} from '../../../constants';

const Star = () => {
  return (
    <View style={styles.container}>
      <WithLocalSvg asset={icons.star} />
      <WithLocalSvg asset={icons.star} />
      <WithLocalSvg asset={icons.star} />
      <WithLocalSvg asset={icons.star} />
      <WithLocalSvg asset={icons.star} />
    </View>
  );
};
export default Star;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
});
