import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {height, colors} from '../../constants';
import {Modal, TextInput} from '../../components/common';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<LoginStackParamList>;
}

const LectureScreen = ({}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>LectureScreen</Text>
    </SafeAreaView>
  );
};

export default LectureScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white, alignItems: 'center'},
  titleContainer: {paddingTop: height * 219, marginBottom: height * 22},
  inputContainer: {
    height: 106,
    justifyContent: 'space-between',
    marginBottom: height * 25,
  },
  btnContainer: {marginBottom: height * 14},
  footer: {
    paddingTop: height * 117,
  },
  modalTitleContainer: {
    marginBottom: 27,
  },
});
