import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {colors, fonts} from '../../../constants';

type Props = {
  text: string;
};

const Title = ({text}: Props) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    color: colors.charcoal,
    fontSize: 16,
    fontFamily: fonts.regular,
    fontWeight: '500',
  },
});
