import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, View, Text, Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {
  Header,
  Line,
  Data,
  TextInputLabel,
  TextInput,
  Button,
  ErrorText,
} from '../../components/common';
import {CheckBox, Modals} from '../../components/editprofile';
import {colors, width, fonts, utils} from '../../constants';

const WithdrawalScreen = ({}) => {
  const navigation = useNavigation();
  const [checkList, setCheckList] = useState(Data.WithdrawalCheckList);
  const [extra, setExtra] = useState<string>('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState<string>('');
  const [modal, setModal] = useState(false);
  const toggleCheckBox = (id: number) => {
    const checkIdx = checkList.map(item =>
      item.id === id
        ? {...item, isSelected: true}
        : {...item, isSelected: false},
    );
    setCheckList(checkIdx);
  };

  const sendButton = () => {
    Keyboard.dismiss();
    const findReason = checkList.filter(item => item.isSelected);
    if (findReason.length === 0) {
      setError('탈퇴 이유를 체크 해 주세요.');
    } else if (findReason[0].id === 6 && extra.length === 0) {
      setError('탈퇴 이유를 입력해주세요(기타)');
    } else if (!utils.pwdValidator(password)) {
      setError('비밀번호를 정확히 입력 해 주세요(6 ~ 14자).');
    } else {
      setModal(true);
    }
  };

  const sendDrawal = () => {
    setModal(false);
    const findReason = checkList.filter(item => item.isSelected)[0];
    const config = {
      data: {
        password: password,
        reason: findReason.id === 6 ? extra : findReason.text,
        reasonId: findReason.id,
      },
    };
    axios
      .delete('/users', config)
      .then(() => {
        AsyncStorage.removeItem('accessToken');
        navigation.replace('Login', {screen: 'LoginIntro'});
      })
      .catch(err => {
        const errData = err.response.data;
        if (errData.code === 500) {
          setError(errData.errorDetails[0]);
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header.Basic navigation={navigation} title={'회원 탈퇴'} />
      <KeyboardAwareScrollView>
        <View style={styles.padding}>
          <View style={styles.descriptionWrapper}>
            {Data.WithdrawalDescription.map(item => (
              <Text style={[fonts[400], styles.description]} key={item.id}>
                {item.text}
              </Text>
            ))}
          </View>
        </View>
        <Line height={8} />
        <View style={styles.padding}>
          {checkList.map(item => (
            <CheckBox
              key={item.id}
              item={item}
              onPress={() => toggleCheckBox(item.id)}
            />
          ))}
          <View style={[styles.textInputBox, {height: 100}]}>
            <TextInput
              value={extra}
              multiline
              onChangeText={(e: string) => setExtra(e)}
            />
          </View>
        </View>
        <Line height={8} />
        <View style={styles.padding}>
          <TextInputLabel title={'비밀번호 확인'} />
          <View style={styles.textInputBox}>
            <TextInput
              secureTextEntry
              value={password}
              onChangeText={(e: string) => setPassword(e)}
            />
          </View>
          {error.length !== 0 && <ErrorText text={error} />}
        </View>
      </KeyboardAwareScrollView>
      <Button.Button_Bottom title={'탈퇴'} onPress={() => sendButton()} />
      <Modals.Container visible={modal} setVisible={setModal}>
        <Modals.Title text={'회원 탈퇴'} />
        <Modals.Description text={'탈퇴 하시겠습니까?'} />
        <Modals.TwoBtn
          onPressCancel={() => setModal(false)}
          onPressOk={() => sendDrawal()}
          textCancel={'아니요'}
          textOk={'예'}
        />
      </Modals.Container>
    </SafeAreaView>
  );
};

export default WithdrawalScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  padding: {
    paddingHorizontal: width * 48,
    width: '100%',
    paddingVertical: 20,
  },
  descriptionWrapper: {width: '100%', alignItems: 'center'},
  description: {
    fontSize: 13,
    lineHeight: 15.5,
    color: colors.light_gray,
    marginBottom: 20,
  },
  textInputBox: {
    borderRadius: 10,
    backgroundColor: colors.bg_color,
  },
});
