import React, { useState } from 'react';
import { StepComponentProps } from "react-step-builder";
import 'react-native-gesture-handler';
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { height, width, colors, icons, fonts } from '../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Modal, FormInput, SelectInput, Button } from '../../components/common';
import { StackNavigationProp } from '@react-navigation/stack';
import { WithLocalSvg } from 'react-native-svg/src';

const CreateAccountStep1 = (props : StepComponentProps) => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [pwEqual, setPwEqual] = useState(false);
    const [mobile, setMobile] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [gender, setGender] = useState('');
    //const [, setName] = useState('');

    const onNameChange = (value: string) => {
        setName(value);
    };
    const onIDChange = (value: string) => {
        setId(value);
    };
    const onPasswordChange = (value: string) => {
        setPassword(value);
    };
    const compareToPassword = (value: string) => {
        if(value === password) console.log('비밀번호 일치함');
        else console.log('불일치');
    };
    const onBirthYearSelected = (value: string) => {
        console.log(value);
        setBirthYear(value);
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
             <View style={styles.appbar}>
                <View style={styles.padding}>
                    <View style={styles.icon_button}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => !props.isFirst ? props.prev() : console.log('로그인 화면으로 돌아감.. 어떻게?')}
                            style={styles.icon}>
                            <WithLocalSvg asset={icons.back} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.header}>
                        <Text style={[fonts[500], styles.title]}>회원가입({props.current}/3)</Text>
                    </View>
                </View>
            </View>
            <View style={styles.form}>
                <FormInput
                    backgroundColor={colors.input}
                    value={name}
                    placeholder={'      이름'}
                    onChangeText={(e: string) => onNameChange(e) }
                />
                <FormInput
                    backgroundColor={colors.input}
                    value={id}
                    placeholder={'      ID(Email)'}
                    onChangeText={(e: string) => onIDChange(e) }
                />
                <FormInput
                    backgroundColor={colors.input}
                    value={password}
                    placeholder={'      비밀번호 입력(6~14자)'}
                    onChangeText={(e: string) => onPasswordChange(e) }
                />
                <FormInput
                    backgroundColor={colors.input}
                    value={passwordCheck}
                    placeholder={'      비밀번호 재입력'}
                    onChangeText={(e: string) => compareToPassword(e) }
                />
                <View style={styles.divider}/>
                <View style={styles.select}>
                    <SelectInput
                        backgroundColor={colors.input}
                        selected={birthYear}
                        placeholder={'  출생년도'}
                        values={[
                            { label: '2021', value: '2021' },
                            { label: '2020', value: '2020' },
                            { label: '2019', value: '2019' },
                        ]}
                        onChangeValue={ (e:string) => onBirthYearSelected(e) }
                    />
                </View>
            </View>

            <TouchableOpacity
                style={styles.next_btn}
                activeOpacity={1}
                onPress={ () => props.next() }
                >
                <View style={styles.btn_box}>
                    <Text style={[fonts[500], styles.btn_text]}>다음</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default CreateAccountStep1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.bg_color,
  },
  appbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: height * 60,
    backgroundColor: colors.bg_color,
    width: '100%',
  },
  header: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  padding: {
    flex: 1,
    paddingHorizontal: width * 10,
    flexDirection: "row",
    alignContent: "space-between",
  },
  icon_button: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    justifyContent: "center",
  },
  icon: { alignItems: 'center', width: width * 24 },
  title: { fontSize: height * 16, color: colors.sub, textAlignVertical: "center" },
  form: {
    paddingTop: height * 40,
    position: 'absolute',
    left: 0,
    right: 0,
    top: height * 60,
    alignSelf: "stretch", //다른 컴포넌트(크기가 정해진) 먼저 배치하고 남은 높이를 배정하고 싶을때 꿀팁!
    alignItems: "center",
    justifyContent: "center",
  },
  next_btn: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 52,
  },
  btn_box: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: colors.main,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text: { color: colors.white, fontSize: height * 15.5 },
  divider: {paddingTop: height * 40,},
  select: {
    width: width * 290,
    marginBottom: height * 10,
    flexDirection: "row",
    alignContent: "space-between",
  }
});