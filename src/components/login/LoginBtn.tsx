import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {fonts, colors, width} from '../../constants';

type Props = {
  title: String;
  onPress: () => void;
};

const LoginBtn = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LoginBtn;

const styles = StyleSheet.create({
  btn: {
    height: 55,
    borderRadius: 10,
    width: width * 290,
    backgroundColor: colors.login_btn,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {fontFamily: fonts.medium, fontSize: 16, color: colors.white},
});
