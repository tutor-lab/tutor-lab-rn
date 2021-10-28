import React, {useState, useEffect, memo} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  Commonstyles,
  Header,
  Button,
  Line,
  ErrorText,
} from '../../components/common';
import {colors, width, fonts, height} from '../../constants';
import {Modals} from '../../components/editprofile';

const RequireClassScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [modal, setModal] = useState(false);

  const apiRequire = () => {
    if (text.length < 10 || text.length > 1500) {
      setError('최소 10자, 최대 1500자 이어야 합니다.');
    } else {
      // api 요청
    }
  };

  return (
    <SafeAreaView style={Commonstyles.container}>
      <Header.Basic title={'강의 요청'} navigation={navigation} />
      <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.padding}>
          <View style={styles.descriptionWrapper}>
            <Text style={[fonts[400], styles.description]}>
              현재 튜터랩에 개설되어 있지 않거나, {'\n'}수강을 원하는 강의가
              있다면 자유롭게 작성해주세요.{'\n'}추후에 신규강의로 개설될 수
              있도록 노력하겠습니다.
            </Text>
          </View>
        </View>
        <Line height={8} />
        <View style={styles.padding}>
          <TouchableOpacity
            style={[styles.textInputBox, {height: height * 462}]}
            activeOpacity={1}>
            <TextInput
              value={text}
              placeholder={`요청 강의에 대한 상세내용을 입력해주세요.${'\n'}(최소 10자, 최대 1500자)`}
              onChangeText={(e: string) => setText(e)}
              multiline
              style={[fonts[400], styles.textInput]}
            />
          </TouchableOpacity>
          <ErrorText text={error} />
        </View>
      </KeyboardAwareScrollView>
      <Button.Button_Bottom title={'요청'} onPress={() => apiRequire()} />
      {/* 모달창 */}
      <Modals.Container visible={modal} setVisible={setModal}>
        <Modals.Title text={'강의 요청'} />
        <Modals.Description text={'요청이 완료되었습니다.'} />
        <Modals.OneBtn text={'확인'} onPress={() => navigation.goBack()} />
      </Modals.Container>
    </SafeAreaView>
  );
};

export default RequireClassScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  padding: {
    paddingHorizontal: width * 48,
    width: '100%',
    paddingVertical: 20,
  },
  scroll: {flexGrow: 1},
  descriptionWrapper: {width: '100%', alignItems: 'center'},
  description: {
    fontSize: 13,
    lineHeight: 15.51,
    color: colors.light_gray,
    marginBottom: 20,
  },
  textInputBox: {
    borderRadius: 10,
    backgroundColor: colors.bg_color,
  },
  textInput: {
    fontSize: 14,
    paddingHorizontal: 18,
    width: '100%',
    height: '100%',
  },
});
