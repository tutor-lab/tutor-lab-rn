import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Text,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import EmailValidator from 'aj-email-validator';
import {WithLocalSvg} from 'react-native-svg/src';
import {
  Header,
  TextInput,
  Button,
  Data,
  TextInputLabel,
  Picker,
} from '../../components/common';
import {Zone} from '../../types/data';
import {Modals} from '../../components/editProfile';
import {MyInfo, Gender} from '../../types/data';
import {colors, width, utils, icons} from '../../constants';

const EditInfoScreen = ({navigation}: any) => {
  const [picker, setPicker] = useState<boolean>(false);
  const [pickerTitle, setPickerTitle] = useState<string>('');
  const [pickerItmes, setPickerItems] = useState<Zone[] | undefined>();
  const [modal, setModal] = useState<boolean>(false);
  const [birth, setBirth] = useState<string>('');
  const [email, setEmail] = useState<string>(''); //이메일
  const [gender, setGender] = useState<Gender>(Data.Gender[0]); //성별
  const [name, setName] = useState<string>(''); //성명
  const [number, setNumber] = useState<string>(''); //성명
  const [states, setSates] = useState<Zone[] | undefined>(); //주소 데이터
  const [siGuns, setSiGuns] = useState<Zone[] | undefined>(); //시/군 데이터
  const [dongs, setDongs] = useState<Zone[] | undefined>(); //동 데이터
  const [siGun, setSiGun] = useState<string>('');
  const [dong, setDong] = useState<string>('');
  const [state, setState] = useState<string>('');

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
    setSiGun(arr[1]);
    setDong(arr[2]);
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
    const uri = `/addresses/siGunGus?state=${state}`;
    axios
      .get(encodeURI(uri))
      .then(response => {
        setSiGuns(response.data);
      })
      .catch(e => console.log(e));
  }, [state]);

  useEffect(() => {
    const uri = `/addresses/dongs?state=${state}&siGunGu=${siGun}`;
    axios
      .get(encodeURI(uri))
      .then(response => {
        setDongs(response.data);
      })
      .catch(e => console.log(e));
  }, [siGun, state]);

  useEffect(() => {
    getUserInfo();
  }, []);

  const sendZone = () => {
    const zone = [];
    zone.push(state, ' ');
    zone.push(siGun, ' ');
    zone.push(dong);
    return zone.join('');
  };

  const sendInfo = () => {
    const data = {
      email: email,
      birth: birth,
      gender: gender.gender,
      name: name,
      phoneNumber: number,
      zone: sendZone(),
    };
    console.log(data);
    // axios
    //   .put('/users', {
    //     email: email,
    //     birth: birth,
    //     gender: gender.gender,
    //     name: name,
    //     phoneNumber: number,
    //     zone: sendZone(),
    //   })
    //   .then(function (response) {
    //     if (response.status === 201) {
    //       console.log(response.data);
    //       console.log(response.status);
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error.message);
    //   });
  };
  const togglePicker = (title: string, items: Zone[] | undefined) => {
    setPickerTitle(title);
    setPicker(true);
    setPickerItems(items);
  };
  console.log(picker);
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
                <View style={styles.textInputRow}>
                  <TextInput
                    maxLength={2}
                    editable={false}
                    value={gender?.text}
                  />
                </View>
                <View style={styles.pickerWrapper}>
                  <WithLocalSvg asset={icons.picker} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.flex}>
              <TextInputLabel title={'출생년도'} />
              <View style={[styles.textInputBox, styles.rowWidth]}>
                <TextInput
                  placeholder={'XXXX'}
                  maxLength={4}
                  onChangeText={(e: string) => setNumber(e)}
                />
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
          <View style={styles.textInputContainer}>
            <TextInputLabel title={'주'} />
            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.textInputBox, styles.rowWidth, {width: '100%'}]}
              onPress={() => togglePicker('주', states)}>
              <View style={styles.textInputRow}>
                <TextInput editable={false} value={state} />
              </View>
              <View style={styles.pickerWrapper}>
                <WithLocalSvg asset={icons.picker} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.textInputContainer, styles.row]}>
            <View style={styles.flex}>
              <TextInputLabel title={'시/군'} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.textInputBox, styles.rowWidth]}
                onPress={() => togglePicker('시/군', siGuns)}>
                <View style={styles.textInputRow}>
                  <TextInput editable={false} value={siGun} />
                </View>
                <View style={styles.pickerWrapper}>
                  <WithLocalSvg asset={icons.picker} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.flex}>
              <TextInputLabel title={'동'} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.textInputBox, styles.rowWidth]}
                onPress={() => togglePicker('동', dongs)}>
                <View style={styles.textInputRow}>
                  <TextInput editable={false} value={dong} />
                </View>
                <View style={styles.pickerWrapper}>
                  <WithLocalSvg asset={icons.picker} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <Button.Button_Bottom title={'저장'} onPress={() => sendInfo()} />
      <Picker
        title={pickerTitle}
        visible={picker}
        setVisible={setPicker}
        items={pickerItmes}
      />
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
  rowWidth: {width: '95%', flexDirection: 'row'},
  textInputContainer: {paddingBottom: 13},
  textLabel: {paddingLeft: 18, fontSize: 14, color: colors.main},
  textInputRow: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  pickerWrapper: {
    width: 9,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 18,
  },
});
