import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../../constants';

type Props = {
  text: String;
};

const SubTitle = ({text}: Props) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default SubTitle;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.charcoal,
  },
});
