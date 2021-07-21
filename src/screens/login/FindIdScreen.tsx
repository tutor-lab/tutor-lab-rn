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

const FindIdScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

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
          <LoginBtn title={'확인'} onPress={() => setVisible(true)} />
          <View style={styles.footer}>
            <TradeMark />
          </View>
          {/* 모달 */}
          <Modal.Container visible={visible} height={170}>
            <Modal.Title text={'아래 이메일로 계정 정보를 보냈습니다.'} />
            <View style={styles.modalDescriptionContainer}>
              <Modal.Description text={email} />
            </View>
            <Modal.OneBtn text={'확인'} onPress={() => onPressModal()} />
          </Modal.Container>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default FindIdScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white, alignItems: 'center'},
  titleContainer: {paddingTop: height * 219, marginBottom: height * 22},
  inputContainer: {
    marginBottom: height * 27,
  },
  btnContainer: {marginBottom: height * 14},
  footer: {
    paddingTop: height * 156,
  },
  modalDescriptionContainer: {
    marginBottom: 27,
  },
});
