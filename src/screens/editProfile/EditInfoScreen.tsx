import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
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
  Commonstyles,
} from '../../components/common';
import {Zone} from '../../types/data';
import {Modals} from '../../components/editprofile';
import {MyInfo, Gender} from '../../types/data';
import {colors, width, utils, icons, fonts} from '../../constants';

const EditInfoScreen = ({navigation}: any) => {
  const [picker, setPicker] = useState<boolean>(false);
  const [pickerTitle, setPickerTitle] = useState<string>('');
  const [pickerItmes, setPickerItems] = useState<Zone[] | undefined>();
  const [modal, setModal] = useState<boolean>(false);
  const [modalDescription, setModalDescription] = useState<string>('');
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
  const [errorText, setErrorText] = useState<string>('');

  const getUserInfo = async () => {
    try {
      await axios.get('/users/my-info').then((res: MyInfo) => {
        setBirth(res.data.birth);
        setEmail(res.data.email);
        chkGender(res.data.gender);
        setName(res.data.name);
        setNumber(res.data.phoneNumber ? res.data.phoneNumber : '');
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
  }, [siGun]);

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
    Keyboard.dismiss();
    if (!EmailValidator(email)) {
      setErrorText('이메일을 정확히 입력해 주세요.');
    } else if (name.length === 0) {
      setErrorText('성명을 정확히 입력해 주세요.');
    } else if (!utils.birthValidator(birth)) {
      setErrorText('출생년도를 정확히 입력해 주세요.');
    } else if (number.length === 0) {
      setErrorText('번호를 정확히 입력해 주세요.');
    } else if (state.length === 0) {
      setErrorText('주를 선택해 주세요.');
    } else if (siGun.length === 0) {
      setErrorText('시/군을 선택해 주세요.');
    } else if (dong.length === 0) {
      setErrorText('동을 선택해 주세요.');
    } else {
      axios
        .put('/users', {
          email: email,
          name: name,
          gender: gender.gender,
          birth: birth,
          phoneNumber: number,
          zone: sendZone(),
        })
        .then(res => {
          if (res.status === 201) {
            setErrorText('');
            setModalDescription('수정이 완료되었습니다.');
            setModal(true);
          }
        })
        .catch(error => {
          console.log(error);
          setModalDescription('오류가 발생하였습니다.');
          setModal(true);
        });
    }
  };

  const togglePicker = (title: string, items: Zone[] | undefined) => {
    setPickerTitle(title);
    setPicker(true);
    setPickerItems(items);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header.Basic title={'회원정보 수정'} navigation={navigation} />
      <KeyboardAwareScrollView scrollEnabled>
        <View style={styles.padding}>
          <View style={Commonstyles.textInputContainer}>
            <TextInputLabel title={'이메일'} />
            <View style={Commonstyles.textInputWrapper}>
              <TextInput
                value={email}
                onChangeText={(t: string) => setEmail(t)}
                placeholder={'이메일을 입력해 주세요.'}
              />
            </View>
          </View>
          <View style={Commonstyles.textInputContainer}>
            <TextInputLabel title={'성명'} />
            <View style={Commonstyles.textInputWrapper}>
              <TextInput
                value={name}
                onChangeText={(t: string) => setName(t)}
                placeholder={'성명을 입력해 주세요.'}
              />
            </View>
          </View>
          <View style={[Commonstyles.textInputContainer, styles.row]}>
            <View style={styles.flex}>
              <TextInputLabel title={'성별'} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={[Commonstyles.textInputWrapper, styles.rowWidth]}
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
              <View style={[Commonstyles.textInputWrapper, styles.rowWidth]}>
                <TextInput
                  keyboardType={'numeric'}
                  placeholder={'XXXX'}
                  maxLength={4}
                  value={birth}
                  onChangeText={(e: string) => setBirth(e)}
                />
              </View>
            </View>
          </View>
          <View style={Commonstyles.textInputContainer}>
            <TextInputLabel title={'휴대폰 번호'} />
            <View style={Commonstyles.textInputWrapper}>
              <TextInput
                value={number}
                keyboardType={'numeric'}
                placeholder={'번호를 입력해 주세요.'}
                maxLength={11}
                onChangeText={(e: string) => setNumber(e)}
              />
            </View>
          </View>
          <View style={Commonstyles.textInputContainer}>
            <TextInputLabel title={'주'} />
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                Commonstyles.textInputWrapper,
                styles.rowWidth,
                {width: '100%'},
              ]}
              onPress={() => togglePicker('주', states)}>
              <View style={styles.textInputRow}>
                <TextInput editable={false} value={state} />
              </View>
              <View style={styles.pickerWrapper}>
                <WithLocalSvg asset={icons.picker} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={[Commonstyles.textInputContainer, styles.row]}>
            <View style={styles.flex}>
              <TextInputLabel title={'시/군'} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={[Commonstyles.textInputWrapper, styles.rowWidth]}
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
                style={[Commonstyles.textInputWrapper, styles.rowWidth]}
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
          <Text style={[fonts[400], styles.errorText]}>{errorText}</Text>
        </View>
      </KeyboardAwareScrollView>
      <Button.Button_Bottom title={'저장'} onPress={() => sendInfo()} />
      <Picker
        title={pickerTitle}
        visible={picker}
        setVisible={setPicker}
        items={pickerItmes}
        setItem={
          pickerTitle === '주'
            ? setState
            : pickerTitle === '시/군'
            ? setSiGun
            : setDong
        }
      />
      <Modals.Container visible={modal} setVisible={setModal}>
        <Modals.Title text={'회원정보 수정'} />
        <Modals.Description text={modalDescription} />
        <Modals.OneBtn
          text={'확인'}
          onPress={() => {
            setModal(false);
            navigation.goBack();
          }}
        />
      </Modals.Container>
    </SafeAreaView>
  );
};

export default EditInfoScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  padding: {paddingHorizontal: width * 42, paddingTop: 3},
  flex: {flex: 1},
  row: {flexDirection: 'row'},
  rowWidth: {width: '95%', flexDirection: 'row'},
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
  errorText: {fontSize: 12, color: colors.red},
});
