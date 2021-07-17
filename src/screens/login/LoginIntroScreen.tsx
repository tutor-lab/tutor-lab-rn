import React from 'react';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native';

import {colors, height, width, icons} from '../../constants';
import {LoginIntroBtn, TradeMark, SubBtn} from '../../components/login';
import {LoginStackProp} from '../../types/navigation';

interface Props {
  navigation: LoginStackProp;
}

const LoginIntroScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={icons.logo} resizeMode="contain" />
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btnBox}>
          <LoginIntroBtn
            title={'튜티로 로그인하기'}
            onPress={() => {
              navigation.navigate('LoginMain', {user: 'tuti'});
            }}
          />
          <LoginIntroBtn
            title={'튜터로 로그인하기'}
            onPress={() => {
              navigation.navigate('LoginMain', {user: 'tutor'});
            }}
          />
        </View>
      </View>
      <View style={styles.subBtnBox}>
        <SubBtn text={'회원가입'} onPress={() => console.log('회원가입')} />
      </View>
      <View style={styles.footer}>
        <View style={styles.footerBox}>
          <TradeMark />
        </View>
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
  logoBox: {
    flex: 1.8,
    justifyContent: 'center',
  },
  logo: {
    height: height * 57,
    width: width * 60,
    resizeMode: 'contain',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  btnBox: {
    height: 116,
    justifyContent: 'space-between',
  },
  subBtnBox: {
    flex: 0.5,
  },
  footer: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  footerBox: {paddingBottom: height * 33},
});
