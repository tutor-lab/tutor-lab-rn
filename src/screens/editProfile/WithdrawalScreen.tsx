import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  Header,
  Line,
  Data,
  TextInputLabel,
  TextInput,
  Button,
} from '../../components/common';
import {CheckBox} from '../../components/editProfile';
import {colors, width, fonts} from '../../constants';

const WithdrawalScreen = ({navigation}) => {
  const [checkList, setCheckList] = useState(Data.WithdrawalCheckList);
  const [extra, setExtra] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const toggleCheckBox = (id: number) => {
    const checkIdx = checkList.map(item =>
      item.id === id
        ? {...item, isSelected: true}
        : {...item, isSelected: false},
    );
    setCheckList(checkIdx);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header.Basic navigation={navigation} title={'회원 탈퇴'} />
      <KeyboardAwareScrollView>
        <View style={styles.padding}>
          <View style={styles.descriptionWrapper}>
            {Data.WithdrawalDescription.map(item => (
              <Text style={[fonts[400], styles.description]} key={item.id}>
                {item.text}
              </Text>
            ))}
          </View>
        </View>
        <Line height={8} />
        <View style={styles.padding}>
          {checkList.map(item => (
            <CheckBox
              key={item.id}
              item={item}
              onPress={() => toggleCheckBox(item.id)}
            />
          ))}
          <View style={[styles.textInputBox, {height: 100}]}>
            <TextInput
              value={extra}
              multiline
              onChangeText={(e: string) => setExtra(e)}
            />
          </View>
        </View>
        <Line height={8} />
        <View style={styles.padding}>
          <TextInputLabel title={'비밀번호 확인'} />
          <View style={styles.textInputBox}>
            <TextInput
              secureTextEntry
              value={password}
              onChangeText={(e: string) => setPassword(e)}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <Button.Button_Bottom
        title={'탈퇴'}
        onPress={() => console.log('탈퇴')}
      />
    </SafeAreaView>
  );
};

export default WithdrawalScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  padding: {
    paddingHorizontal: width * 48,
    width: '100%',
    paddingVertical: 20,
  },
  descriptionWrapper: {width: '100%', alignItems: 'center'},
  description: {
    fontSize: 13,
    lineHeight: 15.5,
    color: colors.light_gray,
    marginBottom: 20,
  },
  textInputBox: {
    borderRadius: 10,
    backgroundColor: colors.bg_color,
  },
});
