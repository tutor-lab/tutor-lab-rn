import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, View, Text, StyleSheet, Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  Commonstyles,
  Header,
  Line,
  TextInputLabel,
  TextInput,
  Button,
  ErrorText,
} from '../../components/common';

import {Modals} from '../../components/editProfile';
import {width, fonts, colors, utils} from '../../constants';

const ChangePwdScreen = ({navigation}: any) => {
  const [pwd, setPwd] = useState({text: '', error: ''});
  const [newPwd, setNewPwd] = useState({text: '', error: ''});
  const [retypeNewPwd, setRetypeNewPwd] = useState({text: '', error: ''});
  const [modal, setModal] = useState(false);

  const sendChangePwd = () => {
    Keyboard.dismiss();
    if (
      true
      // 1. 비밀번호 확인하기 (api 아직 없음)
    ) {
      setPwd({text: '', error: '비밀번호가 일치하지 않습니다.'});
    } else if (!utils.pwdValidator(newPwd.text)) {
      //  2. 비밀번호 양식 틀리면
      setNewPwd({text: '', error: '비밀번호는 6-14자 이내 이어야 합니다.'});
      setRetypeNewPwd({text: '', error: ''});
    } else if (!utils.pwdTypoCheck(newPwd.text, retypeNewPwd.text)) {
      // 3. 새 비밀번호 일치하지 않으면
      setRetypeNewPwd({text: '', error: '새 비밀번호가 일치하지 않습니다.'});
    } else {
      // 다 일치하면
      setModal(true);
      // 토큰 변경하고
    }
  };

  return (
    <SafeAreaView style={Commonstyles.container}>
      <Header.Basic title={'비밀번호 변경'} navigation={navigation} />
      <KeyboardAwareScrollView>
        <View style={styles.padding}>
          <Text style={[fonts[400], styles.description]}>
            주기적인 비밀번호 변경을 통해 개인정보를 안전하게 보호할 수
            있습니다.
          </Text>
        </View>
        <Line height={8} />
        <View style={styles.padding}>
          <View style={Commonstyles.textInputContainer}>
            <TextInputLabel title={'현재 비밀번호'} />
            <View style={Commonstyles.textInputWrapper}>
              <TextInput
                placeholder={'현재 비밀번호'}
                secureTextEntry
                value={pwd.text}
                onChangeText={(e: string) => setPwd({...pwd, text: e})}
              />
            </View>
            {pwd.error.length !== 0 && <ErrorText text={pwd.error} />}
          </View>
          <View style={Commonstyles.textInputContainer}>
            <TextInputLabel title={'새 비밀번호'} />
            <View style={Commonstyles.textInputWrapper}>
              <TextInput
                placeholder={'새 비밀번호 (6-14자 이내)'}
                secureTextEntry
                value={newPwd.text}
                onChangeText={(e: string) => setNewPwd({...newPwd, text: e})}
              />
            </View>
            {newPwd.error.length !== 0 && <ErrorText text={newPwd.error} />}
          </View>
          <View style={Commonstyles.textInputContainer}>
            <TextInputLabel title={'새 비밀번호 확인'} />
            <View style={Commonstyles.textInputWrapper}>
              <TextInput
                placeholder={'새 비밀번호 확인'}
                secureTextEntry
                value={retypeNewPwd.text}
                onChangeText={(e: string) =>
                  setRetypeNewPwd({...retypeNewPwd, text: e})
                }
              />
            </View>
            {retypeNewPwd.error.length !== 0 && (
              <ErrorText text={retypeNewPwd.error} />
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
      <Button.Button_Bottom
        title={'비밀번호 변경'}
        onPress={() => sendChangePwd()}
      />
      {modal && (
        <Modals.Container visible={modal} setVisible={setModal}>
          <Modals.Title text={'비밀번호 변경'} />
          <Modals.Description text={'비밀번호가 변경되었습니다.'} />
          <Modals.OneBtn
            text={'확인'}
            onPress={() => {
              setModal(false);
              navigation.goBack();
            }}
          />
        </Modals.Container>
      )}
    </SafeAreaView>
  );
};

export default ChangePwdScreen;

const styles = StyleSheet.create({
  padding: {paddingHorizontal: width * 48, paddingVertical: 28},
  description: {fontSize: 13, lineHeight: 15.51, color: colors.light_gray},
});
