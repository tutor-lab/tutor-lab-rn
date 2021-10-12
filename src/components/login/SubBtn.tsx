import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors} from '../../constants';

type Props = {
  title: String;
  onPress: () => void;
};

const LoginIntroBtn = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[fonts[400], styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LoginIntroBtn;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
    color: colors.light_gray,
  },
});
