import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../../constants';
import {StarRating} from '../../common';
import {Score, Total} from './index';

const Count = () => {
  return (
    <View style={styles.container}>
      <Score score={'4.3'} />
      <View style={styles.star}>
        <StarRating rating={4.3} size={16} />
      </View>
      <Total percent={60} score={'5.0'} />
    </View>
  );
};

export default Count;

var styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    backgroundColor: colors.bg_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: {
    marginTop: 2,
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
