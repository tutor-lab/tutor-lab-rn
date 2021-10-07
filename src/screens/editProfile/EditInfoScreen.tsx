import React, {useEffect, useState, useRef} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import EmailValidator from 'aj-email-validator';

import {
  Header,
  TextInput,
  Button,
  Data,
  TextInputLabel,
} from '../../components/common';

import {Modals} from '../../components/editProfile';
import {MyInfo, Gender} from '../../types/data';
import {colors, fonts, height, width, utils} from '../../constants';

const EditInfoScreen = ({navigation}: any) => {
  const [birth, setBirth] = useState<string>('');
  const [email, setEmail] = useState<string>(''); //이메일
  const [gender, setGender] = useState<Gender>(Data.Gender[0]); //성별
  const [name, setName] = useState<string>(''); //성명
  const [number, setNumber] = useState<string>(''); //성명
  const [states, setSates] = useState<string>(''); //주소
  const [siGun, setSiGun] = useState<string>(''); //주소
  const [dong, setDong] = useState<string>(''); //주소
  const [state, setState] = useState<string>(''); //주소

  const getUserInfo = async () => {
    try {
      await axios.get('/users/my-info').then((res: MyInfo) => {
        setBirth(res.data.birth);
        setEmail(res.data.email);
        chkGender(res.data.gender);
        setName(res.data.name);
        setNumber(res.data.phoneNumber);
        splitZone(res.data.zone);
        return res;
      });
    } catch (error) {
      return error;
    }
  };

  const splitZone = (zone: string) => {
    const arr = zone.split(' ');
    setState(arr[0]);
    setDong(arr[1]);
    setSiGun(arr[2]);
  };

  const chkGender = (value: string) => {
    const data = utils.genderValdator(value);
    setGender(data);
  };

  const toggleGender = (value: Gender) => {
    const data = utils.toggleGender(value);
    setGender(data);
  };

  useEffect(() => {
    axios
      .get('/addresses/states')
      .then(res => {
        setSates(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header.Basic title={'회원정보 수정'} navigation={navigation} />
      <KeyboardAwareScrollView scrollEnabled>
        <View style={styles.padding}>
          <View style={styles.textInputContainer}>
            <TextInputLabel title={'이메일'} />
            <View style={styles.textInputBox}>
              <TextInput
                value={email}
                onChangeText={(t: string) => setEmail(t)}
                placeholder={'이메일을 입력해 주세요.'}
              />
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <TextInputLabel title={'성명'} />
            <View style={styles.textInputBox}>
              <TextInput
                value={name}
                onChangeText={(t: string) => setName(t)}
                placeholder={'성명을 입력해 주세요.'}
              />
            </View>
          </View>
          <View style={[styles.textInputContainer, styles.row]}>
            <View style={styles.flex}>
              <TextInputLabel title={'성별'} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.textInputBox, styles.rowWidth]}
                onPress={() => toggleGender(gender)}>
                <TextInput
                  editable={false}
                  value={gender?.text}
                  maxLength={2}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.flex}>
              <TextInputLabel title={'출생년도'} />
              <View style={[styles.textInputBox, styles.rowWidth]}>
                <TextInput placeholder={'XXXX'} maxLength={4} />
              </View>
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <TextInputLabel title={'휴대폰 번호'} />
            <View style={styles.textInputBox}>
              <TextInput
                keyboardType={'numeric'}
                value={number}
                onChangeText={(t: string) => setName(t)}
                placeholder={'010-XXXX-XXXX'}
              />
            </View>
          </View>
          <View style={[styles.textInputContainer, styles.row]}>
            <View style={styles.flex}>
              <TextInputLabel title={'주'} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.textInputBox, styles.rowWidth]}
                onPress={() => console.log('부산광역시')}>
                <TextInput placeholder={'주'} editable={false} value={state} />
              </TouchableOpacity>
            </View>
            <View style={styles.flex}>
              <TextInputLabel title={'시/군'} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.textInputBox, styles.rowWidth]}
                onPress={() => console.log('시/군')}>
                <TextInput
                  placeholder={'시/군'}
                  editable={false}
                  value={siGun}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.flex}>
              <TextInputLabel title={'동'} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.textInputBox, styles.rowWidth]}
                onPress={() => console.log('동')}>
                <TextInput editable={false} placeholder={'동'} value={dong} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <Button.Button_Bottom title={'저장'} onPress={() => console.log('')} />
    </SafeAreaView>
  );
};

export default EditInfoScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  padding: {paddingHorizontal: width * 42, paddingTop: 3},
  textInputBox: {
    borderRadius: 10,
    backgroundColor: colors.bg_color,
    justifyContent: 'center',
    height: 50,
  },
  flex: {flex: 1},
  row: {flexDirection: 'row'},
  rowWidth: {width: '95%'},
  textInputContainer: {paddingBottom: 13},
  textLabel: {paddingLeft: 18, fontSize: 14, color: colors.main},
});
