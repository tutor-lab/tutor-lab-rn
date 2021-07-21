import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {height, colors} from '../../constants';
import {TradeMark, SubBtn, Title} from '../../components/login';
import {Button, TextInput} from '../../components/common';

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
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Title text={`${route.params.user} 로그인`} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              backgroundColor={colors.skyBlue}
              value={id}
              placeholder={'ID(Email)'}
              onChangeText={(e: string) => idOnChange(e)}
            />
            <TextInput
              backgroundColor={colors.skyBlue}
              value={pwd}
              placeholder={'Password'}
              onChangeText={(e: string) => pwdOnChange(e)}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button.Button
              title={'로그인 하기'}
              onPress={() => console.log('로그인')}
            />
          </View>
          <View style={styles.subBtnContaier}>
            <View style={styles.subBtnBox01}>
              <SubBtn
                title={'아이디 찾기'}
                onPress={() => navigation.navigate('FindId')}
              />
            </View>
            <View style={styles.subBtnBox02}>
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
  container: {flex: 1, backgroundColor: colors.white, alignItems: 'center'},
  titleContainer: {marginTop: height * 128, marginBottom: height * 127},
  inputContainer: {
    height: 106,
    justifyContent: 'space-between',
    marginBottom: height * 39,
  },
  btnContainer: {marginBottom: height * 14},
  subBtnContaier: {
    flexDirection: 'row',
  },
  subBtnBox01: {flex: 1, alignItems: 'flex-end', marginRight: 15},
  subBtnBox02: {flex: 1, alignItems: 'flex-start', marginLeft: 15},
  footer: {
    paddingTop: height * 160,
  },
});
