import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {SafeAreaView, View, StyleSheet, BackHandler} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';

import {Commonstyles, Button} from '../../components/common';
import {colors, height, width, icons} from '../../constants';
import {TradeMark} from '../../components/login';
import {LoginStackProp} from '../../types/navigation';

interface Props {
  navigation: LoginStackProp;
}

const LoginIntroScreen = ({navigation}: Props) => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
    <SafeAreaView style={[Commonstyles.container, styles.container]}>
      <View style={styles.padding}>
        <View style={styles.logoContainer}>
          <WithLocalSvg asset={icons.logo} />
          <WithLocalSvg asset={icons.logo_text} />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button.Login
              onPress={() => navigation.navigate('LoginMain', {user: '튜터'})}
              title={'튜티로 로그인'}
            />
          </View>
          {/* <View style={styles.buttonWrapper}>
            <Button.Login
              backgroundColor={colors.white}
              textColor={colors.main}
              onPress={() => navigation.navigate('LoginMain', {user: '튜티'})}
              title={'튜티로 로그인'}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button.Login
              onPress={() => navigation.navigate('LoginMain', {user: '튜터'})}
              title={'튜터로 로그인'}
            />
          </View> */}
          <View style={styles.subWrapper}>
            <Button.Login_Sub
              onPress={() => navigation.navigate('TermsOfUse')}
              title={'회원가입'}
            />
          </View>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {marginTop: height * 240, alignItems: 'center'},
  buttonContainer: {paddingTop: 80, paddingBottom: 20},
  buttonWrapper: {marginBottom: 10},
  padding: {
    paddingHorizontal: width * 86,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  subWrapper: {alignItems: 'center', justifyContent: 'center'},
  subText: {
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
    color: colors.light_gray,
  },
  footer: {position: 'absolute', bottom: 0, paddingBottom: height * 33},
});
