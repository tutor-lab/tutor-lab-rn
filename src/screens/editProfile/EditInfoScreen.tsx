import React, {useEffect, useState} from 'react';
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

import {Header, TextInput, Data, TextInputLabel} from '../../components/common';
import {MyInfo, Gender} from '../../types/data';
import {colors, fonts, width} from '../../constants';

const EditInfoScreen = ({navigation}) => {
  const [birth, setBirth] = useState<string>('');
  const [email, setEmail] = useState<string>(''); //이메일
  const [gender, setGender] = useState<string>(''); //성별
  const [genderData, setGenderData] = useState<Gender[]>(Data.Gender);
  const [name, setName] = useState<string>(''); //성명
  const [number, setNumber] = useState<string>(''); //성명
  const [zone, setZone] = useState<string>(''); //주소

  const getUserInfo = async () => {
    try {
      await axios.get('/users/my-info').then((res: MyInfo) => {
        console.log(res.data);
        setBirth(res.data.birth);
        setEmail(res.data.email);
        chkGender(res.data.gender);
        setName(res.data.name);
        setNumber(res.data.phoneNumber);
        setZone(res.data.zone);
        return res;
      });
    } catch (error) {
      return error;
    }
  };

  const chkGender = (chk: string) => {
    const findIdx = genderData.map(curr => {
      return curr.gender === `${chk}`
        ? {...curr, isTrue: true}
        : {...curr, isTrue: false};
    });
    setGenderData(findIdx);
    setGender(genderData.filter(curr => curr.isTrue)[0].text);
  };

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
          <View style={[styles.textInputContainer, {flexDirection: 'row'}]}>
            <View style={styles.flex}>
              <TextInputLabel title={'성별'} />
              <TouchableOpacity
                style={[styles.textInputBox, styles.row]}
                onPress={() => console.log('')}>
                <TextInput editable={false} value={gender} maxLength={2} />
              </TouchableOpacity>
            </View>
            <View style={styles.flex}>
              <TextInputLabel title={'출생년도'} />
              <View style={[styles.textInputBox, styles.row]}>
                <TextInput placeholder={'XXXX'} maxLength={4} />
              </View>
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <TextInputLabel title={'휴대폰 번호'} />
            <View style={styles.textInputBox}>
              <TextInput
                value={number}
                onChangeText={(t: string) => setName(t)}
                placeholder={'010-XXXX-XXXX'}
              />
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <TextInputLabel title={'주소'} />
            <View style={styles.textInputBox}>
              <TextInput
                value={zone}
                onChangeText={(t: string) => setName(t)}
                placeholder={'주소'}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
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
  row: {width: '95%'},
  textInputContainer: {paddingBottom: 13},
  textLabel: {paddingLeft: 18, fontSize: 14, color: colors.main},
});
