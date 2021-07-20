import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {fonts, height, colors} from '../../constants';
import {LoginBtn, TradeMark, SubBtn, Input} from '../../components/login';

interface Props {
  navigation: StackNavigationProp<LoginStackParamList>;
  route: RouteProp<LoginStackParamList, 'LoginMain'>;
}

const LoginMainScreen = ({route, navigation}: Props) => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const idOnChange = (text: string) => {
    setId(text);
  };

  const pwdOnChange = (text: string) => {
    setPwd(text);
  };

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{route.params.user} 로그인</Text>
          </View>
          <View style={styles.inputContainer}>
            <Input
              backgroundColor={colors.skyBlue}
              value={id}
              placeholder={'ID(Email)'}
              onChangeText={(e: string) => idOnChange(e)}
            />
            <Input
              backgroundColor={colors.skyBlue}
              value={pwd}
              placeholder={'Password'}
              onChangeText={(e: string) => pwdOnChange(e)}
            />
          </View>
          <View style={styles.btnContainer}>
            <LoginBtn
              title={'로그인 하기'}
              onPress={() => console.log('로그인')}
            />
          </View>
          <View style={styles.subBtnContaier}>
            <View style={styles.subBtnBox1}>
              <SubBtn
                title={'아이디 찾기'}
                onPress={() => navigation.navigate('FindId')}
              />
            </View>
            <View style={styles.subBtnBox2}>
              <SubBtn
                title={'비밀번호 찾기'}
                onPress={() => navigation.navigate('FindPwd')}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <TradeMark />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginMainScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  titleContainer: {marginTop: height * 128, marginBottom: height * 127},
  title: {
    fontFamily: fonts.regular,
    fontSize: 24,
  },
  inputContainer: {
    height: 106,
    justifyContent: 'space-between',
    marginBottom: height * 39,
  },
  btnContainer: {marginBottom: height * 14},
  subBtnContaier: {
    flexDirection: 'row',
  },
  subBtnBox1: {flex: 1, alignItems: 'flex-end', marginRight: 15},
  subBtnBox2: {flex: 1, alignItems: 'flex-start', marginLeft: 15},
  footer: {
    paddingTop: height * 160,
  },
});
