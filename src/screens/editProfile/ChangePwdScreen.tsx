import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  Commonstyles,
  Header,
  Line,
  TextInputLabel,
  TextInput,
  Button,
} from '../../components/common';

import {width, fonts, colors} from '../../constants';

const ChangePwdScreen = ({navigation}: any) => {
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
              <TextInput placeholder={'현재 비밀번호'} secureTextEntry />
            </View>
          </View>
          <View style={Commonstyles.textInputContainer}>
            <TextInputLabel title={'새 비밀번호'} />
            <View style={Commonstyles.textInputWrapper}>
              <TextInput
                placeholder={'새 비밀번호 (6-14자 이내)'}
                secureTextEntry
              />
            </View>
          </View>
          <View style={Commonstyles.textInputContainer}>
            <TextInputLabel title={'새 비밀번호 확인'} />
            <View style={Commonstyles.textInputWrapper}>
              <TextInput placeholder={'새 비밀번호 확인'} secureTextEntry />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <Button.Button_Bottom title={'비밀번호 변경'} onPress={() => ''} />
    </SafeAreaView>
  );
};

export default ChangePwdScreen;

const styles = StyleSheet.create({
  padding: {paddingHorizontal: width * 48, paddingVertical: 28},
  description: {fontSize: 13, lineHeight: 15.51, color: colors.light_gray},
});
