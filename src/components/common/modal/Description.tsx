import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {colors, fonts} from '../../../constants';

type Props = {
  text: string;
};

const Description = ({text}: Props) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default Description;

const styles = StyleSheet.create({
  text: {
    color: colors.nobel,
    fontSize: 14,
    fontFamily: fonts.regular,
    fontWeight: '500',
  },
});
