import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, View, StyleSheet, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Header, TextInput, TextInputLabel} from '../../components/common';
import {colors, width} from '../../constants';

const EditInfoScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header.Basic title={'회원정보 수정'} navigation={navigation} />
      <KeyboardAwareScrollView scrollEnabled>
        <View style={styles.padding}>
          <View style={styles.textInputContainer}>
            <TextInputLabel title={'이메일'} />
            <View style={styles.textInputBox}>
              <TextInput placeholder={'이메일을 입력해 주세요.'} />
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <TextInputLabel title={'성명'} />
            <View style={styles.textInputBox}>
              <TextInput placeholder={'성명을 입력해 주세요.'} />
            </View>
          </View>
          <View style={[styles.textInputContainer, {flexDirection: 'row'}]}>
            <View style={styles.flex}>
              <TextInputLabel title={'성별'} />
              <TouchableOpacity
                style={[styles.textInputBox, styles.row]}
                onPress={() => console.log('')}>
                <TextInput editable={false} maxLength={2} />
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
              <TextInput placeholder={'010-XXXX-XXXX'} />
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <TextInputLabel title={'주소'} />
            <View style={styles.textInputBox}>
              <TextInput placeholder={'주소'} />
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
