import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import {Header, Line, SelectInputFull, Button} from '../../components/common';
import {colors, height} from '../../constants';
import RNPickerSelect from 'react-native-picker-select';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type Props = {navigation: any};
const ContactUsScreen = ({navigation}: Props) => {
  const [question, setQuestion] = useState<string>('');

  const sendInfo = () => {};

  return (
    // <SafeAreaView
    //   style={{
    //     backgroundColor: colors.white,
    //     flexDirection: 'column', // inner items will be added vertically
    //     flex: 1,
    //   }}>
    // <View style={{flex: 1}}>
    //   <Header.Basic title={'문의하기'} navigation={navigation} />
    // </View>
    //   <View style={styles.container}>
    // <View style={{marginTop: 30}}>
    //   <Text style={{color: colors.light_gray}}>
    //     튜터랩을 이용하면서 생긴 불편사항이나 개선사항을 알려주세요.
    //     전달해주신 소중한 의견으로 더 나은 튜터랩이 되도록 노력하겠습니다
    //   </Text>
    // </View>
    // <View style={{marginTop: 30}}>
    //   <Line height={14} />
    // </View>
    // <ScrollView>
    //   <View style={styles.val_margintop}>
    //     <SelectInputFull
    //       backgroundColor={colors.input}
    //       placeholder={'오류 문의'}
    //       values={[
    //         {label: '튜터 문의', value: '1'},
    //         {label: '튜티 문의', value: '2'},
    //         {label: '강의 문의', value: '3'},
    //         {label: '기타', value: '4'},
    //       ]}
    //       onChangeValue={(e: string) => setQuestion(e)}
    //     />
    //   </View>
    //   <View style={{marginTop: 10}}>
    //     <TextInput
    //       style={styles.input}
    //       placeholder="제목을 입력해주세요. (20자이내)"
    //     />
    //   </View>
    //   <KeyboardAwareScrollView>
    //     <View style={{marginTop: 10, padding: 5}}>
    //       <TextInput
    //         style={styles.textArea}
    //         underlineColorAndroid="transparent"
    //         placeholder="의견을 입력해주세요."
    //         placeholderTextColor="grey"
    //         numberOfLines={10}
    //         multiline={true}
    //       />
    //     </View>
    //   </KeyboardAwareScrollView>
    // </ScrollView>
    // <View>
    //   <Button.Button_Bottom title={'문의'} onPress={() => sendInfo()} />
    // </View>
    //   </View>
    // </SafeAreaView>
    <View style={styles.container}>
      <View style={styles.case1}>
        <Header.Basic title={'문의하기'} navigation={navigation} />
        <View style={{marginTop: 30}}>
          <Text
            style={{color: colors.light_gray, marginLeft: 30, marginRight: 30}}>
            튜터랩을 이용하면서 생긴 불편사항이나 개선사항을 알려주세요.
            전달해주신 소중한 의견으로 더 나은 튜터랩이 되도록 노력하겠습니다
          </Text>
        </View>
      </View>
      <View style={styles.case2}>
        <View style={{marginTop: 30}}>
          <Line height={14} />
          <ScrollView>
            <View style={styles.val_margintop}>
              <SelectInputFull
                backgroundColor={colors.input}
                placeholder={'오류 문의'}
                values={[
                  {label: '튜터 문의', value: '1'},
                  {label: '튜티 문의', value: '2'},
                  {label: '강의 문의', value: '3'},
                  {label: '기타', value: '4'},
                ]}
                onChangeValue={(e: string) => setQuestion(e)}
              />
            </View>
            <View style={{marginTop: 10}}>
              <TextInput
                style={styles.input}
                placeholder="제목을 입력해주세요. (20자이내)"
              />
            </View>
            <KeyboardAwareScrollView>
              <View style={{marginTop: 10, padding: 5}}>
                <TextInput
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholder="의견을 입력해주세요."
                  placeholderTextColor="grey"
                  numberOfLines={10}
                  multiline={true}
                />
              </View>
            </KeyboardAwareScrollView>
          </ScrollView>
        </View>
      </View>
      <View style={styles.case3}>
        <View style={{bottom: -80}}>
          <Button.Button_Bottom title={'문의'} onPress={() => sendInfo()} />
        </View>
      </View>
    </View>
  );
};
var styles = StyleSheet.create({
  // container: {
  //   backgroundColor: colors.white,
  //   height: 800,
  //   width: '100%',
  //   paddingLeft: 30,
  //   paddingRight: 40,
  // },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  case1: {
    flex: 1,
    backgroundColor: colors.white,
  },
  case2: {
    flex: 3,
    backgroundColor: colors.white,
    marginLeft: 30,
    marginRight: 30,
  },
  case3: {
    flex: 1,
    backgroundColor: colors.white,
  },
  val_margintop: {
    marginTop: 30,
    width: '100%',
  },
  input: {
    height: 50,
    margin: 1,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.bg_color,
    borderRadius: 10,
    backgroundColor: colors.bg_color,
  },
  textArea: {
    height: 150,
    backgroundColor: colors.bg_color,
    borderRadius: 10,
  },
});
export default ContactUsScreen;
