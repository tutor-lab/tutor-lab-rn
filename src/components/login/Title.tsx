import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../../constants';

type Props = {
  text: String;
};

const Title = ({text}: Props) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.regular,
    fontSize: 24,
    color: colors.charcoal,
  },
});
