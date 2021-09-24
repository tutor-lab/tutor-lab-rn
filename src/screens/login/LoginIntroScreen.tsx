import React from 'react';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native';

import {colors, height, width, icons} from '../../constants';
import {LoginBtn, TradeMark, SubBtn} from '../../components/login';
import {LoginStackProp} from '../../types/navigation';

interface Props {
  navigation: LoginStackProp;
}

const LoginIntroScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={icons.logo} resizeMode="contain" />
      </View>
      <View style={styles.btnContainer}>
        <LoginBtn
          title={'튜티로 로그인하기'}
          onPress={() => {
            navigation.navigate('LoginMain', {user: '튜티'});
          }}
        />
        <LoginBtn
          title={'튜터로 로그인하기'}
          onPress={() => {
            navigation.navigate('LoginMain', {user: '튜터'});
          }}
        />
      </View>
      <View>
        <SubBtn title={'회원가입'} onPress={() => navigation.navigate('Signup')} />
      </View>
      <View style={styles.footer}>
        <TradeMark />
      </View>
    </SafeAreaView>
  );
};

export default LoginIntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logoContainer: {marginTop: height * 213, marginBottom: height * 158},
  logo: {
    height: height * 57,
    width: width * 60,
    resizeMode: 'contain',
  },
  btnContainer: {
    height: 116,
    justifyContent: 'space-between',
    marginBottom: height * 30,
  },
  footer: {position: 'absolute', bottom: 0, paddingBottom: height * 33},
});
