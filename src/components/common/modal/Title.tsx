import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {colors, fonts, height} from '../../../constants';

type Props = {
  text: string;
};

const Title = ({text}: Props) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    paddingTop: height * 10,
    color: colors.charcoal,
    fontSize: height * 18,
    fontFamily: fonts.regular,
    fontWeight: '500',
  },
});
