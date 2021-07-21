import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {height, colors} from '../../constants';
import {LoginBtn, TradeMark, Title, SubTitle} from '../../components/login';
import {Modal, TextInput} from '../../components/common';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<LoginStackParamList>;
}

const FindPwdScreen = ({}: Props) => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);

  const onChangeId = (text: string) => {
    setId(text);
  };

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Title text={'비밀번호 찾기'} />
          </View>
          <View style={{marginBottom: height * 70}}>
            <SubTitle
              text={`아이디와 이메일을 입력해주세요.${'\n'}가입 시 입력한 이메일로 계정 정보를 보내드립니다.`}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              backgroundColor={colors.skyBlue}
              value={id}
              placeholder={'아이디 입력'}
              onChangeText={(e: string) => onChangeId(e)}
            />
            <TextInput
              backgroundColor={colors.skyBlue}
              value={email}
              placeholder={'이메일 입력'}
              onChangeText={(e: string) => onChangeEmail(e)}
            />
          </View>
          <LoginBtn title={'확인'} onPress={() => setVisible(true)} />
          <View style={styles.footer}>
            <TradeMark />
          </View>
          {/* 모달 */}
          <Modal.Container visible={visible} height={170}>
            <Modal.Header onPress={() => setVisible(false)} />
            <View style={styles.modalTitleContainer}>
              <Modal.Title text={'입력한 정보와 일치하는 계정이 없습니다.'} />
            </View>
            <Modal.OneBtn text={'확인'} onPress={() => setVisible(false)} />
          </Modal.Container>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default FindPwdScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white, alignItems: 'center'},
  titleContainer: {paddingTop: height * 219, marginBottom: height * 22},
  inputContainer: {
    height: 106,
    justifyContent: 'space-between',
    marginBottom: height * 25,
  },
  btnContainer: {marginBottom: height * 14},
  footer: {
    paddingTop: height * 117,
  },
  modalTitleContainer: {
    marginBottom: 27,
  },
});
