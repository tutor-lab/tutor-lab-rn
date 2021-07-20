import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fonts, colors, width} from '../../constants';

type Props = {
  title: String;
  onPress: () => void;
};

const LoginBtn = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LoginBtn;

const styles = StyleSheet.create({
  btn: {
    height: 52,
    borderRadius: 5,
    width: width * 290,
    backgroundColor: colors.loginBtn,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {fontFamily: fonts.medium, fontSize: 16, color: colors.white},
});
