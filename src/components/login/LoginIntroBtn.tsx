import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fonts, colors, width} from '../../constants';

type Props = {
  title: String;
  onPress: () => void;
};

const LoginIntroBtn = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LoginIntroBtn;

const styles = StyleSheet.create({
  btn: {
    height: 55,
    borderRadius: 10,
    width: width * 290,
    backgroundColor: colors.loginBtn,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {fontFamily: fonts.medium, fontSize: 16, color: colors.white},
});
