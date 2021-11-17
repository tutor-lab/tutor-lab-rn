import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';
import {Picker} from '../../components/common';
import {colors, fonts, icons, width} from '../../constants';
import {Zone} from '../../types/data';
import {Button} from '../../components/common';

type Props = {navigation: any};

const LocationModal = ({navigation}: Props) => {
  const [picker, setPicker] = useState<boolean>(false);
  const [pickerTitle, setPickerTitle] = useState<string>('');
  const [pickerItmes, setPickerItems] = useState<Zone[] | undefined>();
  const [state, setState] = useState<string>('');
  const [states, setSates] = useState<Zone[] | undefined>(); //주소 데이터
  const [siGun, setSiGun] = useState<string>('');
  const [siGuns, setSiGuns] = useState<Zone[] | undefined>(); //시/군 데이터
  const [dong, setDong] = useState<string>('');
  const [dongs, setDongs] = useState<Zone[] | undefined>(); //동 데이터
  const [prevState, setPrevState] = useState('');
  const [prevSiGun, setPrevSiGun] = useState('');

  const togglePicker = (title: string, items: Zone[] | undefined) => {
    setPickerTitle(title);
    setPicker(true);
    setPickerItems(items);
  };

  const sendZone = () => {
    const onSetZone = () => {
      AsyncStorage.mergeItem(
        'zone',
        JSON.stringify({state, siGun, dong}),
        () => {
          navigation.replace('Main');
        },
      );
    };
    if (state.length !== 0 && siGun.length !== 0 && dong.length !== 0) {
      onSetZone();
    } else {
      Alert.alert('주소를 정확히 입력해 주세요.');
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('zone', (_err, result) => {
      const userZone = JSON.parse(result);
      if (userZone) {
        setState(userZone.state);
        setPrevState(userZone.state);
        setSiGun(userZone.siGun);
        setPrevSiGun(userZone.siGun);
        setDong(userZone.dong);
      }
    });
  }, []);
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
    const onSetSiGuns = () => {
      const uri = `/addresses/siGunGus?state=${state}`;
      axios
        .get(encodeURI(uri))
        .then(response => {
          if (prevState !== state && prevState.length !== 0) {
            setPrevState(state);
            setSiGun('');
            setDong('');
          }
          setSiGuns(response.data);
        })
        .catch(e => console.log(e));
    };
    if (state.length !== 0) {
      onSetSiGuns();
    }
  }, [prevState, state]);
  useEffect(() => {
    const onSetDongs = () => {
      const uri = `/addresses/dongs?state=${state}&siGunGu=${siGun}`;
      axios
        .get(encodeURI(uri))
        .then(response => {
          if (prevSiGun !== siGun && prevSiGun.length !== 0) {
            setPrevSiGun(siGun);
            setDong('');
          }
          setDongs(response.data);
        })
        .catch(e => console.log(e));
    };
    if (state.length !== 0 && siGun.length !== 0) {
      onSetDongs();
    }
  }, [prevSiGun, siGun, state]);

  const onLocationAll = () => {
    AsyncStorage.removeItem('zone').then(() => navigation.replace('Main'));
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.goBack()}>
            <WithLocalSvg asset={icons.close} />
          </TouchableOpacity>
          <View style={{marginLeft: width * 20}}>
            <Text style={[fonts[500], styles.headerText]}>강의 지역 설정</Text>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <View>
            <Text style={[fonts[700], styles.title]}>
              내 주변에 있는{'\n'}맞춤형 튜터를 찾아드려요!
            </Text>
          </View>
          <View style={styles.locationWrapper}>
            <View style={styles.locationBtnContainer}>
              <View style={[styles.locationBtnWrapper, {width: '100%'}]}>
                <TouchableOpacity
                  style={styles.stateBtn}
                  activeOpacity={0.5}
                  onPress={() => togglePicker('주', states)}>
                  <WithLocalSvg asset={icons.location_picker} />
                  <Text
                    style={[fonts[500], styles.locationText]}
                    ellipsizeMode="tail"
                    numberOfLines={1}>
                    {state}
                  </Text>
                  <WithLocalSvg asset={icons.location_arrow} />
                </TouchableOpacity>
                <View style={styles.line} />
              </View>
            </View>
          </View>
          <View style={styles.locationWrapper}>
            <View style={styles.locationBtnContainer}>
              <View style={[styles.locationBtnWrapper]}>
                <TouchableOpacity
                  style={styles.locationBtn}
                  activeOpacity={0.5}
                  onPress={() => togglePicker('시/군', siGuns)}>
                  <Text
                    style={[fonts[500], styles.locationText]}
                    ellipsizeMode="tail"
                    numberOfLines={1}>
                    {siGun}
                  </Text>
                  <WithLocalSvg asset={icons.location_arrow} />
                </TouchableOpacity>
                <View style={styles.line} />
              </View>
            </View>
            <View style={styles.locationBtnContainer}>
              <View
                style={[styles.locationBtnWrapper, {alignItems: 'flex-end'}]}>
                <TouchableOpacity
                  style={styles.locationBtn}
                  activeOpacity={0.5}
                  onPress={() => togglePicker('동', dongs)}>
                  <View />
                  <Text
                    style={[fonts[500], styles.locationText]}
                    ellipsizeMode="tail"
                    numberOfLines={1}>
                    {dong}
                  </Text>
                  <WithLocalSvg asset={icons.location_arrow} />
                </TouchableOpacity>
                <View style={styles.line} />
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.currentLocationBtn}
              onPress={onLocationAll}>
              <WithLocalSvg asset={icons.location} />
              <Text style={[fonts[700], styles.currentLocationText]}>
                전체 지역 조회
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View>
            <TouchableOpacity style={styles.currentLocationBtn}>
              <WithLocalSvg asset={icons.location} />
              <Text style={[fonts[700], styles.currentLocationText]}>
                현재 위치로 찾기
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
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
      </View>
      <View style={{bottom: 0}}>
        <Button.Button_Bottom title={'지역 설정'} onPress={() => sendZone()} />
      </View>
    </View>
  );
};
export default LocationModal;

const styles = StyleSheet.create({
  container: {flex: 1},
  headerWrapper: {
    paddingHorizontal: width * 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {fontSize: 14},
  mainContainer: {paddingHorizontal: width * 51, marginTop: 99},
  title: {textAlign: 'center', fontSize: 25, lineHeight: 35},
  locationWrapper: {
    flexDirection: 'row',
    marginTop: 45,
    marginBottom: 24,
  },
  stateBtn: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 9,
  },
  locationBtn: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 9,
  },
  locationBtnContainer: {flex: 1},
  locationBtnWrapper: {width: '90%'},
  line: {backgroundColor: colors.main, height: 1, width: '100%'},
  locationText: {fontSize: 14},
  currentLocationBtn: {
    backgroundColor: colors.main,
    paddingVertical: 8,
    justifyContent: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentLocationText: {marginLeft: 8, fontSize: 14, color: colors.white},
});
