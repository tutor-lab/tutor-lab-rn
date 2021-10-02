import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet,Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {height, colors} from '../../constants';
import {LoginBtn, TradeMark, Title, SubTitle} from '../../components/login';
import {Modal, TextInput} from '../../components/common';
import {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';
import EmailValidator from 'aj-email-validator';
import FindAccountInfo from './FindAccountInfo';

interface Props {
  navigation: StackNavigationProp<LoginStackParamList>;
}

const FindIdScreen = ({navigation}: Props) => {
  

  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const checkInputValue = () => {

    if(email === '') Alert.alert('이메일을 입력해주세요.');
    else if(!EmailValidator(email)) Alert.alert('이메일 형식이 올바르지 않습니다.');
    else {
        const isUserExist = checkIsUserExistByEmail(email);
        if(!isUserExist) Alert.alert('등록된 회원 정보가 없습니다.');
        else setVisible(true);
    }
  }

  const checkIsUserExistByEmail = (value: string) => {
     if(value === 'nouser@gmail.com') {
       return (false);
     } else {
       return (true);
     }
  }

  const onPressModal = () => {
    setVisible(false);
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Title text={'아이디 찾기'} />
          </View>
          <View style={{marginBottom: height * 89}}>
            <SubTitle
              text={'가입 시 입력한 이메일로 계정 정보를 보내드립니다.'}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              backgroundColor={colors.skyBlue}
              value={email}
              placeholder={'이메일 입력'}
              onChangeText={(e: string) => onChangeEmail(e)}
            />
          </View>
          <LoginBtn title={'확인'} onPress={() => checkInputValue() } />
          <View style={styles.footer}>
            <TradeMark />
          </View>
          {/* 팝업 모달 - FindAccountInfo */}
         <FindAccountInfo email={email} visible={visible} setVisible={setVisible} onPressModal={onPressModal}/>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default FindIdScreen;

const styles = StyleSheet.create({

  container: {flex: 1, backgroundColor: colors.white, alignItems: 'center' },
  titleContainer: { paddingTop: height * 219, marginBottom: height * 22 },
  inputContainer: {
    marginBottom: height * 27,
  },
  btnContainer: { marginBottom: height * 14 },
  footer: {
    paddingTop: height * 156,
  },
  modalDescriptionContainer: {

    paddingTop: height * 8,
    marginBottom: height * 12,
  },
});
