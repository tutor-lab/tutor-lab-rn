import React, { useState, useEffect } from 'react';
import { StepComponentProps } from "react-step-builder";
import 'react-native-gesture-handler';
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Text, Dimensions, TextInput } from 'react-native';
import { height, width, colors, icons, fonts } from '../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Modal, FormInput, SelectInput, Button } from '../../components/common';
import { StackNavigationProp } from '@react-navigation/stack';
import { WithLocalSvg } from 'react-native-svg/src';
import EmailValidator from 'aj-email-validator';
import axios from 'axios';

const CreateAccountStep1 = (props : StepComponentProps) => {

    axios.defaults.baseURL = 'http://3.35.255.192:8081/';
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [pwEqual, setPwEqual] = useState(false);
    const [mobile, setMobile] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [gender, setGender] = useState('');
    const [region, setRegion] = useState('');
    const [city, setCity] = useState('');

    const [states,setStates] = useState<Array<any>>([]);
    const [cities, setCities] = useState<Array<any>>([]);

    const [emailCheckMsg, setEmailCheckMsg] = useState('');
    const [invalidateEmail, setInvalidateEmail] = useState(false);
    const [pwCheckMsg, setPwCheckMsg] = useState('');
    const [invalidatePassword, setInvalidatePassword] = useState(false);
    const [pwEqualCheckMsg, setPwEqualCheckMsg] = useState('');
    const [diffPassword, setDiffPassword] = useState(false);

    useEffect(() => {
        axios.get('addresses/states')
            .then((response) => {
                setStates(response.data)
//                 axios.get('address')
//                 .then((response) => console.log(response.data))
//                 .catch((e) => console.log(e));
            })
            .catch((e) => console.log(e))
    },[]);


    const onEmailChange = (value: string) => {
        setEmail(value);
        if(!EmailValidator(email)) {
            setInvalidateEmail(true);
            setEmailCheckMsg("이메일 형식이 올바르지 않습니다.");
        } else {
            setInvalidateEmail(false);
            setEmailCheckMsg('');
        }
    };
    const onPasswordChange = (value: string) => {
        setPassword(value);
        if(value.length < 6 || value.length > 14) {
            setInvalidatePassword(true);
            setPwCheckMsg("비밀번호를 6~14자 이내로 입력해주세요.");
        } else {
            setInvalidatePassword(false);
            setPwCheckMsg('');
        }
    };
    const compareToPassword = (value: string) => {
        setPasswordCheck(value);
        if(value !== password) {
            console.log('diff');
            setDiffPassword(true);
            setPwEqualCheckMsg("비밀번호가 동일하지 않습니다.");
        } else {
            console.log('equal');
            setDiffPassword(false);
            setPwEqualCheckMsg('');
        }
    };

    const checkForm = () => {
        console.log('check');

        //props.next();
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
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
                    password={false}
                    value={name}
                    placeholder={'    이름'}
                    onChangeText={ (e: string) => setName(e) }
                />
                <FormInput
                    backgroundColor={colors.input}
                    password={false}
                    value={id}
                    placeholder={'    ID'}
                    onChangeText={ (e: string) => setId(e) }
                />
                <FormInput
                    backgroundColor={colors.input}
                    password={false}
                    value={email}
                    placeholder={'    Email'}
                    onChangeText={ (e: string) => onEmailChange(e) }
                />
                <View style={styles.hidden_view}>
                    <TextInput
                        value={emailCheckMsg}
                        style={ invalidateEmail ? styles.reveal_text : styles.hidden_text }
                    />
                </View>
                <FormInput
                    backgroundColor={colors.input}
                    password={true}
                    value={password}
                    placeholder={'    비밀번호 입력(6~14자)'}
                    onChangeText={ (e: string) => onPasswordChange(e) }
                />
                <View style={styles.hidden_view}>
                    <TextInput
                        value={pwCheckMsg}
                        style={ invalidatePassword ? styles.reveal_text : styles.hidden_text }
                    />
                </View>
                <FormInput
                    backgroundColor={colors.input}
                    password={true}
                    value={passwordCheck}
                    placeholder={'    비밀번호 재입력'}
                    onChangeText={ (e: string) => compareToPassword(e) }
                />
                <View style={styles.hidden_view}>
                    <TextInput
                        value={pwEqualCheckMsg}
                        style={ diffPassword ? styles.reveal_text : styles.hidden_text }
                    />
                </View>
                <View style={styles.divider}/>
                <View style={styles.select}>
                    <SelectInput
                        backgroundColor={colors.input}
                        placeholder={'  출생년도'}
                        values={[
                            { label: '2021', value: '2021' },
                            { label: '2020', value: '2020' },
                            { label: '2019', value: '2019' },
                        ]}
                        onChangeValue={ (e:string) => setBirthYear(e) }
                    />
                    <View style={styles.vertical_divider} />
                    <SelectInput
                        backgroundColor={colors.input}
                        selected={gender}
                        placeholder={'  성별'}
                        values={[
                            { label: '남', value: '남' },
                            { label: '여', value: '여' },
                        ]}
                        onChangeValue={ (e:string) => setGender(e) }
                    />
                </View>
                <View style={styles.select}>
                    <SelectInput
                        backgroundColor={colors.input}
                        selected={region}
                        placeholder={'  지역'}
                        values={[...states]}
                        onChangeValue={ (e:string) => setRegion(e) }
                    />
                    <View style={styles.vertical_divider} />
                    <SelectInput
                        backgroundColor={colors.input}
                        selected={city}
                        placeholder={'  시/군/구'}
                        values={[
                            { label: '고양시', value: '고양시' },
                            { label: '과천시', value: '과천시' },
                        ]}
                        onChangeValue={ (e:string) => setCity(e) }
                    />
                </View>
            </View>

            <TouchableOpacity
                style={styles.next_btn}
                activeOpacity={1}
                onPress={ () => checkForm() }
                >
                <View style={styles.btn_box}>
                    <Text style={[fonts[500], styles.btn_text]}>다음</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
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
  title: { fontSize: height * 16.5, color: colors.sub, textAlignVertical: "center" },
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
    height: height * 60,
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
  btn_text: { color: colors.white, fontSize: height * 16.5 },
  divider: { paddingTop: height * 40, },
  select: {
    width: width * 290,
    flexDirection: "row",
    alignContent: "space-between",
  },
  vertical_divider: { paddingRight: width * 10 },
  hidden_view: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  hidden_text: {
    height: 0,
    padding: 0,
    margin: 0,
  },
  reveal_text: {
    paddingTop: 0,
    marginTop: 0,
    fontSize: height * 15,
    color: colors.red,
  }
});