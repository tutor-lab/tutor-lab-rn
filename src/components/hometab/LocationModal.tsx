import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';

import {colors, fonts, icons, width} from '../../constants';

type Props = {};

const LocationModal = ({}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity>
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
            <View style={styles.locationBtnWrapper}>
              <TouchableOpacity style={styles.locationBtn} activeOpacity={0.5}>
                <WithLocalSvg asset={icons.location_picker} />
                <Text
                  style={[fonts[500], styles.locationText]}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  서울특별시
                </Text>
                <WithLocalSvg asset={icons.location_arrow} />
              </TouchableOpacity>
              <View style={styles.line} />
            </View>
          </View>
          <View style={styles.locationBtnContainer}>
            <View style={[styles.locationBtnWrapper, {alignItems: 'flex-end'}]}>
              <TouchableOpacity style={styles.locationBtn} activeOpacity={0.5}>
                <View />
                <Text
                  style={[fonts[500], styles.locationText]}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  강남구
                </Text>
                <WithLocalSvg asset={icons.location_arrow} />
              </TouchableOpacity>
              <View style={styles.line} />
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.currentLocationBtn}>
            <WithLocalSvg asset={icons.location} />
            <Text style={[fonts[700], styles.currentLocationText]}>
              현재 위치로 찾기
            </Text>
          </TouchableOpacity>
        </View>
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
