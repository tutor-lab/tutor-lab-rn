import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fonts, colors, width} from '../../constants';

const LoginBtn = () => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.btn}
      onPress={() => console.log('튜티로그인')}>
      <Text style={styles.btnText}>튜티로 로그인하기</Text>
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
