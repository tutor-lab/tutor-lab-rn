import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../../constants';
import {Score, Rating, Total} from './index';

const Count = () => {
  return (
    <View style={styles.container}>
      <Score score={'5.0'} />
      <Rating rating={5} />
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
});
