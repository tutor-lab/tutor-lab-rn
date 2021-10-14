import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors, width} from '../../../constants';

type Props = {
  title: String;
  onPress: () => void;
};

const Button = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    height: 52,
    borderRadius: 5,
    width: width * 290,
    backgroundColor: colors.login_btn,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {fontFamily: fonts.medium, fontSize: 16, color: colors.white},
});
