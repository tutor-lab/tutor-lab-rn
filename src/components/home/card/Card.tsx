import React from 'react';
import 'react-native-gesture-handler';
import {TouchableOpacity, Platform, StyleSheet} from 'react-native';

import {colors} from '../../../constants';
import {ImageSection, Detail} from './index';

type Props = {};

const Card = ({}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.container,
        {
          ...Platform.select({
            ios: {
              shadowColor: 'rgba(0, 19, 37, 0.1)',
              shadowOffset: {width: 2, height: 2},
              shadowOpacity: 2,
            },
            android: {elevation: 2},
          }),
        },
      ]}>
      <ImageSection tag={'초급'} />
      <Detail />
    </TouchableOpacity>
  );
};

export default Card;

var styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 310,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
});
