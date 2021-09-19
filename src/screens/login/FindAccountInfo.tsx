import React, {useState} from 'react';
import {View,SafeAreaView,StyleSheet,Image} from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack';
import {Modal, TextInput} from '../../components/common';
import {LoginBtn, TradeMark, Title, SubTitle} from '../../components/login';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {height, width, colors, icons} from '../../constants';
import EmailValidator from 'aj-email-validator'
import axios from 'axios';

type Props = {
    email: string;
    visible: bool;
    setVisible: (visible: bool) => void;
    onPressModal: () => void;
};

const FindAccountInfo =
    ({email, visible, setVisible, onPressModal}: Props) => {

    return (
          <Modal.Container visible={visible} height={height * 263} >
              <View style={styles.modalContainer}>
                  <View style={styles.logoContainer}>
                      <Image style={styles.icon} source={icons.logo} resizeMode="contain" />
                  </View>
                  <Modal.Title text={'아래 이메일로 계정 정보를 보냈습니다.'}/>
                      <View style={styles.modalDescriptionContainer}>
                            <Modal.Description text={email} />
                      </View>
                  <Modal.OneBtn text={'확인'} onPress={ () => onPressModal() }/>
              </View>
          </Modal.Container>
    );
};

export default FindAccountInfo;

const styles = StyleSheet.create({
    modalContainer: {
        paddingTop: height * 10,
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    iconContainer: { paddingBottom: height * 12 },
    icon: {
        height: height * 27,
        width: width * 27,
        resizeMode: 'contain',
    },
    modalDescriptionContainer: {
        paddingTop: height * 2,
        marginBottom: height * 6,
    },
});
